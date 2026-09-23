# Python research report

## 1. Identity and canonical specimen

- **Roster name:** Python
- **Resolved taxon:** reticulated python, *Malayopython reticulatus* (Schneider, 1801), historically and in much of the primary literature *Python reticulatus*.
- **Living/extinct:** Living.
- **Canonical combat specimen:** healthy prime **adult female**, because females are materially larger than males and therefore represent the stronger fighting sex.
- **Canonical body:** **50.0 kg**, **500.0 cm total length**. This is a large mature female without using a record animal.
- **Important roster duplication:** ABS separately contains `Reticulated Python` later in `DATA_PROGRESS.md`. The current live Python page itself identifies Python as *Python reticulatus*. This report therefore researches the taxon actually attached to the Python roster entry, but the later Reticulated Python report must flag the duplicate and should not invent a second biology merely to force differentiation.

### Taxonomy, dimorphism and population variation

Modern sources generally use *Malayopython reticulatus*, while older primary studies use *Python reticulatus*. The taxonomic name change does not change the biological identity researched here.

Sexual size dimorphism is strong. Shine et al. examined 1,070 southern-Sumatran reticulated pythons spanning roughly 1.5 to more than 6 m snout-vent length and 1 to 75 kg. Females attained much greater maxima than males in that sample, about 75 versus 20 kg and 7 versus 5 m, while head length at a given body length did not differ significantly between sexes. A separate northern-Sumatran study of 784 harvested animals found that females again attained larger sizes, while very large females were rarely captured and maturation size varied geographically. These field datasets are preferred over spectacular internet record claims.

The canonical 50 kg / 5.0 m female is therefore an editorial representative combat specimen inside the credible mature-female envelope, not a claim that 50 kg is a universal female mean. Body condition, locality, reproductive state, recent feeding and island population can all shift mass substantially.

## 2. Physical measurements

### Mass
- **Canonical `weight_kg`: 50.0.**
- Southern Sumatra field sampling reached 75 kg and showed females substantially larger than males.
- A compiled species database reports 47.5 kg as an adult-weight value and 75 kg for females, broadly consistent with choosing 50 kg as a non-record large adult.
- **Confidence:** moderate. A single cross-range adult-female mean is not well established, and harvest samples are not random population samples.

### Length
- **Canonical `length_cm`: 500.0 total length.**
- Shine et al. documented females reaching about 7 m in the southern-Sumatran sample and males about 5 m; mature size differs among populations.
- ADW and husbandry sources publish larger and sometimes internally inconsistent values, so this report does not use their extreme range as a canonical baseline.
- **Confidence:** moderate-high that 5 m is a credible large mature female; lower for a universal species-wide representative.

### Height
- **Canonical `height_cm`: 0.0.** Standing height is not a biologically useful snake measurement.

### Speed
- **Canonical `speed_mps`: 0.0.** No defensible instrumented species-specific maximum speed was recovered. Tertiary claims around 1 mph or 6 km/h are not used as measurements. Reticulated pythons are capable swimmers and climbers, but those facts do not establish a maximum speed.

### Lifespan
- **Canonical `lifespan_years`: 20.0.** This is a managed-care representative rather than a measured wild mean. Species references commonly place captive longevity in roughly the 12-30 year band, and one longevity compilation reports a maximum around 29 years. Wild longevity is substantially less certain.
- **Confidence:** moderate-low for a universal lifespan, high that the live site's 25-year legacy value should not be treated as a precise wild average.

### Bite force
- **Canonical `bite_force_psi`: 0.0.** No defensible standardized species-specific bite-pressure measurement was recovered. The live site's legacy 200 PSI value is not retained. The teeth function mainly to seize and anchor prey so coils can be established.

### Constriction performance
Boback et al. directly studied *P. reticulatus* and Burmese pythons and found that peak constriction pressure increased significantly with snake diameter. Their key result is pressure scaling and the ability of giant pythons to generate pressures well above prey blood pressure. This is genuine species-specific performance evidence, but the report does **not** convert constriction pressure into bite PSI or invent one fixed whole-species constriction number.

### Infrared sensory anatomy
Reticulated pythons possess multiple maxillary, mandibular and mental pit organs. Neuroanatomical work identified the trigeminal neurons innervating those pits, and electrophysiological/anatomical studies established a dedicated infrared pathway to the tectum. Pit-organ neurons respond to infrared/warm stimuli, and later molecular work identified highly heat-sensitive TRPA1 channels as the infrared transduction mechanism in pit-bearing snakes.

### Teeth and other weapons
No robust representative tooth-length dataset suitable for an ABS canonical field was recovered. The jaws carry numerous recurved teeth that provide a high-retention grip. The main damage system is not a high-PSI bite but the transition from bite to whole-body constriction.

### Defenses
The body is covered by keratinized scales over dense axial musculature. This gives abrasion resistance and substantial muscular bulk but not rigid armor. A long body can tolerate some localized superficial injury while still maintaining coils, but the skull, cervical region and spine remain vulnerable to severe crushing, cutting and tearing trauma.

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

`0.0` for speed and bite pressure means unresolved under the evidence standard, not literally motionless or unable to bite.

### Future physical fields
- `sex`: female
- `body_length_context`: representative large adult, not record
- `constriction_pressure_kpa`: only if a future migration extracts a specimen-normalized value directly from primary measurements
- `labial_pit_count`: species-specific sensory anatomy field
- `aquatic_competence`: qualitative/structured locomotor field

## 4. Combat biology

### Primary weapon: whole-body constriction
The reticulated python is a nonvenomous ambush constrictor. A successful attack typically begins with a rapid bite that anchors the prey, followed by loops of the trunk. Boback et al.'s direct *P. reticulatus* measurements show that larger-diameter snakes produce greater peak constriction pressures. Work on constrictors more generally demonstrates that constriction can rapidly disrupt circulation rather than simply "crush bones." For ABS, the practical consequence is a positional weapon: once multiple coils are securely established around the torso or neck of a manageable opponent, escape becomes progressively harder and cardiovascular function can be compromised.

### Secondary weapon: anchoring bite
The bite is a gateway weapon. Recurved teeth resist backward withdrawal, keeping prey attached during the critical transition to coiling. Laceration is possible, but assigning a dramatic bite-pressure value would misrepresent the species' actual kill mechanics.

### Offensive mechanics
A favorable sequence is concealment, short strike, tooth retention, immediate loop placement, tightening and coil repositioning as the prey moves. The system is strongest against opponents that enter close range and cannot efficiently attack the head or prevent the first wrap. It is weaker against heavily armored animals, opponents too large to encircle effectively, or mobile attackers able to damage the snake before a secure coil develops.

### Defense and toughness
A 50 kg python has a large quantity of muscle distributed along five metres of body. That makes the animal harder to disable through one superficial body wound than a compact animal of similar mass. Coiling can also shield the head. However, scales are not armor, and distributed length creates a large target. Deep bites, clawing, trampling, spinal injury and skull trauma remain decisive threats.

### Locomotion and maneuverability
Reticulated pythons are capable terrestrial crawlers, climbers and swimmers. Their long flexible body gives excellent close-range wrapping control around branches, prey and irregular surfaces, but they are not high-speed pursuit animals. Large adult females trade some nimbleness for girth and constriction performance. No unsupported top-speed figure is allowed to substitute for agility.

### Endurance and energy economy
Field ecology shows that these snakes can persist with infrequent feeding and can occupy disturbed habitats without extensive movements. That supports exceptional energy economy, not elite aerobic combat output. Constriction is intense but relatively localized in time. Stamina should therefore be moderate rather than being inflated from fasting ability.

### Senses
The sensory package is unusually relevant to ambush. Tongue-flicking and vomeronasal chemoreception track chemical cues; mechanosensation detects substrate/contact information; and the labial pit system detects infrared thermal radiation from warm targets. In *P. reticulatus*, infrared input has been traced through trigeminal pathways to the optic tectum. This is a genuine matchup-changing targeting system, especially in darkness, but it is not literal image-forming "thermal vision" equivalent to a camera.

### Intelligence and tactics
Reticulated pythons are effective sensory-guided ambush predators that alter prey use with body size and sex. Shine et al. documented strong ontogenetic dietary shifts, with larger snakes moving from rats toward larger mammals including pangolins, porcupines, monkeys, wild pigs and mouse deer. This demonstrates flexible prey ecology, not mammalian-level planning. Intelligence remains below birds, primates, cetaceans and flexible mammalian predators.

### Predation behavior
Smaller snakes focus heavily on rats; at roughly 3-4 m, diets shift toward larger mammals. Females shift toward larger prey at smaller body sizes than males in the southern-Sumatran dataset. Reticulated pythons are among the few living snakes capable of taking very large mammalian prey, but rare human predation should not be used as a normal attack baseline.

### Intraspecific and reproductive behavior
The species is generally solitary. Northern-Sumatran field work found high fecundity, with a mean clutch of about 24.2 large eggs, but females reproduced only once every two to four years. Reproductive biology matters to body condition and energy allocation but does not justify a social-combat bonus.

### Environmental strengths
- Dense tropical vegetation and clutter that shorten engagement distance.
- Riverbanks, wetlands and other habitats where swimming and concealment matter.
- Darkness, where infrared and chemical sensing preserve target acquisition.
- Trees and structural complexity that support anchoring and three-dimensional body control.
- Close quarters where an opponent cannot maintain range.

### Environmental disadvantages
- Open terrain where concealment is poor.
- Cold conditions that suppress ectothermic performance.
- Very large opponents that cannot be effectively encircled.
- Long-range or highly mobile attackers that avoid the initial bite.
- Opponents with cutting, tearing or crushing weapons able to reach the head during a grapple.

### Major weaknesses
- No rigid armor.
- Offense is strongly dependent on establishing close contact.
- Head and upper spine are critical targets.
- A failed bite-and-wrap exposes a long body to counterattack.
- Ectothermic output is temperature-sensitive.
- Exceptional fasting capacity is not equivalent to repeated high-intensity output.

### Matchup archetypes
- **Favorable:** smaller or similarly sized vertebrates with weak anti-grapple weapons, especially in clutter or near water.
- **Competitive:** medium predators where first secure control can decide the encounter but teeth/claws can punish a failed wrap.
- **Unfavorable:** heavily armored animals, large crocodilians, strong clawing predators, large hoofed animals able to stomp, and highly mobile open-ground opponents.
- **Extremely unfavorable:** multi-tonne megafauna that exceed practical constriction/control scale.

## 5. Proposed ABS substats

All values use the absolute 0.1-100.0 roster scale.

| Substat | Score | Justification |
|---|---:|---|
| Size | **56.0** | Five metres is extreme length, but the canonical 50 kg female remains far below true megafauna in absolute mass. |
| Raw Power | **66.0** | Whole-trunk muscular output is formidable for this mass class, with species-specific constriction-pressure evidence. |
| Weaponry | **74.0** | Recurved anchoring teeth plus a powerful coil system can turn one secure contact into incapacitation. |
| Protection | **32.0** | Scales and muscle protect against abrasion and minor trauma but provide no rigid armor. |
| Toughness | **57.0** | Distributed muscular body can remain functional after localized injury, while head/spine trauma remains decisive. |
| Maneuverability | **52.0** | Flexible wrapping, climbing and swimming control are strong; a large female is not a rapid open-ground turner. |
| Speed | **31.0** | No reliable maximum recovered; this is an ambush/grapple predator rather than a pursuit specialist. |
| Endurance | **52.0** | Good grappling persistence and exceptional energy economy, but limited evidence for sustained high-output exercise. |
| Recovery | **42.0** | No exceptional regenerative system; low metabolism does not equal rapid tissue recovery. |
| Tactics | **49.0** | Effective ambush-to-coil sequencing and size-dependent prey selection, but limited evidence for broad strategic flexibility. |
| Senses | **72.0** | Chemosensation, mechanosensation and experimentally demonstrated infrared pit pathways form an excellent close-range targeting suite. |
| Ferocity | **60.0** | Capable of committing to dangerous prey once contact is established, without evidence for indiscriminate aggression. |
| Abilities | **82.0** | Directly measured constriction performance plus specialized infrared targeting create major matchup effects. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **72.0** | A secure bite-to-coil transition can incapacitate large prey; species-specific pressure work supports the mechanism, but it remains contact-dependent. |
| **Defense** | **47.0** | Large muscular body and defensive coiling help, but lack of armor and vulnerability of the head/spine cap the score. |
| **Agility** | **52.0** | Flexible three-dimensional body control, climbing and swimming are useful, without pretending that the snake has high pursuit speed. |
| **Stamina** | **52.0** | Sustained coil control and strong energy economy, but not an aerobic endurance specialist. |
| **Intelligence** | **44.0** | Effective sensory-guided specialist with flexible prey selection, far below high-cognition vertebrate anchors. |
| **Special** | **82.0** | Infrared pit targeting and whole-body constriction are unusually matchup-changing biological systems. |

### Calibration note against Green Anaconda
The existing Green Anaconda report uses the same 50 kg canonical mass and scores Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0. Python is kept close rather than artificially separated. The slight Attack/Special advantage reflects direct *P. reticulatus* constriction-pressure research plus exceptionally well documented infrared sensory anatomy. Green Anaconda retains the stronger Defense and aquatic-environment emphasis. These are editorial differences, not claims that either species universally defeats the other.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Pressure Coil Lock** - the bite anchors the target while multiple trunk loops apply diameter-scaled circumferential pressure; direct experiments on *P. reticulatus* confirm that larger snakes generate higher peak constriction pressure.
2. **Infrared Pit Targeting** - maxillary, mandibular and mental pit organs feed thermal information through specialized trigeminal pathways, improving warm-target localization in low light and close ambush conditions.

### Unique traits
1. **Female Giant Form** - strong female-biased sexual size dimorphism means mature females occupy the species' largest and most powerful combat class.
2. **Length-Dominant Heavyweight** - the reticulated python achieves exceptional reach and encirclement length without the same bulk per metre as an equivalently heavy anaconda, producing a distinct long-bodied grappling profile.

## 8. Expanded profile content

### Habitat and geographic range
The species occupies South and Southeast Asian lowlands across continental and insular systems, including forests, river margins, wetlands, mangroves, agricultural mosaics and settlements. It tolerates substantial habitat modification and is strongly associated with water in many parts of its range. Its island distribution and population structure are complex, so one mainland/Sumatran body-size template should not be treated as universal.

### Diet and ecology
Reticulated pythons are carnivorous ambush predators. Southern-Sumatran field data show an ontogenetic shift from rats toward larger mammals as body size increases. Recorded larger-prey categories include pangolins, porcupines, monkeys, wild pigs and mouse deer. Their ability to exploit commensal rats helps explain success in agricultural and village landscapes.

### Social structure
Primarily solitary outside reproductive interactions. No cooperative hunting or coalition combat is known.

### Reproduction and life history
Northern-Sumatran work found a mean clutch around 24.2 eggs, each exceeding 250 g in that dataset, with females reproducing only once every two to four years. Maturation size varies geographically. This combination of rapid growth, early maturation, fecundity and flexible habitat/diet use has been proposed as part of the reason harvested populations can persist under substantial offtake.

### Conservation
The global species is treated as **Least Concern**, but it is heavily harvested for skins and other trade. CITES technical review material notes that available evidence supports population stability in studied areas while also documenting intense harvest in portions of Peninsular Malaysia. Least Concern does not mean harvest pressure is biologically irrelevant.

### Major adaptations
- Highly elongate, muscular constricting body.
- Recurved teeth for prey retention.
- Infrared-sensitive labial pits with specialized neural pathways.
- Strong chemical sensing through tongue/vomeronasal sampling.
- Capable swimming and climbing.
- Flexible habitat use and ontogenetic prey switching.

### Human interaction
Reticulated pythons are economically important in the skin and pet trades and frequently occur near people where rodents are abundant. Very large wild individuals can be dangerous and rare fatal predation on humans is documented, but such incidents should not replace population-level ecology with sensationalism. Large captive specimens also require expert handling and secure enclosures.

### Genuine fun facts
- It is the longest living snake species by credible maximum length, although the green anaconda is generally heavier-bodied.
- Shine et al.'s southern-Sumatran study examined **1,070** individuals, an unusually large field dataset for a giant snake.
- Females in that study reached much larger maxima than males, about **75 kg versus 20 kg**.
- Reticulated-python pit organs have been mapped to specific trigeminal sensory neurons rather than merely inferred from appearance.
- Infrared-sensitive snake TRPA1 channels are among the most heat-sensitive vertebrate ion channels studied.
- Northern-Sumatran females averaged about **24.2 eggs per clutch** in one harvest-based field study but reproduced only every **2-4 years**.
- Diet changes dramatically with size, with larger snakes shifting from rats toward much larger mammalian prey.

### Concise site summary
The reticulated python is a giant Southeast Asian constrictor built around one decisive sequence: detect, seize, wrap and compress. A large female combines five metres of flexible reach, powerful whole-body coils, recurved anchoring teeth and infrared-sensitive facial pits, but remains vulnerable to head trauma, armor and opponents too large or mobile to control.

### Rich narrative profile
The Python roster entry resolves to the reticulated python, a species whose real combat biology is more interesting than the legacy 200-PSI placeholder suggests. Its jaws are not the main engine. They are the grappling hook. Once recurved teeth hold, the rest of the animal becomes the weapon. Direct experiments on reticulated pythons show that constriction pressure rises with body diameter, giving large females a mechanically credible path from contact to circulatory disruption.

The second half of the system is target acquisition. Reticulated pythons do not merely possess vague "heat vision." They carry arrays of facial pit organs whose sensory neurons and neural projections have been experimentally mapped. Those pits detect radiant warmth through specialized thermosensory machinery and complement chemical and mechanical cues. In darkness and dense cover, that package makes the snake much harder to evade at close range than vision alone would suggest.

ABS should still resist giant-snake mythology. A 50 kg female is formidable, but it is not armored, fast in open pursuit, or capable of controlling arbitrarily large opponents. Its best matchup is a target that enters striking range and lacks the tools to prevent a complete wrap. Its worst matchup is one that stays outside that range, crushes or tears the head, or is simply too massive for the coil system to dominate.

## 9. Mandatory image section

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/python.png` **(not created)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:RETICULATED_PYTHON.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/b/bc/RETICULATED_PYTHON.jpg
- `file_format_verified`: source is a real JPEG photograph; final PNG absent
- `alpha_verified`: **false**
- `full_body_verified`: **false**
- `adult_verified`: **false**
- `sex_verified_or_unknown`: **unknown**; page prose uses a male pronoun but does not provide reliable biological sex metadata
- `license_status`: **CC BY-SA 4.0**
- `notes`: The 5446x3631 exact-species photograph was directly inspected at a 3840-pixel rendering. It is high quality and reusable, but the coiled body is heavily overlapped by itself and vegetation, so the complete tail/body path cannot be certified for a faithful cutout. A separate 6000x4000 Commons source explicitly documents a **23-year-old** exact-species adult, but direct inspection shows it is a tight body close-up rather than a whole-animal image. Neither is promoted to full-body-source-complete status. Current connected GitHub writers accept UTF-8 text only, so no binary PNG is fabricated.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Context / confidence / caveats |
|---|---|---|---|
| Shine, Harlow, Keogh & Boeadi, *Functional Ecology* | https://doi.org/10.1046/j.1365-2435.1998.00179.x | 1,070 southern-Sumatran snakes; female-biased size dimorphism; 75 vs 20 kg and 7 vs 5 m maxima; ontogenetic prey shifts; sex differences in feeding ecology | **High.** Primary peer-reviewed field dataset. Harvested population and regional context mean maxima/relationships are not universal averages. |
| Shine, Ambariyanto, Harlow & Mumpuni, *Biological Conservation* | https://doi.org/10.1016/S0006-3207(98)00068-8 | 784 northern-Sumatran snakes; geographic maturity differences; larger females; mean clutch 24.2; >250 g eggs; reproduction every 2-4 years; flexible habitat/diet and harvest context | **High.** Primary peer-reviewed field study; harvested sample has capture bias. |
| Boback et al., *Journal of Experimental Biology* | https://journals.biologists.com/jeb/article/218/21/3364/14434/The-big-squeeze-scaling-of-constriction-pressure | Direct *P. reticulatus* constriction measurements; peak pressure scales positively with snake diameter and can exceed prey blood pressure | **High.** Primary experimental evidence. Do not turn this into bite PSI or a universal single pressure. |
| Tan & Gopalakrishnakone, *Neuroscience Letters* | https://pubmed.ncbi.nlm.nih.gov/3380315/ | Reticulated-python infrared neurons innervating 5 maxillary, 6 mandibular and 4 mental pit organs | **High.** Species-specific neuroanatomy. |
| Newman, Gruberg & Hartline, *Journal of Comparative Neurology* | https://pubmed.ncbi.nlm.nih.gov/7410602/ | Direct infrared trigemino-tectal pathway in *P. reticulatus* | **High.** Species-specific neuroanatomical evidence. |
| de Cock Buning et al., *Cellular and Molecular Neurobiology* | https://pubmed.ncbi.nlm.nih.gov/7346171/ | Pit-organ neurons respond to infrared/warm and touch stimuli; receptor physiology | **High.** Species-specific physiological work. |
| Gracheva et al., *Nature* | https://www.nature.com/articles/nature08943 | TRPA1 molecular mechanism for infrared detection in pit-bearing snakes, including python | **High.** Mechanistic comparative evidence; not a behavioral range measurement. |
| Animal Diversity Web | https://animaldiversity.org/accounts/Python_reticulatus/ | Broad morphology, habitat, reproduction and dimorphism context | **Moderate.** Useful synthesis, but some displayed mass/length fields are internally inconsistent and were not used as canonical measurements. |
| CITES technical review | https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-14-03-A.pdf | Least Concern/global status context, harvest intensity and population-stability evidence in Peninsular Malaysia | **High-moderate.** Technical conservation synthesis with geographic limits. |
| Commons image, Kirkamon A. Cabello | https://commons.wikimedia.org/wiki/File:RETICULATED_PYTHON.jpg | Exact-species reusable 5446x3631 candidate and license | **High provenance, failed strict full-body verification.** Body/tail overlap and vegetation prevent complete silhouette certification. |
| Commons image, Tylwyth Eldar | https://commons.wikimedia.org/wiki/File:Reptilarium_du_Larzac_-_Malayopython_reticulatus_07.jpg | Exact species and explicit 23-year-old adult, 6000x4000, CC BY-SA 4.0 | **High age/provenance, rejected framing.** Direct inspection shows close-up body crop, not whole animal. |

## 11. Confidence, conflicts and cross-animal normalization

### Main uncertainty/conflict notes
- **Canonical size:** high confidence that females are the larger fighting sex; only moderate confidence in any single representative cross-range mass/length because locality and sampling matter. The 50 kg / 5 m specimen is intentionally conservative relative to maxima.
- **Taxonomy:** primary papers use *Python reticulatus*; current taxonomy commonly uses *Malayopython reticulatus*. They refer to the same roster animal here.
- **Lifespan:** managed-care values are much better documented than wild longevity. The 20-year canonical value is moderate-low confidence and should not be presented as a measured wild mean.
- **Speed:** unresolved. No tertiary crawl-speed claim is promoted.
- **Bite force:** unresolved. The legacy 200 PSI figure is rejected.
- **Constriction:** high confidence in the mechanism and direct species-specific pressure scaling, but pressure depends on body diameter and experimental context.
- **Image:** exact adult and high-resolution reusable sources were found separately, but no one source simultaneously passed adulthood plus strict complete-body silhouette. No PNG exists.

### Roster normalization
- **Green Anaconda:** Python is kept in the same general constrictor tier. Similar canonical mass means no giant score gap is justified. Python gets slightly higher Attack/Special from direct constriction-pressure evidence and exceptionally well documented infrared anatomy; Green Anaconda retains a more water-specialized defensive profile.
- **Polar Bear:** the 500 kg Polar Bear remains clearly above this 50 kg snake in absolute raw force, protection and open-contact damage. Python's high Special does not erase the tenfold mass gap.
- **Porcupine:** Python has much greater absolute grappling offense, while Porcupine's quill defense creates a dangerous anti-contact matchup that can punish a bite-and-wrap strategy.
- **Piranha:** Python's 50 kg body and constriction system create a large absolute Attack/Defense gap over a 1.2 kg piranha, despite the fish's effective cutting bite.
- **Puffin / Praying Mantis:** their high agility or specialized mechanics must not compress absolute physical power toward this giant snake.
- **Future Reticulated Python duplicate:** do not independently drift its scores. Resolve the duplicate roster identity first, or explicitly choose a different python taxon before creating materially different ratings.

## Completion verification

- Exact taxon and canonical adult: **yes**
- Dimorphism/population variation/conflicts: **yes**
- Physical fields and uncertainty: **yes**
- Weapons/defenses/combat mechanics/locomotion/endurance/senses/tactics: **yes**
- All current ABS substats with one-decimal ratings: **yes**
- Six headline ratings with one decimal: **yes**
- Exactly two named special abilities: **yes**
- Exactly two unique traits: **yes**
- Expanded ecology/life history/conservation/human interaction/fun facts: **yes**
- Site summary and rich narrative: **yes**
- Future field proposals: **yes**
- Source ledger with direct URLs/confidence/conflicts: **yes**
- Cross-roster normalization: **yes**
- Mandatory image audit: **yes; source pending, no PNG falsely claimed**
