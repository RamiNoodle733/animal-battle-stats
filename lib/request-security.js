const { isRequestOriginAllowed } = require('./cors');

const UNSAFE_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

function bodyByteLength(body) {
    if (body === undefined || body === null) return 0;
    if (Buffer.isBuffer(body)) return body.length;
    if (typeof body === 'string') return Buffer.byteLength(body, 'utf8');

    try {
        return Buffer.byteLength(JSON.stringify(body), 'utf8');
    } catch (_error) {
        return Infinity;
    }
}

function declaredBodyLength(req) {
    const value = (req.headers || {})['content-length'];
    if (value === undefined) return null;
    if (Array.isArray(value) || !/^\d+$/.test(String(value).trim())) return Infinity;
    const length = Number(value);
    return Number.isSafeInteger(length) ? length : Infinity;
}

function hasExplicitBearer(req) {
    const authorization = (req.headers || {}).authorization;
    // Match lib/auth exactly so a non-canonical scheme cannot bypass the
    // cookie-origin check and then fall back to ambient cookie authentication.
    return typeof authorization === 'string' && /^Bearer\s+\S+$/.test(authorization);
}

function hasAuthCookie(req) {
    const cookieHeader = (req.headers || {}).cookie;
    if (typeof cookieHeader !== 'string') return false;
    return cookieHeader.split(';').some((part) => {
        const [name, ...valueParts] = part.trim().split('=');
        return name === 'abs_auth_token' && valueParts.join('=').length > 0;
    });
}

/**
 * Early application boundary for API handlers. Vercel's Node runtime supplies
 * a parsed body and enforces its own fixed payload ceiling; these smaller route
 * budgets reject before database access or business-side effects.
 *
 * Browser cookie credentials are origin-bound on unsafe methods. Explicit
 * Bearer credentials are treated as non-ambient API credentials, while a
 * route may explicitly allow an unauthenticated/public operation. The latter
 * does not bypass the cookie check: a request carrying our auth cookie still
 * needs a trusted Origin unless it also supplies an explicit Bearer token.
 */
function enforceRequestSecurity(req, res, options = {}) {
    const method = String(req.method || 'GET').toUpperCase();
    if (!UNSAFE_METHODS.has(method)) return true;

    const maxBodyBytes = options.maxBodyBytes;
    if (!Number.isSafeInteger(maxBodyBytes) || maxBodyBytes <= 0) {
        throw new TypeError('maxBodyBytes must be a positive integer');
    }

    if (declaredBodyLength(req) > maxBodyBytes || bodyByteLength(req.body) > maxBodyBytes) {
        res.status(413).json({ success: false, error: 'Request body too large' });
        return false;
    }

    const cookieAuth = hasAuthCookie(req);
    if (options.requireAllowedOrigin === true && !isRequestOriginAllowed(req)) {
        res.status(403).json({ success: false, error: 'Request origin not allowed' });
        return false;
    }
    if (cookieAuth && !hasExplicitBearer(req) && !isRequestOriginAllowed(req)) {
        res.status(403).json({ success: false, error: 'Request origin not allowed' });
        return false;
    }

    if (!cookieAuth && !hasExplicitBearer(req) && options.allowUnauthenticated !== true) {
        res.status(401).json({ success: false, error: 'Authentication required' });
        return false;
    }

    return true;
}

module.exports = {
    UNSAFE_METHODS,
    bodyByteLength,
    enforceRequestSecurity
};
