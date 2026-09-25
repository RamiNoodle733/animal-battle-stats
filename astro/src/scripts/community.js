// Community hub: arena discussion, comment feed, fan favorites, player
// leaderboard, Roblox game panel and site numbers. All user text is escaped.
import { loadAnimalIndex, escapeHtml, toast } from './site.js';
import { sfx } from './sfx.js';
import { mountWorld } from './world.js';

const hub = document.querySelector('[data-hub]');
const animalsPromise = loadAnimalIndex().then((list) => new Map(list.map((animal) => [animal.n.toLowerCase(), animal])));

function headers(json = false) {
    const result = { Accept: 'application/json' };
    if (json) result['Content-Type'] = 'application/json';
    if (window.ABS_TOKEN) result.Authorization = `Bearer ${window.ABS_TOKEN}`;
    return result;
}

async function getJson(url) {
    const response = await fetch(url, { credentials: 'same-origin', headers: headers() });
    if (!response.ok) throw new Error(`${response.status}`);
    return response.json();
}

function ago(value) {
    const seconds = Math.max(1, Math.round((Date.now() - new Date(value).getTime()) / 1000));
    const steps = [[31536000, 'y'], [2592000, 'mo'], [86400, 'd'], [3600, 'h'], [60, 'm']];
    for (const [size, label] of steps) if (seconds >= size) return `${Math.floor(seconds / size)}${label} ago`;
    return 'just now';
}

function compact(value) {
    return Number(value || 0).toLocaleString('en-US', { notation: value >= 100000 ? 'compact' : 'standard', maximumFractionDigits: 1 });
}

async function avatar(name) {
    const animals = await animalsPromise;
    const animal = name ? animals.get(String(name).toLowerCase()) : null;
    return animal ? `<img class="av" src="${animal.i}" alt="" width="36" height="36" loading="lazy">` : '<span class="av av-blank"></span>';
}

// ---------------------------------------------------------------- tabs

// Phones show one column at a time; the middle column's own tabs stay for
// Trending and Comments, while Players gets its own top-level tab.
let midShown = 'world';
function showHub(name) {
    hub.dataset.show = name;
    hub.querySelectorAll('[data-hub-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.hubTab === name)));
    if (name === 'players' || name === 'world') showMid(name);
    else if (name === 'trending' && (midShown === 'players' || midShown === 'world')) showMid('trending');
}
function showMid(name) {
    midShown = name;
    hub.querySelectorAll('[data-mid-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.midTab === name)));
    hub.querySelectorAll('[data-mid]').forEach((pane) => { pane.hidden = pane.dataset.mid !== name; });
    if (name === 'comments') loadComments();
    if (name === 'world') mountWorld(hub.querySelector('[data-world]'));
}
hub.querySelectorAll('[data-hub-tab]').forEach((tab) => tab.addEventListener('click', () => showHub(tab.dataset.hubTab)));
hub.querySelectorAll('[data-mid-tab]').forEach((tab) => tab.addEventListener('click', () => showMid(tab.dataset.midTab)));
// Old links: /community/chat, /community/feed and /community/map.
const legacyTab = location.pathname.split('/')[2];
const narrow = matchMedia('(max-width: 1100px)').matches;
if (legacyTab === 'feed') { showHub('trending'); showMid('comments'); }
else if (legacyTab === 'chat') { showHub('talk'); showMid('world'); }
else { showHub(narrow ? 'world' : 'talk'); showMid('world'); }

// ---------------------------------------------------------------- arena discussion

const talkFeed = hub.querySelector('[data-talk-feed]');
const composer = hub.querySelector('[data-composer]');
const textarea = hub.querySelector('[data-msg]');
let replyTo = null;

async function messageHtml(message, depth = 0) {
    const replies = depth < 2 ? await Promise.all((message.replies || []).map((reply) => messageHtml(reply, depth + 1))) : [];
    return `<article class="msg${depth ? ' reply' : ''}" data-id="${escapeHtml(message._id)}">
        <header>${await avatar(message.profileAnimal)}<b>${escapeHtml(message.isAnonymous ? 'Anonymous' : message.authorUsername)}</b><time>${ago(message.createdAt)}</time></header>
        <p>${escapeHtml(message.content)}</p>
        <footer>
            <button type="button" class="vote up${message.userVote === 'up' ? ' on' : ''}" data-vote="up" aria-label="Upvote">▲</button>
            <span class="score">${Number(message.score) || 0}</span>
            <button type="button" class="vote down${message.userVote === 'down' ? ' on' : ''}" data-vote="down" aria-label="Downvote">▼</button>
            ${depth === 0 ? '<button type="button" class="link-btn" data-reply>Reply</button>' : ''}
        </footer>
        ${replies.join('')}
    </article>`;
}

async function loadTalk() {
    try {
        const body = await getJson('/api/chat?limit=40');
        const items = await Promise.all((body.data || []).map((message) => messageHtml(message)));
        talkFeed.innerHTML = items.length ? items.join('') : '<p class="empty-state">No posts yet. Start the first debate.</p>';
    } catch {
        talkFeed.innerHTML = '<p class="empty-state">The arena is quiet right now. Try again in a moment.</p>';
    }
}

composer.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!window.ABS_USER) { toast('Log in to post'); setTimeout(() => { location.href = `/login?returnTo=${encodeURIComponent(location.pathname)}`; }, 800); return; }
    const content = textarea.value.trim();
    if (!content) return;
    const response = await fetch('/api/chat', { method: 'POST', credentials: 'same-origin', headers: headers(true), body: JSON.stringify(replyTo ? { content, parentId: replyTo } : { content }) }).catch(() => null);
    const body = await response?.json().catch(() => ({}));
    if (!response?.ok || !body?.success) { sfx.error(); toast(body?.error || 'Could not post. Try again.'); return; }
    sfx.coin();
    textarea.value = '';
    replyTo = null;
    textarea.placeholder = 'Who would win: 100 army ants or one honey badger?';
    loadTalk();
});

talkFeed.addEventListener('click', async (event) => {
    const post = event.target.closest('.msg');
    if (!post) return;
    if (event.target.closest('[data-reply]')) {
        replyTo = post.dataset.id;
        textarea.placeholder = `Reply to ${post.querySelector('b').textContent}…`;
        textarea.focus();
        return;
    }
    const vote = event.target.closest('[data-vote]');
    if (!vote) return;
    if (!window.ABS_USER) { toast('Log in to vote'); return; }
    const voteType = vote.classList.contains('on') ? 'clear' : vote.dataset.vote;
    const response = await fetch('/api/chat', { method: 'PATCH', credentials: 'same-origin', headers: headers(true), body: JSON.stringify({ messageId: post.dataset.id, voteType }) }).catch(() => null);
    if (!response?.ok) { sfx.error(); return; }
    sfx.tick();
    loadTalk();
});

// ---------------------------------------------------------------- animal comments feed

let commentsLoaded = false;
async function loadComments() {
    if (commentsLoaded) return;
    commentsLoaded = true;
    const box = hub.querySelector('[data-comment-feed]');
    try {
        const [body, animals] = await Promise.all([getJson('/api/chat?feed=true&limit=30'), animalsPromise]);
        const items = await Promise.all((body.data || []).map(async (comment) => {
            const animal = comment.animalName ? animals.get(comment.animalName.toLowerCase()) : null;
            const tag = animal ? `<a class="chip chip-cyan" href="/stats/${animal.s}"><img src="${animal.i}" alt="" width="16" height="16">${escapeHtml(animal.n)}</a>` : '';
            return `<article class="msg"><header>${await avatar(comment.profileAnimal)}<b>${escapeHtml(comment.authorUsername)}</b><time>${ago(comment.createdAt)}</time>${tag}</header><p>${escapeHtml(comment.content)}</p>${comment.replyCount ? `<footer class="small muted">${comment.replyCount} ${comment.replyCount === 1 ? 'reply' : 'replies'}</footer>` : ''}</article>`;
        }));
        box.innerHTML = items.length ? items.join('') : '<p class="empty-state">No comments yet.</p>';
    } catch {
        box.innerHTML = '<p class="empty-state">Comments are unavailable right now.</p>';
    }
}

// ---------------------------------------------------------------- fan favorites and players

async function loadFavorites() {
    const box = hub.querySelector('[data-favs]');
    try {
        const [body, animals] = await Promise.all([getJson('/api/rankings'), animalsPromise]);
        const top = (body.data || [])
            .map((row) => ({ name: row.animal.name, net: (row.upvotes || 0) - (row.downvotes || 0), up: row.upvotes || 0 }))
            .filter((row) => row.up > 0)
            .sort((a, b) => b.net - a.net || b.up - a.up)
            .slice(0, 10);
        box.innerHTML = top.length ? top.map((row, index) => {
            const animal = animals.get(row.name.toLowerCase());
            return `<li class="fav"><b class="pos">${index + 1}</b>${animal ? `<img src="${animal.i}" alt="" width="52" height="40" loading="lazy">` : ''}<a href="/stats/${animal?.s || ''}">${escapeHtml(row.name)}</a><span class="net">▲ ${row.net}</span></li>`;
        }).join('') : '<li class="muted small">No votes yet. <a class="link" href="/rankings">Vote on the rankings</a>.</li>';
    } catch {
        box.innerHTML = '<li class="muted small">Votes are unavailable right now.</li>';
    }
}

async function loadPlayers() {
    const box = hub.querySelector('[data-players]');
    try {
        const body = await getJson('/api/community?action=leaderboard&limit=20');
        const rows = await Promise.all((body.data || []).map(async (player) => `<li class="player">
            <b class="pos">${player.rank}</b>${await avatar(player.profileAnimal)}
            <span class="pname"><strong>${escapeHtml(player.username)}</strong><span class="xpbar"><i style="width:${Math.min(100, Number(player.xpProgress) || 0)}%"></i></span></span>
            <span class="lvl" title="Level">${Number(player.level) || 1}</span>
            <span class="bp"><img src="/images/icons/abs/coin.webp" alt="" width="18" height="18">${compact(player.battlePoints)}</span>
        </li>`));
        box.innerHTML = rows.join('') || '<li class="muted small">No players yet.</li>';
    } catch {
        box.innerHTML = '<li class="muted small">The leaderboard is unavailable right now.</li>';
    }
}

// ---------------------------------------------------------------- roblox + site numbers

async function loadRoblox() {
    try {
        const { data } = await getJson('/api/community?action=roblox');
        if (!data?.live || !data.game) return;
        hub.querySelector('[data-rbx-status]').textContent = 'Live';
        const stats = hub.querySelector('[data-rbx-stats]');
        stats.querySelector('[data-rs="playing"]').textContent = compact(data.game.playing);
        stats.querySelector('[data-rs="visits"]').textContent = compact(data.game.visits);
        stats.querySelector('[data-rs="favorites"]').textContent = compact(data.game.favorites);
        stats.hidden = false;
        hub.querySelector('[data-rbx-copy]').textContent = `${data.game.name} is live on Roblox.`;
        if (data.leaderboards?.length) {
            hub.querySelector('[data-rbx-boards]').innerHTML = data.leaderboards.filter((board) => board.top.length).map((board) => `
                <div class="board"><h4>${escapeHtml(board.label)}</h4><ol>${board.top.slice(0, 3).map((entry) => `<li><span>${escapeHtml(entry.name)}</span><b>${compact(entry.value)}</b></li>`).join('')}</ol></div>`).join('');
        }
    } catch { /* optional panel */ }
}

async function loadSiteStats() {
    try {
        const { data } = await getJson('/api/community?action=stats');
        for (const node of hub.querySelectorAll('[data-ss]')) node.textContent = compact(data?.[node.dataset.ss]);
    } catch { /* optional panel */ }
}

document.addEventListener('abs:user', () => {
    hub.querySelector('[data-composer-note]').textContent = `Posting as ${window.ABS_USER.displayName || window.ABS_USER.username}. Be kind.`;
});

loadTalk();
loadFavorites();
loadPlayers();
loadRoblox();
loadSiteStats();
