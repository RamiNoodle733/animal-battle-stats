# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 117 / 225
- **Verified full-body transparent PNGs committed:** 0 / 117
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Leatherback Sea Turtle (*Dermochelys coriacea*)
- **Next pending animal:** Leopard
- **Latest completion:** 2026-09-21 02:00 America/Chicago
- **Latest new-animal image status:** Leatherback Sea Turtle - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact-species 3264x2122 CC BY-SA 2.0 Commons/Flickr source has strong provenance, but explicit adulthood/sex and strict visibility of every flipper plus tail endpoint are unresolved. No PNG completion claimed.
- **Latest legacy image audit:** Iguana - stronger 4320x2432 CC BY-SA 3.0 Commons source explicitly identifies a large adult male *Iguana iguana*. This resolves adulthood/sex uncertainty, but strict tail-tip/all-feet completeness could not be visually certified, so status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Impala. Hellbender, Hornet, Ibex and Kudu are source-verified and remain cutout/commit pending while the writer is text-only.
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
- **Leatherback Sea Turtle control:** *Dermochelys coriacea*, healthy fully mature adult female 400.0 kg / approximately 190.0 cm total length, with representative ~160 cm curved carapace context. `speed_mps` 2.8 from measured maxima in gravid females; `lifespan_years` 50.0 estimate; `bite_force_psi` 0.0. Attack 35.0 / Defense 60.0 / Agility 59.0 / Stamina 95.0 / Intelligence 49.0 / Special 89.0. Soft-prey jaw specialization prevents mass leaking into Attack; continuous swimming, trans-ocean migration, deep diving and thermoregulation drive Stamina/Special.
- **Kudu control:** Greater Kudu *Tragelaphus strepsiceros*, healthy fully mature male 230.0 kg / 145.0 cm shoulder / 220.0 cm head-body. `speed_mps` 0.0; `lifespan_years` 10.0; `bite_force_psi` 0.0. Attack 58.0 / Defense 43.0 / Agility 72.0 / Stamina 60.0 / Intelligence 49.0 / Special 61.0.
- **Kookaburra control:** Laughing Kookaburra *Dacelo novaeguineae*, healthy fully mature female, canonical 0.5 kg rounded schema mass / 42.0 cm total length. Attack 18.0 / Defense 13.0 / Agility 74.0 / Stamina 54.0 / Intelligence 62.0 / Special 57.0.
- **Komodo Dragon control:** *Varanus komodoensis*, healthy fully mature male 85.0 kg / 259.0 cm total length. Attack 62.0 / Defense 44.0 / Agility 59.0 / Stamina 53.0 / Intelligence 63.0 / Special 88.0.
- **Koala control:** *Phascolarctos cinereus*, healthy fully mature southern male 12.0 kg / 78.0 cm head-body length. Attack 28.0 / Defense 23.0 / Agility 54.0 / Stamina 32.0 / Intelligence 49.0 / Special 62.0.
- **Kiwi control:** southern brown kiwi / tokoeka *Apteryx australis*, healthy fully mature female 3.1 kg / 45.0 cm. Attack 22.0 / Defense 20.0 / Agility 55.0 / Stamina 62.0 / Intelligence 51.0 / Special 78.0.
- **King Crab control:** red king crab *Paralithodes camtschaticus*, healthy hard-shelled mature male 3.1 kg / 17.4 cm carapace length. Attack 30.0 / Defense 44.0 / Agility 26.0 / Stamina 55.0 / Intelligence 31.0 / Special 49.0.
- **King Cobra control:** Northern King Cobra *Ophiophagus hannah* sensu stricto, healthy mature male 8.0 kg / 360.0 cm total length. Attack 59.0 / Defense 25.0 / Agility 76.0 / Stamina 52.0 / Intelligence 58.0 / Special 94.0.
- **Kangaroo control:** red kangaroo *Osphranter rufus*, healthy fully mature male 80.0 kg. Attack 52.0 / Defense 38.0 / Agility 80.0 / Stamina 86.0 / Intelligence 51.0 / Special 68.0.
- **Japanese Macaque control:** *Macaca fuscata*, healthy fully mature male 11.3 kg. Attack 31.0 / Defense 28.0 / Agility 79.0 / Stamina 67.0 / Intelligence 84.0 / Special 72.0.
- **Jaguar control:** *Panthera onca*, healthy mature Pantanal male 100.0 kg. Attack 68.0 / Defense 48.0 / Agility 82.0 / Stamina 64.0 / Intelligence 70.0 / Special 75.0.
- **Hyena control:** spotted hyena *Crocuta crocuta*, mature female 75.0 kg. Attack 61.0 / Defense 53.0 / Agility 61.0 / Stamina 83.0 / Intelligence 78.0 / Special 72.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Kookaburra | 0.5 kg mature female *D. novaeguineae* | 18.0 | 13.0 | 74.0 | 54.0 | 62.0 | 57.0 |
| Kudu | 230.0 kg mature male *T. strepsiceros* | 58.0 | 43.0 | 72.0 | 60.0 | 49.0 | 61.0 |
| Leatherback Sea Turtle | 400.0 kg mature female *D. coriacea* | 35.0 | 60.0 | 59.0 | 95.0 | 49.0 | 89.0 |

## Checkpoints
`audits/CHECKPOINT-100.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **125 completed research files**.

## Image pipeline status
117 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, including Hellbender, Hornet, Ibex and Kudu, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
