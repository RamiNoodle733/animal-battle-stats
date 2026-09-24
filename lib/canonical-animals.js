'use strict';

// The animal catalogue is versioned in the repository (animal_stats.json, built
// from the research reports by scripts/research/import-research.js). API routes
// read it from here instead of the legacy MongoDB `animals` collection, which
// only remains the owner of ids referenced by votes and comments (the ids are
// identical). User-generated data (votes, comments, battles) stays in MongoDB.

const catalogue = require('../animal_stats.json');
const { applyCanonicalAnimalImage } = require('./animal-images');
const metrics = require('./animal-metrics');

function normalizeKey(value) {
    return typeof value === 'string' ? value.trim().toLocaleLowerCase('en-US') : '';
}

const animals = Object.freeze(metrics.rankAnimals(catalogue.map((raw) => {
    const animal = applyCanonicalAnimalImage({
        ...raw,
        // Older clients and aggregations read `special_attack`.
        special_attack: raw.special
    });
    return animal;
})).map((animal) => Object.freeze(animal)));

const byId = new Map(animals.map((animal) => [String(animal._id), animal]));
const byName = new Map(animals.map((animal) => [normalizeKey(animal.name), animal]));
const bySlug = new Map(animals.map((animal) => [animal.slug, animal]));

function listAnimals() {
    return animals;
}

function findAnimal(idOrName) {
    const key = String(idOrName || '').trim();
    if (!key) return null;
    return byId.get(key) || byName.get(normalizeKey(key)) || bySlug.get(normalizeKey(key)) || null;
}

function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function matchesText(animal, query, fields) {
    if (!query) return true;
    const pattern = new RegExp(escapeRegExp(query), 'i');
    return fields.some((field) => pattern.test(String(animal[field] || '')));
}

const SORT_ALIASES = Object.freeze({ special_attack: 'special', total: 'totalStats', power: 'powerIndex', rank: 'rank' });

function sortAnimals(list, sort = 'name', order = 'asc') {
    const field = SORT_ALIASES[sort] || sort;
    const direction = order === 'desc' ? -1 : 1;
    return [...list].sort((left, right) => {
        const a = left[field];
        const b = right[field];
        if (typeof a === 'number' || typeof b === 'number') {
            const diff = (Number(a) || 0) - (Number(b) || 0);
            if (diff !== 0) return diff * direction;
        } else {
            const diff = String(a ?? '').localeCompare(String(b ?? ''));
            if (diff !== 0) return diff * direction;
        }
        return left.name.localeCompare(right.name);
    });
}

// Filters shared by /api/animals and /api/search.
function filterAnimals(options = {}) {
    const {
        search, type, class: animalClass, size, biome,
        nocturnal, social, ranges = {}
    } = options;
    return animals.filter((animal) => {
        if (search && !matchesText(animal, search, ['name', 'scientific_name', 'description', 'habitat'])) return false;
        if (type && type !== 'all' && animal.type !== type) return false;
        if (animalClass && animalClass !== 'all' && animal.class !== animalClass) return false;
        if (size && size !== 'all' && animal.size !== size) return false;
        if (biome && biome !== 'all' && !matchesText(animal, biome, ['habitat'])) return false;
        if (nocturnal !== undefined && Boolean(animal.isNocturnal) !== (nocturnal === true || nocturnal === 'true')) return false;
        if (social !== undefined && Boolean(animal.isSocial) !== (social === true || social === 'true')) return false;
        for (const [field, range] of Object.entries(ranges)) {
            const value = Number(animal[field]);
            if (range.min !== undefined && !(value >= range.min)) return false;
            if (range.max !== undefined && !(value <= range.max)) return false;
        }
        return true;
    });
}

function sampleAnimals(count, { type, exclude = [] } = {}) {
    const excluded = new Set(exclude.map(normalizeKey));
    const pool = animals.filter((animal) => (!type || type === 'all' || animal.type === type)
        && !excluded.has(normalizeKey(animal.name)));
    const copy = [...pool];
    for (let index = copy.length - 1; index > 0; index -= 1) {
        const swap = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[swap]] = [copy[swap], copy[index]];
    }
    return copy.slice(0, Math.max(0, count));
}

function countBy(field) {
    const counts = {};
    for (const animal of animals) {
        const key = animal[field] || 'Unknown';
        counts[key] = (counts[key] || 0) + 1;
    }
    return Object.fromEntries(Object.entries(counts).sort((a, b) => b[1] - a[1]));
}

module.exports = {
    countBy,
    filterAnimals,
    findAnimal,
    listAnimals,
    sampleAnimals,
    sortAnimals
};
