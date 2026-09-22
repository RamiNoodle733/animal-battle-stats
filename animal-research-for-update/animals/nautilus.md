# Nautilus Research Overhaul

## 1. Identity and canonical specimen
- **Roster name:** Nautilus
- **Canonical taxon:** Chambered nautilus, *Nautilus pompilius* Linnaeus, 1758, family Nautilidae.
- **Living/extinct:** Living marine cephalopod.
- **Canonical combat specimen:** healthy mature **male**, approximately **0.55 kg** with a **15.0 cm shell diameter**. This is a representative fighting-sex selection, not a record specimen.
- **Why male:** wild Osprey Reef data found males mature at a larger shell diameter than females (131.9 ± 2.6 mm versus 118.9 ± 7.5 mm), and federal review states males consistently grow larger. Fiji work likewise found the smallest morphologically mature male at 496 g while mature females occurred around 350-400+ g.
- **Population variation:** size at maturity varies geographically. Osprey Reef animals mature smaller than some Samoa/Philippines populations. NOAA gives a broad mature shell range of 5-9 in (12.7-22.9 cm), so the canonical 15 cm male is intentionally non-maximal.

## 2. Physical measurements and ranges
### Mass
A Fiji sample of 46 *N. pompilius* ranged **347-630 g air weight**; 38 were male, and the smallest male showing mature shell modifications weighed **496 g**. NOAA gives adult weight as at least 2 lb (~0.91 kg), while other populations can be larger. Because population differences and variable chamber water complicate mass comparisons, **0.55 kg** is used as a conservative representative mature male rather than treating a larger regional animal as universal.

### Shell diameter and body dimensions
Osprey Reef mean size at maturity was **131.9 mm in males** and **118.9 mm in females**. NOAA states mature shells are typically **5-9 in (12.7-22.9 cm)**. SeaLifeBase reports maximum shell diameter **22.2 cm** and maximum published weight 1.7 kg. Canonical `length_cm` is therefore **15.0**, explicitly representing shell diameter rather than stretched tentacle span. A terrestrial-style height is not meaningful, so `height_cm` is **0.0**.

### Swimming speed
A direct Fiji study measured **maximum swimming rates of 0.25 m/s**. Unlike many roster speed values, this is a species-specific measured maximum in captured animals, so canonical `speed_mps` is **0.25**. It should not be confused with vertical migration rate or with an assumed physiological record for every population.

### Lifespan and maturity
Osprey Reef recaptures estimated about **15.5 years to maturation** and demonstrated survival beyond **20 years**. NOAA summarizes lifespan as **15-20 years** and maturity around 10-15 years. Canonical `lifespan_years` is **20.0**, best read as a conservative demonstrated adult longevity scale, not a hard maximum.

### Bite force and feeding apparatus
The nautilus has a sharp beak and radula capable of tearing crustaceans, fish and carrion, but no defensible *N. pompilius* bite-pressure measurement was recovered. `bite_force_psi` is **0.0**. No force or generic cephalopod value is converted into fabricated PSI.

### Shell and pressure tolerance
The external aragonitic shell is a real defensive structure and buoyancy system. Pressure experiments on mature/intermediate shells found implosion around **30-70 atm**, equivalent to roughly **300-700 m**, while other field/cage work places implosion around 730-900 m and natural abundance to about 600 m in Fiji. Variation reflects shell condition and experimental context. This is meaningful armor against small attacks, but it is brittle mineral armor rather than mammalian-style toughness.

### Tentacles, hood and buoyancy
More than 90 suckerless tentacles use grooves, ridges and sticky secretions for tactile/chemical exploration and prey grip. The animal can retract into its shell and close the aperture with a tough leathery hood. Gas/fluid regulation in shell chambers controls buoyancy, while a directional funnel provides jet propulsion.

## 3. Canonical proposed factual fields
```yaml
weight_kg: 0.55
height_cm: 0.0
length_cm: 15.0
speed_mps: 0.25
lifespan_years: 20.0
bite_force_psi: 0.0
```
**Confidence:** taxonomy high; Osprey/Fiji size and Fiji speed high for those populations; representative mass moderate because populations differ; longevity high for >20-year scale; bite PSI correctly unresolved.

## 4. Combat biology
### Weapons and offensive mechanics
The primary offensive system is a cluster of numerous adhesive, suckerless tentacles that seize and manipulate small prey toward a hard beak and radula. This is excellent for shrimp, crabs, carrion and similarly small targets but has negligible absolute stopping power against medium or large roster animals. Unlike an octopus, the nautilus lacks muscular sucker-lined arms specialized for powerful grappling.

### Defense and durability
Its external chambered shell is the principal defense. When threatened, the soft body retracts and the leathery hood closes the aperture. This can frustrate small predators and abrasion, but shell-breaking fishes and octopuses are documented predators. The shell's pressure limits also demonstrate that mineral strength is finite.

### Locomotion and maneuverability
The funnel can be aimed so the animal swims forward, backward or sideways by jet propulsion. Controlled hydrodynamic work shows distinct jet modes and directionally useful thrust, but the measured 0.25 m/s maximum is slow in absolute terms. Near substrate it can also use tentacles to pull itself along rock. Neutral/near-neutral buoyancy reduces the energy needed simply to remain in the water column.

### Endurance
Nautiluses conduct regular diel vertical movements, descending into deeper reef habitat by day and ascending at night to forage. Their slow movement and buoyancy system favor economical persistence rather than repeated high-power bursts. Stamina is therefore above their raw speed, but not inflated to migratory fish or marine-mammal levels.

### Senses
The pinhole eyes lack a lens and provide much poorer image formation than coleoid cephalopod eyes. Chemical and tactile sensing are more important. NOAA describes chemosensors on the tentacles for detecting food scents, and ADW describes reliance on smell and tentacle contact. This is useful in dim reef habitat but not a high-resolution long-range targeting suite.

### Intelligence and tactics
Nautiluses possess a cephalopod nervous system and can navigate complex vertical reef habitat, but the evidence recovered here does not justify importing octopus-level problem solving. Their combat behavior is mostly sensory search, withdrawal, gripping and slow repositioning rather than flexible tactical predation.

### Feeding, fighting and predator defense
They are nocturnal opportunistic scavengers and predators, feeding primarily on crustaceans plus fish and carrion. Strong evidence for elaborate intraspecific combat was not recovered. Predator defense centers on retreat into the shell and depth/habitat use. Known predators include sharks, bony fishes and octopuses; shell-boring and shell-breaking defeat the armor.

### Environmental strengths
- Deep reef slopes with dim light, where chemosensation and buoyancy are useful.
- Complex rocky structure that permits slow tactile navigation.
- Water-column matchups where neutral buoyancy reduces station-keeping cost.

### Environmental limitations and weaknesses
- Very low absolute speed and acceleration compared with active predatory fishes.
- Small body mass and low absolute offensive force.
- Soft exposed head/tentacles when feeding.
- Shell can crack or implode under sufficient mechanical/hydrostatic stress.
- Poor visual resolution compared with many active marine predators.
- Entirely aquatic.

### Matchup archetypes
- **Strongest against:** tiny soft-bodied or lightly protected aquatic animals it can physically seize and bring to the beak.
- **Mixed against:** similarly sized slow invertebrates, where shell protection may outweigh low attack output.
- **Poor against:** shell-crushing fishes, octopuses capable of boring/accessing the shell, and essentially all much larger active predators.

## 5. Proposed ABS substats
| Substat | Score | Evidence-based justification |
|---|---:|---|
| Size | **10.0** | Roughly 0.55 kg is tiny on the full 225-animal absolute scale. |
| Raw Power | **9.0** | Useful small-prey manipulation but negligible absolute force compared with vertebrate fighters. |
| Weaponry | **17.0** | Beak, radula and many gripping tentacles are functional but short-range and low-force. |
| Protection | **38.0** | A hard external shell plus retractable hood is substantial protection for a sub-kilogram animal without being treated as megafaunal armor. |
| Toughness | **24.0** | Soft body is vulnerable once accessed; brittle shell and known shell-breaking predators limit resilience. |
| Speed | **8.0** | Direct measured maximum 0.25 m/s is extremely slow on the roster. |
| Maneuverability | **51.0** | Directional funnel enables forward/backward/sideways control and buoyancy helps three-dimensional positioning, despite low speed. |
| Endurance | **64.0** | Routine diel depth migration and low-cost buoyancy support prolonged activity, not high-output pursuit. |
| Recovery | **31.0** | No exceptional regeneration or rapid trauma recovery established. |
| Tactics | **42.0** | Functional nocturnal foraging and retreat behavior without evidence for advanced flexible combat tactics. |
| Senses | **58.0** | Strong chemical/tactile search partly compensates for primitive pinhole vision. |
| Ferocity | **20.0** | Opportunistic feeder/scavenger with little evidence of dangerous conspecific combat. |
| Abilities | **80.0** | Chambered buoyancy, external shell/hood, many chemosensory tentacles and directional jet propulsion form an unusual integrated system. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **14.0** | Effective against small prey through grip plus beak, but absolute damage output is very low. |
| **Defense** | **35.0** | External shell and retractable hood are real armor, sharply above similarly small soft-bodied animals, but shell breakers defeat it. |
| **Agility** | **50.0** | Fine three-dimensional directional control offsets extremely low speed; speed is not substituted for agility. |
| **Stamina** | **65.0** | Buoyancy economy and daily vertical movements support sustained low-output movement. |
| **Intelligence** | **46.0** | Competent sensory navigation and foraging, but no basis for octopus-like cognitive inflation. |
| **Special** | **85.0** | External chambered buoyancy shell, retractable hood and unusual chemosensory tentacle array are rare, matchup-relevant biology. |

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Chambered Buoyancy Vault**: gas/fluid regulation across the chambered shell controls buoyancy while the mineral shell simultaneously provides physical protection, reducing station-keeping cost and creating a defensive refuge.
2. **Chemotactile Tentacle Net**: more than 90 suckerless, sticky, ridged tentacles sample chemical and tactile cues while gripping food and funneling it toward the beak.

### Unique traits
1. **Hood-Sealed Retreat**: the soft head can withdraw into the shell and a tough leathery hood closes the aperture, turning an exposed feeder into a compact shelled target.
2. **Pinhole-Eye Navigator**: lensless pinhole eyes provide limited vision, forcing unusually heavy reliance on chemical and tactile sensing in dark reef habitat.

## 8. Expanded profile
### Habitat and range
*N. pompilius* occupies Indo-West Pacific continental-shelf and slope habitats associated with coral reefs, from the Andaman region through the Philippines and Papua New Guinea to Fiji and northern Australia. Depth use varies geographically; Australian Museum records extend to about 750 m, while Osprey Reef research recorded animals between roughly 100 and 800 m and juveniles feeding in the same 200-610 m depth band as adults.

### Diet and ecology
The chambered nautilus is primarily a nocturnal scavenger and opportunistic predator. Crustaceans are especially important, with fish and carrion also consumed. Rather than relying on sharp eyesight, it follows chemical information with specialized tentacles and physically transfers food to its beak and radula.

### Social structure and reproduction
The species is not treated as a cooperative fighter. Sexes are separate, and males use modified appendages to transfer spermatophores. Reproduction is exceptionally slow for a cephalopod: maturity takes roughly 10-15+ years, females lay few eggs, and incubation lasts about a year. Osprey Reef data support a K-selected life history with maturation around 15.5 years.

### Conservation and human interaction
NOAA lists the chambered nautilus as **Threatened under the U.S. Endangered Species Act** and all nautiluses are regulated under **CITES Appendix II**. International shell trade is a major threat. Slow growth, late maturity, low reproductive output and geographically isolated populations make removal difficult to replace.

### Major adaptations
- Chambered external shell combining buoyancy regulation and armor.
- Siphuncle-mediated chamber-fluid regulation.
- Directional funnel jet propulsion.
- More than 90 suckerless adhesive/chemosensory tentacles.
- Retractable soft body and protective hood.
- Pinhole eyes adapted to a sensory system that emphasizes smell/touch.
- Long lifespan and repeated reproduction rather than the short semelparous life typical of many coleoids.

### Genuine fun facts
- A direct Fiji study measured a maximum swimming rate of only **0.25 m/s**.
- Wild Osprey Reef recaptures indicate a lifespan **beyond 20 years**.
- Maturation may take about **15.5 years**, extraordinarily late for a cephalopod.
- Adults can have roughly **30 or more shell chambers**, while the animal lives only in the newest outer chamber.
- The shell is not merely decorative: pressure experiments show it can withstand tens of atmospheres before implosion.
- The nautilus has **more than 90 tentacles**, but no suckers.
- Its eye is a true biological pinhole camera without a lens.
- Unlike octopuses and squids, it retains a large external shell.

### Concise site-ready summary
The chambered nautilus is a slow, shelled cephalopod whose strength lies in defense and specialization rather than raw attack. A mature male weighs well under a kilogram and swims at only about 0.25 m/s, but its chambered shell regulates buoyancy, its hood can seal the vulnerable body inside, and more than 90 chemosensory tentacles locate and grip food in dark reef habitat.

### Rich narrative profile
The nautilus is one of the roster's clearest examples of why absolute combat scoring and biological specialization must remain separate. Its beak can dismantle crustaceans and its dense tentacle array can hold prey, but a roughly half-kilogram animal cannot be scored as though proportional cleverness creates large-animal force. Attack therefore stays low.

Defense tells a different story. The nautilus carries a mineral chambered shell that functions simultaneously as refuge and hydrostatic buoyancy apparatus. When danger approaches, the animal can retract its soft tissues and close the opening with a leathery hood. Pressure experiments show that the shell can tolerate tens of atmospheres, yet its limits are equally informative: octopuses and shell-breaking fishes can defeat it, and mature shells eventually implode at sufficient depth.

Its movement is deliberate rather than athletic. Jet propulsion gives multidirectional control, while buoyancy lets the animal move through a three-dimensional reef environment without continuously supporting its weight. Direct Fiji measurements put maximum swimming at only 0.25 m/s. That makes it a poor pursuer but not an immobile one. At night it moves upward to forage, then returns to deeper refuge by day.

The sensory profile is equally distinctive. Lensless pinhole eyes are relatively crude, so chemical and tactile information from the numerous tentacles becomes central. In a dark reef crevice, that system works. In an open chase against a fast visual predator, it does not. The resulting ABS profile is a low-power armored specialist with moderate maneuvering control, good low-output stamina, and very high Special because its shell, buoyancy, hood and sensory tentacle array have few close analogues elsewhere in the roster.

### Future structured-field proposals
- `canonical_sex`: male
- `shell_diameter_cm`: 15.0
- `shell_implosion_depth_m`: range/context field rather than a single universal number
- `locomotion_mode`: jet propulsion / buoyancy-assisted
- `armor_type`: chambered aragonitic external shell
- `maturity_age_years`: ~15.5 at Osprey Reef
- `evidence_grade`: per factual field

## 9. Mandatory image requirement
- `image_status`: **LICENSE UNVERIFIED - DO NOT COMMIT**
- `png_repo_path`: `animal-research-for-update/images/nautilus.png` (not created)
- `source_page_url`: https://animaldiversity.org/collections/contributors/john_white/john_white_fish/nautilus_pompilius/
- `original_photo_url`: not redistributed; permission required from photographer John White
- `file_format_verified`: source is identified by ADW as a real photograph; final PNG absent
- `alpha_verified`: no
- `full_body_verified`: candidate is a live exact-species photograph, but strict all-tentacle completeness was not independently certified at original resolution in this run
- `adult_verified`: **yes**, ADW explicitly labels life stage `adult/sexually mature`
- `sex_verified_or_unknown`: unknown
- `license_status`: permission required; ADW says it may not be downloaded/used without copyright-holder permission except educational fair use
- `notes`: This candidate is valuable because exact taxon and adulthood are explicit. A separate 3264x2448 Commons CC BY-SA 4.0 Aquarium Finisterrae photograph provides strong reusable high-resolution exact-species imagery, but adulthood is not explicit. NOAA also provides an exact-species real photograph from the National Marine Sanctuary of American Samoa, but adulthood and strict visibility of the many tentacles are not established. No source simultaneously satisfied mandatory adult verification, strict whole-animal visual certification, high resolution and redistribution permission, so no PNG completion is claimed. Current connected GitHub writers are text-only.

## 10. Evidence and source ledger
| Source | Direct URL | Supports | Finding/context | Confidence / caveats |
|---|---|---|---|---|
| NOAA Fisheries, Chambered Nautilus | https://www.fisheries.noaa.gov/species/chambered-nautilus | taxonomy, mature size, lifespan, diet, range, protection status, shell/tentacles | mature shell 5-9 in; at least 2 lb; 15-20 y; >90 tentacles; ESA Threatened; CITES II | High agency synthesis; broad range values combine populations. |
| Dunstan, Ward & Marshall 2011, PLOS ONE / Adelaide repository | https://digital.library.adelaide.edu.au/items/509c8bde-5267-4ca3-9c0d-5ce3576029b6 | dimorphism, maturity, growth, depth, longevity | males mature 131.9±2.6 mm, females 118.9±7.5 mm; ~15.5 y to maturity; lifespan >20 y; 200-610 m juvenile/adult feeding observations | High peer-reviewed wild population; Osprey Reef-specific. |
| Ward et al. 1977, Paleobiology | https://www.cambridge.org/core/journals/paleobiology/article/abs/notes-on-animal-weight-cameral-fluids-swimming-speed-and-color-polymorphism-of-the-cephalopod-nautilus-pompilius-in-the-fiji-islands/4F865B0D21B705D75286EB62C6E67DD9 | weight, mature sex comparison, speed | 347-630 g sample; smallest mature male 496 g; maximum swimming 0.25 m/s | High primary study; Fiji population and captive measurement context. |
| Saunders & Wehman, Paleobiology | https://www.cambridge.org/core/journals/paleobiology/article/abs/shell-strength-of-nautilus-as-a-depth-limiting-factor/7BB2E92FB7754B71AD4807080225CD1C | shell strength | mature/intermediate shells imploded around 30-70 atm / 300-700 m equivalent | High experimental; dry/postmortem shell condition affects results. |
| Westermann & Ward, Paleobiology | https://www.cambridge.org/core/journals/paleobiology/article/abs/septum-morphology-and-bathymetry-in-cephalopods/5D0DC84EFC3572132164F3C5C51E0C1F | shell strength/depth conflict | Fiji animals abundant to ~600 m; cage implosion 730-900 m; calculated septal tensile strength 110-140 MPa | High; conflicts with some dry-shell tests due condition/method. |
| Monterey Bay Aquarium | https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/chambered-nautilus | tentacles, beak/radula, jet control, hood, depth behavior, reproduction | >90 sticky tentacles; forward/back/sideways funnel steering; hood seals shell; deep day/shallow night | High zoo synthesis. |
| Australian Museum | https://australian.museum/learn/animals/molluscs/nautilus-pompilius/ | range, habitat, feeding, sensory ecology | Indo-West Pacific, reef slopes to ~750 m, crustacean-focused scavenging/predation, sensory tentacles | High museum synthesis. |
| Animal Diversity Web species account | https://animaldiversity.org/accounts/Nautilus_pompilius/ | behavior, vision, feeding | lensless eyes; smell/touch important; tentacle-assisted rock movement; nocturnal | Moderate, older synthesis. |
| ADW John White image record | https://animaldiversity.org/collections/contributors/john_white/john_white_fish/nautilus_pompilius/ | adult image candidate | exact *N. pompilius*, live photo, explicitly adult/sexually mature | Adult high; redistribution prohibited without permission. |
| Commons Aquarium Finisterrae photograph | https://commons.wikimedia.org/wiki/File:Nautilus_pompilius.006_-_Aquarium_Finisterrae.JPG | reusable alternate image | exact species, 3264x2448, CC BY-SA 4.0 | Adult status not explicit. |

## 11. Confidence and source conflicts
**High confidence:** species identity, shell/tentacle anatomy, Osprey Reef dimorphism and late maturity, Fiji 0.25 m/s measured maximum, deep-reef ecology, >20-year longevity scale, and absence of defensible bite PSI. **Moderate confidence:** 0.55 kg / 15 cm canonical male because geographic populations differ and chamber water changes measured mass. **Low confidence:** any universal maximum depth or shell failure threshold because experimental shell condition and population morphology materially change results.

The principal numerical conflict is body size. Osprey Reef males mature near 13.2 cm, Samoa work reports mature males around 17.5 cm and 861 g, and NOAA gives 12.7-22.9 cm as a general mature range. ABS therefore uses a modest 15 cm, 0.55 kg male rather than forcing a single regional maximum into the canonical specimen. Shell implosion estimates likewise remain a range rather than a false universal threshold.

## 12. Cross-animal normalization notes
Nautilus **Attack 14.0** is deliberately close to Naked Mole Rat 14.0 in the full-roster absolute band, but for different reasons: the nautilus has a beak and gripping tentacles while remaining only about half a kilogram and extremely slow. It remains below Mongoose 20.0 and far below Giant Moray 49.0. **Defense 35.0** is unusually high for its mass because a real mineral shell changes survivability, yet stays below large armored/tough megafauna. **Agility 50.0** rewards multidirectional control rather than speed, avoiding the speed/agility error. **Stamina 65.0** reflects economical buoyancy and diel migration, not high-output athleticism. **Special 85.0** can legitimately exceed many much larger animals because Special measures rare matchup-changing mechanisms rather than absolute force; it remains below the extreme specialized systems of Naked Mole Rat 96.0 and Mantis Shrimp 97.0.