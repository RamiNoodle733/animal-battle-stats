'use strict';

// The website's economy, built like the Roblox game's (animal-battle-stats-roblox:
// src/shared/Economy.luau, RewardsService, QuestService, Config/TrainerPass):
// BattlePoints and XP for playing, a 7-day login streak with a weekly STREAK SHIELD,
// three daily quests dealt from the global UTC date with a chest for finishing
// them, a free Season Pass, fight calls with a streak, and a BattlePoints shop of looks.
//
// Owner rules carried over from the game: nothing is random (fight calls are
// drawn by the server from a seed nobody can see beforehand), nothing is sold for
// money, nothing changes an animal's stats, and the server decides every reward.
// The site and the game keep separate wallets: Roblox does not allow in-game
// rewards for things done off the platform.
//
// Everything here is pure (no database); lib/economy-service.js applies it.

const crypto = require('crypto');

const DAY_MS = 24 * 60 * 60 * 1000;

// The global UTC day number, the same for everyone (the game's Clock.day()).
function dayIndex(now = Date.now()) {
    return Math.floor(now / DAY_MS);
}

function dayKeyOf(day) {
    return new Date(day * DAY_MS).toISOString().slice(0, 10);
}

// Paid actions: BattlePoints, XP and pass XP each time, for the first `cap` times per UTC
// day. Past the cap an action still counts toward quests and titles.
const ACTIONS = Object.freeze({
    matchup_call: Object.freeze({ coins: 10, xp: 10, pass: 5, cap: 25, label: 'Fight call' }),
    vote: Object.freeze({ coins: 3, xp: 5, pass: 3, cap: 30, label: 'Animal vote' }),
    comment: Object.freeze({ coins: 10, xp: 10, pass: 8, cap: 10, label: 'Comment' }),
    reply: Object.freeze({ coins: 5, xp: 5, pass: 4, cap: 10, label: 'Reply' }),
    tournament_participate: Object.freeze({ coins: 30, xp: 25, pass: 20, cap: 3, label: 'Ranked tournament' })
});

// Which daily counter each action feeds (comments and replies both count as talk).
const COUNTER_FOR = Object.freeze({
    matchup_call: 'matchup_call',
    vote: 'vote',
    comment: 'talk',
    reply: 'talk',
    tournament_participate: 'tournament'
});

// A correct fight call pays a bonus that grows with the streak.
const CALL_BONUS = Object.freeze({ coins: 5, perStreak: 2, maxExtra: 20, pass: 3 });

function callBonus(streak) {
    return CALL_BONUS.coins + Math.min(CALL_BONUS.maxExtra, CALL_BONUS.perStreak * Math.max(0, streak - 1));
}

// ---------------------------------------------------------------- login streak

// Day N of the streak (repeats after day 7), like the game's LOGIN table.
const LOGIN = Object.freeze([
    { coins: 20, xp: 10 },
    { coins: 30, xp: 10 },
    { coins: 45, xp: 15 },
    { coins: 60, xp: 15 },
    { coins: 80, xp: 20 },
    { coins: 110, xp: 25 },
    { coins: 250, xp: 50 }
].map(Object.freeze));
const LOGIN_PASS_XP = 10;
// One missed day is saved, at most once every SHIELD_EVERY days.
const SHIELD_EVERY = 7;

// login = { day, step, run, savedDay } from the save (all optional).
function loginState(login = {}, today = dayIndex()) {
    const last = Number(login.day);
    const step = Number(login.step) || 0;
    const run = Number(login.run) || 0;
    const savedDay = Number.isFinite(Number(login.savedDay)) ? Number(login.savedDay) : -99;
    const claimedToday = last === today;
    const shieldReady = today - savedDay >= SHIELD_EVERY;
    let next;
    let nextRun;
    let shielded = false;
    if (claimedToday) {
        next = step;
        nextRun = run;
    } else if (last === today - 1) {
        next = (step % LOGIN.length) + 1;
        nextRun = run + 1;
    } else if (last === today - 2 && shieldReady && step > 0) {
        // The streak shield saves one missed day.
        next = (step % LOGIN.length) + 1;
        nextRun = run + 1;
        shielded = true;
    } else {
        next = 1;
        nextRun = 1;
    }
    return {
        claimable: !claimedToday,
        step: next,
        run: nextRun,
        shielded,
        shieldIn: Math.max(0, SHIELD_EVERY - (today - savedDay)),
        rewards: LOGIN.map((reward, index) => ({ day: index + 1, coins: reward.coins, xp: reward.xp })),
        reward: LOGIN[next - 1]
    };
}

// ---------------------------------------------------------------- daily quests

// Dealt from the date, identical for everyone. Slot 1 is always a fight-call quest.
const QUEST_POOL = Object.freeze([
    { kind: 'call_correct', text: 'Call %d fights right', min: 2, max: 3, coins: 80, xp: 35, pass: 60 },
    { kind: 'vote', text: 'Vote on %d animals in the rankings', min: 3, max: 6, coins: 50, xp: 25, pass: 50 },
    { kind: 'talk', text: 'Post %d comment%s or repl%y', min: 1, max: 2, coins: 60, xp: 30, pass: 50 },
    { kind: 'tournament', text: 'Finish a ranked tournament', min: 1, max: 1, coins: 70, xp: 35, pass: 60 },
    { kind: 'matchup_call', text: 'Call %d fights today', min: 10, max: 12, coins: 90, xp: 40, pass: 60 }
].map(Object.freeze));
const QUEST_FIRST = Object.freeze({ kind: 'matchup_call', text: 'Call %d fights in Who Would Win?', min: 3, max: 5, coins: 60, xp: 30, pass: 60 });
const QUEST_CHEST = Object.freeze({ coins: 120, xp: 60, pass: 80 });

function hashInt(text) {
    return crypto.createHash('sha256').update(String(text)).digest().readUInt32BE(0);
}

function questText(def, goal) {
    return def.text
        .replace('%d', String(goal))
        .replace('%s', goal === 1 ? '' : 's')
        .replace('%y', goal === 1 ? 'y' : 'ies');
}

function questsFor(day) {
    const order = QUEST_POOL
        .map((def, index) => ({ def, rank: hashInt(`quest:${day}:${index}`) }))
        .sort((a, b) => a.rank - b.rank)
        .map((entry) => entry.def);
    // The first quest is always a fight-call one; the bigger call quest can join it.
    const defs = [QUEST_FIRST, order[0], order[1]];
    return defs.map((def, slot) => {
        const goal = def.min + (hashInt(`goal:${day}:${slot}`) % (def.max - def.min + 1));
        return { slot, kind: def.kind, goal, text: questText(def, goal), coins: def.coins, xp: def.xp, pass: def.pass };
    });
}

// ---------------------------------------------------------------- season pass

// SEASON 1, the same season as the game's Trainer Pass (Config/TrainerPass):
// 30 free tiers, pass XP from playing, ends 2026-12-01 00:00 UTC.
const PASS = Object.freeze({
    season: 'S1',
    name: 'Season 1: Call of the Wild',
    tiers: 30,
    endsAt: Date.UTC(2026, 11, 1)
});

function passNeed(tier) {
    return 100 + 10 * (tier - 1);
}

function passXpFor(tier) {
    let total = 0;
    for (let t = 1; t <= Math.min(tier, PASS.tiers); t += 1) total += passNeed(t);
    return total;
}

function passTierFor(xp) {
    let tier = 0;
    while (tier < PASS.tiers && xp >= passXpFor(tier + 1)) tier += 1;
    return tier;
}

function passActive(now = Date.now()) {
    return now < PASS.endsAt;
}

// BattlePoints on every tier; looks at 5, 10, 20, 25 and 30 (like the game's free track).
const PASS_LOOKS = Object.freeze({ 5: 'frame_sunrise', 10: 'title_trailblazer', 20: 'title_s1_explorer', 25: 'frame_season1', 30: 'title_s1_legend' });

function passReward(tier) {
    return { tier, coins: 30 + tier * 10, item: PASS_LOOKS[tier] || null };
}

// ---------------------------------------------------------------- looks

// Profile card frames and titles. Bought by name with BattlePoints or earned; never random.
const ITEMS = Object.freeze([
    { id: 'title_rookie', kind: 'title', name: 'Rookie Trainer', free: true },
    // Shop
    { id: 'frame_statcard', kind: 'frame', name: 'Stat Card', price: 300, desc: 'Navy with a cyan and orange edge, like a stat card.' },
    { id: 'frame_gold', kind: 'frame', name: 'Gold Foil', price: 800, desc: 'Midnight blue and gold foil.' },
    { id: 'frame_frost', kind: 'frame', name: 'Frost Glass', price: 1200, desc: 'Frosted ice glass.' },
    { id: 'frame_lava', kind: 'frame', name: 'Lava Core', price: 1500, desc: 'A molten glow.' },
    { id: 'frame_aurora', kind: 'frame', name: 'Aurora', price: 2000, desc: 'Northern lights drifting around the card.' },
    { id: 'frame_prism', kind: 'frame', name: 'Prism', price: 3000, desc: 'Every colour at once.' },
    { id: 'title_bigcat', kind: 'title', name: 'Big Cat Energy', price: 400 },
    { id: 'title_wildcard', kind: 'title', name: 'Wild Card', price: 600 },
    { id: 'title_beasttamer', kind: 'title', name: 'Beast Tamer', price: 900 },
    { id: 'title_apex', kind: 'title', name: 'Apex Trainer', price: 1500 },
    // Earned
    { id: 'title_sharpeye', kind: 'title', name: 'Sharp Eye', earn: { what: 'callStreak', value: 5 }, desc: 'Call 5 fights right in a row.' },
    { id: 'title_oracle', kind: 'title', name: 'Oracle', earn: { what: 'callStreak', value: 10 }, desc: 'Call 10 fights right in a row.' },
    { id: 'frame_oracle', kind: 'frame', name: 'Oracle Eye', earn: { what: 'callStreak', value: 15 }, desc: 'Call 15 fights right in a row.' },
    { id: 'title_caller', kind: 'title', name: 'Fight Caller', earn: { what: 'calls', value: 100 }, desc: 'Call 100 fights.' },
    { id: 'title_pollster', kind: 'title', name: 'Pollster', earn: { what: 'votes', value: 100 }, desc: 'Vote on 100 animals.' },
    { id: 'title_regular', kind: 'title', name: 'Regular', earn: { what: 'loginRun', value: 7 }, desc: 'Log in 7 days in a row.' },
    { id: 'frame_streak', kind: 'frame', name: 'Streak Sparks', earn: { what: 'loginRun', value: 14 }, desc: 'Log in 14 days in a row.' },
    { id: 'frame_loyal', kind: 'frame', name: 'Loyal Pack', earn: { what: 'loginRun', value: 30 }, desc: 'Log in 30 days in a row.' },
    // Season 1 pass
    { id: 'frame_sunrise', kind: 'frame', name: 'Sunrise', earn: { what: 'pass', value: 5 }, desc: 'Season 1 Pass, tier 5.' },
    { id: 'title_trailblazer', kind: 'title', name: 'Trailblazer', earn: { what: 'pass', value: 10 }, desc: 'Season 1 Pass, tier 10.' },
    { id: 'title_s1_explorer', kind: 'title', name: 'Season 1 Explorer', earn: { what: 'pass', value: 20 }, desc: 'Season 1 Pass, tier 20.' },
    { id: 'frame_season1', kind: 'frame', name: 'Season 1', earn: { what: 'pass', value: 25 }, desc: 'Season 1 Pass, tier 25.' },
    { id: 'title_s1_legend', kind: 'title', name: 'Season 1 Legend', earn: { what: 'pass', value: 30 }, desc: 'Season 1 Pass, tier 30.' }
].map(Object.freeze));
const ITEM_BY_ID = new Map(ITEMS.map((item) => [item.id, item]));

// Looks earned by milestones (pass looks are claimed from the pass instead).
function earnedItems(eco) {
    const have = {
        callStreak: Number(eco.call?.best) || 0,
        calls: Number(eco.lifetime?.matchup_call) || 0,
        votes: Number(eco.lifetime?.vote) || 0,
        loginRun: Number(eco.login?.best) || 0
    };
    return ITEMS.filter((item) => item.earn && item.earn.what !== 'pass' && have[item.earn.what] >= item.earn.value).map((item) => item.id);
}

// ---------------------------------------------------------------- save shape

// The economy part of a user's save, normalized and rolled over to `today`.
function normalizeEconomy(raw, today = dayIndex()) {
    const eco = raw && typeof raw === 'object' ? JSON.parse(JSON.stringify(raw)) : {};
    if (!eco.today || eco.today.day !== today) eco.today = { day: today, n: {} };
    eco.today.n = eco.today.n && typeof eco.today.n === 'object' ? eco.today.n : {};
    eco.lifetime = eco.lifetime && typeof eco.lifetime === 'object' ? eco.lifetime : {};
    eco.call = { streak: Number(eco.call?.streak) || 0, best: Number(eco.call?.best) || 0 };
    eco.login = eco.login && typeof eco.login === 'object' ? eco.login : {};
    if (!eco.quests || eco.quests.day !== today) eco.quests = { day: today, claimed: [], chest: false };
    eco.quests.claimed = Array.isArray(eco.quests.claimed) ? eco.quests.claimed : [];
    if (!eco.pass || eco.pass.season !== PASS.season) eco.pass = { season: PASS.season, xp: 0, claimed: [] };
    eco.pass.claimed = Array.isArray(eco.pass.claimed) ? eco.pass.claimed : [];
    eco.pass.xp = Number(eco.pass.xp) || 0;
    eco.owned = Array.isArray(eco.owned) ? eco.owned.filter((id) => ITEM_BY_ID.has(id)) : [];
    for (const id of earnedItems(eco)) if (!eco.owned.includes(id)) eco.owned.push(id);
    if (eco.frame && !eco.owned.includes(eco.frame)) eco.frame = null;
    if (eco.title && eco.title !== 'title_rookie' && !eco.owned.includes(eco.title)) eco.title = null;
    return eco;
}

function questBoard(eco, today = dayIndex()) {
    return questsFor(today).map((quest) => {
        const progress = Math.min(quest.goal, Number(eco.today?.n?.[quest.kind]) || 0);
        return { ...quest, progress, done: progress >= quest.goal, claimed: eco.quests.claimed.includes(quest.slot) };
    });
}

function passState(eco, now = Date.now()) {
    const tier = passTierFor(eco.pass.xp);
    const into = eco.pass.xp - passXpFor(tier);
    const need = tier < PASS.tiers ? passNeed(tier + 1) : 0;
    return {
        season: PASS.season,
        name: PASS.name,
        endsAt: new Date(PASS.endsAt).toISOString(),
        active: passActive(now),
        xp: eco.pass.xp,
        tier,
        into,
        need,
        tiers: Array.from({ length: PASS.tiers }, (_, index) => {
            const reward = passReward(index + 1);
            return { ...reward, reached: index + 1 <= tier, claimed: eco.pass.claimed.includes(index + 1) };
        })
    };
}

// What the Rewards screen shows, and how many things are ready to claim.
function economyState(eco, now = Date.now()) {
    const today = dayIndex(now);
    const login = loginState(eco.login, today);
    const quests = questBoard(eco, today);
    const pass = passState(eco, now);
    const chestReady = quests.every((quest) => quest.claimed) && !eco.quests.chest;
    const questsReady = quests.filter((quest) => quest.done && !quest.claimed).length;
    const passReady = pass.tiers.filter((tier) => tier.reached && !tier.claimed).length;
    return {
        day: today,
        resetsAt: new Date((today + 1) * DAY_MS).toISOString(),
        login: { ...login, best: Number(eco.login.best) || 0 },
        quests,
        chest: { ready: chestReady, opened: Boolean(eco.quests.chest), ...QUEST_CHEST },
        pass,
        call: eco.call,
        today: eco.today.n,
        caps: Object.fromEntries(Object.entries(ACTIONS).map(([action, def]) => [action, { ...def, used: Math.min(def.cap, Number(eco.today.n[`paid:${action}`]) || 0) }])),
        lifetime: eco.lifetime,
        items: ITEMS.map((item) => ({ ...item, owned: item.free || eco.owned.includes(item.id) })),
        frame: eco.frame || null,
        title: eco.title || null,
        ready: (login.claimable ? 1 : 0) + questsReady + (chestReady ? 1 : 0) + passReady
    };
}

// The small part every page gets with the signed-in user (HUD badge, profile card).
function economySummary(eco, now = Date.now()) {
    const state = economyState(eco, now);
    return {
        ready: state.ready,
        dailyReady: state.login.claimable,
        loginStep: state.login.step,
        callStreak: eco.call.streak,
        frame: state.frame,
        title: state.title ? ITEM_BY_ID.get(state.title)?.name || null : null
    };
}

// ---------------------------------------------------------------- fight calls

// The fight a player calls is drawn when they call it, with the model's odds, from
// a server secret: the same player, matchup and day always get the same fight, and
// nobody can see it before calling.
function drawFight({ secret, matchupKey, dayKey, userId, firstWinsProbability }) {
    const digest = crypto.createHmac('sha256', String(secret)).update(`call|${matchupKey}|${dayKey}|${userId}`).digest();
    const roll = digest.readUIntBE(0, 6) / 2 ** 48;
    return { firstWins: roll < firstWinsProbability, roll };
}

module.exports = {
    ACTIONS,
    CALL_BONUS,
    COUNTER_FOR,
    DAY_MS,
    ITEMS,
    ITEM_BY_ID,
    LOGIN,
    LOGIN_PASS_XP,
    PASS,
    QUEST_CHEST,
    SHIELD_EVERY,
    callBonus,
    dayIndex,
    dayKeyOf,
    drawFight,
    earnedItems,
    economyState,
    economySummary,
    loginState,
    normalizeEconomy,
    passActive,
    passNeed,
    passReward,
    passState,
    passTierFor,
    passXpFor,
    questBoard,
    questsFor
};
