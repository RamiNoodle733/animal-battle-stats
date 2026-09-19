# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 83 / 225
- **Verified full-body transparent PNGs committed:** 0 / 83
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Goose, resolved to Greylag Goose (*Anser anser*)
- **Next pending animal:** Gorilla
- **Latest completion:** 2026-09-19 15:58 America/Chicago
- **Latest new-animal image status:** Goose - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *A. anser*, 2292x2292, CC BY-SA 2.5, visually verified complete single-bird framing. Source does not explicitly establish adulthood or sex, so no image completion claimed.
- **Latest legacy image audit:** Electric Eel - the existing 6016x4016 CC BY 4.0 Gdynia source explicitly verifies a mature *Electrophorus electricus*, but visual discovery/renders are strongly head-biased and strict complete head-to-tail silhouette cannot be certified. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; do not cut out/commit from this source until a full silhouette is verified.
- **Next legacy image audit:** Elk.
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
- **Goose control:** site genus-level `Anser` resolved to exact Greylag Goose *Anser anser*. Canonical healthy mature male 3.5 kg / 80.0 cm body length, with BTO male mean 3.49 kg. GPS migration mean 69 km/h supports `speed_mps` 19.2 as representative sustained migratory flight speed, not a physiological maximum. `bite_force_psi` remains 0.0 because no defensible pressure measurement was found. Attack 25.0 / Defense 20.0 / Agility 76.0 / Stamina 82.0 / Intelligence 67.0 / Special 59.0. Peer-reviewed dominance and family-support behavior raises Ferocity/Tactics without inflating absolute damage.
- **Goliath Birdeater control:** exact *Theraphosa blondi*. Canonical healthy mature female 0.15 kg / 25.0 cm representative leg-span envelope. Guinness maximums of 175 g and 28 cm are treated as upper-end records rather than representative baseline. No defensible species-specific maximum speed or bite pressure was recovered, so `speed_mps` and `bite_force_psi` remain 0.0. Attack 16.0 / Defense 12.0 / Agility 61.0 / Stamina 35.0 / Intelligence 31.0 / Special 90.0. Venom, urticating setae and stridulation drive Special without inflating absolute Raw Power.
- **Golden Eagle control:** exact *Aquila chrysaetos*. Canonical healthy fully mature female 5.0 kg / 82.0 cm head-to-tail / approximately 215 cm representative wingspan. Females are materially larger than males. NPS reports swoops up to 200 mph, but no instrumented maximum-speed trial was recovered, so `speed_mps` remains 0.0. Attack 40.0 / Defense 21.0 / Agility 88.0 / Stamina 79.0 / Intelligence 66.0 / Special 70.0.
- **Giraffe control:** canonical healthy mature male 1200.0 kg / 520.0 cm standing height. `speed_mps` 16.7 is moderate-confidence. Attack 73.0 / Defense 66.0 / Agility 48.0 / Stamina 72.0 / Intelligence 61.0 / Special 69.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Golden Eagle | 5.0 kg mature female *A. chrysaetos* | 40.0 | 21.0 | 88.0 | 79.0 | 66.0 | 70.0 |
| Goliath Birdeater | 0.15 kg mature female *T. blondi* | 16.0 | 12.0 | 61.0 | 35.0 | 31.0 | 90.0 |
| Goose | 3.5 kg mature male *A. anser* | 25.0 | 20.0 | 76.0 | 82.0 | 67.0 | 59.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
83 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.