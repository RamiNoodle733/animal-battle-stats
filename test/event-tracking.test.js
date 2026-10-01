'use strict';

// The owner's event tracking: accounts left out, which events reach Discord,
// pages named for people, and the visit details the messages carry.

process.env.MONGODB_URI ||= 'mongodb://127.0.0.1:27017/animal-battle-stats-test';
process.env.ACTIVITY_HASH_SECRET ||= 'test-only-activity-secret';

const test = require('node:test');
const assert = require('node:assert/strict');

const dbPath = require.resolve('../lib/mongodb');
require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: { connectToDatabase: async () => {} } };

const SiteActivity = require('../lib/models/SiteActivity');
const SiteSetting = require('../lib/models/SiteSetting');
const tracking = require('../lib/tracking-settings');
const { describePage, cleanSearch } = require('../lib/page-labels');
const { sanitizeEventData } = require('../lib/activity-logger');
const { createEmbed, notifyDiscord } = require('../lib/discord');

test('the owner account is left out by default; accounts match by id or name, never "Anonymous"', async () => {
    tracking.resetTrackingCache();
    const settings = await tracking.getTrackingSettings();
    assert.deepEqual(settings.ignored.map((entry) => entry.username), ['RamiNoodle733']);
    assert.equal(tracking.isIgnoredAccount(settings, { username: 'raminoodle733' }), true);
    assert.equal(tracking.isIgnoredAccount(settings, { username: 'Someone' }), false);
    assert.equal(tracking.isIgnoredAccount(settings, { username: 'Anonymous' }), false);

    const byId = tracking.normalizeTrackingSettings({ ignored: [{ username: 'OldName', userId: '64b7f0c2a1b2c3d4e5f60718' }] });
    assert.equal(tracking.isIgnoredAccount(byId, { userId: '64b7f0c2a1b2c3d4e5f60718', username: 'RenamedSince' }), true);
    // An empty list stays empty (the owner chose to track everyone).
    assert.deepEqual(tracking.normalizeTrackingSettings({ ignored: [] }).ignored, []);
    // Junk is dropped, duplicates collapse.
    assert.deepEqual(tracking.normalizeTrackingSettings({ ignored: ['a b', 'Bob', 'bob', { username: '<x>' }] }).ignored.map((entry) => entry.username), ['Bob']);
});

test('page views go to Discord every time, only on landing, or never; other types can be turned off', () => {
    const settings = (discord) => tracking.normalizeTrackingSettings({ ignored: [], discord });
    assert.equal(tracking.postsToDiscord(settings({}), 'site_visit', { pages: 5 }), true);
    assert.equal(tracking.postsToDiscord(settings({ pageViews: 'landing' }), 'site_visit', { pages: 1 }), true);
    assert.equal(tracking.postsToDiscord(settings({ pageViews: 'landing' }), 'site_visit', { pages: 2 }), false);
    assert.equal(tracking.postsToDiscord(settings({ pageViews: 'off' }), 'site_visit', { pages: 1 }), false);
    assert.equal(tracking.postsToDiscord(settings({ off: ['login', 'nonsense', 'site_visit'] }), 'login'), false);
    assert.equal(tracking.postsToDiscord(settings({ off: ['login'] }), 'signup'), true);
    assert.deepEqual(settings({ off: ['login', 'nonsense', 'site_visit'] }).discord.off, ['login']);
    assert.equal(settings({ pageViews: 'sometimes' }).discord.pageViews, 'all');
});

test('pages are named for people', () => {
    const label = (page, search) => describePage(page, search).label;
    assert.equal(label('/'), 'Home');
    assert.equal(label('/stats/cassowary'), 'Cassowary');
    assert.equal(label('/compare/african-lion-vs-siberian-tiger'), 'African Lion vs Siberian Tiger');
    assert.equal(label('/compare/human-vs-cassowary'), 'Human vs Cassowary');
    assert.equal(label('/compare', '?a=human&b=cassowary&na=10'), 'Versus: 10 Humans vs Cassowary');
    assert.equal(label('/compare'), 'Versus');
    assert.equal(label('/rankings/strongest'), 'Rankings: Strongest');
    assert.equal(label('/tier-list/birds'), 'Tier list: Birds');
    assert.equal(label('/profile/Bob'), "Bob's profile");
    assert.equal(describePage('/stats/cassowary').kind, 'Animal page');
    assert.equal(describePage('/compare', '?a=human&b=cassowary').url, 'https://animalbattlestats.com/compare?a=human&b=cassowary');

    // Only Versus keeps a query, and only the parts that name the fight.
    assert.equal(cleanSearch('/compare', '?a=Human&b=cassowary&na=10&nb=1&utm_source=x'), '?a=human&b=cassowary&na=10');
    assert.equal(cleanSearch('/stats/cassowary', '?a=human&b=cassowary'), null);
    assert.equal(sanitizeEventData('site_visit', { page: '/compare', search: '?a=human&b=<script>' }).search, '?a=human');
    assert.deepEqual(sanitizeEventData('site_leave', { path: ['/', '/compare?a=human&b=cassowary&x=1', 'javascript:alert(1)'] }).path.slice(0, 2), ['/', '/compare?a=human&b=cassowary']);
});

test('Discord says which page was viewed, who it was, and how the visit went', () => {
    const landing = createEmbed('site_visit', sanitizeEventData('site_visit', {
        username: 'Anonymous', visitor: 'a1b2c3', page: '/stats/cassowary', pages: 1, visitNumber: 3,
        lastVisitAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(), referrer: 'https://www.google.com/search'
    }));
    assert.match(landing.title, /Cassowary$/);
    assert.equal(landing.url, 'https://animalbattlestats.com/stats/cassowary');
    assert.equal(landing.description, '**Guest a1b2c3** landed here from google.com');
    assert.match(landing.fields.find((field) => field.name.endsWith(' Visit')).value, /^Back for their 3rd visit \(last 2 days ago\)$/);

    const versus = createEmbed('site_visit', sanitizeEventData('site_visit', { username: 'Bob', page: '/compare', search: '?a=human&b=cassowary&na=10', pages: 4 }));
    assert.match(versus.title, /Versus: 10 Humans vs Cassowary$/);
    assert.equal(versus.description, '**Bob** · page 4 of their visit');
    assert.equal(versus.fields[0].value, '[Bob](https://animalbattlestats.com/profile/Bob)');

    const leave = createEmbed('site_leave', sanitizeEventData('site_leave', {
        username: 'Anonymous', visitor: 'a1b2c3', page: '/compare/african-lion-vs-siberian-tiger', duration: '4m 12s', pages: 3,
        path: ['/', '/stats/cassowary', '/compare/african-lion-vs-siberian-tiger']
    }));
    assert.equal(leave.title, '👋 Guest a1b2c3 left after 4m 12s');
    assert.equal(leave.fields.find((field) => field.name.endsWith('Their Visit')).value, 'Home → Cassowary → African Lion vs Siberian Tiger');

    // A page address is the visitor's word: markdown in it cannot make a link.
    const crafted = createEmbed('site_visit', sanitizeEventData('site_visit', { page: '/profile/x](https://evil.example)', pages: 2 }));
    assert.equal(crafted.fields.find((field) => field.name.endsWith(' Page')).value, '[Profile](https://animalbattlestats.com/profile/x]%28https://evil.example%29)');
    assert.doesNotMatch(crafted.url, /[()]/);

    const longPath = Array.from({ length: 40 }, (_, index) => (index % 2 ? '/stats/cassowary' : '/compare/african-lion-vs-siberian-tiger'));
    const long = createEmbed('site_leave', sanitizeEventData('site_leave', { page: '/', path: longPath }));
    assert.ok(long.fields.find((field) => field.name.endsWith('Their Visit')).value.length <= 1000);
});

function stubDelivery() {
    const contextKey = Symbol.for('@vercel/request-context');
    const saved = {
        create: SiteActivity.create,
        findOneAndUpdate: SiteActivity.findOneAndUpdate,
        updateOne: SiteActivity.updateOne,
        find: SiteActivity.find,
        settingUpdate: SiteSetting.updateOne,
        fetch: global.fetch,
        context: globalThis[contextKey],
        discord: process.env.DISCORD_WEBHOOK_URL,
        slack: process.env.SLACK_WEBHOOK_URL
    };
    const state = { created: [], posted: [], background: [] };
    process.env.DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1/secret';
    delete process.env.SLACK_WEBHOOK_URL;
    globalThis[contextKey] = { get: () => ({ waitUntil: (promise) => state.background.push(promise) }) };
    let claimable = null;
    SiteActivity.create = async (payload) => {
        state.created.push(payload);
        claimable = payload.discordDelivery ? { _id: 'e1', ...payload, discordDelivery: { ...payload.discordDelivery, attempts: 1 } } : null;
        return { _id: 'e1' };
    };
    SiteActivity.findOneAndUpdate = () => ({ lean: async () => { const doc = claimable; claimable = null; return doc; } });
    SiteActivity.updateOne = async () => ({ acknowledged: true });
    SiteActivity.find = () => ({ sort: () => ({ limit: () => ({ select: () => ({ lean: async () => [] }) }) }) });
    SiteSetting.updateOne = async () => ({ acknowledged: true });
    global.fetch = async (_url, options) => {
        state.posted.push(JSON.parse(options.body));
        return new Response(JSON.stringify({ id: 'm1' }), { status: 200 });
    };
    state.restore = () => {
        SiteActivity.create = saved.create;
        SiteActivity.findOneAndUpdate = saved.findOneAndUpdate;
        SiteActivity.updateOne = saved.updateOne;
        SiteActivity.find = saved.find;
        SiteSetting.updateOne = saved.settingUpdate;
        global.fetch = saved.fetch;
        if (saved.context === undefined) delete globalThis[contextKey];
        else globalThis[contextKey] = saved.context;
        if (saved.discord === undefined) delete process.env.DISCORD_WEBHOOK_URL;
        else process.env.DISCORD_WEBHOOK_URL = saved.discord;
        if (saved.slack === undefined) delete process.env.SLACK_WEBHOOK_URL;
        else process.env.SLACK_WEBHOOK_URL = saved.slack;
        tracking.resetTrackingCache();
    };
    return state;
}

test('an account left out is neither stored nor posted', async () => {
    const state = stubDelivery();
    try {
        tracking.resetTrackingCache();
        const result = await notifyDiscord('vote', { user: 'RamiNoodle733', animal: 'Cassowary', voteType: 'up' }, null);
        assert.equal(result.skipped, true);
        assert.equal(result.reason, 'ignored-account');
        assert.equal(state.created.length, 0);
        assert.equal(state.posted.length, 0);
    } finally {
        state.restore();
    }
});

test('events the owner does not post are still stored, without a Discord delivery', async () => {
    const state = stubDelivery();
    try {
        await tracking.saveTrackingSettings({ ignored: [], discord: { pageViews: 'landing', off: ['login'] } }, 'owner');

        await notifyDiscord('site_visit', { username: 'Anonymous', page: '/stats/cassowary', pages: 3 }, null);
        await notifyDiscord('login', { username: 'Bob' }, null);
        assert.equal(state.created.length, 2);
        assert.ok(state.created.every((payload) => !payload.discordDelivery));

        await notifyDiscord('site_visit', { username: 'Anonymous', page: '/stats/cassowary', pages: 1 }, null);
        await Promise.all(state.background);
        assert.equal(state.created.length, 3);
        assert.equal(state.created[2].discordDelivery.status, 'pending');
        assert.equal(state.posted.length, 1);
        assert.match(state.posted[0].embeds[0].title, /Cassowary$/);
    } finally {
        state.restore();
    }
});
