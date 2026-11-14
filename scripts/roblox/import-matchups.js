#!/usr/bin/env node
'use strict';

// Brings the Roblox game's matchup links into the site: data/roblox-matchups.json, the `matchups` part of the game
// repo's data/site-export.json (written there by `lune run tools/export-site-data.luau`, which runs the game's own
// modules; the link format is the game's docs/MATCHUP_LINKS.md). It holds every animal id a link may name, the game's
// famous pairs and the step of its daily rule, so the matchup pages' PLAY THIS MATCHUP IN ROBLOX button and the home's
// TODAY'S MATCHUP always match the game (astro/src/lib/roblox-matchups.js).
//
// It is imported on its own, beside scripts/roblox/import-game-data.js, so it never waits on the save read.
//
//   node scripts/roblox/import-matchups.js <path to the game repo>

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '../..');
const gameRepo = process.argv[2];
if (!gameRepo) {
    console.error('Usage: node scripts/roblox/import-matchups.js <path to the game repo>');
    process.exit(1);
}

const source = path.resolve(gameRepo, 'data/site-export.json');
const matchups = JSON.parse(fs.readFileSync(source, 'utf8')).matchups;
const place = require('../../data/roblox-game.json').placeId;
const siteSlugs = new Set(require('../../lib/canonical-animals').listAnimals().map((animal) => animal.slug));
const problems = [];

if (!matchups) {
    console.error(`Not imported: ${source} has no "matchups" (export it again with the game's tools/export-site-data.luau).`);
    process.exit(1);
}
const ids = Array.isArray(matchups.ids) ? matchups.ids : [];
const seen = new Set();
for (const id of ids) {
    if (typeof id !== 'string' || !/^[a-z0-9-]{1,40}$/.test(id)) problems.push(`bad id ${JSON.stringify(id)}`);
    else if (!siteSlugs.has(id)) problems.push(`game animal "${id}" is not a site animal`);
    if (seen.has(id)) problems.push(`id "${id}" listed twice`);
    seen.add(id);
}
if (!ids.length) problems.push('no ids');
const pairs = (Array.isArray(matchups.pairs) ? matchups.pairs : []).map((pair) => [pair?.a, pair?.b]);
for (const [a, b] of pairs) {
    if (!seen.has(a) || !seen.has(b) || a === b) problems.push(`pair ${a} ~ ${b} is not two different ids`);
}
if (!pairs.length) problems.push('no pairs');
const step = matchups.day?.step;
if (!Number.isInteger(step) || step < 1) problems.push(`bad daily step ${JSON.stringify(step)}`);
const link = matchups.link || {};
if (link.place !== place) problems.push(`the game's place ${link.place} is not data/roblox-game.json's ${place}`);
if (link.prefix !== 'm=' || link.sep !== '~' || !Number.isInteger(link.most)) problems.push(`unexpected link form ${JSON.stringify(link)} (the site builds m=<id>~<id>)`);
if (problems.length) {
    console.error(`Not imported:\n- ${problems.join('\n- ')}`);
    process.exit(1);
}

const out = path.join(root, 'data/roblox-matchups.json');
const data = {
    about: 'The Roblox game\'s matchup links (the game repo\'s docs/MATCHUP_LINKS.md), from its data/site-export.json by scripts/roblox/import-matchups.js. Do not edit by hand.',
    place,
    most: link.most,
    step,
    ids,
    pairs
};
// One pair a line, so a changed pair is a one-line diff.
const json = JSON.stringify(data, null, 1).replace(/\[\n\s+("[a-z0-9-]+"),\n\s+("[a-z0-9-]+")\n\s+\]/g, '[$1, $2]');
fs.writeFileSync(out, `${json}\n`);
console.log(`Wrote ${path.relative(root, out)}: ${ids.length} animal ids, ${pairs.length} famous pairs, daily step ${step}.`);
