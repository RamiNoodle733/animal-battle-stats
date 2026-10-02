// /vote (pages/vote.astro): deals matchups and animals to vote on. A pick goes to the same APIs as
// the Versus screen's call and the rankings' arrows (scripts/votes.js), so it moves the same fan
// numbers; a guest's picks are kept on the device and cast once they log in. ?m=<a>-vs-<b> opens on a
// shared matchup, ?mode=rank&a=<slug> on a shared animal, and ?ch=<code> plays a friend's challenge.
import { loadAnimalIndex, escapeHtml, toast, showReward } from './site.js';
import { loadVotes, castVote, matchupCrowd, callFight, fanRanking, rememberVote, flushPendingVotes, pendingCount } from './votes.js';
import { sfx } from './sfx.js';

const root = document.querySelector('[data-vote-page]');
const $ = (selector) => root.querySelector(selector);
const $$ = (selector) => [...root.querySelectorAll(selector)];
const POOL = JSON.parse(document.getElementById('vote-pool').textContent);
const params = new URLSearchParams(location.search);
const SEEN = 'abs-vote-seen';

let bySlug = new Map();
let byName = new Map();
let votes = new Map();
let user = null;
// Overrated-or-underrated mode: ?mode=rank (shared links) or #rank (links inside the site).
let mode = params.get('mode') === 'rank' || location.hash === '#rank' ? 'rank' : 'fight';
let current = null;
let challenge = null;
let fights = [];
let ranks = [];
const session = { votes: 0, fans: 0, fansSeen: 0, model: 0, modelSeen: 0, picks: [] };

const pct = (part, whole) => (whole > 0 ? Math.round((part / whole) * 100) : 0);
const fmt = (value) => Number(value || 0).toLocaleString('en-US');
const pairKey = (a, b) => [a, b].sort().join('|');

function shuffle(list, weight = () => 1) {
    return list
        .map((item) => ({ item, key: Math.random() * weight(item) }))
        .sort((x, y) => x.key - y.key)
        .map(({ item }) => item);
}

function readSeen() {
    try { return new Set(JSON.parse(localStorage.getItem(SEEN) || '[]')); } catch { return new Set(); }
}
function markSeen(key) {
    const seen = [...readSeen().add(key)].slice(-400);
    try { localStorage.setItem(SEEN, JSON.stringify(seen)); } catch { /* not kept */ }
}

// ---------------------------------------------------------------- the decks

function buildFights() {
    const seen = readSeen();
    const fresh = POOL.filter(([a, b]) => bySlug.has(a) && bySlug.has(b) && !seen.has(pairKey(a, b)));
    const classics = shuffle(fresh.filter((pair) => pair[4]));
    const rest = shuffle(fresh.filter((pair) => !pair[4]));
    // Everything seen already: start over rather than run dry.
    const deck = classics.length + rest.length ? [...classics, ...rest] : shuffle(POOL.filter(([a, b]) => bySlug.has(a) && bySlug.has(b)));
    return deck.map(([a, b, stats, odds]) => ({ a, b, stats, odds }));
}

function buildRanks() {
    // Mostly the animals people know (the higher ranks), with the rest mixed in.
    return shuffle([...bySlug.values()], (animal) => 1 + animal.r / 90);
}

// A shared matchup or animal goes to the front of its deck.
function sharedFirst() {
    const m = (params.get('m') || '').toLowerCase().match(/^([a-z0-9-]+?)-vs-([a-z0-9-]+)$/);
    if (m) {
        const found = POOL.find(([a, b]) => (a === m[1] && b === m[2]) || (a === m[2] && b === m[1]));
        if (found) fights.unshift({ a: found[0], b: found[1], stats: found[2], odds: found[3] });
    }
    const one = bySlug.get((params.get('a') || '').toLowerCase());
    if (one) ranks.unshift(one);
}

// ---------------------------------------------------------------- challenges

function encodeChallenge(data) {
    const bytes = new TextEncoder().encode(JSON.stringify(data));
    let text = '';
    for (const byte of bytes) text += String.fromCharCode(byte);
    return btoa(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function decodeChallenge(code) {
    try {
        const text = atob(code.replace(/-/g, '+').replace(/_/g, '/'));
        const data = JSON.parse(new TextDecoder().decode(Uint8Array.from(text, (char) => char.charCodeAt(0))));
        const list = (Array.isArray(data.p) ? data.p : [])
            .filter((item) => Array.isArray(item) && bySlug.has(item[0]) && bySlug.has(item[1]) && (item[2] === 0 || item[2] === 1))
            .slice(0, 15);
        if (list.length < 3) return null;
        return { by: String(data.n || '').replace(/[^\w .-]/g, '').slice(0, 24) || 'A friend', list, at: 0, matched: 0 };
    } catch {
        return null;
    }
}

function paintChallengeBar() {
    const bar = $('[data-challenge-bar]');
    bar.hidden = !challenge;
    if (!challenge) return;
    bar.textContent = challenge.at >= challenge.list.length
        ? `${challenge.by}'s challenge: you matched ${challenge.matched} of ${challenge.list.length}.`
        : `${challenge.by}'s challenge · fight ${challenge.at + 1} of ${challenge.list.length} · matched ${challenge.matched}`;
}

// ---------------------------------------------------------------- painting

function paintStats() {
    $('[data-stat-votes]').textContent = fmt(session.votes);
    $('[data-stat-fans]').textContent = session.fansSeen ? `${pct(session.fans, session.fansSeen)}%` : '–';
    $('[data-stat-model]').textContent = session.modelSeen ? `${pct(session.model, session.modelSeen)}%` : '–';
    $('[data-challenge]').hidden = session.picks.length < 5;
    const guest = $('[data-guest]');
    guest.hidden = Boolean(user) || session.votes === 0;
    if (!guest.hidden) {
        const kept = pendingCount();
        guest.querySelector('[data-kept]').textContent = kept ? `${kept} vote${kept === 1 ? '' : 's'} saved on this device. ` : 'Guest votes are not counted yet. ';
    }
}

function paintFans() {
    const ranking = fanRanking(votes);
    const row = (entry) => {
        const animal = byName.get(entry.name);
        if (!animal) return '';
        return `<li><a href="/stats/${animal.s}"><img src="${escapeHtml(animal.i)}" alt="" width="34" height="26" loading="lazy" /><span>${escapeHtml(animal.n)}</span><em class="${entry.net > 0 ? 'pos' : 'neg'}">${entry.net > 0 ? '+' : ''}${entry.net}</em></a></li>`;
    };
    const up = ranking.filter((entry) => entry.net > 0).slice(0, 5);
    const down = ranking.filter((entry) => entry.net < 0).reverse().slice(0, 5);
    $('[data-fans-up]').innerHTML = up.map(row).join('') || '<li class="small muted">No votes yet</li>';
    $('[data-fans-down]').innerHTML = down.map(row).join('') || '<li class="small muted">No votes yet</li>';
    $('[data-fans]').hidden = !up.length && !down.length;
}

function setResult(html) {
    $('[data-result]').innerHTML = html;
}

function preload(item) {
    for (const slug of item ? [item.a, item.b] : []) {
        const animal = bySlug.get(slug);
        if (animal) new Image().src = animal.m;
    }
}

function showFight(item) {
    current = { kind: 'fight', ...item };
    root.dataset.state = 'pick';
    for (const [side, slug] of [['a', item.a], ['b', item.b]]) {
        const animal = bySlug.get(slug);
        const card = $(`[data-side="${side}"]`);
        card.classList.remove('is-picked');
        card.setAttribute('aria-label', `${animal.n} wins`);
        const art = card.querySelector('[data-art]');
        art.src = animal.m;
        art.alt = animal.n;
        const tier = card.querySelector('[data-tier]');
        tier.className = `tier-badge sm tier-${animal.tier.toLowerCase()}`;
        tier.textContent = animal.tier;
        card.querySelector('[data-name]').textContent = animal.n;
        card.querySelector('[data-meta]').textContent = `#${animal.r} · PWR ${animal.p}`;
        card.querySelector('[data-pct]').hidden = true;
        card.querySelector('[data-crown]').hidden = true;
    }
    $('[data-q]').textContent = 'Who would win?';
    $('[data-more]').href = `/compare/${item.a}-vs-${item.b}`;
    $('[data-more]').textContent = 'Full matchup';
    setResult('Tap the animal you think wins.');
    $('[data-next]').disabled = true;
    paintChallengeBar();
    preload(fights[0]);
}

function showRank(animal) {
    current = { kind: 'rank', animal };
    root.dataset.state = 'pick';
    $('[data-card-link]').href = `/stats/${animal.s}`;
    const art = $('[data-one-art]');
    art.src = animal.m;
    art.alt = animal.n;
    const tier = $('[data-one-tier]');
    tier.className = `tier-badge tier-${animal.tier.toLowerCase()}`;
    tier.textContent = animal.tier;
    $('[data-one-rank]').textContent = `#${animal.r}`;
    $('[data-one-name]').textContent = animal.n;
    $('[data-one-meta]').textContent = `${animal.tier} tier · PWR ${animal.p} · ${animal.cls}`;
    $('[data-q]').textContent = `Is the ${animal.n} overrated or underrated at #${animal.r}?`;
    $('[data-more]').href = `/stats/${animal.s}`;
    $('[data-more]').textContent = 'Its stats';
    $$('[data-rank]').forEach((button) => button.classList.remove('on'));
    $('[data-split]').hidden = true;
    setResult('Stronger than its rank, or weaker?');
    $('[data-next]').disabled = true;
    paintChallengeBar();
    if (ranks[0]) new Image().src = ranks[0].m;
}

function next() {
    if (mode === 'fight') {
        if (challenge && challenge.at < challenge.list.length) {
            const [a, b] = challenge.list[challenge.at];
            const pooled = POOL.find(([x, y]) => (x === a && y === b) || (x === b && y === a));
            showFight({ a, b, stats: pooled ? (pooled[0] === a ? pooled[2] : 1 - pooled[2]) : null, odds: pooled ? pooled[3] : null });
            return;
        }
        if (!fights.length) fights = buildFights();
        showFight(fights.shift());
    } else {
        if (!ranks.length) ranks = buildRanks();
        showRank(ranks.shift());
    }
}

// ---------------------------------------------------------------- voting

async function pickFight(side) {
    if (root.dataset.state !== 'pick' || current?.kind !== 'fight') return;
    root.dataset.state = 'busy';
    const a = bySlug.get(current.a);
    const b = bySlug.get(current.b);
    const picked = side === 'a' ? a : b;
    const card = $(`[data-side="${side}"]`);
    card.classList.add('is-picked');
    sfx.select();

    let crowd = null;
    let note = '';
    let counted = false;
    if (user) {
        const result = await callFight(a.n, b.n, picked.n);
        if (result.success) {
            crowd = result.data;
            counted = !result.duplicate;
            if (result.duplicate) note = ' You already voted on this one today, so it counts once.';
            if (result.reward?.awarded) showReward(result.reward, card);
            if (result.card) setTimeout(() => toast(`You won the ${result.card.name} card! See it in your collection.`), 1200);
        } else if (result.needsLogin) {
            user = null;
        } else if (result.error) {
            toast(result.error);
        }
    }
    if (!user) rememberVote({ kind: 'fight', a: a.n, b: b.n, pick: picked.n });
    crowd ||= await matchupCrowd(a.n, b.n);

    // The fans' split, with this vote in it (a guest's is shown, not sent).
    let votesA = crowd?.animal1Votes || 0;
    let votesB = crowd?.animal2Votes || 0;
    if (!counted && !note) { if (side === 'a') votesA += 1; else votesB += 1; }
    const total = votesA + votesB;
    const others = { a: votesA - (side === 'a' ? 1 : 0), b: votesB - (side === 'b' ? 1 : 0) };
    for (const [key, count] of [['a', votesA], ['b', votesB]]) {
        const box = $(`[data-side="${key}"] [data-pct]`);
        box.hidden = false;
        box.querySelector('[data-pct-n]').textContent = `${pct(count, total)}%`;
        box.querySelector('[data-pct-bar]').style.setProperty('--p', `${pct(count, total)}%`);
    }
    const statsSide = current.stats === 0 ? 'a' : current.stats === 1 ? 'b' : null;
    if (statsSide) $(`[data-side="${statsSide}"] [data-crown]`).hidden = false;

    session.votes += 1;
    session.picks.push([current.a, current.b, side === 'a' ? 0 : 1]);
    if (others.a + others.b > 0) {
        session.fansSeen += 1;
        if (others[side] > others[side === 'a' ? 'b' : 'a']) session.fans += 1;
    }
    if (statsSide) {
        session.modelSeen += 1;
        if (statsSide === side) session.model += 1;
    }
    if (challenge && challenge.at < challenge.list.length) {
        if (challenge.list[challenge.at][2] === (side === 'a' ? 0 : 1)) challenge.matched += 1;
        challenge.at += 1;
    }
    markSeen(pairKey(current.a, current.b));

    const fans = total > 1
        ? `<b>${pct(side === 'a' ? votesA : votesB, total)}%</b> of ${fmt(total)} fans picked the ${escapeHtml(picked.n)}.`
        : `You're the first fan to vote on this one.`;
    const winner = statsSide ? (statsSide === 'a' ? a : b) : null;
    const stats = !winner ? ''
        : winner === picked ? ` The stats agree: <b class="good">${escapeHtml(winner.n)}</b> wins ${current.odds}% of the time.`
            : ` The stats favour the <b>${escapeHtml(winner.n)}</b> (${current.odds}%).`;
    let done = '';
    if (challenge && challenge.at === challenge.list.length && !challenge.shown) {
        challenge.shown = true;
        done = `<br><b>Challenge done: you matched ${escapeHtml(challenge.by)} on ${challenge.matched} of ${challenge.list.length}.</b> Send your own from Your votes.`;
        sfx.win();
    }
    setResult(`${fans}${stats}${note}${done}`);
    root.dataset.state = 'result';
    $('[data-next]').disabled = false;
    paintStats();
    paintChallengeBar();
}

async function pickRank(type) {
    if (root.dataset.state !== 'pick' || current?.kind !== 'rank') return;
    root.dataset.state = 'busy';
    const animal = current.animal;
    const button = $(`[data-rank="${type}"]`);
    button.classList.add('on');
    sfx.select();
    let entry = votes.get(animal.n) || { up: 0, down: 0, mine: null };
    let note = '';
    let counted = false;
    if (user && entry.id) {
        if (entry.mine === type) {
            note = ` You already said ${type === 'up' ? 'underrated' : 'overrated'} today.`;
        } else {
            const result = await castVote(entry.id, animal.n, type, entry);
            if (result.entry) {
                entry = result.entry;
                votes.set(animal.n, entry);
                counted = true;
                if (result.reward?.awarded) showReward(result.reward, button);
            } else if (result.needsLogin) {
                user = null;
            } else if (result.error) {
                toast(result.error);
            }
        }
    }
    if (!user) rememberVote({ kind: 'rank', name: animal.n, type });
    let up = entry.up || 0;
    let down = entry.down || 0;
    if (!counted && !note) { if (type === 'up') up += 1; else down += 1; }
    const total = up + down;
    $('[data-split]').hidden = false;
    $('[data-split-bar]').style.setProperty('--p', `${pct(up, total)}%`);
    const mine = type === 'up' ? up : down;
    const others = { up: up - (type === 'up' ? 1 : 0), down: down - (type === 'down' ? 1 : 0) };
    session.votes += 1;
    if (others.up + others.down > 0) {
        session.fansSeen += 1;
        if (others[type] > others[type === 'up' ? 'down' : 'up']) session.fans += 1;
    }
    setResult(total > 1
        ? `<b>${pct(mine, total)}%</b> of ${fmt(total)} fans say the ${escapeHtml(animal.n)} is ${type === 'up' ? 'underrated' : 'overrated'} at #${animal.r}.${note}`
        : `You're the first fan to vote on the ${escapeHtml(animal.n)}.${note}`);
    root.dataset.state = 'result';
    $('[data-next]').disabled = false;
    paintStats();
    paintFans();
}

// ---------------------------------------------------------------- sharing

async function share({ title, text, url }) {
    try {
        if (navigator.share) {
            await navigator.share({ title, text, url });
            return;
        }
    } catch (error) {
        if (error?.name === 'AbortError') return;
    }
    try {
        await navigator.clipboard.writeText(`${text} ${url}`);
        toast('Link copied. Paste it anywhere.');
    } catch {
        toast(url);
    }
}

function shareCurrent() {
    if (!current) return;
    if (current.kind === 'fight') {
        const a = bySlug.get(current.a);
        const b = bySlug.get(current.b);
        const mine = $('.vt-pick.is-picked [data-name]')?.textContent;
        share({
            title: `${a.n} vs ${b.n}: who would win?`,
            text: `Who would win, ${a.n} or ${b.n}?${mine ? ` I picked the ${mine}.` : ''} Vote:`,
            url: `${location.origin}/vote?m=${current.a}-vs-${current.b}`
        });
    } else {
        const animal = current.animal;
        share({ title: `Is the ${animal.n} overrated?`, text: `Is the ${animal.n} overrated or underrated at #${animal.r}? Vote:`, url: `${location.origin}/vote?mode=rank&a=${animal.s}` });
    }
    window.gtag?.('event', 'share', { method: 'vote', content_type: current.kind });
}

function makeChallenge() {
    const picks = session.picks.slice(-10);
    if (picks.length < 3) return;
    const name = user?.displayName || user?.username || '';
    share({
        title: 'Animal Battle Stats challenge',
        text: `I picked the winners of ${picks.length} animal fights${name ? ` (${name})` : ''}. Can you match my picks?`,
        url: `${location.origin}/vote?ch=${encodeChallenge({ n: name, p: picks })}`
    });
}

// ---------------------------------------------------------------- wiring

function setMode(value) {
    mode = value;
    root.dataset.mode = mode;
    $$('[data-mode-btn]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.modeBtn === mode)));
    $('[data-one]').hidden = mode !== 'rank';
    const query = new URLSearchParams(location.search);
    query.delete('mode');
    query.delete('m');
    query.delete('a');
    history.replaceState(null, '', `${location.pathname}${query.toString() ? `?${query}` : ''}${mode === 'rank' ? '#rank' : ''}`);
    next();
}

$$('[data-mode-btn]').forEach((button) => button.addEventListener('click', () => {
    if (button.dataset.modeBtn === mode) return;
    sfx.tab();
    setMode(button.dataset.modeBtn);
}));
$$('[data-side]').forEach((card) => card.addEventListener('click', () => pickFight(card.dataset.side)));
$$('[data-rank]').forEach((button) => button.addEventListener('click', () => pickRank(button.dataset.rank)));
$('[data-next]').addEventListener('click', () => { sfx.tick(); next(); });
$('[data-skip]').addEventListener('click', () => { if (current?.kind === 'fight') markSeen(pairKey(current.a, current.b)); next(); });
$('[data-share]').addEventListener('click', shareCurrent);
$('[data-make-challenge]').addEventListener('click', makeChallenge);
document.addEventListener('keydown', (event) => {
    if (event.target.closest('input, textarea, select') || event.metaKey || event.ctrlKey || event.altKey) return;
    if (root.dataset.state === 'result' && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); next(); return; }
    if (mode === 'fight' && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) pickFight(event.key === 'ArrowLeft' ? 'a' : 'b');
    if (mode === 'rank' && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) { event.preventDefault(); pickRank(event.key === 'ArrowUp' ? 'up' : 'down'); }
});

function whoIsPlaying() {
    if (window.ABS_AUTH === 'user') return Promise.resolve(window.ABS_USER || null);
    if (window.ABS_AUTH === 'guest') return Promise.resolve(null);
    return new Promise((resolve) => {
        document.addEventListener('abs:user', () => resolve(window.ABS_USER || null), { once: true });
        document.addEventListener('abs:guest', () => resolve(null), { once: true });
        setTimeout(() => resolve(window.ABS_USER || null), 4000);
    });
}

async function start() {
    const list = await loadAnimalIndex();
    if (!list.length) {
        setResult('The animals could not load. Check your connection and refresh.');
        return;
    }
    bySlug = new Map(list.map((animal) => [animal.s, animal]));
    byName = new Map(list.map((animal) => [animal.n, animal]));
    fights = buildFights();
    ranks = buildRanks();
    sharedFirst();
    if (params.get('ch')) {
        challenge = decodeChallenge(params.get('ch'));
        if (challenge) mode = 'fight';
        else toast('That challenge link is broken, so here are new fights.');
    }
    setMode(mode);
    paintStats();
    user = await whoIsPlaying();
    votes = await loadVotes().catch(() => new Map());
    paintFans();
    if (user) {
        const counted = await flushPendingVotes(votes);
        if (counted) {
            toast(`${counted} vote${counted === 1 ? '' : 's'} you made before logging in now count.`);
            paintFans();
        }
    }
    paintStats();
}

start();
