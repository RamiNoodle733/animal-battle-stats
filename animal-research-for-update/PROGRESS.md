# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 198 / 225
- **Verified full-body transparent PNGs committed:** 0 / 198
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Snowy Owl (*Bubo scandiacus*)
- **Next pending animal:** Spectacled Bear
- **Latest completion:** 2026-09-24 11:00 America/Chicago
- **Latest new-animal image status:** Snowy Owl - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 4608×3456 CC BY-SA 4.0 wild Wrangel Island source explicitly identifies an adult female and was directly inspected. Head, body, folded wings and tail are visible, but rocks/vegetation obscure distal feet. No PNG is claimed.
- **Latest legacy image audit:** Pelican / American White Pelican (*Pelecanus erythrorhynchos*). A 2722×1310 USFWS/CC BY 2.0 exact-species source explicitly labeled adult in flight was found, but the original binary timed out during strict appendage inspection. Status `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Peregrine Falcon. Source-verified animals awaiting binary cutout/commit tooling remain separate from unresolved source-quality cases.
- **Latest checkpoint:** `audits/CHECKPOINT-175.md`; next checkpoint at 200 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Qualitative statements, migration telemetry and movement distances are not silently converted into m/s. Speed is not Agility.
- Stamina separates sustained movement from burst speed, fasting tolerance, longevity and passive environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- Generic roster labels must be resolved to an explicit taxon before physical fields and image requirements can be scientifically coherent.
- Duplicate-roster control remains in force: `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex; `Python` and `Reticulated Python` both resolve to *Malayopython reticulatus* and remain aligned until explicitly separated or merged.

### Snowy Owl control
*Bubo scandiacus*, healthy prime **adult female**, **2.15 kg**, **65.0 cm total length**, contextual wingspan ~140 cm, `height_cm: 0.0` unresolved, `speed_mps: 0.0` unresolved, **10.0 y** representative lifespan, `bite_force_psi: 0.0` unresolved. A long Saskatchewan field dataset found females averaging 2.149 kg versus 1.611 kg in males. Spring satellite tracking documented searching up to 108 days and 4,093 km, while a 30-year Alaska diet dataset found lemmings at 99.0% of pellet prey. **Attack 39.0 / Defense 20.0 / Agility 88.0 / Stamina 83.0 / Intelligence 64.0 / Special 78.0.** High Agility/Senses/Special do not inflate absolute Attack or Defense for a 2.15 kg bird.

### Recent controls retained
- **Snow Leopard:** *Panthera uncia*, prime adult male, 50.0 kg / 60.0 cm shoulder / 205.0 cm total incl. tail / speed unresolved / 12.0 y / 0.0 PSI unresolved. Attack 61.0 / Defense 42.0 / Agility 94.0 / Stamina 66.0 / Intelligence 64.0 / Special 78.0.
- **Snapping Turtle:** *Chelydra serpentina*, mature male, 12.0 kg / ~65.0 cm total / speed unresolved / 50.0 y / 0.0 PSI unresolved. Attack 47.0 / Defense 55.0 / Agility 42.0 / Stamina 51.0 / Intelligence 42.0 / Special 53.0.
- **Sloth Bear:** *Melursus ursinus*, prime mainland adult male, 120.0 kg / 80.0 cm shoulder / 175.0 cm length / speed unresolved / 26.0 y / 0.0 PSI unresolved. Attack 65.0 / Defense 57.0 / Agility 55.0 / Stamina 63.0 / Intelligence 59.0 / Special 65.0.
- **Sloth:** *Bradypus tridactylus*, prime adult male, 4.5 kg / 60.0 cm head-body / height and speed unresolved / provisional 20.0 y / 0.0 PSI unresolved. Attack 22.0 / Defense 25.0 / Agility 34.0 / Stamina 32.0 / Intelligence 42.0 / Special 55.0.
- **Skunk:** *Mephitis mephitis*, prime adult male, 4.5 kg / 70.0 cm total / speed unresolved / 3.0 y / 0.0 PSI unresolved. Attack 23.0 / Defense 34.0 / Agility 53.0 / Stamina 57.0 / Intelligence 58.0 / Special 93.0.
- **Siberian Tiger:** Amur *Panthera tigris*, prime adult male, 190.0 kg / 105.0 cm shoulder / 290.0 cm total / provisional 16.7 m/s sprint / 14.0 y / 0.0 PSI unresolved. Attack 84.0 / Defense 61.0 / Agility 84.0 / Stamina 62.0 / Intelligence 66.0 / Special 61.0.
- **Shoebill:** *Balaeniceps rex*, prime adult male, 5.4 kg / 130.0 cm standing / speed unresolved / 35.0 y / 0.0 PSI unresolved. Attack 34.0 / Defense 21.0 / Agility 62.0 / Stamina 56.0 / Intelligence 55.0 / Special 67.0.
- **Serval:** *Leptailurus serval*, prime adult male, 14.0 kg / 60.0 cm shoulder / 90.0 cm head-body / speed unresolved / 10.0 y / 0.0 PSI unresolved. Attack 41.0 / Defense 24.0 / Agility 92.0 / Stamina 51.0 / Intelligence 61.0 / Special 70.0.
- **Secretary Bird:** *Sagittarius serpentarius*, prime adult male, 4.0 kg / 130.0 cm standing / speed unresolved / 15.0 y / 0.0 PSI unresolved. Attack 36.0 / Defense 27.0 / Agility 83.0 / Stamina 84.0 / Intelligence 61.0 / Special 88.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Snapping Turtle | 12.0 kg mature male *C. serpentina* | 47.0 | 55.0 | 42.0 | 51.0 | 42.0 | 53.0 |
| Snow Leopard | 50.0 kg adult male *P. uncia* | 61.0 | 42.0 | 94.0 | 66.0 | 64.0 | 78.0 |
| Snowy Owl | 2.15 kg adult female *B. scandiacus* | 39.0 | 20.0 | 88.0 | 83.0 | 64.0 | 78.0 |

## Checkpoints
`audits/CHECKPOINT-175.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. Next checkpoint: **200 completed research files**.

## Image pipeline status
198 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
