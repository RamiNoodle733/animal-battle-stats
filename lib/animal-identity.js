'use strict';
const { createHash } = require('node:crypto');

// Never change an existing identifier: votes and comments already reference it.
// New research records need an ID before reaching browsers or Mongo schemas.
function animalId(animal) {
    if (/^[a-f0-9]{24}$/i.test(String(animal._id || ''))) return String(animal._id);
    const slug = animal.slug || String(animal.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return createHash('sha256').update(`abs:animal:${slug}`).digest('hex').slice(0, 24);
}
module.exports = { animalId };
