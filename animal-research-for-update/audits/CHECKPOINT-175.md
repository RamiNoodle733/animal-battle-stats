# Cross-roster recalibration checkpoint: 175 research files

**Checkpoint:** 175 / 225 staging reports complete, through Red-Eyed Tree Frog.

This is a concise normalization checkpoint under `CALIBRATION.md`, not a production migration. Ratings remain proposed research values on an absolute 0.1-100.0 roster-wide scale.

## Audit checks

### 1. Stat inflation and compression
Recent controls continue to preserve large absolute gaps. Red-Eyed Tree Frog (14 g) Attack 3.0, Golden Poison Frog (6 g) Attack 6.0, Bullfrog (~0.5 kg) Attack 14.0, Red Fox (7.2 kg) Attack 28.0, Reticulated Python (50 kg) Attack 72.0 and Polar Bear (500 kg) Attack 78.0 do not collapse tiny and large animals into one predator band. Poison Dart Frog remains a deliberate exception only in Special because toxin is a distinct matchup-changing mechanism.

**Result:** no score correction required at this checkpoint.

### 2. Inverted comparisons
- Red-Eyed Tree Frog correctly stays far below Bullfrog in absolute Attack and physical Defense despite excellent arboreal maneuverability.
- Python and Green Anaconda remain close enough to avoid arbitrary separation between similar giant constrictors.
- Polar Bear remains materially above Black Bear in Attack/Defense while not automatically dominating Agility or Intelligence.
- Pufferfish's toxin/inflation specialization raises Special/Defense without making it a stronger active attacker than similarly sized predatory vertebrates.

**Result:** no clear inversion requiring file edits found in the current control chain.

### 3. Proportional-strength leakage
Tiny animals are not being rewarded as if proportional force were absolute force. Red-Eyed Tree Frog Raw Power 0.5 and Attack 3.0 are the explicit 175 checkpoint control. Bullfrog remains low in Raw Power despite exceptional jump mechanics. Hercules Beetle and other arthropod files should continue to be watched during final normalization for this failure mode.

**Result:** current sampled controls pass.

### 4. Speed versus agility
Recent files consistently separate measured travel speed from maneuverability. Rattlesnake strike velocity is not stored as travel `speed_mps`; Raven's GPS movement rate is not called an aerodynamic maximum; Red-Eyed Tree Frog receives high Agility from branch control/adhesion while `speed_mps` remains 0.0.

**Result:** no correction required.

### 5. Double-counting
- Red-Eyed Tree Frog adhesion/startle biology raises Maneuverability/Abilities/Special, not Raw Power or armor.
- Poison Dart Frog batrachotoxin drives Abilities/Special and deterrent Defense, not active Attack.
- Pufferfish tetrodotoxin is not treated as injected offensive venom.
- Raven cognition is not used to inflate physical Attack.

**Result:** sampled recent reports pass.

### 6. Weak sources and unsupported PSI
The active rule remains: no bite-force PSI from unsourced internet figures or force-to-pressure conversion without contact area. Recent Raccoon, Python, Rattlesnake, Red Fox, Red Panda and Red-Eyed Tree Frog reports retain 0.0 where defensible PSI is unavailable. Generic speed claims are likewise rejected when no species-specific maximum can be defended.

**Result:** no correction required.

### 7. Duplicate ability concepts
Repeated biological mechanisms such as camouflage, adhesive grip, venom/toxin, constriction and flight necessarily recur across species, but named abilities should describe species-specific implementations rather than identical generic labels. Recent files remain sufficiently distinct. Final 225 audit should search all ability names mechanically for exact/near duplicates before migration.

**Result:** no immediate rename required.

### 8. Duplicate roster taxa
Known duplicate-resolution risks remain:
- `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex.
- `Python` and `Reticulated Python` currently resolve to *Malayopython reticulatus*.

These pairs must not drift into invented biological differences. They remain flagged for the final roster audit or explicit taxonomic reassignment.

## Image-quality checkpoint
Research completion and image completion remain separate. At 175 research files, **0 verified full-body transparent PNG binaries** are committed because the connected GitHub content writer is UTF-8 text-only. Several animals have verified reusable full-body sources awaiting binary cutout/commit tooling. No source URL or JPEG is counted as a finished PNG.

## Checkpoint conclusion
The 175-file sample audit found no warranted score edits. The most important controls remain absolute scaling for tiny animals, strict separation of speed and agility, no unsupported PSI, and preventing toxins/special mechanisms from leaking into unrelated headline stats. Next scheduled cross-roster checkpoint: **200 completed research files**, followed by the full 225 normalization audit.