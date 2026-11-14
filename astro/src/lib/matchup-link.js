// A Roblox matchup link (the game repo's docs/MATCHUP_LINKS.md): the game opens on one "who would win?" fight, the
// player fighting as the first animal. The launch data is one strict form, m=<first>~<second>, each the animal's id in
// the game (the same as its slug here). Roblox decodes launchData once, so "=" travels as %3D; "~" and "-" need nothing.
// No imports, so the pages (astro/src/lib/roblox-matchups.js), the client (scripts/roblox-matchup.js) and the tests share
// one copy of the rules.

// `game`: { place, ids: Set of the game's animal ids, most: the longest launch data it reads }.
// The link, or null when the game could not open that fight: no place, the same animal twice, an animal the game does
// not have, or launch data too long.
export function matchupUrl(game, a, b) {
    if (!game?.place || !game.ids || !a || !b || a === b) return null;
    if (!game.ids.has(a) || !game.ids.has(b)) return null;
    const launch = `m=${a}~${b}`;
    if (launch.length > (game.most || 96)) return null;
    return `https://www.roblox.com/games/start?placeId=${game.place}&launchData=${encodeURIComponent(launch)}`;
}

// The UTC day the game counts in: floor(unix seconds / 86400).
export const utcDay = (ms = Date.now()) => Math.floor(ms / 86400000);

// The game's TODAY'S MATCHUP on UTC day `day`: pairs[(day * step) % #pairs], as the game's Shared Game/Matchups counts it
// (from 1 there). The same pair stands on the game's stage that day.
export function pairForDay(pairs, step, day) {
    if (!pairs?.length) return null;
    const count = pairs.length;
    return pairs[(((day * step) % count) + count) % count];
}

// A famous pair's page on this site, from [a, b, page]: page 1 is its curated page /compare/a-vs-b, 2 is /compare/b-vs-a
// (curated pages put the higher-ranked animal first), 0 is none, so the Who Would Win tool on that pair.
export function pairHref([a, b, page]) {
    if (page === 1) return `/compare/${a}-vs-${b}`;
    if (page === 2) return `/compare/${b}-vs-${a}`;
    return `/compare?a=${a}&b=${b}`;
}
