# Leopard Research Overhaul

## Research status
- **ABS roster name:** Leopard
- **Canonical taxon:** *Panthera pardus* (Linnaeus, 1758)
- **Living/extinct:** Living
- **Canonical combat specimen:** healthy fully mature adult male, 60.0 kg
- **Research confidence:** high for taxonomy, sexual dimorphism, ecology and combat mechanics; moderate for representative dimensions across a highly variable species; low for a standardized maximum sprint and bite pressure
- **Image status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`

## 1. Identity and canonical specimen
The roster Leopard is the true leopard, *Panthera pardus*. It is the smallest of the four living *Panthera* big cats but is extraordinarily widespread and variable. The IUCN SSC Cat Specialist Group gives a species-wide mass range of 17–90 kg, body length 91–191 cm and tail length 51–101 cm. Animal Diversity Web gives males 31–65 kg and females 17–58 kg and explicitly identifies males as larger.

ABS should use a **healthy mature 60.0 kg male**. This represents a robust fighting-sex adult without silently selecting the 90 kg species-wide extreme. Population variation is important: woodland/savanna animals tend to be larger than many desert and mountain populations, and recognized subspecies span Africa and Asia. The canonical profile is therefore a representative large adult male, not a claim that all male leopards are 60 kg.

## 2. Physical measurements

### Mass, height and length
- **Mass:** canonical 60.0 kg. Supported by the ADW male range of 31–65 kg and CatSG's wider 17–90 kg species range.
- **Shoulder height:** canonical 65.0 cm, moderate confidence. Strong sex-specific primary means are scarce and geographic variation is substantial, so this is a representative morphology value rather than a precise species mean.
- **Head-body length:** canonical 150.0 cm. CatSG gives 91–191 cm body length and 51–101 cm tail length. Tail should eventually be represented separately rather than mixed into body-length conventions.

### Speed
Popular sources frequently repeat approximately 58 km/h, but this run did not recover a transparent instrumented maximum-speed study for *P. pardus*. **Canonical `speed_mps`: 0.0 pending defensible measurement.** This is an evidence-null field, not a statement that the leopard is slow. Its explosive pounce, climbing and maneuverability are independently well documented.

### Lifespan
ADW reports a typical wild lifespan of **10–12 years**, a wild maximum of 17 years, and much longer captive survival. Canonical wild `lifespan_years` is **12.0**.

### Bite force and dentition
Leopards kill with a close-contact felid system of canines, carnassials, jaws, forelimb grappling and retractile claws. Biomechanical literature can support bite force in force units, but this run did not find a defensible species-specific pressure measurement with contact area. **Canonical `bite_force_psi`: 0.0.** No internet PSI figure is promoted by conversion or repetition.

### Weapons and defenses
Primary weapons are long canines, carnassials, retractile claws, powerful forelimbs and body-weight-assisted grappling. The flexible forelimb and paw system also supports climbing and prey control. Protection is ordinary felid fur, skin, muscle and skeleton. There is no armor, venom or unusual trauma-resistant tissue.

## 3. Canonical proposed factual fields
| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **60.0** | Representative robust adult male, below species-wide extremes. |
| `height_cm` | **65.0** | Representative shoulder height; moderate confidence. |
| `length_cm` | **150.0** | Representative head-body length; tail excluded. |
| `speed_mps` | **0.0** | No transparent instrumented species maximum verified. |
| `lifespan_years` | **12.0** | Upper end of ADW typical wild lifespan. |
| `bite_force_psi` | **0.0** | No defensible pressure measurement/contact area. |

Useful future fields: `canonical_sex`, `head_body_length_cm`, `tail_length_cm`, `population_context`, `bite_force_newtons`, `bite_force_method`, `arboreal`, `activity_pattern`, and per-field confidence.

## 4. Combat biology

### Offensive mechanics
The leopard is an ambush-and-grapple predator. ADW describes a low stalk to roughly 3–10 m followed by a pounce; after capture it uses neck/throat control and a killing bite. Claws and forelimbs stabilize prey while the jaws deliver concentrated damage. The system is dangerous and repeatable but requires close contact.

### Hunting and predation
Leopards are opportunistic carnivores. ADW reports preference for roughly 10–40 kg prey, while peer-reviewed studies show strong flexibility with prey availability. A 2026 feeding study likewise found small-to-medium animals dominating biomass for North China and Amur leopards, while larger prey contributed contextually. Persian leopard telemetry identified 130 kills from six GPS-collared adults and approximately 3.3 kills/month per adult male in that study.

### Intraspecific fighting and tactics
Adults are predominantly solitary and territorial. Direct fights can be severe, but scent marking, vocal communication and spacing reduce unnecessary injury. Males' larger body size and ranges make the mature male the appropriate canonical combat sex. Leopards use ambush, terrain, timing, route choice and withdrawal rather than relying on frontal force alone.

### Defense and toughness
At 60 kg the leopard is muscular and structurally robust, but it has no armor. Its best defense is often evasive: concealment, fast repositioning, climbing and refusal of bad engagements. Penetrating horn/tusk wounds, crushing attacks and bites from larger carnivores remain serious threats.

### Locomotion and agility
Leopards combine terrestrial stalking and explosive pouncing with exceptional climbing. They can feed in trees and descend head-first. This mixed terrestrial/arboreal control supports very high maneuverability even though a verified maximum sprint is unavailable. Agility is therefore not derived from a guessed top speed.

### Endurance
They are not persistence hunters, but tracking studies show substantial nightly movement and flexible home ranges. A 2021 synthesis used tracking data from 74 leopards, while a 2023 African synthesis analyzed 147 individuals and found that animals with larger home ranges spent longer active and traveled faster/straighter. This supports solid, not elite, Stamina.

### Senses and intelligence
Low-light vision, hearing, olfaction and tactile whisker feedback make a strong nocturnal predator sensory package. Cognitively, leopards show flexible prey selection, caching, route choice, human avoidance and adaptation to highly variable habitats. This is high tactical competence for a solitary carnivore without implying primate-level general cognition.

### Environmental strengths
Dense vegetation, broken terrain, darkness and trees strongly favor the leopard by shortening ambush distance and providing vertical escape/caching options. Complex terrain rewards balance and maneuverability.

### Environmental limitations and weaknesses
Open terrain reduces concealment. Long open pursuit favors cursorial specialists. Deep water removes most of the terrestrial/arboreal package. A 60 kg leopard has a major absolute mass disadvantage against lions, tigers, large bears, heavily armed bovids and megafauna. It has no armor or ranged attack and must enter bite/claw range to finish a fight.

### Matchup archetypes
**Strong against:** smaller or similarly sized terrestrial animals vulnerable to ambush, grappling and neck control; poor climbers in broken/wooded terrain.

**Weak against:** substantially larger big cats and bears, armored taxa, heavy horned/tusked herbivores, megafauna, and opponents whose venom/electric/chemical mechanisms can bypass ordinary mammalian toughness.

## 5. Proposed ABS substats
All scores use absolute roster-wide scaling.

| Substat | Rating | Justification |
|---|---:|---|
| Size | **38.0** | 60 kg is meaningful but far below large carnivores and megafauna. |
| Raw Power | **46.0** | Strong forequarters and grappling/climbing musculature, mass-limited absolutely. |
| Weaponry | **60.0** | Canines, carnassials and retractile claws form a versatile killing system. |
| Protection | **27.0** | No armor beyond ordinary mammalian tissues. |
| Toughness | **45.0** | Robust predator, but major penetrating/crushing trauma remains dangerous. |
| Speed | **55.0** | Explosive acceleration is clear; maximum factual speed remains unresolved. |
| Maneuverability | **84.0** | Elite climbing, balance, pouncing and dense-terrain control. |
| Endurance | **62.0** | Sustained patrol/travel is strong but not persistence-hunter specialization. |
| Recovery | **47.0** | Normal mammalian healing, no exceptional regeneration. |
| Tactics | **70.0** | Flexible ambush, prey choice, caching, avoidance and terrain use. |
| Senses | **76.0** | Strong nocturnal predator suite without a rare sensory modality. |
| Ferocity | **67.0** | Dangerous close-contact hunter and rival fighter balanced by solitary risk avoidance. |
| Abilities | **61.0** | Arboreal control and stealth materially alter matchups but are not bypass powers. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **60.0** | Effective bite-claw-grapple killing system, but 60 kg absolute mass limits damage ceiling. |
| **Defense** | **43.0** | Good functional toughness and evasive survival, little actual armor. |
| **Agility** | **84.0** | Exceptional mixed arboreal/terrestrial control, balance and pouncing. |
| **Stamina** | **62.0** | Strong territorial movement, below endurance-specialized canids and migrants. |
| **Intelligence** | **68.0** | Flexible solitary hunting, caching and habitat adaptation. |
| **Special** | **63.0** | Vertical terrain control and stealth are matchup-changing but not exotic physiology. |

## 7. Exactly two special abilities and two unique traits
### Special abilities
1. **Canopy Control** — Powerful climbing, retractile claws and flexible limb mechanics let a leopard reposition vertically, escape ground-bound threats and secure prey in trees.
2. **Close-Stalk Ambush** — Concealment, low-light senses and controlled stalking let the leopard compress engagement distance before an explosive pounce, reducing an opponent's reaction window.

### Unique traits
1. **Rosette Concealment** — Disruptive rosette patterning breaks up the body outline across woodland, forest and broken light, improving approach and avoidance without being treated as invisibility.
2. **Solitary Generalist** — One animal combines broad prey choice, habitat flexibility, caching and independent territorial hunting without needing pack coordination.

## 8. Expanded profile
### Habitat and range
Leopards occupy sub-Saharan Africa and a fragmented Asian range extending through parts of Arabia, southwest and South Asia, Indochina, China and the Russian Far East. They use rainforest, woodland, savanna, mountains, semiarid landscapes and some human-modified environments. CatSG recognizes major subspecific and geographic structure.

### Diet and ecology
They primarily take small-to-medium ungulates but also consume primates, pigs, rodents, birds, reptiles, fish, arthropods and carrion. Diet shifts with prey availability. Their broad niche and ability to cache food help them coexist with larger competitors, although lions, tigers and hyenas can displace or kill them.

### Social structure and life history
Leopards are predominantly solitary. Adults communicate through scent, scrapes and vocalizations. ADW reports year-round breeding, usually 2–3 cubs, approximately 96-day gestation and independence around 13–18 months. Females provide parental care and juveniles undergo extended learning before independence.

### Conservation and humans
The IUCN SSC Cat Specialist Group lists *Panthera pardus* as **Vulnerable**, citing habitat loss, prey depletion, persecution, illegal wildlife trade, medicinal/ceremonial exploitation and poorly managed hunting. Leopards can persist near people, but livestock predation and fear can produce severe conflict.

### Major adaptations
Retractile claws, powerful forelimbs, flexible climbing mechanics, low-light sensory performance, ambush behavior, carcass caching, broad diet and habitat flexibility.

### Genuine fun facts
- Leopards can descend trees head-first, unusual among large cats.
- The species has one of the broadest geographic and habitat distributions of any wild cat.
- ADW describes stalking to only about 3–10 m before the pounce.
- CatSG reports a species-wide body-length range of 91–191 cm plus a 51–101 cm tail.
- GPS work shows leopard space use changes dramatically with prey, habitat, competitors and human density.

### Concise site summary
A 60 kg mature male leopard is an elite ambush-and-grapple predator whose canines, claws, climbing ability and tactical flexibility make it dangerous far beyond a simple sprint statistic. Its strongest ABS advantage is agility and terrain control, while limited armor and a large mass gap against bigger predators keep Defense and absolute Attack below heavyweight carnivores.

### Narrative profile
The leopard wins by controlling when and where contact happens. It stalks through cover, uses darkness and terrain to close distance, then converts a short explosive pounce into a grapple where claws stabilize the target and the jaws can reach the neck. Unlike a cursorial pursuit specialist, it does not need a long chase to be effective. Trees add an entire vertical dimension to its toolkit, providing observation, escape and food security. That versatility explains why leopards persist from rainforest to dry country and even near dense human settlement.

That flexibility should not be confused with heavyweight durability. A representative male is around 60 kg, lacks armor and cannot trade frontal damage efficiently with lions, tigers, large bears or megafauna. ABS therefore gives the leopard elite Agility and strong tactics while keeping its Attack and Defense anchored to absolute body scale.

## 9. Image requirement
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/leopard.png` (not created)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Leopard_(Panthera_pardus)_male_..._(51890626416).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/7/78/Leopard_%28Panthera_pardus%29_male_..._%2851890626416%29.jpg
- `file_format_verified`: source JPEG verified by Commons; final PNG absent
- `alpha_verified`: no
- `full_body_verified`: yes for the source photograph on direct visual inspection: head, torso, four legs/feet and complete tail are in frame
- `adult_verified`: no; source explicitly says male but does not explicitly establish adulthood
- `sex_verified_or_unknown`: male verified by source metadata/category
- `license_status`: CC BY-SA 2.0, Flickr license independently reviewed by Commons
- `notes`: 4355x2630 exact-species African leopard photograph from Kruger National Park. Excellent side-profile whole-body framing, but IMAGE_REQUIREMENTS makes adulthood mandatory, so it is not promoted to source-verified cutout status. Current GitHub writer is text-only, so no binary PNG is fabricated.

## 10. Source ledger
| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| IUCN SSC Cat Specialist Group, Leopard | https://www.catsg.org/living-species-leopard | taxonomy, dimensions, range, conservation | 17–90 kg; 91–191 cm body; 51–101 cm tail; Vulnerable | High; broad species-wide ranges. |
| Animal Diversity Web, *Panthera pardus* | https://animaldiversity.org/accounts/Panthera_pardus/ | sex dimorphism, mass, length, lifespan, behavior, diet, reproduction | males 31–65 kg; females 17–58 kg; typical wild lifespan 10–12 y; 3–10 m stalk context | Moderate-high; compiled account, some older references. |
| Stein & Hayssen 2013, Mammalian Species | https://academic.oup.com/mspecies/article/45/900/30/2643006 | taxonomy, ecology, adaptability | solitary adaptable *Panthera* across very broad habitat/range | High peer-reviewed species account; conservation category has since changed. |
| Snider et al. 2021, Journal of Mammalogy | https://academic.oup.com/jmammal/article/102/4/1138/6317594 | space use / behavioral flexibility | synthesis includes tracking data from 74 leopards | High; home range is not direct combat endurance. |
| Journal of Mammalogy 2023 home-range synthesis | https://academic.oup.com/jmammal/article/104/6/1353/7268784 | movement/endurance context | 147 African leopards; larger ranges associated with longer activity and faster/straighter travel | High; not a maximum-speed trial. |
| Farhadinia et al. 2018, Journal of Mammalogy | https://academic.oup.com/jmammal/article-abstract/99/3/713/4996220 | predation / kill rate | 6 collared adults, 130 kills; ~3.3 kills/month per adult male | High, regional Persian-leopard context. |
| Current Zoology feeding study | https://academic.oup.com/cz/article/72/1/95/8140134 | prey-size context | small/medium animals dominated biomass; larger prey context-dependent | High, regional North China/Amur populations. |
| Wikimedia Commons / Bernard DUPONT | https://commons.wikimedia.org/wiki/File:Leopard_(Panthera_pardus)_male_..._(51890626416).jpg | image provenance | 4355x2630 male *P. pardus*, Kruger NP, CC BY-SA 2.0 | High provenance; adulthood not explicit. |

## 11. Confidence, conflicts and future field proposals
- **High confidence:** taxon, male-biased size, ambush/grapple mechanics, climbing, broad ecology and conservation status.
- **Moderate confidence:** canonical 60 kg and 150 cm values because populations vary substantially.
- **Low confidence / intentionally unresolved:** standardized maximum sprint and bite PSI.
- Do not canonize the repeated ~58 km/h claim until methodology is traceable.
- Do not convert modeled bite force in newtons to PSI without defensible contact area.
- Future schema should separate head-body and tail length, record population/subspecies context, and allow force-unit bite measurements with method metadata.

## 12. Cross-animal normalization notes
- **Versus Black Panther:** because the roster Black Panther is a melanistic *P. pardus*, its physical combat baseline should remain extremely close. Leopard is Attack 60.0 versus Black Panther 59.0 and Agility 84.0 versus 83.0; these one-point differences are editorial and should be reconsidered during the final duplicate/phenotype normalization audit. Melanism itself must not create extra raw power.
- **Versus Jaguar:** Jaguar's 100 kg Pantanal-male control (Attack 68.0, Defense 48.0) remains clearly above Leopard in absolute force and durability. Leopard retains a slight maneuverability advantage (84.0 vs Jaguar 82.0).
- **Versus Hyena:** spotted hyena's 75 kg female control has lower Agility but higher Stamina/Defense. This preserves distinct pursuit/toughness versus arboreal-ambush niches.
- **Versus Clouded Leopard:** Leopard must remain substantially above the ~22 kg clouded leopard in absolute Attack/Raw Power even where the smaller cat has exceptional proportional canine specialization.
- **Versus Komodo Dragon:** Leopard's Agility and tactics are higher, while Komodo's venom system gives much higher Special and a different damage pathway.

No production value is changed by this staging report.