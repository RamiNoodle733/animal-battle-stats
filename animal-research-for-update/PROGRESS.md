# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 61 / 225
- **Verified full-body transparent PNGs committed:** 0 / 61
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Donkey
- **Next pending animal:** Dragonfly
- **Latest completion:** 2026-09-18 18:01 America/Chicago
- **Latest new-animal image status:** Donkey - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *Equus asinus* Commons source `Equus asinus 001.JPG`, 4928x3264, CC0. High resolution and reusable, but source metadata does not establish adulthood or sex and strict all-hooves/full-tail framing was not certified. An explicitly male Commons alternative is only 1289x1130, below the preferred 1600-pixel threshold.
- **Latest legacy image audit:** Bull Shark - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Broad search found exact live *Carcharhinus leucas* sources, including a 4000x3000 CC BY-SA 2.0 Commons photograph and multiple ADW photographs explicitly labeled adult/sexually mature. No source was promoted because this run did not simultaneously certify explicit adulthood plus strict complete snout-to-caudal and all-fin visibility on a high-resolution reusable original.
- **Next legacy image audit:** Camel Spider.
- **Latest checkpoint:** `audits/CHECKPOINT-050.md`; next checkpoint at 75 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG, or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force in newtons is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific measurement or strong institutional value exists. Speed is not Agility.
- Stamina separates pursuit endurance, routine travel, migration, soaring, low metabolism and dehydration tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack behavior can raise Tactics/Special contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Donkey control:** canonical 150.0 kg mature standard jack. Attack 48.0 / Defense 38.0 / Agility 58.0 / Stamina 77.0 / Intelligence 61.0 / Special 60.0. Strong population/breed variation is explicit. Four-day dehydration/rapid-rehydration physiology supports high stamina/environmental resilience, but is not treated as exercise endurance or armor. Legacy 36 km/h and 100 PSI remain rejected without defensible measurement.
- **Dingo control:** canonical 18.0 kg mature male. Attack 40.0 / Defense 24.0 / Agility 82.0 / Stamina 81.0 / Intelligence 75.0 / Special 58.0.
- **Dhole control:** 18.0 kg male, Attack 42.0 / Defense 25.0 / Agility 84.0 / Stamina 86.0 / Intelligence 78.0 / Special 70.0.
- **Coyote control:** 15.0 kg male, Attack 38.0 / Defense 25.0 / Agility 82.0 / Stamina 74.0 / Intelligence 76.0 / Special 61.0.
- **Cougar control:** 70.0 kg male, Attack 55.0 / Defense 34.0 / Agility 92.0, preserving specialized predator weapon/delivery advantage despite Donkey's greater mass.
- **Crow control:** 0.5 kg male, Intelligence 96.0, preventing generic social-predator or ungulate cognition from approaching experimentally exceptional corvid cognition.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Colossal Squid | 470.0 kg adult-scale female | 67.0 | 43.0 | 55.0 | 48.0 | 52.0 | 88.0 |
| Condor | 10.0 kg mature male | 34.0 | 22.0 | 70.0 | 82.0 | 69.0 | 74.0 |
| Cougar | 70.0 kg mature male | 55.0 | 34.0 | 92.0 | 58.0 | 68.0 | 67.0 |
| Coyote | 15.0 kg mature male | 38.0 | 25.0 | 82.0 | 74.0 | 76.0 | 61.0 |
| Crow | 0.5 kg mature male | 14.0 | 9.0 | 82.0 | 68.0 | 96.0 | 67.0 |
| Cuttlefish | 2.5 kg mature male | 27.0 | 18.0 | 91.0 | 47.0 | 92.0 | 93.0 |
| Deathstalker Scorpion | 0.002 kg adult female | 19.0 | 6.0 | 64.0 | 42.0 | 20.0 | 96.0 |
| Dhole | 18.0 kg mature male | 42.0 | 25.0 | 84.0 | 86.0 | 78.0 | 70.0 |
| Dingo | 18.0 kg mature male | 40.0 | 24.0 | 82.0 | 81.0 | 75.0 | 58.0 |
| Donkey | 150.0 kg mature standard jack | 48.0 | 38.0 | 58.0 | 77.0 | 61.0 | 60.0 |

## Checkpoints
`audits/CHECKPOINT-050.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak bite sourcing and duplicate ability concepts. No forced numerical correction was warranted then. Next checkpoint: **75 completed research files**.

## Image pipeline status
61 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several older animals already have visually verified reusable full-body sources and should not be repeatedly re-researched until binary tooling changes. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNG is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.