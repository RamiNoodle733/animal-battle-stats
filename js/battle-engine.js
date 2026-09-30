/* Shared by Astro, Node tests and the browser. No database, randomness or side effects. */
(function exposeBattleEngine(root) {
    'use strict';

    const VERSION = '0.2.0';
    // Body size: 8 x log10 of the weight ratio is added to the stat margin, so an
    // animal ten times heavier gets about an 8-point lead. The ratings are
    // absolute already, so this only settles the big mismatches (a house cat
    // against a German shepherd); close classics barely move.
    const SIZE_WEIGHT = 8;
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
        const leftWeight = measurement(left.weight_kg);
        const rightWeight = measurement(right.weight_kg);
        const size = coverage > 0 && leftWeight && rightWeight ? SIZE_WEIGHT * Math.log10(leftWeight / rightWeight) : 0;
        const margin = contributions.reduce((sum, factor) => sum + factor.contribution, 0) + size;
        // An explicit editorial probability mapping, NOT an empirically calibrated frequency.
        const probability = coverage > 0 ? Math.max(0.05, Math.min(0.95, 1 / (1 + Math.exp(-margin / 15)))) : null;
        return {
            modelVersion: VERSION,
            probability,
            winner: probability === null || Math.abs(probability - 0.5) < 1e-12 ? null : probability > 0.5 ? 'left' : 'right',
            margin,
            size,
            factors: contributions.sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution)),
            missing: factors.filter((factor) => factor.left === null || factor.right === null).map((factor) => factor.label),
            coverage,
            confidence: 'Low',
            confidenceReason: 'Editorial input ratings and an uncalibrated formula; complete ratings do not establish scientific accuracy.',
            simulations: 0,
            scenario: 'Abstract 1v1 comparison of ratings plus a body-size term; terrain, ambush and behavior are not modeled.'
        };
    }

    // Group fights ("500 gorillas vs 23 army ants"): numbers shift the 1v1 margin
    // by 20 x ln(count), so twice as many
    // equal fighters is worth about a 14-point stat lead. A much smaller animal
    // gets less from its numbers (they cannot all reach, or hurt, something
    // thousands of times heavier): its exponent shrinks with the weight gap.
    // Weights are optional; without both, numbers count in full for both sides.
    function compareGroups(left, right, leftCount = 1, rightCount = 1, leftWeight = null, rightWeight = null) {
        const base = compare(left, right);
        const na = Math.max(1, Math.floor(Number(leftCount) || 1));
        const nb = Math.max(1, Math.floor(Number(rightCount) || 1));
        if ((na === 1 && nb === 1) || base.probability === null) return { ...base, leftCount: na, rightCount: nb };
        const wa = measurement(leftWeight);
        const wb = measurement(rightWeight);
        const ratio = wa && wb ? Math.max(wa, wb) / Math.min(wa, wb) : 1;
        const damp = 1 / (1 + Math.log10(ratio));
        const ga = wa && wb && wa < wb ? damp : 1;
        const gb = wa && wb && wb < wa ? damp : 1;
        const margin = base.margin + 20 * (ga * Math.log(na) - gb * Math.log(nb));
        const probability = Math.max(0.01, Math.min(0.99, 1 / (1 + Math.exp(-margin / 15))));
        return {
            ...base,
            probability,
            winner: Math.abs(probability - 0.5) < 1e-12 ? null : probability > 0.5 ? 'left' : 'right',
            margin,
            leftCount: na,
            rightCount: nb,
            scenario: 'Group fight: the 1v1 rating margin shifted by the numbers on each side (smaller animals get less from numbers against much heavier ones).'
        };
    }

    const api = Object.freeze({ VERSION, FACTORS, compare, compareGroups, measurement });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else root.ABSBattleEngine = api;
})(globalThis);
