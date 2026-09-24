// Build-only list of social cards for scripts/images/build-og.js. The build
// renders the images after Astro and removes this file before deploy.
import { animals, getAnimal, matchup, STATS } from '../../lib/catalog.js';
import { PAIRS } from '../../lib/matchups.js';

function card(animal) {
    return {
        slug: animal.slug,
        name: animal.name,
        sci: animal.scientific_name || '',
        tier: animal.tier,
        rank: animal.rank,
        power: animal.powerIndex,
        biome: animal.biome,
        cls: animal.class || animal.type || '',
        image: animal.image,
        stats: Object.fromEntries(STATS.map((stat) => [stat.key, Number(animal[stat.key]) || 0]))
    };
}

function oddsFor(a, b) {
    const result = matchup(a, b);
    return result.winner.slug === a.slug ? result.odds : 100 - result.odds;
}

const pick = (...slugs) => slugs.map(getAnimal).filter(Boolean).map((animal) => animal.slug);

export function GET() {
    const byTier = (tier) => animals.find((animal) => animal.tier === tier)?.slug;
    const lion = getAnimal('african-lion');
    const tiger = getAnimal('siberian-tiger');
    const jobs = {
        total: animals.length,
        animals: animals.map(card),
        pairs: PAIRS.map((pair) => ({ slug: pair.slug, a: pair.a.slug, b: pair.b.slug, oddsA: oddsFor(pair.a, pair.b) })),
        pages: [
            { file: 'site', kind: 'lineup', title: 'Animal Battle Stats', sub: `${animals.length} real animals · stats · tiers · who would win`, lineup: pick('siberian-tiger', 'grizzly-bear', 'african-elephant', 'gorilla', 'saltwater-crocodile') },
            { file: 'community', kind: 'lineup', title: 'Community', sub: 'Debates · fan votes · player leaderboard', lineup: pick('gorilla', 'gray-wolf', 'orca', 'bald-eagle', 'komodo-dragon') },
            { file: 'tier-list', kind: 'tiers', title: 'Animal Tier List', sub: `All ${animals.length} animals ranked S to F`, lineup: ['S', 'A', 'B', 'C', 'D', 'F'].map(byTier).filter(Boolean) },
            { file: 'rankings', kind: 'podium', title: 'Strongest Animals Ranked', sub: 'Power index leaderboards for every stat', lineup: animals.slice(0, 3).map((animal) => animal.slug) },
            { file: 'tournament', kind: 'lineup', title: 'Animal Tournament', sub: '8 to 64 animal brackets · pick every winner', lineup: pick('siberian-tiger', 'great-white-shark', 'african-elephant', 'grizzly-bear', 'saltwater-crocodile') },
            { file: 'roblox', kind: 'cards', title: 'Animal Battle Stats on Roblox', sub: `Collect ${animals.length} real animals · battle in 3D`, lineup: pick('african-lion', 'orca', 'bald-eagle') },
            ...(lion && tiger ? [{ file: 'compare', kind: 'versus', title: 'Who Would Win?', a: lion.slug, b: tiger.slug, oddsA: oddsFor(lion, tiger) }] : [])
        ]
    };
    return new Response(JSON.stringify(jobs), { headers: { 'Content-Type': 'application/json' } });
}
