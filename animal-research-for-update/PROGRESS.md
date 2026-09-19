# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 64 / 225
- **Verified full-body transparent PNGs committed:** 0 / 64
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Elk
- **Next pending animal:** Emperor Penguin
- **Latest completion:** 2026-09-18 21:02 America/Chicago
- **Latest new-animal image status:** Elk - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *Cervus canadensis* bull, 3130x2085, CC BY 2.0, photographed bulking for the rut. Sex and reuse provenance are strong, but strict complete antler/hoof/tail framing and formal age are not all certified, so it is not promoted.
- **Latest legacy image audit:** Caracal - existing wild 4949x3299 exact-*Caracal caracal* candidate remains unresolved because adulthood and strict appendage/tail completeness are not source/visual verified. Broad Commons follow-up found several reusable alternatives, including 3303x2202 and 2923x2415 exact-species photos, but none established the mandatory adult + complete-body combination more strongly. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; skip until materially stronger evidence/tooling.
- **Next legacy image audit:** Cassowary.
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
- **Elk control:** exact *Cervus canadensis*, canonical 320.0 kg mature hard-antler bull, 152.0 cm shoulder, 240.0 cm nose-tail. Attack 62.0 / Defense 47.0 / Agility 59.0 / Stamina 71.0 / Intelligence 54.0 / Special 52.0. Typical mature Yellowstone antlers ~55-60 in long, just under 6 ft wide and ~30 lb/pair. Unsupported speed and bite PSI remain 0.0. Legacy 94.7 Stamina rejected as unsupported near-ceiling placement.
- **Electric Eel control:** exact *Electrophorus electricus*, not a generic electric-eel composite. Canonical 15.0 kg / 200.0 cm adult. Attack 49.0 / Defense 29.0 / Agility 66.0 / Stamina 58.0 / Intelligence 63.0 / Special 98.0. The 860 V record belongs to *E. voltai*; 2019 revision measured 480 V in *E. electricus*.
- **Dragonfly control:** adult male common green darner (*Anax junius*), ~0.0010 kg and 7.6 cm body length. Attack 8.0 / Defense 5.0 / Agility 98.0 / Stamina 80.0 / Intelligence 55.0 / Special 82.0. Wind-assisted telemetry is not intrinsic speed.
- **Donkey control:** 150.0 kg mature standard jack. Attack 48.0 / Defense 38.0 / Agility 58.0 / Stamina 77.0 / Intelligence 61.0 / Special 60.0.
- **Dingo control:** 18.0 kg mature male. Attack 40.0 / Defense 24.0 / Agility 82.0 / Stamina 81.0 / Intelligence 75.0 / Special 58.0.
- **Dhole control:** 18.0 kg male. Attack 42.0 / Defense 25.0 / Agility 84.0 / Stamina 86.0 / Intelligence 78.0 / Special 70.0.
- **Coyote control:** 15.0 kg male. Attack 38.0 / Defense 25.0 / Agility 82.0 / Stamina 74.0 / Intelligence 76.0 / Special 61.0.
- **Cougar control:** 70.0 kg male. Attack 55.0 / Defense 34.0 / Agility 92.0 / Stamina 58.0 / Intelligence 68.0 / Special 67.0.
- **Crow control:** 0.5 kg male, Intelligence 96.0, preventing generic social-predator or ungulate cognition from approaching experimentally exceptional corvid cognition.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Dhole | 18.0 kg mature male | 42.0 | 25.0 | 84.0 | 86.0 | 78.0 | 70.0 |
| Dingo | 18.0 kg mature male | 40.0 | 24.0 | 82.0 | 81.0 | 75.0 | 58.0 |
| Donkey | 150.0 kg mature standard jack | 48.0 | 38.0 | 58.0 | 77.0 | 61.0 | 60.0 |
| Dragonfly | ~0.001 kg mature male *Anax junius* | 8.0 | 5.0 | 98.0 | 80.0 | 55.0 | 82.0 |
| Electric Eel | 15.0 kg mature *E. electricus* | 49.0 | 29.0 | 66.0 | 58.0 | 63.0 | 98.0 |
| Elk | 320.0 kg mature hard-antler bull | 62.0 | 47.0 | 59.0 | 71.0 | 54.0 | 52.0 |

## Checkpoints
`audits/CHECKPOINT-050.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak bite sourcing and duplicate ability concepts. Next checkpoint: **75 completed research files**.

## Image pipeline status
64 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several older animals already have visually verified reusable full-body sources and should not be repeatedly re-researched until binary tooling changes. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNG is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.