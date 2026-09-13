/* Shared by Astro, Node tests and the browser. No database, randomness or side effects. */
(function exposeBattleEngine(root) {
    'use strict';

    const VERSION = '0.1.0-preview';
    const FACTORS = Object.freeze([
        Object.freeze({ key: 'attack', label: 'Attack', weight: 0.28 }),
        Object.freeze({ key: 'defense', label: 'Defense', weight: 0.25 }),
        Object.freeze({ key: 'agility', label: 'Agility', weight: 0.16 }),
        Object.freeze({ key: 'stamina', label: 'Stamina', weight: 0.14 }),
        Object.freeze({ key: 'intelligence', label: 'Intelligence', weight: 0.07 }),
        Object.freeze({ key: 'special', label: 'Special', weight: 0.10 })
    ]);

    function score(animal, key) {
        const value = key === 'special' ? (animal.special ?? animal.special_attack) : animal[key];
        return typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 100 ? value : null;
    }

    function measurement(value) {
        // Legacy zeros do not distinguish absent, unmeasured and inapplicable facts.
        // Do not rewrite the source or guess which of these applies.
        return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : null;
    }

    function compare(left, right) {
        if (!left || !right || typeof left !== 'object' || typeof right !== 'object') {
            throw new TypeError('Two animal profiles are required');
        }
        const factors = FACTORS.map((factor) => ({ ...factor, left: score(left, factor.key), right: score(right, factor.key) }));
        const usable = factors.filter((factor) => factor.left !== null && factor.right !== null);
        const coverage = usable.reduce((sum, factor) => sum + factor.weight, 0);
        const contributions = usable.map((factor) => ({
            ...factor,
            contribution: (factor.left - factor.right) * factor.weight / coverage
        }));
        const margin = contributions.reduce((sum, factor) => sum + factor.contribution, 0);
        // An explicit editorial probability mapping, NOT an empirically calibrated frequency.
        const probability = coverage > 0 ? Math.max(0.05, Math.min(0.95, 1 / (1 + Math.exp(-margin / 15)))) : null;
        return {
            modelVersion: VERSION,
            probability,
            winner: probability === null || Math.abs(probability - 0.5) < 1e-12 ? null : probability > 0.5 ? 'left' : 'right',
            margin,
            factors: contributions.sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution)),
            missing: factors.filter((factor) => factor.left === null || factor.right === null).map((factor) => factor.label),
            coverage,
            confidence: 'Low',
            confidenceReason: 'Editorial input ratings and an uncalibrated formula; complete ratings do not establish scientific accuracy.',
            simulations: 0,
            scenario: 'Abstract 1v1 rating comparison; terrain, body-size scaling, ambush, groups and behavior are not modeled.'
        };
    }

    const api = Object.freeze({ VERSION, FACTORS, compare, measurement });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else root.ABSBattleEngine = api;
})(globalThis);
