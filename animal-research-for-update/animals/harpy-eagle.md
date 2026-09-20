# Harpy Eagle

## 1. Identity and canonical specimen

- **Common name:** Harpy Eagle
- **Scientific name:** *Harpia harpyja* (Linnaeus, 1758)
- **Taxon represented:** exact living species *Harpia harpyja*, family Accipitridae.
- **Canonical combat specimen:** healthy mature **female**, **8.0 kg**, approximately **100.0 cm body length** and **200.0 cm wingspan**. The female is used because reverse sexual size dimorphism is pronounced and she is the larger, more powerful fighting/hunting sex.
- **Dimorphism:** peer-reviewed diet work reports males about 4.9–6.9 kg and females about 5.9–9.1 kg. ADW gives females roughly 7–9 kg and males roughly 5–8 kg. Plumage is broadly similar between sexes, so sex must not be inferred from appearance alone.
- **Variation:** body mass and dimensions vary among individuals and populations. The 8.0 kg canonical female is representative, not a record-sized captive bird.

## 2. Physical measurements

### Mass, length, wingspan
Peer-reviewed work in Suriname gives **4.9–6.9 kg males** and **5.9–9.1 kg females**. ADW gives body length about **89–102 cm** and wingspan around **2 m**. World Land Trust gives mature adults around **89–102 cm** long. The canonical values therefore use an 8.0 kg mature female and 100.0 cm body length.

### Height
A clean standardized standing-height field is poorly supported for this arboreal raptor. Brasília Zoo reports sex-dependent height values, but the site's `height_cm` field is ambiguous for birds and the figure is not a primary morphometric standard. **Canonical `height_cm`: 90.0 cm**, used as a practical standing-height representation for a large adult female and explicitly lower-confidence than mass/length.

### Speed
A widely repeated 80 km/h figure is weakly sourced and appears to conflate short attack flight with a measured species maximum. Guinness describes a roughly **32 km/h (20 mph)** swoop in its strongest-bird account, but this is not an instrumented physiological maximum. To avoid false precision, **canonical `speed_mps`: 0.0** pending a defensible species-specific measured maximum.

### Lifespan
ADW estimates **25–35 years** for healthy animals. **Canonical `lifespan_years`: 30.0**, the midpoint of that supported range, with the caveat that wild longevity is less directly measured than morphology.

### Talons, feet and weapons
The hind talon is exceptionally large. Guinness records harpy-eagle rear talons up to **13 cm**, while ADW reports talons up to **12.5 cm**. Guinness also reports toes spanning about **23 cm**. These are upper-end weapon dimensions, not assumed dimensions for every individual.

The principal killing system is not a bite. It is the feet: massive tarsi, long toes and strongly curved talons that seize, puncture and immobilize arboreal mammals. The hooked bill is a secondary tearing tool once prey is controlled.

### Bite force
No defensible species-specific bite-pressure measurement was located. **Canonical `bite_force_psi`: 0.0**. This means unsupported/not established, not literally zero force.

### Defenses
Harpy eagles lack armor. Feathers, robust legs, strong flight control and the ability to choose engagement geometry provide functional defense, but their hollow-boned avian body remains vulnerable to severe blunt trauma or a successful grapple by a much larger terrestrial opponent.

## 3. Proposed canonical factual fields

| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **8.0** | Representative mature female within peer-reviewed 5.9–9.1 kg female range |
| `height_cm` | **90.0** | Practical adult-female standing-height representation; lower confidence than length/mass |
| `length_cm` | **100.0** | Representative adult body length within 89–102 cm institutional range |
| `speed_mps` | **0.0** | No defensible instrumented species maximum located |
| `lifespan_years` | **30.0** | Midpoint of ADW 25–35 year estimate |
| `bite_force_psi` | **0.0** | No defensible species-specific PSI measurement |

**Additional proposed field:** `wingspan_cm = 200.0` as a useful bird-specific morphology field if the site later expands its schema.

## 4. Combat biology

### Primary and secondary weapons
The feet and talons are the decisive weapons. The rear talon can approach 12.5–13 cm at the upper end, and the bird's feet are unusually massive for an eagle. The bill is secondary and most useful after the feet establish control.

### Offensive mechanics
Harpy eagles are canopy ambush predators. They perch, scan and listen, then close rapidly through forest structure and seize prey with the feet. Their attack combines positional surprise, flight momentum, penetration by multiple talons and sustained gripping control. This is a high-quality weapon system on an 8 kg body, but ABS must not translate exceptional proportional performance into large-mammal raw power.

Field diet studies show the practical result. Central-Amazon breeding pairs were dominated by two sloth species by both number and biomass, with primates, rodents, carnivores and birds also represented. Atlantic Forest research found mean estimated prey masses around **2.834–3.637 kg**, comparable with Amazon estimates of roughly 2.6–4 kg. Guinness documents females capable of killing/carrying prey near their own mass, but this should be treated as an exceptional capability rather than the normal prey baseline.

### Defensive adaptations and durability
Aerial access and vertical separation are the primary defensive advantages. In canopy terrain the eagle can disengage into branches and exploit three-dimensional space. Physical protection is low compared with mammals of similar or greater mass. The legs are exceptionally stout for a raptor, but the torso is not armored.

### Locomotion and maneuverability
Short, broad wings and a long tail favor controlled flight and turning through dense rainforest rather than maximum open-air speed. ADW explicitly describes the species as highly skilled and maneuverable in dense forest. This supports a very high Maneuverability score independently of any unverified top-speed number.

### Endurance and stamina
This is a sit-and-wait predator rather than a long-distance pursuit specialist. ADW notes that an individual may perch for very long periods while searching for prey. Released birds tracked by telemetry dispersed widely, with mean post-release dispersal around 29.4 km, but those data concern space use rather than continuous exertion. Stamina is therefore strong for sustained daily function and repeated flights, not elite pursuit endurance.

### Senses
Harpy eagles hunt using both vision and hearing. Peer-reviewed Atlantic Forest work describes extremely acute vision plus a retractable facial disc that aids visual/acoustic detection of cryptic prey. This combination is especially valuable in cluttered canopy habitat where prey may be partly hidden.

### Intelligence and tactics
The species uses patient perch hunting, selective attack geometry and habitat structure effectively. Diet is flexible enough to include many arboreal vertebrates while remaining specialized around canopy prey. Evidence supports good tactical hunting and learning, but not corvid/primate-level problem solving.

### Hunting and predation behavior
Harpy eagles specialize on arboreal mammals, especially sloths and monkeys, but documented prey diversity is broad. A three-year central-Amazon study of five breeding pairs found sloths dominating diet by abundance and biomass. A 2023 Atlantic Forest study likewise found sloths and capuchins major biomass contributors. Deforestation research on 16 active nests showed the eagles did not simply switch to open-habitat prey as forest was lost, demonstrating strong canopy specialization.

### Intraspecific fighting and aggression
Direct lethal conspecific combat is not a defining ecological feature in the sources reviewed. Adults defend nest areas and can be aggressive toward threats near offspring. Ferocity is therefore based primarily on predatory commitment and nest defense rather than assuming constant eagle-on-eagle fighting.

### Environmental strengths
- Dense mature rainforest, where short broad wings and long tail support tight maneuvering.
- Elevated perches that enable patient detection and surprise.
- Arboreal opponents whose escape routes remain within the eagle's three-dimensional hunting domain.
- Vertical terrain that allows rapid disengagement from terrestrial threats.

### Environmental limitations
- Open ground removes much of the canopy ambush advantage.
- A grounded eagle loses vertical separation and becomes vulnerable to larger grapplers.
- Low absolute body mass limits collision force and trauma tolerance compared with medium/large mammals.
- Strong ecological dependence on forest structure reduces flexibility when habitat is heavily cleared.

### Major weaknesses
Low structural protection, relatively low absolute body mass, dependence on feet for decisive control, vulnerability if grounded or wing-damaged, and no evidence for exceptional sustained chase endurance.

### Matchup archetypes
**Favorable:** small-to-medium arboreal vertebrates, lightly protected opponents, targets vulnerable to puncture/grip attacks, and slower animals in complex vertical terrain.

**Unfavorable:** armored animals, opponents too large to control with the feet, powerful terrestrial grapplers if contact occurs on the ground, and very large mammals whose mass overwhelms the eagle's penetration and lifting/control capacity.

## 5. Proposed ABS substats

All ratings are independent research recommendations on the absolute 225-animal scale.

| Substat | Score | Justification |
|---|---:|---|
| Size | **19.0** | Large bird, but only about 8 kg in canonical female form |
| Raw Power | **24.0** | Extraordinary for a raptor, modest in absolute roster-wide force |
| Weaponry | **59.0** | Huge penetrating talons, powerful feet and secondary hooked bill give excellent damage delivery for body size |
| Protection | **14.0** | Feathers and robust limbs offer little true armor |
| Toughness | **26.0** | Functional predator durability, but lightweight avian torso remains trauma-sensitive |
| Maneuverability | **91.0** | Short broad wings and long tail enable exceptional canopy control and repositioning |
| Speed | **73.0** | Rapid attack flight is clear, but exact maximum remains unverified and speed is not the basis of Agility |
| Endurance | **60.0** | Strong daily flight/perching ecology, not a prolonged pursuit specialist |
| Recovery | **47.0** | No unusual regeneration or exceptional injury-recovery mechanism established |
| Tactics | **70.0** | Patient ambush, prey selection and attack geometry show strong hunting flexibility |
| Senses | **91.0** | Acute vision plus useful acoustic localization in cluttered forest |
| Ferocity | **68.0** | Commits decisively to dangerous canopy prey and defends nesting areas, without evidence for indiscriminate aggression |
| Abilities | **77.0** | Canopy ambush, massive talons and sensory specialization create unusual matchup leverage |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **44.0** | Strongest attack among the researched raptors so far, driven by unusually large talons and prey-control ability, but capped by 8 kg body mass |
| **Defense** | **19.0** | Excellent avoidance/positioning but little structural protection once caught |
| **Agility** | **91.0** | Elite three-dimensional canopy maneuvering, acceleration/control and branch-to-branch repositioning |
| **Stamina** | **60.0** | Solid sustained daily activity without evidence for elite pursuit or migration endurance |
| **Intelligence** | **65.0** | Flexible, patient predator with good tactical behavior but no evidence for primate/corvid-level cognition |
| **Special** | **79.0** | Extreme talon morphology plus combined visual/acoustic canopy targeting meaningfully changes matchups |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Canopy Talon Ambush** — a rapid perch-launched attack that combines forest maneuvering with massive feet and long talons to seize and puncture arboreal prey before it can establish a stable escape route.
2. **Acoustic Facial Disc** — a retractable facial-disc system combined with acute vision improves localization of partly hidden canopy prey, strengthening target acquisition in visually cluttered forest.

### Unique traits
1. **Reverse-Dimorphic Powerhouse** — females are substantially heavier than males, making the mature female the appropriate canonical combat sex and enabling capture of larger prey.
2. **Short-Wing Forest Raptor** — broad, comparatively short wings and a long tail trade open-air speed specialization for exceptional control between trunks and branches.

## 8. Expanded profile

### Habitat and range
Harpy eagles inhabit tropical forests of the Neotropics from southern Mexico through Central America and across much of northern and central South America. Remaining strongholds are concentrated in large forest landscapes, especially Amazonia. They depend strongly on mature forest structure and large nesting trees.

### Diet and ecology
The species is a top canopy predator. Sloths and monkeys are major prey, supplemented by other arboreal mammals, reptiles and birds. Central-Amazon research documented 14 prey species across five breeding pairs, while range-wide literature records many more. The eagle's ecological role is therefore specialized around canopy vertebrates but not a single prey species.

### Social structure
Adults are generally encountered singly or as monogamous pairs. Hunting is solitary. Pair bonds and prolonged parental investment dominate social organization rather than packs or flocks.

### Reproduction and life history
Harpy eagles reproduce slowly. A classic Guyana nest study documented two eggs, 56 days of incubation, one surviving chick, and fledging around 141–148 days. USGS reports nesting events roughly three years apart in monitored sites. ADW summarizes breeding about once every 2–3 years and maturity around 5–6 years. This slow reproductive schedule increases conservation vulnerability.

### Conservation
The species is threatened by forest loss, fragmentation and shooting. A 2021 study of 16 active nests found prey delivery and reproductive viability deteriorated strongly with forest loss; no nests were supported in landscapes above 70% forest loss, and landscapes above 50% loss could not reliably provision young to independence. Recent Atlantic Forest work continues to document shooting, electrocution and road mortality.

### Major adaptations
- Massive feet and long rear talons for penetrating grip.
- Short, broad wings and long tail for forest maneuverability.
- Acute vision and acoustic assistance from the facial-disc structure.
- Patient perch hunting that conserves energy while scanning canopy habitat.
- Strong reverse sexual size dimorphism.
- Long-term pair bond and intensive parental investment.

### Human interaction
Harpy eagles are conservation flagships but are vulnerable to direct persecution near human settlements. Shooting, nest disturbance, electrocution and habitat clearing remain documented threats. Their need for extensive connected forest makes them useful umbrella species for broader tropical-forest conservation.

### Genuine fun facts
- The harpy eagle's rear talons can reach roughly 12.5–13 cm at the upper end.
- Females are substantially heavier than males and can approach 9 kg in normal published ranges.
- Central-Amazon breeding pairs in one study ate primarily sloths by both prey count and biomass.
- A classic nest study found the female performed 97% of incubation.
- Pairs typically raise only one young and may breed only once every 2–3 years.
- Harpy eagles can remain perched for extremely long periods while watching and listening for canopy prey.
- Their wings are not unusually long for their mass; the forest-adapted plan favors maneuvering rather than open-country soaring specialization.

### Concise site-ready summary
The Harpy Eagle is an 8 kg female-biased canopy ambush specialist whose oversized feet and talons let it seize monkeys, sloths and other substantial arboreal prey. Its short broad wings, long tail, acute vision and acoustic targeting make it exceptionally maneuverable in rainforest, but low absolute body mass and minimal armor keep its raw power and defense far below large mammalian predators.

### Rich narrative profile
The Harpy Eagle is dangerous because its anatomy is concentrated around one job: finding a concealed animal in a dense canopy, reaching it through a maze of branches, and establishing lethal control with the feet. It does not need the body mass of a wolf or big cat to be a formidable aerial attacker. Long curved talons, thick legs, broad wings and a long steering tail make the bird unusually capable of delivering precise force from a three-dimensional approach.

That specialization also defines its limits. An 8 kg eagle is still an 8 kg animal on an absolute roster. Its feet can control prey astonishingly large relative to itself, but that feat must not be converted into gorilla-like Raw Power or mammalian durability. Once grounded, pinned, or deprived of flight space, its defense falls sharply. Its strongest matchups are those in which it controls when and where contact happens.

The species' ecology reinforces that interpretation. Harpy eagles spend long periods perched, using acute sight and hearing to locate arboreal mammals, then attack in short decisive episodes. Their forest dependence is so strong that heavy deforestation reduces prey delivery and can make reproduction nonviable. The same morphology that makes them superb canopy predators is not a universal combat advantage in every environment.

### Future field proposals
- Add `wingspan_cm` for birds and bats rather than forcing wingspan into length.
- Add a weapon-dimension field for talon/claw/horn/tusk length with a distinction between representative and maximum measurements.
- Seek instrumented harpy-eagle flight-speed data before populating `speed_mps`.
- Seek primary force measurements of pedal grip rather than repeating popular pressure claims.
- Preserve sex-specific mass distributions for strongly dimorphic raptors.

## 9. Mandatory image audit

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/harpy-eagle.png` **(not created)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Gavi%C3%A3o-real_%28Harpia_harpyja%29.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/7/73/Gavi%C3%A3o-real_%28Harpia_harpyja%29.jpg
- `file_format_verified`: source is a genuine JPEG photograph; final PNG does not exist
- `alpha_verified`: **No**
- `full_body_verified`: **Visually promising but not certified**. Search-image inspection shows one complete perched bird with head, torso, folded wings, both feet/talons and tail visible, but the original binary could not be opened in the available image-processing path for strict pixel-level certification.
- `adult_verified`: **No**. Adult-like plumage is visible, but source metadata does not explicitly establish adulthood; appearance alone is not promoted to verification.
- `sex_verified_or_unknown`: **Unknown**
- `license_status`: **CC BY-SA 4.0**, reusable with attribution/share-alike compliance
- `notes`: exact *H. harpyja*, real photograph, 2081×2271, photographer Luiz Fernando Matos. The source exceeds the preferred 2000-pixel longest dimension and is substantially better than cropped/headshot alternatives, but adulthood and strict original-file full-body certification remain unresolved. Current GitHub writer is UTF-8 text-only, so no binary PNG or background removal is claimed.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web, *Harpia harpyja* | https://animaldiversity.org/accounts/Harpia_harpyja/ | morphology, lifespan, behavior, reproduction | 89–102 cm body length, ~2 m wingspan, females larger; 25–35 year estimate; solitary hunting; dense-forest maneuverability | High-moderate institutional synthesis |
| Miranda 2018, *Tropical Conservation Science* | https://journals.sagepub.com/doi/10.1177/1940082918800789 | sex-specific mass, prey ecology | males 4.9–6.9 kg, females 5.9–9.1 kg; sight/hearing hunting; sloth specialization | High, peer-reviewed |
| Aguiar-Silva et al. 2014, *Journal of Raptor Research* | https://meridian.allenpress.com/rapt/article/48/1/24/436509/Food-Habits-of-the-Harpy-Eagle-a-Top-Predator-from | diet and predation | five breeding pairs over three years; sloths dominated count/biomass; other mammals/birds also taken | High, peer-reviewed primary field study |
| Kaizer et al. 2023, *Scientific Reports* | https://doi.org/10.1038/s41598-023-44014-9 | prey mass, sensory ecology, Atlantic Forest diet | mean prey mass roughly 2.834–3.637 kg; acute vision and facial-disc-assisted detection | High, peer-reviewed |
| Rettig 1978, *The Auk* | https://academic.oup.com/auk/article-abstract/95/4/629/5208729 | breeding behavior | 947 h observation; 56-day incubation; female 97% incubation; fledging 141–148 days | High, primary study |
| USGS, Alvarez & Ellis 1994 | https://www.usgs.gov/publications/harpy-eagle-harpia-harpyja-nesting-manipulated-forests | nesting interval, human threats | nesting events roughly 3 years apart; shooting/nest destruction documented | High, agency record of journal work |
| Miranda et al. 2021, PubMed | https://pubmed.ncbi.nlm.nih.gov/34193882/ | deforestation and reproductive viability | 16 active nests, 306 prey; severe feeding/reproductive effects above ~50% forest loss; no nests >70% loss | High, peer-reviewed |
| Guinness World Records, longest eagle talons | https://www.guinnessworldrecords.com/world-records/444930-longest-eagle-talons | maximum talon length | rear talons up to 13 cm | Moderate; record authority, not morphometric primary paper |
| The Peregrine Fund | https://peregrinefund.org/explore-raptors-species/eagles/harpy-eagle | threats, dimorphism, natural history | females may weigh up to twice males; deforestation and shooting are major threats | High institutional conservation source |
| Commons, Luiz Fernando Matos | https://commons.wikimedia.org/wiki/File:Gavi%C3%A3o-real_%28Harpia_harpyja%29.jpg | image candidate | exact species, 2081×2271, CC BY-SA 4.0, real photograph | High provenance; adulthood/sex unresolved |

### Conflicts and uncertainty
- **Mass:** published sex ranges overlap, but all strong sources agree females are substantially larger. Canonical 8.0 kg is representative within peer-reviewed female values.
- **Speed:** 32 km/h and 80 km/h figures circulate in institutional/tertiary material, but a defensible instrumented species maximum was not found. Canonical speed remains 0.0 rather than choosing a popular number.
- **Grip pressure:** popular PSI/kg-cm² claims exist, but the measurement basis and contact-area definition are unclear. They are not used as a canonical force field.
- **Talon length:** 12.5–13 cm is an upper-end figure, not assumed for every adult.
- **Conservation label:** public pages can lag Red List updates. The profile emphasizes documented threats and forest-dependence rather than hard-coding a possibly stale assessment category as a battle field.

## 11. Cross-animal normalization notes

- **Versus Bald Eagle:** Harpy Eagle is heavier, more powerfully footed and more specialized for large vertebrate prey, so Attack 44.0 and Weaponry 59.0 exceed the staged Bald Eagle's Attack 36.0 / Weaponry 52.0. This is a real absolute difference, not reputation inflation.
- **Versus Great Horned Owl:** Harpy Eagle has much greater absolute mass and talon scale, so Attack is clearly higher than Great Horned Owl's 35.0. Both remain excellent aerial ambush predators; the owl's nocturnal specialization should not be erased.
- **Versus Gray Wolf:** the wolf remains much stronger and tougher in absolute body force and close terrestrial combat. Harpy Eagle's advantage is three-dimensional engagement control, not mammalian-scale Raw Power.
- **Versus Gorilla and Grizzly Bear:** the eagle must remain dramatically below both in Raw Power, Defense and grounded durability despite impressive talons. Proportional prey-lifting feats are not translated into great-ape/bear force.
- **Agility:** 91.0 is intentionally elite because canopy maneuverability is the species' core locomotor specialization. It is not derived from an unverified top-speed figure.
- **Special:** 79.0 reflects a rare combination of extreme pedal weapon morphology and forest sensory targeting. Talon lethality is counted primarily in Weaponry/Attack, so Special is not pushed into the 90s by double-counting the same mechanism.

## Verification against staging rules

- Representative healthy adult and canonical fighting sex documented: **yes**.
- Population/sex variation and uncertainty documented: **yes**.
- All canonical factual schema fields investigated: **yes**.
- Unsupported bite PSI and speed rejected rather than fabricated: **yes**.
- Current ABS substats scored with one decimal: **yes**.
- Six headline ratings scored with one decimal: **yes**.
- Exactly two special abilities: **yes**.
- Exactly two unique traits: **yes**.
- Source ledger with direct URLs/confidence/conflicts: **yes**.
- Cross-roster normalization performed: **yes**.
- Mandatory image section present: **yes**.
- Transparent PNG completion falsely claimed: **no**.
