/**
 * API Route: /api/random
 * 
 * Returns random animals from the database
 */

const { connectToDatabase } = require('../lib/mongodb');
const Animal = require('../lib/models/Animal');
const { applyCanonicalAnimalImage, applyCanonicalAnimalImages } = require('../lib/animal-images');
const { setCorsHeaders } = require('../lib/cors');
const { InputError, randomParams } = require('../lib/api-input');
const { enforceRequestSecurity } = require('../lib/request-security');

module.exports = async function handler(req, res) {
    // Public random-animal data is read-only and returns no auth/user data, so it intentionally stays open.
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
        const { count: numAnimals, type, exclude } = randomParams(req.query);
        await connectToDatabase();

        const matchStage = {};
        
        if (type && type !== 'all') {
            matchStage.type = type;
        }

        // Exclude specific animal names (comma-separated)
        if (exclude) {
            const excludeNames = exclude.split(',').map(n => n.trim());
            matchStage.name = { $nin: excludeNames };
        }

        const animals = await Animal.aggregate([
            { $match: matchStage },
            { $sample: { size: numAnimals } }
        ]);

        return res.status(200).json({
            success: true,
            count: animals.length,
            data: numAnimals === 1
                ? applyCanonicalAnimalImage(animals[0] || null)
                : applyCanonicalAnimalImages(animals)
        });

    } catch (error) {
        if (error instanceof InputError) return res.status(400).json({ success: false, error: error.message });
        console.error('Random API Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};
