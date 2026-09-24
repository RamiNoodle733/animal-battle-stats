/**
 * API Route: /api/search
 * 
 * Advanced search endpoint with filtering and sorting
 */

const { filterAnimals, sortAnimals } = require('../lib/canonical-animals');
const { setCorsHeaders } = require('../lib/cors');
const { InputError, searchParams } = require('../lib/api-input');
const { enforceRequestSecurity } = require('../lib/request-security');

module.exports = async function handler(req, res) {
    // Public animal search is read-only and returns no auth/user data, so it intentionally stays open.
    setCorsHeaders(req, res, {
        methods: 'GET, POST, OPTIONS',
        headers: 'Content-Type',
        open: true
    });

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (!enforceRequestSecurity(req, res, {
        maxBodyBytes: 16 * 1024,
        allowUnauthenticated: true
    })) return;

    if (req.method !== 'GET' && req.method !== 'POST') {
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({
            success: false,
            error: `Method ${req.method} Not Allowed`
        });
    }

    try {
        // Get params from query (GET) or body (POST)
        const params = searchParams(req.method === 'POST' ? req.body : req.query);

        const {
            q,              // Search query
            type,           // Animal type filter
            class: cls,     // Combat class filter
            size,           // Size filter
            minAttack,
            maxAttack,
            minDefense,
            maxDefense,
            minAgility,
            maxAgility,
            minStamina,
            maxStamina,
            minIntelligence,
            maxIntelligence,
            nocturnal,
            social,
            sort = 'name',
            order = 'asc',
            page = 1,
            limit = 50
        } = params;

        const ranges = {};
        const range = (field, min, max) => {
            if (min !== undefined || max !== undefined) ranges[field] = { min, max };
        };
        range('attack', minAttack, maxAttack);
        range('defense', minDefense, maxDefense);
        range('agility', minAgility, maxAgility);
        range('stamina', minStamina, maxStamina);
        range('intelligence', minIntelligence, maxIntelligence);

        const matches = sortAnimals(filterAnimals({
            search: q, type, class: cls, size, nocturnal, social, ranges
        }), sort, order);
        const pageSize = Math.max(1, parseInt(limit, 10) || 50);
        const skip = (Math.max(1, parseInt(page, 10) || 1) - 1) * pageSize;
        const animals = matches.slice(skip, skip + pageSize);
        const total = matches.length;

        return res.status(200).json({
            success: true,
            data: animals,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / parseInt(limit))
            }
        });

    } catch (error) {
        if (error instanceof InputError) return res.status(400).json({ success: false, error: error.message });
        console.error('Search API Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};
