'use strict';

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Owner-only view filters; these never affect storage or delivery settings.
function applyEventViewFilters(query, params, ownerName) {
    const names = String(params.exclude || '').split(',').map((value) => value.trim().replace(/^@/, '')).filter(Boolean);
    if (params.hideMe === '1' && ownerName) names.push(ownerName);
    if (names.length > 50 || names.some((name) => !/^[A-Za-z0-9_.-]{1,40}$/.test(name))) throw new Error('Use up to 50 valid account names separated by commas.');
    const excluded = [...new Set(names.map((name) => name.toLowerCase()))];
    if (excluded.length) query.$nor = excluded.map((name) => ({ username: { $regex: `^${escapeRegex(name)}$`, $options: 'i' } }));
    const country = String(params.country || '').trim().toUpperCase();
    if (country && !/^[A-Z]{2}$/.test(country)) throw new Error('Use a two-letter country code, such as US.');
    if (country) query.country = country;
    const device = String(params.device || '').trim();
    if (device && !['Desktop', 'Mobile', 'Tablet'].includes(device)) throw new Error('Invalid device filter.');
    if (device) query.device = { $regex: `^${device}$`, $options: 'i' };
    if (query.occurredAt?.$gte && query.occurredAt?.$lte && query.occurredAt.$gte > query.occurredAt.$lte) throw new Error('The start date must be before the end date.');
    return { excluded, country, device };
}

module.exports = { applyEventViewFilters };
