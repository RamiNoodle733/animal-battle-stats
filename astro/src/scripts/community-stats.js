// Community world stats: who is online, the all-time site numbers, the visitor
// globe, activity over time, places (with a per-place breakdown), top pages and
// actions, and for the site owner the raw event stream with Discord delivery.
// Data: /api/community?action=stats|presence|globe|globe-point|admin-analytics.
import { escapeHtml, toast } from './site.js';
import { mountGlobe } from './world.js';

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
        if (name === 'events') loadEvents(true);
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

    // ------------------------------------------------------------ owner: event stream
    const eventList = $('[data-ev-list]');
    const filters = $('[data-ev-filters]');
    let cursor = null;

    function eventRow(event) {
        const where = [event.location?.city, event.location?.region, event.location?.country].filter(Boolean).join(', ');
        const extra = [pageName(event.page), where, [event.device, event.browser].filter(Boolean).join(' '), event.referrer && !/animalbattlestats\.com/.test(event.referrer) ? `from ${event.referrer}` : ''].filter(Boolean).join(' · ');
        const status = event.discordDelivery?.status || '';
        return `<li><span><b>${escapeHtml(event.username || 'Anonymous')}</b> ${escapeHtml(EVENT_NAMES[event.eventType] || event.eventType)}</span><span>${status ? `<span class="dstat ${escapeHtml(status)}" title="Discord">${escapeHtml(status)}</span> ` : ''}<small>${ago(event.occurredAt)}</small></span><small>${escapeHtml(extra)}</small></li>`;
    }

    async function loadEventPage(query) {
        const params = new URLSearchParams({ action: 'admin-analytics', limit: '40' });
        for (const [key, value] of Object.entries(query)) if (value) params.set(key, value);
        const body = await getJson(`/api/community?${params}`);
        const events = body.data?.events || [];
        return { rows: events.map(eventRow).join(''), next: body.data?.nextCursor || null, failed: events.some((event) => event.discordDelivery?.status === 'failed'), ids: events.filter((event) => event.discordDelivery?.status === 'failed').map((event) => event.id) };
    }

    let failedIds = [];
    async function loadEvents(fresh) {
        if (!isOwner()) return;
        if (fresh) { cursor = null; failedIds = []; eventList.innerHTML = '<li class="muted small">Loading events…</li>'; }
        const form = new FormData(filters);
        try {
            const page = await loadEventPage({ eventType: form.get('eventType'), deliveryStatus: form.get('deliveryStatus'), user: String(form.get('user') || '').trim(), cursor });
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
        const response = await fetch('/api/community?action=admin-retry-discord', { method: 'POST', credentials: 'same-origin', headers: { ...headers(), 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: failedIds.slice(0, 50) }) }).catch(() => null);
        toast(response?.ok ? 'Retrying those Discord posts' : 'Could not retry right now');
        if (response?.ok) setTimeout(() => loadEvents(true), 1500);
    });

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
