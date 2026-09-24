/**
 * API Route: /api/animals
 * 
 * Handles all animal-related API requests:
 * - GET: Fetch all animals (with optional filters)
 * - POST: Create a new animal
 * 
 * Also handles health check and site notifications (consolidated from health.js):
 * - GET ?action=health - Health check endpoint
 * - POST ?action=notify - Site visit/leave/logout notifications
 */

const { connectToDatabase } = require('../lib/mongodb');
const { waitUntil } = require('@vercel/functions');
const Animal = require('../lib/models/Animal');
const { getAuthUser, authorizeRequest } = require('../lib/auth');
const { applyCanonicalAnimalImage } = require('../lib/animal-images');
const { filterAnimals, listAnimals, sortAnimals } = require('../lib/canonical-animals');
const { notifyDiscord } = require('../lib/discord');
const { setCorsHeaders } = require('../lib/cors');
const { enforceRequestSecurity } = require('../lib/request-security');
const { enforceRateLimit, requestIdentity } = require('../lib/distributed-rate-limit');

const ANIMAL_WRITE_FIELDS = Object.freeze([
    'name', 'scientific_name', 'description', 'type', 'class', 'habitat', 'size',
    'weight_kg', 'height_cm', 'length_cm', 'speed_mps', 'lifespan_years', 'bite_force_psi',
    'size_score', 'isNocturnal', 'isSocial', 'diet', 'attack', 'defense', 'agility',
    'stamina', 'intelligence', 'special_attack', 'substats', 'battle_profile',
    'unique_traits', 'special_abilities', 'image'
]);

function pickAnimalWriteFields(input = {}) {
    return ANIMAL_WRITE_FIELDS.reduce((result, field) => {
        if (input[field] !== undefined) result[field] = input[field];
        return result;
    }, {});
}

module.exports = async function handler(req, res) {
    setCorsHeaders(req, res, {
        methods: 'GET, POST, OPTIONS',
        credentials: true
    });

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (!enforceRequestSecurity(req, res, {
        maxBodyBytes: 64 * 1024,
        allowUnauthenticated: req.query?.action === 'notify',
        requireAllowedOrigin: req.query?.action === 'notify'
    })) return;

    try {
        const { action } = req.query;

        // Cache only the main animal listing endpoint.
        if (req.method === 'GET' && !action) {
            res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
        } else {
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');
        }

        // Health check action (consolidated from health.js)
        if (action === 'health') {
            return await handleHealthCheck(req, res);
        }

        // Notification action (site_visit, logout, site_leave)
        if (action === 'notify' && req.method === 'POST') {
            return await handleNotification(req, res);
        }

        switch (req.method) {
            case 'GET':
                return await handleGet(req, res);
            case 'POST':
                await connectToDatabase();
                return await handlePost(req, res);
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                return res.status(405).json({ 
                    success: false, 
                    error: `Method ${req.method} Not Allowed` 
                });
        }
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal Server Error',
            message: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

// ============================================
// HEALTH CHECK (consolidated from health.js)
// ============================================

async function handleHealthCheck(req, res) {
    const startTime = Date.now();
    try {
        await connectToDatabase();
        const count = await Animal.countDocuments();
        const dbLatency = Date.now() - startTime;
        return res.status(200).json({
            success: true,
            status: 'healthy',
            timestamp: new Date().toISOString(),
            database: { connected: true, latencyMs: dbLatency, animalCount: count },
            environment: process.env.NODE_ENV || 'development'
        });
    } catch (error) {
        console.error('Health check failed:', error);
        return res.status(503).json({
            success: false,
            status: 'unhealthy',
            timestamp: new Date().toISOString(),
            error: 'Database connection failed'
        });
    }
}

async function handleNotification(req, res) {
    try {
        const authenticatedUser = getAuthUser(req);
        if (!await enforceRateLimit(res, {
            scope: 'browser-lifecycle-notify',
            identity: requestIdentity(req, authenticatedUser?.id),
            max: 4,
            windowMs: 30 * 60 * 1000
        })) return;
        let body = req.body;
        if (typeof body === 'string') {
            try { body = JSON.parse(body); } catch (_e) { body = {}; }
        }
        const { type, page, referrer, sessionId, duration, screenSize, language, pages } = body || {};
        const username = authenticatedUser?.username || 'Anonymous';
        
        // Build notification data with all available info
        const notifyData = {
            username: username || 'Anonymous',
            page: page || '/',
            referrer: referrer || null,
            sessionId: sessionId || null,
            duration: duration || null,
            screenSize: screenSize || null,
            language: language || null,
            pages: pages || null
        };
        
        const notificationType = type === 'logout'
            ? 'logout'
            : type === 'site_leave'
                ? 'site_leave'
                : 'site_visit';
        const notificationData = notificationType === 'logout'
            ? { username: username || 'Unknown' }
            : notifyData;

        const response = res.status(200).json({ success: true });
        waitUntil(
            notifyDiscord(notificationType, notificationData, req)
                .catch((error) => console.error('Background notification error:', error))
        );
        return response;
    } catch (error) {
        console.error('Notification error:', error);
        return res.status(200).json({ success: true }); // Silent fail
    }
}

/**
 * GET /api/animals
 * Query params:
 * - search: text search
 * - type: filter by animal type
 * - class: filter by combat class
 * - size: filter by size category
 * - sort: sort field (attack, defense, agility, stamina, intelligence, special_attack, name, total)
 * - order: sort order (asc, desc)
 * - limit: number of results
 * - skip: pagination offset
 * - view=home: lightweight curated sample for the homepage
 */

async function handleHomeView(_req, res) {
    const animals = listAnimals().slice(0, 32).map((animal) => ({
        _id: animal._id,
        name: animal.name,
        slug: animal.slug,
        image: animal.image,
        imageSet: animal.imageSet,
        type: animal.type,
        totalStats: animal.totalStats,
        powerIndex: animal.powerIndex,
        tier: animal.tier,
        rank: animal.rank
    }));

    return res.status(200).json({
        success: true,
        count: animals.length,
        total: listAnimals().length,
        view: 'home',
        data: animals
    });
}

async function handleGet(req, res) {
    const {
        view,
        search,
        type,
        class: animalClass,
        size,
        biome,
        sort = 'name',
        order = 'asc',
        limit = 500,
        skip = 0
    } = req.query;

    if (view === 'home') {
        return handleHomeView(req, res);
    }

    const matches = sortAnimals(filterAnimals({ search, type, class: animalClass, size, biome }), sort, order);
    const start = Math.max(0, parseInt(skip, 10) || 0);
    const count = Math.max(0, Math.min(500, parseInt(limit, 10) || 500));
    const page = matches.slice(start, start + count);

    return res.status(200).json({
        success: true,
        count: page.length,
        total: matches.length,
        data: page
    });
}

/**
 * POST /api/animals
 * Create a new animal
 */
async function handlePost(req, res) {
    const authorization = await authorizeRequest(req, ['admin']);
    if (!authorization.ok) {
        return res.status(authorization.status).json({ success: false, error: authorization.error });
    }

    const animalData = pickAnimalWriteFields(req.body || {});

    // Validate required fields
    if (!animalData.name) {
        return res.status(400).json({
            success: false,
            error: 'Name is required'
        });
    }

    // Check for duplicate
    const existing = await Animal.findByName(animalData.name);
    if (existing) {
        return res.status(409).json({
            success: false,
            error: 'Animal with this name already exists'
        });
    }

    // Create animal
    const animal = await Animal.create(animalData);

    return res.status(201).json({
        success: true,
        data: applyCanonicalAnimalImage(animal)
    });
}
