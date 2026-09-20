# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 89 / 225
- **Verified full-body transparent PNGs committed:** 0 / 89
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Grizzly Bear (*Ursus arctos horribilis*)
- **Next pending animal:** Guanaco
- **Latest completion:** 2026-09-19 22:00 America/Chicago
- **Latest new-animal image status:** Grizzly Bear - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Preferred reusable candidate is a wild Yellowstone grizzly photograph, 1837x1476, CC BY 2.0 with Flickr licensing reviewed by Commons. Exact taxon/provenance are strong, but adulthood, sex and strict every-paw/tail completeness are not all certified. A separate USFWS source explicitly identifies an adult male but is only 967x698 and shows a sedated bear, so it was rejected as primary. No PNG completion claimed.
- **Latest legacy image audit:** Flying Squirrel - broad re-search was corrected to the staging report's exact *Pteromys volans* rather than North American *Glaucomys*. A new 5435x3628 CC BY-SA 4.0 exact-species wild photograph (`Летяга.jpg`) is much higher resolution than the existing 2048x1365 candidate, but source metadata does not explicitly establish adulthood/sex and strict all-limb/foot/tail visibility is not certified. The report therefore remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; no fake promotion was made.
- **Next legacy image audit:** Gaboon Viper.
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
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / the green-anaconda complex. Their scores must remain effectively normalized until the roster explicitly assigns distinct taxa or merges the duplicate concept.
- **Grizzly Bear control:** exact *Ursus arctos horribilis*, interior North American grizzly rather than Kodiak/coastal giant. Canonical healthy mature male 220.0 kg / 107.0 cm shoulder / 210.0 cm length. `speed_mps` 15.6, `lifespan_years` 25.0, `bite_force_psi` 0.0. Attack 66.0 / Defense 59.0 / Agility 59.0 / Stamina 75.0 / Intelligence 75.0 / Special 63.0. Legacy 360 kg and 1,160 PSI values rejected.
- **Green Anaconda control:** exact site-facing *Eunectes murinus*, with 2024 *E. akayima* split recorded as contested. Canonical healthy mature female 50.0 kg / 450.0 cm. Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0.
- **Great White Shark control:** exact *Carcharodon carcharias*. Canonical healthy mature female 900.0 kg / 500.0 cm TL. Attack 88.0 / Defense 68.0 / Agility 73.0 / Stamina 91.0 / Intelligence 70.0 / Special 87.0.
- **Gray Wolf control:** exact *Canis lupus*. Canonical healthy mature male 50.0 kg. Attack 55.0 / Defense 41.0 / Agility 66.0 / Stamina 89.0 / Intelligence 78.0 / Special 64.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Great White Shark | 900.0 kg mature female *C. carcharias* | 88.0 | 68.0 | 73.0 | 91.0 | 70.0 | 87.0 |
| Green Anaconda | 50.0 kg mature female *E. murinus* | 70.0 | 51.0 | 46.0 | 49.0 | 43.0 | 75.0 |
| Grizzly Bear | 220.0 kg mature male *U. a. horribilis* | 66.0 | 59.0 | 59.0 | 75.0 | 75.0 | 63.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
89 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.