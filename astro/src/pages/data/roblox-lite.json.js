// /data/roblox-lite.json: the Roblox game for pages that show it in the browser (profiles, the
// binder, /roblox): islands, rarities, families, trophies, the game's weekly schedule and timed
// events, and each game animal's name, rarity, island, family and card thumbnail. From
// data/roblox-game-data.json, which is exported from the game's own code
// (scripts/roblox/import-game-data.js).
import game from '../../../../data/roblox-game-data.json';
import { animals } from '../../lib/catalog.js';
import { cardFiles } from '../../lib/card.js';

export function GET() {
    const site = new Map(animals.map((animal) => [animal.slug, animal]));
    const body = {
        maxStars: game.maxStars,
        levelCaps: game.levelCaps,
        starters: game.starters,
        rarities: game.rarities,
        biomes: game.biomes.map(({ id, name, order, boss, bossTitle, lair, color, accent, levels }) => ({ id, name, order, boss, bossTitle, lair, color, accent, levels })),
        families: game.families,
        trophyTiers: game.trophyTiers,
        trophyCategories: game.trophyCategories,
        trophies: game.trophies.map(({ id, name, desc, tier, category, title, hidden, hint, extra, points }) => ({ id, name, desc, tier, category, title, hidden, hint, extra, points })),
        // [slug, name, rarity, island, family, card thumbnail]
        animals: game.animals.map((animal) => [animal.id, animal.name, animal.rarity, animal.biome, animal.family, site.has(animal.id) ? cardFiles(site.get(animal.id)).thumb : null]),
        schedule: game.schedule
    };
    return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } });
}
