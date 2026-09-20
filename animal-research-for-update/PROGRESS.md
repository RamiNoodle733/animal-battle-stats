# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 87 / 225
- **Verified full-body transparent PNGs committed:** 0 / 87
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Great White Shark (*Carcharodon carcharias*)
- **Next pending animal:** Green Anaconda
- **Latest completion:** 2026-09-19 19:57 America/Chicago
- **Latest new-animal image status:** Great White Shark - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Preferred reusable candidate is the public-domain Sharkdiver68 exact-species photograph, 3264x2448. Exact species, real-photo provenance, resolution and reuse are verified, but source metadata does not explicitly establish adulthood or sex and strict every-fin/tail silhouette certification was not completed through the connected image path. No PNG completion claimed.
- **Latest legacy image audit:** Ferret - broad re-search found high-resolution reusable Commons material, including Sean McGrath's 3872x2592 CC BY 2.0 exact domestic-ferret photograph, but visual inspection shows foliage obscuring substantial body/tail anatomy. An explicitly adult male commercial studio source was also found, but redistribution rights are not suitable for staging commitment. Ferret remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; skip pending a stronger reusable explicit-adult complete-body source.
- **Next legacy image audit:** Flamingo.
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
- **Great White Shark control:** exact *Carcharodon carcharias*. Canonical healthy mature female 900.0 kg / 500.0 cm TL. `speed_mps` 13.9 uses Smithsonian's 50 km/h institutional capability at moderate confidence. `lifespan_years` 70.0. Wroe et al. modelled a very large white shark near 1.8 tonnes-force bite, but this is not PSI, so `bite_force_psi` remains 0.0. Attack 88.0 / Defense 68.0 / Agility 73.0 / Stamina 91.0 / Intelligence 70.0 / Special 87.0.
- **Great Horned Owl control:** exact *Bubo virginianus*. Canonical healthy mature female 1.7 kg / 55.0 cm body length. Attack 35.0 / Defense 18.0 / Agility 89.0 / Stamina 57.0 / Intelligence 66.0 / Special 80.0.
- **Gray Wolf control:** exact species *Canis lupus*. Canonical healthy mature male 50.0 kg, 81.0 cm shoulder height, 181.0 cm total length. Attack 55.0 / Defense 41.0 / Agility 66.0 / Stamina 89.0 / Intelligence 78.0 / Special 64.0.
- **Gorilla control:** mountain gorilla *G. b. beringei*, healthy fully mature silverback 195.0 kg. Attack 67.0 / Defense 58.0 / Agility 55.0 / Stamina 59.0 / Intelligence 89.0 / Special 54.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Gray Wolf | 50.0 kg mature male *C. lupus* | 55.0 | 41.0 | 66.0 | 89.0 | 78.0 | 64.0 |
| Great Horned Owl | 1.7 kg mature female *B. virginianus* | 35.0 | 18.0 | 89.0 | 57.0 | 66.0 | 80.0 |
| Great White Shark | 900.0 kg mature female *C. carcharias* | 88.0 | 68.0 | 73.0 | 91.0 | 70.0 | 87.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
87 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.