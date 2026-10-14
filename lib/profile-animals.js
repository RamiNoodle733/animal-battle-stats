'use strict';

const { randomInt } = require('node:crypto');
const { listAnimals, findAnimal } = require('./canonical-animals');

// Free profile avatars, not random card packs or paid rewards. Pig/boar
// relatives are excluded from automatic assignments, not manual selection.
const STARTER_ANIMALS = Object.freeze(listAnimals().filter((animal) =>
    !/\b(pig|pigs|hog|hogs|boar|boars|warthog|warthogs|peccary|peccaries)\b/i.test(animal.name)
    && !/\b(Sus|Suidae|Phacochoerus|Potamochoerus|Pecari|Tayassu)\b/i.test(animal.scientific_name || '')
));

function randomProfileAnimal() {
    if (!STARTER_ANIMALS.length) throw new Error('No eligible profile animals');
    return STARTER_ANIMALS[randomInt(STARTER_ANIMALS.length)].name;
}

function canonicalProfileAnimal(value) {
    return typeof value === 'string' ? findAnimal(value)?.name || null : null;
}

module.exports = { STARTER_ANIMALS, randomProfileAnimal, canonicalProfileAnimal };
