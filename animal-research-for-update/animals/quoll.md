# Quoll Research Overhaul

## 1. Identity and canonical specimen

- **Roster name:** Quoll
- **Resolved species:** Spotted-tailed quoll / tiger quoll
- **Scientific name:** *Dasyurus maculatus* (Kerr, 1792)
- **Family:** Dasyuridae
- **Status:** Living
- **Canonical specimen:** healthy prime adult male southern spotted-tailed quoll, *D. m. maculatus*, **3.5 kg**, approximately **105.0 cm total length** including tail.
- **Why this species:** “quoll” is genus-level, but *D. maculatus* is the largest living quoll and the strongest defensible combat representative. This resolution is explicit rather than silently mixing measurements among quoll species.
- **Why male:** males are substantially larger. NSW Environment reports adult males averaging about 3.5 kg versus about 2.0 kg for females. The Australian Government recovery plan gives southern males averages spanning roughly 2.6–4.6 kg depending on population/source, maxima to 7 kg, while females average roughly 1.5–2.2 kg and reach about 4 kg.
- **Population variation:** northern *D. m. gracilis* is much smaller, with government recovery-plan averages around 1.6 kg for males and 1.1 kg for females. The canonical animal is therefore specifically a southern adult male, not a pooled species-wide “average.”

## 2. Physical measurements

### Mass
Strong government and zoological sources converge on a representative southern adult male near 3.5 kg, while field samples vary geographically.

- **Canonical `weight_kg`: 3.5 kg**
- **Credible adult-male context:** southeastern mainland average about 2.8 kg, range 2.0–4.2 kg; Tasmania average about 3.5 kg; reported species maximum up to about 7 kg.
- **Confidence:** high.

### Length
ADW reports male head-body length **38–76 cm** and tail length **37–55 cm**, with total species range **69–113 cm**. The national recovery plan notes males can reach **1.3 m including tail**, an upper-end figure rather than a representative mean.

- **Canonical `length_cm`: 105.0 cm total length**
- **Canonical `height_cm`: 0.0** because a standardized shoulder-height value was not recovered from a strong source.
- **Confidence:** moderate for the representative total-length choice, high for the broad range.

### Speed and locomotion
Spotted-tailed quolls are terrestrial and scansorial/arboreal, with climbing used both in predation and escape. I did not recover an instrumented, species-specific maximum running speed from a primary or authoritative source.

- **Canonical `speed_mps`: 0.0**
- This is an unresolved measurement, not a claim that the animal is slow or immobile.

### Lifespan
ADW summarizes wild lifespan at roughly **2–5 years**, with larger quolls tending toward the upper end, and captive records to a little over six years.

- **Canonical `lifespan_years`: 4.0 years**
- **Confidence:** moderate-high.

### Bite, dentition and skull mechanics
No defensible species-specific bite pressure in PSI was recovered. A peer-reviewed 3D finite-element comparison by Attard et al. found *D. maculatus* to have a **relatively high bite force and rigid skull** among the compared marsupial carnivores, consistent with taking prey across a broad size range. That supports strong weapon quality but does not justify inventing PSI.

- **Canonical `bite_force_psi`: 0.0**
- **Primary weapon:** strong jaws with sharp carnivorous dentition, used in killing and processing vertebrate prey.
- **Secondary weapons:** clawed forefeet and powerful forelimbs useful in prey control and climbing.
- **Weapon dimensions:** no robust species-level canine/claw dimension suitable for a canonical numeric field was recovered in this run.

### Defensive structures
The quoll has no armor, shell, horns or specialized defensive hide. Survival depends on speed/control, climbing, concealment, den use, warning behavior and a dangerous close-range bite.

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

The zeros above mean “not defensibly quantified for this schema” where applicable. They do not substitute weak web estimates for measured values.

## 4. Combat biology

### Offensive mechanics
The spotted-tailed quoll is a genuine vertebrate predator, not merely an insect-eating small marsupial. Government survey guidance states that as much as **80% of diet can be medium-sized mammals of roughly 0.5–5 kg**, including rabbits, possums and bandicoots, plus carrion. Its skull is mechanically rigid and produces relatively high bite force for its size. The practical attack sequence is rapid close, seize, bite and control, with the jaws doing most lethal work and the forelimbs stabilizing prey.

### Prey handling and predation
Published diet studies and agency summaries show a broad prey spectrum including mammals, birds, reptiles, amphibians and invertebrates. The species can hunt both on the ground and in trees. Its ability to take prey overlapping its own mass is important evidence for weapon effectiveness, but ABS remains absolute, so this does not turn a 3.5 kg predator into a high-tier heavyweight attacker.

### Intraspecific conflict
Spotted-tailed quolls are primarily solitary. Adult male home ranges are very large and overlap multiple females and sometimes other males. Mating can be physically rough: ADW summarizes prolonged copulation in which the male grips the female at the back of the neck, sometimes causing laceration and swelling. This demonstrates strong jaw restraint and persistence, but reproductive behavior is not treated as a direct bite-force measurement.

### Locomotion and maneuverability
The species is ground-active but an effective climber. ADW describes well-developed halluces and ridged foot pads associated with arboreal use. A 2026 anatomical study found *D. maculatus* forelimb architecture emphasizing muscle groups associated with arboreal locomotion. The long tail assists balance but is not prehensile.

### Endurance
Large male home ranges provide evidence for substantial routine travel capacity. Government and field studies report male ranges from hundreds to several thousand hectares, with ADW summarizing values up to roughly 3,762 ha. This supports above-average endurance for a small predator, but home-range size is not a direct treadmill measure and should not be converted into an invented continuous-speed feat.

### Senses
As a mostly nocturnal/crepuscular carnivore, the quoll uses vision, hearing and chemical cues. Communal latrines are important scent-marking sites, and olfaction is behaviorally important for territorial and reproductive communication. No echolocation, infrared sensing or comparable extreme sensory specialization is known.

### Intelligence and tactics
Predation across terrestrial and arboreal settings, den selection, scent communication, flexible scavenging and varied prey choice support useful tactical flexibility. There is no evidence for primate/corvid-level cognition or coordinated pack hunting, so Intelligence remains moderate.

### Predator defense
When threatened, spotted-tailed quolls can crouch, flatten/lower the ears, vocalize aggressively, retreat into narrow dens or cavities, and climb. Their cryptic spotted coat assists concealment. Against much larger predators, avoidance is more important than physical resistance.

### Environmental strengths and limitations
- **Best:** structurally complex forest, rocky terrain and wooded habitat with logs, hollows and climbing routes.
- **Good:** mixed ground/tree environments where it can exploit scansorial control.
- **Worse:** open terrain against larger pursuit predators, where concealment and vertical escape are reduced.
- **Major limitation:** no armor and low absolute mass.

### Weaknesses
- Only about 3.5 kg in the representative male.
- No heavy armor or specialized defensive weapon.
- Solitary, so no pack multiplier.
- Short natural lifespan and relatively high ecological vulnerability.
- Strong bite is impressive for body size but remains low in absolute force beside medium and large carnivores.

### Matchup archetypes
- **Favored against:** tiny vertebrates and similarly sized prey lacking strong armor or deterrent weapons.
- **Competitive against:** small terrestrial predators where jaw quality, climbing and aggression matter.
- **Unfavored against:** fox/wolf-sized and larger carnivores, large raptors in exposed terrain, armored reptiles and large hoofed mammals.
- **Terrain swing:** forest complexity materially improves survival and positioning without increasing raw physical power.

## 5. Proposed ABS substats

| Substat | Score | Justification |
|---|---:|---|
| Size | **16.0** | A 3.5 kg adult male is small on the 225-animal absolute roster. |
| Raw Power | **22.0** | Strong predatory musculature for its size, but very low absolute mass. |
| Weaponry | **38.0** | Sharp carnivorous teeth, relatively high bite performance and useful claws make the jaw system effective at small scale. |
| Protection | **14.0** | Fur and ordinary tissue provide little structural defense; no armor. |
| Toughness | **30.0** | Active predator capable of rough prey handling, but trauma tolerance is constrained by small body size. |
| Speed | **48.0** | Athletic small carnivore placement without inventing a maximum speed. |
| Maneuverability | **76.0** | Terrestrial agility plus strong climbing, ridged pads, hallux use and long-tail balance. |
| Endurance | **64.0** | Very large male home ranges support sustained travel capacity, though direct performance data are limited. |
| Recovery | **43.0** | No exceptional regeneration or unusually documented recovery mechanism. |
| Tactics | **60.0** | Flexible prey choice, terrestrial/arboreal hunting and den/terrain use. |
| Senses | **64.0** | Useful nocturnal multimodal perception and strong chemical communication without an extreme special sense. |
| Ferocity | **67.0** | Predatory behavior, vigorous defense and prolonged rough reproductive restraint support high willingness at its scale. |
| Abilities | **55.0** | Arboreal predation and unusually effective dasyurid jaw mechanics are useful but not exotic mechanisms. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **32.0** | A capable vertebrate-killing bite and claws, kept low enough to respect 3.5 kg absolute scale. |
| **Defense** | **22.0** | Evasion, concealment and climbing help survival, but there is almost no structural protection. |
| **Agility** | **77.0** | Strong ground control plus arboreal competence and specialized foot/forelimb function. |
| **Stamina** | **64.0** | Large ranging behavior supports good sustained movement, with limited direct physiological performance data. |
| **Intelligence** | **55.0** | Flexible solitary predator with useful sensory/tactical behavior but no evidence for elite cognition. |
| **Special** | **60.0** | Rigid high-performance predatory skull plus ground-to-canopy hunting versatility are meaningful but not roster-extreme. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Rigid-Skull Clamp** — Peer-reviewed finite-element work identifies a relatively high bite force and rigid skull in *D. maculatus*, supporting secure biting of prey across a broad size range.
2. **Ground-to-Canopy Pursuit** — Ridged foot pads, developed halluces, long-tail balance and forelimb architecture support prey pursuit and escape across terrestrial and arboreal surfaces.

### Unique traits
1. **Spotted Tail Signature** — Among quolls, *D. maculatus* is distinguished by white spotting continuing onto the tail, a useful exact-species diagnostic rather than a combat bonus.
2. **Wide-Ranging Solitary Hunter** — Adult males can use home ranges measured in the thousands of hectares, combining solitary territorial ecology with broad prey searching.

## 8. Expanded profile content

### Habitat
Rainforest, wet and dry sclerophyll forest, open forest, woodland, coastal heath, gullies, rocky escarpments and other structurally complex habitats. Dens occur in rock crevices, caves, hollow logs and tree hollows.

### Geographic range
Eastern Australia, with southern populations from Queensland through New South Wales and Victoria into Tasmania, plus the smaller northern subspecies *D. m. gracilis* in northeastern Queensland. The national recovery plan emphasizes fragmentation and substantial contraction from former distribution.

### Diet and ecology
An obligate/strongly carnivorous opportunist taking mammals, birds, reptiles, amphibians, insects and carrion. Medium-sized mammals can dominate diet. The quoll functions as a mesopredator/top native mammalian predator in many remaining mainland systems.

### Social structure
Mostly solitary. Home ranges overlap, particularly males with females, and communal latrines provide repeated scent-communication points. It does not hunt as a coordinated pack.

### Reproduction and life history
Breeding is seasonal. Gestation is about **21 days** and young continue development in the pouch. Litters commonly number around five, with independence around 18–21 weeks and sexual maturity around one year. Male-female mating interactions can last for hours and involve a neck grip.

### Conservation
ADW/IUCN-derived summaries list the species as **Near Threatened** globally, while Australian jurisdictions and EPBC listings distinguish threatened southern and northern populations/subspecies. Habitat loss and fragmentation, introduced predators, road mortality, poisoning and other human pressures are important threats. Conservation labels should therefore be stored with jurisdiction/population context rather than collapsed into one universal category.

### Major adaptations
- Strong carnivorous dentition and rigid skull.
- Ridged foot pads and developed hallux for climbing.
- Long tail for balance.
- Scent-marking at communal latrines.
- Flexible terrestrial and arboreal predation.
- Cryptic spotted coat.

### Human interaction
Spotted-tailed quolls may scavenge and occasionally take poultry, bringing them into conflict with people. Conservation management must also account for poison-bait exposure, habitat fragmentation, roads and introduced predators.

### Fun facts
- It is the **largest living quoll** and the largest living dasyurid after the Tasmanian devil depending on how the group is framed.
- It is the only quoll whose conspicuous white spots continue onto the tail.
- Southern males average roughly twice the mass of females in several datasets.
- Northern *D. m. gracilis* is dramatically smaller than southern populations.
- A quoll can hunt on the ground and climb trees after prey or to escape danger.
- Peer-reviewed skull modeling found a relatively high bite force and rigid skull rather than the weak-jawed condition expected from a generalized small marsupial.
- Male home ranges can extend over several thousand hectares.

### Concise site-ready summary
The spotted-tailed quoll is Australia's largest quoll, a solitary carnivorous marsupial built around a strong bite, flexible prey handling and unusually capable climbing. A representative southern adult male weighs about 3.5 kg, so its absolute power remains modest, but rigid skull mechanics, sharp dentition and ground-to-canopy maneuverability make it a dangerous opponent in the small-animal tier.

### Rich narrative profile
The spotted-tailed quoll occupies an unusual combat niche. At first glance it is a small, spotted marsupial weighing only a few kilograms. Its feeding anatomy tells a more serious story. Finite-element work places *D. maculatus* among mechanically capable marsupial carnivores, combining a relatively high bite force with a rigid skull suited to resisting loads from struggling prey. Field diet evidence matches the mechanics: mammals from roughly half a kilogram to several kilograms can dominate the menu, so the quoll routinely attacks vertebrates that are not trivial relative to its own mass.

Its second advantage is positional. The quoll is not restricted to the forest floor. Ridged pads, a developed hallux, specialized forelimb use and a long balancing tail allow it to climb, raid arboreal prey and escape vertically. This makes Agility the standout ABS headline rather than Attack. The scoring deliberately avoids pound-for-pound leakage: a 3.5 kg quoll cannot be given wolf-like damage or durability simply because its jaw is formidable for its size.

The weaknesses are equally clear. Fur is not armor, the body is small, and the species is solitary. Against a much larger predator it survives by terrain use, concealment, climbing and retreat rather than by absorbing damage. In its own size class, however, it is a specialized carnivore with a credible killing bite and much more three-dimensional mobility than a purely terrestrial opponent.

### Future structured-field proposals
- `canonical_taxon_resolution`: preserve that generic “Quoll” means *D. maculatus* in ABS.
- `canonical_subspecies_population`: southern *D. m. maculatus*.
- `sex`: adult male.
- `head_body_length_cm` and `tail_length_cm`: separate from total length when better specimen-level data are available.
- `locomotion_modes`: terrestrial / scansorial / arboreal.
- `prey_mass_band_g`: structured diet context rather than converting prey size into Attack directly.
- `conservation_jurisdiction`: distinguish IUCN, EPBC and state listings.

## 9. Evidence and source ledger

| Source | Direct URL | Supports | Finding | Confidence / conflict |
|---|---|---|---|---|
| Australian Government DCCEEW, National Recovery Plan for the Spotted-tailed Quoll | https://www.dcceew.gov.au/sites/default/files/documents/national-recovery-plan-spotted-tailed-quoll.pdf | taxonomy, dimorphism, mass, length, range, conservation | southern males up to 1.3 m / 7 kg; averages roughly 2.6–4.6 kg; females smaller; northern subspecies much smaller | High government synthesis; population means differ |
| Australian Government mammal survey guidelines | https://www.agriculture.gov.au/sites/default/files/documents/survey-guidelines-mammals.pdf | sex/population mass, habitat, activity, diet | SE adult males avg 2.8 kg (2.0–4.2), Tasmania males avg 3.5 kg; up to 80% diet medium mammals 0.5–5 kg | High government synthesis |
| NSW Environment and Heritage, Spotted-tailed Quoll | https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/spotted-tailed-quoll | adult sex-specific mass, morphology, habitat | adult male ~3.5 kg, female ~2 kg; spots continue down tail | High agency source |
| Animal Diversity Web, *Dasyurus maculatus* | https://animaldiversity.org/accounts/Dasyurus_maculatus/ | body/tail length, lifespan, reproduction, home range, senses, behavior | male HBL 38–76 cm, tail 37–55 cm; wild 2–5 y; solitary, climbing, scent communication | Moderate-high synthesis; some older references |
| Attard et al. 2011, Journal of Zoology | https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/j.1469-7998.2011.00844.x | skull mechanics, bite interpretation | relatively high bite force and rigid skull in *D. maculatus* | High peer-reviewed; not PSI and should not be converted |
| Bidaye et al. 2026, The Anatomical Record / PubMed | https://pubmed.ncbi.nlm.nih.gov/42036307/ | forelimb anatomy and locomotor specialization | *D. maculatus* muscle architecture emphasizes groups associated with arboreal locomotion | High peer-reviewed, recent |
| Wikimedia Commons, *Tiger Quoll 6178.jpg* | https://commons.wikimedia.org/wiki/File:Tiger_Quoll_6178.jpg | image candidate, exact species provenance | 5472x3648 wild exact-species photograph, Barren Grounds NR, NSW; CC BY-SA 3.0 | High provenance/license; adulthood and sex not explicit |

### Conflicts and uncertainty
- Adult male mass differs geographically. The 3.5 kg canonical value matches Tasmania and NSW agency summaries and sits inside southern government ranges without using the 7 kg maximum.
- Total length is variable and published sources often separate head-body and tail or report maxima. **105.0 cm** is a representative editorial canonical total, not a measured population mean; confidence is moderate.
- No strong species-specific maximum speed was recovered. Tertiary “30 km/h” style values are excluded.
- No measured bite pressure in PSI was recovered. The biomechanical paper supports relative bite performance, not a PSI conversion.
- Conservation status varies by authority, subspecies and jurisdiction; do not collapse all threatened listings into one label.

## 10. Cross-animal normalization notes

- At **3.5 kg**, Quoll must remain far below medium carnivores such as foxes, jackals and wolves in Raw Power, Attack and Defense even though its bite is excellent for its size.
- Quoll Attack **32.0** is above Quokka **18.0** because it is a dedicated vertebrate predator with mechanically strong jaws, but it remains below larger specialist carnivores.
- Quoll Defense **22.0** stays close to other lightly protected small mammals. Climbing is primarily Agility/escape, not armor.
- Agility **77.0** is the standout score because ground-to-tree movement is directly supported anatomically and behaviorally. It does not depend on an unsupported top-speed number.
- Stamina **64.0** uses large-ranging ecology as supporting evidence but is kept well below elite endurance specialists such as Pronghorn **96.0**.
- Special **60.0** credits skull/arboreal specialization without treating ordinary carnivory as an exotic superpower.
- No proportional-strength feat is converted into heavyweight absolute power.

## 11. Mandatory image requirement

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/quoll.png` (not created)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Tiger_Quoll_6178.jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/7/74/Tiger_Quoll_6178.jpg
- **file_format_verified:** source is JPEG; no final PNG exists
- **alpha_verified:** no
- **full_body_verified:** no. The 5472x3648 source is exact-species, wild, high resolution and reusable, but the available inspection/search path did not establish every foot and the complete tail strongly enough for the mandatory strict standard.
- **adult_verified:** no. Source metadata does not explicitly state adulthood.
- **sex_verified_or_unknown:** unknown; no visual sex inference used
- **license_status:** CC BY-SA 3.0, reusable with attribution/share-alike
- **notes:** A separate 2500x1667 CC BY-SA 3.0 Bonorong exact-species photograph was visually inspected and rejected as the primary because the branch pose/tail framing does not clearly satisfy complete anatomy. A visually clean road-standing source was also found during broad image search, but reuse provenance was not sufficiently clear to redistribute it. Current connected GitHub write actions are UTF-8 text-only, so no fake PNG or renamed JPEG is committed.