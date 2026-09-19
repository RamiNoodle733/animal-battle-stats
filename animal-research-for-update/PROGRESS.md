# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 63 / 225
- **Verified full-body transparent PNGs committed:** 0 / 63
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Electric Eel
- **Next pending animal:** Elk
- **Latest completion:** 2026-09-18 20:00 America/Chicago
- **Latest new-animal image status:** Electric Eel - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *Electrophorus electricus* Commons source, explicitly mature, 6016x4016, CC BY 4.0. Adult identity, taxon, resolution and reuse are strong, but strict complete head-to-tail silhouette suitability was not certified from the available render path, so it is not promoted.
- **Latest legacy image audit:** Capuchin Monkey - existing 3935x3935 CC BY-SA 4.0 exact *Sapajus apella* candidate remains the strongest reusable source. Whole body was already visually verified, but the source does not explicitly establish adulthood or sex. Broad follow-up search found wild and zoo alternatives, including a 6000x4000 exact-species free-use image and experimental literature with an explicitly mature adult male, but no candidate simultaneously improved adult-male proof, complete anatomy, reuse provenance and image quality. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; do not repeatedly revisit without a materially stronger source or binary tooling.
- **Next legacy image audit:** Caracal. Capybara is already source-verified and skipped until binary tooling changes.
- **Latest checkpoint:** `audits/CHECKPOINT-050.md`; next checkpoint at 75 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG, or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force in newtons is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific measurement or strong institutional value exists. Speed is not Agility.
- Stamina separates pursuit endurance, routine travel, migration, soaring, low metabolism and environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack behavior can raise Tactics/Special contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Electric Eel control:** exact *Electrophorus electricus*, not a generic electric-eel composite. Canonical 15.0 kg / 200.0 cm adult. Attack 49.0 / Defense 29.0 / Agility 66.0 / Stamina 58.0 / Intelligence 63.0 / Special 98.0. Modern taxonomy is decisive: the 860 V record belongs to *E. voltai*; the 2019 revision measured 480 V in *E. electricus*. Social group predation reported for *E. voltai* is not transferred to this profile. Unsupported speed and bite PSI remain 0.0.
- **Dragonfly control:** standardized to adult male common green darner (*Anax junius*), provisional 0.0010 kg and 7.6 cm body length. Attack 8.0 / Defense 5.0 / Agility 98.0 / Stamina 80.0 / Intelligence 55.0 / Special 82.0. Wind-assisted telemetry is not used as intrinsic speed.
- **Donkey control:** canonical 150.0 kg mature standard jack. Attack 48.0 / Defense 38.0 / Agility 58.0 / Stamina 77.0 / Intelligence 61.0 / Special 60.0.
- **Dingo control:** canonical 18.0 kg mature male. Attack 40.0 / Defense 24.0 / Agility 82.0 / Stamina 81.0 / Intelligence 75.0 / Special 58.0.
- **Dhole control:** 18.0 kg male, Attack 42.0 / Defense 25.0 / Agility 84.0 / Stamina 86.0 / Intelligence 78.0 / Special 70.0.
- **Coyote control:** 15.0 kg male, Attack 38.0 / Defense 25.0 / Agility 82.0 / Stamina 74.0 / Intelligence 76.0 / Special 61.0.
- **Cougar control:** 70.0 kg male, Attack 55.0 / Defense 34.0 / Agility 92.0, preserving specialized predator weapon/delivery advantage despite Donkey's greater mass.
- **Crow control:** 0.5 kg male, Intelligence 96.0, preventing generic social-predator or ungulate cognition from approaching experimentally exceptional corvid cognition.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Cougar | 70.0 kg mature male | 55.0 | 34.0 | 92.0 | 58.0 | 68.0 | 67.0 |
| Coyote | 15.0 kg mature male | 38.0 | 25.0 | 82.0 | 74.0 | 76.0 | 61.0 |
| Crow | 0.5 kg mature male | 14.0 | 9.0 | 82.0 | 68.0 | 96.0 | 67.0 |
| Cuttlefish | 2.5 kg mature male | 27.0 | 18.0 | 91.0 | 47.0 | 92.0 | 93.0 |
| Deathstalker Scorpion | 0.002 kg adult female | 19.0 | 6.0 | 64.0 | 42.0 | 20.0 | 96.0 |
| Dhole | 18.0 kg mature male | 42.0 | 25.0 | 84.0 | 86.0 | 78.0 | 70.0 |
| Dingo | 18.0 kg mature male | 40.0 | 24.0 | 82.0 | 81.0 | 75.0 | 58.0 |
| Donkey | 150.0 kg mature standard jack | 48.0 | 38.0 | 58.0 | 77.0 | 61.0 | 60.0 |
| Dragonfly | ~0.001 kg mature male *Anax junius* | 8.0 | 5.0 | 98.0 | 80.0 | 55.0 | 82.0 |
| Electric Eel | 15.0 kg mature *E. electricus* | 49.0 | 29.0 | 66.0 | 58.0 | 63.0 | 98.0 |

## Checkpoints
`audits/CHECKPOINT-050.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak bite sourcing and duplicate ability concepts. No forced numerical correction was warranted then. Next checkpoint: **75 completed research files**.

## Image pipeline status
63 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several older animals already have visually verified reusable full-body sources and should not be repeatedly re-researched until binary tooling changes. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNG is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.