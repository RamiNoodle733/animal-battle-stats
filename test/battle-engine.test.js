'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const model = require('../js/battle-engine');
const roster = require('../animal_stats.json');
const profile = (value) => Object.fromEntries(model.FACTORS.map(({ key }) => [key, value]));

test('model is deterministic, symmetric and does not mutate source data', () => {
    const left = Object.freeze(profile(80));
    const right = Object.freeze(profile(60));
    const result = model.compare(left, right);
    assert.deepEqual(result, model.compare(left, right));
    assert.ok(Math.abs(result.probability + model.compare(right, left).probability - 1) < 1e-12);
    assert.equal(model.compare(left, left).probability, 0.5);
    assert.equal(result.simulations, 0);
    assert.equal(result.modelVersion, model.VERSION);
});

test('unknown facts do not penalize an animal; missing ratings remove the factor for both sides', () => {
    assert.deepEqual(model.compare({ ...profile(50), bite_force_psi: 0 }, profile(50)), model.compare({ ...profile(50), bite_force_psi: 2000 }, profile(50)));
    const result = model.compare({ ...profile(50), attack: null }, { ...profile(50), attack: 90 });
    assert.equal(result.probability, 0.5);
    assert.deepEqual(result.missing, ['Attack']);
    assert.ok(Math.abs(result.coverage - 0.72) < 1e-12);
    assert.equal(model.compare({}, {}).probability, null);
    for (const value of [0, null, undefined, '', '100', NaN, Infinity, -1]) assert.equal(model.measurement(value), null);
    assert.equal(model.measurement(0.02), 0.02);
});

test('zero ratings are real values and database special_attack is supported', () => {
    assert.equal(model.compare({ special_attack: 0 }, { special: 100 }).coverage, 0.1);
    assert.equal(model.compare({ special_attack: 0 }, { special: 100 }).probability, 0.05);
    assert.equal(model.compare({ attack: '80' }, { attack: 80 }).probability, null);
    assert.equal(model.compare(profile(100), profile(0)).probability, 0.95);
    assert.equal(model.compare(profile(0), profile(100)).probability, 0.05);
});

test('all roster pairs produce finite bounded outputs and honest low confidence', () => {
    for (const left of roster) for (const right of roster) {
        const result = model.compare(left, right);
        assert.ok(result.probability >= 0.05 && result.probability <= 0.95, `${left.name} / ${right.name}`);
        assert.equal(result.confidence, 'Low');
        assert.ok(Math.abs(result.margin - result.factors.reduce((sum, factor) => sum + factor.contribution, 0)) < 1e-9);
    }
});

test('increasing a single modeled advantage never lowers its probability', () => {
    for (const { key } of model.FACTORS) {
        const baseline = model.compare(profile(50), profile(50)).probability;
        assert.ok(model.compare({ ...profile(50), [key]: 70 }, profile(50)).probability > baseline);
    }
    assert.throws(() => model.compare(null, {}), /profiles/);
});
