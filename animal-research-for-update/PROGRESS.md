# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 123 / 225
- **Verified full-body transparent PNGs committed:** 0 / 123
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Macaw / Scarlet Macaw (*Ara macao*)
- **Next pending animal:** Magpie
- **Latest completion:** 2026-09-21 08:00 America/Chicago
- **Latest new-animal image status:** Macaw - `REPLACEMENT SOURCE NEEDED`. A 3000x2083 exact-*Ara macao* CC BY-SA 4.0 candidate was visually inspected through its original file and rejected as a close-up missing feet/full tail/whole silhouette. Broader high-resolution searching did not verify adulthood plus strict complete anatomy simultaneously. No PNG completion claimed.
- **Latest legacy image audit:** King Cobra - exact female *Ophiophagus hannah*, 6049x4037 CC BY-SA 2.0 source with reviewed provenance; adulthood and complete head-to-tail silhouette through the coils remain unverified. Status `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** King Crab. Hellbender, Hornet, Ibex and Kudu remain source-verified cutout/commit pending while the GitHub writer is text-only.
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
- **Macaw control:** Scarlet Macaw *Ara macao*, healthy fully mature adult, sex unspecified because gross dimorphism is weak, 1.2 kg / 89.0 cm total length / 15.6 m/s institutional flight maximum / 45.0 y wild lifespan / 0.0 PSI. A peer-reviewed 2025 study calculated 444 N bite force, retained only as `bite_force_n` evidence because PSI conversion would require contact area. Attack 24.0 / Defense 17.0 / Agility 86.0 / Stamina 65.0 / Intelligence 86.0 / Special 64.0. Flight is concentrated in Agility and some Special, not double-counted as structural Defense.
- **Lynx control:** Eurasian lynx *Lynx lynx*, mature male 24.0 kg. Attack 48.0 / Defense 31.0 / Agility 85.0 / Stamina 68.0 / Intelligence 67.0 / Special 66.0.
- **Lobster control:** American lobster *Homarus americanus*, mature hard-shell male 1.0 kg. Attack 28.0 / Defense 36.0 / Agility 35.0 / Stamina 57.0 / Intelligence 48.0 / Special 60.0.
- **Llama control:** *Lama glama*, mature intact male 150.0 kg. Attack 40.0 / Defense 36.0 / Agility 60.0 / Stamina 77.0 / Intelligence 60.0 / Special 54.0.
- **Lionfish control:** red lionfish *Pterois volitans*, mature male 0.5 kg. Attack 25.0 / Defense 38.0 / Agility 52.0 / Stamina 55.0 / Intelligence 58.0 / Special 87.0.
- **Leopard control:** *Panthera pardus*, mature male 60.0 kg. Attack 60.0 / Defense 43.0 / Agility 84.0 / Stamina 62.0 / Intelligence 68.0 / Special 63.0.
- **Leatherback Sea Turtle control:** *Dermochelys coriacea*, mature adult female 400.0 kg. Attack 35.0 / Defense 60.0 / Agility 59.0 / Stamina 95.0 / Intelligence 49.0 / Special 89.0.
- **Kudu control:** Greater Kudu *Tragelaphus strepsiceros*, mature male 230.0 kg. Attack 58.0 / Defense 43.0 / Agility 72.0 / Stamina 60.0 / Intelligence 49.0 / Special 61.0.
- **Kangaroo control:** red kangaroo *Osphranter rufus*, mature male 80.0 kg. Attack 52.0 / Defense 38.0 / Agility 80.0 / Stamina 86.0 / Intelligence 51.0 / Special 68.0.
- **Japanese Macaque control:** *Macaca fuscata*, mature male 11.3 kg. Attack 31.0 / Defense 28.0 / Agility 79.0 / Stamina 67.0 / Intelligence 84.0 / Special 72.0.
- **Jaguar control:** *Panthera onca*, mature Pantanal male 100.0 kg. Attack 68.0 / Defense 48.0 / Agility 82.0 / Stamina 64.0 / Intelligence 70.0 / Special 75.0.
- **Hyena control:** spotted hyena *Crocuta crocuta*, mature female 75.0 kg. Attack 61.0 / Defense 53.0 / Agility 61.0 / Stamina 83.0 / Intelligence 78.0 / Special 72.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Lobster | 1.0 kg mature hard-shell male *H. americanus* | 28.0 | 36.0 | 35.0 | 57.0 | 48.0 | 60.0 |
| Lynx | 24.0 kg mature male *L. lynx* | 48.0 | 31.0 | 85.0 | 68.0 | 67.0 | 66.0 |
| Macaw | 1.2 kg mature adult *A. macao* | 24.0 | 17.0 | 86.0 | 65.0 | 86.0 | 64.0 |

## Checkpoints
`audits/CHECKPOINT-100.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **125 completed research files**.

## Image pipeline status
123 research reports are complete, but **0 verified transparent PNG binaries are committed**. Hellbender, Hornet, Ibex and Kudu have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.