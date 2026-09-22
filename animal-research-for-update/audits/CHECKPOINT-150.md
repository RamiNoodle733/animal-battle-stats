# Cross-roster recalibration checkpoint: 150 completed animals

**Trigger:** Osprey completes research file 150 / 225.

## Scope
This checkpoint applies the mandatory 25-animal audit criteria to the current staging controls and recent reports, with emphasis on the 125-150 interval. It checks stat inflation, inverted comparisons, score compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sources and duplicate ability concepts. This is a staging audit only and changes no production data.

## Findings

### 1. Stat inflation
No broad upward drift requiring correction was found in the recent controls. Large gaps remain visible: Osprey Attack 31.0, Golden Eagle 40.0, Ocelot 38.0, Orangutan 57.0, Oryx 60.0, Moose 69.0 and Orca 94.0. Small specialists can still score highly in Agility or Special without receiving large-animal Attack/Defense values.

### 2. Inverted comparisons
No clear evidence-based inversion requiring immediate correction was identified in the recent comparison chain. Osprey remains below Golden Eagle in Attack and Raw Power; Oryx remains below Moose in Attack; Orca remains far above terrestrial mid-sized animals in absolute damage capacity.

### 3. Compression
Physical categories preserve meaningful scale. Recent small animals are not clustered near large predators. The widest legitimate clustering occurs in cognition/agility/specialization categories where body mass is not the direct governing variable.

### 4. Proportional-strength leakage
No correction required. Osprey's fish-lifting/gripping specialization is reflected mainly in Weaponry/Special rather than Raw Power. Naked Mole Rat's extraordinary proportional bite performance remains low in absolute Attack. Nautilus remains low in Attack despite unusual shell/locomotor biology.

### 5. Speed versus agility
The recent reports consistently leave `speed_mps = 0.0` where a defensible species-specific maximum is absent and do not substitute an unsupported internet sprint/dive claim. Osprey receives Agility 87.0 based on flight control and plunge geometry, not a claimed dive speed. Narwhal similarly does not convert track speed into physiological maximum.

### 6. Double-counting
No score correction required. Flight-based avoidance is not treated as armor in Osprey or Golden Eagle. Orca group hunting informs tactics/intelligence but does not multiply individual Raw Power. Oryx heat/water physiology informs Stamina/Special without being treated as physical protection. Osprey's reversible toe/spicules and plunge physiology are integrated into Special while Attack remains mass-constrained.

### 7. Weak sources and fabricated precision
The interval has generally improved source discipline. Unsupported PSI values are left at 0.0, including Osprey, Orangutan, Oryx and Orca. Record/maximum values are separated from representative canonical specimens. The most persistent weakness is lifespan semantics: some sources report maxima while the site schema has only one lifespan field. Future migration should define whether `lifespan_years` means representative wild lifespan or documented maximum.

### 8. Duplicate ability concepts
No exact duplicate ability names requiring correction were identified in the recent control set. Recurrent biological concepts such as flight, heat tolerance, gripping and sensory specialization are species-specific mechanisms rather than copied generic abilities. Continue avoiding generic names like `Quick Reflexes` and `Survival Instinct` from the legacy catalogue.

## Image-quality checkpoint
Research completion and image completion remain separate. At 150 completed research reports, the verified transparent-PNG count is still 0 because connected GitHub write actions accept UTF-8 text rather than arbitrary PNG binary. Several reusable full-body source photographs are verified and queued for cutout/commit. No URL, JPEG, preview, opaque checkerboard or pseudo-PNG is counted as completed.

## Corrections made
**No prior research score required correction at this checkpoint.** Osprey was normalized during creation against Golden Eagle and broader recent controls. Existing uncertainties remain documented rather than being replaced with false precision.

## Watch list for checkpoint 175
- Define production semantics for lifespan before migration.
- Continue watching aerial animals for flight/Agility/Special double-counting.
- Continue checking tiny venomous/electric/specialist animals for high Special but low absolute physical Attack/Defense.
- Revisit any PSI value that lacks measured force plus defensible contact-area methodology.
- Preserve explicit ecotype/subspecies/population context for wide-ranging species.
- Audit ability names for conceptual duplication as the roster grows.

**Next mandatory checkpoint:** 175 completed research files.