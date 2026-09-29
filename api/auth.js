/**
 * Consolidated Auth API Route
 * Handles: login, signup, me, profile, rewards, and prestige
 * 
 * POST /api/auth?action=login - Authenticate user
 * POST /api/auth?action=signup - Create new user
 * GET /api/auth?action=me - Get current user from token
 * GET /api/auth?action=rewards - Read progression; verified actions award rewards
 * POST /api/auth?action=prestige - Prestige at level 100
 * POST /api/auth?action=flag-rename - Admin-only: require a user to rename
 * GET /api/auth?action=google-start - Begin Google OAuth sign in
 * GET /api/auth?action=google-callback - Complete Google OAuth sign in
 * GET /api/auth?action=link-google - Begin linking Google to the current user
 * POST /api/auth?action=unlink-google - Unlink Google from the current user
 * GET /api/auth?action=roblox-start - Begin Roblox OAuth sign in (PKCE)
 * GET /api/auth?action=roblox-callback - Complete Roblox OAuth sign in or linking
 * GET /api/auth?action=link-roblox - Begin linking Roblox to the current user
 * POST /api/auth?action=unlink-roblox - Unlink Roblox from the current user
 * GET /api/auth?action=roblox-player - The current user's linked Roblox account and in-game stats
 * GET /api/auth?action=hub - BattlePoints, daily streak, quests, Season Pass and looks (lib/economy.js)
 * POST /api/auth?action=claim - Claim { what: daily | quest (slot) | chest | pass }
 * POST /api/auth?action=buy - Buy a look with BattlePoints { item }
 * POST /api/auth?action=equip - Wear a frame or title { kind, item }
 * GET/PUT /api/auth?action=notification-preferences - Manage email notification settings
 * GET /api/auth?action=unsubscribe - Public signed-token email unsubscribe
 */

const { connectToDatabase } = require('../lib/mongodb');
const User = require('../lib/models/User');
const Animal = require('../lib/models/Animal');
const crypto = require('crypto');
const { notifyDiscord } = require('../lib/discord');
const { verifyToken, signToken, verifyPurposeToken } = require('../lib/auth');
const { robloxPlayerCard } = require('../lib/roblox-game');
const { RewardError, awardUserReward, buyItem, claimChest, claimDaily, claimPass, claimQuest, economyForUser, equipItem, showsForUser } = require('../lib/rewards');
const { ITEM_BY_ID, economySummary, normalizeEconomy } = require('../lib/economy');
const { setCorsHeaders } = require('../lib/cors');
const { enforceRequestSecurity } = require('../lib/request-security');
const { consumeRateLimit, clearRateLimit, clientAddress } = require('../lib/distributed-rate-limit');
const { hiddenName, isNameHidden, validatePublicName } = require('../lib/moderation');
const { AdminError, ensureOwnerRole, flagBrokenName, isMuted, isOwnerAccount, listUsers, runAction, summary: adminSummary } = require('../lib/admin');
const { EPISODE_BY_ID, FOLLOW_PLATFORMS, minWatchSeconds } = require('../lib/shows');
const {
    normalizeNotificationPreferences,
    sendEmail,
    verifyUnsubscribeToken
} = require('../lib/email');
const { 
    xpToNext, 
    processPrestige,
    buildProgressionPayload 
} = require('../lib/xpSystem');

const PASSWORD_MIN_LENGTH = 8;
const AUTH_COOKIE_NAME = 'abs_auth_token';
const TOKEN_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;
const VERIFICATION_TOKEN_HOURS = 24;
const RESET_TOKEN_MINUTES = 60;
const LOGIN_LIMIT = { windowMs: 15 * 60 * 1000, ipMax: 30, identifierMax: 6 };
const SIGNUP_LIMIT = { windowMs: 60 * 60 * 1000, ipMax: 10, identifierMax: 5 };
const GENERIC_AUTH_ERROR = 'Unable to complete this request. Please check your details and try again later.';
const INVALID_LOGIN_ERROR = 'Invalid credentials. If you use Google sign-in or Roblox sign-in, continue with that button.';
const GOOGLE_PROVIDER = 'google';
const GOOGLE_OAUTH_SCOPES = ['openid', 'email', 'profile'];
const GOOGLE_STATE_COOKIE = 'abs_google_oauth_state';
const GOOGLE_STATE_MAX_AGE_SECONDS = 10 * 60;
const GOOGLE_AUTO_LINK_VERIFIED_EMAILS = process.env.GOOGLE_AUTO_LINK_VERIFIED_EMAILS === 'true';
const ROBLOX_PROVIDER = 'roblox';
const ROBLOX_OAUTH_SCOPES = ['openid', 'profile'];
const ROBLOX_STATE_COOKIE = 'abs_roblox_oauth';
const ROBLOX_STATE_MAX_AGE_SECONDS = 10 * 60;
const ROBLOX_OAUTH_BASE = 'https://apis.roblox.com/oauth/v1';
// Roblox never shares an email address. Accounts created by Roblox sign-in get a
// unique address on the reserved .invalid TLD (RFC 2606), so nothing can ever be
// delivered to it; the API reports these accounts as having no email.
const NO_EMAIL_DOMAIN = 'no-email.invalid';

function normalizeIdentifier(value) {
    return String(value || '').trim().toLowerCase();
}

function authAttemptPolicies(kind, req, identifier, config) {
    return [
        { scope: `${kind}-attempt-ip`, identity: clientAddress(req), max: config.ipMax, windowMs: config.windowMs },
        { scope: `${kind}-attempt-id`, identity: normalizeIdentifier(identifier) || 'unknown', max: config.identifierMax, windowMs: config.windowMs }
    ];
}

async function consumeAuthAttempt(kind, req, identifier, config) {
    const results = await Promise.all(authAttemptPolicies(kind, req, identifier, config).map(consumeRateLimit));
    return results.every((result) => result.allowed);
}

async function clearAuthAttempt(kind, req, identifier, config) {
    const [, identifierPolicy] = authAttemptPolicies(kind, req, identifier, config);
    await clearRateLimit(identifierPolicy);
}

function validatePasswordPolicy(password) {
    if (typeof password !== 'string' || password.length < PASSWORD_MIN_LENGTH) {
        return `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;
    }
    return null;
}

function hashToken(token) {
    return crypto.createHash('sha256').update(token).digest('hex');
}

function createOneTimeToken() {
    const token = crypto.randomBytes(32).toString('hex');
    return { token, tokenHash: hashToken(token) };
}

function getBaseUrl(req) {
    // Production links (emails, OAuth redirects) must use the site's own domain:
    // VERCEL_URL is the per-deployment *.vercel.app address, which can sit
    // behind Vercel's login wall and does not share the site's auth cookie.
    const production = process.env.VERCEL_ENV === 'production'
        ? (process.env.VERCEL_PROJECT_PRODUCTION_URL || 'animalbattlestats.com')
        : null;
    const configured = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL || production || process.env.VERCEL_URL;
    if (configured) {
        return configured.startsWith('http') ? configured.replace(/\/$/, '') : `https://${configured.replace(/\/$/, '')}`;
    }
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    return `${protocol}://${req.headers.host}`;
}

async function sendVerificationEmail(req, user, token) {
    const url = `${getBaseUrl(req)}/api/auth?action=verify-email&email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(token)}`;
    await sendEmail({
        to: user.email,
        subject: 'Verify your Animal Battle Stats email',
        text: `Verify your email by opening this link: ${url}`,
        html: `<p>Welcome to Animal Battle Stats.</p><p><a href="${url}">Verify your email</a></p>`
    });
}

async function sendPasswordResetEmail(req, user, token) {
    const url = `${getBaseUrl(req)}/reset-password?email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(token)}`;
    await sendEmail({
        to: user.email,
        subject: 'Reset your Animal Battle Stats password',
        text: `Reset your password by opening this link: ${url}. This link expires in ${RESET_TOKEN_MINUTES} minutes.`,
        html: `<p>Reset your Animal Battle Stats password.</p><p><a href="${url}">Reset password</a></p>`
    });
}

function getSafeReturnPath(value) {
    const raw = String(value || '').trim();
    if (!raw || !raw.startsWith('/') || raw.startsWith('//') || raw.includes('://')) {
        return '/';
    }
    return raw;
}

function buildRedirectUrl(req, path, params = {}) {
    const url = new URL(path, getBaseUrl(req));
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            url.searchParams.set(key, String(value));
        }
    });
    return url.toString();
}

function redirectTo(res, location) {
    res.statusCode = 302;
    res.setHeader('Location', location);
    return res.end();
}

function parseCookies(req) {
    return String(req.headers.cookie || '').split(';').reduce((cookies, pair) => {
        const index = pair.indexOf('=');
        if (index > -1) {
            cookies[pair.slice(0, index).trim()] = decodeURIComponent(pair.slice(index + 1).trim());
        }
        return cookies;
    }, {});
}

function getRequestToken(req) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.split(' ')[1];
    }
    return parseCookies(req)[AUTH_COOKIE_NAME] || null;
}

function appendSetCookie(res, cookie) {
    const existing = res.getHeader('Set-Cookie');
    if (!existing) {
        res.setHeader('Set-Cookie', cookie);
    } else if (Array.isArray(existing)) {
        res.setHeader('Set-Cookie', [...existing, cookie]);
    } else {
        res.setHeader('Set-Cookie', [existing, cookie]);
    }
}

function setAuthCookie(res, token) {
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    appendSetCookie(res, `${AUTH_COOKIE_NAME}=${encodeURIComponent(token)}; Max-Age=${TOKEN_MAX_AGE_SECONDS}; Path=/; HttpOnly; SameSite=Lax${secure}`);
}

function clearAuthCookie(res) {
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    appendSetCookie(res, `${AUTH_COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax${secure}`);
}

function setGoogleStateCookie(res, state) {
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    appendSetCookie(res, `${GOOGLE_STATE_COOKIE}=${encodeURIComponent(state)}; Max-Age=${GOOGLE_STATE_MAX_AGE_SECONDS}; Path=/; HttpOnly; SameSite=Lax${secure}`);
}

function clearGoogleStateCookie(res) {
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    appendSetCookie(res, `${GOOGLE_STATE_COOKIE}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax${secure}`);
}

function signSessionToken(user) {
    return signToken(
        { userId: user._id, username: user.username },
        { expiresIn: '7d' }
    );
}

function isValidEmail(value) {
    return typeof value === 'string'
        && value.length <= 254
        && /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(value);
}

function hasRealEmail(user) {
    return Boolean(user?.email) && !String(user.email).endsWith(`@${NO_EMAIL_DOMAIN}`);
}

function robloxAccountPayload(user) {
    const account = user?.roblox;
    if (!account?.userId) return null;
    return {
        userId: account.userId,
        username: account.username || null,
        displayName: account.displayName || account.username || null,
        profileUrl: `https://www.roblox.com/users/${account.userId}/profile`,
        linkedAt: account.linkedAt || null
    };
}

function buildUserPayload(user) {
    const authProviders = (user.authProviders || []).map((provider) => ({
        provider: provider.provider,
        email: provider.email,
        linkedAt: provider.linkedAt
    }));
    const roblox = robloxAccountPayload(user);

    return {
        id: user._id,
        username: user.username,
        email: hasRealEmail(user) ? user.email : null,
        hasEmail: hasRealEmail(user),
        emailVerified: Boolean(user.emailVerified),
        emailNotifications: normalizeNotificationPreferences(user.emailNotifications || {}),
        authProviders,
        googleLinked: authProviders.some((provider) => provider.provider === GOOGLE_PROVIDER),
        robloxLinked: Boolean(roblox),
        roblox,
        coins: user.battlePoints || 0,
        economy: economySummary(normalizeEconomy(user.economy)),
        displayName: user.displayName,
        avatar: user.avatar,
        role: user.role,
        requiresUsernameChange: Boolean(user.requiresUsernameChange),
        moderationReason: user.requiresUsernameChange ? user.moderationReason || null : null,
        mutedUntil: isMuted(user) ? user.mutedUntil : null,
        xp: user.xp || 0,
        level: user.level || 1,
        xpToNext: xpToNext(user.level || 1),
        prestige: user.prestige || 0,
        lifetimeXp: user.lifetimeXp || 0,
        battlePoints: user.battlePoints || 0,
        isPrestigeReady: (user.level || 1) >= 100,
        profileAnimal: user.profileAnimal || null,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin
    };
}


module.exports = async function handler(req, res) {
    setCorsHeaders(req, res, {
        methods: 'GET, POST, PUT, OPTIONS',
        headers: 'Content-Type, Authorization',
        credentials: true
    });

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const publicMutationActions = new Set([
        'login', 'signup', 'verify-email', 'forgot-password', 'reset-password', 'unsubscribe'
    ]);
    if (!enforceRequestSecurity(req, res, {
        maxBodyBytes: 32 * 1024,
        allowUnauthenticated: publicMutationActions.has(req.query?.action)
    })) return;

    const action = req.query.action;

    // Which sign-in providers are set up, so the login page only offers working ones.
    if (action === 'providers') {
        if (req.method !== 'GET') return res.status(405).json({ success: false, error: 'Method not allowed' });
        res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
        return res.status(200).json({ success: true, data: { google: Boolean(getGoogleConfig(req)), roblox: Boolean(getRobloxConfig(req)) } });
    }

    try {
        await connectToDatabase();

        switch (action) {
            case 'login':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleLogin(req, res);
            
            case 'signup':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleSignup(req, res);
            
            case 'google-start':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleGoogleStart(req, res, 'login');

            case 'google-callback':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleGoogleCallback(req, res);

            case 'link-google':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleGoogleStart(req, res, 'link');

            case 'unlink-google':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleUnlinkGoogle(req, res);

            case 'roblox-start':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return handleRobloxStart(req, res, 'login');

            case 'link-roblox':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return handleRobloxStart(req, res, 'link');

            case 'roblox-callback':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleRobloxCallback(req, res);

            case 'unlink-roblox':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleUnlinkRoblox(req, res);

            case 'roblox-player':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleRobloxPlayer(req, res);

            case 'hub':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleHub(req, res);

            case 'claim':
            case 'buy':
            case 'equip':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleEconomyAction(req, res, action);

            case 'verify-email':
                if (req.method !== 'GET' && req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleVerifyEmail(req, res);

            case 'forgot-password':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleForgotPassword(req, res);

            case 'reset-password':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleResetPassword(req, res);

            case 'logout':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                clearAuthCookie(res);
                return res.status(200).json({ success: true, message: 'Logged out' });

            case 'me':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleMe(req, res);
            
            case 'profile':
                if (req.method === 'GET') {
                    return await handleGetProfile(req, res);
                } else if (req.method === 'PUT' || req.method === 'POST') {
                    return await handleUpdateProfile(req, res);
                }
                return res.status(405).json({ success: false, error: 'Method not allowed' });

            case 'notification-preferences':
                if (req.method === 'GET') {
                    return await handleGetNotificationPreferences(req, res);
                } else if (req.method === 'PUT') {
                    return await handleUpdateNotificationPreferences(req, res);
                }
                return res.status(405).json({ success: false, error: 'Method not allowed' });

            case 'unsubscribe':
                if (req.method !== 'GET' && req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleUnsubscribe(req, res);
            
            case 'rewards':
                return await handleRewards(req, res);
            
            case 'prestige':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handlePrestige(req, res);

            case 'flag-rename':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleFlagRename(req, res);

            case 'admin':
                if (req.method !== 'GET' && req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleAdmin(req, res);

            case 'shows':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleShows(req, res);

            case 'watch-start':
            case 'watch':
            case 'follow':
                if (req.method !== 'POST') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleShowReward(req, res, action);
            
            case 'user':
                if (req.method !== 'GET') {
                    return res.status(405).json({ success: false, error: 'Method not allowed' });
                }
                return await handleGetPublicProfile(req, res);
            
            default:
                return res.status(400).json({ success: false, error: 'Invalid action' });
        }
    } catch (error) {
        console.error('Auth error:', error);
        res.status(500).json({ success: false, error: 'Server error. Please try again.' });
    }
};


function getGoogleConfig(req) {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || `${getBaseUrl(req)}/api/auth?action=google-callback`;

    if (!clientId || !clientSecret) {
        return null;
    }

    return { clientId, clientSecret, redirectUri };
}

function encodeGoogleState(payload) {
    return Buffer.from(JSON.stringify(payload)).toString('base64url');
}

function decodeGoogleState(value) {
    try {
        return JSON.parse(Buffer.from(String(value || ''), 'base64url').toString('utf8'));
    } catch (_err) {
        return null;
    }
}

function getAuthenticatedUserFromRequest(req) {
    const token = getRequestToken(req);
    if (!token) return null;
    return verifyToken(token);
}

function findLinkedProvider(user, provider = GOOGLE_PROVIDER) {
    return (user.authProviders || []).find((authProvider) => authProvider.provider === provider);
}

function addOrUpdateGoogleProvider(user, googleProfile) {
    if (!user.authProviders) user.authProviders = [];

    const linkedProvider = findLinkedProvider(user);
    if (linkedProvider) {
        linkedProvider.providerUserId = googleProfile.sub;
        linkedProvider.email = googleProfile.email;
        linkedProvider.linkedAt = linkedProvider.linkedAt || new Date();
        return;
    }

    user.authProviders.push({
        provider: GOOGLE_PROVIDER,
        providerUserId: googleProfile.sub,
        email: googleProfile.email,
        linkedAt: new Date()
    });
}

function googleUsernameBase(googleProfile) {
    const emailPrefix = String(googleProfile.email || '').split('@')[0];
    const namePrefix = String(googleProfile.name || '').replace(/[^a-zA-Z0-9_]/g, '').slice(0, 20);
    return emailPrefix || namePrefix;
}

// A free username close to `preferred`; `prefix` names the fallbacks (google_user, google_1a2b...).
async function buildUniqueUsername(preferred, prefix = 'google') {
    const fallback = `${prefix}_user`;
    const base = String(preferred || fallback)
        .replace(/[^a-zA-Z0-9_]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '')
        .slice(0, 16) || fallback;
    const normalizedBase = base.length >= 3 ? base : `${base}_abs`;

    for (let index = 0; index < 50; index += 1) {
        const suffix = index === 0 ? '' : String(index);
        const candidate = `${normalizedBase}${suffix}`.slice(0, 20);
        const exists = await User.exists({ username: { $regex: new RegExp(`^${candidate.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i') } });
        if (!exists) return candidate;
    }

    return `${prefix}_${crypto.randomBytes(5).toString('hex')}`.slice(0, 20);
}

async function fetchGoogleProfile(req, code) {
    const googleConfig = getGoogleConfig(req);
    if (!googleConfig) {
        throw new Error('Google OAuth is not configured.');
    }

    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            code,
            client_id: googleConfig.clientId,
            client_secret: googleConfig.clientSecret,
            redirect_uri: googleConfig.redirectUri,
            grant_type: 'authorization_code'
        })
    });

    if (!tokenResponse.ok) {
        throw new Error('Google token exchange failed.');
    }

    const tokenPayload = await tokenResponse.json();
    const profileResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenPayload.access_token}` }
    });

    if (!profileResponse.ok) {
        throw new Error('Google profile fetch failed.');
    }

    const profile = await profileResponse.json();
    if (!profile.sub || !profile.email) {
        throw new Error('Google did not return the required profile details.');
    }

    return {
        sub: String(profile.sub),
        email: normalizeIdentifier(profile.email),
        emailVerified: profile.email_verified === true || profile.email_verified === 'true',
        name: profile.name || profile.email
    };
}

async function handleGoogleStart(req, res, mode = 'login') {
    const googleConfig = getGoogleConfig(req);
    const returnTo = getSafeReturnPath(req.query.returnTo || req.headers.referer);

    if (!googleConfig) {
        return redirectTo(res, buildRedirectUrl(req, mode === 'link' ? '/profile' : '/login', {
            google_error: 'not_configured',
            message: 'Google sign-in is not configured yet.'
        }));
    }

    const authUser = getAuthenticatedUserFromRequest(req);
    if (mode === 'link' && !authUser) {
        return redirectTo(res, buildRedirectUrl(req, '/login', {
            google_error: 'login_required',
            message: 'Log in before linking a Google account.',
            returnTo: '/profile'
        }));
    }

    const nonce = crypto.randomBytes(24).toString('hex');
    const state = encodeGoogleState({
        nonce,
        mode,
        returnTo: mode === 'link' ? '/profile' : returnTo,
        userId: mode === 'link' ? authUser.id : null,
        createdAt: Date.now()
    });
    setGoogleStateCookie(res, nonce);

    const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    authUrl.searchParams.set('client_id', googleConfig.clientId);
    authUrl.searchParams.set('redirect_uri', googleConfig.redirectUri);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('scope', GOOGLE_OAUTH_SCOPES.join(' '));
    authUrl.searchParams.set('state', state);
    authUrl.searchParams.set('prompt', 'select_account');

    return redirectTo(res, authUrl.toString());
}

function googleErrorRedirect(req, res, state, code, message) {
    const destination = state?.mode === 'link' ? '/profile' : '/login';
    return redirectTo(res, buildRedirectUrl(req, destination, {
        google_error: code,
        message
    }));
}

async function handleGoogleCallback(req, res) {
    const state = decodeGoogleState(req.query.state);
    const expectedNonce = parseCookies(req)[GOOGLE_STATE_COOKIE];
    clearGoogleStateCookie(res);

    if (req.query.error) {
        return googleErrorRedirect(req, res, state, 'cancelled', 'Google sign-in was cancelled.');
    }

    if (!state || !expectedNonce || state.nonce !== expectedNonce || Date.now() - Number(state.createdAt || 0) > GOOGLE_STATE_MAX_AGE_SECONDS * 1000) {
        return googleErrorRedirect(req, res, state, 'invalid_state', 'Google sign-in expired. Please try again.');
    }

    try {
        const googleProfile = await fetchGoogleProfile(req, String(req.query.code || ''));

        if (!googleProfile.emailVerified) {
            return googleErrorRedirect(req, res, state, 'unverified_email', 'Google did not verify this email address.');
        }

        const alreadyLinkedUser = await User.findOne({
            authProviders: {
                $elemMatch: {
                    provider: GOOGLE_PROVIDER,
                    providerUserId: googleProfile.sub
                }
            }
        });

        if (state.mode === 'link') {
            const authUser = getAuthenticatedUserFromRequest(req);
            if (!authUser || String(authUser.id) !== String(state.userId)) {
                return googleErrorRedirect(req, res, state, 'login_required', 'Log in before linking a Google account.');
            }

            const currentUser = await User.findById(state.userId);
            if (!currentUser) {
                return googleErrorRedirect(req, res, state, 'login_required', 'Log in before linking a Google account.');
            }

            if (alreadyLinkedUser && String(alreadyLinkedUser._id) !== String(currentUser._id)) {
                return googleErrorRedirect(req, res, state, 'already_linked', 'That Google account is already linked to another Animal Battle Stats account.');
            }

            addOrUpdateGoogleProvider(currentUser, googleProfile);
            // Accounts made by Roblox sign-in have no email; adopt Google's verified one if it is free.
            if (!hasRealEmail(currentUser) && !await User.exists({ email: googleProfile.email, _id: { $ne: currentUser._id } })) {
                currentUser.email = googleProfile.email;
            }
            if (currentUser.email === googleProfile.email) currentUser.emailVerified = true;
            await currentUser.save();

            const token = signSessionToken(currentUser);
            setAuthCookie(res, token);
            return redirectTo(res, buildRedirectUrl(req, state.returnTo || '/profile', { google_linked: '1' }));
        }

        if (alreadyLinkedUser) {
            alreadyLinkedUser.lastLogin = new Date();
            await alreadyLinkedUser.save();
            const token = signSessionToken(alreadyLinkedUser);
            setAuthCookie(res, token);
            await notifyDiscord('login', { username: alreadyLinkedUser.username }, req);
            return redirectTo(res, getSafeReturnPath(state.returnTo));
        }

        const existingEmailUser = await User.findOne({ email: googleProfile.email });
        if (existingEmailUser) {
            if (GOOGLE_AUTO_LINK_VERIFIED_EMAILS && existingEmailUser.emailVerified && googleProfile.emailVerified) {
                addOrUpdateGoogleProvider(existingEmailUser, googleProfile);
                existingEmailUser.lastLogin = new Date();
                await existingEmailUser.save();
                const token = signSessionToken(existingEmailUser);
                setAuthCookie(res, token);
                return redirectTo(res, getSafeReturnPath(state.returnTo));
            }

            return googleErrorRedirect(
                req,
                res,
                state,
                'existing_account',
                'An account already uses that email. Log in first, then use Link Google account from your profile.'
            );
        }

        const googleBase = googleUsernameBase(googleProfile);
        const username = await buildUniqueUsername(validatePublicName(googleBase, { newName: true }).valid ? googleBase : '', 'google');
        const googleName = String(googleProfile.name || '').slice(0, 30);
        const user = new User({
            username,
            email: googleProfile.email,
            displayName: googleName && validatePublicName(googleName, { newName: true }).valid ? googleName : username,
            emailVerified: true,
            authProviders: [{
                provider: GOOGLE_PROVIDER,
                providerUserId: googleProfile.sub,
                email: googleProfile.email,
                linkedAt: new Date()
            }]
        });

        await user.save();
        const token = signSessionToken(user);
        setAuthCookie(res, token);
        await notifyDiscord('signup', { username: user.username }, req);
        return redirectTo(res, getSafeReturnPath(state.returnTo));
    } catch (error) {
        console.error('Google OAuth callback error:', error);
        return googleErrorRedirect(req, res, state, 'oauth_failed', 'Google sign-in failed. Please try again.');
    }
}

async function handleUnlinkGoogle(req, res) {
    const authUser = getAuthenticatedUserFromRequest(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const user = await User.findById(authUser.id).select('+password');
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    const hasPassword = Boolean(user.password);
    if (!hasPassword) {
        return res.status(400).json({
            success: false,
            error: 'Add a password to your account before unlinking Google.'
        });
    }

    const originalCount = (user.authProviders || []).length;
    user.authProviders = (user.authProviders || []).filter((provider) => provider.provider !== GOOGLE_PROVIDER);

    if (user.authProviders.length === originalCount) {
        return res.status(400).json({ success: false, error: 'No Google account is linked.' });
    }

    await user.save();
    return res.status(200).json({
        success: true,
        message: 'Google account unlinked.',
        data: { user: buildUserPayload(user) }
    });
}

// ==================== ROBLOX SIGN-IN ====================
// Authorization code flow with PKCE and the client secret. The code verifier,
// nonce and mode live in a short-lived signed HttpOnly cookie scoped to this API;
// Roblox only ever sees the nonce (as `state`) and the S256 challenge.

function getRobloxConfig(req) {
    const clientId = process.env.ROBLOX_CLIENT_ID;
    const clientSecret = process.env.ROBLOX_CLIENT_SECRET;
    const redirectUri = process.env.ROBLOX_REDIRECT_URI || `${getBaseUrl(req)}/api/auth?action=roblox-callback`;

    if (!clientId || !clientSecret) {
        return null;
    }

    return { clientId, clientSecret, redirectUri };
}

function setRobloxStateCookie(res, value) {
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    appendSetCookie(res, `${ROBLOX_STATE_COOKIE}=${encodeURIComponent(value)}; Max-Age=${ROBLOX_STATE_MAX_AGE_SECONDS}; Path=/api/auth; HttpOnly; SameSite=Lax${secure}`);
}

function clearRobloxStateCookie(res) {
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    appendSetCookie(res, `${ROBLOX_STATE_COOKIE}=; Max-Age=0; Path=/api/auth; HttpOnly; SameSite=Lax${secure}`);
}

function sameSecret(a, b) {
    const left = Buffer.from(String(a || ''));
    const right = Buffer.from(String(b || ''));
    return left.length > 0 && left.length === right.length && crypto.timingSafeEqual(left, right);
}

function robloxRedirect(req, res, mode, path, params) {
    return redirectTo(res, buildRedirectUrl(req, path || (mode === 'link' ? '/profile' : '/login'), params));
}

function robloxErrorRedirect(req, res, state, code, message) {
    const link = state?.mode === 'link';
    return robloxRedirect(req, res, state?.mode, link ? '/profile' : '/login', {
        roblox_error: code,
        message,
        tab: link ? 'roblox' : undefined
    });
}

function handleRobloxStart(req, res, mode = 'login') {
    const robloxConfig = getRobloxConfig(req);
    const returnTo = getSafeReturnPath(req.query.returnTo);

    if (!robloxConfig) {
        return robloxRedirect(req, res, mode, null, {
            roblox_error: 'not_configured',
            message: 'Roblox sign-in is not switched on yet.',
            tab: mode === 'link' ? 'roblox' : undefined
        });
    }

    const authUser = getAuthenticatedUserFromRequest(req);
    if (mode === 'link' && !authUser) {
        return redirectTo(res, buildRedirectUrl(req, '/login', {
            roblox_error: 'login_required',
            message: 'Log in before connecting a Roblox account.',
            returnTo: returnTo === '/' ? '/profile?tab=roblox' : returnTo
        }));
    }

    const nonce = crypto.randomBytes(24).toString('hex');
    const verifier = crypto.randomBytes(32).toString('base64url');
    const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');
    setRobloxStateCookie(res, signToken({
        purpose: 'roblox-oauth',
        nonce,
        verifier,
        mode,
        returnTo: mode === 'link' && returnTo === '/' ? '/profile?tab=roblox' : returnTo,
        linkUserId: mode === 'link' ? String(authUser.id) : null
    }, { expiresIn: ROBLOX_STATE_MAX_AGE_SECONDS }));

    const authUrl = new URL(`${ROBLOX_OAUTH_BASE}/authorize`);
    authUrl.searchParams.set('client_id', robloxConfig.clientId);
    authUrl.searchParams.set('redirect_uri', robloxConfig.redirectUri);
    authUrl.searchParams.set('scope', ROBLOX_OAUTH_SCOPES.join(' '));
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('state', nonce);
    authUrl.searchParams.set('code_challenge', challenge);
    authUrl.searchParams.set('code_challenge_method', 'S256');

    return redirectTo(res, authUrl.toString());
}

async function fetchRobloxProfile(req, code, verifier) {
    const robloxConfig = getRobloxConfig(req);
    if (!robloxConfig) {
        throw new Error('Roblox OAuth is not configured.');
    }

    const tokenResponse = await fetch(`${ROBLOX_OAUTH_BASE}/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            code_verifier: verifier,
            client_id: robloxConfig.clientId,
            client_secret: robloxConfig.clientSecret,
            redirect_uri: robloxConfig.redirectUri
        }),
        signal: AbortSignal.timeout(8000)
    });

    if (!tokenResponse.ok) {
        throw new Error(`Roblox token exchange failed (${tokenResponse.status}).`);
    }

    const tokenPayload = await tokenResponse.json();
    if (!tokenPayload?.access_token) {
        throw new Error('Roblox did not return an access token.');
    }

    const profileResponse = await fetch(`${ROBLOX_OAUTH_BASE}/userinfo`, {
        headers: { Authorization: `Bearer ${tokenPayload.access_token}`, Accept: 'application/json' },
        signal: AbortSignal.timeout(8000)
    });

    if (!profileResponse.ok) {
        throw new Error(`Roblox profile fetch failed (${profileResponse.status}).`);
    }

    // sub is the Roblox user id; usernames and display names can change.
    const profile = await profileResponse.json();
    const sub = String(profile?.sub || '');
    if (!/^\d{1,20}$/.test(sub)) {
        throw new Error('Roblox did not return a user id.');
    }

    const username = String(profile.preferred_username || profile.name || '').slice(0, 40);
    return {
        sub,
        username,
        displayName: String(profile.nickname || username).slice(0, 40)
    };
}

function applyRobloxLink(user, robloxProfile) {
    if (!user.authProviders) user.authProviders = [];
    const linkedAt = user.roblox?.userId === robloxProfile.sub ? user.roblox.linkedAt : new Date();

    const linkedProvider = findLinkedProvider(user, ROBLOX_PROVIDER);
    if (linkedProvider) {
        linkedProvider.providerUserId = robloxProfile.sub;
        linkedProvider.linkedAt = linkedAt;
    } else {
        user.authProviders.push({ provider: ROBLOX_PROVIDER, providerUserId: robloxProfile.sub, linkedAt });
    }

    user.roblox = {
        userId: robloxProfile.sub,
        username: robloxProfile.username,
        displayName: robloxProfile.displayName,
        linkedAt
    };
}

async function handleRobloxCallback(req, res) {
    const state = verifyPurposeToken(parseCookies(req)[ROBLOX_STATE_COOKIE], 'roblox-oauth');
    clearRobloxStateCookie(res);

    if (req.query.error) {
        return robloxErrorRedirect(req, res, state, 'cancelled', 'Roblox sign-in was cancelled.');
    }

    if (!state || !sameSecret(req.query.state, state.nonce) || !req.query.code) {
        return robloxErrorRedirect(req, res, state, 'invalid_state', 'Roblox sign-in expired. Please try again.');
    }

    try {
        const robloxProfile = await fetchRobloxProfile(req, String(req.query.code), state.verifier);
        const alreadyLinkedUser = await User.findOne({
            authProviders: {
                $elemMatch: {
                    provider: ROBLOX_PROVIDER,
                    providerUserId: robloxProfile.sub
                }
            }
        });

        if (state.mode === 'link') {
            const authUser = getAuthenticatedUserFromRequest(req);
            if (!authUser || String(authUser.id) !== String(state.linkUserId)) {
                return robloxErrorRedirect(req, res, state, 'login_required', 'Log in before connecting a Roblox account.');
            }

            const currentUser = await User.findById(state.linkUserId);
            if (!currentUser) {
                return robloxErrorRedirect(req, res, state, 'login_required', 'Log in before connecting a Roblox account.');
            }

            if (alreadyLinkedUser && String(alreadyLinkedUser._id) !== String(currentUser._id)) {
                return robloxErrorRedirect(req, res, state, 'already_linked', 'That Roblox account is already connected to another Animal Battle Stats account.');
            }

            applyRobloxLink(currentUser, robloxProfile);
            await currentUser.save();
            return redirectTo(res, buildRedirectUrl(req, getSafeReturnPath(state.returnTo), { roblox_linked: '1' }));
        }

        if (alreadyLinkedUser) {
            applyRobloxLink(alreadyLinkedUser, robloxProfile);
            alreadyLinkedUser.lastLogin = new Date();
            await alreadyLinkedUser.save();
            setAuthCookie(res, signSessionToken(alreadyLinkedUser));
            await notifyDiscord('login', { username: alreadyLinkedUser.username }, req);
            return redirectTo(res, buildRedirectUrl(req, getSafeReturnPath(state.returnTo)));
        }

        // First Roblox sign-in: a new account named after the Roblox player.
        const preferred = validatePublicName(robloxProfile.username, { newName: true }).valid ? robloxProfile.username : '';
        const username = await buildUniqueUsername(preferred, 'roblox');
        const displayName = validatePublicName(robloxProfile.displayName, { newName: true }).valid ? robloxProfile.displayName : username;
        const user = new User({
            username,
            email: `roblox-${robloxProfile.sub}@${NO_EMAIL_DOMAIN}`,
            displayName: displayName.slice(0, 30),
            emailVerified: false
        });
        applyRobloxLink(user, robloxProfile);

        await user.save();
        setAuthCookie(res, signSessionToken(user));
        await notifyDiscord('signup', { username: user.username }, req);
        return redirectTo(res, buildRedirectUrl(req, '/profile', { roblox_welcome: '1' }));
    } catch (error) {
        console.error('Roblox OAuth callback error:', error);
        return robloxErrorRedirect(req, res, state, 'oauth_failed', 'Roblox sign-in failed. Please try again.');
    }
}

async function handleUnlinkRoblox(req, res) {
    const authUser = getAuthenticatedUserFromRequest(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const user = await User.findById(authUser.id).select('+password');
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    if (!user.roblox?.userId && !findLinkedProvider(user, ROBLOX_PROVIDER)) {
        return res.status(400).json({ success: false, error: 'No Roblox account is connected.' });
    }

    const otherSignIn = Boolean(user.password) || (user.authProviders || []).some((provider) => provider.provider !== ROBLOX_PROVIDER);
    if (!otherSignIn) {
        return res.status(400).json({
            success: false,
            error: 'Roblox is the only way to sign in to this account, so it cannot be disconnected.'
        });
    }

    user.authProviders = (user.authProviders || []).filter((provider) => provider.provider !== ROBLOX_PROVIDER);
    user.roblox = null;
    await user.save();
    return res.status(200).json({
        success: true,
        message: 'Roblox account disconnected.',
        data: { user: buildUserPayload(user) }
    });
}

async function handleRobloxPlayer(req, res) {
    res.setHeader('Cache-Control', 'private, no-store');
    const authUser = getAuthenticatedUserFromRequest(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const user = await User.findById(authUser.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    const account = robloxAccountPayload(user);
    if (!account) {
        return res.status(200).json({ success: true, data: { linked: false } });
    }

    const card = await robloxPlayerCard(account.userId).catch(() => null);
    return res.status(200).json({
        success: true,
        data: {
            linked: true,
            account,
            headshot: card?.headshot || null,
            stats: card?.stats || null,
            live: Boolean(card?.live)
        }
    });
}

// ==================== ECONOMY ====================
// The Rewards screen: BattlePoints, daily streak, quests, Season Pass and looks.

function publicLooks(user) {
    const eco = normalizeEconomy(user.economy);
    return { title: eco.title ? ITEM_BY_ID.get(eco.title)?.name || null : null, frame: eco.frame || null };
}

async function handleHub(req, res) {
    res.setHeader('Cache-Control', 'private, no-store');
    const authUser = getAuthenticatedUserFromRequest(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    const user = await User.findById(authUser.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }
    return res.status(200).json({ success: true, data: economyForUser(user) });
}

async function handleEconomyAction(req, res, action) {
    res.setHeader('Cache-Control', 'private, no-store');
    const authUser = getAuthenticatedUserFromRequest(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    const body = req.body || {};
    try {
        let result;
        if (action === 'buy') {
            result = await buyItem(authUser.id, body.item);
        } else if (action === 'equip') {
            result = await equipItem(authUser.id, body.kind, body.item || null);
        } else if (body.what === 'daily') {
            result = await claimDaily(authUser.id);
        } else if (body.what === 'quest' && Number.isInteger(body.slot)) {
            result = await claimQuest(authUser.id, body.slot);
        } else if (body.what === 'chest') {
            result = await claimChest(authUser.id);
        } else if (body.what === 'pass') {
            result = await claimPass(authUser.id);
        } else {
            return res.status(400).json({ success: false, error: 'Unknown claim' });
        }
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        if (error instanceof RewardError) {
            return res.status(error.status).json({ success: false, error: error.message });
        }
        if (error?.code === 11000) {
            return res.status(409).json({ success: false, error: 'Already claimed.' });
        }
        throw error;
    }
}

// ==================== LOGIN ====================
async function handleLogin(req, res) {
    const { login, password } = req.body || {};
    const normalizedLogin = normalizeIdentifier(login);

    if (!await consumeAuthAttempt('login', req, normalizedLogin, LOGIN_LIMIT)) {
        res.setHeader('Retry-After', String(Math.ceil(LOGIN_LIMIT.windowMs / 1000)));
        return res.status(429).json({ success: false, error: GENERIC_AUTH_ERROR });
    }

    if (typeof login !== 'string' || !normalizedLogin || typeof password !== 'string' || !password) {
        return res.status(400).json({
            success: false,
            error: 'Please provide email/username and password'
        });
    }

    const user = await User.findOne({
        $or: [
            { email: normalizedLogin },
            { username: login }
        ]
    }).select('+password');

    if (!user) {
        return res.status(401).json({ success: false, error: INVALID_LOGIN_ERROR });
    }

    if (!user.password) {
        return res.status(401).json({ success: false, error: INVALID_LOGIN_ERROR });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ success: false, error: INVALID_LOGIN_ERROR });
    }

    await clearAuthAttempt('login', req, normalizedLogin, LOGIN_LIMIT);
    user.lastLogin = new Date();
    await user.save();

    const token = signSessionToken(user);
    setAuthCookie(res, token);

    await notifyDiscord('login', { username: user.username }, req);

    res.status(200).json({
        success: true,
        message: 'Login successful',
        data: {
            user: buildUserPayload(user),
            token
        }
    });
}

// ==================== SIGNUP ====================
async function handleSignup(req, res) {
    const { username, email, password } = req.body || {};
    const normalizedEmail = normalizeIdentifier(email);
    const signupIdentifier = normalizedEmail || username;

    if (!await consumeAuthAttempt('signup', req, signupIdentifier, SIGNUP_LIMIT)) {
        res.setHeader('Retry-After', String(Math.ceil(SIGNUP_LIMIT.windowMs / 1000)));
        return res.status(429).json({ success: false, error: GENERIC_AUTH_ERROR });
    }

    if (typeof username !== 'string' || !username.trim()
        || typeof email !== 'string' || !normalizedEmail
        || typeof password !== 'string' || !password) {
        return res.status(400).json({
            success: false,
            error: 'Please provide username, email, and password'
        });
    }

    const passwordError = validatePasswordPolicy(password);
    if (passwordError) {
        return res.status(400).json({ success: false, error: passwordError });
    }

    if (!isValidEmail(normalizedEmail)) {
        return res.status(400).json({ success: false, error: 'Please provide a valid email address' });
    }

    const usernameModeration = validatePublicName(username, { newName: true });
    if (!usernameModeration.valid) {
        return res.status(400).json({ success: false, error: usernameModeration.error });
    }

    const existingUser = await User.findOne({
        $or: [{ email: normalizedEmail }, { username }]
    });

    if (existingUser) {
        const field = existingUser.email === normalizedEmail ? 'email' : 'username';
        return res.status(400).json({
            success: false,
            error: `An account with this ${field} already exists`
        });
    }

    const { token: verificationToken, tokenHash } = createOneTimeToken();
    const user = new User({
        username,
        email: normalizedEmail,
        password,
        emailVerified: false,
        emailVerificationTokenHash: tokenHash,
        emailVerificationExpiresAt: new Date(Date.now() + VERIFICATION_TOKEN_HOURS * 60 * 60 * 1000)
    });

    await user.save();
    await clearAuthAttempt('signup', req, signupIdentifier, SIGNUP_LIMIT);

    await sendVerificationEmail(req, user, verificationToken);

    const token = signSessionToken(user);
    setAuthCookie(res, token);

    await notifyDiscord('signup', { username: user.username }, req);

    res.status(201).json({
        success: true,
        message: 'Account created successfully. Please check your email to verify your account.',
        data: {
            user: buildUserPayload(user),
            token
        }
    });
}

// ==================== EMAIL VERIFICATION ====================
async function handleVerifyEmail(req, res) {
    const source = req.method === 'GET' ? req.query : req.body;
    const email = normalizeIdentifier(source.email);
    const token = String(source.token || '');

    if (!email || !token) {
        return res.status(400).json({ success: false, error: 'Verification link is invalid or expired.' });
    }

    const user = await User.findOne({
        email,
        emailVerificationTokenHash: hashToken(token),
        emailVerificationExpiresAt: { $gt: new Date() }
    });

    if (!user) {
        return res.status(400).json({ success: false, error: 'Verification link is invalid or expired.' });
    }

    user.emailVerified = true;
    user.emailVerificationTokenHash = null;
    user.emailVerificationExpiresAt = null;
    await user.save();

    if (req.method === 'GET') {
        res.statusCode = 302;
        res.setHeader('Location', '/login?verified=1');
        return res.end();
    }

    return res.status(200).json({ success: true, message: 'Email verified.' });
}

// ==================== FORGOT PASSWORD ====================
async function handleForgotPassword(req, res) {
    const email = normalizeIdentifier(req.body?.email || req.body?.login);
    const genericResponse = {
        success: true,
        message: 'If an account matches that email, a password reset link has been sent.'
    };

    if (!email) {
        return res.status(200).json(genericResponse);
    }

    // Use independent distributed buckets so neither rotating email addresses
    // from one client nor distributed clients targeting one inbox can spam mail.
    const [ipBudget, emailBudget] = await Promise.all([
        consumeRateLimit({
            scope: 'forgot-password-ip',
            identity: clientAddress(req),
            max: 6,
            windowMs: 60 * 60 * 1000
        }),
        consumeRateLimit({
            scope: 'forgot-password-email',
            identity: email,
            max: 3,
            windowMs: 60 * 60 * 1000
        })
    ]);
    if (!ipBudget.allowed || !emailBudget.allowed) {
        return res.status(200).json(genericResponse);
    }

    const user = await User.findOne({ email });
    if (user && hasRealEmail(user)) {
        const { token, tokenHash } = createOneTimeToken();
        user.passwordResetTokenHash = tokenHash;
        user.passwordResetExpiresAt = new Date(Date.now() + RESET_TOKEN_MINUTES * 60 * 1000);
        await user.save();
        await sendPasswordResetEmail(req, user, token);
    }

    return res.status(200).json(genericResponse);
}

// ==================== RESET PASSWORD ====================
async function handleResetPassword(req, res) {
    const email = normalizeIdentifier(req.body?.email);
    const token = String(req.body?.token || '');
    const password = req.body?.password;

    const passwordError = validatePasswordPolicy(password);
    if (passwordError) {
        return res.status(400).json({ success: false, error: passwordError });
    }

    if (!email || !token) {
        return res.status(400).json({ success: false, error: 'Reset link is invalid or expired.' });
    }

    const user = await User.findOne({
        email,
        passwordResetTokenHash: hashToken(token),
        passwordResetExpiresAt: { $gt: new Date() }
    }).select('+password');

    if (!user) {
        return res.status(400).json({ success: false, error: 'Reset link is invalid or expired.' });
    }

    user.password = password;
    user.passwordResetTokenHash = null;
    user.passwordResetExpiresAt = null;
    await user.save();

    return res.status(200).json({ success: true, message: 'Password reset successfully. Please sign in with your new password.' });
}


function getAuthenticatedRequestUser(req) {
    const token = getRequestToken(req);
    if (!token) return null;
    return verifyToken(token);
}

function pickNotificationPreferenceUpdates(body = {}) {
    const allowedKeys = ['enabled', 'weeklyDigest', 'newFeatures', 'commentReplies', 'tournamentUpdates'];
    const updates = {};

    allowedKeys.forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(body, key)) {
            updates[key] = Boolean(body[key]);
        }
    });

    return updates;
}

// ==================== NOTIFICATION PREFERENCES ====================
async function handleGetNotificationPreferences(req, res) {
    const authUser = getAuthenticatedRequestUser(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const user = await User.findById(authUser.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    return res.status(200).json({
        success: true,
        data: {
            emailNotifications: normalizeNotificationPreferences(user.emailNotifications || {})
        }
    });
}

async function handleUpdateNotificationPreferences(req, res) {
    const authUser = getAuthenticatedRequestUser(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const user = await User.findById(authUser.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    const current = normalizeNotificationPreferences(user.emailNotifications || {});
    const updates = pickNotificationPreferenceUpdates(req.body || {});
    const next = { ...current, ...updates };

    if (Object.prototype.hasOwnProperty.call(updates, 'enabled')) {
        next.unsubscribedAt = updates.enabled ? null : (current.unsubscribedAt || new Date());
    } else if (next.enabled && current.unsubscribedAt) {
        next.unsubscribedAt = null;
    }

    user.emailNotifications = next;
    await user.save();

    return res.status(200).json({
        success: true,
        message: 'Notification preferences updated',
        data: {
            emailNotifications: normalizeNotificationPreferences(user.emailNotifications || {})
        }
    });
}

// ==================== PUBLIC UNSUBSCRIBE ====================
async function handleUnsubscribe(req, res) {
    const token = String(req.query.token || req.body?.token || '');
    const payload = verifyUnsubscribeToken(token);

    if (!payload?.userId || !payload?.email) {
        return res.status(400).json({ success: false, error: 'Unsubscribe link is invalid.' });
    }

    const user = await User.findOne({ _id: payload.userId, email: normalizeIdentifier(payload.email) });
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found.' });
    }

    const preferences = normalizeNotificationPreferences(user.emailNotifications || {});
    preferences.enabled = false;
    preferences.weeklyDigest = false;
    preferences.newFeatures = false;
    preferences.commentReplies = false;
    preferences.tournamentUpdates = false;
    preferences.unsubscribedAt = new Date();
    user.emailNotifications = preferences;
    await user.save();

    if (req.method === 'GET' && !(req.headers.accept || '').includes('application/json')) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        return res.status(200).send('<!doctype html><html><head><title>Unsubscribed</title></head><body><h1>You are unsubscribed</h1><p>You will no longer receive Animal Battle Stats notification emails.</p><p>You can opt back in from your profile settings.</p></body></html>');
    }

    return res.status(200).json({
        success: true,
        message: 'You have been unsubscribed from notification emails.'
    });
}

// ==================== ME ====================
async function handleMe(req, res) {
    const token = getRequestToken(req);
    if (!token) {
        return res.status(401).json({ success: false, error: 'No token provided' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ success: false, error: 'Invalid or expired token' });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    // The owner's account becomes an admin; a name that breaks the name rules
    // asks its player to rename. Neither may break the page load.
    try {
        await ensureOwnerRole(user);
        await flagBrokenName(user);
    } catch (error) {
        console.warn('me: moderation update failed:', error.message);
    }

    res.status(200).json({
        success: true,
        data: {
            user: buildUserPayload(user),
            token
        }
    });
}

// ==================== GET PROFILE ====================
async function handleGetProfile(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ success: false, error: 'Invalid or expired token' });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    // New XP system: xp is already progress toward next level
    const xpProgress = user.xp || 0;
    const xpNeeded = xpToNext(user.level || 1);

    res.status(200).json({
        success: true,
        data: {
            user: {
                ...buildUserPayload(user),
                xpToNext: xpNeeded,
                xpProgress,
                xpNeeded,
                xpPercentage: Math.min(100, Math.round((xpProgress / xpNeeded) * 100))
            }
        }
    });
}

// ==================== UPDATE PROFILE ====================
async function handleUpdateProfile(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ success: false, error: 'Invalid or expired token' });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    const { displayName, username, profileAnimal } = req.body || {};
    let publicNameChanged = false;

    if (username !== undefined && typeof username !== 'string') {
        return res.status(400).json({ success: false, error: 'Username must be text' });
    }
    if (displayName !== undefined && typeof displayName !== 'string') {
        return res.status(400).json({ success: false, error: 'Display name must be text' });
    }

    // Handle username change (login credential) - 3/week limit
    if (username !== undefined && username !== user.username) {
        const newUsername = username.trim();
        
        // Validate username format
        if (newUsername.length < 3) {
            return res.status(400).json({ success: false, error: 'Username must be at least 3 characters' });
        }
        if (newUsername.length > 20) {
            return res.status(400).json({ success: false, error: 'Username cannot exceed 20 characters' });
        }
        if (!/^[a-zA-Z0-9_]+$/.test(newUsername)) {
            return res.status(400).json({ success: false, error: 'Username can only contain letters, numbers, and underscores' });
        }

        const usernameModeration = validatePublicName(newUsername, { newName: !isOwnerAccount(user) });
        if (!usernameModeration.valid) {
            return res.status(400).json({ success: false, error: usernameModeration.error });
        }

        // Check if username is already taken (by another user)
        const escapedUsername = newUsername.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const existingUser = await User.findOne({ 
            username: { $regex: new RegExp(`^${escapedUsername}$`, 'i') },
            _id: { $ne: user._id }
        });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'Username is already taken' });
        }

        // Check weekly change limit (3 per week). Moderation-required renames must not
        // trap a user in a blocked state, so they bypass this self-service limit.
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const recentChanges = (user.usernameChanges || []).filter(
            change => new Date(change.changedAt) > oneWeekAgo
        );
        
        if (!user.requiresUsernameChange && recentChanges.length >= 3) {
            const oldestChange = recentChanges[0];
            const resetDate = new Date(new Date(oldestChange.changedAt).getTime() + 7 * 24 * 60 * 60 * 1000);
            return res.status(400).json({ 
                success: false, 
                error: `You can only change your username 3 times per week. Try again ${resetDate.toLocaleDateString()}.`,
                usernameChangesRemaining: 0,
                resetDate: resetDate.toISOString()
            });
        }

        // Record the change
        // Only the rolling policy window is operationally relevant; pruning here
        // prevents a lifetime of rename records from growing the account document.
        user.usernameChanges = recentChanges;
        user.usernameChanges.push({
            oldUsername: user.username,
            newUsername: newUsername,
            changedAt: new Date()
        });

        // Update username
        user.username = newUsername;
        publicNameChanged = true;
    }

    // Handle display name change - unlimited
    if (displayName !== undefined && displayName !== user.displayName) {
        const newDisplayName = displayName.trim();
        
        // Basic validation for display name
        if (newDisplayName.length < 1) {
            return res.status(400).json({ success: false, error: 'Display name cannot be empty' });
        }
        if (newDisplayName.length > 30) {
            return res.status(400).json({ success: false, error: 'Display name cannot exceed 30 characters' });
        }

        const displayNameModeration = validatePublicName(newDisplayName, { newName: !isOwnerAccount(user) });
        if (!displayNameModeration.valid) {
            return res.status(400).json({ success: false, error: displayNameModeration.error });
        }
        
        user.displayName = newDisplayName;
        publicNameChanged = true;
    }

    // Clear forced rename moderation once the user has successfully saved allowed
    // public names. This only updates moderation metadata and keeps account history,
    // XP, votes, comments, and other linked records intact.
    // An admin's censor clears only once each censored name has actually changed.
    if (user.requiresUsernameChange && publicNameChanged) {
        const usernameModeration = validatePublicName(user.username);
        const displayNameModeration = validatePublicName(user.displayName || user.username);
        const usernameChanged = !user.previousModeratedUsername || user.username !== user.previousModeratedUsername;
        const displayNameChanged = !user.previousModeratedDisplayName || (user.displayName || user.username) !== user.previousModeratedDisplayName;

        if (usernameModeration.valid && displayNameModeration.valid && usernameChanged && displayNameChanged) {
            user.requiresUsernameChange = false;
            user.moderationReason = null;
            user.moderatedAt = null;
            user.moderatedBy = null;
            user.previousModeratedUsername = null;
            user.previousModeratedDisplayName = null;
        }
    }

    // Update profile animal
    if (profileAnimal !== undefined) {
        if (profileAnimal !== null && (typeof profileAnimal !== 'string' || !profileAnimal.trim() || profileAnimal.length > 100)) {
            return res.status(400).json({ success: false, error: 'Invalid profile animal' });
        }
        if (profileAnimal === null) {
            user.profileAnimal = null;
        } else {
            const escapedAnimal = profileAnimal.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const canonicalAnimal = await Animal.findOne({ name: { $regex: new RegExp(`^${escapedAnimal}$`, 'i') } })
                .select('name')
                .lean();
            if (!canonicalAnimal) return res.status(400).json({ success: false, error: 'Unknown profile animal' });
            user.profileAnimal = canonicalAnimal.name;
        }
    }

    try {
        await user.save();
    } catch (error) {
        if (error?.code === 11000) return res.status(409).json({ success: false, error: 'Username is already taken' });
        throw error;
    }

    // Calculate username changes remaining this week
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recentChanges = (user.usernameChanges || []).filter(
        change => new Date(change.changedAt) > oneWeekAgo
    );
    const usernameChangesRemaining = Math.max(0, 3 - recentChanges.length);

    // New XP system: xp is already progress toward next level
    const xpProgress = user.xp || 0;
    const xpNeeded = xpToNext(user.level || 1);

    res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: {
            user: {
                ...buildUserPayload(user),
                displayName: user.displayName || user.username,
                xpToNext: xpNeeded,
                usernameChangesRemaining,
                xpProgress,
                xpNeeded,
                xpPercentage: Math.min(100, Math.round((xpProgress / xpNeeded) * 100))
            }
        }
    });
}


// ==================== ADMIN FLAG RENAME ====================
async function handleFlagRename(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ success: false, error: 'Invalid or expired token' });
    }

    const adminUser = await User.findById(decoded.id);
    if (!adminUser) {
        return res.status(401).json({ success: false, error: 'Admin user not found' });
    }

    if (adminUser.role !== 'admin') {
        return res.status(403).json({ success: false, error: 'Admin access required' });
    }

    const { userId, username, reason } = req.body || {};
    if (!userId && !username) {
        return res.status(400).json({ success: false, error: 'Provide userId or username to flag' });
    }

    const targetQuery = userId
        ? { _id: userId }
        : { username: { $regex: new RegExp(`^${String(username).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i') } };

    const targetUser = await User.findOne(targetQuery);
    if (!targetUser) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    targetUser.requiresUsernameChange = true;
    targetUser.moderationReason = String(reason || 'Public name requires moderation review').trim();
    targetUser.moderatedAt = new Date();
    targetUser.moderatedBy = adminUser._id;
    targetUser.previousModeratedUsername = targetUser.username;
    targetUser.previousModeratedDisplayName = targetUser.displayName || targetUser.username;

    await targetUser.save();

    return res.status(200).json({
        success: true,
        message: 'User flagged for required rename',
        data: {
            user: {
                id: targetUser._id,
                username: targetUser.username,
                displayName: targetUser.displayName || targetUser.username,
                role: targetUser.role,
                requiresUsernameChange: Boolean(targetUser.requiresUsernameChange),
                moderationReason: targetUser.moderationReason,
                moderatedAt: targetUser.moderatedAt,
                moderatedBy: targetUser.moderatedBy,
                previousModeratedUsername: targetUser.previousModeratedUsername
            }
        }
    });
}

// ==================== REWARDS ====================
async function handleRewards(req, res) {
    // Verify authentication
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    const user = verifyToken(token);
    if (!user) {
        return res.status(401).json({ success: false, error: 'Invalid token' });
    }

    if (req.method === 'GET') {
        // Get user's current progression
        const dbUser = await User.findById(user.id);
        
        if (!dbUser) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        return res.status(200).json({
            success: true,
            data: buildProgressionPayload(dbUser)
        });
    }

    if (req.method === 'POST') {
        return res.status(410).json({
            success: false,
            error: 'Rewards are granted by verified action endpoints and cannot be claimed directly.'
        });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
}

// ==================== PRESTIGE ====================
async function handlePrestige(req, res) {
    // Verify authentication
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    const user = verifyToken(token);
    if (!user) {
        return res.status(401).json({ success: false, error: 'Invalid token' });
    }

    // Get current user
    const dbUser = await User.findById(user.id);
    if (!dbUser) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    // Check eligibility
    const prestigeResult = processPrestige(dbUser.level || 1, dbUser.prestige || 0);
    if (!prestigeResult.success) {
        return res.status(400).json({ success: false, error: prestigeResult.error });
    }

    // Apply prestige only if the exact eligibility state we inspected is still
    // current. Concurrent requests can otherwise each award the prestige BP.
    const updatedUser = await User.findOneAndUpdate(
        {
            _id: user.id,
            level: dbUser.level,
            prestige: dbUser.prestige || 0,
            xp: dbUser.xp || 0
        },
        {
            $set: {
                level: prestigeResult.newLevel,
                xp: prestigeResult.newXp,
                prestige: prestigeResult.newPrestige
            },
            $inc: {
                battlePoints: prestigeResult.prestigeReward.bp
            }
        },
        { returnDocument: 'after' }
    );

    if (!updatedUser) {
        return res.status(409).json({
            success: false,
            error: 'Prestige state changed. Refresh your profile and try again.'
        });
    }

    await notifyDiscord('prestige', { 
        username: updatedUser.username, 
        prestige: updatedUser.prestige 
    }, req);

    return res.status(200).json({
        success: true,
        data: buildProgressionPayload(updatedUser),
        message: `🌟 Prestige ${updatedUser.prestige}! You earned ${prestigeResult.prestigeReward.bp} BP!`
    });
}

// ==================== GET PUBLIC PROFILE ====================
async function handleGetPublicProfile(req, res) {
    const { username } = req.query;
    
    if (!username) {
        return res.status(400).json({ success: false, error: 'Username is required' });
    }

    const escapedUsername = username.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const user = await User.findOne({ 
        username: { $regex: new RegExp(`^${escapedUsername}$`, 'i') }
    });
    
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    // XP calculations
    const xpProgress = user.xp || 0;
    const xpNeeded = xpToNext(user.level || 1);
    // A censored name, or one that breaks the name rules, is never shown.
    const hidden = isNameHidden(user);

    // Return public profile data (no sensitive info like email)
    res.status(200).json({
        success: true,
        data: {
            user: {
                username: hidden ? hiddenName(user).replace(' ', '_').toLowerCase() : user.username,
                displayName: hidden ? hiddenName(user) : user.displayName || user.username,
                hidden,
                profileAnimal: user.profileAnimal || null,
                level: user.level || 1,
                prestige: user.prestige || 0,
                xp: user.xp || 0,
                xpToNext: xpNeeded,
                xpProgress,
                xpNeeded,
                xpPercentage: Math.min(100, Math.round((xpProgress / xpNeeded) * 100)),
                role: user.role,
                // Only whether a Roblox account is connected: never its name, avatar or id.
                robloxLinked: Boolean(user.roblox?.userId),
                title: publicLooks(user).title,
                frame: publicLooks(user).frame,
                createdAt: user.createdAt
            }
        }
    });
}

// ==================== ADMIN (/admin) ====================
// GET  ?action=admin&op=summary|users&filter=&q=&page=  players and name checks
// POST ?action=admin { op: censor|restore|mute|unmute|rename|role, userId, ... }
// Admins and moderators only (lib/admin.js says who can do what).
async function handleAdmin(req, res) {
    res.setHeader('Cache-Control', 'private, no-store');
    const authUser = getAuthenticatedUserFromRequest(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    const actor = await User.findById(authUser.id);
    if (!actor) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    await ensureOwnerRole(actor);
    if (actor.role !== 'admin' && actor.role !== 'moderator') {
        return res.status(403).json({ success: false, error: 'Admins only' });
    }

    try {
        if (req.method === 'GET') {
            const op = String(req.query.op || 'users');
            if (op === 'summary') {
                return res.status(200).json({ success: true, data: { ...(await adminSummary()), you: { role: actor.role, owner: isOwnerAccount(actor) } } });
            }
            if (op === 'check') {
                // Try a name against the name rules without saving anything.
                const name = String(req.query.name || '').slice(0, 40);
                const asNew = validatePublicName(name, { newName: true });
                const asExisting = validatePublicName(name);
                return res.status(200).json({ success: true, data: { name, allowed: asNew.valid, category: asNew.category || null, reservedOnly: !asNew.valid && asExisting.valid } });
            }
            const data = await listUsers({ q: req.query.q, filter: String(req.query.filter || 'all'), page: req.query.page });
            return res.status(200).json({ success: true, data });
        }

        const budget = await consumeRateLimit({ scope: 'admin-action', identity: String(actor._id), max: 120, windowMs: 60 * 1000 });
        if (!budget.allowed) {
            return res.status(429).json({ success: false, error: 'Too many changes at once. Wait a minute.' });
        }
        const user = await runAction(actor, req.body || {});
        console.log(`admin: ${actor.username} ${String(req.body?.op || '')} ${user.username}`);
        return res.status(200).json({ success: true, data: { user } });
    } catch (error) {
        if (error instanceof AdminError) {
            return res.status(error.status).json({ success: false, error: error.message });
        }
        throw error;
    }
}

// ==================== ABS ORIGINALS (/shows) ====================
// What the signed-in player has watched and followed.
async function handleShows(req, res) {
    res.setHeader('Cache-Control', 'private, no-store');
    const authUser = getAuthenticatedUserFromRequest(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    const user = await User.findById(authUser.id).select('economy');
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }
    return res.status(200).json({ success: true, data: showsForUser(user) });
}

const WATCH_PURPOSE = 'episode-watch';

// watch-start { episode } -> a signed ticket; watch { ticket } pays once the
// episode has had time to play (most of its length); follow { platform } pays
// once per social account.
async function handleShowReward(req, res, action) {
    res.setHeader('Cache-Control', 'private, no-store');
    const authUser = getAuthenticatedUserFromRequest(req);
    if (!authUser) {
        return res.status(401).json({ success: false, error: 'Log in to earn BattlePoints.' });
    }
    const body = req.body || {};

    try {
        if (action === 'watch-start') {
            const episode = EPISODE_BY_ID.get(String(body.episode || ''));
            if (!episode) return res.status(400).json({ success: false, error: 'Unknown episode' });
            const ticket = signToken({ purpose: WATCH_PURPOSE, uid: String(authUser.id), ep: episode.id, at: Date.now() }, { expiresIn: '6h' });
            return res.status(200).json({ success: true, data: { ticket, minSeconds: minWatchSeconds(episode) } });
        }

        if (action === 'watch') {
            const ticket = verifyPurposeToken(body.ticket, WATCH_PURPOSE);
            const episode = ticket ? EPISODE_BY_ID.get(ticket.ep) : null;
            if (!ticket || !episode || ticket.uid !== String(authUser.id)) {
                return res.status(400).json({ success: false, error: 'Play the episode to earn its reward.' });
            }
            const waited = (Date.now() - Number(ticket.at)) / 1000;
            if (!(waited >= minWatchSeconds(episode))) {
                return res.status(409).json({ success: false, error: 'Watch the episode to the end to earn its reward.' });
            }
            const result = await awardUserReward({ userId: authUser.id, action: 'episode_watch', sourceId: episode.id });
            return res.status(200).json({ success: true, data: { ...result, episode: episode.id } });
        }

        const platform = String(body.platform || '');
        if (!FOLLOW_PLATFORMS.includes(platform)) {
            return res.status(400).json({ success: false, error: 'Unknown account' });
        }
        const result = await awardUserReward({ userId: authUser.id, action: 'social_follow', sourceId: platform });
        return res.status(200).json({ success: true, data: { ...result, platform } });
    } catch (error) {
        if (error instanceof RewardError) {
            return res.status(error.status).json({ success: false, error: error.message });
        }
        throw error;
    }
}
