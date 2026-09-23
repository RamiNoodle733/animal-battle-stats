# Reticulated Python research report

## 1. Identity and canonical specimen

- **Roster name:** Reticulated Python
- **Resolved taxon:** reticulated python, ***Malayopython reticulatus*** (Schneider, 1801), historically *Python reticulatus* in much of the primary literature.
- **Living/extinct:** Living.
- **Exact animal represented:** the nominal large reticulated-python complex represented by the site's current scientific name *Malayopython reticulatus*, not a different generic python.
- **Canonical combat specimen:** healthy prime **adult female**, because females attain materially larger adult body sizes and are the stronger fighting sex for an absolute-combat roster.
- **Canonical body:** **50.0 kg**, **500.0 cm total length**. This is a large mature female, not a record individual.
- **Critical roster duplication:** ABS already has a completed `Python` staging report and the live Python entry resolves to the same taxon. The two roster labels therefore represent the same biological animal unless the roster is later deliberately split. This report does not invent a second species or drift its ratings merely to create artificial differentiation.

### Sexual dimorphism, population variation, and uncertainty
Shine et al. examined 1,070 southern-Sumatran reticulated pythons ranging from about 1.5 m to more than 6 m snout-vent length and 1 to 75 kg. Females attained much larger maxima than males, approximately 75 versus 20 kg and 7 versus 5 m, while head length at a given body length did not significantly differ by sex. The authors also found that body condition varied by sampling trip and reproductive state. A later broad management review notes that a sample exceeding 10,000 pythons across the range produced a largest female of 7 m and largest male of 4.8 m, while mean dimorphism can be much less dramatic in some populations.

The canonical 50 kg / 5 m female is therefore an editorial representative of a large, healthy, mature female within documented field envelopes. It is not asserted to be the species-wide female mean. Locality, island population, reproductive state, feeding history and harvest sampling all matter.

## 2. Physical dimensions and performance

### Mass
- **Proposed canonical `weight_kg`: 50.0.**
- Southern-Sumatran field sampling documented females up to 75 kg and males up to 20 kg.
- A compiled species database lists 47.5 kg as an adult-weight value and 75 kg for females, broadly consistent with a 50 kg representative large female.
- **Confidence:** moderate. There is no single unbiased cross-range adult-female mean.

### Length
- **Proposed canonical `length_cm`: 500.0 total length.**
- Field work documents strong female-biased maximum size, with females reaching roughly 7 m in the southern-Sumatran sample.
- Broad management synthesis similarly reports a 7 m largest female in a very large range-wide sample.
- **Confidence:** moderate-high that 5 m is a credible large mature female; lower that it is universally representative across populations.

### Height
- **Proposed canonical `height_cm`: 0.0.** Standing height is not a biologically meaningful snake field. Body diameter would be more useful if specimen-specific measurements were available.

### Speed and locomotion
- **Proposed canonical `speed_mps`: 0.0.** No defensible instrumented species-specific maximum travel speed was recovered. Common tertiary values are not promoted to canonical data.
- Reticulated pythons are competent terrestrial crawlers, swimmers and climbers, especially when smaller. Large females trade some maneuverability for girth and constriction performance.
- **Confidence:** high that a precise maximum should remain unresolved under the project's evidence standard.

### Lifespan
- **Proposed canonical `lifespan_years`: 20.0.** This is a managed-care representative, not a measured wild mean. Compiled longevity material reports a maximum near 29 years and husbandry references commonly place potential captive longevity in the multi-decade range.
- Wild longevity is much less certain.
- **Confidence:** moderate-low for a universal representative, high that a precise wild average is unavailable.

### Bite force
- **Proposed canonical `bite_force_psi`: 0.0.** No defensible standardized species-specific bite-pressure measurement was recovered. Recurved teeth primarily seize and retain prey while the body establishes coils. No force-to-PSI conversion is fabricated.

### Constriction pressure
Boback et al. directly measured constriction in reticulated and Burmese pythons. Reticulated pythons generated maximum pressures of **8.27 to 53.77 kPa** in the tested animals, and peak pressure increased significantly with snake diameter. The study emphasizes circulatory disruption as a rapid lethal mechanism rather than the popular oversimplification that constrictors kill mainly by crushing bones or merely preventing breathing.

This is strong species-specific performance evidence, but it is not a bite-force measurement and should never be entered into `bite_force_psi`.

### Teeth and weapon dimensions
The jaws contain numerous recurved teeth suited to anchoring prey against withdrawal. No sufficiently robust representative tooth-length dataset was recovered for a canonical field. The teeth are important because they secure the transition to coiling, not because they provide a singular high-force bite.

### Defensive structures
Keratinized scales provide abrasion resistance, and the trunk is a long, densely muscled structure. This is not rigid armor. The skull, cervical region and spine remain vulnerable to crushing, tearing and cutting trauma. Distributed body length can allow some continued function after localized superficial injury, but major spinal injury can be decisive.

## 3. Proposed canonical factual fields

```json
{
  "weight_kg": 50.0,
  "height_cm": 0.0,
  "length_cm": 500.0,
  "speed_mps": 0.0,
  "lifespan_years": 20.0,
  "bite_force_psi": 0.0
}
```

`0.0` for speed and bite pressure means unresolved under the evidence standard, not literally motionless or incapable of biting.

### Future structured field proposals
- `canonical_sex`: female
- `body_length_context`: large representative adult, not record
- `constriction_pressure_kpa`: specimen-normalized only if migrated directly from primary measurements
- `infrared_labial_pits`: true
- `aquatic_competence`: qualitative or structured locomotor field
- `roster_duplicate_of`: Python, pending roster-resolution decision

## 4. Combat biology

### Primary weapon: constriction
The reticulated python is a nonvenomous constrictor. A successful attack begins with rapid close contact, typically an anchoring bite, followed by trunk loops around the target. Direct measurements demonstrate that larger-diameter reticulated pythons generate greater peak constriction pressure. Once multiple coils are securely established around the torso or neck of a manageable opponent, circulatory function can be compromised rapidly and escape becomes progressively harder.

### Secondary weapon: anchoring bite
The bite is a control and transition weapon. Recurved teeth resist backward withdrawal and keep the prey attached while coils are placed. The bite can lacerate tissue, but treating an unsupported PSI value as the core weapon would misrepresent the animal's biology.

### Offensive mechanics
The ideal sequence is concealment or close approach, short strike, tooth retention, immediate loop placement, tightening, and coil repositioning as the prey struggles. The system is highly positional. It becomes dangerous once control is established but is much less effective when the snake cannot get close, cannot wrap enough of the target, or must absorb severe head/spine damage during the initial grapple.

### Defense and durability
A 50 kg, 5 m python distributes large amounts of axial muscle along an elongated body. This can make one superficial body wound less immediately disabling than an equivalent wound to a compact small animal. Defensive coiling can partially shelter the head. However, scales are not armor and the snake presents a very long target. Powerful claws, crushing bites, trampling, cutting attacks and spinal trauma remain serious vulnerabilities.

### Locomotion and maneuverability
Reticulated pythons can move terrestrially, climb and swim. Their elongated flexible bodies provide excellent wrapping control around prey, branches and irregular structures. This close-range positional control is distinct from high open-ground agility. Large females are not pursuit specialists, and no unsupported maximum speed is allowed to inflate Agility.

### Endurance and energy economy
The species can function on infrequent feeding and survive in environments where meals are episodic. That is exceptional energy economy, not evidence of elite aerobic combat endurance. Constriction is intense but usually short-duration relative to migration or cursorial pursuit. Stamina is therefore moderate.

### Senses
The species combines tongue-flick/vomeronasal chemoreception, mechanosensation and heat-sensitive labial pits. Neuroanatomical and physiological work on pit-bearing snakes supports specialized infrared transduction and a dedicated pathway into the tectal sensory system. This helps locate warm-bodied prey in darkness and clutter. It should not be described as camera-like thermal imaging.

### Intelligence and tactics
Reticulated pythons show effective sensory-guided ambush and foraging behavior, with strong size-related prey shifts. Shine et al. found smaller snakes feeding heavily on rats and larger snakes shifting toward larger mammals including pangolins, porcupines, monkeys, wild pigs and mouse deer. That is ecological flexibility and effective prey selection, not evidence for mammalian or corvid-level planning.

### Predation behavior
Management synthesis describes both nocturnal ambush and active foraging, including positioning near animal trails or water and attraction to prey-rich sites. Large individuals can tackle unusually large mammalian prey. Rare attacks on humans demonstrate upper-end capability but are not used as the normal baseline.

### Intraspecific fighting and social behavior
The species is primarily solitary outside reproductive interactions. There is no cooperative hunting or coalition combat to justify a social multiplier. Reproductive investment can be large, especially for females, and reproductive state can materially alter body condition.

### Environmental advantages
- Dense tropical vegetation and clutter that reduce engagement distance.
- River margins, wetlands and water where swimming and concealment matter.
- Darkness where thermal and chemical sensing preserve target acquisition.
- Trees and structural complexity that provide anchors and three-dimensional control.
- Close quarters where opponents cannot maintain range.

### Environmental disadvantages
- Open ground where concealment is poor.
- Cold conditions that reduce ectothermic performance.
- Targets too large or shaped poorly for effective encirclement.
- Fast opponents that avoid the initial strike and maintain distance.
- Opponents with strong cutting, tearing, crushing or trampling weapons that can attack the head/spine during a grapple.

### Major weaknesses
- No rigid armor.
- Contact-dependent offense.
- Critical vulnerability of head and upper spine.
- A failed bite-and-wrap exposes a long body to counterattack.
- Ectothermic output is temperature-sensitive.
- Fasting tolerance does not equal repeated high-intensity output.

### Matchup archetypes
- **Favorable:** smaller or similarly sized vertebrates with weak anti-grapple weapons, especially in clutter or near water.
- **Competitive:** medium predators where first secure control can decide the encounter but teeth/claws can punish a failed wrap.
- **Unfavorable:** heavily armored animals, large crocodilians, strong clawing predators, large hoofed animals able to stomp, and highly mobile open-ground opponents.
- **Extremely unfavorable:** multi-tonne megafauna beyond practical constriction/control scale.

## 5. Proposed ABS substats

All values use the absolute roster-wide 0.1 to 100.0 scale.

| Substat | Score | Justification |
|---|---:|---|
| Size | **56.0** | Five metres is exceptional length, but 50 kg remains far below megafaunal mass. |
| Raw Power | **66.0** | Whole-trunk muscular output is formidable for the mass class and directly supported by constriction-pressure measurements. |
| Weaponry | **74.0** | Recurved anchoring teeth plus whole-body coils can convert secure contact into rapid incapacitation. |
| Protection | **32.0** | Scales and muscle resist abrasion/minor trauma but provide no rigid armor. |
| Toughness | **57.0** | Distributed muscular body tolerates some localized injury; severe skull/spinal trauma remains decisive. |
| Maneuverability | **52.0** | Excellent wrapping, climbing and swimming control, but a large female is not a rapid open-ground turner. |
| Speed | **31.0** | Ambush/grapple specialist; reliable maximum travel speed unresolved. |
| Endurance | **52.0** | Can sustain a grapple and has exceptional energy economy, but evidence for prolonged high-output exercise is limited. |
| Recovery | **42.0** | No exceptional regeneration; low metabolism is not rapid tissue recovery. |
| Tactics | **49.0** | Effective ambush-to-coil sequence and size-dependent prey selection without evidence of advanced strategic cognition. |
| Senses | **72.0** | Chemosensation, mechanosensation and heat-sensitive labial pits form a strong close-range targeting suite. |
| Ferocity | **60.0** | Capable of committing to dangerous prey once contact is established, without evidence of indiscriminate aggression. |
| Abilities | **82.0** | Directly measured constriction plus specialized thermal targeting have major matchup impact. |

## 6. Proposed six headline ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **72.0** | Secure bite-to-coil control can incapacitate large prey, with direct pressure evidence, but the mechanism is contact-dependent. |
| **Defense** | **47.0** | Large muscular body and defensive coiling help, but lack of armor and head/spine vulnerability cap the score. |
| **Agility** | **52.0** | Flexible three-dimensional body control, climbing and swimming are useful without confusing them with pursuit speed. |
| **Stamina** | **52.0** | Good grappling persistence and energy economy, but not an aerobic endurance specialist. |
| **Intelligence** | **44.0** | Effective sensory-guided predator with ecological flexibility, far below high-cognition vertebrate anchors. |
| **Special** | **82.0** | Infrared pit targeting and whole-body constriction are unusually matchup-changing systems. |

### Duplicate normalization control
The completed `Python` report resolves to the same *M. reticulatus* taxon and uses the same canonical specimen and ratings. Keeping the two reports numerically aligned is intentional and required by CALIBRATION.md's anti-drift logic. A later roster cleanup should either merge the duplicate or explicitly redefine `Python` as another python taxon before different ratings are justified.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Pressure Coil Lock**: the anchoring bite enables multiple trunk loops to apply diameter-scaled circumferential pressure; direct experiments on *P. reticulatus* show larger snakes generate higher peak constriction pressure.
2. **Infrared Pit Targeting**: heat-sensitive labial pits add thermal target information to chemical and mechanical sensing, improving warm-prey localization in darkness and close ambush conditions.

### Unique traits
1. **Female Giant Form**: strong female-biased sexual size dimorphism places mature females in the species' largest and most powerful combat class.
2. **Length-Dominant Heavyweight**: exceptional body length gives reach and encirclement capacity without megafaunal mass, creating a distinctive long-bodied grappling profile.

## 8. Expanded profile

### Habitat and range
Reticulated pythons occur across South and Southeast Asian tropical systems, including mainland and island populations. They occupy forests, river margins, wetlands, mangroves, agricultural mosaics and human-modified landscapes. Water is important in much of the range, but the species is not restricted to aquatic habitat.

### Diet and ecology
They are carnivorous predators whose prey spectrum changes strongly with size. Southern-Sumatran field data show smaller snakes feeding heavily on rats, while snakes around 3 to 4 m and above increasingly take larger mammals. Recorded categories include pangolins, porcupines, monkeys, wild pigs and mouse deer. Exploitation of commensal rodents helps explain persistence near agriculture and settlements.

### Social structure
Primarily solitary. There is no evidence for cooperative hunting that should affect an individual battle rating.

### Reproduction and life history
Reticulated pythons are oviparous. Female reproductive investment can be substantial, and maturation size varies geographically. Reproductive state can change body condition enough that field samples should not be treated as a single uniform body-mass distribution.

### Conservation and trade
The species is widespread and heavily involved in Southeast Asian skin and meat trade systems. Harvest studies provide unusually large morphological datasets, but those datasets can contain capture and market-selection biases. Conservation/trade management should therefore be kept separate from claims about a universal adult size.

### Adaptations
- Highly flexible axial skeleton and powerful trunk musculature for constriction.
- Recurved teeth for prey retention.
- Heat-sensitive labial pits for warm-target detection.
- Tongue-flick/vomeronasal chemical tracking.
- Strong swimming ability and competent climbing.
- Cryptic reticulated pattern that disrupts outline in vegetation and dappled light.

### Human interaction
Large reticulated pythons can injure or rarely kill humans, and exceptional cases of predation are documented. Those cases demonstrate capability at the extreme end but are rare and should not replace representative prey ecology. The species is also commonly kept in captivity and bred into color/pattern morphs.

### Genuine fun facts
1. Reticulated pythons are among the longest living snakes, but longest does not mean heaviest.
2. In a 1,070-snake field study, females reached much larger maximum size than males.
3. Their prey spectrum changes markedly as they grow, shifting from rats toward larger mammals.
4. Direct experiments show constriction pressure rises with snake diameter.
5. Constriction can disrupt circulation very rapidly, so the mechanism is more sophisticated than simply "squeezing the air out."
6. Their labial pits detect infrared/thermal cues from warm targets.
7. The species can thrive in human-modified landscapes where rodents and domestic prey are abundant.

### Concise site-ready summary
The reticulated python is a giant Southeast Asian ambush constrictor built around one decisive sequence: seize, wrap and compress. A large adult female combines exceptional reach, powerful whole-body coils, recurved anchoring teeth and heat-sensitive labial pits. Its offense becomes formidable after secure contact, but lack of armor, ectothermic physiology and vulnerability of the head and spine keep it below megafaunal bruisers on an absolute roster scale.

### Narrative profile
A reticulated python does not win by chasing an opponent across open ground or trading repeated strikes. Its body is the weapon. The snake's sensory systems help it identify a target at close range, the jaws establish the first anchor, and the trunk converts contact into control. Each successful loop changes the geometry of the fight by restricting the opponent's movement and allowing pressure to be maintained over a large surface.

That specialization produces a sharp matchup curve. Against prey it can wrap effectively, especially in vegetation, water margins or structural clutter, one successful initiation can be decisive. Against an armored opponent, a much larger animal, or a mobile attacker that can repeatedly damage the head and spine without being caught, the same elongated body becomes a liability. Its extraordinary fasting tolerance also should not be confused with endless combat stamina. The reticulated python is best modeled as a powerful contact grappler with unusual sensory assistance, not as a generic high-stat giant reptile.

## 9. Image requirement audit

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/reticulated-python.png` (not created)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Reticulated_python_MP1.JPG
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/4/4d/Reticulated_python_MP1.JPG
- **file_format_verified:** source is JPEG; no staging PNG exists
- **alpha_verified:** false
- **full_body_verified:** false
- **adult_verified:** false for the reusable primary candidate
- **sex_verified_or_unknown:** female
- **license_status:** public domain
- **notes:** Commons identifies the 3504x2336 subject as a 2-year-old, 3 m female reticulated python. It has strong exact-species, sex, resolution and reuse provenance, but the stated age does not establish the mandatory healthy adult criterion and the coiled pose does not provide a sufficiently strict whole-silhouette certification. A separate Flickr source explicitly identifies a wild adult female on Pulau Tioman, Malaysia, but redistribution permission was not established during this run. No PNG is claimed. The connected GitHub writer is UTF-8 text-only, so a real RGBA binary cannot be committed through the available write action.

Rejected/secondary candidates:
- https://www.flickr.com/photos/gondwanareptileproductions/36905670662/ explicitly identifies a wild adult female *M. reticulatus* from Pulau Tioman. Strong age/sex/taxon evidence, but reuse permission and strict complete-body framing were not simultaneously verified.
- https://www.flickr.com/photos/96574168@N02/18448244089 explicitly identifies an adult wild *M. reticulatus* from Tioman Island; sex and redistribution permission are unresolved.

## 10. Source ledger

| Source | Direct URL | Claims supported | Context | Confidence / caveats |
|---|---|---|---|---|
| Shine, Harlow, Keogh & Boeadi, Functional Ecology | https://doi.org/10.1046/j.1365-2435.1998.00179.x | 1,070 snakes; 1-75 kg; strong female-biased size; maxima ~20 kg male / 75 kg female and ~5 m / 7 m; ontogenetic prey shifts | Southern Sumatra | **High** for sampled population; harvest sample is not a random global mean |
| PERHILITAN / management synthesis, Chapter II: The reticulated python | https://files.wildlife.gov.my/wildlife-wp-media/2025/09/14175642/Pythons.pdf | Range-wide management synthesis; sexual dimorphism; >10,000-snake sample summary; ecology and foraging | Southeast Asian management context | **High-moderate**; synthesis depends on cited underlying studies |
| Boback et al., Journal of Experimental Biology | https://journals.biologists.com/jeb/article/218/21/3364/14434/The-big-squeeze-scaling-of-constriction-pressure | Direct constriction pressure 8.27-53.77 kPa; pressure increases with diameter; circulatory mechanism | Experimental pythons | **High** for tested animals; do not convert to bite PSI |
| USGS Open-File Report 2009-1202 | https://pubs.usgs.gov/of/2009/1202/pdf/OF09-1202.pdf | Female maturation/maximum size larger; adult females reported ~42% longer on average in one study; sampling caveats | Species risk/ecology synthesis | **High-moderate**; summarizes multiple populations |
| Reptile Database | https://reptile-database.reptarium.cz/Malayopython/reticulatus | Current taxonomic usage, synonyms, subspecies listing | Taxonomy | **High** for nomenclatural context |
| World Species compilation | https://www.worldspecies.org/ntaxa/1702136/L | Adult-weight compilation and longevity maximum near 29 y | Compiled database | **Moderate**; secondary compilation, not used alone for combat claims |
| Wikimedia Commons, Reticulated python MP1 | https://commons.wikimedia.org/wiki/File:Reticulated_python_MP1.JPG | Exact species, female, age 2 y, length 3 m, 3504x2336, public domain | Captive individual | **High provenance**, fails mandatory adult/full-body verification |
| Rob Valentic Flickr | https://www.flickr.com/photos/gondwanareptileproductions/36905670662/ | Explicit wild adult female exact species on Pulau Tioman | Wild adult female | **High identity**, redistribution/full-body verification unresolved |

## 11. Confidence, conflicts and normalization

### Main uncertainties
- **Representative mass/length:** strong field evidence exists for size envelopes and dimorphism, but no unbiased global adult-female mean. Canonical 50 kg / 5 m is an editorial representative inside the documented mature-female range.
- **Speed:** unresolved. Tertiary maximum-speed claims were rejected.
- **Bite force:** unresolved. No fabricated PSI.
- **Lifespan:** managed-care evidence is stronger than wild lifespan evidence.
- **Constriction:** unusually strong direct experimental evidence, but measured pressures vary with diameter and specimen.
- **Taxonomy:** older literature uses *Python reticulatus*; current roster and modern taxonomy use *Malayopython reticulatus*.

### Cross-animal normalization notes
- **Python duplicate:** same taxon, same canonical specimen, same ratings by design. Any divergence would be artificial until the roster identity is changed.
- **Green Anaconda:** similar grappling archetype. Reticulated Python receives slightly higher Attack/Special than the existing Green Anaconda control because of the direct *P. reticulatus* pressure evidence and well-characterized infrared sensory anatomy, while anaconda retains stronger aquatic/bulk-defense emphasis.
- **Rattlesnake:** rattlesnake Special is higher because venom is a more independent biochemical matchup changer; reticulated python has much greater absolute size and grappling power.
- **Polar Bear / megafauna:** a 50 kg python must remain far below a 500 kg polar bear or multi-tonne herbivore in raw mass-based power and durability despite impressive proportional performance.
- **Small specialists:** the python's 72 Attack reflects real ability to incapacitate substantial vertebrate prey, not pound-for-pound admiration. Tiny venomous or mechanically impressive animals should not be compressed toward it in absolute Attack without comparable damage potential.

### Final verification against README.md and CALIBRATION.md
- Healthy representative adult and stronger fighting sex used: **yes**.
- Sexual dimorphism/population variation documented: **yes**.
- Factual measurements separated from editorial ratings: **yes**.
- Unsupported PSI avoided: **yes**.
- Speed not confused with Agility: **yes**.
- Absolute roster scale used: **yes**.
- Exactly two named special abilities: **yes**.
- Exactly two unique traits: **yes**.
- Six one-decimal headline ratings: **yes**.
- Current substats scored with one decimal: **yes**.
- Rich ecology/profile/fun facts/source ledger/future fields included: **yes**.
- Mandatory image section included with truthful pending status: **yes**.
- Production data/site/live images modified: **no**.