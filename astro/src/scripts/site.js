// Behaviour shared by every screen: HUD menus, quick search, sound effects,
// 3D card tilt and the signed-in player chip. Plain DOM, no framework.
import { sfx, isSoundOn, setSound } from './sfx.js';
import './track.js';

let indexPromise = null;

export function loadAnimalIndex() {
    if (!indexPromise) {
        indexPromise = fetch('/data/animals-lite.json', { credentials: 'omit' })
            .then((response) => (response.ok ? response.json() : []))
            .catch(() => []);
    }
    return indexPromise;
}

function normalize(value) {
    return String(value || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');
}

export function searchAnimals(list, query, limit = 12) {
    const q = normalize(query).trim();
    if (!q) return list.slice(0, limit);
    const results = [];
    for (const animal of list) {
        const name = normalize(animal.n);
        const sci = normalize(animal.sci);
        let score = 0;
        if (name === q) score = 100;
        else if (name.startsWith(q)) score = 80;
        else if (name.split(/[\s-]+/).some((word) => word.startsWith(q))) score = 60;
        else if (name.includes(q)) score = 40;
        else if (sci.includes(q)) score = 30;
        else if (normalize(animal.t).startsWith(q) || normalize(animal.c).startsWith(q)) score = 10;
        if (score) results.push({ animal, score: score - animal.r / 1000 });
    }
    return results.sort((a, b) => b.score - a.score).slice(0, limit).map((entry) => entry.animal);
}

// Equal-area sizing variables for an animal image (see .animal-art in abs.css).
export function artVars(animal) {
    const ar = Number(animal?.ar) || 1;
    const k = Number(animal?.k) || 1;
    return `--ar:${ar};--k:${k}`;
}

export function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

export function toast(message) {
    let node = document.querySelector('.toast');
    if (!node) {
        node = document.createElement('div');
        node.className = 'toast';
        node.setAttribute('role', 'status');
        document.body.appendChild(node);
    }
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(node.timer);
    node.timer = setTimeout(() => node.classList.remove('show'), 2600);
}

// ---------------------------------------------------------------- sound toggle + ui sounds

// The HUD button, and the one in the menu sheet (phones hide the HUD one).
const soundButtons = [...document.querySelectorAll('[data-sound-toggle]')];
function paintSound() {
    for (const button of soundButtons) {
        button.classList.toggle('muted', !isSoundOn());
        button.setAttribute('aria-pressed', String(isSoundOn()));
        button.title = isSoundOn() ? 'Sound on (click to mute)' : 'Sound off (click to unmute)';
        const text = button.querySelector('[data-sound-text]');
        if (text) text.textContent = isSoundOn() ? 'Sound effects: on' : 'Sound effects: off';
    }
}
soundButtons.forEach((button) => button.addEventListener('click', () => { setSound(!isSoundOn()); paintSound(); }));
paintSound();

const HOVER_SOUND = '.btn, .card, .menu a, .dock a, .tabs button, .seg button, .seg a, [data-sfx]';
let lastHover = null;
document.addEventListener('pointerover', (event) => {
    if (event.pointerType !== 'mouse') return;
    const target = event.target.closest(HOVER_SOUND);
    if (target && target !== lastHover) sfx.tick();
    lastHover = target;
});
document.addEventListener('click', (event) => {
    const target = event.target.closest('.btn, .card, .menu a, .dock a, [data-sfx="select"]');
    if (target) sfx.select();
    else if (event.target.closest('.tabs button, .seg button, .seg a')) sfx.tab();
}, true);

// ---------------------------------------------------------------- 3D card tilt

const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches;
if (canHover) {
    let active = null;
    document.addEventListener('pointermove', (event) => {
        // Cards on the home ring turn with the ring, not with the pointer.
        const card = event.target.closest('.card:not([data-ring] .card)');
        if (active && active !== card) {
            active.style.removeProperty('--rx');
            active.style.removeProperty('--ry');
        }
        active = card;
        if (!card) return;
        const box = card.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width;
        const y = (event.clientY - box.top) / box.height;
        card.style.setProperty('--ry', `${((x - 0.5) * 18).toFixed(2)}deg`);
        card.style.setProperty('--rx', `${((0.5 - y) * 14).toFixed(2)}deg`);
        card.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`);
        card.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`);
    }, { passive: true });
    document.addEventListener('pointerleave', () => {
        active?.style.removeProperty('--rx');
        active?.style.removeProperty('--ry');
    });
}

// ---------------------------------------------------------------- more sheet

const sheet = document.getElementById('more-sheet');
document.querySelectorAll('[data-sheet-toggle]').forEach((button) => button.addEventListener('click', () => {
    const open = sheet.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    if (open) sfx.whoosh();
}));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sheet?.classList.contains('open')) sheet.classList.remove('open');
});
document.addEventListener('click', (event) => {
    if (sheet?.classList.contains('open') && !event.target.closest('#more-sheet, [data-sheet-toggle]')) sheet.classList.remove('open');
});

// ---------------------------------------------------------------- quick search

const dialog = document.getElementById('search-dialog');
const input = dialog?.querySelector('[data-search-input]');
const resultList = dialog?.querySelector('[data-search-results]');
let activeIndex = 0;
let current = [];

// "lion vs tiger", "100 men vs gorilla", "orca or great white": a matchup to jump to.
const VS_PATTERN = /^(.+?)\s+(?:vs\.?|v\.?|versus|against|or)\s+(.+)$/i;
const HUMAN_WORDS = /^(human|humans|man|men|person|people|guy|guys|homo sapiens)$/i;
function fighterFrom(list, text) {
    const match = String(text).trim().match(/^(\d[\d,]*)\s*[x×]?\s+(.+)$/i);
    const count = match ? Math.min(1000000, Math.max(1, Number(match[1].replace(/,/g, '')) || 1)) : 1;
    const name = (match ? match[2] : text).trim();
    if (HUMAN_WORDS.test(name)) return { slug: 'human', name: count > 1 ? 'Humans' : 'Human', img: '/images/human/human.svg', count };
    const words = name.split(/\s+/);
    // "gorillas" finds "gorilla": try the name, then without a plural s.
    const animal = searchAnimals(list, name, 1)[0] || searchAnimals(list, name.replace(/e?s$/i, ''), 1)[0] || (words.length > 1 ? searchAnimals(list, words.at(-1), 1)[0] : null);
    return animal ? { slug: animal.s, name: animal.n, img: animal.i, count } : null;
}
function matchupFor(list, query) {
    const parts = String(query || '').trim().match(VS_PATTERN);
    if (!parts) return null;
    const a = fighterFrom(list, parts[1]);
    const b = fighterFrom(list, parts[2]);
    if (!a || !b || a.slug === b.slug) return null;
    const params = new URLSearchParams({ a: a.slug, b: b.slug });
    if (a.count > 1) params.set('na', String(a.count));
    if (b.count > 1) params.set('nb', String(b.count));
    const label = (fighter) => `${fighter.count > 1 ? `${fighter.count.toLocaleString('en-US')} × ` : ''}${fighter.name}`;
    return { href: `/compare?${params}`, a, b, title: `${label(a)} vs ${label(b)}` };
}

function renderResults(list, query = '', all = list) {
    const matchup = matchupFor(all, query);
    const animals = matchup ? [] : list;
    current = [...(matchup ? [matchup] : []), ...animals];
    activeIndex = 0;
    if (!current.length) {
        resultList.innerHTML = '<li class="search-empty">No animal matches that search. Try "lion vs tiger".</li>';
        return;
    }
    const matchupRow = matchup ? `
        <li><a class="sr-vs" href="${matchup.href}" role="option" aria-selected="true">
            <span class="sr-pair"><img src="${matchup.a.img}" alt="" width="40" height="40"><em>VS</em><img src="${matchup.b.img}" alt="" width="40" height="40"></span>
            <span><span class="sr-name">${escapeHtml(matchup.title)}</span><span class="sr-meta">Who would win? Open the fight</span></span>
        </a></li>` : '';
    resultList.innerHTML = matchupRow + animals.map((animal, index) => `
        <li><a href="/stats/${animal.s}" role="option" aria-selected="${!matchup && index === 0}">
            <img src="${animal.i}" alt="" width="50" height="40" loading="lazy">
            <span><span class="sr-name">${escapeHtml(animal.n)}</span><span class="sr-meta">#${animal.r} · ${escapeHtml(animal.t)} · ${escapeHtml(animal.c)}</span></span>
            <span class="tier-badge tier-${animal.tier.toLowerCase()}">${animal.tier}</span>
        </a></li>`).join('');
}

function moveSelection(step) {
    const links = resultList.querySelectorAll('a');
    if (!links.length) return;
    links[activeIndex]?.setAttribute('aria-selected', 'false');
    activeIndex = (activeIndex + step + links.length) % links.length;
    links[activeIndex].setAttribute('aria-selected', 'true');
    links[activeIndex].scrollIntoView({ block: 'nearest' });
    sfx.tick();
}

async function openSearch() {
    if (!dialog) return;
    dialog.showModal();
    sfx.whoosh();
    input.value = '';
    input.focus();
    renderResults(searchAnimals(await loadAnimalIndex(), ''));
}

if (dialog) {
    document.querySelectorAll('[data-open-search]').forEach((button) => button.addEventListener('click', openSearch));
    input.addEventListener('input', async () => {
        const list = await loadAnimalIndex();
        renderResults(searchAnimals(list, input.value), input.value, list);
    });
    input.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') { event.preventDefault(); moveSelection(1); }
        if (event.key === 'ArrowUp') { event.preventDefault(); moveSelection(-1); }
        const link = resultList.querySelectorAll('a')[activeIndex];
        if (event.key === 'Enter' && link) { event.preventDefault(); location.href = link.href; }
    });
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    document.addEventListener('keydown', (event) => {
        const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '') || document.activeElement?.isContentEditable;
        if (event.key === '/' && !typing && !dialog.open) { event.preventDefault(); openSearch(); }
    });
}

// ---------------------------------------------------------------- player chip + rewards

const COIN = '/images/ui/icons/coin.svg';
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const chip = document.querySelector('[data-player-chip]');
const badge = document.querySelector('[data-rewards-badge]');

// Calls /api/auth?action=... as the signed-in player. Resolves { ok, status, body }.
export function authApi(action, { method = 'GET', body } = {}) {
    const headers = { Accept: 'application/json' };
    if (body) headers['Content-Type'] = 'application/json';
    if (window.ABS_TOKEN) headers.Authorization = `Bearer ${window.ABS_TOKEN}`;
    return fetch(`/api/auth?action=${action}`, { method, credentials: 'same-origin', headers, body: body ? JSON.stringify(body) : undefined })
        .then(async (response) => ({ ok: response.ok, status: response.status, body: await response.json().catch(() => ({})) }))
        .catch(() => ({ ok: false, status: 0, body: {} }));
}

function paintBadge(ready) {
    if (!badge) return;
    badge.textContent = ready > 9 ? '9+' : String(ready || 0);
    badge.hidden = !ready;
}

function paintChip(user) {
    if (!chip) return;
    const level = Number(user.level) || 1;
    const progress = user.xpToNext ? Math.min(100, Math.round(((Number(user.xp) || 0) / user.xpToNext) * 100)) : 0;
    chip.href = '/profile';
    chip.classList.add('signed-in');
    chip.innerHTML = `<span class="lvl" title="Level ${level}">${level}</span>
        <span class="who"><span>${escapeHtml(user.displayName || user.username)}</span><span class="xpbar"><i style="width:${progress}%"></i></span></span>
        <span class="bp" title="BattlePoints" data-wallet><img src="${COIN}" alt="" width="20" height="20"><span data-wallet-n>${Number(user.battlePoints || 0).toLocaleString('en-US')}</span></span>`;
    paintBadge(user.economy?.ready);
}

// Where flying coins land: the BattlePoints counter, or the Rewards button on narrow screens.
function walletTarget() {
    const wallet = document.querySelector('[data-wallet]');
    const box = wallet?.getBoundingClientRect();
    if (box && box.width > 0) return wallet;
    return document.querySelector('[data-rewards-btn]') || chip;
}

// `from` is an element or a rectangle (a spot on screen that may be gone by now).
function rectOf(from) {
    if (from && typeof from.getBoundingClientRect === 'function') return from.getBoundingClientRect();
    if (from && typeof from.left === 'number') return from;
    return document.querySelector('.screen').getBoundingClientRect();
}

function flyCoins(from, count) {
    const target = walletTarget();
    if (!target || reduceMotion) return Promise.resolve();
    const start = rectOf(from);
    const end = target.getBoundingClientRect();
    const sx = start.left + start.width / 2;
    const sy = start.top + start.height / 2;
    const ex = end.left + end.width / 2;
    const ey = end.top + end.height / 2;
    const flights = Array.from({ length: count }, (_, index) => new Promise((resolve) => {
        const coin = document.createElement('img');
        coin.src = COIN;
        coin.alt = '';
        coin.className = 'fly-coin';
        coin.style.left = `${sx - 14}px`;
        coin.style.top = `${sy - 14}px`;
        document.body.appendChild(coin);
        const spreadX = (Math.random() - 0.5) * 90;
        const spreadY = -30 - Math.random() * 50;
        const flight = coin.animate([
            { transform: 'translate(0, 0) scale(0.6)', opacity: 0 },
            { transform: `translate(${spreadX}px, ${spreadY}px) scale(1.15)`, opacity: 1, offset: 0.3 },
            { transform: `translate(${ex - sx}px, ${ey - sy}px) scale(0.55)`, opacity: 0.9 }
        ], { duration: 820 + index * 45, delay: index * 55, easing: 'cubic-bezier(0.5, 0, 0.3, 1)', fill: 'forwards' });
        flight.onfinish = () => { coin.remove(); resolve(); };
    }));
    return flights[0].then(() => {
        sfx.coin();
        target.classList.remove('bump');
        void target.offsetWidth;
        target.classList.add('bump');
    });
}

function rewardPill(from, text) {
    const pill = document.createElement('div');
    pill.className = 'reward-pill';
    pill.innerHTML = text;
    const box = rectOf(from);
    pill.style.left = `${Math.min(window.innerWidth - 120, Math.max(120, box.left + box.width / 2))}px`;
    pill.style.top = `${Math.max(70, box.top)}px`;
    document.body.appendChild(pill);
    setTimeout(() => pill.remove(), 1900);
}

// Shows a reward from the API (lib/rewards.js payload): the gain above `from`,
// BattlePoints flying into the counter, level-ups and new looks, and refreshes the HUD.
export function showReward(reward, from = null) {
    if (!reward) return;
    const user = window.ABS_USER;
    if (user) {
        if (typeof reward.wallet === 'number') user.battlePoints = reward.wallet;
        if (reward.progression) Object.assign(user, { level: reward.progression.level, xp: reward.progression.xp, xpToNext: reward.progression.xpToNext });
        if (reward.economy) user.economy = reward.economy;
        paintChip(user);
    }
    const parts = [];
    if (reward.coins) parts.push(`<b class="c"><img src="${COIN}" alt="" width="18" height="18">+${reward.coins}</b>`);
    if (reward.xp) parts.push(`<b class="x">+${reward.xp} XP</b>`);
    if (reward.pass) parts.push(`<b class="p">+${reward.pass} Pass</b>`);
    if (parts.length) {
        rewardPill(from, parts.join(''));
        flyCoins(from, Math.min(8, Math.max(2, Math.ceil((reward.coins || 0) / 12))));
    } else if (reward.capped) {
        toast('Daily BattlePoints limit reached for that. It still counts for quests.');
    }
    if (reward.leveledUp && reward.newLevel) {
        setTimeout(() => { sfx.win(); toast(`Level ${reward.newLevel}! Level-up BattlePoints added.`); }, 900);
    }
    for (const [index, item] of (reward.unlocked || []).entries()) {
        setTimeout(() => { sfx.win(); toast(`New ${item.kind}: ${item.name}! Wear it from Rewards.`); }, 1600 + index * 2200);
    }
    document.dispatchEvent(new CustomEvent('abs:reward', { detail: reward }));
}

// ---------------------------------------------------------------- daily reward

function dailyDismissKey(day) { return `abs-daily-later-${day}`; }

async function openDaily() {
    const hub = await authApi('hub');
    if (!hub.ok || !hub.body.data?.login?.claimable) return;
    const data = hub.body.data;
    try { if (sessionStorage.getItem(dailyDismissKey(data.day))) return; } catch { /* private mode */ }
    const login = data.login;
    const dialog = document.createElement('dialog');
    dialog.className = 'daily-dialog';
    dialog.setAttribute('aria-labelledby', 'daily-title');
    dialog.innerHTML = `
        <div class="dd-head">
            <img src="/images/ui/icons/gift.svg" alt="" width="64" height="64">
            <div><p class="eyebrow">Daily reward</p><h2 id="daily-title" class="screen-title">Day ${login.step}</h2>
            <p class="dd-sub">${login.run > 1 ? `${login.run} days in a row` : 'Come back every day: day 7 pays the most.'}${login.shielded ? ' · Your streak shield saved a missed day.' : ''}</p></div>
        </div>
        <ol class="dd-ladder">${login.rewards.map((reward) => `
            <li class="${reward.day < login.step ? 'done' : reward.day === login.step ? 'now' : ''}${reward.day === 7 ? ' big' : ''}">
                <small>Day ${reward.day}</small><img src="${reward.day === 7 ? '/images/ui/icons/chest.svg' : COIN}" alt="" width="34" height="34"><b>${reward.coins}</b>
            </li>`).join('')}</ol>
        <div class="dd-actions">
            <button class="btn btn-gold btn-lg" type="button" data-dd-claim><img src="${COIN}" alt="" width="26" height="26">Claim ${login.reward.coins} BattlePoints</button>
            <button class="btn btn-sm" type="button" data-dd-later>Later</button>
        </div>`;
    document.body.appendChild(dialog);
    dialog.showModal();
    sfx.whoosh();
    const close = () => { dialog.close(); setTimeout(() => dialog.remove(), 200); };
    dialog.querySelector('[data-dd-later]').addEventListener('click', () => {
        try { sessionStorage.setItem(dailyDismissKey(data.day), '1'); } catch { /* private mode */ }
        close();
    });
    dialog.addEventListener('cancel', () => { try { sessionStorage.setItem(dailyDismissKey(data.day), '1'); } catch { /* private mode */ } });
    const claim = dialog.querySelector('[data-dd-claim]');
    claim.addEventListener('click', async () => {
        claim.disabled = true;
        const result = await authApi('claim', { method: 'POST', body: { what: 'daily' } });
        if (!result.ok) { sfx.error(); toast(result.body.error || 'Could not claim. Try again.'); claim.disabled = false; return; }
        dialog.querySelector('.dd-ladder .now')?.classList.add('done');
        // The dialog sits above everything, so the BattlePoints fly once it has closed.
        const spot = claim.getBoundingClientRect();
        setTimeout(() => { close(); showReward(result.body.data, spot); }, 450);
    });
}

if (chip) {
    chip.href = `/login?returnTo=${encodeURIComponent(location.pathname + location.search)}`;
    // Pages that need to know either way read window.ABS_AUTH ('user' | 'guest')
    // or listen for abs:user / abs:guest.
    const guest = () => {
        window.ABS_AUTH = 'guest';
        document.dispatchEvent(new CustomEvent('abs:guest'));
    };
    fetch('/api/auth?action=me', { credentials: 'same-origin', headers: { Accept: 'application/json' } })
        .then((response) => (response.ok ? response.json() : null))
        .then(async (body) => {
            const user = body?.data?.user;
            if (!user) return guest();
            window.ABS_USER = user;
            window.ABS_TOKEN = body.data.token || null;
            window.ABS_AUTH = 'user';
            document.dispatchEvent(new CustomEvent('abs:user', { detail: user }));
            paintChip(user);
            // The daily reward greets a returning player once a day (not on Rewards, which shows it).
            if (user.economy?.dailyReady && location.pathname !== '/rewards') setTimeout(openDaily, 900);
        })
        .catch(guest);
}
