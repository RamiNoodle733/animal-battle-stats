'use strict';

// Two things the site must not promise before they work: a Roblox game players can't open
// yet, and emails that never go out.
const test = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

// What Roblox's games API answers for a private game or one still in review.
const PRIVATE_GAME = {
    id: 0, rootPlaceId: 0, name: '[TITLE UNAVAILABLE]', creator: { id: 0, name: '[UNKNOWN]', type: 'User' },
    playing: 0, visits: 0, maxPlayers: 0, favoritedCount: 0, created: '0001-01-01T05:51:00Z', updated: '0001-01-01T05:51:00Z'
};
const PUBLIC_GAME = {
    id: 10767969314, rootPlaceId: 118592355937726, name: 'Animal Battle Stats', creator: { id: 1, name: 'RamiNoodle733', type: 'User' },
    playing: 12, visits: 3400, maxPlayers: 20, favoritedCount: 210, created: '2026-09-01T12:00:00Z', updated: '2026-10-05T12:00:00Z'
};

function freshRobloxGame() {
    delete require.cache[require.resolve('../lib/roblox-game')];
    return require('../lib/roblox-game');
}

async function withRoblox(game, run) {
    const realFetch = global.fetch;
    global.fetch = async (url) => {
        const href = String(url);
        const body = href.includes('games.roblox.com/v1/games?') ? { data: [game] }
            : href.includes('/games/votes') ? { data: [{ upVotes: 9, downVotes: 1 }] }
                : { data: [] };
        return { ok: true, status: 200, json: async () => body };
    };
    try {
        return await run(freshRobloxGame());
    } finally {
        global.fetch = realFetch;
    }
}

test('a private or in-review Roblox game is not shown as live', () => withRoblox(PRIVATE_GAME, async ({ isPublished, robloxSnapshot, gameIsPublic }) => {
    assert.equal(isPublished(PRIVATE_GAME), false);
    assert.equal(await gameIsPublic(), false);
    const snapshot = await robloxSnapshot();
    assert.equal(snapshot.live, false);
    assert.equal(snapshot.game.published, false);
    assert.equal(snapshot.game.creator, null, 'no "[UNKNOWN]" creator');
    assert.equal(snapshot.game.url, 'https://www.roblox.com/games/118592355937726', 'never /games/0');
}));

test('a public Roblox game is live with its numbers', () => withRoblox(PUBLIC_GAME, async ({ isPublished, robloxSnapshot, gameIsPublic }) => {
    assert.equal(isPublished(PUBLIC_GAME), true);
    assert.equal(await gameIsPublic(), true);
    const snapshot = await robloxSnapshot();
    assert.equal(snapshot.live, true);
    assert.equal(snapshot.game.published, true);
    assert.equal(snapshot.game.creator, 'RamiNoodle733');
    assert.equal(snapshot.game.visits, 3400);
    assert.equal(snapshot.game.likeRatio, 0.9);
}));

test('the build learns nothing when Roblox cannot be reached', async () => {
    const realFetch = global.fetch;
    global.fetch = async () => { throw new Error('offline'); };
    try {
        await assert.rejects(freshRobloxGame().gameIsPublic());
    } finally {
        global.fetch = realFetch;
    }
});

function freshEmail(env) {
    const saved = {};
    for (const [key, value] of Object.entries(env)) {
        saved[key] = process.env[key];
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
    }
    delete require.cache[require.resolve('../lib/email')];
    const email = require('../lib/email');
    for (const [key, value] of Object.entries(saved)) {
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
    }
    return email;
}

test('email goes out through the webhook, with its bearer token when one is set', async () => {
    const off = freshEmail({ EMAIL_WEBHOOK_URL: undefined, AUTH_EMAIL_WEBHOOK_URL: undefined, EMAIL_WEBHOOK_TOKEN: undefined });
    assert.equal(off.emailConfigured(), false);

    const on = freshEmail({ EMAIL_WEBHOOK_URL: 'https://api.resend.com/emails', EMAIL_WEBHOOK_TOKEN: 're_test_token' });
    assert.equal(on.emailConfigured(), true);
    const realFetch = global.fetch;
    const calls = [];
    global.fetch = async (url, options) => { calls.push({ url, options }); return { ok: true, status: 200 }; };
    try {
        const result = await on.sendEmail({ to: 'player@example.com', subject: 'Reset', text: 'link', html: '<p>link</p>' });
        assert.deepEqual(result, { queued: true, provider: 'webhook' });
    } finally {
        global.fetch = realFetch;
    }
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, 'https://api.resend.com/emails');
    assert.equal(calls[0].options.headers.Authorization, 'Bearer re_test_token');
    const body = JSON.parse(calls[0].options.body);
    assert.equal(body.to, 'player@example.com');
    assert.match(body.from, /animalbattlestats\.com/);

    const plain = freshEmail({ EMAIL_WEBHOOK_URL: 'https://hooks.example.com/mail', EMAIL_WEBHOOK_TOKEN: undefined });
    global.fetch = async (url, options) => { calls.push({ url, options }); return { ok: true, status: 200 }; };
    try {
        await plain.sendEmail({ to: 'player@example.com', subject: 'Hi', text: 'x', html: 'x' });
    } finally {
        global.fetch = realFetch;
    }
    assert.equal(calls[1].options.headers.Authorization, undefined, 'no token, no header');
});
