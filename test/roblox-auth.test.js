'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const User = require('../lib/models/User');
const { signToken, verifyToken, verifyPurposeToken } = require('../lib/auth');

// Roblox sign-in: PKCE authorization, the signed state cookie, account creation
// and linking, and the rules that keep a Roblox-only account reachable.

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
        stub('../lib/discord', { notifyDiscord: async () => {} })
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
    ROBLOX_CLIENT_ID: 'client-123',
    ROBLOX_CLIENT_SECRET: 'secret-456',
    ROBLOX_REDIRECT_URI: undefined,
    APP_URL: 'https://animalbattlestats.com',
    VERCEL_ENV: undefined
};

function cookieValue(res, name) {
    const cookies = [].concat(res.getHeader('Set-Cookie') || []);
    const cookie = cookies.find((entry) => entry.startsWith(`${name}=`));
    return cookie ? { raw: cookie, value: decodeURIComponent(cookie.slice(name.length + 1).split(';')[0]) } : null;
}

async function startFlow(handler, { action = 'roblox-start', query = {}, headers = {} } = {}) {
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

const ROBLOX_ROUTES = [
    ['https://apis.roblox.com/oauth/v1/token', [200, { access_token: 'access', token_type: 'Bearer' }]],
    ['https://apis.roblox.com/oauth/v1/userinfo', [200, { sub: '1516563360', preferred_username: 'TigerKid_22', nickname: 'Tiger Kid', name: 'TigerKid_22' }]]
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

test('purpose tokens are never sessions and sessions are never purpose tokens', () => {
    const state = signToken({ purpose: 'roblox-oauth', nonce: 'n', userId: 'u1', username: 'x' }, { expiresIn: 60 });
    assert.equal(verifyToken(state), null);
    assert.equal(verifyPurposeToken(state, 'roblox-oauth').nonce, 'n');
    assert.equal(verifyPurposeToken(state, 'other'), null);
    const session = signToken({ userId: 'u1', username: 'x' }, { expiresIn: 60 });
    assert.equal(verifyPurposeToken(session, 'roblox-oauth'), null);
    assert.deepEqual(verifyToken(session), { id: 'u1', username: 'x' });
});

test('the providers check reports Roblox sign-in only when it is configured', () => withApi({ ...CONFIGURED, ROBLOX_CLIENT_SECRET: undefined }, async (handler) => {
    const off = response();
    await handler({ method: 'GET', query: { action: 'providers' }, headers: {} }, off);
    assert.equal(off.body.data.roblox, false);
    process.env.ROBLOX_CLIENT_SECRET = 'secret';
    const on = response();
    await handler({ method: 'GET', query: { action: 'providers' }, headers: {} }, on);
    assert.equal(on.body.data.roblox, true);
}));

test('Roblox sign-in reports when it is not configured', () => withApi({ ...CONFIGURED, ROBLOX_CLIENT_ID: undefined }, async (handler) => {
    const res = await startFlow(handler);
    assert.equal(res.statusCode, 302);
    assert.match(res.getHeader('Location'), /^https:\/\/animalbattlestats\.com\/login\?roblox_error=not_configured/);
}));

test('Roblox sign-in starts a PKCE flow with a signed, API-scoped state cookie', () => withApi(CONFIGURED, async (handler) => {
    const res = await startFlow(handler, { query: { returnTo: '/roblox' } });
    assert.equal(res.statusCode, 302);
    const location = new URL(res.getHeader('Location'));
    assert.equal(location.origin + location.pathname, 'https://apis.roblox.com/oauth/v1/authorize');
    assert.equal(location.searchParams.get('client_id'), 'client-123');
    assert.equal(location.searchParams.get('redirect_uri'), 'https://animalbattlestats.com/api/auth?action=roblox-callback');
    assert.equal(location.searchParams.get('scope'), 'openid profile');
    assert.equal(location.searchParams.get('response_type'), 'code');
    assert.equal(location.searchParams.get('code_challenge_method'), 'S256');
    assert.equal(location.searchParams.has('client_secret'), false);

    const cookie = cookieValue(res, 'abs_roblox_oauth');
    assert.match(cookie.raw, /HttpOnly/);
    assert.match(cookie.raw, /Path=\/api\/auth/);
    assert.match(cookie.raw, /SameSite=Lax/);
    const state = verifyPurposeToken(cookie.value, 'roblox-oauth');
    assert.equal(state.nonce, location.searchParams.get('state'));
    assert.equal(state.mode, 'login');
    assert.equal(state.returnTo, '/roblox');
    assert.equal(crypto.createHash('sha256').update(state.verifier).digest('base64url'), location.searchParams.get('code_challenge'));
    assert.equal(location.toString().includes(state.verifier), false, 'the verifier never leaves the cookie');
}));

test('connecting Roblox requires a signed-in player', () => withApi(CONFIGURED, async (handler) => {
    const res = await startFlow(handler, { action: 'link-roblox' });
    assert.equal(res.statusCode, 302);
    const location = new URL(res.getHeader('Location'));
    assert.equal(location.pathname, '/login');
    assert.equal(location.searchParams.get('roblox_error'), 'login_required');
    assert.equal(location.searchParams.get('returnTo'), '/profile?tab=roblox');
}));

test('the callback rejects a state that does not match the cookie, before calling Roblox', () => withApi(CONFIGURED, async (handler) => {
    const start = await startFlow(handler);
    const cookie = cookieValue(start, 'abs_roblox_oauth').value;
    await withFetch([], async (calls) => {
        const res = response();
        await handler({ method: 'GET', query: { action: 'roblox-callback', state: 'forged', code: 'abc' }, headers: { host: 'animalbattlestats.com', cookie: `abs_roblox_oauth=${encodeURIComponent(cookie)}` } }, res);
        assert.equal(new URL(res.getHeader('Location')).searchParams.get('roblox_error'), 'invalid_state');
        assert.equal(calls.length, 0);
        assert.match(cookieValue(res, 'abs_roblox_oauth').raw, /Max-Age=0/);
    });
}));

async function callback(handler, { action = 'roblox-start', session } = {}) {
    const start = await startFlow(handler, { action, headers: session ? { cookie: `abs_auth_token=${session}` } : {} });
    const nonce = new URL(start.getHeader('Location')).searchParams.get('state');
    const stateCookie = cookieValue(start, 'abs_roblox_oauth').value;
    const cookies = [`abs_roblox_oauth=${encodeURIComponent(stateCookie)}`];
    if (session) cookies.push(`abs_auth_token=${session}`);
    const res = response();
    await handler({ method: 'GET', query: { action: 'roblox-callback', state: nonce, code: 'the-code' }, headers: { host: 'animalbattlestats.com', cookie: cookies.join('; ') } }, res);
    return { res, verifier: verifyPurposeToken(stateCookie, 'roblox-oauth').verifier };
}

test('a first Roblox sign-in creates an account named after the Roblox player, with no email', () => withApi(CONFIGURED, async (handler) => {
    const saved = [];
    User.findOne = async () => null;
    User.exists = async () => null;
    User.prototype.save = async function save() { saved.push(this); return this; };

    await withFetch(ROBLOX_ROUTES, async (calls) => {
        const { res, verifier } = await callback(handler);
        const tokenBody = new URLSearchParams(calls[0].options.body);
        assert.equal(tokenBody.get('grant_type'), 'authorization_code');
        assert.equal(tokenBody.get('code'), 'the-code');
        assert.equal(tokenBody.get('code_verifier'), verifier);
        assert.equal(tokenBody.get('client_secret'), 'secret-456');
        assert.equal(calls[1].options.headers.Authorization, 'Bearer access');

        assert.equal(saved.length, 1);
        const user = saved[0];
        assert.equal(user.username, 'TigerKid_22');
        assert.equal(user.displayName, 'Tiger Kid');
        assert.equal(user.email, 'roblox-1516563360@no-email.invalid');
        assert.deepEqual(user.authProviders.map((provider) => [provider.provider, provider.providerUserId]), [['roblox', '1516563360']]);
        assert.equal(user.roblox.userId, '1516563360');
        assert.equal(user.roblox.username, 'TigerKid_22');
        assert.equal(user.validateSync()?.errors?.password, undefined, 'a Roblox-only account needs no password');

        assert.equal(res.getHeader('Location'), 'https://animalbattlestats.com/profile?roblox_welcome=1');
        const session = cookieValue(res, 'abs_auth_token');
        assert.equal(verifyToken(session.value).username, 'TigerKid_22');
    });
}));

test('a returning Roblox player signs in to their linked account and their names refresh', () => withApi(CONFIGURED, async (handler) => {
    const existing = linkedUser({
        authProviders: [{ provider: 'roblox', providerUserId: '1516563360' }],
        roblox: { userId: '1516563360', username: 'OldName', displayName: 'Old' }
    });
    User.findOne = async (query) => {
        assert.deepEqual(query.authProviders.$elemMatch, { provider: 'roblox', providerUserId: '1516563360' });
        return existing;
    };
    User.prototype.save = async function save() { return this; };

    await withFetch(ROBLOX_ROUTES, async () => {
        const { res } = await callback(handler);
        assert.equal(verifyToken(cookieValue(res, 'abs_auth_token').value).username, 'existing_player');
        assert.equal(existing.roblox.username, 'TigerKid_22');
        assert.equal(existing.roblox.displayName, 'Tiger Kid');
        assert.equal(existing.authProviders.filter((provider) => provider.provider === 'roblox').length, 1);
    });
}));

test('connecting a Roblox account already linked to someone else is refused', () => withApi(CONFIGURED, async (handler) => {
    const me = linkedUser();
    const other = linkedUser({ username: 'someone_else', email: 'else@example.com', authProviders: [{ provider: 'roblox', providerUserId: '1516563360' }] });
    const session = signToken({ userId: String(me._id), username: me.username }, { expiresIn: 60 });
    let saves = 0;
    User.findOne = async () => other;
    User.findById = async () => me;
    User.prototype.save = async function save() { saves += 1; return this; };

    await withFetch(ROBLOX_ROUTES, async () => {
        const { res } = await callback(handler, { action: 'link-roblox', session });
        const location = new URL(res.getHeader('Location'));
        assert.equal(location.pathname, '/profile');
        assert.equal(location.searchParams.get('roblox_error'), 'already_linked');
        assert.equal(saves, 0);
        assert.equal(me.roblox, null);
    });
}));

test('connecting Roblox from a signed-in account links it and returns to the profile tab', () => withApi(CONFIGURED, async (handler) => {
    const me = linkedUser();
    const session = signToken({ userId: String(me._id), username: me.username }, { expiresIn: 60 });
    User.findOne = async () => null;
    User.findById = async () => me;
    User.prototype.save = async function save() { return this; };

    await withFetch(ROBLOX_ROUTES, async () => {
        const { res } = await callback(handler, { action: 'link-roblox', session });
        assert.equal(res.getHeader('Location'), 'https://animalbattlestats.com/profile?tab=roblox&roblox_linked=1');
        assert.equal(me.roblox.userId, '1516563360');
        assert.equal(me.email, 'player@example.com');
    });
}));

test('Roblox cannot be disconnected when it is the only way into the account', () => withApi(CONFIGURED, async (handler) => {
    const robloxOnly = new User({
        username: 'TigerKid_22',
        email: 'roblox-1516563360@no-email.invalid',
        authProviders: [{ provider: 'roblox', providerUserId: '1516563360' }],
        roblox: { userId: '1516563360', username: 'TigerKid_22' }
    });
    const session = signToken({ userId: String(robloxOnly._id), username: robloxOnly.username }, { expiresIn: 60 });
    User.findById = () => ({ select: async () => robloxOnly });
    User.prototype.save = async function save() { throw new Error('must not save'); };

    const res = response();
    await handler({ method: 'POST', query: { action: 'unlink-roblox' }, headers: { authorization: `Bearer ${session}` }, body: {} }, res);
    assert.equal(res.statusCode, 400);
    assert.match(res.body.error, /only way to sign in/);
}));

test('the account payload hides the placeholder email of a Roblox-made account', () => withApi(CONFIGURED, async (handler) => {
    const robloxOnly = new User({
        username: 'TigerKid_22',
        email: 'roblox-1516563360@no-email.invalid',
        authProviders: [{ provider: 'roblox', providerUserId: '1516563360' }],
        roblox: { userId: '1516563360', username: 'TigerKid_22', displayName: 'Tiger Kid' }
    });
    const session = signToken({ userId: String(robloxOnly._id), username: robloxOnly.username }, { expiresIn: 60 });
    User.findById = async () => robloxOnly;

    const res = response();
    await handler({ method: 'GET', query: { action: 'me' }, headers: { authorization: `Bearer ${session}` } }, res);
    const user = res.body.data.user;
    assert.equal(user.email, null);
    assert.equal(user.hasEmail, false);
    assert.equal(user.robloxLinked, true);
    assert.equal(user.roblox.username, 'TigerKid_22');
    assert.equal(user.roblox.profileUrl, 'https://www.roblox.com/users/1516563360/profile');
}));
