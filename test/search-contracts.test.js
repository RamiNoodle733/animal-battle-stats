'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { getPublicUrls } = require('../lib/seo-renderer');
const root = path.resolve(__dirname, '..');

test('new static tools have canonical initial content and valid accurate JSON-LD', () => {
    for (const route of ['battle', 'methodology']) {
        const html = fs.readFileSync(path.join(root, `${route}.html`), 'utf8');
        assert.match(html, new RegExp(`rel="canonical" href="https://animalbattlestats.com/${route}"`));
        assert.equal((html.match(/<h1\b/g) || []).length, 1);
        const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
        assert.ok(blocks.length);
        for (const block of blocks) {
            const schema = JSON.parse(block[1]);
            assert.equal(schema['@type'], 'WebPage');
            assert.doesNotMatch(block[1], /QAPage|AggregateRating|FAQPage/);
        }
        assert.match(html, /hypothetical/);
        assert.match(html, /0\.1\.0-preview/);
    }
});

test('sitemap includes only base tool URLs, never all possible animal pair combinations', () => {
    const urls = getPublicUrls().map(({ loc }) => loc);
    assert.equal(new Set(urls).size, urls.length);
    assert.ok(urls.includes('https://animalbattlestats.com/battle'));
    assert.ok(urls.includes('https://animalbattlestats.com/methodology'));
    assert.ok(urls.every((url) => !url.includes('?')));
    const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
    for (const url of urls) assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Missing ${url}`);
});
