// Every matchup that has its own page (/compare/<a>-vs-<b>), so Versus can
// share that page, whose link preview shows this exact fight, instead of the
// Versus screen's generic one.
import { PAIRS } from '../../lib/matchups.js';
import { HUMAN_OPPONENTS, humanPairSlug } from '../../lib/human.js';

export function GET() {
    const slugs = [...PAIRS.map((pair) => pair.slug), ...HUMAN_OPPONENTS.map(humanPairSlug)];
    return new Response(JSON.stringify(slugs), { headers: { 'Content-Type': 'application/json' } });
}
