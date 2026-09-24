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
    GOOGLE_CLIENT_SECRET: undefined
}, async () => {
    const { handler, restore } = loadHandler();
    try {
        const off = response();
        await handler({ method: 'GET', query: { action: 'providers' }, headers: {} }, off);
        assert.deepEqual(off.body, { success: true, data: { google: false } });
        process.env.GOOGLE_CLIENT_ID = 'id';
        process.env.GOOGLE_CLIENT_SECRET = 'secret';
        const on = response();
        await handler({ method: 'GET', query: { action: 'providers' }, headers: {} }, on);
        assert.deepEqual(on.body, { success: true, data: { google: true } });
    } finally {
        restore();
    }
}));
