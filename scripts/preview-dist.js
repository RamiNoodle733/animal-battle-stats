#!/usr/bin/env node
'use strict';

// Local preview of the production build (dist/) with Vercel-like routing:
// clean URLs, vercel.json redirects/rewrites and the database-free API routes.
// Usage: npm run build && node scripts/preview-dist.js [port]

const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const port = Number(process.argv[2] || process.env.PORT || 4321);
const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
process.env.MONGODB_URI ||= 'mongodb://127.0.0.1:9/preview-no-database';
process.env.JWT_SECRET ||= 'local-preview-secret-that-is-long-enough-1234567890';

const TYPES = {
    '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.geojson': 'application/json', '.ico': 'image/x-icon'
};

function toRegExp(source) {
    const names = [];
    const pattern = source.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\/:(\w+)(\*)?/g, (_, name, star) => {
        names.push(name);
        return star ? '(?:/(.*))?' : '/([^/]+)';
    });
    return { regexp: new RegExp(`^${pattern}$`), names };
}

function matchRule(rules, pathname) {
    for (const rule of rules || []) {
        const { regexp, names } = toRegExp(rule.source);
        const match = pathname.match(regexp);
        if (!match) continue;
        let destination = rule.destination;
        names.forEach((name, index) => { destination = destination.replace(`:${name}*`, match[index + 1] || '').replace(`:${name}`, match[index + 1] || ''); });
        return { rule, destination };
    }
    return null;
}

function sendFile(res, file, status = 200) {
    res.writeHead(status, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    fs.createReadStream(file).pipe(res);
}

function staticFile(pathname) {
    const clean = decodeURIComponent(pathname).replace(/\/+$/, '') || '/';
    const candidates = clean === '/' ? ['index.html'] : [clean.slice(1), `${clean.slice(1)}.html`, `${clean.slice(1)}/index.html`];
    for (const candidate of candidates) {
        const file = path.join(dist, candidate);
        if (!file.startsWith(dist)) return null;
        if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
    }
    return null;
}

async function callApi(req, res, pathname, query) {
    const name = pathname.replace(/^\/api\//, '');
    let file = path.join(root, 'api', `${name}.js`);
    const params = { ...query };
    if (!fs.existsSync(file)) {
        const nested = name.match(/^([\w-]+)\/([^/]+)$/);
        if (nested && fs.existsSync(path.join(root, 'api', nested[1], '[id].js'))) {
            file = path.join(root, 'api', nested[1], '[id].js');
            params.id = decodeURIComponent(nested[2]);
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: false, error: 'No such API route' }));
        }
    }
    let body = '';
    for await (const chunk of req) body += chunk;
    req.query = params;
    try { req.body = body ? JSON.parse(body) : {}; } catch { req.body = body; }
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (payload) => { if (!res.getHeader('Content-Type')) res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(payload)); return res; };
    try {
        const handler = require(file);
        await Promise.race([
            handler(req, res),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout (no database in preview)')), 4000))
        ]);
    } catch (error) {
        if (!res.headersSent) {
            res.writeHead(503, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: `Unavailable in local preview: ${error.message}` }));
        }
    }
}

http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${port}`);
    let pathname = url.pathname;
    const query = Object.fromEntries(url.searchParams);

    const redirect = matchRule(vercel.redirects, pathname);
    if (redirect) {
        res.writeHead(redirect.rule.permanent ? 308 : 307, { Location: redirect.destination + url.search });
        return res.end();
    }
    if (pathname.startsWith('/api/')) return callApi(req, res, pathname, query);

    let file = staticFile(pathname);
    if (!file) {
        const rewrite = matchRule(vercel.rewrites, pathname);
        if (rewrite) {
            const target = new URL(rewrite.destination, `http://localhost:${port}`);
            if (target.pathname.startsWith('/api/')) return callApi(req, res, target.pathname, { ...query, ...Object.fromEntries(target.searchParams) });
            file = staticFile(target.pathname);
        }
    }
    if (file) return sendFile(res, file);
    const notFound = path.join(dist, '404.html');
    if (fs.existsSync(notFound)) return sendFile(res, notFound, 404);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
}).listen(port, () => console.log(`Preview: http://localhost:${port}`));
