# Alligator

## 1. Identity and canonical specimen

- **ABS roster label:** Alligator
- **Canonical taxon:** American alligator (*Alligator mississippiensis*)
- **Family:** Alligatoridae
- **Status:** Living
- **Canonical combat specimen:** Healthy, mature adult male, representative rather than record-sized.
- **Why male:** Sexual dimorphism is substantial. Smithsonian gives average adult male total length as about 3.4 m versus 2.6 m for females, and FWC notes that males can grow much larger while females rarely exceed 10 ft.
- **Geographic scope:** Native southeastern United States, especially freshwater wetlands from the Carolinas through Florida and west to Texas.

The generic live label `Alligator` is taxonomically ambiguous because the genus also contains the much smaller Chinese alligator. For ABS, this profile should explicitly mean the American alligator.

## 2. Physical measurements

### Mass

Animal Diversity Web reports a species average mass of 150 kg and a broad 91-360 kg range, while emphasizing strong sex, habitat, and food effects. Large adult males can exceed 227 kg, and exceptional males approach or exceed 450 kg according to Smithsonian/FWC records.

**ABS representative adult-male recommendation: 200.0 kg.** This deliberately sits above the pooled-sex 150 kg average while remaining well below exceptional 400+ kg males. It is intended to represent a large, healthy fighting-age bull rather than a record specimen.

### Length

Smithsonian reports an average adult male length of 3.4 m. ADW reports approximately 350.5 cm for a 20-year male and an estimated terminal male length around 365.8 cm. FWC documents Florida males above 4.2 m as records, not representative animals.

**ABS canonical total length: 350.0 cm.**

### Height

A standardized standing-height measurement is not commonly reported for alligators and would be especially ambiguous because posture varies between sprawl and high walk.

**ABS canonical height: 0.0 cm pending a defined crocodilian height convention.** Do not invent shoulder height from photographs.

### Speed and locomotion

American alligators are amphibious. Their long, muscular, vertically flattened tail is the main aquatic propulsor, while on land they can use both a low walk/sprawl and a semi-erect high walk. Reilly and Elias experimentally quantified speed-dependent terrestrial kinematics and confirmed that alligators change gait mechanics with speed, but the accessible primary literature does not establish a defensible representative adult maximum speed suitable for a single ABS `speed_mps` value. Popular 20-30 mph claims are often repeated without primary measurement context.

**ABS canonical speed: 0.0 m/s pending a defensible measured adult maximum and a clear land-versus-water convention.**

This is preferable to manufacturing false precision. The battle profile separately credits strong short-range acceleration and aquatic control.

### Lifespan

Smithsonian reports about 50 years in the wild. FWC educational material gives roughly 30-50 years.

**ABS canonical lifespan: 50.0 years.**

### Bite force

This species has unusually strong direct experimental evidence. Erickson, Lappin and Vliet measured bite force across 41 alligators and reported 12-9,452 N across ontogeny. A later wild-versus-captive study reported 217-13,172 N, with 13,172 N the highest value in that sample and then described as the highest measured for a living animal. Bite force increases strongly with body size.

The research is in newtons, not PSI. PSI requires dividing force by a defensible tooth/contact area, which varies during a bite. Therefore a direct conversion of 9,452 N or 13,172 N into PSI without contact-area data would be misleading.

**ABS canonical `bite_force_psi`: 0.0 pending a repository-wide force/contact-area convention.**

**Recommended future field:** `bite_force_n`, with the profile storing representative/maximum measured context separately rather than forcing newtons into PSI.

### Teeth and jaws

Smithsonian reports roughly 74-80 teeth present at once and continual tooth replacement, with as many as about 3,000 teeth used over a lifetime. The broad, rounded snout houses extremely powerful jaw adductors. The bite is optimized for seizing, crushing and holding rather than mammalian chewing.

### Armor and body protection

The dorsal skin contains bony osteoderms/scutes, producing meaningful natural armor over the back. FWC and Smithsonian both describe the armored dorsal body. The belly and softer junctions are less protected, so the animal is not uniformly armored.

### Tail

The tail is roughly half total body length according to ADW and is a major source of aquatic propulsion. It also supplies powerful whole-body leverage during rotational feeding behaviors.

## 3. Canonical proposed factual fields

```yaml
weight_kg: 200.0
height_cm: 0.0
length_cm: 350.0
speed_mps: 0.0
lifespan_years: 50.0
bite_force_psi: 0.0
```

### Selection rationale

- `weight_kg: 200.0` represents a large healthy adult male without using exceptional 400+ kg records.
- `height_cm: 0.0` avoids an undefined crocodilian standing-height convention.
- `length_cm: 350.0` is strongly supported by Smithsonian and ADW adult-male figures.
- `speed_mps: 0.0` is an evidence-quality choice, not a claim that the animal cannot move quickly. A robust adult maximum in a specified medium was not established from the accessible primary sources.
- `lifespan_years: 50.0` matches Smithsonian's wild-lifespan figure.
- `bite_force_psi: 0.0` prevents a scientifically invalid N-to-PSI conversion without contact area. The underlying bite force itself is extremely well supported in newtons.

## 4. Combat biology

### Primary weapons

The jaws are the dominant weapon. Direct in-vivo experiments place large American alligators among the most powerful measured biters. A successful bite combines puncture, crushing and a secure hold. The conical teeth are well suited to gripping prey, and replacement teeth reduce the lifetime cost of breakage and wear.

### Secondary weapons

The tail is both propulsion and leverage. Once an alligator has secured a target, whole-body rotation can tear tissue, dismember food or destabilize a resisting opponent. The body itself is low, heavy and difficult to move when the animal has purchase in shallow water or on a bank.

### Offensive mechanics

American alligators are ambush predators. Their best attack sequence is not prolonged pursuit. It is concealment, sudden acceleration, a high-force bite, a sustained grip, then dragging or rotational manipulation. This makes first contact disproportionately important.

The jaw system also appears functionally divided between maximal-force clinching and sustained holding. Research summarized by Erickson and colleagues indicates that low-force holding can be maintained with more oxidative jaw musculature while the largest closing forces are burst-oriented. That supports a realistic distinction between devastating peak bite output and lower sustained grip.

### Defense and durability

A 200 kg adult male combines substantial body mass, low profile, robust skeleton, thick hide and dorsal osteoderms. This gives it far more passive protection than similarly sized soft-skinned mammals. However, the underside, eyes, limbs and some neck/joint regions are comparatively vulnerable. The armor should not be treated as a complete shell.

### Locomotion and maneuverability

In water the alligator is highly competent. Tail-driven propulsion, subtle body positioning and buoyancy control make it far more maneuverable than its terrestrial silhouette suggests. Research on crocodilian respiratory muscles also shows that internal musculature can assist pitch control while submerged.

On land it can accelerate and reposition over short distances and can use a high walk, but it is not built for sustained cursorial pursuit or repeated tight turns like a canid or felid. Terrain and water depth therefore matter greatly.

### Endurance and stamina

The alligator is an ectotherm and should not be scored like a pursuit mammal. Its combat system favors bursts, gripping, waiting and energy conservation. It can remain poised for long periods and can sustain a lower-force hold, but prolonged high-output wrestling or chasing is a weakness compared with endothermic endurance specialists.

### Senses

Crocodilians possess specialized integumentary sensory organs. Classic work showed facial pressure receptors capable of detecting small disturbances at the water surface, supported by specialized neural pathways. Later research found crocodylian integumentary organs can combine mechanical, thermal and chemical sensitivity. For an alligator waiting at the air-water interface, this is directly battle relevant because it improves detection of movement when visibility is poor.

Vision, hearing and smell also support crepuscular/nocturnal ambush behavior, but the pressure-sensing system is the most distinctive sensory adaptation for ABS.

### Intelligence and tactics

Alligators are behaviorally flexible predators rather than mindless reflex machines. They select ambush positions, respond to seasonal and thermal conditions, alter movement and feeding behavior with context, and use courtship/territorial signaling. Their tactics are effective but relatively specialized compared with primates, corvids, dolphins or highly cooperative mammalian hunters.

### Hunting behavior

Adults are opportunistic carnivores consuming fish, turtles, snakes, birds and mammals. Large prey can be seized at the shoreline and dragged into water. The species' broad diet reflects both weapon power and behavioral opportunism.

### Intraspecific fighting

Adult males are territorial during the breeding season and use bellowing, posturing and physical conflict. Size is an important advantage. Cannibalism also occurs, showing that conspecifics can be both competitors and prey.

### Predator defense

Once above roughly 1.2 m, Smithsonian notes that alligators have few natural predators other than humans and occasionally other alligators. Adult males are therefore near the top of their native freshwater food web.

### Aggression and ferocity

They are dangerous and capable of decisive aggression, especially around territory, food and mating, but they are not perpetual berserkers. Their behavioral style is calculated, ambush-heavy and energy-conserving.

### Environmental strengths

- Freshwater and swamp margins
- Shallow water where ambush and dragging are possible
- Muddy or vegetated water with reduced visibility
- Confined shoreline approaches where prey must enter striking range

### Environmental limitations

- Long dry-land pursuit
- Cold conditions that suppress ectothermic performance
- Open terrain where an opponent can maintain distance
- Extended saltwater exposure, because American alligators lack the specialized salt glands of true crocodiles

### Major weaknesses

- Limited sustained high-output endurance
- Comparatively vulnerable underside, eyes and limbs
- Short legs and lower terrestrial maneuverability than cursorial mammals
- Peak offense depends heavily on getting the jaws onto the opponent
- Temperature-dependent performance

### Good matchup archetypes

- Similar-sized animals forced to approach the waterline
- Soft-bodied targets vulnerable to a crushing bite
- Opponents that cannot quickly escape a clinch
- Animals with weak aquatic mobility

### Bad matchup archetypes

- Much larger megafauna that can absorb or punish a failed bite
- Highly mobile terrestrial opponents that can avoid the head and attack vulnerable limbs/flanks
- Endurance specialists in a prolonged dry-land engagement
- Heavily armored opponents that reduce tooth penetration while retaining superior reach or mass

## 5. Proposed ABS substats

| Substat | Score | Justification |
|---|---:|---|
| Size | 66.0 | A representative 200 kg, 3.5 m male is large on the roster, but far below elephants, hippos, rhinos, large whales and giant extinct animals. |
| Raw power | 82.0 | Exceptional jaw force, strong neck/body leverage and powerful tail place it well above most medium predators. |
| Weaponry | 88.0 | Extremely powerful jaws, many gripping teeth and rotational follow-up create elite practical natural weaponry. |
| Protection | 78.0 | Dorsal osteoderms, thick hide and robust body provide strong passive protection, though not shell-like coverage. |
| Toughness | 75.0 | Large robust reptile capable of absorbing substantial trauma, but vulnerable soft zones prevent an elite-90s score. |
| Maneuverability | 48.0 | Strong aquatic control and short-range repositioning, offset by limited dry-land turning and pursuit ability. |
| Endurance | 39.0 | Efficient ambush lifestyle and sustained low-force holding do not equal prolonged high-output stamina; ectothermy is a major constraint. |
| Tactics | 56.0 | Effective ambush placement, environmental use and prey handling, but less flexible than high-cognition social hunters. |
| Senses | 72.0 | Excellent water-disturbance detection plus useful vision/hearing/olfaction make it a strong sensory predator. |
| Ferocity | 68.0 | Willing and dangerous in close conflict, particularly territorial adults, but behavior is often energy-conserving rather than relentlessly aggressive. |
| Abilities | 73.0 | Pressure sensing, aquatic ambush, rotational prey handling and armored skin materially alter matchups. |

## 6. Proposed six headline ABS ratings

### Attack: 84.0

The alligator's experimentally measured bite performance is extraordinary, and its bite is paired with strong grip, many teeth, heavy body leverage and rotational prey handling. It does not reach the absolute ceiling because much larger crocodilians and giant extinct marine predators can exceed its force, size and prey-handling scale.

### Defense: 77.0

A heavy adult male with dorsal osteoderms, thick hide, robust skeletal construction and low profile is difficult for many roster animals to damage quickly. Vulnerable ventral surfaces, eyes and limbs keep Defense below the elite 85+ range.

### Agility: 49.0

This score deliberately does not substitute top speed for agility. The alligator has good aquatic control, strong burst repositioning and competent high-walk locomotion, but its terrestrial turning, repeated acceleration and pursuit flexibility are limited compared with agile cats, canids, birds and small specialists.

### Stamina: 40.0

Alligators excel at waiting and energy conservation and can sustain a lower-force jaw hold, but their ectothermic physiology and burst-oriented maximal jaw musculature make them poor candidates for high prolonged-output scores. This is substantially below African Wild Dog and Albatross endurance anchors.

### Intelligence: 51.0

The species is behaviorally competent, adaptable and capable of effective ambush tactics, but it lacks the demonstrated problem-solving breadth, communication complexity and flexible cooperative tactics expected of the roster's highest-intelligence animals.

### Special: 72.0

The combination of pressure-sensitive facial organs, semi-submerged ambush specialization, armored integument and rotational prey processing creates several genuine matchup-changing mechanisms. Special is high, but not extreme because these systems enhance an already powerful predator rather than creating a uniquely decisive mechanism such as potent venom or electricity.

## 7. Abilities and traits

### Special abilities

1. **Death Roll**: After securing a bite, the alligator can rotate its body to tear, destabilize or dismember a target. The maneuver converts whole-body torque and aquatic leverage into damage beyond the initial bite.
2. **Pressure Hunter**: Facial integumentary sensory organs detect minute disturbances at the water surface, allowing accurate prey localization even when visibility is poor and only a small portion of the head is exposed.

### Unique traits

1. **Osteoderm Armor**: Bony plates embedded beneath the dorsal scales reinforce the back and turn the animal's upper surface into meaningful natural armor.
2. **Crushing Clinch**: Extremely powerful jaw closure is paired with a tooth arrangement built to seize and retain prey, making successful first contact unusually difficult to escape.

## 8. Expanded profile content

### Habitat

Freshwater lakes, marshes, swamps, slow-moving rivers, ponds and canals. They may enter brackish water but tolerate saltwater only briefly because they lack functional salt glands comparable to marine-tolerant crocodiles.

### Geographic range

Native to the southeastern United States, from North Carolina through the Gulf and Atlantic coastal plain to Florida and west into Texas, with inland populations in suitable wetland systems.

### Diet

Carnivorous and strongly size-dependent. Young animals focus on insects, crustaceans, amphibians and small fish. Adults take larger fish, turtles, snakes, water birds and mammals. Opportunism is a major ecological strength.

### Ecology

American alligators are apex or near-apex freshwater predators and also ecosystem engineers. Alligator holes can retain water during dry periods and create refuges used by other wetland organisms. Their nesting, trails and movements physically alter wetland habitat.

### Social structure

Mostly solitary outside reproductive and localized aggregations. Adult males can use large home ranges and expand movement during breeding season. Vocal signaling, including deep bellows, plays a major role in reproduction and territorial communication.

### Reproduction and life history

Breeding occurs in spring. Females construct mound nests and commonly lay several dozen eggs. FWC reports approximately 32-46 eggs, with incubation around 60-65 days. Mothers guard nests and young, an unusually developed level of parental care among reptiles. Sex is temperature-dependent during incubation.

### Conservation status and management

The American alligator is one of the United States' best-known conservation recoveries. Heavy hunting and habitat loss drove severe declines, but legal protection and state/federal management allowed recovery. U.S. Fish and Wildlife Service states that the species recovered sufficiently by 1987 to no longer require endangered/threatened status for its own population, although it remains regulated under the ESA because of similarity of appearance to other protected crocodilians and is listed in CITES Appendix II. In 2026, USFWS estimated nearly five million American alligators in the southeastern United States.

### Major adaptations

- Massive jaw-closing musculature
- Continuous tooth replacement
- Dorsal osteoderms
- Vertically flattened propulsive tail
- Eyes, ears and nostrils positioned for near-total submergence
- Facial pressure receptors for detecting water movement
- Palatal/throat anatomy that supports seizing prey around water
- Behavioral thermoregulation and strong energy conservation

### Human interaction

Alligators coexist with people across a rapidly developing southeastern U.S. landscape. Feeding wild alligators is especially dangerous because it can condition them to associate people with food. State agencies operate nuisance-management programs to remove animals that present threats near homes, pets or recreation areas. Regulated harvest and farming are also major components of modern alligator management and trade.

### Fun facts

- Large alligators have produced some of the strongest directly measured bites among living animals.
- An alligator carries roughly 74-80 teeth at a time but may replace teeth thousands of times over its life.
- The tail makes up about half of total body length.
- Facial sensory organs can detect tiny water-surface disturbances while the animal waits almost completely submerged.
- Adult males are dramatically larger than females, making sex selection important for ABS combat scaling.
- The species went from severe historical decline to a population estimated by USFWS at nearly five million in the U.S. Southeast by 2026.
- Alligator-created depressions can hold water during drought and become important habitat for other wetland wildlife.

### Concise site-ready summary

The American alligator is a heavily armored freshwater ambush predator built around one of the strongest directly measured bites in the living animal world. A large adult male combines a 3.5 m body, crushing jaws, dozens of replaceable teeth, pressure-sensitive facial organs and a muscular tail that powers both aquatic acceleration and rotational prey handling. Its greatest advantages appear at close range and near water, while ectothermy and relatively limited dry-land endurance prevent it from dominating prolonged pursuits.

### Detailed narrative profile

The American alligator is less a pursuit predator than a biological trap. A mature bull can spend long periods nearly invisible at the waterline, exposing little more than its eyes, nostrils and the armored roof of its head. This posture is not passive in the sensory sense. Specialized receptors around the jaws detect minute disturbances in surrounding water, helping the animal locate movement even when darkness, vegetation or muddy water makes vision unreliable. When a target enters range, the alligator's entire combat design shifts from patience to sudden violence.

The jaws are the centerpiece. Unlike many popular animal statistics, alligator bite force has been measured directly across animals of different sizes. Experimental work demonstrates an enormous increase in bite force with growth, reaching many thousands of newtons in large adults. This gives the alligator a crushing clinch capable of breaking hard prey such as turtle shells and securing mammals that would be difficult for a less powerful predator to hold. Once the teeth have purchase, the alligator can use its mass, neck, tail and whole-body rotation to turn a bite into tearing and destabilization.

Its defensive design complements this offense. The back is reinforced by osteoderms beneath thick scales, and the animal's low body profile reduces the number of easy attack angles available to an opponent approaching from above. The tradeoff is specialization. Short limbs and an ectothermic metabolism are excellent for a predator that waits, bursts, grips and conserves energy, but they are inferior to the repeated acceleration and aerobic pursuit capacity of wolves, wild dogs or other cursorial mammals. An alligator dragged into a long dry-land contest loses much of what makes it formidable.

This environmental dependence is essential to fair ABS scaling. In shallow freshwater, a 200 kg adult male can use concealment, buoyancy, tail propulsion and the possibility of dragging an opponent into deeper water. On open dry ground, the same animal retains its dangerous bite and armor but loses much of its mobility advantage. The correct ABS interpretation is therefore neither an invincible prehistoric tank nor a slow animal helpless outside water. It is a powerful specialist whose attack and defense remain high in absolute terms while agility and stamina are much more conditional.

The species is also ecologically more complex than its combat reputation suggests. Alligators shape wetlands by digging and maintaining water-filled depressions, show parental care, communicate with powerful bellows, and alter movement according to season, temperature and breeding condition. Their recovery from severe twentieth-century decline into a widespread managed population is one of the clearest conservation success stories in North American wildlife management.

### Proposed future structured fields

- `bite_force_n_representative`
- `bite_force_n_max_measured`
- `bite_force_measurement_context`
- `locomotion_medium`
- `armor_type`
- `weapon_reach_cm`
- `sexual_dimorphism_notes`
- `canonical_specimen_sex`
- `canonical_measurement_convention`
- `aquatic_agility_modifier`
- `terrestrial_agility_modifier`
- `temperature_performance_notes`

## 9. Image Asset

- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Target asset:** `animal-research-for-update/images/alligator.png`
- **Selected source page:** https://commons.wikimedia.org/wiki/File:Big_american_aligator_alligator_mississippiensis.jpg
- **Direct original-image resolver:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Big_american_aligator_alligator_mississippiensis.jpg
- **Image type:** Real photograph, 3504 x 2336 JPEG source
- **Subject:** Large American alligator (*Alligator mississippiensis*)
- **Source/creator:** Steve Hillebrand, U.S. Fish and Wildlife Service, as recorded on Wikimedia Commons
- **Reuse status shown by source:** Public domain
- **Selection reason:** High-resolution real photograph of a large adult American alligator from a wildlife-authority source, with permissive public-domain provenance and enough body visibility for later non-generative cutout work.
- **Processing needed:** Remove background cleanly without generating or altering anatomy; export genuine-alpha PNG; visually inspect feet, tail, jaw outline and scute edges before production promotion.

The current GitHub connector supports UTF-8 text content rather than safe arbitrary binary PNG creation/upload, so no fake binary asset is committed in this run.

## 10. Evidence and source ledger

| Source | URL | Supports | Reported finding / context | Confidence / caveat |
|---|---|---|---|---|
| Smithsonian National Zoo, American alligator | https://nationalzoo.si.edu/animals/american-alligator | Adult male length, dimorphism, lifespan, teeth, habitat | Average male 3.4 m; female 2.6 m; ~50-year wild lifespan; 74-80 teeth at once | High institutional source |
| Florida Fish and Wildlife Conservation Commission, Alligator Facts | https://myfwc.com/wildlifehabitats/wildlife/alligator/facts/ | Size records, reproduction, diet | Females rarely exceed 10 ft; males larger; Florida records and breeding details | High government source; records are maxima, not canonical values |
| FWC American Alligator profile | https://myfwc.com/wildlifehabitats/profiles/reptiles/alligator/ | Armor, habitat, diet, activity | Dorsal scutes, freshwater habitat, ectothermy and feeding ecology | High government source |
| Animal Diversity Web, *Alligator mississippiensis* | https://animaldiversity.org/accounts/Alligator_mississippiensis/ | Growth, mass, length, dimorphism, tail proportion | Average mass 150 kg pooled; average length 350 cm; male growth beyond female; tail ~half body | Medium-high; compiled secondary academic resource |
| Erickson, Lappin & Vliet, ontogeny of bite force | https://zslpublications.onlinelibrary.wiley.com/doi/10.1017/S0952836903003819 | Direct bite-force measurements | 41 specimens; 12-9,452 N across ontogeny; force increases strongly with size | Very high primary biomechanical evidence |
| Erickson et al., captive vs wild bite force | https://zslpublications.onlinelibrary.wiley.com/doi/10.1017/S0952836903004400 | Wild/captive bite performance | 217-13,172 N; size relationships broadly similar between wild and captive animals | Very high primary evidence |
| Sellers et al., validated alligator bite model | https://doi.org/10.1242/jeb.156281 | Validation/context for bite biomechanics | Modeled bite forces compared against Erickson in-vivo data | High primary biomechanics source |
| Reilly & Elias 1998, locomotion | https://doi.org/10.1242/jeb.201.18.2559 | Terrestrial gait mechanics | High walk and low/sprawling walk; speed changes driven by specific limb kinematics | High primary source; accessible abstract does not justify a single adult top-speed number |
| Soares 2002, Nature | https://pubmed.ncbi.nlm.nih.gov/12015589/ | Facial pressure receptors | Crocodilian facial organs detect small water-surface disturbances | Very high primary source |
| Leitch & Catania / crocodylian sensory-organ work | https://pubmed.ncbi.nlm.nih.gov/23819918/ | Integumentary sensory biology | Sensory organs show combined mechano-, thermo- and chemosensory sensitivity | High primary evidence; study includes other crocodylians, so generalization to alligator facial organs should remain conservative |
| Uriona & Farmer 2008 | https://pubmed.ncbi.nlm.nih.gov/18344489/ | Aquatic pitch/control mechanics | Respiratory-associated muscles recruited during diving and pitch control in American alligators | High primary source; experiments on juveniles |
| U.S. Fish & Wildlife Service 2026 | https://www.fws.gov/story/2026-05/celebrating-american-alligator | Recovery, abundance, CITES/management | Nearly 5 million in southeastern U.S.; recovery and regulated trade history | High current government source |
| University of Florida IFAS, Living with Alligators | https://ask.ifas.ufl.edu/publication/UW393 | Large-male size context and ecology | Males can exceed 1,000 lb but most do not exceed 11-12 ft; alligator holes benefit wetlands | High extension source |
| Wikimedia Commons / USFWS image | https://commons.wikimedia.org/wiki/File:Big_american_aligator_alligator_mississippiensis.jpg | Image candidate | 3504 x 2336 real photo; Steve Hillebrand/USFWS; public domain | Strong provenance for later asset processing |

## 11. Confidence, conflicts and caveats

- **Canonical mass:** Moderate confidence. The 200.0 kg adult-male recommendation intentionally differs from ADW's pooled 150 kg species average because ABS uses the larger fighting sex. It should be revisited if a large sex-specific wild morphometric dataset gives a better representative male mean.
- **Length:** High confidence around 3.4-3.5 m for a representative mature male.
- **Height:** Deliberately unset. Crocodilian posture makes generic height misleading.
- **Speed:** Deliberately unset rather than importing unsourced 20-30 mph web claims. Future research should distinguish maximum land burst speed, routine high-walk speed and aquatic speed.
- **Bite force:** Very high confidence in the newton measurements, low confidence in any PSI conversion without tooth/contact area. Keep the production PSI field at zero until the schema is corrected or a standardized conversion is adopted.
- **Stamina:** The 40.0 editorial score reflects prolonged high-output combat, not ability to wait motionless or survive long periods with low metabolic demand.
- **Sensory specializations:** Strong evidence exists for crocodilian pressure sensing. Avoid overselling broad chemical/thermal ISO findings from other crocodilian species as though every function has been measured identically in American alligators.

## 12. Cross-animal calibration notes

Current researched comparison set: African Elephant, African Lion, African Wild Dog, Wandering Albatross, American Alligator.

- **Attack 84.0:** Above African Lion because the alligator's measured jaw force, clinch and rotational prey handling produce greater absolute close-range mechanical damage. It remains below true megafaunal/extinct ceiling candidates.
- **Defense 77.0:** Well above African Lion and African Wild Dog because of osteoderms, hide, mass and low robust build, but far below African Elephant's mass-based survivability ceiling region.
- **Agility 49.0:** Below African Lion and African Wild Dog. Water improves its practical movement, but the headline score must remain cross-environment and cannot turn aquatic specialization into general agility.
- **Stamina 40.0:** Far below African Wild Dog (82.0) and Wandering Albatross (96.0). This protects the distinction between ambush patience/low metabolic demand and sustained high-output performance.
- **Intelligence 51.0:** Competent but below African Lion and African Wild Dog social/tactical flexibility anchors.
- **Special 72.0:** High because pressure sensing, armored integument and rotational prey handling materially alter encounters. It should later be compared carefully with Saltwater Crocodile so shared crocodilian adaptations are not inflated simply because the larger species repeats them.

### Future normalization flags

1. Revisit Attack and Raw Power after Saltwater Crocodile, Hippopotamus, Great White Shark, Orca and Megalodon establish upper-force anchors.
2. Revisit Defense after Galapagos Tortoise, snapping turtles, Rhinoceros, Hippopotamus and armored mammals establish the protection distribution.
3. Keep American Alligator below Saltwater Crocodile in size-dependent raw power unless future evidence strongly contradicts that ordering.
4. Do not convert measured bite newtons to PSI casually during production migration.
5. When aquatic and terrestrial split stats become possible, give this species separate locomotor context rather than forcing every movement trait into one number.
