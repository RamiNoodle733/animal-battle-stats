'use strict';

// The card collection (lib/collection.js, lib/rewards.js): every card is
// earned or bought by name, never random, and each change happens once.

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
process.env.MONGODB_URI ||= 'mongodb://127.0.0.1:1/collection-test';

// New cards are announced to the activity feed; record them instead.
const announced = [];
const discordPath = require.resolve('../lib/discord');
require.cache[discordPath] = { id: discordPath, filename: discordPath, loaded: true, exports: { notifyDiscord: async (type, data) => { announced.push({ type, data }); } } };

const mongoose = require('mongoose');
const User = require('../lib/models/User');
const RewardClaim = require('../lib/models/RewardClaim');
const economy = require('../lib/economy');
const collection = require('../lib/collection');
const rewards = require('../lib/rewards');

const NOW = Date.UTC(2026, 9, 2, 12);
const TODAY = economy.dayIndex(NOW);

function harness(fields = {}) {
    const user = new User({ username: 'collector', email: 'collector@example.com', password: 'x'.repeat(12), level: 1, xp: 0, battlePoints: 0, ...fields });
    const claims = new Set();
    const original = { startSession: mongoose.startSession, findById: User.findById, save: User.prototype.save, create: RewardClaim.create };
    mongoose.startSession = async () => ({ withTransaction: async (work) => work(), endSession: async () => {} });
    User.findById = () => ({ session: async () => user, then: (resolve, reject) => Promise.resolve(user).then(resolve, reject) });
    User.prototype.save = async function save() { return this; };
    RewardClaim.create = async (docs) => {
        for (const doc of docs) if (claims.has(doc.claimKey)) throw Object.assign(new Error('duplicate'), { code: 11000 });
        for (const doc of docs) claims.add(doc.claimKey);
        return docs;
    };
    return {
        user,
        restore() {
            mongoose.startSession = original.startSession;
            User.findById = original.findById;
            User.prototype.save = original.save;
            RewardClaim.create = original.create;
        }
    };
}

const owned = (user) => Object.keys(collection.normalizeCollection(user.economy).cards).sort();

test('every animal is a card with a price by tier, and the starters are real cards', () => {
    assert.equal(collection.ROSTER.length, require('../animal_stats.json').length);
    for (const card of collection.ROSTER) assert.ok(collection.priceOf(card) > 0, card.slug);
    assert.equal(collection.STARTERS.length, 3);
    for (const slug of collection.STARTERS) assert.ok(collection.cardFor(slug), slug);
    assert.equal(collection.cardFor('African Lion')?.slug, 'african-lion', 'a card can be found by name');
    assert.equal(collection.cardFor('nope'), null);
});

test("the card of the day is the home page's Animal of the day, the same for everyone", () => {
    const roster = collection.ROSTER.map((card) => card.slug);
    for (const day of [TODAY, TODAY + 1, TODAY + 400]) assert.equal(collection.dailyCard(day).slug, roster[(day * 7919) % roster.length]);
    // the home page picks from the same list in the same order
    const home = fs.readFileSync(path.join(__dirname, '../astro/src/pages/index.astro'), 'utf8');
    assert.match(home, /pool\[\(day \* 7919\) % pool\.length\]/);
});

test('a save keeps only real cards', () => {
    const state = collection.normalizeCollection({ cards: { orca: { at: 1, from: 'daily' }, unicorn: { at: 1 }, cassowary: { at: 2, from: 'hacked' } }, starter: 'unicorn' });
    assert.deepEqual(Object.keys(state.cards).sort(), ['cassowary', 'orca']);
    assert.equal(state.cards.cassowary.from, 'shop');
    assert.equal(state.starter, null);
});

test('the starter: one of three, once', async () => {
    const h = harness();
    try {
        await assert.rejects(rewards.claimStarter(h.user._id, 'orca', NOW), /one of the three/);
        const result = await rewards.claimStarter(h.user._id, collection.STARTERS[1], NOW);
        assert.equal(result.added, true);
        assert.equal(result.card.slug, collection.STARTERS[1]);
        assert.equal(result.collection.count, 1);
        assert.deepEqual(result.collection.starters, [], 'no more starters to pick');
        await assert.rejects(rewards.claimStarter(h.user._id, collection.STARTERS[0], NOW), /already picked/);
        assert.deepEqual(owned(h.user), [collection.STARTERS[1]]);
    } finally {
        h.restore();
    }
});

test('the card of the day: free once a day; BattlePoints instead when already collected', async () => {
    const h = harness();
    try {
        const daily = collection.dailyCard(TODAY);
        const first = await rewards.claimDailyCard(h.user._id, NOW);
        assert.equal(first.card.slug, daily.slug);
        assert.equal(first.added, true);
        assert.equal(first.collection.daily.claimed, true);
        await assert.rejects(rewards.claimDailyCard(h.user._id, NOW), /already claimed/);

        // the same animal comes round again on a later day: BattlePoints instead
        let later = TODAY + 1;
        while (collection.dailyCard(later).slug !== daily.slug) later += 1;
        const again = await rewards.claimDailyCard(h.user._id, later * economy.DAY_MS + 1000);
        assert.equal(again.added, false);
        assert.equal(again.coins, Math.round(collection.priceOf(daily) / 4));
    } finally {
        h.restore();
    }
});

test('the shop: any card by name for its price, never twice, never on credit', async () => {
    const h = harness({ battlePoints: 700 });
    try {
        const orca = collection.cardFor('orca');
        const bought = await rewards.buyCard(h.user._id, 'orca', NOW);
        assert.equal(bought.added, true);
        assert.equal(bought.spent, collection.PRICES[orca.tier]);
        assert.equal(h.user.battlePoints, 700 - collection.PRICES[orca.tier]);
        await assert.rejects(rewards.buyCard(h.user._id, 'orca', NOW), /already have/);
        await assert.rejects(rewards.buyCard(h.user._id, 'megalodon', NOW), /more BattlePoints/);
        assert.equal(h.user.battlePoints, 700 - collection.PRICES[orca.tier], 'nothing taken for a refused card');
    } finally {
        h.restore();
    }
});

test('cards won by playing are added once and announced', async () => {
    const h = harness();
    announced.length = 0;
    try {
        const won = await rewards.grantCard(h.user._id, 'Siberian Tiger', 'call', NOW);
        assert.equal(won.added, true);
        assert.equal(won.card.slug, 'siberian-tiger');
        const again = await rewards.grantCard(h.user._id, 'siberian-tiger', 'tournament', NOW);
        assert.equal(again.added, false);
        assert.equal(await rewards.grantCard(h.user._id, 'Unicorn', 'call', NOW), null);
        assert.deepEqual(owned(h.user), ['siberian-tiger']);
        assert.deepEqual(announced.map((event) => [event.type, event.data.card, event.data.from]), [['card_collected', 'Siberian Tiger', 'call']]);

        const summary = collection.collectionSummary(h.user.economy);
        assert.equal(summary.count, 1);
        assert.equal(summary.tiers[collection.cardFor('siberian-tiger').tier].owned, 1);
        assert.deepEqual(summary.best.map((card) => card.slug), ['siberian-tiger']);
    } finally {
        h.restore();
    }
});
