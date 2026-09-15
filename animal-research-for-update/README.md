# Animal Research for Update

This folder is a research staging area for a complete re-research and rebalance of all 225 Animal Battle Stats profiles. Files here do **not** modify the live site or production animal data.

## Scope

Research every animal listed in the repository's `DATA_PROGRESS.md`, including animals whose old physical-data checkbox is already complete. Existing live battle ratings, abilities, traits, and placeholder values are **not anchors** and must not bias the proposed values. Research from scratch.

## Specimen standard

- Use a representative healthy adult.
- When males are materially larger, stronger, more heavily armed, or are the primary fighting sex, use a healthy adult male as the canonical combat specimen.
- Document meaningful sexual dimorphism, geographic variation, age effects, and exceptional-vs-representative values.
- Do not silently use record specimens as the normal representative animal.

## ABS scaling standard

- Proposed research ratings use **0.1 to 100.0** with exactly one decimal place.
- Scores are **absolute across the entire 225-animal roster**, not pound-for-pound and not relative only to similar species.
- Tiny animals do not receive inflated physical-combat scores because they are impressive for their size. For example, an ant may have extraordinary proportional strength yet remain vastly below a gorilla in absolute power.
- A value near 100.0 is reserved for a true dataset-level ceiling in that category. Megalodon can serve as an extreme upper anchor for fields where its evidence supports that role, but it must not automatically receive 100.0 in unrelated categories.
- Preserve large real-world gaps. Do not compress an ant, wolf, gorilla, elephant, and Megalodon into superficially close scores.
- Avoid double-counting the same adaptation across multiple categories unless each score reflects a genuinely distinct combat advantage.
- Follow `CALIBRATION.md` and the site's current methodology definitions.

## Exactly two abilities and two traits

Every researched animal must have exactly:

- **2 proposed special abilities**
- **2 proposed unique traits**

Names should be distinctive and memorable but grounded in real biology. Do not invent magical or fictional powers. A named ability should correspond to a real weapon, behavior, sense, physiology, defense, locomotor adaptation, venom/electric system, camouflage mechanism, or other meaningful capability.

## Required research file

Create one Markdown file per animal under `animal-research-for-update/animals/` using a stable lowercase kebab-case filename.

Each animal file must include:

### 1. Identity and canonical specimen
- Common name
- Scientific name / taxon
- Exact animal represented by the site
- Living or extinct
- Canonical specimen assumption
- Sexual dimorphism and population notes

### 2. Physical measurements
For each relevant measurement, provide a representative value, credible range where available, source support, uncertainty, and unit conversions.

At minimum investigate:
- Weight / mass
- Height
- Body length
- Top movement speed and locomotion context
- Lifespan
- Bite force when relevant and credibly available
- Natural-weapon dimensions where relevant: teeth, tusks, horns, antlers, claws, talons, stingers, etc.
- Armor, shell, hide, blubber, scales, or other defensive structures
- Other species-specific physical measurements useful for battle analysis

Do not fabricate bite-force PSI. If no reliable measurement or defensible estimate exists, explicitly say so.

### 3. Canonical proposed factual fields
Give the exact recommended value for every factual field the site can reasonably support, including current schema fields such as:
- `weight_kg`
- `height_cm`
- `length_cm`
- `speed_mps`
- `lifespan_years`
- `bite_force_psi`

Explain why the chosen canonical value is appropriate when sources provide ranges or conflicts.

### 4. Combat biology
Research and explain:
- Primary and secondary weapons
- Offensive mechanics
- Defensive adaptations and durability
- Locomotion and maneuverability
- Endurance/stamina
- Senses
- Intelligence, learning, problem solving, tactics, and social coordination where combat-relevant
- Hunting behavior
- Intraspecific fighting
- Predator defense
- Aggression/ferocity
- Environmental strengths and limitations
- Major weaknesses
- Good and bad matchup archetypes

### 5. Proposed ABS substats
Score every substat currently used by the repository when applicable, using one decimal place, with a short evidence-based justification for each. At minimum consider existing concepts such as size, raw power, weaponry, protection, toughness, maneuverability, endurance, tactics, senses, ferocity, and abilities.

### 6. Proposed six headline ABS ratings
Provide one-decimal values and justification for:
- Attack
- Defense
- Agility
- Stamina
- Intelligence
- Special

Do not preserve, average with, or stay close to the old site score merely because it exists. The old score may be mentioned only as context if useful after the independent recommendation has been reached.

### 7. Abilities and traits
Provide exactly two of each:

**Special abilities**
1. Name — biological basis and matchup relevance
2. Name — biological basis and matchup relevance

**Unique traits**
1. Name — what makes it distinctive
2. Name — what makes it distinctive

### 8. Expanded profile content
Include material suitable for future site expansion:
- Habitat
- Geographic range
- Diet
- Ecology
- Social structure
- Reproduction / life history where useful
- Conservation status for living species when available
- Major adaptations
- Human interaction where relevant
- At least several strong fun facts
- A concise site-ready summary
- A much more detailed narrative profile
- Optional proposed new structured fields that would genuinely improve the site

### 9. Evidence and source ledger
For every major claim or numerical recommendation, record:
- Source title / organization
- Direct URL
- What claim or field it supports
- Reported value or finding
- Relevant population/sex/context
- Confidence level
- Conflicts or caveats

Prefer peer-reviewed papers, government agencies, museums, universities, major zoological institutions, species authorities, IUCN, NOAA, Animal Diversity Web, Catalogue of Life, and primary measurements. Use weaker tertiary sources only when necessary and label them accordingly.

### 10. Cross-animal calibration notes
Compare the animal against relevant already-researched animals and dataset anchors. Explicitly flag any score that appears inconsistent with the broader roster.

## Research quality rules

1. Search broadly enough to resolve conflicting values rather than copying the first result.
2. Keep measured facts separate from editorial ABS ratings.
3. Prefer representative adult values over records unless the field is specifically about maxima.
4. Preserve uncertainty instead of inventing precision.
5. Use one decimal place for proposed ratings and proposed canonical research values where appropriate.
6. Do not edit live site data from this folder-research phase.
7. Each completed animal should be committed to `main` in this folder with a clear commit message.
8. Before marking an animal complete, verify that it contains exactly two abilities, exactly two traits, detailed profile material, source URLs, physical facts, proposed substats, and all six headline ratings.

## Completion rule

The research pass is complete only when all 225 animals represented in `DATA_PROGRESS.md` have a corresponding completed file in `animal-research-for-update/animals/`. After that, perform a roster-wide normalization audit before any production-data migration.