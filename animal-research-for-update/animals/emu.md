# Emu research report

## 1. Identity and canonical specimen

- **Roster name:** Emu
- **Exact taxon:** *Dromaius novaehollandiae* (Latham, 1790), the living mainland Australian emu.
- **Living:** Yes.
- **Canonical combat specimen:** healthy mature **female**, **57.5 kg**, **175.0 cm standing height**, approximately **150.0 cm bill-to-tail body length**.
- **Why female:** females are the larger sex in several sources and a 2016 adult skeletal study found final female body mass 25% higher than male mass. Smithsonian gives males 50-55 kg and females about 5 kg heavier. Female emus also compete over mates, so the larger female is a defensible fighting-sex choice.
- **Variation:** institutional mass ranges vary substantially. San Diego Zoo gives 30-55 kg overall, National Zoo gives 50-55 kg males with females about 5 kg heavier, and ADW gives 36-40 kg while describing females as slightly larger. Season, population, captive/wild context and methodology plausibly explain part of the spread. The canonical 57.5 kg female is a robust representative based on Smithsonian sex-specific values, not the species maximum.

## 2. Physical measurements

### Mass and dimensions
Smithsonian reports average height about 1.75 m, males 50-55 kg and females about 5 kg heavier. San Diego Zoo gives 1.5-1.9 m and 30-55 kg. Australian Museum gives an adult standing range of about 1.6-1.9 m. Utica Zoo gives 4.6-5.4 ft (about 140-165 cm) length.

Recommended values:
- `weight_kg`: **57.5**
- `height_cm`: **175.0**
- `length_cm`: **150.0**

The mass has moderate confidence because institutional values conflict. Height is high confidence. Length is moderate confidence because emu sources more often report standing height than bill-to-tail length.

### Speed and locomotion
ADW reports speeds up to **13.4 m/s** and an approximately 3 m stride. National Zoo and Aquarium gives a sprint near **50 km/h**, equivalent to **13.9 m/s**. Australian zoo material commonly gives 48-50 km/h. The canonical field uses **13.9 m/s** as a strong institutional maximum, while recognizing that this is not an instrumented individual performance record comparable to the cheetah field dataset.

Emus are obligate terrestrial cursorial birds. Peer-reviewed morphology describes reduced toes, unusually developed pelvic-limb musculature and a four-bellied gastrocnemius, adaptations for sustained high-speed running. A 2015 ontogenetic study found positive allometry in many pelvic-limb muscles and force-sustaining tendons as birds grew. Walking-model work found hip contact force around 5.5 times body weight, illustrating substantial routine limb loading without converting that value into kick force.

### Lifespan
Sources conflict. Smithsonian gives roughly **5-10 years** in the wild and longer in human care. San Diego Zoo and National Geographic give **10-20 years** wild, with San Diego reporting up to 35 years in zoos. Because wild longevity is inconsistent among institutions, **`lifespan_years = 10.0`** is a conservative representative value, not a maximum. Confidence: moderate-low.

### Bite force
The beak can peck but the primary defensive weapon is the leg/foot. No defensible emu bite-pressure measurement was found. **`bite_force_psi = 0.0`** means unverified, not no bite.

### Natural weapons
- Long, powerful hindlimbs deliver forward/outward defensive kicks.
- Each foot has three forward-facing toes with claws. These are useful contact weapons but are not the dagger-like inner claw of a cassowary.
- The beak is a secondary close-range pecking tool.
- No reliable species-specific peak kick force was found, so qualitative accounts of severe kicks are not converted into invented newtons or PSI.

### Defenses
The shaggy double-shafted plumage provides solar insulation and some superficial cushioning, but the emu has no armor. Height, reach, powerful legs, alertness and the ability to flee are its main defenses. Long exposed legs remain vulnerable to trauma.

## 3. Proposed canonical factual fields

| Field | Proposed value | Confidence | Rationale |
|---|---:|---|---|
| `weight_kg` | 57.5 | Moderate | Robust mature female from Smithsonian sex-specific range; females larger |
| `height_cm` | 175.0 | High | Repeated institutional average/range around 1.5-1.9 m |
| `length_cm` | 150.0 | Moderate | Representative within zoo 140-165 cm bill-to-tail range |
| `speed_mps` | 13.9 | Moderate-high | 50 km/h institutional sprint value; consistent with ADW 13.4 m/s |
| `lifespan_years` | 10.0 | Moderate-low | Conservative representative amid 5-10 vs 10-20 y wild-source conflict |
| `bite_force_psi` | 0.0 | High that PSI is unverified | No defensible pressure measurement |

## 4. Combat biology

### Primary offense
The emu's combat system is leg-dominant. It keeps its torso elevated above the opponent and uses long, muscular hindlimbs to kick while maintaining distance. Zoo and ADW accounts explicitly identify powerful kicks as predator defense and describe the potential for serious injury. This is meaningful offense from a roughly 58 kg bird, but it is far below the absolute impact available to ostrich-sized or mammalian megafauna.

### Secondary offense
Pecking is secondary. The beak lacks the crushing or tearing specialization of a large carnivore or raptor. Body shoves and trampling can matter against much smaller targets but are not treated as separate high-grade weapons.

### Defense and toughness
The bird's best defense is not passive protection. It uses height, vigilance, acceleration and running ability to avoid contact. Plumage protects from sun and superficial abrasion but is not armor. The neck and lower legs are relatively exposed, and a heavy grappler that gets secure contact can negate much of the emu's advantage.

### Locomotion and maneuverability
Emus are specialized runners. Peer-reviewed anatomy identifies strong cursorial adaptations in the pelvic limb, including a large four-bellied gastrocnemius and substantial hindlimb muscle investment. They can make long strides and turn while running, but a tall biped has less low-speed lateral freedom than a small quadruped. Agility is therefore high, not near the cheetah/dragonfly ceiling.

### Endurance and stamina
This is a genuine strength. The Australian Museum reports movements of **15-25 km per day** under variable resource conditions. A 2026 Ecosphere synthesis notes records of up to **500 km in a year** and up to **25 km in a day**, while peer-reviewed anatomy specifically describes the emu as capable of sustained high-speed running. Male incubation also demonstrates substantial fasting tolerance, but that low-output fasting is not double-counted as athletic endurance.

### Senses
Emus rely strongly on vision and hearing for predator detection in open country. Their auditory brainstem has experimentally demonstrated interaural timing circuitry for sound localization. No evidence supports placing them with extreme visual raptors or specialized nocturnal auditory hunters.

### Intelligence and tactics
The species tracks rainfall and food availability over large landscapes, adjusts diet geographically, performs extended paternal care and shows flexible social aggregation around resources. These behaviors support competent environmental decision-making. There is little evidence for the flexible tool use or abstract problem solving that would justify high primate/corvid intelligence.

### Fighting and reproductive behavior
Female emus can fight over access to males. Australian Museum notes female dominance during pair formation, while the incubating male becomes aggressive toward other emus, including the mate. Males defend eggs and chicks. This demonstrates real intraspecific aggression and defensive commitment without implying constant aggression outside breeding contexts.

### Predation and predator defense
Emus are omnivorous rather than active large-prey hunters. They eat fruits, seeds, shoots, flowers, insects and small animals. Against predators, running is preferred, with kicking as the close-range fallback. Dingoes are a major natural predator.

### Environmental strengths
- Open woodland, savanna and grassland provide room for acceleration and long-distance movement.
- Hot, sunny environments suit the insulating plumage and Australian physiological package.
- Firm open ground maximizes leg reach and running escape.
- Water is not a barrier in the simple sense because emus can swim.

### Environmental weaknesses
- Dense clutter restricts long-stride running and kick spacing.
- Slippery or unstable footing reduces the value of bipedal leg power.
- Confined spaces allow grapplers to bypass its preferred distance.
- Long neck and legs are comparatively exposed to bites or tackles.
- Despite arid-range mobility, Smithsonian notes that emus require regular access to fresh water.

### Matchup archetypes
**Good:** smaller terrestrial opponents that must enter kicking range, fragile pursuers, and similarly sized animals unable to control the long legs.

**Bad:** large grappling carnivores, heavily armored animals, opponents capable of taking the legs out from under the bird, and substantially larger ratites or megafauna.

## 5. Proposed ABS substats

All values use the absolute 225-animal roster scale.

| Substat | Score | Justification |
|---|---:|---|
| Size | 35.0 | About 57.5 kg, large bird but far below megafauna |
| Raw Power | 39.0 | Powerful cursorial hindlimbs, moderate absolute mass |
| Weaponry | 43.0 | Strong kick plus three clawed toes, but no cassowary-style dagger claw or carnivore jaws |
| Ferocity | 44.0 | Females compete and nesting males defend vigorously, but avoidance is common outside conflict |
| Protection | 21.0 | Plumage and height offer limited passive protection; no armor |
| Toughness | 34.0 | Robust runner, but exposed neck/legs and light avian construction limit trauma tolerance |
| Maneuverability | 70.0 | Fast biped with good running control, below elite small/feline turners |
| Speed | 75.0 | Approximately 13.4-13.9 m/s is fast on the roster but well below cheetah |
| Endurance | 82.0 | Sustained cursorial anatomy plus 15-25 km/day resource-tracking movements |
| Recovery | 50.0 | Strong general physiological resilience without exceptional regeneration |
| Tactics | 47.0 | Effective avoidance, resource tracking, threat response and parental defense |
| Senses | 58.0 | Strong vision/hearing and demonstrated auditory timing circuitry, not a sensory extreme |
| Abilities | 52.0 | Cursorial legs, heat-adapted plumage and booming communication are useful but not exotic weapons |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **44.0** | A roughly 58 kg bird can deliver dangerous kicks, but lacks the mass and specialized killing weapons of larger ratites/predators |
| **Defense** | **30.0** | Escape and reach help, but passive protection is weak and long limbs remain vulnerable |
| **Agility** | **72.0** | Strong running control and acceleration without confusing 50 km/h speed with near-ceiling maneuverability |
| **Stamina** | **83.0** | Sustained-running anatomy and long daily movements justify very strong endurance, below extreme migration/diving anchors |
| **Intelligence** | **49.0** | Flexible ranging, parental care and environmental tracking, with limited evidence for advanced general cognition |
| **Special** | **54.0** | Distinctive cursorial and thermal adaptations matter, but no venom, electricity, armor or similarly matchup-transforming mechanism |

### Normalization notes
- Emu Attack is below the 150 kg Donkey (48.0) because of the mass gap, despite dangerous kicks.
- Emu Agility is above Donkey (58.0) but far below Cheetah (97.0) and Dragonfly (98.0).
- Emu Stamina is above Donkey (77.0) due to stronger direct evidence for sustained cursorial movement, but below Emperor Penguin (95.0), whose diving/fasting endurance is an extreme specialization.
- Emu Defense remains below Donkey because its passive protection and body mass are lower.
- No proportional-strength bonus is applied to the hindlimbs.

## 7. Exactly two special abilities and two unique traits

### Special abilities
1. **Runner's Counterkick**: long, heavily muscled hindlimbs can convert a defensive retreat or close approach into a forceful clawed-foot kick while keeping the torso relatively distant.
2. **Nomad Engine**: cursorial pelvic-limb anatomy supports sustained terrestrial travel as the bird tracks patchy food and rainfall across large Australian landscapes.

### Unique traits
1. **Four-Bellied Calf**: the emu's gastrocnemius has four muscle bellies rather than the usual avian three, a peer-reviewed specialization associated with cursorial locomotion.
2. **Double-Shaft Suncoat**: shaggy double-shafted feathers reduce direct solar heat load and help the bird function in exposed Australian habitats.

## 8. Expanded profile

### Habitat and range
The emu is endemic to Australia and widespread across much of the mainland. It occupies sclerophyll forest, savanna woodland, grassland, shrubland and sand plains, while being less common in rainforest, dense settlement and the driest regions without adequate resources.

### Diet and ecology
Emus are generalist omnivores. CSIRO-era dietary research found fruits, seeds, flowers, insects and green herbage, with seasonal shifts in the dominant food sources. A 2013 study recovered seeds of 29 plant species from 221 scats. A 2006 study found 77 plant species in 112 droppings, at least 68 with viable seeds, demonstrating an important long-distance seed-dispersal role. A 2026 stable-isotope analysis found geographically flexible diets with an overall preference for C3 plants and adaptation to local availability.

### Social structure
Emus are often solitary or in pairs but can aggregate where food or movement conditions concentrate birds. These temporary mobs should not be interpreted as coordinated combat groups. Breeding relationships are behaviorally complex, with pair bonds, extra-pair mating and sequential mating documented.

### Reproduction and life history
Australian Museum gives breeding mainly April-June, 5-15 eggs and about 55 days incubation. The male performs incubation and later chick care. During incubation he may go without feeding or drinking and lose substantial body mass. Young may breed around 20 months. Female dominance during pair formation reverses once the male begins incubation, when he becomes highly defensive around the nest.

### Conservation
Major contemporary sources classify the species as **Least Concern** overall, but local populations can decline or become isolated. Habitat clearing, fencing, vehicle strikes, drought/fire and regional land-use changes can matter even when the continental species remains widespread.

### Adaptations
The emu's body is a terrestrial-running package: long legs, reduced toes, large pelvic-limb muscles, specialized gastrocnemius anatomy, long force-sustaining tendons, reduced wings and insulating shaggy plumage. The bird also combines mobility with dietary flexibility, allowing it to track irregular Australian resources.

### Human interaction
Emus have long cultural and ecological importance in Australia. They may conflict with agriculture by entering crops and crossing fences, and they are also farmed for meat, oil, leather and other products. The famous 1932 Western Australian military culling episode should not be confused with evidence of unusual combat intelligence or bullet resistance.

### Genuine fun facts
- Emus are Australia's tallest native birds and the second-largest living birds by height after ostriches.
- They have three forward-facing toes and no hind toe.
- Peer-reviewed anatomy identifies a unique four-bellied gastrocnemius among birds.
- They can swim despite being specialized terrestrial runners.
- Male emus incubate the eggs and care for the chicks.
- Female emus are generally larger than males and can compete aggressively for mates.
- Their booming/drumming calls can carry over long distances.
- Emus can move roughly 15-25 km in a day when tracking food and water.
- They are important long-distance seed dispersers across Australian landscapes.

### Concise site summary
Australia's largest native bird is a fast, long-legged endurance runner whose main weapon is a powerful clawed-foot kick. A large female can approach 60 kg and sprint around 50 km/h, but the emu's real advantage is sustained terrestrial mobility rather than armor or predator-grade jaws.

### Rich narrative profile
The emu is best understood as a large cursorial bird, not as a scaled-down ostrich or cassowary. Its hindlimbs dominate both movement and defense. Peer-reviewed anatomy shows unusually heavy investment in the pelvic-limb system, including a four-bellied gastrocnemius and developmental increases in force-generating muscle and tendon capacity. In open country, those legs let an emu cover substantial daily distances, sprint away from danger, and punish an opponent that closes carelessly.

That specialization has limits. At roughly 57.5 kg, the canonical female is formidable relative to many birds but not large on the full ABS roster. She has no armor, no crushing jaw, no venom and no cassowary-like dagger claw. The neck and lower legs remain exposed, and a strong grappler that gets inside kicking range can turn the bird's long-limbed geometry against it. Accordingly, the profile gives the emu high Stamina and strong Agility, moderate Attack, and only modest Defense and Special.

Ecologically, the same mobility that helps in a matchup shapes the species' Australian role. Emus track rainfall and seasonal foods over large areas and carry seeds across fragmented landscapes. Their diet is flexible enough to shift geographically with plant availability. During breeding, sex roles are unusual: larger females compete for mates, while males perform the prolonged incubation and chick-defense phase. The result is a species whose battle-relevant biology is grounded in leg power, distance movement, vigilance and behavioral flexibility rather than exaggerated folklore.

### Future structured-field proposals
- `canonical_sex`
- `standing_height_cm`
- `daily_movement_km_range`
- `primary_weapon_type`
- `toe_count`
- `cursorial_specialist`
- `seed_disperser`
- `male_only_incubation`
- `field_confidence_by_measurement`

## 9. Mandatory image section

- `image_status`: **FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING**
- `png_repo_path`: `animal-research-for-update/images/emu.png` **not created**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Dromaius_novaehollandiae_(44507693192).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/6/6b/Dromaius_novaehollandiae_%2844507693192%29.jpg
- `file_format_verified`: source is a real JPEG photograph, 5472x3648, verified by Commons metadata; final PNG absent
- `alpha_verified`: no, no cutout exists
- `full_body_verified`: **yes**, original image visually inspected; head, torso, both complete legs/feet and posterior body/tail region are inside frame with no anatomy clipped
- `adult_verified`: **yes by plumage/morphology**, bird has adult shaggy grey-brown plumage and lacks the striped juvenile pattern described by Australian Museum; source page itself does not give an age
- `sex_verified_or_unknown`: **unknown**, no sex is asserted from appearance
- `license_status`: **CC BY 2.0**, photographer Donald Hobern; Flickr license reviewed by Commons
- `notes`: Wild exact-species photograph from Ikara-Flinders National Park, South Australia. The source is strong for anatomy, resolution, natural condition and reuse. Sex is unknown, so it is not proven to be the canonical female, but IMAGE_REQUIREMENTS allows sex to remain genuinely unconfirmed. Binary processing is blocked because connected GitHub write actions accept UTF-8 text only. Do not count this as a completed image until a faithful RGBA cutout is visually inspected and the real PNG binary is committed.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding/context | Confidence / caveat |
|---|---|---|---|---|
| Smithsonian National Zoo | https://nationalzoo.si.edu/animals/emu | sex-specific mass, height, lifespan, ecology | 1.75 m average; males 50-55 kg, females ~5 kg heavier; 5-10 y wild; long-distance resource tracking | High institutional; lifespan conflicts with other zoos |
| San Diego Zoo | https://animals.sandiegozoo.org/animals/emu | size, maturity, lifespan, swimming | 1.5-1.9 m, 30-55 kg, 10-20 y wild, 2-3 y maturity | High institutional; lifespan conflict noted |
| Australian Museum | https://australian.museum/learn/animals/birds/emu/ | adult morphology, height, range, reproduction, daily movement | adult 1.6-1.9 m; 15-25 km/day; male incubation; female dominance in pair formation | High institutional |
| Animal Diversity Web | https://animaldiversity.org/accounts/Dromaius_novaehollandiae/ | speed, mass, reproduction, behavior | up to 13.4 m/s; 36-40 kg; female larger; male incubation/care | Moderate-high synthesis; some values differ from Smithsonian |
| National Zoo & Aquarium Australia | https://www.nationalzoo.com.au/emu | sprint speed, size, reproduction | 50 km/h; 30-60 kg; 1.5-1.9 m; male loses substantial mass incubating | High institutional for general values, not instrumented speed trial |
| Patak & Baldwin, Journal of Morphology | https://pubmed.ncbi.nlm.nih.gov/9768501/ | cursorial hindlimb anatomy | reduced toes, high pelvic-limb muscle investment, four-bellied gastrocnemius | High, peer reviewed |
| Lamas et al., PeerJ/PubMed | https://pubmed.ncbi.nlm.nih.gov/25551028/ | ontogenetic limb mechanics | n=17, 3.6-42 kg; positive allometry in many muscles/tendons | High, peer reviewed |
| Goetz et al., Journal of Biomechanics | https://pubmed.ncbi.nlm.nih.gov/18206892/ | walking loads | modeled maximum hip contact force ~5.5 body weights in two emus | High for study, tiny sample; not kick force |
| Lin et al., JEB 2024 | https://doi.org/10.1242/jeb.247519 | muscle dynamics | ~30 kg emus; high extensor activation/force in sit-to-walk transitions | High, peer reviewed; not direct combat test |
| MacLeod et al., J Comparative Neurology | https://doi.org/10.1002/cne.20862 | hearing localization physiology | emu brainstem has interaural timing/delay-line circuitry | High, peer reviewed |
| Dunstan et al., Emu | https://doi.org/10.1071/MU12061 | diet/seed dispersal | 29 plant species from 221 scats; generalist seed disperser | High, peer reviewed |
| Calviño-Cancela et al., Ecography | https://doi.org/10.1111/j.0906-7590.2006.04677.x | long-distance seed dispersal | 77 plant species in 112 droppings; at least 68 with viable seeds | High, peer reviewed |
| Ryeland et al., Ecosphere 2026 | https://doi.org/10.1002/ecs2.70687 | geographic diet flexibility/movement context | adaptable diet; records up to 500 km/year and 25 km/day cited | High, recent peer reviewed; movement values derive earlier studies |
| Wikimedia Commons / Donald Hobern | https://commons.wikimedia.org/wiki/File:Dromaius_novaehollandiae_(44507693192).jpg | image provenance | exact species, 5472x3648, CC BY 2.0, wild South Australia | High for identity/license/full-body visual check; sex unknown |

### Conflicts and uncertainty
1. **Mass:** ADW's 36-40 kg range is much lower than Smithsonian's sex-specific 50-55 kg males plus ~5 kg females and other zoo 30-60 kg ranges. Canonical mass follows the stronger sex-specific fighting-specimen logic rather than averaging incompatible populations.
2. **Lifespan:** reputable institutions disagree between roughly 5-10 and 10-20 wild years. The canonical 10.0 is intentionally conservative and should remain moderate-low confidence.
3. **Speed:** 48-50 km/h is repeated institutionally and ADW gives 13.4 m/s, but no modern free-ranging instrumented maximum comparable to cheetah GPS work was located. Treat 13.9 m/s as a practical institutional top-speed field, not a laboratory ceiling.
4. **Kick force:** descriptions agree that kicks are dangerous, but no defensible peak-force measurement was found. No invented force or PSI appears in this report.

## 11. Cross-animal calibration notes

The emu occupies an intermediate terrestrial combat tier. It is much larger and more dangerous than small birds, but its roughly 58 kg body remains below the 150 kg Donkey and far below Elk or megafauna. Its kick is a credible weapon, but raw leg specialization does not erase that mass gap. Stamina is the strongest headline category because both anatomy and movement ecology support sustained terrestrial travel. Agility is strong but kept far below Cheetah because top speed and maneuverability are separate. Special is only moderate because cursorial anatomy and thermal plumage are distinctive adaptations, not a venom/electric/camouflage mechanism capable of bypassing large mass differences.

The current live placeholders were not used as anchors. This report independently recommends **Attack 44.0 / Defense 30.0 / Agility 72.0 / Stamina 83.0 / Intelligence 49.0 / Special 54.0**.