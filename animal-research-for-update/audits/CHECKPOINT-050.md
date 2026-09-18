# Cross-roster recalibration checkpoint: 50 researched animals

**Checkpoint scope:** first 50 completed staging research files, African Elephant through Cockatoo. This is a staging-only normalization audit. No production animal data, site code, or live images were changed.

## Audit questions

### Stat inflation and compression
The current staging set preserves large absolute gaps. Tiny arthropods and small vertebrates are not being pushed into large-predator physical bands merely because of impressive proportional feats. Recent controls are especially useful: Chameleon remains Attack 12.0 / Defense 8.0 at roughly 45 g; Cockatoo remains Attack 21.0 / Defense 13.0 at roughly 0.8 kg; Capuchin Monkey is Attack 23.0 / Defense 17.0 at 4 kg; Caracal is Attack 44.0 / Defense 25.0 at 17 kg; Clouded Leopard is Attack 49.0 / Defense 27.0 at 22 kg; Cape Buffalo is Attack 76.0 / Defense 70.0 at roughly 750 kg. No forced rescaling is warranted at this checkpoint.

### Inverted comparisons
No clear inversion was identified that justifies editing a prior completed report now. The main comparisons checked were small-specialist vs larger-predator Attack/Defense, Cheetah speed/agility vs physical offense, Chimpanzee cognition vs strength folklore, and Cape Buffalo vs small/medium mammals. Continue revisiting these as more bears, big cats, crocodilians, hippos, rhinos and elephants enter the comparison set.

### Proportional-strength leakage
The anti-leakage rule is holding in the recent set. Camel Spider's measured genus-level bite force is not turned into high absolute Attack; Cockatoo's 167.3 N calculated bite is not treated as heavyweight weaponry; Chimpanzee muscle performance is not represented as folklore-level super-strength; Clouded Leopard's extreme canine specialization does not erase its 22 kg body-mass ceiling.

### Speed versus agility
Cheetah remains the clearest calibration anchor: directly measured wild sprint data support exceptional Speed and acceleration/braking evidence supports Agility 97.0. Animals lacking defensible maximum-speed data retain `speed_mps: 0.0` rather than receiving fabricated factual maxima. Cockatoo receives high maneuverability/Agility from flight and climbing mechanics without reviving the old unsupported 36 km/h value.

### Double-counting
No correction is required now, but Special remains the highest-risk category. Flight alone should not automatically generate a high Special score when it is already driving Agility. Cockatoo's Special 76.0 is justified by the combined bill-foot manipulation, flight access and field-demonstrated learned technical behavior, not flight alone. Clouded Leopard's Special remains tied to unusual arboreal mechanics and canine specialization rather than simply repeating Attack.

### Stamina normalization
This remains a watch area. Desert tolerance, migration, pursuit endurance, daily travel and resistance to dehydration are not interchangeable. Camel's Stamina 91.0 reflects sustained desert physiology and travel but should continue to be checked against future endurance specialists. Cheetah's Stamina 43.0 appropriately separates explosive sprinting from prolonged output.

### Weak sources and fabricated PSI
The staging pass is improving here. Unsupported bite-pressure claims are being removed rather than preserved. Force in newtons is not converted to PSI without contact area. Cockatoo is a useful new example: peer-reviewed *C. galerita* bite force of 167.3 ± 24.2 N is retained as force while `bite_force_psi` stays 0.0. The same discipline should continue across the roster.

### Duplicate ability concepts
No exact duplicate concept currently requires correction, but naming should continue distinguishing mechanism from generic labels. Avoid repeated vague abilities such as "Quick Reflexes," "Survival Instinct," "Powerful Bite," or "Thick Hide" when a species-specific mechanism can be named and evidenced. Abilities must remain exactly two per report and traits exactly two.

## Image-quality checkpoint

Research completion and image completion remain separate. At 50 research files, the verified full-body transparent PNG count is still **0 / 50** because the connected GitHub contents writer accepts UTF-8 text only. This is a tooling limitation, not image completion. Several reports have reuse-permitted full-body source photographs, but no source URL, JPEG, white-background image, or uninspected cutout is counted as a finished PNG.

The retroactive queue is still necessary because strict `IMAGE_REQUIREMENTS.md` rejects cropped tails/feet, juveniles, ambiguous species, groups, weak effective subject resolution, and sources where adulthood or complete anatomy cannot be verified.

## Corrections made at checkpoint

**No prior numerical research file was edited.** The audit found watch areas but no sufficiently clear inversion or inflation error to justify changing an earlier staging rating without new species-specific evidence. Avoiding unnecessary churn is preferable to forced checkpoint edits.

## Next-checkpoint priorities

1. Reassess upper Attack/Defense bands as more large predators, hippos, rhinos, elephants and other megafauna are completed.
2. Maintain large physical gaps between sub-kilogram animals, medium predators, great apes and megafauna.
3. Keep top speed separate from maneuverability and acceleration.
4. Keep force measurements separate from pressure unless contact area is available.
5. Audit Special for ordinary adaptations being counted twice.
6. Audit Stamina by physiological mode rather than one generic endurance intuition.
7. Continue checking ability/trait names for duplicate concepts across species.
8. Continue the separate legacy image queue until real transparent RGBA PNG binaries can be produced and committed.

**Next scheduled recalibration checkpoint:** 75 completed research files.
