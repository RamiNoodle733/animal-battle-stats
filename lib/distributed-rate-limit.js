'use strict';

const crypto = require('node:crypto');
const RateLimitBucket = require('./models/RateLimitBucket');

function clientAddress(req = {}) {
    const headers = req.headers || {};
    const forwarded = headers['x-vercel-forwarded-for'] || headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.trim()) {
        return forwarded.split(',')[0].trim().slice(0, 128);
    }
    return String(headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown').slice(0, 128);
}

function requestIdentity(req, authenticatedUserId) {
    const headers = req.headers || {};
    const userAgent = String(headers['user-agent'] || 'unknown').slice(0, 256);
    return authenticatedUserId
        ? `user:${String(authenticatedUserId).slice(0, 128)}`
        : `visitor:${clientAddress(req)}:${userAgent}`;
}

function bucketId(scope, identity, now, windowMs) {
    const windowNumber = Math.floor(now.getTime() / windowMs);
    return crypto.createHash('sha256')
        .update(`${scope}:${identity}:${windowNumber}`)
        .digest('hex');
}

async function consumeRateLimit({ scope, identity, max, windowMs, now = new Date() }) {
    if (typeof scope !== 'string' || !scope || typeof identity !== 'string' || !identity) {
        throw new TypeError('Rate limit scope and identity are required');
    }
    if (!Number.isInteger(max) || max < 1 || !Number.isInteger(windowMs) || windowMs < 1000) {
        throw new TypeError('Rate limit policy is invalid');
    }

    const id = bucketId(scope, identity, now, windowMs);
    const windowStart = Math.floor(now.getTime() / windowMs) * windowMs;
    const expiresAt = new Date(windowStart + windowMs * 2);

    try {
        const bucket = await RateLimitBucket.findOneAndUpdate(
            { _id: id, count: { $lt: max } },
            { $inc: { count: 1 }, $setOnInsert: { expiresAt } },
            { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
        ).lean();
        return { allowed: Boolean(bucket), remaining: bucket ? Math.max(0, max - bucket.count) : 0 };
    } catch (error) {
        if (error?.code === 11000) {
            // A concurrent first request can win the deterministic-id insert.
            // Retry as a conditional non-upsert before deciding the bucket is full.
            const bucket = await RateLimitBucket.findOneAndUpdate(
                { _id: id, count: { $lt: max } },
                { $inc: { count: 1 } },
                { returnDocument: 'after' }
            ).lean();
            return { allowed: Boolean(bucket), remaining: bucket ? Math.max(0, max - bucket.count) : 0 };
        }
        throw error;
    }
}

async function enforceRateLimit(res, policy) {
    const result = await consumeRateLimit(policy);
    if (result.allowed) return true;
    res.setHeader('Retry-After', String(Math.ceil(policy.windowMs / 1000)));
    res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
    return false;
}

async function clearRateLimit({ scope, identity, windowMs, now = new Date() }) {
    if (typeof scope !== 'string' || !scope || typeof identity !== 'string' || !identity) {
        throw new TypeError('Rate limit scope and identity are required');
    }
    if (!Number.isInteger(windowMs) || windowMs < 1000) {
        throw new TypeError('Rate limit policy is invalid');
    }
    await RateLimitBucket.deleteOne({ _id: bucketId(scope, identity, now, windowMs) });
}

module.exports = {
    bucketId,
    clientAddress,
    requestIdentity,
    consumeRateLimit,
    enforceRateLimit,
    clearRateLimit
};
