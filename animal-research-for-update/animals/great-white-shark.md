# Great White Shark

## 1. Identity and canonical specimen

- **Common name:** Great White Shark / White Shark
- **Scientific name:** *Carcharodon carcharias* (Linnaeus, 1758)
- **Exact taxon represented:** The living species *Carcharodon carcharias*, family Lamnidae. This report does not pool megalodon or other lamnids into the profile.
- **Living/extinct:** Living.
- **Canonical combat specimen:** Healthy, fully mature **female**, approximately **900.0 kg** and **500.0 cm total length**. Females are the larger sex and mature later than males, so a representative mature female is the appropriate fighting-sex standard. This is intentionally not a 6+ m record individual.
- **Dimorphism and population variation:** NOAA currently places male maturity at about 26 years and female maturity at about 33 years. Florida Museum summarizes male maturity near 350-410 cm and female maturity near 450-500 cm. Females can exceed 6 m, but verified and estimated maxima are not representative canonical values. Movement studies also show sex-related spatial differences, with mature females capable of very broad oceanic movements.

## 2. Physical dimensions and ranges

### Mass
NOAA gives a species maximum of roughly **4,500 lb (2,041 kg)**, while CMS notes individuals over 6 m and up to roughly 3 tonnes. Maximum mass is strongly size-dependent and should not be substituted for a representative adult. Published summaries of mature females commonly place them in the high hundreds of kilograms to around a tonne or more. For ABS, **900.0 kg** is a deliberately conservative representative mature-female mass rather than a maximum.

**Confidence:** Medium. Direct adult-female length evidence is much stronger than a universal mature-female mass average, and condition varies substantially.

### Length
- NOAA: birth about 4 ft and adults up to about 21 ft.
- Florida Museum: estimated maximum around 600 cm, possibly 640 cm; male maturity about 350-410 cm and female maturity about 450-500 cm.
- A southern Australian tracking study included females from 2.2 to **5.7 m TL**.
- NOAA's 2024 necropsy of a **460 cm total-length female** found that individual was still reproductively immature, reinforcing that large female size alone does not guarantee maturity.

**Canonical total length:** **500.0 cm**, representing the lower end of clearly mature-female scale without selecting an exceptional giant.

### Height
A terrestrial shoulder-height concept is inapplicable to a shark. Body depth is biologically meaningful but is not the site's `height_cm` concept.

**Canonical `height_cm`: 0.0.**

### Speed and locomotion
Smithsonian Ocean states great whites are capable of about **50 km/h (35 mph)**. This is an institutional maximum-speed statement rather than a controlled treadmill-like maximum trial. It converts to **13.9 m/s** and is used with moderate confidence.

The species is a highly efficient pelagic swimmer with a fusiform body, large pectoral fins and lunate caudal fin. Satellite studies demonstrate movements of thousands of kilometres and use of coastal, shelf, slope and open-ocean habitats. Great whites can also execute rapid vertical approaches and breaches when attacking pinnipeds.

### Lifespan and maturity
NOAA gives **70 years or more** and reports male maturity around 26 years and female maturity around 33 years. Bomb-radiocarbon work is the basis for the modern recognition of much greater longevity than older estimates.

**Canonical lifespan:** **70.0 years**, representing the well-supported modern longevity scale, not a claim that every individual reaches 70.

### Bite force, teeth and jaws
Wroe et al. (2008) used three-dimensional biomechanical modelling rather than a live bite-pressure measurement. Their model predicts that a very large white shark may exceed roughly **1.8 tonnes-force**, approximately **17.7 kN**, of bite force. The study explicitly notes that mass-specific jaw-adductor performance is not extraordinary; the huge absolute force comes largely from the animal's size.

That force is **not PSI**. PSI requires a defensible contact area and loading geometry, so the site's old 4,000 PSI value is not retained as a verified factual field.

White shark teeth are broad, triangular and serrated. Florida Museum and NOAA describe the cutting dentition, while the Seal Island predation study found that sharks commonly bite obliquely with anterolateral teeth via a lateral snap. Museum/artefact references commonly place adult teeth around 4-6 cm high, with some larger, but tooth position and specimen size matter substantially.

### Defensive structures
- Thick, muscular body at very large absolute mass.
- Cartilaginous skeleton is lighter and more flexible than bone, but not armor.
- Dermal denticles create a tough hydrodynamic skin surface but should not be scored like osteoderm or shell armor.
- Countershading assists concealment rather than trauma resistance.
- Regional endothermy supports performance in cool water but is not physical armor.

## 3. Proposed canonical factual fields

| Field | Proposed value | Rationale |
|---|---:|---|
| `weight_kg` | **900.0** | Representative mature female, deliberately below exceptional 2,000+ kg maxima. |
| `height_cm` | **0.0** | Terrestrial height is inapplicable; do not invent body depth as shoulder height. |
| `length_cm` | **500.0** | Representative mature-female scale; female maturity is roughly 450-500 cm and larger females occur. |
| `speed_mps` | **13.9** | Smithsonian 50 km/h institutional capability, moderate confidence. |
| `lifespan_years` | **70.0** | NOAA: 70 years or more. |
| `bite_force_psi` | **0.0** | Strong force model exists, but no defensible PSI conversion/contact area. |

A zero in an unsupported/inapplicable field is a schema-safe research recommendation, not a claim that the biological capability is literally absent unless explicitly stated.

## 4. Combat biology

### Primary weapons
The jaws are the decisive weapon. Large serrated triangular teeth slice flesh rather than merely puncturing it, and the shark can combine jaw force with head and body motion. The 2005 Seal Island study showed that predatory bites are often delivered obliquely using anterolateral teeth and a lateral jaw snap. This creates large cutting wounds and makes the weapon system more than a simple clamp.

### Offensive mechanics
Great whites are momentum-based ambush predators. At Seal Island, researchers documented **2,088 natural predations** on Cape fur seals from 1997-2003. Most attacks lasted less than a minute, and a single breach was common. Polaris breach was the most common initial strike in scored attacks. This is strong evidence for explosive, high-commitment first-contact offense rather than prolonged wrestling.

### Hunting tactics and learning
Seal Island predation was non-random. A spatial analysis of 340 predatory interactions found a defined search base about 100 m seaward of the seals' primary entry/exit point. Larger sharks showed more concentrated search patterns and greater success than smaller sharks. The earlier ethogram study also reported individual differences, trial-and-error learning, light-dependent timing and cessation of active seal predation when returns fell. These observations justify meaningful Tactics and Intelligence without anthropomorphizing the species.

### Defense and toughness
At around 900 kg, a mature female has formidable absolute inertia and tissue volume. The body is muscular and robust, but there is no true armor. Gills, eyes and exposed fins remain vulnerable. Defense therefore comes mainly from scale, mobility and a dangerous counterattack rather than protective plating.

### Maneuverability and agility
A great white is highly capable in three-dimensional water but cannot match the instantaneous turning radius of small fish, pinnipeds or tiny aerial animals. Its caudal propulsion supports acceleration and breaches, while large pectoral fins aid lift and pitch control. Agility should be high for such a massive predator, but not confused with the 50 km/h speed figure.

### Endurance and physiology
Lamnid regional endothermy lets white sharks keep key tissues warmer than ambient water and supports activity across a broad thermal range. Satellite tracking demonstrates migrations and tracks of thousands of kilometres. A southern Australian study logged more than **109,900 km** across 43 tagged sharks, with many individual tracks exceeding 1,000 km. Mature females in the North Atlantic have also been tracked across oceanic habitat for months, including repeated dives near 1,000 m. This supports very high sustained locomotor endurance, although migration endurance is not identical to continuous maximum-intensity fighting.

### Senses
Great whites combine olfaction, vision, mechanoreception via the lateral-line system and electroreception via the ampullae of Lorenzini. These channels help detect prey and orient in low-visibility water. Sensory diversity is combat-relevant, but popular claims of near-supernatural detection distances are not used without primary support.

### Intelligence and behavioral flexibility
White sharks are not simple reflex machines. The Seal Island studies support individual hunting styles, experience-related refinement, spatially structured search, timing decisions and sensitivity to competition. Florida Museum also describes the species as inquisitive and behaviorally complex. Intelligence remains well below primate/corvid ceilings, but should be substantially above a simplistic low-fish placeholder.

### Intraspecific interaction
White sharks often forage alone but aggregate at predictable prey resources. Competition can alter attack quality and spatial use. Social interaction does not turn a single shark into a pack fighter and is therefore not allowed to multiply its Raw Power or Attack.

### Environmental strengths
- Open ocean and coastal water provide full three-dimensional mobility.
- Deep approaches enable concealment and upward ambush.
- Cool temperate water remains usable because of regional endothermy.
- Large water columns permit speed buildup and breach attacks.

### Environmental limitations
- Completely dependent on water for respiration and support.
- Shallow/confined water sharply reduces turning room and vertical attack geometry.
- Cannot reverse or stop as abruptly as small maneuverable aquatic animals.
- Terrestrial matchups are biologically nonfunctional and should not be interpreted as normal arena performance.

### Weaknesses
- No armor despite great size.
- Gills and eyes are vulnerable soft structures.
- High-speed ambush attacks can overshoot agile prey.
- Large turning radius relative to small aquatic opponents.
- Reproductive life history is extremely slow, though that matters to ecology rather than a single fight.

### Matchup archetypes
- **Strong against:** large soft-bodied aquatic animals, pinniped-sized opponents, slower sharks and prey vulnerable to a first-pass slicing bite.
- **Mixed against:** similarly massive marine predators where maneuverability, bite placement and counterattack risk dominate.
- **Weak against:** much larger marine megafauna, opponents with extreme size/ramming advantage, or very small agile targets that can exploit the shark's turning radius.

## 5. Proposed ABS substats

All values use the absolute 225-animal scale and are independently reassessed rather than inherited from live placeholders.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **82.0** | Roughly 900 kg canonical mass, powerful caudal propulsion and a modelled very-large-shark bite near 17.7 kN; far above terrestrial mid-sized predators but below the largest megafauna. |
| Weaponry | **91.0** | Large serrated cutting teeth, wide jaws, repeated tooth replacement and high-force lateral-snap delivery form an elite natural weapon system. |
| Ferocity | **78.0** | Commits explosively to dangerous prey, but empirical hunting shows selectivity and cessation when returns decline rather than indiscriminate aggression. |
| Protection | **48.0** | Great mass, skin and body depth help, but no armor; exposed gills/eyes prevent a very high score. |
| Toughness | **72.0** | Large robust body and substantial tissue volume confer strong absolute trauma tolerance, while critical soft structures remain exposed. |
| Maneuverability | **71.0** | Excellent three-dimensional control for a 5 m predator, but size imposes a real turning-radius penalty. |
| Speed | **72.0** | Institutional maximum about 50 km/h is very fast for a large aquatic predator, without treating speed as agility. |
| Endurance | **91.0** | Long-distance migrations and multi-thousand-kilometre tracks plus regional endothermy support elite sustained travel. |
| Recovery | **63.0** | Robust large shark physiology, but no evidence for exceptional regenerative ability; kept below Endurance. |
| Tactics | **77.0** | Non-random search bases, timing, individual hunting styles and experience-related refinement are directly documented. |
| Senses | **93.0** | Multimodal visual, olfactory, lateral-line and electroreceptive suite is unusually strong for aquatic prey detection. |
| Abilities | **86.0** | Regional endothermy plus electroreception materially alter hunting performance, but do not duplicate jaw damage already scored under Weaponry. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **88.0** | Massive momentum, serrated cutting dentition, strong jaws and empirically documented high-energy ambush strikes make it an elite living predator, while still leaving room for much larger/extinct roster ceilings. |
| **Defense** | **68.0** | Large mass and toughness matter greatly, but lack of armor and vulnerable gills/eyes prevent megafauna-level protection. |
| **Agility** | **73.0** | Powerful acceleration and three-dimensional control for its size, constrained by large-body turning radius. |
| **Stamina** | **91.0** | Regional endothermy and enormous migration capacity support elite sustained aquatic output. |
| **Intelligence** | **70.0** | Spatial search, experience-related refinement and individual hunting strategies exceed simplistic fish stereotypes but remain below high-cognition mammal/bird anchors. |
| **Special** | **87.0** | Electroreception and regional endothermy are both rare, matchup-changing biological systems. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Ampullary Target Lock** - the ampullae of Lorenzini add electroreceptive information to the shark's visual, olfactory and mechanosensory prey-detection suite, helping orient at close range when visibility is poor.
2. **Warm-Core Pursuit** - regional endothermy keeps important tissues warmer than surrounding seawater, supporting high-performance swimming and foraging across cool-water habitats.

### Unique traits
1. **Serrated Lateral Snap** - broad triangular serrated teeth are deployed in an empirically documented oblique/lateral bite that maximizes cutting damage rather than relying on a simple perpendicular clamp.
2. **Vertical Ambush Geometry** - the shark can exploit depth, countershading and explosive upward acceleration to strike surface prey from below, sometimes carrying the attack into a full breach.

## 8. Expanded profile

### Habitat and range
Great white sharks occur broadly in temperate and subtropical seas worldwide, using coastal, neritic and oceanic habitats. NOAA lists U.S. occurrence from Alaska and the West Coast through Pacific Islands, the Southeast and New England/Mid-Atlantic regions. Tracking studies show that large individuals cross ocean basins rather than remaining permanently coastal.

### Diet and ecology
Diet changes with size and opportunity. Juveniles emphasize fishes, smaller sharks/rays and squid, while larger sharks increasingly exploit marine mammals and other energy-rich prey. The species is an apex predator whose presence can alter prey behavior around seal colonies.

### Social structure
Primarily solitary in routine movement, but multiple individuals aggregate at prey-rich sites. Competition can influence attack quality and spatial positioning. This is not equivalent to cooperative pack hunting.

### Reproduction and life history
White sharks grow slowly and mature exceptionally late. NOAA currently estimates male maturity around 26 years and female maturity around 33 years. Reproductive details remain unusually uncertain for such a famous species. Mature female tracking supports a multi-year movement/reproductive cycle and widely separated habitat use. Young are born live and already large, around 1-1.5 m depending on source and population.

### Conservation
CMS reports the species as **Vulnerable** on the IUCN Red List and lists it on CMS Appendices I and II; international trade is restricted under CITES Appendix II. Principal threats include bycatch, historical targeted fishing/persecution and the species' very slow life history.

### Adaptations
- Fusiform body and lunate tail for efficient high-speed swimming.
- Regional endothermy for elevated performance across cool water.
- Countershading for concealment in the water column.
- Serrated, replaceable cutting teeth.
- Electroreception plus lateral-line mechanoreception.
- Long-range migratory capacity and deep-diving behavior.

### Human interaction
The species has an outsized cultural reputation. Human bites are biologically important but should not be used to infer routine aggression toward people. Conservation and ecotourism now coexist with bycatch risk and historic persecution. Great whites are protected or prohibited from retention in multiple jurisdictions.

### Genuine fun facts
- Modern ageing work indicates some white sharks can live **70 years or more**, far longer than older estimates suggested.
- NOAA examined a **4.6 m female** that was still reproductively immature, showing why body size alone is a poor shortcut for adult reproductive status.
- Seal Island researchers recorded more than **2,000 natural predation events**, providing one of the richest behavioral datasets for a large marine predator.
- Their seal-hunting success was highest near dawn and declined as ambient light increased in the Seal Island study.
- Satellite-tagged mature females can spend months offshore and repeatedly dive to nearly **1,000 m**.
- The famous enormous bite is impressive in absolute terms, but the biomechanical study found its jaw-adductor performance is not exceptional after body mass is considered.

### Concise site-ready summary
A five-metre mature female great white is an elite aquatic ambush predator built around a massive serrated cutting bite, high-speed vertical attacks, exceptional sensory coverage and warm-core endurance. Its offense is extreme, but it is not armored and its large body sacrifices some tight-turn agility.

### Rich narrative profile
The great white's battle profile is best understood as a fast heavy weapons platform, not as an invulnerable movie monster. A representative mature female weighs close to a tonne and can build enough speed to turn an upward attack into a breach. The jaws combine huge absolute force with serrated teeth and a lateral cutting motion documented during natural predation. Against soft-bodied marine opponents, one clean first pass can be fight-changing.

Its strongest advantage is that the weapon system is attached to an unusually complete hunting package. Countershading helps conceal the approach. Vision, smell, lateral-line input and electroreception provide overlapping target information. Regional endothermy supports performance in cool water, and long-distance tracking shows that this is not merely a short-burst animal. Behavioral studies also show learned refinement, spatial search patterns and timing decisions.

The limits matter just as much for ABS calibration. A great white has no shell, osteoderm armor or thick blubber shield. Its gills and eyes are exposed. Five metres of body cannot pivot like a seal or small fish, and a missed high-speed pass costs position. Its bite-force literature is also often misreported: the strongest scientific evidence is a modelled force in newtons/tonnes-force, not a measured 4,000 PSI value. The resulting ABS profile should therefore be elite in Attack, Stamina, Senses and Special, strong but not ceiling-level in Defense, and high rather than extreme in Agility.

### Future field proposals
- Add `bite_force_n` separately from `bite_force_psi` so force models are not converted into fictitious pressures.
- Add `canonical_sex` and `maturity_basis`, important for species with strong female-biased size and very late maturity.
- Add `regional_endothermy` as a structured physiological field.
- Add `aquatic_depth_range_m` and `migration_scale_km` for marine animals whose ecology is poorly represented by terrestrial dimensions.
- Add evidence type labels such as measured, modelled, institutional summary and editorial rating.

## 9. Mandatory image section

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/great-white-shark.png` (**not present; no completion claimed**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Carcharodon_carcharias.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/5/56/Carcharodon_carcharias.jpg
- `file_format_verified`: Source is a real JPEG photograph, **3264x2448**. No PNG was produced.
- `alpha_verified`: **No**
- `full_body_verified`: **Candidate appears to contain the complete shark, but strict full-silhouette verification is not promoted because this run could not certify every fin/tail margin at original resolution through the connected image path.**
- `adult_verified`: **No.** Exact species is explicit, but source metadata does not explicitly establish adulthood.
- `sex_verified_or_unknown`: Unknown.
- `license_status`: **Public domain**, released by the photographer/uploader Sharkdiver68.
- `notes`: This is preferred over cropped close-ups because it is a reusable high-resolution real photograph of exact *C. carcharias*. A separate photographer page located an explicitly identified **4.2 m female** named Finn, but redistribution permission is not established and 4.2 m is below the preferred mature-female canonical size. Current GitHub file writers are UTF-8 text-only, so no binary cutout is fabricated or claimed.

## 10. Evidence and source ledger

| Source | Direct URL | Claim supported | Finding/context | Confidence / conflict |
|---|---|---|---|---|
| NOAA Fisheries, White Shark | https://www.fisheries.noaa.gov/species/white-shark | Taxonomy, maximum size, longevity, maturity, diet | Up to 4,500 lb, up to 21 ft; lifespan 70+ yr; male maturity ~26 yr, female ~33 yr. | High; institutional synthesis. |
| NOAA Fisheries necropsy | https://www.fisheries.noaa.gov/feature-story/necropsy-offers-rare-opportunity-study-white-shark-biology | Female maturity uncertainty | 460 cm TL female estimated near 30 yr was still reproductively immature. | High; direct necropsy. |
| Florida Museum, White Shark | https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/white-shark/ | Length, maturity, taxonomy, endothermy, behavior | Max ~600 cm, possibly 640; males mature 350-410 cm, females 450-500 cm; endothermic lamnid. | High-medium; museum synthesis. |
| Wroe et al. 2008, Journal of Zoology | https://doi.org/10.1111/j.1469-7998.2008.00494.x | Bite mechanics | 3-D model predicts large white sharks may exceed ~1.8 tonnes-force; mass-specific force unremarkable. | High for model; **not live-measured PSI**. |
| Martin et al. 2005, JMBA | https://doi.org/10.1017/S002531540501218X | Predation, bite delivery, learning | 2,088 natural seal predations; most <1 min; breach/lateral-snap behavior; individual differences and trial-and-error learning. | High; field study. |
| Hammerschlag et al. 2009, Journal of Zoology | https://doi.org/10.1111/j.1469-7998.2009.00586.x | Spatial hunting tactics | 340 interactions; nonrandom search base; larger sharks more concentrated and successful. | High. |
| Smithsonian Ocean | https://ocean.si.edu/ocean-life/sharks-rays/built-speed | Speed | Institutional statement: about 50 km/h / 35 mph. | Medium; not a controlled maximum trial. |
| Bradford et al. 2020, Marine Biology | https://link.springer.com/article/10.1007/s00227-020-03712-y | Movement, sex differences, endurance | 43 sharks, >109,900 km tracking; females up to 5.7 m and broader dispersal. | High. |
| Gaube et al. 2018, Scientific Reports | https://www.nature.com/articles/s41598-018-25565-8 | Mature-female oceanic behavior | Mature females use Gulf Stream/Sargasso eddies; repeated dives nearly 1,000 m. | High. |
| Domeier & Nasby-Lucas 2013, Animal Biotelemetry | https://link.springer.com/article/10.1186/2050-3385-1-2 | Mature-female reproductive movement | Two-year migration pattern, offshore gestation phase and widely separated nursery areas. | High. |
| CMS species account | https://www.cms.int/species/carcharodon-carcharias | Conservation, size, endothermy | IUCN Vulnerable; CMS I & II; CITES II; >6 m and up to ~3 t; highly active/endothermic. | High institutional conservation source. |
| Fishes of Texas | https://fishesoftexas.org/taxa/carcharodon-carcharias/ | Dentition/morphology | Broad triangular serrated teeth; 22-24 tooth rows; fusiform stout body, lunate tail. | Medium-high regional reference. |
| Wikimedia Commons, Sharkdiver68 | https://commons.wikimedia.org/wiki/File:Carcharodon_carcharias.jpg | Image provenance | Exact species; 3264x2448 real photo; public-domain release. | High provenance; age/sex not established. |
| Manny Katz / Nautilus Arts Centre | https://www.nautilusartscentre.com.au/manny-katz | Image discovery comparator | Photographer identifies pictured white shark Finn as a 4.2 m female. | Good identity metadata, but reuse permission not established; not selected. |

## 11. Confidence, conflicts and uncertainty

- **Taxon:** High confidence, exact *Carcharodon carcharias*.
- **Canonical sex:** High confidence. Females are larger and the canonical combat standard should use the stronger/larger sex.
- **Canonical length:** High-medium. 500 cm is biologically representative of mature-female scale, but maturity is variable and NOAA documented a 460 cm female that was still immature.
- **Canonical mass:** Medium. 900 kg is a representative synthesis, not a direct population-wide mature-female mean. Preserve uncertainty rather than pretending a universal adult mass exists.
- **Speed:** Medium. Smithsonian's 50 km/h is a credible institutional value, but not an instrumented physiological maximum.
- **Lifespan:** High for the 70+ year scale.
- **Bite:** High confidence that the biomechanical force estimate is meaningful; high confidence that converting it to PSI without contact area would be invalid. Therefore `bite_force_psi = 0.0`.
- **Conservation:** High institutional confidence that current referenced status is Vulnerable, while local population trajectories differ.
- **Image:** Exact species, real photo, resolution and public-domain reuse are verified. Adulthood/sex and strict every-fin silhouette verification are not, so no completion claim is made.

## 12. Cross-animal normalization notes

- **Versus Bull Shark:** Great White should be materially higher in absolute Raw Power, Attack and size because a mature female great white is several times heavier. Bull Shark may remain competitive in environmental versatility, but freshwater tolerance must not inflate its physical power.
- **Versus Gray Wolf:** Great White's roughly 900 kg mass and cutting jaw system create an enormous absolute Attack/Raw Power gap over the 50 kg wolf. Wolf can retain stronger terrestrial turning flexibility and social coordination without narrowing that physical gap.
- **Versus Gorilla:** The canonical great white is more than four times the staged 195 kg mountain-gorilla mass and has a dedicated high-force cutting weapon system, so its Attack and Raw Power must be clearly higher. Gorilla remains superior in manipulative cognition and terrestrial flexibility.
- **Versus Great Horned Owl / Golden Eagle:** Raptors can outrank the shark in fine aerial maneuverability, but cannot approach its absolute power, durability or damage output. This preserves category separation.
- **Versus Megalodon:** Great White must remain well below the extinct giant in absolute size, bite-force potential and Attack ceiling. Wroe et al.'s same modelling framework estimated megalodon forces roughly an order of magnitude greater, making this a particularly useful anti-compression anchor.
- **Proportional-strength check:** No credit is added for being impressive 'for a fish'. Scores reflect absolute combat capability.
- **Speed/agility check:** 13.9 m/s informs Speed but does not automatically produce elite Agility; turning radius and body scale constrain Agility to 73.0.
- **Double-counting check:** Serrated jaws drive Attack/Weaponry; electroreception and endothermy drive Special/Abilities; migration supports Stamina. These mechanisms are not multiplied across unrelated categories.
- **Inflation check:** Attack 88.0 is elite but deliberately below the roster ceiling and below much larger/extinct macropredator anchors. Defense 68.0 explicitly recognizes lack of armor.