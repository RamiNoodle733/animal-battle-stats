# Opossum Research Overhaul

## Research status
- **ABS roster name:** Opossum
- **Canonical taxon:** *Didelphis virginiana* (Kerr, 1792), Virginia opossum
- **Family:** Didelphidae
- **Living/extinct:** Living
- **Canonical combat specimen:** healthy prime mature adult male, **2.8 kg**, approximately **40.8 cm head-body + 29.4 cm tail = 70.2 cm total length**
- **Research confidence:** high for identity, sex-biased size, dentition, locomotor anatomy, activity, reproduction and venom resistance; moderate for canonical lifespan; low for physiological top speed and bite pressure
- **Image status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`

## 1. Identity and canonical specimen
The roster's generic Opossum is resolved to the Virginia opossum, *Didelphis virginiana*, North America's widespread living didelphid. This is preferable to leaving the roster at family-level ambiguity because the site's North American common-name usage and the strongest available institutional data converge on this species.

Adult males tend to be larger than females. Animal Diversity Web reports males commonly **2.1-2.8 kg** versus females **1.9-2.1 kg**, while also noting broader reported body masses up to about 6 kg and substantial geographic/habitat variation, including heavier urban animals. Smithsonian gives the same 2.1-2.8 kg male range. ABS therefore uses a **2.8 kg healthy mature male**, the upper end of a strong institutional male range but not a record-sized 6 kg outlier. Males also roam farther in reproductive contexts, and male-male competition for females occurs in the polygynous mating system.

## 2. Physical measurements and ranges
### Mass and dimensions
ADW reports male average head-body length **40.8 cm** and tail length **29.4 cm**, female values **40.6 cm** and **28.1 cm**, with broader published head-body estimates **33-55 cm** and tails **25-54 cm**. Smithsonian independently gives 40.8 cm body and 29.4 cm tail for males. Canonical total length is therefore **70.2 cm**. A standardized shoulder height was not recovered, so `height_cm` is left at 0.0 rather than invented.

### Dentition and weapons
The Virginia opossum has **50 teeth**, more than any other North American land mammal according to NPS. ADW gives dental formula 5/4 incisors, 1/1 canines, 3/3 premolars and 4/4 molars. The practical weapons are the jaws and numerous teeth, backed by forefoot claws. The opposable hallux on the hind foot is clawless and primarily improves grasping rather than damage.

No defensible species-specific bite-pressure measurement or tooth-contact area was recovered. `bite_force_psi` is therefore **0.0**. Unsupported popular PSI claims are rejected.

### Speed and locomotion
A strong primary maximum sprint measurement was not found. The Florida Museum field study instead measured movement ecology: males averaged **234 m/hour** while active and **1,835 m/night**, with a maximum nightly movement of **4,665 m**. These are travel metrics, not top speed. Secondary sources give low running-speed values, but they are insufficient to establish a physiological ceiling, so `speed_mps` remains **0.0**.

Virginia opossums are terrestrial but capable climbers and swimmers. Their prehensile tail functions as an additional grasping/balancing structure, and the hind foot has an opposable hallux. These traits improve complex-terrain control without implying high cursorial speed.

### Lifespan
Wild lifespan is exceptionally short for body size. ADW and Smithsonian report about **1.5-2 years in the wild**, while captive animals commonly live **3-4 years**. ADW notes exceptional captive reports of 8-10 years, but these are not representative. The canonical site field is set to **2.0 years**, representing normal wild longevity rather than an exceptional captive record.

### Defenses
There is no armor. Defense relies on threat display, escape/climbing, biting when cornered, unusual biochemical resistance to some snake venoms, and involuntary death-feigning under extreme stress. NPS specifically describes the catatonic state as an involuntary reaction rather than conscious acting. Adult opossums commonly bare teeth, hiss, screech or flee before such a response.

## 3. Canonical proposed factual fields
| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **2.8** | Upper end of the Smithsonian/ADW normal adult-male range, avoiding broader exceptional values. |
| `height_cm` | **0.0** | No standardized representative shoulder/standing height recovered. |
| `length_cm` | **70.2** | 40.8 cm male head-body + 29.4 cm tail. |
| `speed_mps` | **0.0** | No defensible species-specific physiological maximum recovered. |
| `lifespan_years` | **2.0** | Normal wild lifespan is about 1.5-2 years; captive records are not canonical. |
| `bite_force_psi` | **0.0** | No reliable pressure measurement/contact area. |

Useful future fields: `head_body_length_cm`, `tail_length_cm`, `tooth_count`, `canonical_sex`, `venom_resistance_scope`, `prehensile_tail`, `opposable_hallux`, and per-field confidence.

## 4. Combat biology
### Primary and secondary weapons
The primary weapon is a tooth-rich jaw with prominent canines and incisors. Fifty teeth create many cutting/puncturing surfaces, but the animal's 2.8 kg body mass caps absolute bite damage far below medium and large carnivores. Foreclaws can scratch and help hold footing. The clawless opposable hind hallux is a grip tool, not a weapon.

### Offensive mechanics and predation
Virginia opossums are opportunistic omnivores that take insects, worms, small mammals, birds, eggs, reptiles and amphibians in addition to fruit, seeds and carrion. Their offense is close-range and unspecialized: seize or bite small prey rather than pursue and overpower large vertebrates. Venom resistance can permit interactions with some vipers that would be disproportionately dangerous to similarly sized mammals.

### Defensive adaptations and toughness
The strongest unusual defense is biochemical. A 1998 Toxicon study found Virginia-opossum serum antihemorrhagins bind and neutralize hemorrhagic activities of snake-venom proteins. A 2008 Toxicon study found Virginia-opossum serum neutralized lethality and proteolytic activities of Malayan pit-viper venom. More recent evolutionary work supports venom-target resistance in didelphid opossums. This is **not universal toxin immunity** and should not be generalized to every venom mechanism.

Death-feigning is a second distinctive defense, but its combat value is conditional. It may discourage predators motivated by live prey, yet becoming limp is dangerous against opponents that scavenge, continue attacking, or simply ignore the display.

### Locomotion and maneuverability
The species is a competent generalist rather than a speed specialist. It can climb using sharp claws, a grasping tail and opposable hind hallux, swim when necessary, and negotiate branches better than its slow-looking terrestrial gait suggests. The low center of mass aids stability but does not create elite acceleration or open-ground evasion.

### Endurance
Field data show sustained nocturnal movement over kilometer-scale nightly paths, but activity duration drops sharply in cold conditions below about 8 C. This supports moderate endurance rather than elite sustained output. Exposed ears and tail are also susceptible to frostbite, making severe cold a meaningful limitation.

### Senses
Opossums rely strongly on smell and touch/whisker information during nocturnal foraging, with hearing also useful in darkness. Vision is functional but not a standout specialization. The roster should not confuse nocturnality with extraordinary sensory acuity.

### Intelligence, learning and tactics
Virginia opossums are behaviorally flexible generalists. A classic experiment with five adults found significant spontaneous alternation in a T-maze, demonstrating nonrandom exploratory/memory behavior. Their ecological success across wild and urban habitats also shows flexible foraging, but evidence does not justify primate/corvid-level cognition.

### Intraspecific fighting
The species is predominantly solitary. Males compete for access to females and have larger ranging behavior, but it lacks specialized dueling structures. Threat behavior emphasizes open-mouth tooth display, hissing and avoidance. Physical conflict is possible but is not the animal's dominant survival strategy.

### Predator defense
Known predators include owls, dogs, coyotes, foxes, raccoons, bobcats and large snakes. Against a serious mammalian predator, the opossum is usually badly outmatched physically. Escape, climbing, intimidation and conditional thanatosis matter more than direct fighting.

### Environmental strengths
Wooded and brushy habitats with climbable structure, cavities and water access favor its locomotor versatility. Urban environments provide abundant food and refuge. Its venom resistance is especially matchup-relevant where venomous snakes are present.

### Environmental weaknesses
Open ground exposes mediocre running performance. Extreme cold reduces activity and can damage naked ears/tail. The animal has no armor, modest absolute force, short weapon reach and limited trauma reserve. Thanatosis can become a liability against predators willing to eat carrion.

### Matchup archetypes
**Relatively strong against:** small arthropods, tiny vertebrates and some venomous snakes where biochemical resistance reduces the opponent's primary advantage.

**Weak against:** medium and large mammalian carnivores, raptors with decisive size/reach advantages, armored animals too large for its bite, and any opponent for which death-feigning offers no deterrent.

## 5. Proposed ABS substats
All ratings use absolute 0.1-100.0 roster scaling and were derived independently of live placeholders.

| Substat | Rating | Justification |
|---|---:|---|
| Size | **13.0** | 2.8 kg is very small on a roster spanning insects to megafauna. |
| Raw Power | **14.0** | Enough to subdue small prey, but low absolute muscular force. |
| Weaponry | **27.0** | Fifty teeth and usable canines are meaningful at small scale, with limited reach and force. |
| Protection | **11.0** | Fur and ordinary tissue only; no armor. |
| Toughness | **29.0** | Venom resistance is real but trauma resistance remains modest; toxin defense is not generalized into armor. |
| Speed | **39.0** | Terrestrial movement is not a standout; no reliable maximum is promoted. |
| Maneuverability | **72.0** | Climbing, swimming, grasping tail and opposable hallux provide versatile control. |
| Endurance | **56.0** | Kilometer-scale nightly movement, tempered by strong cold sensitivity and lack of cursorial specialization. |
| Recovery | **42.0** | No exceptional regeneration or recovery mechanism established. |
| Tactics | **58.0** | Flexible omnivorous foraging and threat-response repertoire, but mostly solitary and not a coordinated hunter. |
| Senses | **60.0** | Competent nocturnal smell/hearing/tactile toolkit without an extreme sensory specialization. |
| Ferocity | **45.0** | Can hiss, gape and bite when cornered, but avoidance is normally favored. |
| Abilities | **88.0** | Viper-venom resistance plus involuntary thanatosis are unusually distinctive matchup tools. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **25.0** | Fifty-tooth jaw is credible against small prey, but 2.8 kg body mass limits absolute damage. |
| **Defense** | **28.0** | Little physical armor; venom resistance and conditional thanatosis improve survival without stopping ordinary trauma. |
| **Agility** | **71.0** | Strong climbing and complex-terrain control, but not a high-speed terrestrial specialist. |
| **Stamina** | **56.0** | Regular kilometer-scale nocturnal movement supports moderate sustained activity; cold sharply suppresses performance. |
| **Intelligence** | **59.0** | Flexible generalist with demonstrated maze alternation and adaptive foraging, but no basis for elite cognition. |
| **Special** | **90.0** | Well-supported snake-venom resistance plus extreme involuntary death-feigning create rare matchup-specific capabilities. |

### Cross-animal normalization
At 2.8 kg, Opossum Attack 25.0 remains far below Ocelot 38.0 (13 kg), Monitor Lizard 48.0 (20 kg), Okapi 53.0 (275 kg), Elk 62.0 (320 kg), and Musk Ox 64.0 (320 kg). It sits above sub-kilogram Meerkat 18.0 and Mongoose 20.0 due to greater body mass and a tooth-rich jaw. Agility 71.0 is below the specialized Meerkat 82.0 and Ocelot 88.0 but credits climbing versatility. Special 90.0 is intentionally high because venom resistance can nullify a major weapon class and thanatosis is biologically unusual; neither is reused to inflate Raw Power or Attack.

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Viper-Venom Countermeasure** - serum antihemorrhagic factors and venom-target adaptations provide experimentally supported resistance to important components of several snake venoms, reducing a normally decisive toxin advantage without implying universal immunity.
2. **Involuntary Thanatosis** - extreme stress can trigger a catatonic death-feigning state that may cause some predators to disengage, though it is unreliable against scavengers or persistent attackers.

### Unique traits
1. **Fifty-Tooth Arsenal** - 50 teeth, the highest count among North American land mammals, give this small omnivore a dense close-range dental toolkit.
2. **Fifth-Limb Climber** - a prehensile tail plus clawless opposable hind hallux provides branch grip and balance uncommon among North American mammals.

## 8. Expanded profile
### Habitat and range
Virginia opossums range from Central America through Mexico and much of the United States into southern Canada, with introduced populations on the Pacific coast. They use woodlands, thickets, wetlands, agricultural mosaics and urban/suburban habitats, often favoring cover near water.

### Diet and ecology
They are opportunistic omnivores. Documented foods include insects, worms, small mammals, birds, reptiles, amphibians, eggs, carrion, fruits, seeds and human-associated foods. This breadth makes them effective scavengers and mesopredators rather than specialized pursuit hunters.

### Social structure and activity
Adults are mainly solitary and nocturnal. Florida telemetry found peak activity between about 20:00 and 02:00, with males occupying larger home ranges than females. Home ranges overlap, and males may shift ranges after mating seasons.

### Reproduction and life history
The mating system is polygynous. Females can mature around six months and males around eight months, with breeding typically beginning around ten months. Gestation is only **12-13 days**. Litters range from 4-25 neonates, but females have only about 13 mammae and many young die before or after reaching the pouch. Young remain attached to nipples for roughly 50-70 days and are fully weaned around 93-105 days.

### Conservation
ADW reports **IUCN Least Concern**, no special US federal status and no CITES listing. The species tolerates human-altered habitats exceptionally well and can have higher survival near settlements, although road mortality and persecution are important local hazards.

### Major adaptations
Marsupial pouch reproduction, prehensile tail, opposable hind hallux, generalized omnivorous dentition, nocturnal behavior, broad habitat tolerance, venom-neutralizing serum factors and involuntary thanatosis.

### Human interaction
Opossums frequently enter yards and urban areas to exploit food, carrion and shelter. They are often treated as pests around garbage or poultry, but their scavenging and consumption of invertebrates and small vertebrates also provide ecosystem services. Vehicle strikes are a major anthropogenic mortality source.

### Genuine fun facts
- Virginia opossums have **50 teeth**, more than any other North American land mammal.
- Their famous death-feigning response is **involuntary**, not a deliberate theatrical decision.
- Gestation lasts only about **12-13 days**, after which extremely underdeveloped young crawl to the pouch.
- A Florida telemetry study recorded males moving as far as **4.665 km in a night**.
- Their serum contains factors that experimentally neutralize hemorrhagic/proteolytic components of multiple snake venoms.
- The hind foot has a **clawless opposable hallux**, while the tail can grasp and stabilize on branches.
- Wild life is remarkably short, commonly only **1.5-2 years**.

### Concise site summary
The Virginia opossum is a 2.8 kg nocturnal marsupial with modest direct fighting power but an unusually strange defensive toolkit. Fifty teeth, a grasping tail, an opposable hind toe, experimentally supported resistance to several snake-venom components and involuntary death-feigning make it a versatile survivor whose Special score greatly exceeds its raw Attack.

### Rich narrative profile
The Virginia opossum wins ecological battles through versatility rather than force. A mature male is only a few kilograms, lacks armor and is not a fast pursuit predator. Its direct weapons are conventional small-mammal tools: jaws, fifty teeth and claws. Against an ocelot, bobcat, coyote or similarly serious predator, those tools do not erase the enormous size and power gap.

What changes matchups is the opossum's unusual physiology and behavior. Toxinology research shows that its serum can neutralize important hemorrhagic and proteolytic snake-venom activities, while evolutionary studies reveal broader molecular adaptations associated with venom resistance in didelphids. This can specifically undermine venomous snakes, but the evidence does not justify fantasy-level immunity to all toxins. At the opposite extreme, overwhelming stress can push the animal into involuntary catatonic death-feigning. That response can deter some predators but can be useless or harmful against opponents willing to scavenge.

Its mobility is similarly broad rather than extreme. A prehensile tail and opposable hind hallux support climbing, it can swim, and field studies document substantial nightly travel. Yet no defensible maximum sprint speed was found, so ABS does not convert ecological versatility into fake speed precision. The result is intentionally asymmetric: low absolute power, moderate Defense and Stamina, good complex-terrain Agility, and an elite Special rating driven by genuinely unusual mechanisms.

### Future field proposals
- `venom_resistance_scope`: list experimentally tested venom families/components rather than a binary immunity flag.
- `tooth_count`: 50.
- `head_body_length_cm` and `tail_length_cm`: separate locomotor morphology from generic total length.
- `thanatosis_type`: involuntary catatonic defense.
- `nightly_movement_km`: field-derived movement rather than unsupported top speed.
- `canonical_sex`: male.

## 9. Image requirement
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/opossum.png` (not created)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Didelphis_virginiana_189957925.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/e/ee/Didelphis_virginiana_189957925.jpg
- `file_format_verified`: source JPEG, **2048x1365**; final PNG absent
- `alpha_verified`: no
- `full_body_verified`: no; direct visual review shows an excellent exact-species walking photograph, but the rear/tail region approaches or exits the right frame edge and strict complete anatomy cannot be certified
- `adult_verified`: no; source metadata identifies exact species but not age
- `sex_verified_or_unknown`: unknown
- `license_status`: **CC BY 4.0**, iNaturalist license reviewed by Wikimedia Commons
- `notes`: High-resolution reusable real photo with strong exact-species provenance, but mandatory adult + complete-body criteria are not simultaneous. ADW separately provides an exact-species photograph explicitly tagged adult/sexually mature under CC BY-NC-SA 3.0, but its framing does not establish a stronger strict full-body candidate. Do not cut out or commit until a complete adult source is visually verified.

## 10. Evidence and source ledger
| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web, *Didelphis virginiana* | https://animaldiversity.org/accounts/Didelphis_virginiana/ | taxonomy, mass, length, dentition, reproduction, lifespan, diet, predators, conservation | males 2.1-2.8 kg; male body 40.8 cm + tail 29.4 cm; 50-tooth dental formula; 12-13 d gestation; wild 1.5-2 y; Least Concern | High institutional synthesis; some geographic size estimates conflict and are retained as variation |
| Smithsonian National Zoo | https://nationalzoo.si.edu/animals/virginia-opossum | dimensions, lifespan, locomotor anatomy, diet, defense | males 2.1-2.8 kg; prehensile tail; opposable hallux; wild 1.5-2 y; adults usually threaten/flee | High institutional source |
| National Park Service | https://www.nps.gov/cwdw/learn/nature/virginia-opossum.htm | teeth, threat behavior, thanatosis, climbing | 50 teeth; catatonic response involuntary; prehensile tail and opposable hind toe | High agency source; older page but stable anatomy/behavior |
| Ryser 1995, Florida Museum Bulletin | https://flmnhbulletin.com/index.php/flmnh/article/view/flmnh-vol38-no6 | activity, movement, home range, temperature effects | males 234 m/h and 1,835 m/night average; max 4,665 m/night; nocturnal; cold suppresses activity | High, primary field study; movement is not top speed |
| Sánchez et al. 1998, Toxicon | https://pubmed.ncbi.nlm.nih.gov/9723843/ | venom resistance | opossum serum antihemorrhagins bind/neutralize hemorrhagic venom proteins | High, peer reviewed; component-specific, not universal immunity |
| Pornmanee et al. 2008, Toxicon | https://pubmed.ncbi.nlm.nih.gov/18617212/ | venom resistance | Virginia-opossum serum neutralized Malayan pit-viper venom lethality/proteolytic activity | High, peer reviewed; serum experiment does not imply all venoms |
| Voss & Jansa 2012, Biological Reviews | https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1469-185X.2012.00222.x | mechanism/context of venom resistance | toxin-neutralizing serum proteins and venom-target adaptations in didelphids | High review; broader didelphid context |
| Tilley et al. 1966 | https://openalex.org/W2029344176 | cognition | five adult Virginia opossums significantly alternated in T-maze trials | Moderate/high primary behavioral evidence; small sample |
| Wikimedia Commons, Lauren McLaurin | https://commons.wikimedia.org/wiki/File:Didelphis_virginiana_189957925.jpg | image provenance | exact species, 2048x1365, CC BY 4.0 | Strong reuse provenance; adulthood/strict complete body unresolved |
| ADW adult image | https://animaldiversity.org/collections/contributors/Wright_Lisa/Didelphis_adult/ | adult image provenance | exact species, adult/sexually mature, CC BY-NC-SA 3.0 | Adult verified, but not promoted without stronger full-body framing |

## 11. Confidence, conflicts and normalization notes
- **Mass conflict:** institutional normal males cluster at 2.1-2.8 kg, while broader references extend toward 6 kg and northern/urban animals can be substantially heavier. Canonical 2.8 kg is intentionally a strong representative male, not the species maximum.
- **Speed conflict:** weak web sources provide running speeds, but no primary physiological maximum was found. Canonical `speed_mps` remains 0.0.
- **Bite-force conflict:** no credible species-specific pressure value was recovered. No force-to-PSI fabrication is used.
- **Lifespan conflict:** wild normal lifespan is 1.5-2 y, captive typical 3-4 y, with rare reports much longer. Canonical 2.0 y represents the wild animal rather than exceptional captivity.
- **Venom scope:** high resistance is real and experimentally supported, but it is not universal venom immunity. Special receives the benefit; Attack and raw physical Defense do not.
- **Thanatosis:** treated as conditional defense rather than Intelligence because NPS identifies the state as involuntary.
- **Roster calibration:** the physical ratings preserve a major gap between this 2.8 kg marsupial and medium predators or megafauna. Its standout score is Special, not raw combat power.

## Completion checklist
- Exact taxon and representative adult documented: yes
- Dimorphism/population variation documented: yes
- Canonical physical fields with uncertainty: yes
- Weapons, defenses, mechanics, locomotion, endurance, senses and behavior: yes
- Environmental strengths/weaknesses and matchup archetypes: yes
- All current ABS substats scored with one decimal: yes
- Six headline ratings with one decimal: yes
- **Exactly two special abilities:** yes
- **Exactly two unique traits:** yes
- Expanded ecology/life history/conservation/human interaction: yes
- Several genuine fun facts: yes
- Site summary and rich narrative: yes
- Future fields proposed: yes
- Source ledger with direct URLs/conflicts/confidence: yes
- Cross-animal normalization: yes
- Mandatory image status/provenance fields: yes
