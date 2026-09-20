# Hammerhead Shark

## 1. Identity and canonical specimen

- **Common name:** Hammerhead Shark
- **Resolved taxon:** Great hammerhead, *Sphyrna mokarran* (Rüppell, 1837)
- **Why this resolution:** the production profile currently labels only family Sphyrnidae, but its 600 cm legacy length and large-body framing point to the great hammerhead, the largest hammerhead species. This staging report therefore resolves the ambiguous roster name to *S. mokarran* rather than averaging the biology of multiple hammerhead species.
- **Living/extinct:** living.
- **Canonical combat specimen:** healthy mature **female**, approximately **230.0 kg and 400.0 cm total length**. Florida Museum reports the species averaging over 500 lb (230 kg), with exceptional individuals to 450 kg and 610 cm. CITES material states that 400 cm is more common for a mature adult than the 550-610 cm maxima.
- **Sex/dimorphism:** females attain the larger documented ages and sizes. An Australian age-and-growth study found no significant sex difference in length or age at 50% maturity, but females reached at least 439.1 cm and 39.1 years versus the oldest sampled male at 369.1 cm and 31.7 years. Female selection is therefore conservative for the stronger/larger fighting specimen without using a record giant.
- **Population variation:** growth, maturity and movement data come from different ocean basins. The canonical specimen is a species-wide representative, not a claim that every population averages exactly 230 kg or 400 cm.

## 2. Physical measurements and defensible factual fields

### Mass and length
Florida Museum reports an average above **500 lb / 230 kg**, a 991 lb / 450 kg world-record specimen, and maximum reported length of 20 ft / 610 cm. NOAA's Atlantic identification guide gives the species to about **18.5 ft / 5.6 m**. CITES synthesis states 400 cm is more common for a mature adult than the 550-610 cm maxima. The Australian growth study estimated asymptotic stretched total length at 402.7 cm, with females sampled to 439.1 cm.

**Canonical:** `weight_kg = 230.0`; `length_cm = 400.0`. These represent a large mature animal without normalizing an exceptional 450 kg / 6 m individual.

### Height
A terrestrial-style height field is biologically inappropriate for a fusiform shark. No defensible standardized standing-height analogue is proposed.

**Canonical:** `height_cm = 0.0`.

### Speed
The production profile's 39.6 km/h is treated as an unverified legacy value. Fresh research did not recover a strong species-specific instrumented maximum-swimming-speed measurement. Great hammerheads are highly mobile, but displacement and migration do not establish top speed.

**Canonical:** `speed_mps = 0.0` pending a defensible species-specific maximum.

### Lifespan and maturity
Harry et al. (2011) validated annual growth-band deposition and reported a female to **39.1 years** and a male to 31.7 years; combined-sex 50% maturity was 227.9 cm stretched total length and 8.3 years in that Australian sample. Florida Museum's older institutional summary gives 20-30 years, so the directly aged study is preferred.

**Canonical:** `lifespan_years = 39.1`, explicitly a validated observed maximum-age datum rather than a population mean life expectancy.

### Bite force and dentition
No defensible species-specific bite-pressure experiment was found. The production value of 600 PSI is rejected rather than preserved. Florida Museum describes triangular, strongly serrated teeth, with 17 teeth per side around the upper symphysis and 16-17 per side around the lower symphysis.

**Canonical:** `bite_force_psi = 0.0` because no reliable pressure measurement was recovered.

### Cephalofoil and body defenses
The laterally expanded cephalofoil is not armor. CFD work across hammerheads found that it can increase maneuvering reaction forces but creates substantially more drag than conventional shark heads and does not behave as a simple lift-producing wing when level. The skin carries overlapping dermal denticles. These improve hydrodynamic surface properties and abrasion resistance but do not justify treating the shark as heavily armored.

## 3. Proposed canonical factual fields

| Field | Proposed value | Confidence | Basis / caveat |
|---|---:|---|---|
| `weight_kg` | **230.0** | Moderate | Florida Museum species-average statement; large geographic/age variation |
| `height_cm` | **0.0** | High | No biologically meaningful standardized height field |
| `length_cm` | **400.0** | Moderate-high | CITES mature-adult synthesis plus 402.7 cm growth asymptote |
| `speed_mps` | **0.0** | High that legacy value is unverified | No strong species-specific maximum recovered |
| `lifespan_years` | **39.1** | High | Validated age-and-growth study, oldest sampled female |
| `bite_force_psi` | **0.0** | High that PSI is unsupported | No defensible pressure measurement |

## 4. Combat biology

### Weapons and offensive mechanics
The primary weapon is a wide, serrated-tooth bite delivered by a large, powerful shark. Its cephalofoil also has direct prey-handling utility. Field observations document great hammerheads pinning stingrays against the substrate and using tight turning/head movements to reposition prey. This makes the head an active control surface and restraint tool, not a blunt-force fantasy weapon.

### Specialized prey handling
Great hammerheads are unusually specialized ray predators. O'Connell's field work demonstrated close-range response to prey-simulating electrical cues and documented repeated **lateral headshake repositioning**. Roemer and colleagues documented shallow-flat foraging including **pin-and-pivot** and **grasp-turning**, with up to 22 tight turns in some prey-handling sequences. Earlier Copeia observations also documented stingray predation.

### Defense and toughness
A 230 kg shark has substantial body mass, a cartilaginous skeleton resistant to some kinds of fracture, tough skin with dermal denticles, and a large swimming envelope that makes small attacks less consequential. It lacks rigid armor, however. Gills, eyes, abdomen and fins remain vulnerable, and capture studies report high stress sensitivity and post-release mortality. Defense should therefore be solid but not confused with the shark's offensive danger.

### Locomotion and maneuverability
The cephalofoil is a major maneuvering adaptation. CFD results support rapid pitch-control forces as head angle changes and note that hammerheads can execute sharp turns without the body roll seen in conventional carcharhinids. The tradeoff is substantial drag and energetic cost. This supports high Agility, but not a fabricated top-speed value.

### Endurance and movement
A 2025 acoustic-telemetry study followed 15 mature great hammerheads, 207-331.5 cm fork length, and found partial migration. Some repeatedly made round-trip migrations from the Florida Keys to northern Gulf or Atlantic destinations, while others stayed resident and shifted habitat seasonally. Australian tracking of 31 animals found mean maximum displacement of 105.8 km and one 776 km movement followed by a return within six weeks. These data support strong sustained swimming and navigation without implying white-shark-scale transoceanic endurance.

### Vertical ecology
Satellite-tagged western North Atlantic great hammerheads spent 75% of records shallower than 30 m and 89% between 23 and 28 C, with significantly deeper daytime use. Two tracked individuals were confirmed pregnant, including one that moved from the Bahamas to South Carolina. Warm-water specialization is therefore both an ecological strength and a limitation.

### Senses
The great hammerhead combines ordinary shark olfaction, lateral-line mechanoreception and vision with a broad electrosensory search surface. Hammerhead research shows electroreceptive pores distributed over the expanded head, and direct *S. mokarran* experiments show close-range electric cues elicit foraging responses. Eye separation also expands binocular/visual geometry. This is one of the roster's strongest prey-detection packages, particularly for hidden benthic prey.

### Intelligence and tactics
There is no basis for mammal-like cognitive inflation, but prey handling is clearly more than a reflexive bite. Great hammerheads alter head position, pin rays, perform repeated tight turns and reposition prey. Mature animals also show repeatable migration routes and seasonal habitat shifts. These behaviors justify above-basic predatory Tactics while remaining below cetaceans, great apes and the strongest avian problem-solvers.

### Social and fighting behavior
Great hammerheads are generally solitary rather than schooling like scalloped hammerheads. Direct quantitative literature on damaging adult-adult combat is sparse. Ferocity is therefore based mainly on active predation of dangerous rays and large prey, not assumed territorial violence.

### Environmental advantages
- Warm coastal shelves, reefs, channels and shallow flats provide ideal sensory and maneuvering conditions.
- Broad head improves close-range localization and control of benthic prey.
- Water supports the full body mass and permits three-dimensional attack angles.
- Large size, serrated dentition and sustained swimming make it dangerous to most similarly sized aquatic prey.

### Environmental disadvantages
- Entire combat system depends on water; terrestrial matchups are nonfunctional.
- Cephalofoil imposes significant drag and energetic cost.
- Warm-water specialization narrows optimal thermal habitat.
- Gill, eye and fin injuries can compromise swimming and respiration.
- Capture-stress sensitivity argues against treating physiological toughness as elite.

### Matchup archetypes
**Favorable:** medium aquatic prey, rays and other opponents that can be detected against the bottom and controlled with the cephalofoil before repeated biting.

**Unfavorable:** substantially larger sharks/cetaceans, armored or extremely bulky aquatic opponents that can survive the first bite, and any scenario outside sufficiently deep water.

## 5. Proposed ABS substats

All values are independent 0.1-100.0 roster-wide editorial ratings. Production placeholders were not used as anchors.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **58.0** | Roughly 230 kg representative body provides strong absolute swimming and jaw-driving power, far below great-white/megafauna scale |
| Weaponry | **77.0** | Large mouth, strongly serrated teeth, repeatable bite delivery and cephalofoil-assisted restraint |
| Ferocity | **66.0** | Actively subdues dangerous rays and sizeable prey, but sparse evidence for unusually violent conspecific combat |
| Protection | **46.0** | Tough denticled skin and body mass, but no armor and vulnerable gills/fins/eyes |
| Toughness | **57.0** | Large robust swimmer, discounted for documented capture-stress/post-release sensitivity |
| Maneuverability | **84.0** | Cephalofoil-supported rapid pitch/turn control is a genuine specialization |
| Speed | **52.0** | Powerful active swimmer, but no defensible species-specific maximum justifies a high speed claim |
| Endurance | **82.0** | Mature animals make repeatable seasonal migrations and hundreds-of-kilometers movements |
| Recovery | **51.0** | No exceptional regeneration or trauma-recovery evidence; capture sensitivity limits score |
| Tactics | **68.0** | Pinning, pivoting, headshake repositioning and grasp-turning are specialized prey-handling behaviors |
| Senses | **94.0** | Broad electrosensory field plus vision, olfaction and mechanoreception produce elite aquatic prey detection |
| Abilities | **91.0** | Cephalofoil combines electrosensory search geometry with prey control and unusual maneuvering leverage |

## 6. Proposed six headline ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **74.0** | Large serrated bite plus specialized ray-control behavior is highly dangerous, but absolute damage remains well below a representative great white |
| **Defense** | **55.0** | Size and skin provide meaningful survivability without armor or exceptional trauma resistance |
| **Agility** | **84.0** | The cephalofoil materially improves rapid turning/pitch control; speed is not being substituted for agility |
| **Stamina** | **82.0** | Repeatable long-range migration and sustained movement are directly tracked |
| **Intelligence** | **63.0** | Flexible prey handling and route fidelity exceed simple reflexive predation without implying mammalian cognition |
| **Special** | **92.0** | Expanded electrosensory search surface plus cephalofoil prey manipulation is exceptionally matchup-changing |

### Cross-animal headline normalization
The 230 kg great hammerhead is intentionally below the staged 900 kg Great White Shark in Attack and Defense, while exceeding it in Agility and Special because the cephalofoil is a genuine maneuvering/sensory specialization. It is vastly above small fish and terrestrial animals of similar nominal length in aquatic weapon delivery, but receives no pound-for-pound bonus. Its lack of a verified speed maximum does not suppress Agility because turning control has independent hydrodynamic evidence.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Electrosensory Hammer Sweep**: the laterally expanded head spreads ampullary receptors across a broad search surface, allowing close-range localization of prey-generated electric fields, including benthic prey that may be visually concealed.
2. **Ray Pin Pivot**: the shark uses its cephalofoil and tight body turns to pin, control and reposition rays before or during biting, reducing the prey's ability to bring its defensive spine to bear.

### Unique traits
1. **Forward-Rudder Cephalofoil**: the broad head generates strong reaction forces when actively angled, giving the shark unusually effective pitch and turning control at the cost of extra drag.
2. **Solitary Warm-Water Roamer**: unlike schooling scalloped hammerheads, great hammerheads are generally solitary and can alternate between seasonal long-distance migration and year-round local residency.

## 8. Expanded profile

### Habitat and geographic range
Great hammerheads occur in tropical and warm-temperate coastal and offshore waters worldwide. NOAA documents them in the western Atlantic from Massachusetts to Brazil, including the Caribbean and Gulf, with coastal and offshore habitat from the surface to beyond 76 m. Tracking shows much deeper excursions occur, while western North Atlantic tagged animals spend most recorded time in the upper 30 m and 23-28 C water.

### Diet and ecology
Diet includes bony fishes, crustaceans, cephalopods, sharks and rays, with stingrays especially important to the species' ecological identity. The shark is a large upper-level predator but should not be reduced to a generic apex-predator label because its cephalofoil supports unusually specialized benthic-prey detection and handling.

### Social structure
Usually solitary. This is an important distinction from scalloped hammerheads, which can form large schools. Aggregation should not be assumed to provide pack-combat bonuses.

### Reproduction and life history
Viviparous. Sources report litters roughly 6-42 or broader institutional ranges up to 50, with gestation around 11 months. Australian data place combined-sex 50% maturity at about 227.9 cm and 8.3 years, while other regional summaries report later female maturity. This conflict is retained rather than forcing a universal maturity age.

### Conservation
The great hammerhead is globally assessed as Critically Endangered in recent literature, with severe historical fishing pressure, fin retention, bycatch and high post-release mortality. Conservation status does not affect combat scores but is essential profile context.

### Adaptations
- Laterally expanded cephalofoil carrying widely distributed sensory pores.
- Tall, strongly falcate first dorsal fin characteristic of the species.
- Serrated triangular teeth for cutting prey.
- Dermal denticles reducing surface drag/abrasion.
- Strong hypaxial musculature and head control for rapid changes in trajectory.
- Behavioral techniques that physically use the head to manage rays.

### Human interaction
Great hammerheads are generally not routine human predators, but their size demands respect. The more consequential human interaction is fisheries mortality. They are caught intentionally and as bycatch, valued for large fins, and can experience severe physiological stress after capture.

### Genuine fun facts
- The great hammerhead is the largest living hammerhead species.
- A 2020 CFD analysis found hammerhead heads can impose much greater drag than conventional shark heads, showing that the famous shape carries a real energetic tradeoff.
- Researchers have directly observed great hammerheads pinning stingrays with the cephalofoil.
- Some individuals repeatedly migrate away from and back to the Florida Keys, while others remain local year-round.
- A tracked Australian individual moved 776 km and returned to its original region within six weeks.
- The oldest female in a validated Australian age study was 39.1 years old.

### Concise site-ready summary
The great hammerhead is a roughly four-meter, 230-kilogram sensory-and-control specialist. Its serrated bite is dangerous, but its defining advantage is the cephalofoil: a broad electrosensory platform that also improves maneuvering and helps pin and reposition rays. It trades some hydrodynamic efficiency for exceptional prey detection and close-range control.

### Rich narrative profile
The great hammerhead's silhouette is not cosmetic. Its cephalofoil changes how the shark senses, steers and handles prey. Electric fields generated by animals can be detected at close range, and spreading receptors laterally gives the shark a broad search geometry over the seafloor. When a ray is found, the same head can become a physical control tool. Field observations document pinning, pivoting, tight grasp-turns and repeated head repositioning rather than a simple straight-line bite.

That specialization has a cost. Computational hydrodynamics shows that hammerhead heads create substantially more drag than conventional shark heads. The structure is best understood as a controllable forward surface, not a free lift-generating wing. Great hammerheads gain maneuvering leverage and sensory reach while paying for it energetically.

A representative adult is formidable but not a miniature great white. At roughly 230 kg it has less absolute mass and damage capacity than the staged 900 kg white shark. Its ABS advantage instead lies in Agility, Senses and Special. This preserves the roster's absolute scale while rewarding a biological mechanism that genuinely changes aquatic matchups.

## 9. Future structured-field proposals

Potential future fields: `resolved_taxon`, `canonical_sex`, `canonical_total_length_cm`, `maturity_length_cm`, `observed_max_age_years`, `migration_displacement_km`, `preferred_temperature_c`, `depth_use_percent_under_30m`, `cephalofoil_function`, `electroreception`, `prey_handling_mode`, and `conservation_status`.

## 10. Mandatory image requirement

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/hammerhead-shark.png` (**not created**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Sphyrna_mokarran_camden.jpg
- `original_photo_url`: https://live.staticflickr.com/2600/3913442807_c6f25fe32f_o.jpg
- `source_resolution`: 4752x3168 original Flickr upload; current Commons crop is 3448x2557
- `file_format_verified`: source is JPEG; final PNG absent
- `alpha_verified`: no
- `full_body_verified`: no. The Commons file history explicitly says the current version was cropped to focus on the shark, so it is not promoted under the strict complete-silhouette rule.
- `adult_verified`: no explicit adulthood statement in source metadata
- `sex_verified_or_unknown`: unknown
- `license_status`: CC BY 2.0, Flickr license reviewed by Commons
- `notes`: exact *Sphyrna mokarran*, genuine photograph and reusable licensing are verified. The current Commons crop is deliberately rejected as a finished candidate because the mandatory standard favors complete anatomy over a larger crop. Broad image search also found attractive wild full-body-looking photographs, but redistribution permission/adulthood were not strong enough to replace this with a verified source. No transparent PNG is claimed because the connected GitHub writer is text-only.

## 11. Evidence and source ledger

| Source | Direct URL | Supports | Finding / context | Confidence / conflict |
|---|---|---|---|---|
| NOAA Fisheries, Shark Identification | https://www.fisheries.noaa.gov/new-england-mid-atlantic/atlantic-highly-migratory-species/shark-identification-cooperative-shark-2 | Taxon, maximum length, range, habitat, identification | *S. mokarran* to ~5.6 m; coastal/offshore western Atlantic | High institutional source |
| Florida Museum, Great Hammerhead | https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/great-hammerhead/ | Mass, maximum size, teeth, denticles, older lifespan summary | Average >230 kg; record 450 kg; max 610 cm; serrated dentition | High for descriptive biology; record/max not canonical average |
| Harry et al. 2011, Journal of Fish Biology | https://pubmed.ncbi.nlm.nih.gov/21651548/ | Growth, maturity, age, sex | 50% maturity 227.9 cm / 8.3 y; female 39.1 y and 439.1 cm; male 31.7 y and 369.1 cm | High, Australian sample; regional variation possible |
| CITES hammerhead review | https://cites.org/sites/default/files/eng/com/ac/29/E-AC29-23-01-A1.pdf | Mature-adult size, reproduction, rarity | 400 cm more common mature adult than 550-610 cm maximum; generally solitary | High policy synthesis; older compiled studies |
| Gaylord et al. 2020, Scientific Reports | https://www.nature.com/articles/s41598-020-71472-2 | Cephalofoil hydrodynamics | Greater maneuvering reaction forces, more drag, no simple level-flight lift | High peer-reviewed CFD; family-wide models |
| O'Connell 2018, Zoology and Ecology | https://www.tandfonline.com/doi/abs/10.1080/21658005.2018.1458964 | Electro-sensory foraging and prey handling | Close-range electric cues; lateral headshake repositioning | High, direct *S. mokarran* field experiment/observation |
| Roemer et al. 2016 | https://sharkresearch.earth.miami.edu/wp-content/uploads/2016/04/Roemer-et-al.-2016_Shallow-water-tidal-flat-use-and-associated-specialized-foraging-behavior-of-the-great-hammerhead-shark-Sphyrna-mokarran.pdf | Shallow-water prey handling | Pin-and-pivot; grasp-turning; up to 22 tight turns | High behavioral observations |
| Strong, Snelson & Gruber 1990, Copeia | https://stars.library.ucf.edu/facultybib1990/164/ | Stingray predation | Direct observation of *S. mokarran* prey handling | High primary note |
| Casselberry et al. 2025, Journal of Fish Biology | https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.70039 | Mature movement/migration | 15 mature sharks; partial migration; repeatable routes and seasonal habitat shifts | High recent telemetry |
| Frontiers 2023 trophic/spatial ecology | https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2023.1274275/full | Australian movement | 31 tagged; mean max displacement 105.8 km; one 776 km return movement | High peer-reviewed tracking |
| Guttridge et al. 2022, Journal of Fish Biology | https://onlinelibrary.wiley.com/doi/10.1111/jfb.15185 | Depth/temperature use | 75% records <30 m; 89% 23-28 C; diel depth cycle | High satellite-tag study |
| Kajiura 2001, Environmental Biology of Fishes | https://sharkmans-world.org/doc/electric.pdf | Hammerhead electroreceptor morphology | Wide heads distribute ampullary pores over larger lateral search area | High peer-reviewed comparative morphology; not only *S. mokarran* |
| Commons / Jim Capaldi | https://commons.wikimedia.org/wiki/File:Sphyrna_mokarran_camden.jpg | Image provenance | Exact species, 3448x2557 current crop, CC BY 2.0, original Flickr source | Reusable but current crop/full-body/adult not verified |

### Source conflicts and uncertainty
- **Length:** NOAA's ~5.6 m and Florida Museum's 6.1 m are maxima, while CITES and growth modeling support ~4.0 m as a more representative mature large adult. The canonical 400 cm is therefore intentionally below record size.
- **Lifespan:** Florida Museum gives 20-30 years, while validated vertebral aging sampled a 39.1-year female. The latter is preferred for the schema field but is explicitly an observed maximum, not mean life expectancy.
- **Maturity:** Australian combined-sex maturity at 8.3 years conflicts with tertiary summaries giving later female maturity. Regional/method differences remain unresolved.
- **Speed:** legacy 39.6 km/h is not retained because no strong species-specific maximum-speed measurement was recovered.
- **Bite pressure:** legacy 600 PSI is not retained because no defensible species-specific pressure experiment was recovered.

## 12. Cross-animal normalization notes

- **Great White Shark:** staged at 900 kg with Attack 88.0 / Defense 68.0 / Agility 73.0 / Stamina 91.0 / Intelligence 70.0 / Special 87.0. Great hammerhead is materially lower in absolute Attack/Defense because it is roughly one quarter the canonical mass, but its cephalofoil justifies higher Agility and Special.
- **Bull Shark:** future audit should ensure any smaller bull-shark profile does not exceed the great hammerhead in absolute Raw Power without strong evidence. Bull-shark habitat versatility may legitimately win other categories.
- **Guanaco / Grizzly controls:** a 230 kg shark is not given terrestrial-style toughness simply because its mass resembles a bear or large ungulate. Environment and weapon delivery matter.
- **Anti-inflation:** ray specialization is counted in Weaponry/Tactics/Special for distinct mechanisms, but not used to inflate Raw Power. Electrosensation raises Senses/Special, not Attack directly.
- **Speed/agility separation:** factual `speed_mps` remains 0.0 while Agility is high because maneuverability has independent cephalofoil evidence.

## Verification checklist
- [x] Exact roster concept resolved to a defensible species
- [x] Representative adult and sex choice documented
- [x] Physical ranges, conflicts and canonical fields included
- [x] Unsupported PSI and speed placeholders rejected
- [x] Combat biology and matchup archetypes included
- [x] Current 12 substats scored with one decimal
- [x] Six headline ratings scored with one decimal
- [x] Exactly two named special abilities
- [x] Exactly two unique traits
- [x] Ecology, life history, conservation, adaptations, human interaction and fun facts included
- [x] Concise summary and rich narrative included
- [x] Direct-URL source ledger and confidence/conflicts included
- [x] Cross-roster normalization performed
- [x] Mandatory image fields included; no false PNG completion claimed