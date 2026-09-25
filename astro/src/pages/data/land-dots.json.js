// Land points for the Community world map, sampled at build time from the
// Natural Earth 1:110m land outlines so the page never downloads the full
// geometry. Points are spaced evenly on the sphere (about 2.2 degrees apart).
// Output: { step, dots: [lat0*10, lon0*10, lat1*10, lon1*10, ...] }
import fs from 'node:fs';
import path from 'node:path';

const STEP = 2.2;

function ringsOf(geometry) {
    if (geometry.type === 'Polygon') return [geometry.coordinates];
    if (geometry.type === 'MultiPolygon') return geometry.coordinates;
    return [];
}

function inRing(lon, lat, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i, i += 1) {
        const [xi, yi] = ring[i];
        const [xj, yj] = ring[j];
        if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
}

export function GET() {
    const file = path.resolve('data/ne_110m_land.geojson');
    const land = JSON.parse(fs.readFileSync(file, 'utf8'));
    const polygons = [];
    for (const feature of land.features) {
        for (const polygon of ringsOf(feature.geometry)) {
            const [outer, ...holes] = polygon;
            let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
            for (const [x, y] of outer) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
            polygons.push({ outer, holes, minX, minY, maxX, maxY });
        }
    }
    const dots = [];
    for (let lat = -84; lat <= 84; lat += STEP) {
        const lonStep = STEP / Math.max(0.12, Math.cos((lat * Math.PI) / 180));
        const offset = (Math.round(lat / STEP) % 2) * lonStep * 0.5;
        for (let lon = -180 + offset; lon < 180; lon += lonStep) {
            const hit = polygons.some((poly) => lon >= poly.minX && lon <= poly.maxX && lat >= poly.minY && lat <= poly.maxY
                && inRing(lon, lat, poly.outer) && !poly.holes.some((hole) => inRing(lon, lat, hole)));
            if (hit) dots.push(Math.round(lat * 10), Math.round(lon * 10));
        }
    }
    return new Response(JSON.stringify({ step: STEP, dots }), { headers: { 'Content-Type': 'application/json' } });
}
