// The link preview of every section page (home, all animals, the tier lists,
// the rankings, tournament, community, about): the page's title next to a hand
// of real battle cards, drawn at build time by scripts/images/build-cards.mjs
// with the site's card renderer. Animal and matchup pages have their own
// (card.js); Roblox and the shows keep theirs.
import { animals, getAnimal, GROUPS, sourceCount } from './catalog.js';
import { CATEGORIES, leaderboard } from './categories.js';
import { cardData, fileVersion } from './card.js';

const n = animals.length;
const slugs = (list, count) => list.slice(0, count).map((animal) => animal.slug);
// Named picks, topped up from the strongest so a renamed animal never leaves a gap.
function pick(names, count = names.length) {
    const chosen = names.map(getAnimal).filter(Boolean).map((animal) => animal.slug);
    for (const animal of animals) {
        if (chosen.length >= count) break;
        if (!chosen.includes(animal.slug)) chosen.push(animal.slug);
    }
    return chosen.slice(0, count);
}
const bestOfTier = (tier) => animals.find((animal) => animal.tier === tier)?.slug;
const shorten = (text, max = 120) => {
    const first = String(text || '').split(/(?<=[.!?])\s+/)[0];
    return first.length > max ? `${first.slice(0, max - 1).replace(/\s+\S*$/, '')}…` : first;
};

// id -> { title, sub, chips, cards (slugs, the first in the middle of the fan), layout, tier (the glow) }
export const SECTIONS = Object.freeze({
    home: { title: 'Who would win?', sub: `${n} real animals rated on six battle stats. Settle any fight.`, chips: `${n} ANIMALS · S TO F · 1V1 OR 1,000V1`, cards: slugs(animals, 5), layout: 'fan', tier: 's' },
    animals: { title: `All ${n} animals`, sub: 'Every animal has a battle card: stats, measurements, abilities and sources.', chips: `${sourceCount.toLocaleString('en-US')} CITED SOURCES`, cards: ['S', 'A', 'B', 'C', 'D'].map(bestOfTier).filter(Boolean), layout: 'fan', tier: 'a' },
    tiers: { title: 'Animal tier list', sub: `All ${n} animals ranked S to F on one absolute scale.`, chips: 'S · A · B · C · D · F', cards: ['S', 'A', 'B', 'C', 'D', 'F'].map(bestOfTier).filter(Boolean), layout: 'fan', tier: 's' },
    ...Object.fromEntries(GROUPS.map((group) => {
        const list = animals.filter((animal) => animal.group === group.key);
        return [`tiers-${group.key}`, { title: `${group.label} tier list`, sub: `All ${list.length} ${group.label.toLowerCase()} ranked S to F.`, chips: `${list.length} ${group.label.toUpperCase()}`, cards: slugs(list, 5), layout: 'fan', tier: (list[0]?.tier || 'a').toLowerCase() }];
    })),
    rankings: { title: 'Strongest animals ranked', sub: 'Power index leaderboards for every battle stat.', chips: 'THE TOP 3', cards: slugs(animals, 3), layout: 'podium', tier: 's' },
    ...Object.fromEntries(CATEGORIES.map((category) => {
        const list = leaderboard(category);
        return [`rankings-${category.slug}`, { title: category.label, sub: shorten(category.intro), chips: `RANKED BY ${category.stat.toUpperCase()}`, cards: slugs(list, 3), layout: 'podium', tier: (list[0]?.tier || 's').toLowerCase() }];
    })),
    versus: { title: 'Who would win?', sub: `Pick any two of ${n} animals: one on one, or 100 humans vs a gorilla.`, chips: 'STATS · ODDS · AN ANIMATED FIGHT', cards: pick(['orca', 'great-white-shark'], 2), layout: 'versus', tier: 's' },
    tournament: { title: 'Animal tournament', sub: '8 to 64 animal brackets. Pick every winner and crown a champion.', chips: 'BRACKETS · 8 TO 64', cards: pick(['great-white-shark', 'siberian-tiger', 'grizzly-bear', 'african-elephant'], 4), layout: 'fan', tier: 'a' },
    community: { title: 'The arena', sub: 'Debate matchups, vote on the ratings and climb the player leaderboard.', chips: 'TALK · VOTES · LEADERBOARD', cards: pick(['orca', 'gorilla', 'gray-wolf', 'bald-eagle', 'komodo-dragon'], 5), layout: 'fan', tier: 'b' },
    about: { title: 'How the ratings work', sub: `Six battle stats on one 0-100 scale, built from ${sourceCount.toLocaleString('en-US')} cited sources.`, chips: 'ATTACK · DEFENSE · AGILITY · STAMINA · INTELLECT · SPECIAL', cards: pick(['african-lion'], 1), layout: 'pair', tier: 'b' }
});

// What the build draws for a section: its words and its cards' data.
export function sectionJob(id) {
    const section = SECTIONS[id];
    return { file: `section/${id}`, ...section, cards: section.cards.map((slug) => cardData(getAnimal(slug))) };
}

// The preview's address, versioned by everything it is drawn from.
export function sectionPreview(id) {
    if (!SECTIONS[id]) throw new Error(`No preview for section "${id}"`);
    return `/images/og/section/${id}.jpg?v=${fileVersion(sectionJob(id))}`;
}

export const sectionAlt = (id) => `Animal Battle Stats battle cards: ${SECTIONS[id].title}`;
