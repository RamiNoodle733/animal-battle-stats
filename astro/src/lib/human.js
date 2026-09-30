// The Human at build time: the same average adult man as the Versus screen
// (scripts/human.js), shaped like a catalog animal so the matchup components can
// render him, plus the "Human vs ..." pages people search for ("can a human
// beat a gorilla", "how many men to beat a gorilla"). Humans are never listed
// or ranked with the animals.
import { HUMAN } from '../scripts/human.js';
import { getAnimal, MODEL } from './catalog.js';

export const HUMAN_FIGHTER = Object.freeze({
    name: 'Human',
    slug: 'human',
    human: true,
    scientific_name: 'Homo sapiens',
    type: 'Human',
    class: 'Human',
    biome: 'arena',
    tier: 'H',
    rank: null,
    powerIndex: HUMAN.p,
    attack: HUMAN.atk,
    defense: HUMAN.def,
    agility: HUMAN.agi,
    stamina: HUMAN.sta,
    intelligence: HUMAN.int,
    special: HUMAN.spl,
    weight_kg: HUMAN.w,
    height_cm: HUMAN.ht,
    length_cm: null,
    speed_mps: HUMAN.v,
    bite_force_psi: HUMAN.bf,
    lifespan_years: HUMAN.ls,
    special_abilities: HUMAN.ab,
    profile: {},
    img: Object.freeze({ src: HUMAN.m, master: HUMAN.m, thumb: HUMAN.m, width: 200, height: 480, variants: [], ar: HUMAN.ar, k: HUMAN.k })
});

// Opponents with a "Human vs" page: the matchups people ask about most.
const OPPONENTS = [
    'gorilla', 'chimpanzee', 'orangutan', 'baboon', 'mandrill', 'grizzly-bear', 'polar-bear', 'black-bear', 'african-lion',
    'siberian-tiger', 'jaguar', 'leopard', 'cougar', 'cheetah', 'gray-wolf', 'hyena', 'german-shepherd', 'american-pit-bull-terrier',
    'rottweiler', 'kangaroo', 'ostrich', 'cassowary', 'emu', 'saltwater-crocodile', 'alligator', 'great-white-shark', 'orca',
    'hippopotamus', 'african-elephant', 'rhinoceros', 'cape-buffalo', 'moose', 'bison', 'wild-boar', 'red-deer', 'camel', 'walrus',
    'king-cobra', 'black-mamba', 'komodo-dragon', 'green-anaconda'
];
export const HUMAN_OPPONENTS = OPPONENTS.map(getAnimal).filter(Boolean);
export const humanPairSlug = (animal) => `human-vs-${animal.slug}`;

// Chance that `count` average men beat one of this animal (group-fight model).
export function humansWin(animal, count) {
    return MODEL.compareGroups(HUMAN_FIGHTER, animal, count, 1, HUMAN_FIGHTER.weight_kg, animal.weight_kg).probability;
}

// The fewest men favoured (target 0.5) or near-certain (0.9) to win; null past a million.
export function humansNeeded(animal, target) {
    if (humansWin(animal, 1) >= target) return 1;
    let low = 1;
    let high = 1000000;
    if (humansWin(animal, high) < target) return null;
    while (high - low > 1) {
        const mid = Math.floor((low + high) / 2);
        if (humansWin(animal, mid) >= target) high = mid;
        else low = mid;
    }
    return high;
}

// The reverse: how many of the animal it takes to beat one man, when one is not enough.
export function animalsNeeded(animal, target = 0.5) {
    const odds = (count) => 1 - MODEL.compareGroups(HUMAN_FIGHTER, animal, 1, count, HUMAN_FIGHTER.weight_kg, animal.weight_kg).probability;
    if (odds(1) >= target) return 1;
    let low = 1;
    let high = 1000000;
    if (odds(high) < target) return null;
    while (high - low > 1) {
        const mid = Math.floor((low + high) / 2);
        if (odds(mid) >= target) high = mid;
        else low = mid;
    }
    return high;
}
