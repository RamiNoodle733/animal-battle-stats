# Arctic Wolf Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Arctic Wolf
- **Scientific name / taxon:** *Canis lupus arctos* Pocock, 1935, traditionally treated as a High Arctic subspecies of the gray wolf (*Canis lupus*).
- **Family:** Canidae
- **Status:** Living
- **Exact ABS animal represented:** High Arctic wolf of the Canadian Arctic Archipelago, especially the Queen Elizabeth Islands/Ellesmere system, not a generic white-colored gray wolf.
- **Canonical specimen:** Representative healthy mature adult male, approximately **40.0 kg**. Toronto Zoo reports males at 34–46 kg. This avoids importing much larger mainland gray-wolf maxima into the High Arctic form.
- **Sexual dimorphism:** Males are generally larger and are the appropriate combat baseline. Toronto Zoo reports males 34–46 kg and females 36–38 kg.
- **Taxonomic caveat:** Subspecies boundaries within North American *Canis lupus* are debated. The ABS label is retained as *C. l. arctos* because it maps to a recognizable High Arctic population/form, while future taxonomy should not imply that every proposed wolf subspecies is genetically discrete.

## 2. Physical measurements

### Mass

Toronto Zoo gives **34–46 kg** for male Arctic wolves and **36–38 kg** for females. WWF publishes a broader 70–175 lb range, but that upper end overlaps general gray-wolf extremes and is not used as the representative High Arctic male.

- **Canonical mass:** **40.0 kg**
- **Defensible adult-male range:** **34–46 kg**
- **Confidence:** High for scale; moderate-high for the single canonical value

### Length

WWF reports Arctic wolves at **3.2–5.9 ft (0.98–1.80 m)**. Measurement conventions are not always explicit about tail inclusion. A mid-range robust adult male recommendation is therefore preferable to using the maximum.

- **Canonical total length:** **150.0 cm**
- **Broad published range:** approximately **98–180 cm**
- **Confidence:** Moderate because sources mix measurement conventions

### Height

Institutional Arctic-wolf measurements are less standardized than mass. Common zoological descriptions place shoulder height broadly in the 63–79 cm range.

- **Canonical shoulder height:** **72.0 cm**
- **Confidence:** Moderate

### Speed and travel rate

A direct field study by L. David Mech followed *Canis lupus arctos* on Ellesmere Island and measured mean routine travel at **8.7 km/h (2.42 m/s)** and den-bound travel at **10.0 km/h (2.78 m/s)**. These are travel speeds, not maximal sprint speeds. Generic wolf sprint claims should not be mislabeled as measured Arctic-wolf maxima.

- **Canonical `speed_mps`:** **0.0** pending a defensible Arctic-wolf maximum sprint measurement
- **Measured sustained travel context:** 2.42–2.78 m/s
- **Confidence:** High for travel speeds, low for exact top sprint speed

### Lifespan

Wild gray-wolf longevity varies sharply with mortality regime. Arctic-specific robust longevity datasets are sparse, and tertiary Arctic-wolf sources often repeat 7–10 years without clear primary derivation.

- **Canonical lifespan:** **8.0 years** as a practical wild ecological recommendation
- **Confidence:** Moderate-low; revisit if a High Arctic demographic longevity dataset provides a stronger estimate

### Bite, teeth and claws

Arctic wolves possess the gray wolf's predatory dentition, including large canines and carnassials capable of gripping, tearing and processing large ungulate prey. Comparative cranial work supports robust wolf canine bending strength, but this run found no species-specific in-vivo Arctic-wolf bite-force PSI measurement.

- **Canonical `bite_force_psi`:** **0.0**
- **Reason:** no defensible Arctic-wolf PSI measurement; force estimates must not be converted to pressure without contact area
- **Claws:** non-retractile, primarily traction tools rather than felid-like slashing weapons
- **Confidence:** High for functional weapon system, low for exact pressure

### Fur, feet and body form

Toronto Zoo describes year-round white fur, a long outer coat with soft thick underfur, large feet, and somewhat shorter ears and muzzle than other gray wolves. These features reduce heat loss and improve mobility in snow. They are environmental defenses, not armor against bites, claws or horns.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 40.0,
  "height_cm": 72.0,
  "length_cm": 150.0,
  "speed_mps": 0.0,
  "lifespan_years": 8.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **40.0 kg:** midpoint-like representative of Toronto Zoo's 34–46 kg male range.
- **72.0 cm:** representative shoulder height without treating a large endpoint as normal.
- **150.0 cm:** robust adult total-length recommendation within WWF's broad range; measurement convention remains a schema issue.
- **0.0 m/s:** measured travel speed exists, but no strong Arctic-specific maximum sprint measurement was found.
- **8.0 years:** provisional wild ecological lifespan, explicitly lower confidence than mass.
- **0.0 PSI:** prevents fabricated pressure from generic wolf bite claims.

## 4. Combat biology

### Primary weapons and offensive mechanics

The jaws are the main weapon. A wolf closes distance, seizes with the teeth, tears tissue, and uses repeated bites plus body leverage. Against large prey, the crucial system is not one mythical bite-force number but repeated attack, mobility, selection of vulnerable regions, and, where multiple wolves participate, cooperative pressure.

### Secondary weapons

- Strong neck and forequarters assist gripping and wrenching.
- Non-retractile claws provide traction on snow, ice and uneven substrate.
- Body-checking, pulling and pack positioning supplement the bite.

### Defensive adaptations and durability

A 40 kg wolf has substantially more trauma tolerance than an Arctic fox or African wild dog simply from body scale and robust canid construction, but it has no armor. Dense fur buffers weather and may superficially cushion minor contact, yet teeth, horns and claws can penetrate it. Hunting muskoxen is especially hazardous because both sexes carry recurved horns.

### Locomotion and maneuverability

Arctic wolves are long-legged cursorial predators. Their agility is built around controlled running, rapid approach/withdrawal, footing, and coordinated repositioning rather than cat-like explosive turning. Large feet aid travel over snow. Top speed is deliberately not used as a substitute for agility.

### Endurance and stamina

This is a major strength. Mech directly measured routine travel at 8.7 km/h and den-bound travel at 10.0 km/h. USGS GPS work shows packs using enormous territories, with summer ranges of 688–4,728 km² and winter ranges of 1,260–6,026 km². A pupless pack studied in 1993 traveled nomadically over more than 381 km² during July. These data support elite sustained mobility, though they do not mean continuous maximal exertion.

### Senses

Like gray wolves generally, Arctic wolves use strong olfaction, hearing and vision for locating prey, communicating and tracking across open terrain. No extraordinary sensory mechanism such as echolocation is present, but the integrated terrestrial predator sensory package is strong.

### Intelligence, tactics and social coordination

Pack hunting is a major cognitive and tactical advantage. Wolves assess prey, probe defenses, pursue vulnerable individuals and coordinate through body language, scent and vocal communication. Recent Ellesmere synthesis reports repeated testing of muskox herds, with only about one in five hunts succeeding, illustrating both tactical persistence and the danger/difficulty of the prey rather than effortless dominance.

### Hunting behavior

USGS reports Ellesmere packs killing muskoxen, caribou and Arctic hares year-round. A 2025 field analysis based on GPS-collared adults documented year-round territories and a focal pack killing about 0.12 muskox/day, with calves and yearlings forming most documented muskox kills. Hares are also important and can materially support wolf energy budgets.

### Intraspecific fighting and ferocity

Wolves are territorial social carnivores. Conflict can involve threatening displays, biting and lethal inter-pack encounters in gray wolves generally. For ABS, ferocity should be high enough to represent willingness to engage dangerous prey and rivals, but not inflated into indiscriminate aggression.

### Predator defense

Primary defense is awareness, mobility, pack support and avoidance. The wolf is dangerous enough to discourage many similar-sized opponents, but that deterrence is not passive armor. Against muskox horns or substantially larger predators, a clean hit can be catastrophic.

### Environmental strengths

- Extreme cold and High Arctic polar desert
- Snow and ice travel
- Very large low-productivity territories
- White camouflage in snowy landscapes
- Pack hunting against prey much larger than one wolf
- Long-duration travel and prey searching

### Environmental limitations

- Dense white insulation can become costly in warm environments
- No true armor
- Bite requires close contact
- Large-prey attacks expose the head and body to horns/hooves
- Individual wolf is much less capable against large prey than a coordinated pack
- Sparse Arctic prey makes food availability a persistent ecological constraint

### Major weaknesses

1. No passive armor or specialized trauma shield
2. Close-range bite exposes the animal to counterattack
3. A single 40 kg wolf has limited absolute power against megafauna
4. Non-retractile claws are not major cutting weapons
5. Cooperative advantages shrink sharply in one-on-one ABS scenarios
6. High Arctic specialization is less advantageous in heat

### Good matchup archetypes

- Smaller unarmored mammals
- Similar-sized prey lacking strong counter-weapons
- Opponents vulnerable to repeated mobile biting
- Cold-environment opponents with poorer thermal adaptation

### Bad matchup archetypes

- Heavy armor/shells
- Large horned or hoofed herbivores in a one-on-one fight
- Big cats with superior close-range grappling and claws
- Large crocodilians
- Megafauna whose mass overwhelms canid leverage

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **35.0** | About 40 kg is substantial relative to small animals but far below big cats, bears and megafauna. |
| Raw Power | **42.0** | Strong cursorial carnivore musculature and pulling/gripping power, but absolute force remains constrained by body mass. |
| Natural Weapons | **52.0** | Effective predatory jaws and tearing dentition; claws add traction rather than a second major weapon. |
| Armor | **17.0** | Thick coat is excellent insulation but weak physical armor. |
| Resilience | **49.0** | Robust, cold-hardy canid able to operate under severe energetic/weather stress, without unusual trauma resistance. |
| Speed | **62.0** | Strong cursorial locomotion; score is conservative because exact Arctic-wolf sprint maximum is unresolved. |
| Maneuverability | **61.0** | Good running control and attack/withdrawal positioning, less acrobatic than similarly sized felids. |
| Endurance | **86.0** | Direct travel-speed measurements plus enormous year-round territories support very strong sustained locomotion. |
| Recovery | **60.0** | Strong general mammalian conditioning and feast/famine ecology, but no extraordinary regenerative mechanism. |
| Tactics | **72.0** | Cooperative prey assessment, pack positioning, communication and repeated testing of defended ungulates. |
| Senses | **70.0** | Strong integrated canid smell/hearing/vision useful for tracking and combat awareness. |
| Ferocity | **68.0** | Regularly tackles dangerous prey and defends territory, while still using risk-sensitive hunting decisions. |
| Unique Abilities | **65.0** | Cold adaptation, white camouflage and pack coordination materially change matchups but are not direct disabling mechanisms. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **52.0** | A 40 kg wolf has a serious predatory bite and effective repeated-bite mechanics, but remains well below lion/alligator-class damage output in absolute terms. |
| **Defense** | **39.0** | Robust body and thick coat provide some protection, but there is no armor and large-prey counterstrikes are dangerous. |
| **Agility** | **62.0** | Strong cursorial control, snow footing and repositioning, without confusing top speed with agility. |
| **Stamina** | **86.0** | Direct Ellesmere travel studies and enormous territories establish endurance as a standout capability. |
| **Intelligence** | **68.0** | Flexible social hunting, communication, prey assessment and pack coordination justify a strong tactical score. |
| **Special** | **65.0** | High Arctic insulation/camouflage plus cooperative hunting are important matchup modifiers, but not venom/electricity-tier direct special mechanisms. |

### Calibration interpretation

Arctic Wolf should sit modestly above the already-researched African Wild Dog in individual absolute Attack because the canonical wolf is larger and more powerful, while both remain far below African Lion and Alligator. Arctic Fox must remain dramatically lower in Attack because it is roughly one-tenth the wolf's mass. The wolf's Stamina can legitimately exceed its Attack because endurance is directly supported by field movement data and is not body-force dependent in the same way.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Pack Pressure** — Coordinated wolves probe, pursue and reposition around dangerous prey, allowing a group to exploit openings that one wolf could not safely force. In a strict one-on-one matchup this ability is largely inactive, which should be represented by battle rules rather than secretly inflating individual Attack.
2. **Polar Pursuit** — Dense insulation, large feet and High Arctic physiology let the wolf continue useful travel and hunting in extreme cold while many opponents face rapidly increasing thermal costs.

### Unique traits

1. **Whiteout Hunter** — Predominantly white coloration provides useful crypsis across snow and ice, improving approach and concealment in its native environment.
2. **Range Runner** — Ellesmere packs maintain territories spanning thousands of square kilometers, reflecting exceptional sustained search-and-travel capacity in a low-productivity landscape.

## 8. Expanded profile content

### Habitat

High Arctic tundra and polar desert, especially the Canadian Arctic Archipelago. The landscape includes exposed rock, sparse vegetation, snow, sea ice and extreme seasonal light regimes.

### Geographic range

The traditional *C. l. arctos* concept centers on Canada's Queen Elizabeth Islands from Melville Island through Ellesmere Island. Some popular accounts broaden the label toward Greenland, but subspecies taxonomy and geographic boundaries should be handled cautiously.

### Diet

Muskoxen, Arctic hares and Peary caribou are major documented prey in the Ellesmere system, with seals taken opportunistically when available. The 2025 Ellesmere synthesis emphasizes that wolves exploit whatever prey the extreme environment makes available.

### Ecology

Arctic wolves are apex terrestrial predators in a very low-productivity ecosystem. GPS work demonstrates year-round territoriality rather than simple seasonal migration. Their predation links muskoxen, hares and scarce caribou, and recent research suggests hare biomass can be important even where muskox predation is conspicuous.

### Social structure

Family packs are the central social unit. A ten-year Ellesmere study followed packs containing two to eight adults plus pups. Pack size and productivity vary with prey conditions, and wolves may also travel or hunt singly or in pairs.

### Reproduction and life history

A ten-year Ellesmere study documented one breeding female producing four to six pups annually for several years, while her successor produced one to three pups in several years and apparently failed to whelp in others. USGS later summarized litters averaging about four pups in monitored Ellesmere packs. This variability reflects the harsh, prey-limited environment.

### Conservation status

The Arctic wolf is part of the globally widespread gray wolf species, which is generally treated as Least Concern at species level. Subspecies/population assessments are less straightforward. WWF describes Arctic wolves as relatively insulated from historical hunting and habitat destruction because of remoteness, while industrial development and climate-driven prey changes are emerging concerns.

### Major adaptations

- Thick double coat and reduced exposed extremities
- Predominantly white coat for snowy-background camouflage
- Large feet and strong cursorial limbs
- Long-distance travel capacity
- Flexible prey use
- Pack communication and cooperative hunting
- Ability to remain active through High Arctic darkness, cold and sparse prey distribution

### Human interaction

Remote Ellesmere wolves historically experienced unusually little persecution compared with wolves living near settled landscapes. Habituation studies were therefore able to document close-range natural social and hunting behavior. Increased industrial access could alter that unusual low-contact relationship.

### Strong fun facts

- Field researchers directly followed habituated Arctic wolves and measured routine travel at **8.7 km/h**, faster than an ordinary human walking pace for sustained travel.
- Monitored Ellesmere packs have used winter territories exceeding **6,000 km²**.
- Ellesmere wolves hunt prey ranging from roughly 4 kg Arctic hares to heavily armed muskoxen many times a wolf's mass.
- A long-term pack study found highly variable litter production from year to year, showing how strongly reproduction responds to High Arctic conditions.
- Modern GPS work confirms that some Ellesmere packs remain on territories throughout the year despite months of continuous darkness or continuous daylight.

### Concise site-ready summary

The Arctic wolf is a 40 kg-class High Arctic gray wolf built around endurance, pack tactics and survival in extreme cold. Its jaws make it a dangerous medium predator, but its greatest advantages are sustained travel, coordinated prey testing and the ability to keep hunting across snow, darkness and enormous territories. White camouflage and dense insulation make it especially formidable in polar conditions, while lack of armor and dependence on close-range biting keep its one-on-one combat power well below the largest predators.

### Detailed narrative profile

An Arctic wolf is not a fantasy super-wolf created by cold weather. Its real strengths are more interesting. On Ellesmere Island, wolves live in an ecosystem where prey is sparse, weather is severe and every failed hunt carries an energetic cost. Their body plan remains recognizably gray-wolf: long cursorial legs, powerful jaws, non-retractile claws, strong senses and a social brain. What changes in the High Arctic is the importance of endurance, insulation and efficient decision-making.

A representative male around 40 kg can kill smaller prey alone and seriously injure similar-sized mammals, but large-prey hunting reveals the limits of individual power. Muskoxen are bulky, horned and dangerous. Wolves test herds, search for weak or poorly positioned animals and often fail. Cooperative hunting converts multiple mobile attackers into a pressure system that can eventually isolate a vulnerable animal. ABS should therefore distinguish the individual wolf's moderate absolute Attack from the much greater ecological effectiveness of a pack.

The strongest evidence for an elite rating is stamina. Researchers have measured Arctic-wolf travel directly and GPS-collared packs across territories of thousands of square kilometers. This is not a sprint statistic masquerading as agility. It is sustained locomotor performance in one of Earth's least forgiving terrestrial environments. Combined with white camouflage and deep insulation, it produces a predator whose specialism is persistence in the polar landscape rather than a fictional increase in bite strength.

### Useful future structured-field ideas

- `measurement_length_type`: head-body vs total
- `travel_speed_mps` separate from `top_speed_mps`
- `bite_force_newtons` separate from pressure
- `canonical_sex`
- `pack_hunt_modifier` separate from individual stats
- `cold_tolerance_class`
- `territory_km2_range`
- `primary_weapon`
- `taxonomy_confidence`

## 9. Image Asset

- **Target asset:** `animal-research-for-update/images/arctic-wolf.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Wikimedia Commons, **Arctic wolf (male) (3519936915).jpg**, a real photograph explicitly labeled male, 2678 × 2316 pixels.
- **Source page URL:** https://commons.wikimedia.org/wiki/File:Arctic_wolf_(male)_(3519936915).jpg
- **Direct image URL:** https://upload.wikimedia.org/wikipedia/commons/ (use the Commons source page's original-file link for the current canonical binary; the source page also records the original Flickr file URL)
- **Original Flickr image URL recorded by Commons:** https://live.staticflickr.com/3369/3519936915_6bfbac3ce9_o.jpg
- **Creator:** Drew Avery
- **License shown by Commons:** CC BY 2.0
- **Candidate quality note:** Real, high-resolution, adult-male candidate with a substantial visible body. It is captive rather than wild, so a later production provenance pass may prefer a verified wild adult male if an equally clear reusable image is found.
- **Why PNG is pending:** Available GitHub text-file tooling cannot safely commit binary image data. No fake/text-encoded PNG is created.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Reported finding/context | Confidence / caveat |
|---|---|---|---|---|
| Toronto Zoo, Arctic wolf | https://www.torontozoo.com/animals/Arctic%20wolf | Taxon, male/female mass, fur, feet, morphology | Males 34–46 kg; females 36–38 kg; white coat, thick underfur, large feet, shorter ears/nose | **High** institutional source; captive morphology still representative |
| WWF, Arctic Wolves | https://www.worldwildlife.org/species/arctic-wolf/ | Broad size, habitat, range, conservation threats | 70–175 lb; 3.2–5.9 ft; tundra; climate/industrial threats | **Moderate-high** for overview; broad size range not used as male baseline |
| USGS / Mech 1994, Regular and homeward travel speeds | https://www.usgs.gov/publications/regular-and-homeward-travel-speeds-arctic-wolves | Direct travel-speed measurement | 8.7 km/h regular travel; 10.0 km/h den-bound travel on Ellesmere | **Very high**, direct field measurement; not top sprint speed |
| USGS, Ellesmere wolf movements | https://www.usgs.gov/centers/northern-prairie-wildlife-research-center/science/ellesmere-wolf-movements | Territory, year-round ecology, prey, litter | Summer territories 688–4,728 km²; winter 1,260–6,026 km²; kills muskox, caribou, hares | **High**, GPS-based government research |
| USGS / Mech 1995, Summer movements | https://www.usgs.gov/publications/summer-movements-and-behavior-arctic-wolf-canis-lupus-pack-without-pups | Pack movement, hare hunting | Five-wolf pack ranged nomadically over >381 km² in July; all hunted Arctic hares | **High**, field study |
| Anderson et al., Journal of Wildlife Management 2025 | https://wildlife.onlinelibrary.wiley.com/doi/full/10.1002/jwmg.22671 | Modern GPS ecology, year-round territories, muskox predation | 10 adults in 6 packs; focal pack ~0.12 muskox kills/day; mostly calves/yearlings among documented kills | **Very high**, peer-reviewed modern telemetry |
| Mech et al., The Ellesmere Wolves 2025, Daily Hunt | https://academic.oup.com/chicago-scholarship-online/book/61113/chapter-abstract/532290427 | Hunting tactics and success | Wolves tested many muskox herds; roughly 20% of hunts successful | **High**, long-term field synthesis |
| Mech 1995, Ten-year demography | https://www.usgs.gov/publications/a-ten-year-history-demography-and-productivity-arctic-wolf-pack | Pack size and reproduction | 2–8 adults plus pups; annual litter productivity highly variable | **High**, decade-long field observation |
| U.S. Forest Service FEIS, *Canis lupus* | https://research.fs.usda.gov/feis/species-reviews/calu | Taxonomic context | Lists *C. l. arctos* while noting historical over-splitting/variation among wolf subspecies | **Moderate-high** for taxonomy history; taxonomy remains debated |
| 2024 comparative carnivore craniometry | https://doi.org/10.3390/ani14091367 | Wolf canine/bite biomechanics context | Gray wolf has strong canine bending performance and modeled bite metrics | **Moderate** for Arctic-wolf inference; not species-specific PSI, so no PSI entered |
| Wikimedia Commons male Arctic wolf | https://commons.wikimedia.org/wiki/File:Arctic_wolf_(male)_(3519936915).jpg | Image identity, sex label, dimensions, creator/license | Male Arctic wolf photo, 2678×2316, Drew Avery, CC BY 2.0 | **High** for asset provenance; captive specimen |

## 11. Confidence, caveats and unresolved conflicts

- **High confidence:** canonical body-mass scale, Arctic habitat, predatory weapons, pack ecology, measured routine travel speeds, large territory use, muskox/hare predation.
- **Moderate confidence:** canonical height and total length because measurement conventions vary.
- **Moderate-low confidence:** 8-year lifespan recommendation because strong Arctic-specific longevity data are limited.
- **Unresolved top speed:** routine travel is directly measured, but maximum sprint speed is not. Keep `speed_mps: 0.0` until a suitable source appears.
- **Unresolved bite pressure:** do not import generic internet PSI values. Keep `bite_force_psi: 0.0` unless a defensible measurement/pressure convention exists.
- **Taxonomy:** *C. l. arctos* is a useful traditional population label, but gray-wolf subspecies boundaries remain debated.
- **Pack effect:** ecological hunting success must not be silently converted into an individual's one-on-one Attack score.

## 12. Cross-animal calibration notes

- **Versus Arctic Fox:** Arctic Wolf is roughly an order of magnitude heavier and has far greater absolute bite/body power, so Attack **52.0** versus Arctic Fox **17.0** preserves the required absolute gap. Arctic Fox can remain highly agile/specialized without physical-score inflation.
- **Versus African Wild Dog:** Wolf Attack **52.0** sits moderately above African Wild Dog **47.0** due to greater canonical mass and individual mechanical power. Their endurance should remain comparably excellent, with Arctic Wolf **86.0** versus African Wild Dog **82.0** provisionally.
- **Versus African Lion:** Wolf Attack must remain far below the lion's **79.0** because the lion is several times heavier and has stronger grappling forelimbs plus large retractile claws in addition to its bite.
- **Versus Alligator:** Wolf Attack **52.0** remains far below Alligator **84.0**, preserving the enormous mechanical-force and weapon-system gap.
- **Versus Alpaca:** Wolf is lighter than the canonical alpaca but possesses much more effective dedicated killing weaponry, so Attack can be substantially higher while Size remains lower.
- **Stamina check:** **86.0** is intentionally one of the wolf's highest values and is supported by direct field travel and territory data. Revisit after Gray Wolf, Reindeer/Caribou, horse-equivalent endurance animals and extreme migrants are researched.
- **Special check:** **65.0** should stay below the Arctic Fox's **72.0** because the smaller fox has even more extreme cold specialization relative to its niche, while the wolf gains more of its effectiveness through ordinary canid size, jaws and social tactics.
- **No score currently appears inverted enough to require editing prior research files.** Final normalization remains mandatory after broader roster coverage.