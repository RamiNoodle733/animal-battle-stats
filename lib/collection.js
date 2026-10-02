'use strict';

// The card collection: every animal's battle card, collected like the Roblox
// game's holo-cards. Built on the economy's rules (lib/economy.js): nothing is
// random (no packs, no loot boxes), nothing is sold for money, and the server
// decides every card. A player gets a card by:
//
//   starter   picking one of three starter cards, once
//   daily     claiming the card of the day (the home page's Animal of the day), free
//   call      calling a fight right: the card of the animal they backed
//   tournament  finishing a ranked tournament: the champion's card
//   shop      buying it by name with BattlePoints (the price goes by tier)
//
// The cards live in the economy save (eco.cards: slug -> { at, from }), so they
// change inside the same transaction as the BattlePoints (lib/rewards.js).
// Everything here is pure; lib/rewards.js applies it.

const { listAnimals, findAnimal } = require('./canonical-animals');
const { dayIndex } = require('./economy');

const ROSTER = Object.freeze(listAnimals().map((animal) => Object.freeze({
    slug: animal.slug,
    name: animal.name,
    tier: animal.tier,
    rank: animal.rank
})));
const BY_SLUG = new Map(ROSTER.map((card) => [card.slug, card]));

// BattlePoints for a card in the shop. Owning all of them this way is a long
// goal (about 51,000 BattlePoints); the free cards shorten it.
const PRICES = Object.freeze({ S: 500, A: 300, B: 160, C: 100, D: 60, F: 40 });
const STARTERS = Object.freeze(['african-lion', 'harpy-eagle', 'komodo-dragon'].filter((slug) => BY_SLUG.has(slug)));
const SOURCES = Object.freeze(['starter', 'daily', 'call', 'tournament', 'shop']);

// The card of the day: the same pick as the home page's Animal of the day.
function dailyCard(day = dayIndex()) {
    return ROSTER[(day * 7919) % ROSTER.length];
}

const cardFor = (slugOrName) => {
    const key = String(slugOrName || '').trim();
    if (BY_SLUG.has(key)) return BY_SLUG.get(key);
    const animal = findAnimal(key);
    return animal ? BY_SLUG.get(animal.slug) || null : null;
};
const priceOf = (card) => PRICES[card?.tier] ?? null;

// The collection part of a save, kept to cards that exist.
function normalizeCollection(eco) {
    const raw = eco?.cards && typeof eco.cards === 'object' && !Array.isArray(eco.cards) ? eco.cards : {};
    const cards = {};
    for (const [slug, entry] of Object.entries(raw)) {
        if (!BY_SLUG.has(slug)) continue;
        cards[slug] = { at: Number(entry?.at) || 0, from: SOURCES.includes(entry?.from) ? entry.from : 'shop' };
    }
    return {
        cards,
        starter: BY_SLUG.has(eco?.starter) ? eco.starter : null,
        dailyDay: Number.isFinite(Number(eco?.cardDay)) ? Number(eco.cardDay) : null
    };
}

// Adds a card to the save (eco is changed); false when it was already there.
function addCard(eco, slug, from, now = Date.now()) {
    if (!BY_SLUG.has(slug)) return false;
    eco.cards = eco.cards && typeof eco.cards === 'object' && !Array.isArray(eco.cards) ? eco.cards : {};
    if (eco.cards[slug]) return false;
    eco.cards[slug] = { at: now, from };
    return true;
}

// Counts by tier, and the best cards (by rank) for a showcase.
function collectionSummary(eco, { showcase = 6 } = {}) {
    const { cards } = normalizeCollection(eco);
    const owned = Object.keys(cards).map((slug) => BY_SLUG.get(slug)).sort((a, b) => a.rank - b.rank);
    const tiers = {};
    for (const card of ROSTER) tiers[card.tier] ||= { owned: 0, total: 0 };
    for (const card of ROSTER) tiers[card.tier].total += 1;
    for (const card of owned) tiers[card.tier].owned += 1;
    return {
        count: owned.length,
        total: ROSTER.length,
        tiers,
        best: owned.slice(0, showcase).map((card) => ({ slug: card.slug, name: card.name, tier: card.tier }))
    };
}

// What the collection page shows the signed-in player.
function collectionState(eco, now = Date.now()) {
    const today = dayIndex(now);
    const { cards, starter, dailyDay } = normalizeCollection(eco);
    const daily = dailyCard(today);
    return {
        ...collectionSummary(eco),
        cards,
        starter,
        starters: starter ? [] : STARTERS.map((slug) => BY_SLUG.get(slug)),
        daily: { ...daily, claimed: dailyDay === today, owned: Boolean(cards[daily.slug]), resetsAt: new Date((today + 1) * 24 * 60 * 60 * 1000).toISOString() },
        prices: PRICES
    };
}

module.exports = {
    PRICES,
    ROSTER,
    SOURCES,
    STARTERS,
    addCard,
    cardFor,
    collectionState,
    collectionSummary,
    dailyCard,
    normalizeCollection,
    priceOf
};
