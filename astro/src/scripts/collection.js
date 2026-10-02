// /collection: fills the binder with a player's cards (lib/collection.js via
// /api/auth?action=collection), and runs the starter pick, the card of the day
// and the shop. ?u=<name> shows someone else's collection, read-only.
import { authApi, escapeHtml, showReward, toast } from './site.js';
import { sfx } from './sfx.js';

const root = document.querySelector('[data-col]');
const $ = (selector) => root.querySelector(selector);
const slots = new Map([...root.querySelectorAll('[data-slug]')].map((slot) => [slot.dataset.slug, slot]));
const other = new URLSearchParams(location.search).get('u');
const view = { show: 'all', tiers: new Set(), group: '', q: '' };
let owned = new Set();
let mine = false;
let wallet = 0;

const thumbOf = (slug) => slots.get(slug)?.querySelector('img')?.getAttribute('src') || '';
const nameOf = (slug) => slots.get(slug)?.querySelector('.slot-meta b')?.textContent || slug;

// ---------------------------------------------------------------- painting

function paintCounts() {
    $('[data-col-count]').textContent = owned.size.toLocaleString('en-US');
    $('[data-col-bar]').style.width = `${(owned.size / slots.size) * 100}%`;
    const byTier = {};
    for (const slug of owned) {
        const tier = slots.get(slug)?.dataset.tier;
        if (tier) byTier[tier] = (byTier[tier] || 0) + 1;
    }
    for (const node of root.querySelectorAll('[data-col-tier]')) node.textContent = String(byTier[node.dataset.colTier] || 0);
}

function paintSlots() {
    for (const [slug, slot] of slots) {
        const have = owned.has(slug);
        slot.classList.toggle('owned', have);
        const get = slot.querySelector('[data-get]');
        get.hidden = !mine || have;
        get.classList.toggle('short', Number(slot.dataset.price) > wallet);
        get.title = Number(slot.dataset.price) > wallet ? `You need ${Number(slot.dataset.price) - wallet} more BattlePoints` : `Buy the ${nameOf(slug)} card`;
        // a card not collected opens its page, not the 3D card
        slot.querySelector('.slot-card').href = `/stats/${slug}${have ? '#card' : ''}`;
    }
    filter();
}

function paintWallet() {
    $('[data-col-wallet]').hidden = !mine;
    $('[data-col-bp]').textContent = wallet.toLocaleString('en-US');
}

function paintDaily(daily) {
    const box = $('[data-col-daily]');
    box.hidden = !daily;
    if (!daily) return;
    $('[data-col-daily-img]').src = thumbOf(daily.slug);
    $('[data-col-daily-img]').alt = `${daily.name} card`;
    $('[data-col-daily-name]').textContent = daily.name;
    const button = $('[data-col-daily-claim]');
    button.hidden = daily.claimed;
    $('[data-col-daily-note]').textContent = daily.claimed
        ? 'Claimed. A new card comes at midnight UTC.'
        : daily.owned ? 'You have it: claim it for BattlePoints instead.' : `${daily.tier} tier, free today.`;
}

function paintStarter(starters) {
    const box = $('[data-col-starter]');
    box.hidden = !starters?.length;
    if (!starters?.length) return;
    $('[data-col-starters]').innerHTML = starters.map((card) => `<div class="starter">
        <img src="${escapeHtml(thumbOf(card.slug))}" width="360" height="504" alt="${escapeHtml(card.name)} card" />
        <button class="btn btn-gold btn-sm" type="button" data-starter="${escapeHtml(card.slug)}">${escapeHtml(card.name)}</button>
    </div>`).join('');
}

function apply(data) {
    owned = new Set(Object.keys(data.cards || {}));
    if (typeof data.wallet === 'number') wallet = data.wallet;
    paintCounts();
    paintWallet();
    paintSlots();
    if (mine) {
        paintDaily(data.daily);
        paintStarter(data.starters);
    }
    root.dataset.state = 'ready';
}

// A card just added: flip it in and say so.
function celebrate(card, from) {
    const slot = slots.get(card.slug);
    if (slot) {
        slot.classList.remove('is-new');
        void slot.offsetWidth;
        slot.classList.add('is-new');
        slot.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    sfx.win();
    toast(`${card.name} card added to your collection${from === 'shop' ? '' : '!'}`);
}

// ---------------------------------------------------------------- filters

function filter() {
    let shown = 0;
    for (const [slug, slot] of slots) {
        const have = owned.has(slug);
        const visible = (view.show === 'all' || (view.show === 'have' ? have : !have))
            && (!view.tiers.size || view.tiers.has(slot.dataset.tier))
            && (!view.group || slot.dataset.group === view.group)
            && (!view.q || slot.dataset.name.includes(view.q));
        slot.hidden = !visible;
        if (visible) shown += 1;
    }
    $('[data-col-empty]').hidden = shown > 0;
}
root.querySelectorAll('[data-show]').forEach((button) => button.addEventListener('click', () => {
    view.show = button.dataset.show;
    root.querySelectorAll('[data-show]').forEach((other) => other.setAttribute('aria-pressed', String(other === button)));
    sfx.tab();
    filter();
}));
root.querySelectorAll('[data-tier-filter]').forEach((button) => button.addEventListener('click', () => {
    const tier = button.dataset.tierFilter;
    if (view.tiers.has(tier)) view.tiers.delete(tier);
    else view.tiers.add(tier);
    button.setAttribute('aria-pressed', String(view.tiers.has(tier)));
    sfx.tab();
    filter();
}));
$('[data-group-filter]').addEventListener('change', (event) => { view.group = event.target.value; filter(); });
$('[data-search]').addEventListener('input', (event) => { view.q = event.target.value.trim().toLowerCase(); filter(); });

// ---------------------------------------------------------------- collecting

async function collect(body, button) {
    if (button) button.disabled = true;
    const result = await authApi('collect', { method: 'POST', body });
    if (button) button.disabled = false;
    if (!result.ok) {
        sfx.error();
        toast(result.body.error || 'Could not do that right now.');
        return null;
    }
    const data = result.body.data;
    showReward(data);
    apply({ ...data.collection, wallet: data.wallet });
    if (data.added) celebrate(data.card, data.from);
    return data;
}

root.addEventListener('click', async (event) => {
    const starter = event.target.closest('[data-starter]');
    if (starter) {
        await collect({ op: 'starter', slug: starter.dataset.starter }, starter);
        return;
    }
    const get = event.target.closest('[data-get]');
    if (get) {
        const slot = get.closest('[data-slug]');
        const price = Number(slot.dataset.price);
        const name = nameOf(slot.dataset.slug);
        if (price > wallet) {
            toast(`You need ${price - wallet} more BattlePoints for the ${name} card. Call fights and claim your daily reward to earn them.`);
            return;
        }
        if (!window.confirm(`Get the ${name} card for ${price} BattlePoints?`)) return;
        await collect({ op: 'buy', slug: slot.dataset.slug }, get);
    }
});
$('[data-col-daily-claim]').addEventListener('click', (event) => collect({ op: 'daily' }, event.currentTarget));

// ---------------------------------------------------------------- loading

async function loadOther(name) {
    const result = await authApi(`collection&username=${encodeURIComponent(name)}`);
    if (!result.ok) {
        $('[data-col-owner]').textContent = 'Player not found';
        root.dataset.state = 'ready';
        return;
    }
    const data = result.body.data;
    $('[data-col-owner]').textContent = `${data.player}'s collection`;
    document.title = `${data.player}'s card collection | Animal Battle Stats`;
    $('[data-col-mine]').hidden = false;
    apply(data);
}

async function loadMine() {
    const result = await authApi('collection');
    if (!result.ok) {
        $('[data-col-login]').hidden = false;
        apply({ cards: {} });
        return;
    }
    mine = true;
    apply(result.body.data);
}

if (other) {
    loadOther(other);
} else if (window.ABS_AUTH === 'user') {
    loadMine();
} else if (window.ABS_AUTH === 'guest') {
    $('[data-col-login]').hidden = false;
    apply({ cards: {} });
} else {
    document.addEventListener('abs:user', loadMine, { once: true });
    document.addEventListener('abs:guest', () => { $('[data-col-login]').hidden = false; apply({ cards: {} }); }, { once: true });
}
