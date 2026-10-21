'use strict';

const { isNameHidden } = require('./moderation');

// Display names can differ from login names. Only the current, visible account
// supplies a profile route; anonymous posts never call this a public identity.
function publicProfileUrl(user) {
    if (!user || typeof user.username !== 'string' || !user.username || isNameHidden(user)) return null;
    return `/profile/${encodeURIComponent(user.username)}`;
}

module.exports = { publicProfileUrl };
