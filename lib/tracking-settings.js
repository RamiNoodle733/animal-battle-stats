'use strict';

// The owner's tracking settings (Community → Events → Settings):
//
//   ignored   accounts whose activity is not tracked at all: no event is
//             stored and nothing is posted to Discord or Slack (the owner's
//             own account by default, so testing the site stays out of the
//             numbers and the feed)
//   discord   which events are posted: page views every time, only the first
//             page of each visit, or never, and any other event type turned
//             off. Events that are not posted are still stored and listed.
//
// Kept in Mongo (SiteSetting "tracking") so it changes without a deploy, and
// cached for half a minute per server instance.

const mongoose = require('mongoose');
const SiteSetting = require('./models/SiteSetting');

const KEY = 'tracking';
const CACHE_MS = 30 * 1000;
const DEFAULT_IGNORED = Object.freeze(['RamiNoodle733']);
const PAGE_VIEW_MODES = Object.freeze(['all', 'landing', 'off']);
const MAX_IGNORED = 50;

// Every event the site sends, grouped as the settings list shows them.
const EVENT_GROUPS = Object.freeze([
    { label: 'Visits', types: [['site_leave', 'Left the site']] },
    { label: 'Accounts', types: [['signup', 'Sign-ups'], ['login', 'Logins'], ['logout', 'Logouts']] },
    { label: 'Votes and fights', types: [['vote', 'Votes and fight calls'], ['vote_changed', 'Changed votes'], ['vote_removed', 'Removed votes'], ['fight', 'Fights run']] },
    { label: 'Comments', types: [['comment', 'Comments'], ['comment_reply', 'Replies'], ['comment_upvote', 'Comment upvotes'], ['comment_downvote', 'Comment downvotes'], ['comment_deleted', 'Deleted comments']] },
    { label: 'Arena chat', types: [['chat_message', 'Messages'], ['chat_reply', 'Replies']] },
    { label: 'Progress', types: [['tournament_complete', 'Tournaments finished'], ['tournament_quit', 'Tournaments quit'], ['level_up', 'Level ups'], ['prestige', 'Prestiges'], ['card_collected', 'Cards collected']] }
]);
const EVENT_TYPES = new Set(['site_visit', ...EVENT_GROUPS.flatMap((group) => group.types.map(([type]) => type))]);

const nameKey = (value) => String(value || '').trim().toLowerCase();

function cleanUsername(value) {
    const text = String(value || '').trim().replace(/^@/, '');
    return /^[A-Za-z0-9_.-]{1,40}$/.test(text) ? text : null;
}

function normalize(value) {
    const source = value && typeof value === 'object' ? value : {};
    const seen = new Set();
    const ignored = [];
    const list = Array.isArray(source.ignored) ? source.ignored : DEFAULT_IGNORED.map((username) => ({ username }));
    for (const entry of list) {
        const username = cleanUsername(typeof entry === 'string' ? entry : entry?.username);
        if (!username || seen.has(nameKey(username)) || ignored.length >= MAX_IGNORED) continue;
        seen.add(nameKey(username));
        const userId = mongoose.isValidObjectId(entry?.userId) ? String(entry.userId) : null;
        ignored.push({ username, userId, addedAt: entry?.addedAt ? new Date(entry.addedAt).toISOString() : null });
    }
    const discord = source.discord && typeof source.discord === 'object' ? source.discord : {};
    return {
        ignored,
        discord: {
            pageViews: PAGE_VIEW_MODES.includes(discord.pageViews) ? discord.pageViews : 'all',
            off: [...new Set((Array.isArray(discord.off) ? discord.off : []).filter((type) => EVENT_TYPES.has(type) && type !== 'site_visit'))]
        }
    };
}

let cache = null;

async function getTrackingSettings() {
    if (cache && cache.expires > Date.now()) return cache.value;
    // Without a connection a query would wait for one; the defaults stand in.
    if (mongoose.connection.readyState !== 1) return normalize(null);
    let value;
    try {
        const doc = await SiteSetting.findById(KEY).lean();
        value = normalize(doc ? doc.value : null);
    } catch (error) {
        console.warn('Tracking settings unavailable:', error.message);
        return cache?.value || normalize(null);
    }
    cache = { value, expires: Date.now() + CACHE_MS };
    return value;
}

async function saveTrackingSettings(next, updatedBy = null) {
    const value = normalize(next);
    await SiteSetting.updateOne({ _id: KEY }, { $set: { value, updatedBy } }, { upsert: true });
    cache = { value, expires: Date.now() + CACHE_MS };
    return value;
}

function resetTrackingCache() {
    cache = null;
}

// True when the account (by id, or by name for events that only carry one) is not tracked.
function isIgnoredAccount(settings, { userId = null, username = null } = {}) {
    const ignored = settings?.ignored || [];
    if (!ignored.length) return false;
    const id = userId ? String(userId) : null;
    const name = nameKey(username);
    return ignored.some((entry) => (id && entry.userId === id) || (name && name !== 'anonymous' && nameKey(entry.username) === name));
}

// Whether an event goes to Discord (and Slack). `pages` is a page view's place in its visit.
function postsToDiscord(settings, eventType, data = {}) {
    const discord = settings?.discord || {};
    if (eventType === 'site_visit') {
        if (discord.pageViews === 'off') return false;
        if (discord.pageViews === 'landing') return !(Number(data.pages) > 1);
        return true;
    }
    return !(discord.off || []).includes(eventType);
}

module.exports = {
    DEFAULT_IGNORED,
    EVENT_GROUPS,
    PAGE_VIEW_MODES,
    cleanUsername,
    getTrackingSettings,
    isIgnoredAccount,
    normalizeTrackingSettings: normalize,
    postsToDiscord,
    resetTrackingCache,
    saveTrackingSettings
};
