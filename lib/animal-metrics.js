/* Shared animal metrics: power index, rank and tier. Used by the API, the static
   page build and the browser, so it has no dependencies and no side effects. */
(function exposeAnimalMetrics(root) {
    'use strict';

    // Same weights as the matchup model: fighting stats dominate, while
    // intelligence and special mechanisms still move an animal up or down.
    const POWER_WEIGHTS = Object.freeze({
        attack: 0.28,
        defense: 0.25,
        agility: 0.16,
        stamina: 0.14,
        intelligence: 0.07,
        special: 0.10
    });

    const STAT_KEYS = Object.freeze(Object.keys(POWER_WEIGHTS));

    // Tier floors on the 0-100 power index.
    const TIERS = Object.freeze([
        Object.freeze({ id: 'S', label: 'S', name: 'Apex', min: 72 }),
        Object.freeze({ id: 'A', label: 'A', name: 'Elite', min: 62 }),
        Object.freeze({ id: 'B', label: 'B', name: 'Strong', min: 52 }),
        Object.freeze({ id: 'C', label: 'C', name: 'Capable', min: 42 }),
        Object.freeze({ id: 'D', label: 'D', name: 'Underdog', min: 32 }),
        Object.freeze({ id: 'F', label: 'F', name: 'Snack', min: 0 })
    ]);

    function stat(animal, key) {
        const value = key === 'special' ? (animal.special ?? animal.special_attack) : animal[key];
        const number = Number(value);
        return Number.isFinite(number) ? Math.max(0, Math.min(100, number)) : 0;
    }

    function round1(value) {
        return Math.round(value * 10) / 10;
    }

    function powerIndex(animal) {
        return round1(STAT_KEYS.reduce((sum, key) => sum + POWER_WEIGHTS[key] * stat(animal, key), 0));
    }

    function totalStats(animal) {
        return round1(STAT_KEYS.reduce((sum, key) => sum + stat(animal, key), 0));
    }

    function tierFor(value) {
        const score = typeof value === 'number' ? value : powerIndex(value);
        return TIERS.find((tier) => score >= tier.min) || TIERS[TIERS.length - 1];
    }

    function slugify(value) {
        return String(value || '')
            .toLowerCase()
            .normalize('NFKD')
            .replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    }

    // Returns new objects with slug, totalStats, powerIndex, tier and rank.
    function rankAnimals(list) {
        return list
            .map((animal) => {
                const index = powerIndex(animal);
                return {
                    ...animal,
                    slug: animal.slug || slugify(animal.name),
                    totalStats: totalStats(animal),
                    powerIndex: index,
                    tier: tierFor(index).id
                };
            })
            .sort((left, right) => right.powerIndex - left.powerIndex
                || right.totalStats - left.totalStats
                || String(left.name).localeCompare(String(right.name)))
            .map((animal, index) => ({ ...animal, rank: index + 1 }));
    }

    const api = Object.freeze({ POWER_WEIGHTS, STAT_KEYS, TIERS, powerIndex, totalStats, tierFor, slugify, rankAnimals });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else root.ABSAnimalMetrics = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
