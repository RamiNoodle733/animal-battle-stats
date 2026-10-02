// Player profile. /profile shows and edits your own account (Bearer token from
// the shared session check); /profile/<username> shows anyone's public card.
import { loadAnimalIndex, escapeHtml, toast, artVars } from './site.js';
import { sfx } from './sfx.js';
import { trackLogout } from './track.js';
import { ago, loadGame, trainerHtml } from './roblox-trainer.js';

const root = document.querySelector('[data-profile]');
const $ = (selector) => root.querySelector(selector);
const $$ = (selector) => [...root.querySelectorAll(selector)];
const publicName = decodeURIComponent(location.pathname.split('/')[2] || '');
const fmt = (value) => Number(value || 0).toLocaleString('en-US');
let me = null;
// False once the server says it sends no email (then nothing can be verified).
let emailOn = true;
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
            <span class="card-art"><img src="${big ? animal.m : animal.i}" alt="" style="${artVars(animal)}" decoding="async"></span>
            <span class="card-plate"><span class="card-name">${escapeHtml(animal.n)}</span><span class="card-meta">${escapeHtml(animal.cls)}</span></span>
            <span class="card-glare"></span>
        </span></a>`;
}

function paintCard(user, own) {
    const animal = user.profileAnimal ? byName.get(user.profileAnimal.toLowerCase()) : null;
    const art = $('[data-p-art]');
    art.querySelectorAll('.card, .look-frame').forEach((node) => node.remove());
    $('[data-p-hint]').hidden = Boolean(animal) || !own;
    // A frame look (Rewards shop) wraps the card; own profiles read it from the economy summary.
    const frame = own ? user.economy?.frame : user.frame;
    const title = own ? user.economy?.title : user.title;
    if (animal) art.insertAdjacentHTML('beforeend', /^frame_[a-z0-9]+$/.test(frame || '') ? `<div class="look-frame ${frame}">${cardHtml(animal, true)}</div>` : cardHtml(animal, true));
    $('[data-p-title]').textContent = title || '';
    $('[data-p-title]').hidden = !title;
    const name = user.displayName || user.username;
    $('[data-p-name]').textContent = name;
    $('[data-p-handle]').textContent = `@${user.username}${user.role === 'admin' ? ' · Admin' : user.role === 'moderator' ? ' · Moderator' : ''}`;
    $('[data-p-rbx]').hidden = !user.robloxLinked;
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
    paintCards(user, own);
    document.title = `${name} | Animal Battle Stats`;
}

// The card collection: how many, the best few, and a link to the binder.
let thumbVersions = null;
function paintCards(user, own) {
    const link = $('[data-p-cards]');
    const cards = user.collection;
    link.hidden = !cards || (!own && user.hidden);
    if (link.hidden) return;
    thumbVersions ||= JSON.parse(document.getElementById('card-thumbs')?.textContent || '{}');
    link.href = own ? '/collection' : `/collection?u=${encodeURIComponent(user.username)}`;
    $('[data-p-cards-n]').textContent = fmt(cards.count);
    $('[data-p-cards-best]').innerHTML = (cards.best || []).map((card) => (thumbVersions[card.slug]
        ? `<img src="/images/cards/${encodeURIComponent(card.slug)}-thumb.webp?v=${encodeURIComponent(thumbVersions[card.slug])}" alt="${escapeHtml(card.name)} card" width="360" height="504" loading="lazy" />`
        : '')).join('');
}

function paintOwner(user) {
    const form = $('[data-p-form]');
    form.elements.displayName.value = user.displayName || user.username;
    form.elements.username.value = user.username;
    const flag = $('[data-p-flag]');
    flag.hidden = !user.requiresUsernameChange;
    if (user.requiresUsernameChange) flag.textContent = `${user.moderationReason || 'Your name needs a change before it can show to other players.'} Until then everyone else sees you as "Player ${String(user.id).slice(-4)}".`;
    const adminLink = $('[data-p-admin]');
    if (adminLink) adminLink.hidden = user.role !== 'admin' && user.role !== 'moderator';
    if (typeof user.usernameChangesRemaining === 'number') $('[data-p-rename]').textContent = `Your login name. ${user.usernameChangesRemaining} of 3 changes left this week.`;
    // Accounts made by Roblox sign-in have no email, so nothing to verify or notify.
    const hasEmail = user.hasEmail !== false;
    $('[data-p-email]').textContent = hasEmail ? (user.email || '–') : 'None (you sign in with Roblox)';
    const verified = $('[data-p-verified]');
    verified.hidden = !hasEmail || (!emailOn && !user.emailVerified);
    verified.textContent = user.emailVerified ? 'Verified' : 'Not verified';
    verified.className = `chip ${user.emailVerified ? 'chip-green' : 'chip-gold'}`;
    $('[data-p-notify-head]').hidden = !hasEmail;
    $('[data-p-notify]').hidden = !hasEmail;
    const prefs = user.emailNotifications || {};
    $$('[data-n]').forEach((box) => { box.checked = Boolean(prefs[box.dataset.n]); box.disabled = box.dataset.n !== 'enabled' && !prefs.enabled; });
    $('[data-p-google]').textContent = user.googleLinked ? 'Linked' : 'Not linked';
    $('[data-p-google-btn]').textContent = user.googleLinked ? 'Unlink' : 'Link';
    $('[data-p-prestige-row]').hidden = !user.isPrestigeReady;
    paintRoblox(user);
    picked = user.profileAnimal || null;
    $$('.p-opt').forEach((option) => option.setAttribute('aria-pressed', String(option.dataset.name === picked)));
}

// ---------------------------------------------------------------- roblox tab

let robloxCardFor = null;

function paintRoblox(user) {
    const account = user.robloxLinked ? user.roblox : null;
    if (account) $('[data-p-tab="roblox"]').hidden = false;
    $('[data-rb-linked]').hidden = !account;
    $('[data-rb-empty]').hidden = Boolean(account);
    if (!account) {
        robloxCardFor = null;
        return;
    }
    $('[data-rb-display]').textContent = account.displayName || account.username || 'Roblox player';
    $('[data-rb-user]').textContent = account.username ? `@${account.username}` : '';
    $('[data-rb-profile]').href = account.profileUrl;
    $('[data-rb-public]').checked = Boolean(account.showPublic);
    if (robloxCardFor !== account.userId) loadRobloxCard(account.userId);
}

// Why there is no fresh game progress, in words.
const SYNC_ERRORS = {
    not_configured: 'Game progress isn\'t switched on yet.',
    no_access: 'Game progress isn\'t switched on yet.',
    busy: 'Roblox is busy right now.',
    unavailable: 'Roblox didn\'t answer just now.'
};

async function loadRobloxCard(userId, { sync = false } = {}) {
    robloxCardFor = userId;
    const button = $('[data-rb-sync]');
    button.disabled = true;
    const [result, game] = await Promise.all([api(`action=roblox-player${sync ? '&sync=1' : ''}`), loadGame().catch(() => null)]);
    button.disabled = false;
    const card = result.ok ? result.body.data : null;
    if (!card?.linked || robloxCardFor !== userId) return;
    const head = $('[data-rb-head]');
    if (card.headshot) {
        head.src = card.headshot;
        head.hidden = false;
    }
    const values = new Map((card.stats || []).map((stat) => [stat.id, stat.value]));
    $$('[data-rb-stat]').forEach((cell) => {
        const value = values.get(cell.dataset.rbStat);
        cell.textContent = value == null ? '–' : fmt(value);
    });
    $('[data-rb-note]').textContent = !card.live
        ? 'Your stats show up here once the game is live.'
        : card.stats ? 'From the game\'s global leaderboards.' : 'In-game stats are unavailable right now.';

    // The game progress, read from your save.
    const progress = card.game || {};
    const snap = progress.snapshot;
    $('[data-rb-trainer]').innerHTML = snap && game ? trainerHtml(game, snap, { own: true }) : '';
    button.hidden = !card.live;
    const error = progress.error ? SYNC_ERRORS[progress.error] || 'Your game progress couldn\'t be read just now.' : '';
    $('[data-rb-sync-note]').textContent = !card.live
        ? 'Your game progress shows up here once the game is live.'
        : snap ? `${snap.playing ? 'You\'re in the game right now. ' : ''}From the game ${ago(progress.at)}.${error ? ` ${error} This is the last one we got.` : ''}`
            : error || 'No game save yet: play once and your trainer, animals and trophies show up here.';
    const fresh = $('[data-rb-fresh]');
    const added = progress.added || [];
    fresh.hidden = !added.length;
    if (added.length) {
        fresh.textContent = `${added.length} card${added.length === 1 ? '' : 's'} from the game joined your collection: ${added.slice(0, 5).map((cardItem) => cardItem.name).join(', ')}${added.length > 5 ? ` and ${added.length - 5} more` : ''}.`;
        sfx.win();
    }
}

function paintRobloxAvailability(enabled) {
    const link = $('[data-rb-link]');
    if (enabled) $('[data-p-tab="roblox"]').hidden = false;
    $('[data-rb-off]').hidden = enabled;
    if (enabled) link.removeAttribute('aria-disabled');
    else link.setAttribute('aria-disabled', 'true');
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
        paintRobloxAvailability(Boolean(providers.body?.data?.roblox));
        if (providers.body?.data?.email === false) {
            emailOn = false;
            if (!me.emailVerified) $('[data-p-verified]').hidden = true;
        }
    });
}

async function loadPublic() {
    const result = await api(`action=user&username=${encodeURIComponent(publicName)}`, { auth: false });
    if (!result.ok) {
        missing('Player not found', `No player is called ${publicName}.`);
        return;
    }
    root.dataset.state = 'public';
    const user = result.body.data.user;
    paintCard(user, false);
    paintPublicGame(user);
}

// Someone else's progress in the Roblox game (and their Roblox name, if they chose to show it).
async function paintPublicGame(user) {
    const roblox = user.roblox;
    if (!roblox?.game || user.hidden) return;
    const game = await loadGame().catch(() => null);
    if (!game) return;
    const who = roblox.account ? { name: roblox.account.displayName || roblox.account.username, username: roblox.account.username } : null;
    $('[data-p-game-body]').innerHTML = trainerHtml(game, roblox.game, { who, at: roblox.at });
    $('[data-p-game]').hidden = false;
    root.dataset.game = '';
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
$('[data-rb-unlink]').addEventListener('click', async () => {
    if (!confirm('Disconnect your Roblox account from this profile? Cards it brought over stay in your collection. You can connect it again any time.')) return;
    const result = await api('action=unlink-roblox', { method: 'POST', body: {} });
    if (!result.ok) { sfx.error(); toast(result.body.error || 'Could not disconnect Roblox.'); return; }
    me = { ...me, ...result.body.data.user };
    paintCard(me, true);
    paintOwner(me);
    toast('Roblox account disconnected');
});
$('[data-rb-sync]').addEventListener('click', () => {
    if (me?.roblox?.userId) loadRobloxCard(me.roblox.userId, { sync: true });
});
$('[data-rb-public]').addEventListener('change', async (event) => {
    const showPublic = event.target.checked;
    const result = await api('action=roblox-settings', { method: 'POST', body: { showPublic } });
    if (!result.ok) {
        event.target.checked = !showPublic;
        sfx.error();
        toast(result.body.error || 'Could not save that.');
        return;
    }
    if (me?.roblox) me.roblox.showPublic = showPublic;
    toast(showPublic ? 'Your public profile now shows your Roblox name' : 'Your Roblox name is hidden on your public profile');
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
    await trackLogout();
    await api('action=logout', { method: 'POST', body: {} });
    try { localStorage.removeItem('auth_token'); localStorage.removeItem('user'); } catch { /* private mode */ }
    location.href = '/';
});

// Old links: /profile?tab=... and /battlepoints land here. Roblox sign-in
// comes back with ?roblox_welcome, ?roblox_linked or ?roblox_error.
const params = new URLSearchParams(location.search);
if (params.get('google_error')) toast(params.get('message') || 'Google linking failed.');
if (params.get('roblox_welcome') === '1') toast('Welcome! Your account is ready. Pick a profile animal.');
else if (params.get('roblox_linked') === '1') toast('Roblox account connected');
else if (params.get('roblox_error')) toast(params.get('message') || 'Roblox linking failed.');
const startTab = params.get('roblox_welcome') === '1' ? 'animal' : params.get('tab');
if (!publicName && ['edit', 'animal', 'roblox', 'account'].includes(startTab)) {
    if (startTab === 'roblox') $('[data-p-tab="roblox"]').hidden = false;
    showTab(startTab);
}
if (['roblox_welcome', 'roblox_linked', 'roblox_error', 'google_error'].some((key) => params.has(key))) {
    history.replaceState(null, '', location.pathname + (startTab ? `?tab=${startTab}` : ''));
}

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
