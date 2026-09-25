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
    const routes = ['/', '/stats', '/compare', '/tier-list', '/rankings', '/tournament', '/community', '/login', '/signup', '/forgot-password', '/reset-password', '/profile'];
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
