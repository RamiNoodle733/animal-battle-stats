'use strict';

const mongoose = require('mongoose');

// Small owner-editable settings, one document per key (lib/tracking-settings.js
// keeps "tracking": which accounts are not tracked, what goes to Discord).
const SiteSettingSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    value: { type: mongoose.Schema.Types.Mixed, default: {} },
    updatedBy: { type: String, default: null }
}, {
    collection: 'sitesettings',
    timestamps: true,
    versionKey: false,
    minimize: false
});

module.exports = mongoose.models.SiteSetting || mongoose.model('SiteSetting', SiteSettingSchema);
