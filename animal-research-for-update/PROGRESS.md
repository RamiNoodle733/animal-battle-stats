# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 81 / 225
- **Verified full-body transparent PNGs committed:** 0 / 81
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Golden Eagle (*Aquila chrysaetos*)
- **Next pending animal:** Goliath Birdeater
- **Latest completion:** 2026-09-19 14:02 America/Chicago
- **Latest new-animal image status:** Golden Eagle - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *Aquila chrysaetos*, 3452x3224, CC BY 2.0 with reviewed Flickr provenance. Complete flying silhouette was visually checked, but adulthood and sex are not source-established. No PNG claimed.
- **Latest legacy image audit:** Donkey - `LICENSE UNVERIFIED - DO NOT COMMIT`. Huff's Jackson is a source-verified adult breeding mammoth jack, born 2009 and 14.2 hands, with a visually complete single-animal photograph. The farm page is All Rights Reserved, so the image cannot be redistributed.
- **Next legacy image audit:** Dragonfly.
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
- **Golden Eagle control:** exact *Aquila chrysaetos*. Canonical healthy fully mature female 5.0 kg / 82.0 cm head-to-tail / approximately 215 cm representative wingspan. Females are materially larger than males. NPS reports swoops up to 200 mph, but no instrumented maximum-speed trial was recovered, so `speed_mps` remains 0.0 rather than converting a weakly contextualized maximum into false precision. No defensible bite-pressure value exists, so `bite_force_psi` remains 0.0. Attack 40.0 / Defense 21.0 / Agility 88.0 / Stamina 79.0 / Intelligence 66.0 / Special 70.0. Large-prey anecdotes do not inflate absolute Raw Power.
- **Giraffe control:** site label *Giraffa camelopardalis* is a legacy one-species concept; modern evidence supports four giraffe species, so older pan-giraffe measurements are labeled accordingly. Canonical healthy mature male 1200.0 kg / 520.0 cm standing height. `speed_mps` 16.7 is a moderate-confidence specialist observational burst reference; UAV work directly recorded 2.8-11.0 m/s. No defensible bite-pressure measurement was found, so `bite_force_psi` remains 0.0. Attack 73.0 / Defense 66.0 / Agility 48.0 / Stamina 72.0 / Intelligence 61.0 / Special 69.0.
- **Gila Monster control:** exact *Heloderma suspectum*, canonical healthy mature male 1.1 kg / 50.0 cm total length. Smithsonian institutional top speed 2.4 km/h supports `speed_mps` 0.7 with moderate confidence. No defensible bite-pressure measurement was found, so `bite_force_psi` remains 0.0. Attack 31.0 / Defense 20.0 / Agility 43.0 / Stamina 49.0 / Intelligence 43.0 / Special 93.0.
- **Gibbon control:** live schema says only Hylobatidae; staging resolves the profile to *Hylobates lar*. Canonical healthy mature male 6.5 kg / 52.0 cm head-body length. Attack 28.0 / Defense 22.0 / Agility 98.0 / Stamina 62.0 / Intelligence 76.0 / Special 72.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Gibbon | 6.5 kg mature male *H. lar* | 28.0 | 22.0 | 98.0 | 62.0 | 76.0 | 72.0 |
| Gila Monster | 1.1 kg mature male *H. suspectum* | 31.0 | 20.0 | 43.0 | 49.0 | 43.0 | 93.0 |
| Giraffe | 1200.0 kg mature male, legacy *G. camelopardalis* concept | 73.0 | 66.0 | 48.0 | 72.0 | 61.0 | 69.0 |
| Golden Eagle | 5.0 kg mature female *A. chrysaetos* | 40.0 | 21.0 | 88.0 | 79.0 | 66.0 | 70.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
81 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.