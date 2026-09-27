'use strict';

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
process.env.ACTIVITY_HASH_SECRET ||= 'test-only-activity-secret';
process.env.MONGODB_URI ||= 'mongodb://127.0.0.1:27017/animal-battle-stats-test';
process.env.SITE_ORIGIN = 'https://animalbattlestats.com';

const test = require('node:test');
const assert = require('node:assert/strict');

// Handlers bind these at require time, so stub them first: no database, a
// rate limiter that records each policy, and a notifier that records events.
function stubModule(relative, exports) {
    const resolved = require.resolve(relative);
    require.cache[resolved] = { id: resolved, filename: resolved, loaded: true, exports };
}

const realLimiter = require('../lib/distributed-rate-limit');
const limits = [];
let limiterAllows = true;
stubModule('../lib/mongodb', { connectToDatabase: async () => {} });
stubModule('../lib/distributed-rate-limit', {
    ...realLimiter,
    consumeRateLimit: async (policy) => {
        limits.push(policy);
        return { allowed: limiterAllows, remaining: limiterAllows ? policy.max - 1 : 0 };
    },
    enforceRateLimit: async (_res, policy) => {
        limits.push(policy);
        return true;
    }
});
const notified = [];
stubModule('../lib/discord', {
    notifyDiscord: async (eventType, data) => { notified.push({ eventType, data }); return { success: true }; }
});

const { signToken } = require('../lib/auth');
const Presence = require('../lib/models/Presence');
const User = require('../lib/models/User');
const Vote = require('../lib/models/Vote');
const Comment = require('../lib/models/Comment');
const ChatMessage = require('../lib/models/ChatMessage');
const BattleStats = require('../lib/models/BattleStats');
const SiteStats = require('../lib/models/SiteStats');
const community = require('../api/community');
const animals = require('../api/animals');

const SITE = 'https://animalbattlestats.com';
const PLAYER_ID = '507f1f77bcf86cd799439011';
const BROWSER = { origin: SITE, 'user-agent': 'ABS Test Browser', 'x-forwarded-for': '203.0.113.9' };

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

async function call(handler, req) {
    const res = response();
    await handler({ method: 'GET', headers: {}, body: {}, ...req }, res);
    return res;
}

function stub(target, name, value) {
    const original = target[name];
    target[name] = value;
    return () => { target[name] = original; };
}

test('presence rows expire on their own a couple of minutes after the last ping', () => {
    const ttl = Presence.schema.indexes().find(([fields]) => fields.lastSeen === 1);
    assert.equal(ttl?.[1]?.expireAfterSeconds, 120);
});

test('guests and players can ping; guests are stored under a keyed hash, players by id', async () => {
    const writes = [];
    const restore = stub(Presence, 'updateOne', async (filter, update, options) => {
        writes.push({ filter, update, options });
        return { acknowledged: true };
    });
    limits.length = 0;
    try {
        const guest = await call(community, {
            method: 'POST',
            query: { action: 'ping' },
            headers: BROWSER,
            body: { page: '/stats/african-lion?tab=fights' }
        });
        assert.equal(guest.code, 200);
        assert.equal(guest.body.tracked, true);
        assert.equal(limits[0].scope, 'community-presence-ping');
        assert.equal(limits[0].identity, 'visitor:203.0.113.9:ABS Test Browser');
        assert.match(writes[0].filter._id, /^visitor:[a-f0-9]{32}$/);
        assert.doesNotMatch(writes[0].filter._id, /203\.0\.113\.9|ABS Test/);
        assert.equal(writes[0].update.$set.userId, null);
        assert.equal(writes[0].update.$set.page, '/stats/african-lion');
        assert.ok(writes[0].update.$set.lastSeen instanceof Date);
        assert.equal(writes[0].options.upsert, true);

        const token = signToken({ userId: PLAYER_ID, username: 'rami' }, { expiresIn: 60 });
        const player = await call(community, {
            method: 'POST',
            query: { action: 'ping' },
            headers: { ...BROWSER, cookie: `abs_auth_token=${token}` },
            body: { page: '/rankings' }
        });
        assert.equal(player.body.tracked, true);
        assert.equal(limits[1].identity, `user:${PLAYER_ID}`);
        assert.equal(writes[1].filter._id, `user:${PLAYER_ID}`);
        assert.equal(writes[1].update.$set.userId, PLAYER_ID);

        limiterAllows = false;
        const limited = await call(community, {
            method: 'POST',
            query: { action: 'ping' },
            headers: BROWSER,
            body: { page: '/' }
        });
        assert.equal(limited.code, 200);
        assert.equal(limited.body.tracked, false);
        assert.equal(writes.length, 2);

        const foreign = await call(community, {
            method: 'POST',
            query: { action: 'ping' },
            headers: { ...BROWSER, origin: 'https://attacker.example' },
            body: {}
        });
        assert.equal(foreign.code, 403);
    } finally {
        limiterAllows = true;
        restore();
    }
});

test('presence counts every recent tab but only names signed-in players', async () => {
    const filters = [];
    const restorers = [
        stub(Presence, 'countDocuments', async (filter) => {
            filters.push(filter);
            return filter.userId === null ? 3 : 5;
        }),
        stub(Presence, 'find', (filter) => {
            filters.push(filter);
            const rows = [
                { userId: PLAYER_ID, page: '/rankings' },
                { userId: '507f1f77bcf86cd799439012', page: '/' }
            ];
            return { sort: () => ({ limit: () => ({ select: () => ({ lean: async () => rows }) }) }) };
        }),
        stub(User, 'find', () => ({
            select: () => ({
                lean: async () => [{ _id: PLAYER_ID, username: 'rami', displayName: 'Rami', profileAnimal: 'Orca' }]
            })
        }))
    ];
    try {
        const before = Date.now();
        const res = await call(community, { query: { action: 'presence' } });
        assert.equal(res.code, 200);
        assert.equal(res.body.count, 5);
        assert.equal(res.body.guests, 3);
        // A player whose account is gone is still counted, just not listed.
        assert.deepEqual(res.body.data, [{ username: 'Rami', profileAnimal: 'Orca', page: '/rankings' }]);
        for (const filter of filters) {
            const windowMs = before - filter.lastSeen.$gte.getTime();
            assert.ok(windowMs >= 119000 && windowMs <= 121000, `window ${windowMs}ms`);
        }
    } finally {
        restorers.forEach((restore) => restore());
    }
});

test('site stats report online now from shared presence, not one instance', async () => {
    const restorers = [
        stub(SiteStats, 'findOne', async () => ({ totalVisits: 10, totalComparisons: 2, totalTournaments: 1 })),
        stub(User, 'countDocuments', async () => 7),
        stub(Vote, 'countDocuments', async () => 8),
        stub(Comment, 'countDocuments', async () => 3),
        stub(ChatMessage, 'countDocuments', async () => 2),
        stub(BattleStats, 'aggregate', async () => [{ totalMatches: 40 }]),
        stub(Presence, 'countDocuments', async (filter) => {
            assert.ok(filter.lastSeen.$gte instanceof Date);
            return 4;
        })
    ];
    try {
        const res = await call(community, { query: { action: 'stats' } });
        assert.equal(res.code, 200);
        assert.equal(res.body.data.onlineNow, 4);
        assert.equal(res.body.data.totalComments, 5);
    } finally {
        restorers.forEach((restore) => restore());
    }
});

test('every page view is notified under its own budget; leaving and logout share a smaller one', async () => {
    limits.length = 0;
    notified.length = 0;
    const notify = (body) => call(animals, { method: 'POST', query: { action: 'notify' }, headers: BROWSER, body });

    await notify({ page: '/rankings', referrer: 'https://www.google.com/', pages: 2, sessionId: 'visit-1' });
    await notify({ type: 'site_leave', page: '/rankings', duration: '2m 3s', pages: 2, sessionId: 'visit-1' });
    await notify({ type: 'logout' });

    assert.deepEqual(limits.map(({ scope, max, windowMs }) => ({ scope, max, windowMs })), [
        { scope: 'browser-visit-notify', max: 120, windowMs: 30 * 60 * 1000 },
        { scope: 'browser-lifecycle-notify', max: 20, windowMs: 30 * 60 * 1000 },
        { scope: 'browser-lifecycle-notify', max: 20, windowMs: 30 * 60 * 1000 }
    ]);
    assert.deepEqual(notified.map(({ eventType }) => eventType), ['site_visit', 'site_leave', 'logout']);
    assert.equal(notified[0].data.referrer, 'https://www.google.com/');
    assert.equal(notified[0].data.pages, 2);
    assert.equal(notified[0].data.sessionId, 'visit-1');
});
