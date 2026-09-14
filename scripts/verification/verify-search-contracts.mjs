#!/usr/bin/env node

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { SITE_ORIGIN, canonicalFrom, internalLinks, validatePageSearchSignals } = require('../../lib/search-contracts');
const baseUrl = (process.argv[2] || SITE_ORIGIN).replace(/\/+$/u, '');

function assert(condition, message, details = null) {
    if (!condition) throw new Error(`${message}${details ? `: ${JSON.stringify(details)}` : ''}`);
}

async function request(pathname, options = {}) {
    return fetch(`${baseUrl}${pathname}`, { redirect: 'manual', ...options });
}

const searchBotAgent = 'Mozilla/5.0 AppleWebKit/537.36 compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot';
const robots = await request('/robots.txt', { headers: { 'User-Agent': searchBotAgent } });
assert(robots.status === 200, 'OAI-SearchBot could not fetch robots.txt', { status: robots.status });
const robotsText = await robots.text();
assert(/User-agent: OAI-SearchBot\s+Allow: \//u.test(robotsText), 'OAI-SearchBot is not explicitly allowed');
assert(robotsText.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`), 'robots sitemap declaration is missing');

const sitemapResponse = await request('/sitemap.xml', { headers: { 'User-Agent': searchBotAgent } });
assert(sitemapResponse.status === 200, 'OAI-SearchBot could not fetch sitemap', { status: sitemapResponse.status });
const sitemapText = await sitemapResponse.text();
const urls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);
assert(urls.length === 234 && new Set(urls).size === urls.length, 'sitemap URL count or uniqueness changed', { count: urls.length });
urls.forEach((value) => {
    const url = new URL(value);
    assert(url.origin === SITE_ORIGIN && !url.search && !url.hash, 'sitemap contains a non-canonical URL', { value });
});

const crawlerSamples = ['/', '/battle', '/about', '/stats/african-elephant'];
for (const pathname of crawlerSamples) {
    const response = await request(pathname, { headers: { 'User-Agent': searchBotAgent } });
    assert(response.status === 200, 'crawler-visible page failed', { pathname, status: response.status });
    const html = await response.text();
    const expectedCanonical = `${SITE_ORIGIN}${pathname === '/' ? '/' : pathname}`;
    const signals = validatePageSearchSignals(html, expectedCanonical);
    assert(signals.errors.length === 0, 'crawler-visible metadata failed', { pathname, errors: signals.errors });
}

const queryVariants = [
    ['/?utm_source=contract-test', `${SITE_ORIGIN}/`],
    ['/stats?animal=african-elephant&sort=rank', `${SITE_ORIGIN}/stats`],
    ['/battle?a=african-lion&b=african-elephant&v=0.1.0-preview', `${SITE_ORIGIN}/battle`],
    ['/compare?animals=african-lion,african-elephant', `${SITE_ORIGIN}/compare`]
];
for (const [pathname, expectedCanonical] of queryVariants) {
    const response = await request(pathname);
    assert(response.status === 200, 'query variant failed', { pathname, status: response.status });
    assert(canonicalFrom(await response.text()) === expectedCanonical, 'query variant canonical mismatch', { pathname, expectedCanonical });
}

if (baseUrl === SITE_ORIGIN) {
    const htmlRedirect = await request('/about.html');
    assert(htmlRedirect.status === 308 && htmlRedirect.headers.get('location') === '/about', 'clean URL redirect failed', {
        status: htmlRedirect.status,
        location: htmlRedirect.headers.get('location')
    });
}

for (const pathname of ['/definitely-not-a-real-abs-route-92741', '/stats/not-a-real-animal-92741']) {
    const response = await request(pathname);
    assert(response.status === 404, 'unknown route is a soft 404', { pathname, status: response.status });
}

const linkSources = ['/', '/battle', '/about', '/stats/african-elephant'];
const checkedLinks = new Set();
for (const pathname of linkSources) {
    const response = await request(pathname);
    const links = internalLinks(await response.text(), `${baseUrl}${pathname}`);
    for (const link of links) {
        if (!link || checkedLinks.has(link.pathname)) continue;
        checkedLinks.add(link.pathname);
        const destination = await request(link.pathname);
        assert([200, 307, 308].includes(destination.status), 'broken internal link', { pathname, destination: link.pathname, status: destination.status });
    }
}

console.log(JSON.stringify({
    success: true,
    baseUrl,
    sitemapUrls: urls.length,
    crawlerSamples: crawlerSamples.length,
    canonicalVariants: queryVariants.length,
    internalDestinations: checkedLinks.size,
    searchBotAllowed: true,
    trainingPolicy: 'preserved independently'
}, null, 2));
