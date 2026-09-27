'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const mongoose = require('mongoose');
const User = require('../lib/models/User');
const RewardClaim = require('../lib/models/RewardClaim');
const economy = require('../lib/economy');
const rewards = require('../lib/rewards');

// The site economy (lib/economy.js, lib/rewards.js): the same rules as the Roblox
// game's login streak, quests and Season Pass, decided on the server.

const NOW = Date.UTC(2026, 9, 1, 12);
const TODAY = economy.dayIndex(NOW);

test('quests are dealt from the date: the same for everyone, a fight-call quest first', () => {
    for (let day = TODAY; day < TODAY + 30; day += 1) {
        const quests = economy.questsFor(day);
        assert.deepEqual(quests, economy.questsFor(day));
        assert.equal(quests.length, 3);
        assert.equal(quests[0].kind, 'matchup_call');
        assert.ok(quests[0].goal >= 3 && quests[0].goal <= 5);
        assert.notEqual(quests[1].text, quests[2].text);
        for (const quest of quests) assert.doesNotMatch(quest.text, /%/);
    }
});

test('the login streak climbs a 7-day ladder, wraps, and the shield saves one missed day a week', () => {
    assert.equal(economy.loginState({}, TODAY).step, 1);
    const yesterday = { day: TODAY - 1, step: 3, run: 3, savedDay: -99 };
    assert.deepEqual([economy.loginState(yesterday, TODAY).step, economy.loginState(yesterday, TODAY).run], [4, 4]);
    assert.equal(economy.loginState({ day: TODAY, step: 4, run: 4 }, TODAY).claimable, false);
    assert.equal(economy.loginState({ day: TODAY - 1, step: 7, run: 13 }, TODAY).step, 1, 'day 8 starts the ladder again');
    const missed = economy.loginState({ day: TODAY - 2, step: 3, run: 3, savedDay: -99 }, TODAY);
    assert.deepEqual([missed.step, missed.shielded], [4, true]);
    const shieldUsed = economy.loginState({ day: TODAY - 2, step: 3, run: 3, savedDay: TODAY - 3 }, TODAY);
    assert.deepEqual([shieldUsed.step, shieldUsed.run], [1, 1]);
    assert.equal(economy.loginState({ day: TODAY - 3, step: 3 }, TODAY).step, 1);
});

test('the Season Pass matches the game: 30 tiers, 7,350 XP, looks at 5, 10, 20, 25 and 30', () => {
    assert.equal(economy.passXpFor(30), 7350);
    assert.equal(economy.passTierFor(99), 0);
    assert.equal(economy.passTierFor(100), 1);
    assert.equal(economy.passTierFor(7350), 30);
    assert.deepEqual([5, 10, 20, 25, 30].map((tier) => Boolean(economy.passReward(tier).item)), [true, true, true, true, true]);
    assert.equal(economy.passReward(7).item, null);
    assert.equal(economy.passActive(Date.UTC(2026, 10, 30)), true);
    assert.equal(economy.passActive(Date.UTC(2026, 11, 1)), false);
});

test('a called fight is fixed per player, matchup and day and follows the model odds', () => {
    const base = { secret: 's', matchupKey: 'A::B', dayKey: '2026-10-01', firstWinsProbability: 0.7 };
    assert.deepEqual(economy.drawFight({ ...base, userId: 'u1' }), economy.drawFight({ ...base, userId: 'u1' }));
    let wins = 0;
    for (let index = 0; index < 4000; index += 1) if (economy.drawFight({ ...base, userId: `u${index}` }).firstWins) wins += 1;
    assert.ok(Math.abs(wins / 4000 - 0.7) < 0.03, `first side won ${wins / 40}%`);
});

test('the save rolls over each UTC day and hands out milestone looks', () => {
    const eco = economy.normalizeEconomy({
        today: { day: TODAY - 1, n: { matchup_call: 9 } },
        call: { streak: 2, best: 11 },
        owned: ['frame_gold', 'not_a_real_item'],
        frame: 'frame_prism'
    }, TODAY);
    assert.deepEqual(eco.today, { day: TODAY, n: {} });
    assert.ok(eco.owned.includes('title_sharpeye') && eco.owned.includes('title_oracle'));
    assert.ok(!eco.owned.includes('not_a_real_item'));
    assert.equal(eco.frame, null, 'an unowned frame is taken off');
});

// ---------------------------------------------------------------- transactions

function harness(fields = {}) {
    const user = new User({ username: 'caller', email: 'caller@example.com', password: 'x'.repeat(12), level: 1, xp: 0, battlePoints: 0, ...fields });
    const claims = new Set();
    const saved = [];
    const original = { startSession: mongoose.startSession, findById: User.findById, save: User.prototype.save, create: RewardClaim.create };
    mongoose.startSession = async () => ({ withTransaction: async (work) => work(), endSession: async () => {} });
    User.findById = () => ({ session: async () => user, then: (resolve, reject) => Promise.resolve(user).then(resolve, reject) });
    User.prototype.save = async function save() { saved.push(this.toObject()); return this; };
    RewardClaim.create = async (docs) => {
        for (const doc of docs) {
            if (claims.has(doc.claimKey)) throw Object.assign(new Error('duplicate'), { code: 11000 });
        }
        for (const doc of docs) claims.add(doc.claimKey);
        return docs;
    };
    return {
        user,
        claims,
        saved,
        restore() {
            mongoose.startSession = original.startSession;
            User.findById = original.findById;
            User.prototype.save = original.save;
            RewardClaim.create = original.create;
        }
    };
}

test('fight calls pay Coins, XP and pass XP up to the daily cap, and correct calls build a streak', async () => {
    const h = harness();
    try {
        const first = await rewards.awardUserReward({ userId: h.user._id, action: 'matchup_call', sourceId: 'A::B:2026-10-01', call: { correct: true }, now: NOW });
        assert.equal(first.coins, 10 + economy.callBonus(1));
        assert.equal(first.xp, 10);
        assert.equal(first.call.streak, 1);
        assert.equal(first.pass, 5 + economy.CALL_BONUS.pass);

        const repeat = await rewards.awardUserReward({ userId: h.user._id, action: 'matchup_call', sourceId: 'A::B:2026-10-01', call: { correct: true }, now: NOW });
        assert.equal(repeat.duplicate, true, 'one reward per matchup per day');
        assert.equal(repeat.coins, 0);

        let last;
        for (let index = 0; index < 30; index += 1) {
            last = await rewards.awardUserReward({ userId: h.user._id, action: 'matchup_call', sourceId: `M${index}`, call: { correct: false }, now: NOW });
        }
        assert.equal(last.capped, true);
        assert.equal(last.coins, 0);
        assert.equal(last.call.streak, 0, 'a wrong call ends the streak');
        assert.equal(h.user.economy.today.n.matchup_call, 31, 'capped calls still count toward quests');
        assert.equal(h.user.economy.today.n['paid:matchup_call'], economy.ACTIONS.matchup_call.cap);
    } finally {
        h.restore();
    }
});

test('the daily reward, quests, the chest and the pass are each claimable once, when ready', async () => {
    const h = harness();
    try {
        const daily = await rewards.claimDaily(h.user._id, NOW);
        assert.equal(daily.coins, economy.LOGIN[0].coins);
        await assert.rejects(rewards.claimDaily(h.user._id, NOW), { status: 409 });

        await assert.rejects(rewards.claimQuest(h.user._id, 0, NOW), { status: 409 }, 'an unfinished quest');
        const board = economy.questsFor(TODAY);
        h.user.economy.today.n = { matchup_call: 20, call_correct: 5, vote: 10, talk: 5, tournament: 1 };
        for (const quest of board) await rewards.claimQuest(h.user._id, quest.slot, NOW);
        await assert.rejects(rewards.claimQuest(h.user._id, 0, NOW), { status: 409 });
        const chest = await rewards.claimChest(h.user._id, NOW);
        assert.equal(chest.coins >= economy.QUEST_CHEST.coins, true);
        await assert.rejects(rewards.claimChest(h.user._id, NOW), { status: 409 });

        h.user.economy.pass.xp = economy.passXpFor(5);
        const pass = await rewards.claimPass(h.user._id, NOW);
        assert.deepEqual(pass.tiers, [1, 2, 3, 4, 5]);
        assert.deepEqual(pass.unlocked.map((item) => item.id), ['frame_sunrise']);
        await assert.rejects(rewards.claimPass(h.user._id, NOW), { status: 409 });
    } finally {
        h.restore();
    }
});

test('looks cost Coins, are bought by name once, and only owned looks can be worn', async () => {
    const h = harness({ battlePoints: 500 });
    try {
        await assert.rejects(rewards.buyItem(h.user._id, 'frame_gold', NOW), { status: 409 }, 'not enough Coins');
        await assert.rejects(rewards.buyItem(h.user._id, 'title_oracle', NOW), { status: 400 }, 'earned looks are not for sale');
        const bought = await rewards.buyItem(h.user._id, 'frame_statcard', NOW);
        assert.equal(bought.wallet, 200);
        assert.equal(h.user.economy.frame, 'frame_statcard', 'a new look is worn straight away');
        await assert.rejects(rewards.buyItem(h.user._id, 'frame_statcard', NOW), { status: 409 });
        await assert.rejects(rewards.equipItem(h.user._id, 'title', 'title_apex', NOW), { status: 409 });
        await rewards.equipItem(h.user._id, 'frame', null, NOW);
        assert.equal(h.user.economy.frame, null);
    } finally {
        h.restore();
    }
});
