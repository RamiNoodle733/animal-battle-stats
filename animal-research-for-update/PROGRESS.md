# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 101 / 225
- **Verified full-body transparent PNGs committed:** 0 / 101
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Huntsman Spider, resolved to Giant Huntsman Spider (*Heteropoda maxima*)
- **Next pending animal:** Hyena
- **Latest completion:** 2026-09-20 10:00 America/Chicago
- **Latest new-animal image status:** Huntsman Spider - `REPLACEMENT SOURCE NEEDED`. Exact adult female *H. maxima* CC BY-SA 3.0 Commons source is visibly complete but only 640x480. Other exact-species reusable candidates recovered were only 738x900 or 900x817 and did not improve the strict adult-plus-resolution combination. No PNG completion claimed.
- **Latest legacy image audit:** Goose - strong reusable exact-*Branta canadensis* standing sources found at 2091x1394 (CC BY-SA 3.0) and 2048x1536 (CC0), plus much larger 4775x2868 and 4934x3289 Commons sources. The inspected metadata does not explicitly establish adult age and sex for the standing candidate, so strict mandatory adulthood remains unresolved. Status `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Gorilla.
- **Latest checkpoint:** `audits/CHECKPOINT-100.md`; next checkpoint at 125 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific measurement or strong institutional value exists. Speed is not Agility.
- Stamina separates pursuit endurance, routine travel, migration, low metabolism and environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock/colony behavior can raise Tactics or contextual Special but does not multiply one individual's Raw Power, Attack or Defense.
- **Huntsman Spider control:** generic roster label resolved to *Heteropoda maxima*. Canonical healthy mature female, representative 3.8 cm body length. Measured female range 2.85-4.85 cm versus males 2.4-3.0 cm; documented maximum leg span 30 cm is retained separately as an upper-end weapon/reach measurement. `weight_kg` 0.0, `height_cm` 0.0, `speed_mps` 0.0, `lifespan_years` 0.0, `bite_force_psi` 0.0 because species-specific values were not defensibly recovered. Attack 10.0 / Defense 7.0 / Agility 86.0 / Stamina 35.0 / Intelligence 34.0 / Special 61.0. Extreme span and proportional spider performance do not leak into absolute power.
- **Hummingbird control:** *Archilochus colubris*, mature female 0.0038 kg / 8.5 cm. Attack 5.0 / Defense 8.0 / Agility 98.0 / Stamina 82.0 / Intelligence 61.0 / Special 79.0.
- **Howler Monkey control:** *Alouatta caraya*, mature male 7.0 kg. Attack 27.0 / Defense 20.0 / Agility 76.0 / Stamina 43.0 / Intelligence 70.0 / Special 73.0.
- **Hornet control:** *Vespa crabro*, mature queen 0.0008 kg. Attack 10.0 / Defense 5.0 / Agility 79.0 / Stamina 39.0 / Intelligence 43.0 / Special 76.0.
- **Honey Badger control:** *Mellivora capensis*, mature male 14.0 kg. Attack 42.0 / Defense 45.0 / Agility 61.0 / Stamina 70.0 / Intelligence 64.0 / Special 80.0.
- **Hippopotamus control:** *Hippopotamus amphibius*, mature territorial male 1,800.0 kg. Attack 90.0 / Defense 84.0 / Agility 48.0 / Stamina 70.0 / Intelligence 56.0 / Special 69.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Howler Monkey | 7.0 kg mature male *A. caraya* | 27.0 | 20.0 | 76.0 | 43.0 | 70.0 | 73.0 |
| Hummingbird | 0.0038 kg mature female *A. colubris* | 5.0 | 8.0 | 98.0 | 82.0 | 61.0 | 79.0 |
| Huntsman Spider | mature female *H. maxima*, 3.8 cm body length | 10.0 | 7.0 | 86.0 | 35.0 | 34.0 | 61.0 |

## Checkpoints
`audits/CHECKPOINT-100.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **125 completed research files**.

## Image pipeline status
101 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
