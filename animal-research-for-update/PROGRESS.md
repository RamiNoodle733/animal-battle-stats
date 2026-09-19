# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 80 / 225
- **Verified full-body transparent PNGs committed:** 0 / 80
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Giraffe (*Giraffa camelopardalis* sensu site)
- **Next pending animal:** Golden Eagle
- **Latest completion:** 2026-09-19 13:02 America/Chicago
- **Latest new-animal image status:** Giraffe - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact legacy-site-name *Giraffa camelopardalis* male, 3457x4644, CC BY-SA 2.0, reviewed Flickr provenance. Male sex is explicit, but adulthood and strict every-hoof/complete-tail visibility were not certified. No PNG claimed.
- **Latest legacy image audit:** Dingo - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Existing 4608x3456 candidate has excellent single-animal framing, source metadata verifies male sex, and Commons/Flickr provenance supports public-domain reuse. Source metadata still does not explicitly establish adulthood, so it is not promoted to pending-cutout status.
- **Next legacy image audit:** Donkey.
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
- **Giraffe control:** site label *Giraffa camelopardalis* is a legacy one-species concept; modern evidence supports four giraffe species, so older pan-giraffe measurements are labeled accordingly. Canonical healthy mature male 1200.0 kg / 520.0 cm standing height. `speed_mps` 16.7 is a moderate-confidence specialist observational burst reference; UAV work directly recorded 2.8-11.0 m/s. No defensible bite-pressure measurement was found, so `bite_force_psi` remains 0.0. Attack 73.0 / Defense 66.0 / Agility 48.0 / Stamina 72.0 / Intelligence 61.0 / Special 69.0. Kicking and male necking drive offense, but speed is not allowed to inflate agility and cardiovascular specialization is not raw power.
- **Gila Monster control:** exact *Heloderma suspectum*, canonical healthy mature male 1.1 kg / 50.0 cm total length. Smithsonian institutional top speed 2.4 km/h supports `speed_mps` 0.7 with moderate confidence. No defensible bite-pressure measurement was found, so `bite_force_psi` remains 0.0. Attack 31.0 / Defense 20.0 / Agility 43.0 / Stamina 49.0 / Intelligence 43.0 / Special 93.0.
- **Gibbon control:** live schema says only Hylobatidae; staging resolves the profile to *Hylobates lar*. Canonical healthy mature male 6.5 kg / 52.0 cm head-body length. Attack 28.0 / Defense 22.0 / Agility 98.0 / Stamina 62.0 / Intelligence 76.0 / Special 72.0.
- **Giant Squid control:** *Architeuthis dux*, canonical healthy mature large female 150.0 kg; `length_cm` 500.0 intentionally excludes extreme feeding-tentacle extension as the main body-size field. Attack 58.0 / Defense 36.0 / Agility 54.0 / Stamina 47.0 / Intelligence 53.0 / Special 86.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Giant Squid | 150.0 kg mature large female *A. dux* | 58.0 | 36.0 | 54.0 | 47.0 | 53.0 | 86.0 |
| Gibbon | 6.5 kg mature male *H. lar* | 28.0 | 22.0 | 98.0 | 62.0 | 76.0 | 72.0 |
| Gila Monster | 1.1 kg mature male *H. suspectum* | 31.0 | 20.0 | 43.0 | 49.0 | 43.0 | 93.0 |
| Giraffe | 1200.0 kg mature male, legacy *G. camelopardalis* concept | 73.0 | 66.0 | 48.0 | 72.0 | 61.0 | 69.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
80 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.