// /admin: lists players for admins and moderators and runs the moderation
// actions (lib/admin.js). The server checks the role on every call.
import { authApi, escapeHtml, toast } from './site.js';

const $ = (selector, root = document) => root.querySelector(selector);
const app = $('[data-admin-app]');
const gate = $('[data-admin-gate]');
const rows = $('[data-rows]');
const dialog = $('[data-dialog]');
const view = { filter: 'names', q: '', page: 1, total: 0, pageSize: 50, you: null };

function fmtDate(value) {
    if (!value) return '–';
    return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function showGate(text, login = false) {
    $('[data-gate-text]').textContent = text;
    $('[data-gate-login]').hidden = !login;
}

async function loadSummary() {
    const result = await authApi('admin&op=summary');
    if (!result.ok) return false;
    const data = result.body.data;
    for (const node of document.querySelectorAll('[data-stat]')) node.textContent = Number(data[node.dataset.stat] || 0).toLocaleString('en-US');
    view.you = data.you;
    $('[data-you]').textContent = data.you.owner ? 'Signed in as the owner (admin)' : `Signed in as ${data.you.role}`;
    return true;
}

function rowHtml(user) {
    const isAdmin = view.you?.role === 'admin';
    const state = [];
    if (user.role !== 'user') state.push(`<span class="chip chip-cyan">${escapeHtml(user.role)}${user.owner ? ' · owner' : ''}</span>`);
    if (user.hidden) state.push(`<span class="chip chip-red">Shown as ${escapeHtml(user.shownAs)}</span>`);
    if (user.brokenRule) state.push(`<span class="chip chip-orange">Breaks: ${escapeHtml(user.brokenRule)}</span>`);
    if (user.mutedUntil) state.push(`<span class="chip chip-red">Muted until ${escapeHtml(fmtDate(user.mutedUntil))}</span>`);
    if (!state.length) state.push('<span class="chip chip-green">OK</span>');
    const reason = user.reason ? `<small>${escapeHtml(user.reason)}${user.censoredBy === 'auto' ? ' (automatic)' : ''}</small>` : '';
    const acts = [];
    if (user.role !== 'admin') {
        acts.push(user.censored ? `<button class="btn btn-sm" type="button" data-act="restore">Show name</button>` : `<button class="btn btn-danger btn-sm" type="button" data-act="censor">Hide name</button>`);
        acts.push(user.mutedUntil ? `<button class="btn btn-sm" type="button" data-act="unmute">Unmute</button>` : `<button class="btn btn-sm" type="button" data-act="mute">Mute</button>`);
        if (isAdmin) acts.push(`<button class="btn btn-sm" type="button" data-act="rename">Rename</button>`);
        if (isAdmin) acts.push(`<button class="btn btn-sm" type="button" data-act="role">Role</button>`);
    }
    acts.push(`<a class="btn btn-sm" href="/profile/${encodeURIComponent(user.username)}" target="_blank" rel="noopener">Profile</a>`);
    return `<div class="adm-row${user.hidden ? ' is-hidden' : ''}" data-user="${escapeHtml(user.id)}">
        <div class="who"><b>${escapeHtml(user.username)}</b><small>Display name: ${escapeHtml(user.displayName || '–')} · level ${user.level} · joined ${escapeHtml(fmtDate(user.createdAt))}${user.roblox ? ' · Roblox' : ''}${user.google ? ' · Google' : ''}</small></div>
        <div class="state">${state.join('')}${reason}</div>
        <div class="acts">${acts.join('')}</div>
    </div>`;
}

const cache = new Map();
async function loadList() {
    rows.innerHTML = '<p class="adm-note">Loading…</p>';
    const params = new URLSearchParams({ op: 'users', filter: view.filter, q: view.q, page: String(view.page) });
    const result = await authApi(`admin&${params.toString()}`);
    if (!result.ok) {
        rows.innerHTML = `<p class="adm-note">${escapeHtml(result.body.error || 'Could not load players.')}</p>`;
        return;
    }
    const data = result.body.data;
    view.total = data.total;
    view.pageSize = data.pageSize;
    cache.clear();
    data.users.forEach((user) => cache.set(user.id, user));
    rows.innerHTML = data.users.length ? data.users.map(rowHtml).join('') : '<p class="adm-note">Nobody here.</p>';
    const pages = Math.max(1, Math.ceil(view.total / view.pageSize));
    $('[data-page]').textContent = `Page ${view.page} of ${pages} · ${view.total.toLocaleString('en-US')} players`;
    $('[data-prev]').disabled = view.page <= 1;
    $('[data-next]').disabled = view.page >= pages;
    $('[data-list-note]').textContent = view.filter === 'names'
        ? 'Players whose username or display name breaks the name rules, and every name an admin hid. Hidden names show as "Player 1a2b" everywhere until the player renames.'
        : '';
}

// A small form in the dialog; resolves to the form values, or null when cancelled.
function ask(title, bodyHtml, okLabel = 'Save') {
    $('[data-dialog-title]').textContent = title;
    $('[data-dialog-body]').innerHTML = bodyHtml;
    $('[data-dialog-ok]').textContent = okLabel;
    dialog.showModal();
    return new Promise((resolve) => {
        dialog.addEventListener('close', () => {
            if (dialog.returnValue !== 'ok') return resolve(null);
            resolve(Object.fromEntries(new FormData($('[data-dialog-form]')).entries()));
        }, { once: true });
    });
}

async function act(userId, action) {
    const user = cache.get(userId);
    if (!user) return;
    let body = { op: action, userId };
    if (action === 'censor') {
        const values = await ask(`Hide ${user.username}'s name`, `
            <p class="adm-note" style="margin:6px 0">Everyone else sees "Player ${escapeHtml(user.id.slice(-4))}" and the player is asked to pick a new name.</p>
            <label>Which name<select class="field" name="target"><option value="both">Username and display name</option><option value="username">Username</option><option value="displayName">Display name</option></select></label>
            <label>Reason the player sees<input class="field" name="reason" maxlength="200" placeholder="Your name breaks the site's name rules." /></label>`, 'Hide name');
        if (!values) return;
        body = { ...body, ...values };
    } else if (action === 'mute') {
        const values = await ask(`Mute ${user.username}`, `
            <label>For how long<select class="field" name="hours"><option value="1">1 hour</option><option value="24" selected>1 day</option><option value="168">1 week</option><option value="720">30 days</option><option value="0">Until unmuted</option></select></label>
            <label>Reason<input class="field" name="reason" maxlength="200" placeholder="Breaking the chat rules" /></label>`, 'Mute');
        if (!values) return;
        body = { ...body, hours: Number(values.hours), reason: values.reason };
    } else if (action === 'rename') {
        const values = await ask(`Rename ${user.username}`, `
            <label>Username (3 to 20 letters, numbers or _)<input class="field" name="username" maxlength="20" value="${escapeHtml(user.username)}" /></label>
            <label>Display name<input class="field" name="displayName" maxlength="30" value="${escapeHtml(user.displayName || user.username)}" /></label>`);
        if (!values) return;
        body = { ...body, username: values.username.trim(), displayName: values.displayName.trim() };
    } else if (action === 'role') {
        const values = await ask(`Role for ${user.username}`, `
            <label>Role<select class="field" name="role"><option value="user"${user.role === 'user' ? ' selected' : ''}>Player</option><option value="moderator"${user.role === 'moderator' ? ' selected' : ''}>Moderator (can hide names and mute)</option>${view.you?.owner ? '<option value="admin">Admin</option>' : ''}</select></label>`);
        if (!values) return;
        body = { ...body, role: values.role };
    }
    const result = await authApi('admin', { method: 'POST', body });
    if (!result.ok) {
        toast(result.body.error || 'That did not work.');
        return;
    }
    toast('Saved.');
    loadSummary();
    loadList();
}

async function init() {
    if (window.ABS_AUTH === 'guest') {
        showGate('Log in with an admin account to use these tools.', true);
        return;
    }
    const user = window.ABS_USER;
    if (!user) return;
    if (user.role !== 'admin' && user.role !== 'moderator') {
        showGate('This page is for Animal Battle Stats admins.');
        return;
    }
    if (!await loadSummary()) {
        showGate('This page is for Animal Battle Stats admins.');
        return;
    }
    gate.hidden = true;
    app.hidden = false;
    loadList();
}

document.addEventListener('abs:user', init);
document.addEventListener('abs:guest', init);
if (window.ABS_AUTH) init();

document.querySelectorAll('[data-filter]').forEach((tab) => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((other) => other.setAttribute('aria-selected', String(other === tab)));
    view.filter = tab.dataset.filter;
    view.page = 1;
    loadList();
}));
$('[data-search]').addEventListener('submit', (event) => {
    event.preventDefault();
    view.q = new FormData(event.currentTarget).get('q').trim();
    view.page = 1;
    loadList();
});
$('[data-prev]').addEventListener('click', () => { view.page = Math.max(1, view.page - 1); loadList(); });
$('[data-next]').addEventListener('click', () => { view.page += 1; loadList(); });
rows.addEventListener('click', (event) => {
    const button = event.target.closest('[data-act]');
    if (!button) return;
    act(button.closest('[data-user]').dataset.user, button.dataset.act);
});
$('[data-check]').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get('name').trim();
    if (!name) return;
    const result = await authApi(`admin&op=check&name=${encodeURIComponent(name)}`);
    const out = $('[data-check-result]');
    if (!result.ok) { out.textContent = result.body.error || 'Could not check.'; return; }
    const data = result.body.data;
    out.innerHTML = data.allowed
        ? `<b style="color:#86f2c2">Allowed.</b> "${escapeHtml(data.name)}" passes the name rules.`
        : `<b style="color:#ff9aa5">Blocked</b> (${escapeHtml(data.category || 'rules')}).${data.reservedOnly ? ' Only blocked for new names; existing players keep it.' : ''}`;
});
