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
    const [games, votes, icons, shots] = await Promise.all([
        getJson(`https://games.roblox.com/v1/games?universeIds=${universeId}`),
        getJson(`https://games.roblox.com/v1/games/votes?universeIds=${universeId}`).catch(() => null),
        getJson(`https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`).catch(() => null),
        // The screenshots and videos on the game's Roblox page, in their order there.
        getJson(`https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${universeId}&countPerUniverse=10&defaults=false&size=768x432&format=Png&isCircular=false`).catch(() => null)
    ]);
    const game = games?.data?.[0];
    if (!game) return null;
    const vote = votes?.data?.[0] || {};
    const up = Number(vote.upVotes) || 0;
    const down = Number(vote.downVotes) || 0;
    const thumbnails = (shots?.data?.[0]?.thumbnails || [])
        .filter((thumb) => thumb.state === 'Completed' && /^https:\/\/[a-z0-9.-]+\.rbxcdn\.com\//.test(thumb.imageUrl || ''))
        .map((thumb) => thumb.imageUrl);
    return {
        universeId,
        placeId: game.rootPlaceId,
        // Roblox answers "[ Content Deleted ]" or "[TITLE UNAVAILABLE]" while a game is
        // under review; the site shows its own name instead.
        name: /^\s*\[.*\]\s*$/.test(String(game.name || '')) || !game.name ? 'Animal Battle Stats' : game.name,
        creator: game.creator?.name || null,
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
        thumbnails,
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
    // Live only once data/roblox-game.json says so (the ids are filled in while the place is private).
    const value = { live: Boolean(game) && config.status === 'live', status: config.status, name: config.name, game, leaderboards: boards };
    memo = { at: Date.now(), value };
    return value;
}

async function avatarHeadshot(userId) {
    const body = await getJson(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${encodeURIComponent(userId)}&size=150x150&format=Png&isCircular=false`);
    const thumb = body?.data?.[0];
    return thumb?.state === 'Completed' && /^https:\/\/[a-z0-9.-]+\.rbxcdn\.com\//.test(thumb.imageUrl || '') ? thumb.imageUrl : null;
}

// One linked player's value on each leaderboard (null where they have none yet).
async function playerStats(universeId, userId) {
    const key = process.env.ROBLOX_OPEN_CLOUD_KEY;
    if (!key || config.status !== 'live') return null;
    return Promise.all(BOARDS.map(async (board) => {
        const url = `https://apis.roblox.com/cloud/v2/universes/${universeId}/ordered-data-stores/${board.store}/scopes/global/entries/${encodeURIComponent(userId)}`;
        const entry = await getJson(url, { headers: { 'x-api-key': key } }).catch(() => null);
        return { id: board.id, label: board.label, value: entry && Number.isFinite(Number(entry.value)) ? Number(entry.value) : null };
    }));
}

// What a player's own profile shows for their linked Roblox account. Headshot
// URLs expire, so they are fetched fresh here instead of being stored.
async function robloxPlayerCard(userId) {
    if (!/^\d{1,20}$/.test(String(userId || ''))) return null;
    const universeId = await resolveUniverseId().catch(() => null);
    const [headshot, stats] = await Promise.all([
        avatarHeadshot(userId).catch(() => null),
        universeId ? playerStats(universeId, userId).catch(() => null) : null
    ]);
    return { headshot, stats, live: config.status === 'live' };
}

module.exports = { BOARDS, robloxSnapshot, robloxPlayerCard };
