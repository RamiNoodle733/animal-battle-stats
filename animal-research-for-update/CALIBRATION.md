# ABS Research Calibration

This document governs proposed research ratings for the 225-animal overhaul.

## Core rule: absolute roster scaling

ABS research ratings are not pound-for-pound ratings and are not scores relative only to similar animals. They compare animals across the full roster in absolute battle-relevant terms.

A tiny animal can be extraordinary for its size while still scoring very low in absolute raw power, durability, or attack. A gorilla must be vastly above an ant in absolute physical power. Large gaps in real combat capability should remain large gaps in the ratings.

Use `0.1` as the practical nonzero floor and `100.0` as the dataset ceiling for a category. Zero should be reserved for a genuinely absent or inapplicable capability when the data model permits it. Research files should retain exactly one decimal place.

## General interpretation bands

These are guides, not quotas:

- `0.1–4.9`: negligible at the full-roster scale
- `5.0–14.9`: extremely low
- `15.0–29.9`: low
- `30.0–44.9`: below the roster's serious combat middle
- `45.0–59.9`: moderate absolute capability
- `60.0–74.9`: strong
- `75.0–84.9`: very strong
- `85.0–92.9`: elite
- `93.0–97.9`: extreme
- `98.0–99.9`: near-ceiling
- `100.0`: dataset ceiling anchor

Do not force animals into evenly populated bands. The real distribution may be highly uneven.

## Headline stat definitions

Follow the live methodology while applying the absolute scale.

### Attack
Capacity to inflict meaningful damage using natural weapons, striking force, bite, crushing force, constriction, venom delivery, tusks, horns, claws, talons, ramming, or similar tools.

Attack must reflect practical damage potential, not merely body size. Do not automatically give 100.0 to the largest animal. Consider weapon effectiveness, delivery, reach, force, lethality, and repeatability.

### Defense
Protection and ability to remain functional under attack. Consider body mass where it truly improves survivability, plus armor, hide, shell, scales, blubber, skeletal robustness, toughness, pain tolerance, and resistance to common opponent attacks.

Do not count offensive danger as defense unless it actually deters or prevents attacks in a combat-relevant way.

### Agility
Acceleration, reflexes, turning ability, balance, control, evasiveness, repositioning, and locomotor precision. Top speed alone is not agility.

Absolute scale still applies, but this category can legitimately favor small or medium animals because maneuverability is not the same thing as raw force.

### Stamina
Ability to sustain exertion, continue fighting or moving under fatigue, recover during prolonged activity, and maintain useful performance over time.

Separate burst specialists from animals built for sustained exertion.

### Intelligence
Problem solving, learning, tactical flexibility, perception, memory, communication, social coordination, and ability to adapt behavior usefully during a matchup.

Do not inflate intelligence merely because an animal is social, nor reduce solitary species automatically.

### Special
Matchup-changing biological capabilities that do not fit cleanly elsewhere. Examples can include venom, electricity, exceptional camouflage, echolocation, unusual regeneration, chemical defenses, specialized sensory systems, or other rare mechanisms.

Special is not a reward for being generally impressive. A huge, powerful animal with no unusual mechanism can have a lower Special score than a much smaller specialist.

## Substat calibration

Where present in the current data model, score substats on the same absolute 0.1–100.0 framework unless a field's intended semantics clearly require otherwise.

Key examples:

- **Size:** absolute body scale, with evidence-based mass and dimensions driving placement.
- **Raw power:** absolute muscular/mechanical force, not proportional strength.
- **Weaponry:** quality, lethality, reach, redundancy, and practical delivery of natural weapons.
- **Protection:** armor/hide/shell/structural defense.
- **Toughness:** ability to remain functional after trauma and physiological stress.
- **Maneuverability:** practical turning, balance, control, and evasive movement.
- **Endurance:** sustained-output capability.
- **Tactics:** behavioral combat flexibility and coordination.
- **Senses:** battle-useful sensory acuity and coverage.
- **Ferocity:** willingness and behavioral tendency to press dangerous conflict when relevant, not a moral judgment.
- **Abilities:** strength and matchup impact of unusual biological mechanisms.

## Anchoring method

Each researcher must calibrate a proposed score against at least several already-researched animals whenever enough files exist. Prefer meaningful comparison chains rather than isolated intuition.

Example approach for absolute power:

`tiny arthropod -> small vertebrate -> medium predator -> large predator -> great ape -> megafauna -> extinct giant / dataset ceiling`

The exact scores must come from evidence and cross-roster consistency. The chain exists to prevent compression and placeholder-like clustering.

Megalodon may serve as a 100.0 or near-100 anchor only in categories where the available evidence and reconstruction justify it. It is not automatically the ceiling in Agility, Intelligence, Stamina, Defense, or Special.

## Anti-inflation rules

- Do not award high scores because an animal is famous, feared, charismatic, or an apex predator.
- Do not make most predators 80+ by default.
- Do not make most large mammals 80+ by default.
- Do not score proportional feats as though they were absolute feats.
- Do not let top speed substitute for agility.
- Do not count one adaptation three times without explaining the distinct effects.
- Do not use a record-breaking individual as the normal baseline.
- Do not treat an unverified internet bite-force number as fact.
- Do not make extinct-animal certainty look stronger than the underlying evidence.

## Final normalization audit

After all 225 research files exist, perform a full-roster audit before production migration. The audit must look for:

- inverted comparisons
- suspicious ties
- score compression
- score inflation
- inconsistent decimal precision
- duplicated ability concepts
- double-counted adaptations
- small-animal pound-for-pound inflation
- size being mistaken for Attack or Defense
- speed being mistaken for Agility
- unsupported bite-force values
- extreme values driven by weak sources
- living/extinct evidence being treated with inconsistent confidence

Only after this audit should the proposed research numbers be considered ready for migration into the live site.