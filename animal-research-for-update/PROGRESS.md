# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 94 / 225
- **Verified full-body transparent PNGs committed:** 0 / 94
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Hellbender, resolved to Eastern Hellbender (*Cryptobranchus alleganiensis alleganiensis*)
- **Next pending animal:** Hercules Beetle
- **Latest completion:** 2026-09-20 03:00 America/Chicago
- **Latest new-animal image status:** Hellbender - `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`. USFWS exact-subspecies adult wild photograph, original 3072x2304, explicitly adult and Public Domain. Full animal source framing was reviewed; sex is unknown. No PNG completion claimed because connected GitHub writers are text-only.
- **Latest legacy image audit:** Giant Centipede / *Scolopendra gigantea* - exact-species 4000x3000 CC BY-SA 3.0 Commons photograph from Vieques was visually inspected and shows the complete U-shaped animal including antennae, legs and terminal appendages. Source metadata does not explicitly establish adulthood, so mandatory adult verification is still unresolved. Status improved to `SOURCE FOUND - FULL-BODY NOT VERIFIED`; no PNG completion claimed.
- **Next legacy image audit:** Giant Squid.
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
- **Hellbender control:** exact Eastern Hellbender *C. a. alleganiensis*. Canonical healthy mature male 1.0 kg / 50.0 cm. `speed_mps` 0.0, `lifespan_years` 25.0, `bite_force_psi` 0.0. Attack 12.0 / Defense 19.0 / Agility 49.0 / Stamina 43.0 / Intelligence 31.0 / Special 68.0. Lateral-line sensing, skin respiration and defensive mucus raise Special without leaking into Raw Power or armor.
- **Hedgehog control:** production label Erinaceinae resolved in staging to *Erinaceus europaeus*. Canonical healthy mature male 1.0 kg / 25.0 cm. `speed_mps` 2.7, `lifespan_years` 2.5, `bite_force_psi` 0.0. Attack 11.0 / Defense 43.0 / Agility 41.0 / Stamina 52.0 / Intelligence 38.0 / Special 69.0.
- **Harpy Eagle control:** exact *Harpia harpyja*. Canonical healthy mature female 8.0 kg / 100.0 cm body length / ~200.0 cm wingspan. Attack 44.0 / Defense 19.0 / Agility 91.0 / Stamina 60.0 / Intelligence 65.0 / Special 79.0.
- **Hammerhead Shark control:** ambiguous family-level production label resolved to Great Hammerhead *Sphyrna mokarran*. Canonical healthy mature female 230.0 kg / 400.0 cm. Attack 74.0 / Defense 55.0 / Agility 84.0 / Stamina 82.0 / Intelligence 63.0 / Special 92.0.
- **Guanaco control:** exact *Lama guanicoe*. Canonical mature territorial male 120.0 kg. Attack 38.0 / Defense 35.0 / Agility 63.0 / Stamina 78.0 / Intelligence 58.0 / Special 45.0.
- **Grizzly Bear control:** exact *Ursus arctos horribilis*. Canonical mature interior male 220.0 kg. Attack 66.0 / Defense 59.0 / Agility 59.0 / Stamina 75.0 / Intelligence 75.0 / Special 63.0.
- **Green Anaconda control:** exact site-facing *Eunectes murinus*. Canonical mature female 50.0 kg / 450.0 cm. Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0.
- **Great White Shark control:** exact *Carcharodon carcharias*. Canonical mature female 900.0 kg / 500.0 cm TL. Attack 88.0 / Defense 68.0 / Agility 73.0 / Stamina 91.0 / Intelligence 70.0 / Special 87.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Harpy Eagle | 8.0 kg mature female *H. harpyja* | 44.0 | 19.0 | 91.0 | 60.0 | 65.0 | 79.0 |
| Hedgehog | 1.0 kg mature male *E. europaeus* | 11.0 | 43.0 | 41.0 | 52.0 | 38.0 | 69.0 |
| Hellbender | 1.0 kg mature male *C. a. alleganiensis* | 12.0 | 19.0 | 49.0 | 43.0 | 31.0 | 68.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
94 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.