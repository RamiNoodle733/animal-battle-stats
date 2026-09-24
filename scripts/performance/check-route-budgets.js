#!/usr/bin/env node
'use strict';

// Page weight budgets for the built site (dist/): gzip size of each screen's
// HTML plus the JavaScript and CSS it loads. Skips when nothing is built.

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const dist = path.resolve(__dirname, '..', '..', 'dist');
if (!fs.existsSync(path.join(dist, 'index.html'))) {
    console.log('Route budgets skipped: dist/ is not built.');
    process.exit(0);
}

const BUDGET = Object.freeze({
    html: 70 * 1024,
    js: 70 * 1024,
    css: 45 * 1024,
    legacyJs: 90 * 1024,
    legacyCss: 90 * 1024
});

const firstMatchup = fs.existsSync(path.join(dist, 'compare'))
    ? fs.readdirSync(path.join(dist, 'compare')).find((file) => file.endsWith('.html'))
    : null;
const SCREENS = [
    ['home', 'index.html'],
    ['animals', 'stats.html'],
    ['profile', 'stats/snow-leopard.html'],
    ['versus', 'compare.html'],
    ['matchup', firstMatchup && `compare/${firstMatchup}`],
    ['tier list', 'tier-list.html'],
    ['rankings', 'rankings.html'],
    ['roblox', 'roblox.html'],
    ['community', 'community.html'],
    ['tournament', 'tournament.html'],
    ['about', 'about.html'],
    ['app shell', 'app.html']
].filter(([, file]) => file && fs.existsSync(path.join(dist, file)));

const gz = (buffer) => zlib.gzipSync(buffer).length;
const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

function assets(html, pattern) {
    return [...html.matchAll(pattern)]
        .map((match) => match[1].split(/[?#]/)[0])
        .filter((url) => url.startsWith('/') && !url.startsWith('//'))
        .map((url) => path.join(dist, url.slice(1)))
        .filter((file) => fs.existsSync(file));
}

// Astro entry chunks import shared chunks; count everything reachable.
function withImports(entries) {
    const seen = new Set();
    const pending = [...entries];
    while (pending.length) {
        const file = pending.pop();
        if (seen.has(file)) continue;
        seen.add(file);
        const source = fs.readFileSync(file, 'utf8');
        for (const match of source.matchAll(/(?:from|import)\s*"(\.\.?\/[^"]+\.js)"/g)) {
            const chunk = path.join(path.dirname(file), match[1]);
            if (fs.existsSync(chunk)) pending.push(chunk);
        }
    }
    return [...seen];
}

const failures = [];
const rows = [];
for (const [name, file] of SCREENS) {
    const html = fs.readFileSync(path.join(dist, file), 'utf8');
    const scripts = withImports(assets(html, /<script[^>]+src="([^"]+)"/g));
    const styles = assets(html, /<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g);
    const jsBytes = scripts.reduce((sum, chunk) => sum + gz(fs.readFileSync(chunk)), 0);
    const cssBytes = styles.reduce((sum, sheet) => sum + gz(fs.readFileSync(sheet)), 0);
    const htmlBytes = gz(Buffer.from(html));
    const legacy = name === 'app shell';
    if (htmlBytes > BUDGET.html) failures.push(`${name} HTML ${kb(htmlBytes)} > ${kb(BUDGET.html)}`);
    if (jsBytes > (legacy ? BUDGET.legacyJs : BUDGET.js)) failures.push(`${name} JS ${kb(jsBytes)}`);
    if (cssBytes > (legacy ? BUDGET.legacyCss : BUDGET.css)) failures.push(`${name} CSS ${kb(cssBytes)}`);
    rows.push({ screen: name, htmlGzip: kb(htmlBytes), jsGzip: kb(jsBytes), cssGzip: kb(cssBytes) });
}

console.table(rows);
if (failures.length) {
    console.error(`Route budgets exceeded:\n  ${failures.join('\n  ')}`);
    process.exit(1);
}
console.log(`Route budgets passed for ${rows.length} screens.`);
