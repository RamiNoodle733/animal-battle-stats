# Quoll Research Overhaul

## 1. Identity and canonical specimen
- **Common name:** Quoll, resolved here to Spotted-tailed quoll / tiger quoll
- **Scientific name:** *Dasyurus maculatus* (Kerr, 1792)
- **Family:** Dasyuridae
- **Living/extinct:** Living
- **Canonical specimen:** healthy prime adult male southern spotted-tailed quoll, *D. m. maculatus*, **3.5 kg**, approximately **105.0 cm total length** including tail.
- **Taxon decision:** “Quoll” is genus-level. *D. maculatus* is the largest living quoll and the strongest defensible combat representative, so ABS should explicitly bind this roster entry to that species rather than mix species.
- **Dimorphism:** NSW Environment reports adult males around 3.5 kg versus females around 2.0 kg. The Australian Government recovery plan gives southern male averages roughly 2.6–4.6 kg across populations/sources, maxima to 7 kg, while females average roughly 1.5–2.2 kg and reach about 4 kg.
- **Population variation:** northern *D. m. gracilis* is much smaller, with government recovery-plan averages around 1.6 kg for males and 1.1 kg for females. The canonical specimen is therefore specifically southern and male.

## 2. Physical measurements and ranges
### Mass
Government and agency sources converge on a representative southern adult male near **3.5 kg**. Australian mammal survey guidance reports southeastern mainland adult males averaging 2.8 kg (2.0–4.2 kg) and Tasmanian males averaging 3.5 kg; maxima to about 7 kg are exceptional.

### Length
ADW reports male head-body length **38–76 cm**, tail **37–55 cm**, and total species length **69–113 cm**. The national recovery plan notes males can reach **1.3 m including tail**, an upper-end figure rather than a representative mean. **105.0 cm total length** is selected as a large but representative prime southern male, with moderate confidence.

### Speed and locomotion
The species is terrestrial, scansorial and arboreal. No strong instrumented species-specific maximum running speed was recovered, so `speed_mps` remains **0.0** rather than adopting tertiary web claims.

### Lifespan
ADW summarizes wild lifespan at roughly **2–5 years**, with captive records a little beyond six years. A representative **4.0 years** is used.

### Bite, teeth, claws and skull
No defensible species-specific bite pressure in PSI was recovered. Attard et al. used 3D finite-element analysis and found *D. maculatus* to combine a **relatively high bite force and rigid skull**, consistent with handling prey across a broad size range. This supports weapon quality but does not justify converting modeled force to invented PSI. Sharp carnivorous dentition is the main weapon; clawed forefeet assist prey control and climbing. No robust canonical canine/claw dimension was recovered.

### Defensive structures
No armor, shell or specialized hide. Defense is behavioral and positional: concealment, den use, climbing, warning displays and a dangerous close-range bite.

## 3. Canonical proposed factual fields
```json
{
  "weight_kg": 3.5,
  "height_cm": 0.0,
  "length_cm": 105.0,
  "speed_mps": 0.0,
  "lifespan_years": 4.0,
  "bite_force_psi": 0.0
}
```
`height_cm`, `speed_mps` and `bite_force_psi` are left at 0.0 because no defensible canonical measurement was recovered for those schema fields.

## 4. Combat biology
### Weapons and offensive mechanics
The spotted-tailed quoll is a vertebrate predator. Australian Government survey guidance states that up to **80% of diet can be medium-sized mammals of roughly 0.5–5 kg**, including rabbits, possums and bandicoots, plus carrion. The practical attack is close, seize, bite and control. Its mechanically rigid skull and relatively high bite performance make the jaw system its decisive weapon.

### Predation and fighting
The diet also includes birds, reptiles, amphibians and invertebrates. Hunting occurs on the ground and in trees. ADW describes physically rough mating in which males grip females at the back of the neck, sometimes causing laceration and swelling. This demonstrates restraint capacity and persistence, but is not treated as a bite-force measurement.

### Locomotion and agility
ADW describes well-developed halluces and ridged foot pads associated with arboreal use. A 2026 anatomical study of dasyurid forelimb architecture found *D. maculatus* emphasized muscle groups associated with arboreal locomotion. The long tail assists balance but is not prehensile. This combination supports high maneuverability without confusing top speed with Agility.

### Endurance
Adult males range over very large areas. Field syntheses report male home ranges from hundreds to several thousand hectares, with ADW summarizing maxima around 3,762 ha. This supports good routine travel endurance, though home-range size is not a direct continuous-output test.

### Senses
Mostly nocturnal/crepuscular behavior is supported by vision, hearing and chemical sensing. Communal latrines are important scent-marking sites. There is no evidence for an exotic sense such as echolocation or infrared detection.

### Tactics and intelligence
Flexible prey selection, arboreal/terrestrial hunting, den selection, scavenging and scent communication support moderate tactical flexibility. It remains a solitary predator without pack coordination or evidence for primate/corvid-level cognition.

### Predator defense
Threatened animals can crouch, lower the ears, vocalize, retreat into narrow dens/cavities or climb. The spotted coat aids concealment. Against much larger predators, avoidance matters more than durability.

### Environmental pros and cons
- **Strong:** forest, woodland, rocky gullies, logs and trees that permit cover and climbing.
- **Neutral:** mixed ground/tree habitat where it can switch locomotor mode.
- **Weak:** open terrain against larger pursuit predators.
- **Hard limitation:** low absolute mass and no armor.

### Weaknesses
Small body mass; no structural armor; solitary fighting; strong bite remains low in absolute force beside medium/large carnivores; short natural lifespan; open terrain reduces concealment and vertical escape.

### Matchup archetypes
Favored against tiny unarmored vertebrates and many similarly sized prey; competitive against small non-armored predators where jaw quality and climbing matter; strongly unfavored against fox/wolf-sized and larger carnivores, armored reptiles and large hoofed mammals.

## 5. Proposed ABS substats
| Substat | Score | Justification |
|---|---:|---|
| Size | **16.0** | 3.5 kg is small on the full roster. |
| Raw Power | **22.0** | Predatory musculature but low absolute mass. |
| Weaponry | **38.0** | Sharp dentition, relatively high bite performance and useful claws. |
| Protection | **14.0** | No armor or specialized protective structure. |
| Toughness | **30.0** | Active predator, but small body limits trauma tolerance. |
| Speed | **48.0** | Athletic small-carnivore placement without inventing a maximum. |
| Maneuverability | **76.0** | Ground agility plus strong climbing, ridged pads, hallux and tail balance. |
| Endurance | **64.0** | Very large male ranging ecology supports sustained travel. |
| Recovery | **43.0** | No exceptional regeneration/recovery mechanism. |
| Tactics | **60.0** | Flexible prey choice and ground/tree hunting. |
| Senses | **64.0** | Useful nocturnal multimodal perception and scent communication. |
| Ferocity | **67.0** | Dedicated predator with vigorous defense and rough restraint behavior. |
| Abilities | **55.0** | Strong skull mechanics and arboreal predation are useful but not exotic. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **32.0** | Capable vertebrate-killing bite and claws, constrained by 3.5 kg absolute scale. |
| **Defense** | **22.0** | Evasion and climbing help, but structural protection is minimal. |
| **Agility** | **77.0** | Strong terrestrial control plus anatomically supported arboreal competence. |
| **Stamina** | **64.0** | Large ranging behavior supports sustained movement; direct physiology is limited. |
| **Intelligence** | **55.0** | Flexible solitary predator, not an elite cognitive specialist. |
| **Special** | **60.0** | Rigid predatory skull plus ground-to-canopy hunting versatility. |

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Rigid-Skull Clamp** — peer-reviewed finite-element work identifies relatively high bite force and a rigid skull, supporting secure biting of variable-sized prey.
2. **Ground-to-Canopy Pursuit** — ridged foot pads, developed halluces, long-tail balance and specialized forelimb use support predation and escape across ground and trees.

### Unique traits
1. **Spotted Tail Signature** — *D. maculatus* is the quoll distinguished by white spotting continuing onto the tail, a diagnostic trait rather than a damage bonus.
2. **Wide-Ranging Solitary Hunter** — adult males can use home ranges measured in the thousands of hectares while remaining solitary predators.

## 8. Expanded profile
### Habitat and range
Forests, rainforests, woodlands, coastal heath, gullies and rocky escarpments across eastern Australia and Tasmania. The smaller northern subspecies survives in northeastern Queensland. Dens occur in rock crevices, caves, hollow logs and tree hollows.

### Diet and ecology
Strongly carnivorous and opportunistic, taking mammals, birds, reptiles, amphibians, insects and carrion. Medium mammals can dominate diet. It is an important native mammalian predator rather than a cooperative pack hunter.

### Social structure
Mostly solitary. Male ranges overlap multiple females and can overlap other males. Communal latrines provide scent-communication hubs.

### Reproduction and life history
Seasonal breeding, about **21 days gestation**, pouch development, commonly around five young, independence around 18–21 weeks and sexual maturity near one year. Males provide no parental care.

### Conservation
Global summaries commonly list *D. maculatus* as **Near Threatened**, while Australian EPBC/state listings distinguish threatened populations/subspecies. Habitat loss and fragmentation, introduced predators, roads and poison exposure are important pressures. Any future site conservation field should retain authority and population context.

### Adaptations
Rigid predatory skull; carnivorous dentition; ridged climbing pads; developed hallux; long balancing tail; scent-marking at communal latrines; flexible ground/tree hunting; cryptic spotted coat.

### Human interaction
Quolls can scavenge and occasionally take poultry. Human-associated threats include habitat fragmentation, road mortality and poison-bait exposure.

### Fun facts
- The spotted-tailed quoll is the **largest living quoll**.
- It is the quoll with conspicuous white spots continuing onto the tail.
- Southern males average roughly twice female mass in several datasets.
- Northern *D. m. gracilis* is dramatically smaller than southern populations.
- It hunts both on the ground and in trees.
- Peer-reviewed skull modeling found a relatively high bite force and rigid skull.
- Male home ranges can extend over several thousand hectares.

### Concise site summary
The spotted-tailed quoll is Australia's largest quoll, a solitary carnivorous marsupial built around a strong bite, flexible prey handling and capable climbing. A representative southern adult male weighs about 3.5 kg, so absolute power remains modest, but rigid skull mechanics and ground-to-canopy maneuverability make it dangerous in the small-animal tier.

### Rich narrative profile
The spotted-tailed quoll occupies an unusual niche. It weighs only a few kilograms, yet feeding anatomy is specialized for serious predation. Finite-element work places *D. maculatus* among mechanically capable marsupial carnivores, combining relatively high bite performance with a rigid skull suited to loads from struggling prey. Field diet evidence agrees: mammals from roughly half a kilogram to several kilograms can dominate the menu.

Its second advantage is positional. Ridged pads, a developed hallux, specialized forelimb use and a long balancing tail let it climb, raid arboreal prey and escape vertically. Agility therefore deserves to be its standout ABS headline rather than Attack. The scoring avoids proportional-strength leakage: a 3.5 kg quoll cannot receive wolf-like damage or durability simply because its jaw is formidable for its size.

The weaknesses are equally clear. Fur is not armor, the body is small and the species is solitary. Against a much larger predator it survives through terrain, concealment, climbing and retreat rather than damage absorption. Within its size class, however, it is a specialized carnivore with a credible killing bite and more three-dimensional mobility than a purely terrestrial opponent.

### Future field proposals
`canonical_taxon_resolution`, `canonical_subspecies_population`, `sex`, separate `head_body_length_cm` and `tail_length_cm`, `locomotion_modes`, `prey_mass_band_g`, and authority-scoped `conservation_status`.

## 9. Source ledger
| Source | Direct URL | Supports | Finding | Confidence / caveat |
|---|---|---|---|---|
| Australian Government DCCEEW, National Recovery Plan | https://www.dcceew.gov.au/sites/default/files/documents/national-recovery-plan-spotted-tailed-quoll.pdf | taxonomy, dimorphism, mass, length, range | southern males up to 1.3 m/7 kg; averages ~2.6–4.6 kg; northern form much smaller | High government synthesis; populations differ |
| Australian Government mammal survey guidelines | https://www.agriculture.gov.au/sites/default/files/documents/survey-guidelines-mammals.pdf | sex/population mass, habitat, activity, diet | SE males avg 2.8 kg (2.0–4.2), Tasmania 3.5 kg; up to 80% diet medium mammals 0.5–5 kg | High government synthesis |
| NSW Environment and Heritage | https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/spotted-tailed-quoll | adult sex-specific mass, morphology, habitat | adult male ~3.5 kg, female ~2 kg; tail spotting diagnostic | High agency source |
| Animal Diversity Web | https://animaldiversity.org/accounts/Dasyurus_maculatus/ | dimensions, lifespan, reproduction, home range, behavior | male HBL 38–76 cm, tail 37–55 cm; wild 2–5 y; climbing and scent communication | Moderate-high synthesis |
| Attard et al. 2011, Journal of Zoology | https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/j.1469-7998.2011.00844.x | skull mechanics | relatively high bite force and rigid skull | High peer-reviewed; not PSI |
| Bidaye et al. 2026, The Anatomical Record / PubMed | https://pubmed.ncbi.nlm.nih.gov/42036307/ | forelimb anatomy | *D. maculatus* muscle architecture emphasizes arboreal-locomotion groups | High peer-reviewed, recent |
| Wikimedia Commons, Tiger Quoll 6178 | https://commons.wikimedia.org/wiki/File:Tiger_Quoll_6178.jpg | image candidate | exact species, wild NSW photo, 5472x3648, CC BY-SA 3.0 | High provenance/license; age/sex unstated |

### Confidence and conflicts
- **Mass:** high confidence; geographic means differ, so 3.5 kg is representative southern male, not species-wide mean.
- **Length:** moderate; sources mix head-body, tail, total and maxima. 105.0 cm is a representative canonical choice, not a measured mean.
- **Speed:** unresolved; tertiary values excluded.
- **Bite PSI:** unresolved; biomechanical relative performance is not converted to PSI.
- **Conservation:** authority/population dependent.

## 10. Cross-animal normalization
- Quoll **Attack 32.0** is above Quokka **18.0** because it is a dedicated vertebrate predator, but remains far below medium and large carnivores.
- Defense **22.0** stays low because climbing is escape/agility, not armor.
- Agility **77.0** is directly supported by ground/tree anatomy and behavior and does not depend on an unsupported top speed.
- Stamina **64.0** uses ranging ecology as evidence but remains far below elite endurance specialists such as Pronghorn **96.0**.
- Special **60.0** credits real skull and arboreal specialization without treating ordinary carnivory as a superpower.
- No pound-for-pound feat leaks into heavyweight Raw Power.

## 11. Mandatory image requirement
- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/quoll.png` (not created)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Tiger_Quoll_6178.jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/6/69/Tiger_Quoll_6178.jpg
- **file_format_verified:** source is JPEG; no final PNG exists
- **alpha_verified:** no
- **full_body_verified:** no. The source is exact-species, wild, 5472x3648 and reusable, but strict every-foot plus complete-tail visibility was not established strongly enough through the available inspection path.
- **adult_verified:** no. Source metadata does not explicitly state adulthood.
- **sex_verified_or_unknown:** unknown; no visual sex inference used.
- **license_status:** CC BY-SA 3.0, reusable with attribution/share-alike.
- **notes:** A 2500x1667 CC BY-SA 3.0 Bonorong exact-species photograph was visually inspected and rejected as primary because branch/tail framing does not clearly satisfy complete anatomy. A visually clean road-standing exact-species source was found in broad image search, but redistribution provenance was not clear enough to commit. Current GitHub write actions accept UTF-8 text, not image binary, so no fake PNG is created.