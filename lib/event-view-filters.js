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
    const audience = String(params.audience || '');
    if (!['', 'accounts', 'guests'].includes(audience)) throw new Error('Invalid audience filter.');
    const account = String(params.account || '').trim();
    if (account && !/^[A-Za-z0-9_]{3,20}$/.test(account)) throw new Error('Choose a valid account.');
    const clauses = [];
    if (audience === 'accounts') clauses.push({ username: { $nin: ['Anonymous', '', null] } });
    if (audience === 'guests') clauses.push({ username: { $in: ['Anonymous', '', null] } });
    if (account) clauses.push({ username: { $regex: `^${escapeRegex(account)}$`, $options: 'i' } });
    if (clauses.length) query.$and = [...(query.$and || []), ...clauses];
    const location = {};
    for (const field of ['region', 'city']) {
        const value = String(params[field] || '').trim();
        if (value.length > 100 || /[\x00-\x1f]/.test(value)) throw new Error('Invalid location filter.'); // eslint-disable-line no-control-regex
        if (value) { query[field] = { $regex: `^${escapeRegex(value)}$`, $options: 'i' }; location[field] = value; }
    }
    const device = String(params.device || '').trim();
    if (device && !['Desktop', 'Mobile', 'Tablet'].includes(device)) throw new Error('Invalid device filter.');
    if (device) query.device = { $regex: `^${device}$`, $options: 'i' };
    if (query.occurredAt?.$gte && query.occurredAt?.$lte && query.occurredAt.$gte > query.occurredAt.$lte) throw new Error('The start date must be before the end date.');
    return { excluded, country, device, audience, account, ...location };
}

// Country and state dependencies narrow city choices. Counts are event counts,
// not unique people; choices are bounded independently from the event page.
function eventFilterOptionsPipeline({ country, region } = {}) {
    const choices = (field, match = {}) => [
        { $match: { ...match, [field]: { $nin: [null, '', 'Unknown', ...(field === 'username' ? ['Anonymous'] : [])] } } },
        { $group: { _id: `$${field}`, count: { $sum: 1 } } },
        { $sort: { count: -1, _id: 1 } }, { $limit: 500 }
    ];
    return [{ $facet: {
        countries: choices('country'),
        regions: choices('region', country ? { country } : {}),
        cities: choices('city', { ...(country ? { country } : {}), ...(region ? { region: { $regex: `^${escapeRegex(region)}$`, $options: 'i' } } : {}) }),
        accounts: choices('username'),
        eventTypes: choices('eventType')
    } }];
}

module.exports = { applyEventViewFilters, eventFilterOptionsPipeline };
