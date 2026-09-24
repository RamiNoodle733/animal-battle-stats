/**
 * API Route: /api/animals/[id]
 *
 * GET: a single animal by id, name or slug from the canonical catalogue.
 * PUT/DELETE: the catalogue is versioned in the repository (animal_stats.json,
 * generated from the research reports), so live edits are refused instead of
 * silently diverging from the site's static pages.
 */

const { findAnimal } = require('../../lib/canonical-animals');
const { setCorsHeaders } = require('../../lib/cors');
const { enforceRequestSecurity } = require('../../lib/request-security');

module.exports = async function handler(req, res) {
    setCorsHeaders(req, res, {
        methods: 'GET, PUT, DELETE, OPTIONS',
        credentials: true
    });

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (!enforceRequestSecurity(req, res, { maxBodyBytes: 64 * 1024 })) return;

    const { id } = req.query;
    if (!id) {
        return res.status(400).json({ success: false, error: 'Animal ID or name is required' });
    }

    if (req.method === 'PUT' || req.method === 'DELETE') {
        return res.status(409).json({
            success: false,
            error: 'The animal catalogue is managed in the repository. Update the research report and run npm run research:import.'
        });
    }

    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
    }

    const animal = findAnimal(id);
    if (!animal) {
        return res.status(404).json({ success: false, error: 'Animal not found' });
    }

    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
    return res.status(200).json({ success: true, data: animal });
};
