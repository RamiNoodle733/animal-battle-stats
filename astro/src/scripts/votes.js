// Community up/down votes on animals (existing /api/rankings and /api/votes).
// One vote per animal per day for signed-in users; each vote earns XP.

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

function whenUserKnown(timeout = 2500) {
    if (window.ABS_USER) return Promise.resolve(window.ABS_USER);
    return new Promise((resolve) => {
        const done = (event) => resolve(event?.detail || null);
        document.addEventListener('abs:user', done, { once: true });
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
        xp: body.xpAwarded ? body.xpAmount : 0
    };
}
