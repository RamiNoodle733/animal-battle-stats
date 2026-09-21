# Manta Ray

## 1. Identity and canonical specimen

- **Common name:** Manta Ray
- **Resolved taxon:** Giant oceanic manta ray, *Mobula birostris* (Walbaum, 1792)
- **Living/extinct:** Living
- **Site taxon check:** The current site already labels Manta Ray as *Mobula birostris*. This report keeps that exact species rather than mixing measurements from the smaller reef manta *Mobula alfredi*.
- **Canonical combat specimen:** Healthy, sexually mature adult **female**, approximately **1,400.0 kg** and **500.0 cm disc width**. Female is selected because giant manta rays are sexually dimorphic and females can be about 18% larger than males. This is a representative large adult, not the 2,000-2,400+ kg extreme sometimes reported.
- **Dimorphism:** NOAA's recovery review reports females as much as 18% larger than males. Florida Museum gives male maturity at at least 4.0 m disc width and female maturity at about 5.0 m. Sex is therefore materially relevant to absolute size, even though neither sex has a specialized combat weapon.
- **Population variation:** Size, movement, depth use, aggregation and habitat use vary regionally. Maximum-size figures also conflict because historical records, estimated mass and disc width are not equally well measured.

## 2. Physical measurements

### Body size

Giant oceanic manta rays are the world's largest living rays. NOAA Fisheries reports disc width up to **26 ft (7.9 m)** and mass up to **5,300 lb (2,404 kg)**. Manta Trust gives an average disc width of **400-500 cm**, a maximum of **680 cm**, and mass up to **2,000 kg**. The Florida Museum reports large specimens up to about **1,350 kg** and female maturity at about **5 m disc width**. Because the project needs a representative adult rather than a record, **1,400 kg and 5.0 m disc width** are adopted for the canonical mature female.

The body is a broad diamond-shaped cartilaginous disc driven by huge triangular pectoral fins. Two flexible cephalic lobes flank the terminal mouth. The tail is long and whip-like but lacks the functional venomous sting associated with many stingrays; Save Our Seas explicitly notes that giant manta rays do not have a barb like other ray species.

### Speed and locomotion

No robust instrumented species-specific maximum burst speed was found. Some tertiary sources repeat 24-35 km/h values, but the stronger Australian Museum source only states that the species is capable of rapid swimming without providing a measured maximum. `speed_mps` therefore remains **0.0** rather than laundering a weak internet maximum into a factual field.

Locomotion is nevertheless highly capable. Mantas generate lift and thrust through oscillation of the enormous pectoral fins and can execute rapid turns, loops and breaches. A 2026 satellite-telemetry study of one *M. birostris* in Japan documented more than 200 km of southwest displacement in six days, later a roughly 150 km return movement, mean horizontal displacement of 16.1 km/day, repeated dives to 300 m and a maximum recorded depth of **1,082 m**.

### Lifespan

NOAA reports giant manta rays living **at least 45 years** and its 2024 recovery status review uses an estimated maximum age of 45 years. Manta Trust gives likely longevity around 40 years. Canonical lifespan is therefore **45.0 years**, with moderate confidence because direct ageing remains difficult.

### Mouth, feeding structures and bite

The mouth is primarily a feeding intake, not a macropredatory weapon. Paired cephalic lobes channel plankton-rich water toward the mouth while branchial filtering structures retain prey. The mobulid review describes forward ram-filter feeding with an open mouth and cephalic lobes guiding water into the oral cavity.

Males can grasp a female's pectoral-fin tip with the mouth during copulation, so the mouth is capable of meaningful gripping. However, no defensible *M. birostris* bite-force pressure measurement was found. **`bite_force_psi = 0.0`**.

### Defenses and durability

The main defenses are enormous body size, a broad muscular swimming disc, mobility and open-water escape. It does **not** have bony armor, thick mammalian hide, a venomous tail barb or a specialized defensive weapon. Large sharks are documented predators, and recent literature also records killer-whale attacks. Shark-bite scars and even pectoral-fin amputations are documented in manta populations, demonstrating both substantial survivability after injury and real vulnerability to large marine predators.

## 3. Canonical proposed factual fields

| Field | Proposed value | Rationale / confidence |
|---|---:|---|
| `weight_kg` | **1400.0** | Representative large mature female; consistent with large-adult institutional estimates while below 2,000-2,404 kg maxima. Moderate confidence. |
| `height_cm` | **0.0** | No meaningful standardized standing-height analogue and no defensible body-thickness field source. Do not invent one. |
| `length_cm` | **500.0** | For this dorsoventrally flattened ray, use canonical **disc width** as the site's primary size dimension; 5.0 m is also a female-maturity threshold. High confidence in the biological scale, moderate confidence as schema mapping. |
| `speed_mps` | **0.0** | No sufficiently strong species-specific measured maximum located. |
| `lifespan_years` | **45.0** | NOAA-supported estimated maximum/at-least longevity. Moderate confidence. |
| `bite_force_psi` | **0.0** | No reliable pressure measurement; do not convert gripping ability or force anecdotes into PSI. |

**Schema note:** `length_cm` should eventually be generalized or accompanied by `disc_width_cm`; width is the biologically standard measurement for manta rays and forcing it into ordinary nose-to-tail length is misleading.

## 4. Combat biology

### Primary and secondary weapons

The giant manta has no purpose-built killing weapon. Its most consequential offensive asset is simply the momentum of a 1.4-tonne, 5 m-wide swimming body. Pectoral-fin sweeps, body checks and collision momentum could seriously affect much smaller animals, but there is no evidence that healthy giant mantas routinely weaponize ramming against predators. The mouth is a secondary gripping structure during mating rather than a slicing or crushing predatory bite.

### Offensive mechanics

Practical attack is constrained by behavior and anatomy. *M. birostris* is a planktivorous filter feeder, not a pursuit predator. Its enormous disc can deliver substantial incidental force and can breach clear of the water, but its mouth, teeth and tail are poorly configured for injuring large opponents. Attack must therefore remain far below similarly massive animals with horns, tusks, jaws or predatory dentition.

### Defensive adaptations

Body size is the central defense. Only very large sharks and other top marine predators are credible routine natural threats to adults. The disc also gives the ray excellent control in three dimensions, allowing rapid banking, turning and depth changes. Long-distance movement lets it leave unfavorable areas rather than stand and fight.

Defense is limited by lack of armor and by the huge exposed pectoral margins. Documented shark bites can remove sections of the pectoral fin. Killer whales can overwhelm even very large rays. The cartilaginous skeleton is light and hydrodynamically useful but should not be treated like heavy bony armor.

### Locomotion and maneuverability

Pectoral-fin oscillation produces efficient, bird-like underwater flight. Courtship observations document females accelerating, veering, circling and looping to evade pursuing males. The species also breaches. The very large turning surface gives good pitch, roll and yaw control, but the 5 m span limits close-quarters maneuverability relative to small rays and agile fish.

### Endurance

Endurance is a major strength. Giant mantas are continuous swimmers that move between productive habitats and make repeated vertical excursions. The Japanese telemetry record documents a >200 km displacement in six days plus repeated deep dives. NOAA describes the species as migratory. This supports very high sustained locomotor capacity, but not a claim of high-speed pursuit endurance.

### Senses

As an elasmobranch, the manta uses the normal shark-and-ray sensory suite, including vision, olfaction, mechanoreception/lateral-line information and electroreception. Vision is especially behaviorally important at cleaning stations, during social interactions and in the mirror experiments. Exact sensory thresholds for *M. birostris* were not located, so Senses is kept strong without assigning fabricated detection distances.

### Intelligence, learning and tactics

Mantas possess unusually large brains among fishes. A 2025 Journal of Animal Ecology paper emphasizes the large, metabolically expensive brains of mobulid rays and cautions that brain size may partly support thermogenesis rather than cognition alone. Captive giant mantas exposed to mirrors showed unusual repetitive and self-directed behavior and did not simply treat the reflection as another manta, but a published response argued that the observations were not conclusive proof of self-awareness. ABS therefore credits sophisticated behavioral flexibility while avoiding the stronger claim that mirror self-recognition is established fact.

### Fighting and reproductive behavior

Giant mantas are not generally aggressive fighters. Courtship can nevertheless be physically demanding. Males pursue females in mating trains and eventually grasp a female's pectoral-fin tip with the mouth during copulation. A 2024 observation documented mature male *M. birostris* repeatedly pursuing and bumping a mature female reef manta with a cephalic lobe while another male flanked her, illustrating coordination, persistence and precise maneuvering rather than lethal combat.

### Feeding and predation behavior

The species feeds primarily on zooplankton and other small planktonic organisms. It uses cephalic lobes to funnel water into the mouth and gill filtering structures to retain prey. Feeding aggregations track productive water. It is therefore ecologically a giant filter feeder, not an ambush or pursuit predator.

### Predator defense

Adults rely primarily on size, mobility and escape. Large sharks can attack mantas and shark-bite scars are well documented. Killer-whale predation has also been observed. Survival of major healed pectoral wounds shows toughness, but these injuries also demonstrate that the broad wing margins are exploitable targets.

### Environmental strengths

- Open ocean, reef edges, seamounts and productive offshore waters give room for its wide turning radius.
- Exceptional depth envelope permits vertical escape and resource tracking.
- Efficient sustained swimming favors long-duration aquatic matchups.
- Large disc and mass make displacement by small opponents difficult.

### Environmental limitations

- Entire combat package depends on water support and continuous aquatic locomotion.
- Confined spaces reduce the value of a 5 m disc.
- It cannot meaningfully fight on land.
- Large exposed pectoral fins provide broad targets for cutting bites.

### Major weaknesses

1. Almost no specialized offensive weaponry for its body size.
2. No venomous sting or defensive barb.
3. Broad pectoral margins can be bitten or amputated by large predators.
4. Planktivorous behavior provides little evolved experience killing large prey.
5. Very large span reduces close-quarters maneuverability in confined water.

### Matchup archetypes

- **Favored:** much smaller aquatic animals that cannot penetrate or control a 1.4-tonne body; opponents dependent on grappling a target too broad to control.
- **Mixed:** similarly sized but poorly armed filter feeders, where endurance and maneuvering matter more than damage output.
- **Unfavored:** large sharks, toothed whales and other predators with deep-cutting bites, coordinated predation or the ability to attack pectoral margins repeatedly.
- **Strongly environment-dependent:** terrestrial animals, because neither side's normal capabilities translate fairly outside its native medium.

## 5. Proposed ABS substats

All values use the roster-wide absolute scale and were reassessed independently from the live placeholders.

| Substat | Score | Evidence-based justification |
|---|---:|---|
| **Size** | **86.0** | A representative 1.4-tonne, 5 m-wide adult female is enormous on the roster, though below the largest whales and extinct giants. |
| **Raw Power** | **61.0** | Huge swimming musculature and body momentum, but force is optimized for propulsion rather than striking, crushing or grappling. |
| **Weaponry** | **20.0** | No sting, horns, claws or macropredatory teeth; mouth can grip during mating but is not a major killing weapon. |
| **Ferocity** | **15.0** | Generally non-aggressive planktivore; physical courtship does not justify predator-level combat willingness. |
| **Protection** | **46.0** | Size and broad body provide passive protection, but no armor and pectoral margins remain vulnerable to shark bites. |
| **Toughness** | **61.0** | Large body and documented survival with major scars support resilience, without implying immunity to large sharks or orcas. |
| **Maneuverability** | **72.0** | Excellent three-dimensional banking, looping and turning for its size, moderated by enormous span. |
| **Speed** | **54.0** | Capable of rapid swimming and breaching, but no strong measured maximum supports an elite speed score. |
| **Endurance** | **89.0** | Continuous pelagic swimming, >200 km movement in six days and repeated deep dives support elite sustained travel. |
| **Recovery** | **65.0** | Healed predation scars and major fin injuries show meaningful recovery, but there is no extraordinary regeneration. |
| **Tactics** | **67.0** | Flexible social, courtship, feeding and cleaning-station behavior plus strong learning indications; not a cooperative hunting strategist. |
| **Senses** | **79.0** | Broad elasmobranch sensory suite and strong visually guided behavior, while species-specific threshold data remain limited. |
| **Abilities** | **68.0** | Efficient pectoral propulsion, deep-diving physiology and specialized ram-filter apparatus are distinctive, but mostly nonlethal. |

## 6. Proposed six headline ABS ratings

- **Attack: 42.0** - Enormous momentum and pectoral/body force can matter, but the animal lacks a purpose-built weapon and does not hunt large prey. This must remain far below heavily armed megafauna.
- **Defense: 57.0** - A 1.4-tonne body is difficult for small opponents to damage, but absence of armor and documented shark/orca predation prevent a megafaunal defense score based on mass alone.
- **Agility: 72.0** - Highly controlled underwater flight, looping, veering and rapid depth changes are excellent for such a huge animal. This is maneuverability, not an unsupported top-speed claim.
- **Stamina: 89.0** - Sustained pelagic movement and repeated deep diving are among the species' clearest combat-relevant strengths.
- **Intelligence: 76.0** - Large brain and complex exploratory/social behavior justify a strong score, but mirror-test evidence is explicitly treated as suggestive rather than proof of self-awareness.
- **Special: 70.0** - Deep-diving capacity, unusual mobulid neurophysiology and specialized sensory/filter-feeding anatomy are distinctive, but most are not direct damage mechanisms.

## 7. Abilities and traits

### Special abilities

1. **Pelagic Wing Drive** - The giant pectoral disc generates efficient lift and thrust for sustained three-dimensional swimming, rapid banking, looping, depth changes and occasional breaching. In a matchup this provides unusually strong positional control for a tonne-scale fish.
2. **Cephalic Funnel Feed** - Paired cephalic lobes unfurl to channel prey-rich water into the terminal mouth and specialized branchial filter. This is a genuine anatomical system and can manipulate water/prey flow, but it is correctly treated as a low-damage specialization rather than a fictional suction weapon.

### Unique traits

1. **Largest Living Ray** - *M. birostris* is the largest living ray, with NOAA reporting disc widths up to 26 ft and mass up to 5,300 lb.
2. **Deep-Ocean Neural Investment** - Mobulids possess unusually large, metabolically expensive brains; recent work proposes that this neural mass may also contribute to cranial thermogenesis during cold-water exposure, a hypothesis that cautions against equating brain size directly with intelligence.

## 8. Expanded profile content

### Habitat and range

The giant oceanic manta occurs circumglobally in tropical, subtropical and temperate seas. NOAA describes it in offshore oceanic water, productive coastal zones, bays, inlets and occasionally estuarine environments. It uses reefs, islands, seamounts and productivity fronts as feeding, cleaning or aggregation areas and can descend beyond 1,000 m.

### Diet and ecology

Diet is dominated by zooplankton and other small planktonic organisms captured through ram filtration. The animal is a highly mobile consumer linking pelagic productivity hotspots. Aggregations form where prey concentrates and at cleaning stations, but individuals also spend substantial time alone or in small groups.

### Social structure and behavior

Mobulids can aggregate from a few individuals to large groups, especially where food or cleaning opportunities are concentrated. Courtship includes prolonged pursuit and mating trains. Photo-identification based on individual markings has revealed repeated site use and regional movement. Social complexity is real, but the evidence does not justify assuming mammal-like cooperative combat.

### Reproduction and life history

Life history is exceptionally slow. NOAA reports usually **one pup every two to three years**, gestation around one year and longevity of at least 45 years. The 2024 NOAA recovery review characterizes the species as having an extremely conservative life history, with an estimated average female producing only about 4-7 pups over her lifespan. This makes adult mortality especially costly to populations.

### Conservation

The giant manta ray is **Endangered** on the IUCN Red List and listed as **Threatened under the U.S. Endangered Species Act**. Major threats include targeted harvest, bycatch, demand for gill plates, entanglement, vessel strikes and other anthropogenic impacts.

### Adaptations

- Huge oscillating pectoral fins for efficient pelagic lift and thrust.
- Cephalic lobes plus specialized branchial filtration for plankton feeding.
- Broad depth tolerance, with a tagged Japanese animal reaching 1,082 m.
- Large, metabolically expensive brain and specialized cranial physiology.
- Individual ventral/dorsal markings useful for long-term photo-identification.

### Human interaction

Despite old folklore portraying mantas as dangerous, modern biological reviews characterize them as harmless to humans. Ecotourism can make live mantas economically valuable, but vessel contact, entanglement, targeted fisheries and bycatch remain major threats. Their low reproductive output makes population recovery slow.

### Genuine fun facts

- Giant oceanic mantas are the largest living rays.
- They can breach completely out of the water despite tonne-scale body mass.
- A satellite-tagged manta in Japan reached **1,082 m** depth.
- Manta courtship can involve long pursuit trains in which several males follow one female.
- Their cephalic lobes are rolled while cruising and unfurled to help funnel food during feeding.
- Individual body markings can function like natural identification cards for photo-ID research.
- Mirror experiments produced unusual self-directed behaviors, but researchers still debate whether those observations demonstrate true self-recognition.

### Concise site-ready summary

The giant oceanic manta ray is the world's largest living ray: a multi-ton-capable, wing-driven pelagic filter feeder built for efficient travel, deep diving and remarkable control in open water. Its sheer size and stamina make it difficult for small opponents to threaten, but unlike sharks or toothed whales it has almost no specialized offensive weaponry. Its battle profile is therefore defined by mass, endurance and aquatic maneuverability rather than lethal attack.

### Rich narrative profile

A giant oceanic manta looks like a combat heavyweight, but its biology tells a subtler story. A mature female can span roughly five metres from wingtip to wingtip and weigh well over a tonne, yet nearly every part of that enormous body is optimized for travelling and feeding rather than killing. Its pectoral fins beat through the water like wings, producing enough lift and thrust to carry the ray across hundreds of kilometres, through rapid banks and loops, and down into water more than a kilometre deep. The mouth is a plankton intake. The cephalic lobes are flow-control surfaces. The tail lacks the venomous sting many people expect from a ray.

That makes *M. birostris* an important ABS calibration animal. Raw body size cannot automatically become Attack. Against a small opponent, the manta's mass and momentum are overwhelming, and its broad disc is difficult to grapple or displace. Against a large shark, however, the mismatch in weaponry becomes obvious. Sharks can remove pieces of the exposed pectoral margin, and killer whales can overpower large rays. The manta survives by being large, mobile, perceptive and difficult to catch cleanly, not by trading bites.

Its most impressive qualities are endurance and behavioral complexity. Telemetry now confirms repeated long-distance travel and dives beyond 1,000 m. Mantas also use cleaning stations, aggregate predictably, perform elaborate courtship pursuits and respond to mirrors in ways that have generated serious scientific debate about cognition. The evidence supports a highly capable fish, but not exaggerated claims of proven human-like self-awareness. In ABS terms, the giant manta is a defensive pelagic endurance specialist whose spectacular size masks a surprisingly modest offensive arsenal.

### Future structured-field proposals

- `disc_width_cm`: essential for rays and more biologically meaningful than ordinary body length.
- `max_depth_m`: useful for pelagic and diving matchup/environment modeling.
- `locomotion_mode`: oscillatory pectoral-fin propulsion.
- `weapon_force_n`: only if future direct measurements exist; do not infer from body mass.
- `reproductive_interval_years`: useful for ecology/conservation expansion, not battle scoring.

## 9. Mandatory image section

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/manta-ray.png` (not created)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Mobula_birostris_427433779.jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/5/5d/Mobula_birostris_427433779.jpg
- **file_format_verified:** Source is a 2048x1536 JPEG, not a finished PNG.
- **alpha_verified:** No. No transparent asset exists.
- **full_body_verified:** No. Visual inspection shows both pectoral tips and cephalic region, but the long tail reaches the lower frame boundary and its endpoint cannot be certified as complete.
- **adult_verified:** No. Exact species is supported, but the source metadata does not explicitly establish adulthood.
- **sex_verified_or_unknown:** Unknown.
- **license_status:** CC BY-SA 4.0, iNaturalist-origin license reviewed on Wikimedia Commons.
- **notes:** Exact-species, reusable and 2048 px on the long side, but strict tail completeness plus adulthood are unresolved. A second 2048x1536 CC BY 4.0 candidate (`Mobula birostris 179661782.jpg`) was visually inspected and rejected because a pectoral tip is clipped at the upper frame edge. No web JPEG is treated as a completed PNG. Current connected GitHub writer is text-only, so no binary cutout was fabricated.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| NOAA Fisheries, Giant Manta Ray | https://www.fisheries.noaa.gov/species/giant-manta-ray | Taxonomy, maximum size, longevity, range, reproduction, threats | *M. birostris*; disc width up to 26 ft; weight up to 5,300 lb; lifespan at least 45 y; usually one pup every 2-3 y | **High** institutional source; maxima are not representative adult values |
| NOAA ESA Recovery Status Review (2024) | https://www.fisheries.noaa.gov/s3/2024-10/Recovery-Status-Review-for-Giant-Manta-Ray_508.pdf | Longevity, dimorphism, life history | Max age estimated 45 y; females as much as 18% larger; extremely conservative reproduction | **High** synthesis; some demographic values remain estimates |
| Manta Trust, *Mobula birostris* guide | https://www.mantatrust.org/mobula-birostris | Representative/max disc width, mass, ID | Average 400-500 cm DW, max 680 cm, up to 2,000 kg, likely ~40 y | **High-moderate** specialist conservation authority |
| Florida Museum, Manta Ray | https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/manta-ray/ | Mass, maturity, diet, predators | Large specimens ~1,350 kg; males mature ≥4 m DW, females ~5 m; large sharks predators | **High-moderate** museum source; lifespan figure is older/lower than NOAA |
| Ozaki et al., Journal of Fish Biology (2026) | https://onlinelibrary.wiley.com/doi/full/10.1111/jfb.70574 | Movement, endurance, depth | >200 km in 6 d; ~150 km return; mean 16.1 km/day; max depth 1,082 m | **High** direct telemetry but **n=1**, so do not universalize exact movement rate |
| Couturier et al. 2012, Journal of Fish Biology | https://onlinelibrary.wiley.com/doi/10.1111/j.1095-8649.2012.03264.x | Mobulid ecology, feeding, aggregation, movement | Highly mobile family; ram filter feeding; cephalic lobes guide water; aggregations track productivity | **High** peer-reviewed review; some sections pool mobulid species |
| Arostegui 2025, Journal of Animal Ecology | https://besjournals.onlinelibrary.wiley.com/doi/abs/10.1111/1365-2656.14200 | Brain physiology | Large metabolically expensive mobulid brains may contribute to cranial endothermy; cognition cannot be inferred from size alone | **High** peer-reviewed conceptual synthesis; thermogenic role is a hypothesis |
| Ari & D'Agostino 2016, Journal of Ethology record | https://eurekamag.com/research/064/826/064826336.php | Cognition | Two captive giant mantas showed contingency-checking and self-directed mirror behaviors | **Moderate-high** peer-reviewed experiment; only two animals and not definitive self-recognition |
| Stewart et al. 2016 response, Manta Trust portal | https://research.mantatrust.org/stewart-et-al-2016-3 | Cognition conflict | Mirror behaviors may overlap normal manta social behavior; stronger evidence needed | **High** scientific critique; prevents overclaiming self-awareness |
| Diversity 2024 courtship observation | https://doi.org/10.3390/d16060319 | Courtship mechanics | Mature male *M. birostris* pursued/bumped female ray; second male flanked her | **High** direct observation; interspecific courtship event, so generalization is cautious |
| Frontiers in Marine Science 2022 | https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2022.773897/full | Injury, toughness, vulnerability | Shark-bite scars and pectoral-fin amputations documented in manta rays | **High** peer-reviewed injury study; includes *M. alfredi* and *M. birostris* |
| Commons / iNaturalist candidate | https://commons.wikimedia.org/wiki/File:Mobula_birostris_427433779.jpg | Image taxon, dimensions, license | Exact *M. birostris*, 2048x1536, CC BY-SA 4.0 | **High** provenance; adult/sex and tail endpoint unresolved |

### Source conflicts and uncertainty

- **Maximum width:** authoritative sources vary from roughly 6.8 to 7.9 m, while historical/anecdotal reports can reach about 9.1 m. These are maxima, not canonical values.
- **Mass:** institutional maxima range from about 1,350 kg in older museum material to 2,000 kg (Manta Trust) and 2,404 kg (NOAA). Mass is difficult to obtain from live free-swimming mantas, so the 1,400 kg canonical female should be treated as a representative modeling value, not a measured species average.
- **Lifespan:** older Florida Museum material gives ~20 y, whereas current NOAA synthesis supports at least/estimated maximum 45 y and Manta Trust about 40 y. The newer specialist/agency synthesis is preferred.
- **Speed:** repeated 24-35 km/h claims were not supported strongly enough for a factual maximum. `speed_mps` remains 0.0.
- **Cognition:** mirror behavior is scientifically interesting but contested. The report credits behavioral sophistication without declaring proven self-awareness.

## 11. Cross-animal normalization notes

- **Versus Manatee (500 kg; Attack 36 / Defense 50 / Agility 48 / Stamina 78 / Intelligence 58 / Special 77):** Manta Ray is much larger, far more maneuverable in open water and has stronger sustained pelagic movement, but remains only modestly above Manatee in Attack because neither possesses dedicated lethal weaponry. Manta's Special is not inflated merely for being unusual; Manatee's exceptional tactile/auditory package remains competitive.
- **Versus Leatherback Sea Turtle (400 kg; Attack 35 / Defense 60 / Agility 59 / Stamina 95 / Intelligence 49 / Special 89):** Manta is more agile and cognitively flexible but less physically protected. Leatherback retains higher Defense, Stamina and Special because its shell/body construction, extreme migration and thermal/diving physiology are more matchup-defining.
- **Versus Great White Shark and other large macropredators:** Giant manta body mass does not justify predator-equivalent Attack. Documented shark predation is an explicit calibration boundary.
- **Anti-compression check:** 1.4-tonne body scale places Size/Raw Power far above small fish and birds, while Weaponry/Ferocity remain low. This preserves the distinction between absolute mass and practical damage delivery.
- **Speed/agility check:** `speed_mps` is unresolved and therefore 0.0; Agility is based on observed turning, looping, courtship evasion and three-dimensional control, not a copied top-speed number.
- **Double-counting check:** deep diving and sustained movement mainly support Stamina; they do not independently inflate Attack or Defense. Large brain supports Intelligence cautiously, while proposed cranial thermogenesis is noted under Special biology without being treated as proven cognitive superiority.

## Final verification against staging rules

- Exact taxon resolved: **yes**
- Healthy representative adult and fighting-sex rationale: **yes**
- Dimorphism/population variation/conflicts documented: **yes**
- Canonical physical fields proposed without fabricated PSI: **yes**
- All current twelve site substats rescored with one decimal: **yes**
- Six headline ratings with one decimal: **yes**
- Exactly **2** special abilities: **yes**
- Exactly **2** unique traits: **yes**
- Expanded ecology/profile/fun facts/source ledger: **yes**
- Cross-roster absolute calibration: **yes**
- Mandatory image section and honest pending status: **yes**
- Production data/site/live image changes: **none**
