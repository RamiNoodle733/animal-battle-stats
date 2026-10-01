'use strict';

// Names a page of the site for people: "Cassowary", "African Lion vs Siberian
// Tiger", "Versus: 10 Humans vs Gorilla", "Rankings: Strongest". Used by the
// Discord posts and the owner's event list, so a page view says which page.

const SITE = 'https://animalbattlestats.com';

const STATIC = Object.freeze({
    '/': ['Home', 'Home'],
    '/stats': ['All animals', 'Animals'],
    '/compare': ['Versus', 'Versus'],
    '/rankings': ['Rankings', 'Rankings'],
    '/tier-list': ['Tier list', 'Tier list'],
    '/tournament': ['Tournament', 'Tournament'],
    '/community': ['Community', 'Community'],
    '/shows': ['Shows', 'Shows'],
    '/roblox': ['Roblox game', 'Roblox'],
    '/rewards': ['Rewards', 'Rewards'],
    '/profile': ['Their profile', 'Profile'],
    '/about': ['How ratings work', 'About'],
    '/credits': ['Credits', 'About'],
    '/login': ['Log in', 'Account'],
    '/signup': ['Sign up', 'Account'],
    '/forgot-password': ['Forgot password', 'Account'],
    '/reset-password': ['Reset password', 'Account'],
    '/admin': ['Admin', 'Admin']
});

const titleCase = (slug) => String(slug || '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

let animals = null;
function animalName(slug) {
    if (slug === 'human') return 'Human';
    try {
        animals ||= require('./canonical-animals');
        return animals.findAnimal(slug)?.name || titleCase(slug);
    } catch {
        return titleCase(slug);
    }
}
// A slug from a page or query: lowercase letters, digits and dashes.
function animalSlug(name) {
    try {
        animals ||= require('./canonical-animals');
        return animals.findAnimal(name)?.slug || null;
    } catch {
        return null;
    }
}

let shows = null;
function showNames(showSlug, episodeSlug) {
    try {
        shows ||= { list: require('../data/shows.json').shows, episodes: require('../data/show-episodes.json').episodes };
    } catch {
        shows = { list: [], episodes: [] };
    }
    const show = shows.list.find((item) => item.slug === showSlug);
    const episode = episodeSlug ? shows.episodes.find((item) => item.show === showSlug && item.slug === episodeSlug) : null;
    return {
        show: show?.name || titleCase(showSlug),
        episode: episode ? `Episode ${episode.number}: ${episode.title}` : episodeSlug ? titleCase(episodeSlug) : null
    };
}

// "?a=human&b=gorilla&na=10" -> "10 Humans vs Gorilla"
function versusFromSearch(search) {
    let params;
    try { params = new URLSearchParams(String(search || '')); } catch { return null; }
    const a = params.get('a');
    const b = params.get('b');
    if (!a || !b) return null;
    const side = (slug, count) => {
        const name = animalName(slug);
        const n = Number(count);
        return Number.isInteger(n) && n > 1 ? `${n.toLocaleString('en-US')} ${name === 'Human' ? 'Humans' : name}` : name;
    };
    return `${side(a, params.get('na'))} vs ${side(b, params.get('nb'))}`;
}

// The page's name, what kind of page it is, and its address.
function describePage(page, search = '') {
    const path = String(page || '').split(/[?#]/)[0] || '/';
    const query = search && String(search).startsWith('?') ? String(search) : '';
    const url = `${SITE}${path}${path === '/compare' ? query : ''}`;
    const parts = path.split('/').filter(Boolean);
    if (STATIC[path]) {
        if (path === '/compare') {
            const matchup = versusFromSearch(query);
            if (matchup) return { label: `Versus: ${matchup}`, kind: 'Versus', url };
        }
        const [label, kind] = STATIC[path];
        return { label, kind, url };
    }
    if (parts[0] === 'stats' && parts[1]) return { label: animalName(parts[1]), kind: 'Animal page', url };
    if (parts[0] === 'compare' && parts[1]) {
        const [a, b] = parts[1].split('-vs-');
        return { label: b ? `${animalName(a)} vs ${animalName(b)}` : titleCase(parts[1]), kind: 'Matchup', url };
    }
    if (parts[0] === 'rankings' && parts[1]) return { label: `Rankings: ${titleCase(parts[1])}`, kind: 'Rankings', url };
    if (parts[0] === 'tier-list' && parts[1]) return { label: `Tier list: ${titleCase(parts[1])}`, kind: 'Tier list', url };
    if (parts[0] === 'shows' && parts[1]) {
        const names = showNames(parts[1], parts[2]);
        return { label: names.episode ? `${names.show}, ${names.episode}` : names.show, kind: names.episode ? 'Episode' : 'Show', url };
    }
    if (parts[0] === 'profile' && parts[1]) {
        let user = parts[1];
        try { user = decodeURIComponent(user); } catch { /* keep as is */ }
        return { label: `${user}'s profile`, kind: 'Profile', url };
    }
    if (parts[0] === 'community' && parts[1]) return { label: `Community: ${titleCase(parts[1])}`, kind: 'Community', url };
    return { label: path, kind: 'Page', url };
}

// Only the query a page's name needs is kept (Versus: who fights, how many).
function cleanSearch(page, search) {
    if (String(page || '') !== '/compare') return null;
    let params;
    try { params = new URLSearchParams(String(search || '').slice(0, 300)); } catch { return null; }
    const kept = new URLSearchParams();
    for (const key of ['a', 'b']) {
        const value = String(params.get(key) || '').toLowerCase();
        if (/^[a-z0-9-]{1,60}$/.test(value)) kept.set(key, value);
    }
    for (const key of ['na', 'nb']) {
        const value = Number(params.get(key));
        if (Number.isInteger(value) && value > 1 && value <= 1000000) kept.set(key, String(value));
    }
    const text = kept.toString();
    return text ? `?${text}` : null;
}

module.exports = { describePage, cleanSearch, animalSlug, SITE };
