'use strict';

// Live numbers for the Animal Battle Stats Roblox game.
//
// Public game stats (players online, visits, favorites, votes) come from
// Roblox's public web APIs and need no key. Global leaderboards are read from
// the game's OrderedDataStores through Roblox Open Cloud, which needs an API
// key with DataStore read access (ROBLOX_OPEN_CLOUD_KEY). Nothing here writes
// to Roblox.
//
// Configuration: ROBLOX_UNIVERSE_ID / ROBLOX_PLACE_ID env vars, falling back
// to data/roblox-game.json.

const config = require('../data/roblox-game.json');

const BOARDS = Object.freeze([
    { id: 'POWER', store: 'ABS_LB_POWER', label: 'Team power' },
    { id: 'COLLECTION', store: 'ABS_LB_COLLECTION', label: 'Animals collected' },
    { id: 'WINS', store: 'ABS_LB_WINS', label: 'Battles won' },
    { id: 'SHOW', store: 'ABS_LB_SHOW', label: 'Best show streak' }
]);

const TIMEOUT_MS = 4000;
let memo = { at: 0, value: null };

async function getJson(url, options = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
        const response = await fetch(url, { ...options, signal: controller.signal, headers: { Accept: 'application/json', ...(options.headers || {}) } });
        if (!response.ok) throw new Error(`${response.status} ${url}`);
        return await response.json();
    } finally {
        clearTimeout(timer);
    }
}

async function resolveUniverseId() {
    const universe = process.env.ROBLOX_UNIVERSE_ID || config.universeId;
    if (universe) return String(universe);
    const place = process.env.ROBLOX_PLACE_ID || config.placeId;
    if (!place) return null;
    const body = await getJson(`https://apis.roblox.com/universes/v1/places/${encodeURIComponent(place)}/universe`);
    return body?.universeId ? String(body.universeId) : null;
}

async function publicStats(universeId) {
    const [games, votes, icons] = await Promise.all([
        getJson(`https://games.roblox.com/v1/games?universeIds=${universeId}`),
        getJson(`https://games.roblox.com/v1/games/votes?universeIds=${universeId}`).catch(() => null),
        getJson(`https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`).catch(() => null)
    ]);
    const game = games?.data?.[0];
    if (!game) return null;
    const vote = votes?.data?.[0] || {};
    const up = Number(vote.upVotes) || 0;
    const down = Number(vote.downVotes) || 0;
    return {
        universeId,
        placeId: game.rootPlaceId,
        name: game.name,
        playing: Number(game.playing) || 0,
        visits: Number(game.visits) || 0,
        favorites: Number(game.favoritedCount) || 0,
        maxPlayers: game.maxPlayers,
        created: game.created,
        updated: game.updated,
        upVotes: up,
        downVotes: down,
        likeRatio: up + down > 0 ? up / (up + down) : null,
        icon: icons?.data?.[0]?.imageUrl || null,
        url: `https://www.roblox.com/games/${game.rootPlaceId}`
    };
}

async function displayNames(userIds) {
    if (!userIds.length) return new Map();
    const body = await getJson('https://users.roblox.com/v1/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userIds: userIds.map(Number), excludeBannedUsers: true })
    });
    return new Map((body?.data || []).map((user) => [String(user.id), user.displayName || user.name]));
}

async function leaderboards(universeId) {
    const key = process.env.ROBLOX_OPEN_CLOUD_KEY;
    if (!key) return null;
    const boards = await Promise.all(BOARDS.map(async (board) => {
        const url = `https://apis.roblox.com/cloud/v2/universes/${universeId}/ordered-data-stores/${board.store}/scopes/global/entries?maxPageSize=10&orderBy=${encodeURIComponent('value desc')}`;
        const body = await getJson(url, { headers: { 'x-api-key': key } }).catch(() => null);
        const entries = (body?.orderedDataStoreEntries || []).map((entry) => ({
            userId: String(entry.id || String(entry.path || '').split('/').pop()),
            value: Number(entry.value) || 0
        })).filter((entry) => /^\d+$/.test(entry.userId));
        return { ...board, entries };
    }));
    const names = await displayNames([...new Set(boards.flatMap((board) => board.entries.map((entry) => entry.userId)))]).catch(() => new Map());
    // Only display names are published: no avatars and no user ids.
    return boards.map((board) => ({
        id: board.id,
        label: board.label,
        top: board.entries.map((entry, index) => ({ rank: index + 1, name: names.get(entry.userId) || 'Trainer', value: entry.value }))
    }));
}

async function robloxSnapshot() {
    if (memo.value && Date.now() - memo.at < 60 * 1000) return memo.value;
    const universeId = await resolveUniverseId().catch(() => null);
    if (!universeId) {
        return { live: false, status: config.status, name: config.name };
    }
    const [game, boards] = await Promise.all([
        publicStats(universeId).catch(() => null),
        leaderboards(universeId).catch(() => null)
    ]);
    const value = { live: Boolean(game), status: config.status, name: config.name, game, leaderboards: boards };
    memo = { at: Date.now(), value };
    return value;
}

module.exports = { BOARDS, robloxSnapshot };
