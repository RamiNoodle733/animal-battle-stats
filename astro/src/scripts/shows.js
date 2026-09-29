// ABS Originals pages (/shows, /shows/<show>, /shows/<show>/<episode>).
//
// Players load YouTube only when tapped. On an episode page the watch reward
// works like this: when playback starts, a signed-in player gets a signed
// ticket (/api/auth?action=watch-start); when the episode has played through,
// the ticket is traded for the reward (action=watch), which the server pays only
// if enough real time has passed and only once per episode. Progress shows for
// everyone: from the server for players, from this browser for guests.
import { authApi, showReward, toast } from './site.js';

const WATCHED_KEY = 'abs:watched';
const FOLLOWED_KEY = 'abs:followed';
const DONE_AT = 0.92;
const page = document.querySelector('[data-shows-page]');

function readList(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || '[]');
        return Array.isArray(value) ? value.filter((item) => typeof item === 'string') : [];
    } catch {
        return [];
    }
}
function writeList(key, values) {
    try { localStorage.setItem(key, JSON.stringify([...values])); } catch { /* storage blocked */ }
}

const state = {
    auth: window.ABS_AUTH || null,
    local: new Set(readList(WATCHED_KEY)),
    localFollows: new Set(readList(FOLLOWED_KEY)),
    server: new Set(),
    serverFollows: new Set()
};
const showOf = (id) => String(id).split('-')[0];
const watched = () => new Set([...state.local, ...state.server]);

function track(name, params = {}) {
    try { window.gtag?.('event', name, params); } catch { /* analytics blocked */ }
}

// ---------------------------------------------------------------- progress

// Episodes of each show in order, from the links on the page.
function episodeLinks() {
    const byShow = new Map();
    for (const link of document.querySelectorAll('[data-ep-card]')) {
        const id = link.dataset.epCard;
        const list = byShow.get(showOf(id)) || new Map();
        if (!list.has(id)) list.set(id, link.getAttribute('href'));
        byShow.set(showOf(id), list);
    }
    return byShow;
}

function paint() {
    if (!page) return;
    const seen = watched();
    const links = episodeLinks();
    for (const card of document.querySelectorAll('[data-ep-card]')) card.classList.toggle('is-watched', seen.has(card.dataset.epCard));

    const countFor = (slug) => [...seen].filter((id) => showOf(id) === slug).length;
    for (const box of document.querySelectorAll('[data-show-progress]')) {
        const total = Number(box.dataset.total) || 1;
        const count = Math.min(total, countFor(box.dataset.showProgress));
        box.querySelectorAll('[data-progress-count]').forEach((node) => { node.textContent = String(count); });
        const bar = box.querySelector('[data-progress-bar]');
        if (bar) bar.style.width = `${Math.round((count / total) * 100)}%`;
    }
    for (const node of document.querySelectorAll('[data-count-for]')) node.textContent = String(countFor(node.dataset.countFor));

    let resume = null;
    for (const button of document.querySelectorAll('[data-continue]')) {
        const list = [...(links.get(button.dataset.continue) || new Map()).entries()];
        if (!list.length) continue;
        const nextIndex = list.findIndex(([id]) => !seen.has(id));
        const label = button.querySelector('[data-continue-label]');
        if (nextIndex === -1) {
            button.href = list[0][1];
            if (label) label.textContent = 'Watch again';
        } else if (nextIndex > 0 || seen.size && list.some(([id]) => seen.has(id))) {
            button.href = list[nextIndex][1];
            if (label) label.textContent = `Continue: episode ${nextIndex + 1}`;
            resume ||= { href: list[nextIndex][1], label: `Continue: episode ${nextIndex + 1}` };
        }
    }
    const resumeButton = document.querySelector('[data-resume]');
    if (resumeButton && resume) {
        resumeButton.href = resume.href;
        const label = resumeButton.querySelector('[data-resume-label]');
        if (label) label.textContent = 'Continue watching';
    }

    // This episode's reward line.
    const episode = page.dataset.episode;
    const status = document.querySelector('[data-watch-status]');
    if (episode && status) {
        const text = status.querySelector('[data-watch-text]');
        const done = state.server.has(episode);
        status.classList.toggle('is-done', done || (state.auth === 'guest' && state.local.has(episode)));
        if (done) {
            text.textContent = 'Watched. Reward collected: thanks for watching!';
        } else if (state.auth === 'guest') {
            text.innerHTML = state.local.has(episode)
                ? 'Watched on this device. <a href="/login">Log in</a> to earn BattlePoints for the next ones.'
                : 'Free to watch. <a href="/login">Log in</a> to earn +25 BattlePoints and +20 XP for watching.';
        }
        document.querySelectorAll('[data-reward-tag]').forEach((tag) => { tag.hidden = done; });
    }

    for (const button of document.querySelectorAll('[data-follow]')) {
        const key = button.dataset.follow;
        button.classList.toggle('is-done', state.serverFollows.has(key) || (state.auth === 'guest' && state.localFollows.has(key)));
    }
    document.querySelectorAll('[data-guest-only]').forEach((node) => { node.hidden = state.auth !== 'guest'; });
}

async function loadServerProgress() {
    const result = await authApi('shows');
    if (!result.ok) return;
    state.server = new Set(result.body.data?.watched || []);
    state.serverFollows = new Set(result.body.data?.follows || []);
    paint();
}

function onUser() {
    state.auth = 'user';
    loadServerProgress();
}
function onGuest() {
    state.auth = 'guest';
    paint();
}

// ---------------------------------------------------------------- the player

let youtubeApi = null;
function loadYouTube() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    youtubeApi ||= new Promise((resolve, reject) => {
        const previous = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            if (typeof previous === 'function') previous();
            resolve(window.YT);
        };
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        script.onerror = () => reject(new Error('YouTube blocked'));
        document.head.appendChild(script);
        setTimeout(() => reject(new Error('YouTube timeout')), 15000);
    });
    return youtubeApi;
}

function plainFrame(box) {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(box.dataset.youtube)}?autoplay=1&rel=0&playsinline=1`;
    frame.title = box.dataset.title || 'ABS Originals';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    return frame;
}

async function requestTicket(box) {
    const episode = box.dataset.episode;
    if (!episode || state.auth !== 'user' || state.server.has(episode) || box.ticket) return;
    box.ticket = 'pending';
    const result = await authApi('watch-start', { method: 'POST', body: { episode } });
    box.ticket = result.ok ? result.body.data.ticket : null;
}

let guestNudged = false;
async function complete(box) {
    const episode = box.dataset.episode;
    if (!episode || box.completed) return;
    box.completed = true;
    state.local.add(episode);
    writeList(WATCHED_KEY, state.local);
    track('episode_complete', { episode_id: episode, show: showOf(episode) });
    paint();

    if (state.auth !== 'user') {
        if (!guestNudged) {
            guestNudged = true;
            toast('Nice! Log in to earn +25 BattlePoints for every episode you watch.');
        }
        return;
    }
    if (state.server.has(episode)) return;
    for (let tries = 0; box.ticket === 'pending' && tries < 20; tries += 1) await new Promise((resolve) => setTimeout(resolve, 250));
    if (!box.ticket || box.ticket === 'pending') return;
    const result = await authApi('watch', { method: 'POST', body: { ticket: box.ticket } });
    if (result.ok) {
        state.server.add(episode);
        showReward(result.body.data, box);
        paint();
    } else if (result.status === 409) {
        toast(result.body.error || 'Watch the whole episode to earn its reward.');
        box.completed = false;
    }
}

function upNext(box) {
    const overlay = box.querySelector('[data-up-next]');
    if (!overlay) return;
    overlay.hidden = false;
    const go = overlay.querySelector('[data-up-next-go]');
    const count = overlay.querySelector('[data-up-next-count]');
    let left = 8;
    const timer = go ? setInterval(() => {
        left -= 1;
        if (count) count.textContent = `Starts in ${left} second${left === 1 ? '' : 's'}`;
        if (left <= 0) {
            clearInterval(timer);
            track('episode_autoplay_next', { episode_id: box.dataset.episode });
            location.href = go.href;
        }
    }, 1000) : null;
    overlay.querySelector('[data-up-next-cancel]')?.addEventListener('click', () => {
        if (timer) clearInterval(timer);
        overlay.hidden = true;
    }, { once: true });
    go?.addEventListener('click', () => track('episode_next_click', { episode_id: box.dataset.episode }), { once: true });
}

async function start(box) {
    if (box.started) return;
    box.started = true;
    const facade = box.querySelector('[data-play]');
    const mount = document.createElement('div');
    mount.className = 'player-frame';
    facade.replaceWith(mount);
    const episode = box.dataset.episode || null;
    track('episode_play', { episode_id: episode || 'full_season', show: page?.dataset.show || (episode ? showOf(episode) : ''), video_title: box.dataset.title });

    let YT;
    try {
        YT = await loadYouTube();
    } catch {
        mount.replaceWith(plainFrame(box));
        return;
    }
    let poll = null;
    new YT.Player(mount, {
        host: 'https://www.youtube-nocookie.com',
        videoId: box.dataset.youtube,
        playerVars: { autoplay: 1, rel: 0, playsinline: 1, modestbranding: 1 },
        events: {
            onReady: (event) => event.target.playVideo(),
            onStateChange: (event) => {
                const player = event.target;
                if (event.data === YT.PlayerState.PLAYING) {
                    requestTicket(box);
                    if (episode && !poll) {
                        poll = setInterval(() => {
                            const duration = player.getDuration?.() || 0;
                            if (duration > 0 && (player.getCurrentTime?.() || 0) / duration >= DONE_AT) complete(box);
                        }, 2000);
                    }
                }
                if (event.data === YT.PlayerState.ENDED) {
                    if (poll) { clearInterval(poll); poll = null; }
                    complete(box);
                    upNext(box);
                }
            }
        }
    });
}

// ---------------------------------------------------------------- follows

async function follow(button) {
    const key = button.dataset.follow;
    track('social_follow_click', { platform: key, page: location.pathname });
    if (state.auth === 'user') {
        if (state.serverFollows.has(key)) return;
        const result = await authApi('follow', { method: 'POST', body: { platform: key } });
        if (result.ok) {
            state.serverFollows.add(key);
            showReward(result.body.data, button);
            paint();
        }
        return;
    }
    state.localFollows.add(key);
    writeList(FOLLOWED_KEY, state.localFollows);
    toast('Thanks for following! Log in to earn BattlePoints for it.');
    paint();
}

// ---------------------------------------------------------------- wiring

document.addEventListener('click', (event) => {
    const play = event.target.closest('[data-play]');
    if (play) {
        const box = play.closest('[data-player]');
        if (box) start(box);
        return;
    }
    const followButton = event.target.closest('[data-follow]');
    if (followButton) {
        follow(followButton);
        return;
    }
    const out = event.target.closest('[data-out]');
    if (out) track('show_outbound_click', { destination: out.dataset.out, page: location.pathname });
});

if (window.ABS_AUTH === 'user') onUser();
else if (window.ABS_AUTH === 'guest') onGuest();
document.addEventListener('abs:user', onUser);
document.addEventListener('abs:guest', onGuest);
paint();

// #play (from "Up next") starts the episode and leaves a clean address.
if (location.hash === '#play') {
    history.replaceState(null, '', location.pathname + location.search);
    const box = document.querySelector('[data-player][data-episode]');
    if (box) start(box);
}
