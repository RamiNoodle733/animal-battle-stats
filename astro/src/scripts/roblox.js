// The Roblox game screen: the stage tabs (trailer and screenshots, gameplay clips,
// codes, leaderboards, questions), live game numbers and leaderboards (from
// /api/community?action=roblox), and the Roblox account row, shown once Roblox
// sign-in is configured.
import { escapeHtml, toast } from './site.js';

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
        paintLive(data.game);
        paintRobloxShots(data.game.thumbnails || []);
        if (data.leaderboards?.length) paintBoards(data.leaderboards);
    })
    .catch(() => {});

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
    } else if (state === 'user') {
        button.href = '/api/auth?action=link-roblox&returnTo=%2Froblox';
        label.textContent = 'Connect';
        note.textContent = `Link it to ${user.displayName || user.username} for your in-game stats`;
    } else {
        button.href = '/api/auth?action=roblox-start&returnTo=%2Froblox';
        label.textContent = 'Sign in';
        note.innerHTML = 'Sign in with Roblox, or <a href="/login?returnTo=%2Froblox">log in</a> first';
    }
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
