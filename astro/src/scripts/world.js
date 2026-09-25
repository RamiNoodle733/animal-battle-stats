// Community world map: a dotted globe of where visitors come from (anonymous,
// city-level aggregates from /api/community?action=globe), with totals, top
// countries and a 30-day activity strip. Drag to spin; hover or tap a light.
import { escapeHtml } from './site.js';

const RAD = Math.PI / 180;
const DAY = 24 * 60 * 60 * 1000;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt = (value) => Number(value || 0).toLocaleString('en-US');

let regionNames = null;
try { regionNames = new Intl.DisplayNames(['en'], { type: 'region' }); } catch { regionNames = null; }

function countryOf(point) {
    const raw = String(point.country || '').trim();
    if (/^[A-Z]{2}$/.test(raw)) {
        let name = raw;
        try { name = regionNames?.of(raw) || raw; } catch { name = raw; }
        const flag = String.fromCodePoint(...[...raw].map((char) => 0x1f1e6 + char.charCodeAt(0) - 65));
        return { key: raw, name, flag };
    }
    return raw ? { key: raw.toLowerCase(), name: raw, flag: '🌐' } : null;
}

function ago(value) {
    const ms = Date.now() - new Date(value).getTime();
    if (!Number.isFinite(ms)) return '';
    if (ms < DAY) return 'today';
    const days = Math.round(ms / DAY);
    if (days < 30) return `${days}d ago`;
    const months = Math.round(days / 30);
    return months < 12 ? `${months}mo ago` : `${Math.round(months / 12)}y ago`;
}

export function mountWorld(root) {
    if (root.dataset.mounted) return;
    root.dataset.mounted = '1';
    const canvas = root.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const tip = root.querySelector('[data-w-tip]');
    const stage = canvas.parentElement;

    let land = [];          // [lat, lon] in radians, pairs flattened
    let points = [];        // { lat, lon, r, color, data }
    let yaw = -95 * RAD;    // longitude facing the viewer
    let pitch = 22 * RAD;   // tilt: positive shows more of the north
    let velocity = reduced ? 0 : 0.0016;
    let dragging = false;
    let last = null;
    let visible = false;
    let frame = 0;
    let size = 0;
    let dpr = 1;
    let hover = null;

    function resize() {
        const box = stage.getBoundingClientRect();
        dpr = Math.min(2, window.devicePixelRatio || 1);
        size = Math.max(160, Math.floor(Math.min(box.width, box.height)));
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
    }

    // Orthographic projection around (yaw, pitch). Returns null behind the globe.
    function project(lat, lon, cx, cy, radius) {
        const cosLat = Math.cos(lat);
        const dLon = lon - yaw;
        const cosC = Math.sin(pitch) * Math.sin(lat) + Math.cos(pitch) * cosLat * Math.cos(dLon);
        if (cosC <= 0) return null;
        const x = cosLat * Math.sin(dLon);
        const y = Math.cos(pitch) * Math.sin(lat) - Math.sin(pitch) * cosLat * Math.cos(dLon);
        return { x: cx + radius * x, y: cy - radius * y, depth: cosC };
    }

    function draw(time) {
        const w = canvas.width;
        const cx = w / 2;
        const cy = w / 2;
        const radius = w * 0.44;
        ctx.clearRect(0, 0, w, w);

        // Atmosphere glow and ocean.
        const glow = ctx.createRadialGradient(cx, cy, radius * 0.92, cx, cy, radius * 1.16);
        glow.addColorStop(0, 'rgba(0, 212, 255, 0.28)');
        glow.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 1.16, 0, Math.PI * 2);
        ctx.fill();
        const ocean = ctx.createRadialGradient(cx - radius * 0.35, cy - radius * 0.4, radius * 0.1, cx, cy, radius);
        ocean.addColorStop(0, '#16275a');
        ocean.addColorStop(1, '#060b1f');
        ctx.fillStyle = ocean;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        // Land as a dot matrix, dimmer toward the edge.
        const dot = Math.max(1.4, radius * 0.0105);
        for (let i = 0; i < land.length; i += 2) {
            const p = project(land[i], land[i + 1], cx, cy, radius);
            if (!p) continue;
            ctx.fillStyle = `rgba(${110 + 70 * p.depth | 0}, ${130 + 70 * p.depth | 0}, 255, ${0.2 + 0.55 * p.depth})`;
            ctx.fillRect(p.x - dot / 2, p.y - dot / 2, dot, dot);
        }

        // Visitor lights, biggest first so small ones stay visible on top.
        const pulse = reduced ? 0.5 : (Math.sin(time / 420) + 1) / 2;
        const shown = [];
        for (const point of points) {
            const p = project(point.lat, point.lon, cx, cy, radius);
            if (!p) continue;
            const r = point.r * dpr * (0.55 + 0.45 * p.depth);
            const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.6);
            halo.addColorStop(0, `${point.color}cc`);
            halo.addColorStop(1, `${point.color}00`);
            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(p.x, p.y, r * 2.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = point.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(1.2 * dpr, r * 0.55), 0, Math.PI * 2);
            ctx.fill();
            if (point.fresh) {
                ctx.strokeStyle = `rgba(108, 231, 255, ${0.65 * (1 - pulse)})`;
                ctx.lineWidth = 1.5 * dpr;
                ctx.beginPath();
                ctx.arc(p.x, p.y, r * (1 + pulse * 1.8), 0, Math.PI * 2);
                ctx.stroke();
            }
            shown.push({ point, x: p.x / dpr, y: p.y / dpr, r: Math.max(6, r / dpr) });
        }
        root.shown = shown;
        if (hover) placeTip(hover);
    }

    function loop(time) {
        frame = 0;
        if (!visible || document.hidden) return;
        if (!dragging) {
            yaw += velocity;
            if (Math.abs(velocity) > 0.0016) velocity *= 0.95;
            else if (!reduced) velocity = velocity < 0 ? -0.0016 : 0.0016;
        }
        draw(time);
        frame = requestAnimationFrame(loop);
    }
    function start() {
        if (!frame && visible && !document.hidden) frame = requestAnimationFrame(loop);
    }

    function placeTip(entry) {
        const { point } = entry;
        const d = point.data;
        const hit = (root.shown || []).find((item) => item.point === point);
        if (!hit) { tip.hidden = true; return; }
        tip.innerHTML = `<b>${point.flag} ${escapeHtml(d.label || [d.city, d.region, d.country].filter(Boolean).join(', '))}</b><span>${fmt(d.uniqueVisitors)} visitors · ${fmt(d.totalVisits)} visits</span><small>Last seen ${ago(d.lastSeen)}</small>`;
        tip.hidden = false;
        const box = stage.getBoundingClientRect();
        const left = Math.min(box.width - tip.offsetWidth - 4, Math.max(4, hit.x + 12));
        const top = Math.max(4, hit.y - tip.offsetHeight - 10);
        tip.style.transform = `translate(${left}px, ${top}px)`;
    }

    function pick(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        let best = null;
        let bestDistance = Infinity;
        for (const item of root.shown || []) {
            const distance = Math.hypot(item.x - x, item.y - y);
            if (distance < Math.max(10, item.r) && distance < bestDistance) {
                best = item;
                bestDistance = distance;
            }
        }
        hover = best;
        if (best) placeTip(best);
        else tip.hidden = true;
    }

    canvas.addEventListener('pointerdown', (event) => {
        dragging = true;
        last = { x: event.clientX, y: event.clientY, moved: 0 };
        canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener('pointermove', (event) => {
        if (!dragging) {
            if (event.pointerType === 'mouse') pick(event);
            return;
        }
        const dx = event.clientX - last.x;
        const dy = event.clientY - last.y;
        last = { x: event.clientX, y: event.clientY, moved: last.moved + Math.abs(dx) + Math.abs(dy) };
        const scale = 1.8 / Math.max(160, size);
        yaw -= dx * scale;
        pitch = Math.max(-70 * RAD, Math.min(70 * RAD, pitch + dy * scale));
        velocity = -dx * scale * 0.9;
        if (reduced) draw(performance.now());
    });
    const release = (event) => {
        if (!dragging) return;
        dragging = false;
        if (last && last.moved < 6) pick(event);
        if (reduced) velocity = 0;
    };
    canvas.addEventListener('pointerup', release);
    canvas.addEventListener('pointercancel', release);
    canvas.addEventListener('pointerleave', () => {
        if (!dragging) { hover = null; tip.hidden = true; }
    });

    new ResizeObserver(() => { resize(); draw(performance.now()); }).observe(stage);
    new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
    }).observe(canvas);
    document.addEventListener('visibilitychange', start);
    resize();

    Promise.all([
        fetch('/data/land-dots.json').then((response) => (response.ok ? response.json() : { dots: [] })),
        fetch('/api/community?action=globe', { headers: { Accept: 'application/json' } }).then((response) => (response.ok ? response.json() : null))
    ]).then(([landData, globe]) => {
        const dots = landData.dots || [];
        land = new Float32Array(dots.length);
        for (let i = 0; i < dots.length; i += 1) land[i] = (dots[i] / 10) * RAD;
        const data = globe?.data;
        if (!data) {
            root.querySelector('[data-w-countries]').innerHTML = '<li class="muted small">Visitor map unavailable right now.</li>';
            draw(performance.now());
            return;
        }
        const now = Date.now();
        const raw = (data.points || []).filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lng));
        points = raw
            .map((point) => {
                const seen = new Date(point.lastSeen).getTime();
                const age = now - seen;
                const country = countryOf(point);
                return {
                    lat: point.lat * RAD,
                    lon: point.lng * RAD,
                    r: Math.min(13, 2.2 + Math.sqrt(point.uniqueVisitors || point.totalVisits || 1) * 0.9),
                    color: age < DAY ? '#6ce7ff' : age < 7 * DAY ? '#ffd23f' : '#ff9a4d',
                    fresh: age < DAY,
                    flag: country?.flag || '🌐',
                    data: point
                };
            })
            .sort((a, b) => b.r - a.r);

        const countries = new Map();
        for (const point of raw) {
            const country = countryOf(point);
            if (!country) continue;
            const entry = countries.get(country.key) || { ...country, visitors: 0, places: 0 };
            entry.visitors += point.uniqueVisitors || 0;
            entry.places += 1;
            countries.set(country.key, entry);
        }
        // Face the country with the most visitors (visitor-weighted circular mean of its longitudes).
        const lead = [...countries.values()].sort((a, b) => b.visitors - a.visitors)[0];
        if (lead) {
            let sx = 0;
            let sy = 0;
            for (const point of raw) {
                if (countryOf(point)?.key !== lead.key) continue;
                const weight = point.uniqueVisitors || 1;
                sx += Math.cos(point.lng * RAD) * weight;
                sy += Math.sin(point.lng * RAD) * weight;
            }
            if (sx || sy) yaw = Math.atan2(sy, sx);
        }
        const summary = data.summary || {};
        const set = (key, value) => { const node = root.querySelector(`[data-w="${key}"]`); if (node) node.textContent = value; };
        set('visitors', fmt(summary.uniqueVisitors));
        set('visits', fmt(summary.totalVisits));
        set('places', fmt(raw.length));
        set('countries', fmt(countries.size));
        const ranked = [...countries.values()].sort((a, b) => b.visitors - a.visitors).slice(0, 6);
        const maxVisitors = ranked[0]?.visitors || 1;
        root.querySelector('[data-w-countries]').innerHTML = ranked.map((country) => `
            <li><span class="flag" aria-hidden="true">${country.flag}</span><span class="cn">${escapeHtml(country.name)}</span>
                <span class="cbar"><i style="width:${Math.max(4, Math.round((country.visitors / maxVisitors) * 100))}%"></i></span>
                <b>${fmt(country.visitors)}</b></li>`).join('') || '<li class="muted small">No locations yet.</li>';

        const trend = (data.trend || []).slice(-30);
        const maxEvents = Math.max(1, ...trend.map((day) => day.events || 0));
        root.querySelector('[data-w-trend]').innerHTML = trend.map((day) => {
            const label = new Date(`${day.day}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
            return `<i style="height:${Math.max(3, Math.round(((day.events || 0) / maxEvents) * 100))}%" title="${label}: ${fmt(day.events)} events, ${fmt(day.cohortSize)} visitors"></i>`;
        }).join('');
        const windows = data.windows || {};
        root.querySelector('[data-w-windows]').textContent = `${fmt(windows.last24h)} events today · ${fmt(windows.last7d)} this week · ${fmt(windows.last30d)} this month`;
        draw(performance.now());
        start();
    }).catch(() => {
        root.querySelector('[data-w-countries]').innerHTML = '<li class="muted small">Visitor map unavailable right now.</li>';
    });
}
