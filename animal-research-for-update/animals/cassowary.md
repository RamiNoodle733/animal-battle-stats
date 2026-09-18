# Cassowary Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Cassowary / Southern cassowary / Double-wattled cassowary
- **Scientific name:** *Casuarius casuarius* (Linnaeus, 1758)
- **Family:** Casuariidae
- **Status:** Living
- **Exact animal represented:** Southern cassowary, *Casuarius casuarius*, not the northern cassowary (*C. unappendiculatus*) or dwarf cassowary (*C. bennetti*).
- **Canonical specimen:** Healthy fully mature adult **female**, **65.0 kg**, approximately **165.0 cm standing height**. Females are the larger sex and are behaviorally dominant to males, making a representative mature female the appropriate absolute-combat specimen.
- **Dimorphism:** Smithsonian reports females up to about 80 kg while males typically weigh about 55 kg; San Diego Zoo gives females about 76 kg and males up to 55 kg. The 2019 thermal-casque study summarizes females around 60 kg versus males around 30 kg in its cited context. Size estimates vary among populations and sources, but female-biased mass is consistent.
- **Population variation:** Southern cassowaries range across New Guinea, northeastern Australia and nearby islands. Australian *C. c. johnsonii* has been studied particularly well for attacks and conservation. Do not treat the largest 76-80 kg female as the normal adult.

## 2. Physical measurements

### Mass and dimensions

Institutional sources consistently place southern cassowaries among the world's heaviest birds. Smithsonian gives females up to 80 kg and males around 55 kg, with height to about 170 cm. San Diego Zoo gives females to 76 kg, males to 55 kg, and height to about 170 cm. The peer-reviewed thermal-window paper describes females around 60 kg and males around 30 kg while emphasizing the species' large body size.

- **Canonical `weight_kg`: 65.0 kg**
- **Canonical `height_cm`: 165.0 cm standing height**
- **Canonical `length_cm`: 0.0 cm** because a strong standardized bill-to-rump/body-length measurement was not located in this run; standing height must not be relabeled as length.
- **Representative female range:** roughly 60-76+ kg across the strongest sources used here, with exceptional institutional maxima around 80 kg.
- **Confidence:** High for female-biased size and overall scale; moderate-high for the single 65 kg representative choice.

### Speed and locomotion

San Diego Zoo reports that southern cassowaries can sprint up to **30 mph / 48 km/h** for short periods. This converts to **13.3 m/s**. Unlike weak unsourced web repetitions, this is retained as a zoo-institution value, not presented as an instrumented laboratory maximum.

- **Canonical `speed_mps`: 13.3 m/s**
- **Context:** short sprint, institutional maximum; confidence moderate.
- Cassowaries are terrestrial ratites with powerful hind limbs. They can jump, maneuver through rainforest and swim well. Smithsonian reports jumps up to roughly 7 ft, while San Diego Zoo describes them as strong swimmers.

### Lifespan

Smithsonian reports **18-20 years in the wild** and up to 40 years in human care. San Diego Zoo notes uncertainty in wild lifespan and long captive longevity.

- **Canonical `lifespan_years`: 19.0 years**
- **Confidence:** Moderate, using the midpoint of Smithsonian's wild estimate.

### Claws, feet, kick and bite

The principal weapon is not the bill. Each foot has three toes, with a greatly enlarged dagger-like claw on the inner toe. Smithsonian and San Diego Zoo report this claw at about **5 in / 12.7 cm**. The legs are thick and muscular and the feet/legs bear scutes.

Kofron's peer-reviewed review of 221 Queensland cassowary attacks documented charging/chasing, kicking, jumping on victims, pecking and other behaviors. Seven human incidents caused serious injury, including puncture wounds, lacerations and a broken bone; one historical fatality followed kicking/jumping while the victim was attempting to kill the bird. This establishes real injury potential without inventing a kick force in newtons.

No defensible standardized cassowary bite pressure was found.

- **Canonical `bite_force_psi`: 0.0**
- **Inner-toe claw:** about **12.7 cm** in institutional accounts.
- **Primary weapon:** powerful forward/downward kick or leap with clawed feet.
- **Secondary weapon:** bill pecking, body charge, jumping/body impact.
- **Confidence:** High for attack behavior and serious-injury capability; moderate-high for institutional claw length; insufficient for numerical kick force or bite PSI.

### Casque and protection

The casque is keratinized and vascularized over trabecular internal structure. It should not be treated as a battle helmet with proven impact-protection performance. A 2019 *Scientific Reports* experiment on 20 living cassowaries demonstrated that the casque functions as a controllable **thermal window**, increasing heat dissipation at high ambient temperatures and restricting heat loss at low temperatures. Legs and distal bill also function as thermal windows.

The body itself has no armor comparable with osteoderms, shell or thick mammalian hide. Dense feathering, large body mass, strong legs and scaly lower limbs provide some protection, but penetrating or crushing trauma remains dangerous.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 65.0,
  "height_cm": 165.0,
  "length_cm": 0.0,
  "speed_mps": 13.3,
  "lifespan_years": 19.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **65.0 kg:** representative large adult female, below 76-80 kg institutional maxima.
- **165.0 cm:** representative mature standing height near the documented upper adult scale without using the maximum as the norm.
- **0.0 cm length:** unresolved standardized body length rather than converting standing height into a different measurement.
- **13.3 m/s:** 48 km/h short-sprint value from San Diego Zoo, retained with moderate confidence rather than presented as instrumented physiology.
- **19.0 years:** midpoint of Smithsonian's 18-20 year wild estimate.
- **0.0 PSI:** no defensible bite-pressure measurement; bite is not the primary weapon.

## 4. Combat biology

### Primary and secondary weapons

The cassowary is a leg-driven fighter. Its main attack couples a 60+ kg body with long, muscular legs and a roughly 12.7 cm inner-toe claw. A defensive bird can charge, leap and kick feet-first. The claw changes a kick from blunt impact into a puncture/laceration threat. The bill can peck, and the body can push or collide, but these are secondary.

### Offensive mechanics

A cassowary does not hunt large prey or routinely use its weapon system offensively. Most feeding is frugivorous. In conflict it closes quickly, may chase or charge, then kicks or jumps toward the opponent. Kofron's incident dataset is valuable because it separates reputation from observed behavior: in human incidents, chasing/charging was much more common than kicking, and serious injuries were uncommon relative to all recorded attacks. Attack therefore reflects dangerous weapon delivery without turning folklore into megafauna-level lethality.

### Defensive adaptations and durability

The bird's large mass, dense plumage and robust ratite legs provide meaningful toughness against small opponents. Scaly lower legs help protect the weapon-delivery structures. However, there is no true armor over the torso. The casque has a demonstrated thermoregulatory function, not demonstrated helmet-grade protection. Against large carnivores, heavy ungulates or piercing weapons, Defense is limited by an exposed neck and ordinary soft tissues.

### Locomotion and maneuverability

A 13.3 m/s short sprint, strong jumping, competent swimming and ability to negotiate dense rainforest give the cassowary strong practical mobility. It is far more maneuverable than its tall, heavy appearance suggests. Two-legged balance and rapid kicking are combat assets, but it lacks the multidirectional feline control of a caracal and cannot fly.

### Endurance and stamina

Cassowaries spend substantial time walking and foraging across home ranges, but they are not specialized long-distance pursuit runners. Their sprint is explicitly short-duration. The thermal casque provides a real mechanism for heat management in tropical conditions, supporting useful environmental stamina without converting thermoregulation into marathon-level endurance.

### Senses

Vision and hearing are important in dense forest. Cassowaries produce unusually low-frequency booming calls, and their sensory ecology is adapted to rainforest communication. A 2026 study also demonstrated species-specific ultraviolet biofluorescent patterns in cassowary casques and UV reflectivity, but whether cassowaries use these patterns in natural communication remains unproven. This is recorded as emerging biology, not a battle super-sense.

### Intelligence and tactics

Cassowaries navigate variable fruit resources, maintain home ranges, communicate, recognize threats and alter behavior around people. They are not mindless aggressors. Kofron found human feeding strongly associated with aggressive encounters, showing behavioral plasticity and learned food association. Evidence does not justify corvid, parrot, cetacean or primate-tier problem-solving scores.

### Fighting behavior

Southern cassowaries are generally solitary. San Diego Zoo notes females are dominant to males. Conflicts can involve threat displays, charging and kicks. Males become particularly defensive while caring for chicks, and Queensland guidance specifically warns people not to approach chicks or get between them and their father.

### Predation and feeding behavior

The species is primarily frugivorous, consuming fallen fruit and dispersing seeds. Queensland reports more than **238 plant species** recorded in the diet and notes that cassowaries can consume fruits poisonous to humans. Small dead mammals, insects, fungi, plants and snails are also eaten. It is not a macropredator, so predatory reputation must not inflate Attack.

### Environmental strengths

- Dense rainforest where powerful legs and maneuverability permit rapid movement
- Tropical heat where the casque can act as a controllable thermal radiator
- Ground combat with room to charge or kick
- Shallow-water or stream environments because the species can swim
- Opponents vulnerable to puncture/laceration from a long toe claw

### Environmental limitations

- Cannot fly despite being a bird
- Open spaces remove some cover but do not remove sprinting ability
- Deep aquatic combat removes effective kicking leverage
- Very cold environments challenge a tropical specialist despite controllable heat retention
- Tight grappling by a substantially larger predator can suppress leg-weapon delivery

### Major weaknesses

1. Torso and neck lack true armor.
2. Main weapon requires close range and favorable leg positioning.
3. Sprint ability is burst-oriented rather than pursuit-endurance specialized.
4. No strong bite weapon or grasping forelimbs.
5. Reputation for indiscriminate aggression is exaggerated; most wild birds prefer avoidance unless conditioned, cornered or defending resources/young.

### Matchup archetypes

- **Favorable:** smaller unarmored terrestrial animals vulnerable to a charge and slashing kick; opponents that must approach frontally without strong ranged/reach weapons.
- **Mixed:** similarly sized mammalian predators where the cassowary can inflict a disabling kick but is vulnerable if grappled or bitten around the neck/body.
- **Poor:** large cats, large canids acting cooperatively, heavily armored animals, large hoofed mammals and megafauna that can absorb or outrange the kick; fully aquatic opponents.

## 5. Proposed ABS substats

All ratings use the absolute 225-animal roster scale and were reassessed independently of live placeholders.

| Substat | Score | Rationale |
|---|---:|---|
| Size | **34.0** | A 65 kg female is large for a bird and substantial versus small fauna, but far below large carnivores and megafauna. |
| Raw Power | **43.0** | Powerful ratite hind limbs can launch, sprint and kick, but absolute force remains well below large ungulates. |
| Weaponry | **62.0** | A ~12.7 cm inner-toe claw combined with a powerful kick is a serious puncture/laceration system. |
| Protection | **30.0** | Feathers, scaly legs and size provide modest protection; no torso armor. |
| Toughness | **43.0** | Robust large bird, but exposed soft tissues and neck cap durability. |
| Speed | **65.0** | Institutional short-sprint value of 13.3 m/s is fast but not elite roster-wide. |
| Maneuverability | **73.0** | Strong balance, jumping, forest navigation and swimming for a large flightless bird. |
| Endurance | **57.0** | Sustained foraging and tropical adaptation are useful; sprinting remains burst-oriented. |
| Recovery | **43.0** | No unusual regeneration or trauma recovery mechanism established. |
| Tactics | **49.0** | Threat assessment, charging/kicking choices and learned food association show flexibility without advanced tactical cognition. |
| Senses | **57.0** | Strong rainforest vision/hearing and low-frequency communication; no evidence for extraordinary battle sensing. |
| Ferocity | **63.0** | Can defend itself or chicks forcefully, but empirical attack data contradicts the myth of constant aggression. |
| Abilities | **58.0** | Dagger-claw kick and active casque thermoregulation are distinctive, grounded mechanisms. |

## 6. Proposed six headline ABS ratings

- **Attack: 57.0** - A 65 kg body, powerful legs and ~12.7 cm inner-toe claw can cause severe puncture and laceration injuries, but the cassowary is not a large-prey killer and lacks the force/reach of megafauna.
- **Defense: 39.0** - Large size and robust legs help, but there is no true torso armor and the neck remains exposed.
- **Agility: 73.0** - Fast short sprinting, jumping, balance, forest maneuvering and swimming make it agile for its size, while flightlessness and bipedal constraints keep it below elite small cats.
- **Stamina: 58.0** - Good walking/foraging endurance plus tropical heat management, but no evidence for pursuit-specialist endurance.
- **Intelligence: 49.0** - Flexible learned associations and spatial/foraging behavior support moderate cognition without evidence for high-order tool/problem-solving performance.
- **Special: 60.0** - The dagger-toe delivery system plus experimentally demonstrated thermal casque create meaningful unusual matchup/environmental advantages, but neither is venom/electric-tier.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Dagger-Toe Kick** - A powerful leap or kick delivers the enlarged inner-toe claw, approximately 12.7 cm in institutional accounts, producing a combined blunt-impact and puncture/laceration threat.
2. **Thermal Casque** - The vascularized casque actively changes heat exchange with ambient temperature, functioning as a controllable radiator that helps a large dark-plumaged bird manage tropical heat.

### Unique traits

1. **Female Heavyweight** - Females are consistently larger than males and socially dominant in institutional accounts, reversing the male-biased canonical combat choice common in many roster mammals.
2. **Rainforest Seed Engine** - The mostly frugivorous bird swallows and transports large seeds across its range; Queensland records more than 238 plant species in its diet, making the cassowary an unusually important large-bodied seed disperser.

## 8. Expanded profile content

### Habitat and range

Southern cassowaries inhabit tropical rainforest and associated lowland forest, forest edge, riverbank, mangrove, grassland/savanna mosaics and some plantations across New Guinea, northeastern Queensland and nearby Indonesian islands. Dense forest remains the core habitat.

### Diet and ecology

Fruit dominates the diet. Queensland records more than 238 plant species, while Smithsonian emphasizes the species' major seed-dispersal role. Cassowaries also consume fungi, insects, snails and occasional small vertebrate/carrion material. Large droppings can contain hundreds or thousands of seeds, distributing both seeds and fertilizer away from parent plants.

### Social structure

Adults are usually solitary outside breeding. Female home ranges may overlap several male ranges. San Diego Zoo describes females as dominant to males. Queensland reports home-range size varying approximately **0.52-2.35 km²** with season and food availability.

### Reproduction and life history

The female lays a clutch and the male assumes incubation and chick care. Smithsonian reports roughly three to five eggs, with males raising chicks for about nine months. This creates an important behavioral context for defensive aggression: males with chicks can be highly protective.

### Conservation

Smithsonian and current Queensland material describe the global species as **Least Concern**, while emphasizing serious regional pressure and a declining Australian population. Habitat fragmentation, road strikes, dogs, feral pigs, hunting/poaching and development are major threats. Older zoo pages may display outdated Vulnerable language, so global status should be checked against the current IUCN assessment at production-migration time.

### Major adaptations

- Long, powerful ratite legs for terrestrial acceleration and kicking
- Enlarged inner-toe claw for defense
- Vascularized casque that functions as a thermal window
- Dense dark body plumage with bare colorful head/neck skin
- Ability to swallow large fruits whole and disperse large seeds
- Low-frequency booming communication suited to dense habitat
- Strong swimming ability despite terrestrial specialization

### Human interaction

Cassowary danger is real but frequently sensationalized. Kofron's 221-incident review found most human attacks involved birds previously fed by people, and serious injuries were a small minority of recorded attacks. Feeding can condition birds to approach humans and become demanding or aggressive. Queensland explicitly prohibits feeding and advises people to give cassowaries space, especially adults with chicks.

### Genuine fun facts

- The southern cassowary is one of the world's heaviest living birds, and females outweigh males.
- The male, not the female, incubates eggs and raises the chicks for months.
- Infrared experiments demonstrated that the casque is a real adjustable thermal radiator rather than merely a decorative helmet.
- Cassowary calls include extremely low-frequency booms near the lower edge of human hearing.
- Queensland has recorded more than 238 plant species in the southern cassowary diet.
- Cassowaries can swim despite being strongly terrestrial flightless birds.
- A 2026 study found species-specific ultraviolet biofluorescent casque patterns, although their natural signaling function remains unresolved.

### Concise site-ready summary

The southern cassowary is a 60-plus-kilogram rainforest ratite whose main weapon is a powerful kick armed with a dagger-like inner toe claw. Females are the larger sex. It combines fast short sprints, strong jumping and swimming with an experimentally verified heat-radiating casque. Its dangerous reputation has a real basis, but empirical attack data show that serious injuries are uncommon and many human conflicts follow deliberate feeding or defensive situations.

### Rich narrative profile

A southern cassowary is built less like a predatory bird and more like a compact terrestrial runner with a knife attached to each foot. Its body is deep and heavy, its wings are vestigial, and nearly all meaningful combat mechanics originate in the hindquarters. When threatened, it can rapidly close distance, jump and drive the feet toward an opponent. The long inner claw can turn a kick into a penetrating slash, giving the bird much more damage potential than an ordinary 65 kg herbivore or frugivore might suggest.

That weapon should not erase the animal's limits. Cassowaries are primarily fruit eaters and do not routinely subdue large prey. They have no armored torso, grappling forelimbs or specialized killing bite. If a kick fails to stop a large predator and the opponent gains control of the neck or body, the cassowary's matchup deteriorates quickly. This is why its Attack belongs above similarly sized poorly armed animals but well below Cape buffalo and true megafaunal weapon systems.

Its strangest adaptation is not actually the claw. Thermal imaging shows that the casque can alter heat exchange, radiating more heat when conditions are hot and conserving heat when cool. This gives the bird a rare, experimentally verified physiological mechanism suitable for Special, while avoiding the older unsupported claim that the casque is simply a battering helmet. Combined with low-frequency communication, seed-dispersal ecology and unusual female-biased size, the southern cassowary is biologically distinctive without needing exaggerated folklore.

### Future structured-field proposals

- `canonical_sex`: female
- `inner_toe_claw_cm`: 12.7 with institutional-source flag
- `locomotion_modes`: walk, sprint, jump, swim
- `primary_weapon`: kick + inner-toe claw
- `diet_type`: primarily frugivorous omnivore
- `casque_function`: active thermal window
- `parental_care_sex`: male
- `measurement_confidence`: per-field confidence rather than treating all canonical values equally

## 9. Mandatory image section

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/cassowary.png` (**not present; do not count as completed**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Southern_Cassowary_7071.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/5/54/Southern_Cassowary_7071.jpg
- `file_format_verified`: Source is a real JPEG photograph, 2152x1614; final PNG does not exist.
- `alpha_verified`: **No**
- `full_body_verified`: **Yes for visible external silhouette**. Direct inspection shows complete casque/head, torso and both legs/feet within frame; the species' rudimentary wings are naturally concealed by body plumage rather than frame-cropped.
- `adult_verified`: **No**. Mature-looking plumage is visible, but the source metadata says only free-ranging southern cassowary and does not explicitly establish adulthood.
- `sex_verified_or_unknown`: **Unknown**. Sex is not inferred from appearance.
- `license_status`: **CC BY-SA 4.0**, author Summerdrought; reuse permitted with attribution/share-alike requirements.
- `notes`: Strong 2152x1614 exact-species wild/free-ranging source and complete visible silhouette, but adulthood and sex are not source-verified. Keep pending rather than promoting based on appearance. Current connected GitHub writer is text-only, so no binary cutout was fabricated.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding/context | Confidence / caveat |
|---|---|---|---|---|
| Smithsonian National Zoo, Southern cassowary | https://nationalzoo.si.edu/animals/southern-cassowary | Taxon, size, lifespan, claw, ecology, reproduction | Females to 80 kg, males about 55 kg, height to 170 cm, wild lifespan 18-20 y, ~5-inch claw, male parental care | High-quality zoo synthesis; maxima are not averages |
| San Diego Zoo Wildlife Alliance | https://animals.sandiegozoo.org/animals/southern-cassowary | Size, speed, locomotion, diet, sex roles | Females about 76 kg, males to 55 kg, sprint to 48 km/h, swimming, females dominant | High-quality institutional source; speed is not presented as instrumented primary research |
| Eastick et al. 2019, *Scientific Reports* | https://www.nature.com/articles/s41598-019-38780-8 | Casque anatomy/function, size context | Infrared study of 20 living cassowaries demonstrates casque thermal-window function; females heavier | High, peer-reviewed experimental evidence |
| Kofron 1999, *Journal of Zoology* | https://www.cambridge.org/core/journals/journal-of-zoology/article/attacks-to-humans-and-domestic-animals-by-the-southern-cassowary-casuarius-casuarius-johnsonii-in-queensland-australia/BB57CAB41903DE6486FB7031A7E290D9 | Combat behavior, injury risk, aggression context | 221 attacks reviewed; 150 human; 75% of human attacks involved previously fed birds; charging/chasing common, kicks less common; seven serious human injuries and one historical death | High for Queensland incident sample; human interactions are not equivalent to animal-vs-animal fights |
| Queensland Government, Southern cassowary | https://www.qld.gov.au/environment/plants-animals/conservation/threatened-species/featured-projects/southern-cassowary | Diet, home range, threats, human safety | >238 plant species in diet, home range 0.52-2.35 km², solitary ecology, male chick defense, feeding prohibition | High government regional source |
| Eastick et al. 2026, *Scientific Reports* | https://www.nature.com/articles/s41598-026-40230-1 | Emerging sensory/display biology | Species-specific UV biofluorescent casque patterns and 365 nm reflectivity | High for physical phenomenon; behavioral function explicitly unresolved |
| Wikimedia Commons, Summerdrought | https://commons.wikimedia.org/wiki/File:Southern_Cassowary_7071.jpg | Image provenance | 2152x1614 free-ranging exact-species photograph, CC BY-SA 4.0 | Strong provenance and full silhouette; adult/sex not explicitly verified |

### Source conflicts and uncertainty

- **Mass:** sources agree females are larger but differ in typical/maximal values. The canonical 65 kg female is intentionally below 76-80 kg maxima and close to the peer-reviewed ~60 kg female scale.
- **Height:** institutional maxima cluster around 170 cm. 165 cm is used as a representative large adult female, not a record.
- **Speed:** 48 km/h is retained from San Diego Zoo with moderate confidence. It is not described here as an instrumented maximum.
- **Claw length:** 12.7 cm is repeated by major zoo institutions. No primary morphometric claw dataset was located in this run, so confidence is below that of the thermal-casque result.
- **Conservation:** current Smithsonian/Queensland treatment and recent secondary references indicate global Least Concern, while some zoo pages retain older Vulnerable language. Recheck current IUCN entry at migration.
- **Casque:** thermoregulation is experimentally demonstrated. Claims that the casque is primarily an impact helmet or sound resonator remain unproven and are not scored as fact.

## 11. Cross-animal normalization notes

- **Versus Caracal (17 kg, Attack 44.0 / Defense 25.0 / Agility 90.0):** Cassowary is nearly four times the canonical mass and has a much longer puncturing weapon, justifying Attack 57.0 and Defense 39.0. Caracal remains clearly superior in multidirectional agility and grappling control.
- **Versus Capybara (54 kg, Attack 31.0 / Defense 29.0):** Similar broad mass class, but the cassowary's specialized kick/claw system creates a large Attack advantage. Defense rises only moderately because neither animal has true armor.
- **Versus Cape Buffalo (750 kg, Attack 76.0 / Defense 70.0):** The buffalo's order-of-magnitude mass advantage, horns, boss and impact mechanics preserve a large absolute gap. Cassowary folklore must not compress this difference.
- **Versus Camel (550 kg, Stamina 91.0):** Cassowary heat management is biologically special but does not justify camel-level sustained environmental endurance.
- **Versus Bullet Ant (Special 96.0):** A thermal casque and dagger claw are distinctive but far less matchup-transforming than potent neurotoxic venom, keeping Cassowary Special at 60.0.
- **Agility check:** 73.0 reflects fast sprinting, jumping and forest maneuvering but remains well below Caracal 90.0 because top speed is not substituted for agility.
- **No proportional-strength leakage:** the cassowary's scores come from absolute 65 kg body scale and actual weapon geometry, not from being unusually formidable 'for a bird.'
- **No double-counting:** the claw drives Weaponry/Attack; the thermal casque primarily supports Special and environmental stamina rather than being counted as armor.

## 12. Verification checklist

- Exact taxon established: **Yes**
- Representative adult specimen and dimorphism documented: **Yes**
- Physical ranges and uncertainty documented: **Yes**
- Canonical factual fields proposed without fabricated PSI: **Yes**
- Combat mechanics, defense, locomotion, endurance, senses and behavior covered: **Yes**
- Current ABS-style substats scored with one decimal: **Yes**
- Six headline ratings scored with one decimal: **Yes**
- Exactly two named special abilities: **Yes**
- Exactly two unique traits: **Yes**
- Habitat, range, diet, ecology, social/life history, conservation, adaptations and human interaction covered: **Yes**
- Several genuine fun facts: **Yes**
- Site summary and rich narrative profile: **Yes**
- Source ledger with direct URLs, confidence and conflicts: **Yes**
- Cross-roster normalization performed: **Yes**
- Image checked under mandatory current standard: **Yes; source pending because adulthood is not explicitly verified and no binary PNG tooling is available**
