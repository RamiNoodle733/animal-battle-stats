# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 77 / 225
- **Verified full-body transparent PNGs committed:** 0 / 77
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Giant Squid (*Architeuthis dux*)
- **Next pending animal:** Gibbon
- **Latest completion:** 2026-09-19 10:00 America/Chicago
- **Latest new-animal image status:** Giant Squid - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Strong exact-species 2912x4368 Smithsonian public-domain female specimen photograph found, but source metadata used in this run does not explicitly establish adulthood and strict visibility of every arm/tentacle tip was not certified. No PNG claimed.
- **Latest legacy image audit:** Cuttlefish - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Search improved the reusable pool with an exact *Sepia officinalis* 8256x5504 Ifremer photograph, CC BY 4.0, plus a source explicitly identifying an adult common cuttlefish. The explicit-adult image is only 1280x960, while the 8256x5504 Ifremer source does not explicitly establish adulthood and strict visibility of all arms/tentacle tips was not certified. Do not promote either as complete.
- **Next legacy image audit:** Deathstalker Scorpion.
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
- **Giant Squid control:** *Architeuthis dux*, canonical healthy mature large female 150.0 kg; `length_cm` 500.0 intentionally excludes extreme feeding-tentacle extension as the main body-size field. Attack 58.0 / Defense 36.0 / Agility 54.0 / Stamina 47.0 / Intelligence 53.0 / Special 86.0. No defensible adult top speed or bite PSI was found. Lifespan 3.0 years is explicitly low-confidence. Giant Squid stays below the 470 kg Colossal Squid in absolute power, Attack, Defense and Toughness, while retaining exceptional reach and sensory specialization.
- **Giant Centipede control:** *Scolopendra gigantea*, canonical healthy mature adult, sex unknown, 30.0 cm total length. Adult mass remains 0.0 pending defensible data. Attack 18.0 / Defense 7.0 / Agility 84.0 / Stamina 42.0 / Intelligence 24.0 / Special 94.0.
- **Gecko control:** Tokay gecko *Gekko gecko*, canonical robust mature male ~0.25 kg / 38.0 cm total length. Attack 12.0 / Defense 11.0 / Agility 96.0 / Stamina 44.0 / Intelligence 59.0 / Special 94.0.
- **Gazelle control:** Dorcas gazelle *Gazella dorcas*, canonical 16.5 kg mature male. Attack 32.0 / Defense 22.0 / Agility 90.0 / Stamina 73.0 / Intelligence 58.0 / Special 64.0.
- **Galapagos Tortoise control:** *Chelonoidis niger* complex, canonical morphometric proxy mature male *C. porteri*, 102.1 kg. Attack 31.0 / Defense 76.0 / Agility 17.0 / Stamina 80.0 / Intelligence 48.0 / Special 75.0.
- **Gaboon Viper control:** *Bitis gabonica*, canonical robust mature female 7.0 kg / 130.0 cm. Attack 53.0 / Defense 24.0 / Agility 48.0 / Stamina 35.0 / Intelligence 38.0 / Special 97.0.
- **Flying Squirrel control:** *Pteromys volans*, canonical 0.16 kg mature non-pregnant female. Attack 9.0 / Defense 8.0 / Agility 96.0 / Stamina 61.0 / Intelligence 66.0 / Special 87.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Galapagos Tortoise | 102.1 kg mature male *C. porteri* proxy | 31.0 | 76.0 | 17.0 | 80.0 | 48.0 | 75.0 |
| Gazelle | 16.5 kg mature male *G. dorcas* | 32.0 | 22.0 | 90.0 | 73.0 | 58.0 | 64.0 |
| Gecko | ~0.25 kg mature male *G. gecko* | 12.0 | 11.0 | 96.0 | 44.0 | 59.0 | 94.0 |
| Giant Centipede | 30.0 cm mature adult *S. gigantea*, sex unknown | 18.0 | 7.0 | 84.0 | 42.0 | 24.0 | 94.0 |
| Giant Squid | 150.0 kg mature large female *A. dux* | 58.0 | 36.0 | 54.0 | 47.0 | 53.0 | 86.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
77 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.