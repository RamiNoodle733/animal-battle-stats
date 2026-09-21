# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 112 / 225
- **Verified full-body transparent PNGs committed:** 0 / 112
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Kiwi / Southern Brown Kiwi / Tokoeka (*Apteryx australis*)
- **Next pending animal:** Koala
- **Latest completion:** 2026-09-20 20:57 America/Chicago
- **Latest new-animal image status:** Kiwi - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Preferred reusable living source is the 1964x1473 CC BY-SA 2.5 wild Stewart Island `Tokoeka.jpg`, exact *A. australis*. It has useful whole-bird framing, but adulthood/sex are not explicit and strict every-toe visibility is not certified. Canonical female remains preferred. No PNG completion claimed.
- **Latest legacy image audit:** Howler Monkey - exact adult male *Alouatta caraya* 3888x2588 CC BY-SA 2.0 source has excellent taxon/adult/sex/provenance metadata but does not show the complete prehensile tail and all appendages under the strict whole-body rule. A 4000x3000 wild male alternative likewise fails simultaneous adult + strict complete-anatomy verification.
- **Next legacy image audit:** Hummingbird. Hellbender and Hornet are already source-verified and remain cutout/commit pending while the writer is text-only.
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
- **Kiwi control:** southern brown kiwi / tokoeka *Apteryx australis*, healthy fully mature female 3.1 kg / 45.0 cm. `height_cm` 0.0; `speed_mps` 0.0; `lifespan_years` 45.0; `bite_force_psi` 0.0. Attack 22.0 / Defense 20.0 / Agility 55.0 / Stamina 62.0 / Intelligence 51.0 / Special 78.0. Female-biased size and bill length justify the canonical sex. Exceptional olfactory + vibrotactile bill senses are concentrated in Senses/Special and do not inflate physical combat ratings.
- **King Crab control:** red king crab *Paralithodes camtschaticus*, healthy hard-shelled mature male 3.1 kg / 17.4 cm carapace length. `height_cm` 0.0; `speed_mps` 0.0; `lifespan_years` 20.0; `bite_force_psi` 0.0. Attack 30.0 / Defense 44.0 / Agility 26.0 / Stamina 55.0 / Intelligence 31.0 / Special 49.0. Exceptional 24-lb, nearly 5-ft-span Alaska males are not the representative baseline; migration rate is not top speed and claw crushing is not fabricated into PSI.
- **King Cobra control:** Northern King Cobra *Ophiophagus hannah* sensu stricto under the 2024 four-species revision, healthy mature male 8.0 kg / 360.0 cm total length. `height_cm` 0.0; `speed_mps` 0.0; `lifespan_years` 20.0; `bite_force_psi` 0.0. Attack 59.0 / Defense 25.0 / Agility 76.0 / Stamina 52.0 / Intelligence 58.0 / Special 94.0. Venom drives Special and Weaponry but is not allowed to inflate Raw Power, Defense or Stamina. Older Western Ghats/Sundaic whole-complex data require taxonomic rechecking.
- **Kangaroo control:** red kangaroo *Osphranter rufus*, healthy fully mature male 80.0 kg / 150.0 cm posture-sensitive upright height / 250.0 cm derived total length. `speed_mps` 17.8; `lifespan_years` 20.0; `bite_force_psi` 0.0. Attack 52.0 / Defense 38.0 / Agility 80.0 / Stamina 86.0 / Intelligence 51.0 / Special 68.0.
- **Japanese Macaque control:** *Macaca fuscata*, healthy fully mature male 11.3 kg / 57.0 cm head-body / 66.3 cm derived total length. Attack 31.0 / Defense 28.0 / Agility 79.0 / Stamina 67.0 / Intelligence 84.0 / Special 72.0.
- **Jaguar control:** *Panthera onca*, healthy mature Pantanal male 100.0 kg. Attack 68.0 / Defense 48.0 / Agility 82.0 / Stamina 64.0 / Intelligence 70.0 / Special 75.0.
- **Jackal control:** black-backed jackal *Lupulella mesomelas*, mature male 8.1 kg. Attack 34.0 / Defense 27.0 / Agility 74.0 / Stamina 66.0 / Intelligence 68.0 / Special 53.0.
- **Impala control:** *Aepyceros melampus*, fully mature territorial male 65.0 kg. Attack 43.0 / Defense 31.0 / Agility 91.0 / Stamina 64.0 / Intelligence 48.0 / Special 62.0.
- **Iguana control:** green iguana *Iguana iguana*, mature male 7.0 kg. Attack 27.0 / Defense 31.0 / Agility 66.0 / Stamina 43.0 / Intelligence 45.0 / Special 70.0.
- **Ibex control:** Alpine ibex *Capra ibex*, mature male 100.0 kg. Attack 51.0 / Defense 43.0 / Agility 71.0 / Stamina 66.0 / Intelligence 51.0 / Special 59.0.
- **Hyena control:** spotted hyena *Crocuta crocuta*, mature female 75.0 kg. Attack 61.0 / Defense 53.0 / Agility 61.0 / Stamina 83.0 / Intelligence 78.0 / Special 72.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| King Cobra | 8.0 kg mature male *O. hannah* s.s. | 59.0 | 25.0 | 76.0 | 52.0 | 58.0 | 94.0 |
| King Crab | 3.1 kg mature male *P. camtschaticus* | 30.0 | 44.0 | 26.0 | 55.0 | 31.0 | 49.0 |
| Kiwi | 3.1 kg mature female *A. australis* | 22.0 | 20.0 | 55.0 | 62.0 | 51.0 | 78.0 |

## Checkpoints
`audits/CHECKPOINT-100.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **125 completed research files**.

## Image pipeline status
112 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
