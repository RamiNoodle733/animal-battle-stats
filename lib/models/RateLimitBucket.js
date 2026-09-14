'use strict';

const mongoose = require('mongoose');

const RateLimitBucketSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    count: { type: Number, required: true, min: 0, default: 0 },
    expiresAt: { type: Date, required: true }
}, {
    collection: 'rate_limit_buckets',
    versionKey: false,
    timestamps: true
});

RateLimitBucketSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.models.RateLimitBucket
    || mongoose.model('RateLimitBucket', RateLimitBucketSchema);
