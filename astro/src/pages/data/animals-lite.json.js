// Compact roster for client-side search, filters and the compare tool.
import { animals } from '../../lib/catalog.js';

export function GET() {
    const list = animals.map((animal) => ({
        n: animal.name,
        s: animal.slug,
        sci: animal.scientific_name,
        t: animal.type,
        c: animal.class,
        g: animal.group,
        b: animal.biome,
        tier: animal.tier,
        p: animal.powerIndex,
        r: animal.rank,
        i: animal.img.thumb,
        m: animal.img.variants[1]?.src || animal.img.thumb,
        ar: animal.img.ar,
        k: animal.img.k,
        atk: animal.attack,
        def: animal.defense,
        agi: animal.agility,
        sta: animal.stamina,
        int: animal.intelligence,
        spl: animal.special,
        w: animal.weight_kg,
        v: animal.speed_mps,
        len: animal.length_cm,
        ht: animal.height_cm,
        bf: animal.bite_force_psi,
        ls: animal.lifespan_years,
        ab: (animal.special_abilities || []).slice(0, 2),
        cls: animal.class,
        res: animal.researched ? 1 : 0
    }));
    return new Response(JSON.stringify(list), { headers: { 'Content-Type': 'application/json' } });
}
