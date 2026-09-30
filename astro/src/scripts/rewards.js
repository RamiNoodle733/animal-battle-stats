// Rewards screen: paints the player's economy (/api/auth?action=hub) onto the
// page built from lib/economy.js, switches the menu pages, and claims, buys and
// wears through the same API.
import { authApi, escapeHtml, showReward, toast } from './site.js';
import { sfx } from './sfx.js';

const root = document.querySelector('[data-rw]');
const $ = (selector) => root.querySelector(selector);
const $$ = (selector) => [...root.querySelectorAll(selector)];
const fmt = (value) => Number(value || 0).toLocaleString('en-US');
const BP = '/images/ui/icons/coin.svg';
const PAGES = ['daily', 'quests', 'pass', 'shop', 'earn'];
// Where each quest kind is played, and its icon.
const QUEST_GO = {
    matchup_call: ['swords', '/compare'],
    call_correct: ['target', '/compare'],
    vote: ['medal', '/rankings'],
    talk: ['book', '/community'],
    tournament: ['trophy', '/tournament']
};
let hub = null;
let chosen = false;

function show(page, { sound = false } = {}) {
    if (!PAGES.includes(page)) page = 'daily';
    $$('[data-go]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.go === page)));
    $$('[data-pg]').forEach((node) => { node.hidden = node.dataset.pg !== page; });
    root.dataset.page = page;
    if (sound) sfx.select();
    if (page === 'pass') centerTrack();
    const hash = `#${page}`;
    if (location.hash !== hash) history.replaceState(history.state, '', page === 'daily' ? location.pathname : hash);
}

function badge(page, count) {
    const node = $(`[data-badge="${page}"]`);
    node.hidden = !count;
    node.textContent = count > 9 ? '9+' : String(count);
}

function paintWallet(data) {
    $('[data-w-bp]').textContent = fmt(data.wallet);
    $('[data-w-level]').textContent = data.progression.level;
    $('[data-w-call]').textContent = data.call.streak;
    $('[data-w-run]').textContent = data.login.claimable ? Math.max(0, data.login.run - 1) : data.login.run;
    const need = data.progression.xpToNext;
    const pct = Number.isFinite(need) && need > 0 ? Math.min(100, Math.round((data.progression.xp / need) * 100)) : 100;
    $('[data-w-xpbar]').style.width = `${pct}%`;
    $('[data-w-xptext]').textContent = Number.isFinite(need) ? `${fmt(data.progression.xp)} / ${fmt(need)} XP to level ${data.progression.level + 1}` : 'Max level';
}

function paintDaily(login) {
    const claimedStep = login.claimable ? login.step - 1 : login.step;
    $$('.d-ladder li').forEach((node) => {
        const day = Number(node.dataset.day);
        node.classList.toggle('done', day <= claimedStep);
        node.classList.toggle('now', login.claimable && day === login.step);
    });
    $('[data-claim="daily"]').disabled = !login.claimable;
    $('[data-d-label]').textContent = login.claimable ? `Claim ${login.reward.coins} BattlePoints` : 'Come back tomorrow';
    $('[data-d-aside]').textContent = login.claimable ? `Day ${login.step} is ready` : `Day ${login.step} claimed`;
    $('[data-d-note]').textContent = login.shielded
        ? 'You missed a day, and your streak shield saved it.'
        : login.shieldIn > 0
            ? `Your streak shield recharges in ${login.shieldIn} day${login.shieldIn === 1 ? '' : 's'}.`
            : 'Miss a day and your streak shield saves it (once a week).';
    badge('daily', login.claimable ? 1 : 0);
}

function questRow(quest) {
    const [icon, href] = QUEST_GO[quest.kind] || ['scroll', '/compare'];
    const pct = Math.round((quest.progress / quest.goal) * 100);
    const end = quest.claimed
        ? `<img src="/images/ui/icons/check.svg" alt="Claimed" width="34" height="34">`
        : quest.done
            ? `<button class="btn btn-gold" type="button" data-claim="quest" data-slot="${quest.slot}">Claim</button>`
            : `<span class="q-count">${quest.progress}/${quest.goal}</span><a class="btn btn-sm" href="${href}">Go</a>`;
    return `<div class="quest${quest.done ? ' done' : ''}${quest.claimed ? ' claimed' : ''}">
        <img src="/images/ui/icons/${icon}.svg" alt="" width="48" height="48">
        <b>${escapeHtml(quest.text)}</b>
        <span class="q-bar"><i style="width:${pct}%"></i></span>
        <span class="q-pay"><span><img src="${BP}" alt="">+${quest.coins}</span><span class="x">+${quest.xp} XP</span><span class="p">+${quest.pass} pass XP</span></span>
        <span class="q-end">${end}</span>
    </div>`;
}

function paintQuests(data) {
    $('[data-q-list]').innerHTML = data.quests.map(questRow).join('');
    const chest = $('[data-chest]');
    chest.classList.toggle('ready', data.chest.ready);
    chest.classList.toggle('opened', data.chest.opened);
    const button = $('[data-claim="chest"]');
    button.disabled = !data.chest.ready;
    button.textContent = data.chest.opened ? 'Opened' : 'Open';
    const hours = Math.max(1, Math.round((new Date(data.resetsAt) - Date.now()) / 3600000));
    $('[data-q-reset]').textContent = `New quests in ${hours}h`;
    badge('quests', data.quests.filter((quest) => quest.done && !quest.claimed).length + (data.chest.ready ? 1 : 0));
}

function centerTrack() {
    const track = $('[data-p-track]');
    const tier = hub ? Math.max(1, hub.pass.tier) : 1;
    const current = $(`[data-tier="${tier}"]`);
    if (!track || !current || !track.clientWidth) return;
    track.scrollLeft = Math.max(0, current.offsetLeft - track.offsetLeft - track.clientWidth / 2 + current.clientWidth / 2);
}

function paintPass(pass) {
    $('[data-p-tier]').textContent = pass.tier;
    $('[data-p-bar]').style.width = pass.need ? `${Math.round((pass.into / pass.need) * 100)}%` : '100%';
    $('[data-p-text]').textContent = !pass.active
        ? 'Season 1 has ended. Claim anything you reached.'
        : pass.need ? `${fmt(pass.into)} / ${fmt(pass.need)} pass XP to tier ${pass.tier + 1}` : 'Every tier reached!';
    const ready = pass.tiers.filter((tier) => tier.reached && !tier.claimed).length;
    $('[data-claim="pass"]').disabled = !ready;
    $('[data-p-claim]').textContent = ready ? `Claim ${ready} tier${ready === 1 ? '' : 's'}` : 'Claim';
    for (const tier of pass.tiers) {
        const node = $(`[data-tier="${tier.tier}"]`);
        node.classList.toggle('reached', tier.reached);
        node.classList.toggle('claimed', tier.claimed);
        node.classList.toggle('next', tier.tier === pass.tier + 1);
    }
    for (const node of $$('[data-look-tier]')) {
        const tier = pass.tiers[Number(node.dataset.lookTier) - 1];
        node.classList.toggle('got', Boolean(tier?.claimed));
        node.querySelector('small').textContent = tier?.claimed ? 'Yours' : tier?.reached ? 'Claim it' : `Tier ${tier?.tier}`;
    }
    badge('pass', ready);
    if (root.dataset.page === 'pass') centerTrack();
}

function paintShop(data) {
    const owned = new Map(data.items.map((item) => [item.id, item.owned]));
    const worn = { frame: data.frame || '', title: data.title || 'title_rookie' };
    $$('.item').forEach((node) => {
        const id = node.dataset.item === 'none' ? '' : node.dataset.item;
        const kind = node.dataset.kind;
        const have = id === '' || owned.get(id);
        const wearing = worn[kind] === id;
        node.classList.toggle('owned', Boolean(have));
        node.classList.toggle('worn', wearing);
        node.querySelector('[data-buy]')?.toggleAttribute('hidden', Boolean(have));
        node.querySelector('[data-lock]')?.toggleAttribute('hidden', Boolean(have));
        const wear = node.querySelector('[data-equip]');
        if (wear) {
            wear.hidden = !have;
            wear.disabled = wearing;
            wear.textContent = wearing ? 'Wearing' : 'Wear';
        }
    });
    $$('[data-buy]').forEach((button) => button.classList.toggle('short', Number(button.dataset.price) > data.wallet));
}

function paintCaps(data) {
    for (const node of $$('[data-cap]')) {
        const cap = data.caps[node.dataset.cap];
        if (!cap) continue;
        node.textContent = `Today: ${cap.used} of ${cap.cap} paid`;
        const bar = $(`[data-cap-bar="${node.dataset.cap}"]`);
        if (bar) bar.style.width = `${Math.min(100, Math.round((cap.used / cap.cap) * 100))}%`;
    }
}

function paint(data) {
    hub = data;
    root.dataset.state = 'user';
    paintWallet(data);
    paintDaily(data.login);
    paintQuests(data);
    paintPass(data.pass);
    paintShop(data);
    paintCaps(data);
    // Open on the page the player asked for, else the first one with something to claim.
    if (!chosen) {
        chosen = true;
        const asked = location.hash.slice(1);
        const ready = PAGES.find((page) => !$(`[data-badge="${page}"]`)?.hidden);
        show(PAGES.includes(asked) ? asked : ready || 'daily');
    }
}

async function refresh() {
    const result = await authApi('hub');
    if (result.ok) paint(result.body.data);
    else if (result.status === 401) guest();
}

function guest() {
    root.dataset.state = 'guest';
    $('[data-guest]').hidden = false;
}

async function act(button, action, body) {
    button.disabled = true;
    const result = await authApi(action, { method: 'POST', body });
    if (!result.ok) {
        sfx.error();
        toast(result.body.error || 'That did not work. Try again.');
        button.disabled = false;
        return;
    }
    const data = result.body.data;
    if (action === 'claim' || data.coins) showReward(data, button);
    else sfx.select();
    if (data.bought) toast(`${data.bought.name} is yours, and you're wearing it.`);
    await refresh();
}

root.addEventListener('click', (event) => {
    const go = event.target.closest('[data-go]');
    if (go) {
        show(go.dataset.go, { sound: true });
        return;
    }
    const claim = event.target.closest('[data-claim]');
    if (claim && !claim.disabled) {
        const what = claim.dataset.claim;
        act(claim, 'claim', what === 'quest' ? { what, slot: Number(claim.dataset.slot) } : { what });
        return;
    }
    const buy = event.target.closest('[data-buy]');
    if (buy && hub) {
        act(buy, 'buy', { item: buy.dataset.buy });
        return;
    }
    const equip = event.target.closest('[data-equip]');
    if (equip && !equip.disabled && hub) {
        act(equip, 'equip', { kind: equip.dataset.equip, item: equip.dataset.id || null });
    }
});

$$('[data-shop-tab]').forEach((tab) => tab.addEventListener('click', () => {
    $$('[data-shop-tab]').forEach((other) => other.setAttribute('aria-pressed', String(other === tab)));
    $$('[data-shop]').forEach((grid) => { grid.hidden = grid.dataset.shop !== tab.dataset.shopTab; });
}));

// Links such as /rewards#pass (the HUD, the daily reward popup) pick the page.
window.addEventListener('hashchange', () => show(location.hash.slice(1)));
if (PAGES.includes(location.hash.slice(1))) {
    chosen = true;
    show(location.hash.slice(1));
}

// Rewards earned in another tab keep this fresh.
document.addEventListener('visibilitychange', () => { if (!document.hidden && hub) refresh(); });

if (window.ABS_AUTH === 'user') refresh();
else if (window.ABS_AUTH === 'guest') guest();
else {
    document.addEventListener('abs:user', refresh, { once: true });
    document.addEventListener('abs:guest', guest, { once: true });
}
