# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 78 / 225
- **Verified full-body transparent PNGs committed:** 0 / 78
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Gibbon, resolved to white-handed gibbon (*Hylobates lar*)
- **Next pending animal:** Gila Monster
- **Latest completion:** 2026-09-19 11:00 America/Chicago
- **Latest new-animal image status:** Gibbon - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *Hylobates lar* male, 2048x1536, CC BY-SA 2.0, wild Khao Yai NP source. Original was visually opened. One upper limb/hand is obscured by canopy/support and adulthood is not explicit, so strict whole-body compliance is not certified. No PNG claimed.
- **Latest legacy image audit:** Deathstalker Scorpion - `LICENSE UNVERIFIED - DO NOT COMMIT`. The previously attractive 4950x3300 Israeli Commons series is taxonomically unsafe under modern *Leiurus* splitting: Commons structured data identifies that photographed animal as *Leiurus hebraeus*. A 4896x3672 Egyptian captive source explicitly describes an adult male *L. quinquestriatus*, but redistribution permission was not established. Do not use the Israeli image as exact-species evidence and do not commit the Egyptian image without permission.
- **Next legacy image audit:** Dhole.
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
- **Gibbon control:** live schema says only Hylobatidae; staging resolves the profile to *Hylobates lar*. Canonical healthy mature male 6.5 kg / 52.0 cm head-body length. `speed_mps` 15.3 is medium-low-confidence canopy brachiation based on institutional 55-56 km/h values, not a terrestrial sprint trial. `bite_force_psi` remains 0.0. Attack 28.0 / Defense 22.0 / Agility 98.0 / Stamina 62.0 / Intelligence 76.0 / Special 72.0. Agility is intentionally elite without leaking into absolute power.
- **Giant Squid control:** *Architeuthis dux*, canonical healthy mature large female 150.0 kg; `length_cm` 500.0 intentionally excludes extreme feeding-tentacle extension as the main body-size field. Attack 58.0 / Defense 36.0 / Agility 54.0 / Stamina 47.0 / Intelligence 53.0 / Special 86.0.
- **Giant Centipede control:** *Scolopendra gigantea*, canonical healthy mature adult, sex unknown, 30.0 cm total length. Attack 18.0 / Defense 7.0 / Agility 84.0 / Stamina 42.0 / Intelligence 24.0 / Special 94.0.
- **Gecko control:** Tokay gecko *Gekko gecko*, canonical robust mature male ~0.25 kg / 38.0 cm total length. Attack 12.0 / Defense 11.0 / Agility 96.0 / Stamina 44.0 / Intelligence 59.0 / Special 94.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Gazelle | 16.5 kg mature male *G. dorcas* | 32.0 | 22.0 | 90.0 | 73.0 | 58.0 | 64.0 |
| Gecko | ~0.25 kg mature male *G. gecko* | 12.0 | 11.0 | 96.0 | 44.0 | 59.0 | 94.0 |
| Giant Centipede | 30.0 cm mature adult *S. gigantea*, sex unknown | 18.0 | 7.0 | 84.0 | 42.0 | 24.0 | 94.0 |
| Giant Squid | 150.0 kg mature large female *A. dux* | 58.0 | 36.0 | 54.0 | 47.0 | 53.0 | 86.0 |
| Gibbon | 6.5 kg mature male *H. lar* | 28.0 | 22.0 | 98.0 | 62.0 | 76.0 | 72.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
78 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.