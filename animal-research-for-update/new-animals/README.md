# New roster animals: catalogue entries

New animals must be ones people have seen alive: living species or domestic breeds,
never animals known only from fossils.

Each new animal has a research report in `../animals/<slug>.md` and a catalogue
entry here, `<slug>.json`, with the base fields the report does not cover.
`scripts/research/import-research.js` adds these to the catalogue and overlays
the report's facts, ratings, substats, abilities, traits and text.

Fields (see `wolverine.example.json`):

- `name`: common name; its slug must equal the file name
- `scientific_name`
- `type`: Mammal, Bird, Reptile, Fish, Insect, Amphibian, Arachnid, Cnidarian,
  Invertebrate, Arthropod, Marsupial, Crustacean or Cephalopod
- `class` and `battle_profile.combat_style`: the same combat archetype, one of
  the existing ones where possible (Tank, Bruiser, Hunter, Ambush Predator,
  Grappler, Fighter, Assassin, Titan, Stealth, Pack Hunter, Scout, Speedster,
  Venomous Hunter, Constrictor, Berserker, Charger, Sky Hunter, Swarm, ...)
- `size`: Tiny, Small, Medium, Large, Extra Large or Colossal
- `biome`: SAVANNA, FOREST, JUNGLE, WETLANDS, DESERT, MOUNTAINS, ARCTIC or OCEAN
- `habitat`: short text, e.g. "Boreal forests, tundra"
- `diet`: 2-4 short items
- `isNocturnal`, `isSocial`: booleans
- `description`: one or two plain sentences (the report's summary replaces it on
  the site, so keep it short)
- `battle_profile`: `preferred_range` (Close, Mid range or Long range),
  `primary_environment`, `combat_style`, exactly 3 `strengths` and 3 `weaknesses`
