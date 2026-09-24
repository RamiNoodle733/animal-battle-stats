// Leaderboard categories for /rankings/<slug>. Stat categories use the 0-100
// ratings; measurement categories only include animals with a real value.
import { animals, fmtWeight, fmtSpeed, fmtBite, fmtLength, fmtScore } from './catalog.js';

export const CATEGORIES = Object.freeze([
    { slug: 'strongest', key: 'attack', label: 'Strongest animals', stat: 'Attack', cls: 'stat-atk',
      intro: 'Ranked by attack: raw damage from bites, claws, horns, tusks, venom, constriction and sheer mass.',
      value: (a) => a.attack, show: (a) => fmtScore(a.attack) },
    { slug: 'toughest', key: 'defense', label: 'Toughest animals', stat: 'Defense', cls: 'stat-def',
      intro: 'Ranked by defense: armor, hide, shells, body mass and the ability to keep fighting after taking hits.',
      value: (a) => a.defense, show: (a) => fmtScore(a.defense) },
    { slug: 'most-agile', key: 'agility', label: 'Most agile animals', stat: 'Agility', cls: 'stat-agi',
      intro: 'Ranked by agility: acceleration, reflexes, balance and evasion. Top speed alone does not count as agility.',
      value: (a) => a.agility, show: (a) => fmtScore(a.agility) },
    { slug: 'most-stamina', key: 'stamina', label: 'Animals with the most stamina', stat: 'Stamina', cls: 'stat-sta',
      intro: 'Ranked by stamina: how long an animal can keep chasing, swimming, flying or fighting at full effort.',
      value: (a) => a.stamina, show: (a) => fmtScore(a.stamina) },
    { slug: 'smartest', key: 'intelligence', label: 'Smartest animals', stat: 'Intelligence', cls: 'stat-int',
      intro: 'Ranked by intelligence: problem solving, learning, tactics, memory and social coordination.',
      value: (a) => a.intelligence, show: (a) => fmtScore(a.intelligence) },
    { slug: 'best-special-abilities', key: 'special', label: 'Animals with the best special abilities', stat: 'Special', cls: 'stat-spl',
      intro: 'Ranked by special: venom, electricity, echolocation, camouflage and other matchup-changing biology.',
      value: (a) => a.special, show: (a) => fmtScore(a.special) },
    { slug: 'heaviest', key: 'weight_kg', label: 'Heaviest animals', stat: 'Weight', cls: 'stat-def', measurement: true,
      intro: 'Ranked by typical adult body mass of the specimen each profile is rated on.',
      value: (a) => Number(a.weight_kg) || 0, show: (a) => fmtWeight(a.weight_kg)?.metric },
    { slug: 'fastest', key: 'speed_mps', label: 'Fastest animals', stat: 'Top speed', cls: 'stat-agi', measurement: true,
      intro: 'Ranked by measured top speed. Animals without a reliable speed measurement are left out rather than guessed.',
      value: (a) => Number(a.speed_mps) || 0, show: (a) => fmtSpeed(a.speed_mps)?.metric },
    { slug: 'strongest-bite', key: 'bite_force_psi', label: 'Strongest bite force', stat: 'Bite force', cls: 'stat-atk', measurement: true,
      intro: 'Ranked by bite force in PSI where a credible measurement or estimate exists.',
      value: (a) => Number(a.bite_force_psi) || 0, show: (a) => fmtBite(a.bite_force_psi)?.metric },
    { slug: 'longest', key: 'length_cm', label: 'Longest animals', stat: 'Length', cls: 'stat-sta', measurement: true,
      intro: 'Ranked by total body length of the rated adult specimen.',
      value: (a) => Number(a.length_cm) || 0, show: (a) => fmtLength(a.length_cm)?.metric }
]);

export function leaderboard(category) {
    return animals
        .filter((animal) => category.value(animal) > 0 && (!category.measurement || !(animal.profile.unverifiedFacts || []).includes(category.key)))
        .sort((a, b) => category.value(b) - category.value(a) || a.rank - b.rank);
}
