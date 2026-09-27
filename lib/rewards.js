'use strict';

// Every Coin, XP point and pass XP point the site hands out goes through here,
// inside a transaction on the player's save, with a RewardClaim whose unique key
// makes each reward payable once. The numbers and rules live in lib/economy.js.

const mongoose = require('mongoose');
const User = require('./models/User');
const RewardClaim = require('./models/RewardClaim');
const { processXpAward, buildProgressionPayload } = require('./xpSystem');
const {
    ACTIONS,
    CALL_BONUS,
    COUNTER_FOR,
    ITEM_BY_ID,
    LOGIN_PASS_XP,
    PASS,
    QUEST_CHEST,
    callBonus,
    dayIndex,
    earnedItems,
    economyState,
    economySummary,
    loginState,
    normalizeEconomy,
    passActive,
    passReward,
    passState,
    questBoard
} = require('./economy');

// A reward that can't be given (not ready, already claimed, not enough Coins).
class RewardError extends Error {
    constructor(status, message) {
        super(message);
        this.name = 'RewardError';
        this.status = status;
    }
}

function normalizeClaimPart(value, maxLength = 120) {
    return String(value || '')
        .trim()
        .replace(/[^a-zA-Z0-9:_|.-]/g, '-')
        .slice(0, maxLength);
}

function buildRewardClaimKey(userId, action, sourceId) {
    const normalizedUserId = normalizeClaimPart(userId, 64);
    const normalizedAction = normalizeClaimPart(action, 64);
    const normalizedSource = normalizeClaimPart(sourceId, 120);
    if (!normalizedUserId || !normalizedAction || !normalizedSource) {
        throw new Error('Reward claims require user, action, and source identifiers');
    }
    return `${normalizedUserId}:${normalizedAction}:${normalizedSource}`;
}

function itemView(id) {
    const item = ITEM_BY_ID.get(id);
    return item ? { id: item.id, kind: item.kind, name: item.name } : null;
}

function saveEconomy(user, eco) {
    user.economy = eco;
    user.markModified('economy');
}

// Adds Coins, XP (with level-up Coins) and pass XP (while the season runs).
function applyGrant(user, eco, { coins = 0, xp = 0, pass = 0 }, now) {
    const xpResult = processXpAward(user.level || 1, user.xp || 0, xp);
    const passXp = passActive(now) ? pass : 0;
    const total = coins + xpResult.totalBpEarned;
    user.level = xpResult.level;
    user.xp = xpResult.xp;
    user.lifetimeXp = (user.lifetimeXp || 0) + xp;
    user.battlePoints = (user.battlePoints || 0) + total;
    eco.pass.xp += passXp;
    return { coins: total, xp, pass: passXp, levelsGained: xpResult.levelsGained, levelCoins: xpResult.totalBpEarned };
}

function payload(user, eco, now, fields = {}) {
    const applied = fields.applied || { coins: 0, xp: 0, pass: 0, levelsGained: [], levelCoins: 0 };
    return {
        awarded: applied.coins > 0 || applied.xp > 0 || applied.pass > 0 || Boolean(fields.unlocked?.length),
        duplicate: false,
        coins: applied.coins,
        xp: applied.xp,
        pass: applied.pass,
        // Older clients read these.
        xpAdded: applied.xp,
        bpAdded: applied.coins,
        leveledUp: applied.levelsGained.length > 0,
        levelsGained: applied.levelsGained,
        newLevel: applied.levelsGained.length ? user.level : null,
        unlocked: (fields.unlocked || []).map(itemView).filter(Boolean),
        wallet: user.battlePoints || 0,
        progression: buildProgressionPayload(user),
        economy: economySummary(eco, now),
        ...fields.extra
    };
}

async function inUserTransaction(userId, work) {
    const session = await mongoose.startSession();
    try {
        let result;
        await session.withTransaction(async () => {
            const user = await User.findById(userId).session(session);
            if (!user) throw new RewardError(404, 'User not found');
            result = await work(user, session);
        });
        return result;
    } finally {
        await session.endSession();
    }
}

async function recordClaims(session, user, claims, now) {
    await RewardClaim.create(claims.map((claim) => ({
        claimKey: claim.claimKey,
        userId: user._id,
        action: claim.action,
        sourceId: normalizeClaimPart(claim.sourceId, 160),
        xpAwarded: claim.xp || 0,
        bpAwarded: claim.coins || 0,
        appliedAt: new Date(now)
    })), { session });
}

async function loadDuplicateResult(userId, action, claimKey, now = Date.now()) {
    const user = await User.findById(userId);
    if (!user) throw new Error('Reward user not found');
    const eco = normalizeEconomy(user.economy, dayIndex(now));
    return { ...payload(user, eco, now), awarded: false, duplicate: true, action, claimKey };
}

// ---------------------------------------------------------------- paid actions

// Pays one action (a fight call, a vote, a comment...). `call` = { correct } for a
// fight call. The action always counts toward quests and titles; it pays Coins, XP
// and pass XP for the first ACTIONS[action].cap times each UTC day.
async function awardUserReward({ userId, action, sourceId, call = null, now = Date.now() }) {
    const def = ACTIONS[action];
    if (!def) throw new Error(`Unsupported reward action: ${action}`);
    const claimKey = buildRewardClaimKey(userId, action, sourceId);

    try {
        return await inUserTransaction(userId, async (user, session) => {
            const eco = normalizeEconomy(user.economy, dayIndex(now));
            const before = new Set(eco.owned);
            const counts = eco.today.n;
            const counter = COUNTER_FOR[action];
            counts[counter] = (counts[counter] || 0) + 1;
            eco.lifetime[action] = (eco.lifetime[action] || 0) + 1;

            const paidKey = `paid:${action}`;
            const paid = (counts[paidKey] || 0) < def.cap;
            if (paid) counts[paidKey] = (counts[paidKey] || 0) + 1;
            const grant = paid ? { coins: def.coins, xp: def.xp, pass: def.pass } : { coins: 0, xp: 0, pass: 0 };

            let callResult = null;
            if (action === 'matchup_call' && call) {
                if (call.correct) {
                    eco.call.streak += 1;
                    eco.call.best = Math.max(eco.call.best, eco.call.streak);
                    counts.call_correct = (counts.call_correct || 0) + 1;
                    eco.lifetime.call_correct = (eco.lifetime.call_correct || 0) + 1;
                    const bonus = paid ? callBonus(eco.call.streak) : 0;
                    grant.coins += bonus;
                    grant.pass += paid ? CALL_BONUS.pass : 0;
                    callResult = { correct: true, streak: eco.call.streak, best: eco.call.best, bonus };
                } else {
                    eco.call.streak = 0;
                    callResult = { correct: false, streak: 0, best: eco.call.best, bonus: 0 };
                }
            }

            for (const id of earnedItems(eco)) if (!eco.owned.includes(id)) eco.owned.push(id);
            const unlocked = eco.owned.filter((id) => !before.has(id));
            const applied = applyGrant(user, eco, grant, now);
            await recordClaims(session, user, [{ claimKey, action, sourceId, xp: applied.xp, coins: applied.coins }], now);
            saveEconomy(user, eco);
            await user.save({ session, validateModifiedOnly: true });
            return payload(user, eco, now, { applied, unlocked, extra: { action, claimKey, capped: !paid, call: callResult } });
        });
    } catch (error) {
        if (error?.code === 11000) return loadDuplicateResult(userId, action, claimKey, now);
        throw error;
    }
}

// ---------------------------------------------------------------- claims

async function claimDaily(userId, now = Date.now()) {
    const today = dayIndex(now);
    return inUserTransaction(userId, async (user, session) => {
        const eco = normalizeEconomy(user.economy, today);
        const state = loginState(eco.login, today);
        if (!state.claimable) throw new RewardError(409, 'Today\'s reward is already claimed. Come back tomorrow.');
        const before = new Set(eco.owned);
        eco.login = {
            day: today,
            step: state.step,
            run: state.run,
            best: Math.max(Number(eco.login.best) || 0, state.run),
            savedDay: state.shielded ? today : eco.login.savedDay ?? null
        };
        for (const id of earnedItems(eco)) if (!eco.owned.includes(id)) eco.owned.push(id);
        const applied = applyGrant(user, eco, { coins: state.reward.coins, xp: state.reward.xp, pass: LOGIN_PASS_XP }, now);
        await recordClaims(session, user, [{ claimKey: buildRewardClaimKey(userId, 'daily_login', today), action: 'daily_login', sourceId: today, xp: applied.xp, coins: applied.coins }], now);
        saveEconomy(user, eco);
        await user.save({ session, validateModifiedOnly: true });
        return payload(user, eco, now, { applied, unlocked: eco.owned.filter((id) => !before.has(id)), extra: { login: { step: state.step, run: state.run, shielded: state.shielded } } });
    });
}

async function claimQuest(userId, slot, now = Date.now()) {
    const today = dayIndex(now);
    return inUserTransaction(userId, async (user, session) => {
        const eco = normalizeEconomy(user.economy, today);
        const quest = questBoard(eco, today)[slot];
        if (!quest) throw new RewardError(400, 'Unknown quest');
        if (quest.claimed) throw new RewardError(409, 'That quest is already claimed.');
        if (!quest.done) throw new RewardError(409, 'That quest isn\'t finished yet.');
        eco.quests.claimed.push(slot);
        const applied = applyGrant(user, eco, { coins: quest.coins, xp: quest.xp, pass: quest.pass }, now);
        await recordClaims(session, user, [{ claimKey: buildRewardClaimKey(userId, 'quest', `${today}:${slot}`), action: 'quest', sourceId: `${today}:${slot}`, xp: applied.xp, coins: applied.coins }], now);
        saveEconomy(user, eco);
        await user.save({ session, validateModifiedOnly: true });
        return payload(user, eco, now, { applied, extra: { quest: slot } });
    });
}

async function claimChest(userId, now = Date.now()) {
    const today = dayIndex(now);
    return inUserTransaction(userId, async (user, session) => {
        const eco = normalizeEconomy(user.economy, today);
        if (eco.quests.chest) throw new RewardError(409, 'Today\'s chest is already open.');
        if (!questBoard(eco, today).every((quest) => quest.claimed)) throw new RewardError(409, 'Claim all three quests to open the chest.');
        eco.quests.chest = true;
        const applied = applyGrant(user, eco, QUEST_CHEST, now);
        await recordClaims(session, user, [{ claimKey: buildRewardClaimKey(userId, 'quest_chest', today), action: 'quest_chest', sourceId: today, xp: applied.xp, coins: applied.coins }], now);
        saveEconomy(user, eco);
        await user.save({ session, validateModifiedOnly: true });
        return payload(user, eco, now, { applied });
    });
}

// Claims every Season Pass tier reached and not claimed yet.
async function claimPass(userId, now = Date.now()) {
    return inUserTransaction(userId, async (user, session) => {
        const eco = normalizeEconomy(user.economy, dayIndex(now));
        const ready = passState(eco, now).tiers.filter((tier) => tier.reached && !tier.claimed).map((tier) => tier.tier);
        if (!ready.length) throw new RewardError(409, 'No pass tiers are ready to claim.');
        const before = new Set(eco.owned);
        let coins = 0;
        for (const tier of ready) {
            const reward = passReward(tier);
            coins += reward.coins;
            if (reward.item && !eco.owned.includes(reward.item)) eco.owned.push(reward.item);
            eco.pass.claimed.push(tier);
        }
        const applied = applyGrant(user, eco, { coins }, now);
        await recordClaims(session, user, ready.map((tier) => ({
            claimKey: buildRewardClaimKey(userId, 'pass', `${PASS.season}:${tier}`),
            action: 'pass',
            sourceId: `${PASS.season}:${tier}`,
            coins: passReward(tier).coins
        })), now);
        saveEconomy(user, eco);
        await user.save({ session, validateModifiedOnly: true });
        return payload(user, eco, now, { applied, unlocked: eco.owned.filter((id) => !before.has(id)), extra: { tiers: ready } });
    });
}

// ---------------------------------------------------------------- looks

async function buyItem(userId, itemId, now = Date.now()) {
    const item = ITEM_BY_ID.get(String(itemId || ''));
    if (!item || !item.price) throw new RewardError(400, 'That look isn\'t in the shop.');
    return inUserTransaction(userId, async (user, session) => {
        const eco = normalizeEconomy(user.economy, dayIndex(now));
        if (eco.owned.includes(item.id)) throw new RewardError(409, `You already own ${item.name}.`);
        if ((user.battlePoints || 0) < item.price) throw new RewardError(409, `You need ${item.price - (user.battlePoints || 0)} more Coins for ${item.name}.`);
        user.battlePoints -= item.price;
        eco.owned.push(item.id);
        eco[item.kind] = item.id;
        saveEconomy(user, eco);
        await user.save({ session, validateModifiedOnly: true });
        return { ...payload(user, eco, now), spent: item.price, bought: itemView(item.id) };
    });
}

async function equipItem(userId, kind, itemId, now = Date.now()) {
    if (kind !== 'frame' && kind !== 'title') throw new RewardError(400, 'Choose a frame or a title.');
    const id = itemId ? String(itemId) : null;
    const item = id ? ITEM_BY_ID.get(id) : null;
    if (id && (!item || item.kind !== kind)) throw new RewardError(400, 'Unknown look.');
    return inUserTransaction(userId, async (user, session) => {
        const eco = normalizeEconomy(user.economy, dayIndex(now));
        if (item && !item.free && !eco.owned.includes(item.id)) throw new RewardError(409, `You don't own ${item.name} yet.`);
        eco[kind] = item ? item.id : null;
        saveEconomy(user, eco);
        await user.save({ session, validateModifiedOnly: true });
        return payload(user, eco, now);
    });
}

// ---------------------------------------------------------------- reading

function economyForUser(user, now = Date.now()) {
    const eco = normalizeEconomy(user.economy, dayIndex(now));
    return {
        wallet: user.battlePoints || 0,
        progression: buildProgressionPayload(user),
        ...economyState(eco, now)
    };
}

module.exports = {
    RewardError,
    awardUserReward,
    buildRewardClaimKey,
    buyItem,
    claimChest,
    claimDaily,
    claimPass,
    claimQuest,
    economyForUser,
    equipItem,
    normalizeClaimPart
};
