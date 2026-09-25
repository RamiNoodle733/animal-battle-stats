#!/usr/bin/env node
'use strict';

// Production build. Output: dist/ (Vercel's outputDirectory).
//
//  1. guard against sensitive exports
//  2. refresh canonical data from the research reports
//  3. encode responsive image variants
//  4. build every static page with Astro (.cache/astro-dist), then draw the
//     social cards (.cache/og) from the job list it emits
//  5. assemble an allowlisted dist/, write sitemap.xml + version.json
//
// Generated HTML is never committed; tests that inspect pages read dist/.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const outputRoot = path.join(repoRoot, 'dist');
const astroOut = path.join(repoRoot, '.cache', 'astro-dist');
const variantsOut = path.join(repoRoot, '.cache', 'image-variants');
const ogOut = path.join(repoRoot, '.cache', 'og');

const ROOT_FILES = Object.freeze(['manifest.json', 'robots.txt', 'animal_stats.json']);
const PUBLIC_DATA = Object.freeze(['game-balance.json', 'animal-profiles.json', 'roblox-game.json']);
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.svg', '.webp', '.avif', '.gif', '.json']);

function run(script, args = []) {
    execFileSync(process.execPath, [path.join(repoRoot, script), ...args], { cwd: repoRoot, stdio: 'inherit', env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' } });
}

function assertSafeOutputPath(targetPath) {
    const relative = path.relative(outputRoot, path.resolve(targetPath));
    if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
        throw new Error(`Unsafe deployment output path: ${targetPath}`);
    }
    if (/site-activity|activity-exports?|sensitive-exports?/i.test(relative)) {
        throw new Error(`Sensitive export path rejected from deployment: ${relative}`);
    }
}

function copyFile(source, relativeDestination) {
    const destination = path.join(outputRoot, relativeDestination);
    assertSafeOutputPath(destination);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
}

function walk(directory, visit) {
    if (!fs.existsSync(directory)) return;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const absolute = path.join(directory, entry.name);
        if (entry.isSymbolicLink()) continue;
        if (entry.isDirectory()) walk(absolute, visit);
        else if (entry.isFile()) visit(absolute);
    }
}

function copyTree(sourceRoot, destinationPrefix, allowed = null) {
    walk(sourceRoot, (file) => {
        if (allowed && !allowed.has(path.extname(file).toLowerCase())) return;
        copyFile(file, path.join(destinationPrefix, path.relative(sourceRoot, file)));
    });
}

if (path.dirname(outputRoot) !== repoRoot || path.basename(outputRoot) !== 'dist') {
    throw new Error(`Refusing to clear unexpected output directory: ${outputRoot}`);
}

// 1-4: inputs and static pages
run('scripts/security/check-sensitive-exports.js', ['--workspace']);
run('scripts/research/import-research.js');
run('scripts/images/build-variants.js');
fs.rmSync(astroOut, { recursive: true, force: true });
execFileSync(process.execPath, [path.join(repoRoot, 'node_modules', 'astro', 'bin', 'astro.mjs'), 'build'], {
    cwd: repoRoot,
    stdio: 'inherit',
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' }
});
// Social cards are drawn from the job list the Astro build just wrote; the
// list itself is build-only and never deployed.
run('scripts/images/build-og.js');
fs.rmSync(path.join(astroOut, 'data', 'og-jobs.json'), { force: true });

// 5: assemble dist/
fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });
copyTree(astroOut, '.');
copyTree(path.join(repoRoot, 'images'), 'images', IMAGE_EXTENSIONS);
copyTree(variantsOut, path.join('images', 'animals', 'v'), new Set(['.webp']));
copyTree(ogOut, path.join('images', 'og'), new Set(['.jpg', '.png']));
for (const file of ROOT_FILES) {
    const source = path.join(repoRoot, file);
    if (fs.existsSync(source)) copyFile(source, file);
}
for (const file of PUBLIC_DATA) {
    const source = path.join(repoRoot, 'data', file);
    if (fs.existsSync(source)) copyFile(source, path.join('data', file));
}

const packageJson = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
let commit = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || null;
if (!commit) {
    try {
        commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: repoRoot, encoding: 'utf8' }).trim();
    } catch {
        commit = null;
    }
}
fs.writeFileSync(path.join(outputRoot, 'version.json'), `${JSON.stringify({ version: packageJson.version, commit, builtAt: new Date().toISOString() }, null, 2)}\n`);

run('scripts/generate-sitemap.mjs');
run('scripts/version/check-site-version.js');

const deployedFiles = [];
walk(outputRoot, (file) => deployedFiles.push(path.relative(outputRoot, file).replace(/\\/g, '/')));
const forbidden = deployedFiles.filter((file) => /site-activity|activity-exports?|sensitive-exports?/i.test(file) || file.toLowerCase().endsWith('.csv'));
if (forbidden.length) throw new Error(`Forbidden files reached deployment output: ${forbidden.join(', ')}`);

console.log(`Production build: ${deployedFiles.length} files in dist/.`);
