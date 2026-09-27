'use strict';

process.env.MONGODB_URI ||= 'mongodb://127.0.0.1:27017/animal-battle-stats-test';
process.env.ACTIVITY_HASH_SECRET ||= 'test-only-activity-secret';

const test = require('node:test');
const assert = require('node:assert/strict');

// Delivery talks to Mongo through SiteActivity; stub the connection before
// the notifier binds it.
const dbPath = require.resolve('../lib/mongodb');
require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: { connectToDatabase: async () => {} } };

const SiteActivity = require('../lib/models/SiteActivity');
const { sanitizeEventData } = require('../lib/activity-logger');
const {
    createEmbed,
    createSlackPayload,
    getSlackWebhookUrl,
    sanitizeDeliveryError,
    deliverActivity,
    notifyDiscord
} = require('../lib/discord');

const EVENT_TYPES = [
    'vote', 'vote_removed', 'vote_changed', 'comment', 'comment_reply',
    'comment_upvote', 'comment_downvote', 'comment_deleted', 'fight', 'signup',
    'login', 'site_visit', 'logout', 'site_leave', 'chat_message', 'chat_reply',
    'tournament_complete', 'tournament_quit', 'prestige', 'level_up', 'something_new'
];

test('every event becomes a Slack message within Block Kit limits', () => {
    const data = {
        username: 'Test', user: 'Test', animal: 'African Lion', animal1: 'African Lion', animal2: 'Siberian Tiger',
        content: 'x'.repeat(900), champion: 'Orca', bracketSize: 16, totalMatches: 15, pages: 4, duration: '3m 2s',
        matchHistory: Array.from({ length: 8 }, (_, index) => ({ winner: `W${index}`, loser: `L${index}` })),
        location: { formatted: 'Houston, TX, US' }, device: 'Mobile', browser: 'Safari', os: 'iOS'
    };
    for (const eventType of EVENT_TYPES) {
        const payload = createSlackPayload(createEmbed(eventType, data), 'event-1');
        assert.ok(payload.text.length > 0, eventType);
        const [attachment] = payload.attachments;
        assert.match(attachment.color, /^#[0-9a-f]{6}$/, eventType);
        assert.equal(attachment.blocks[0].type, 'header', eventType);
        assert.ok(attachment.blocks[0].text.text.length <= 150, eventType);
        assert.equal(attachment.blocks.at(-1).type, 'context', eventType);
        for (const block of attachment.blocks) {
            if (block.fields) {
                assert.ok(block.fields.length <= 10, eventType);
                for (const field of block.fields) assert.ok(field.text.length <= 2000, eventType);
            }
            if (block.type === 'section' && block.text) assert.ok(block.text.text.length <= 3000, eventType);
        }
        assert.ok(attachment.blocks.length <= 50, eventType);
    }
});

test('Slack text converts bold and escapes markup', () => {
    const payload = createSlackPayload({
        title: 'Battle',
        color: 0xff6b00,
        fields: [{ name: 'Matchup', value: '**Lion** vs **Tiger** <script>&', inline: false }]
    });
    const text = payload.attachments[0].blocks[1].text.text;
    assert.equal(text, '*Matchup*\n*Lion* vs *Tiger* &lt;script&gt;&amp;');
    assert.equal(payload.attachments[0].color, '#ff6b00');
});

test('only https Slack incoming webhooks are accepted, and they are redacted from errors', () => {
    const original = process.env.SLACK_WEBHOOK_URL;
    try {
        process.env.SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/T000/B000/secret';
        assert.equal(getSlackWebhookUrl(), 'https://hooks.slack.com/services/T000/B000/secret');
        process.env.SLACK_WEBHOOK_URL = 'http://hooks.slack.com/services/T000/B000/secret';
        assert.equal(getSlackWebhookUrl(), null);
        process.env.SLACK_WEBHOOK_URL = 'https://example.com/hook';
        assert.equal(getSlackWebhookUrl(), null);
        delete process.env.SLACK_WEBHOOK_URL;
        assert.equal(getSlackWebhookUrl(), null);
    } finally {
        if (original === undefined) delete process.env.SLACK_WEBHOOK_URL;
        else process.env.SLACK_WEBHOOK_URL = original;
    }
    assert.equal(
        sanitizeDeliveryError(new Error('failed https://hooks.slack.com/services/T000/B000/secret')),
        'failed [redacted-webhook]'
    );
});

function stubActivity(field) {
    const activity = {
        _id: 'a1',
        eventType: 'fight',
        username: 'Rami',
        page: '/compare',
        metadata: { animal1: 'African Lion', animal2: 'Siberian Tiger' },
        [field]: { status: 'pending', eventId: 'evt-1', attempts: 1 }
    };
    const updates = [];
    const originals = { findOneAndUpdate: SiteActivity.findOneAndUpdate, updateOne: SiteActivity.updateOne };
    SiteActivity.findOneAndUpdate = () => ({ lean: async () => activity });
    SiteActivity.updateOne = async (filter, update) => { updates.push(update.$set); return { acknowledged: true }; };
    return {
        updates,
        restore() {
            SiteActivity.findOneAndUpdate = originals.findOneAndUpdate;
            SiteActivity.updateOne = originals.updateOne;
        }
    };
}

test('Slack deliveries post the formatted message and record success', async () => {
    const stub = stubActivity('slackDelivery');
    const originalFetch = global.fetch;
    const originalUrl = process.env.SLACK_WEBHOOK_URL;
    const calls = [];
    process.env.SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/T000/B000/secret';
    global.fetch = async (url, options) => {
        calls.push({ url, body: JSON.parse(options.body) });
        return new Response('ok', { status: 200 });
    };
    try {
        const result = await deliverActivity('a1', 'slack');
        assert.equal(result.success, true);
        assert.equal(calls.length, 1);
        assert.equal(calls[0].url, 'https://hooks.slack.com/services/T000/B000/secret');
        assert.match(calls[0].body.text, /Battle Comparison/);
        assert.match(JSON.stringify(calls[0].body.attachments[0].blocks), /African Lion/);
        assert.equal(stub.updates.at(-1)['slackDelivery.status'], 'sent');
    } finally {
        global.fetch = originalFetch;
        if (originalUrl === undefined) delete process.env.SLACK_WEBHOOK_URL;
        else process.env.SLACK_WEBHOOK_URL = originalUrl;
        stub.restore();
    }
});

test('rate-limited deliveries are retried after Retry-After', async () => {
    const stub = stubActivity('discordDelivery');
    const originalFetch = global.fetch;
    const originalUrl = process.env.DISCORD_WEBHOOK_URL;
    process.env.DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1/secret';
    global.fetch = async () => new Response('slow down', { status: 429, headers: { 'retry-after': '12' } });
    try {
        const before = Date.now();
        const result = await deliverActivity('a1', 'discord');
        assert.equal(result.success, false);
        const failed = stub.updates.at(-1);
        assert.equal(failed['discordDelivery.status'], 'failed');
        const wait = failed['discordDelivery.nextAttemptAt'].getTime() - before;
        assert.ok(wait >= 11000 && wait <= 14000, `retry in ${wait}ms`);
        assert.doesNotMatch(failed['discordDelivery.lastError'], /secret/);
    } finally {
        global.fetch = originalFetch;
        if (originalUrl === undefined) delete process.env.DISCORD_WEBHOOK_URL;
        else process.env.DISCORD_WEBHOOK_URL = originalUrl;
        stub.restore();
    }
});

test('a site visit shows the page-reported referrer as Came From, not the beacon Referer header', async () => {
    const contextKey = Symbol.for('@vercel/request-context');
    const originals = {
        create: SiteActivity.create,
        findOneAndUpdate: SiteActivity.findOneAndUpdate,
        updateOne: SiteActivity.updateOne,
        find: SiteActivity.find,
        fetch: global.fetch,
        context: globalThis[contextKey],
        discord: process.env.DISCORD_WEBHOOK_URL,
        slack: process.env.SLACK_WEBHOOK_URL
    };
    const background = [];
    const posted = [];
    let created = null;
    let claimable = null;

    process.env.DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1/secret';
    delete process.env.SLACK_WEBHOOK_URL;
    // Capture the delivery that notifyDiscord hands to waitUntil so it can be awaited.
    globalThis[contextKey] = { get: () => ({ waitUntil: (promise) => background.push(promise) }) };
    SiteActivity.create = async (payload) => {
        created = payload;
        claimable = { _id: 'visit-1', ...payload, discordDelivery: { ...payload.discordDelivery, attempts: 1 } };
        return { _id: 'visit-1' };
    };
    SiteActivity.findOneAndUpdate = () => ({ lean: async () => { const doc = claimable; claimable = null; return doc; } });
    SiteActivity.updateOne = async () => ({ acknowledged: true });
    SiteActivity.find = () => ({ sort: () => ({ limit: () => ({ select: () => ({ lean: async () => [] }) }) }) });
    global.fetch = async (_url, options) => {
        posted.push(JSON.parse(options.body));
        return new Response(JSON.stringify({ id: 'message-1' }), { status: 200 });
    };

    try {
        await notifyDiscord('site_visit', {
            username: 'Anonymous',
            page: '/stats/african-lion',
            referrer: 'https://www.google.com/',
            screenSize: '390x844',
            language: 'en-US',
            pages: 1,
            sessionId: 'visit-session'
        }, {
            headers: {
                // A beacon's own Referer is always the site page that sent it.
                referer: 'https://animalbattlestats.com/stats/african-lion',
                'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) Version/17.0 Mobile/15E148 Safari/604.1'
            }
        });
        await Promise.all(background);

        assert.equal(created.metadata.referrer, 'https://www.google.com/');
        assert.match(created.metadata.sessionHash, /^[a-f0-9]{32}$/);
        assert.equal(posted.length, 1);
        const cameFrom = posted[0].embeds[0].fields.find((field) => field.name.endsWith('Came From'));
        assert.equal(cameFrom?.value, 'https://www.google.com/');
    } finally {
        SiteActivity.create = originals.create;
        SiteActivity.findOneAndUpdate = originals.findOneAndUpdate;
        SiteActivity.updateOne = originals.updateOne;
        SiteActivity.find = originals.find;
        global.fetch = originals.fetch;
        if (originals.context === undefined) delete globalThis[contextKey];
        else globalThis[contextKey] = originals.context;
        if (originals.discord === undefined) delete process.env.DISCORD_WEBHOOK_URL;
        else process.env.DISCORD_WEBHOOK_URL = originals.discord;
        if (originals.slack === undefined) delete process.env.SLACK_WEBHOOK_URL;
        else process.env.SLACK_WEBHOOK_URL = originals.slack;
    }
});

test('the Referer header is only a fallback, and our own pages never show as Came From', () => {
    const headerOnly = sanitizeEventData('site_visit', { referer: 'https://animalbattlestats.com/rankings' });
    assert.equal(headerOnly.referrer, 'https://animalbattlestats.com/rankings');
    assert.equal(sanitizeEventData('site_visit', {
        referer: 'https://animalbattlestats.com/rankings',
        referrer: 'https://www.google.com/'
    }).referrer, 'https://www.google.com/');
    assert.equal(createEmbed('site_visit', headerOnly).fields.some((field) => field.name.endsWith('Came From')), false);

    // Internal page views carry their place in the visit; the landing does not show it.
    const internal = createEmbed('site_visit', sanitizeEventData('site_visit', { page: '/rankings', pages: 3 }));
    assert.equal(internal.fields.find((field) => field.name.endsWith('Pages This Visit'))?.value, '3');
    const landing = createEmbed('site_visit', sanitizeEventData('site_visit', { page: '/', pages: 1 }));
    assert.equal(landing.fields.some((field) => field.name.endsWith('Pages This Visit')), false);
});
