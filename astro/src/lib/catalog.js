// Build-time data access for every static page: the canonical catalogue,
// research profiles, metrics (power index, tier, rank), images and matchups.
import records from '../../../animal_stats.json';
import profilesFile from '../../../data/animal-profiles.json';
import variantManifest from '../../../.cache/image-variants/manifest.json';
import metrics from '../../../lib/animal-metrics.js';
import battleModel from '../../../js/battle-engine.js';
import biomeFile from '../../../data/animal-biomes.json';

// Biome per animal, shared with the Roblox game's islands.
export const BIOMES = Object.freeze({
    savanna: { label: 'Savanna', icon: 'map' },
    forest: { label: 'Forest', icon: 'map' },
    jungle: { label: 'Jungle', icon: 'map' },
    wetlands: { label: 'Wetlands', icon: 'map' },
    desert: { label: 'Desert', icon: 'map' },
    mountains: { label: 'Mountains', icon: 'map' },
    arctic: { label: 'Arctic', icon: 'map' },
    ocean: { label: 'Ocean', icon: 'map' }
});

export const STATS = Object.freeze([
    { key: 'attack', label: 'Attack', abbr: 'ATK', cls: 'stat-atk', blurb: 'Damage from bites, claws, horns, venom, constriction or sheer force.' },
    { key: 'defense', label: 'Defense', abbr: 'DEF', cls: 'stat-def', blurb: 'Armor, hide, mass and toughness: how hard it is to disable.' },
    { key: 'agility', label: 'Agility', abbr: 'AGI', cls: 'stat-agi', blurb: 'Reflexes, acceleration, balance and evasion (not just top speed).' },
    { key: 'stamina', label: 'Stamina', abbr: 'STA', cls: 'stat-sta', blurb: 'How long it keeps fighting, chasing or swimming at full effort.' },
    { key: 'intelligence', label: 'Intelligence', abbr: 'INT', cls: 'stat-int', blurb: 'Problem solving, tactics, learning and coordination.' },
    { key: 'special', label: 'Special', abbr: 'SPL', cls: 'stat-spl', blurb: 'Rare matchup-changers: venom, electricity, echolocation, camouflage.' }
]);

export const SUBSTATS = Object.freeze([
    ['raw_power', 'Raw power', 'attack'],
    ['weaponry', 'Weaponry', 'attack'],
    ['ferocity', 'Ferocity', 'attack'],
    ['protection', 'Protection', 'defense'],
    ['toughness', 'Toughness', 'defense'],
    ['maneuverability', 'Maneuverability', 'agility'],
    ['speed', 'Speed', 'agility'],
    ['endurance', 'Endurance', 'stamina'],
    ['recovery', 'Recovery', 'stamina'],
    ['tactics', 'Tactics', 'intelligence'],
    ['senses', 'Senses', 'intelligence'],
    ['abilities', 'Abilities', 'special']
]);

export const TIERS = metrics.TIERS;
export const POWER_WEIGHTS = metrics.POWER_WEIGHTS;
export const MODEL = battleModel;

const profiles = profilesFile.animals || {};

const SEA_MAMMALS = new Set([
    'orca', 'bottlenose-dolphin', 'blue-whale', 'beluga-whale', 'narwhal',
    'seal', 'sea-lion', 'walrus', 'manatee', 'sea-otter'
]);

// Group names used across listing pages. Order matters for filters.
export const GROUPS = Object.freeze([
    { key: 'mammals', label: 'Mammals', types: ['Mammal', 'Marsupial'] },
    { key: 'birds', label: 'Birds', types: ['Bird'] },
    { key: 'reptiles', label: 'Reptiles', types: ['Reptile'] },
    { key: 'sea', label: 'Sea creatures', types: ['Fish', 'Cephalopod', 'Cnidarian', 'Crustacean'], extra: (animal) => SEA_MAMMALS.has(animal.slug) },
    { key: 'amphibians', label: 'Amphibians', types: ['Amphibian'] },
    { key: 'bugs', label: 'Bugs & spiders', types: ['Insect', 'Arachnid', 'Arthropod', 'Invertebrate'] }
]);

// Equal-area sizing. Fitting every photo to the same box makes long animals
// (crocodiles, sharks) tiny and blocky ones (elephants) huge. Pages instead
// size each image so its area is the same (CSS: width = fit * k * box height,
// see .animal-art in abs.css): k = sqrt(aspect ratio), nudged up for sparse
// shapes (birds in flight, coiled snakes) that cover little of their frame.
export function sizeFactor(aspect, fill = 0.5) {
    const sparse = Math.min(1.3, Math.max(0.88, Math.pow(0.45 / Math.max(fill, 0.05), 0.25)));
    return Math.round(Math.sqrt(aspect) * sparse * 1000) / 1000;
}

function imageFor(slug, fallbackSrc) {
    const entry = variantManifest[slug];
    const src = String(fallbackSrc || '').split(/[?#]/)[0] || '/images/logo.png';
    if (!entry) return { src, width: 800, height: 800, variants: [], ar: 1, k: 1 };
    const largest = entry.variants[entry.variants.length - 1];
    const ar = Math.round((entry.width / entry.height) * 1000) / 1000;
    return {
        src: largest ? largest.src : src,
        master: src,
        width: entry.width,
        height: entry.height,
        variants: entry.variants,
        thumb: entry.variants[0]?.src || src,
        ar,
        k: sizeFactor(ar, entry.fill)
    };
}

export const animals = metrics.rankAnimals(records).map((animal) => {
    const profile = profiles[animal.slug] || { status: 'legacy' };
    return {
        ...animal,
        special: animal.special ?? animal.special_attack,
        profile,
        researched: profile.status === 'researched',
        biome: String(biomeFile.animals[animal.slug] || 'arena').toLowerCase(),
        img: imageFor(animal.slug, animal.image)
    };
});

const bySlug = new Map(animals.map((animal) => [animal.slug, animal]));
export const getAnimal = (slug) => bySlug.get(slug);

export function groupOf(animal) {
    const sea = GROUPS.find((group) => group.key === 'sea');
    if (sea.types.includes(animal.type) || sea.extra(animal)) return 'sea';
    return (GROUPS.find((group) => group.types.includes(animal.type)) || GROUPS[0]).key;
}

for (const animal of animals) animal.group = groupOf(animal);

// ---------------------------------------------------------------- rankings

function rankWithin(list, animal) {
    return { rank: list.findIndex((candidate) => candidate.slug === animal.slug) + 1, total: list.length };
}

export function groupRank(animal) {
    return rankWithin(animals.filter((candidate) => candidate.group === animal.group), animal);
}

export function statRank(animal, key) {
    const sorted = [...animals].sort((a, b) => (b[key] || 0) - (a[key] || 0) || a.rank - b.rank);
    return rankWithin(sorted, animal);
}

export function leaders(key, count = 10, filter = () => true) {
    return [...animals].filter(filter).sort((a, b) => (Number(b[key]) || 0) - (Number(a[key]) || 0) || a.rank - b.rank).slice(0, count);
}

export function byTier() {
    return TIERS.map((tier) => ({ ...tier, animals: animals.filter((animal) => animal.tier === tier.id) }));
}

// Closest animals by power index: the natural "who would win" rivals.
export function rivals(animal, count = 6) {
    return animals
        .filter((candidate) => candidate.slug !== animal.slug)
        .map((candidate) => ({ candidate, distance: Math.abs(candidate.powerIndex - animal.powerIndex) + (candidate.group === animal.group ? 0 : 1.5) }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, count)
        .map(({ candidate }) => candidate);
}

export function related(animal, count = 8) {
    const habitat = String(animal.habitat || '').toLowerCase().split(/[,/]| and /)[0].trim();
    return animals
        .filter((candidate) => candidate.slug !== animal.slug)
        .map((candidate) => {
            let score = 0;
            if (candidate.group === animal.group) score += 2;
            if (candidate.class === animal.class) score += 1;
            if (habitat && String(candidate.habitat || '').toLowerCase().includes(habitat)) score += 2;
            return { candidate, score };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score || a.candidate.rank - b.candidate.rank)
        .slice(0, count)
        .map(({ candidate }) => candidate);
}

// ---------------------------------------------------------------- matchups

export function matchup(left, right) {
    const result = battleModel.compare(left, right);
    const winner = result.probability >= 0.5 ? left : right;
    const loser = winner === left ? right : left;
    const odds = Math.round((winner === left ? result.probability : 1 - result.probability) * 100);
    const top = result.factors.slice(0, 3).map((factor) => ({
        label: factor.label,
        favors: factor.contribution >= 0 ? left : right,
        gap: Math.abs(factor.left - factor.right)
    }));
    let strength = 'Toss-up';
    if (odds >= 85) strength = 'Decisive';
    else if (odds >= 70) strength = 'Clear edge';
    else if (odds >= 58) strength = 'Slight edge';
    return { winner, loser, odds, strength, factors: top, margin: result.margin, raw: result };
}

export function matchupSlug(left, right) {
    return `${left.slug}-vs-${right.slug}`;
}

// ---------------------------------------------------------------- formatting

const nf = (value, digits = 0) => Number(value).toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: 0 });

export function fmtWeight(kg) {
    const value = Number(kg);
    if (!(value > 0)) return null;
    if (value < 1) return { metric: `${nf(value * 1000, value < 0.01 ? 1 : 0)} g`, imperial: `${nf(value * 35.274, 1)} oz` };
    if (value >= 1000) return { metric: `${nf(value / 1000, 1)} t`, imperial: `${nf(value * 2.20462 / 2000, 1)} US tons` };
    return { metric: `${nf(value, value < 100 ? 1 : 0)} kg`, imperial: `${nf(value * 2.20462, 0)} lb` };
}

export function fmtLength(cm) {
    const value = Number(cm);
    if (!(value > 0)) return null;
    if (value >= 100) return { metric: `${nf(value / 100, 2)} m`, imperial: `${nf(value / 30.48, 1)} ft` };
    return { metric: `${nf(value, 1)} cm`, imperial: `${nf(value / 2.54, 1)} in` };
}

export function fmtSpeed(mps) {
    const value = Number(mps);
    if (!(value > 0)) return null;
    return { metric: `${nf(value * 3.6, 0)} km/h`, imperial: `${nf(value * 2.23694, 0)} mph` };
}

export function fmtYears(years) {
    const value = Number(years);
    if (!(value > 0)) return null;
    return { metric: `${nf(value, 1)} years`, imperial: null };
}

export function fmtBite(psi) {
    const value = Number(psi);
    if (!(value > 0)) return null;
    return { metric: `${nf(value, 0)} PSI`, imperial: null };
}

export function fmtScore(value) {
    const number = Number(value) || 0;
    return Number.isInteger(number) ? String(number) : number.toFixed(1);
}

export function ordinal(value) {
    const n = Number(value);
    const suffix = n % 100 >= 11 && n % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] || 'th');
    return `${n}${suffix}`;
}

export function article(word) {
    return /^[aeiou]/i.test(String(word)) ? 'an' : 'a';
}

export function tierInfo(id) {
    return TIERS.find((tier) => tier.id === id) || TIERS[TIERS.length - 1];
}

export const researchedCount = animals.filter((animal) => animal.researched).length;
export const sourceCount = animals.reduce((sum, animal) => sum + (animal.profile.sources?.length || 0), 0);
export const lastResearchDate = animals.map((animal) => animal.profile.researchedAt).filter(Boolean).sort().at(-1) || null;
