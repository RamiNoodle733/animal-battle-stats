'use strict';

const mongoose = require('mongoose');

// Who has a tab open right now. One row per signed-in player ("user:<id>") or
// guest ("visitor:<keyed hash of network + browser>"), refreshed by the page
// heartbeat and dropped by Mongo a couple of minutes after the last ping.
// Stored in Mongo rather than memory so every serverless instance agrees.
const PRESENCE_TTL_SECONDS = 120;

const PresenceSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    page: { type: String, default: null, maxlength: 256 },
    lastSeen: { type: Date, required: true }
}, {
    collection: 'presence',
    versionKey: false
});

PresenceSchema.index({ lastSeen: 1 }, { expireAfterSeconds: PRESENCE_TTL_SECONDS });

module.exports = mongoose.models.Presence || mongoose.model('Presence', PresenceSchema);
