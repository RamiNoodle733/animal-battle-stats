# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 196 / 225
- **Verified full-body transparent PNGs committed:** 0 / 196
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Snapping Turtle / Common Snapping Turtle (*Chelydra serpentina*)
- **Next pending animal:** Snow Leopard
- **Latest completion:** 2026-09-24 09:01 America/Chicago
- **Latest new-animal image status:** Snapping Turtle - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Strongest lead is a 5055×2528 public-domain-marked USFWS exact-species male (~40 lb) on a simple white background; strict all-feet/complete-tail framing and literal adult wording were not simultaneously verified. A separate 6000×4000 USFWS source explicitly says mature male, but direct preview inspection showed tail/distal-foot occlusion. No PNG is claimed.
- **Latest legacy image audit:** Pangolin / Sunda Pangolin (*Manis javanica*). A 1920×1280 CC BY 4.0 exact-species Indonesia photograph has excellent provenance, but visual discovery shows the long tail reaching/exiting the frame and metadata does not explicitly establish adulthood/sex. Status `REPLACEMENT SOURCE NEEDED`.
- **Next legacy image audit:** Peacock. Source-verified animals awaiting binary cutout/commit tooling remain separate from unresolved source-quality cases.
- **Latest checkpoint:** `audits/CHECKPOINT-175.md`; next checkpoint at 200 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force or oral suction pressure is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Qualitative statements and movement-distance telemetry are not silently converted into m/s. Speed is not Agility.
- Stamina separates sustained movement from burst speed, fasting tolerance, longevity and passive environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- Generic roster labels must be resolved to an explicit taxon before physical fields and image requirements can be scientifically coherent.
- Duplicate-roster control remains in force: `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex; `Python` and `Reticulated Python` both resolve to *Malayopython reticulatus* and remain aligned until explicitly separated or merged.

### Snapping Turtle control
*Chelydra serpentina*, healthy prime mature adult male, **12.0 kg**, approximately **65.0 cm whole-animal snout-to-tail length**, standardized height and maximum speed unresolved, representative lifespan **50.0 y** with >100-y maximum evidence in northern mark-recapture, `bite_force_psi: 0.0` unresolved. Herrel et al. directly measured in-vivo bite force in 11 *C. serpentina* at mean **208.98 N** with large body-size variance; force is retained in N and not converted to PSI. Virginia data show males larger than females. USGS field video documented attacks on migratory herring on 79% of approaches at a culvert, with 15% capture success. **Attack 47.0 / Defense 55.0 / Agility 42.0 / Stamina 51.0 / Intelligence 42.0 / Special 53.0.**

### Recent controls retained
- **Sloth Bear:** *Melursus ursinus*, prime mainland adult male, 120.0 kg / 80.0 cm shoulder / 175.0 cm length / speed unresolved / 26.0 y / 0.0 PSI unresolved. Attack 65.0 / Defense 57.0 / Agility 55.0 / Stamina 63.0 / Intelligence 59.0 / Special 65.0.
- **Sloth:** *Bradypus tridactylus*, prime adult male, 4.5 kg / 60.0 cm head-body / height and speed unresolved / provisional 20.0 y / 0.0 PSI unresolved. Attack 22.0 / Defense 25.0 / Agility 34.0 / Stamina 32.0 / Intelligence 42.0 / Special 55.0.
- **Skunk:** *Mephitis mephitis*, prime adult male, 4.5 kg / 70.0 cm total length / height and speed unresolved / 3.0 y / 0.0 PSI unresolved. Attack 23.0 / Defense 34.0 / Agility 53.0 / Stamina 57.0 / Intelligence 58.0 / Special 93.0.
- **Siberian Tiger:** Amur *Panthera tigris*, prime adult male, 190.0 kg / 105.0 cm shoulder / 290.0 cm total / provisional 16.7 m/s sprint / 14.0 y / 0.0 PSI unresolved. Attack 84.0 / Defense 61.0 / Agility 84.0 / Stamina 62.0 / Intelligence 66.0 / Special 61.0.
- **Shoebill:** *Balaeniceps rex*, prime adult male, 5.4 kg / 130.0 cm standing / speed unresolved / 35.0 y / 0.0 PSI unresolved. Attack 34.0 / Defense 21.0 / Agility 62.0 / Stamina 56.0 / Intelligence 55.0 / Special 67.0.
- **Serval:** *Leptailurus serval*, prime adult male, 14.0 kg / 60.0 cm shoulder / 90.0 cm head-body / speed unresolved / 10.0 y / 0.0 PSI unresolved. Attack 41.0 / Defense 24.0 / Agility 92.0 / Stamina 51.0 / Intelligence 61.0 / Special 70.0.
- **Secretary Bird:** *Sagittarius serpentarius*, prime adult male, 4.0 kg / 130.0 cm standing / 130.0 cm bill-to-tail / speed unresolved / 15.0 y / 0.0 PSI unresolved. Attack 36.0 / Defense 27.0 / Agility 83.0 / Stamina 84.0 / Intelligence 61.0 / Special 88.0.
- **Seal:** *Phoca vitulina*, prime adult male, 105.0 kg / 175.0 cm total / speed unresolved / 27.0 y / 0.0 PSI unresolved. Attack 44.0 / Defense 48.0 / Agility 82.0 / Stamina 82.0 / Intelligence 74.0 / Special 84.0.
- **Sea Otter:** *Enhydra lutris*, prime adult male, 36.0 kg / 130.0 cm total / 2.5 m/s institutional underwater maximum / 18.0 y / 0.0 PSI unresolved. Attack 40.0 / Defense 37.0 / Agility 86.0 / Stamina 79.0 / Intelligence 87.0 / Special 89.0.
- **Sea Lion:** *Zalophus californianus*, prime adult male, 300.0 kg / 240.0 cm nose-to-tail / 11.2 m/s institutional swim maximum / 25.0 y / 0.0 PSI unresolved. Attack 55.0 / Defense 49.0 / Agility 84.0 / Stamina 84.0 / Intelligence 78.0 / Special 72.0.
- **Sawfish:** largetooth sawfish *Pristis pristis*, large mature adult female, 300.0 kg / 500.0 cm total / 36.0 y / 0.0 PSI unresolved. Attack 76.0 / Defense 58.0 / Agility 61.0 / Stamina 68.0 / Intelligence 48.0 / Special 88.0.
- **Saltwater Crocodile:** *Crocodylus porosus*, prime adult male, 500.0 kg / 500.0 cm total / 70.0 y / 0.0 PSI unresolved; direct 16,414 N bite retained as N. Attack 92.0 / Defense 83.0 / Agility 52.0 / Stamina 46.0 / Intelligence 58.0 / Special 80.0.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Skunk | 4.5 kg adult male *M. mephitis* | 23.0 | 34.0 | 53.0 | 57.0 | 58.0 | 93.0 |
| Sloth | 4.5 kg adult male *B. tridactylus* | 22.0 | 25.0 | 34.0 | 32.0 | 42.0 | 55.0 |
| Sloth Bear | 120.0 kg adult male *M. ursinus* | 65.0 | 57.0 | 55.0 | 63.0 | 59.0 | 65.0 |
| Snapping Turtle | 12.0 kg mature male *C. serpentina* | 47.0 | 55.0 | 42.0 | 51.0 | 42.0 | 53.0 |

## Checkpoints
`audits/CHECKPOINT-175.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. Next checkpoint: **200 completed research files**.

## Image pipeline status
196 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
