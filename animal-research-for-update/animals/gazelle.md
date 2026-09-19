# Gazelle

## 1. Identity and canonical specimen

- **Common name:** Gazelle
- **Canonical taxon for this staging report:** Dorcas gazelle, *Gazella dorcas* (Linnaeus, 1758)
- **Why this taxon:** the live roster uses the generic common name “Gazelle” rather than an exact species. A generic gazelle cannot support defensible species-level measurements, so this report resolves the slot to the Dorcas gazelle, a well-studied true *Gazella* species. This taxonomic decision must remain explicit if production migration is later approved.
- **Living/extinct:** living.
- **Canonical combat specimen:** healthy mature **male**, 16.5 kg. Males are the larger and more heavily horned sex and defend territories during the breeding season.
- **Sexual dimorphism:** ADW/Mammalian Species-derived data give adult males about 16.5 kg and females about 12.6 kg. Male horns are about 250–280 mm with 20–24 rings; female horns are smaller and straighter, about 170–190 mm with 16–18 rings.
- **Population variation:** substantial geographic variation occurs in body mass, coat color, horn curvature and dimensions. A 2022 Sudanese morphometric study found a mean mass of only 12.25 kg in its sample, while older Niger and Chad reports cited means near 19–20 kg. This report therefore uses the 16.5 kg adult-male value as a representative male, not a universal species mean or record.

## 2. Physical measurements

### Mass
ADW reports adult males averaging **16.5 kg**, females about **12.6 kg**, and a general range of 14–18 kg. A 2022 *Scientific Reports* morphometric paper measured Sudanese Dorcas gazelles at a mean **12.25 kg** and reviewed older geographic values including about 16 kg, 19 kg and 20 kg. These differences are retained as real population/sample variation.

**Canonical mass: 16.5 kg**, representing the larger fighting sex without using an exceptional animal.

### Height and length
Institutional sources including SeaWorld and Marwell give **55–65 cm shoulder height** and **90–110 cm head-body length**. The 2022 morphometric review cites older specimen data with mean head-body length around 95.5 cm and male ranges of 89.0–101.4 cm.

**Canonical height: 60.0 cm at shoulder.**

**Canonical length: 95.5 cm head-body length.** Tail length is additional and population-dependent, so it is not silently folded into the schema field.

### Speed and locomotion
Numerous tertiary pages repeat 65, 80 or even 96 km/h maximum-speed claims, but this run did not locate a primary or strong institutional measurement establishing a species-specific top speed under defined conditions. The animal is unquestionably a fast cursorial bovid, but unsupported precision would violate the staging rules.

**Canonical `speed_mps`: 0.0 pending defensible species-specific measurement.** Speed is therefore represented qualitatively in combat analysis and not fabricated from repeated web claims.

### Lifespan
ADW reports captivity up to 15 years and cites demographic values around 17.1 years in captivity and 12.5 years in the wild. SeaWorld reports up to 17 years observed in zoos; Marwell gives up to 12 years. Captive pathology research across gazelles found sex and species differences in survival and should not be treated as a clean wild maximum.

**Canonical lifespan: 12.5 years**, used as the available wild demographic value, with 15–17+ years possible under managed care.

### Horns and other weapons
Both sexes carry horns, but males have the stronger combat set. ADW reports male horns **25–28 cm** long with **20–24 annular rings**, versus female horns around 17–19 cm. The horns curve outward and then inward/forward and provide the main offensive weapon in male rivalry. Hooves can contribute to close-range kicking or trampling but are primarily locomotor structures.

### Bite force
No credible species-specific bite-pressure measurement was found. Dorcas gazelles are browsing herbivores without a specialized predatory bite.

**Canonical `bite_force_psi`: 0.0.** This means “no defensible PSI value,” not literally zero jaw force.

### Defensive structures
There is no armor, shell or unusually thick hide. Defense comes from early detection, rapid acceleration/evasion, long limbs, stotting/signaling, group vigilance, and the ability to disengage rather than absorb attacks. The horns can deter a close pursuer but should not be double-counted as structural protection.

## 3. Proposed canonical factual fields

| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **16.5** | Representative adult male from ADW/Mammalian Species synthesis |
| `height_cm` | **60.0** | Midpoint of strong institutional 55–65 cm shoulder-height range |
| `length_cm` | **95.5** | Published mean head-body length summarized in 2022 morphometric review |
| `speed_mps` | **0.0** | No defensible species-specific measured maximum located |
| `lifespan_years` | **12.5** | Available wild demographic value; captive longevity can exceed 15 years |
| `bite_force_psi` | **0.0** | No defensible species-specific PSI measurement |

## 4. Combat biology

### Primary and secondary weapons
The principal weapon is the male's pair of 25–28 cm ringed horns. They provide reach for frontal hooking, fencing and thrusting during territorial conflict. The narrow head and mobile neck allow directional horn use, but the weapon system is attached to a lightweight 16.5 kg body and cannot be calibrated like the horns of a large antelope, buffalo or bovine. Hooves and body checks are secondary tools.

### Offensive mechanics
A Dorcas gazelle is optimized to escape predators, not kill them. Against a similarly sized rival, a male can face, threaten and engage with horns. Against a predator, practical survival usually depends on creating distance. Horns are dangerous at close range but limited by low absolute mass and modest muscular force compared with medium and large mammalian combatants.

### Defense and durability
Structural defense is low. There is no armor and the long, slender limbs are vulnerable to trauma. The animal instead uses vigilance, rapid evasive movement and open-ground visibility. This distinction matters for ABS: evasion raises Agility and Senses, not Protection.

### Locomotion and maneuverability
The long-legged, light-bodied build is strongly cursorial. Dorcas gazelles can change activity period with heat and human pressure, move between concentrated food patches, and use bouncing stotting leaps when threatened. Their low mass and narrow frame support fast redirection and acceleration. Exact maximum speed remains unresolved rather than inferred from general gazelle reputation.

### Endurance
Wild Dorcas gazelles operate in hot, dry landscapes and can make long movements between feeding areas. A 2023 camera study in Tunisia estimated minimum convex polygon areas of about **2,062 ha** for a frequently detected male-female pair and **1,527 ha** for another solitary male, showing large-scale space use. This is not a direct endurance test, but it supports meaningful routine mobility.

Desert endurance should not be exaggerated into dehydration invulnerability. A classic controlled *Nature* experiment found animals on dry food without water progressively lost weight; under summer conditions of roughly 35–45°C they could not survive more than about five days without water, and two animals died after six days with 24% body-mass loss. Succulent plants can greatly reduce drinking needs in nature, but “never needs water” is too absolute.

### Senses
Keen eyesight is the primary anti-predator sense identified by ADW, supported by acoustic alarm calls and chemical/social signaling. Open desert and semi-desert terrain rewards early visual detection. Hearing and smell are useful but no evidence supports an extraordinary specialized sensory mechanism.

### Intelligence and tactics
Behavior is flexible at a practical ungulate level. Activity shifts toward dawn/dusk or night under extreme heat or human pressure. Males defend and mark territories during breeding periods, while social grouping changes with resource severity. Foraging behavior also changes seasonally, including digging for lily bulbs and concentrating feeding where profitable plants are dense. This is useful behavioral flexibility, but not high-order problem solving comparable with primates, corvids or advanced social carnivores.

### Fighting behavior
Breeding males are territorial and use horned displays/contests over access to females and resources. The male's larger mass and horns justify the canonical-sex choice. Conflict should still be viewed as intraspecific bovid rivalry rather than evidence of generalized predatory ferocity.

### Predator defense
ADW lists historical predators including cheetahs, lions, leopards, servals, caracals, wolves and hyenas, with humans and some mesopredators remaining important threats in parts of the range. Anti-predator behavior includes keen visual scanning, alarm calls, tail twitching, skin shivering and stotting. The key survival sequence is detect, signal, accelerate and evade.

### Environmental strengths
- Excellent locomotor efficiency in open arid and semi-arid terrain.
- Behavioral timing shifts reduce heat exposure and human/predator risk.
- Succulent browse can supply much of required water.
- Small body and long legs support rapid evasive changes.
- Horns give adult males a credible deterrent against similarly sized opponents.

### Environmental limitations
- Low absolute mass means poor collision, grappling and damage tolerance against large opponents.
- Little structural protection once caught.
- Deep mud, dense obstacles or terrain that prevents acceleration erodes its main defensive advantage.
- Extreme dry-food water deprivation is physiologically dangerous despite desert specialization.

### Major weaknesses
Low absolute mass, slender limbs, limited trauma tolerance, lack of armor, modest offensive reach beyond the horns, and dependence on space to exploit mobility.

### Matchup archetypes
**Favorable:** similarly sized or smaller animals that cannot match its mobility and must approach the horn arc; slow opponents that cannot force sustained close contact.

**Unfavorable:** medium and large carnivores able to complete an ambush or grapple, heavily built ungulates that can absorb or overpower horn contact, and confined-arena opponents that remove escape distance.

## 5. Proposed ABS substats

All scores are absolute across the 225-animal roster and were assigned independently of legacy placeholders.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **25.0** | Athletic 16.5 kg male, but low absolute muscular and collision force |
| Weaponry | **35.0** | 25–28 cm male horns are meaningful piercing/hooking tools, limited by small body mass |
| Ferocity | **40.0** | Territorial male rivalry is real, but predator avoidance dominates survival behavior |
| Protection | **15.0** | Little structural protection beyond hide and skeletal frame |
| Toughness | **28.0** | Desert-hardy physiology but slender limbs and low mass provide limited trauma tolerance |
| Maneuverability | **89.0** | Light cursorial build, evasive running and stotting make rapid repositioning a major strength |
| Speed | **86.0** | Qualitatively an elite runner, conservatively scored because a defensible measured species maximum was not established |
| Endurance | **73.0** | Large space use, desert travel and heat-adapted activity support strong sustained mobility without implying pursuit-athlete extremes |
| Recovery | **55.0** | Solid mammalian recovery and resource flexibility, without evidence for exceptional regeneration or trauma recovery |
| Tactics | **59.0** | Territorial behavior, flexible grouping/activity timing and adaptive foraging are useful but not cognitively complex |
| Senses | **74.0** | Keen visual predator detection plus alarm/social channels are highly useful in open terrain |
| Abilities | **62.0** | Stotting, desert water economy and flexible activity timing materially improve survival but are not direct superweapons |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **32.0** | Male horns can injure similar-sized opponents, but low mass sharply caps absolute damage |
| **Defense** | **22.0** | Survival depends on avoidance rather than armor or damage absorption |
| **Agility** | **90.0** | Evasion, acceleration, balance and light cursorial control are the core combat advantage |
| **Stamina** | **73.0** | Strong desert travel and sustained activity, distinct from simple heat tolerance |
| **Intelligence** | **58.0** | Flexible activity, territorial and foraging behavior without advanced problem-solving evidence |
| **Special** | **64.0** | Stotting/alert signaling and desert water-economy adaptations alter survival matchups but do not directly amplify damage |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Stotting Signal** — high bouncing leaps, tail movements and alarm signaling advertise predator detection and can coordinate escape, making a surprise follow-up harder once the gazelle has identified danger.
2. **Desert Water Budget** — succulent browse and heat-avoidance behavior sharply reduce dependence on frequent drinking, allowing useful performance across arid landscapes, while controlled deprivation experiments show this is not unlimited dehydration resistance.

### Unique traits
1. **Lyre-Horn Fencer** — mature males carry strongly curved, annulated 25–28 cm horns suited to frontal rivalry and close deterrence.
2. **Heat-Shift Schedule** — activity can shift from daytime toward crepuscular or nocturnal periods as heat or human pressure increases, reducing exposure to environmental and predation risk.

## 8. Expanded profile

### Habitat and geographic range
Dorcas gazelles occupy arid and semi-arid northern Africa and adjoining southwestern Palearctic areas. ADW records savannas, semi-deserts, dune fields, consolidated dunes and wadis. Modern zoo/conservation summaries emphasize the Saharan belt from Morocco eastward to Egypt and additional regional populations. Exact range boundaries and subspecies treatments vary among taxonomic sources.

### Diet and ecology
The species browses leaves, flowers and pods of *Acacia* and consumes fruits, leaves, stems, seeds, roots and bulbs depending on season and locality. Negev research documents concentrated foraging on *Pancratium sickenbergeri*, including digging for bulbs in summer and using fresh leaves after winter rains. Dorcas gazelles also disperse seeds, including *Acacia*.

### Social structure
Social organization changes with environmental severity. Animals may occur in pairs under harsh conditions, family groups with one or two males and several females/young when resources permit, and bachelor groups. Breeding males defend territories and use dung middens as scent/visual markers.

### Reproduction and life history
Gestation is roughly six months, usually producing one fawn. Wild females generally begin reproducing around two years in ADW's synthesis, although captive reports vary. Newborns are precocial, with fur and open eyes, and initially hide while the mother forages. Weaning occurs around three months in institutional accounts.

### Conservation
The Dorcas gazelle is treated as **Vulnerable** in the IUCN assessment cited by major zoological institutions, with populations declining from hunting/poaching, habitat degradation, agriculture, overgrazing and drought. Protected areas and managed breeding programs remain important. Some institutional pages report differing global abundance estimates, so this report does not promote a single current population number without a fresh range-wide assessment.

### Major adaptations
- Long, light cursorial limbs for rapid escape.
- Male-biased horn size for territorial rivalry.
- Seasonal and climatic shifts in activity timing.
- Ability to obtain substantial water from succulent plants.
- Flexible browsing/digging behavior in resource-poor deserts.
- Visual vigilance and conspicuous stotting/alarm behavior.

### Human interaction
Humans have historically hunted Dorcas gazelles for meat and continue to affect them through poaching, motorized hunting, livestock competition, habitat conversion and fragmentation. Conversely, protected areas and zoological breeding programs maintain conservation populations and support reintroduction/recovery efforts.

### Genuine fun facts
- Male horns are typically about 25–28 cm long and can carry 20–24 annular rings.
- Dorcas gazelles can shift toward nocturnal activity when heat or human pressure becomes severe.
- They may stand on the hind legs to reach browse and dig bulbs from desert soil after seasonal changes.
- Their stotting display combines bouncing leaps with other visual signals after a predator is detected.
- A classic water-deprivation experiment showed that their desert reputation has limits: dry food without water caused severe mass loss and summer mortality.
- A 2023 Tunisian camera study found individual Dorcas gazelles using areas exceeding 1,500–2,000 hectares by minimum-convex-polygon estimates.

### Concise site-ready summary
The Dorcas gazelle is a lightweight desert escape specialist. A representative mature male weighs about 16.5 kg and carries 25–28 cm curved horns, but its real battle advantage is evasive mobility rather than raw force. Keen visual detection, stotting signals, flexible activity timing and desert water economy help it survive open, harsh terrain where a caught gazelle has little armor to fall back on.

### Narrative profile
A Dorcas gazelle wins by refusing the kind of fight that favors heavier animals. Its body is built around low mass, long limbs, balance and rapid escape. The male's curved horns are legitimate weapons and matter greatly against another gazelle, yet the absolute-scale ABS system cannot treat a 16.5 kg horned antelope like a buffalo or elk. Once a much larger predator closes and secures contact, the gazelle's lack of armor becomes decisive.

Its strongest defensive layer exists before impact. Open-country eyesight, alarm behavior and stotting help convert early detection into distance. Flexible activity schedules add another layer: in extreme heat or heavy human pressure, Dorcas gazelles can shift activity into cooler or darker periods. These behaviors belong in Agility, Senses, Tactics and Special rather than being mislabeled as physical Defense.

Desert physiology also needs careful calibration. Popular summaries sometimes say Dorcas gazelles never need to drink, but controlled work showed that animals maintained on dry food without water lost mass steadily and failed rapidly under extreme summer heat. The biologically grounded conclusion is stronger and more interesting: succulent browse can provide much of their water budget, and behavior minimizes water/heat stress, but they are not magically dehydration-proof.

## 9. Image requirement

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/gazelle.png` **(not created)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Gazelle_dorcas_dans_le_parc_national_de_Bouhedma_-_tunisie.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/1/14/Gazelle_dorcas_dans_le_parc_national_de_Bouhedma_-_tunisie.jpg
- `file_format_verified`: source is a real JPEG photograph; final PNG does not exist
- `alpha_verified`: **No**
- `full_body_verified`: **No**. Search-result visual inspection shows a single complete-looking animal in frame, but strict adulthood and every distal hoof/body edge were not certified at original resolution in this run.
- `adult_verified`: **No**
- `sex_verified_or_unknown`: **Unknown**
- `license_status`: **CC BY-SA 4.0**, reusable with attribution/share-alike compliance
- `notes`: Exact *Gazella dorcas*, wild in Bouhedma National Park, Tunisia, 6000×4000. A separate Flickr candidate explicitly identifies an adult male and visually shows excellent whole-body framing, but it is All Rights Reserved and therefore was not selected for redistribution. Current GitHub write actions are UTF-8 text-only, so no PNG binary or transparency is claimed.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding | Context / confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web, *Gazella dorcas* | https://animaldiversity.org/accounts/Gazella_dorcas/ | taxonomy, mass, dimorphism, horns, behavior, diet, predators, reproduction, longevity | males 16.5 kg; females 12.6 kg; male horns 250–280 mm; flexible activity/sociality | **High-moderate** synthesis based partly on Mammalian Species and primary ecology; page is older |
| Mahgoub et al., *Scientific Reports* 2022 | https://www.nature.com/articles/s41598-022-20156-0 | morphometrics and geographic variation | Sudanese sample mean 12.25 kg; literature review gives 16–20 kg regional means, ~95.5 cm head-body and geographic horn variation | **High** peer-reviewed; sample differs from canonical population/sex structure |
| SeaWorld/United Parks Dorcas gazelle facts | https://seaworld.org/animals/facts/mammals/dorcas-gazelle/ | dimensions, longevity, conservation context | 55–65 cm shoulder, 90–110 cm body, 15–20 kg, up to 17 years managed | **Moderate-high** zoological institution; not primary morphometrics |
| Marwell Zoo Dorcas gazelle | https://www.marwell.org.uk/animals/dorcas-gazelle/ | dimensions, ecology, threats, life history | 55–65 cm shoulder, 90–110 cm body, 15–20 kg, up to 12 years | **Moderate-high** institutional |
| Ghobrial & Cloudsley-Thompson, *Nature* 1966 | https://www.nature.com/articles/212306a0 | dehydration limits | dry-food/water-deprivation animals lost 14–17% before weakness; summer survival about five days; two died after six days at 24% loss | **High** controlled experiment, old and small experimental context; directly contradicts overbroad “never drinks” wording |
| Cloudsley-Thompson & Ghobrial, *Nature* 1965 | https://www.nature.com/articles/2071313b0 | water-economy research context | experimental investigation of desert water relations | **High** primary research preview |
| Meliane et al., *Journal of Wildlife Management* 2023 | https://wildlife.onlinelibrary.wiley.com/doi/10.1002/jwmg.22408 | wild activity and space use | summer nocturnality, winter diurnality; Dorcas MCPs ~2,062 ha pair and 1,527 ha solitary male | **High** peer-reviewed field study; very small individually identified sample |
| UCSD Comparative Placentation | https://perinataldiscovery.ucsd.edu/comparative-placentation/species-index/mammalia/order-artiodactyla/dorcas-gazelle/index.html | reproduction/longevity context | adult ~15 kg; gestation 164–174 days in cited literature; longevity >17 years managed | **Moderate-high** academic synthesis |
| Commons image page | https://commons.wikimedia.org/wiki/File:Gazelle_dorcas_dans_le_parc_national_de_Bouhedma_-_tunisie.jpg | image taxon, provenance, reuse | exact species in Bouhedma NP; 6000×4000; CC BY-SA 4.0 | **High** provenance/license; adulthood/sex not established |
| Flickr Rosa Gamboias adult male | https://www.flickr.com/photos/rgamboias/53086827022/ | image comparison only | explicitly described adult male *G. dorcas* in Ezuz, Israel; excellent full-body framing in search visual | **High** for photographer caption, but **All Rights Reserved**, so do not redistribute |

### Evidence conflicts and uncertainty
1. **Generic roster name:** “Gazelle” is not a species. This report explicitly resolves it to *Gazella dorcas* for staging; migration should preserve that decision or revise the roster label first.
2. **Mass:** population and sample means differ materially, from ~12.25 kg in a Sudanese study to 19–20 kg in older regional reports. Canonical 16.5 kg is an adult-male representative, not a global average.
3. **Speed:** 65, 80 and 96 km/h claims circulate widely, but a defensible species-specific measurement was not verified. `speed_mps` stays 0.0.
4. **Water independence:** institutional summaries often say the species can live without drinking, while controlled dry-food deprivation demonstrates clear physiological limits. The report therefore describes plant-derived water economy rather than literal independence from water.
5. **Image:** reusable high-resolution exact-species source exists, but strict adulthood/sex/full-body certification is not complete. The explicit-adult male Flickr source cannot be redistributed under its current license.

## 11. Cross-animal normalization notes

- At 16.5 kg, Gazelle belongs near the recently researched Dingo (18 kg), Dhole (18 kg) and Coyote (15 kg) in absolute body scale, but it lacks their predatory jaws and grappling behavior. Therefore **Attack 32.0** remains below Coyote 38.0, Dingo 40.0 and Dhole 42.0 despite the gazelle's horns.
- **Defense 22.0** is close to similarly sized canids but for different reasons: the gazelle has less close-contact toughness and no armor, while its superior avoidance belongs under Agility rather than Defense.
- **Agility 90.0** can exceed the canids because the category rewards acceleration, evasion, turning and control rather than raw force. It remains slightly below the Cougar control at 92.0 and below tiny aerial/gliding specialists where three-dimensional maneuverability is exceptional.
- **Stamina 73.0** is strong but below Dingo 81.0 and Dhole 86.0 because desert persistence and range use are not evidence for equivalent sustained pursuit performance.
- Raw Power and Attack deliberately avoid proportional-strength leakage. A 16.5 kg horned gazelle cannot be scored like Elk (320 kg, Attack 62.0) simply because both use cranial weapons.
- Special is moderate rather than elite. Desert water economy and stotting are useful, but neither has the matchup-changing lethality of Gaboon Viper venom or Electric Eel discharge.

## Final verification

- Representative healthy adult and fighting sex selected: **yes**
- Dimorphism/population variation documented: **yes**
- Canonical factual fields supplied with uncertainty: **yes**
- Unsupported PSI avoided: **yes**
- Speed/agility separated: **yes**
- Absolute roster calibration used: **yes**
- Exactly two special abilities: **yes**
- Exactly two unique traits: **yes**
- Six one-decimal headline ratings: **yes**
- Current ABS-style substats justified: **yes**
- Habitat/range/diet/ecology/social/life history/conservation/adaptations/human interaction: **yes**
- Fun facts, concise summary, narrative profile, future structured proposal context, source ledger and conflicts: **yes**
- Image status truthful under `IMAGE_REQUIREMENTS.md`: **yes**
- Production data/site/live images changed: **no**
