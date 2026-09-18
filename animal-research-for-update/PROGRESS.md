# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 60 / 225
- **Verified full-body transparent PNGs committed:** 0 / 60
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Dingo
- **Next pending animal:** Donkey
- **Latest completion:** 2026-09-18 16:57 America/Chicago
- **Latest new-animal image status:** Dingo - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact dingo, Commons `Dingo - Katy Platt (37223135990).jpg`, 4608x3456. Direct original-image inspection confirms one animal with complete head, torso, all four legs/paws and full tail inside frame; Commons categorizes it as male and records public-domain reuse metadata. Adulthood is not explicit, so it is not promoted to verified-source/cutout-pending status.
- **Latest legacy image audit:** Box Jellyfish - `REPLACEMENT SOURCE NEEDED`. Broad search found exact *Chironex fleckeri* real photographs, but the reusable Commons examples were only 260x260 or 800x600, with the latter museum/preserved material. The prior 900x1600 aquarium candidate is only `Chironex sp.`, not exact *C. fleckeri*. No source simultaneously met exact species, healthy mature subject, complete bell/tentacles and preferred resolution.
- **Next legacy image audit:** Bull Shark.
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
- **Dingo control:** canonical 18.0 kg mature male. Attack 40.0 / Defense 24.0 / Agility 82.0 / Stamina 81.0 / Intelligence 75.0 / Special 58.0. K'gari data directly support 18.0 kg mean adult-male mass. Comparative skull modeling supports 313 N canine bite force, retained as force rather than fabricated PSI. Legacy 60 km/h is not accepted as a factual maximum without stronger measurement.
- **Dhole control:** 18.0 kg male, Attack 42.0 / Defense 25.0 / Agility 84.0 / Stamina 86.0 / Intelligence 78.0 / Special 70.0. This keeps Dingo slightly below the more specialized cooperative pursuit hunter.
- **Coyote control:** 15.0 kg male, Attack 38.0 / Defense 25.0 / Agility 82.0 / Stamina 74.0 / Intelligence 76.0 / Special 61.0.
- **Cougar control:** 70.0 kg male, Attack 55.0 / Defense 34.0 / Agility 92.0, preserving the major absolute mass/weapon gap over medium canids.
- **Crow control:** 0.5 kg male, Intelligence 96.0, preventing generic social-predator cognition from approaching experimentally exceptional corvid cognition.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Coconut Crab | 3.0 kg mature male | 39.0 | 28.0 | 45.0 | 50.0 | 43.0 | 78.0 |
| Colossal Squid | 470.0 kg adult-scale female | 67.0 | 43.0 | 55.0 | 48.0 | 52.0 | 88.0 |
| Condor | 10.0 kg mature male | 34.0 | 22.0 | 70.0 | 82.0 | 69.0 | 74.0 |
| Cougar | 70.0 kg mature male | 55.0 | 34.0 | 92.0 | 58.0 | 68.0 | 67.0 |
| Coyote | 15.0 kg mature male | 38.0 | 25.0 | 82.0 | 74.0 | 76.0 | 61.0 |
| Crow | 0.5 kg mature male | 14.0 | 9.0 | 82.0 | 68.0 | 96.0 | 67.0 |
| Cuttlefish | 2.5 kg mature male | 27.0 | 18.0 | 91.0 | 47.0 | 92.0 | 93.0 |
| Deathstalker Scorpion | 0.002 kg adult female | 19.0 | 6.0 | 64.0 | 42.0 | 20.0 | 96.0 |
| Dhole | 18.0 kg mature male | 42.0 | 25.0 | 84.0 | 86.0 | 78.0 | 70.0 |
| Dingo | 18.0 kg mature male | 40.0 | 24.0 | 82.0 | 81.0 | 75.0 | 58.0 |

## Checkpoints
`audits/CHECKPOINT-050.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak bite sourcing and duplicate ability concepts. No forced numerical correction was warranted then. Next checkpoint: **75 completed research files**.

## Image pipeline status
60 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several older animals already have visually verified reusable full-body sources and should not be repeatedly re-researched until binary tooling changes. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNG is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.