# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 110 / 225
- **Verified full-body transparent PNGs committed:** 0 / 110
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** King Cobra / Northern King Cobra (*Ophiophagus hannah* sensu stricto)
- **Next pending animal:** King Crab
- **Latest completion:** 2026-09-20 19:00 America/Chicago
- **Latest new-animal image status:** King Cobra - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Preferred reusable source is a 6049x4037 CC BY-SA 2.0 female from Kaeng Krachan National Park, Thailand, within the modern *O. hannah* sensu-stricto range. Sex and reuse provenance are explicit, but adulthood and strict entire head-to-tail silhouette were not verified. Canonical adult male remains preferred. No PNG completion claimed.
- **Latest legacy image audit:** Hippopotamus - high-resolution exact-species terrestrial sources and 5472x3648 explicit-male CC BY-SA sources were checked. The explicit-male images are substantially submerged and fail full-body anatomy; the best terrestrial side-profile source is 3648x2736 CC BY-SA 3.0 but adulthood/sex and strict tail/feet visibility remain unresolved. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Honey Badger. Hellbender and Hornet are already source-verified and remain cutout/commit pending while the writer is text-only.
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
- **King Cobra control:** Northern King Cobra *Ophiophagus hannah* sensu stricto under the 2024 four-species revision, healthy mature male 8.0 kg / 360.0 cm total length. `height_cm` 0.0; `speed_mps` 0.0; `lifespan_years` 20.0; `bite_force_psi` 0.0. Attack 59.0 / Defense 25.0 / Agility 76.0 / Stamina 52.0 / Intelligence 58.0 / Special 94.0. Venom drives Special and Weaponry but is not allowed to inflate Raw Power, Defense or Stamina. Older Western Ghats/Sundaic whole-complex data require taxonomic rechecking.
- **Kangaroo control:** red kangaroo *Osphranter rufus*, healthy fully mature male 80.0 kg / 150.0 cm posture-sensitive upright height / 250.0 cm derived total length. `speed_mps` 17.8; `lifespan_years` 20.0; `bite_force_psi` 0.0. Attack 52.0 / Defense 38.0 / Agility 80.0 / Stamina 86.0 / Intelligence 51.0 / Special 68.0.
- **Japanese Macaque control:** *Macaca fuscata*, healthy fully mature male 11.3 kg / 57.0 cm head-body / 66.3 cm derived total length. Attack 31.0 / Defense 28.0 / Agility 79.0 / Stamina 67.0 / Intelligence 84.0 / Special 72.0.
- **Jaguar control:** *Panthera onca*, healthy mature Pantanal male 100.0 kg. Attack 68.0 / Defense 48.0 / Agility 82.0 / Stamina 64.0 / Intelligence 70.0 / Special 75.0.
- **Jackal control:** black-backed jackal *Lupulella mesomelas*, mature male 8.1 kg. Attack 34.0 / Defense 27.0 / Agility 74.0 / Stamina 66.0 / Intelligence 68.0 / Special 53.0.
- **Impala control:** *Aepyceros melampus*, fully mature territorial male 65.0 kg. Attack 43.0 / Defense 31.0 / Agility 91.0 / Stamina 64.0 / Intelligence 48.0 / Special 62.0.
- **Iguana control:** green iguana *Iguana iguana*, mature male 7.0 kg. Attack 27.0 / Defense 31.0 / Agility 66.0 / Stamina 43.0 / Intelligence 45.0 / Special 70.0.
- **Ibex control:** Alpine ibex *Capra ibex*, mature male 100.0 kg. Attack 51.0 / Defense 43.0 / Agility 71.0 / Stamina 66.0 / Intelligence 51.0 / Special 59.0.
- **Hyena control:** spotted hyena *Crocuta crocuta*, mature female 75.0 kg. Attack 61.0 / Defense 53.0 / Agility 61.0 / Stamina 83.0 / Intelligence 78.0 / Special 72.0.
- **Huntsman Spider control:** *Heteropoda maxima*, mature female. Attack 10.0 / Defense 7.0 / Agility 86.0 / Stamina 35.0 / Intelligence 34.0 / Special 61.0.
- **Hummingbird control:** *Archilochus colubris*, mature female 0.0038 kg. Attack 5.0 / Defense 8.0 / Agility 98.0 / Stamina 82.0 / Intelligence 61.0 / Special 79.0.
- **Honey Badger control:** *Mellivora capensis*, mature male 14.0 kg. Attack 42.0 / Defense 45.0 / Agility 61.0 / Stamina 70.0 / Intelligence 64.0 / Special 80.0.
- **Hippopotamus control:** *Hippopotamus amphibius*, mature territorial male 1,800.0 kg. Attack 90.0 / Defense 84.0 / Agility 48.0 / Stamina 70.0 / Intelligence 56.0 / Special 69.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Japanese Macaque | 11.3 kg mature male *M. fuscata* | 31.0 | 28.0 | 79.0 | 67.0 | 84.0 | 72.0 |
| Kangaroo | 80.0 kg mature male *O. rufus* | 52.0 | 38.0 | 80.0 | 86.0 | 51.0 | 68.0 |
| King Cobra | 8.0 kg mature male *O. hannah* s.s. | 59.0 | 25.0 | 76.0 | 52.0 | 58.0 | 94.0 |

## Checkpoints
`audits/CHECKPOINT-100.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **125 completed research files**.

## Image pipeline status
110 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
