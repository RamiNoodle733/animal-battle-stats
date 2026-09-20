# Kangaroo

## 1. Identity and canonical specimen
- **Roster name:** Kangaroo
- **Scientific name:** *Osphranter rufus* (Desmarest, 1822), historically and still widely cited as *Macropus rufus*.
- **Exact taxon represented:** Red Kangaroo. The live roster already identifies `Macropus rufus`; current Australian Museum and Taronga usage places the species in *Osphranter*.
- **Status:** living. Taronga lists the species as IUCN Least Concern.
- **Canonical combat specimen:** healthy fully mature **adult male (boomer), 80.0 kg**. Red kangaroos are strongly sexually dimorphic and males are the primary fighting sex. Taronga gives males 65-92 kg versus females 25-35 kg; Australian Museum notes males can reach 92 kg and are about twice female body mass. The 80 kg control is a large representative mature male without using the 92 kg upper endpoint as the normal specimen.
- **Dimorphism:** males are much heavier, longer, more muscular through the shoulders/forelimbs, and behaviorally specialized for male-male contests. Macropod comparative work shows forelimb dimorphism increases with body size and is linked to male competition. Females are much smaller and lack the same upper-body combat investment.
- **Population/individual variation:** body size, coat color and condition vary with geography, forage and rainfall. Male coat is often red-brown and female coat blue-grey, but Australian Museum notes regional color reversal can occur. Canonical ratings therefore use sex and structure, not coat color, to define the fighter.

## 2. Physical measurements and ranges

| Measurement | Proposed value / range | Evidence and interpretation |
|---|---:|---|
| Mass | **80.0 kg** canonical male; institutional male range **65-92 kg** | Taronga gives 65-92 kg males and 25-35 kg females. Australian Museum gives males up to 92 kg. 80 kg is a representative mature-fighter control rather than a record endpoint. |
| Head-body length | **140.0 cm** canonical | Australian Museum: males up to 1.4 m body length; ADW reports male total-body/head-body values around 1.3-1.6 m in its physical description. 1.4 m is a conservative large-adult control. |
| Tail length | **110.0 cm** canonical | ADW gives males about 100-120 cm; Australian Museum says up to about 1 m. 110 cm is retained as a representative large-male value with moderate confidence. |
| Total length | **250.0 cm** derived | 140 cm head-body + 110 cm tail. Recommended for the generic site `length_cm` field, while future schema should split body and tail. |
| Upright height | **150.0 cm** canonical | ADW reports red kangaroos may reach about 1.8 m standing; this varies with posture. 150 cm is a conservative representative upright-height control, not a skeletal shoulder-height measure. |
| Top speed | **17.8 m/s** | Taronga reports 64 km/h; 64 / 3.6 = 17.8 m/s. Australian Museum separately reports 64 km/h for an eastern grey, supporting the order of magnitude for large kangaroos but not serving as the red-kangaroo measurement. |
| Lifespan | **20.0 years** | Taronga reports up to 20 years in the wild and 23 years in care. ADW reports wild records to 22 years. Canonical 20 years represents strong documented wild longevity without using a captive maximum. |
| Bite force | **0.0 PSI** | No defensible species-specific bite-pressure measurement recovered. The red kangaroo's combat system is forelimb control plus hind-foot kicking, not a specialized bite. |
| Male body-length upper bound | **140 cm** | Australian Museum. |
| Male mass upper bound | **92 kg** | Australian Museum and Taronga. |
| Hind feet / claws | enlarged hind feet with strong claws | Critical striking surfaces, but no strong canonical claw-length measurement was recovered, so no millimeter value is invented. |

### Canonical proposed factual fields
```text
weight_kg: 80.0
height_cm: 150.0
length_cm: 250.0
speed_mps: 17.8
lifespan_years: 20.0
bite_force_psi: 0.0
```

`height_cm` is posture-sensitive upright height and should eventually be labeled accordingly. `length_cm` is derived total length including tail. Bite PSI is unknown, not literally zero force.

## 3. Weapons, defenses and combat mechanics

### Primary weapons
The primary damaging weapons are the enormous hind limbs and elongated feet. A fighting male can brace on the muscular tail and forelimbs, bring both hind legs forward, and kick/rake an opponent at close range. The feet provide both impact and clawed contact. This is a real specialized fighting mechanism, but no reliable species-specific kick-force value in Newtons was recovered in this run, so ABS does not invent one.

### Secondary weapons
The forelimbs are important control tools. Male kangaroos grapple, clasp, shove and pull rivals to create position for hind-leg attacks. Comparative macropod research demonstrates that male forelimb muscularity is sexually selected and that larger macropod species show stronger forelimb dimorphism. The forelimbs should therefore not be reduced to cosmetic 'boxing.' The tail is also mechanically important: it provides balance during hopping and can act as a powerful support during fighting and slow pentapedal locomotion.

### Offensive mechanics
Male kangaroo fighting is a positional sequence rather than simple punching. Rivals stand tall, paw/grapple with the forelimbs, wrestle for upper-body control and may lean back onto the tail to free both hind limbs for forceful kicks. Work on western grey kangaroos directly describes males clasping opponents with the forelimbs, standing on the tail, and bringing up the hind legs to kick. Red kangaroos share the large-bodied macropod combat plan, and cross-species work shows combat-related forelimb dimorphism strengthens with body size.

Against a non-kangaroo opponent, the most dangerous moment is close frontal contact where the male can establish a brace and deliver a double-hindlimb strike. It is less effective if the opponent attacks from the side/rear, prevents the male from setting posture, or has enough mass to overwhelm the brace.

### Defense and toughness
There is no armor, shell, thick hide specialization or blubber. Defense comes from 80 kg body mass, strong musculoskeletal construction, evasive hopping, reach, and the deterrent value of the hind limbs. Fur offers little trauma protection. The abdomen, neck and limbs remain vulnerable to penetrating bites and claws. Defense is therefore meaningful but should not be inflated simply because the animal can kick hard.

### Locomotion and maneuverability
Fast bipedal hopping is the signature locomotor mode. Kram and Dawson's red-kangaroo biomechanics review found that as level hopping speed rises, oxygen consumption remains nearly constant over the measured range because long compliant tendons store and return elastic energy. At low speeds kangaroos also use pentapedal locomotion. Direct force-platform work found that the muscular tail can provide as much propulsive force as the fore- and hindlimbs combined during pentapedal walking and generates substantial positive mechanical power.

This creates an unusual movement profile: excellent straight-line bounding, strong acceleration/repositioning and efficient travel, but less tight lateral maneuvering than a small cat or primate. Agility is high, not because speed is automatically agility, but because balance, elastic hopping, tail control and powerful directional bounds provide real repositioning ability.

### Endurance and energetic economy
Red kangaroo locomotion is one of the strongest evidence bases for a high Stamina rating. On level ground, the metabolic cost of faster hopping does not rise in the ordinary mammalian way because elastic tendon recovery supplies much of the mechanical work. Kram and Dawson found that uphill hopping becomes much more metabolically expensive, showing that the efficiency is substrate/context dependent rather than unlimited. Their measured maximal oxygen consumption was about 3 ml O2 kg-1 s-1, described as exceeding all but a few vertebrate species in that comparison.

ABS therefore gives very high sustained-locomotion stamina but not a near-ceiling score. Prolonged grappling and repeated maximal kicks are not equivalent to economical cruising hops, and steep terrain removes much of the elastic-energy advantage.

### Senses
Red kangaroos have useful vision, hearing and olfaction for open-country vigilance, social monitoring and predator detection. Large mobile ears support directional hearing. No evidence recovered supports raptor-level visual acuity, canid-level olfactory specialization, echolocation or another extreme sensory mechanism. Senses are useful and broad rather than extraordinary.

### Intelligence and tactics
Red kangaroos are social herbivores with dominance interactions, threat assessment and flexible movement decisions, but they are not known for the high manipulative/problem-solving repertoire of primates or corvids. Combat itself does require timing, balance, grip management and response to an opponent's posture. Intelligence is therefore moderate, while the more specific motor skill of fighting contributes to Tactics.

### Fighting behavior
Male-male competition is the central combat context. Large males contest access to females through ritualized and escalating fights. Comparative anatomical research links male upper-body development directly to this competition. Fights can involve upright sparring, forelimb grappling and hind-leg kicking. This supports a meaningful Ferocity score without implying that red kangaroos are indiscriminately aggressive predators.

### Predation and feeding behavior
Red kangaroos are herbivores, primarily consuming native grasses and small green vegetation. They are not hunters and do not possess a prey-killing behavioral sequence. Attack therefore comes from conspecific fighting equipment and defensive striking, not predatory specialization.

### Predator defense
The first-line defense is detection and escape across open ground. If cornered or physically engaged, a large male can grapple and kick. Body size makes a mature male a difficult target for smaller predators, but large canids acting cooperatively and humans remain serious threats. Water should not be treated as a magical combat ability; although kangaroos can enter water, this report does not encode viral anecdotes as a special drowning technique.

## 4. Environmental strengths, weaknesses and matchup archetypes

**Strong environments:** open plains, grassland, shrubland, desert, woodland and open forest with room to bound. Australian Museum and Taronga both emphasize open/arid habitats.

**Environmental advantages:** long-distance hopping becomes mechanically economical; open sight lines help early detection; heat and drought adaptations support persistence in arid landscapes; a large male has enough open space to establish distance and choose when to engage.

**Environmental disadvantages:** tight interiors, dense entangling vegetation, slick confined surfaces and terrain that prevents a stable tail/hindlimb brace reduce the value of the normal locomotor and kicking system. Steep uphill travel is metabolically more expensive than level hopping.

**Major weaknesses:** no armor; no predatory bite; limited close-range weapon geometry if the opponent gets behind the hips or prevents bracing; vulnerable neck/abdomen; large feet and hopping gait are less suited to tight grappling spaces; powerful kicks require position and are not continuously available like a carnivore's jaws.

### Matchup archetypes
- **Good:** smaller unarmored terrestrial opponents that must approach from the front and cannot safely absorb or bypass the hind-leg strike zone.
- **Mixed:** similarly sized hoofed mammals and mid-sized predators where range, first contact, footing and whether the kangaroo can establish a brace matter greatly.
- **Bad:** large cats and bears with superior close-contact killing weapons, heavy pack predators, armored opponents that blunt kick damage, very large ungulates, and megafauna whose mass advantage overwhelms the kangaroo's strike system.

## 5. Proposed ABS substats
All scores are absolute across the full roster, not pound-for-pound.

| Substat | Score | Justification |
|---|---:|---|
| **Raw Power** | **51.0** | An 80 kg male with exceptionally developed hindquarters, large feet, strong tail and sexually selected upper body has substantial absolute power, but remains far below great apes, large bears and megafauna. |
| **Weaponry** | **52.0** | Double hind-leg kicks plus clawed feet and grappling forelimbs are dangerous and specialized, but lack the continuous grip/lethality of large carnivore jaws and claws. |
| **Ferocity** | **53.0** | Males engage in real dominance fights and can escalate to kicking; still an herbivore whose normal strategy toward danger is often escape. |
| **Protection** | **28.0** | No armor or specialized trauma-resistant covering; mass and fur provide only modest protection. |
| **Toughness** | **43.0** | Large, muscular and capable of rough male contests, but vulnerable to penetrating trauma and without exceptional armor. |
| **Maneuverability** | **80.0** | Powerful bounds, balance and tail control provide excellent open-ground repositioning, though tight lateral maneuvering is less cat-like. |
| **Speed** | **74.0** | Taronga's 64 km/h institutional value is strong for an 80 kg animal. This remains separate from maneuverability. |
| **Endurance** | **86.0** | Elastic tendon energy return makes faster level hopping unusually economical; high aerobic output is documented, though uphill work is much costlier. |
| **Recovery** | **50.0** | Ordinary mammalian recovery with no exceptional regeneration; robust conditioning does not imply accelerated healing. |
| **Tactics** | **57.0** | Male contests require grip, balance, posture and timing, but evidence does not support complex predator-style tactical planning. |
| **Senses** | **58.0** | Good open-country vision/hearing/olfaction and vigilance without an extreme sensory specialization. |
| **Abilities** | **68.0** | Elastic hopping, tail-powered pentapedal locomotion and specialized kick-brace mechanics are genuinely unusual and matchup-relevant. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **52.0** | An 80 kg male can grapple and deliver dangerous bilateral hind-leg kicks, but lacks a large predator's penetrating kill apparatus and repeatable jaw control. |
| **Defense** | **38.0** | Size, mobility and deterrent kicks help it avoid or discourage attacks, but there is no armor and physical trauma tolerance is ordinary for a large herbivorous mammal. |
| **Agility** | **80.0** | High-speed bounding, excellent balance and tail-assisted control produce strong repositioning while preserving a gap below the roster's most maneuverable aerial/small-bodied specialists. |
| **Stamina** | **86.0** | Exceptional elastic-energy recovery makes sustained level hopping unusually economical, backed by red-kangaroo biomechanics rather than folklore. |
| **Intelligence** | **51.0** | Social awareness, dominance behavior and combat timing support moderate cognition, well below primates/corvids and without predatory tactical specialization. |
| **Special** | **68.0** | The combination of elastic hopping, muscular tail support and a distinctive grapple-to-double-kick combat system is rare and matchup-changing without duplicating raw damage. |

## 7. Exactly two special abilities
1. **Tripod Double-Kick** - a male can grapple with the forelimbs, shift support onto the muscular tail and launch both hind feet toward an opponent. The ability is grounded in documented macropod fighting mechanics and is strongest when footing and frontal positioning permit a stable brace.
2. **Elastic Hop Economy** - long compliant hindlimb tendons store and return mechanical energy, allowing level hopping speed to increase with remarkably little increase in measured oxygen consumption over the studied range. This gives the kangaroo exceptional travel economy without implying unlimited fight endurance.

## 8. Exactly two unique traits
1. **Power-Tail Pentapod** - during slow pentapedal locomotion the tail is not merely a passive balance pole: force-platform work shows it can supply as much propulsive force as the limbs combined and substantial positive mechanical work.
2. **Sexually Selected Grappler Build** - large male macropods show disproportionate forelimb development tied to male-male competition, giving the canonical boomer a much more combat-oriented upper body than the familiar lightweight female silhouette suggests.

## 9. Expanded profile

### Habitat and geographic range
Red kangaroos occupy arid and semi-arid mainland Australia. Australian Museum describes grassland, shrubland, desert, woodland and open forest, with greatest abundance in open savanna woodland. Taronga summarizes the core distribution as central Australia. Their locomotion and thermoregulation are especially well suited to open dry country.

### Diet and ecology
The species is a grazing herbivore, eating native grasses and other small green vegetation. It can persist through dry conditions by obtaining substantial water from vegetation and by adjusting activity to cooler periods. Population abundance can respond strongly to rainfall and forage availability.

### Social structure
Red kangaroos form loose social groups commonly called mobs. ADW describes groups averaging around ten, usually dominated numerically by females and young with one or more males, while much larger temporary aggregations can form at rich forage. Sociality supplies vigilance and mating context but does not create pack-hunting power for an individual battle profile.

### Reproduction and life history
Breeding can occur through the year when conditions permit. ADW reports gestation around 33 days, pouch attachment early in development and prolonged maternal investment. Females can use embryonic diapause, pausing development when environmental or reproductive conditions make immediate progression unfavorable. Taronga highlights delayed birth under poor food/water conditions. This is a major ecological adaptation but not a direct combat mechanism.

### Conservation
Taronga lists *Osphranter rufus* as **Least Concern**. The species is widespread, but abundance can fluctuate with drought and rainfall. Human land use, fencing, roads and regulated harvesting all shape local populations.

### Major adaptations
- enormous elastic hindlimb tendons for economical hopping
- elongated hind feet and powerful hindquarters
- muscular load-bearing tail used in balance, fighting support and pentapedal propulsion
- sexually selected male forelimb/upper-body development
- arid-zone heat and water economy
- flexible reproductive timing including embryonic diapause

### Human interaction
Red kangaroos are among Australia's most recognizable native mammals. They interact with pastoral landscapes, roads and fencing, and populations are subject to regulated management/harvesting in parts of Australia. Large males should be treated as powerful wild animals rather than approached for novelty photographs or fights.

### Genuine fun facts
- The red kangaroo is the largest living marsupial.
- Australian Museum reports males up to about 92 kg and 1.4 m head-body length.
- Taronga reports red kangaroos can hop at 64 km/h.
- Faster level hopping can cost surprisingly little additional metabolic energy because elastic tendons recycle mechanical energy.
- During slow pentapedal walking, the tail functions mechanically like an additional leg and can produce major propulsive work.
- A male's forelimbs are combat equipment as well as locomotor limbs, helping clasp and control rivals before hind-leg kicks.
- Females can pause embryonic development through diapause.
- Wild longevity can reach about two decades, with ADW recording individuals to 22 years.

### Concise site-ready summary
The Red Kangaroo is the world's largest living marsupial and an 80 kg male is a specialized open-ground striker. Its danger comes from a grapple-and-brace fighting system that frees both powerful hind legs for kicks, while elastic tendons make sustained hopping exceptionally economical. It is fast, mobile and enduring, but lacks armor and the penetrating killing weapons of a large carnivore.

### Rich narrative profile
A mature male red kangaroo is not simply a large rabbit-like hopper. Its entire body plan is organized around oversized hindquarters, long feet, elastic tendons and a muscular tail, while sexual selection has added a stronger upper body for male competition. In a fight the forelimbs establish contact and position; the tail can become a support; and the hind limbs provide the most dangerous strike. That makes the animal unusually capable of turning a locomotor system into a close-range weapon.

The same anatomy explains why its best battlefield is open, firm ground. At distance, the kangaroo can bound rapidly and efficiently. At close range, it wants enough space and traction to orient its hips, brace and kick. A predator that collapses that geometry, attacks from an unfavorable angle or overwhelms the kangaroo before it establishes the tripod posture can sharply reduce its offensive ceiling. Conversely, a smaller opponent forced to enter from the front risks a severe reach and power disadvantage.

Stamina is arguably the species' most exceptional broad physical trait. Red-kangaroo hopping is a classic biomechanics case because tendon elasticity allows faster level movement without the ordinary proportional rise in metabolic cost. That does not mean maximal combat is free. Uphill hopping becomes much more expensive, and wrestling plus repeated maximal kicks involve muscle work that cannot be recycled like steady locomotion. The ABS score therefore rewards genuine endurance physiology while keeping combat-specific limitations visible.

### Future structured-field proposals
- `head_body_length_cm`: 140.0
- `tail_length_cm`: 110.0
- `upright_height_cm`: 150.0, explicitly posture-sensitive
- `canonical_sex`: male
- `canonical_life_stage`: fully mature adult
- `locomotion_modes`: hopping; pentapedal walking
- `top_speed_context`: institutional reported hopping maximum
- `weapon_system`: hind-foot kick + forelimb grapple + tail brace
- `diet_type`: grazing herbivore
- `conservation_status`: Least Concern

## 10. Mandatory image research
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/kangaroo.png` **NOT PRESENT / NOT COMPLETE**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Red_kangaroo_(8454551677).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/c/c4/Red_kangaroo_%288454551677%29.jpg
- `file_format_verified`: source is a real JPEG photograph; no final PNG exists
- `alpha_verified`: **false**
- `full_body_verified`: **false**
- `adult_verified`: **not explicit in source metadata**
- `sex_verified_or_unknown`: source text calls the individual a male ('chap') and discusses male morphology, but formal sex metadata is absent; treat as **unknown/not sufficiently verified**
- `license_status`: **CC BY 2.0**, Flickr license independently reviewed by Commons FlickreviewR
- `resolution`: **3648 x 2736**
- `notes`: Direct visual inspection confirms a single real red kangaroo with head, torso, forelimbs, hind limbs and tail in frame. However, grass/pose makes strict visibility of every foot/toe and the complete tail endpoint unsuitable for mandatory certification, and adulthood is not explicit. It is therefore retained only as a high-resolution reusable candidate. No transparent PNG is claimed. Current GitHub writer is text-only, so even a later source-verified candidate cannot be represented as a fake binary asset.

## 11. Source ledger

| Source | Direct URL | Supports | Finding | Context | Confidence / caveat |
|---|---|---|---|---|---|
| Australian Museum, Red Kangaroo | https://australian.museum/learn/animals/mammals/red-kangaroo/ | taxonomy, dimensions, dimorphism, habitat | *Osphranter rufus*; males up to 1.4 m body length and 92 kg; females up to 1.1 m and 39 kg | species account, updated 2026 | **High** institutional source; values are upper ranges, not means |
| Taronga Zoo, Red Kangaroo | https://www.taronga.org.au/wildlife-and-conservation/animals/detail/red-kangaroo | mass, speed, lifespan, diet, range, conservation | males 65-92 kg; females 25-35 kg; 64 km/h; up to 20 y wild/23 y care; Least Concern | institutional species account | **High-moderate**; speed is institutional reported value, not instrumented paper recovered here |
| Animal Diversity Web, Red Kangaroo | https://animaldiversity.org/accounts/Macropus_rufus/ | morphology, tail, life history, longevity, social behavior | male 1.3-1.6 m head/body description; 1.0-1.2 m tail; up to 90 kg; wild record to 22 y; mobs | synthesis account | **Moderate-high**; some displayed length labels are confusing, so used cautiously |
| Kram & Dawson 1998, Energetics and biomechanics of locomotion by red kangaroos | https://pubmed.ncbi.nlm.nih.gov/9787777/ | locomotor economy, stamina | oxygen consumption nearly constant as level hopping speed rises; uphill hopping much more costly; measured maximal oxygen consumption 3 ml O2 kg-1 s-1 | peer-reviewed red-kangaroo biomechanics | **High** |
| O'Connor et al. 2014, The kangaroo's tail propels and powers pentapedal locomotion | https://pubmed.ncbi.nlm.nih.gov/24990111/ | tail mechanics | tail can provide as much propulsive force as fore/hind limbs combined during pentapedal gait and major positive mechanical work | force-platform red-kangaroo study | **High** |
| Warburton, Bateman & Fleming 2013 | https://academic.oup.com/biolinnean/article-abstract/109/4/923/2415678 | fighting mechanics, sexual selection | males clasp opponents with forelimbs, support on tail and kick; male forelimb muscles show combat-linked positive allometry | western grey kangaroo, comparative combat mechanism | **High for macropod mechanism**, indirect for red-kangaroo muscle measurements |
| Richards et al. 2015, Strong arm tactics | https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/jzo.12264 | cross-macropod dimorphism | forelimb dimorphism increases with body size across 15 promiscuous macropodid species | comparative skeletal sample | **High**, cross-species rather than red-kangaroo-only |
| Wikimedia Commons, Red kangaroo (8454551677) | https://commons.wikimedia.org/wiki/File:Red_kangaroo_(8454551677).jpg | image provenance | exact species, 3648x2736, CC BY 2.0, Flickr license reviewed | Al Ain zoo photograph | **High provenance; insufficient strict anatomy/adult verification** |

### Source conflicts and uncertainty
1. **Taxonomy:** older material uses *Macropus rufus*; current Australian institutions commonly use *Osphranter rufus*. These names refer to the same roster species.
2. **Length conventions:** some sources mix head-body length, upright height and total length. This report keeps head-body and tail separate, then derives the generic total-length field.
3. **Speed:** 64 km/h is accepted from Taronga as a strong institutional value, but no instrumented red-kangaroo maximum-speed paper was recovered. Confidence is moderate rather than experimental-high.
4. **Kick force:** the mechanism is well documented, but a species-specific Newton value was not recovered. No viral or human-comparison force number is used.
5. **Bite force:** no defensible PSI exists in the sources reviewed; `0.0` means unsupported.
6. **Lifespan:** sources distinguish wild records from captive longevity. 20 years is a conservative documented wild-longevity control, not mean life expectancy.

## 12. Cross-animal normalization notes
- At **80 kg**, the canonical red kangaroo is similar in mass to the 75 kg spotted hyena control but has substantially inferior penetrating weaponry and close-contact killing specialization. Attack **52.0** therefore remains below Hyena **61.0**.
- It is much heavier than the 11.3 kg Japanese macaque and has far greater absolute hindlimb power, so Raw Power/Attack must not be compressed toward the macaque's Attack **31.0**.
- Its Attack is above the 65 kg Impala's **43.0** because the kangaroo combines grappling control with repeated directional hind-leg strikes rather than relying only on horn/impact geometry, while still staying well below Jaguar **68.0**.
- Agility **80.0** is close to Japanese Macaque **79.0** for different reasons. The macaque has multidomain fine control; the kangaroo has powerful open-ground bounds and balance. This does not imply equal movement style.
- Stamina **86.0** exceeds Hyena **83.0** narrowly because red-kangaroo level hopping has unusually strong direct elastic-energy evidence. This score applies to sustained locomotor economy, not to an assumption that it can wrestle maximally for hours.
- Defense **38.0** stays below similarly sized specialized predators because no armor or exceptional hide exists. Offensive kick deterrence is not double-counted as armor.
- Intelligence **51.0** remains far below Japanese Macaque **84.0** and Hyena **78.0**, preventing sociality or combat ritual from becoming cognitive inflation.
- Special **68.0** reflects rare locomotor/tail mechanics without treating ordinary body size or speed as a special power.

## Verification checklist
- Exact roster taxon resolved: **yes**
- Representative healthy adult fighting sex selected: **yes, mature male**
- Dimorphism/population variation documented: **yes**
- Canonical physical fields proposed with uncertainty: **yes**
- Unsupported bite PSI rejected: **yes**
- Measured facts separated from editorial ratings: **yes**
- Current 12 ABS substats scored with one decimal: **yes**
- Six headline ratings scored with one decimal: **yes**
- Exactly two special abilities: **yes**
- Exactly two unique traits: **yes**
- Expanded ecology/profile/fun facts included: **yes**
- Direct-URL source ledger included: **yes**
- Cross-roster normalization checked: **yes**
- Mandatory image candidate researched and honestly marked pending: **yes**
- Production data/site/live images modified: **no**
