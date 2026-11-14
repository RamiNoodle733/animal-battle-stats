'use strict';

// Contracts for the built game-style pages (dist/). Skipped without a build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const built = fs.existsSync(path.join(dist, 'stats', 'salamander.html'));
const read = (file) => fs.readFileSync(path.join(dist, file), 'utf8');
const version = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version;

test('the homepage and shared navigation promote Roblox and social accounts', { skip: !built && 'dist/ not built' }, () => {
    const home = read('index.html');
    assert.match(home, /class="mm [^"]*primary" href="\/roblox"/);
    assert.match(home, /href="\/social"/);
    // The live game's own count (its newest export, data/roblox-matchups.json), never typed, and its own words.
    const gameCount = require('../data/roblox-matchups.json').ids.length;
    assert.ok(home.includes(`Duel with ${gameCount} real animals`));
    assert.ok(read('roblox.html').includes(`Duel with ${gameCount} Real Animals`));
    for (const file of ['index.html', 'community.html', 'stats/african-lion.html', 'social.html']) {
        const html = read(file);
        assert.doesNotMatch(html, /href="\/shows(?:\/|"|#)/);
        assert.doesNotMatch(html, /Stars in ABS Originals/);
    }
    const social = read('social.html');
    assert.match(social, /Play free on Roblox|See the Roblox game/);
    const accounts = ['youtube.com', 'tiktok.com', 'instagram.com', 'facebook.com', 'x.com', 'linkedin.com', 'discord.gg', 'reddit.com', 'github.com'];
    for (const account of accounts) assert.ok(social.includes(account), account);
    assert.doesNotMatch(read('llms.txt'), /ABS Originals|\/shows/);
});

test('the site describes the Roblox game that is live, not the old one', { skip: !built && 'dist/ not built' }, () => {
    // (the game repo's docs/STORE_PAGE.md: real photo cards, duels won by skill, nine islands, a voiced story)
    // (what the save read says about the old card, "trainer level" and the rest, goes with the save read itself)
    const OLD = /holo-?cards?|holo battle|battle in (a )?3D|3D world|Weekly Cup|Family of the Week|Coin Frenzy|walled city|Collection's Reach|the Citadel|Wild Tracks/i;
    for (const file of ['index.html', 'roblox.html', 'social.html', 'community.html', 'stats/african-lion.html', 'stats/gorilla.html']) {
        assert.doesNotMatch(read(file), OLD, file);
    }
    const roblox = read('roblox.html');
    assert.match(roblox, /strike, block, parry/);
    assert.match(roblox, /nine islands/);
    assert.match(roblox, /THE NINTH TOWER/);
    assert.doesNotMatch(roblox, /data-tab="(week|boards|codes)"/, 'no This week, old leaderboards or Codes while the game has none');
    assert.match(roblox, /data-roblox-shots="0"/, 'the Roblox page\'s old-game thumbnails stay off');
    assert.match(roblox, /\/images\/og\/roblox\.jpg\?v=[0-9a-f]{10}/, 'the preview is versioned');
    // an animal the live game no longer has carries no game strip; one it has names its ultimate
    assert.doesNotMatch(read('stats/aardvark.html'), /data-in-game/);
    assert.match(read('stats/african-lion.html'), /The Savanna island(?:&#39;|')s guardian/);
    assert.match(read('stats/gorilla.html'), /Its ultimate: /);
});

test('animal profiles are complete static character screens', { skip: !built && 'dist/ not built' }, () => {
    const html = read('stats/salamander.html');
    assert.match(html, new RegExp(`<meta name="abs-version" content="${version.split('.').join('\\.')}"`));
    assert.match(html, /<h1[^>]*>Salamander<\/h1>/);
    for (const tab of ['stats', 'kit', 'facts', 'versus', 'lore', 'sources']) assert.match(html, new RegExp(`id="pane-${tab}"`));
    for (const label of ['Attack', 'Defense', 'Agility', 'Stamina', 'Intelligence', 'Special']) assert.match(html, new RegExp(`class="m-label"[^>]*>${label}<`));
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /"@type":"BreadcrumbList"/);
    assert.match(html, /"@type":"Taxon"/);
    assert.match(html, /class="[^"]*\bbio-\w+/);
    assert.doesNotMatch(html, /css\/legacy\.css/);
    assert.doesNotMatch(html, /html\.js #seo-content/);
});

test('profiles never show research zeros as real measurements', { skip: !built && 'dist/ not built' }, () => {
    const html = read('stats/snow-leopard.html');
    assert.match(html, /No reliable measurement/);
    assert.doesNotMatch(html, />0 km\/h</);
    assert.doesNotMatch(html, />0 PSI</);
});

test('about page explains ratings, matchups and sources with an FAQ', { skip: !built && 'dist/ not built' }, () => {
    const html = read('about.html');
    assert.match(html, /"@type":"AboutPage"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /id="model"/);
    assert.match(html, /id="ratings"/);
    assert.match(html, /\/llms\.txt/);
});

test('every public route and page rewrite is a built page', { skip: !built && 'dist/ not built' }, () => {
    const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
    const routes = ['/', '/stats', '/compare', '/tier-list', '/rankings', '/tournament', '/community', '/login', '/signup', '/forgot-password', '/reset-password', '/profile', '/rewards'];
    const rewrites = vercel.rewrites.map((rule) => rule.destination).filter((destination) => !destination.startsWith('/api/'));
    for (const route of [...routes, ...rewrites]) {
        const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
        assert.ok(fs.existsSync(path.join(dist, file)), `${route} has no built page`);
    }
    // The retired single-page-app shell must not come back; old links go home.
    assert.equal(fs.existsSync(path.join(dist, 'app.html')), false);
    assert.ok(vercel.redirects.some((rule) => rule.source === '/app' && rule.destination === '/'), '/app must redirect home');
});

test('design system keeps reduced-motion and screen-fit contracts', () => {
    const css = fs.readFileSync(path.join(root, 'astro/src/styles/abs.css'), 'utf8');
    assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
    assert.match(css, /body\.game \{[^}]*overflow: hidden/s);
    assert.match(css, /@media \(max-height: 540px\)/);
    assert.match(css, /@property --v/);
});
