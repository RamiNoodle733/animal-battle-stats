'use strict';

// A linked player's progress in the Roblox game, read from their save.
//
// The game keeps each save in the DataStore ABS_Players_v1 under "u<userId>", as { data, lock }
// (the game repo's DataService). The site reads it through Open Cloud, read only, with
// ROBLOX_OPEN_CLOUD_KEY (the key needs DataStore read access to that store: "universe-datastores
// .objects:read"), and turns it into a trainer card: level, animals, team, islands, trophies, the
// Weekly Cup, the Sky Trail, the Photo Safari. What each field means comes from
// data/roblox-game-data.json, exported from the game's own code (tools/export-site-data.luau in the
// game repo; import it with scripts/roblox/import-game-data.js), so no game rule is copied here.
//
// The site never writes to Roblox, and nothing done on the site changes the game: Roblox only allows
// in-game rewards for things done off the platform as public promos (a code anyone can use).

const GAME = require('../data/roblox-game-data.json');
const config = require('../data/roblox-game.json');

const TIMEOUT_MS = 5000;
const ANIMALS = new Map(GAME.animals.map((animal) => [animal.id, animal]));
const TROPHIES = new Map(GAME.trophies.map((trophy) => [trophy.id, trophy]));
const BIOME_IDS = GAME.biomes.map((biome) => biome.id);
const TROPHY_TOTAL = GAME.trophies.filter((trophy) => !trophy.extra).length;
const LOOKS = new Map(GAME.looks.map((look) => [look.id, look]));
const MEDALS = ['gold', 'silver', 'bronze'];

class RobloxSaveError extends Error {
    constructor(code, message) {
        super(message || code);
        this.code = code;
    }
}

// ---------------------------------------------------------------- numbers

const isMap = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
const count = (value) => (isMap(value) ? Object.keys(value).length : 0);
function num(value, max = 1e15) {
    const n = Number(value);
    return Number.isFinite(n) && n > 0 ? Math.min(Math.floor(n), max) : 0;
}
// Unix seconds from the save -> ms, or null.
function when(value) {
    const n = Number(value);
    return Number.isFinite(n) && n > 1e9 && n < 1e11 ? n * 1000 : null;
}

// The level a running total has reached, given the total each level needs (index 0 = level 1), and
// how far into the next level it is.
function levelFrom(thresholds, total) {
    let low = 0;
    let high = thresholds.length - 1;
    while (low < high) {
        const mid = Math.ceil((low + high) / 2);
        if (total >= thresholds[mid]) low = mid;
        else high = mid - 1;
    }
    const level = low + 1;
    const next = thresholds[low + 1];
    return { level, into: next == null ? 0 : total - thresholds[low], need: next == null ? 0 : next - thresholds[low] };
}

const trainerLevel = (xp) => levelFrom(GAME.trainerLevels, num(xp));
const trophyLevel = (points) => levelFrom(GAME.trophyLevels, num(points));

// ---------------------------------------------------------------- the save

// The trainer card from a save entry ({ data, lock }), or null when there is no save.
function parseSave(entry, now = Date.now()) {
    const data = isMap(entry?.data) ? entry.data : null;
    if (!data) return null;
    const stats = isMap(data.stats) ? data.stats : {};

    const animals = {};
    const rarities = Object.fromEntries(GAME.rarities.map((rarity) => [rarity.id, [0, 0]]));
    const islands = Object.fromEntries(BIOME_IDS.map((id) => [id, [0, 0]]));
    for (const animal of GAME.animals) {
        if (rarities[animal.rarity]) rarities[animal.rarity][1] += 1;
        if (islands[animal.biome]) islands[animal.biome][1] += 1;
    }
    for (const [id, owned] of Object.entries(isMap(data.animals) ? data.animals : {})) {
        const animal = ANIMALS.get(id);
        if (!animal || !isMap(owned)) continue;
        animals[id] = [Math.max(1, num(owned.lv, 999)), Math.max(1, num(owned.st, GAME.maxStars)), num(owned.asc, 9)];
        if (rarities[animal.rarity]) rarities[animal.rarity][0] += 1;
        if (islands[animal.biome]) islands[animal.biome][0] += 1;
    }

    const bosses = isMap(data.bosses) ? data.bosses : {};
    const showdowns = isMap(data.showdowns) ? data.showdowns : {};
    const legend = isMap(data.legend) ? data.legend : {};
    const kingdoms = isMap(data.kingdoms) ? data.kingdoms : {};
    const explored = isMap(data.explore?.islands) ? data.explore.islands : {};
    const island = BIOME_IDS.map((id) => {
        const showdown = isMap(showdowns[id]) ? showdowns[id] : null;
        return {
            id,
            owned: islands[id][0],
            total: islands[id][1],
            seal: num(kingdoms[id]?.g, 3) >= 3,
            boss: bosses[id] === true,
            crown: showdown ? (MEDALS.includes(showdown.medal) ? showdown.medal : 'won') : null,
            hunter: showdown?.hunter === true,
            best: showdown && Number(showdown.t) > 0 ? Math.round(Number(showdown.t) * 10) / 10 : null,
            legend: num(legend[id], 99),
            camps: explored[id] === true
        };
    });

    const earned = {};
    let points = 0;
    const dates = isMap(data.trophyDates) ? data.trophyDates : {};
    for (const [id, has] of Object.entries(isMap(data.achievements) ? data.achievements : {})) {
        const trophy = TROPHIES.get(id);
        if (!trophy || !has) continue;
        earned[id] = when(dates[id]) || 0;
        points += trophy.points || 0;
    }
    const trophyIds = Object.keys(earned);
    const platinum = trophyIds.some((id) => TROPHIES.get(id)?.tier === 'PLATINUM');

    const team = (Array.isArray(data.team) ? data.team : []).filter((id) => animals[id]).slice(0, 3);
    const lock = isMap(entry.lock) ? entry.lock : null;
    const lockAt = when(lock?.t);
    const cup = isMap(data.cup) ? data.cup : {};
    const race = isMap(data.race) ? data.race : {};
    const login = isMap(data.login) ? data.login : {};
    const keepsakes = isMap(data.keepsakes) ? data.keepsakes : {};
    const cosmetics = isMap(data.cosmetics) ? data.cosmetics : {};
    const titles = (Array.isArray(data.titles) ? data.titles : []).filter((title) => typeof title === 'string').slice(0, 300);
    const frame = typeof cosmetics.frame === 'string' ? LOOKS.get(cosmetics.frame)?.name || null : null;

    return {
        v: 1,
        playing: Boolean(lockAt && now - lockAt < GAME.save.onlineSeconds * 1000),
        lastPlayed: when(data.lastSeen) || lockAt,
        joined: when(data.createdAt),
        trainer: { ...trainerLevel(data.trainerXp), xp: num(data.trainerXp) },
        coins: num(data.coins),
        wildTracks: num(data.wildTracks),
        animals,
        count: Object.keys(animals).length,
        total: GAME.animals.length,
        seen: count(data.seen),
        rarities,
        islands: island,
        team,
        champion: animals[data.champion] ? data.champion : null,
        starter: ANIMALS.has(data.starter) ? data.starter : null,
        record: {
            wins: num(stats.wins),
            losses: num(stats.losses),
            battles: num(stats.battles),
            bestStreak: num(stats.bestStreak),
            perfects: num(stats.perfects),
            parries: num(stats.parries),
            gradeS: num(stats.gradeS),
            cleanWins: num(stats.cleanWins),
            titansFelled: num(stats.titansFelled),
            festivals: num(stats.festivals),
            lanterns: num(stats.lanterns)
        },
        trophies: {
            earned,
            count: trophyIds.length,
            total: TROPHY_TOTAL,
            points,
            ...trophyLevel(points),
            platinum
        },
        title: typeof data.equippedTitle === 'string' ? data.equippedTitle.slice(0, 60) : null,
        titles,
        frame,
        cup: { golds: num(cup.golds), gold: num(cup.medals?.gold), silver: num(cup.medals?.silver), bronze: num(cup.medals?.bronze) },
        race: { best: Number(race.best) > 0 ? Math.round(Number(race.best) * 100) / 100 : null, finishes: num(race.finishes), gold: num(race.medals?.gold), silver: num(race.medals?.silver), bronze: num(race.medals?.bronze) },
        safari: count(data.safari?.photos),
        login: { streak: num(login.streak), best: num(login.best) },
        keepsakes: { titan: num(keepsakes.titan), festival: num(keepsakes.festival), mega: num(keepsakes.mega) }
    };
}

// What anyone may see on a public profile: the progress, not the wallet, and not when the player
// is in the game (many players are children: "Playing now" stays on their own profile).
function publicSnapshot(snapshot) {
    if (!snapshot) return null;
    const rest = { ...snapshot };
    delete rest.coins;
    delete rest.wildTracks;
    delete rest.playing;
    delete rest.lastPlayed;
    return rest;
}

// ---------------------------------------------------------------- reading

function universeId() {
    const id = process.env.ROBLOX_UNIVERSE_ID || config.universeId;
    return id ? String(id) : null;
}

async function fetchEntry(key, fetchImpl) {
    const apiKey = process.env.ROBLOX_OPEN_CLOUD_KEY;
    const universe = universeId();
    if (!apiKey || !universe) throw new RobloxSaveError('not_configured', 'The Roblox Open Cloud key is not set.');
    const url = `https://apis.roblox.com/cloud/v2/universes/${universe}/data-stores/${encodeURIComponent(GAME.save.store)}/entries/${encodeURIComponent(key)}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    let response;
    try {
        response = await fetchImpl(url, { headers: { 'x-api-key': apiKey, Accept: 'application/json' }, signal: controller.signal });
    } catch {
        throw new RobloxSaveError('unavailable', 'Roblox did not answer.');
    } finally {
        clearTimeout(timer);
    }
    if (response.status === 404) return null;
    if (response.status === 401 || response.status === 403) throw new RobloxSaveError('no_access', 'The Open Cloud key cannot read the game\'s saves (it needs DataStore read access to ABS_Players_v1).');
    if (response.status === 429) throw new RobloxSaveError('busy', 'Roblox asked us to slow down.');
    if (!response.ok) throw new RobloxSaveError('unavailable', `Roblox answered ${response.status}.`);
    const body = await response.json().catch(() => null);
    let value = body?.value;
    if (typeof value === 'string') {
        try { value = JSON.parse(value); } catch { value = null; }
    }
    return value ?? null;
}

// A player's save entry ({ data, lock }), or null if they have never played.
async function readSave(robloxUserId, { fetchImpl = fetch } = {}) {
    const id = String(robloxUserId || '');
    if (!/^\d{1,20}$/.test(id)) throw new RobloxSaveError('bad_user', 'Not a Roblox user id.');
    return fetchEntry(GAME.save.key.replace('{userId}', id), fetchImpl);
}

// Whether the key can read the game's saves: the game's own probe key never exists, so a 404 is a yes.
async function checkAccess({ fetchImpl = fetch } = {}) {
    try {
        await fetchEntry('__site_probe', fetchImpl);
        return { ok: true };
    } catch (error) {
        return { ok: false, code: error.code || 'unavailable', message: error.message };
    }
}

// ---------------------------------------------------------------- the game's clock

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const RULES = new Map(GAME.schedule.cupRules.map((rule) => [rule.id, rule]));
const FAMILIES = new Map(GAME.families.map((family) => [family.id, family]));
const BIOMES = new Map(GAME.biomes.map((biome) => [biome.id, biome]));

// This week in the game (a UTC week from Thursday): the Weekly Cup, the Family of the Week and the
// featured island, as the game works them out.
function gameWeek(now = Date.now()) {
    const week = Math.floor(now / WEEK_MS);
    const row = GAME.schedule.weeks.find((item) => item.week === week);
    if (!row) return null;
    return {
        week,
        starts: week * WEEK_MS,
        ends: (week + 1) * WEEK_MS,
        cup: RULES.get(row.cup) || null,
        family: FAMILIES.get(row.family) || null,
        featured: BIOMES.get(row.featured) || null
    };
}

// The timed events on every server: which are on now and how long until each starts.
function gameEvents(now = Date.now()) {
    const t = Math.floor(now / 1000);
    return GAME.schedule.events.map((event) => {
        const into = (((t - event.offset) % event.every) + event.every) % event.every;
        const on = into < event.length;
        return { id: event.id, name: event.name, where: event.where, on, left: on ? event.length - into : 0, startsIn: on ? 0 : event.every - into, every: event.every };
    });
}

// An animal as it is in the game, or null if it isn't in the game.
function gameAnimal(slug) {
    return ANIMALS.get(slug) || null;
}

module.exports = {
    GAME,
    RobloxSaveError,
    checkAccess,
    gameAnimal,
    gameEvents,
    gameWeek,
    levelFrom,
    parseSave,
    publicSnapshot,
    readSave,
    trainerLevel,
    trophyLevel
};
