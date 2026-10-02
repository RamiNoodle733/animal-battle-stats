'use strict';

// Keeps a linked player's Roblox progress on the site. Their game save is read (lib/roblox-save.js)
// at most once per `maxAge`, the trainer card is kept on the User (robloxGame) so profiles load
// without asking Roblox, and every animal they have in the game joins their card collection.

const User = require('./models/User');
const { RobloxSaveError, parseSave, publicSnapshot, readSave } = require('./roblox-save');

const OWN_MAX_AGE = 60 * 1000; // your own profile and binder: a minute old at most
const PUBLIC_MAX_AGE = 30 * 60 * 1000; // someone else's: half an hour
const FORCE_GAP = 15 * 1000; // "Sync now" at most this often
const ERROR_GAP = 2 * 60 * 1000; // after Roblox said no, wait this long before asking again

const time = (value) => (value ? new Date(value).getTime() : 0);

function view(record, extra = {}) {
    return {
        linked: true,
        snapshot: record?.snapshot || null,
        at: record?.at || null,
        error: record?.error || null,
        added: [],
        ...extra
    };
}

// Brings a player's game progress over if it is older than `maxAge` (or `force`, the Sync button).
// Never throws: a failed read keeps the last good card and says why.
async function syncPlayer(user, { maxAge = OWN_MAX_AGE, force = false, now = Date.now() } = {}) {
    const robloxId = user?.roblox?.userId;
    if (!robloxId) return { linked: false };
    const record = user.robloxGame && user.robloxGame.robloxId === robloxId ? user.robloxGame : null;
    const age = now - time(record?.at);
    const sinceCheck = now - Math.max(time(record?.at), time(record?.checkedAt));
    if (record) {
        if (force ? sinceCheck < FORCE_GAP : age < maxAge) return view(record);
        if (record.error && sinceCheck < ERROR_GAP) return view(record);
    }

    let snapshot;
    try {
        snapshot = parseSave(await readSave(robloxId), now);
    } catch (error) {
        const code = error instanceof RobloxSaveError ? error.code : 'unavailable';
        if (!(error instanceof RobloxSaveError)) console.warn('roblox save read failed:', error.message);
        const next = { ...(record || { robloxId, snapshot: null, at: null }), robloxId, error: code, checkedAt: new Date(now) };
        await User.updateOne({ _id: user._id }, { $set: { robloxGame: next } }).catch(() => {});
        user.robloxGame = next;
        return view(next);
    }

    const next = { robloxId, snapshot, at: new Date(now), checkedAt: new Date(now), error: null };
    await User.updateOne({ _id: user._id }, { $set: { robloxGame: next } });
    user.robloxGame = next;
    let added = [];
    if (snapshot?.count) {
        try {
            // required here: rewards pulls in the whole economy
            const { syncGameCards } = require('./rewards');
            added = (await syncGameCards(user._id, Object.keys(snapshot.animals), now, { level: snapshot.trainer.level })).added;
        } catch (error) {
            console.warn('roblox card sync failed:', error.message);
        }
    }
    return view(next, { added });
}

// What a public profile shows: the game progress, and the Roblox account only if its owner chose to.
function publicRoblox(user) {
    const account = user?.roblox;
    if (!account?.userId) return null;
    const record = user.robloxGame && user.robloxGame.robloxId === account.userId ? user.robloxGame : null;
    return {
        // Names only: the Roblox user id (and so a profile link) is never public.
        account: account.showPublic ? { username: account.username || null, displayName: account.displayName || null } : null,
        game: publicSnapshot(record?.snapshot || null),
        at: record?.at || null
    };
}

module.exports = { OWN_MAX_AGE, PUBLIC_MAX_AGE, publicRoblox, syncPlayer };
