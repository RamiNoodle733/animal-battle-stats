# Iguana Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Iguana / Green iguana
- **Scientific name:** *Iguana iguana* (Linnaeus, 1758)
- **Family:** Iguanidae
- **Status:** Living
- **Exact roster resolution:** The live Iguana profile explicitly names *Iguana iguana*, so this report treats the generic roster label as the green iguana, not another iguanid.
- **Canonical specimen:** healthy fully mature adult male, **7.0 kg**, approximately **175.0 cm total length**.
- **Why male:** males are larger and more heavily ornamented, with larger dewlaps, jowls and dorsal crests, and are the more strongly territorial fighting sex. FWC reports males can exceed five feet and reach 17 lb (7.7 kg), while females usually do not exceed 7 lb (3.2 kg). ADW gives 4–8 kg and 7 kg average mass, with average length 1.75 m and maximum around 2 m.
- **Variation:** body size varies by sex, age, nutrition and population. Breeding males can become orange/gold and display enlarged secondary sexual structures. A representative 7 kg male is preferable to treating the 8 kg upper bound as typical.

## 2. Physical measurements

### Mass
ADW reports **4–8 kg**, average **7 kg**. FWC independently reports males up to **17 lb / 7.7 kg** and females usually no more than **7 lb / 3.2 kg**.

- **Canonical `weight_kg`: 7.0 kg**
- **Confidence:** high for scale; moderate-high for a single representative mature-male value.

### Length
ADW reports average total length **1.75 m**, with a high value around **2 m**. FWC reports males over five feet. Much of this total is tail: National Geographic notes the tail can make up about half total length.

- **Canonical `length_cm`: 175.0 cm**
- **Canonical `height_cm`: 0.0** because a standardized standing-height measurement is not a useful or well-supported species field.
- **Confidence:** high for total length.

### Speed and locomotion
Green iguanas are agile climbers and capable swimmers. National Geographic documents arboreal escape, high drops and swimming, while ADW describes arboreal life and threat responses. I did not recover a defensible species-specific maximum ground or swimming speed from a strong source.

- **Canonical `speed_mps`: 0.0**
- This means unknown/not defensibly quantified for the schema, not immobile.

### Lifespan
National Geographic reports an average wild lifespan of **20 years**. Captive longevity varies substantially with husbandry.

- **Canonical `lifespan_years`: 20.0 years**
- **Confidence:** moderate-high institutional value.

### Bite, teeth, claws and tail
Green iguanas possess strong jaws and sharp leaf-shearing teeth, but I found no defensible species-specific bite pressure in PSI. The live site's legacy 100 PSI value is therefore rejected.

- **Canonical `bite_force_psi`: 0.0**
- **Primary practical weapons:** long muscular tail used as a whip; sharp teeth and strong jaws.
- **Secondary weapons:** curved claws used in climbing and close defensive contact.
- **Tail:** approximately half total body length in broad institutional descriptions, making it both locomotor equipment and a long-reach defensive weapon.

### Defensive structures
The iguana lacks true armor. Scales, stout build, dorsal spines, jowls and subtympanic plates add some superficial protection, but the major defenses are escape, climbing, swimming, intimidation displays, tail strikes and biting rather than armor capable of resisting major mammalian weapons.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 7.0,
  "height_cm": 0.0,
  "length_cm": 175.0,
  "speed_mps": 0.0,
  "lifespan_years": 20.0,
  "bite_force_psi": 0.0
}
```

Unknown/unstandardized fields are left at 0.0 rather than populated with unsupported precision.

## 4. Combat biology

### Offensive mechanics
A cornered green iguana can lash laterally with its long muscular tail, bite with sharp teeth, and scratch with claws. The tail gives unusually long defensive reach for a 7 kg lizard, but its absolute impact remains far below the force of large mammalian horns, hooves or jaws. The bite can cut tissue but should not be inflated from uncited PSI claims.

### Defensive behavior and predator response
Escape is the first-line defense. Near water, threatened iguanas can dive and swim away. In trees they can leap or fall considerable distances. When cornered, they expand the dewlap, stiffen and inflate the body, hiss and head-bob before escalating to tail lashes, bites and claws. Tail autotomy and regrowth add a sacrificial escape mechanism, although regrowth is not instantaneous combat regeneration.

### Locomotion and maneuverability
The species is arboreal, terrestrial and aquatic. Strong claws support climbing; the long tail contributes balance in trees and propulsion in water. During swimming the limbs can be held against the body while the tail supplies propulsion. This versatility supports strong maneuverability without pretending that an unmeasured top speed is known.

### Endurance and physiology
As an ectotherm, performance depends strongly on body temperature. Basking raises operating temperature and activity; cold can severely suppress movement. This creates excellent energy economy but limits sustained high-output combat compared with endothermic pursuit specialists.

### Senses
Laterally positioned eyes give broad visual coverage. ADW describes the parietal eye as primarily detecting overhead shadow/light changes and contributing to photoperiodic/endocrine regulation. Chemosensory tongue/vomeronasal use and ordinary reptilian hearing also support environmental awareness. None is treated as supernatural detection.

### Intelligence and tactics
Green iguanas use visual social signals including head bobs, dewlap extension and posture. Territorial males assess rivals and escalate through display before contact. This is meaningful behavioral flexibility but does not justify primate/corvid-level cognition.

### Fighting and social behavior
Mature males are territorial, especially around breeding. Large dewlaps and body presentation advertise size and condition. Physical conflict can include biting, chasing and tail use. Females are smaller, so the mature male is the appropriate ABS fighting phenotype.

### Environment
- **Best:** tropical trees near water, where climbing, dropping and swimming provide multiple escape axes.
- **Good:** warm open ground with room to turn and deploy the tail.
- **Worse:** cold environments, confined spaces, or terrain that prevents tail swings and escape climbing.
- **Aquatic context:** competent swimmer, but not an aquatic pursuit predator.

### Weaknesses
- Ectothermic performance falls sharply when cold.
- No heavy armor.
- Tail and bite are dangerous at its size but low in absolute roster-wide power.
- Primarily defensive rather than predatory combat behavior.
- Confined quarters reduce the tail's reach and escape options.

### Matchup archetypes
- **Favored against:** tiny unarmored animals that must enter tail/bite range.
- **Competitive against:** similarly sized non-specialist animals where reach, claws and terrain escape matter.
- **Unfavored against:** dedicated mammalian/crocodilian predators, armored animals, and much larger opponents.
- **Terrain swing:** arboreal/waterside terrain improves survival options much more than it increases direct Attack.

## 5. Proposed ABS substats

| Substat | Score | Justification |
|---|---:|---|
| Size | **21.0** | A 7 kg lizard is substantial among lizards but small on the full roster. |
| Raw Power | **22.0** | Strong for climbing and tail propulsion, yet low absolute force versus medium and large mammals. |
| Weaponry | **30.0** | Tail whip, sharp teeth and claws give three usable tools, but none has heavyweight lethality. |
| Protection | **22.0** | Scales and stout construction offer modest protection without true armor. |
| Toughness | **34.0** | Robust falls and tail-loss survival are notable, but serious trauma remains dangerous. |
| Speed | **42.0** | Conservative editorial locomotor placement; no unsupported maximum speed is used. |
| Maneuverability | **68.0** | Strong climbing, balance, terrestrial movement and swimming make it versatile in three-dimensional habitat. |
| Endurance | **43.0** | Energy-efficient ectothermy but temperature-limited sustained high output. |
| Recovery | **52.0** | Tail regeneration is biologically exceptional but slow, so it helps long-term recovery rather than immediate combat. |
| Tactics | **43.0** | Threat assessment, display escalation, escape-route use and territorial signaling show useful behavioral structure. |
| Senses | **48.0** | Broad vision plus shadow detection and chemosensory input are useful but not extreme. |
| Ferocity | **39.0** | Mature males can fight and cornered adults defend vigorously, but the species usually prioritizes escape. |
| Abilities | **62.0** | Tail autotomy/regrowth plus arboreal-aquatic escape versatility are unusual matchup-relevant adaptations. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **27.0** | Tail whip, bite and claws can injure similar-sized opponents, but absolute lethality is limited. |
| **Defense** | **31.0** | Escape versatility, robust body and sacrificial tail improve survival, but there is no heavy armor. |
| **Agility** | **66.0** | Effective climbing, balancing, dropping, running and swimming create strong positional control. |
| **Stamina** | **43.0** | Good low-energy persistence but temperature dependence limits sustained maximal output. |
| **Intelligence** | **45.0** | Territorial signaling, assessment and flexible escape behavior support moderate reptilian tactical competence. |
| **Special** | **70.0** | Autotomy/regrowth and multimodal arboreal-water escape meaningfully alter matchups without inflating physical power. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Sacrificial Tail** — If seized by the tail, a green iguana can autotomize it and later regenerate a replacement, converting a vulnerable appendage into an escape mechanism rather than instant healing.
2. **Canopy-to-Water Escape** — Arboreal climbing, tolerance of substantial drops and strong tail-driven swimming let the iguana shift rapidly between tree, ground and water escape routes.

### Unique traits
1. **Whip-Length Reach** — A muscular tail making up roughly half the animal's total length gives a relatively small lizard unusually long defensive striking reach.
2. **Dewlap Challenge** — Mature males combine enlarged dewlap, jowls, dorsal crest, head-bobbing and body inflation into a visual assessment and intimidation system before physical escalation.

## 8. Expanded profile

### Habitat and range
Green iguanas are native to tropical parts of the Americas, with arboreal populations strongly associated with forest and waterside habitat. They have also established invasive populations outside the native range, notably in Florida. FWC documents established populations across multiple south Florida counties and describes canals as important dispersal corridors.

### Diet and ecology
They are primarily herbivorous, consuming leaves, flowers and fruit. Their plant diet and arboreal habits make them browsers in tropical vegetation. Opportunistic animal material is reported occasionally, but it should not be used to portray the species as a routine predator.

### Social structure
Adults are not cooperative pack fighters. Males are territorial and communicate through posture, head bobs and dewlap displays. Reproductive competition is a major context for male aggression.

### Reproduction and life history
FWC reports females reaching reproductive maturity around **2–4 years**. Females nest in sandy substrates and lay eggs; institutional and secondary biological sources report large clutches, commonly dozens of eggs. There is no prolonged mammalian-style parental defense of offspring after laying.

### Conservation and human interaction
The green iguana is globally widespread, heavily represented in the pet trade, and invasive in several introduced regions. In Florida it is a **Prohibited species** because of ecological and infrastructure impacts. FWC reports burrowing damage to sidewalks, seawalls, foundations and canal banks. In February 2026, FWC reported **5,195 invasive green iguanas removed** during a cold-weather control operation.

### Adaptations
- Long tail for balance, swimming propulsion and defensive whipping.
- Strong claws for arboreal climbing.
- Dewlap and head-bob signaling for social assessment.
- Parietal light/shadow sensory structure.
- Tail autotomy and later regeneration.
- Ectothermic basking physiology.

### Fun facts
- Green iguanas can reach about **2 m total length**, much of it tail.
- Mature males can reach roughly **7–8 kg**, more than twice the typical upper mass cited by FWC for females.
- They are capable swimmers that can propel themselves mainly with the tail.
- A threatened iguana may escape from a tree by dropping toward water rather than fighting.
- The parietal eye is not a normal image-forming eye; it is especially relevant to light and overhead-shadow detection.
- Florida classifies the species as invasive and prohibited, and a 2026 cold event enabled removal of thousands of individuals.

### Concise site-ready summary
A large arboreal lizard of tropical America, the green iguana combines a long whip-like tail, sharp teeth and claws with unusually versatile escape biology. A mature male can approach 7–8 kg and well over 1.5 m total length, but much of that length is tail. Its strongest ABS advantages are maneuverability, intimidation, tail autotomy and the ability to move between canopy, ground and water, not heavyweight physical power.

### Narrative profile
The green iguana looks larger than its mass because so much of its silhouette is tail, crest and display structure. That geometry matters in a fight. The tail gives reach and can be lashed at an approaching threat, while sharp teeth and claws punish an opponent that closes distance. Yet a healthy iguana's preferred strategy is often not to stand and trade blows. It climbs, drops, runs or dives, exploiting a tropical environment that offers vertical and aquatic exits.

Mature males add a social combat layer. Enlarged dewlaps, jowls, crests and head-bob displays advertise before contact, allowing rivals to assess one another. If escalation continues, biting and physical struggle become possible. The species therefore deserves more tactical and special credit than its small absolute mass alone suggests, while still remaining far below serious mammalian predators in Raw Power, Attack and Defense.

### Future structured-field proposals
- `sex`: canonical combat sex.
- `tail_fraction_total_length`: approximate proportion of total length represented by tail.
- `autotomy`: boolean plus regeneration timescale note.
- `locomotion_modes`: arboreal / terrestrial / swimming.
- `thermal_performance_dependency`: ectothermic/high.
- `invasive_regions`: structured introduced-range note.

## 9. Evidence and source ledger

| Source | Direct URL | Supports | Reported finding | Confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web, *Iguana iguana* | https://animaldiversity.org/accounts/Iguana_iguana/ | taxonomy, mass, length, dimorphism, dewlap, parietal eye | 4–8 kg, 7 kg average, 1.75 m average, ~2 m high; males larger | High-moderate; synthesis source |
| Florida Fish and Wildlife Conservation Commission, Green Iguana | https://myfwc.com/wildlifehabitats/profiles/reptiles/lizards/green-iguana/ | sex-specific size, invasive ecology, reproduction, morphology | males >5 ft and up to 17 lb; females usually <=7 lb; mature male jowls/dewlap | High institutional |
| National Geographic, Green Iguana | https://www.nationalgeographic.com/animals/reptiles/facts/green-iguana | lifespan, length/mass context, diet, swimming, tail weapon, autotomy | ~6.6 ft, ~11 lb general profile; 20 y wild; strong jaws, sharp teeth, tail whip and regeneration | Moderate-high institutional; general rather than sex-specific |
| FWC, 2025 prohibited-reptile rule | https://myfwc.com/wildlifehabitats/nonnatives/proposed-rule-change/ | Florida regulatory context | green iguana remains prohibited; rule changes effective Aug. 20, 2025 | High/current |
| FWC, Feb. 4 2026 removal report | https://myfwc.com/news/all-news/green-iguanas-removed/ | current human interaction/invasive management | 5,195 removed during EO 26-03 cold-stun operation | High/current |
| Wikimedia Commons, *Iguana iguana (male resting)* | https://commons.wikimedia.org/wiki/File:Iguana_iguana_(male_resting).jpg | image candidate | exact species, Costa Rica, 2135x2848, CC BY-SA 4.0; filename identifies male | High provenance; adulthood not explicit |
| Wikimedia Commons, Male Green Iguana Belize | https://commons.wikimedia.org/wiki/File:Male_Green_Iguana_Belize.jpg | image alternative | exact male, 2832x3540, CC BY-SA 4.0 | High provenance; adulthood/full-body suitability not simultaneously established |

### Source conflicts and uncertainty
- Institutional sources differ in whether they present averages, upper bounds or broad adult ranges. The canonical 7.0 kg / 175 cm male is representative within ADW values and below FWC's male upper mass.
- No reliable species-specific maximum speed was found, so the legacy 36 km/h value is rejected.
- No defensible bite-pressure PSI measurement was found, so the legacy 100 PSI value is rejected.
- Tail proportion is broadly described as about half total length, but this report does not fabricate a precise individual tail measurement.

## 10. Cross-animal normalization notes

- At 7 kg, green iguana Raw Power and Attack must remain far below Honey Badger (14 kg dedicated mustelid predator), Hyena (75 kg bone-cracking carnivore), Ibex (100 kg horned ungulate), and Hippopotamus (1,800 kg megafauna).
- Its Agility can exceed Ibex in general three-dimensional versatility while remaining well below Hummingbird's near-ceiling aerial control.
- Special is legitimately high because autotomy/regrowth and tree-water escape are unusual mechanisms, but neither should leak into Raw Power or armor.
- Regeneration is a long-term recovery trait, not Wolverine-style fictional instant healing and not an in-fight restoration bonus.
- Tail length should not be mistaken for body mass or Size.

## 11. Mandatory image requirement

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/iguana.png` (not created)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Iguana_iguana_(male_resting).jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/4/47/Iguana_iguana_%28male_resting%29.jpg
- **file_format_verified:** source is JPEG; no final PNG exists
- **alpha_verified:** no
- **full_body_verified:** no. Visual inspection of the available search rendering shows a single real male with most/possibly all anatomy in frame, but vegetation overlaps the body/feet and strict unobscured every-foot plus tail-tip completeness is not strong enough to certify the mandatory standard.
- **adult_verified:** no. The source identifies exact species and the filename identifies male, but adulthood is not explicit.
- **sex_verified_or_unknown:** male, per source filename; adult status unresolved
- **license_status:** CC BY-SA 4.0, reusable with attribution/share-alike
- **notes:** 2135x2848 is adequate resolution and substantially better than a cropped portrait. A second 2832x3540 CC BY-SA 4.0 Belize source explicitly identifies male but does not resolve adulthood/full-body strictness. The well-known featured Commons adult-male image explicitly verifies adulthood but is a head portrait and is therefore rejected for the asset. Current connected GitHub writers are UTF-8 text-only, so no fake PNG is committed.