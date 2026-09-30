// The Human fighter for the Versus screen: an average adult man, unarmed and
// untrained. Humans are not listed as animals (no rank, no tier list, no
// animal pages); they only step into the ring. Same fields as
// /data/animals-lite.json, rated on the same 0-100 scale:
//   attack 32: punches and kicks, no claws, fangs or horns
//   defense 30: 80 kg of body, but bare skin
//   agility 40: slow over short distances, clumsy next to most animals
//   stamina 85: among the best endurance runners of all (persistence hunting)
//   intelligence 100: the top of the scale by definition
//   special 36: grappling, throwing and problem solving
export const HUMAN = Object.freeze({
    n: 'Human',
    s: 'human',
    h: 1,
    sci: 'Homo sapiens',
    t: 'Human',
    c: 'Human',
    cls: 'Human',
    b: 'arena',
    tier: 'H',
    p: 45.4,
    r: null,
    i: '/images/human/human.svg',
    m: '/images/human/human.svg',
    ar: 0.417,
    k: 0.82,
    atk: 32,
    def: 30,
    agi: 40,
    sta: 85,
    int: 100,
    spl: 36,
    w: 80,
    v: 7.5,
    len: null,
    ht: 175,
    bf: 162,
    ls: 73,
    ab: ['Haymaker punch', 'Tackle and grapple'],
    res: 0
});
