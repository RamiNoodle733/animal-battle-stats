# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 66 / 225
- **Verified full-body transparent PNGs committed:** 0 / 66
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Emperor Scorpion
- **Next pending animal:** Emu
- **Latest completion:** 2026-09-18 22:58 America/Chicago
- **Latest new-animal image status:** Emperor Scorpion - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact-*Pandinus imperator* Commons photograph at 3739x2492 is a strong reusable high-resolution candidate and visually shows the general complete silhouette, but the source does not establish adulthood/sex and strict visibility of every leg tip was not certified. No PNG claimed.
- **Latest legacy image audit:** Chameleon - the existing 3872x2592 Benny Trapp exact-*Chamaeleo chamaeleon* candidate was re-opened visually. The tail runs out of the right edge of the frame, so it fails the mandatory complete-body standard despite excellent resolution and CC BY 3.0 provenance. Broader exact-species Commons alternatives were found, including 3008x2000 and 2048px-class photographs, but adulthood plus strict head-to-tail/all-digit framing were not simultaneously verified. Status changed to `REPLACEMENT SOURCE NEEDED`.
- **Next legacy image audit:** Cheetah.
- **Latest checkpoint:** `audits/CHECKPOINT-050.md`; next checkpoint at 75 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG, or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force in newtons is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific measurement or strong institutional value exists. Speed is not Agility.
- Stamina separates pursuit endurance, routine travel, migration, soaring, low metabolism and environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack behavior can raise Tactics/Special contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Emperor Scorpion control:** exact *Pandinus imperator*, canonical 0.030 kg / 20.0 cm mature non-gravid female. Attack 13.0 / Defense 8.0 / Agility 42.0 / Stamina 32.0 / Intelligence 30.0 / Special 76.0. Large chelae are the primary weapon; venom is real but institutionally characterized as mild in human terms. Purified Pi1 toxin data are not treated as whole-venom sting lethality. Speed and bite PSI remain 0.0.
- **Emperor Penguin control:** exact *Aptenodytes forsteri*, canonical robust pre-fast mature male 38.0 kg / 115.0 cm. Attack 28.0 / Defense 32.0 / Agility 68.0 / Stamina 95.0 / Intelligence 57.0 / Special 88.0.
- **Elk control:** exact *Cervus canadensis*, canonical 320.0 kg mature hard-antler bull. Attack 62.0 / Defense 47.0 / Agility 59.0 / Stamina 71.0 / Intelligence 54.0 / Special 52.0.
- **Electric Eel control:** exact *Electrophorus electricus*, canonical 15.0 kg / 200.0 cm adult. Attack 49.0 / Defense 29.0 / Agility 66.0 / Stamina 58.0 / Intelligence 63.0 / Special 98.0. The 860 V record belongs to *E. voltai*.
- **Dragonfly control:** adult male common green darner (*Anax junius*), ~0.0010 kg and 7.6 cm body length. Attack 8.0 / Defense 5.0 / Agility 98.0 / Stamina 80.0 / Intelligence 55.0 / Special 82.0.
- **Donkey control:** 150.0 kg mature standard jack. Attack 48.0 / Defense 38.0 / Agility 58.0 / Stamina 77.0 / Intelligence 61.0 / Special 60.0.
- **Dingo control:** 18.0 kg mature male. Attack 40.0 / Defense 24.0 / Agility 82.0 / Stamina 81.0 / Intelligence 75.0 / Special 58.0.
- **Dhole control:** 18.0 kg male. Attack 42.0 / Defense 25.0 / Agility 84.0 / Stamina 86.0 / Intelligence 78.0 / Special 70.0.
- **Coyote control:** 15.0 kg male. Attack 38.0 / Defense 25.0 / Agility 82.0 / Stamina 74.0 / Intelligence 76.0 / Special 61.0.
- **Cougar control:** 70.0 kg male. Attack 55.0 / Defense 34.0 / Agility 92.0 / Stamina 58.0 / Intelligence 68.0 / Special 67.0.
- **Crow control:** 0.5 kg male, Intelligence 96.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Donkey | 150.0 kg mature standard jack | 48.0 | 38.0 | 58.0 | 77.0 | 61.0 | 60.0 |
| Dragonfly | ~0.001 kg mature male *Anax junius* | 8.0 | 5.0 | 98.0 | 80.0 | 55.0 | 82.0 |
| Electric Eel | 15.0 kg mature *E. electricus* | 49.0 | 29.0 | 66.0 | 58.0 | 63.0 | 98.0 |
| Elk | 320.0 kg mature hard-antler bull | 62.0 | 47.0 | 59.0 | 71.0 | 54.0 | 52.0 |
| Emperor Penguin | 38.0 kg robust pre-fast mature male | 28.0 | 32.0 | 68.0 | 95.0 | 57.0 | 88.0 |
| Emperor Scorpion | 0.030 kg mature non-gravid female | 13.0 | 8.0 | 42.0 | 32.0 | 30.0 | 76.0 |

## Checkpoints
`audits/CHECKPOINT-050.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak bite sourcing and duplicate ability concepts. Next checkpoint: **75 completed research files**.

## Image pipeline status
66 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several older animals already have visually verified reusable full-body sources and should not be repeatedly re-researched until binary tooling changes. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNG is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.