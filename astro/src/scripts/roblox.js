// The Roblox game screen: the stage tabs (trailer and screenshots, this week in
// the game, gameplay clips, codes, leaderboards, questions), live game numbers and
// leaderboards (from /api/community?action=roblox), and the Roblox account row,
// shown once Roblox sign-in is configured.
import { escapeHtml, toast } from './site.js';
import { loadGame, trainerLine } from './roblox-trainer.js';

const root = document.querySelector('[data-rbx]');
const stage = root.querySelector('[data-stage]');
const thumbs = root.querySelector('[data-thumbs]');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const compact = (value) => Number(value || 0).toLocaleString('en-US', { notation: value >= 100000 ? 'compact' : 'standard', maximumFractionDigits: 1 });

// Privacy-enhanced YouTube embed, loaded only when the visitor presses play.
function youtubeFrame(id, title) {
    return `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&playsinline=1" title="${escapeHtml(title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
}

// YouTube has no maxres poster for some uploads; fall back to the always-present one.
function posterFallback(img) {
    img.addEventListener('error', () => {
        if (img.src.includes('/maxresdefault.jpg')) img.src = img.src.replace('/maxresdefault.jpg', '/hqdefault.jpg');
    }, { once: true });
}
root.querySelectorAll('[data-poster]').forEach(posterFallback);

// ---------------------------------------------------------------- trailer stage

const trailer = { youtube: stage.dataset.youtube || null, src: stage.dataset.src || null };
const trailerPoster = stage.querySelector('.stage-video')?.outerHTML || '';

function playTrailer() {
    if (trailer.youtube) stage.innerHTML = youtubeFrame(trailer.youtube, 'Animal Battle Stats official trailer');
    else if (trailer.src) {
        stage.innerHTML = `<video src="${escapeHtml(trailer.src)}" controls autoplay playsinline></video>`;
    }
}

function showImage(src, alt) {
    stage.innerHTML = `<img class="stage-img" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="1280" height="720">`;
}

function select(thumb) {
    thumbs.querySelectorAll('button.thumb').forEach((node) => node.setAttribute('aria-pressed', String(node === thumb)));
    if (thumb.dataset.kind === 'video') {
        stage.innerHTML = trailerPoster;
        stage.querySelectorAll('img').forEach(posterFallback);
    } else showImage(thumb.dataset.src, thumb.dataset.alt || '');
}

stage.addEventListener('click', (event) => {
    if (event.target.closest('[data-play]')) playTrailer();
});
thumbs.addEventListener('click', (event) => {
    const thumb = event.target.closest('button.thumb');
    if (thumb && thumb.getAttribute('aria-pressed') !== 'true') select(thumb);
});

// ---------------------------------------------------------------- stage tabs

const tabs = [...root.querySelectorAll('[data-tab]')];
const panes = [...root.querySelectorAll('[data-pane]')];
// Players started in a pane stop when the player switches away from it.
const started = new Map();

function stopPane(pane) {
    pane.querySelectorAll('video').forEach((video) => video.pause());
    for (const [node, html] of started) {
        if (!pane.contains(node)) continue;
        node.outerHTML = html;
        started.delete(node);
    }
    if (pane.contains(stage) && stage.querySelector('iframe, video[controls]')) {
        stage.innerHTML = trailerPoster;
        stage.querySelectorAll('img').forEach(posterFallback);
    }
}

function showTab(id, { remember = true } = {}) {
    const tab = tabs.find((node) => node.dataset.tab === id && !node.hidden) || tabs[0];
    tabs.forEach((node) => node.setAttribute('aria-selected', String(node === tab)));
    for (const pane of panes) {
        const on = pane.dataset.pane === tab.dataset.tab;
        if (!on && !pane.hidden) stopPane(pane);
        pane.hidden = !on;
    }
    if (remember) history.replaceState(history.state, '', tab === tabs[0] ? location.pathname : `#${tab.dataset.tab}`);
}

root.querySelector('.rbx-tabs').addEventListener('click', (event) => {
    const tab = event.target.closest('[data-tab]');
    if (tab) showTab(tab.dataset.tab);
});
const wanted = location.hash.slice(1);
if (wanted && wanted !== 'boards') showTab(wanted, { remember: false });

// ---------------------------------------------------------------- gameplay clips

// Clips play muted on a loop while on screen, like a store page. With reduced
// motion they wait for the visitor instead.
const clips = [...root.querySelectorAll('video[data-autoplay]')];
if (reducedMotion) {
    clips.forEach((clip) => { clip.controls = true; });
} else if (clips.length && 'IntersectionObserver' in window) {
    const watcher = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) entry.target.play().catch(() => { entry.target.controls = true; });
            else entry.target.pause();
        }
    }, { threshold: 0.4 });
    clips.forEach((clip) => watcher.observe(clip));
}
root.addEventListener('click', (event) => {
    const button = event.target.closest('.clip-yt[data-youtube]');
    if (!button) return;
    const holder = button.parentElement;
    const html = button.outerHTML;
    button.outerHTML = youtubeFrame(button.dataset.youtube, button.getAttribute('aria-label') || 'Gameplay video');
    started.set(holder.querySelector('iframe'), html);
});

// ---------------------------------------------------------------- live game data

function paintLive(game) {
    const box = root.querySelector('[data-live-stats]');
    box.querySelector('[data-stat="playing"]').textContent = compact(game.playing);
    box.querySelector('[data-stat="visits"]').textContent = compact(game.visits);
    box.querySelector('[data-stat="favorites"]').textContent = compact(game.favorites);
    box.querySelector('[data-stat="likes"]').textContent = game.likeRatio != null ? `${Math.round(game.likeRatio * 100)}%` : compact(game.upVotes);
    box.hidden = false;
    if (game.creator) root.querySelector('[data-creator]').textContent = `· By ${game.creator}`;
    if (game.icon) {
        const icon = root.querySelector('[data-game-icon]');
        icon.src = game.icon;
        icon.classList.add('is-roblox');
    }
}

// Built while the game was still private: Roblox now shows it, so the page goes live without
// waiting for the next build.
function goLive(game) {
    const status = root.querySelector('.rbx-status');
    if (!status || status.classList.contains('is-live')) return;
    status.classList.add('is-live');
    status.lastChild.textContent = 'Live on Roblox';
    const soon = root.querySelector('.rbx-cta [aria-disabled="true"]');
    if (soon && Number(game.placeId) > 0) {
        // Same attributes (the page's scoped-style one included), as a link.
        const play = document.createElement('a');
        for (const { name, value } of soon.attributes) if (name !== 'aria-disabled') play.setAttribute(name, value);
        Object.assign(play, { href: `https://www.roblox.com/games/start?placeId=${encodeURIComponent(game.placeId)}&launchData=site`, rel: 'noopener', target: '_blank' });
        play.append(...[...soon.childNodes].filter((node) => node.nodeType === Node.ELEMENT_NODE), 'Play on Roblox');
        soon.replaceWith(play);
    }
    const news = [...root.querySelectorAll('.rbx-cta a')].find((link) => link.textContent.trim() === 'Get launch news');
    if (news) news.lastChild.textContent = 'Join the Discord';
}

// The game's own Roblox screenshots fill the row until the site has its own.
function paintRobloxShots(urls) {
    if (Number(root.dataset.shots) > 0 || !urls.length) return;
    const hasTrailer = Boolean(trailer.youtube || trailer.src);
    const tiles = urls.slice(0, hasTrailer ? 3 : 4).map((url, index) => `
        <button class="thumb" type="button" data-kind="image" data-src="${escapeHtml(url)}" data-alt="Animal Battle Stats on Roblox" aria-pressed="false" aria-label="Screenshot ${index + 1}">
            <img src="${escapeHtml(url)}" alt="" loading="lazy" width="320" height="180"></button>`);
    thumbs.insertAdjacentHTML('beforeend', tiles.join(''));
    thumbs.hidden = thumbs.querySelectorAll('button.thumb').length < 2;
    if (!hasTrailer) select(thumbs.querySelector('button.thumb'));
}

function paintBoards(boards) {
    let filled = 0;
    for (const board of boards) {
        const list = root.querySelector(`[data-board="${board.id}"] ol`);
        if (!list || !board.top?.length) continue;
        filled += 1;
        list.innerHTML = board.top.slice(0, 5).map((entry) => `<li><span class="lb-rank">${Number(entry.rank) || ''}</span><span class="lb-name">${escapeHtml(entry.name)}</span><b>${compact(entry.value)}</b></li>`).join('');
    }
    if (!filled) return;
    root.querySelector('[data-boards-tab]').hidden = false;
    if (location.hash === '#boards') showTab('boards', { remember: false });
}

fetch('/api/community?action=roblox', { headers: { Accept: 'application/json' } })
    .then((response) => (response.ok ? response.json() : null))
    .then((body) => {
        const data = body?.data;
        if (!data?.live || !data.game) return;
        goLive(data.game);
        paintLive(data.game);
        paintRobloxShots(data.game.thumbnails || []);
        if (data.leaderboards?.length) paintBoards(data.leaderboards);
    })
    .catch(() => {});

// ---------------------------------------------------------------- this week in the game
// The game's weekly rotation and timed events come from its shared clock (exported with its own
// code into /data/roblox-lite.json), so this is what every server is running right now.

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const weekPane = root.querySelector('[data-week]');

function countdown(seconds) {
    const s = Math.max(0, Math.round(seconds));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = String(s % 60).padStart(2, '0');
    return h ? `${h}h ${String(m).padStart(2, '0')}m` : `${m}:${sec}`;
}
function untilText(ms) {
    const minutes = Math.max(1, Math.round(ms / 60000));
    const d = Math.floor(minutes / 1440);
    const h = Math.floor((minutes % 1440) / 60);
    return d ? `${d}d ${h}h` : h ? `${h}h ${minutes % 60}m` : `${minutes}m`;
}

function paintEvents(game) {
    const t = Math.floor(Date.now() / 1000);
    const rows = game.schedule.events.map((event) => {
        const into = (((t - event.offset) % event.every) + event.every) % event.every;
        const on = into < event.length;
        return { ...event, on, left: on ? event.length - into : event.every - into };
    }).sort((a, b) => Number(b.on) - Number(a.on) || a.left - b.left);
    weekPane.querySelector('[data-wk-events]').innerHTML = rows.map((event) => `<li class="${event.on ? 'is-on' : ''}">
        <b>${escapeHtml(event.name)}</b>
        <em>${event.on ? `${countdown(event.left)} left` : `in ${countdown(event.left)}`}</em>
        <small>${event.on ? 'On now' : 'Next'} · ${escapeHtml(event.where)} · every ${Math.round(event.every / 60)} min</small>
    </li>`).join('');
}

async function paintWeek() {
    const game = await loadGame().catch(() => null);
    if (!game) {
        weekPane.querySelector('[data-wk-left]').textContent = 'The game\'s schedule is unavailable right now.';
        return;
    }
    const now = Date.now();
    const week = Math.floor(now / WEEK_MS);
    const row = game.schedule.weeks.find((item) => item.week === week);
    const rules = new Map(game.schedule.cupRules.map((rule) => [rule.id, rule]));
    if (row) {
        const cup = rules.get(row.cup);
        const family = game.familyBy.get(row.family);
        const isle = game.biomeBy.get(row.featured);
        const card = (key) => weekPane.querySelector(`[data-wk="${key}"]`);
        card('cup').style.setProperty('--wk', cup?.color || '#00d4ff');
        card('cup').querySelector('[data-wk-name]').textContent = cup?.name || '–';
        card('cup').querySelector('[data-wk-text]').textContent = `${cup?.blurb || ''} Seven floors: bronze at 3 wins, silver at 5, gold at 7.`;
        card('family').style.setProperty('--wk', family?.color || '#22c55e');
        card('family').querySelector('[data-wk-name]').textContent = family?.name || '–';
        card('family').querySelector('[data-wk-members]').innerHTML = game.animals
            .filter(([, , , , familyId]) => familyId === row.family)
            .slice(0, 12)
            .map(([slug, name, , , , thumb]) => (thumb ? `<a href="/stats/${encodeURIComponent(slug)}" title="${escapeHtml(name)}"><img src="${escapeHtml(thumb)}" alt="${escapeHtml(name)}" width="360" height="504" loading="lazy" /></a>` : ''))
            .join('');
        card('isle').style.setProperty('--wk', isle?.accent || '#ffc457');
        card('isle').querySelector('[data-wk-name]').textContent = isle?.name || '–';
        card('isle').querySelector('[data-wk-text]').textContent = `+${Math.round(((game.schedule.featuredTracks || 1.5) - 1) * 100)}% Tracks from battles there, better LEGEND rematch pay, and its ELITE comes out twice per rotation.${isle?.bossTitle ? ` Boss: the ${isle.bossTitle}.` : ''}`;
        weekPane.querySelector('[data-wk-left]').textContent = `New week in ${untilText((week + 1) * WEEK_MS - now)}.`;
    }
    weekPane.querySelector('[data-wk-next]').innerHTML = game.schedule.weeks
        .filter((item) => item.week > week)
        .slice(0, 4)
        .map((item) => `<li><span>${new Date(item.week * WEEK_MS).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })}</span><span>${escapeHtml(rules.get(item.cup)?.name || item.cup)}</span><span>${escapeHtml(game.familyBy.get(item.family)?.name || item.family)}</span><span>${escapeHtml(game.biomeBy.get(item.featured)?.name || item.featured)}</span></li>`)
        .join('');
    paintEvents(game);
    setInterval(() => { if (!weekPane.hidden) paintEvents(game); }, 1000);
}
paintWeek();

// ---------------------------------------------------------------- connect Roblox

const connect = root.querySelector('[data-connect]');
const button = connect.querySelector('[data-cn-btn]');
const label = connect.querySelector('[data-cn-label]');
const note = connect.querySelector('[data-cn-note]');

function paintConnect(state, user) {
    connect.hidden = false;
    connect.dataset.state = state;
    button.removeAttribute('aria-disabled');
    if (state === 'linked') {
        const name = user.roblox.displayName || user.roblox.username;
        button.href = '/profile?tab=roblox';
        label.textContent = 'Profile';
        note.textContent = `Connected as ${name}${user.roblox.username && user.roblox.username !== name ? ` (@${user.roblox.username})` : ''}`;
        paintTrainerLine();
    } else if (state === 'user') {
        button.href = '/api/auth?action=link-roblox&returnTo=%2Froblox';
        label.textContent = 'Connect';
        note.textContent = `Link it to ${user.displayName || user.username}: your game progress and animals come to the site`;
    } else {
        button.href = '/api/auth?action=roblox-start&returnTo=%2Froblox';
        label.textContent = 'Sign in';
        note.innerHTML = 'Sign in with Roblox, or <a href="/login?returnTo=%2Froblox">log in</a> first';
    }
}

// Linked: your trainer in one line (reading it also brings your game progress over).
async function paintTrainerLine() {
    const headers = { Accept: 'application/json' };
    if (window.ABS_TOKEN) headers.Authorization = `Bearer ${window.ABS_TOKEN}`;
    const body = await fetch('/api/auth?action=roblox-player', { credentials: 'same-origin', headers }).then((response) => (response.ok ? response.json() : null)).catch(() => null);
    const snap = body?.data?.game?.snapshot;
    if (!snap) return;
    const line = connect.querySelector('[data-cn-trainer]');
    line.textContent = trainerLine(snap);
    line.hidden = false;
}

const providers = fetch('/api/auth?action=providers', { headers: { Accept: 'application/json' } })
    .then((response) => (response.ok ? response.json() : null))
    .then((body) => Boolean(body?.data?.roblox))
    .catch(() => false);
const who = new Promise((resolve) => {
    if (window.ABS_AUTH === 'user') resolve(window.ABS_USER);
    else if (window.ABS_AUTH === 'guest') resolve(null);
    else {
        document.addEventListener('abs:user', () => resolve(window.ABS_USER), { once: true });
        document.addEventListener('abs:guest', () => resolve(null), { once: true });
    }
});
// The section stays hidden until Roblox sign-in is configured (or already linked).
Promise.all([providers, who]).then(([enabled, user]) => {
    if (user?.robloxLinked && user.roblox) paintConnect('linked', user);
    else if (enabled) paintConnect(user ? 'user' : 'guest', user);
});

// Codes: tap to copy.
root.addEventListener('click', (event) => {
    const button = event.target.closest('[data-copy]');
    if (!button) return;
    navigator.clipboard?.writeText(button.dataset.copy).then(() => {
        button.classList.add('copied');
        toast(`Copied ${button.dataset.copy}. Redeem it in the game under Settings, then Codes.`);
        setTimeout(() => button.classList.remove('copied'), 2500);
    }).catch(() => toast(button.dataset.copy));
});

// Back from Roblox: say how it went, then tidy the address bar.
const params = new URLSearchParams(location.search);
if (params.get('roblox_linked') === '1') toast('Roblox account connected');
else if (params.get('roblox_error')) toast(params.get('message') || 'Roblox sign-in failed. Please try again.');
if (params.has('roblox_linked') || params.has('roblox_error')) history.replaceState(null, '', location.pathname + location.hash);
