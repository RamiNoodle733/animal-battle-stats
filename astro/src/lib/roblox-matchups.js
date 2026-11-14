// The Roblox game's matchup links on the site: PLAY THIS MATCHUP IN ROBLOX on the Who Would Win screens
// (components/RobloxMatchup.astro) and the home's TODAY'S MATCHUP, the pair the game's own stage shows that day.
// data/roblox-matchups.json is the `matchups` part of the game's site export (scripts/roblox/import-matchups.js);
// matchup-link.js holds the rules.
import data from '../../../data/roblox-matchups.json';
import { ROBLOX } from './site.js';
import { getAnimal } from './catalog.js';
import { findPair } from './matchups.js';
import { matchupUrl, pairForDay, pairHref, utcDay } from './matchup-link.js';

const GAME = Object.freeze({ place: data.place, most: data.most, ids: new Set(data.ids) });

// The link for two slugs, or null. While the game is not live (site.js: private or in review) the site links nowhere,
// as every PLAY button does.
export function robloxMatchupUrl(a, b) {
    return ROBLOX.live ? matchupUrl(GAME, a, b) : null;
}

// What the browser needs to keep the link right when a fight's animals change (scripts/roblox-matchup.js).
export const ROBLOX_MATCHUPS = Object.freeze({ live: ROBLOX.live, place: data.place, most: data.most });

// The game's famous pairs for the home's TODAY'S MATCHUP, in the game's order (the daily rule counts through them),
// each [a, b, page] (matchup-link.js pairHref: which curated page it has, if any), and the rule's step. The page shows
// the build day's pair and the browser counts the visitor's own day the same way, so it is right every day without a
// new build. (scripts/roblox/import-matchups.js admits only site animals, so both animals of every pair are here.)
export const TODAY = Object.freeze({
    step: data.step,
    place: data.place,
    most: data.most,
    pairs: data.pairs.map(([a, b]) => [a, b, findPair(`${a}-vs-${b}`) ? 1 : findPair(`${b}-vs-${a}`) ? 2 : 0])
});

export function todaysPair(day = utcDay()) {
    const pair = pairForDay(TODAY.pairs, TODAY.step, day);
    return { a: getAnimal(pair[0]), b: getAnimal(pair[1]), href: pairHref(pair) };
}
