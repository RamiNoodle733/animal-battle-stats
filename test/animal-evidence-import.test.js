'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const {
    parseArguments,
    validateManifest,
    summarize,
    normalizeStoredRecord
} = require('../scripts/migrations/import-animal-evidence');

const root = path.resolve(__dirname, '..');
const release = 'fixture-reviewed-release';

function evidence(overrides = {}) {
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
            url: 'https://example.org/reviewed-elephant-record',
            title: 'Reviewed elephant record',
            publisher: 'Example Museum',
            publishedAt: '2025-01-15',
            accessedAt: '2026-09-14',
            quality: 'museum'
        },
        notes: 'Fixture only; not publishable evidence.',
        reviewedAt: '2026-09-14',
        dataRelease: release,
        ...overrides
    };
}

test('evidence import requires an explicit release and external backup for apply', () => {
    assert.throws(() => parseArguments([]), /--release is required/);
    assert.throws(() => parseArguments(['--release', release, '--apply']), /--backup-dir/);
    assert.throws(
        () => parseArguments(['--release', release, '--apply', '--backup-dir', path.join(root, '.cache')]),
        /outside the repository/
    );
    const external = path.join(os.tmpdir(), 'abs-evidence-backup');
    assert.equal(parseArguments(['--release', release, '--apply', '--backup-dir', external]).backupDir, external);
});

test('whole-release validation rejects mismatches, unknown animals and duplicate identities', () => {
    assert.deepEqual(validateManifest({ schemaVersion: 1, dataRelease: release, records: [evidence()] }, release), []);
    const errors = validateManifest({
        schemaVersion: 1,
        dataRelease: 'wrong-release',
        records: [evidence(), evidence(), evidence({ animal: 'Invented Animal' })]
    }, release).join(' ');
    assert.match(errors, /manifest dataRelease/);
    assert.match(errors, /duplicates an evidence identity/);
    assert.match(errors, /unknown animal/);
});

test('dry-run summary exposes review distribution without a database connection', () => {
    const records = [
        evidence(),
        evidence({
            animal: 'African Lion',
            field: 'speed_mps',
            unit: 'm/s',
            state: 'unknown',
            value: null,
            minimum: null,
            maximum: null,
            typical: null,
            basis: 'estimated',
            confidence: 'low',
            source: { ...evidence().source, url: 'https://example.org/lion-speed-review', quality: 'peer-reviewed' }
        })
    ];
    assert.deepEqual(summarize(records), {
        records: 2,
        animals: 2,
        byField: { speed_mps: 1, weight_kg: 1 },
        byState: { known: 1, unknown: 1 },
        bySourceQuality: { museum: 1, 'peer-reviewed': 1 },
        byBasis: { estimated: 1, measured: 1 }
    });

    const fixtureDir = fs.mkdtempSync(path.join(os.tmpdir(), 'abs-evidence-'));
    const fixturePath = path.join(fixtureDir, 'release.json');
    fs.writeFileSync(fixturePath, JSON.stringify({ schemaVersion: 1, dataRelease: release, records }));
    const result = spawnSync(process.execPath, [
        path.join(root, 'scripts', 'migrations', 'import-animal-evidence.js'),
        '--release', release,
        '--file', fixturePath
    ], { cwd: root, encoding: 'utf8', env: { ...process.env, MONGODB_URI: '' } });
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(result.stdout);
    assert.equal(report.mode, 'dry-run');
    assert.equal(report.success, true);
    assert.equal(report.summary.records, 2);
    assert.match(report.next, /--apply/);

    const invalidPath = path.join(fixtureDir, 'invalid.json');
    fs.writeFileSync(invalidPath, JSON.stringify({ schemaVersion: 1, dataRelease: 'wrong', records }));
    const invalid = spawnSync(process.execPath, [
        path.join(root, 'scripts', 'migrations', 'import-animal-evidence.js'),
        '--release', release,
        '--file', invalidPath
    ], { cwd: root, encoding: 'utf8', env: { ...process.env, MONGODB_URI: '' } });
    assert.notEqual(invalid.status, 0);
    assert.match(invalid.stdout, /manifest dataRelease/);
});

test('stored Mongo dates normalize back into the evidence contract', () => {
    const normalized = normalizeStoredRecord({
        ...evidence(),
        reviewedAt: new Date('2026-09-14T00:00:00.000Z'),
        source: {
            ...evidence().source,
            publishedAt: new Date('2025-01-15T00:00:00.000Z'),
            accessedAt: new Date('2026-09-14T00:00:00.000Z')
        }
    });
    assert.equal(normalized.reviewedAt, '2026-09-14');
    assert.equal(normalized.source.accessedAt, '2026-09-14');
});
