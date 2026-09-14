'use strict';

const SITE_ORIGIN = 'https://animalbattlestats.com';

function decodeHtml(value) {
    return String(value || '')
        .replace(/&amp;/giu, '&')
        .replace(/&quot;/giu, '"')
        .replace(/&#39;|&apos;/giu, "'")
        .replace(/&lt;/giu, '<')
        .replace(/&gt;/giu, '>');
}

function attributes(tag) {
    const result = {};
    for (const match of tag.matchAll(/([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/gu)) {
        result[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? '');
    }
    return result;
}

function tags(html, name) {
    return [...String(html).matchAll(new RegExp(`<${name}\\b[^>]*>`, 'giu'))].map((match) => match[0]);
}

function metaContent(html, key, value) {
    const tag = tags(html, 'meta').find((candidate) => attributes(candidate)[key] === value);
    return tag ? attributes(tag).content || '' : '';
}

function canonicalFrom(html) {
    const tag = tags(html, 'link').find((candidate) => {
        const attrs = attributes(candidate);
        return (attrs.rel || '').toLowerCase().split(/\s+/u).includes('canonical');
    });
    return tag ? attributes(tag).href || '' : '';
}

function jsonLdBlocks(html) {
    const blocks = [];
    const pattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/giu;
    for (const match of String(html).matchAll(pattern)) {
        if (attributes(`<script ${match[1]}>`).type !== 'application/ld+json') continue;
        try {
            blocks.push({ valid: true, value: JSON.parse(decodeHtml(match[2])) });
        } catch (error) {
            blocks.push({ valid: false, error: error.message });
        }
    }
    return blocks;
}

function internalLinks(html, base = SITE_ORIGIN) {
    const links = [];
    for (const tag of tags(html, 'a')) {
        const href = attributes(tag).href;
        if (!href || href.startsWith('#') || /^(?:mailto|tel|javascript):/iu.test(href)) continue;
        try {
            const url = new URL(href, base);
            if (url.origin === new URL(base).origin) links.push(url);
        } catch {
            // Invalid links are returned as an explicit sentinel for the validator.
            links.push(null);
        }
    }
    return links;
}

function validatePageSearchSignals(html, expectedCanonical) {
    const errors = [];
    const title = String(html).match(/<title\b[^>]*>([\s\S]*?)<\/title>/iu)?.[1]?.trim() || '';
    const description = metaContent(html, 'name', 'description');
    const canonical = canonicalFrom(html);
    const robots = metaContent(html, 'name', 'robots').toLowerCase();
    const h1Count = (String(html).match(/<h1\b/giu) || []).length;
    const ogTitle = metaContent(html, 'property', 'og:title');
    const ogDescription = metaContent(html, 'property', 'og:description');
    const ogUrl = metaContent(html, 'property', 'og:url');
    const ogImage = metaContent(html, 'property', 'og:image');
    const twitterCard = metaContent(html, 'name', 'twitter:card');
    const twitterTitle = metaContent(html, 'name', 'twitter:title');
    const twitterDescription = metaContent(html, 'name', 'twitter:description');
    const twitterImage = metaContent(html, 'name', 'twitter:image');
    const jsonLd = jsonLdBlocks(html);

    if (!title) errors.push('missing title');
    if (!description) errors.push('missing description');
    if (canonical !== expectedCanonical) errors.push('canonical mismatch');
    if (robots.includes('noindex')) errors.push('unexpected noindex');
    if (h1Count !== 1) errors.push(`expected one h1, found ${h1Count}`);
    if (!ogTitle || ogTitle !== title) errors.push('Open Graph title mismatch');
    if (!ogDescription || ogDescription !== description) errors.push('Open Graph description mismatch');
    if (ogUrl !== expectedCanonical) errors.push('Open Graph URL mismatch');
    if (!/^https:\/\//u.test(ogImage)) errors.push('Open Graph image must be absolute HTTPS');
    if (twitterCard !== 'summary_large_image') errors.push('Twitter card mismatch');
    if (twitterTitle !== title) errors.push('Twitter title mismatch');
    if (twitterDescription !== description) errors.push('Twitter description mismatch');
    if (twitterImage !== ogImage) errors.push('Twitter image mismatch');
    if (jsonLd.length === 0) errors.push('missing JSON-LD');
    if (jsonLd.some((block) => !block.valid)) errors.push('invalid JSON-LD');
    if (tags(html, 'img').some((tag) => !Object.hasOwn(attributes(tag), 'alt'))) errors.push('image missing alt attribute');
    if (internalLinks(html).some((link) => link === null)) errors.push('invalid internal link');

    return { errors, title, description, canonical, h1Count, ogImage, jsonLd };
}

module.exports = {
    SITE_ORIGIN,
    attributes,
    canonicalFrom,
    internalLinks,
    jsonLdBlocks,
    metaContent,
    validatePageSearchSignals
};
