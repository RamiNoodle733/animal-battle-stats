// Tournament: draw a bracket, pick the winner of every fight, crown a champion.
// Signed-in players play ranked: the server draws the roster and records each
// pick (battle ratings, daily reward). Everyone else plays a local bracket.
import engine from '../../../js/battle-engine.js';
import { loadAnimalIndex, escapeHtml, toast } from './site.js';
import { sfx, shake } from './sfx.js';

const model = engine || globalThis.ABSBattleEngine;
const root = document.querySelector('[data-tourney]');
const $ = (selector) => root.querySelector(selector);
const $$ = (selector) => [...root.querySelectorAll(selector)];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt = (value) => (Number.isInteger(Number(value)) ? String(Number(value)) : Number(value).toFixed(1));
const SIZES = [8, 16, 32, 64];
const DUEL = [['attack', 'atk'], ['defense', 'def'], ['agility', 'agi'], ['stamina', 'sta'], ['intelligence', 'int'], ['special', 'spl']];
const VOTE_LIMIT = 20; // community picks recorded per bracket (the API allows 30 per 10 minutes)

const store = {
    get(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
    },
    set(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode */ }
    }
};

const saved = store.get('abs:t-setup', {});
const state = {
    size: SIZES.includes(saved.size) ? saved.size : 16,
    type: typeof saved.type === 'string' ? saved.type : 'all',
    byName: new Map(),
    ratings: new Map(),
    entrants: [],
    winners: [],
    history: [],
    round: 1,
    rounds: 0,
    index: 0,
    submissionId: null,
    rankedBroken: false,
    votes: 0,
    busy: false,
    sim: false,
    done: false,
    startedAt: 0,
    token: 0,
    chain: Promise.resolve()
};
const sides = { a: $('[data-side="a"]'), b: $('[data-side="b"]') };
const startButton = $('[data-start]');
const quitButton = $('[data-quit]');
const indexReady = loadAnimalIndex().then((list) => {
    state.byName = new Map(list.map((animal) => [animal.n, animal]));
    return list;
});

function headers(json = false) {
    const result = { Accept: 'application/json' };
    if (json) result['Content-Type'] = 'application/json';
    if (window.ABS_TOKEN) result.Authorization = `Bearer ${window.ABS_TOKEN}`;
    return result;
}
const post = (url, body, extra = {}) => fetch(url, { method: 'POST', credentials: 'same-origin', headers: headers(true), body: JSON.stringify(body), ...extra });

// Probability that a beats b in the Animal Battle Stats model.
function odds(a, b) {
    const stats = (animal) => ({ attack: animal.atk, defense: animal.def, agility: animal.agi, stamina: animal.sta, intelligence: animal.int, special: animal.spl });
    return model.compare(stats(a), stats(b)).probability;
}

function roundName(round, rounds) {
    const left = rounds - round;
    if (left === 0) return 'Final';
    if (left === 1) return 'Semifinals';
    if (left === 2) return 'Quarterfinals';
    return `Round of ${2 ** (left + 1)}`;
}
function roundShort(round, rounds) {
    const left = rounds - round;
    return ['Final', 'Semis', 'Quarters'][left] || `R${2 ** (left + 1)}`;
}

function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function showStage(name) {
    root.dataset.stage = name;
    $$('[data-pane]').forEach((pane) => { pane.hidden = pane.dataset.pane !== name; });
}

function setBusy(busy) {
    state.busy = busy;
    root.toggleAttribute('data-busy', busy);
}

// ---------------------------------------------------------------- setup

function divisionCount(type) {
    return Number($(`[data-type="${type}"]`)?.dataset.count) || 0;
}

function paintSetup() {
    const pool = divisionCount(state.type);
    if (pool < state.size) state.size = [...SIZES].reverse().find((size) => size <= pool) || 8;
    $$('[data-size]').forEach((button) => {
        const size = Number(button.dataset.size);
        button.disabled = size > pool;
        button.setAttribute('aria-pressed', String(size === state.size));
    });
    $$('[data-type]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.type === state.type)));
}

function paintMode() {
    const user = window.ABS_USER;
    const mode = $('[data-mode]');
    mode.classList.toggle('ranked', Boolean(user));
    mode.querySelector('img').src = `/images/icons/abs/${user ? 'medal' : 'lock'}.webp`;
    $('[data-mode-text]').innerHTML = user
        ? `<b>Ranked</b> Playing as ${escapeHtml(user.displayName || user.username)}. The server draws your bracket, every pick moves the battle ratings and your first finished bracket each day earns XP and BattlePoints.`
        : '<b>Casual</b> <a class="link" href="/login?returnTo=%2Ftournament">Log in</a> to play ranked: your picks move the battle ratings and a finished bracket earns XP and BattlePoints once a day.';
}

async function paintRecent() {
    const champions = store.get('abs:t-champs', []);
    if (!champions.length) return;
    await indexReady;
    const chips = champions.map((entry) => {
        const animal = state.byName.get(entry.n);
        if (!animal) return '';
        return `<a class="t-champ-chip" href="/stats/${animal.s}"><img src="${animal.i}" alt="" width="28" height="24" loading="lazy">${escapeHtml(animal.n)} <small>${Number(entry.size) || ''}</small></a>`;
    }).join('');
    if (!chips) return;
    $('[data-recent-list]').innerHTML = chips;
    $('[data-recent]').hidden = false;
}

async function loadRatings() {
    const list = $('[data-ratings]');
    try {
        const response = await fetch('/api/battles', { headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error(String(response.status));
        const body = await response.json();
        const entries = Object.entries(body.data || {});
        state.ratings = new Map(entries);
        await indexReady;
        const top = entries
            .filter(([name, stats]) => stats.tournamentBattles > 0 && state.byName.has(name))
            .sort((x, y) => y[1].battleRating - x[1].battleRating)
            .slice(0, 20);
        list.innerHTML = top.length ? top.map(([name, stats], index) => {
            const animal = state.byName.get(name);
            return `<li class="t-rate"><b class="pos">${index + 1}</b><img src="${animal.i}" alt="" width="44" height="34" loading="lazy"><a href="/stats/${animal.s}">${escapeHtml(name)}</a><span class="rec" title="Ranked wins and losses">${stats.tournamentWins}-${stats.tournamentBattles - stats.tournamentWins}</span><span class="elo" title="Battle rating">${stats.battleRating}</span></li>`;
        }).join('') : '<li class="muted small">No ranked brackets yet. Be the first to crown a champion.</li>';
    } catch {
        list.innerHTML = '<li class="muted small">Battle ratings are unavailable right now.</li>';
    }
}

// ---------------------------------------------------------------- fights

function current() {
    return [state.entrants[state.index * 2], state.entrants[state.index * 2 + 1]];
}

function fighterHtml(animal, side) {
    const tier = animal.tier.toLowerCase();
    const rating = state.ratings.get(animal.n);
    const record = rating?.tournamentBattles ? `<span class="chip" title="Ranked wins and losses">${rating.tournamentWins}-${rating.tournamentBattles - rating.tournamentWins}</span>` : '';
    return `<button type="button" class="t-card card tier-${tier} bio-${animal.b}" data-pick="${side}" aria-label="${escapeHtml(animal.n)} wins">
            <span class="card-inner">
                <span class="card-power"><b>${fmt(animal.p)}</b><small>PWR</small></span>
                <span class="tier-badge tier-${tier}">${animal.tier}</span>
                <span class="card-art"><img src="${animal.m}" alt="" width="360" height="360" decoding="async"></span>
                <span class="card-plate"><span class="card-name">${escapeHtml(animal.n)}</span><span class="card-meta">${escapeHtml(animal.cls)} · #${animal.r}</span></span>
                <span class="card-glare"></span>
                <span class="t-stamp" aria-hidden="true">K.O.</span>
            </span>
        </button>
        <div class="t-tags">
            <span class="chip chip-gold" title="Battle rating">Elo ${rating?.battleRating ?? 1000}</span>
            ${record}
            <a class="chip chip-cyan" href="/stats/${animal.s}" target="_blank" rel="noopener">Stats ↗</a>
        </div>
        <button type="button" class="btn ${side === 'a' ? 'btn-cyan' : 'btn-hot'} t-pick-btn" data-pick="${side}"><kbd>${side === 'a' ? '←' : '→'}</kbd>Winner</button>`;
}

function paintFight() {
    const [a, b] = current();
    const token = ++state.token;
    for (const [side, animal] of [['a', a], ['b', b]]) {
        sides[side].innerHTML = fighterHtml(animal, side);
        sides[side].className = `t-side side-${side}${reduced ? '' : ` in-${side === 'a' ? 'l' : 'r'}`}`;
    }
    const p = odds(a, b);
    const oddsA = Math.round(p * 100);
    const oa = $('[data-odds-a]');
    const ob = $('[data-odds-b]');
    oa.style.setProperty('--p', `${Math.min(88, Math.max(12, oddsA))}%`);
    ob.style.setProperty('--p', `${Math.min(88, Math.max(12, 100 - oddsA))}%`);
    oa.textContent = `${oddsA}%`;
    ob.textContent = `${100 - oddsA}%`;
    for (const [key, short] of DUEL) {
        const row = $(`[data-stat="${key}"]`);
        const va = Number(a[short]) || 0;
        const vb = Number(b[short]) || 0;
        row.querySelector('[data-va]').textContent = fmt(va);
        row.querySelector('[data-vb]').textContent = fmt(vb);
        row.querySelector('[data-va]').classList.toggle('lead', va >= vb);
        row.querySelector('[data-vb]').classList.toggle('lead', vb > va);
        row.querySelector('[data-ba]').style.setProperty('--v', va);
        row.querySelector('[data-bb]').style.setProperty('--v', vb);
    }
    $('[data-round]').textContent = roundName(state.round, state.rounds);
    $('[data-fight-label]').textContent = `Fight ${state.index + 1} of ${state.entrants.length / 2}`;
    $('[data-progress]').style.width = `${(state.history.length / (2 ** state.rounds - 1)) * 100}%`;
    $('[data-fans]').textContent = '';
    if (!state.sim) loadFans(a, b, token);
    // Warm the next pair's art.
    const next = [state.entrants[state.index * 2 + 2], state.entrants[state.index * 2 + 3]].filter(Boolean);
    for (const animal of next) new Image().src = animal.m;
}

async function loadFans(a, b, token) {
    try {
        const params = new URLSearchParams({ action: 'matchup_votes', animal1: a.n, animal2: b.n });
        const response = await fetch(`/api/battles?${params}`, { headers: { Accept: 'application/json' } });
        const body = await response.json();
        if (token !== state.token || !body.data?.hasVotes) return;
        const total = body.data.totalVotes;
        $('[data-fans]').textContent = `Fans ${body.data.animal1Percentage}–${body.data.animal2Percentage} · ${total} ${total === 1 ? 'vote' : 'votes'}`;
    } catch { /* optional hint */ }
}

function announce(html, ms) {
    const box = $('[data-announcer]');
    box.innerHTML = `<span class="big">${html}</span>`;
    return wait(reduced ? 500 : ms).then(() => { box.innerHTML = ''; });
}

// Ranked picks are recorded strictly in order; a failure drops the bracket
// to casual rather than blocking play.
function record(match, matchIndex) {
    if (!state.submissionId) return;
    const submissionId = state.submissionId;
    state.chain = state.chain.then(async () => {
        if (state.rankedBroken || submissionId !== state.submissionId) return;
        const response = await post('/api/battles', { submissionId, matchIndex, ...match }).catch(() => null);
        if (response?.ok) return;
        const body = await response?.json().catch(() => ({}));
        state.rankedBroken = true;
        paintModeChip();
        toast(`Ranked recording stopped${body?.error ? `: ${body.error}` : ''}. Finishing as casual.`);
    });
}

function vote(a, b, winner) {
    if (!window.ABS_USER || state.votes >= VOTE_LIMIT) return;
    state.votes += 1;
    post('/api/battles?action=matchup_votes', { animal1: a.n, animal2: b.n, votedFor: winner.n }).catch(() => {});
}

function paintModeChip() {
    const chip = $('[data-mode-chip]');
    const ranked = Boolean(state.submissionId) && !state.rankedBroken;
    chip.textContent = ranked ? 'Ranked' : 'Casual';
    chip.classList.toggle('ranked', ranked);
}

async function start() {
    if (state.busy) return;
    setBusy(true);
    startButton.disabled = true;
    const list = await indexReady;
    const pool = state.type === 'all' ? list : list.filter((animal) => animal.t === state.type);
    let roster = null;
    Object.assign(state, { submissionId: null, rankedBroken: false, votes: 0, chain: Promise.resolve() });
    if (window.ABS_USER) {
        try {
            const response = await post('/api/battles?action=tournament_start', { bracketSize: state.size, type: state.type });
            const body = await response.json().catch(() => ({}));
            if (!response.ok || !body.submissionId || !Array.isArray(body.participants)) throw new Error(body.error || 'The ranked bracket could not be created');
            const mapped = body.participants.map((name) => state.byName.get(name));
            if (mapped.some((animal) => !animal)) throw new Error('This ranked bracket has an animal this page does not know yet');
            roster = mapped;
            state.submissionId = body.submissionId;
        } catch (error) {
            toast(`${error.message}. Playing casual instead.`);
        }
    }
    if (!roster) {
        if (pool.length < state.size) {
            toast('Not enough animals in this division for that bracket.');
            setBusy(false);
            startButton.disabled = false;
            return;
        }
        roster = shuffle(pool).slice(0, state.size);
    }
    Object.assign(state, { entrants: roster, winners: [], history: [], round: 1, rounds: Math.log2(roster.length), index: 0, done: false, startedAt: Date.now() });
    store.set('abs:t-setup', { size: state.size, type: state.type });
    paintModeChip();
    showStage('fight');
    startButton.disabled = false;
    sfx.go();
    await announce(`${roundName(1, state.rounds)}<small>${state.size} animals</small>`, 1000);
    paintFight();
    setBusy(false);
}

async function pick(side) {
    if (state.busy || state.done || root.dataset.stage !== 'fight') return;
    setBusy(true);
    const [a, b] = current();
    const winner = side === 'a' ? a : b;
    const loser = side === 'a' ? b : a;
    const pA = odds(a, b);
    const match = { round: state.round, winner: winner.n, loser: loser.n };
    state.history.push({ ...match, p: side === 'a' ? pA : 1 - pA });
    record(match, state.history.length - 1);
    vote(a, b, winner);
    state.winners.push(winner);

    sides[side].classList.add('won');
    sides[side === 'a' ? 'b' : 'a'].classList.add('lost');
    sfx.impact();
    setTimeout(() => sfx.ko(), 140);
    if (!state.sim) shake(root, 0.8);
    $('[data-progress]').style.width = `${(state.history.length / (2 ** state.rounds - 1)) * 100}%`;
    await wait(state.sim ? 320 : reduced ? 300 : 820);
    if (root.dataset.stage !== 'fight') {
        setBusy(false);
        return;
    }

    state.index += 1;
    if (state.index * 2 >= state.entrants.length) {
        if (state.winners.length === 1) {
            await finish();
            setBusy(false);
            return;
        }
        Object.assign(state, { entrants: state.winners, winners: [], index: 0, round: state.round + 1 });
        sfx.go();
        await announce(roundName(state.round, state.rounds), state.sim ? 700 : 1000);
    } else if (!state.sim) {
        sfx.whoosh();
    }
    paintFight();
    setBusy(false);
}

function statsPick() {
    if (state.busy || root.dataset.stage !== 'fight') return;
    const [a, b] = current();
    pick(odds(a, b) >= 0.5 ? 'a' : 'b');
}

async function simRound() {
    if (state.busy || root.dataset.stage !== 'fight') return;
    state.sim = true;
    const round = state.round;
    for (let guard = 0; guard < 64 && !state.done && state.round === round && root.dataset.stage === 'fight'; guard += 1) {
        const [a, b] = current();
        await pick(odds(a, b) >= 0.5 ? 'a' : 'b');
    }
    state.sim = false;
    if (!state.done && root.dataset.stage === 'fight') {
        const [a, b] = current();
        loadFans(a, b, state.token);
    }
}

function quitRanked() {
    if (!state.submissionId || state.done || state.rankedBroken) return;
    const body = JSON.stringify({ submissionId: state.submissionId });
    state.submissionId = null;
    fetch('/api/battles?action=tournament_quit', { method: 'POST', keepalive: true, credentials: 'same-origin', headers: headers(true), body }).catch(() => {});
}

// ---------------------------------------------------------------- results

function podiumCard(animal, crown = false) {
    const tier = animal.tier.toLowerCase();
    return `<a class="card tier-${tier} bio-${animal.b}" href="/stats/${animal.s}">
        ${crown ? '<img class="pod-crown" src="/images/icons/abs/crown.webp" alt="" width="76" height="76">' : ''}
        <span class="card-inner">
            <span class="card-power"><b>${fmt(animal.p)}</b><small>PWR</small></span>
            <span class="tier-badge tier-${tier}">${animal.tier}</span>
            <span class="card-art"><img src="${animal.m}" alt="" width="360" height="360" decoding="async"></span>
            <span class="card-plate"><span class="card-name">${escapeHtml(animal.n)}</span></span>
            <span class="card-glare"></span>
        </span></a>`;
}

function confetti() {
    if (reduced) return;
    const box = $('[data-confetti]');
    const colors = ['#ffd700', '#00d4ff', '#ff6b00', '#35dc8f', '#ff4fc3', '#ffffff'];
    box.innerHTML = Array.from({ length: 70 }, (_, i) => `<i style="--x:${(Math.random() * 100).toFixed(1)}%;--dx:${Math.round(Math.random() * 160 - 80)}px;--d:${(Math.random() * 0.9).toFixed(2)}s;--t:${(2.2 + Math.random() * 1.8).toFixed(2)}s;--r:${Math.round(Math.random() * 900 - 450)}deg;--c:${colors[i % colors.length]}"></i>`).join('');
    setTimeout(() => { box.innerHTML = ''; }, 5200);
}

async function complete() {
    // Snapshot first: "Run it back" may start a new bracket while this waits.
    const { submissionId } = state;
    const history = state.history.map(({ round, winner, loser }) => ({ round, winner, loser }));
    const chain = state.chain;
    if (!submissionId) return null;
    await chain;
    if (state.rankedBroken && state.submissionId === submissionId) return null;
    const payload = {
        submissionId,
        bracketSize: history.length + 1,
        totalMatches: history.length,
        champion: history[history.length - 1].winner,
        matchHistory: history
    };
    const response = await post('/api/battles?action=tournament_complete', payload).catch(() => null);
    const body = await response?.json().catch(() => ({}));
    return { ok: Boolean(response?.ok && body?.success), body: body || {} };
}

function paintReward(result) {
    const box = $('[data-reward]');
    box.hidden = false;
    if (!result) {
        box.innerHTML = window.ABS_USER
            ? 'Casual bracket: this one was not recorded.'
            : 'Casual bracket. <a class="link" href="/login?returnTo=%2Ftournament">Log in</a> to play ranked, move the battle ratings and earn XP.';
        return;
    }
    if (!result.ok) {
        box.textContent = `This ranked bracket could not be recorded${result.body.error ? `: ${result.body.error}` : ''}.`;
        return;
    }
    const reward = result.body.reward;
    if (result.body.duplicate) box.textContent = result.body.message || 'This ranked bracket was already recorded.';
    else if (reward?.awarded) box.innerHTML = `Ranked result recorded. <b>+${reward.xpAdded} XP</b> · <b>+${reward.bpAdded} BP</b>${reward.leveledUp ? ' · <b>Level up!</b>' : ''}`;
    else box.textContent = 'Ranked result recorded. Today’s tournament reward was already claimed.';
    if (reward?.awarded) sfx.coin();
}

async function finish() {
    state.done = true;
    const champion = state.winners[0];
    const final = state.history[state.history.length - 1];
    const runnerUp = state.byName.get(final.loser);
    const semis = state.history.filter((match) => match.round === state.rounds - 1).map((match) => state.byName.get(match.loser)).filter(Boolean);
    const champions = store.get('abs:t-champs', []).filter((entry) => entry && entry.n);
    champions.unshift({ n: champion.n, size: state.size, at: Date.now() });
    store.set('abs:t-champs', champions.slice(0, 6));

    await announce(`${escapeHtml(champion.n)}<small>Champion</small>`, 1300);
    showStage('done');
    $('[data-podium]').innerHTML = `
        <div class="pod pod-2"><div class="pod-art">${runnerUp ? podiumCard(runnerUp) : ''}</div><div class="pod-step"><b>2</b><span>Runner-up</span></div></div>
        <div class="pod pod-1"><div class="pod-art">${podiumCard(champion, true)}</div><div class="pod-step"><b>1</b><span>Champion</span></div></div>
        <div class="pod pod-3"><div class="pod-art">${semis.map((animal) => podiumCard(animal)).join('')}</div><div class="pod-step"><b>3</b><span>Semifinalists</span></div></div>`;

    const fights = state.history.length;
    const upsets = state.history.filter((match) => match.p < 0.5);
    const agree = Math.round(((fights - upsets.length) / fights) * 100);
    const seconds = Math.round((Date.now() - state.startedAt) / 1000);
    const division = $(`[data-type="${state.type}"]`)?.firstChild?.textContent.trim() || 'All animals';
    $('[data-champ]').textContent = champion.n;
    $('[data-recap-meta]').textContent = `${state.size} animals · ${division}`;
    $('[data-nums]').innerHTML = [
        [fights, 'Fights'],
        [upsets.length, 'Upsets'],
        [`${agree}%`, 'With the stats'],
        [`${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`, 'Time']
    ].map(([value, label]) => `<div><b>${value}</b><span>${label}</span></div>`).join('');
    const biggest = [...upsets].sort((x, y) => x.p - y.p)[0];
    $('[data-upset]').textContent = biggest
        ? `Biggest upset: ${biggest.winner} beat ${biggest.loser} with ${Math.round(biggest.p * 100)}% stats odds.`
        : 'No upsets: every pick went with the stats favorite.';
    $('[data-road]').innerHTML = state.history.filter((match) => match.winner === champion.n).map((match) => {
        const foe = state.byName.get(match.loser);
        const pct = Math.round(match.p * 100);
        return `<li><span class="rnd">${roundShort(match.round, state.rounds)}</span>${foe ? `<img src="${foe.i}" alt="" width="30" height="24" loading="lazy">` : '<span></span>'}<span>beat ${escapeHtml(match.loser)}</span><span class="pct${pct < 50 ? ' upset' : ''}" title="Stats odds">${pct}%</span></li>`;
    }).join('');
    $('[data-champ-link]').href = `/stats/${champion.s}`;
    $('[data-reward]').hidden = true;
    sfx.win();
    confetti();
    paintReward(await complete());
}

async function share() {
    const champion = $('[data-champ]').textContent;
    const text = `${champion} won my ${state.size}-animal tournament on Animal Battle Stats. Who wins yours?`;
    const url = 'https://animalbattlestats.com/tournament';
    try {
        if (navigator.share) await navigator.share({ title: 'Animal tournament', text, url });
        else {
            await navigator.clipboard.writeText(`${text} ${url}`);
            toast('Copied to clipboard');
        }
    } catch { /* cancelled */ }
}

// ---------------------------------------------------------------- wiring

$$('[data-size]').forEach((button) => button.addEventListener('click', () => {
    state.size = Number(button.dataset.size);
    paintSetup();
}));
$$('[data-type]').forEach((button) => button.addEventListener('click', () => {
    state.type = button.dataset.type;
    paintSetup();
}));
$$('[data-info-tab]').forEach((tab) => tab.addEventListener('click', () => {
    $('[data-pane="setup"]').dataset.info = tab.dataset.infoTab;
    $$('[data-info-tab]').forEach((other) => other.setAttribute('aria-selected', String(other === tab)));
}));
startButton.addEventListener('click', start);
root.addEventListener('click', (event) => {
    const target = event.target.closest('[data-pick]');
    if (target && root.dataset.stage === 'fight') pick(target.dataset.pick);
});
$('[data-auto="fight"]').addEventListener('click', statsPick);
$('[data-auto="round"]').addEventListener('click', simRound);
quitButton.addEventListener('click', () => {
    const label = quitButton.querySelector('span');
    if (!quitButton.hasAttribute('data-armed')) {
        quitButton.setAttribute('data-armed', '');
        label.textContent = 'Sure?';
        setTimeout(() => { quitButton.removeAttribute('data-armed'); label.textContent = 'Quit'; }, 2600);
        return;
    }
    quitButton.removeAttribute('data-armed');
    label.textContent = 'Quit';
    quitRanked();
    state.done = true;
    state.token += 1;
    showStage('setup');
    sfx.back();
});
$('[data-again]').addEventListener('click', start);
$('[data-new]').addEventListener('click', () => { showStage('setup'); paintRecent(); });
$('[data-share]').addEventListener('click', share);

document.addEventListener('keydown', (event) => {
    if (root.dataset.stage !== 'fight' || event.metaKey || event.ctrlKey || event.altKey) return;
    if (/input|textarea|select/i.test(document.activeElement?.tagName || '') || document.querySelector('dialog[open]')) return;
    const key = event.key.toLowerCase();
    if (key === 'arrowleft' || key === 'a') { event.preventDefault(); pick('a'); }
    else if (key === 'arrowright' || key === 'd') { event.preventDefault(); pick('b'); }
    else if (key === 's') { event.preventDefault(); statsPick(); }
});
window.addEventListener('pagehide', quitRanked);
document.addEventListener('abs:user', paintMode);

paintSetup();
if (window.ABS_USER) paintMode();
paintRecent();
loadRatings();
