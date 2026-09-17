# Barn Owl Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Barn Owl
- **Scientific name:** *Tyto alba* (Scopoli, 1769)
- **Family:** Tytonidae
- **Status:** Living
- **Exact animal represented:** Barn Owl, *Tyto alba*. Taxonomic treatments can split some regional barn-owl populations, so this report uses the conventional *T. alba* concept represented by the roster name and emphasizes well-measured European/British *T. alba* where quantitative data are strongest.
- **Canonical specimen:** Healthy fully mature **adult female**, approximately **0.35 kg**, in normal flight condition.
- **Why female:** Females are materially heavier than males. BTO live-bird data give adult females 354.3 ± 43.9 g versus males 311.5 ± 27.3 g. The female is therefore the appropriate combat representative, while avoiding unusually heavy regional birds.
- **Population variation:** Body size varies geographically and among subspecies. Do not apply a large tropical/American regional mass to a British biometric reference without labeling the population.

## 2. Physical measurements

### Mass

The strongest population-specific dataset located is BTO live-bird biometrics. Among 522 adults, mean mass was **337.3 ± 43.6 g**; 311 females averaged **354.3 ± 43.9 g** with a reported 5th-95th percentile span of **295-435 g**, while 195 males averaged **311.5 ± 27.3 g** with **270-360 g** spanning the 5th-95th percentiles. Other references report larger regional birds, illustrating geographic variation.

- **Canonical mass:** **0.35 kg**
- **Canonical-sex reference:** female mean 354.3 g in BTO data
- **Confidence:** High for the British dataset; moderate-high for using 0.35 kg as the globally representative site value.

### Body length and height

University of Florida IFAS reports females at **34-40 cm** and males at **32-38 cm**. Animal Diversity Web gives an overall 32-40 cm range. A standardized standing-height measurement was not found in the strong sources and should not be inferred from body length.

- **Canonical `length_cm`:** **37.0 cm**
- **Credible female range:** approximately **34-40 cm**
- **Canonical `height_cm`:** **0.0 cm**, undefined rather than fabricated
- **Confidence:** High for length range; low for any standardized standing height.

### Wings and wingspan

BTO directly reports adult wing length at **292.2 ± 7.6 mm** (280-304 mm, N=536), with essentially identical mean wing lengths in the measured females and males. Broader institutional references place wingspan around the high-80s cm to roughly 1.1 m, with regional differences.

- **Research-reference wingspan:** approximately **90-110 cm**, population dependent
- **Direct BTO adult wing length:** **29.22 cm mean**
- **Combat relevance:** low wing loading and broad flight surfaces support slow, controlled low-altitude hunting, braking and precise foot-first strikes.

### Flight speed

Many tertiary sites publish a single “top speed,” but this run did not find a strong instrumented species-specific maximum-speed trial suitable for a canonical factual field. Barn-owl hunting is often deliberately slow because the bird quarters low over vegetation while listening.

- **Canonical `speed_mps`:** **0.0**
- **Reason:** no defensible maximum numerical speed established from a strong measurement source.
- **Important distinction:** unknown maximum speed does not mean slow reactions or poor maneuverability.

### Lifespan

BTO ringing data give a **typical life expectancy of 4 years for a bird reaching breeding age**, with breeding typically beginning at one year. The maximum ringed age listed is **15 years, 3 months, 21 days**. Adult annual survival is reported at 0.72 ± 0.044, while first-year survival is much lower.

- **Canonical `lifespan_years`:** **4.0 years**
- **Maximum context:** 15+ years documented in ringing data
- **Confidence:** High for the BTO population statistics.

### Bite force and bill

The hooked bill can tear and bite but is secondary to the feet in prey capture. No credible *T. alba*-specific bite-force measurement with force and contact-area methodology was found.

- **Canonical `bite_force_psi`:** **0.0**
- **Do not use:** unsourced owl PSI claims.

### Talons, feet and weapon dimensions

Barn owls seize small mammals with long toes and curved talons. The feet are the principal damaging and restraining apparatus. This run did not locate a sufficiently strong adult-female talon-length or direct grip-force dataset to promote a millimeter or pressure value into the canonical schema. Weapon effectiveness is therefore scored from demonstrated predatory function rather than an invented grip PSI.

### Defensive structures

There is no armor, shell, thick hide or other major impact-resistant structure. Feathers provide weather and abrasion protection. The specialized flight feathers are primarily stealth/aerodynamic adaptations, not physical armor. At only about 0.35 kg, the owl is highly vulnerable if a substantially larger opponent makes solid contact.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 0.35,
  "height_cm": 0.0,
  "length_cm": 37.0,
  "speed_mps": 0.0,
  "lifespan_years": 4.0,
  "bite_force_psi": 0.0
}
```

Useful future structured fields:

```json
{
  "canonical_sex": "female",
  "wing_length_cm": 29.22,
  "wingspan_cm": 95.0,
  "primary_weapon": "talons",
  "primary_hunting_sense": "hearing",
  "activity_pattern": "primarily nocturnal/crepuscular",
  "locomotion_mode": "powered flight / gliding / terrestrial walking-hopping"
}
```

`wingspan_cm` is an editorial representative value within strong institutional ranges, not a direct BTO mean, and should remain labeled accordingly until the production schema can retain population context.

## 4. Combat biology

### Primary and secondary weapons

**Primary:** two raptorial feet with long toes and curved talons. The owl descends onto small terrestrial prey and uses its feet to seize, puncture and restrain.

**Secondary:** hooked bill for biting, tearing and processing prey after capture. The bill matters in close quarters but should not be scored as if it had a demonstrated high mammalian bite force.

### Offensive mechanics

The barn owl is a precision ambush predator rather than a force-dominant fighter. It searches low over open vegetation, detects prey acoustically and visually, then transitions into a foot-first strike. Silent approach reduces warning time. The facial ruff and auditory system help place the strike even when vegetation or darkness limits vision.

Against normal prey, this is extremely effective. Across the full ABS roster, however, a 0.35 kg owl has very little absolute momentum or grappling power. Its Attack must therefore remain far below medium and large terrestrial predators despite impressive prey-capture specialization.

### Silent-flight specialization

Barn-owl wing feathers possess several structures associated with quiet flight, including a leading-edge comb, trailing-edge fringes and a soft/porous or velvet-like dorsal surface. Wind-tunnel work on prepared barn-owl wings found the leading-edge comb can reduce gliding noise at high angles of attack. A 2020 experiment on 13 live barn owls found that impairing dorsal feather velvet increased broadband flight sound, supporting a real friction-noise reduction function.

Silent flight is combat-relevant because it reduces acoustic warning during approach, but it is not invisibility and should not be counted again as raw Attack or Defense.

### Defense and durability

The owl's defense is overwhelmingly positional. Flight, darkness, stealth and evasive movement can prevent contact. Physically, it is fragile relative to mammals and large birds: there is no armor and little body mass to absorb crushing, biting or blunt trauma. A grounded barn owl caught by a much larger opponent has a poor survival outlook.

### Locomotion and maneuverability

Barn owls are optimized for controlled low-speed flight over open country. Broad wings, low-altitude quartering, hovering-like adjustments, braking and precise final descent allow excellent target alignment. They are not treated as peregrine-style high-speed pursuit specialists. Their maneuverability score reflects control and attack geometry, not a guessed top speed.

### Endurance / stamina

Barn owls may hunt repeatedly through the night and breeding adults provision demanding broods, but British birds are largely sedentary rather than extreme migrants. Barn Owl Trust reports typical consumption of 3-4 prey items nightly and notes that poor weather can sharply reduce hunting success. Stamina is therefore respectable for sustained nightly foraging but not comparable with Albatross, Arctic Wolf or other elite long-distance anchors.

### Senses

Hearing is the defining specialization. Classic experimental work by Knudsen and Konishi demonstrated precise barn-owl sound localization and the importance of binaural timing/spectral information. Removing or acoustically simulating removal of the facial ruff degrades elevational localization. Experimental literature also establishes that barn owls can localize prey sounds and strike in complete darkness.

Low-light vision complements hearing, but the owl should not be reduced to “night vision.” Its unusual combat advantage is the integration of a sound-shaping facial ruff, directional auditory cues and rapid orientation.

### Intelligence, learning and tactics

Barn owls learn hunting locations, adapt search behavior to prey availability and execute precise sensory-motor attacks. This is meaningful predatory competence, but the evidence base does not justify corvid, parrot or primate-level flexible problem solving. Intelligence should be moderate rather than inflated simply because the sensory system is sophisticated.

### Hunting behavior

Small mammals dominate the diet. Canada’s federal recovery strategy states that voles are particularly important across much of North America and can make up 60-90% of diet in eastern North America in many years. UF/IFAS similarly emphasizes voles, mice, shrews, moles and regionally larger rats. Barn Owl Trust reports British diet dominated by field voles, common shrews and wood mice.

The typical hunting pattern is low quartering flight over rough grassland, field margins and other open habitat, with sound-guided drops onto prey. Barn owls can also hunt from perches.

### Intraspecific fighting and aggression

Barn owls defend nest sites and can threaten with hissing, screeching, wing/body postures and the feet. They are predators but not animals that routinely seek dangerous equal-sized fights for their own sake. Ferocity should therefore reflect decisive prey strikes and nest defense without equating predation with generalized combat aggression.

### Predator defense

Adults rely on concealment, nocturnal activity and flight. Eggs and nestlings are more vulnerable to terrestrial and aerial predators. Human-altered landscapes add major noncombat mortality risks including vehicle collision, habitat loss and secondary rodenticide exposure.

### Environmental strengths

- Open grassland, farmland, marshes and field edges provide ideal low-flight hunting geometry.
- Darkness strengthens the value of hearing and quiet approach.
- Vegetation can hide prey visually without fully defeating acoustic localization.
- Buildings, cavities and nest boxes provide secure roost/nest opportunities.
- Aerial engagement permits attack and disengagement from many terrestrial opponents.

### Environmental limitations

- Heavy rain and strong wind can reduce hunting success, including by degrading flight and acoustic prey detection.
- Dense cramped environments restrict broad-wing flight paths.
- Ground combat removes most of the owl's positional advantage.
- Very large opponents cannot be controlled by the owl's tiny absolute mass.
- Flight feathers are functionally important and wing injury can be catastrophic.

### Major weaknesses

1. Extremely low absolute mass on the 225-animal scale.
2. No armor or high trauma tolerance.
3. Feet require close contact to deliver damage.
4. Limited ability to restrain opponents much larger than normal prey.
5. Broad wings need room to maneuver.
6. Wind and heavy rain can interfere with its specialized hunting mode.
7. Sensory specialization does not compensate for overwhelming size disparities after contact.

### Matchup archetypes

**Good matchups:** tiny terrestrial vertebrates, rodents, fragile prey vulnerable to puncture/grasp, opponents with poor ability to detect or answer an aerial ambush.

**Bad matchups:** medium and large carnivores, armored animals, large raptors, powerful grapplers, opponents that can survive the initial foot strike, and confined environments that force the owl onto the ground.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **3.0** | A canonical 0.35 kg bird is tiny on a roster containing large carnivores, megafauna and giant extinct animals. |
| Raw Power | **4.0** | Strong relative to its own mass, but absolute muscular and impact output is extremely small. |
| Weaponry | **30.0** | Sharp talons plus hooked bill are effective against small prey, but limited reach and tiny absolute force cap roster-wide lethality. |
| Protection | **5.0** | Feathers provide little protection against serious bites, crushing or puncture. |
| Toughness | **9.0** | A lightweight flying body has little capacity to absorb major trauma. |
| Speed | **48.0** | Competent powered flight, but no unsupported maximum-speed figure is used and high-speed pursuit is not its defining specialization. |
| Maneuverability | **82.0** | Controlled low-speed flight, braking, aerial repositioning and precise foot-first strikes are exceptional practical movement tools. |
| Endurance | **55.0** | Repeated nocturnal foraging and brood provisioning support moderate-good endurance, but the species is not an extreme migration/endurance anchor. |
| Recovery | **24.0** | Ordinary avian healing with no exceptional regenerative mechanism. |
| Tactics | **57.0** | Skilled sensory-guided ambush hunting and adaptive search behavior, without evidence for high-order primate/corvid tactical cognition. |
| Senses | **94.0** | Sound localization in darkness, facial-ruff acoustics and strong low-light vision make this one of the strongest sensory specialists researched so far. |
| Ferocity | **42.0** | Decisive predator and nest defender, but not a generalized high-risk brawler. |
| Abilities | **78.0** | Silent-flight structures plus exceptional sound localization fundamentally change nocturnal prey detection and approach. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **13.0** | Talons are genuinely lethal to small mammals, but 0.35 kg body mass imposes a severe absolute ceiling. This must sit far below Bald Eagle 36.0 and medium terrestrial predators. |
| **Defense** | **10.0** | Avoidance is strong, but physical protection and trauma tolerance are very low. Flight evasion is not double-counted as armor. |
| **Agility** | **82.0** | Precise low-speed aerial control, braking and three-dimensional attack geometry justify an elite maneuverability score even without a maximum-speed number. |
| **Stamina** | **55.0** | Sustained nightly hunting is meaningful, but the mostly sedentary ecology does not support elite migratory/endurance placement. |
| **Intelligence** | **53.0** | Effective learned predatory behavior and sensorimotor integration, but no basis for corvid/parrot/primate-level flexible cognition. |
| **Special** | **82.0** | Exceptional auditory localization combined with experimentally supported quiet-flight adaptations is highly matchup-changing and unusually specialized. |

### Rating interpretation

Barn Owl is deliberately polarized. It is a sensory and aerial-control specialist with very low absolute physical power. Raising Attack because talons are impressive relative to body size would violate CALIBRATION.md. Conversely, keeping Special or Senses mediocre because the animal is small would ignore real mechanisms whose effectiveness does not scale directly with mass.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Ghostwing Approach** — Specialized leading-edge, trailing-edge and velvet-like feather structures reduce flight noise, shrinking an opponent's acoustic warning window during a low-speed approach.
2. **Sound-Sight Strike** — The facial ruff and highly specialized binaural auditory system allow precise localization of prey sounds, including attacks when visual information is severely limited.

### Unique traits

1. **Heart-Ruff Radar** — The heart-shaped facial ruff is a functional acoustic structure that shapes incoming sound and improves spatial localization rather than being merely ornamental plumage.
2. **Low-Flight Quartering** — Broad-winged, controlled flight close to the ground lets the owl systematically scan open habitat and transition from search to a steep foot-first strike.

## 8. Expanded profile content

### Habitat

Barn owls favor open habitats that support small mammals and permit low hunting flight: grasslands, farmland, marshes, meadows, field edges, savanna-like landscapes and some open woodland. They roost and nest in cavities, cliffs, barns, abandoned buildings and nest boxes.

### Geographic range

Under the conventional *Tyto alba* concept, barn owls have an exceptionally broad distribution across temperate and tropical regions and occur on every continent except Antarctica. Modern taxonomic splits can change the exact limits assigned to *T. alba*, so production copy should keep the taxonomic treatment explicit.

### Diet

Primarily small mammals. Voles, mice, shrews and rats dominate many regional diets, with birds, amphibians, reptiles and large invertebrates taken less often. The prey mix shifts geographically with availability.

### Ecology

Barn owls are important small-mammal predators in agricultural and grassland systems. Their pellets preserve indigestible fur and bone and are widely used to study local small-mammal communities. Their reliance on rodent prey also makes them vulnerable to secondary poisoning when poisoned rodents are consumed.

### Social structure

Typically solitary while hunting. Breeding birds generally form monogamous pairs, although polygyny has been reported. Pairs use cavities or structures for nesting and may reuse suitable sites.

### Reproduction and life history

BTO data give a typical clutch of **4-6 eggs**, mean **4.85 ± 1.48**, with observed clutches from 2-12. Incubation is by the female and typically lasts **32 days**. Fledging averages about **56 days**. Breeding commonly begins at one year. Productivity can respond strongly to prey abundance.

### Conservation status

The global status referenced by BTO/BirdLife is **Least Concern**, but local populations can be threatened or legally protected. Habitat loss, road mortality and rodenticide exposure are important regional concerns. A global Least Concern label must not be interpreted as absence of local conservation problems.

### Major adaptations

- Acoustic facial ruff that modifies spatial hearing cues.
- Highly precise binaural sound localization.
- Quiet-flight feather microstructures.
- Broad, low-loading wings suited to controlled slow hunting flight.
- Long raptorial legs and talons for foot-first prey capture.
- Low-light visual system complementing auditory hunting.
- Flexible use of natural cavities and human structures for nesting.

### Human interaction

Barn owls often live near agriculture and can provide substantial rodent-control services. Nest-box programs are widely used to support populations. The same association with roads and farms creates hazards from traffic, loss of rough grassland and poisoned prey.

### Strong fun facts

- Barn owls do **not** give the classic deep owl hoot; their vocal repertoire prominently includes screeches and hisses.
- Experimental work shows they can orient to prey sounds with remarkable accuracy even without useful visual cues.
- The facial ruff is part of the hearing apparatus: experimentally removing its acoustic contribution impairs localization, especially elevation.
- BTO's maximum ringed age exceeds **15 years**, despite typical life expectancy after reaching breeding age being only about four years.
- Their specialized wing surfaces are so unusual that engineers study them for aeroacoustic noise reduction.
- Barn owls swallow small prey largely whole and later regurgitate compact pellets containing fur and bones.
- In productive years, prey abundance can support unusually large broods and even multiple breeding attempts.

### Concise site-ready summary

The Barn Owl is a lightweight nocturnal raptor built for precision rather than brute force. A heart-shaped acoustic ruff, extraordinary directional hearing and noise-reducing wing feathers let it locate small mammals in darkness and approach with little warning. Its talons are deadly at rodent scale, but at only about 0.35 kg it has very low absolute power and durability against larger animals. In ABS terms, the Barn Owl is an elite sensory, stealth and aerial-control specialist whose success depends on avoiding a direct strength contest.

### Detailed narrative profile

Few animals demonstrate the difference between specialization and raw power as clearly as the Barn Owl. Its body is light even by raptor standards, so a direct contest against a badger, wolf or eagle is mechanically unfavorable. What makes the owl formidable within its ecological niche is the chain connecting detection, approach and strike.

The heart-shaped face is an acoustic device. The ruff modifies incoming sound before it reaches the ears, while the auditory system extracts timing and spectral differences to map where a noise originated. Laboratory work has shown that barn owls can orient with striking precision and that disrupting the ruff's acoustic contribution degrades localization. This gives the owl access to prey that is visually hidden in vegetation or darkness.

The next link is approach. Barn-owl feathers carry specialized structures associated with quiet flight. Controlled experiments show that parts of this system genuinely reduce noise. That matters because prey cannot respond to a predator it detects too late. The owl's broad wings also favor slow, controlled hunting flight rather than relying on extreme velocity. It quarters across open ground, continually listening, then converts a sensory fix into a rapid descent.

The final link is the feet. Long toes and curved talons seize and puncture small mammals. At the owl's normal prey scale, this is decisive. Across the ABS roster, however, it cannot be translated into inflated raw-power numbers. A few hundred grams of bird cannot deliver the absolute mechanical damage of a multi-kilogram eagle, mustelid or canid. Its combat profile is therefore intentionally extreme: low Attack and Defense, very high Agility, Senses and Special.

This also explains its vulnerabilities. A clean grab by a much larger opponent can end the encounter quickly. Heavy rain, strong wind, cramped spaces or wing damage undermine the very systems that make the owl successful. Barn Owl is not a miniature powerhouse. It is a highly optimized nocturnal targeting platform whose real biology becomes more impressive, not less, when the ratings preserve that distinction.

### Useful future structured-field ideas

- `canonical_sex`
- `wingspan_cm`
- `wing_length_cm`
- `primary_hunting_sense`
- `primary_weapon`
- `activity_pattern`
- `flight_noise_specialization`
- `diet_primary_group`
- `typical_clutch_size`
- `incubation_days`
- `fledging_days`
- `global_conservation_status`
- separate `typical_lifespan_years` and `maximum_recorded_age_years`
- confidence/provenance object for every physical measurement

## 9. Image Asset

- **Target path:** `animal-research-for-update/images/barn-owl.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** “Barn owl arp.jpg”, Wikimedia Commons
- **Source page:** https://commons.wikimedia.org/wiki/File:Barn_owl_arp.jpg
- **Direct original image:** https://upload.wikimedia.org/wikipedia/commons/3/3c/Barn_owl_arp.jpg
- **Dimensions:** 1299 × 1461 px
- **Animal:** explicitly identified *Tyto alba*
- **Sex:** explicitly identified **female**, matching the canonical combat sex
- **Creator:** Adrian Pingstone / Arpingstone
- **License status on source page:** released into the public domain by the creator
- **Suitability:** real photograph, clear adult subject, exact species and verified female. The image is captive, so a later production pass may prefer an equally clean verified-female wild photograph if one is found, but this is a strong provenance-safe research candidate.
- **Binary note:** The available GitHub text-content writer cannot safely commit binary PNG bytes. No fake or text-encoded PNG has been created.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Reported value/finding | Context | Confidence / caveat |
|---|---|---|---|---|---|
| British Trust for Ornithology, Barn Owl BirdFacts | https://www.bto.org/learn/about-birds/birdfacts/barn-owl | Sex-specific mass, wing length, lifespan, clutch, incubation, fledging, conservation | Females 354.3±43.9 g; males 311.5±27.3 g; typical life expectancy 4 y; max ringed age 15 y 3 m 21 d; clutch 4-6; incubation 32 d | Britain/Ireland live-bird, ringing and nest-record data | **High.** Population-specific, so global variation remains. |
| University of Florida IFAS, Barn Owl | https://ask.ifas.ufl.edu/publication/UW216 | Body length, dimorphism, hearing, diet | Females 34-40 cm and ~570 g; males 32-38 cm and ~470 g; small mammals primary prey | Educational extension profile, North American framing | **High-moderate.** Mass differs from BTO because population/treatment differs; not averaged blindly. |
| Animal Diversity Web, *Tyto alba* | https://animaldiversity.org/accounts/Tyto_alba/ | Morphology, length, wingspan, dimorphism, ecology | 32-40 cm; female larger; 107-110 cm wingspan in cited treatment | Broad species account | **Moderate-high.** Some values reflect older broad taxonomic concept. |
| Knudsen & Konishi, Mechanisms of sound localization | https://authors.library.caltech.edu/records/6gpq1-ahy89 | Auditory localization mechanism | Binaural timing and spectral cues; ruff important to elevational localization | Peer-reviewed experimental work | **Very high.** Core sensory evidence. |
| Spitzer & Takahashi, Sound Localization by Barn Owls in a Simulated Echoic Environment | https://journals.physiology.org/doi/abs/10.1152/jn.00982.2005 | Accuracy of sound localization under echoes | Accurate/precise orientation to leading source across tested delays | Peer-reviewed laboratory study | **Very high.** |
| Hausmann et al., virtual facial-ruff removal | https://pubmed.ncbi.nlm.nih.gov/19890389/ | Functional effect of facial ruff | Ruff improves azimuth/elevation localization; removal reduces elevational responses | Peer-reviewed behavioral/acoustic experiment | **Very high.** |
| Geyer et al., Silent owl flight: leading-edge comb | https://journals.sagepub.com/doi/10.1177/1475472X17706131 | Quiet-flight mechanism | Leading-edge comb reduced gliding noise at high angle of attack; small lift increase | Wind-tunnel prepared barn-owl wings | **High.** Mechanism-specific, not proof that all flight is literally silent. |
| LePiane & Clark, dorsal velvet experiment | https://pubmed.ncbi.nlm.nih.gov/32525524/ | Quiet-flight feather function | Hairspray impairment of velvet in 13 live owls increased broadband flight sound | Peer-reviewed live-animal experiment | **Very high.** |
| Canada federal Barn Owl recovery strategy | https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/recovery-strategies/barn-owl-final-2021.html | Habitat, diet, prey composition, threats | Open-country habitat; small mammals primary; meadow voles 60-90% in much eastern North American diet in many years | Eastern Canadian population | **High.** Regional ecology labeled. |
| Barn Owl Trust, hunting and feeding | https://www.barnowltrust.org.uk/barn-owl-facts/barn-owl-hunting-feeding/ | British diet, nightly feeding, weather limitation | Field voles 45%, shrews 20%, wood mice 15%; 3-4 prey/night; rain/wind can inhibit hunting | Britain | **High-moderate.** Specialist conservation organization, regional. |
| BTO/BirdLife conservation listing | https://www.bto.org/learn/about-birds/birdfacts/barn-owl | Global conservation status | IUCN/BirdLife Least Concern as surfaced by BTO | Global listing | **High.** Local legal status varies. |
| Wikimedia Commons, “Barn owl arp.jpg” | https://commons.wikimedia.org/wiki/File:Barn_owl_arp.jpg | Image identity, sex, dimensions, provenance | Female *Tyto alba*, 1299×1461, public-domain dedication | Captive female photographed in Bristol, England | **High** for provenance and sex; captive image caveat. |

### Conflicts and uncertainty explicitly retained

- **Mass:** BTO female mean (~354 g) is much lower than some North American/general accounts (~500+ g). This is treated as geographic/taxonomic variation, not an error to erase by averaging incompatible populations. Canonical 0.35 kg follows the strongest direct live-bird dataset used here.
- **Wingspan:** institutional ranges differ substantially. No false global single measured mean is claimed; 95 cm is a representative editorial future field only.
- **Speed:** tertiary “top speed” claims conflict and lack a strong maximum trial. `speed_mps` stays 0.0.
- **Bite/grip pressure:** no defensible species-specific PSI value found. `bite_force_psi` stays 0.0 and talon effectiveness is treated functionally.
- **Taxonomy:** the historically broad *Tyto alba* complex has been split differently among authorities. Production migration should lock the taxonomy authority before claiming a single worldwide range.
- **Silent flight:** “silent” is colloquial. Experiments support substantial noise-reduction mechanisms, not literal zero acoustic emission.

## 11. Confidence and caveats

**Overall confidence: High** for the qualitative combat biology, auditory specialization, quiet-flight mechanisms, British female mass, life history and diet. **Moderate** for a single global canonical mass and representative wingspan because geographic and taxonomic variation is meaningful. **Low/insufficient** for maximum flight speed, bite PSI and direct talon/grip-force numbers, so these are not fabricated.

The largest modeling risk is pound-for-pound leakage. Barn owls are spectacularly effective predators at rodent scale, but their 0.35 kg body mass means their absolute Attack, Raw Power, Toughness and Defense must remain low. The second risk is double-counting stealth: quiet flight is principally captured in Special/Abilities and should not independently inflate Attack, Defense, Agility and Intelligence.

## 12. Cross-animal calibration notes

- **Versus Bald Eagle:** Barn Owl is roughly one-fifteenth the canonical mass of the researched 5.3 kg Bald Eagle. Attack **13.0** versus Bald Eagle **36.0** preserves a large absolute-force gap. Barn Owl receives higher Special (**82.0 vs 63.0**) and Senses (**94.0 vs 82.0**) because sound localization plus quiet flight are more unusual matchup mechanisms.
- **Versus Army Ant:** Barn Owl remains vastly above an individual *Eciton* soldier in absolute Attack and power. This preserves the anti-pound-for-pound rule.
- **Versus Axolotl:** Barn Owl has superior weapon delivery and aerial initiative, but Axolotl's regeneration gives it a different Special pathway. Delayed regeneration must not be confused with immediate combat defense.
- **Versus Badger:** Badger's 13 kg mass, jaw architecture and terrestrial toughness justify much higher direct-contact capability. Barn Owl should win only through engagement geometry against suitable small targets, not by being scored near the badger in Raw Power or Defense.
- **Versus Albatross:** Barn Owl's Stamina **55.0** remains far below Albatross **96.0**. Powered nocturnal foraging is not equivalent to extreme oceanic dynamic-soaring endurance.
- **Versus Bald Eagle on Agility:** Barn Owl **82.0** narrowly exceeds Bald Eagle **79.0** because low-speed prey-localization flight and fine approach control are central specializations, while the eagle has much greater absolute attack power and aerial reach.
- **Future owl/falcon checkpoint:** Revisit Agility, Senses and Special after Great Horned Owl, Snowy Owl, Peregrine Falcon, Golden Eagle and Harpy Eagle are researched. Do not let all raptors cluster in the 80-95 range simply because they fly.

### Calibration verdict

No current researched comparison requires changing a prior file. The proposed Barn Owl profile intentionally produces an extreme specialist shape: **very low absolute physical scores, elite sensory/aerial control, and high Special**. This is consistent with `CALIBRATION.md` and avoids importing the live site's old ratings as anchors.
