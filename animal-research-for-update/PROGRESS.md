# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 99 / 225
- **Verified full-body transparent PNGs committed:** 0 / 99
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Howler Monkey, resolved to Black-and-gold Howler Monkey (*Alouatta caraya*)
- **Next pending animal:** Hummingbird
- **Latest completion:** 2026-09-20 08:00 America/Chicago
- **Latest new-animal image status:** Howler Monkey - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact adult male *A. caraya*, 3888x2588 CC BY-SA 2.0 Commons/Flickr source with explicit adult/sex metadata, but visual inspection does not certify the complete tail and all appendages. No PNG completion claimed.
- **Latest legacy image audit:** Golden Eagle - explicit adult male *Aquila chrysaetos* source found on Flickr, plus reusable 2000x1500 exact-species Commons candidates. The explicit-adult source does not simultaneously establish mandatory complete wings/feet/tail framing and reusable provenance strongly enough for replacement. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Goliath Birdeater.
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
- **Howler Monkey control:** generic roster label resolved to *Alouatta caraya*. Canonical healthy mature male 7.0 kg / 60.0 cm head-body. `height_cm` 0.0, `speed_mps` 0.0, `lifespan_years` 20.0, `bite_force_psi` 0.0. Attack 27.0 / Defense 20.0 / Agility 76.0 / Stamina 43.0 / Intelligence 70.0 / Special 73.0. The roar is communication/intimidation, not sonic damage; the prehensile tail is positional support, not a constricting weapon.
- **Hornet control:** generic production `Hornet` / *Vespa* resolved to European hornet *Vespa crabro*. Canonical mature queen 0.0008 kg / 3.2 cm. Attack 10.0 / Defense 5.0 / Agility 79.0 / Stamina 39.0 / Intelligence 43.0 / Special 76.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / the green-anaconda complex. Their scores must remain effectively normalized until the roster explicitly assigns distinct taxa or merges the duplicate concept.
- **Honey Badger control:** exact *Mellivora capensis*. Canonical healthy mature male 14.0 kg. Attack 42.0 / Defense 45.0 / Agility 61.0 / Stamina 70.0 / Intelligence 64.0 / Special 80.0.
- **Hippopotamus control:** exact *Hippopotamus amphibius*. Canonical healthy mature territorial male 1,800.0 kg. Attack 90.0 / Defense 84.0 / Agility 48.0 / Stamina 70.0 / Intelligence 56.0 / Special 69.0.
- **Hercules Beetle control:** exact *Dynastes hercules*. Canonical healthy mature major male 0.034 kg. Attack 7.0 / Defense 12.0 / Agility 44.0 / Stamina 32.0 / Intelligence 20.0 / Special 60.0. Famous proportional strength is not allowed to leak into absolute Raw Power.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Honey Badger | 14.0 kg mature male *M. capensis* | 42.0 | 45.0 | 61.0 | 70.0 | 64.0 | 80.0 |
| Hornet | 0.0008 kg mature queen *V. crabro* | 10.0 | 5.0 | 79.0 | 39.0 | 43.0 | 76.0 |
| Howler Monkey | 7.0 kg mature male *A. caraya* | 27.0 | 20.0 | 76.0 | 43.0 | 70.0 | 73.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
99 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
