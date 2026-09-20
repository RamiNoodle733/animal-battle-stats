# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 86 / 225
- **Verified full-body transparent PNGs committed:** 0 / 86
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Great Horned Owl (*Bubo virginianus*)
- **Next pending animal:** Great White Shark
- **Latest completion:** 2026-09-19 19:01 America/Chicago
- **Latest new-animal image status:** Great Horned Owl - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 3600x2400 CC BY-SA 4.0 exact-species flight photograph by Peter K Burian was visually inspected. Both wings are in frame, but tucked/obscured feet and the tail/body silhouette prevent strict all-appendage certification, and adulthood/sex are not explicit. A 3321x2476 USGS source explicitly identifies a female but is a nest portrait with the body/feet obscured. No PNG completion claimed.
- **Latest legacy image audit:** Emperor Scorpion - an explicit adult male *Pandinus imperator* CC BY-SA 3.0 Commons photograph was verified for taxon, adulthood, sex and license, but it is only 364x484 and therefore fails the preferred-quality requirement. The existing 3739x2492 reusable exact-species candidate remains much stronger resolution but lacks explicit adulthood and strict every-leg-tip verification. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; skip pending a stronger adult high-resolution source.
- **Next legacy image audit:** Emu (already source-verified, binary pending), so skip source search while binary tooling remains unavailable; next unresolved source-quality audit is Ferret.
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
- **Great Horned Owl control:** exact *Bubo virginianus*. Canonical healthy mature female 1.7 kg / 55.0 cm body length; ADW female mean supports mass and reverse sexual size dimorphism. Institutional 20-40 mph flight range supports `speed_mps` 17.9 only at moderate-low confidence because it is not an instrumented maximum. Typical wild `lifespan_years` 13.0; `bite_force_psi` remains 0.0 because popular talon/beak PSI claims lack a defensible species-specific pressure experiment. Attack 35.0 / Defense 18.0 / Agility 89.0 / Stamina 57.0 / Intelligence 66.0 / Special 80.0. Quiet flight and nocturnal sensory targeting raise Agility/Special without leaking into Raw Power.
- **Gray Wolf control:** exact species *Canis lupus*. Canonical healthy mature male uses Yellowstone's measured population averages: 50.0 kg, 81.0 cm shoulder height, 181.0 cm total length. NPS Yellowstone top speed 56 km/h supports `speed_mps` 15.6. Conflicting bite PSI claims were not promoted. Attack 55.0 / Defense 41.0 / Agility 66.0 / Stamina 89.0 / Intelligence 78.0 / Special 64.0.
- **Gorilla control:** mountain gorilla *G. b. beringei*, healthy fully mature silverback 195.0 kg. Popular speed/bite/strength claims excluded where unsupported. Attack 67.0 / Defense 58.0 / Agility 55.0 / Stamina 59.0 / Intelligence 89.0 / Special 54.0.
- **Golden Eagle control:** exact *Aquila chrysaetos*. Canonical mature female 5.0 kg. Attack 40.0 / Defense 21.0 / Agility 88.0 / Stamina 79.0 / Intelligence 66.0 / Special 70.0. This remains a key raptor comparator for Great Horned Owl.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Gorilla | 195.0 kg mature male *G. b. beringei* | 67.0 | 58.0 | 55.0 | 59.0 | 89.0 | 54.0 |
| Gray Wolf | 50.0 kg mature male *C. lupus* | 55.0 | 41.0 | 66.0 | 89.0 | 78.0 | 64.0 |
| Great Horned Owl | 1.7 kg mature female *B. virginianus* | 35.0 | 18.0 | 89.0 | 57.0 | 66.0 | 80.0 |

## Checkpoints
`audits/CHECKPOINT-075.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **100 completed research files**.

## Image pipeline status
86 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard, or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.