'use strict';

// Search contracts for the built site (dist/). Run `npm run build` first;
// the tests skip when no build exists (e.g. research-only CI runs).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const animals = require('../animal_stats.json');
const { SITE_ORIGIN, internalLinks, validatePageSearchSignals } = require('../lib/search-contracts');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const built = fs.existsSync(path.join(dist, 'sitemap.xml'));
const sitemap = built ? fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8') : '';
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);
const sitemapPaths = new Set(sitemapUrls.map((url) => new URL(url).pathname));
const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');

function fileFor(url) {
    const pathname = new URL(url).pathname;
    return path.join(dist, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`);
}

test('sitemap lists one clean canonical URL for every public page and animal', { skip: !built && 'dist/ not built' }, () => {
    assert.equal(sitemapUrls.length, new Set(sitemapUrls).size);
    assert.ok(sitemapUrls.length >= 225 + 10, `only ${sitemapUrls.length} URLs`);
    for (const value of sitemapUrls) {
        const url = new URL(value);
        assert.equal(url.origin, SITE_ORIGIN);
        assert.equal(url.search, '');
        assert.equal(url.hash, '');
        assert.ok(fs.existsSync(fileFor(value)), `missing built page for ${value}`);
    }
    for (const animal of animals) assert.ok(sitemapPaths.has(`/stats/${slug(animal.name)}`), `missing /stats/${slug(animal.name)}`);
    for (const pathname of ['/', '/stats', '/compare', '/tier-list', '/rankings', '/tournament', '/community', '/roblox', '/about']) assert.ok(sitemapPaths.has(pathname), `missing ${pathname}`);
    for (const pathname of sitemapPaths) assert.doesNotMatch(pathname, /^\/(?:profile|login|signup|api|app|404)(?:\/|$)/u);
});

test('every sitemap page has consistent social, canonical and structured metadata', { skip: !built && 'dist/ not built' }, () => {
    for (const url of sitemapUrls) {
        const html = fs.readFileSync(fileFor(url), 'utf8');
        const result = validatePageSearchSignals(html, url);
        assert.deepEqual(result.errors, [], `${new URL(url).pathname}: ${result.errors.join(', ')}`);
    }
});

test('internal links point to real pages or preserved app routes', { skip: !built && 'dist/ not built' }, () => {
    const appRoutes = new Set(['/profile', '/login', '/signup', '/forgot-password', '/battlepoints', '/llms.txt', '/llms-full.txt', '/animal_stats.json']);
    for (const url of sitemapUrls.filter((value, index) => index % 7 === 0 || !/\/compare\//u.test(value))) {
        const html = fs.readFileSync(fileFor(url), 'utf8');
        for (const link of internalLinks(html)) {
            assert.ok(link, `invalid link on ${url}`);
            assert.equal(link.origin, SITE_ORIGIN);
            assert.ok(
                sitemapPaths.has(link.pathname) || appRoutes.has(link.pathname) || /^\/(community|profile)\/[^/]+$/u.test(link.pathname) || link.pathname.startsWith('/images/'),
                `unknown internal destination ${link.pathname} on ${url}`
            );
            if (link.search) {
                assert.ok(['/compare', '/stats', '/login'].includes(link.pathname), `query trap ${link.href}`);
                assert.ok(link.searchParams.size <= 3, `unbounded query shape ${link.href}`);
            }
        }
    }
});

test('robots welcomes search engines and AI assistants and points at the sitemap', () => {
    const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
    for (const agent of ['OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Bingbot', 'Googlebot']) {
        assert.match(robots, new RegExp(`User-agent: ${agent}\\s+Allow: \\/`, 'u'), agent);
    }
    assert.doesNotMatch(robots, /Crawl-delay/u);
    assert.match(robots, new RegExp(`Sitemap: ${SITE_ORIGIN.replaceAll('.', '\\.')}\\/sitemap\\.xml`, 'u'));
});

test('llms.txt summarizes the site for AI assistants', { skip: !built && 'dist/ not built' }, () => {
    const llms = fs.readFileSync(path.join(dist, 'llms.txt'), 'utf8');
    assert.match(llms, /^# Animal Battle Stats/u);
    assert.match(llms, /^> /mu);
    assert.match(llms, /\/tier-list\)/u);
    const full = fs.readFileSync(path.join(dist, 'llms-full.txt'), 'utf8');
    for (const animal of animals) assert.ok(full.includes(`## ${animal.name} (`), `llms-full.txt missing ${animal.name}`);
});
