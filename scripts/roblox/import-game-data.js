#!/usr/bin/env node
'use strict';

// Brings the Roblox game's data into the site: data/roblox-game-data.json, from the game repo's
// data/site-export.json (written there by `lune run tools/export-site-data.luau`, which runs the
// game's own modules). The site reads players' saves with it (lib/roblox-save.js) and shows each
// animal's card in the game, the islands, trophies, codes and the game's weekly schedule.
//
//   node scripts/roblox/import-game-data.js <path to animal-battle-stats-roblox>

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '../..');
const gameRepo = process.argv[2];
if (!gameRepo) {
    console.error('Usage: node scripts/roblox/import-game-data.js <path to animal-battle-stats-roblox>');
    process.exit(1);
}

const source = path.resolve(gameRepo, 'data/site-export.json');
const data = JSON.parse(fs.readFileSync(source, 'utf8'));
const problems = [];

const siteSlugs = new Set(require('../../lib/canonical-animals').listAnimals().map((animal) => animal.slug));
for (const animal of data.animals || []) {
    if (!siteSlugs.has(animal.id)) problems.push(`game animal "${animal.id}" is not a site animal`);
}
for (const key of ['save', 'animals', 'biomes', 'rarities', 'trophies', 'trophyLevels', 'trainerLevels', 'levelCaps', 'schedule']) {
    if (!data[key]) problems.push(`missing "${key}"`);
}
if (data.save?.store !== 'ABS_Players_v1') problems.push(`unexpected save store "${data.save?.store}" (lib/roblox-save.js reads ABS_Players_v1)`);
if (problems.length) {
    console.error(`Not imported:\n- ${problems.join('\n- ')}`);
    process.exit(1);
}

const out = path.join(root, 'data/roblox-game-data.json');
fs.writeFileSync(out, `${JSON.stringify(data, null, 1)}\n`);
console.log(`Wrote ${path.relative(root, out)}: ${data.animals.length} animals, ${data.biomes.length} islands, ${data.trophies.length} trophies, ${data.schedule.weeks.length} weeks of schedule (from ${data.schedule.weeks[0].starts}).`);
