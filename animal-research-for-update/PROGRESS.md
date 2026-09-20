# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 91 / 225
- **Verified full-body transparent PNGs committed:** 0 / 91
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Hammerhead Shark / Great Hammerhead (*Sphyrna mokarran*)
- **Next pending animal:** Harpy Eagle
- **Latest completion:** 2026-09-20 00:00 America/Chicago
- **Latest new-animal image status:** Hammerhead Shark - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact-*S. mokarran* Commons/Flickr source is reusable CC BY 2.0 and high resolution, but the current Commons version was explicitly cropped to focus on the shark and adulthood/sex are not established. It is not promoted under the strict complete-silhouette rule. No PNG completion claimed.
- **Latest legacy image audit:** Galapagos Tortoise - existing 3504x2336 CC BY-SA 3.0 exact-complex photograph was rechecked visually. Species-complex provenance, resolution and reuse rights are strong, but the pose does not expose all four limbs/feet plus tail clearly enough for strict complete-anatomy certification, and source metadata does not explicitly establish adult sex. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; no false promotion.
- **Next legacy image audit:** Gazelle.
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
- **Hammerhead Shark control:** ambiguous family-level production label resolved to Great Hammerhead *Sphyrna mokarran*. Canonical healthy mature female 230.0 kg / 400.0 cm. `speed_mps` 0.0, `lifespan_years` 39.1, `bite_force_psi` 0.0. Attack 74.0 / Defense 55.0 / Agility 84.0 / Stamina 82.0 / Intelligence 63.0 / Special 92.0. Legacy 39.6 km/h and 600 PSI values rejected as insufficiently supported. Great White remains clearly higher in absolute Attack/Defense; hammerhead leads in cephalofoil-driven Agility/Special.
- **Guanaco control:** exact *Lama guanicoe*. Canonical healthy mature territorial male 120.0 kg / 115.0 cm shoulder / 200.0 cm length. Body size is not strongly sexually dimorphic, but males have enlarged combat canines and are the primary territorial fighting sex. `speed_mps` 0.0, `lifespan_years` 28.0, `bite_force_psi` 0.0. Attack 38.0 / Defense 35.0 / Agility 63.0 / Stamina 78.0 / Intelligence 58.0 / Special 45.0. Legacy 36 km/h and 100 PSI values rejected as insufficiently supported.
- **Grizzly Bear control:** exact *Ursus arctos horribilis*, interior North American grizzly rather than Kodiak/coastal giant. Canonical healthy mature male 220.0 kg / 107.0 cm shoulder / 210.0 cm length. `speed_mps` 15.6, `lifespan_years` 25.0, `bite_force_psi` 0.0. Attack 66.0 / Defense 59.0 / Agility 59.0 / Stamina 75.0 / Intelligence 75.0 / Special 63.0. Legacy 360 kg and 1,160 PSI values rejected.
- **Green Anaconda control:** exact site-facing *Eunectes murinus*, with 2024 *E. akayima* split recorded as contested. Canonical healthy mature female 50.0 kg / 450.0 cm. Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0.
- **Great White Shark control:** exact *Carcharodon carcharias*. Canonical healthy mature female 900.0 kg / 500.0 cm TL. Attack 88.0 / Defense 68.0 / Agility 73.0 / Stamina 91.0 / Intelligence 70.0 / Special 87.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Grizzly Bear | 220.0 kg mature male *U. a. horribilis* | 66.0 | 59.0 | 59.0 | 75.0 | 75.0 | 63.0 |
| Guanaco | 120.0 kg mature territorial male *L. guanicoe* | 38.0 | 35.0 | 63.0 | 78.0 | 58.0 | 45.0 |
| Hammerhead Shark | 230.0 kg mature female *S. mokarran* | 74.0 | 55.0 | 84.0 | 82.0 | 63.0 | 92.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
91 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.