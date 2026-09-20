# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 88 / 225
- **Verified full-body transparent PNGs committed:** 0 / 88
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Green Anaconda (*Eunectes murinus*)
- **Next pending animal:** Grizzly Bear
- **Latest completion:** 2026-09-19 21:00 America/Chicago
- **Latest new-animal image status:** Green Anaconda - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Preferred reusable candidate is Kai Squires' exact-*E. murinus* 2048x1538 wild Ecuador photograph, CC BY 4.0 with iNaturalist licensing reviewed by Commons. Resolution and exact species are verified, but adulthood, sex and strict continuous head-to-tail silhouette are unresolved. No PNG completion claimed.
- **Latest legacy image audit:** Flamingo - re-search found a newly uploaded Commons file described as an adult in flight at 4148x2765 and CC BY-SA 4.0, but Commons currently redirects the nominal `Greater Flamingo in SA.jpg` title to `Lesser Flamingo in South Africa.jpg` and categorizes the depicted bird as *Phoeniconaias minor*. It is therefore rejected as wrong species. The existing 6000x4000 exact-*Phoenicopterus roseus* candidate remains `SOURCE FOUND - FULL-BODY NOT VERIFIED` because adulthood and strict feet/toes completeness are not explicitly verified.
- **Next legacy image audit:** Flying Squirrel.
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
- **Green Anaconda control:** exact site-facing *Eunectes murinus*, with 2024 *E. akayima* split recorded as contested. Canonical healthy mature female 50.0 kg / 450.0 cm. `speed_mps` 0.0, `bite_force_psi` 0.0, lifespan 10.0 years. Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0.
- **Great White Shark control:** exact *Carcharodon carcharias*. Canonical healthy mature female 900.0 kg / 500.0 cm TL. `speed_mps` 13.9, `lifespan_years` 70.0, `bite_force_psi` 0.0. Attack 88.0 / Defense 68.0 / Agility 73.0 / Stamina 91.0 / Intelligence 70.0 / Special 87.0.
- **Great Horned Owl control:** exact *Bubo virginianus*. Canonical healthy mature female 1.7 kg / 55.0 cm body length. Attack 35.0 / Defense 18.0 / Agility 89.0 / Stamina 57.0 / Intelligence 66.0 / Special 80.0.
- **Gray Wolf control:** exact *Canis lupus*. Canonical healthy mature male 50.0 kg, 81.0 cm shoulder height, 181.0 cm total length. Attack 55.0 / Defense 41.0 / Agility 66.0 / Stamina 89.0 / Intelligence 78.0 / Special 64.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Great Horned Owl | 1.7 kg mature female *B. virginianus* | 35.0 | 18.0 | 89.0 | 57.0 | 66.0 | 80.0 |
| Great White Shark | 900.0 kg mature female *C. carcharias* | 88.0 | 68.0 | 73.0 | 91.0 | 70.0 | 87.0 |
| Green Anaconda | 50.0 kg mature female *E. murinus* | 70.0 | 51.0 | 46.0 | 49.0 | 43.0 | 75.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
88 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.