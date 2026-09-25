// Versus screen: pick two animals, see the model's odds and stat duel, then
// watch an animated fight. The fight's winner is drawn with the model's
// probability, so an underdog can still pull off the upset now and then.
import engine from '../../../js/battle-engine.js';
import { loadAnimalIndex, escapeHtml, toast, artVars } from './site.js';
import { sfx, shake } from './sfx.js';
import { mountComments } from './comments.js';
import { trackFight } from './track.js';

// The engine is a UMD file shared with the server build: bundlers hand back
// its CommonJS export, plain browsers get the global.
const model = engine || globalThis.ABSBattleEngine;
const root = document.querySelector('[data-vs]');
const STATS = [
    ['attack', 'atk', 'Attack'], ['defense', 'def', 'Defense'], ['agility', 'agi', 'Agility'],
    ['stamina', 'sta', 'Stamina'], ['intelligence', 'int', 'Intelligence'], ['special', 'spl', 'Special']
];
const BIOME = { savanna: 'Savanna', forest: 'Forest', jungle: 'Jungle', wetlands: 'Wetlands', desert: 'Desert', mountains: 'Mountains', arctic: 'Arctic', ocean: 'Ocean' };
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fmt = (value) => (Number.isInteger(Number(value)) ? String(Number(value)) : Number(value).toFixed(1));

const state = { a: root.dataset.a, b: root.dataset.b, picking: 'b', fighting: false, index: new Map(), fan: null };
const sides = { a: root.querySelector('[data-side="a"]'), b: root.querySelector('[data-side="b"]') };
const roster = root.querySelector('[data-roster]');
const strip = root.querySelector('[data-r-strip]');
const announcer = root.querySelector('[data-announcer]');
const fightButton = root.querySelector('[data-fight]');

function toModel(animal) {
    return { attack: animal.atk, defense: animal.def, agility: animal.agi, stamina: animal.sta, intelligence: animal.int, special: animal.spl };
}

function weightText(kg) {
    if (!(kg > 0)) return '—';
    if (kg < 1) return `${Math.round(kg * 1000)} g`;
    if (kg >= 1000) return `${(kg / 1000).toFixed(1)} t`;
    return `${kg < 100 ? fmt(Math.round(kg * 10) / 10) : Math.round(kg)} kg`;
}
function lengthText(cm) { return cm > 0 ? (cm >= 100 ? `${(cm / 100).toFixed(2)} m` : `${fmt(cm)} cm`) : '—'; }
function speedText(mps) { return mps > 0 ? `${Math.round(mps * 3.6)} km/h` : '—'; }

// ---------------------------------------------------------------- render

function paintFighter(side, animal) {
    const node = sides[side];
    node.className = node.className.replace(/tier-\w/, `tier-${animal.tier.toLowerCase()}`).replace(/bio-\w+/, `bio-${animal.b}`);
    node.querySelectorAll('[data-f-name]').forEach((el) => { el.textContent = animal.n; });
    const tier = node.querySelector('[data-f-tier]');
    tier.className = `tier-badge tier-${animal.tier.toLowerCase()}`;
    tier.textContent = animal.tier;
    node.querySelector('[data-f-power]').textContent = fmt(animal.p);
    node.querySelector('[data-f-meta]').textContent = `${animal.cls} · ${BIOME[animal.b] || ''}`;
    const link = node.querySelector('[data-f-link]');
    link.href = `/stats/${animal.s}`;
    link.setAttribute('aria-label', `${animal.n} profile`);
    const img = link.querySelector('img');
    img.removeAttribute('srcset');
    img.src = animal.m;
    img.alt = animal.n;
    img.style.setProperty('--ar', animal.ar || 1);
    img.style.setProperty('--k', animal.k || 1);
    img.removeAttribute('width');
    img.removeAttribute('height');
    node.querySelector('.hp').className = 'hp';
    node.querySelector('[data-hp]').style.width = '100%';
    node.classList.remove('ko', 'winner', 'lunge', 'hit');
}

function paintMatchup() {
    const a = state.index.get(state.a);
    const b = state.index.get(state.b);
    if (!a || !b) return;
    const result = model.compare(toModel(a), toModel(b));
    const oddsA = Math.round(result.probability * 100);
    const oddsB = 100 - oddsA;
    const winner = oddsA >= 50 ? a : b;
    const edge = Math.max(oddsA, oddsB);
    const strength = edge >= 85 ? 'decisive' : edge >= 70 ? 'clear edge' : edge >= 58 ? 'slight edge' : 'toss-up';
    root.querySelector('[data-t-a]').textContent = a.n;
    root.querySelector('[data-t-b]').textContent = b.n;
    const oa = root.querySelector('[data-odds-a]');
    const ob = root.querySelector('[data-odds-b]');
    oa.style.setProperty('--p', `${Math.max(8, oddsA)}%`);
    ob.style.setProperty('--p', `${Math.max(8, oddsB)}%`);
    oa.textContent = `${oddsA}%`;
    ob.textContent = `${oddsB}%`;
    root.querySelector('[data-winner]').textContent = winner.n;
    root.querySelector('[data-strength]').textContent = strength;
    for (const [key, short] of STATS) {
        const row = root.querySelector(`[data-stat="${key}"]`);
        const va = Number(a[short]) || 0;
        const vb = Number(b[short]) || 0;
        row.querySelector('[data-ba]').style.setProperty('--v', String(va));
        row.querySelector('[data-bb]').style.setProperty('--v', String(vb));
        const lead = row.querySelector('[data-va]');
        const trail = row.querySelector('[data-vb]');
        lead.textContent = fmt(va);
        trail.textContent = fmt(vb);
        lead.className = va > vb ? 'lead' : '';
        trail.className = vb > va ? 'lead' : '';
    }
    root.querySelector('[data-tape-a]').textContent = a.n;
    root.querySelector('[data-tape-b]').textContent = b.n;
    const tapeRows = [
        ['Power index', fmt(a.p), fmt(b.p), a.p, b.p],
        ['Tier', a.tier, b.tier, -a.r, -b.r],
        ['Rank', `#${a.r}`, `#${b.r}`, -a.r, -b.r],
        ['Weight', weightText(a.w), weightText(b.w), a.w || 0, b.w || 0],
        ['Length', lengthText(a.len), lengthText(b.len), a.len || 0, b.len || 0],
        ['Height', lengthText(a.ht), lengthText(b.ht), a.ht || 0, b.ht || 0],
        ['Top speed', speedText(a.v), speedText(b.v), a.v || 0, b.v || 0],
        ['Bite force', a.bf > 0 ? `${Math.round(a.bf)} PSI` : '—', b.bf > 0 ? `${Math.round(b.bf)} PSI` : '—', a.bf || 0, b.bf || 0],
        ['Lifespan', a.ls > 0 ? `${fmt(a.ls)} yrs` : '—', b.ls > 0 ? `${fmt(b.ls)} yrs` : '—', 0, 0]
    ];
    root.querySelector('[data-tape]').innerHTML = tapeRows.map(([label, va, vb, na, nb]) => `<tr><td class="${na > nb ? 'lead' : ''}">${escapeHtml(va)}</td><th>${label}</th><td class="${nb > na ? 'lead' : ''}">${escapeHtml(vb)}</td></tr>`).join('');
    const verdict = root.querySelector('[data-verdict-text]');
    if (verdict && verdict.dataset.slugs !== `${a.s}|${b.s}` && (a.s !== root.dataset.a || b.s !== root.dataset.b)) {
        verdict.dataset.slugs = `${a.s}|${b.s}`;
        const loser = winner === a ? b : a;
        const leads = STATS.filter(([, short]) => (winner[short] || 0) > (loser[short] || 0)).map(([, , label]) => label.toLowerCase());
        verdict.innerHTML = `<p>${escapeHtml(winner.n)} wins this matchup ${edge}% of the time in the Animal Battle Stats model (${strength}). It leads in ${leads.length} of 6 battle stats${leads.length ? ` (${leads.join(', ')})` : ''}, with a power index of ${fmt(winner.p)} against ${fmt(loser.p)}.</p>
            <p>Open each animal's profile for sources, measurements and how it fights.</p>`;
        root.querySelector('[data-faq]')?.setAttribute('hidden', '');
    }
    root.querySelector('[data-fan-a]').textContent = a.n;
    root.querySelector('[data-fan-b]').textContent = b.n;
    strip.querySelectorAll('.r-card').forEach((card) => {
        card.classList.toggle('selected-a', card.dataset.rSlug === a.s);
        card.classList.toggle('selected-b', card.dataset.rSlug === b.s);
    });
    const params = new URLSearchParams({ a: a.s, b: b.s });
    if (location.pathname === '/compare') history.replaceState(null, '', `/compare?${params}`);
    document.title = `${a.n} vs ${b.n}: Who Would Win? | Animal Battle Stats`;
    loadFanVotes(a, b);
    document.dispatchEvent(new CustomEvent('abs:matchup'));
}

function setPicking(side) {
    state.picking = side;
    sides.a.classList.toggle('picking', side === 'a');
    sides.b.classList.toggle('picking', side === 'b');
    root.querySelector('[data-roster-title]').textContent = `Pick fighter ${side === 'a' ? '1' : '2'}`;
}

function choose(slug) {
    if (state.fighting) return;
    const animal = state.index.get(slug);
    if (!animal) return;
    const other = state.picking === 'a' ? state.b : state.a;
    if (slug === other) { sfx.error(); toast('Pick a different animal'); return; }
    state[state.picking] = slug;
    paintFighter(state.picking, animal);
    sfx.flip();
    paintMatchup();
    state.picking = state.picking === 'a' ? 'b' : 'a';
    sides.a.classList.remove('picking');
    sides.b.classList.remove('picking');
    root.querySelector('[data-roster-title]').textContent = `Pick fighter ${state.picking === 'a' ? '1' : '2'}`;
    roster.classList.remove('open');
}

// ---------------------------------------------------------------- fan votes

async function loadFanVotes(a, b) {
    const paBox = root.querySelector('[data-fan-pa]');
    const pbBox = root.querySelector('[data-fan-pb]');
    paBox.textContent = '';
    pbBox.textContent = '';
    root.querySelectorAll('[data-vote-side]').forEach((button) => button.classList.remove('voted'));
    try {
        const response = await fetch(`/api/battles?action=matchup_votes&animal1=${encodeURIComponent(a.n)}&animal2=${encodeURIComponent(b.n)}`, { headers: { Accept: 'application/json' } });
        const body = await response.json();
        if (!body.success) return;
        state.fan = body.data;
        if (body.data.totalVotes > 0) {
            paBox.textContent = `${body.data.animal1Percentage}%`;
            pbBox.textContent = `${body.data.animal2Percentage}%`;
        }
    } catch { /* fan votes are optional */ }
}

root.querySelectorAll('[data-vote-side]').forEach((button) => button.addEventListener('click', async () => {
    const a = state.index.get(state.a);
    const b = state.index.get(state.b);
    if (!a || !b) return;
    if (!window.ABS_USER) { toast('Log in to cast your fan vote'); return; }
    const votedFor = button.dataset.voteSide === 'a' ? a.n : b.n;
    const response = await fetch('/api/battles?action=matchup_votes', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', ...(window.ABS_TOKEN ? { Authorization: `Bearer ${window.ABS_TOKEN}` } : {}) },
        body: JSON.stringify({ animal1: a.n, animal2: b.n, votedFor })
    }).catch(() => null);
    if (!response?.ok) { sfx.error(); toast('Vote failed. Try again soon.'); return; }
    sfx.coin();
    button.classList.add('voted');
    toast(`You picked ${votedFor}`);
    loadFanVotes(a, b);
}));

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
function planFight(a, b, probability) {
    const winner = Math.random() < probability ? 'a' : 'b';
    const loser = winner === 'a' ? 'b' : 'a';
    const edge = Math.abs(probability - 0.5) * 2;
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

async function fight() {
    if (state.fighting) return;
    const a = state.index.get(state.a);
    const b = state.index.get(state.b);
    if (!a || !b) return;
    state.fighting = true;
    fightButton.disabled = true;
    trackFight(a.n, b.n);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const beat = reduced ? 250 : 520;
    const hp = { a: 100, b: 100 };
    for (const side of ['a', 'b']) { setHp(side, 100); sides[side].classList.remove('ko', 'winner'); }
    const probability = model.compare(toModel(a), toModel(b)).probability;
    const plan = planFight(a, b, probability);

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
    const winner = plan.winner === 'a' ? a : b;
    const upset = (plan.winner === 'a' ? probability : 1 - probability) < 0.5;
    sfx.win();
    announcer.innerHTML = `<span class="big">${escapeHtml(winner.n)} wins${upset ? '<br><small style="font-size:.4em">Upset!</small>' : ''}</span>`;
    await wait(reduced ? 600 : 1800);
    announcer.innerHTML = '';
    state.fighting = false;
    fightButton.disabled = false;
    fightButton.lastChild.textContent = 'Rematch';
}

// ---------------------------------------------------------------- wiring

fightButton.addEventListener('click', fight);
root.querySelectorAll('[data-pick]').forEach((button) => button.addEventListener('click', () => {
    setPicking(button.dataset.pick);
    sfx.whoosh();
    roster.classList.add('open');
    root.querySelector('[data-r-q]').focus({ preventScroll: true });
}));
strip.addEventListener('click', (event) => {
    const card = event.target.closest('[data-r-slug]');
    if (card) choose(card.dataset.rSlug);
});
root.querySelector('[data-r-q]').addEventListener('input', (event) => {
    const needle = event.target.value.trim().toLowerCase();
    strip.querySelectorAll('.r-card').forEach((card) => { card.hidden = Boolean(needle) && !card.dataset.rName.includes(needle); });
});
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

// Same markup as HoloCard.astro, built client-side so matchup pages stay small.
function cardHtml(animal) {
    const tier = animal.tier.toLowerCase();
    return `<button type="button" class="r-card" data-r-slug="${animal.s}" data-r-name="${escapeHtml(animal.n.toLowerCase())}" title="${escapeHtml(animal.n)}">
        <span class="card tier-${tier} bio-${animal.b}"><span class="card-inner">
            <span class="card-power"><b>${fmt(animal.p)}</b><small>PWR</small></span>
            <span class="tier-badge tier-${tier}">${animal.tier}</span>
            <span class="card-art"><img src="${animal.i}" alt="" style="${artVars(animal)}" width="96" height="96" loading="lazy" decoding="async"></span>
            <span class="card-plate"><span class="card-name">${escapeHtml(animal.n)}</span></span>
        </span></span></button>`;
}

loadAnimalIndex().then((list) => {
    state.index = new Map(list.map((animal) => [animal.s, animal]));
    strip.innerHTML = list.map(cardHtml).join('');
    strip.removeAttribute('aria-busy');
    const params = new URLSearchParams(location.search);
    const wantA = params.get('a') || params.get('animal');
    const wantB = params.get('b');
    if (location.pathname === '/compare' && wantA && state.index.has(wantA)) {
        state.a = wantA;
        if (!wantB || !state.index.has(wantB) || wantB === wantA) {
            // Default opponent: the closest animal by power.
            const me = state.index.get(wantA);
            const rival = [...state.index.values()].filter((animal) => animal.s !== wantA).sort((x, y) => Math.abs(x.p - me.p) - Math.abs(y.p - me.p))[0];
            state.b = rival.s;
        } else state.b = wantB;
        paintFighter('a', state.index.get(state.a));
        paintFighter('b', state.index.get(state.b));
    }
    paintMatchup();
    state.picking = 'b';
});
