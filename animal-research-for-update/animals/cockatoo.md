# Cockatoo research report

## 1. Identity and canonical specimen

- **Roster name:** Cockatoo
- **Resolved exact taxon:** Sulphur-crested Cockatoo, *Cacatua galerita* (Latham, 1790), family Cacatuidae.
- **Why this resolution:** the live profile currently gives only family-level `Cacatuidae`, which is too broad for species-level physical facts. For this overhaul, the iconic large sulphur-crested cockatoo is adopted as the stable species represented by the generic roster label. This decision should remain explicit during migration rather than silently treating all cockatoos as biologically interchangeable.
- **Living/extinct:** Living.
- **Canonical combat specimen:** healthy, sexually mature adult male *C. galerita*, approximately 0.8 kg and 50 cm long. Sexes are broadly similar in size and appearance, but the 2021 Sydney bin-opening study found the technically demanding behavior disproportionately in males, plausibly reflecting social dominance and/or size. This is useful behavioral context, not evidence that males are universally larger.
- **Sexual dimorphism:** Australian Museum reports sexes as similar externally; females can be distinguished at close range by a red-brown iris versus the darker brown eye of males. ADW gives a species mass range of 700-950 g and average 800 g, without a sex-specific mass split.
- **Population/subspecies variation:** four subspecies are commonly recognized. ADW notes *C. g. eleonora* and *C. g. triton* average smaller than nominate *C. g. galerita*. Canonical values below are species-representative and should not be read as records for every subspecies.

## 2. Physical measurements

### Mass
- **Representative:** 0.8 kg.
- **Credible range:** 0.7-0.95 kg from ADW.
- **Context:** healthy adult species-level range; nominate birds may be larger than some other subspecies.
- **Confidence:** high for a roster canonical value.

### Length and wingspan
- **Body length:** Australian Museum gives 45-50 cm; ADW gives average 50 cm.
- **Wingspan:** ADW gives average 103 cm.
- **Canonical length:** 50.0 cm.
- **Canonical height:** 0.0 cm. A reliable standardized standing-height measurement was not located, and body length should not be relabeled as height.

### Speed
- **Canonical `speed_mps`: 0.0.** No defensible species-specific measured maximum flight or ground speed was located in this run. The old 36 km/h catalogue value is not retained without provenance. This does not mean the bird is motionless; flight capability and maneuverability are represented editorially in Agility/substats.

### Lifespan
- ADW reports about 40 years average in the wild and a reported wild high of 57 years; Australian Museum notes individuals can live up to about 80 years in captivity.
- **Canonical `lifespan_years`: 40.0**, chosen as the wild average rather than a captive longevity extreme.

### Beak and bite force
- Harrison et al. (Journal of Anatomy, 2025) provide unusually strong species-specific evidence for parrot bite mechanics. Their *C. galerita* anatomical sample (N=3, body mass 720.4 g) yielded a **calculated bite force of 167.3 ± 24.2 N**. The paper also validated its biomechanical approach against in-vivo force-transducer measurements across parrots and found calculated and measured values were not statistically different overall.
- This is force, not pressure. No defensible contact area was provided for conversion to PSI.
- **Canonical `bite_force_psi`: 0.0.** Do not convert 167.3 N to PSI without contact area.
- The hooked bill is the primary close-range weapon and also functions as a manipulator and climbing aid. No defensible canonical bill-tip dimension was found for *C. galerita* in this run, so no invented beak length is supplied.

### Defensive structure
- No armor, shell, thick hide, or specialized trauma-resistant covering. Feathers provide insulation and aerodynamic function, not meaningful armor against larger roster opponents.
- Flight, alertness, flock sentinels, and access to trees are the principal defenses.

## 3. Proposed canonical factual fields

| Field | Proposed value | Rationale / confidence |
|---|---:|---|
| `weight_kg` | **0.8** | ADW average 800 g; range 700-950 g. High confidence. |
| `height_cm` | **0.0** | No standardized adult standing height located. Do not substitute body length. |
| `length_cm` | **50.0** | Australian Museum 45-50 cm; ADW average 50 cm. High confidence. |
| `speed_mps` | **0.0** | No defensible species-specific maximum located. |
| `lifespan_years` | **40.0** | ADW wild average. Captive maxima deliberately excluded. |
| `bite_force_psi` | **0.0** | Species bite force is available in newtons, but PSI requires contact area. |

Additional useful factual field proposals:
- `wingspan_cm`: **103.0** (ADW average).
- `bite_force_n`: **167.3** (calculated species mean, ±24.2 N; preserve as force rather than fake PSI).
- `mass_range_kg`: **0.7-0.95**.
- `length_range_cm`: **45-50**.

## 4. Combat biology

### Weapons and offensive mechanics
The large hooked bill is the meaningful weapon. A 167 N-class bite from a sub-kilogram bird is impressive for its size and is sufficient for hard-seed processing, destructive chewing, gripping, and painful defensive biting, but absolute roster scaling matters: it remains far below the damaging capacity of medium carnivores, great apes, large ungulates, crocodilians, and megafauna. The feet can grip and manipulate while the bill bites, creating a useful three-point climbing/manipulation system, but the feet are not raptorial talons specialized for killing prey.

In a forced close engagement, the best practical sequence is evade/reposition, grip if possible, then deliver repeated hooked-bill bites to exposed tissue. Against tiny opponents the bill is decisive. Against similarly sized lightly protected animals it can cause meaningful injury. Against thick skin, armor, large skulls, or major mass disparities it has poor stopping power.

### Defense and durability
Physical protection is low. The bird's defense is avoidance: powered flight, rapid vertical escape, arboreal access, balance, visual monitoring, loud alarm communication, and social sentinels. ADW specifically describes sentry birds watching while flockmates forage on the ground and giving alarm calls when danger is detected. Once physically seized by a much larger predator, feathers and a lightweight avian skeleton offer little armor.

### Locomotion and maneuverability
Sulphur-crested cockatoos are capable fliers and arboreal climbers, while also foraging extensively on the ground. The bill can assist climbing and object manipulation. Their practical combat mobility is therefore three-dimensional and flexible, especially in trees or built environments. No measured top-speed claim is used as a shortcut for Agility.

### Endurance
ADW reports that birds can travel long distances during daily foraging and return to habitual roost sites. That supports solid everyday endurance, but no species-specific sustained-flight physiology or maximal-exertion dataset was found. Stamina is therefore moderate rather than elite.

### Senses
Vision and hearing are the main battle-relevant senses. The species uses loud acoustic communication over distance and visual crest displays. No evidence was found for an exotic sensory system comparable to echolocation, electroreception, infrared sensing, or exceptional olfaction.

### Intelligence, learning, and tactics
This is the species' standout domain. Klump et al. documented the geographic spread of complex garbage-bin opening in wild Sydney cockatoos through social learning, with local technique variants consistent with cultural transmission. The behavior requires a multi-step sequence involving the bill, feet, balance, and movement along the bin rim. A later study documented a second urban innovation: operating twist-handle drinking fountains. Over 44 days, researchers recorded 525 attempts, and 46% of marked individuals successfully engaged in the behavior; the local tradition had persisted for at least two years. These are unusually strong field demonstrations of innovation, motor planning, persistence, social learning, and behavioral flexibility.

### Fighting, aggression, and predator defense
This species is not a dedicated predator or combat bird. Intraspecific disputes and dominance interactions can involve displacement, threat displays, biting, and loud signaling, but there is no basis for treating ordinary cockatoo aggression as equivalent to predatory killing specialization. Flock vigilance and rapid flight are more important defenses than fighting predators directly.

### Diet and predation behavior
Primarily granivorous/herbivorous, eating seeds, nuts, fruits, blossoms, grain and some insects/insect larvae. It is not a pursuit predator. The bill evolved primarily in a feeding/manipulation system, even though it can be dangerous defensively.

### Environmental strengths
- **Best:** woodland, forest edge, urban/suburban environments, trees, vertical structures, and open air that permit flight and climbing.
- **Good:** ground foraging areas with nearby escape perches.
- **Poor:** confined spaces where flight is denied, underwater environments, and open forced-contact arenas against much larger animals.

### Major weaknesses
- Very low body mass on the full roster scale.
- Little physical armor.
- No venom, talon-based predatory system, or specialized killing strike.
- Bite is dangerous locally but lacks the reach and absolute force of large-animal weapons.
- If flight is neutralized, survivability against larger opponents collapses quickly.

### Matchup archetypes
- **Favorable:** tiny arthropods and very small lightly protected vertebrates that cannot reliably catch an airborne bird.
- **Competitive:** similarly sized non-predatory animals where flight, cognition, grip and repeated bites matter.
- **Unfavorable:** raptors, fast arboreal/avian predators, medium carnivores, robust reptiles, and any large mammal able to force contact.
- **Extremely unfavorable:** large predators, great apes, crocodilians, large ungulates and megafauna. Intelligence does not erase orders-of-magnitude mass and weapon gaps.

## 5. Proposed ABS substats

All scores use the same absolute 0.1-100.0 roster scale as the headline ratings.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **12.0** | Strong for a sub-kilogram parrot but extremely low absolute muscular/mechanical output roster-wide. |
| Weaponry | **27.0** | Hooked bill with species-specific ~167 N calculated bite force is meaningful, but reach and absolute damage remain limited. |
| Ferocity | **43.0** | Assertive, destructive and willing to bite, but not a dedicated killing predator. |
| Protection | **7.0** | Feathers and lightweight body provide little trauma protection. |
| Toughness | **15.0** | Healthy bird can tolerate normal avian stresses, but low mass and lack of armor make major trauma decisive. |
| Maneuverability | **86.0** | Powered flight, arboreal climbing, balance, foot-bill coordination and three-dimensional repositioning. |
| Speed | **66.0** | Capable flying bird, but no defensible maximum-speed measurement; kept below extreme aerial specialists. |
| Endurance | **59.0** | Daily long-distance foraging and roost return support moderate-good endurance, not elite sustained exertion. |
| Recovery | **50.0** | No exceptional regenerative or recovery physiology demonstrated; midpoint reflects ordinary healthy avian recovery. |
| Tactics | **91.0** | Field-demonstrated innovation, multi-step problem solving, social learning and local traditions. |
| Senses | **65.0** | Useful vision/hearing and alarm communication, without a rare sensory modality. |
| Abilities | **74.0** | Flight plus unusually flexible foot-bill manipulation and socially transmitted technical behaviors materially change matchups. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **21.0** | The hooked bill and ~167 N calculated bite can injure, but 0.8 kg body mass imposes a hard absolute ceiling. |
| **Defense** | **13.0** | Excellent avoidance options but almost no armor or size-based damage absorption. |
| **Agility** | **86.0** | Strong three-dimensional mobility, climbing, balance and precise bill-foot coordination; not based on an unsupported speed number. |
| **Stamina** | **59.0** | Long daily foraging movements support solid endurance, but no evidence for extreme sustained output. |
| **Intelligence** | **94.0** | Wild innovation, social transmission, local behavioral traditions and complex multi-step object manipulation are exceptional roster-wide evidence. |
| **Special** | **76.0** | Flight plus highly dexterous bill-foot manipulation and socially learned technical behaviors create unusual matchup flexibility, without double-counting raw cognition as physical power. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Power-Beak Clamp** - the hooked parrot bill is backed by species-specific calculated bite force of 167.3 ± 24.2 N, giving this small bird a credible close-range gripping, tearing and crushing tool without inventing PSI.
2. **Three-Point Acrobatics** - coordinated feet, bill and flight surfaces allow climbing, object manipulation, balance and rapid three-dimensional repositioning in complex environments.

### Unique traits
1. **Urban Technique Culture** - wild populations socially transmit multi-step resource-opening behaviors, with local variants documented in the bin-opening study and a later drinking-fountain tradition.
2. **Sentinel Flock Network** - ground-feeding groups use elevated sentries and loud alarm calls, improving early warning and coordinated escape.

## 8. Expanded profile

### Habitat and geographic range
Native to Australia and New Guinea-region populations, with the species especially familiar across northern and eastern Australia and introduced populations elsewhere. It occupies rainforest, woodland, savanna, parks, gardens, suburbs and cities, demonstrating unusually broad habitat tolerance.

### Diet and ecology
Seeds, nuts, grain, fruits, blossoms and some insects/larvae. Large flocks can become agricultural pests and can damage timber and built structures through persistent chewing. Ground foraging is balanced by arboreal roosting and sentry behavior.

### Social structure
Gregarious, often forming flocks from dozens to hundreds. Large feeding aggregations can split into smaller foraging groups and regroup at communal roosts. Pair bonds are monogamous in standard accounts, with both parents contributing to incubation/chick care.

### Life history
Breeds once annually in seasonal windows that differ between northern and southern populations. Typical clutch is 2-3 eggs, incubation about 27-30 days, fledging around 70 days, and sexual maturity around 3-4 years. Long lifespan creates substantial opportunity for learning and stable social knowledge.

### Conservation
Widely treated as Least Concern and common in much of its range. Local abundance can create conflict with agriculture and urban infrastructure. Conservation status should be checked again at migration time against the current IUCN assessment.

### Major adaptations
- Powerful hooked bill and specialized parrot jaw musculature.
- Zygodactyl feet and precise object handling.
- Powered flight plus climbing.
- Erectable crest for visual signaling.
- Loud long-distance vocal communication.
- High behavioral flexibility in human-modified landscapes.

### Human interaction
The species is famous as a companion bird and equally notorious as an urban/agricultural problem solver. Its ability to chew timber, exploit crops and learn how to access human food infrastructure makes conflict management unusually behavior-dependent.

### Genuine fun facts
- A 2021 field study tracked a complex bin-opening behavior spreading through Sydney-area populations via social learning, with different neighborhoods developing technique variants.
- In marked populations, only a minority mastered bin opening, and successful openers were disproportionately male.
- A second local innovation involved operating twist-handle drinking fountains; researchers recorded 525 attempts over 44 days.
- The species can live for decades, with wild average longevity around 40 years in ADW's account and substantially longer captive records.
- The 2025 Journal of Anatomy study calculated *C. galerita* bite force at 167.3 ± 24.2 N from a three-specimen anatomical sample.
- Their conspicuous yellow crest is not just decoration; crest position is used in visual communication.

### Concise site-ready summary
The sulphur-crested cockatoo is a large, highly intelligent Australian parrot built around flight, a powerful hooked bill, dexterous feet and extraordinary behavioral flexibility. At only about 0.8 kg it is not a high-power fighter on an absolute roster scale, but its aerial maneuverability, strong-for-size bite, social learning and documented urban problem-solving make it a difficult small opponent to corner.

### Rich narrative profile
A sulphur-crested cockatoo wins matchups by refusing to play a heavyweight's game. It has neither armor nor mass, and its bill cannot bridge the force gap to large predators or megafauna. Instead, it operates in three dimensions, climbing with feet and bill, launching into flight, repositioning quickly and using an unusually forceful hooked beak when close contact is unavoidable.

Its defining advantage is behavioral flexibility. Wild Sydney cockatoos have not merely been observed performing clever tricks in captivity. Researchers documented technical foraging behaviors emerging, spreading socially and developing local variants. That matters to ABS because it supports tactical flexibility with field evidence rather than reputation. The same intelligence, however, must not leak into Attack or Defense. A clever 0.8 kg bird remains physically vulnerable if caught.

The result is a sharply specialized profile: low absolute power and protection, elite maneuverability and intelligence, and a strong Special rating for the interaction between flight, manipulation and learned technique. Against tiny or clumsy opponents, that package is formidable. Against a predator that can match its aerial or arboreal mobility, or any much larger animal that forces contact, the mass gap dominates.

### Future structured-field proposals
- `wingspan_cm`
- `bite_force_n` alongside PSI, so force-only studies can be represented honestly
- `locomotion_modes` (flight / climbing / terrestrial)
- `social_learning_evidence`
- `manipulation_mode` (bill + zygodactyl feet)
- `canonical_taxon_resolution_note` for generic roster labels such as Cockatoo

## 9. Mandatory image-quality section

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/cockatoo.png` (not present; do not count as complete)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Cacatua_galerita_2_-_Austin%27s_Ferry.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/4/4a/Cacatua_galerita_2_-_Austin%27s_Ferry.jpg
- `file_format_verified`: source JPEG verified by Commons metadata; final PNG absent
- `alpha_verified`: **No**
- `full_body_verified`: **No**
- `adult_verified`: **No**, source does not explicitly state adulthood
- `sex_verified_or_unknown`: **Unknown**; sex must not be inferred from appearance
- `license_status`: **CC BY-SA 3.0**, photographer JJ Harrison
- `notes`: Original is 2000x2500. Direct visual inspection confirms head, crest, torso, folded wings and tail are inside frame, but the perch/foliage obscures the feet enough that the strict all-feet requirement is not satisfied, and adulthood is not explicit. This is therefore only a high-quality candidate, not a verified full-body source and not a completed asset. A lower-resolution 800x640 exact-species flight photo was also found, but it fails the preferred resolution target. Continue searching for an explicit adult, preferably male, with both feet or fully spread flight anatomy clearly visible. Current connected GitHub writer accepts UTF-8 text only, so no PNG binary was fabricated.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Confidence / caveat |
|---|---|---|---|
| Australian Museum, Sulphur-crested Cockatoo | https://australian.museum/learn/animals/birds/sulphur-crested-cockatoo/ | Taxon; 45-50 cm size; sex eye-color distinction; iconic Australian species; long captive longevity | High institutional source. |
| Animal Diversity Web, *Cacatua galerita* | https://animaldiversity.org/accounts/Cacatua_galerita/ | 700-950 g, 800 g average; 50 cm average length; 103 cm wingspan; habitat, diet, sociality, sentries, reproduction, 40-year wild average, subspecies variation | Good synthesis; older account, so conservation should be refreshed at migration. |
| Harrison et al., Journal of Anatomy (2025) | https://onlinelibrary.wiley.com/doi/10.1111/joa.14144 | Parrot bite-force methodology; *C. galerita* N=3, 720.4 g anatomical sample, calculated bite force 167.3 ± 24.2 N; validation against in-vivo measurements | High, peer-reviewed. Force is not PSI. Small species sample. |
| Klump et al., Science 2021, DOI landing | https://doi.org/10.1126/science.abe7808 | Innovation and geographic spread of complex bin-opening culture via social learning | High, peer-reviewed. |
| ABC summary of Klump et al. | https://www.abc.net.au/news/science/2021-07-23/cockatoos-open-wheelie-bin-lid-social-learning-suburbs/100306786 | Accessible study context, 44 suburbs, technique variants, complex bill-foot sequence | Strong secondary science reporting. |
| PubMed, drinking-fountain innovation | https://pubmed.ncbi.nlm.nih.gov/40460862/ | 525 attempts over 44 days; 41% attempt success; 46% of marked individuals successfully engaged; behavior persisted at least two years | High, peer-reviewed indexed study. |
| Wikimedia Commons, JJ Harrison image | https://commons.wikimedia.org/wiki/File:Cacatua_galerita_2_-_Austin%27s_Ferry.jpg | Exact-species source, photographer, 2000x2500 dimensions, CC BY-SA 3.0 | High provenance; adulthood/sex and strict feet visibility unresolved. |

## 11. Confidence, conflicts and uncertainty

- **Taxon resolution:** moderate-high editorial confidence. The production profile currently says only Cacatuidae, so adopting *C. galerita* is a necessary explicit standardization decision rather than a claim that the old data already identified this species.
- **Mass/length:** high confidence for species-representative values.
- **Speed:** unresolved. Keep 0.0 rather than recycling the old 36 km/h placeholder.
- **Bite:** high confidence that ~167 N is a defensible species-specific calculated force from peer-reviewed work; low/none for PSI because pressure requires contact area.
- **Longevity:** moderate confidence for 40-year wild average; longevity datasets can be biased by recovery/recording and captive extremes.
- **Combat ratings:** editorial, evidence-informed and intentionally absolute rather than pound-for-pound.

## 12. Cross-animal normalization notes

- **Versus Chameleon:** Cockatoo is roughly an order of magnitude heavier and has a measured/calculated strong parrot bite, so Attack 21.0 is above Chameleon's 12.0. Chameleon retains higher specialization from ballistic tongue/visual systems, while Cockatoo dominates Intelligence and aerial maneuverability.
- **Versus Capuchin Monkey:** the 4 kg capuchin has much more absolute body power and grappling mass, so Cockatoo stays below it in Attack despite the strong bill. Cockatoo's flight justifies comparable or slightly greater maneuverability, while both are cognition standouts.
- **Versus Caracal and Clouded Leopard:** the felids exceed Cockatoo by more than an order of magnitude in mass and are dedicated vertebrate predators. Cockatoo must remain far below them in Attack/Defense despite elite cognition and agility.
- **Versus Cheetah:** Cockatoo does not approach the cheetah's directly measured high-speed locomotor ceiling. Its Agility is elite for three-dimensional control but remains below Cheetah's 97.0.
- **Versus Chimpanzee:** Cockatoo's Intelligence 94.0 is intentionally very high due to unusually strong field evidence for innovation and culture, but remains just below Chimpanzee 96.0 because chimpanzees show broader tool, social, hunting and tactical repertoires. Physical scores remain vastly separated.
- **Inflation check:** no physical score is raised merely because the bird is clever or because 167 N is impressive relative to body mass. Raw Power 12.0 and Defense 13.0 preserve the sub-kilogram absolute scale.

## Verification checklist

- Exact taxon and adult specimen standard: yes, with generic-label resolution explicitly documented.
- Physical dimensions/ranges and uncertainty: yes.
- Canonical factual fields: yes.
- No fabricated PSI: yes.
- Combat mechanics, defenses, locomotion, endurance, senses, tactics, behavior, environment, weaknesses and matchups: yes.
- Current twelve ABS substats: yes, one decimal each.
- Six headline ratings: yes, one decimal each.
- **Exactly two** named special abilities: yes.
- **Exactly two** unique traits: yes.
- Expanded ecology/life history/conservation/adaptations/human interaction/fun facts: yes.
- Source ledger with direct URLs and caveats: yes.
- Image section follows `IMAGE_REQUIREMENTS.md`: yes; no false PNG completion.
- Cross-roster normalization: yes.
