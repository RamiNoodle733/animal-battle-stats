# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 104 / 225
- **Verified full-body transparent PNGs committed:** 0 / 104
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Iguana, resolved to Green iguana (*Iguana iguana*)
- **Next pending animal:** Impala
- **Latest completion:** 2026-09-20 13:00 America/Chicago
- **Latest new-animal image status:** Iguana - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact male *Iguana iguana* CC BY-SA 4.0 Costa Rica source is 2135x2848 with strong near-full-body framing, but adulthood and strict unobscured every-foot/tail-tip visibility were not certified. No PNG completion claimed.
- **Latest legacy image audit:** Great Horned Owl - 6240x4160 public-domain GlacierNPS exact-*Bubo virginianus* source found with excellent provenance; adulthood/sex and strict complete feet/tail/wings framing remain unresolved. Status `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Great White Shark.
- **Latest checkpoint:** `audits/CHECKPOINT-100.md`; next checkpoint at 125 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific measurement or strong institutional value exists. Speed is not Agility.
- Stamina separates pursuit endurance, routine travel, migration, low metabolism and environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock/colony behavior can raise Tactics or contextual Special but does not multiply one individual's Raw Power, Attack or Defense.
- **Iguana control:** roster label resolves to green iguana *Iguana iguana*. Canonical healthy fully mature male, 7.0 kg / 175.0 cm total length. `height_cm` 0.0 because standardized standing height is not meaningful; `speed_mps` 0.0 because no defensible species-specific maximum was recovered; `lifespan_years` 20.0; `bite_force_psi` 0.0. Attack 27.0 / Defense 31.0 / Agility 66.0 / Stamina 43.0 / Intelligence 45.0 / Special 70.0. Tail autotomy/regrowth and canopy-water escape raise Special without leaking into Raw Power or armor.
- **Ibex control:** Alpine ibex *Capra ibex*, mature male 100.0 kg. Attack 51.0 / Defense 43.0 / Agility 71.0 / Stamina 66.0 / Intelligence 51.0 / Special 59.0.
- **Hyena control:** spotted hyena *Crocuta crocuta*, mature female 75.0 kg. Attack 61.0 / Defense 53.0 / Agility 61.0 / Stamina 83.0 / Intelligence 78.0 / Special 72.0.
- **Huntsman Spider control:** *Heteropoda maxima*, mature female, representative 3.8 cm body length. Attack 10.0 / Defense 7.0 / Agility 86.0 / Stamina 35.0 / Intelligence 34.0 / Special 61.0.
- **Hummingbird control:** *Archilochus colubris*, mature female 0.0038 kg / 8.5 cm. Attack 5.0 / Defense 8.0 / Agility 98.0 / Stamina 82.0 / Intelligence 61.0 / Special 79.0.
- **Howler Monkey control:** *Alouatta caraya*, mature male 7.0 kg. Attack 27.0 / Defense 20.0 / Agility 76.0 / Stamina 43.0 / Intelligence 70.0 / Special 73.0.
- **Hornet control:** *Vespa crabro*, mature queen 0.0008 kg. Attack 10.0 / Defense 5.0 / Agility 79.0 / Stamina 39.0 / Intelligence 43.0 / Special 76.0.
- **Honey Badger control:** *Mellivora capensis*, mature male 14.0 kg. Attack 42.0 / Defense 45.0 / Agility 61.0 / Stamina 70.0 / Intelligence 64.0 / Special 80.0.
- **Hippopotamus control:** *Hippopotamus amphibius*, mature territorial male 1,800.0 kg. Attack 90.0 / Defense 84.0 / Agility 48.0 / Stamina 70.0 / Intelligence 56.0 / Special 69.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Hyena | 75.0 kg mature female *C. crocuta* | 61.0 | 53.0 | 61.0 | 83.0 | 78.0 | 72.0 |
| Ibex | 100.0 kg mature male *C. ibex* | 51.0 | 43.0 | 71.0 | 66.0 | 51.0 | 59.0 |
| Iguana | 7.0 kg mature male *I. iguana* | 27.0 | 31.0 | 66.0 | 43.0 | 45.0 | 70.0 |

## Checkpoints
`audits/CHECKPOINT-100.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **125 completed research files**.

## Image pipeline status
104 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
