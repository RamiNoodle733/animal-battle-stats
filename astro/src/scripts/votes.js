// Community up/down votes on animals (existing /api/rankings and /api/votes).
// One vote per animal per day for signed-in users; each vote earns BattlePoints and XP
// (lib/economy.js), shown with showReward.

function normalizeVote(value) {
    if (value === 1 || value === 'up') return 'up';
    if (value === -1 || value === 'down') return 'down';
    return null;
}

function authHeaders() {
    const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
    if (window.ABS_TOKEN) headers.Authorization = `Bearer ${window.ABS_TOKEN}`;
    return headers;
}

// The signed-in player, or null for a guest, as soon as the session check says which.
function whenUserKnown(timeout = 2500) {
    if (window.ABS_USER) return Promise.resolve(window.ABS_USER);
    if (window.ABS_AUTH === 'guest') return Promise.resolve(null);
    return new Promise((resolve) => {
        document.addEventListener('abs:user', (event) => resolve(event?.detail || window.ABS_USER || null), { once: true });
        document.addEventListener('abs:guest', () => resolve(null), { once: true });
        setTimeout(() => resolve(window.ABS_USER || null), timeout);
    });
}

// Map of animal name -> { up, down, mine, id }
export async function loadVotes() {
    const response = await fetch('/api/rankings', { credentials: 'same-origin', headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`rankings ${response.status}`);
    const body = await response.json();
    const map = new Map();
    for (const row of body.data || []) {
        map.set(row.animal.name, { up: row.upvotes || 0, down: row.downvotes || 0, mine: null, id: String(row.animal._id), comments: row.commentCount || 0, winRate: row.winRate, battles: row.totalFights || 0 });
    }
    const user = await whenUserKnown();
    if (user) {
        try {
            const mine = await fetch('/api/votes?myVotes=1', { credentials: 'same-origin', headers: authHeaders() }).then((r) => (r.ok ? r.json() : null));
            const byId = new Map([...map.values()].map((entry) => [entry.id, entry]));
            for (const [id, value] of Object.entries(mine?.data || {})) {
                const entry = byId.get(String(id));
                if (entry) entry.mine = normalizeVote(value);
            }
        } catch { /* votes still render without the user's own marks */ }
    }
    return map;
}

export async function castVote(animalId, animalName, type, current = { up: 0, down: 0, mine: null }) {
    const user = await whenUserKnown(800);
    if (!user) return { needsLogin: true };
    const voteType = current.mine === type ? 'clear' : type;
    const response = await fetch('/api/votes', {
        method: 'POST',
        credentials: 'same-origin',
        headers: authHeaders(),
        body: JSON.stringify({ animalId, voteType })
    });
    if (response.status === 401) return { needsLogin: true };
    const body = await response.json().catch(() => ({}));
    if (!response.ok || !body.success) return { error: body.error || 'Vote failed. Try again in a moment.' };
    const data = body.data || {};
    return {
        entry: {
            ...current,
            up: data.upvotes ?? current.up,
            down: data.downvotes ?? current.down,
            mine: normalizeVote(data.userVote)
        },
        xp: body.xpAwarded ? body.xpAmount : 0,
        reward: body.reward || null
    };
}

// ---------------------------------------------------------------- who would win (matchup calls)

// The crowd's split on a matchup (anyone can read it). Names, not slugs: the API keys matchups by name.
export async function matchupCrowd(nameA, nameB) {
    const query = new URLSearchParams({ action: 'matchup_votes', animal1: nameA, animal2: nameB });
    const response = await fetch(`/api/battles?${query}`, { credentials: 'same-origin', headers: authHeaders() }).catch(() => null);
    const body = response?.ok ? await response.json().catch(() => null) : null;
    return body?.success ? { ...body.data, myCall: body.myCall || null } : null;
}

// Calls a fight for the signed-in player: { data (crowd split), call, reward, card, duplicate }, or
// { needsLogin } / { error }. The same call the Versus screen makes (api/battles.js).
export async function callFight(nameA, nameB, votedFor) {
    const user = await whenUserKnown(800);
    if (!user) return { needsLogin: true };
    const response = await fetch('/api/battles?action=matchup_votes', {
        method: 'POST',
        credentials: 'same-origin',
        headers: authHeaders(),
        body: JSON.stringify({ animal1: nameA, animal2: nameB, votedFor })
    }).catch(() => null);
    if (!response) return { error: 'No connection. Try again in a moment.' };
    if (response.status === 401) return { needsLogin: true };
    const body = await response.json().catch(() => ({}));
    if (response.status === 429) return { error: body.error || 'That is a lot of votes! Take a breather and try again in a few minutes.', slow: true };
    if (!response.ok || !body.success) return { error: body.error || 'Vote failed. Try again in a moment.' };
    return body;
}

// ---------------------------------------------------------------- the fan rankings

// Every animal's place among the fans (net votes, best first), from loadVotes().
export function fanRanking(map) {
    return [...map.entries()]
        .map(([name, entry]) => ({ name, ...entry, net: entry.up - entry.down, total: entry.up + entry.down }))
        .filter((entry) => entry.total > 0)
        .sort((a, b) => b.net - a.net || b.up - a.up);
}

// ---------------------------------------------------------------- guests' votes

// A guest's votes are kept on their device and cast once they log in (at most a day later):
// { kind: 'rank', name, type } or { kind: 'fight', a, b, pick } (names).
const PENDING = 'abs-pending-votes';
const PENDING_MAX_AGE = 36 * 60 * 60 * 1000;

function readPending() {
    try {
        const list = JSON.parse(localStorage.getItem(PENDING) || '[]');
        return Array.isArray(list) ? list.filter((vote) => Date.now() - (vote.at || 0) < PENDING_MAX_AGE) : [];
    } catch {
        return [];
    }
}

function writePending(list) {
    try { localStorage.setItem(PENDING, JSON.stringify(list.slice(-30))); } catch { /* private mode: nothing kept */ }
}

const sameTarget = (x, y) => x.kind === y.kind && (x.kind === 'rank' ? x.name === y.name : [x.a, x.b].sort().join('|') === [y.a, y.b].sort().join('|'));

export function rememberVote(vote) {
    writePending([...readPending().filter((other) => !sameTarget(other, vote)), { ...vote, at: Date.now() }]);
}

export function pendingCount() {
    return readPending().length;
}

// Casts a signed-in player's saved guest votes. Returns how many counted.
export async function flushPendingVotes(map) {
    const list = readPending();
    if (!list.length || !(await whenUserKnown(1500))) return 0;
    writePending([]);
    let counted = 0;
    for (const vote of list) {
        try {
            if (vote.kind === 'rank') {
                const entry = map?.get(vote.name);
                if (!entry || entry.mine === vote.type) continue;
                const result = await castVote(entry.id, vote.name, vote.type, entry);
                if (result.entry) { map.set(vote.name, result.entry); counted += 1; }
            } else if (vote.kind === 'fight') {
                const result = await callFight(vote.a, vote.b, vote.pick);
                if (result.success && !result.duplicate) counted += 1;
                if (result.slow) break;
            }
        } catch { /* one failed vote never stops the rest */ }
    }
    return counted;
}
