# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 100 / 225
- **Verified full-body transparent PNGs committed:** 0 / 100
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Hummingbird, resolved to Ruby-throated Hummingbird (*Archilochus colubris*)
- **Next pending animal:** Huntsman Spider
- **Latest completion:** 2026-09-20 09:02 America/Chicago
- **Latest new-animal image status:** Hummingbird - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact adult male *A. colubris*, 2148x1637 CC BY-SA 2.0 Commons/Flickr source with explicit adult/sex metadata. Strict complete wings/feet and unobscured silhouette are not certified, and the canonical research specimen is the larger female. No PNG completion claimed.
- **Latest legacy image audit:** Goliath Birdeater - explicit living adult female *Theraphosa blondi* reusable source found but only 720x525; 4295x3071 wild exact-species source lacks explicit adulthood/sex, while high-resolution explicit-female museum/molt images fail healthy-living-adult requirements. Status `REPLACEMENT SOURCE NEEDED`.
- **Next legacy image audit:** Goose.
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
- **Hummingbird control:** generic Trochilidae roster label resolved to *Archilochus colubris*. Canonical healthy mature female 0.0038 kg / 8.5 cm. `height_cm` 0.0, `speed_mps` 0.0, `lifespan_years` 5.0 (moderate-low-confidence representative field; record 9 y 2 mo), `bite_force_psi` 0.0. Attack 5.0 / Defense 8.0 / Agility 98.0 / Stamina 82.0 / Intelligence 61.0 / Special 79.0. Elite Agility is based on hovering/reverse/lateral control and braking, not top speed.
- **Howler Monkey control:** *Alouatta caraya*, mature male 7.0 kg. Attack 27.0 / Defense 20.0 / Agility 76.0 / Stamina 43.0 / Intelligence 70.0 / Special 73.0.
- **Hornet control:** *Vespa crabro*, mature queen 0.0008 kg. Attack 10.0 / Defense 5.0 / Agility 79.0 / Stamina 39.0 / Intelligence 43.0 / Special 76.0.
- **Honey Badger control:** *Mellivora capensis*, mature male 14.0 kg. Attack 42.0 / Defense 45.0 / Agility 61.0 / Stamina 70.0 / Intelligence 64.0 / Special 80.0.
- **Hippopotamus control:** *Hippopotamus amphibius*, mature territorial male 1,800.0 kg. Attack 90.0 / Defense 84.0 / Agility 48.0 / Stamina 70.0 / Intelligence 56.0 / Special 69.0.
- **Hercules Beetle control:** *Dynastes hercules*, mature major male 0.034 kg. Attack 7.0 / Defense 12.0 / Agility 44.0 / Stamina 32.0 / Intelligence 20.0 / Special 60.0. Proportional strength does not leak into absolute power.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Hornet | 0.0008 kg mature queen *V. crabro* | 10.0 | 5.0 | 79.0 | 39.0 | 43.0 | 76.0 |
| Howler Monkey | 7.0 kg mature male *A. caraya* | 27.0 | 20.0 | 76.0 | 43.0 | 70.0 | 73.0 |
| Hummingbird | 0.0038 kg mature female *A. colubris* | 5.0 | 8.0 | 98.0 | 82.0 | 61.0 | 79.0 |

## Checkpoints
`audits/CHECKPOINT-100.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **125 completed research files**.

## Image pipeline status
100 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
