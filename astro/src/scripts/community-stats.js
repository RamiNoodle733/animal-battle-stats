// Community world stats: who is online, the all-time site numbers, the visitor
// globe, activity over time, places (with a per-place breakdown), top pages and
// actions, and for the site owner: who is on which page now, every event in
// words (with Discord delivery), and the tracking settings.
// Data: /api/community?action=stats|presence|globe|globe-point, and for the
// owner admin-overview|admin-analytics|admin-settings.
import { escapeHtml, toast } from './site.js';
import { mountGlobe } from './world.js';
import { deviceUntracked, setDeviceUntracked } from './track.js';

const DAY = 24 * 60 * 60 * 1000;
const fmt = (value) => Number(value || 0).toLocaleString('en-US');
const compact = (value) => Number(value || 0).toLocaleString('en-US', { notation: value >= 100000 ? 'compact' : 'standard', maximumFractionDigits: 1 });
const PAGE_NAMES = { '/': 'Home', '/compare': 'Versus', '/rankings': 'Rankings', '/tier-list': 'Tier list', '/tournament': 'Tournament', '/community': 'Community', '/profile': 'Profile', '/rewards': 'Rewards', '/roblox': 'Roblox game', '/stats': 'Animals' };
const EVENT_NAMES = { site_visit: 'Page view', site_leave: 'Left the site', login: 'Logged in', signup: 'Signed up', logout: 'Logged out', vote: 'Voted', vote_changed: 'Changed a vote', vote_removed: 'Removed a vote', fight: 'Ran a fight', comment: 'Commented', comment_reply: 'Replied', comment_deleted: 'Deleted a comment', comment_upvote: 'Upvoted a comment', comment_downvote: 'Downvoted a comment', chat_message: 'Posted in the arena', chat_reply: 'Replied in the arena', tournament_complete: 'Finished a tournament', tournament_quit: 'Quit a tournament', prestige: 'Prestiged', level_up: 'Leveled up' };

let regionNames = null;
try { regionNames = new Intl.DisplayNames(['en'], { type: 'region' }); } catch { regionNames = null; }

function countryName(code) {
    const raw = String(code || '').trim();
    if (!/^[A-Z]{2}$/.test(raw)) return raw || 'Unknown';
    try { return regionNames?.of(raw) || raw; } catch { return raw; }
}

function ago(value) {
    const seconds = Math.max(1, Math.round((Date.now() - new Date(value).getTime()) / 1000));
    const steps = [[31536000, 'y'], [2592000, 'mo'], [86400, 'd'], [3600, 'h'], [60, 'm']];
    for (const [size, label] of steps) if (seconds >= size) return `${Math.floor(seconds / size)}${label} ago`;
    return 'just now';
}

function day(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

function pageName(path) {
    if (!path) return '';
    if (PAGE_NAMES[path]) return PAGE_NAMES[path];
    if (path.startsWith('/stats/')) return 'Animal page';
    if (path.startsWith('/compare/')) return 'Matchup';
    return path;
}

function headers() {
    const result = { Accept: 'application/json' };
    if (window.ABS_TOKEN) result.Authorization = `Bearer ${window.ABS_TOKEN}`;
    return result;
}

async function getJson(url) {
    const response = await fetch(url, { credentials: 'same-origin', headers: headers() });
    if (!response.ok) throw new Error(String(response.status));
    return response.json();
}

// A list of rows with a bar behind each, scaled to the biggest.
function bars(rows, { empty = 'Nothing yet.' } = {}) {
    if (!rows.length) return `<li class="muted small">${empty}</li>`;
    const max = Math.max(1, ...rows.map((row) => row.value));
    return rows.map((row) => `<li><i style="width:${Math.max(2, Math.round((row.value / max) * 100))}%"></i><span>${row.label}</span><b>${compact(row.value)}${row.note ? ` <small>${row.note}</small>` : ''}</b></li>`).join('');
}

export function mountStats(root, { avatar }) {
    if (root.dataset.mounted) return root.statsApi;
    root.dataset.mounted = '1';
    const $ = (selector) => root.querySelector(selector);
    const $$ = (selector) => [...root.querySelectorAll(selector)];
    const set = (selector, value) => { for (const node of $$(selector)) node.textContent = value; };
    // The owner's extras show once sign-in has loaded (it can land after this view).
    const isOwner = () => window.ABS_USER?.role === 'admin';
    let globe = null;
    let points = [];
    let range = '30d';
    let showing = 'activity';

    const world = mountGlobe($('[data-globe]'), { onSelect: (point) => openPlace(point.key) });

    // ------------------------------------------------------------ panels (phones show one at a time)
    $$('[data-stats-tab]').forEach((tab) => tab.addEventListener('click', () => {
        root.dataset.statsShow = tab.dataset.statsTab;
        $$('[data-stats-tab]').forEach((other) => other.setAttribute('aria-selected', String(other === tab)));
    }));
    function showIntel(name) {
        showing = name;
        $$('[data-ip-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.ipTab === name)));
        $$('[data-ip]').forEach((pane) => { pane.hidden = pane.dataset.ip !== name; });
        if (name === 'events') openOwnerTools();
    }
    $$('[data-ip-tab]').forEach((tab) => tab.addEventListener('click', () => showIntel(tab.dataset.ipTab)));
    const revealOwner = () => { if (isOwner()) $('[data-owner-only]').hidden = false; };
    revealOwner();
    document.addEventListener('abs:user', revealOwner);

    // ------------------------------------------------------------ live: presence + all-time numbers
    async function loadPresence() {
        try {
            const body = await getJson('/api/community?action=presence');
            const count = Number(body.count) || 0;
            const guests = Number(body.guests) || 0;
            set('[data-st-online]', fmt(count));
            set('[data-st-online-split]', `${fmt(count - guests)} player${count - guests === 1 ? '' : 's'} · ${fmt(guests)} guest${guests === 1 ? '' : 's'}`);
            const rows = await Promise.all((body.data || []).slice(0, 30).map(async (user) => `<li>${await avatar(user.profileAnimal)}<b>${escapeHtml(user.username)}</b><small>${escapeHtml(pageName(user.page))}</small></li>`));
            $('[data-st-online-list]').innerHTML = rows.join('') || '<li class="muted small">No players signed in right now.</li>';
            $('[data-st-updated]').textContent = `Updated ${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
        } catch {
            $('[data-st-updated]').textContent = 'Live count unavailable';
        }
    }

    async function loadNumbers() {
        try {
            const { data } = await getJson('/api/community?action=stats');
            for (const node of $$('[data-ss]')) node.textContent = compact(data?.[node.dataset.ss]);
        } catch { /* the tiles keep their dashes */ }
    }

    // ------------------------------------------------------------ globe data
    async function loadGlobe() {
        try {
            const body = await getJson(`/api/community?action=globe&range=${range}`);
            globe = body.data;
        } catch {
            $('[data-chart]').innerHTML = '<p class="muted small">Activity is unavailable right now.</p>';
            return;
        }
        points = (globe.points || []).filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lng));
        const countries = new Map();
        for (const point of points) {
            const key = point.country || 'Unknown';
            const entry = countries.get(key) || { key, name: countryName(key), events: 0, visitors: 0, places: 0 };
            entry.events += point.totalEvents || 0;
            entry.visitors += point.uniqueVisitors || 0;
            entry.places += 1;
            countries.set(key, entry);
        }
        const ranked = [...countries.values()].sort((a, b) => b.events - a.events);
        // Face the busiest country (event-weighted circular mean of its longitudes).
        let lead = null;
        if (ranked[0]) {
            let sx = 0;
            let sy = 0;
            for (const point of points) {
                if ((point.country || 'Unknown') !== ranked[0].key) continue;
                sx += Math.cos(point.lng * Math.PI / 180) * (point.totalEvents || 1);
                sy += Math.sin(point.lng * Math.PI / 180) * (point.totalEvents || 1);
            }
            if (sx || sy) lead = Math.atan2(sy, sx) * 180 / Math.PI;
        }
        world.setPoints(points, lead);

        const summary = globe.summary || {};
        set('[data-sg="uniqueVisitors"]', compact(summary.uniqueVisitors));
        set('[data-sg="totalVisits"]', compact(summary.totalVisits));
        set('[data-sg="pageViews"]', compact(summary.pageViews));
        set('[data-sg="totalEvents"]', compact(summary.totalEvents));
        set('[data-sg="places"]', compact(points.length));
        set('[data-sg="countries"]', compact(countries.size));
        const windows = globe.windows || {};
        set('[data-sw="last24h"]', compact(windows.last24h));
        set('[data-sw="last7d"]', compact(windows.last7d));
        set('[data-sw="last30d"]', compact(windows.last30d));
        // Pace: today against the average day this week.
        const pace = windows.last7d ? (windows.last24h * 7) / windows.last7d : 0;
        set('[data-sw="pace"]', windows.last7d ? `${pace.toFixed(2)}x` : '–');
        const paceBox = $('[data-sw-pace-box]');
        paceBox.classList.toggle('up', pace >= 1.05);
        paceBox.classList.toggle('down', pace > 0 && pace < 0.95);

        paintChart(globe.trend || []);
        const top = points[0];
        set('[data-in="place"]', top ? top.label : '–');
        set('[data-in="place-n"]', top ? `${fmt(top.totalEvents)} events` : '');
        set('[data-in="country"]', ranked[0] ? ranked[0].name : '–');
        set('[data-in="country-n"]', ranked[0] ? `${fmt(ranked[0].events)} events · ${fmt(ranked[0].places)} places` : '');
        const busiest = (globe.pages || [])[0];
        set('[data-in="page"]', busiest ? busiest.key : '–');
        set('[data-in="page-n"]', busiest ? `${fmt(busiest.count)} events` : '');

        $('[data-top-pages]').innerHTML = bars((globe.pages || []).map((row) => ({ label: escapeHtml(row.key), value: row.count })));
        $('[data-top-actions]').innerHTML = bars((globe.actions || []).slice(0, 10).map((row) => ({ label: escapeHtml(row.key), value: row.count })));
        $('[data-top-countries]').innerHTML = bars(ranked.slice(0, 10).map((row) => ({ label: `<span class="cc">${escapeHtml(row.key)}</span>${escapeHtml(row.name)}`, value: row.events, note: `${fmt(row.visitors)} visitors` })), { empty: 'No places yet.' });
        paintPlaces();
    }

    // Days with no events still get a (zero) bar, so the range reads as a calendar.
    function filledTrend(trend) {
        if (!trend.length) return [];
        const byDay = new Map(trend.map((row) => [row.day, row]));
        const end = new Date();
        const endKey = end.toISOString().slice(0, 10);
        const days = range === 'all' ? Math.round((Date.parse(`${endKey}T00:00:00Z`) - Date.parse(`${trend[0].day}T00:00:00Z`)) / DAY) + 1 : Number.parseInt(range, 10);
        const rows = [];
        for (let index = days - 1; index >= 0; index -= 1) {
            const key = new Date(Date.parse(`${endKey}T00:00:00Z`) - index * DAY).toISOString().slice(0, 10);
            const row = byDay.get(key);
            rows.push({ day: key, events: row?.events || 0, visits: row?.visits || 0, visitors: row?.cohortSize || 0 });
        }
        return rows;
    }

    function paintChart(trend) {
        const rows = filledTrend(trend);
        const box = $('[data-chart]');
        if (!rows.length) { box.innerHTML = '<p class="muted small">No activity in this range yet.</p>'; return; }
        const max = Math.max(1, ...rows.map((row) => row.events));
        const width = rows.length * 10;
        const gap = rows.length > 120 ? 0 : 2;
        const barsSvg = rows.map((row, index) => {
            const height = (row.events / max) * 100;
            return `<rect class="bar" x="${index * 10 + gap / 2}" y="${100 - height}" width="${10 - gap}" height="${Math.max(height, row.events ? 0.8 : 0)}"><title>${day(`${row.day}T00:00:00Z`)}: ${fmt(row.events)} events, ${fmt(row.visits)} visits, ${fmt(row.visitors)} visitors</title></rect>`;
        }).join('');
        const line = rows.map((row, index) => `${index * 10 + 5},${100 - (row.visits / max) * 100}`).join(' ');
        box.innerHTML = `<span class="peak">${compact(max)}</span>
            <svg viewBox="0 0 ${width} 100" preserveAspectRatio="none" role="img" aria-label="Events and visits per day">
                <line class="grid" x1="0" x2="${width}" y1="50" y2="50"></line><line class="grid" x1="0" x2="${width}" y1="100" y2="100"></line>
                ${barsSvg}<polyline class="line" points="${line}"></polyline>
            </svg>
            <span class="axis"><span>${day(`${rows[0].day}T00:00:00Z`)}</span><span>Today</span></span>`;
        const best = rows.reduce((top, row) => (row.events > top.events ? row : top), rows[0]);
        set('[data-in="day"]', best.events ? day(`${best.day}T00:00:00Z`) : '–');
        set('[data-in="day-n"]', best.events ? `${fmt(best.events)} events · ${fmt(best.visits)} visits` : '');
    }

    $$('[data-range] [data-r]').forEach((button) => button.addEventListener('click', () => {
        range = button.dataset.r;
        $$('[data-range] [data-r]').forEach((other) => other.setAttribute('aria-pressed', String(other === button)));
        loadGlobe();
    }));

    // ------------------------------------------------------------ places
    const search = $('[data-place-q]');
    function paintPlaces() {
        const query = search.value.trim().toLowerCase();
        const matches = points.filter((point) => !query || `${point.label} ${countryName(point.country)}`.toLowerCase().includes(query));
        $('[data-place-count]').textContent = `${fmt(matches.length)} of ${fmt(points.length)} places`;
        const max = Math.max(1, ...matches.map((point) => point.totalEvents || 0));
        $('[data-places]').innerHTML = matches.slice(0, 250).map((point) => `<li><button class="place" type="button" data-key="${escapeHtml(point.key)}"><i style="width:${Math.max(2, Math.round(((point.totalEvents || 0) / max) * 100))}%"></i><span>${escapeHtml(point.label)}</span><b>${compact(point.totalEvents)} <small>${compact(point.totalVisits)} visits</small></b></button></li>`).join('') || '<li class="muted small">No places match.</li>';
    }
    search.addEventListener('input', paintPlaces);
    $('[data-places]').addEventListener('click', (event) => {
        const button = event.target.closest('[data-key]');
        if (button) openPlace(button.dataset.key);
    });

    async function openPlace(key) {
        if (!key) return;
        root.dataset.statsShow = 'intel';
        $$('[data-stats-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.statsTab === 'intel')));
        showIntel('places');
        world.select(key);
        const list = $('[data-places-list]');
        const detail = $('[data-place-detail]');
        list.hidden = true;
        detail.hidden = false;
        detail.innerHTML = '<p class="muted small">Loading place…</p>';
        try {
            const { data } = await getJson(`/api/community?action=globe-point&key=${encodeURIComponent(key)}`);
            const s = data.summary || {};
            const rows = (items, label = (row) => escapeHtml(row.key)) => `<ol class="bars">${bars((items || []).slice(0, 6).map((row) => ({ label: label(row), value: row.count })))}</ol>`;
            detail.innerHTML = `
                <div class="pd-head"><button class="btn btn-sm" type="button" data-place-back>Back</button><div><h3>${escapeHtml(s.label || key)}</h3><small>First seen ${day(s.firstSeen)} · last seen ${day(s.lastSeen)}</small></div></div>
                <div class="pd-nums">
                    <div><b>${compact(s.totalEvents)}</b><span>Events</span></div>
                    <div><b>${compact(s.totalVisits)}</b><span>Visits</span></div>
                    <div><b>${compact(s.pageViews)}</b><span>Page views</span></div>
                    <div><b>${compact(s.uniqueVisitors)}</b><span>Visitors</span></div>
                </div>
                <div class="pd-cols">
                    <section><h4>Actions</h4>${rows(data.actions)}</section>
                    <section><h4>Pages</h4>${rows(data.pages)}</section>
                    <section><h4>Devices</h4>${rows(data.devices, (row) => escapeHtml([row.device, row.browser, row.os].filter(Boolean).join(' · ') || 'Unknown'))}</section>
                </div>
                ${isOwner() ? '<section><h4 class="sub-h">Latest events here (owner only)</h4><ol class="ev-list" data-place-events><li class="muted small">Loading…</li></ol></section>' : ''}`;
            if (isOwner()) {
                const events = await loadEventPage({ key });
                detail.querySelector('[data-place-events]').innerHTML = events.rows || '<li class="muted small">No events.</li>';
            }
        } catch {
            detail.innerHTML = '<div class="pd-head"><button class="btn btn-sm" type="button" data-place-back>Back</button></div><p class="muted small">This place is unavailable right now.</p>';
        }
    }
    $('[data-place-detail]').addEventListener('click', (event) => {
        if (!event.target.closest('[data-place-back]')) return;
        $('[data-place-detail]').hidden = true;
        $('[data-places-list]').hidden = false;
        world.select(null);
    });

    // ------------------------------------------------------------ owner tools: Live, Events, Settings
    const eventList = $('[data-ev-list]');
    const filters = $('[data-ev-filters]');
    let cursor = null;
    let ownerView = 'live';
    let visitorFilter = null;
    let liveTimer = 0;

    const link = (url, text) => (url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(text)}</a>` : escapeHtml(text));
    const quote = (text, max = 90) => {
        const clean = String(text || '').replace(/\s+/g, ' ').trim();
        return clean ? `“${escapeHtml(clean.length > max ? `${clean.slice(0, max - 1)}…` : clean)}”` : '';
    };
    const hostOf = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return null; } };
    const external = (url) => url && url !== 'Direct' && !/animalbattlestats\.com/.test(url);
    const isGuest = (name) => !name || name === 'Anonymous';

    // Who did it: a player (their profile) or a guest by their tag (tap to follow them).
    function whoHtml(event) {
        if (!isGuest(event.username)) return `<b>${link(`/profile/${encodeURIComponent(event.username)}`, event.username)}</b>`;
        return event.visitor
            ? `<button type="button" class="link-btn" data-ev-follow="${escapeHtml(event.visitor)}" title="Show only this visitor">Guest ${escapeHtml(event.visitor)}</button>`
            : '<b>Guest</b>';
    }

    // What happened, in words: "landed on Cassowary from google.com".
    function whatHtml(event) {
        const d = event.details || {};
        const page = event.pageLabel ? link(event.pageUrl, event.pageLabel) : '';
        switch (event.eventType) {
            case 'site_visit': {
                if (Number(d.pages) > 1) return `opened ${page} <small>· page ${d.pages}</small>`;
                const from = external(event.referrer) ? ` <small>from ${escapeHtml(hostOf(event.referrer) || event.referrer)}</small>` : '';
                const back = Number(d.visitNumber) > 1 ? ` <span class="ev-tag">visit ${d.visitNumber}</span>` : Number(d.visitNumber) === 1 ? ' <span class="ev-tag">new</span>' : '';
                return `landed on ${page}${from}${back}`;
            }
            case 'site_leave': return `left${d.duration ? ` after ${escapeHtml(d.duration)}` : ''}${page ? ` from ${page}` : ''}${d.pages ? ` <small>· ${d.pages} pages</small>` : ''}`;
            case 'vote': return String(d.animal || '').includes(' vs ')
                ? `called <b>${escapeHtml(d.voteType || '?')}</b> in ${escapeHtml(d.animal)}`
                : `${d.voteType === 'up' ? 'upvoted' : 'downvoted'} ${escapeHtml(d.animal || 'an animal')}`;
            case 'vote_changed': return `changed their vote on ${escapeHtml(d.animal || 'an animal')}`;
            case 'vote_removed': return `removed their vote on ${escapeHtml(d.animal || 'an animal')}`;
            case 'fight': return `ran a fight: ${escapeHtml(d.animal1 || '?')} vs ${escapeHtml(d.animal2 || '?')}`;
            case 'comment': return `commented on ${escapeHtml(d.target || 'a page')} ${quote(d.content)}`;
            case 'comment_reply': return `replied to ${escapeHtml(d.replyTo || 'a comment')} on ${escapeHtml(d.target || 'a page')} ${quote(d.content)}`;
            case 'comment_upvote': return `upvoted ${escapeHtml(d.commentAuthor || 'a')}'s comment on ${escapeHtml(d.target || 'a page')}`;
            case 'comment_downvote': return `downvoted ${escapeHtml(d.commentAuthor || 'a')}'s comment on ${escapeHtml(d.target || 'a page')}`;
            case 'comment_deleted': return `deleted a comment on ${escapeHtml(d.target || 'a page')}`;
            case 'chat_message': return `in the arena: ${quote(d.content)}`;
            case 'chat_reply': return `replied in the arena: ${quote(d.content)}`;
            case 'tournament_complete': return `finished a ${d.bracketSize || '?'}-animal tournament, won by <b>${escapeHtml(d.champion || '?')}</b>`;
            case 'tournament_quit': return `quit a tournament at ${d.completedMatches || 0}/${d.totalMatches || 0}`;
            case 'level_up': return `reached level ${d.level || '?'}`;
            case 'card_collected': return `collected the <b>${escapeHtml(d.card || '?')}</b> card <small>· ${escapeHtml({ starter: 'starter', daily: 'card of the day', call: 'fight call', tournament: 'tournament', shop: 'bought' }[d.from] || d.from || '')}</small>`;
            case 'prestige': return `prestiged to ${d.prestige || '?'}`;
            default: return escapeHtml((EVENT_NAMES[event.eventType] || event.eventType).toLowerCase());
        }
    }

    const ICONS = { card_collected: '🃏', site_visit: '👀', site_leave: '👋', login: '🔓', logout: '🔒', signup: '🎉', vote: '🗳️', vote_changed: '🔄', vote_removed: '🗑️', fight: '⚔️', comment: '💬', comment_reply: '↩️', comment_deleted: '🗑️', comment_upvote: '👍', comment_downvote: '👎', chat_message: '💬', chat_reply: '↩️', tournament_complete: '🏆', tournament_quit: '🚪', prestige: '✨', level_up: '⭐' };
    const VERBS = { login: 'logged in', logout: 'logged out', signup: 'signed up' };

    function detailRows(event) {
        const d = { ...(event.details || {}) };
        const rows = [];
        const add = (label, html) => { if (html) rows.push(`<dt>${label}</dt><dd>${html}</dd>`); };
        add('When', escapeHtml(new Date(event.occurredAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'medium' })));
        if (event.pageLabel) add('Page', `${link(event.pageUrl, event.pageLabel)} <small>${escapeHtml(event.pageKind || '')} · ${escapeHtml(`${event.page || ''}${event.search || ''}`)}</small>`);
        if (Array.isArray(event.path) && event.path.length) add('Their visit', event.path.map(escapeHtml).join(' → '));
        if (d.lastVisitAt) add('Last visit', `${escapeHtml(ago(d.lastVisitAt))}${d.visitNumber ? ` · this is visit ${d.visitNumber}` : ''}`);
        if (external(event.referrer)) add('Came from', link(event.referrer, event.referrer));
        if (!isGuest(event.username)) add('Player', `${link(`/profile/${encodeURIComponent(event.username)}`, event.username)} · <button type="button" class="link-btn" data-ev-player="${escapeHtml(event.username)}">only their events</button>`);
        if (event.visitor) add('Visitor', `Guest ${escapeHtml(event.visitor)} · <button type="button" class="link-btn" data-ev-follow="${escapeHtml(event.visitor)}">only this visitor</button>`);
        add('Where', escapeHtml([event.location?.city, event.location?.region, countryName(event.location?.country)].filter((part) => part && part !== 'Unknown').join(', ')));
        add('Device', escapeHtml([event.device, event.browser, event.os, event.screenSize, event.language].filter(Boolean).join(' · ')));
        const delivery = event.discordDelivery;
        if (delivery?.status) add('Discord', escapeHtml([delivery.status === 'sent' ? 'posted' : delivery.status, delivery.attempts > 1 ? `${delivery.attempts} tries` : '', delivery.lastError || ''].filter(Boolean).join(' · ')));
        else add('Discord', 'not posted (Settings)');
        ['pages', 'visitNumber', 'lastVisitAt', 'duration', 'seconds'].forEach((key) => delete d[key]);
        for (const [key, value] of Object.entries(d)) {
            if (value === null || value === undefined || value === '') continue;
            const text = Array.isArray(value) ? value.map((item) => (typeof item === 'object' ? Object.values(item).join(' beat ') : item)).join(', ') : typeof value === 'object' ? JSON.stringify(value) : String(value);
            add(escapeHtml(key.replace(/([A-Z])/g, ' $1').toLowerCase()), escapeHtml(text.slice(0, 600)));
        }
        return rows.join('');
    }

    function eventRow(event) {
        const status = event.discordDelivery?.status || '';
        const what = VERBS[event.eventType] || whatHtml(event);
        const where = [event.location?.city, event.location?.country].filter(Boolean).join(', ');
        const extra = [where, [event.device, event.browser].filter(Boolean).join(' '), event.eventType !== 'site_visit' && event.pageLabel ? `on ${event.pageLabel}` : ''].filter(Boolean).join(' · ');
        return `<li><details><summary>
            <span class="what"><span class="ev-type" aria-hidden="true">${ICONS[event.eventType] || '•'}</span>${whoHtml(event)} ${what}</span>
            <span class="when">${status ? `<span class="dstat ${escapeHtml(status)}" title="Discord">${status === 'sent' ? 'posted' : escapeHtml(status)}</span>` : ''}<small>${ago(event.occurredAt)}</small></span>
            <small>${escapeHtml(extra)}</small>
        </summary><dl class="ev-more">${detailRows(event)}</dl></details></li>`;
    }

    async function loadEventPage(query) {
        const params = new URLSearchParams({ action: 'admin-analytics', limit: '40' });
        for (const [key, value] of Object.entries(query)) if (value) params.set(key, value);
        const body = await getJson(`/api/community?${params}`);
        const events = body.data?.events || [];
        return { rows: events.map(eventRow).join(''), next: body.data?.nextCursor || null, ids: events.filter((event) => event.discordDelivery?.status === 'failed').map((event) => event.id) };
    }

    let failedIds = [];
    async function loadEvents(fresh) {
        if (!isOwner()) return;
        if (fresh) { cursor = null; failedIds = []; eventList.innerHTML = '<li class="muted small">Loading events…</li>'; }
        const form = new FormData(filters);
        const type = String(form.get('eventType') || '');
        $('[data-ev-visitor]').hidden = !visitorFilter;
        $('[data-ev-visitor-name]').textContent = visitorFilter ? `Guest ${visitorFilter}` : '';
        try {
            const page = await loadEventPage({
                eventType: type === '-views' ? '' : type,
                hideViews: type === '-views' ? '1' : '',
                deliveryStatus: form.get('deliveryStatus'),
                user: String(form.get('user') || '').trim(),
                page: String(form.get('page') || '').trim(),
                visitor: visitorFilter,
                cursor
            });
            if (fresh) eventList.innerHTML = '';
            eventList.insertAdjacentHTML('beforeend', page.rows || (fresh ? '<li class="muted small">No events match.</li>' : ''));
            cursor = page.next;
            failedIds = failedIds.concat(page.ids);
            $('[data-ev-more]').hidden = !cursor;
            $('[data-ev-retry]').hidden = !failedIds.length;
        } catch {
            eventList.innerHTML = '<li class="muted small">Events are unavailable right now.</li>';
        }
    }
    let filterTimer = 0;
    filters.addEventListener('input', () => { clearTimeout(filterTimer); filterTimer = setTimeout(() => loadEvents(true), 300); });
    filters.addEventListener('submit', (event) => event.preventDefault());
    $('[data-ev-more]').addEventListener('click', () => loadEvents(false));
    $('[data-ev-retry]').addEventListener('click', async () => {
        const result = await postJson('/api/community?action=admin-retry-discord', { ids: failedIds.slice(0, 50) });
        toast(result.ok ? 'Retrying those Discord posts' : 'Could not retry right now');
        if (result.ok) setTimeout(() => loadEvents(true), 1500);
    });
    $('[data-ev-visitor-clear]').addEventListener('click', () => { visitorFilter = null; loadEvents(true); });

    // Following someone: a guest's tag or a player's name shows only their events.
    function follow({ visitor = null, player = null }) {
        visitorFilter = visitor;
        filters.elements.user.value = player || '';
        filters.elements.page.value = '';
        filters.elements.eventType.value = '';
        showOwner('stream');
    }
    $('[data-ip="events"]').addEventListener('click', (event) => {
        const guest = event.target.closest('[data-ev-follow]');
        const player = event.target.closest('[data-ev-player]');
        if (guest) { event.preventDefault(); follow({ visitor: guest.dataset.evFollow }); }
        if (player) { event.preventDefault(); follow({ player: player.dataset.evPlayer }); }
    });

    async function postJson(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: { ...headers(), 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).catch(() => null);
        const json = response ? await response.json().catch(() => ({})) : {};
        return { ok: Boolean(response?.ok), body: json };
    }

    // Live: who is on which page now, the last day in numbers, top pages and sources.
    async function loadLive() {
        if (!isOwner()) return;
        try {
            const { data } = await getJson('/api/community?action=admin-overview');
            const online = data.online || [];
            set('[data-ev-online-n]', online.length ? `${fmt(online.length)} now` : '');
            $('[data-ev-online]').innerHTML = online.length
                ? online.map((row) => `<li><span><span class="dot"></span><b>${escapeHtml(row.who)}</b>${row.untracked ? '<span class="ev-tag">not tracked</span>' : ''}<br />${row.pageLabel ? link(row.pageUrl, row.pageLabel) : '<small>somewhere</small>'}</span><small>${ago(row.lastSeen)}</small></li>`).join('')
                : '<li class="muted small">Nobody right now.</li>';
            const t = data.today || {};
            const tiles = [['Page views', t.pageViews], ['Visits', t.visits], ['Visitors', t.visitors], ['Sign-ups', t.signups], ['Logins', t.logins], ['Fights', t.fights], ['Votes', t.votes], ['Comments', t.comments], ['Arena chat', t.chat], ['Tournaments', t.tournaments]];
            $('[data-ev-today]').innerHTML = tiles.map(([label, value]) => `<div><b>${compact(value)}</b><small>${label}</small></div>`).join('');
            $('[data-ev-pages]').innerHTML = bars((data.topPages || []).map((row) => ({ label: `${link(row.url, row.label)} <small>${escapeHtml(row.kind)}</small>`, value: row.views, note: `${fmt(row.visitors)} visitors` })), { empty: 'No page views today.' });
            $('[data-ev-refs]').innerHTML = bars((data.referrers || []).map((row) => ({ label: escapeHtml(row.host), value: row.count })), { empty: 'Everyone came straight in this week.' });
            $('[data-ev-players]').innerHTML = (data.players || []).length
                ? data.players.map((row) => `<li><span><button type="button" class="link-btn" data-ev-player="${escapeHtml(row.username)}">${escapeHtml(row.username)}</button></span><small>${fmt(row.events)} events · ${ago(row.last)}</small></li>`).join('')
                : '<li class="muted small">No signed-in players today.</li>';
            const discord = data.discord || {};
            $('[data-ev-discord]').textContent = discord.failed || discord.pending
                ? `Discord: ${fmt(discord.failed)} failed, ${fmt(discord.pending)} waiting. Filter Events by "Failed" to retry them.`
                : 'Discord: every post went through.';
        } catch {
            $('[data-ev-online]').innerHTML = '<li class="muted small">Live numbers are unavailable right now.</li>';
        }
    }

    // Settings: accounts left out, this browser, and what goes to Discord.
    const deviceBox = $('[data-ev-device]');
    function paintSettings(data) {
        $('[data-ev-ignored]').innerHTML = (data.ignored || []).length
            ? data.ignored.map((row) => `<li><span><b>${escapeHtml(row.username)}</b><br /><small>${fmt(row.events)} stored events${row.addedAt ? ` · since ${escapeHtml(day(row.addedAt))}` : ''}</small></span><span class="acts">${row.events ? `<button type="button" class="btn btn-sm btn-danger" data-ev-purge="${escapeHtml(row.username)}" data-n="${row.events}">Delete their events</button>` : ''}<button type="button" class="btn btn-sm" data-ev-unignore="${escapeHtml(row.username)}">Track again</button></span></li>`).join('')
            : '<li class="muted small">Every account is tracked.</li>';
        const form = $('[data-ev-discord-form]');
        const mode = data.discord?.pageViews || 'all';
        for (const radio of form.querySelectorAll('[name="pageViews"]')) radio.checked = radio.value === mode;
        const off = new Set(data.discord?.off || []);
        $('[data-ev-groups]').innerHTML = (data.groups || []).map((group) => `<fieldset><legend>${escapeHtml(group.label)}</legend>${group.types.map(([type, label]) => `<label class="ev-check"><input type="checkbox" name="post" value="${escapeHtml(type)}"${off.has(type) ? '' : ' checked'} /> <span>${escapeHtml(label)}</span></label>`).join('')}</fieldset>`).join('');
    }
    async function loadSettings() {
        if (!isOwner()) return;
        deviceBox.checked = deviceUntracked();
        try {
            const body = await getJson('/api/community?action=admin-settings');
            paintSettings(body.data || {});
        } catch {
            $('[data-ev-ignored]').innerHTML = '<li class="muted small">Settings are unavailable right now.</li>';
        }
    }
    async function changeSettings(change) {
        const result = await postJson('/api/community?action=admin-settings', change);
        if (!result.ok) { toast(result.body?.error || 'Could not save that'); return false; }
        paintSettings(result.body.data || {});
        if (result.body.data?.message) toast(result.body.data.message);
        return true;
    }
    $('[data-ev-ignore]').addEventListener('submit', async (event) => {
        event.preventDefault();
        const input = event.currentTarget.elements.username;
        if (await changeSettings({ op: 'ignore', username: input.value.trim() })) input.value = '';
    });
    $('[data-ev-ignored]').addEventListener('click', async (event) => {
        const purge = event.target.closest('[data-ev-purge]');
        const unignore = event.target.closest('[data-ev-unignore]');
        if (purge) {
            const name = purge.dataset.evPurge;
            if (!window.confirm(`Delete all ${fmt(purge.dataset.n)} stored events from ${name}? This cannot be undone. The site's numbers and the globe drop them too.`)) return;
            purge.disabled = true;
            await changeSettings({ op: 'purge', username: name });
        }
        if (unignore) await changeSettings({ op: 'unignore', username: unignore.dataset.evUnignore });
    });
    deviceBox.addEventListener('change', () => {
        setDeviceUntracked(deviceBox.checked);
        toast(deviceBox.checked ? 'This browser is no longer tracked' : 'This browser is tracked again');
    });
    $('[data-ev-discord-form]').addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const posted = new Set([...form.querySelectorAll('[name="post"]:checked')].map((box) => box.value));
        const off = [...form.querySelectorAll('[name="post"]')].map((box) => box.value).filter((type) => !posted.has(type));
        await changeSettings({ op: 'discord', discord: { pageViews: form.elements.pageViews.value || 'all', off } });
    });

    function showOwner(view) {
        ownerView = view;
        $$('[data-ev-view]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.evView === view)));
        $$('[data-ev-pane]').forEach((pane) => { pane.hidden = pane.dataset.evPane !== view; });
        clearInterval(liveTimer);
        if (view === 'live') { loadLive(); liveTimer = setInterval(() => { if (showing === 'events' && ownerView === 'live' && !document.hidden && !root.hidden) loadLive(); }, 30000); }
        if (view === 'stream') loadEvents(true);
        if (view === 'settings') loadSettings();
    }
    $$('[data-ev-view]').forEach((button) => button.addEventListener('click', () => showOwner(button.dataset.evView)));
    function openOwnerTools() { showOwner(ownerView); }

    // ------------------------------------------------------------ refresh while open
    let timers = [];
    function start() {
        stop();
        loadPresence();
        loadNumbers();
        loadGlobe();
        timers = [setInterval(loadPresence, 30000), setInterval(() => { loadNumbers(); loadGlobe(); }, 60000)];
    }
    function stop() {
        timers.forEach(clearInterval);
        timers = [];
    }
    document.addEventListener('visibilitychange', () => {
        if (root.hidden) return;
        if (document.hidden) stop();
        else start();
    });
    root.statsApi = { start, stop, showing: () => showing };
    return root.statsApi;
}
