// The Roblox game page: trailer/screenshot stage, live game numbers and
// leaderboards (from /api/community?action=roblox), and the Connect Roblox
// button, which depends on whether Roblox sign-in is configured and who is here.
import { escapeHtml, toast } from './site.js';

const root = document.querySelector('[data-rbx]');
const stage = root.querySelector('[data-stage]');
const thumbs = root.querySelector('[data-thumbs]');
const trailerId = root.dataset.trailer || null;
const PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>';
const compact = (value) => Number(value || 0).toLocaleString('en-US', { notation: value >= 100000 ? 'compact' : 'standard', maximumFractionDigits: 1 });

// ---------------------------------------------------------------- stage

// YouTube has no maxres poster for some uploads; fall back to the always-present one.
function posterFallback(img) {
    img.addEventListener('error', () => {
        if (img.src.includes('/maxresdefault.jpg')) img.src = img.src.replace('/maxresdefault.jpg', '/hqdefault.jpg');
    }, { once: true });
}
root.querySelectorAll('[data-poster]').forEach(posterFallback);

function showTrailerPoster() {
    const poster = thumbs.querySelector('[data-kind="video"] img')?.getAttribute('src');
    stage.innerHTML = `<button class="stage-video" type="button" data-play-trailer aria-label="Play the official trailer">
        <img src="${escapeHtml(poster)}" alt="" width="1280" height="720">
        <span class="play-disc">${PLAY_SVG}</span>
        <span class="stage-label"><b>Official trailer</b></span></button>`;
}

function playTrailer() {
    // Privacy-enhanced embed, loaded only when the visitor asks for it.
    stage.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(trailerId)}?autoplay=1&rel=0&playsinline=1" title="Animal Battle Stats official trailer" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
}

function showImage(src, alt) {
    stage.innerHTML = `<img class="stage-img" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="1280" height="720">`;
}

function select(thumb) {
    thumbs.querySelectorAll('button.thumb').forEach((node) => node.setAttribute('aria-pressed', String(node === thumb)));
    if (thumb.dataset.kind === 'video') showTrailerPoster();
    else showImage(thumb.dataset.src, thumb.dataset.alt || '');
}

stage.addEventListener('click', (event) => {
    if (trailerId && event.target.closest('[data-play-trailer]')) playTrailer();
});
thumbs.addEventListener('click', (event) => {
    const thumb = event.target.closest('button.thumb');
    if (thumb && thumb.getAttribute('aria-pressed') !== 'true') select(thumb);
});

// ---------------------------------------------------------------- live game data

function paintLive(game) {
    const box = root.querySelector('[data-live-stats]');
    box.querySelector('[data-stat="playing"]').textContent = compact(game.playing);
    box.querySelector('[data-stat="visits"]').textContent = compact(game.visits);
    box.querySelector('[data-stat="favorites"]').textContent = compact(game.favorites);
    box.querySelector('[data-stat="likes"]').textContent = game.likeRatio != null ? `${Math.round(game.likeRatio * 100)}%` : compact(game.upVotes);
    box.hidden = false;
    if (game.creator) root.querySelector('[data-creator]').textContent = ` · By ${game.creator}`;
    if (game.icon) {
        const icon = root.querySelector('[data-game-icon]');
        icon.src = game.icon;
        icon.classList.add('is-roblox');
    }
}

// The game's own Roblox screenshots stand in until the site has its own.
function paintRobloxShots(urls) {
    if (Number(root.dataset.shots) > 0 || !urls.length) return;
    const tiles = urls.slice(0, 4 - (trailerId ? 1 : 0)).map((url, index) => `
        <button class="thumb" type="button" data-kind="image" data-src="${escapeHtml(url)}" data-alt="Animal Battle Stats on Roblox" aria-pressed="false" aria-label="Screenshot ${index + 1}">
            <img src="${escapeHtml(url)}" alt="" loading="lazy" width="320" height="180"></button>`);
    thumbs.querySelectorAll('[data-soon]').forEach((node) => node.remove());
    thumbs.insertAdjacentHTML('beforeend', tiles.join(''));
    if (!trailerId) select(thumbs.querySelector('button.thumb'));
}

function paintBoards(boards) {
    for (const board of boards) {
        const list = root.querySelector(`[data-board="${board.id}"] ol`);
        if (!list || !board.top?.length) continue;
        list.innerHTML = board.top.slice(0, 5).map((entry) => `<li><span class="lb-rank">${Number(entry.rank) || ''}</span><span class="lb-name">${escapeHtml(entry.name)}</span><b>${compact(entry.value)}</b></li>`).join('');
    }
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
    connect.dataset.state = state;
    button.removeAttribute('aria-disabled');
    if (state === 'linked') {
        const name = user.roblox.displayName || user.roblox.username;
        button.href = '/profile?tab=roblox';
        label.textContent = 'View your profile';
        note.textContent = `Connected as ${name}${user.roblox.username && user.roblox.username !== name ? ` (@${user.roblox.username})` : ''}.`;
    } else if (state === 'off') {
        button.removeAttribute('href');
        button.setAttribute('aria-disabled', 'true');
        label.textContent = 'Opens at launch';
        note.textContent = 'Roblox sign-in switches on with the game.';
    } else if (state === 'user') {
        button.href = '/api/auth?action=link-roblox&returnTo=%2Froblox';
        label.textContent = 'Connect Roblox';
        note.textContent = `Links to ${user.displayName || user.username}, the account you are signed in to.`;
    } else {
        button.href = '/api/auth?action=roblox-start&returnTo=%2Froblox';
        label.textContent = 'Continue with Roblox';
        note.innerHTML = 'Already have an account? <a href="/login?returnTo=%2Froblox">Log in</a> first to connect it.';
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
Promise.all([providers, who]).then(([enabled, user]) => {
    if (user?.robloxLinked && user.roblox) paintConnect('linked', user);
    else if (!enabled) paintConnect('off');
    else paintConnect(user ? 'user' : 'guest', user);
});

// Back from Roblox: say how it went, then tidy the address bar.
const params = new URLSearchParams(location.search);
if (params.get('roblox_linked') === '1') toast('Roblox account connected');
else if (params.get('roblox_error')) toast(params.get('message') || 'Roblox sign-in failed. Please try again.');
if (params.has('roblox_linked') || params.has('roblox_error')) history.replaceState(null, '', location.pathname + location.hash);
