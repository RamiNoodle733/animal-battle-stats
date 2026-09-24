# Seal — *Phoca vitulina*

## 1. Identity and canonical specimen
- **Roster name:** Seal
- **Scientific name:** *Phoca vitulina* Linnaeus, 1758, harbor/common seal, family Phocidae.
- **Living/extinct:** Living.
- **Schema check:** the live Seal profile explicitly names *Phoca vitulina*. Legacy production values are treated only as schema context, not research anchors.
- **Canonical combat specimen:** healthy prime **adult male**, **105.0 kg**, **175.0 cm total length**. Males are somewhat larger than females, but dimorphism is modest compared with California sea lions.
- **Variation:** NOAA gives adults broadly as 180–285 lb (81.6–129.3 kg) and about 5–6 ft (152–183 cm). ADW reports 80–170 kg and 160–190 cm and explicitly notes male-larger dimorphism. Atlantic population summaries can be smaller (roughly 75–104 kg males), so 105 kg is a strong representative male without using an upper extreme.

## 2. Physical measurements
### Mass, length and body form
Harbor seals are compact true seals with a rounded head, short foreflippers, paired hind flippers and no external ear pinnae. NOAA's species account gives adult mass **180–285 lb** and length **5–6 ft**. NatureServe gives about **136 kg / 1.7 m** as species-level reference values, while ADW reports broader 80–170 kg and 160–190 cm values. The canonical 105 kg / 175 cm male is deliberately representative rather than record-sized.

A standardized standing height is not biologically useful for a phocid whose body is normally prone on land, so `height_cm` remains 0.0 unresolved.

### Locomotion and speed
True seals generate most swimming thrust with lateral movements of the hind flippers and posterior body while using the foreflippers mainly for steering. Williams & Kooyman's experimental hydrodynamic work tested harbor seals over **0.7–3.5 m/s**, documenting low drag and effective streamlining. That study does not establish 3.5 m/s as a species maximum, so the report does not convert the experimental velocity envelope into an unsupported top-speed claim.

**Canonical `speed_mps`: 0.0 unresolved.** This means no defensible standardized species maximum was located, not that the animal cannot swim quickly.

On land, harbor seals cannot rotate the hind flippers beneath the body like sea lions. They move by undulating/hitching the trunk and are much less mobile terrestrially.

### Diving and endurance
A Svalbard telemetry study instrumented 30 adult and juvenile harbor seals and recorded **189,104 dives**. Mean individual dive depth was about **41 ± 24 m**; maximum dive-depth ranges reached **403 m**. Dives averaged **204 ± 120 s**, with individual maximum durations ranging up to **2,220 s (37 min)**. ADW independently reports dives to **427 m**. These data support strong repeated-dive physiology without implying that every routine dive is extreme.

### Lifespan
NOAA gives **25–30 years**. NatureServe notes few live beyond 25 years, and some demographic sources report females living longer than males. **Canonical `lifespan_years`: 27.0** is representative of the NOAA range, not maximum longevity.

### Dentition, feeding mechanics and bite force
Harbor seals catch fish and cephalopods with the jaws and teeth and may swallow prey whole. Controlled feeding experiments show behavioral flexibility between biting, suction and hydraulic jetting. In one peer-reviewed study, underwater feeding was dominated by suction; maximum measured subambient suction pressure was **48.8 kPa**, and maximum hydraulic jetting pressure was **53.9 kPa**. These are oral pressure measurements, not bite PSI.

No defensible standardized *Phoca vitulina* bite pressure in PSI was found. **`bite_force_psi`: 0.0 unresolved.** Human bite case literature confirms that harbor-seal bites can break skin, but clinical injury reports are not force measurements.

### Defense and insulation
A thick subcutaneous blubber layer provides insulation, energy storage and some padding, while fur protects the skin. ADW notes elevated resting metabolism relative to similarly sized terrestrial mammals. Blubber is useful protection against cold and superficial trauma, but it is not armor against major teeth, claws or puncture weapons.

## 3. Proposed canonical factual fields
| Field | Proposed value | Basis / uncertainty |
|---|---:|---|
| `weight_kg` | **105.0** | Strong representative adult male within NOAA/ADW ranges |
| `height_cm` | **0.0** | Standard standing height not useful/defensible for prone phocid |
| `length_cm` | **175.0** | Representative adult male within NOAA 152–183 cm and ADW 160–190 cm ranges |
| `speed_mps` | **0.0** | No defensible standardized maximum found; 3.5 m/s is an experimental hydrodynamic test velocity, not proven max |
| `lifespan_years` | **27.0** | Representative within NOAA 25–30 y range |
| `bite_force_psi` | **0.0** | Reliable species-specific PSI measurement not found |

## 4. Combat biology
### Weapons and offensive mechanics
The primary weapon is a close-range carnivoran bite. Harbor seals can seize slippery fish, open the mouth rapidly and switch between biting and suction. Their foreflippers carry claws and can scratch, but they are not grappling limbs comparable to terrestrial carnivoran forelegs. Against a similar-sized opponent, practical offense is bite, release, reposition and re-engage in water.

### Defense and toughness
A 105 kg male has useful mass, a streamlined muscular trunk and insulating blubber. The body tolerates repeated pressure changes and cold-water exposure, but there is no shell, osteoderm layer or exceptionally thick defensive hide. Major predators include killer whales and large sharks, demonstrating the limits of passive defense.

### Maneuverability
In water, harbor seals are highly controlled swimmers capable of turns, rolls, diving and rapid three-dimensional repositioning. On land their inability to bring the hind limbs beneath the body imposes a severe mobility penalty. Agility is therefore high in the canonical aquatic setting but not universally elite across terrain.

### Endurance
Repeated dives, hundreds of thousands of telemetry-recorded dive events and dives lasting several minutes routinely support strong stamina. Extreme individual dives can exceed half an hour. This is oxygen-management endurance rather than sustained high-speed pursuit, so Stamina should not be inferred directly from maximum dive duration.

### Senses
Harbor-seal vibrissae are an exceptional hydrodynamic sensor. In controlled experiments a blindfolded seal could determine the movement direction of an artificial fin from a hydrodynamic trail **up to 35 seconds old**. Earlier *Nature* work demonstrated detection of minute water movements. Vision is functional in air and water, and hearing is well developed for amphibious life.

### Intelligence and tactics
Controlled cognition experiments demonstrate real behavioral flexibility. Harbor seals have learned identity matching, temporal discrimination and spatial reversal tasks. In 2022 spatial reversal work, seals improved across reversals and one reached one-trial performance; visual serial reversal results also showed substantial individual variation, warning against treating every individual as equally flexible.

### Fighting and mating behavior
Male harbor seals use underwater calls, display dives and aquatic territories during breeding. Pacific work found males defending display territories and showing multi-year site fidelity. This is evidence for spatial tactics and competitive behavior, but not evidence that the species is a dedicated lethal fighter.

### Environmental strengths
- Coastal water, estuaries, rocky shores, sandbars and ice margins.
- Murky or dark water where whisker trail detection helps compensate for poor visibility.
- Three-dimensional aquatic escape and pursuit.
- Cold water where blubber and dive physiology matter.

### Weaknesses
- Very poor terrestrial locomotion compared with sea lions and terrestrial carnivores.
- Short-range weaponry with no tusks, horns or major claws.
- No hard armor against large predators.
- Reliance on surfacing for air.
- Moderate body size leaves it badly outmatched by large sharks, orcas, crocodilians and megafauna.

### Matchup archetypes
- **Favorable:** smaller aquatic animals lacking armor or major penetrating weapons, especially where the seal can exploit turning control and sensory tracking.
- **Unfavorable:** large sharks/cetaceans, crocodilians, armored opponents, and capable terrestrial predators if the fight is forced onto land.

## 5. Proposed ABS substats
All scores use absolute roster-wide 0.1–100.0 scaling.

| Substat | Score | Justification |
|---|---:|---|
| Size | **46.0** | 105 kg is meaningful but far below large pinnipeds, bears and megafauna |
| Raw Power | **45.0** | Muscular 105 kg marine carnivore, but no evidence for exceptional absolute striking/crushing output |
| Weaponry | **42.0** | Functional carnivoran bite and claws, but short reach and no specialized large-prey weapon |
| Protection | **46.0** | Blubber and robust trunk provide padding/thermal defense, not armor |
| Toughness | **54.0** | Strong marine physiology and useful mass, still vulnerable to penetrating trauma |
| Maneuverability | **82.0** | Excellent aquatic turning/control, strongly penalized on land |
| Speed | **45.0** | Strong swimmer, but maximum remains unresolved and speed is not being used as an agility proxy |
| Endurance | **82.0** | Repeated diving and telemetry-supported long-duration submergence |
| Recovery | **57.0** | No special regeneration; competent mammalian recovery only |
| Tactics | **72.0** | Flexible learning plus male spatial display/territorial behavior |
| Senses | **88.0** | Hydrodynamic trail tracking is experimentally demonstrated and highly battle-relevant underwater |
| Ferocity | **48.0** | Can bite and males compete, but not a specialized macropredator |
| Abilities | **78.0** | Vibrissal wake tracking plus dive physiology materially change aquatic matchups |

## 6. Proposed six headline ABS ratings
- **Attack: 44.0** — useful bite and body mass, but no dedicated high-damage weapon or defensible exceptional bite-force measurement.
- **Defense: 48.0** — blubber, mass and marine toughness help, while absence of hard armor limits resistance to penetrating attacks.
- **Agility: 82.0** — excellent underwater control, with a major terrestrial penalty and no inflation from an unverified top-speed claim.
- **Stamina: 82.0** — repeated-diving physiology is strongly documented, including rare very long dives, without confusing breath-hold duration with sprint endurance.
- **Intelligence: 74.0** — controlled learning, matching and reversal experiments support strong behavioral flexibility, tempered by substantial individual variation.
- **Special: 84.0** — hydrodynamic trail detection is an unusually powerful sensory specialization, reinforced by deep/repeated diving physiology.

## 7. Abilities and traits
### Special abilities, exactly two
1. **Wake-Trace Whiskers** — specialized vibrissae detect minute water movements and can identify the direction of an artificial fin trail tens of seconds after it was produced, helping track moving prey or opponents in poor visibility.
2. **Dive-Oxygen Reserve** — pinniped oxygen management supports repeated multi-minute dives and occasional very long/deep excursions, extending underwater operating time far beyond terrestrial mammals of similar size.

### Unique traits, exactly two
1. **Suction-Bite Switch** — harbor seals can alternate between biting, suction feeding and hydraulic jetting, demonstrating unusually flexible close-range prey handling.
2. **Aquatic Display Territories** — breeding males combine underwater calls, display dives, spatial territories and multi-year site fidelity around female travel routes.

## 8. Expanded profile
### Habitat and range
Harbor seals occupy temperate, subarctic and some Arctic coastal waters across the North Pacific and North Atlantic. Haul-outs include beaches, reefs, rocks, sandbars, mudflats and floating/glacial ice. They usually remain coastal rather than functioning as truly oceanic long-distance pinnipeds.

### Diet and ecology
They are opportunistic carnivores feeding mostly on fish, with squid, octopus and crustaceans also important. ADW lists cod, hake, mackerel and herring among common prey examples and reports dives to 427 m. Diet varies substantially by region and season.

### Social structure
Harbor seals are often solitary while foraging but aggregate at haul-outs. Mating is aquatic. Males may establish display stations or territories and use underwater vocalizations. They are less structurally social than California sea lions, so haul-out aggregation alone should not inflate Intelligence.

### Life history
Females generally mature earlier than males. A single pup is typical, and pups are precocial enough to swim very soon after birth. Lactation is short compared with many terrestrial mammals, generally a matter of weeks. Timing of pupping varies geographically.

### Conservation
NOAA lists harbor seals as protected under the U.S. Marine Mammal Protection Act. The species is broadly assessed as Least Concern globally, but regional populations face entanglement, disturbance, contaminants, disease, oil spills, habitat change and vessel noise.

### Adaptations
- Streamlined fusiform body with low hydrodynamic drag.
- Hind-flipper/posterior-body propulsion.
- Blubber insulation and energy storage.
- Amphibious sensory systems.
- Highly sensitive hydrodynamic vibrissae.
- Diving cardiovascular/oxygen-management physiology.

### Human interaction
Harbor seals are wild protected marine mammals. Feeding or approaching hauled-out seals can alter behavior and increase conflict. Documented bites of open-water swimmers are uncommon but can break skin and carry infection risk.

### Genuine fun facts
- A blindfolded harbor seal detected the direction of an artificial fin's wake when the trail was **35 seconds old**.
- A Svalbard telemetry project recorded **189,104 dives** from 30 tagged harbor seals.
- Individual maximum dive durations in that study reached **2,220 seconds**, about 37 minutes.
- Harbor seals can switch among biting, suction and even hydraulic jetting during feeding.
- Male breeding displays occur underwater and can involve repeatedly defended aquatic display areas.
- Their land movement is awkward because true seals cannot rotate their hind flippers underneath the body like sea lions.

### Concise site-ready summary
The harbor seal is a compact true seal built around underwater control, repeated diving and extraordinary whisker-based tracking. A strong adult male weighs about 105 kg and can bite effectively, but its real battle advantages are maneuverability, oxygen management and the ability to read hydrodynamic wakes in dark or murky water. It is formidable in coastal water and dramatically less capable on land.

### Rich narrative profile
The harbor seal's strength is not one oversized weapon. It is an integrated aquatic system. A streamlined trunk and hind-flipper propulsion make the animal efficient underwater, while blubber buffers cold and specialized physiology supports repeated dives. Most unusually, the whiskers function as a remote-motion detector: experiments show a seal can extract direction from the decaying wake of a moving object long after the object itself has passed.

That sensory advantage changes how a matchup should be modeled. In dark, turbid or visually cluttered water, an opponent cannot assume that leaving the seal's sight means escaping detection. Yet the harbor seal remains a moderate-sized predator whose jaws evolved mainly for fish and other aquatic prey. It has no tusk, shell or extreme bite-force evidence. Its ratings therefore emphasize aquatic information, maneuvering and endurance rather than inflated Attack.

The environment is decisive. In water the seal can turn, roll, dive and reposition in three dimensions. On shore, the same true-seal anatomy becomes a liability because the hind limbs cannot support a normal quadrupedal gait. That sharp water-versus-land contrast is one of the clearest matchup dependencies in the roster.

### Future structured-field proposals
- `canonical_sex`: male
- `canonical_environment`: coastal_water
- `max_verified_dive_depth_m`: 403 (telemetry study maximum in sampled Svalbard seals; ADW reports 427 m separately)
- `max_verified_dive_duration_s`: 2220 (study sample maximum)
- `hydrodynamic_trail_direction_detection_s`: 35
- `locomotion_context`: elite aquatic / poor terrestrial
- `bite_force_status`: unresolved, no defensible PSI

## 9. Mandatory image audit
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/seal.png` **NOT PRESENT / NOT CLAIMED**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Harbor_seal_phoca_vitulina.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/1/16/Harbor_seal_phoca_vitulina.jpg
- `file_format_verified`: source JPEG verified by Commons; final PNG absent
- `alpha_verified`: false, no final PNG
- `full_body_verified`: false
- `adult_verified`: false for this candidate
- `sex_verified_or_unknown`: unknown
- `license_status`: public domain, U.S. Fish and Wildlife Service
- `notes`: The 2100×1368 exact-*P. vitulina richardii* USFWS photograph was opened at original resolution. Head, trunk and hind-flipper end are visible, but the foreflippers are not cleanly exposed, and source metadata does not explicitly establish adulthood or sex. It therefore fails the mandatory complete-appendage/adult standard. ADW provides explicitly adult/sexually mature CC-licensed harbor-seal photographs, but no inspected candidate in this run simultaneously improved strict complete-body framing enough to promote. Current GitHub writer is text-only, so no binary PNG is fabricated.

## 10. Evidence and source ledger
| Source | Direct URL | Supports | Finding / caveat | Confidence |
|---|---|---|---|---|
| NOAA Fisheries, Harbor Seal | https://www.fisheries.noaa.gov/species/harbor-seal | Taxon, adult size, lifespan, threats | Adults 180–285 lb, ~5–6 ft, 25–30 y | High |
| Animal Diversity Web | https://animaldiversity.org/accounts/Phoca_vitulina/ | Size, male-larger dimorphism, diet, dives, senses | 80–170 kg; 160–190 cm; dives to 427 m | High-moderate |
| NatureServe Explorer | https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.104705/Phoca_vitulina | Ecology, maturity, movements, longevity | 1.7 m / 136 kg reference; few beyond 25 y | High |
| Blanchet et al. 2015, PLOS ONE | https://doi.org/10.1371/journal.pone.0132686 | Diving/endurance | 30 seals, 189,104 dives; mean 41 m; max ranges to 403 m; max duration ranges to 2220 s | High |
| Williams & Kooyman 1985 | https://doi.org/10.1086/physzool.58.5.30158584 | Hydrodynamics | Experimental towing velocities 0.7–3.5 m/s; does not establish max swim speed | High |
| Wieskotten et al. 2010, JEB | https://doi.org/10.1242/jeb.041699 | Vibrissal sensing | Direction discrimination from hydrodynamic trails up to 35 s old | High |
| Dehnhardt et al. 1998, Nature | https://www.nature.com/articles/28303 | Vibrissal sensing | Detects minute water movements | High |
| Kienle et al., feeding biomechanics | https://pmc.ncbi.nlm.nih.gov/articles/PMC3901688/ | Feeding mechanics | Bite/suction/jet repertoire; max suction 48.8 kPa; jet 53.9 kPa, not bite PSI | High |
| Niesterok et al. 2022, Animal Cognition | https://link.springer.com/article/10.1007/s10071-022-01651-3 | Cognition | Progressive spatial reversal learning; one-trial performance in one seal | High |
| Erdsack et al. 2022, Animal Cognition | https://link.springer.com/article/10.1007/s10071-022-01653-1 | Cognition/conflict | Visual reversal learning with substantial individual variation | High |
| Mauck & Dehnhardt 2005 | https://pubmed.ncbi.nlm.nih.gov/16573213/ | Cognition | Identity matching/concept experiment | High |
| Hayes et al. 2004, Marine Mammal Science | https://onlinelibrary.wiley.com/doi/10.1111/j.1748-7692.2004.tb01184.x | Male mating tactics | Aquatic display territories, vocal displays, multi-year site fidelity | High |
| Commons / USFWS image | https://commons.wikimedia.org/wiki/File:Harbor_seal_phoca_vitulina.jpg | Image provenance | 2100×1368, public domain, exact subspecies; adulthood/complete appendages fail verification | High provenance, unsuitable final image |
| ADW Roger Myers adult image | https://animaldiversity.org/collections/contributors/roger_myers/DSCN0033aa/ | Adult image alternative | Explicit adult/sexually mature, CC BY 3.0; strict complete-body framing not promoted | High provenance |

### Conflicts and uncertainty
- Size varies by subspecies, sex, season and source. The canonical 105 kg male is intentionally inside institutional adult ranges rather than a midpoint of the broadest possible range.
- No reliable standardized maximum swimming speed was located. Experimental work reaching 3.5 m/s is not mislabeled as a maximum.
- No bite PSI is claimed. Suction/jet pressure is explicitly a different measurement.
- Dive maxima are sample/context dependent. The 403 m / 2220 s telemetry values are retained as observed study extremes, not routine performance.

## 11. Cross-animal normalization notes
- **Versus Sea Lion (*Zalophus californianus*):** the 300 kg sea-lion control remains clearly higher in absolute Attack and body-scale Defense. Harbor Seal is smaller and less terrestrially capable, while its hydrodynamic whisker specialization supports higher Senses/Special emphasis.
- **Versus Sea Otter (*Enhydra lutris*):** Harbor Seal is almost three times the canonical mass and substantially tougher, but Sea Otter retains higher dexterity/tool-driven Intelligence and comparable or better fine aquatic maneuvering.
- **Versus Saltwater Crocodile:** the crocodile's 500 kg body, direct 16,414 N bite and armor place it vastly above Harbor Seal in Attack/Defense. The seal's advantage is aquatic turning, sensory wake tracking and repeated diving, not direct force.
- **Versus Sailfish:** Sailfish remains faster and more maneuverability-specialized in open water; Harbor Seal is tougher, cognitively more flexible and has superior close-range mammalian grappling/bite options.
- **Inflation check:** Attack 44.0 and Defense 48.0 deliberately preserve the gap to large pinnipeds, major terrestrial predators and megafauna. Agility 82.0 is about underwater control, not an unsupported speed number. Stamina 82.0 reflects repeated diving but does not double-count it into Defense. Special 84.0 is driven primarily by experimentally demonstrated hydrodynamic sensing plus diving physiology.

## Final verification
- Exact taxon matches live schema: **yes**.
- Representative adult and dimorphism documented: **yes**.
- Factual fields separated from editorial ratings: **yes**.
- Unsupported PSI avoided: **yes**.
- All current substats scored with one decimal: **yes**.
- Six headline ratings present with one decimal: **yes**.
- Special abilities: **exactly 2**.
- Unique traits: **exactly 2**.
- Mandatory image section and provenance URLs present: **yes**.
- Verified transparent PNG claimed: **no**.
- Production data/site/live images modified: **no**.