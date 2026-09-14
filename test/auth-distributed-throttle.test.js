'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const User = require('../lib/models/User');

function response() {
    return {
        headers: {},
        setHeader(name, value) { this.headers[name] = value; },
        getHeader(name) { return this.headers[name]; },
        status(code) { this.code = code; return this; },
        json(body) { this.body = body; return this; },
        end() { return this; }
    };
}

async function withAuthApi(rateLimitMock, run) {
    const databasePath = require.resolve('../lib/mongodb');
    const rateLimitPath = require.resolve('../lib/distributed-rate-limit');
    const apiPath = require.resolve('../api/auth');
    const prior = {
        database: require.cache[databasePath],
        rateLimit: require.cache[rateLimitPath],
        api: require.cache[apiPath]
    };

    require.cache[databasePath] = {
        id: databasePath,
        filename: databasePath,
        loaded: true,
        exports: { connectToDatabase: async () => {} }
    };
    require.cache[rateLimitPath] = {
        id: rateLimitPath,
        filename: rateLimitPath,
        loaded: true,
        exports: rateLimitMock
    };
    delete require.cache[apiPath];

    try {
        await run(require('../api/auth'));
    } finally {
        delete require.cache[apiPath];
        for (const [cachePath, cached] of [
            [databasePath, prior.database],
            [rateLimitPath, prior.rateLimit],
            [apiPath, prior.api]
        ]) {
            if (cached) require.cache[cachePath] = cached;
            else delete require.cache[cachePath];
        }
    }
}

for (const action of ['login', 'signup']) {
    test(`${action} consumes persistent IP and normalized identifier budgets before account access`, async () => {
        const policies = [];
        let userLookupCalled = false;
        const originalFindOne = User.findOne;
        User.findOne = () => {
            userLookupCalled = true;
            throw new Error('a throttled request must not query an account');
        };

        try {
            await withAuthApi({
                consumeRateLimit: async (policy) => {
                    policies.push(policy);
                    return { allowed: policy.scope.endsWith('-ip'), remaining: 0 };
                },
                clearRateLimit: async () => {
                    throw new Error('a rejected request must not clear a budget');
                },
                clientAddress: () => '203.0.113.10'
            }, async (handler) => {
                const res = response();
                const body = action === 'login'
                    ? { login: ' Target@Example.COM ', password: 'not-the-password' }
                    : { username: 'Target', email: ' Target@Example.COM ', password: 'valid-password' };

                await handler({ method: 'POST', query: { action }, headers: {}, body }, res);

                assert.equal(res.code, 429);
                assert.equal(res.body.success, false);
                assert.match(res.body.error, /unable to complete/i);
                assert.equal(res.headers['Retry-After'], action === 'login' ? '900' : '3600');
                assert.equal(userLookupCalled, false);
                assert.deepEqual(policies.map(({ scope, identity }) => ({ scope, identity })), [
                    { scope: `${action}-attempt-ip`, identity: '203.0.113.10' },
                    { scope: `${action}-attempt-id`, identity: 'target@example.com' }
                ]);
            });
        } finally {
            User.findOne = originalFindOne;
        }
    });
}

test('login does not reveal whether an account exists or uses Google sign-in', async () => {
    const originalFindOne = User.findOne;
    const outcomes = [null, { password: null }];
    User.findOne = () => ({ select: async () => outcomes.shift() });

    try {
        await withAuthApi({
            consumeRateLimit: async () => ({ allowed: true, remaining: 5 }),
            clearRateLimit: async () => {},
            clientAddress: () => '203.0.113.10'
        }, async (handler) => {
            const responses = [];
            for (const login of ['missing@example.com', 'google@example.com']) {
                const res = response();
                await handler({
                    method: 'POST',
                    query: { action: 'login' },
                    headers: {},
                    body: { login, password: 'not-the-password' }
                }, res);
                responses.push(res);
            }

            assert.equal(responses[0].code, 401);
            assert.equal(responses[1].code, 401);
            assert.equal(responses[0].body.error, responses[1].body.error);
            assert.match(responses[0].body.error, /Google sign-in/u);
        });
    } finally {
        User.findOne = originalFindOne;
    }
});

test('public profiles do not export the internal account identifier', async () => {
    const originalFindOne = User.findOne;
    User.findOne = async () => ({
        _id: '507f1f77bcf86cd799439011',
        username: 'Rami',
        displayName: 'Rami',
        role: 'user',
        level: 3,
        xp: 20,
        createdAt: new Date('2026-01-01T00:00:00.000Z')
    });

    try {
        await withAuthApi({
            consumeRateLimit: async () => ({ allowed: true, remaining: 5 }),
            clearRateLimit: async () => {},
            clientAddress: () => '203.0.113.10'
        }, async (handler) => {
            const res = response();
            await handler({
                method: 'GET',
                query: { action: 'user', username: 'Rami' },
                headers: {}
            }, res);

            assert.equal(res.code, 200);
            assert.equal(res.body.data.user.username, 'Rami');
            assert.equal(Object.hasOwn(res.body.data.user, 'id'), false);
            assert.equal(Object.hasOwn(res.body.data.user, '_id'), false);
        });
    } finally {
        User.findOne = originalFindOne;
    }
});

test('authentication no longer keeps process-local attempt buckets', () => {
    const source = fs.readFileSync(path.join(__dirname, '..', 'api', 'auth.js'), 'utf8');
    assert.doesNotMatch(source, /attemptBuckets|new Map\(\)/u);
});
