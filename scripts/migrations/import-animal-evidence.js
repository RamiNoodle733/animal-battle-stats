'use strict';

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const mongoose = require('mongoose');
const { validateEvidenceRecord } = require('../../lib/animal-evidence');

const root = path.resolve(__dirname, '..', '..');
const canonicalAnimals = new Set(require('../../animal_stats.json').map((animal) => animal.name));

function parseArguments(argv) {
    const options = { apply: false, file: path.join(root, 'data', 'animal-evidence.json') };
    for (let index = 0; index < argv.length; index += 1) {
        const argument = argv[index];
        if (argument === '--apply') options.apply = true;
        else if (argument === '--file') options.file = path.resolve(argv[++index] || '');
        else if (argument === '--release') options.release = argv[++index];
        else if (argument === '--backup-dir') options.backupDir = path.resolve(argv[++index] || '');
        else throw new Error(`Unknown argument: ${argument}`);
    }
    if (!options.release || !options.release.trim()) throw new Error('--release is required');
    if (!options.file) throw new Error('--file requires a path');
    if (options.apply && !options.backupDir) throw new Error('--apply requires --backup-dir outside the repository');
    if (options.apply && isWithin(root, options.backupDir)) {
        throw new Error('--backup-dir must be outside the repository');
    }
    return options;
}

function isWithin(parent, target) {
    const relative = path.relative(parent, target);
    return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative));
}

function recordKey(record) {
    return [record.animal, record.field, record.source.url, record.reviewedAt].join('\u0000');
}

function validateManifest(manifest, release) {
    const errors = [];
    if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) return ['manifest must be an object'];
    if (manifest.schemaVersion !== 1) errors.push('schemaVersion must be 1');
    if (manifest.dataRelease !== release) errors.push(`manifest dataRelease must equal ${release}`);
    if (!Array.isArray(manifest.records)) return [...errors, 'records must be an array'];

    const keys = new Set();
    manifest.records.forEach((record, index) => {
        if (!canonicalAnimals.has(record?.animal)) errors.push(`records[${index}] names an unknown animal`);
        if (record?.dataRelease !== release) errors.push(`records[${index}].dataRelease must equal ${release}`);
        validateEvidenceRecord(record).forEach((error) => errors.push(`records[${index}]: ${error}`));
        if (record && typeof record === 'object') {
            const key = recordKey(record);
            if (keys.has(key)) errors.push(`records[${index}] duplicates an evidence identity`);
            keys.add(key);
        }
    });
    return errors;
}

function summarize(records) {
    const countBy = (selector) => Object.fromEntries(
        [...records.reduce((counts, record) => {
            const key = selector(record);
            counts.set(key, (counts.get(key) || 0) + 1);
            return counts;
        }, new Map()).entries()].sort(([left], [right]) => left.localeCompare(right))
    );
    return {
        records: records.length,
        animals: new Set(records.map((record) => record.animal)).size,
        byField: countBy((record) => record.field),
        byState: countBy((record) => record.state),
        bySourceQuality: countBy((record) => record.source.quality),
        byBasis: countBy((record) => record.basis)
    };
}

function stableJson(value) {
    return `${JSON.stringify(value, null, 2)}\n`;
}

function checksum(contents) {
    return crypto.createHash('sha256').update(contents).digest('hex');
}

function normalizeStoredRecord(record) {
    const normalized = { ...record, source: { ...record.source } };
    for (const key of ['reviewedAt']) {
        if (normalized[key] instanceof Date) normalized[key] = normalized[key].toISOString().slice(0, 10);
    }
    for (const key of ['publishedAt', 'accessedAt']) {
        if (normalized.source[key] instanceof Date) normalized.source[key] = normalized.source[key].toISOString().slice(0, 10);
    }
    return normalized;
}

async function applyRelease(manifest, options) {
    require('dotenv').config({ path: path.join(root, '.env.local') });
    if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is required for --apply');
    const { connectToDatabase } = require('../../lib/mongodb');
    const AnimalEvidence = require('../../lib/models/AnimalEvidence');
    await connectToDatabase();

    const existing = await AnimalEvidence.find({ dataRelease: options.release }).lean();
    const expectedKeys = new Set(manifest.records.map(recordKey));
    const existingKeys = new Set(existing.map((record) => recordKey(normalizeStoredRecord(record))));
    const unexpectedExisting = [...existingKeys].filter((key) => !expectedKeys.has(key));
    if (unexpectedExisting.length) {
        throw new Error(`Release ${options.release} already contains ${unexpectedExisting.length} identities absent from the manifest; use a new release identifier`);
    }

    fs.mkdirSync(options.backupDir, { recursive: true });
    const backupBody = stableJson({ dataRelease: options.release, exportedAt: new Date().toISOString(), records: existing });
    const backupPath = path.join(options.backupDir, `animal-evidence-${options.release}.backup.json`);
    if (fs.existsSync(backupPath)) throw new Error(`Backup already exists: ${backupPath}`);
    fs.writeFileSync(backupPath, backupBody, { flag: 'wx' });

    const operations = manifest.records.map((record) => ({
        updateOne: {
            filter: {
                animal: record.animal,
                field: record.field,
                'source.url': record.source.url,
                reviewedAt: new Date(record.reviewedAt)
            },
            update: { $set: record },
            upsert: true
        }
    }));
    const result = operations.length ? await AnimalEvidence.bulkWrite(operations, { ordered: true }) : null;
    const applied = await AnimalEvidence.find({ dataRelease: options.release }).lean();
    const normalizedApplied = applied.map(normalizeStoredRecord);
    const appliedErrors = normalizedApplied.flatMap((record, index) => validateEvidenceRecord(record).map((error) => `stored[${index}]: ${error}`));
    const appliedKeys = new Set(normalizedApplied.map(recordKey));
    const missing = [...expectedKeys].filter((key) => !appliedKeys.has(key));
    const unexpected = [...appliedKeys].filter((key) => !expectedKeys.has(key));
    if (appliedErrors.length || missing.length || unexpected.length) {
        throw new Error(`Post-write verification failed (${appliedErrors.length} invalid, ${missing.length} missing, ${unexpected.length} unexpected)`);
    }
    return {
        applied: true,
        matched: result?.matchedCount || 0,
        modified: result?.modifiedCount || 0,
        upserted: result?.upsertedCount || 0,
        storedForRelease: applied.length,
        backup: { path: backupPath, records: existing.length, sha256: checksum(backupBody) },
        rollback: `Delete only { dataRelease: ${JSON.stringify(options.release)} }, then restore records from ${backupPath}`
    };
}

async function main(argv = process.argv.slice(2)) {
    const options = parseArguments(argv);
    const manifest = JSON.parse(fs.readFileSync(options.file, 'utf8'));
    const errors = validateManifest(manifest, options.release);
    const report = {
        success: errors.length === 0,
        mode: options.apply ? 'apply' : 'dry-run',
        file: options.file,
        dataRelease: options.release,
        summary: Array.isArray(manifest.records) ? summarize(manifest.records) : null,
        errors
    };
    if (errors.length) {
        process.stdout.write(stableJson(report));
        process.exitCode = 1;
        return report;
    }
    if (options.apply) Object.assign(report, await applyRelease(manifest, options));
    else report.next = 'Review this summary, create an external backup directory, then rerun with --apply --backup-dir <path>.';
    process.stdout.write(stableJson(report));
    return report;
}

if (require.main === module) {
    main().catch((error) => {
        process.stderr.write(`${error.message}\n`);
        process.exitCode = 1;
    }).finally(async () => {
        if (mongoose.connection.readyState !== 0) await mongoose.disconnect();
    });
}

module.exports = { parseArguments, validateManifest, summarize, recordKey, isWithin, checksum, normalizeStoredRecord };
