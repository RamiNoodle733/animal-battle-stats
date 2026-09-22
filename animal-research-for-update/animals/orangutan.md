# Orangutan Research Overhaul

## Research status
- **ABS roster name:** Orangutan
- **Canonical taxon:** *Pongo pygmaeus* (Linnaeus, 1760), Bornean orangutan
- **Family:** Hominidae
- **Living/extinct:** Living
- **Canonical combat specimen:** healthy prime fully flanged mature adult male, **90.0 kg**, approximately **97.0 cm standing body size**, with an arm span exceeding 2 m
- **Research confidence:** high for taxon, sexual dimorphism, male morph, diet, locomotion, cognition and life history; moderate for canonical longevity; low for physiological top speed and bite pressure
- **Image status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`

## 1. Identity and canonical specimen
The generic roster name Orangutan is standardized here to the Bornean orangutan, *Pongo pygmaeus*. This avoids mixing measurements among Bornean, Sumatran and Tapanuli orangutans. The Bornean species is strongly sexually dimorphic and adult males occur in two reproductive morphs: smaller unflanged males and larger flanged males with cheek pads, enlarged throat sacs and greater body size. Longitudinal research confirms that both morphs reproduce, while flanged males are larger and use a different reproductive tactic.

ABS uses a healthy prime **fully flanged 90.0 kg male** because the larger mature male is the biologically relevant fighting specimen. Smithsonian reports wild adult males at **77-100 kg** versus females **36-54 kg**. SeaWorld gives a representative adult male value of **90 kg**, and Columbus Zoo reports males at 220-240 lb (about 100-109 kg). This is intentionally not an obese captive extreme. Peer-reviewed work describes flanged males around 80 kg and up to roughly twice female mass.

## 2. Physical measurements and ranges
### Mass, stature and reach
Canonical mass is **90.0 kg**, comfortably within Smithsonian's wild male range. Institutional sources give adult male body size around **0.97 m**, while Columbus Zoo gives a broader standing height of 4-5 ft and an arm span up to about **7 ft**. Henry Vilas Zoo reports arm span up to **8 ft (2.4 m)**. Because sources inconsistently mix standing height, posture and head-body length, `height_cm` is conservatively set to **97.0 cm** using the explicitly sexed institutional body-size figure, while `length_cm` remains **0.0** rather than treating posture-dependent stature as head-body length.

The arms are extremely long relative to the legs, and hands and feet are strongly grasping. Smithsonian emphasizes cautious climbing and branch-walking rather than routine high-speed brachiation in large adults. Large males also use the ground more than lighter orangutans because their mass limits usable supports.

### Teeth and natural weapons
The main direct weapons are the jaws, large adult-male canines, powerful upper limbs and grasping hands. Adult males have relatively larger canines and premolars than females. No reliable species-specific bite-pressure measurement with defensible contact area was recovered, so **`bite_force_psi: 0.0`**. Popular PSI claims are not imported.

### Speed and locomotion
No defensible instrumented species-specific physiological maximum speed was recovered. Smithsonian explicitly describes terrestrial travel as slow and awkward and arboreal movement as cautious climbing and walking through large trees. Secondary web values around 5-10 km/h are not strong enough to define a maximum. **`speed_mps: 0.0`**.

This does not imply poor maneuverability. Orangutans distribute mass among multiple branches, suspend below supports, climb vertically, bridge gaps and use all four grasping extremities with excellent positional control. Their locomotor advantage is reach, balance and route choice rather than sprinting.

### Lifespan
Sources conflict because they mix lifespan, maximum age and managed-population median life expectancy. ADW reports Bornean orangutans often living more than 50 years and a wild high of 50, while Smithsonian gives substantially lower managed-population median life expectancy for males. A comparative great-ape pathology review states wild male orangutans can reach about 58 years, though that genus-level value includes evidence beyond Borneo. ABS therefore uses **50.0 years** as a defensible Bornean longevity field, not as mean survival.

### Defensive anatomy
There is no armor. Adult males have substantial body mass, dense shaggy hair, robust musculoskeletal structure and enormous reach, but skin and soft tissue remain vulnerable to teeth, claws, horns and penetrating weapons. Facial flanges are secondary sexual structures rather than combat armor and are not scored as protective plating.

## 3. Canonical proposed factual fields
| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **90.0** | Representative large healthy flanged male within Smithsonian 77-100 kg wild range. |
| `height_cm` | **97.0** | Institutional adult-male body-size figure; posture makes ape stature inherently variable. |
| `length_cm` | **0.0** | No sufficiently standardized representative head-body length recovered without mixing definitions. |
| `speed_mps` | **0.0** | No defensible species-specific physiological maximum. |
| `lifespan_years` | **50.0** | Supported Bornean upper wild longevity; not a population mean. |
| `bite_force_psi` | **0.0** | No defensible species-specific bite-pressure measurement/contact area. |

Useful future fields: `arm_span_cm`, `male_morph`, `flanged_status`, `canine_length_mm`, `grip_force_n`, `locomotion_mode`, `interbirth_interval_years`, and per-field confidence.

## 4. Combat biology
### Primary and secondary weapons
The jaw and canines are the primary tissue-damaging weapons. The upper limbs provide powerful pulling, grappling and positional control, while hands and feet can maintain multiple grips. A 90 kg flanged male has serious absolute strength, but this report does not use unsupported claims that orangutans are a fixed multiple of human strength. No direct force measurement recovered here supports such a multiplier.

### Offensive mechanics
A fighting orangutan is best modeled as a close-range grappler-biter. Long arms create reach for seizing supports or an opponent, while the jaws deliver puncturing trauma once contact is established. Male-male contest competition is biologically real: peer-reviewed work distinguishes flanged males from unflanged males partly by the latter's tendency to avoid male-male contest competition, and zoo/institutional accounts describe adult males warning or defending against rivals. This supports practical fighting capability without inventing a stereotyped duel sequence.

### Defensive adaptations and toughness
The animal's best defense is reach, grip, spatial control and avoidance in structurally complex habitat. Body mass and a robust great-ape frame provide more trauma reserve than small primates, but there is no armor. The cheek flanges and throat sac are display structures. They can reduce escalation by advertising mature-male status, but that signaling effect belongs primarily in tactics/specialization rather than passive Defense.

### Locomotion and maneuverability
Orangutans are highly arboreal. Smithsonian notes they normally move cautiously through large trees by climbing and walking, distributing weight across branches. Their hands and feet provide graceful suspension and swinging, but ground locomotion is slow and awkward. In a canopy, the ability to choose supports, hang below branches and use four grasping extremities produces excellent three-dimensional control. On flat open ground, acceleration and pursuit are major weaknesses.

### Endurance
Wild orangutans spend large portions of the day foraging and moving through canopy habitat and construct sleeping nests. Their slow, deliberate locomotion can be energetically economical, but there is no evidence here for elite pursuit endurance or prolonged high-output fighting. Stamina is therefore moderate-strong rather than extreme.

### Senses
Vision, hearing, touch and proprioception support precise canopy movement and foraging. Flanged males also produce long calls whose acoustic structure carries individual and contextual information; research on *P. p. wurmbii* found long calls can advertise identity, context and even intended travel direction. No extraordinary smell, echolocation or other sensory mechanism is claimed.

### Intelligence, learning and tactics
Cognition is a roster-level strength. Orangutans show flexible tool use with population-level variation, learned material handling and sophisticated construction. A PNAS study of nest building found orangutans select branches according to structural function and material properties, consistent with technical know-how. Wild populations also show distinct tool-use traditions. Their intelligence rating therefore belongs near the top of the living-animal roster, while remaining evidence-based rather than humanized.

### Intraspecific fighting and reproductive tactics
Male orangutans exhibit bimaturism. Long-term research across Sumatran and Bornean sites shows unflanged males are more sociable and tend to avoid direct male-male contest competition, whereas flanged males are larger and have higher reproductive success. Flanged males use amplified long calls and mature secondary sexual characteristics as status signals. Physical fights can occur, but signaling and spacing can prevent costly contact.

### Predation and diet
Bornean orangutans are primarily frugivorous omnivores rather than habitual large-prey hunters. Fruit dominates the diet, supplemented by leaves, bark, flowers, insects and occasional animal foods. Consequently, their combat skill is not calibrated like a specialized predator's killing sequence. Their weapons and strength are formidable at close range, but they lack the predatory targeting repertoire of large cats.

### Predator defense
Large healthy adults face relatively few natural predators in Borneo compared with smaller primates. Arboreality, body size, vigilance and route choice are central defenses. Humans are overwhelmingly more important as a modern mortality threat through hunting, conflict and habitat destruction.

### Environmental strengths
Dense forest strongly favors the orangutan. Multiple branches let it distribute mass, reposition vertically, retreat upward and exploit its enormous reach and four-limb grip. Elevated terrain also limits access by many terrestrial opponents.

### Environmental weaknesses
Open ground removes much of the locomotor advantage. The animal lacks armor, has no ranged weapon, and is not a fast cursorial pursuit animal. Very large flanged males are constrained by thin branches that cannot safely support their mass. Deep water is also a poor environment for a primarily arboreal ape.

### Matchup archetypes
**Relatively strong against:** similarly sized or somewhat smaller unarmored terrestrial opponents that must enter grappling range, especially in complex forest structure where reach and climbing matter.

**Weak against:** much larger megafauna, heavily armored opponents, long-reach horn/tusk specialists that can damage before a safe grapple, fast open-ground predators that control distance, and aquatic specialists in deep water.

## 5. Proposed ABS substats
All scores use absolute 0.1-100.0 roster scaling.

| Substat | Rating | Justification |
|---|---:|---|
| Size | **48.0** | 90 kg is substantial but far below large ungulates, bears and megafauna. |
| Raw Power | **58.0** | Powerful 90 kg great ape with long upper limbs and strong climbing/grappling musculature, without unsupported human-strength multipliers. |
| Weaponry | **53.0** | Large canines and grappling reach are dangerous but less specialized than big-cat claws/jaws or horn/tusk systems. |
| Protection | **30.0** | Dense hair and robust body, but no true armor. |
| Toughness | **47.0** | Large primate body and musculoskeletal robustness, still vulnerable to penetrating trauma. |
| Speed | **34.0** | Deliberate arboreal mover and slow/awkward terrestrial traveler; no reliable maximum promoted. |
| Maneuverability | **75.0** | Excellent four-limb grip, suspension, balance and canopy route control, tempered by large-male mass. |
| Endurance | **63.0** | Sustained daily foraging/travel but not a high-output pursuit specialist. |
| Recovery | **50.0** | No exceptional regeneration or physiological recovery mechanism established. |
| Tactics | **92.0** | Great-ape learning, flexible tool behavior, technical construction and adaptive route choice. |
| Senses | **70.0** | Strong visuomotor and auditory performance plus informative long-distance calls, without an extreme sensory organ. |
| Ferocity | **57.0** | Mature males can contest rivals, but spacing, display and avoidance are important and the species is not a habitual predator. |
| Abilities | **68.0** | Four-limb arboreal control and long-call signaling are distinctive, but neither is a toxin/electricity-class offensive mechanism. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **57.0** | 90 kg mass, powerful grappling limbs and large canines create serious close-range damage, below specialized large predators and heavily armed ungulates. |
| **Defense** | **43.0** | Reach and evasive canopy positioning help, but there is no armor and open-ground defense is much weaker. |
| **Agility** | **75.0** | Outstanding controlled climbing and suspension, but adult male mass and slow ground travel prevent gibbon-like agility. |
| **Stamina** | **63.0** | Sustained daily arboreal foraging and travel, without evidence for elite prolonged high-output exertion. |
| **Intelligence** | **96.0** | Flexible tool use, learned traditions, technical nest construction and sophisticated spatial decisions place orangutans among the roster's strongest nonhuman cognitive performers. |
| **Special** | **68.0** | Quadrumanous canopy control and mature-male long-call signaling are meaningful matchup tools but not direct lethal special mechanisms. |

### Cross-animal normalization
Attack 57.0 keeps a 90 kg orangutan above Okapi 53.0 in close-range grappling/weapon integration but below Elk 62.0, Musk Ox 64.0 and Moose 69.0, whose much greater mass and dedicated impact/horn or antler systems produce higher absolute damage. Raw power is not inflated pound-for-pound. Agility 75.0 is well below the 6.5 kg White-handed Gibbon's extreme canopy maneuverability and below Ocelot 88.0, while still reflecting far greater arboreal control than heavy ungulates. Intelligence 96.0 is deliberately elite because multiple independent lines of evidence demonstrate technical learning and construction. Special 68.0 stays far below Octopus 98.0 and Naked Mole Rat 96.0 because ordinary great-ape cognition is scored under Intelligence rather than double-counted as Special.

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Four-Limb Canopy Control** - grasping hands and feet, very long arms and suspension let a Bornean orangutan distribute its weight across supports, alter elevation and maintain contact from multiple angles in forest terrain.
2. **Flanged Long-Call Broadcast** - a mature male's enlarged throat sac amplifies long-distance calls carrying identity/context information and advertising travel direction or status, potentially deterring rivals before contact.

### Unique traits
1. **Bimaturate Male Strategy** - sexually mature males can persist as smaller unflanged males or develop into much larger flanged males with cheek pads, throat sac and altered reproductive tactics.
2. **Technical Nest Engineer** - orangutans repeatedly construct structurally organized sleeping nests and select branches for different mechanical roles, demonstrating learned material handling and technical cognition.

## 8. Expanded profile
### Habitat and geographic range
Bornean orangutans are endemic to Borneo in Indonesia and Malaysia. They occupy tropical lowland and peat-swamp forests as well as some upland and montane forest. Smithsonian notes use from near sea level into mountainous forest. Forest structure is central to feeding, travel, nesting and safety.

### Diet and ecology
They are predominantly fruit eaters, supplemented by leaves, bark, flowers, insects and other opportunistic foods. Fruit availability strongly influences travel and activity. As large frugivores they disperse seeds and affect forest regeneration.

### Social structure
Bornean orangutans are semi-solitary. Adult males are especially solitary, while female ranges may overlap and temporary feeding associations occur. Mature males communicate over long distances through long calls rather than maintaining chimpanzee-like cohesive parties.

### Reproduction and life history
Orangutans have an exceptionally slow life history. A seven-site field synthesis found a mean closed interbirth interval of **7.6 years** and female first reproduction around **15 years**, with very high pre-weaning survival. Direct tooth chemistry showed a wild female Bornean orangutan continuing to suckle until **8.1 years**, an exceptionally long nursing period. This slow reproduction makes population recovery from human-caused mortality extremely difficult.

### Conservation
The Bornean orangutan is **Critically Endangered**. Major threats include forest loss and fragmentation, conversion for agriculture including oil palm, hunting, conflict killing and illegal capture. Its low reproductive rate magnifies the demographic effect of adult mortality.

### Major adaptations
Long powerful arms, grasping hands and feet, highly mobile shoulders, flexible arboreal route planning, fruit-focused foraging knowledge, daily nest construction, cultural/tool-use flexibility, male bimaturism and long-distance vocal signaling.

### Human interaction
Human activity is the dominant conservation problem. Habitat conversion fragments canopy travel routes, while hunting and conflict can kill slow-reproducing adults. Rehabilitation and habitat protection are therefore important, but the species' very long developmental period makes replacement of lost adults slow.

### Genuine fun facts
- Wild adult males can weigh **77-100 kg**, roughly twice many adult females.
- Fully flanged males have large cheek pads and enlarged throat sacs used in long calls.
- A male's long call can contain information about identity and context and can advertise intended travel direction.
- Orangutans build sleeping nests from branches and leaves and make mechanically different choices for structural versus lining material.
- A wild Bornean female was shown through tooth chemistry to continue suckling until **8.1 years**.
- Across long-term field sites, the mean orangutan interbirth interval was about **7.6 years**.
- Large males may travel on the ground more often because thin canopy supports cannot safely bear their mass.

### Concise site summary
The Bornean orangutan is a 90 kg flanged great ape whose battle strengths are long-reach grappling, large canines, four-limb canopy control and elite technical intelligence. It is formidable at close range and extraordinarily capable in forest structure, but lacks armor, sprint specialization and the dedicated killing weapons of large carnivores.

### Rich narrative profile
A mature flanged Bornean orangutan is built around reach and control rather than pursuit. Its long arms, grasping hands and feet and powerful climbing musculature let it spread its weight across branches that would be precarious for a similarly heavy terrestrial mammal. In a canopy this produces a three-dimensional positional game: the ape can hang below supports, bridge gaps, climb vertically and maintain several points of contact while deciding where its mass can safely go next.

In direct conflict, however, the biology should not be exaggerated. The orangutan has large canines and serious grappling strength, but it is not a 90 kg big cat and it is not a scaled-up gibbon. There is no defensible basis here for viral claims that its strength is a fixed several-times-human multiplier, nor for a fabricated bite PSI. Its physical offense is therefore strong but not elite on a roster containing large bears, bovids, rhinos and megafauna.

Its most exceptional advantage is cognitive. Orangutans learn local foraging techniques, use tools, plan routes through mechanically complex canopy and construct sleeping nests from branches selected for different structural roles. Those abilities matter in a matchup because they support positioning, obstacle use and behavioral flexibility. They do not magically increase muscle force, so they are concentrated in Intelligence/Tactics rather than copied into Attack and Special.

The flanged male also embodies an unusual reproductive strategy. Orangutan males can be sexually mature before developing the massive cheek pads, throat sac and body size of a flanged adult. Once flanged, the male broadcasts long calls that communicate over forest distances and can advertise identity, context and travel direction. The result is a fighter whose most impressive toolkit combines a large great-ape body with spatial control, signaling and technical cognition rather than armor or specialized predatory anatomy.

### Future field proposals
- `arm_span_cm`: retain sex- and source-specific measurements instead of generic orangutan values.
- `male_morph`: flanged / unflanged, because adult male morphology and tactics differ strongly.
- `canine_length_mm`: add only after a representative adult-male measurement is located.
- `grip_force_n`: add only from direct species-specific measurement, not human-relative multipliers.
- `arboreal_vs_ground_agility`: separate terrain-dependent movement performance.
- `interbirth_interval_years`: useful conservation/life-history field.
- `tool_use_complexity` and `nest_construction`: structured cognition fields if the site expands beyond combat ratings.

## 9. Mandatory image requirement
- `image_status`: `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- `png_repo_path`: `animal-research-for-update/images/orangutan.png` **(not created)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Male_Bornean_Orangutan.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/a/a4/Male_Bornean_Orangutan.jpg
- `file_format_verified`: source is a real JPEG photograph; final PNG absent
- `alpha_verified`: no, final PNG absent
- `full_body_verified`: no
- `adult_verified`: yes, source explicitly says **mature male** with developed cheek pads
- `sex_verified_or_unknown`: male verified
- `license_status`: CC BY-SA 2.0, Flickr license reviewed by Wikimedia
- `notes`: 5568x3712 exact-*P. pygmaeus* mature-male source with strong provenance and excellent resolution. The source page and original were inspected, but the pose/framing does not establish every hand, foot and complete body silhouette under the strict standard. It is therefore only a source lead. Current GitHub writer accepts UTF-8 text, not PNG binary, so no fake cutout is created.

## 10. Evidence and source ledger
| Source | Direct URL | Claims supported | Confidence / caveat |
|---|---|---|---|
| Smithsonian National Zoo, Orangutan | https://www.nationalzoo.si.edu/animals/orangutan | Wild male 77-100 kg, female 36-54 kg; cautious arboreal locomotion; slow/awkward ground movement; habitat and communication | High; institutional species account, some genus-level material |
| Columbus Zoo, Bornean Orangutan | https://www.columbuszoo.org/animals/bornean-orangutan | Male 220-240 lb, female 120-130 lb, 4-5 ft standing, ~7 ft arm span | High-medium; managed-zoo account |
| Animal Diversity Web, *Pongo pygmaeus* | https://animaldiversity.org/accounts/Pongo_pygmaeus/ | Bornean taxonomy and longevity synthesis | Medium-high; secondary academic synthesis, longevity fields internally heterogeneous |
| Kunz et al. 2023, American Journal of Primatology | https://doi.org/10.1002/ajp.23535 | Male bimaturism, flanged/unflanged behavioral tactics, flanged size, contest-avoidance context | High; peer-reviewed longitudinal/cross-sectional study |
| Nietlisbach et al. 2024, flanged male reproductive success | https://pubmed.ncbi.nlm.nih.gov/38335166/ | Flanged males larger and higher reproductive success in wild population | High; peer-reviewed wild paternity study |
| van Casteren et al. 2012, PNAS | https://doi.org/10.1073/pnas.1200902109 | Nest construction, branch selection by structural function, technical know-how | High; peer-reviewed field biomechanics/behavior |
| Fox et al. 2004, AJPA | https://onlinelibrary.wiley.com/doi/10.1002/ajpa.10386 | Population variation in tool use, diet and insect foraging | High; peer-reviewed field study, historical taxonomy spans orangutan populations |
| Spillmann et al. 2017, long calls | https://pubmed.ncbi.nlm.nih.gov/27931024/ | *P. p. wurmbii* male long calls encode individual/context information and travel direction | High; peer-reviewed species/subspecies-specific study |
| Wich et al. 2019, slow ape | https://pubmed.ncbi.nlm.nih.gov/30502896/ | 7-site 7.6 y interbirth interval, ~15 y first reproduction, high immature survival | High; peer-reviewed multi-site synthesis |
| Austin et al. 2017, Science Advances | https://pubmed.ncbi.nlm.nih.gov/28560319/ | Bornean female nursing to 8.1 y | High; direct tooth chemistry, small specimen sample |
| Henry Vilas Zoo, Bornean Orangutan | https://www.henryvilaszoo.gov/animal/bornean-orangutan/ | Up to 2.4 m arm span; 35-45 y wild lifespan; CR status summary | Medium; institutional secondary account |
| Wikimedia Commons, Male Bornean Orangutan | https://commons.wikimedia.org/wiki/File:Male_Bornean_Orangutan.jpg | Mature male image identity, 5568x3712 resolution, CC BY-SA 2.0 provenance | High for provenance; strict full-body fails verification |

### Source conflicts and uncertainty
- **Mass:** Smithsonian's 77-100 kg wild-male range is preferred over heavier captive figures because zoo animals can be substantially heavier. Canonical 90 kg is representative rather than maximal.
- **Height/length:** institutional pages mix standing height and body size. `height_cm` uses the conservative 97 cm sexed value; `length_cm` remains 0.0 instead of pretending definitions are interchangeable.
- **Speed:** no strong controlled species-specific maximum was recovered. Popular top-speed values are rejected.
- **Bite force:** no defensible species-specific PSI measurement was recovered. No conversion from force to pressure is attempted.
- **Lifespan:** sources mix wild maximum, captive maximum and median life expectancy. 50 years is retained as defensible Bornean upper wild longevity, not mean survival.
- **Strength:** unsupported fixed multiples of human strength are rejected.

## 11. Cross-animal calibration notes
The orangutan is a useful anti-inflation test. Its 90 kg mass and great-ape musculature demand much higher Raw Power and Attack than small primates, but neither fame nor human similarity justifies scores near megafauna. Attack 57.0 remains below Elk 62.0, Musk Ox 64.0 and Moose 69.0 because those animals combine several times the mass with specialized impact weapons. Agility 75.0 recognizes four-limb canopy control while remaining below White-handed Gibbon and Ocelot because a fully flanged male is extremely heavy for thin supports and slow on the ground. Intelligence 96.0 is the exceptional headline score, grounded in tool traditions, technical construction and spatial problem solving. Special 68.0 deliberately does not double-count that cognition.

## Final verification
- Exact taxon and canonical fighting sex resolved: **yes**
- Representative rather than record specimen: **yes**
- Unsupported speed and PSI left at 0.0: **yes**
- All canonical factual fields addressed: **yes**
- All requested combat-biology categories addressed: **yes**
- All current ABS-style substats scored to one decimal: **yes**
- Six headline ratings to one decimal: **yes**
- Exactly two named special abilities: **yes**
- Exactly two unique traits: **yes**
- Expanded ecology/life history/conservation/human interaction: **yes**
- Several genuine fun facts: **yes**
- Concise summary and rich narrative: **yes**
- Future fields proposed: **yes**
- Source ledger with direct URLs, confidence and conflicts: **yes**
- Cross-roster calibration included: **yes**
- Mandatory image status truthful: **yes**
- Production data/site/live images modified: **no**
