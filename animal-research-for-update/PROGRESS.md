# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 90 / 225
- **Verified full-body transparent PNGs committed:** 0 / 90
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Guanaco (*Lama guanicoe*)
- **Next pending animal:** Hammerhead Shark
- **Latest completion:** 2026-09-19 23:00 America/Chicago
- **Latest new-animal image status:** Guanaco - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Preferred reusable candidate is Charles J. Sharp's exact-species wild Torres del Paine photograph, 5334x4000, CC BY-SA 4.0, Commons Featured Picture and Quality Image. Exact taxon/provenance/resolution are excellent, but metadata does not explicitly establish adulthood or sex and strict every-hoof/full-tail completeness was not certified from the original. No PNG completion claimed.
- **Latest legacy image audit:** Gaboon Viper - broad re-search found a newer exact-*Bitis gabonica* 2865x1714 CC BY-SA 4.0 photograph by Clément Bardot and several larger reusable alternatives. The new candidate improves resolution and exact-species provenance over the prior 2048x1356 candidate, but source metadata does not establish adulthood/sex and strict uninterrupted head-to-tail visibility is not certified. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; no false promotion.
- **Next legacy image audit:** Galapagos Tortoise.
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
- **Guanaco control:** exact *Lama guanicoe*. Canonical healthy mature territorial male 120.0 kg / 115.0 cm shoulder / 200.0 cm length. Body size is not strongly sexually dimorphic, but males have enlarged combat canines and are the primary territorial fighting sex. `speed_mps` 0.0, `lifespan_years` 28.0, `bite_force_psi` 0.0. Attack 38.0 / Defense 35.0 / Agility 63.0 / Stamina 78.0 / Intelligence 58.0 / Special 45.0. Legacy 36 km/h and 100 PSI values rejected as insufficiently supported.
- **Grizzly Bear control:** exact *Ursus arctos horribilis*, interior North American grizzly rather than Kodiak/coastal giant. Canonical healthy mature male 220.0 kg / 107.0 cm shoulder / 210.0 cm length. `speed_mps` 15.6, `lifespan_years` 25.0, `bite_force_psi` 0.0. Attack 66.0 / Defense 59.0 / Agility 59.0 / Stamina 75.0 / Intelligence 75.0 / Special 63.0. Legacy 360 kg and 1,160 PSI values rejected.
- **Green Anaconda control:** exact site-facing *Eunectes murinus*, with 2024 *E. akayima* split recorded as contested. Canonical healthy mature female 50.0 kg / 450.0 cm. Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0.
- **Great White Shark control:** exact *Carcharodon carcharias*. Canonical healthy mature female 900.0 kg / 500.0 cm TL. Attack 88.0 / Defense 68.0 / Agility 73.0 / Stamina 91.0 / Intelligence 70.0 / Special 87.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Green Anaconda | 50.0 kg mature female *E. murinus* | 70.0 | 51.0 | 46.0 | 49.0 | 43.0 | 75.0 |
| Grizzly Bear | 220.0 kg mature male *U. a. horribilis* | 66.0 | 59.0 | 59.0 | 75.0 | 75.0 | 63.0 |
| Guanaco | 120.0 kg mature territorial male *L. guanicoe* | 38.0 | 35.0 | 63.0 | 78.0 | 58.0 | 45.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
90 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.