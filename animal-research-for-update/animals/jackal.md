# Jackal

## 1. Identity and canonical specimen
- **Roster name:** Jackal
- **Resolved taxon:** Black-backed jackal, *Lupulella mesomelas* (Schreber, 1775), formerly *Canis mesomelas*.
- **Status:** Living; IUCN Least Concern.
- **Canonical specimen:** healthy fully mature male, southern/eastern African population, **8.1 kg**. Males are only modestly larger than females, but the male is retained as the canonical fighting specimen because the best large morphometric series reports male mean 8.1 kg versus female mean 7.4 kg.
- **Taxonomic note:** Mammal Diversity Database recognizes *Lupulella mesomelas* and notes the transfer from *Canis* following modern phylogenetic work. Two geographically separated population/subspecies groupings occur in eastern and southern Africa.
- **Variation:** IUCN Canid Specialist Group morphometrics from former Cape Province give male head-body 690-900 mm, tail 270-395 mm, mass 5.9-12.0 kg (n=59 for mass); females 650-850 mm, tail 260-381 mm, mass 6.2-9.9 kg. This is real but modest sexual dimorphism, not a wolf-like size gulf.

## 2. Physical measurements
| Measurement | Representative / range | Evidence and interpretation |
|---|---:|---|
| Mass | **8.1 kg** canonical male; 5.9-12.0 kg male range | IUCN Canid Action Plan table, Stuart 1981, n=59 males. Strongest quantitative basis found. |
| Head-body length | **78.5 cm** canonical; 69-90 cm male range | IUCN action-plan table, n=65 males. |
| Tail length | **32.6 cm** mean; 27-39.5 cm range | IUCN action-plan table, n=70 males. |
| Total length | **111.1 cm** derived mean HB + mean tail | Useful display metric, but derived rather than a directly measured mean total length. |
| Shoulder height | **40.0 cm** canonical | SANBI reports about 400 mm; ADW reports adults about 38 cm. |
| Top speed | **0.0 m/s canonical** | Popular sources give conflicting 32 to 55 km/h figures without a strong species-specific primary measurement. Do not encode false precision. |
| Lifespan | **8.0 years** wild upper/typical control; captive up to ~14 years | ADW reports at most 8 years in wild and up to 14 years captive. |
| Bite force | **0.0 PSI** | No defensible species-specific bite pressure measurement found. Published/compiled canid bite-force indices are not PSI and must not be converted without tooth contact area. |
| Dentition | canid carnassials and canines | Adapted for cutting/shearing flesh; no reliable tooth-length measurement recovered for a representative adult. |
| Coat / armor | dense fur, no true armor | Fur offers weather protection but negligible armor against serious teeth, claws or horns. |

### Canonical factual fields
```text
weight_kg: 8.1
height_cm: 40.0
length_cm: 111.1
speed_mps: 0.0
lifespan_years: 8.0
bite_force_psi: 0.0
```
`length_cm` is total length derived from the strong male head-body and tail means. The report should preserve the component measurements so future migration can switch to head-body length if the production field is redefined.

## 3. Weapons, defenses and combat mechanics
### Weapons
The jackal's main weapon is a fast canid bite delivered with sharp canines and carnassials. Its narrow muzzle and comparatively small body make it effective at seizing small vertebrates, tearing flesh and exploiting vulnerable young ungulates, but it lacks the absolute jaw dimensions and body-driven bite delivery of wolves, hyenas or big cats. Feet and claws contribute traction and scrambling, not a major slashing weapon.

### Offensive mechanics
Black-backed jackals are opportunistic predators and scavengers. They can kill rodents, hares and other small vertebrates and exploit young ungulates. A South African dietary study found wild ungulates under 50 kg, especially springbok and steenbok, contributed 8-47% of consumed biomass depending on season, while mammals of 1-3 kg and rodents were also important. That diet does not prove routine solo killing of adult 50 kg ungulates, so ABS weaponry is not inflated from prey-category biomass.

The animal's practical fighting style is mobile harassment: close quickly, bite exposed tissue, release and reposition. Against much larger animals it is more effective at avoidance, scavenging and opportunism than sustained frontal combat.

### Defense and durability
There is no armor, thick hide, quill system or unusual trauma resistance. Defense comes primarily from awareness, speed, small target profile, evasive footwork and willingness to disengage. Larger African carnivores remain major threats. The black dorsal saddle is visually distinctive but is not treated as combat armor or camouflage strong enough to inflate Defense.

### Locomotion and endurance
Long legs, a light canid build and digitigrade stance support efficient terrestrial travel and quick directional changes over open ground. A defensible species-specific maximum running-speed trial was not found, so `speed_mps` remains 0.0. This missing field does not mean the animal is slow. Agility is scored from morphology and observed ecology rather than a dubious internet maximum.

### Senses
Large mobile ears and canid olfaction are major assets for locating small prey, carrion, mates, rivals and danger. Vision is useful in open terrain and crepuscular/nocturnal activity. Senses materially improve target acquisition and threat avoidance, but no claim of an exceptional roster-wide sensory ceiling is warranted.

### Intelligence and tactics
The species is behaviorally flexible, opportunistic and strongly territorial. Long-term monogamous pairs cooperate in territory defense and parental care, and retained offspring can help rear subsequent young. Diet shifts with land use and seasonal prey availability. This supports good tactical flexibility without treating pair/family cooperation as a multiplier to one individual's physical power.

### Fighting, predation and predator defense
Intraspecific conflict centers on territory, pair bonds, food and social status. The IUCN Canid Specialist Group notes aggressive displacement of side-striped jackals in grassland habitat. Against prey, the jackal uses speed, opportunism and repeated biting. Against stronger predators, escape and spatial judgment are generally safer than direct engagement.

## 4. Environmental strengths and weaknesses
**Strong environments:** open savanna, grassland, scrub, semi-desert, farmland edges and some coastal/desert systems. Open terrain favors hearing, visual scanning and efficient running.

**Limitations:** no heavy armor, low absolute mass, limited reach, and poor prospects in a locked frontal fight against medium-large predators or robust hoofed mammals. Dense environments reduce some open-ground mobility advantages. Serious limb injury sharply degrades its main defense.

### Matchup archetypes
- **Good:** tiny and small terrestrial vertebrates, similarly sized poorly armed animals, opponents vulnerable to repeated bite-and-retreat tactics.
- **Mixed:** similarly sized carnivores with comparable mobility, where bite placement, initiative and stamina matter.
- **Bad:** wolves, hyenas, large cats, great apes, large constrictors once a secure coil is established, heavily armored animals, and large horned/hoofed mammals capable of ending the fight with one clean strike.

## 5. Proposed ABS substats
| Substat | Score | Justification |
|---|---:|---|
| Size | **21.0** | 8.1 kg canonical male is small on a roster spanning insects to megafauna. |
| Raw Power | **25.0** | Functional small-canid strength, but absolute force is far below wolves, hyenas and large predators. |
| Weaponry | **34.0** | Effective canine/carnassial bite with repeatable delivery, but modest jaw and tooth scale. |
| Protection | **14.0** | Fur and ordinary mammalian tissues, no armor. |
| Toughness | **31.0** | Hardy generalist, but no evidence for extraordinary trauma tolerance. |
| Speed | **55.0** | Athletic cursorial canid placement; deliberately moderate because reliable species-specific maximum is unresolved. |
| Maneuverability | **72.0** | Light digitigrade build, rapid terrestrial repositioning and evasive control. |
| Endurance | **66.0** | Efficient ranging canid with sustained foraging ability, below elite persistence specialists. |
| Recovery | **46.0** | Ordinary mammalian recovery, no exceptional regeneration or rapid recovery mechanism. |
| Tactics | **70.0** | Flexible opportunism, territorial behavior and cooperative pair/family behavior. |
| Senses | **76.0** | Strong canid smell/hearing plus large ears and open-ground vigilance. |
| Ferocity | **64.0** | Assertive territorial predator/scavenger, but survival strategy includes prudent avoidance of superior opponents. |
| Abilities | **52.0** | Versatile sensory and ecological toolkit, but no venom, armor, electricity or other extreme mechanism. |

## 6. Proposed headline ratings
- **Attack: 34.0** - dangerous to small prey through fast biting, but 8.1 kg mass sharply caps absolute damage.
- **Defense: 27.0** - evasiveness helps avoid damage, while physical protection itself is low.
- **Agility: 74.0** - light, long-legged, digitigrade and highly mobile on open terrain; not based on a questionable top-speed number.
- **Stamina: 66.0** - strong terrestrial foraging endurance without evidence for an elite persistence ceiling.
- **Intelligence: 68.0** - flexible diet, pair/family social behavior, territorial judgment and adaptable foraging support a high but non-primate/non-cetacean placement.
- **Special: 53.0** - strong generalist sensory/ecological toolkit but few truly exotic matchup-changing mechanisms.

## 7. Exactly two special abilities
1. **Saddleback Pursuit** - efficient digitigrade locomotion, acute hearing/olfaction and rapid bite-and-reposition behavior let the jackal track, close on and repeatedly pressure small terrestrial targets without requiring a frontal grapple.
2. **Opportunist's Switch** - unusually broad, seasonally flexible feeding behavior allows rapid tactical switching among active predation, scavenging and exploitation of vulnerable prey; this is behavioral flexibility, not a fictional combat buff.

## 8. Exactly two unique traits
1. **Black Saddle Signal** - the species' diagnostic black-and-silver dorsal saddle sharply distinguishes it from other African jackals and reflects its specialized pelage pattern.
2. **Pair-Territory Partnership** - long-term monogamous pairs jointly occupy and defend territories, with older offspring sometimes remaining as helpers; this supports communication and social coordination without multiplying solo attack power.

## 9. Ecology and expanded profile
### Habitat and range
Black-backed jackals occur in two separated African population regions, eastern Africa and southern Africa. Mammal Diversity Database lists countries from the Horn/East Africa through southern Africa. They favor open terrain and occupy savanna, grassland, scrub, semi-arid country, agricultural mosaics and even harsh coastal/desert environments.

### Diet
They are opportunistic omnivorous carnivores. Diet includes rodents, hares, birds, reptiles, insects, fruits, carrion and ungulates, especially vulnerable young. Farm studies show sheep can be important seasonally but also demonstrate strong selection for available wild prey.

### Social structure and life history
Long-term monogamous pairs are the core social unit. Both parents provision and protect young. Gestation is about 60-65 days; ADW reports 1-7 young and an average around 3-4. Older offspring can remain associated with the family and help. Sexual maturity is reached around the first year.

### Conservation and human interaction
The species is Least Concern and broadly adaptable. Conflict is substantial where jackals prey on livestock or are treated as rabies vectors. The IUCN Canid Specialist Group notes that broad control efforts often achieve only temporary local reductions. This is an important human-wildlife-conflict species, not a conservation-dependent specialist.

### Adaptations
- Digitigrade cursorial build for efficient terrestrial movement.
- Large ears and strong canid sensory systems for prey/danger detection.
- Broad diet and behavioral plasticity across highly variable environments.
- Social pair bond and cooperative parental investment.

### Genuine fun facts
- Modern mammal taxonomy places the black-backed jackal in *Lupulella*, not *Canis*.
- Its range is split into separated eastern and southern African populations.
- The characteristic saddle is a mixture of black and pale/silvery hairs, not a solid black patch.
- Older offspring may remain with their parents and help rear the next litter.
- It can persist in extremely dry regions, including the Namibian coast, by obtaining substantial water through food.

### Concise site summary
A light, sharp-sensed African canid built around mobility, opportunism and repeated biting. The black-backed jackal is far below wolves and hyenas in absolute power, but its quick footwork, excellent senses, flexible foraging and tactical caution make it a difficult small predator to pin down.

### Narrative profile
The black-backed jackal wins by refusing to behave like a miniature wolf. At roughly eight kilograms, it cannot trade force with the roster's medium and large predators. Its advantage is decision speed: locate food or danger early, exploit an opening, bite, move, and abandon a bad contest before mass becomes decisive. The long legs and digitigrade stance suit open-country travel, while large ears and canid olfaction continuously feed information into that mobile style.

Its ecology reinforces the same pattern. Black-backed jackals switch among small-prey hunting, vulnerable young ungulates, carrion, insects and plant foods as conditions change. Long-term pair bonds and family helpers add coordination in the wild, but ABS treats those behaviors as evidence for tactics and intelligence rather than giving a solitary canonical animal imaginary pack strength. In a neutral one-on-one matchup, the jackal is a clever, evasive small canid with a useful bite, not a heavyweight killer.

## 10. Image requirement audit
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/jackal.png` (not created)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Black-backed_jackal_(Canis_mesomelas_mesomelas)_2.jpg
- `original_photo_url`: https://commons.wikimedia.org/wiki/Special:Redirect/file/Black-backed%20jackal%20(Canis%20mesomelas%20mesomelas)%202.jpg
- `file_format_verified`: source is a JPEG; final PNG absent
- `alpha_verified`: false
- `full_body_verified`: true for the photographed individual in the inspected source presentation: head, torso, four legs/feet and full tail are visible
- `adult_verified`: false; source does not explicitly state adulthood
- `sex_verified_or_unknown`: unknown
- `license_status`: CC BY-SA 4.0, photographer Charles J. Sharp
- `notes`: 4524x3015 real photograph from Etosha National Park. Visual inspection shows an unusually clean standing full-body silhouette with all feet and tail inside frame, making it a strong cutout candidate. However IMAGE_REQUIREMENTS requires adulthood, and the Commons metadata does not explicitly establish age. Do not claim completion. Connected GitHub writers are UTF-8 text-only, so no genuine RGBA PNG can be committed in this run.

## 11. Source ledger
1. **IUCN/SSC Canid Specialist Group, Canids: Foxes, Wolves, Jackals and Dogs, 2004**  
   https://www.canids.org/resources/Canid%20Action%20Plan%202004.pdf  
   Supports Cape Province morphometrics: male HB 785 mm (690-900), tail 326 mm (270-395), mass 8.1 kg (5.9-12.0); female HB 745 mm, tail 316 mm, mass 7.4 kg. Also supports ecology, distribution and management context. **Confidence: high** for the measured regional sample; population variation remains relevant.

2. **Mammal Diversity Database, *Lupulella mesomelas***  
   https://www.mammaldiversity.org/taxon/1005953/  
   Supports accepted modern taxon, transfer from *Canis*, distribution, living status and Least Concern listing. **Confidence: high**.

3. **Animal Diversity Web, *Canis mesomelas***  
   https://animaldiversity.org/accounts/Canis_mesomelas/  
   Supports adult shoulder height around 38 cm, 5-10 kg general range, modest male-biased dimorphism, monogamy, reproduction and lifespan up to ~8 wild/~14 captive. Uses older genus. **Confidence: medium-high**.

4. **SANBI, Black-backed jackal**  
   https://www.sanbi.org/gardens/hantam/wildlife-and-biodiversity-2/black-backed-jackal/  
   Supports ~400 mm shoulder height and mean male/female masses around 8/7 kg, plus pelage morphology. **Confidence: high institutional secondary source**.

5. **Klare et al./African Journal of Ecology, seasonal diet and prey selection**  
   https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-2028.2012.01324.x  
   Supports seasonal sheep biomass 25-48%, wild ungulates <50 kg 8-47%, 1-3 kg mammals 4-16%, rodents 10-14%, and selective use of wild prey. **Confidence: high peer-reviewed**, but farm-specific and not direct proof of solo kill size.

6. **Roberts et al. 2025, Ecology and Evolution, dietary response to land use**  
   https://onlinelibrary.wiley.com/doi/10.1002/ece3.72186  
   Supports continuing evidence for flexible diet and seasonal livestock use. **Confidence: high peer-reviewed**.

7. **Wikimedia Commons, Charles J. Sharp image**  
   https://commons.wikimedia.org/wiki/File:Black-backed_jackal_(Canis_mesomelas_mesomelas)_2.jpg  
   Supports exact southern subspecies identification, Etosha provenance, 4524x3015 resolution and CC BY-SA 4.0 reuse. Visual inspection supports complete-body framing. Adulthood and sex remain unverified. **Confidence: high for provenance/taxon/license; insufficient for mandatory age verification**.

### Conflicts and uncertainty
- Generic web speed claims range widely and lack a strong species-specific measurement protocol. Canonical `speed_mps` is therefore 0.0.
- Older sources use *Canis mesomelas* while current MDD taxonomy uses *Lupulella mesomelas*; this is a nomenclatural update, not a species mismatch.
- Captive lifespan (~14 years) exceeds common wild longevity (~7-8 years). Canonical lifespan is set to 8.0 to represent wild battle-profile biology rather than managed-care maximum.
- No defensible bite PSI was recovered. Canid bite-force quotients/indices cannot be relabeled PSI.

## 12. Cross-animal normalization
- **Versus Honey Badger (14 kg; Attack 42 / Defense 45 / Agility 61):** jackal is lighter, less protected and less formidable in a clinch, so Attack 34 and Defense 27 stay clearly lower; jackal's cursorial control justifies higher Agility.
- **Versus Hyena (75 kg; Attack 61 / Defense 53 / Agility 61):** the mass and jaw-system gap must remain enormous. Jackal cognition/tactics can be respectable without compressing physical combat scores toward hyena.
- **Versus Howler Monkey (7 kg; Attack 27 / Defense 20 / Agility 76):** similar mass, but jackal has more combat-specialized dentition and terrestrial predatory behavior, warranting higher Attack while remaining in a similar agility band.
- **Versus Impala (65 kg; Attack 43 / Defense 31 / Agility 91):** jackal's bite is more directly offensive, but the impala's far greater mass and horn/hoof mechanics prevent jackal from approaching it in absolute raw power. Jackal Agility stays well below the impala's exceptional escape score.
- **Inflation check:** no headline exceeds 74.0. This is intentional. A successful, adaptable predator does not automatically become a high absolute-combat scorer on an ant-to-megafauna roster.

## 13. Future field proposals
- Replace generic speed claims with GPS/IMU or high-speed-video measurements of maximum voluntary and chase velocity in known adults.
- Collect sexed adult bite-force data in Newtons at standardized tooth positions; retain force as Newtons unless contact area is directly measured for pressure.
- Compare maneuverability and sustained travel energetics across open savanna, desert and agricultural populations.
- Resolve a reusable high-resolution image whose metadata explicitly says adult, ideally male, while preserving the complete tail and all four feet for transparent cutout production.
