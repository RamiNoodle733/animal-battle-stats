#!/usr/bin/env node
'use strict';

// Release version agreement: package files and every built HTML page (dist/)
// must carry the same version.

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..', '..');
const dist = path.join(repoRoot, 'dist');
const packageJson = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
const packageLock = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package-lock.json'), 'utf8'));
const version = String(packageJson.version || '').trim();

if (!/^\d+\.\d+\.\d+$/.test(version)) {
    throw new Error(`Invalid package version: ${version}`);
}
if (packageLock.version !== version || packageLock.packages?.['']?.version !== version) {
    throw new Error('package.json and package-lock.json versions disagree');
}

if (!fs.existsSync(dist)) {
    console.log(`Version agreement passed (${version}; no dist/ to inspect yet).`);
    process.exit(0);
}

const pages = [];
(function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const absolute = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(absolute);
        else if (entry.name.endsWith('.html')) pages.push(absolute);
    }
})(dist);

const marker = `<meta name="abs-version" content="${version}"`;
const mismatches = pages.filter((file) => !fs.readFileSync(file, 'utf8').includes(marker));
if (mismatches.length) {
    const relative = mismatches.slice(0, 10).map((file) => path.relative(dist, file));
    throw new Error(`Version ${version} is missing from ${mismatches.length} built page(s): ${relative.join(', ')}`);
}

console.log(`Version agreement passed (${version}, ${pages.length} built pages).`);
