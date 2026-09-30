// Versus screen: pick two fighters, compare the tale of the tape, then watch an
// animated fight. The fight's winner is drawn with the model's probability, so
// an underdog can still pull off the upset now and then.
// The odds stay hidden until the fight (or "Show"), so a call is a real call.
// Either side can be a crowd (the count box: "500 gorillas vs 23 army ants"),
// scored by the engine's compareGroups, or the Human (scripts/human.js).
// CALL IT (signed in, 1 vs 1 only): pick the winner first. The server draws the
// fight you called (once per matchup a day), pays BattlePoints and XP, and a
// right call builds a streak with a bonus, like the game's Who Would Win? show.
import engine from '../../../js/battle-engine.js';
import { loadAnimalIndex, escapeHtml, toast, artVars, showReward } from './site.js';
import { sfx, shake } from './sfx.js';
import { mountComments } from './comments.js';
import { trackFight } from './track.js';
import { HUMAN } from './human.js';

// The engine is a UMD file shared with the server build: bundlers hand back
// its CommonJS export, plain browsers get the global.
const model = engine || globalThis.ABSBattleEngine;
const root = document.querySelector('[data-vs]');
const STATS = [
    ['attack', 'atk', 'Attack'], ['defense', 'def', 'Defense'], ['agility', 'agi', 'Agility'],
    ['stamina', 'sta', 'Stamina'], ['intelligence', 'int', 'Intelligence'], ['special', 'spl', 'Special']
];
const BIOME = { savanna: 'Savanna', forest: 'Forest', jungle: 'Jungle', wetlands: 'Wetlands', desert: 'Desert', mountains: 'Mountains', arctic: 'Arctic', ocean: 'Ocean' };
const STEPS = [1, 2, 3, 5, 10, 20, 50, 100, 500, 1000, 5000, 10000, 100000, 1000000];
const MAX_COUNT = 1000000;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fmt = (value) => (Number.isInteger(Number(value)) ? String(Number(value)) : Number(value).toFixed(1));
const num = (value) => Number(value).toLocaleString('en-US');

const state = { a: root.dataset.a, b: root.dataset.b, na: 1, nb: 1, picking: 'b', fighting: false, index: new Map(), fan: null, sealedKey: null };
const sides = { a: root.querySelector('[data-side="a"]'), b: root.querySelector('[data-side="b"]') };
const picker = root.querySelector('[data-picker]');
const grid = root.querySelector('[data-pk-grid]');
const search = root.querySelector('[data-pk-q]');
const announcer = root.querySelector('[data-announcer]');
const fightButton = root.querySelector('[data-fight]');
const callBox = root.querySelector('[data-call]');
const callNote = root.querySelector('[data-call-note]');
const callStreak = root.querySelector('[data-call-streak]');
const CALL_NOTE = 'Pick who wins, then watch the fight. Right calls build a streak.';

function toModel(animal) {
    return { attack: animal.atk, defense: animal.def, agility: animal.agi, stamina: animal.sta, intelligence: animal.int, special: animal.spl, weight_kg: animal.w };
}

// "Gorilla" -> "Gorillas", "Gray Wolf" -> "Gray Wolves"; the last word only.
const SAME = new Set(['fish', 'sheep', 'deer', 'moose', 'bison', 'buffalo', 'squid', 'salmon', 'trout', 'shrimp', 'elk', 'swine', 'cattle', 'catfish', 'swordfish', 'tuna', 'pike', 'carp', 'grouper', 'sunfish', 'goldfish', 'piranha']);
const IRREGULAR = { wolf: 'wolves', mouse: 'mice', goose: 'geese', ox: 'oxen', human: 'humans', louse: 'lice', calf: 'calves', octopus: 'octopuses' };
function plural(name) {
    const words = String(name).split(' ');
    const last = words.pop();
    const lower = last.toLowerCase();
    let out;
    if (SAME.has(lower)) out = last;
    else if (IRREGULAR[lower]) out = last.charAt(0) + IRREGULAR[lower].slice(1);
    else if (/(s|x|z|ch|sh)$/i.test(last)) out = `${last}es`;
    else if (/[^aeiou]y$/i.test(last)) out = `${last.slice(0, -1)}ies`;
    else out = `${last}s`;
    return [...words, out].join(' ');
}
const label = (animal, count) => (count > 1 ? `${num(count)} ${plural(animal.n)}` : animal.n);

function weightText(kg) {
    if (!(kg > 0)) return '—';
    if (kg < 0.001) return `${fmt(Math.round(kg * 1e7) / 10)} mg`;
    if (kg < 1) return `${kg < 0.01 ? fmt(Math.round(kg * 10000) / 10) : Math.round(kg * 1000)} g`;
    if (kg >= 1000) return `${(kg / 1000).toFixed(1)} t`;
    return `${kg < 100 ? fmt(Math.round(kg * 10) / 10) : Math.round(kg)} kg`;
}
function lengthText(cm) { return cm > 0 ? (cm >= 100 ? `${(cm / 100).toFixed(2)} m` : `${fmt(cm)} cm`) : '—'; }
function speedText(mps) { return mps > 0 ? `${Math.round(mps * 3.6)} km/h` : '—'; }
function biteText(psi) { return psi > 0 ? `${Math.round(psi).toLocaleString('en-US')} PSI` : '—'; }

function probability(a, b) {
    return model.compareGroups(toModel(a), toModel(b), state.na, state.nb, a.w, b.w).probability;
}

// ---------------------------------------------------------------- sealed odds

const matchupKey = () => `${state.a}|${state.b}|${state.na}|${state.nb}`;
function seal() {
    state.sealedKey = matchupKey();
    root.classList.add('is-sealed');
}
function reveal() {
    root.classList.remove('is-sealed');
}
root.querySelector('[data-reveal-btn]').addEventListener('click', () => { sfx.flip(); reveal(); });
root.querySelector('[data-hide-odds]').addEventListener('click', () => { sfx.flip(); root.classList.add('is-sealed'); });

// ---------------------------------------------------------------- render

function paintCrowd(side, animal) {
    const count = side === 'a' ? state.na : state.nb;
    const node = sides[side];
    const art = node.querySelector('[data-f-art]');
    art.querySelectorAll('img.ghost').forEach((img) => img.remove());
    art.classList.toggle('is-crowd', count > 1);
    const main = art.querySelector('img:not(.ghost)');
    for (let index = Math.min(2, count - 1); index >= 1; index -= 1) {
        const ghost = main.cloneNode();
        ghost.classList.add('ghost', `g${index}`);
        ghost.alt = '';
        ghost.removeAttribute('fetchpriority');
        art.insertBefore(ghost, main);
    }
    const badge = node.querySelector('[data-crowd]');
    badge.hidden = count < 2;
    badge.textContent = `×${num(count)}`;
    node.querySelector('[data-f-count-label]').textContent = count > 1 ? `${num(count)}×` : '';
    node.querySelector('[data-count-box]').classList.toggle('is-crowd', count > 1);
    const input = node.querySelector('[data-count]');
    if (Number(input.value) !== count) input.value = String(count);
    input.setAttribute('aria-label', `How many ${animal ? plural(animal.n).toLowerCase() : 'fighters'}`);
}

function paintFighter(side, animal) {
    const node = sides[side];
    const tierClass = animal.h ? 'h' : animal.tier.toLowerCase();
    node.className = node.className.replace(/tier-\w/, `tier-${tierClass}`).replace(/bio-\w+/, `bio-${animal.b}`);
    node.classList.toggle('is-human', Boolean(animal.h));
    node.querySelector('[data-f-name]').textContent = animal.n;
    const tier = node.querySelector('[data-f-tier]');
    tier.className = `tier-badge tier-${tierClass}`;
    tier.textContent = animal.h ? 'H' : animal.tier;
    tier.title = animal.h ? 'Human: not ranked with animals' : `${animal.tier} tier`;
    node.querySelector('[data-f-meta]').textContent = animal.h ? 'Human · not ranked with animals' : `${animal.cls} · ${BIOME[animal.b] || ''} · #${animal.r}`;
    const link = node.querySelector('[data-f-link]');
    if (animal.h) link.removeAttribute('href');
    else link.href = `/stats/${animal.s}`;
    const img = node.querySelector('[data-f-art] img:not(.ghost)');
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
    img.src = animal.m;
    img.alt = animal.n;
    img.style.setProperty('--ar', animal.ar || 1);
    img.style.setProperty('--k', animal.k || 1);
    img.removeAttribute('width');
    img.removeAttribute('height');
    node.querySelector('.hp').className = 'hp';
    node.querySelector('[data-hp]').style.width = '100%';
    node.classList.remove('ko', 'winner', 'lunge', 'hit');
    paintCrowd(side, animal);
}

function paintRow(row, va, vb, ta, tb, pa = va, pb = vb) {
    const left = row.querySelector('[data-va]');
    const right = row.querySelector('[data-vb]');
    left.textContent = ta;
    right.textContent = tb;
    left.className = va > vb ? 'lead' : '';
    right.className = vb > va ? 'lead' : '';
    row.querySelector('[data-ba]').style.setProperty('--v', String(pa));
    row.querySelector('[data-bb]').style.setProperty('--v', String(pb));
}

function paintMatchup() {
    const a = state.index.get(state.a);
    const b = state.index.get(state.b);
    if (!a || !b) return;
    if (state.sealedKey !== matchupKey()) seal();
    const odds = probability(a, b);
    const oddsA = Math.round(odds * 100);
    const oddsB = 100 - oddsA;
    const winnerSide = oddsA >= 50 ? 'a' : 'b';
    const winner = winnerSide === 'a' ? a : b;
    const edge = Math.max(oddsA, oddsB);
    const strength = edge >= 85 ? 'decisive' : edge >= 70 ? 'clear edge' : edge >= 58 ? 'slight edge' : 'toss-up';
    root.querySelector('[data-t-a]').textContent = label(a, state.na);
    root.querySelector('[data-t-b]').textContent = label(b, state.nb);
    const oa = root.querySelector('[data-odds-a]');
    const ob = root.querySelector('[data-odds-b]');
    oa.style.setProperty('--p', `${Math.max(8, oddsA)}%`);
    ob.style.setProperty('--p', `${Math.max(8, oddsB)}%`);
    oa.textContent = `${oddsA}%`;
    ob.textContent = `${oddsB}%`;
    root.querySelector('[data-winner]').textContent = label(winner, winnerSide === 'a' ? state.na : state.nb);
    root.querySelector('[data-strength]').textContent = strength;

    for (const [key, short] of STATS) {
        const va = Number(a[short]) || 0;
        const vb = Number(b[short]) || 0;
        paintRow(root.querySelector(`[data-stat="${key}"]`), va, vb, fmt(va), fmt(vb));
    }
    const ratio = (x, y) => { const max = Math.max(x || 0, y || 0); return max > 0 ? [((x || 0) / max) * 100, ((y || 0) / max) * 100] : [0, 0]; };
    const facts = {
        weight: [a.w, b.w, weightText(a.w), weightText(b.w)],
        speed: [a.v, b.v, speedText(a.v), speedText(b.v)],
        bite: [a.bf, b.bf, biteText(a.bf), biteText(b.bf)],
        size: [a.len || a.ht, b.len || b.ht, lengthText(a.len || a.ht), lengthText(b.len || b.ht)]
    };
    for (const [key, [va, vb, ta, tb]] of Object.entries(facts)) {
        const row = root.querySelector(`[data-fact="${key}"]`);
        if (!row) continue;
        const [pa, pb] = ratio(va, vb);
        paintRow(row, va || 0, vb || 0, ta, tb, pa, pb);
    }

    const verdict = root.querySelector('[data-verdict-text]');
    if (verdict && (a.s !== root.dataset.a || b.s !== root.dataset.b || state.na > 1 || state.nb > 1)) {
        const loser = winner === a ? b : a;
        const leads = STATS.filter(([, short]) => (winner[short] || 0) > (loser[short] || 0)).map(([, , name]) => name.toLowerCase());
        const crowd = state.na > 1 || state.nb > 1;
        verdict.innerHTML = `<p>${escapeHtml(label(winner, winnerSide === 'a' ? state.na : state.nb))} win${winnerSide === 'a' ? (state.na > 1 ? '' : 's') : (state.nb > 1 ? '' : 's')} this ${crowd ? 'group fight' : 'matchup'} ${edge}% of the time in the Animal Battle Stats model (${strength}).${crowd ? ' Numbers count for a lot, but much smaller animals get less from them against much heavier ones.' : ''} One on one, the ${escapeHtml(winner.n)} leads in ${leads.length} of 6 battle stats${leads.length ? ` (${leads.join(', ')})` : ''}, with a power index of ${fmt(winner.p)} against ${fmt(loser.p)}.</p>
            <p>${a.h || b.h ? 'The Human is an average adult man, unarmed and untrained. ' : ''}Open each animal's profile for sources, measurements and how it fights.</p>`;
        root.querySelector('[data-faq]')?.setAttribute('hidden', '');
    }

    root.querySelector('[data-fan-a]').textContent = label(a, state.na);
    root.querySelector('[data-fan-b]').textContent = label(b, state.nb);
    grid.querySelectorAll('.pk-card').forEach((card) => card.classList.toggle('is-current', card.dataset.pkSlug === a.s || card.dataset.pkSlug === b.s));
    const params = new URLSearchParams({ a: a.s, b: b.s });
    if (state.na > 1) params.set('na', String(state.na));
    if (state.nb > 1) params.set('nb', String(state.nb));
    // A matchup page keeps its own address until the matchup changes.
    const ownPage = a.s === root.dataset.a && b.s === root.dataset.b && state.na === 1 && state.nb === 1;
    if ((location.pathname === '/compare' || !ownPage) && location.search !== `?${params}`) history.replaceState(null, '', `/compare?${params}`);
    document.title = `${label(a, state.na)} vs ${label(b, state.nb)}: Who Would Win? | Animal Battle Stats`;
    loadFanVotes(a, b);
    document.dispatchEvent(new CustomEvent('abs:matchup'));
}

// ---------------------------------------------------------------- counts

function setCount(side, value) {
    const count = Math.max(1, Math.min(MAX_COUNT, Math.floor(Number(value) || 1)));
    if (state[`n${side}`] === count) { paintCrowd(side, state.index.get(state[side])); return; }
    state[`n${side}`] = count;
    paintCrowd(side, state.index.get(state[side]));
    paintMatchup();
}

for (const side of ['a', 'b']) {
    const box = sides[side].querySelector('[data-count-box]');
    const input = box.querySelector('[data-count]');
    box.querySelectorAll('[data-count-step]').forEach((button) => button.addEventListener('click', () => {
        if (state.fighting) return;
        const current = state[`n${side}`];
        const up = Number(button.dataset.countStep) > 0;
        const next = up ? STEPS.find((step) => step > current) || MAX_COUNT : [...STEPS].reverse().find((step) => step < current) || 1;
        sfx.select();
        setCount(side, next);
    }));
    input.addEventListener('change', () => { if (!state.fighting) setCount(side, input.value); });
    input.addEventListener('keydown', (event) => { if (event.key === 'Enter') input.blur(); });
    input.addEventListener('focus', () => input.select());
}

// ---------------------------------------------------------------- picker

function cardHtml(animal) {
    const tier = animal.h ? 'h' : animal.tier.toLowerCase();
    return `<button type="button" class="pk-card${animal.h ? ' is-human' : ''}" data-pk-slug="${animal.s}" data-pk-name="${escapeHtml(animal.n.toLowerCase())}">
        <span class="tier-badge tier-${tier}">${animal.h ? 'H' : animal.tier}</span>
        <span class="pk-art"><img src="${animal.i}" alt="" style="${artVars(animal)}" width="96" height="96" loading="lazy" decoding="async"></span>
        <b>${escapeHtml(animal.n)}</b>${animal.h ? '<small>Not an animal</small>' : ''}
    </button>`;
}

function openPicker(side) {
    if (state.fighting) return;
    state.picking = side;
    root.querySelector('[data-picker-title]').textContent = `Fighter ${side === 'a' ? '1' : '2'}`;
    search.value = '';
    grid.querySelectorAll('.pk-card').forEach((card) => { card.hidden = false; });
    sfx.whoosh();
    picker.showModal();
    // Phones keep the keyboard closed until the search box is tapped.
    if (matchMedia('(pointer: fine)').matches) search.focus({ preventScroll: true });
    grid.scrollTop = 0;
}

function choose(slug) {
    if (state.fighting) return;
    const animal = state.index.get(slug);
    if (!animal) return;
    const other = state.picking === 'a' ? state.b : state.a;
    if (slug === other) { sfx.error(); toast('Pick a different fighter'); return; }
    state[state.picking] = slug;
    paintFighter(state.picking, animal);
    sfx.flip();
    picker.close();
    paintMatchup();
}

root.querySelectorAll('[data-pick]').forEach((button) => button.addEventListener('click', () => openPicker(button.dataset.pick)));
root.querySelectorAll('[data-f-art]').forEach((art) => art.addEventListener('click', () => openPicker(art.closest('[data-side]').dataset.side)));
root.querySelector('[data-pk-close]').addEventListener('click', () => picker.close());
picker.addEventListener('click', (event) => { if (event.target === picker) picker.close(); });
grid.addEventListener('click', (event) => {
    const card = event.target.closest('[data-pk-slug]');
    if (card) choose(card.dataset.pkSlug);
});
search.addEventListener('input', () => {
    const needle = search.value.trim().toLowerCase();
    grid.querySelectorAll('.pk-card').forEach((card) => { card.hidden = Boolean(needle) && !card.dataset.pkName.includes(needle); });
});
search.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const first = grid.querySelector('.pk-card:not([hidden])');
    if (first) choose(first.dataset.pkSlug);
});

// ---------------------------------------------------------------- call it

function paintStreak(streak) {
    callStreak.hidden = !(streak > 0);
    callStreak.textContent = `Streak ${streak}`;
}

function resetCall() {
    const crowd = state.na > 1 || state.nb > 1 || state.index.get(state.a)?.h || state.index.get(state.b)?.h;
    callBox.dataset.state = crowd ? 'off' : 'open';
    callBox.querySelectorAll('[data-vote-side]').forEach((button) => button.classList.remove('picked', 'right', 'wrong'));
    callNote.textContent = crowd ? 'Calls are for one animal against one animal. Fight to see who wins.' : CALL_NOTE;
    paintStreak(window.ABS_USER?.economy?.callStreak || 0);
}

// Shows a finished call: which pick won, the payout and the streak.
function paintCall(call, a, reward = null, earlier = false) {
    callBox.dataset.state = 'called';
    reveal();
    const pickedSide = call.votedFor === a.n ? 'a' : 'b';
    callBox.querySelectorAll('[data-vote-side]').forEach((button) => {
        const mine = button.dataset.voteSide === pickedSide;
        button.classList.toggle('picked', mine);
        button.classList.toggle('right', mine && call.correct);
        button.classList.toggle('wrong', mine && !call.correct);
    });
    const winner = escapeHtml(call.winner);
    if (earlier) {
        callNote.innerHTML = `You called <b>${escapeHtml(call.votedFor)}</b> today and <b>${winner}</b> won. Call another matchup, or this one again tomorrow.`;
    } else if (call.correct) {
        const streak = reward?.call?.streak || 0;
        callNote.innerHTML = `<b>You called it!</b> ${winner} won${streak > 1 ? `: ${streak} right in a row` : ''}.`;
    } else {
        callNote.innerHTML = `<b>${winner}</b> won this one. Your streak starts again on the next call.`;
    }
    if (reward?.call) paintStreak(reward.call.streak);
}

async function loadFanVotes(a, b) {
    const paBox = root.querySelector('[data-fan-pa]');
    const pbBox = root.querySelector('[data-fan-pb]');
    paBox.textContent = '';
    pbBox.textContent = '';
    resetCall();
    if (a.h || b.h || state.na > 1 || state.nb > 1) return;
    try {
        const response = await fetch(`/api/battles?action=matchup_votes&animal1=${encodeURIComponent(a.n)}&animal2=${encodeURIComponent(b.n)}`, {
            credentials: 'same-origin',
            headers: { Accept: 'application/json', ...(window.ABS_TOKEN ? { Authorization: `Bearer ${window.ABS_TOKEN}` } : {}) }
        });
        const body = await response.json();
        if (!body.success || state.a !== a.s || state.b !== b.s || state.na > 1 || state.nb > 1) return;
        state.fan = body.data;
        if (body.data.totalVotes > 0) {
            paBox.textContent = `${body.data.animal1Percentage}% of fans`;
            pbBox.textContent = `${body.data.animal2Percentage}% of fans`;
        }
        if (body.myCall) paintCall(body.myCall, a, null, true);
    } catch { /* fan votes are optional */ }
}

async function callFight(button) {
    const a = state.index.get(state.a);
    const b = state.index.get(state.b);
    if (!a || !b || state.fighting || callBox.dataset.state !== 'open') return;
    if (!window.ABS_USER) {
        sfx.error();
        callNote.innerHTML = `<a href="/login?returnTo=${encodeURIComponent(location.pathname + location.search)}">Log in</a> to call fights: every call pays BattlePoints and XP.`;
        callNote.style.display = 'block';
        return;
    }
    const votedFor = button.dataset.voteSide === 'a' ? a.n : b.n;
    callBox.dataset.state = 'busy';
    button.classList.add('picked');
    sfx.select();
    const response = await fetch('/api/battles?action=matchup_votes', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...(window.ABS_TOKEN ? { Authorization: `Bearer ${window.ABS_TOKEN}` } : {}) },
        body: JSON.stringify({ animal1: a.n, animal2: b.n, votedFor })
    }).catch(() => null);
    const body = await response?.json().catch(() => null);
    if (!response?.ok || !body?.success) {
        sfx.error();
        toast(response?.status === 429 ? 'Slow down a little, then call again.' : 'That call did not go through. Try again soon.');
        resetCall();
        return;
    }
    if (!body.call) { resetCall(); loadFanVotes(a, b); return; }
    if (body.duplicate) { paintCall(body.call, a, null, true); return; }
    callNote.innerHTML = `You picked <b>${escapeHtml(votedFor)}</b>. Here it comes…`;
    await fight(body.call.winner === a.n ? 'a' : 'b');
    paintCall(body.call, a, body.reward);
    if (body.reward) showReward(body.reward, button);
    if (window.ABS_USER && body.reward?.call) window.ABS_USER.economy = { ...window.ABS_USER.economy, callStreak: body.reward.call.streak };
}

root.querySelectorAll('[data-vote-side]').forEach((button) => button.addEventListener('click', () => callFight(button)));
document.addEventListener('abs:user', () => {
    paintStreak(window.ABS_USER?.economy?.callStreak || 0);
    const a = state.index.get(state.a);
    const b = state.index.get(state.b);
    if (a && b) loadFanVotes(a, b);
});

// ---------------------------------------------------------------- the fight

function say(html, ms = 800) {
    announcer.innerHTML = html;
    return wait(ms).then(() => { announcer.innerHTML = ''; });
}

function spawn(side, className, text = '') {
    const fx = sides[side].querySelector('[data-fx]');
    const node = document.createElement('span');
    node.className = className;
    node.textContent = text;
    fx.appendChild(node);
    setTimeout(() => node.remove(), 1000);
}

function setHp(side, value) {
    const hp = sides[side].querySelector('.hp');
    hp.querySelector('[data-hp]').style.width = `${Math.max(0, value)}%`;
    hp.classList.toggle('mid', value <= 55 && value > 25);
    hp.classList.toggle('low', value <= 25);
}

// Plans a fight whose winner was drawn with the model probability: both sides
// trade blows, bigger stat gaps mean a more lopsided fight, and the winner
// lands the final hit.
function planFight(a, b, odds, forced = null) {
    const winner = forced || (Math.random() < odds ? 'a' : 'b');
    const loser = winner === 'a' ? 'b' : 'a';
    const edge = Math.abs(odds - 0.5) * 2;
    const winnerLeft = Math.round(15 + edge * 55 + Math.random() * 12);
    const exchanges = Math.max(5, Math.round(9 - edge * 4 + Math.random() * 2));
    const fighters = { a, b };
    let first = (a.agi || 0) >= (b.agi || 0) ? 'a' : 'b';
    if (Math.random() < 0.25) first = first === 'a' ? 'b' : 'a';
    const turns = [];
    for (let i = 0; i < exchanges; i += 1) turns.push(i % 2 === 0 ? first : (first === 'a' ? 'b' : 'a'));
    if (turns[turns.length - 1] !== winner) turns.push(winner);
    const hitsOnLoser = turns.filter((side) => side === winner).length;
    const hitsOnWinner = turns.filter((side) => side === loser).length;
    const split = (total, count) => {
        const weights = Array.from({ length: count }, () => 0.6 + Math.random());
        const sum = weights.reduce((acc, value) => acc + value, 0);
        return weights.map((value) => (value / sum) * total);
    };
    const damageOnLoser = split(100, hitsOnLoser);
    const damageOnWinner = split(100 - winnerLeft, Math.max(1, hitsOnWinner));
    let li = 0;
    let wi = 0;
    return {
        winner,
        loser,
        steps: turns.map((attacker, index) => {
            const amount = attacker === winner ? damageOnLoser[li++] : damageOnWinner[wi++];
            const special = amount > 26 || (index === turns.length - 1 && attacker === winner);
            const moves = fighters[attacker].ab || [];
            return {
                attacker,
                defender: attacker === 'a' ? 'b' : 'a',
                amount,
                special,
                move: special && moves.length ? moves[index % moves.length] : null
            };
        })
    };
}

// `forced` = the side that wins a called fight ('a' or 'b'); otherwise drawn here.
async function fight(forced = null) {
    if (state.fighting) return;
    const a = state.index.get(state.a);
    const b = state.index.get(state.b);
    if (!a || !b) return;
    state.fighting = true;
    fightButton.disabled = true;
    trackFight(label(a, state.na), label(b, state.nb));
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const beat = reduced ? 250 : 520;
    const hp = { a: 100, b: 100 };
    for (const side of ['a', 'b']) { setHp(side, 100); sides[side].classList.remove('ko', 'winner'); }
    const odds = probability(a, b);
    const plan = planFight(a, b, odds, forced);

    for (const count of ['3', '2', '1']) { sfx.countdown(); await say(`<span class="big">${count}</span>`, reduced ? 200 : 420); }
    sfx.go();
    await say('<span class="big">Fight!</span>', reduced ? 250 : 550);

    for (const step of plan.steps) {
        const attacker = step.attacker === 'a' ? a : b;
        if (step.move) {
            sfx.whoosh();
            await say(`<span class="move">${escapeHtml(attacker.n)}: ${escapeHtml(step.move)}!</span>`, reduced ? 250 : 650);
        }
        sides[step.attacker].classList.add('lunge');
        await wait(beat * 0.35);
        sides[step.defender].classList.add('hit');
        hp[step.defender] = Math.max(0, hp[step.defender] - step.amount);
        setHp(step.defender, hp[step.defender]);
        spawn(step.defender, 'burst');
        spawn(step.defender, `dmg${step.special ? ' crit' : ''}`, `-${Math.round(step.amount)}`);
        if (step.special) { sfx.crit(); shake(root, 1.2); } else sfx.hit();
        await wait(beat * 0.4);
        sides[step.attacker].classList.remove('lunge');
        sides[step.defender].classList.remove('hit');
        await wait(beat * 0.35);
    }

    setHp(plan.loser, 0);
    sides[plan.loser].classList.add('ko');
    sfx.ko();
    shake(root, 1.6);
    await say('<span class="big">K.O.!</span>', reduced ? 300 : 900);
    sides[plan.winner].classList.add('winner');
    const winnerCount = plan.winner === 'a' ? state.na : state.nb;
    const winnerName = label(plan.winner === 'a' ? a : b, winnerCount);
    const upset = (plan.winner === 'a' ? odds : 1 - odds) < 0.5;
    sfx.win();
    reveal();
    announcer.innerHTML = `<span class="big">${escapeHtml(winnerName)} win${winnerCount > 1 ? '' : 's'}${upset ? '<br><small style="font-size:.4em">Upset!</small>' : ''}</span>`;
    await wait(reduced ? 600 : 1800);
    announcer.innerHTML = '';
    state.fighting = false;
    fightButton.disabled = false;
    fightButton.querySelector('span').textContent = 'Fight again';
}

// ---------------------------------------------------------------- random matchup

function randomMatchup() {
    if (state.fighting) return;
    const pool = [...state.index.values()].filter((animal) => !animal.h);
    if (pool.length < 2) return;
    const first = pool[Math.floor(Math.random() * pool.length)];
    let second = first;
    while (second.s === first.s) second = pool[Math.floor(Math.random() * pool.length)];
    state.a = first.s;
    state.b = second.s;
    state.na = 1;
    state.nb = 1;
    paintFighter('a', first);
    paintFighter('b', second);
    sfx.whoosh();
    paintMatchup();
}
root.querySelector('[data-random]')?.addEventListener('click', randomMatchup);

// ---------------------------------------------------------------- wiring

fightButton.addEventListener('click', () => fight());
root.querySelectorAll('[data-ctab]').forEach((tab) => tab.addEventListener('click', () => {
    root.querySelectorAll('[data-ctab]').forEach((other) => other.setAttribute('aria-selected', String(other === tab)));
    root.querySelectorAll('[data-cpane]').forEach((pane) => { pane.hidden = pane.dataset.cpane !== tab.dataset.ctab; });
    if (tab.dataset.ctab === 'talk') mountTalk();
}));

// Matchup comments, keyed like the server stores them ("A vs B", sorted).
const talkPane = root.querySelector('[data-cpane="talk"]');
function mountTalk() {
    const a = state.index.get(state.a);
    const b = state.index.get(state.b);
    if (!a || !b || !talkPane) return;
    const key = [a.n, b.n].sort().join(' vs ');
    if (talkPane.dataset.key === key) return;
    talkPane.dataset.key = key;
    delete talkPane.dataset.mounted;
    mountComments(talkPane, { comparisonKey: key });
}
document.addEventListener('abs:matchup', () => { if (talkPane && !talkPane.hidden) mountTalk(); });

loadAnimalIndex().then((list) => {
    state.index = new Map([[HUMAN.s, HUMAN], ...list.map((animal) => [animal.s, animal])]);
    grid.innerHTML = [HUMAN, ...list].map(cardHtml).join('');
    grid.removeAttribute('aria-busy');
    const params = new URLSearchParams(location.search);
    const wantA = params.get('a') || params.get('animal');
    const wantB = params.get('b');
    state.na = Math.max(1, Math.min(MAX_COUNT, Math.floor(Number(params.get('na')) || 1)));
    state.nb = Math.max(1, Math.min(MAX_COUNT, Math.floor(Number(params.get('nb')) || 1)));
    if (location.pathname === '/compare' && wantA && state.index.has(wantA)) {
        state.a = wantA;
        if (!wantB || !state.index.has(wantB) || wantB === wantA) {
            // Default opponent: the closest animal by power.
            const me = state.index.get(wantA);
            const rival = list.filter((animal) => animal.s !== wantA).sort((x, y) => Math.abs(x.p - me.p) - Math.abs(y.p - me.p))[0];
            state.b = rival.s;
        } else state.b = wantB;
    }
    paintFighter('a', state.index.get(state.a));
    paintFighter('b', state.index.get(state.b));
    paintMatchup();
});
