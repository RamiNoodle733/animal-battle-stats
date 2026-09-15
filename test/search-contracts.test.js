'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const animals = require('../animal_stats.json');
const { SITE_ORIGIN, internalLinks, validatePageSearchSignals } = require('../lib/search-contracts');

const root = path.resolve(__dirname, '..');
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);
const sitemapPaths = new Set(sitemapUrls.map((url) => new URL(url).pathname));

function fileFor(url) {
    const pathname = new URL(url).pathname;
    return path.join(root, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`);
}

test('sitemap contains one clean absolute canonical for every public route and animal', () => {
    assert.equal(sitemapUrls.length, new Set(sitemapUrls).size);
    assert.equal(sitemapUrls.length, 234);
    sitemapUrls.forEach((value) => {
        const url = new URL(value);
        assert.equal(url.origin, SITE_ORIGIN);
        assert.equal(url.search, '');
        assert.equal(url.hash, '');
        assert.ok(fs.existsSync(fileFor(value)), `missing generated page for ${value}`);
    });
    const animalPaths = animals.map((animal) => `/stats/${animal.name.toLowerCase().replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '')}`);
    assert.equal(animalPaths.length, 225);
    animalPaths.forEach((pathname) => assert.ok(sitemapPaths.has(pathname), `missing ${pathname}`));
    sitemapPaths.forEach((pathname) => assert.doesNotMatch(pathname, /^\/(?:profile|login|signup|api)(?:\/|$)/u));
});

test('every sitemap page has complete consistent social, canonical and structured metadata', () => {
    sitemapUrls.forEach((url) => {
        const html = fs.readFileSync(fileFor(url), 'utf8');
        const result = validatePageSearchSignals(html, url);
        assert.deepEqual(result.errors, [], `${new URL(url).pathname}: ${result.errors.join(', ')}`);
    });
});

test('crawlable internal links avoid query traps and point to known public or preserved app routes', () => {
    const preservedAppRoutes = new Set([
        '/profile', '/login', '/signup', '/forgot-password', '/battlepoints',
        '/community/map', '/community/feed', '/community/chat'
    ]);
    sitemapUrls.forEach((url) => {
        const html = fs.readFileSync(fileFor(url), 'utf8');
        internalLinks(html).forEach((link) => {
            assert.ok(link, `invalid link on ${url}`);
            assert.equal(link.origin, SITE_ORIGIN);
            assert.equal(link.hash === '' || link.pathname === '/about', true);
            assert.ok(
                sitemapPaths.has(link.pathname) || preservedAppRoutes.has(link.pathname) || /^\/profile\/[^/]+$/u.test(link.pathname),
                `unknown internal destination ${link.pathname} on ${url}`
            );
            if (link.search) {
                assert.ok(['/battle', '/compare', '/stats'].includes(link.pathname), `query trap ${link.href}`);
                assert.ok(link.searchParams.size <= 3, `unbounded query shape ${link.href}`);
            }
        });
    });
});

test('robots keeps search discovery separate from the existing training policy', () => {
    const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
    assert.match(robots, /User-agent: OAI-SearchBot\s+Allow: \//u);
    assert.match(robots, /Search discovery is independent of training policy/u);
    assert.match(robots, /User-agent: GPTBot\s+Allow: \//u);
    assert.match(robots, new RegExp(`Sitemap: ${SITE_ORIGIN.replaceAll('.', '\\.')}\/sitemap\\.xml`, 'u'));
});
