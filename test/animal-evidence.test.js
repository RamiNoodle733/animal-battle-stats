'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { validateEvidenceRecord, assessEvidence, latestEvidenceByField } = require('../lib/animal-evidence');

function record(overrides = {}) {
    return {
        animal: 'African Elephant',
        field: 'weight_kg',
        state: 'known',
        value: 6000,
        unit: 'kg',
        minimum: 4000,
        maximum: 7000,
        typical: 6000,
        sex: 'male',
        ageClass: 'adult',
        basis: 'measured',
        confidence: 'high',
        source: {
            url: 'https://example.org/elephant-measurements',
            title: 'Elephant measurements',
            publisher: 'Example Museum',
            publishedAt: '2025-01-15',
            accessedAt: '2026-09-14',
            quality: 'museum'
        },
        reviewedAt: '2026-09-14',
        dataRelease: 'test',
        ...overrides
    };
}

test('evidence records require traceable sources and coherent values', () => {
    assert.deepEqual(validateEvidenceRecord(record()), []);
    assert.match(validateEvidenceRecord(record({ source: null })).join(' '), /source metadata is required/);
    assert.match(validateEvidenceRecord(record({ minimum: 7000, maximum: 4000 })).join(' '), /minimum cannot exceed maximum/);
});

test('unknown, not-applicable and actual-zero remain distinct states', () => {
    assert.deepEqual(validateEvidenceRecord(record({ state: 'unknown', value: null })), []);
    assert.deepEqual(validateEvidenceRecord(record({ state: 'not_applicable', value: null })), []);
    assert.deepEqual(validateEvidenceRecord(record({ state: 'actual_zero', value: 0 })), []);
    assert.match(validateEvidenceRecord(record({ state: 'actual_zero', value: null })).join(' '), /requires value 0/);
    assert.match(validateEvidenceRecord(record({ state: 'unknown', value: 0 })).join(' '), /must not carry/);
});

test('no reviewed evidence reports unavailable confidence rather than inventing certainty', () => {
    assert.deepEqual(assessEvidence([]), {
        confidence: 'unavailable',
        coverage: 0,
        reviewedFields: 0,
        totalFields: 6
    });
});

test('coverage, source quality and estimated basis affect evidence confidence', () => {
    const fields = ['weight_kg', 'height_cm', 'length_cm', 'speed_mps'];
    const measured = fields.map((field) => record({
        field,
        unit: { weight_kg: 'kg', height_cm: 'cm', length_cm: 'cm', speed_mps: 'm/s' }[field]
    }));
    assert.equal(assessEvidence(measured, fields).confidence, 'high');
    const estimated = measured.map((item) => ({
        ...item,
        basis: 'estimated'
    }));
    assert.equal(assessEvidence(estimated, fields).confidence, 'moderate');
    assert.equal(assessEvidence(measured.slice(0, 1), fields).confidence, 'low');
});

test('latest evidence resolver publishes only valid current records per field', () => {
    const older = record({ reviewedAt: '2026-01-01', value: 5000 });
    const current = record({ reviewedAt: '2026-09-14', value: 6000 });
    const malformed = record({ field: 'speed_mps', unit: 'mph' });
    assert.deepEqual(latestEvidenceByField([current, malformed, older]), [current]);
});

test('declared record confidence constrains aggregate confidence', () => {
    const fields = ['weight_kg', 'height_cm', 'length_cm', 'speed_mps'];
    const lowConfidence = fields.map((field) => record({
        field,
        unit: { weight_kg: 'kg', height_cm: 'cm', length_cm: 'cm', speed_mps: 'm/s' }[field],
        confidence: 'low'
    }));
    assert.equal(assessEvidence(lowConfidence, fields).confidence, 'moderate');
});
