'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const RateLimitBucket = require('../lib/models/RateLimitBucket');
const {
    bucketId,
    requestIdentity,
    consumeRateLimit,
    clearRateLimit
} = require('../lib/distributed-rate-limit');

test('rate limit buckets are deterministic within a window and rotate afterward', () => {
    const now = new Date('2026-09-13T12:00:00.000Z');
    const sameWindow = new Date('2026-09-13T12:00:59.000Z');
    const nextWindow = new Date('2026-09-13T12:01:00.000Z');
    assert.equal(bucketId('post', 'user:1', now, 60_000), bucketId('post', 'user:1', sameWindow, 60_000));
    assert.notEqual(bucketId('post', 'user:1', now, 60_000), bucketId('post', 'user:1', nextWindow, 60_000));
    assert.match(bucketId('post', 'user:1', now, 60_000), /^[a-f0-9]{64}$/);
});

test('anonymous identity combines network and browser while users use server identity', () => {
    const req = { headers: { 'x-vercel-forwarded-for': '203.0.113.5, 10.0.0.1', 'user-agent': 'ABS Test' } };
    assert.equal(requestIdentity(req), 'visitor:203.0.113.5:ABS Test');
    assert.equal(requestIdentity(req, '507f1f77bcf86cd799439011'), 'user:507f1f77bcf86cd799439011');
});

test('distributed limiter uses a conditional atomic upsert and denies a full bucket', async () => {
    const original = RateLimitBucket.findOneAndUpdate;
    const calls = [];
    RateLimitBucket.findOneAndUpdate = (filter, update, options) => {
        calls.push({ filter, update, options });
        return { lean: async () => ({ count: 2 }) };
    };

    try {
        const allowed = await consumeRateLimit({
            scope: 'chat-post',
            identity: 'user:1',
            max: 3,
            windowMs: 60_000,
            now: new Date('2026-09-13T12:00:00.000Z')
        });
        assert.deepEqual(allowed, { allowed: true, remaining: 1 });
        assert.deepEqual(calls[0].filter.count, { $lt: 3 });
        assert.equal(calls[0].update.$inc.count, 1);
        assert.equal(calls[0].options.upsert, true);

        let attempt = 0;
        RateLimitBucket.findOneAndUpdate = (_filter, _update, options) => ({
            lean: async () => {
                attempt += 1;
                if (options.upsert) { const error = new Error('duplicate'); error.code = 11000; throw error; }
                return { count: 2 };
            }
        });
        assert.deepEqual(await consumeRateLimit({
            scope: 'chat-post',
            identity: 'user:1',
            max: 3,
            windowMs: 60_000
        }), { allowed: true, remaining: 1 });
        assert.equal(attempt, 2);

        RateLimitBucket.findOneAndUpdate = (_filter, _update, options) => ({
            lean: async () => {
                if (options.upsert) { const error = new Error('duplicate'); error.code = 11000; throw error; }
                return null;
            }
        });
        assert.deepEqual(await consumeRateLimit({
            scope: 'chat-post',
            identity: 'user:1',
            max: 3,
            windowMs: 60_000
        }), { allowed: false, remaining: 0 });
    } finally {
        RateLimitBucket.findOneAndUpdate = original;
    }
});

test('rate limit buckets expire automatically', () => {
    const indexes = RateLimitBucket.schema.indexes();
    assert.ok(indexes.some(([fields, options]) => fields.expiresAt === 1 && options.expireAfterSeconds === 0));
});

test('successful authentication can clear only its deterministic identifier bucket', async () => {
    const original = RateLimitBucket.deleteOne;
    let deletedFilter;
    RateLimitBucket.deleteOne = async (filter) => { deletedFilter = filter; };
    const now = new Date('2026-09-14T02:00:00.000Z');
    try {
        await clearRateLimit({
            scope: 'login-attempt-id',
            identity: 'user@example.com',
            windowMs: 15 * 60 * 1000,
            now
        });
        assert.deepEqual(deletedFilter, {
            _id: bucketId('login-attempt-id', 'user@example.com', now, 15 * 60 * 1000)
        });
    } finally {
        RateLimitBucket.deleteOne = original;
    }
});
