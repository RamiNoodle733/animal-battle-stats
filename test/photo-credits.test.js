'use strict';

// Photo credits for the Roblox game (owner, 2026-10-16): the game names no photographer and points
// players to /credits, so every photo the game uses must be credited there. The game's credits come
// with its data (data/roblox-game-data.json photoCredits, from the game's Data/PhotoCredits through
// scripts/roblox/import-game-data.js); /credits shows the site's own credit and, where the game's card
// uses another photo, the game's.

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const game = require('../data/roblox-game-data.json');
const siteCredits = require('../data/image-credits.json').animals;
const legacy = require('../data/animal-image-sources.json').entries;
const { listAnimals } = require('../lib/canonical-animals');

// (astro/src/lib/credits.js: the same rules.)
const slugify = (value) => String(value || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const fileTitle = (text) => String(text || '').replace(/^File:/, '').replace(/\.(jpe?g|png|tiff?)$/i, '').replace(/_/g, ' ').trim();
const site = new Map();
for (const entry of legacy) if (entry.status === 'active') site.set(slugify(entry.animal), { title: entry.sourceTitle, sourcePage: entry.sourcePage });
for (const [slug, entry] of Object.entries(siteCredits)) site.set(slug, entry);
const siteTitles = new Map([...site].map(([slug, credit]) => [fileTitle(credit.title), slug]));

test('every animal in the Roblox game has a photo credit in the game data', () => {
    const credits = new Map((game.photoCredits || []).map((entry) => [entry.id, entry]));
    assert.ok(game.animals.length > 0);
    for (const animal of game.animals) {
        const credit = credits.get(animal.id);
        assert.ok(credit, `no photo credit for ${animal.id}`);
        for (const field of ['artist', 'license', 'title']) assert.ok(credit[field], `${animal.id}: no ${field}`);
    }
});

test('every game photo credit is a site animal and links to its original', () => {
    const slugs = new Set(listAnimals().map((animal) => animal.slug));
    for (const credit of game.photoCredits || []) {
        assert.ok(slugs.has(credit.id), `${credit.id} is not a site animal`);
        const own = site.get(credit.id);
        if (own && fileTitle(own.title) === credit.title) continue; // the site's own photo, credited as the site has it
        const linked = credit.sourcePage || site.get(siteTitles.get(credit.title))?.sourcePage;
        assert.ok(linked, `${credit.id}: the game's photo "${credit.title}" has no source page for /credits`);
    }
});

const built = fs.existsSync(path.join(root, 'dist', 'credits.html'));
test('/credits lists the game-only photos and the footer links to it', { skip: !built && 'dist/ not built' }, () => {
    const html = fs.readFileSync(path.join(root, 'dist', 'credits.html'), 'utf8');
    assert.match(html, /data-credit-search/);
    const gameOnly = (game.photoCredits || []).filter((credit) => {
        const own = site.get(credit.id);
        return !own || fileTitle(own.title) !== credit.title;
    });
    assert.ok(gameOnly.length > 0);
    for (const credit of gameOnly) {
        const escaped = credit.artist.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
        assert.ok(html.includes(credit.artist) || html.includes(escaped), `${credit.id}: the game photo's photographer is not on /credits`);
    }
    assert.match(fs.readFileSync(path.join(root, 'dist', 'index.html'), 'utf8'), /class="fine"[^]*href="\/credits"/);
});
