'use strict';

async function collectDescendantIds(rootId, findChildren) {
    if (!rootId || typeof findChildren !== 'function') {
        throw new TypeError('A root ID and child lookup are required');
    }

    const seen = new Set([String(rootId)]);
    const descendants = [];
    let frontier = [rootId];

    while (frontier.length > 0) {
        const children = await findChildren(frontier);
        const next = [];
        for (const child of children || []) {
            const id = child?._id ?? child;
            if (!id || seen.has(String(id))) continue;
            seen.add(String(id));
            descendants.push(id);
            next.push(id);
        }
        frontier = next;
    }

    return descendants;
}

module.exports = { collectDescendantIds };
