# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 62 / 225
- **Verified full-body transparent PNGs committed:** 0 / 62
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Dragonfly
- **Next pending animal:** Electric Eel
- **Latest completion:** 2026-09-18 19:00 America/Chicago
- **Latest new-animal image status:** Dragonfly - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact male *Anax junius* Commons source from Trinity River National Wildlife Refuge, 1800x900, CC BY-SA 4.0. Species and sex are explicit and resolution clears the preferred threshold, but adulthood plus strict all-leg/all-wing-tip framing were not simultaneously certified, so it is not promoted.
- **Latest legacy image audit:** Camel Spider - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *Galeodes arabs* Commons/iNaturalist source `Galeodes arabs 320251111.jpg`, 1536x2048, CC BY 4.0. This improves provenance and reaches the preferred longest-side threshold, but metadata does not establish adulthood or sex and strict visibility of every appendage tip was not certified. No PNG binary was created.
- **Next legacy image audit:** Capuchin Monkey. Cape Buffalo and Capybara are already source-verified and are skipped until binary tooling changes.
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
- **Dragonfly control:** standardized to adult male common green darner (*Anax junius*), provisional 0.0010 kg and 7.6 cm body length. Attack 8.0 / Defense 5.0 / Agility 98.0 / Stamina 80.0 / Intelligence 55.0 / Special 82.0. Wind-assisted 21.5 m/s telemetry is not used as intrinsic `speed_mps`; unsupported bite PSI remains 0.0. Near-ceiling Agility reflects maneuverability, not proportional physical power.
- **Donkey control:** canonical 150.0 kg mature standard jack. Attack 48.0 / Defense 38.0 / Agility 58.0 / Stamina 77.0 / Intelligence 61.0 / Special 60.0. Strong population/breed variation is explicit. Four-day dehydration/rapid-rehydration physiology supports high stamina/environmental resilience, but is not treated as exercise endurance or armor. Legacy 36 km/h and 100 PSI remain rejected without defensible measurement.
- **Dingo control:** canonical 18.0 kg mature male. Attack 40.0 / Defense 24.0 / Agility 82.0 / Stamina 81.0 / Intelligence 75.0 / Special 58.0.
- **Dhole control:** 18.0 kg male, Attack 42.0 / Defense 25.0 / Agility 84.0 / Stamina 86.0 / Intelligence 78.0 / Special 70.0.
- **Coyote control:** 15.0 kg male, Attack 38.0 / Defense 25.0 / Agility 82.0 / Stamina 74.0 / Intelligence 76.0 / Special 61.0.
- **Cougar control:** 70.0 kg male, Attack 55.0 / Defense 34.0 / Agility 92.0, preserving specialized predator weapon/delivery advantage despite Donkey's greater mass.
- **Crow control:** 0.5 kg male, Intelligence 96.0, preventing generic social-predator or ungulate cognition from approaching experimentally exceptional corvid cognition.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Condor | 10.0 kg mature male | 34.0 | 22.0 | 70.0 | 82.0 | 69.0 | 74.0 |
| Cougar | 70.0 kg mature male | 55.0 | 34.0 | 92.0 | 58.0 | 68.0 | 67.0 |
| Coyote | 15.0 kg mature male | 38.0 | 25.0 | 82.0 | 74.0 | 76.0 | 61.0 |
| Crow | 0.5 kg mature male | 14.0 | 9.0 | 82.0 | 68.0 | 96.0 | 67.0 |
| Cuttlefish | 2.5 kg mature male | 27.0 | 18.0 | 91.0 | 47.0 | 92.0 | 93.0 |
| Deathstalker Scorpion | 0.002 kg adult female | 19.0 | 6.0 | 64.0 | 42.0 | 20.0 | 96.0 |
| Dhole | 18.0 kg mature male | 42.0 | 25.0 | 84.0 | 86.0 | 78.0 | 70.0 |
| Dingo | 18.0 kg mature male | 40.0 | 24.0 | 82.0 | 81.0 | 75.0 | 58.0 |
| Donkey | 150.0 kg mature standard jack | 48.0 | 38.0 | 58.0 | 77.0 | 61.0 | 60.0 |
| Dragonfly | ~0.001 kg mature male *Anax junius* | 8.0 | 5.0 | 98.0 | 80.0 | 55.0 | 82.0 |

## Checkpoints
`audits/CHECKPOINT-050.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak bite sourcing and duplicate ability concepts. No forced numerical correction was warranted then. Next checkpoint: **75 completed research files**.

## Image pipeline status
62 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several older animals already have visually verified reusable full-body sources and should not be repeatedly re-researched until binary tooling changes. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNG is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.