// Behaviour shared by every screen: HUD menus, quick search, sound effects,
// 3D card tilt and the signed-in player chip. Plain DOM, no framework.
import { sfx, isSoundOn, setSound } from './sfx.js';

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

const soundButton = document.querySelector('[data-sound-toggle]');
function paintSound() {
    if (!soundButton) return;
    soundButton.classList.toggle('muted', !isSoundOn());
    soundButton.setAttribute('aria-pressed', String(isSoundOn()));
    soundButton.title = isSoundOn() ? 'Sound on (click to mute)' : 'Sound off (click to unmute)';
}
soundButton?.addEventListener('click', () => { setSound(!isSoundOn()); paintSound(); });
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
        const card = event.target.closest('.card');
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

function renderResults(list) {
    current = list;
    activeIndex = 0;
    if (!list.length) {
        resultList.innerHTML = '<li class="search-empty">No animal matches that search.</li>';
        return;
    }
    resultList.innerHTML = list.map((animal, index) => `
        <li><a href="/stats/${animal.s}" role="option" aria-selected="${index === 0}">
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
    input.addEventListener('input', async () => renderResults(searchAnimals(await loadAnimalIndex(), input.value)));
    input.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') { event.preventDefault(); moveSelection(1); }
        if (event.key === 'ArrowUp') { event.preventDefault(); moveSelection(-1); }
        if (event.key === 'Enter' && current[activeIndex]) { event.preventDefault(); location.href = `/stats/${current[activeIndex].s}`; }
    });
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    document.addEventListener('keydown', (event) => {
        const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '') || document.activeElement?.isContentEditable;
        if (event.key === '/' && !typing && !dialog.open) { event.preventDefault(); openSearch(); }
    });
}

// ---------------------------------------------------------------- player chip

const chip = document.querySelector('[data-player-chip]');
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
            const level = Number(user.level) || 1;
            const progress = user.xpToNext ? Math.min(100, Math.round(((Number(user.xp) || 0) / user.xpToNext) * 100)) : 0;
            chip.href = '/profile';
            chip.classList.add('signed-in');
            chip.innerHTML = `<span class="lvl" title="Level ${level}">${level}</span>
                <span class="who"><span>${escapeHtml(user.displayName || user.username)}</span><span class="xpbar"><i style="width:${progress}%"></i></span></span>
                <span class="bp" title="BattlePoints"><img src="/images/icons/abs/coin.webp" alt="" width="20" height="20">${Number(user.battlePoints || 0).toLocaleString('en-US')}</span>`;
        })
        .catch(guest);
}
