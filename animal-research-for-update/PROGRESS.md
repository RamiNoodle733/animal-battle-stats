# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 79 / 225
- **Verified full-body transparent PNGs committed:** 0 / 79
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Gila Monster (*Heloderma suspectum*)
- **Next pending animal:** Giraffe
- **Latest completion:** 2026-09-19 12:00 America/Chicago
- **Latest new-animal image status:** Gila Monster - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *H. suspectum*, 4358x2586, CC BY-SA 4.0 Burgers' Zoo photograph. High resolution and reusable, but adulthood/sex and strict every-toe plus complete-tail visibility were not all certified. No PNG claimed.
- **Latest legacy image audit:** Dhole - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. The 2585x3446 CC BY-SA 3.0 exact-species candidate was rechecked. It contains a second dhole behind the foreground animal and the foreground tail is not a clean complete silhouette, so it fails the mandatory single-animal/full-body standard. No superior reusable adult-male all-paws/full-tail source was verified this run.
- **Next legacy image audit:** Dingo.
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
- **Gila Monster control:** exact *Heloderma suspectum*, canonical healthy mature male 1.1 kg / 50.0 cm total length. Smithsonian institutional top speed 2.4 km/h supports `speed_mps` 0.7 with moderate confidence. No defensible bite-pressure measurement was found, so `bite_force_psi` remains 0.0. Attack 31.0 / Defense 20.0 / Agility 43.0 / Stamina 49.0 / Intelligence 43.0 / Special 93.0. Venom raises weapon/special capability but does not inflate raw power or defense.
- **Gibbon control:** live schema says only Hylobatidae; staging resolves the profile to *Hylobates lar*. Canonical healthy mature male 6.5 kg / 52.0 cm head-body length. `speed_mps` 15.3 is medium-low-confidence canopy brachiation based on institutional 55-56 km/h values, not a terrestrial sprint trial. `bite_force_psi` remains 0.0. Attack 28.0 / Defense 22.0 / Agility 98.0 / Stamina 62.0 / Intelligence 76.0 / Special 72.0.
- **Giant Squid control:** *Architeuthis dux*, canonical healthy mature large female 150.0 kg; `length_cm` 500.0 intentionally excludes extreme feeding-tentacle extension as the main body-size field. Attack 58.0 / Defense 36.0 / Agility 54.0 / Stamina 47.0 / Intelligence 53.0 / Special 86.0.
- **Giant Centipede control:** *Scolopendra gigantea*, canonical healthy mature adult, sex unknown, 30.0 cm total length. Attack 18.0 / Defense 7.0 / Agility 84.0 / Stamina 42.0 / Intelligence 24.0 / Special 94.0.
- **Gecko control:** Tokay gecko *Gekko gecko*, canonical robust mature male ~0.25 kg / 38.0 cm total length. Attack 12.0 / Defense 11.0 / Agility 96.0 / Stamina 44.0 / Intelligence 59.0 / Special 94.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Gecko | ~0.25 kg mature male *G. gecko* | 12.0 | 11.0 | 96.0 | 44.0 | 59.0 | 94.0 |
| Giant Centipede | 30.0 cm mature adult *S. gigantea*, sex unknown | 18.0 | 7.0 | 84.0 | 42.0 | 24.0 | 94.0 |
| Giant Squid | 150.0 kg mature large female *A. dux* | 58.0 | 36.0 | 54.0 | 47.0 | 53.0 | 86.0 |
| Gibbon | 6.5 kg mature male *H. lar* | 28.0 | 22.0 | 98.0 | 62.0 | 76.0 | 72.0 |
| Gila Monster | 1.1 kg mature male *H. suspectum* | 31.0 | 20.0 | 43.0 | 49.0 | 43.0 | 93.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
79 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.