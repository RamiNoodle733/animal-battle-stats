// "Who would win" pages: which pairs get a static page, and the written verdict.
import { animals, getAnimal, rivals, matchup, STATS, MODEL, fmtWeight, fmtSpeed, fmtScore } from './catalog.js';

// Classic debates people actually search for. Pairs that are not in the roster
// are skipped automatically.
const CLASSICS = [
    ['african-lion', 'siberian-tiger'], ['gorilla', 'grizzly-bear'], ['orca', 'great-white-shark'],
    ['polar-bear', 'grizzly-bear'], ['saltwater-crocodile', 'great-white-shark'], ['hippopotamus', 'saltwater-crocodile'],
    ['african-elephant', 'rhinoceros'], ['gorilla', 'african-lion'], ['jaguar', 'leopard'], ['gray-wolf', 'cougar'],
    ['honey-badger', 'black-mamba'], ['mongoose', 'king-cobra'], ['komodo-dragon', 'honey-badger'],
    ['megalodon', 'blue-whale'], ['megalodon', 'orca'], ['bull-shark', 'alligator'], ['chimpanzee', 'gorilla'],
    ['moose', 'grizzly-bear'], ['cape-buffalo', 'african-lion'], ['siberian-tiger', 'grizzly-bear'],
    ['polar-bear', 'siberian-tiger'], ['green-anaconda', 'jaguar'], ['golden-eagle', 'harpy-eagle'],
    ['cheetah', 'leopard'], ['hyena', 'african-wild-dog'], ['walrus', 'polar-bear'], ['hippopotamus', 'african-elephant'],
    ['bison', 'grizzly-bear'], ['tiger-shark', 'great-white-shark'], ['wolverine', 'gray-wolf'], ['african-lion', 'hyena'],
    ['black-panther', 'cougar'], ['gorilla', 'siberian-tiger'], ['kangaroo', 'gray-wolf'], ['orca', 'megalodon'],
    ['saltwater-crocodile', 'hippopotamus'], ['polar-bear', 'walrus'], ['african-lion', 'grizzly-bear'],
    ['chimpanzee', 'orangutan'], ['bald-eagle', 'golden-eagle'], ['army-ant', 'bullet-ant'], ['king-cobra', 'black-mamba'],
    ['komodo-dragon', 'saltwater-crocodile'], ['gray-wolf', 'hyena'], ['cougar', 'jaguar'], ['snow-leopard', 'cougar'],
    ['great-white-shark', 'hammerhead-shark'], ['bull-shark', 'tiger-shark'], ['rhinoceros', 'hippopotamus'],
    ['grizzly-bear', 'black-bear'], ['african-lion', 'jaguar'], ['honey-badger', 'wolverine'], ['cassowary', 'kangaroo'],
    ['ostrich', 'cassowary'], ['octopus', 'mantis-shrimp'], ['piranha', 'electric-eel'], ['giant-squid', 'colossal-squid']
];

function key(a, b) {
    return [a, b].sort().join('|');
}

// Canonical page order: the higher-ranked animal first ("Orca vs Great White Shark").
export function orderPair(a, b) {
    return a.rank <= b.rank ? [a, b] : [b, a];
}

export function pairSlug(a, b) {
    const [first, second] = orderPair(a, b);
    return `${first.slug}-vs-${second.slug}`;
}

function buildPairs() {
    const pairs = new Map();
    const add = (a, b, classic = false) => {
        if (!a || !b || a.slug === b.slug) return;
        const id = key(a.slug, b.slug);
        const existing = pairs.get(id);
        if (existing) { existing.classic ||= classic; return; }
        const [first, second] = orderPair(a, b);
        pairs.set(id, { a: first, b: second, slug: `${first.slug}-vs-${second.slug}`, classic });
    };
    for (const [left, right] of CLASSICS) add(getAnimal(left), getAnimal(right), true);
    for (const animal of animals) {
        for (const rival of rivals(animal, 4)) add(animal, rival);
    }
    return [...pairs.values()];
}

export const PAIRS = buildPairs();
const pairBySlug = new Map(PAIRS.map((pair) => [pair.slug, pair]));
export const findPair = (slug) => pairBySlug.get(slug);

// Page link for a matchup: static page if curated, otherwise the live tool.
export function matchupHref(a, b) {
    const slug = pairSlug(a, b);
    return pairBySlug.has(slug) ? `/compare/${slug}` : `/compare?a=${a.slug}&b=${b.slug}`;
}

export function pairsFor(animal) {
    return PAIRS.filter((pair) => pair.a.slug === animal.slug || pair.b.slug === animal.slug);
}

const AQUATIC_TYPES = new Set(['Fish', 'Cephalopod', 'Cnidarian', 'Crustacean']);
const MARINE = new Set(['orca', 'bottlenose-dolphin', 'blue-whale', 'beluga-whale', 'narwhal', 'manatee', 'megalodon']);

function realm(animal) {
    if (AQUATIC_TYPES.has(animal.type) || MARINE.has(animal.slug)) return 'water';
    if (animal.type === 'Bird' && animal.agility > 70) return 'air';
    return 'land';
}

function lower(value) {
    return String(value || '').charAt(0).toLowerCase() + String(value || '').slice(1);
}

// Written verdict. Everything is computed from the two profiles, so every page
// says something specific about its own pair.
export function verdict(a, b) {
    const result = matchup(a, b);
    const { winner, loser, odds, strength } = result;
    const wins = STATS.filter((stat) => (winner[stat.key] || 0) > (loser[stat.key] || 0));
    const losses = STATS.filter((stat) => (loser[stat.key] || 0) > (winner[stat.key] || 0));
    // Biggest weighted stat advantage in the winner's favour.
    const lead = MODEL.FACTORS
        .map((factor) => ({ ...factor, edge: ((winner[factor.key] || 0) - (loser[factor.key] || 0)) * factor.weight }))
        .sort((x, y) => y.edge - x.edge)[0];
    const paragraphs = [];

    paragraphs.push(`${winner.name} wins this matchup ${odds}% of the time in the Animal Battle Stats model (${lower(strength)}). It leads in ${wins.length} of 6 battle stats${wins.length ? `, with the biggest swing coming from ${lead.label.toLowerCase()} (${fmtScore(winner[lead.key] ?? 0)} vs ${fmtScore(loser[lead.key] ?? 0)})` : ''}. Its power index is ${fmtScore(winner.powerIndex)} against ${fmtScore(loser.powerIndex)} for the ${loser.name}.`);

    const wa = Number(winner.weight_kg) || 0;
    const la = Number(loser.weight_kg) || 0;
    if (wa > 0 && la > 0) {
        const heavier = wa >= la ? winner : loser;
        const lighter = heavier === winner ? loser : winner;
        const ratio = Math.max(wa, la) / Math.min(wa, la);
        const hw = fmtWeight(heavier.weight_kg);
        const lw = fmtWeight(lighter.weight_kg);
        if (ratio >= 1.25) {
            paragraphs.push(`Size matters here: a typical adult ${heavier.name} weighs about ${hw.metric} (${hw.imperial}), roughly ${ratio >= 10 ? Math.round(ratio) : ratio.toFixed(1)}× the ${lighter.name}'s ${lw.metric}.${heavier === loser ? ` Despite that, the ${winner.name}'s weapons and fighting stats carry the day.` : ''}`);
        } else {
            paragraphs.push(`The two are close in size (${hw.metric} vs ${lw.metric}), so the fight comes down to weapons, defense and technique rather than mass.`);
        }
    }

    if (losses.length) {
        const best = losses.sort((x, y) => ((loser[y.key] || 0) - (winner[y.key] || 0)) - ((loser[x.key] || 0) - (winner[x.key] || 0)))[0];
        paragraphs.push(`The ${loser.name}'s best chance is its ${best.label.toLowerCase()} (${fmtScore(loser[best.key])} vs ${fmtScore(winner[best.key])})${loser.special_abilities?.length ? `, plus abilities like ${loser.special_abilities.slice(0, 2).join(' and ')}` : ''}. ${odds < 65 ? 'This one is close enough that terrain, first contact and motivation could flip it.' : 'It is a real edge, but not enough to overcome the gap everywhere else.'}`);
    }

    const ra = realm(a);
    const rb = realm(b);
    if (ra !== rb) {
        const waterAnimal = ra === 'water' ? a : rb === 'water' ? b : null;
        if (waterAnimal) {
            paragraphs.push(`Reality check: these two would never meet. The ${waterAnimal.name} lives in water, so this verdict is a neutral "stat fight". In deep water the ${waterAnimal.name} would hold every advantage; on dry land it could not fight at all.`);
        }
    }
    return { ...result, paragraphs, wins, losses };
}

export function speedLine(animal) {
    const speed = fmtSpeed(animal.speed_mps);
    return speed ? `${speed.metric} (${speed.imperial})` : null;
}
