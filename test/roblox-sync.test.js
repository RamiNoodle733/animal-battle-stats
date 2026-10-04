'use strict';

// The Roblox link (lib/roblox-save.js, lib/roblox-sync.js): a linked player's game save becomes a
// trainer card on the site, and the animals they have in the game join their card collection.

const test = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
process.env.MONGODB_URI ||= 'mongodb://127.0.0.1:1/roblox-sync-test';

const announced = [];
const discordPath = require.resolve('../lib/discord');
require.cache[discordPath] = { id: discordPath, filename: discordPath, loaded: true, exports: { notifyDiscord: async (type, data) => { announced.push({ type, data }); } } };

const mongoose = require('mongoose');
const User = require('../lib/models/User');
const RewardClaim = require('../lib/models/RewardClaim');
const collection = require('../lib/collection');
const save = require('../lib/roblox-save');
const sync = require('../lib/roblox-sync');

const NOW = Date.UTC(2026, 9, 2, 12);
const SECONDS = Math.floor(NOW / 1000);
const GAME = save.GAME;

// A save as the game writes it (DataService.defaultData with some progress).
function sampleEntry(fields = {}, lock = { job: 'abc', t: SECONDS - 30 }) {
    return {
        data: {
            v: 1,
            coins: 12345,
            wildTracks: 7,
            trainerXp: 1000,
            animals: {
                'african-lion': { lv: 14, xp: 3, st: 2, tr: 0, t: SECONDS - 5000, asc: 0 },
                gorilla: { lv: 9, xp: 0, st: 1, tr: 0, t: SECONDS - 9000 },
                megalodon: { lv: 99, xp: 0, st: 5, tr: 0, t: SECONDS - 100, asc: 1 },
                unicorn: { lv: 50, st: 5 }
            },
            team: ['african-lion', 'gorilla', 'unicorn', 'megalodon'],
            champion: 'megalodon',
            starter: 'gorilla',
            seen: { 'african-lion': true, gorilla: true, megalodon: true, hyena: true },
            bosses: { SAVANNA: true },
            legend: { SAVANNA: 2 },
            showdowns: { SAVANNA: { t: 61.27, n: 3, hunter: true, tier: 1, medal: 'gold' } },
            kingdoms: { SAVANNA: { g: 3 }, FOREST: { g: 1 } },
            explore: { islands: { SAVANNA: true } },
            stats: { wins: 120, losses: 30, battles: 150, bestStreak: 11, perfects: 40, parries: 'x' },
            achievements: { WELCOME: true, FIRSTWIN: true, NOPE: true },
            trophyDates: { WELCOME: SECONDS - 86400 },
            titles: ['On Fire', 42],
            equippedTitle: 'On Fire',
            cosmetics: { frame: 'FRAME_RARITY' },
            cup: { golds: 1, medals: { gold: 1, silver: 2, bronze: 0 } },
            race: { best: 83.456, finishes: 4, medals: { gold: 0, silver: 1, bronze: 3 } },
            safari: { photos: { orca: SECONDS, gorilla: SECONDS } },
            login: { streak: 3, best: 9 },
            keepsakes: { titan: 2, festival: 0, mega: 1 },
            receipts: { abc: 1 },
            createdAt: SECONDS - 30 * 86400,
            lastSeen: SECONDS - 60,
            ...fields
        },
        lock
    };
}

test('the game data covers the game: every game animal is a site card', () => {
    assert.equal(GAME.save.store, 'ABS_Players_v1');
    assert.equal(GAME.animals.length, 341); // the game's roster: every site animal but the pig-like ones (2026-10-04)
    for (const animal of GAME.animals) assert.ok(collection.cardFor(animal.id), animal.id);
    assert.equal(GAME.biomes.length, 8);
    assert.ok(GAME.trophies.length > 100);
});

test('a save becomes a trainer card, keeping only real animals and real trophies', () => {
    const card = save.parseSave(sampleEntry(), NOW);
    assert.deepEqual(Object.keys(card.animals).sort(), ['african-lion', 'gorilla', 'megalodon']);
    assert.deepEqual(card.animals.megalodon, [99, 5, 1]);
    assert.equal(card.count, 3);
    assert.equal(card.total, 341);
    assert.equal(card.seen, 4);
    assert.deepEqual(card.team, ['african-lion', 'gorilla', 'megalodon']);
    assert.equal(card.champion, 'megalodon');
    assert.equal(card.trainer.level, save.trainerLevel(1000).level);
    assert.equal(card.trainer.level, Math.floor(Math.log(1000 * 0.08 / 80 + 1) / Math.log(1.08) + 1e-11) + 1, 'the game\'s formula');
    assert.equal(card.playing, true, 'a lock refreshed 30 s ago: in a server now');
    assert.equal(card.record.wins, 120);
    assert.equal(card.record.parries, 0, 'junk numbers read as 0');
    assert.deepEqual(Object.keys(card.trophies.earned).sort(), ['FIRSTWIN', 'WELCOME']);
    assert.equal(card.trophies.earned.WELCOME, (SECONDS - 86400) * 1000);
    assert.equal(card.trophies.points, 30);
    assert.equal(card.trophies.platinum, false);
    assert.deepEqual(card.titles, ['On Fire']);
    const savanna = card.islands.find((island) => island.id === 'SAVANNA');
    assert.deepEqual({ seal: savanna.seal, boss: savanna.boss, crown: savanna.crown, hunter: savanna.hunter, best: savanna.best, legend: savanna.legend, camps: savanna.camps }, { seal: true, boss: true, crown: 'gold', hunter: true, best: 61.3, legend: 2, camps: true });
    assert.equal(card.islands.find((island) => island.id === 'FOREST').seal, false);
    assert.equal(card.race.best, 83.46);
    assert.equal(card.safari, 2);
    assert.equal(card.receipts, undefined, 'purchases are never copied');
    const pub = save.publicSnapshot(card);
    assert.equal(pub.coins, undefined);
    assert.equal(pub.wildTracks, undefined);
    assert.equal(pub.playing, undefined, 'whether they are in the game now stays private');
    assert.equal(pub.lastPlayed, undefined);
    assert.equal(pub.count, 3);
});

test('no save, an old lock and a released save', () => {
    assert.equal(save.parseSave(null, NOW), null);
    assert.equal(save.parseSave({ lock: null }, NOW), null);
    assert.equal(save.parseSave(sampleEntry({}, { job: 'x', t: SECONDS - 3600 }), NOW).playing, false);
    assert.equal(save.parseSave(sampleEntry({}, null), NOW).playing, false);
});

test('Open Cloud: the right entry, and what each answer means', async () => {
    process.env.ROBLOX_OPEN_CLOUD_KEY = 'test-key';
    const calls = [];
    const answer = (status, body) => async (url, options) => {
        calls.push({ url, key: options.headers['x-api-key'] });
        return { status, ok: status >= 200 && status < 300, json: async () => body };
    };
    const entry = sampleEntry();
    assert.deepEqual(await save.readSave('12345', { fetchImpl: answer(200, { path: 'x', value: entry }) }), entry);
    assert.match(calls[0].url, /\/cloud\/v2\/universes\/\d+\/data-stores\/ABS_Players_v1\/entries\/u12345$/);
    assert.equal(calls[0].key, 'test-key');
    assert.deepEqual(await save.readSave('12345', { fetchImpl: answer(200, { value: JSON.stringify(entry) }) }), entry, 'a value sent as text');
    assert.equal(await save.readSave('12345', { fetchImpl: answer(404, {}) }), null, 'never played');
    await assert.rejects(save.readSave('12345', { fetchImpl: answer(403, {}) }), (error) => error.code === 'no_access');
    await assert.rejects(save.readSave('12345', { fetchImpl: answer(429, {}) }), (error) => error.code === 'busy');
    await assert.rejects(save.readSave('nope'), (error) => error.code === 'bad_user');
    assert.deepEqual(await save.checkAccess({ fetchImpl: answer(404, {}) }), { ok: true });
    assert.equal((await save.checkAccess({ fetchImpl: answer(403, {}) })).code, 'no_access');
    delete process.env.ROBLOX_OPEN_CLOUD_KEY;
    await assert.rejects(save.readSave('12345'), (error) => error.code === 'not_configured');
});

test("the game's week and events, as the game works them out", () => {
    // 2026-10-02 is in the UTC week that started Thursday 2026-10-01 (week 2961)
    const week = save.gameWeek(NOW);
    assert.equal(week.week, 2961);
    assert.equal(new Date(week.starts).toISOString().slice(0, 10), '2026-10-01');
    assert.equal(week.featured.id, GAME.biomes[2961 % 8].id, 'Schedule.featuredBiome');
    assert.equal(week.cup.id, GAME.schedule.cupRules[2961 % GAME.schedule.cupRules.length].id, 'Cups.rule');
    // a raid every 15 minutes from the top of the hour, on for 4 minutes
    const raid = (at) => save.gameEvents(at).find((event) => event.id === 'RAID');
    assert.deepEqual([raid(NOW).on, raid(NOW).left], [true, 240]);
    assert.deepEqual([raid(NOW + 300 * 1000).on, raid(NOW + 300 * 1000).startsIn], [false, 600]);
    // the Coin Frenzy at :07 and :37
    const frenzy = save.gameEvents(Date.UTC(2026, 9, 2, 12, 7)).find((event) => event.id === 'FRENZY');
    assert.equal(frenzy.on, true);
});

test('syncing: the card is kept, game animals join the binder once, and a failed read keeps the last card', async () => {
    process.env.ROBLOX_OPEN_CLOUD_KEY = 'test-key';
    const user = new User({ username: 'trainer', email: 'trainer@example.com', password: 'x'.repeat(12), roblox: { userId: '777', username: 'Trainer777' } });
    const original = { fetch: globalThis.fetch, updateOne: User.updateOne, startSession: mongoose.startSession, findById: User.findById, save: User.prototype.save, create: RewardClaim.create };
    const updates = [];
    let reply = { status: 200, body: { value: sampleEntry() } };
    globalThis.fetch = async () => ({ status: reply.status, ok: reply.status === 200, json: async () => reply.body });
    User.updateOne = async (filter, update) => { updates.push(update.$set.robloxGame); return { matchedCount: 1 }; };
    mongoose.startSession = async () => ({ withTransaction: async (work) => work(), endSession: async () => {} });
    User.findById = () => ({ session: async () => user, then: (resolve, reject) => Promise.resolve(user).then(resolve, reject) });
    User.prototype.save = async function saveStub() { return this; };
    RewardClaim.create = async (docs) => docs;
    announced.length = 0;
    try {
        const first = await sync.syncPlayer(user, { now: NOW });
        assert.equal(first.snapshot.count, 3);
        assert.deepEqual(first.added.map((card) => card.slug).sort(), ['african-lion', 'gorilla', 'megalodon']);
        assert.deepEqual(Object.entries(collection.normalizeCollection(user.economy).cards).map(([slug, entry]) => [slug, entry.from]).sort(), [['african-lion', 'roblox'], ['gorilla', 'roblox'], ['megalodon', 'roblox']]);
        assert.deepEqual(announced.map((event) => [event.type, event.data.count]), [['roblox_cards', 3]], 'one post for all of them');

        // within a minute: the kept card, no new read
        const reads = updates.length;
        assert.equal((await sync.syncPlayer(user, { now: NOW + 30 * 1000 })).snapshot.count, 3);
        assert.equal(updates.length, reads);

        // later: read again; nothing new to add
        const again = await sync.syncPlayer(user, { now: NOW + 2 * 60 * 1000 });
        assert.deepEqual(again.added, []);
        assert.equal(announced.length, 1);

        // Roblox refuses: the last good card stays, with the reason
        reply = { status: 403, body: {} };
        const refused = await sync.syncPlayer(user, { now: NOW + 5 * 60 * 1000 });
        assert.equal(refused.error, 'no_access');
        assert.equal(refused.snapshot.count, 3);

        // the public view names the Roblox account only when its owner says so
        assert.equal(sync.publicRoblox(user).account, null);
        assert.equal(sync.publicRoblox(user).game.coins, undefined);
        user.roblox.showPublic = true;
        assert.equal(sync.publicRoblox(user).account.username, 'Trainer777');
        assert.deepEqual(Object.keys(sync.publicRoblox(user).account).sort(), ['displayName', 'username'], 'names only, never the Roblox user id');
    } finally {
        Object.assign(globalThis, { fetch: original.fetch });
        User.updateOne = original.updateOne;
        mongoose.startSession = original.startSession;
        User.findById = original.findById;
        User.prototype.save = original.save;
        RewardClaim.create = original.create;
        delete process.env.ROBLOX_OPEN_CLOUD_KEY;
    }
});

test('not linked: nothing to sync', async () => {
    assert.deepEqual(await sync.syncPlayer({ roblox: null }), { linked: false });
    assert.equal(sync.publicRoblox({ roblox: null }), null);
});
