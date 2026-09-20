# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 98 / 225
- **Verified full-body transparent PNGs committed:** 0 / 98
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Hornet (*Vespa crabro*)
- **Next pending animal:** Howler Monkey
- **Latest completion:** 2026-09-20 07:00 America/Chicago
- **Latest new-animal image status:** Hornet - `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`. Exact adult queen *V. crabro*, 2048x1536 CC BY-SA 4.0 Commons source visually checked with complete subject inside frame. No PNG completion claimed because the connected GitHub writer is text-only.
- **Latest legacy image audit:** Giraffe - stronger reusable bull source found: `Giraffe standing.jpg`, 1712x2288, explicitly a bull *Giraffa camelopardalis giraffa* in South Africa, CC BY-SA 3.0/GFDL. Complete standing framing is promising and source sex is explicit; age is not explicitly stated, so status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED` rather than falsely promoting it.
- **Next legacy image audit:** Golden Eagle.
- **Latest checkpoint:** `audits/CHECKPOINT-075.md`; next checkpoint at 100 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG, or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific measurement or strong institutional value exists. Speed is not Agility.
- Stamina separates pursuit endurance, routine travel, migration, low metabolism and environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock/colony behavior can raise Tactics or contextual Special but does not multiply one individual's Raw Power, Attack or Defense.
- **Hornet control:** generic production `Hornet` / *Vespa* resolved to European hornet *Vespa crabro*. Canonical mature queen 0.0008 kg / 3.2 cm. `speed_mps` 1.9 from experimentally linked flight literature; `lifespan_years` 1.0 queen-caste value; `bite_force_psi` 0.0. Attack 10.0 / Defense 5.0 / Agility 79.0 / Stamina 39.0 / Intelligence 43.0 / Special 76.0. Venom and flight raise Special/Agility without leaking insect-scale feats into absolute Raw Power.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / the green-anaconda complex. Their scores must remain effectively normalized until the roster explicitly assigns distinct taxa or merges the duplicate concept.
- **Honey Badger control:** exact *Mellivora capensis*. Canonical healthy mature male 14.0 kg / 26.0 cm shoulder / 72.0 cm head-body. `speed_mps` 0.0; `lifespan_years` 7.5; `bite_force_psi` 0.0. Attack 42.0 / Defense 45.0 / Agility 61.0 / Stamina 70.0 / Intelligence 64.0 / Special 80.0.
- **Hippopotamus control:** exact *Hippopotamus amphibius*. Canonical healthy mature territorial male 1,800.0 kg / 155.0 cm shoulder / 400.0 cm length. Attack 90.0 / Defense 84.0 / Agility 48.0 / Stamina 70.0 / Intelligence 56.0 / Special 69.0.
- **Hercules Beetle control:** exact *Dynastes hercules*. Canonical healthy mature major male 0.034 kg / 7.8 cm total length. Attack 7.0 / Defense 12.0 / Agility 44.0 / Stamina 32.0 / Intelligence 20.0 / Special 60.0. Famous proportional strength is not allowed to leak into absolute Raw Power.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Hippopotamus | 1,800.0 kg mature territorial male *H. amphibius* | 90.0 | 84.0 | 48.0 | 70.0 | 56.0 | 69.0 |
| Honey Badger | 14.0 kg mature male *M. capensis* | 42.0 | 45.0 | 61.0 | 70.0 | 64.0 | 80.0 |
| Hornet | 0.0008 kg mature queen *V. crabro* | 10.0 | 5.0 | 79.0 | 39.0 | 43.0 | 76.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
98 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
