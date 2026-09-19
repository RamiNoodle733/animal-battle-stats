# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 85 / 225
- **Verified full-body transparent PNGs committed:** 0 / 85
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Gray Wolf (*Canis lupus*)
- **Next pending animal:** Great Horned Owl
- **Latest completion:** 2026-09-19 18:00 America/Chicago
- **Latest new-animal image status:** Gray Wolf - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 5090x3054 CC BY-SA 4.0 male Iberian wolf source by Carlos Delgado was visually inspected and the complete single-animal silhouette is present, including all paws and the full tail. The exact file page does not explicitly establish adulthood, so it is not promoted. No PNG completion claimed.
- **Latest legacy image audit:** Emperor Penguin - search found explicit-adult reusable sources, including Ian Duffy's CC BY 2.0 Snow Hill adults, but the explicit-adult file is a multi-bird scene and only 872x1400. A stronger 1813x2692 single-subject CC BY 2.0 source was visually inspected but its metadata does not explicitly establish adulthood and background birds remain present. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; skip until a stronger single adult source is found.
- **Next legacy image audit:** Emperor Scorpion.
- **Latest checkpoint:** `audits/CHECKPOINT-075.md`; next checkpoint at 100 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG, or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force in newtons is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific measurement or strong institutional value exists. Speed is not Agility.
- Stamina separates pursuit endurance, routine travel, migration, low metabolism and environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock behavior can raise Tactics or contextual Special but does not multiply one individual's Raw Power, Attack or Defense.
- **Gray Wolf control:** exact species *Canis lupus*. Canonical healthy mature male uses Yellowstone's measured population averages: 50.0 kg, 81.0 cm shoulder height, 181.0 cm total length. NPS Yellowstone top speed 56 km/h supports `speed_mps` 15.6. Smithsonian's 7-8 year broader wild lifespan supports 7.5 years, while Yellowstone's local mean is only 4-5 years. Conflicting 400/1200 PSI claims were not promoted, so `bite_force_psi` remains 0.0. Attack 55.0 / Defense 41.0 / Agility 66.0 / Stamina 89.0 / Intelligence 78.0 / Special 64.0. Pack hunting raises Tactics but does not multiply individual power.
- **Gorilla control:** site *Gorilla beringei* resolved to mountain gorilla *G. b. beringei* because the live habitat/profile is mountain-oriented. Canonical healthy fully mature silverback 195.0 kg / 150.0 cm representative upright height. Popular 25 mph speed and 1300 PSI bite claims were not promoted, so `speed_mps` and `bite_force_psi` remain 0.0. Attack 67.0 / Defense 58.0 / Agility 55.0 / Stamina 59.0 / Intelligence 89.0 / Special 54.0. Long-term field data confirm rare lethal adult-male fighting; chest-beat acoustics honestly signal male body size. Internet multi-ton lifting/punch claims are excluded.
- **Goose control:** site genus-level `Anser` resolved to exact Greylag Goose *Anser anser*. Canonical healthy mature male 3.5 kg / 80.0 cm body length, with BTO male mean 3.49 kg. GPS migration mean 69 km/h supports `speed_mps` 19.2 as representative sustained migratory flight speed, not a physiological maximum. `bite_force_psi` remains 0.0 because no defensible pressure measurement was found. Attack 25.0 / Defense 20.0 / Agility 76.0 / Stamina 82.0 / Intelligence 67.0 / Special 59.0.
- **Goliath Birdeater control:** exact *Theraphosa blondi*. Canonical healthy mature female 0.15 kg / 25.0 cm representative leg-span envelope. Guinness maximums of 175 g and 28 cm are upper-end records. Attack 16.0 / Defense 12.0 / Agility 61.0 / Stamina 35.0 / Intelligence 31.0 / Special 90.0.
- **Golden Eagle control:** exact *Aquila chrysaetos*. Canonical healthy fully mature female 5.0 kg / 82.0 cm head-to-tail / approximately 215 cm representative wingspan. Attack 40.0 / Defense 21.0 / Agility 88.0 / Stamina 79.0 / Intelligence 66.0 / Special 70.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Goose | 3.5 kg mature male *A. anser* | 25.0 | 20.0 | 76.0 | 82.0 | 67.0 | 59.0 |
| Gorilla | 195.0 kg mature male *G. b. beringei* | 67.0 | 58.0 | 55.0 | 59.0 | 89.0 | 54.0 |
| Gray Wolf | 50.0 kg mature male *C. lupus* | 55.0 | 41.0 | 66.0 | 89.0 | 78.0 | 64.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
85 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.