# Ocelot (*Leopardus pardalis*)

## 1. Identity and canonical specimen
- **Common name:** Ocelot
- **Scientific name:** *Leopardus pardalis* (Linnaeus, 1758)
- **Taxon represented:** living Neotropical felid, family Felidae. The roster name is treated as *L. pardalis*, not margay, oncilla/tiger cat, or another spotted *Leopardus*.
- **Canonical combat specimen:** healthy prime mature **male**, representative rather than record-sized, **13.0 kg**, about **90.0 cm head-body length** plus roughly **35 cm tail**. Males are materially larger than females, so the male is the appropriate fighting-sex baseline.
- **Sexual dimorphism:** ADW reports 8.5-16 kg and 65-97 cm and explicitly notes males are considerably larger than females. South Texas work also shows sex-specific space use, with males expanding home ranges during reproductive periods.
- **Population variation:** body size, coat tone, prey use, density, home-range size and habitat use vary substantially across the species' enormous range. A Brazilian Amazon synthesis describes a broader 6.6-18.6 kg species range. The canonical 13 kg male intentionally avoids using 16-18.6 kg upper-end animals as normal.

## 2. Physical measurements and morphology

### Mass
- ADW: **8.5-16 kg** species range, males considerably larger.
- Brazilian Amazon review: **6.6-18.6 kg** across literature/populations.
- STRI metadata: roughly **9-14 kg average scale**.
- **Canonical:** **13.0 kg**, a defensible mature-male representative inside overlapping sources, not a record.

### Length and height
- ADW: **65-97 cm** length. Its text treats the ocelot as the largest *Leopardus* and notes relatively large paws, with forepaws broader than hind paws.
- USFWS: body may reach about **4 ft including tail**.
- STRI metadata gives body length about **550-1000 mm**.
- **Canonical `length_cm`: 90.0 cm head-body.** Tail is tracked separately in narrative rather than silently folded into the schema field.
- **Canonical `height_cm`: 45.0 cm shoulder, low confidence.** Reliable sources recovered in this run emphasize mass and body length more than shoulder height; this value should be field-verified before production migration.

### Speed
- No primary or strong agency source recovered a defensible species-specific physiological top running speed. The legacy 36 km/h value is not accepted as evidence.
- **Canonical `speed_mps`: 0.0 pending defensible measurement.** This means unknown/unverified in this research layer, not that an ocelot cannot run.

### Lifespan
- ADW: **7-10 years wild**, oldest known captive **21.5 years**, captive average cited there **20.3 years**.
- STRI metadata: **8-11 years**.
- **Canonical `lifespan_years`: 10.0**, representing the upper ordinary wild scale rather than captive longevity.

### Bite force and weapons
- No defensible *L. pardalis*-specific bite-pressure measurement was found. The legacy site's 100 psi placeholder is rejected.
- **Canonical `bite_force_psi`: 0.0** pending a direct measurement or defensible pressure estimate with contact area.
- Primary weapons are felid canines/carnassials, powerful jaws, retractile claws, forelimb grappling and hindlimb kicking/raking. No species-specific canine or claw dimension strong enough for a canonical numeric weapon field was recovered in this run.
- Dental formula reported by ADW totals **30 teeth**.

### Defensive structure
Ocelots have no armor, shell or unusually thick hide. Defense comes from compact felid musculoskeletal toughness, evasiveness, dense-cover use, climbing ability, concealment and avoidance. Their patterned coat provides strong visual crypsis in broken forest light, but camouflage is not physical armor.

## 3. Proposed canonical factual fields
| Field | Proposed value | Confidence | Basis |
|---|---:|---|---|
| `weight_kg` | **13.0** | Moderate-high | Representative mature male inside ADW and broader literature ranges |
| `height_cm` | **45.0** | Low | Approximate shoulder scale; needs stronger direct measurement before migration |
| `length_cm` | **90.0** | Moderate-high | Representative head-body length within ADW/STRI ranges |
| `speed_mps` | **0.0** | High that evidence is insufficient | No defensible species-specific maximum recovered |
| `lifespan_years` | **10.0** | Moderate-high | Wild 7-10 y ADW; STRI 8-11 y |
| `bite_force_psi` | **0.0** | High that evidence is insufficient | No reliable species-specific pressure measurement recovered |

## 4. Combat biology

### Offensive mechanics
The ocelot is a compact ambush felid. It closes distance under cover, seizes with the forelimbs and claws, and uses the jaws for a killing bite. Its practical prey record matters more than unsupported bite-force numbers. Atlantic Forest scat work found mammals dominating the diet, with medium-sized 1-15 kg prey accounting for 84.9% of consumed items in that study and even evidence of larger prey such as brocket deer. Other populations can be dominated by much smaller rodents, showing real ecological plasticity rather than a fixed prey-size rule.

### Locomotion and maneuverability
ADW describes ocelots as adept climbers, jumpers and swimmers. The Brazilian Amazon review calls them semi-arboreal and excellent climbers. This creates excellent three-dimensional repositioning in forest, scrub and riparian cover. Their relatively large paws and broad forepaws help traction and grappling. No unverified running-speed number is used to inflate Agility.

### Endurance
ADW reports activity for **more than 12 hours/day**, with daily travel about **1.8-6.7 km**, males traveling nearly twice as far as females. This supports good routine endurance for a stalking mesopredator, but not cursorial endurance comparable to long-distance canids or migratory specialists.

### Senses
ADW describes keen smell and vision, acute binocular vision adapted for night hunting, plus chemical communication and scent marking. South Texas GPS/accelerometer research independently found strongly nocturnal movement, with peak movement rates at night.

### Intelligence and tactics
Ocelots are solitary rather than cooperative pack hunters, but their hunting ecology requires stealth, route choice, prey tracking, ambush timing, cover use and spatial memory. Camera-trap research on Barro Colorado Island treats ocelots as the principal mammalian predator there and tests evidence that they dynamically track prey. They also behaviorally partition space and time around competitors and larger predators. This is capable individual tactical behavior, not evidence for primate-like cognition.

### Hunting and predation behavior
Diet varies by ecosystem. Studies document rodents, birds, reptiles, agoutis, sloths, armadillos, opossums, coatis, primates and deer-sized prey signals. The species is primarily nocturnal/crepuscular and uses dense vegetation extensively. It is an ambush/stalk predator rather than a pursuit specialist.

### Intraspecific fighting and social behavior
Ocelots are generally solitary and territorial. Male home ranges are larger and can overlap several females, while male-male overlap is limited in classic summaries. The combat model should therefore treat the canonical animal as a solo fighter, not grant pack bonuses.

### Predator defense
The ocelot's best defense against larger carnivores is avoidance, concealment and escape into structurally complex cover. A 2024 Behavioral Ecology model specifically examined jaguar intraguild predation and found forest structure/canopy refuge important to modeled coexistence. This is not proof that an ocelot can physically repel a jaguar. In an exposed forced fight, the mass gap is decisive.

### Environmental advantages
- Dense tropical/subtropical forest, thornscrub, riparian vegetation and broken cover strongly favor stealth and crypsis.
- Trees add escape and attack geometry unavailable to many terrestrial opponents.
- Nocturnal conditions favor its sensory suite and activity schedule.

### Environmental disadvantages
- Open ground removes much of its concealment advantage.
- Deep water is traversable because the species can swim, but it is not an aquatic combat specialist.
- Against much larger felids/canids or heavily armored opponents, its claws and bite have limited absolute stopping power.

### Major weaknesses
Small absolute mass, no armor, limited reach compared with large carnivores, and a close-contact kill method. Grappling an opponent much heavier than itself exposes the ocelot to crushing, bites, horns or blunt-force counters.

### Matchup archetypes
- **Strong against:** smaller terrestrial vertebrates, fragile similarly sized prey, animals vulnerable to stealth and a fast close grapple.
- **Competitive against:** similarly sized small carnivores where terrain and first contact matter.
- **Weak against:** large felids, wolves and other substantially heavier carnivores, large ungulates, armored reptiles, and opponents whose reach or mass prevents safe clinching.

## 5. Proposed ABS substats
All ratings use the absolute 225-animal scale and are independent of the legacy placeholders.

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **23.0** | 13 kg is substantial among small cats but tiny beside large carnivores and megafauna |
| Raw Power | **29.0** | Strong for a 13 kg felid, but absolute muscular force remains low roster-wide |
| Weaponry | **39.0** | Functional canines, carnassials and retractile claws with multiple attack surfaces |
| Ferocity | **50.0** | Efficient predator and territorial carnivore, without evidence justifying extreme aggression |
| Protection | **17.0** | Fur/hide and ordinary felid structure, no armor |
| Toughness | **31.0** | Compact carnivore robustness, still vulnerable to major trauma from larger animals |
| Maneuverability | **88.0** | Excellent climbing, jumping, close-body control and cover navigation |
| Speed | **66.0** | Clearly fast-moving felid morphology, but numerical maximum is unverified, so score remains conservative |
| Endurance | **64.0** | >12 h/day activity and kilometers of routine travel, not specialized distance running |
| Recovery | **55.0** | General mammalian/felid recovery; no exceptional species-specific regeneration or fatigue evidence |
| Tactics | **76.0** | Stealth, ambush, prey tracking, spatial avoidance and terrain use |
| Senses | **84.0** | Acute nocturnal binocular vision plus strong olfaction and chemical awareness |
| Abilities | **69.0** | Crypsis plus three-dimensional forest locomotion meaningfully alter matchups without becoming magical bonuses |

## 6. Proposed six headline ABS ratings
| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **38.0** | Real felid killing package, but 13 kg absolute scale sharply limits damage versus roster heavyweights |
| **Defense** | **27.0** | Evasion and cover use are useful, physical protection is low |
| **Agility** | **88.0** | Elite close maneuverability, climbing, jumping and terrain control without equating top speed to agility |
| **Stamina** | **64.0** | Sustained nightly activity and travel support good endurance, not elite cursorial stamina |
| **Intelligence** | **72.0** | Flexible solitary hunting, tracking, spatial memory and predator avoidance, below highly manipulative/social cognition specialists |
| **Special** | **72.0** | Camouflage and arboreal/terrestrial versatility are strong matchup modifiers but not rare physiological superweapons |

## 7. Exactly two special abilities and two unique traits

### Special abilities
1. **Rosette Shadowbreak** - disruptive rosettes and habitat-matched pelage reduce visual detection in dense, broken-light vegetation, improving stalking and first-contact positioning.
2. **Canopy Escape Vector** - excellent climbing, jumping and semi-arboreal movement let the ocelot rapidly change vertical level for ambush, disengagement or refuge where suitable structure exists.

### Unique traits
1. **Big-Footed Grappler** - relatively large paws, with broader forepaws than hind paws, support traction, prey control and close felid grappling.
2. **Night-Shift Mesopredator** - strongly nocturnal movement, acute binocular night vision and olfaction combine with long nightly activity to make darkness its best operating window.

## 8. Expanded profile

### Habitat and geographic range
Ocelots range from the southern United States through Mexico and Central America into much of South America. They occupy tropical rainforest, dry forest, thornscrub, savanna/grassland edges, marsh and other habitats, but dense vegetative cover is a recurring requirement. Amazon research emphasizes their broad habitat distribution while USFWS documents the tiny endangered U.S. population in south Texas.

### Diet and ecology
The species is a generalist carnivore with strong mammalian emphasis. Diet changes geographically with prey availability and competitor context. Rodents can dominate many populations, while Atlantic Forest and Panama studies document substantial use of medium-sized mammals. Ocelots function as important mesopredators and can themselves be killed by jaguars.

### Social structure and life history
Generally solitary and territorial, with polygynous mating. ADW reports gestation **79-85 days**, typically **1-3 kittens**, weaning around six weeks, independence around one year, and female sexual maturity around 18-22 months. Males may be physiologically mature earlier but average spermatogenic/territorial maturity is later; a histological study explicitly sampled four adult males.

### Conservation
The species is globally widespread but locally threatened by habitat loss/fragmentation, road mortality, illegal trade and retaliatory killing. USFWS lists the ocelot as endangered in the United States and notes the historically tiny south-Texas population. A 2022 multi-site study found densities around 10-13 individuals/100 km² at three Colombian/Brazilian landscapes and emphasized the conservation value of private and unprotected habitat.

### Adaptations
Disruptive spotted coat, large paws, nocturnal binocular vision, strong olfaction, retractile claws, arboreal competence and behavioral flexibility allow one medium-small felid to exploit rainforest, scrub and wetland mosaics.

### Human interaction
Historically exploited heavily for the fur trade. Current pressures include habitat conversion, roads, illegal trade and livestock conflict. In Texas, conservation is unusually intensive because the U.S. population remains highly restricted.

### Fun facts
- Ocelot facial markings are individually distinctive enough to help identify individuals in field studies.
- Males routinely range farther than females, and modern South Texas telemetry shows male home ranges can expand during reproductive periods.
- The species is capable of climbing, jumping and swimming despite being primarily terrestrial.
- Camera-trap studies can recognize individual ocelots from coat patterns, enabling long-term activity and density estimates without capture.
- Diet is more flexible than the common "small rodent specialist" shorthand: some populations consume substantial medium-sized prey.

### Concise site-ready summary
A muscular 13 kg nocturnal ambush cat, the ocelot combines claws, canines, exceptional close maneuverability, camouflage and strong night senses. It is dangerous to similarly sized prey but remains far below large felids and megafauna in absolute attack and durability.

### Rich narrative profile
The ocelot is built around getting the first clean contact rather than winning a prolonged frontal collision. A patterned coat breaks up its outline in dense vegetation while acute night vision and smell support prey detection after dark. Once close, it uses the classic small-felid package: acceleration, forepaw control, retractile claws and a killing bite. Its broad paws and climbing skill make trunks, branches, tangled vegetation and uneven ground part of its combat geometry.

That versatility should not be mistaken for heavyweight power. At roughly 13 kg, even a large representative male has limited absolute momentum, bite scale and trauma tolerance compared with jaguars, cougars, wolves or large ungulates. The most biologically faithful ABS profile therefore gives the ocelot elite agility and strong senses/tactics while keeping Attack and Defense much lower. Its winning matchups come from concealment, precision and control against smaller or similarly sized opponents, not from trading blows with animals many times its mass.

### Future field proposals
- Obtain sexed adult morphometrics across Texas, Central American, Amazon and southern populations to improve the canonical male mass/length selection.
- Locate a direct instrumented sprint measurement before assigning nonzero `speed_mps`.
- Locate direct ocelot bite-force measurements and tooth contact geometry before assigning PSI.
- Obtain direct canine/carnassial and claw measurements from adult male museum specimens.
- Compare GPS/accelerometer burst-versus-sustained locomotion to bobcat, caracal and serval for better Agility/Stamina normalization.

## 9. Mandatory image section
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/ocelot.png` **(not created)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Ocelot.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/2/28/Ocelot.jpg
- `file_format_verified`: source is a real JPEG photograph; final PNG absent
- `alpha_verified`: **false**, no cutout exists
- `full_body_verified`: **false**
- `adult_verified`: **false**
- `sex_verified_or_unknown`: unknown
- `license_status`: **public domain, USFWS federal work**
- `notes`: 3658x2400 exact-species USFWS photograph with excellent reuse provenance, visually inspected at original resolution. It is a lying pose with limbs overlapping and the tail/rear anatomy not strictly certifiable, and metadata does not explicitly establish adulthood or sex. A 4767x3674 CC BY 2.0 Itatiba Zoo alternative was also reviewed, but its framing/pose does not simultaneously solve adult, sex and strict whole-body requirements. No binary PNG is claimed. Current connected GitHub write actions are text-only.

## 10. Evidence and source ledger
| Source | Direct URL | Claims supported | Context | Confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web, *Leopardus pardalis* | https://animaldiversity.org/accounts/Leopardus_pardalis/ | 8.5-16 kg, 65-97 cm, male larger, wild lifespan 7-10 y, 21.5 y captive max, activity >12 h/day, 1.8-6.7 km travel, climbing/jumping/swimming, senses, reproduction, territoriality | Broad species synthesis | High-moderate; secondary synthesis citing literature |
| USFWS, The Ocelot | https://www.fws.gov/sites/default/files/documents/2024-04/1810.pdf | U.S. range/status, up to 35 lb, up to 4 ft including tail, endangered U.S. context | United States | High agency source; maxima not representative mean |
| Wang 2019, Ecology and Evolution | https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.5005 | 6.6-18.6 kg literature range, distribution, nocturnal/crepuscular, semi-arboreal, excellent climbing, threats | Brazilian Amazon/literature synthesis | High; range combines populations |
| Smithsonian Tropical Research Institute metadata | https://biogeodb.stri.si.edu/bioinformatics/dfm/metas/view/645 | 550-1000 mm body length, 9-14 kg average scale, 8-11 y lifespan, nocturnal hunting | Panama telemetry archive metadata | Moderate; metadata summary rather than primary morphometric paper |
| Leonard et al. 2020, PLOS ONE/PubMed | https://pubmed.ncbi.nlm.nih.gov/32324759/ | Strong nocturnal activity; GPS/accelerometer movement comparison with bobcat | South Texas, n=8 ocelots | High primary study |
| Dos Santos et al., Atlantic Forest diet | https://repositoriosdigitales.sicyt.gob.ar/vufind/Record/CONICETDig_78a6c83255f20c585ba394940cbaa2d0 | Mammals 83.7%; medium 1-15 kg prey 84.9%; broad prey spectrum including deer signal | SE Brazil, 30 scats | High-moderate; local population and scat inference |
| Wang 2002 diet comparison | https://www.tandfonline.com/doi/abs/10.1076/snfe.37.3.207.8564 | Small mammals frequent; ocelots used reptiles more than compared small cats | Atlantic rainforest | High primary study; local |
| Moreno et al. 2006, Journal of Mammalogy record | https://nysm.nysed.gov/bibcite/reference/20770 | Panama diet includes agoutis/sloths; prey size shifts with competitor context | Central Panama | High primary paper metadata/abstract |
| Behavioral Ecology 2024 jaguar-ocelot model | https://academic.oup.com/beheco/article/35/1/arad080/7308576 | Jaguar intraguild predation; modeled canopy refuge/forest structure affects coexistence | Spatially explicit model | High for model result; not direct fight experiment |
| Journal of Mammalogy 2016 activity | https://academic.oup.com/jmammal/article-abstract/97/2/455/2459608 | Nocturnal activity; 16 males/19 females identified over long camera-trap study | Eastern Ecuador | High primary field study |
| Journal of Mammalogy 2022 density | https://academic.oup.com/jmammal/article/103/3/639/6469295 | ~10-13 ocelots/100 km² across three sites; conservation value of private/unprotected areas | Colombia/Brazil | High primary field study |
| 2025 sex-specific home range study | https://pubmed.ncbi.nlm.nih.gov/41034270/ | Male/female home-range responses, 22 males/12 females | Remaining U.S. populations | High primary study |
| Adult-male reproductive histology | https://pubmed.ncbi.nlm.nih.gov/19853903/ | Four adult males; confirms adult male reproductive sampling | Captive/research males | High primary study; not body-size source |
| Commons/USFWS image | https://commons.wikimedia.org/wiki/File:Ocelot.jpg | Exact species, real photo, 3658x2400, public-domain USFWS provenance | Individual sex/adult unknown | High provenance; fails mandatory adult/full-body certification |

## 11. Confidence, conflicts and uncertainty
- **Mass:** good evidence that males are larger, but geographic ranges differ. 13.0 kg is representative, not a measured population mean for every region.
- **Length:** strong broad range, but sources differ on whether stated length includes tail. Canonical 90.0 cm is explicitly treated as head-body for staging.
- **Height:** weakly sourced and should be replaced if direct adult-male shoulder measurements are found.
- **Speed:** common web values exist but were not accepted without defensible species-specific measurement.
- **Bite force:** legacy 100 psi is unsupported and removed from the research recommendation.
- **Diet:** apparent conflict between rodent-heavy studies and medium-prey-heavy Atlantic Forest/Panama studies is biological population/ecosystem variation, not necessarily methodological error.
- **Conservation:** global status and U.S. legal status are different concepts; U.S. endangered status does not imply the same global category.

## 12. Cross-animal normalization notes
- Ocelot **Attack 38.0** must remain well below Monitor Lizard 48.0, Mountain Goat 51.0, Marlin 58.0, Moose 69.0 and megafauna because 13 kg absolute scale matters. It remains comfortably above sub-kilogram Mongoose 20.0 and Naked Mole Rat 14.0.
- Ocelot **Defense 27.0** is above very small unarmored mammals but below Monitor Lizard 35.0 and far below Musk Ox 61.0. Camouflage is not counted as armor.
- **Agility 88.0** is intentionally elite and matches the Mountain Goat's 88.0 for different reasons: the goat is a cliff-footing specialist, while the ocelot is a compact arboreal/terrestrial felid. This is not derived from an unverified top-speed claim.
- **Stamina 64.0** stays close to Meerkat 65.0 and well below Narwhal 92.0 or migratory Monarch 90.0. Long nightly activity is not equivalent to extreme migration/dive endurance.
- **Intelligence 72.0** is above the more generalized Monitor Lizard 64.0 but below Meerkat 88.0's unusually complex cooperative-social control. Solitary hunting is not penalized automatically.
- **Special 72.0** reflects crypsis and climbing versatility but remains far below true unusual physiological systems such as Naked Mole Rat 96.0 or Mantis Shrimp 97.0.
- No legacy Ocelot rating or placeholder physical field was used as an anchor.