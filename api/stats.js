/**
 * API Route: /api/stats
 * 
 * Provides aggregate statistics about the animal database:
 * - Total count
 * - Breakdown by type, class, size
 * - Top animals by various stats
 */

const { countBy, listAnimals, sortAnimals } = require('../lib/canonical-animals');
const { setCorsHeaders } = require('../lib/cors');
const { enforceRequestSecurity } = require('../lib/request-security');

module.exports = async function handler(req, res) {
    // Public aggregate stats are read-only and return no auth/user data, so they intentionally stay open.
    setCorsHeaders(req, res, {
        methods: 'GET, OPTIONS',
        headers: 'Content-Type',
        open: true
    });

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (!enforceRequestSecurity(req, res, {
        maxBodyBytes: 4 * 1024,
        allowUnauthenticated: true
    })) return;

    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            success: false,
            error: `Method ${req.method} Not Allowed`
        });
    }

    try {
        const animals = listAnimals();
        const top = (field) => sortAnimals(animals, field, 'desc').slice(0, 5).map((animal) => ({
            _id: animal._id,
            name: animal.name,
            slug: animal.slug,
            [field]: animal[field],
            image: animal.image,
            imageSet: animal.imageSet
        }));

        res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
        return res.status(200).json({
            success: true,
            data: {
                total: animals.length,
                researched: animals.filter((animal) => animal.research_status === 'researched').length,
                byType: countBy('type'),
                byClass: countBy('class'),
                bySize: countBy('size'),
                byTier: countBy('tier'),
                leaderboards: {
                    attack: top('attack'),
                    defense: top('defense'),
                    agility: top('agility'),
                    intelligence: top('intelligence'),
                    overall: top('powerIndex')
                }
            }
        });

    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};
