'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const { enforceRequestSecurity, bodyByteLength } = require('../lib/request-security');

function response() {
    return {
        status(code) { this.code = code; return this; },
        json(body) { this.body = body; return this; }
    };
}

function request(overrides = {}) {
    return {
        method: 'POST',
        headers: {},
        body: {},
        ...overrides
    };
}

test('request body budgets use both declared and parsed body sizes', () => {
    assert.equal(bodyByteLength({ value: 'é' }), Buffer.byteLength(JSON.stringify({ value: 'é' })));

    const declaredResponse = response();
    assert.equal(enforceRequestSecurity(request({
        headers: { 'content-length': '1025' }
    }), declaredResponse, { maxBodyBytes: 1024, allowUnauthenticated: true }), false);
    assert.equal(declaredResponse.code, 413);

    const parsedResponse = response();
    assert.equal(enforceRequestSecurity(request({
        body: { value: 'x'.repeat(1024) }
    }), parsedResponse, { maxBodyBytes: 1024, allowUnauthenticated: true }), false);
    assert.equal(parsedResponse.code, 413);

    const malformedResponse = response();
    assert.equal(enforceRequestSecurity(request({
        headers: { 'content-length': 'not-a-number' }
    }), malformedResponse, { maxBodyBytes: 1024, allowUnauthenticated: true }), false);
    assert.equal(malformedResponse.code, 413);
});

test('cookie-authenticated mutations require an allowed browser Origin', () => {
    const priorSiteOrigin = process.env.SITE_ORIGIN;
    process.env.SITE_ORIGIN = 'https://animalbattlestats.com';
    try {
        for (const origin of [undefined, 'https://attacker.example']) {
            const res = response();
            const headers = { cookie: 'abs_auth_token=ambient-token' };
            if (origin) headers.origin = origin;
            assert.equal(enforceRequestSecurity(request({ headers }), res, { maxBodyBytes: 1024 }), false);
            assert.equal(res.code, 403);
            assert.equal(res.body.error, 'Request origin not allowed');
        }

        const trusted = response();
        assert.equal(enforceRequestSecurity(request({
            headers: {
                cookie: 'abs_auth_token=ambient-token',
                origin: 'https://animalbattlestats.com'
            }
        }), trusted, { maxBodyBytes: 1024 }), true);
    } finally {
        if (priorSiteOrigin === undefined) delete process.env.SITE_ORIGIN;
        else process.env.SITE_ORIGIN = priorSiteOrigin;
    }
});

test('explicit Bearer clients bypass browser-origin checks and public mutations are opt-in', () => {
    const bearer = response();
    assert.equal(enforceRequestSecurity(request({
        headers: {
            authorization: 'Bearer explicit-token',
            cookie: 'abs_auth_token=ambient-token',
            origin: 'https://attacker.example'
        }
    }), bearer, { maxBodyBytes: 1024 }), true);

    const nonCanonicalBearer = response();
    assert.equal(enforceRequestSecurity(request({
        headers: {
            authorization: 'bearer not-accepted-by-auth',
            cookie: 'abs_auth_token=ambient-token',
            origin: 'https://attacker.example'
        }
    }), nonCanonicalBearer, { maxBodyBytes: 1024 }), false);
    assert.equal(nonCanonicalBearer.code, 403);

    const protectedResponse = response();
    assert.equal(enforceRequestSecurity(request(), protectedResponse, { maxBodyBytes: 1024 }), false);
    assert.equal(protectedResponse.code, 401);

    assert.equal(enforceRequestSecurity(request(), response(), {
        maxBodyBytes: 1024,
        allowUnauthenticated: true
    }), true);

    const browserOnly = response();
    assert.equal(enforceRequestSecurity(request({
        headers: { origin: 'https://attacker.example' }
    }), browserOnly, {
        maxBodyBytes: 1024,
        allowUnauthenticated: true,
        requireAllowedOrigin: true
    }), false);
    assert.equal(browserOnly.code, 403);
});

test('safe methods remain usable without Origin for OAuth callbacks and scheduled reads', () => {
    assert.equal(enforceRequestSecurity(request({
        method: 'GET',
        headers: { cookie: 'abs_auth_token=ambient-token' }
    }), response(), { maxBodyBytes: 1 }), true);
});

test('browser-only public telemetry accepts only the configured site origin', () => {
    const priorSiteOrigin = process.env.SITE_ORIGIN;
    process.env.SITE_ORIGIN = 'https://animalbattlestats.com';
    try {
        const trusted = response();
        assert.equal(enforceRequestSecurity(request({
            headers: { origin: 'https://animalbattlestats.com' }
        }), trusted, {
            maxBodyBytes: 1024,
            allowUnauthenticated: true,
            requireAllowedOrigin: true
        }), true);

        const missing = response();
        assert.equal(enforceRequestSecurity(request(), missing, {
            maxBodyBytes: 1024,
            allowUnauthenticated: true,
            requireAllowedOrigin: true
        }), false);
        assert.equal(missing.code, 403);
    } finally {
        if (priorSiteOrigin === undefined) delete process.env.SITE_ORIGIN;
        else process.env.SITE_ORIGIN = priorSiteOrigin;
    }
});

test('request boundary is wired into the assigned API surface', () => {
    const root = path.join(__dirname, '..');
    const apiFiles = [
        'auth.js', 'animals.js', path.join('animals', '[id].js'), 'battles.js',
        'rankings.js', 'votes.js', 'search.js', 'random.js', 'stats.js',
        'comments.js', 'chat.js', 'community.js'
    ];

    for (const relative of apiFiles) {
        const source = fs.readFileSync(path.join(root, 'api', relative), 'utf8');
        assert.match(source, /enforceRequestSecurity\(req, res,/u, `${relative} is missing its boundary`);
    }

    const animals = fs.readFileSync(path.join(root, 'api', 'animals.js'), 'utf8');
    const community = fs.readFileSync(path.join(root, 'api', 'community.js'), 'utf8');
    assert.match(animals, /scope: 'browser-lifecycle-notify'/u);
    assert.match(animals, /requireAllowedOrigin: req\.query\?\.action === 'notify'/u);
    assert.match(community, /const \{ page \} = req\.body \|\| \{\}/u);
});
