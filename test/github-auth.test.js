'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const User = require('../lib/models/User');
const { signToken, verifyToken, verifyPurposeToken } = require('../lib/auth');

// Security regressions for GitHub/Google linking and account password management.

function response() {
    return {
        headers: {},
        statusCode: 200,
        setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
        getHeader(name) { return this.headers[name.toLowerCase()]; },
        status(code) { this.statusCode = code; return this; },
        json(body) { this.body = body; return this; },
        end() { return this; }
    };
}

function stub(modulePath, exports) {
    const resolved = require.resolve(modulePath);
    const prior = require.cache[resolved];
    require.cache[resolved] = { id: resolved, filename: resolved, loaded: true, exports };
    return () => {
        if (prior) require.cache[resolved] = prior;
        else delete require.cache[resolved];
    };
}

async function withApi(env, run) {
    const saved = Object.fromEntries(Object.keys(env).map((key) => [key, process.env[key]]));
    Object.entries(env).forEach(([key, value]) => {
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
    });
    const restores = [
        stub('../lib/mongodb', { connectToDatabase: async () => {} }),
        stub('../lib/discord', { notifyDiscord: async () => {} }),
        stub('../lib/distributed-rate-limit', { consumeRateLimit: async () => ({ allowed: true }) })
    ];
    const apiPath = require.resolve('../api/auth');
    delete require.cache[apiPath];
    const originals = { findOne: User.findOne, findById: User.findById, exists: User.exists, save: User.prototype.save };
    try {
        await run(require('../api/auth'));
    } finally {
        User.findOne = originals.findOne;
        User.findById = originals.findById;
        User.exists = originals.exists;
        User.prototype.save = originals.save;
        delete require.cache[apiPath];
        restores.forEach((restore) => restore());
        Object.entries(saved).forEach(([key, value]) => {
            if (value === undefined) delete process.env[key];
            else process.env[key] = value;
        });
    }
}

const CONFIGURED = {
    GITHUB_CLIENT_ID: 'client-123',
    GITHUB_CLIENT_SECRET: 'secret-456',
    GITHUB_REDIRECT_URI: undefined,
    APP_URL: 'https://animalbattlestats.com',
    VERCEL_ENV: undefined
};

function cookieValue(res, name) {
    const cookies = [].concat(res.getHeader('Set-Cookie') || []);
    const cookie = cookies.find((entry) => entry.startsWith(`${name}=`));
    return cookie ? { raw: cookie, value: decodeURIComponent(cookie.slice(name.length + 1).split(';')[0]) } : null;
}

async function startFlow(handler, { action = 'github-start', query = {}, headers = {} } = {}) {
    const res = response();
    await handler({ method: 'GET', query: { action, ...query }, headers: { host: 'animalbattlestats.com', ...headers } }, res);
    return res;
}

function withFetch(routes, run) {
    const original = global.fetch;
    const calls = [];
    global.fetch = async (url, options = {}) => {
        calls.push({ url: String(url), options });
        const route = routes.find(([pattern]) => String(url).startsWith(pattern));
        if (!route) throw new Error(`unexpected fetch ${url}`);
        const [status, body] = route[1];
        return { ok: status >= 200 && status < 300, status, json: async () => body };
    };
    return Promise.resolve(run(calls)).finally(() => { global.fetch = original; });
}

const GITHUB_ROUTES = [
    ['https://github.com/login/oauth/access_token', [200, { access_token: 'access' }]],
    ['https://api.github.com/user/emails', [200, [{ email: 'player@example.com', primary: true, verified: true }]]],
    ['https://api.github.com/user', [200, { id: 1234, login: 'TigerKid_22' }]]
];

function linkedUser(fields = {}) {
    const user = new User({
        username: 'existing_player',
        email: 'player@example.com',
        displayName: 'Existing',
        password: 'hashed-password-placeholder',
        ...fields
    });
    return user;
}

async function callback(handler, { action = 'github-start', session, callbackSession = session, nonce } = {}) {
    const start = await startFlow(handler, { action, headers: session ? { cookie: `abs_auth_token=${session}` } : {} });
    const cookie = cookieValue(start, 'abs_github_oauth').value;
    const state = new URL(start.getHeader('Location')).searchParams.get('state');
    const res = response();
    await handler({ method: 'GET', query: { action: 'github-callback', state: nonce || state, code: 'the-code' },
        headers: { host: 'animalbattlestats.com', cookie: `abs_github_oauth=${encodeURIComponent(cookie)}${callbackSession ? `; abs_auth_token=${callbackSession}` : ''}` } }, res);
    return res;
}
const sessionFor = (user) => signToken({ userId: String(user._id), username: user.username }, { expiresIn: 60 });

test('GitHub is not offered without both OAuth credentials', () => withApi({ GITHUB_CLIENT_ID: undefined, GITHUB_CLIENT_SECRET: undefined }, async (handler) => {
    const res = await startFlow(handler);
    assert.equal(new URL(res.getHeader('Location')).searchParams.get('github_error'), 'not_configured');
}));
test('GitHub authorization uses PKCE, identity-only scopes and a cookie which cannot authenticate as a session', () => withApi(CONFIGURED, async (handler) => {
    const res = await startFlow(handler, { query: { returnTo: '//evil.example' } });
    const url = new URL(res.getHeader('Location'));
    const cookie = cookieValue(res, 'abs_github_oauth');
    assert.match(cookie.raw, /Path=\/api\/auth; HttpOnly; SameSite=Lax/);
    assert.equal(verifyToken(cookie.value), null);
    const state = verifyPurposeToken(cookie.value, 'github-oauth');
    assert.equal(url.searchParams.get('code_challenge'), crypto.createHash('sha256').update(state.verifier).digest('base64url'));
    assert.equal(url.searchParams.get('scope'), 'read:user user:email');
    assert.equal(state.returnTo, '/');
    assert.equal(url.href.includes(state.verifier), false);
}));
test('a forged callback never contacts GitHub', () => withApi(CONFIGURED, async (handler) => {
    await withFetch([], async (calls) => {
        const res = await callback(handler, { nonce: 'forged' });
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('github_error'), 'invalid_state');
        assert.equal(calls.length, 0);
        assert.match(cookieValue(res, 'abs_github_oauth').raw, /Max-Age=0/);
    });
}));
test('first GitHub sign-in creates a usable account using a verified email and discards the access token', () => withApi(CONFIGURED, async (handler) => {
    let saved;
    User.findOne = async () => null;
    User.exists = async () => false;
    User.prototype.save = async function () { saved = this; };
    await withFetch(GITHUB_ROUTES, async (calls) => {
        const res = await callback(handler);
        assert.equal(saved.email, 'player@example.com');
        assert.equal(saved.authProviders[0].providerUserId, '1234');
        assert.equal(saved.validateSync(), undefined);
        assert.equal(verifyToken(cookieValue(res, 'abs_auth_token').value).username, saved.username);
        assert.equal(JSON.stringify(saved).includes('access_token'), false);
        assert.ok(new URLSearchParams(calls[0].options.body).get('code_verifier'));
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('auth_event'), 'sign_up');
    });
}));
test('GitHub cannot take over an ABS account just by matching its email', () => withApi(CONFIGURED, async (handler) => {
    User.findOne = async () => null;
    User.exists = async () => true;
    User.prototype.save = async () => assert.fail('must not save');
    await withFetch(GITHUB_ROUTES, async () => {
        const res = await callback(handler);
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('github_error'), 'existing_account');
        assert.equal(cookieValue(res, 'abs_auth_token'), null);
    });
}));
test('unverified GitHub emails cannot create an account', () => withApi(CONFIGURED, async (handler) => {
    User.prototype.save = async () => assert.fail('must not save');
    await withFetch(GITHUB_ROUTES.map(([url, response]) => [url, url.endsWith('/emails') ? [200, [{ email: 'player@example.com', verified: false }]] : response]), async () => {
        const res = await callback(handler);
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('github_error'), 'unverified_email');
    });
}));
test('linking requires the same ABS session at start and callback', () => withApi(CONFIGURED, async (handler) => {
    const user = linkedUser();
    const other = linkedUser({ username: 'Other' });
    await withFetch([], async (calls) => {
        const res = await callback(handler, { action: 'link-github', session: sessionFor(user), callbackSession: sessionFor(other) });
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('github_error'), 'login_required');
        assert.equal(calls.length, 0);
    });
}));
test('an identity already connected elsewhere cannot be linked', () => withApi(CONFIGURED, async (handler) => {
    const user = linkedUser();
    User.findOne = async () => linkedUser({ username: 'Other' });
    User.findById = async () => user;
    User.prototype.save = async () => assert.fail('must not save');
    await withFetch(GITHUB_ROUTES, async () => {
        const res = await callback(handler, { action: 'link-github', session: sessionFor(user) });
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('github_error'), 'already_linked');
    });
}));
test('linking retains existing cards and returning GitHub sign-in opens that account', () => withApi(CONFIGURED, async (handler) => {
    const user = linkedUser({ battlePoints: 777 });
    User.findOne = async () => null;
    User.findById = async () => user;
    User.prototype.save = async function () { return this; };
    await withFetch(GITHUB_ROUTES, async () => {
        const res = await callback(handler, { action: 'link-github', session: sessionFor(user) });
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('github_linked'), '1');
        assert.equal(user.battlePoints, 777);
        User.findOne = async () => user;
        const login = await callback(handler);
        assert.equal(verifyToken(cookieValue(login, 'abs_auth_token').value).id, String(user._id));
    });
}));
test('the final sign-in method cannot be disconnected', () => withApi(CONFIGURED, async (handler) => {
    const user = linkedUser({ password: undefined, authProviders: [{ provider: 'github', providerUserId: '1234' }] });
    User.findById = () => ({ select: async () => user });
    const res = response();
    await handler({ method: 'POST', query: { action: 'unlink-github' }, body: {}, headers: { origin: 'https://animalbattlestats.com', host: 'animalbattlestats.com', cookie: `abs_auth_token=${sessionFor(user)}` } }, res);
    assert.equal(res.statusCode, 400);
    assert.equal(user.authProviders.length, 1);
}));
test('changing an existing password requires the current password; OAuth-only accounts can add one', () => withApi(CONFIGURED, async (handler) => {
    const user = linkedUser();
    User.findById = () => ({ select: async () => user });
    user.comparePassword = async (value) => value === 'right-current';
    let saves = 0;
    User.prototype.save = async () => { saves += 1; };
    const change = async (body) => {
        const res = response();
        await handler({ method: 'POST', query: { action: 'password' }, body, headers: { origin: 'https://animalbattlestats.com', host: 'animalbattlestats.com', cookie: `abs_auth_token=${sessionFor(user)}` } }, res);
        return res;
    };
    assert.equal((await change({ password: 'new-safe-password', currentPassword: 'wrong' })).statusCode, 400);
    assert.equal(saves, 0);
    assert.equal((await change({ password: 'new-safe-password', currentPassword: 'right-current' })).statusCode, 200);
    user.password = undefined;
    assert.equal((await change({ password: 'another-safe-password' })).statusCode, 200);
    assert.equal(saves, 2);
}));
test('Google OAuth state cannot be tampered with or used as a login session', () => withApi({ GOOGLE_CLIENT_ID: 'google-client', GOOGLE_CLIENT_SECRET: 'google-secret' }, async (handler) => {
    const start = await startFlow(handler, { action: 'google-start' });
    const signed = new URL(start.getHeader('Location')).searchParams.get('state');
    assert.equal(verifyToken(signed), null);
    assert.equal(verifyPurposeToken(signed, 'google-oauth').mode, 'login');
    const segments = signed.split('.');
    const changed = JSON.parse(Buffer.from(segments[1], 'base64url'));
    changed.mode = 'link';
    segments[1] = Buffer.from(JSON.stringify(changed)).toString('base64url');
    const res = response();
    await withFetch([], async (calls) => {
        await handler({ method: 'GET', query: { action: 'google-callback', state: segments.join('.'), code: 'abc' }, headers: { host: 'animalbattlestats.com', cookie: cookieValue(start, 'abs_google_oauth_state').raw.split(';')[0] } }, res);
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('google_error'), 'invalid_state');
        assert.equal(calls.length, 0);
    });
}));

