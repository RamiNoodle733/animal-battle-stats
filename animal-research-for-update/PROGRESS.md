# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 121 / 225
- **Verified full-body transparent PNGs committed:** 0 / 121
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Lobster / American Lobster (*Homarus americanus*)
- **Next pending animal:** Lynx
- **Latest completion:** 2026-09-21 05:57 America/Chicago
- **Latest new-animal image status:** Lobster - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *H. americanus* 5040x3224 CC BY 2.0 Commons/Flickr source has excellent provenance, but direct visual inspection shows rock/shelter overlap obscuring substantial body/appendage anatomy; adulthood and sex are not explicit. No PNG completion claimed.
- **Latest legacy image audit:** Japanese Macaque - explicit adult-male source remains only 337x335; a 4288x2848 alpha-male source is a head portrait; a 2664x4000 CC0 exact-species source does not explicitly establish adulthood or sex. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Kangaroo. Hellbender, Hornet, Ibex and Kudu are source-verified and remain cutout/commit pending while the writer is text-only.
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
- **Lobster control:** American lobster *Homarus americanus*, healthy fully mature hard-shelled male, 1.0 kg / 30.0 cm total length. `height_cm` 0.0; `speed_mps` 0.0; `lifespan_years` 80.0; `bite_force_psi` 0.0. Attack 28.0 / Defense 36.0 / Agility 35.0 / Stamina 57.0 / Intelligence 48.0 / Special 60.0. Elner's measured 256 N crusher value came from a much larger 172 mm-CL specimen and must not be assigned directly to the canonical animal. Crusher/cutter specialization is real, but proportional claw performance must not leak into large-animal Attack scaling.
- **Llama control:** domestic *Lama glama*, healthy fully mature intact male, 150.0 kg / 121.0 cm shoulder / 160.0 cm head-body. `speed_mps` 0.0; `lifespan_years` 20.0; `bite_force_psi` 0.0. Attack 40.0 / Defense 36.0 / Agility 60.0 / Stamina 77.0 / Intelligence 60.0 / Special 54.0. Male fighting teeth, neck wrestling and guard behavior are real, but must not inflate this domestic herbivore toward dedicated predator weapon scores.
- **Lionfish control:** red lionfish *Pterois volitans*, healthy fully mature male, 0.5 kg / 38.0 cm total length. `height_cm` 0.0 as inapplicable, `speed_mps` 0.0, `lifespan_years` 15.0, `bite_force_psi` 0.0. Attack 25.0 / Defense 38.0 / Agility 52.0 / Stamina 55.0 / Intelligence 58.0 / Special 87.0. Venom is primarily a passive spine defense, so it must not inflate Attack or Raw Power as if actively injected by a bite.
- **Leopard control:** *Panthera pardus*, healthy fully mature male 60.0 kg / 65.0 cm shoulder / 150.0 cm head-body. `speed_mps` 0.0; `lifespan_years` 12.0; `bite_force_psi` 0.0. Attack 60.0 / Defense 43.0 / Agility 84.0 / Stamina 62.0 / Intelligence 68.0 / Special 63.0. Must remain physically near Black Panther because that roster entry is a melanistic leopard; final normalization should revisit their one-point editorial differences.
- **Leatherback Sea Turtle control:** *Dermochelys coriacea*, healthy fully mature adult female 400.0 kg / approximately 190.0 cm total length. Attack 35.0 / Defense 60.0 / Agility 59.0 / Stamina 95.0 / Intelligence 49.0 / Special 89.0.
- **Kudu control:** Greater Kudu *Tragelaphus strepsiceros*, healthy fully mature male 230.0 kg / 145.0 cm shoulder / 220.0 cm head-body. Attack 58.0 / Defense 43.0 / Agility 72.0 / Stamina 60.0 / Intelligence 49.0 / Special 61.0.
- **Kookaburra control:** Laughing Kookaburra *Dacelo novaeguineae*, mature female 0.5 kg / 42.0 cm. Attack 18.0 / Defense 13.0 / Agility 74.0 / Stamina 54.0 / Intelligence 62.0 / Special 57.0.
- **Komodo Dragon control:** *Varanus komodoensis*, mature male 85.0 kg / 259.0 cm. Attack 62.0 / Defense 44.0 / Agility 59.0 / Stamina 53.0 / Intelligence 63.0 / Special 88.0.
- **Koala control:** *Phascolarctos cinereus*, mature southern male 12.0 kg / 78.0 cm. Attack 28.0 / Defense 23.0 / Agility 54.0 / Stamina 32.0 / Intelligence 49.0 / Special 62.0.
- **Kiwi control:** southern brown kiwi *Apteryx australis*, mature female 3.1 kg / 45.0 cm. Attack 22.0 / Defense 20.0 / Agility 55.0 / Stamina 62.0 / Intelligence 51.0 / Special 78.0.
- **King Crab control:** *Paralithodes camtschaticus*, mature male 3.1 kg / 17.4 cm carapace. Attack 30.0 / Defense 44.0 / Agility 26.0 / Stamina 55.0 / Intelligence 31.0 / Special 49.0.
- **King Cobra control:** *Ophiophagus hannah* sensu stricto, mature male 8.0 kg / 360.0 cm. Attack 59.0 / Defense 25.0 / Agility 76.0 / Stamina 52.0 / Intelligence 58.0 / Special 94.0.
- **Kangaroo control:** red kangaroo *Osphranter rufus*, mature male 80.0 kg. Attack 52.0 / Defense 38.0 / Agility 80.0 / Stamina 86.0 / Intelligence 51.0 / Special 68.0.
- **Japanese Macaque control:** *Macaca fuscata*, mature male 11.3 kg. Attack 31.0 / Defense 28.0 / Agility 79.0 / Stamina 67.0 / Intelligence 84.0 / Special 72.0.
- **Jaguar control:** *Panthera onca*, mature Pantanal male 100.0 kg. Attack 68.0 / Defense 48.0 / Agility 82.0 / Stamina 64.0 / Intelligence 70.0 / Special 75.0.
- **Hyena control:** spotted hyena *Crocuta crocuta*, mature female 75.0 kg. Attack 61.0 / Defense 53.0 / Agility 61.0 / Stamina 83.0 / Intelligence 78.0 / Special 72.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Lionfish | 0.5 kg mature male *P. volitans* | 25.0 | 38.0 | 52.0 | 55.0 | 58.0 | 87.0 |
| Llama | 150.0 kg mature intact male *L. glama* | 40.0 | 36.0 | 60.0 | 77.0 | 60.0 | 54.0 |
| Lobster | 1.0 kg mature hard-shell male *H. americanus* | 28.0 | 36.0 | 35.0 | 57.0 | 48.0 | 60.0 |

## Checkpoints
`audits/CHECKPOINT-100.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **125 completed research files**.

## Image pipeline status
121 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, including Hellbender, Hornet, Ibex and Kudu, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
