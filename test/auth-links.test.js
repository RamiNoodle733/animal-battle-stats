'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

// Links in emails and OAuth redirects must use the site's domain in production,
// never the per-deployment *.vercel.app address.
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

function loadHandler() {
    const dbPath = require.resolve('../lib/mongodb');
    const apiPath = require.resolve('../api/auth');
    const prior = require.cache[dbPath];
    require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: { connectToDatabase: async () => {} } };
    delete require.cache[apiPath];
    const handler = require('../api/auth');
    return {
        handler,
        restore() {
            delete require.cache[apiPath];
            if (prior) require.cache[dbPath] = prior;
            else delete require.cache[dbPath];
        }
    };
}

function withEnv(values, fn) {
    const saved = Object.fromEntries(Object.keys(values).map((key) => [key, process.env[key]]));
    for (const [key, value] of Object.entries(values)) {
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
    }
    return fn().finally(() => {
        for (const [key, value] of Object.entries(saved)) {
            if (value === undefined) delete process.env[key];
            else process.env[key] = value;
        }
    });
}

test('production auth redirects use the site domain, not the deployment URL', () => withEnv({
    VERCEL_ENV: 'production',
    VERCEL_URL: 'animal-battle-stats-abc123.vercel.app',
    VERCEL_PROJECT_PRODUCTION_URL: undefined,
    APP_URL: undefined,
    NEXT_PUBLIC_APP_URL: undefined,
    GOOGLE_CLIENT_ID: undefined,
    GOOGLE_CLIENT_SECRET: undefined
}, async () => {
    const { handler, restore } = loadHandler();
    try {
        const res = response();
        await handler({ method: 'GET', query: { action: 'google-start', returnTo: '/' }, headers: { host: 'animalbattlestats.com' } }, res);
        assert.equal(res.statusCode, 302);
        assert.match(res.getHeader('Location'), /^https:\/\/animalbattlestats\.com\/login\?google_error=not_configured/);
    } finally {
        restore();
    }
}));

test('the providers check reports whether Google sign-in is configured', () => withEnv({
    GOOGLE_CLIENT_ID: undefined,
    GOOGLE_CLIENT_SECRET: undefined,
    ROBLOX_CLIENT_ID: undefined,
    ROBLOX_CLIENT_SECRET: undefined
}, async () => {
    const { handler, restore } = loadHandler();
    try {
        const off = response();
        await handler({ method: 'GET', query: { action: 'providers' }, headers: {} }, off);
        assert.deepEqual(off.body, { success: true, data: { google: false, roblox: false, github: false, email: false } });
        process.env.GOOGLE_CLIENT_ID = 'id';
        process.env.GOOGLE_CLIENT_SECRET = 'secret';
        const on = response();
        await handler({ method: 'GET', query: { action: 'providers' }, headers: {} }, on);
        assert.deepEqual(on.body, { success: true, data: { google: true, roblox: false, github: false, email: false } });
    } finally {
        restore();
    }
}));

test('unavailable sign-in providers preserve collection intent and reject unsafe or looping destinations', () => withEnv({
    GOOGLE_CLIENT_ID: undefined, GOOGLE_CLIENT_SECRET: undefined,
    ROBLOX_CLIENT_ID: undefined, ROBLOX_CLIENT_SECRET: undefined,
    GITHUB_CLIENT_ID: undefined, GITHUB_CLIENT_SECRET: undefined
}, async () => {
    const { handler, restore } = loadHandler();
    try {
        for (const provider of ['google', 'roblox', 'github']) {
            for (const [returnTo, expected] of [
                ['/collection?animal=african-lion', '/collection?animal=african-lion'],
                ['/compare?a=gorilla#fight', '/compare?a=gorilla#fight'],
                ['//evil.example', '/'], ['/\\evil.example', '/'], ['/login?returnTo=/login', '/'],
                ['/API/auth?action=logout', '/'], ['https://evil.example', '/'],
                ['/collection/../login', '/'], ['/%61pi/auth?action=logout', '/'],
                ['/%2f%2fevil.example', '/'], ['/%5cevil.example', '/'],
                ['/collection/../api/auth', '/'], ['/%zz', '/']
            ]) {
                const res = response();
                await handler({ method: 'GET', query: { action: `${provider}-start`, returnTo }, headers: { host: 'animalbattlestats.com' } }, res);
                const destination = new URL(res.getHeader('Location'));
                assert.equal(destination.origin, 'https://animalbattlestats.com');
                assert.equal(destination.pathname, '/login');
                assert.equal(destination.searchParams.get('returnTo'), expected, `${provider}: ${returnTo}`);
            }
        }
    } finally { restore(); }
}));

test('cancelled provider sign-in keeps the signed original destination for another login method', () => withEnv({
    GOOGLE_CLIENT_ID: 'test-client', GOOGLE_CLIENT_SECRET: 'test-secret',
    ROBLOX_CLIENT_ID: 'test-client', ROBLOX_CLIENT_SECRET: 'test-secret',
    GITHUB_CLIENT_ID: 'test-client', GITHUB_CLIENT_SECRET: 'test-secret'
}, async () => {
    const { handler, restore } = loadHandler();
    try {
        for (const provider of ['google', 'roblox', 'github']) {
            const start = response();
            const headers = { host: 'animalbattlestats.com' };
            await handler({ method: 'GET', query: { action: `${provider}-start`, returnTo: '/collection?animal=gorilla' }, headers }, start);
            const state = new URL(start.getHeader('Location')).searchParams.get('state');
            const cookies = [].concat(start.getHeader('Set-Cookie')).map((cookie) => cookie.split(';')[0]).join('; ');
            const res = response();
            await handler({ method: 'GET', query: { action: `${provider}-callback`, state, error: 'access_denied' }, headers: { ...headers, cookie: cookies } }, res);
            const destination = new URL(res.getHeader('Location'));
            assert.equal(destination.pathname, '/login');
            assert.equal(destination.searchParams.get(`${provider}_error`), 'cancelled');
            assert.equal(destination.searchParams.get('returnTo'), '/collection?animal=gorilla');
        }
    } finally { restore(); }
}));
