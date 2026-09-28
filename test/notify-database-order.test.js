'use strict';

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
process.env.ACTIVITY_HASH_SECRET ||= 'test-only-activity-secret';
process.env.MONGODB_URI ||= 'mongodb://127.0.0.1:27017/animal-battle-stats-test';
process.env.SITE_ORIGIN = 'https://animalbattlestats.com';

// Page-view notifications must connect to the database before the rate limit,
// which is a Mongo query. Without a connection mongoose buffers the query and
// times out, the handler's catch still answers 200, and no visit is stored or
// sent to Discord. This test's limiter fails the way the real one does when
// nothing has connected yet.

const test = require('node:test');
const assert = require('node:assert/strict');

function stubModule(relative, exports) {
    const resolved = require.resolve(relative);
    require.cache[resolved] = { id: resolved, filename: resolved, loaded: true, exports };
}

let connected = false;
const realLimiter = require('../lib/distributed-rate-limit');
stubModule('../lib/mongodb', { connectToDatabase: async () => { connected = true; } });
stubModule('../lib/distributed-rate-limit', {
    ...realLimiter,
    enforceRateLimit: async () => {
        if (!connected) throw new Error('Operation `rate_limit_buckets.findOneAndUpdate()` buffering timed out after 10000ms');
        return true;
    }
});
const notified = [];
stubModule('../lib/discord', {
    notifyDiscord: async (eventType, data) => { notified.push({ eventType, data }); return { success: true }; }
});
const background = [];
stubModule('@vercel/functions', { waitUntil: (promise) => { background.push(promise); } });

const animals = require('../api/animals');

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

test('a page view connects to the database first, then reaches Discord', async () => {
    const res = response();
    await animals({
        method: 'POST',
        query: { action: 'notify' },
        headers: { origin: 'https://animalbattlestats.com', 'user-agent': 'ABS Test Browser', 'x-forwarded-for': '203.0.113.9' },
        body: { type: 'site_visit', page: '/stats/whale-shark', sessionId: 's1' }
    }, res);
    await Promise.all(background);

    assert.equal(res.code, 200);
    assert.equal(connected, true);
    assert.equal(notified.length, 1);
    assert.equal(notified[0].eventType, 'site_visit');
    assert.equal(notified[0].data.page, '/stats/whale-shark');
});
