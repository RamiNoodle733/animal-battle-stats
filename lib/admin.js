'use strict';

// Site owner and admin tools (the /admin page, through /api/auth?action=admin).
//
// The owner's account is recognised by its username together with the exact
// moment it was created, which nobody else can have; it becomes an admin the
// next time it loads any page (handleMe). More owner accounts can be named by
// id in ABS_OWNER_USER_IDS (comma-separated).
//
// Admins and moderators can list players, censor or restore a name, and mute
// or unmute chat and comments. Only admins can rename a player or change roles,
// and only the owner can make someone an admin. Nobody can act on an admin.

const User = require('./models/User');
const { findBlockedName, hiddenName, isNameHidden, validatePublicName } = require('./moderation');

const OWNER_ACCOUNTS = Object.freeze([
    Object.freeze({ username: 'raminoodle733', createdAt: '2025-12-03T04:21:20.083Z' })
]);

function ownerIds() {
    return String(process.env.ABS_OWNER_USER_IDS || '').split(',').map((id) => id.trim()).filter(Boolean);
}

function isOwnerAccount(user) {
    if (!user) return false;
    if (ownerIds().includes(String(user._id || user.id))) return true;
    const created = user.createdAt ? new Date(user.createdAt).toISOString() : null;
    const name = String(user.username || '').toLowerCase();
    return OWNER_ACCOUNTS.some((owner) => owner.username === name && owner.createdAt === created);
}

// Promotes the owner's account to admin once. Returns true when it changed.
async function ensureOwnerRole(user) {
    if (!isOwnerAccount(user) || user.role === 'admin') return false;
    user.role = 'admin';
    await user.save({ validateModifiedOnly: true });
    return true;
}

// Flags a player whose name breaks the name rules so their profile asks them to
// rename (their name is already hidden from everyone else). Returns true when it changed.
async function flagBrokenName(user) {
    if (!user || user.requiresUsernameChange || user.role === 'admin' || isOwnerAccount(user)) return false;
    const term = findBlockedName(user.username) || findBlockedName(user.displayName || '');
    if (!term) return false;
    user.requiresUsernameChange = true;
    user.moderationReason = 'Your name breaks the site\'s name rules. Pick a new one and it shows again.';
    user.moderatedAt = new Date();
    user.moderatedBy = 'auto';
    user.previousModeratedUsername = findBlockedName(user.username) ? user.username : null;
    user.previousModeratedDisplayName = findBlockedName(user.displayName || '') ? user.displayName : null;
    await user.save({ validateModifiedOnly: true });
    return true;
}

class AdminError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

function escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const LIST_FIELDS = '_id username displayName role level createdAt lastLogin requiresUsernameChange moderationReason moderatedAt moderatedBy previousModeratedUsername previousModeratedDisplayName mutedUntil mutedReason roblox.userId authProviders.provider';

function adminView(user) {
    const nameTerm = findBlockedName(user.username) || findBlockedName(user.displayName || '');
    return {
        id: String(user._id),
        username: user.username,
        displayName: user.displayName || null,
        shownAs: isNameHidden(user) ? hiddenName(user) : (user.displayName || user.username),
        hidden: isNameHidden(user),
        brokenRule: nameTerm ? nameTerm.category : null,
        censored: Boolean(user.requiresUsernameChange),
        reason: user.moderationReason || null,
        censoredAt: user.moderatedAt || null,
        censoredBy: user.moderatedBy ? String(user.moderatedBy) : null,
        mutedUntil: user.mutedUntil && new Date(user.mutedUntil) > new Date() ? user.mutedUntil : null,
        mutedReason: user.mutedReason || null,
        role: user.role || 'user',
        owner: isOwnerAccount(user),
        level: user.level || 1,
        createdAt: user.createdAt || null,
        lastLogin: user.lastLogin || null,
        roblox: Boolean(user.roblox?.userId),
        google: (user.authProviders || []).some((provider) => provider.provider === 'google')
    };
}

// GET: filter = all | names (breaks the rules or censored) | muted | staff | recent; q searches names.
async function listUsers({ q = '', filter = 'all', page = 1 } = {}) {
    const size = 50;
    const pageNumber = Math.max(1, Math.min(200, Number(page) || 1));
    const query = {};
    const search = String(q || '').trim().slice(0, 40);
    if (search) {
        const pattern = new RegExp(escapeRegex(search), 'i');
        query.$or = [{ username: pattern }, { displayName: pattern }];
    }
    if (filter === 'muted') query.mutedUntil = { $gt: new Date() };
    if (filter === 'staff') query.role = { $in: ['admin', 'moderator'] };

    if (filter === 'names') {
        // Every name is checked against the current rules, so this scans the players.
        const users = await User.find(query).select(LIST_FIELDS).sort({ createdAt: -1 }).limit(20000).lean();
        const flagged = users.filter((user) => user.requiresUsernameChange || findBlockedName(user.username) || findBlockedName(user.displayName || ''));
        return { total: flagged.length, page: pageNumber, pageSize: size, users: flagged.slice((pageNumber - 1) * size, pageNumber * size).map(adminView) };
    }

    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query).select(LIST_FIELDS).sort({ createdAt: -1 }).skip((pageNumber - 1) * size).limit(size).lean()
    ]);
    return { total, page: pageNumber, pageSize: size, users: users.map(adminView) };
}

async function summary() {
    const now = new Date();
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const [players, newThisWeek, censored, muted, staff] = await Promise.all([
        User.estimatedDocumentCount(),
        User.countDocuments({ createdAt: { $gte: weekAgo } }),
        User.countDocuments({ requiresUsernameChange: true }),
        User.countDocuments({ mutedUntil: { $gt: now } }),
        User.countDocuments({ role: { $in: ['admin', 'moderator'] } })
    ]);
    return { players, newThisWeek, censored, muted, staff };
}

async function loadTarget(actor, userId) {
    if (!/^[a-f0-9]{24}$/i.test(String(userId || ''))) throw new AdminError(400, 'Pick a player.');
    const target = await User.findById(userId);
    if (!target) throw new AdminError(404, 'That player no longer exists.');
    if (String(target._id) === String(actor._id)) throw new AdminError(400, 'You can\'t use this on your own account.');
    if (target.role === 'admin' || isOwnerAccount(target)) throw new AdminError(403, 'Admins can\'t be moderated.');
    return target;
}

function cleanReason(value, fallback) {
    const text = String(value || '').replace(/\s+/g, ' ').trim().slice(0, 200);
    return text || fallback;
}

// POST ops. `actor` is the signed-in admin or moderator (a User document).
async function runAction(actor, body = {}) {
    const op = String(body.op || '');
    const adminOnly = new Set(['rename', 'role']);
    if (adminOnly.has(op) && actor.role !== 'admin') throw new AdminError(403, 'Only admins can do that.');

    if (op === 'censor') {
        const target = await loadTarget(actor, body.userId);
        const which = ['username', 'displayName', 'both'].includes(body.target) ? body.target : 'both';
        target.requiresUsernameChange = true;
        target.moderationReason = cleanReason(body.reason, 'An admin hid your name. Pick a new one and it shows again.');
        target.moderatedAt = new Date();
        target.moderatedBy = actor._id;
        target.previousModeratedUsername = which === 'displayName' ? null : target.username;
        target.previousModeratedDisplayName = which === 'username' ? null : (target.displayName || target.username);
        await target.save({ validateModifiedOnly: true });
        return adminView(target);
    }

    if (op === 'restore') {
        const target = await loadTarget(actor, body.userId);
        target.requiresUsernameChange = false;
        target.moderationReason = null;
        target.moderatedAt = null;
        target.moderatedBy = null;
        target.previousModeratedUsername = null;
        target.previousModeratedDisplayName = null;
        await target.save({ validateModifiedOnly: true });
        return adminView(target);
    }

    if (op === 'mute' || op === 'unmute') {
        const target = await loadTarget(actor, body.userId);
        if (op === 'mute') {
            const hours = Number(body.hours);
            // 0 or missing hours = until unmuted (100 years).
            const ms = Number.isFinite(hours) && hours > 0 ? Math.min(hours, 24 * 365) * 60 * 60 * 1000 : 100 * 365 * 24 * 60 * 60 * 1000;
            target.mutedUntil = new Date(Date.now() + ms);
            target.mutedReason = cleanReason(body.reason, 'Muted by an admin');
        } else {
            target.mutedUntil = null;
            target.mutedReason = null;
        }
        await target.save({ validateModifiedOnly: true });
        return adminView(target);
    }

    if (op === 'rename') {
        const target = await loadTarget(actor, body.userId);
        if (body.username !== undefined) {
            const username = String(body.username || '').trim();
            if (!/^[A-Za-z0-9_]{3,20}$/.test(username)) throw new AdminError(400, 'Usernames are 3 to 20 letters, numbers or underscores.');
            if (!validatePublicName(username, { newName: true }).valid) throw new AdminError(400, 'That username breaks the name rules.');
            const taken = await User.findOne({ username: new RegExp(`^${escapeRegex(username)}$`, 'i'), _id: { $ne: target._id } }).select('_id').lean();
            if (taken) throw new AdminError(409, 'That username is taken.');
            if (username !== target.username) {
                target.usernameChanges = [...(target.usernameChanges || []), { oldUsername: target.username, newUsername: username, changedAt: new Date() }].slice(-20);
                target.username = username;
            }
        }
        if (body.displayName !== undefined) {
            const displayName = String(body.displayName || '').trim();
            if (!displayName || displayName.length > 30) throw new AdminError(400, 'Display names are 1 to 30 characters.');
            if (!validatePublicName(displayName, { newName: true }).valid) throw new AdminError(400, 'That display name breaks the name rules.');
            target.displayName = displayName;
        }
        // A clean name set by an admin clears the censor.
        if (validatePublicName(target.username).valid && validatePublicName(target.displayName || target.username).valid) {
            target.requiresUsernameChange = false;
            target.moderationReason = null;
            target.moderatedAt = null;
            target.moderatedBy = null;
            target.previousModeratedUsername = null;
            target.previousModeratedDisplayName = null;
        }
        try {
            await target.save({ validateModifiedOnly: true });
        } catch (error) {
            if (error?.code === 11000) throw new AdminError(409, 'That username is taken.');
            throw error;
        }
        return adminView(target);
    }

    if (op === 'role') {
        const target = await loadTarget(actor, body.userId);
        const role = String(body.role || '');
        const allowed = isOwnerAccount(actor) ? ['user', 'moderator', 'admin'] : ['user', 'moderator'];
        if (!allowed.includes(role)) throw new AdminError(403, role === 'admin' ? 'Only the owner can make someone an admin.' : 'Unknown role.');
        target.role = role;
        await target.save({ validateModifiedOnly: true });
        return adminView(target);
    }

    throw new AdminError(400, 'Unknown admin action.');
}

// Whether a player may post in chat and comments now.
function isMuted(user) {
    return Boolean(user?.mutedUntil && new Date(user.mutedUntil) > new Date());
}

module.exports = {
    AdminError,
    adminView,
    ensureOwnerRole,
    flagBrokenName,
    isMuted,
    isOwnerAccount,
    listUsers,
    runAction,
    summary
};
