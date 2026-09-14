'use strict';

const fs = require('node:fs');
const path = require('node:path');
const manifest = require('../../data/animal-evidence.json');
const { EVIDENCE_FIELDS, validateEvidenceRecord, assessEvidence } = require('../../lib/animal-evidence');

const root = path.resolve(__dirname, '..', '..');
const animals = JSON.parse(fs.readFileSync(path.join(root, 'animal_stats.json'), 'utf8'));
const names = new Set(animals.map((animal) => animal.name));
const errors = [];

if (manifest.schemaVersion !== 1) errors.push('Unsupported evidence schema version');
if (!Array.isArray(manifest.records)) errors.push('Evidence records must be an array');

for (const [index, record] of (manifest.records || []).entries()) {
    if (!names.has(record.animal)) errors.push(`records[${index}] names an unknown animal`);
    validateEvidenceRecord(record).forEach((error) => errors.push(`records[${index}]: ${error}`));
}

const legacy = Object.keys(EVIDENCE_FIELDS).reduce((summary, field) => {
    summary[field] = animals.reduce((counts, animal) => {
        const value = animal[field];
        if (typeof value !== 'number' || !Number.isFinite(value)) counts.missing += 1;
        else if (value === 0) counts.ambiguousZero += 1;
        else counts.populatedUnreviewed += 1;
        return counts;
    }, { populatedUnreviewed: 0, ambiguousZero: 0, missing: 0 });
    return summary;
}, {});

const byAnimal = Object.fromEntries(animals.map((animal) => [
    animal.name,
    assessEvidence((manifest.records || []).filter((record) => record.animal === animal.name))
]));

const report = {
    success: errors.length === 0,
    dryRun: true,
    schemaVersion: manifest.schemaVersion,
    dataRelease: manifest.dataRelease,
    animals: animals.length,
    evidenceRecords: (manifest.records || []).length,
    reviewedAnimals: Object.values(byAnimal).filter((entry) => entry.reviewedFields > 0).length,
    legacy,
    errors,
    note: 'Positive legacy values are populated but unreviewed; zero remains ambiguous until a cited record assigns an explicit state.'
};

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
if (!report.success) process.exitCode = 1;
