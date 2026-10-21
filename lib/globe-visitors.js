'use strict';

// Exact distinct counts without MongoDB's growing $addToSet accumulators.
// The existing visitorHash index orders a small projected cursor. Only one
// visitor's visited buckets are retained; hashes never leave this function.
async function readGlobeVisitors(Activity, { trendSince = null } = {}) {
    const result = { total: 0, locations: new Map(), actions: new Map(), pages: new Map(), days: new Map() };
    let current = null;
    let buckets = null;
    const flush = () => {
        if (!buckets) return;
        result.total += 1;
        for (const kind of ['locations', 'actions', 'pages', 'days']) {
            for (const key of buckets[kind]) result[kind].set(key, (result[kind].get(key) || 0) + 1);
        }
    };
    const cursor = Activity.find({ visitorHash: { $type: 'string', $ne: '' } })
        .select('visitorHash locationKey eventType page occurredAt coordinates.lat coordinates.lng -_id')
        .sort({ visitorHash: 1 }).maxTimeMS(45000).lean().cursor({ batchSize: 1000 });
    try {
        for await (const row of cursor) {
            if (typeof row.visitorHash !== 'string' || !row.visitorHash) continue;
            if (row.visitorHash !== current) {
                flush();
                current = row.visitorHash;
                buckets = { locations: new Set(), actions: new Set(), pages: new Set(), days: new Set() };
            }
            if (row.locationKey != null && row.coordinates?.lat != null && row.coordinates?.lng != null) buckets.locations.add(row.locationKey);
            buckets.actions.add(row.eventType ?? null);
            if (row.page != null) buckets.pages.add(row.page);
            const date = new Date(row.occurredAt);
            if (Number.isFinite(date.getTime()) && (!trendSince || date >= trendSince)) buckets.days.add(date.toISOString().slice(0, 10));
        }
        flush();
        return result;
    } finally {
        await cursor.close();
    }
}

module.exports = { readGlobeVisitors };
