// Rewards screen: paints the player's economy (/api/auth?action=hub) onto the
// page built from lib/economy.js, and claims, buys and wears through the same API.
import { authApi, escapeHtml, showReward, toast } from './site.js';
import { sfx } from './sfx.js';

const root = document.querySelector('[data-rw]');
const $ = (selector) => root.querySelector(selector);
const $$ = (selector) => [...root.querySelectorAll(selector)];
const fmt = (value) => Number(value || 0).toLocaleString('en-US');
const COIN = '/images/icons/abs/coin.webp';
let hub = null;

function paintWallet(data) {
    $('[data-w-coins]').textContent = fmt(data.wallet);
    $('[data-w-level]').textContent = data.progression.level;
    $('[data-w-call]').textContent = data.call.streak;
    $('[data-w-best]').textContent = data.call.best;
    $('[data-w-run]').textContent = data.login.claimable ? Math.max(0, data.login.run - 1) : data.login.run;
    const need = data.progression.xpToNext;
    const pct = Number.isFinite(need) && need > 0 ? Math.min(100, Math.round((data.progression.xp / need) * 100)) : 100;
    $('[data-w-xpbar]').style.width = `${pct}%`;
    $('[data-w-xptext]').textContent = Number.isFinite(need) ? `${fmt(data.progression.xp)} / ${fmt(need)} XP to level ${data.progression.level + 1}` : 'Max level';
}

function paintDaily(login) {
    $$('.d-ladder li').forEach((node) => {
        const day = Number(node.dataset.day);
        const claimedStep = login.claimable ? login.step - 1 : login.step;
        node.classList.toggle('done', day <= claimedStep);
        node.classList.toggle('now', login.claimable && day === login.step);
    });
    const button = $('[data-claim="daily"]');
    button.disabled = !login.claimable;
    $('[data-d-label]').textContent = login.claimable ? `Claim ${login.reward.coins} Coins` : 'Claimed today';
    $('[data-d-aside]').textContent = login.claimable ? `Day ${login.step} is ready` : `Day ${login.step} claimed · back tomorrow`;
    $('[data-d-note]').textContent = login.shielded
        ? 'You missed a day, and your streak shield saved it.'
        : login.shieldIn > 0
            ? `Streak shield recharges in ${login.shieldIn} day${login.shieldIn === 1 ? '' : 's'}.`
            : 'Miss one day and your streak shield saves it (once a week).';
}

function paintQuests(data) {
    $('[data-q-list]').innerHTML = data.quests.map((quest) => {
        const pct = Math.round((quest.progress / quest.goal) * 100);
        const action = quest.claimed
            ? '<span class="q-state">Done</span>'
            : quest.done
                ? `<button class="btn btn-sm btn-gold" type="button" data-claim="quest" data-slot="${quest.slot}">Claim</button>`
                : `<span class="q-state">${quest.progress}/${quest.goal}</span>`;
        return `<div class="quest${quest.done ? ' done' : ''}${quest.claimed ? ' claimed' : ''}">
            <b>${escapeHtml(quest.text)}</b>
            <span class="q-bar"><i style="width:${pct}%"></i></span>
            <span class="q-pay"><span><img src="${COIN}" alt="">+${quest.coins}</span><span>+${quest.xp} XP</span><span>+${quest.pass} Pass</span></span>
            ${action}
        </div>`;
    }).join('');
    const chest = $('[data-chest]');
    chest.classList.toggle('ready', data.chest.ready);
    chest.classList.toggle('opened', data.chest.opened);
    const button = $('[data-claim="chest"]');
    button.disabled = !data.chest.ready;
    button.textContent = data.chest.opened ? 'Opened' : 'Open';
    const hours = Math.max(1, Math.round((new Date(data.resetsAt) - Date.now()) / 3600000));
    $('[data-q-reset]').textContent = `New quests in ${hours}h`;
}

function paintPass(pass) {
    $('[data-p-tier]').textContent = pass.tier;
    $('[data-p-bar]').style.width = pass.need ? `${Math.round((pass.into / pass.need) * 100)}%` : '100%';
    $('[data-p-text]').textContent = !pass.active
        ? 'Season 1 has ended. Claim anything you reached.'
        : pass.need ? `${fmt(pass.into)} / ${fmt(pass.need)} pass XP to tier ${pass.tier + 1}` : 'Every tier reached!';
    const ready = pass.tiers.filter((tier) => tier.reached && !tier.claimed).length;
    const button = $('[data-claim="pass"]');
    button.disabled = !ready;
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
    // Bring the current tier into view inside the track (not the page).
    const track = $('[data-p-track]');
    const current = $(`[data-tier="${Math.max(1, pass.tier)}"]`);
    if (track && current) track.scrollLeft = Math.max(0, current.offsetLeft - track.clientWidth / 2 + current.clientWidth / 2);
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
    $$('[data-buy]').forEach((button) => {
        const price = Number(button.textContent.replace(/[^\d]/g, ''));
        button.classList.toggle('short', price > data.wallet);
    });
}

function paintCaps(data) {
    for (const node of $$('[data-cap]')) {
        const cap = data.caps[node.dataset.cap];
        node.textContent = cap ? `Today: ${cap.used} of ${cap.cap} paid` : '';
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

// Rewards earned elsewhere on the page (none today) or in another tab keep this fresh.
document.addEventListener('visibilitychange', () => { if (!document.hidden && hub) refresh(); });

if (window.ABS_AUTH === 'user') refresh();
else if (window.ABS_AUTH === 'guest') guest();
else {
    document.addEventListener('abs:user', refresh, { once: true });
    document.addEventListener('abs:guest', guest, { once: true });
}
