# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 92 / 225
- **Verified full-body transparent PNGs committed:** 0 / 92
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Harpy Eagle (*Harpia harpyja*)
- **Next pending animal:** Hedgehog
- **Latest completion:** 2026-09-20 01:00 America/Chicago
- **Latest new-animal image status:** Harpy Eagle - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact-*H. harpyja* 2081x2271 CC BY-SA 4.0 Commons photograph is a strong visibly complete perched-bird candidate, but adulthood/sex are not explicit and strict original-binary full-body certification could not be completed. No PNG completion claimed.
- **Latest legacy image audit:** Gazelle / Dorcas gazelle (*Gazella dorcas*) - existing 6000x4000 CC BY-SA 4.0 Commons source has excellent exact-species provenance and resolution. A separate photographer source explicitly identifies an adult male but is All Rights Reserved. Existing reusable candidate remains `SOURCE FOUND - FULL-BODY NOT VERIFIED` because source metadata does not explicitly establish adulthood/sex and strict every-hoof/tail certification remains unresolved.
- **Next legacy image audit:** Gecko.
- **Latest checkpoint:** `audits/CHECKPOINT-075.md`; next checkpoint at 100 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG, or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific measurement or strong institutional value exists. Speed is not Agility.
- Stamina separates pursuit endurance, routine travel, migration, low metabolism and environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock behavior can raise Tactics or contextual Special but does not multiply one individual's Raw Power, Attack or Defense.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / the green-anaconda complex. Their scores must remain effectively normalized until the roster explicitly assigns distinct taxa or merges the duplicate concept.
- **Harpy Eagle control:** exact *Harpia harpyja*. Canonical healthy mature female 8.0 kg / 100.0 cm body length / ~200.0 cm wingspan. `speed_mps` 0.0, `lifespan_years` 30.0, `bite_force_psi` 0.0. Attack 44.0 / Defense 19.0 / Agility 91.0 / Stamina 60.0 / Intelligence 65.0 / Special 79.0. Talon length 12.5-13 cm is an upper-end weapon dimension, not a representative value for every individual. Popular grip-pressure and 80 km/h claims are not promoted as canonical measurements.
- **Hammerhead Shark control:** ambiguous family-level production label resolved to Great Hammerhead *Sphyrna mokarran*. Canonical healthy mature female 230.0 kg / 400.0 cm. Attack 74.0 / Defense 55.0 / Agility 84.0 / Stamina 82.0 / Intelligence 63.0 / Special 92.0.
- **Guanaco control:** exact *Lama guanicoe*. Canonical mature territorial male 120.0 kg. Attack 38.0 / Defense 35.0 / Agility 63.0 / Stamina 78.0 / Intelligence 58.0 / Special 45.0.
- **Grizzly Bear control:** exact *Ursus arctos horribilis*. Canonical mature interior male 220.0 kg. Attack 66.0 / Defense 59.0 / Agility 59.0 / Stamina 75.0 / Intelligence 75.0 / Special 63.0.
- **Green Anaconda control:** exact site-facing *Eunectes murinus*. Canonical mature female 50.0 kg / 450.0 cm. Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0.
- **Great White Shark control:** exact *Carcharodon carcharias*. Canonical mature female 900.0 kg / 500.0 cm TL. Attack 88.0 / Defense 68.0 / Agility 73.0 / Stamina 91.0 / Intelligence 70.0 / Special 87.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Guanaco | 120.0 kg mature territorial male *L. guanicoe* | 38.0 | 35.0 | 63.0 | 78.0 | 58.0 | 45.0 |
| Hammerhead Shark | 230.0 kg mature female *S. mokarran* | 74.0 | 55.0 | 84.0 | 82.0 | 63.0 | 92.0 |
| Harpy Eagle | 8.0 kg mature female *H. harpyja* | 44.0 | 19.0 | 91.0 | 60.0 | 65.0 | 79.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
92 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.