#!/usr/bin/env node
'use strict';

// Bumps (or re-syncs) the release version in package.json and package-lock.json.
// Built pages read it from package.json at build time, so nothing else changes.

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..', '..');
const packageJsonPath = path.join(repoRoot, 'package.json');
const packageLockPath = path.join(repoRoot, 'package-lock.json');

const args = process.argv.slice(2);
const syncOnly = args.includes('--sync-only');

let bumpType = 'patch';
const bumpArgIndex = args.indexOf('--bump');
if (bumpArgIndex !== -1 && args[bumpArgIndex + 1]) {
    bumpType = args[bumpArgIndex + 1].trim().toLowerCase();
}

const allowedBumps = new Set(['patch', 'minor', 'major']);
if (!allowedBumps.has(bumpType)) {
    console.error(`Unsupported bump type: ${bumpType}`);
    process.exit(1);
}

function bumpSemver(version, type) {
    const match = String(version || '').trim().match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!match) {
        throw new Error(`Invalid semver version: ${version}`);
    }

    const major = Number(match[1]);
    const minor = Number(match[2]);
    const patch = Number(match[3]);

    if (type === 'major') {
        return `${major + 1}.0.0`;
    }

    if (type === 'minor') {
        return `${major}.${minor + 1}.0`;
    }

    return `${major}.${minor}.${patch + 1}`;
}

function writeJson(filePath, jsonValue) {
    fs.writeFileSync(filePath, `${JSON.stringify(jsonValue, null, 2)}\n`, 'utf8');
}

function syncPackageLock(version) {
    if (!fs.existsSync(packageLockPath)) return;

    const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
    packageLock.version = version;
    if (packageLock.packages?.['']) {
        packageLock.packages[''].version = version;
    }
    writeJson(packageLockPath, packageLock);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const nextVersion = syncOnly
    ? String(packageJson.version || '').trim()
    : bumpSemver(packageJson.version, bumpType);

if (!nextVersion) {
    throw new Error('Unable to determine next version');
}

if (!syncOnly) {
    packageJson.version = nextVersion;
    writeJson(packageJsonPath, packageJson);
}

syncPackageLock(nextVersion);

process.stdout.write(nextVersion);
