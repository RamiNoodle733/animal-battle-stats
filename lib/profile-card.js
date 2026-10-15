'use strict';
const { cardFor, addCard } = require('./collection');

function welcomeProfileEconomy(economy, profileAnimal) {
    const eco = { ...(economy || {}), cards: { ...(economy?.cards || {}) } };
    const card = cardFor(profileAnimal);
    if (!eco.profileGift && card) {
        addCard(eco, card.slug, 'welcome');
        eco.profileGift = card.slug;
    }
    return eco;
}

// A lazy, idempotent upgrade for pre-existing accounts. The pipeline merges on
// the database's current economy, never a stale read of currency or rewards.
async function ensureProfileCard(User, user) {
    if (!user || user.economy?.profileGift) return;
    const card = cardFor(user.profileAnimal);
    if (!card) return;
    if (user.isNew) { user.economy = welcomeProfileEconomy(user.economy, user.profileAnimal); return; }
    const entry = { at: Date.now(), from: 'welcome' };
    await User.updateOne({ _id: user._id, $or: [{ profileAnimal: user.profileAnimal }, { profileAnimal: { $exists: false } }], 'economy.profileGift': { $exists: false } }, [{
        $set: { profileAnimal: { $ifNull: ['$profileAnimal', { $literal: card.name }] }, economy: { $mergeObjects: [
            { $ifNull: ['$economy', {}] },
            { profileGift: card.slug, cards: { $mergeObjects: [
                { $ifNull: ['$economy.cards', {}] },
                { [card.slug]: { $ifNull: [`$economy.cards.${card.slug}`, { $literal: entry }] } }
            ] } }
        ] } }
    }], { updatePipeline: true });
    const fresh = await User.findById(user._id).select('economy profileAnimal').lean();
    if (fresh) {
        user.economy = fresh.economy; user.profileAnimal = fresh.profileAnimal;
        // These values were already persisted. A later profile/name save must
        // not write this economy snapshot over a concurrently earned reward.
        user.unmarkModified('economy'); user.unmarkModified('profileAnimal');
    }
}
module.exports = { welcomeProfileEconomy, ensureProfileCard };
