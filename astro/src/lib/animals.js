import animalRecords from '../../../animal_stats.json';
import imageDimensions from '../../../data/animal-image-dimensions.json';
import optimizedManifest from '../../../images/animals/optimized/manifest.json';

const PRIMARY_STATS = Object.freeze([
    ['attack', 'Attack', 'ATK'],
    ['defense', 'Defense', 'DEF'],
    ['agility', 'Agility', 'AGI'],
    ['stamina', 'Stamina', 'STA'],
    ['intelligence', 'Intelligence', 'INT'],
    ['special', 'Special', 'SPL']
]);
const DETAILED_STATS = Object.freeze([
    ['raw_power', 'Raw Power'],
    ['weaponry', 'Weaponry'],
    ['ferocity', 'Ferocity'],
    ['protection', 'Protection'],
    ['toughness', 'Toughness'],
    ['maneuverability', 'Maneuverability'],
    ['speed', 'Speed'],
    ['endurance', 'Endurance'],
    ['recovery', 'Recovery'],
    ['tactics', 'Tactics'],
    ['senses', 'Senses'],
    ['abilities', 'Abilities']
]);

export function slugify(value) {
    return String(value || '')
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

export function clampScore(value) {
    const score = Number(value) || 0;
    return Math.max(0, Math.min(100, score));
}

export function formatScore(value) {
    const score = clampScore(value);
    return Number.isInteger(score) ? String(score) : score.toFixed(1);
}

export function formatList(value, fallback = 'Unknown') {
    return Array.isArray(value) && value.length > 0 ? value.join(', ') : (value || fallback);
}

export function formatMeasurement(value, suffix, decimals = 0) {
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) return 'Unknown';
    const maximumFractionDigits = number < 1 ? Math.max(decimals, 2) : decimals;
    return `${number.toLocaleString('en-US', { maximumFractionDigits })} ${suffix}`;
}

export function formatWeight(value) {
    const kg = Number(value);
    if (!Number.isFinite(kg) || kg <= 0) return 'Unknown';
    if (kg < 1) return `${Math.round(kg * 1000).toLocaleString('en-US')} g`;
    return `${kg.toLocaleString('en-US', { maximumFractionDigits: kg < 100 ? 1 : 0 })} kg`;
}

export function imageFor(animal) {
    const optimized = optimizedManifest.animals?.[animal.slug];
    const isCurrent = optimized?.fallback === animal.image;
    const fallback = isCurrent ? optimized.fallback : animal.image;
    const sourceAsset = String(animal.image || '').split(/[?#]/, 1)[0];
    const dimensions = imageDimensions.images?.[sourceAsset];
    if (!isCurrent && (!dimensions?.width || !dimensions?.height)) {
        throw new Error(`Missing image dimensions for ${animal.name}: ${sourceAsset}`);
    }
    return {
        fallback,
        width: isCurrent ? optimized.width : dimensions.width,
        height: isCurrent ? optimized.height : dimensions.height,
        avif: isCurrent ? optimized.variants?.avif || [] : [],
        webp: isCurrent ? optimized.variants?.webp || [] : []
    };
}

export function relatedAnimals(animal, limit = 4) {
    const habitat = String(animal.habitat || '').toLowerCase();
    return animals
        .filter((candidate) => candidate.slug !== animal.slug)
        .map((candidate) => {
            const candidateHabitat = String(candidate.habitat || '').toLowerCase();
            let affinity = candidate.type === animal.type ? 2 : 0;
            if (habitat && candidateHabitat && (
                candidateHabitat.includes(habitat) || habitat.includes(candidateHabitat)
            )) affinity += 2;
            if (candidate.class === animal.class) affinity += 1;
            return { candidate, affinity };
        })
        .filter(({ affinity }) => affinity > 0)
        .sort((left, right) => right.affinity - left.affinity || left.candidate.rank - right.candidate.rank)
        .slice(0, limit)
        .map(({ candidate }) => candidate);
}

export function rivalAnimals(animal, limit = 4) {
    return animals
        .filter((candidate) => candidate.slug !== animal.slug)
        .map((candidate) => ({
            candidate,
            distance: Math.abs(candidate.totalStats - animal.totalStats),
            affinity: Number(candidate.type === animal.type) + Number(candidate.class === animal.class)
        }))
        .sort((left, right) => left.distance - right.distance || right.affinity - left.affinity || left.candidate.rank - right.candidate.rank)
        .slice(0, limit)
        .map(({ candidate }) => candidate);
}

export const stats = PRIMARY_STATS;
export const detailedStats = DETAILED_STATS;

const rankedAnimals = animalRecords
    .map((animal) => ({
        ...animal,
        slug: slugify(animal.name),
        totalStats: PRIMARY_STATS.reduce((sum, [key]) => sum + clampScore(animal[key]), 0)
    }))
    .sort((left, right) => right.totalStats - left.totalStats || left.name.localeCompare(right.name));

function groupRank(animal, field) {
    const peers = rankedAnimals.filter((candidate) => candidate[field] === animal[field]);
    return { rank: peers.findIndex((candidate) => candidate.name === animal.name) + 1, total: peers.length };
}

export const animals = rankedAnimals.map((animal, index) => ({
    ...animal,
    rank: index + 1,
    typeRank: groupRank(animal, 'type'),
    classRank: groupRank(animal, 'class'),
    sizeRank: groupRank(animal, 'size')
}));
