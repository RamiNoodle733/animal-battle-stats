// Player profile. /profile shows and edits your own account (Bearer token from
// the shared session check); /profile/<username> shows anyone's public card.
import { loadAnimalIndex, escapeHtml, toast } from './site.js';
import { sfx } from './sfx.js';

const root = document.querySelector('[data-profile]');
const $ = (selector) => root.querySelector(selector);
const $$ = (selector) => [...root.querySelectorAll(selector)];
const publicName = decodeURIComponent(location.pathname.split('/')[2] || '');
const fmt = (value) => Number(value || 0).toLocaleString('en-US');
let me = null;
let picked = null;
let byName = new Map();

function api(action, { method = 'GET', body, auth = true } = {}) {
    const headers = { Accept: 'application/json' };
    if (body) headers['Content-Type'] = 'application/json';
    if (auth && window.ABS_TOKEN) headers.Authorization = `Bearer ${window.ABS_TOKEN}`;
    return fetch(`/api/auth?${action}`, { method, credentials: 'same-origin', headers, body: body ? JSON.stringify(body) : undefined })
        .then(async (response) => ({ ok: response.ok, status: response.status, body: await response.json().catch(() => ({})) }))
        .catch(() => ({ ok: false, status: 0, body: {} }));
}

function cardHtml(animal, big = false) {
    const tier = animal.tier.toLowerCase();
    return `<a class="card tier-${tier} bio-${animal.b}" href="/stats/${animal.s}"${big ? '' : ' tabindex="-1"'}>
        <span class="card-inner">
            <span class="card-power"><b>${animal.p}</b><small>PWR</small></span>
            <span class="tier-badge tier-${tier}">${animal.tier}</span>
            <span class="card-art"><img src="${big ? animal.m : animal.i}" alt="" width="360" height="360" decoding="async"></span>
            <span class="card-plate"><span class="card-name">${escapeHtml(animal.n)}</span><span class="card-meta">${escapeHtml(animal.cls)}</span></span>
            <span class="card-glare"></span>
        </span></a>`;
}

function paintCard(user, own) {
    const animal = user.profileAnimal ? byName.get(user.profileAnimal.toLowerCase()) : null;
    const art = $('[data-p-art]');
    art.querySelectorAll('.card').forEach((node) => node.remove());
    $('[data-p-hint]').hidden = Boolean(animal) || !own;
    if (animal) art.insertAdjacentHTML('beforeend', cardHtml(animal, true));
    const name = user.displayName || user.username;
    $('[data-p-name]').textContent = name;
    $('[data-p-handle]').textContent = `@${user.username}${user.role === 'admin' ? ' · Admin' : ''}`;
    $('[data-p-level]').textContent = user.level || 1;
    const need = Number(user.xpToNext || user.xpNeeded) || 0;
    const have = Number(user.xpProgress ?? user.xp) || 0;
    $('[data-p-xpbar]').style.width = `${need ? Math.min(100, Math.round((have / need) * 100)) : 100}%`;
    $('[data-p-xptext]').textContent = need ? `${fmt(have)} / ${fmt(need)} XP to level ${(user.level || 1) + 1}` : 'Max level';
    // Public profiles have no BattlePoints or lifetime XP; show level instead.
    const nums = own
        ? [[fmt(user.battlePoints), 'BattlePoints'], [fmt(user.lifetimeXp), 'Lifetime XP'], [fmt(user.prestige), 'Prestige']]
        : [[fmt(user.level || 1), 'Level'], [fmt(user.prestige), 'Prestige'], [user.createdAt ? new Date(user.createdAt).getFullYear() : '–', 'Joined']];
    $$('.p-nums > div').forEach((cell, index) => {
        cell.querySelector('b').textContent = nums[index][0];
        cell.querySelector('span').textContent = nums[index][1];
    });
    $('[data-p-since]').textContent = user.createdAt ? `Playing since ${new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` : '';
    document.title = `${name} | Animal Battle Stats`;
}

function paintOwner(user) {
    const form = $('[data-p-form]');
    form.elements.displayName.value = user.displayName || user.username;
    form.elements.username.value = user.username;
    $('[data-p-flag]').hidden = !user.requiresUsernameChange;
    if (typeof user.usernameChangesRemaining === 'number') $('[data-p-rename]').textContent = `Your login name. ${user.usernameChangesRemaining} of 3 changes left this week.`;
    $('[data-p-email]').textContent = user.email || '–';
    const verified = $('[data-p-verified]');
    verified.textContent = user.emailVerified ? 'Verified' : 'Not verified';
    verified.className = `chip ${user.emailVerified ? 'chip-green' : 'chip-gold'}`;
    const prefs = user.emailNotifications || {};
    $$('[data-n]').forEach((box) => { box.checked = Boolean(prefs[box.dataset.n]); box.disabled = box.dataset.n !== 'enabled' && !prefs.enabled; });
    $('[data-p-google]').textContent = user.googleLinked ? 'Linked' : 'Not linked';
    $('[data-p-google-btn]').textContent = user.googleLinked ? 'Unlink' : 'Link';
    $('[data-p-prestige-row]').hidden = !user.isPrestigeReady;
    picked = user.profileAnimal || null;
    $$('.p-opt').forEach((option) => option.setAttribute('aria-pressed', String(option.dataset.name === picked)));
}

async function saveProfile(changes, message) {
    const result = await api('action=profile', { method: 'PUT', body: changes });
    if (!result.ok) {
        sfx.error();
        toast(result.body.error || 'Could not save. Try again.');
        return false;
    }
    me = { ...me, ...result.body.data.user };
    paintCard(me, true);
    paintOwner(me);
    sfx.coin();
    toast(message);
    return true;
}

async function buildPicker() {
    const list = await loadAnimalIndex();
    const grid = $('[data-p-grid]');
    grid.innerHTML = list.map((animal) => `<button type="button" class="p-opt" data-name="${escapeHtml(animal.n)}" data-q="${escapeHtml(`${animal.n} ${animal.sci} ${animal.t}`.toLowerCase())}" aria-pressed="${animal.n === picked}" title="${escapeHtml(animal.n)}">${cardHtml(animal)}</button>`).join('');
    grid.removeAttribute('aria-busy');
    grid.addEventListener('click', async (event) => {
        const option = event.target.closest('.p-opt');
        if (!option) return;
        event.preventDefault();
        if (option.dataset.name === picked) return;
        await saveProfile({ profileAnimal: option.dataset.name }, `${option.dataset.name} is your profile animal`);
    });
    $('[data-p-q]').addEventListener('input', (event) => {
        const needle = event.target.value.trim().toLowerCase();
        grid.querySelectorAll('.p-opt').forEach((option) => { option.hidden = Boolean(needle) && !option.dataset.q.includes(needle); });
    });
}

function showTab(name) {
    $$('[data-p-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.pTab === name)));
    $$('[data-p-pane]').forEach((pane) => { pane.hidden = pane.dataset.pPane !== name; });
}

function missing(title, text) {
    root.dataset.state = 'missing';
    $('[data-p-empty]').hidden = false;
    $('[data-p-empty-title]').textContent = title;
    $('[data-p-empty-text]').textContent = text;
}

async function loadOwn() {
    const result = await api('action=profile');
    if (!result.ok) {
        location.replace('/login?returnTo=%2Fprofile');
        return;
    }
    me = result.body.data.user;
    root.dataset.state = 'own';
    paintCard(me, true);
    paintOwner(me);
    buildPicker();
    // Google linking shows once the server has Google sign-in configured
    // (or the account already has Google linked, so it can be unlinked).
    api('action=providers', { auth: false }).then((providers) => {
        $('[data-p-google-row]').hidden = !(providers.body?.data?.google || me.googleLinked);
    });
}

async function loadPublic() {
    const result = await api(`action=user&username=${encodeURIComponent(publicName)}`, { auth: false });
    if (!result.ok) {
        missing('Player not found', `No player is called ${publicName}.`);
        return;
    }
    root.dataset.state = 'public';
    paintCard(result.body.data.user, false);
}

// ---------------------------------------------------------------- wiring

$$('[data-p-tab]').forEach((tab) => tab.addEventListener('click', () => showTab(tab.dataset.pTab)));
$('[data-p-hint]').addEventListener('click', () => showTab('animal'));
$('[data-p-form]').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const changes = {};
    const displayName = form.elements.displayName.value.trim();
    const username = form.elements.username.value.trim();
    if (displayName !== (me.displayName || me.username)) changes.displayName = displayName;
    if (username !== me.username) {
        if (!/^[A-Za-z0-9_]{3,20}$/.test(username)) { sfx.error(); toast('Usernames are 3 to 20 letters, numbers or underscores.'); return; }
        changes.username = username;
    }
    if (!Object.keys(changes).length) { toast('Nothing changed'); return; }
    await saveProfile(changes, 'Profile saved');
});
$$('[data-n]').forEach((box) => box.addEventListener('change', async () => {
    const result = await api('action=notification-preferences', { method: 'PUT', body: { [box.dataset.n]: box.checked } });
    if (!result.ok) { box.checked = !box.checked; sfx.error(); toast(result.body.error || 'Could not save that setting.'); return; }
    me.emailNotifications = result.body.data.emailNotifications;
    paintOwner(me);
    sfx.tick();
}));
$('[data-p-google-btn]').addEventListener('click', async () => {
    if (!me.googleLinked) { location.href = '/api/auth?action=link-google'; return; }
    const result = await api('action=unlink-google', { method: 'POST', body: {} });
    if (!result.ok) { sfx.error(); toast(result.body.error || 'Could not unlink Google.'); return; }
    me = { ...me, ...result.body.data.user };
    paintOwner(me);
    toast('Google account unlinked');
});
$('[data-p-prestige-btn]').addEventListener('click', async () => {
    if (!confirm('Prestige resets you to level 1 and awards a prestige star plus BattlePoints. Continue?')) return;
    const result = await api('action=prestige', { method: 'POST', body: {} });
    if (!result.ok) { sfx.error(); toast(result.body.error || 'Prestige failed.'); return; }
    sfx.win();
    toast(result.body.message || 'Prestiged!');
    loadOwn();
});
$('[data-p-logout]').addEventListener('click', async () => {
    await api('action=logout', { method: 'POST', body: {} });
    try { localStorage.removeItem('auth_token'); localStorage.removeItem('user'); } catch { /* private mode */ }
    location.href = '/';
});

// Old links: /profile?tab=... and /battlepoints land here.
const params = new URLSearchParams(location.search);
if (params.get('google_error')) toast(params.get('message') || 'Google linking failed.');

loadAnimalIndex().then((list) => {
    byName = new Map(list.map((animal) => [animal.n.toLowerCase(), animal]));
    if (publicName) {
        loadPublic();
        return;
    }
    if (window.ABS_AUTH === 'user') loadOwn();
    else if (window.ABS_AUTH === 'guest') location.replace('/login?returnTo=%2Fprofile');
    else {
        document.addEventListener('abs:user', loadOwn, { once: true });
        document.addEventListener('abs:guest', () => location.replace('/login?returnTo=%2Fprofile'), { once: true });
    }
});
