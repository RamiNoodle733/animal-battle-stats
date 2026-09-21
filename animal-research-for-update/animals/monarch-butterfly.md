# Monarch Butterfly (*Danaus plexippus*)

## 1. Identity and canonical specimen
- **Roster name:** Monarch Butterfly
- **Resolved taxon:** *Danaus plexippus* (Linnaeus, 1758), family Nymphalidae.
- **Living/extinct:** Living.
- **Canonical combat specimen:** healthy mature **eastern North American migratory adult male**, approximately **0.0005 kg (0.5 g)** with **9.5 cm wingspan**. The migratory generation is selected because it is the species' strongest endurance phenotype. Male is used as the image/canonical sex for consistency where a sex is needed, not because males have a major combat-size advantage.
- **Dimorphism:** males have a black androconial scent patch on each hindwing and narrower wing venation; females lack the scent patches and generally have thicker dark veins. Size overlap is extensive, so no large sex-based physical score adjustment is warranted.
- **Population variation:** eastern North American migrants tend to have larger bodies and larger, more elongated wings than many non-migratory populations. Breeding adults usually live only weeks, while the fall migratory generation enters reproductive diapause and can survive six to nine months.

## 2. Physical dimensions and ranges
| Measurement | Proposed value / range | Evidence and interpretation |
|---|---:|---|
| Adult mass | **0.0005 kg canonical** | USFWS reports adults average about 0.5 g; Monarch Joint Venture independently gives about 500 mg average. |
| Wingspan | **9.5 cm canonical; about 7-10 cm USFWS range** | USFWS gives 3-4 in / 7-10 cm. Canada COSEWIC reports 93-105 mm for adults. |
| Forewing length | **about 5.0 cm average** | Monarch Joint Venture reports average forewings about 50 mm. |
| Body length | **not promoted as a canonical factual field** | Strong sources retrieved in this run emphasize wingspan/forewing length rather than a standardized adult body-length mean. |
| Height | **0.0 cm** | Standing height is not a meaningful standardized field for a butterfly. |
| Maximum flight speed | **unresolved** | Nature Conservancy reports migratory flight averaging about 12 mph, but average travel speed is not a physiological maximum. `speed_mps` therefore remains 0.0. |
| Migration | **up to ~3,000 mi total; commonly 70-75 mi/day; tagged one-day record 265 mi** | USFWS. These are endurance/displacement data, not top-speed measurements. |
| Adult lifespan | **0.7 y canonical migratory generation** | USFWS: most breeding adults 2-5 weeks, overwintering reproductive-diapause adults 6-9 months. 0.7 y represents roughly 8.4 months and is appropriate to the selected migratory phenotype. |
| Bite force | **0.0 PSI** | Adult monarchs feed through a proboscis and have no relevant biting weapon or defensible PSI datum. |
| Chemical defense | **cardenolide sequestration, concentration variable** | Milkweed-derived cardenolides persist into adults and deter many vertebrate predators. Toxic burden varies strongly with host milkweed species, individual history and population. |

### Canonical proposed factual fields
```text
weight_kg: 0.0005
height_cm: 0.0
length_cm: 9.5
speed_mps: 0.0
lifespan_years: 0.7
bite_force_psi: 0.0
```

`length_cm` is intentionally used as the practical overall span dimension because wingspan is the biologically useful adult size measurement for this insect. A future schema should add `wingspan_cm` and avoid conflating it with body length. `speed_mps` is left at 0.0 because the recovered 12 mph figure is an average migratory flight speed, not a verified maximum.

## 3. Weapons, defenses and combat mechanics
### Offensive capability
Adult monarchs have essentially no dedicated offensive weapon against roster-scale opponents. Legs can cling, wings can reposition the animal, and the proboscis feeds on nectar, but none is a meaningful damaging weapon. Attack must therefore remain near the absolute roster floor regardless of the butterfly's famous endurance.

### Cardenolide chemical defense
Monarch larvae feed on milkweeds and sequester cardenolides into the adult stage. These compounds interfere with animal Na+/K+-ATPase, while monarchs possess evolved target-site resistance that permits them to tolerate their toxic host chemistry. The defense is primarily deterrent rather than an actively delivered venom: an attacker must generally bite or ingest the butterfly to experience the chemical cost. Toxicity is also variable rather than uniform.

### Warning coloration
The orange-black-white pattern is aposematic. It advertises chemical unprofitability to experienced visual predators. This can reduce attack probability, but it does not make the thin insect body mechanically durable. ABS Defense therefore distinguishes deterrence from physical toughness, while Special captures the unusual chemical system more strongly.

### Flight and evasiveness
Four broad wings give excellent low-mass aerial control, takeoff, landing and evasive repositioning. Monarchs also exploit favorable winds and thermal conditions during migration. Cold and rain impose sharp constraints: USFWS notes that monarchs cannot fly when body temperature becomes too low. Fragile wings are vulnerable to damage, so high maneuverability should not be confused with high durability.

## 4. Endurance, senses, tactics and behavior
### Migration endurance
The eastern fall generation can travel from Canada and the northern United States to central Mexico, with journeys up to roughly 3,000 miles and lasting more than two months. USFWS reports about 70-75 miles per day from tagging/observation and a tagged one-day displacement record of 265 miles. This is extraordinary sustained performance for an insect and supports an elite Stamina score despite negligible absolute mass.

### Navigation and senses
Migratory monarchs use an antenna-based, time-compensated sun compass. Peer-reviewed work also demonstrates a light-dependent inclination magnetic compass under conditions where directional daylight cues are unavailable. The magnetic system uses ultraviolet-A/blue wavelengths and appears to involve light-sensitive magnetosensors associated with the antennae. These are sophisticated orientation mechanisms, but they are sensory/navigation specializations rather than evidence of vertebrate-like general reasoning.

### Intelligence and tactics
Monarch behavior integrates circadian timing, sun position, skylight information and magnetic cues to maintain migration direction. This earns meaningful Senses and Tactics credit. However, much of this performance is specialized evolved orientation circuitry. There is insufficient evidence here for broad problem-solving, social strategy or flexible combat learning comparable with corvids, parrots, primates or carnivorans. Intelligence therefore stays moderate-low on the roster scale.

### Fighting and aggression
Adults are not specialized fighters. Male reproductive interactions can involve pursuit and physical contact, but the species does not possess claws, jaws, horns, venom injection or other dedicated weapons. Ferocity is consequently near the roster floor.

## 5. Environmental strengths and weaknesses
### Strengths
- Open sunny airspace allows flight and visual navigation.
- Warm conditions enable flight-muscle function.
- Favorable winds and thermals can dramatically extend displacement efficiency.
- Nectar corridors allow refueling during migration.
- Milkweed during larval development supplies the chemistry underlying adult cardenolide defense.

### Weaknesses
- Extremely low absolute mass and negligible impact force.
- Thin wings and body are mechanically fragile.
- Cold, heavy rain and severe wind can halt or disrupt flight.
- No practical offensive weapon against substantially larger animals.
- Chemical defense is variable and does not deter every predator.
- Grounded or wing-damaged adults lose most of their survival advantage.

### Matchup archetypes
- **Best:** opponents that rely on ingestion and have learned or innate aversion to aposematic toxic prey.
- **Mixed:** similarly tiny flying arthropods where maneuverability matters, though the monarch remains poorly armed.
- **Bad:** spiders, mantises, predatory insects or small vertebrates able to seize the body despite chemical deterrence.
- **Very bad:** essentially any medium or large roster animal in direct forced combat. The butterfly cannot inflict meaningful damage at that scale.

## 6. Proposed ABS substats
| Substat | Score | Justification |
|---|---:|---|
| Size | **0.2** | Roughly 0.5 g, effectively at the roster's absolute size floor. |
| Raw Power | **0.2** | Negligible absolute muscular force despite sufficient power for sustained flight. |
| Weaponry | **0.5** | No dedicated damaging adult weapon. Chemical defense is scored under Abilities, not weaponry. |
| Protection | **3.0** | No armor and delicate wings/body; aposematism is deterrence rather than structural protection. |
| Toughness | **8.0** | Can survive long migration and some wing wear, but direct trauma tolerance is extremely low. |
| Speed | **36.0** | Migratory flight averages around 12 mph in a strong secondary source, but no verified maximum was found. |
| Maneuverability | **82.0** | Very low inertia, powered flight and precise landing/repositioning produce excellent evasive control. |
| Endurance | **90.0** | A single migratory generation can sustain a continental journey of up to about 3,000 miles over more than two months. |
| Recovery | **14.0** | Adults cannot regenerate damaged wings; rest/refueling helps energetically but structural repair is very limited. |
| Tactics | **46.0** | Multi-cue orientation and context-sensitive migration are sophisticated but highly specialized rather than combat planning. |
| Senses | **78.0** | Sun-compass, circadian, skylight and magnetic orientation systems are exceptional for a tiny insect. |
| Ferocity | **2.0** | Adult monarchs are not predatory or combat-specialized. |
| Abilities | **88.0** | Cardenolide sequestration plus dual-mode long-distance navigation create major unusual biological effects. |

## 7. Proposed six headline ABS ratings
| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **1.0** | Almost no capacity to damage an opponent in absolute roster terms. |
| **Defense** | **15.0** | Physical durability is tiny, but cardenolide-backed warning coloration can deter some predators before or after sampling. |
| **Agility** | **82.0** | Low inertia and controlled flight give excellent evasive maneuverability, independent of uncertain top speed. |
| **Stamina** | **90.0** | The migratory generation performs one of the longest insect migrations, sustaining travel for weeks to months. |
| **Intelligence** | **43.0** | Impressive orientation and cue integration are real, but evidence supports specialized navigation more strongly than broad flexible cognition. |
| **Special** | **89.0** | Milkweed-derived chemical defense combined with sun and magnetic navigation is highly unusual and matchup-relevant without inflating physical combat scores. |

## 8. Exactly two special abilities
1. **Milkweed Chemical Shield** - larvae sequester milkweed cardenolides that persist into adulthood, while evolved Na+/K+-ATPase resistance lets monarchs tolerate compounds that make them distasteful or toxic to many vertebrate predators.
2. **Dual Compass Migration** - migratory adults combine a time-compensated sun compass with a light-dependent magnetic inclination compass, allowing directional orientation even when normal solar cues are degraded.

## 9. Exactly two unique traits
1. **Methuselah Migration Generation** - the fall generation enters reproductive diapause and can live six to nine months, far longer than the roughly two-to-five-week breeding adults, enabling a single individual to complete the southward continental migration.
2. **Aposematic Orange Signal** - conspicuous orange, black and white wing pattern advertises chemical defense, converting milkweed chemistry into a learned predator-deterrence signal rather than relying on mechanical armor.

## 10. Expanded profile
### Habitat and range
Monarchs originated in North America and now also occur in non-migratory populations elsewhere. In North America they use open habitats containing milkweed and nectar plants, including fields, roadsides, wetlands and gardens. Eastern migrants overwinter primarily in high-elevation oyamel fir forests in central Mexico, while western migrants use coastal California and northern Baja California sites.

### Diet
Larvae are milkweed specialists. Adults drink nectar from many flowering plants. This ontogenetic diet shift is central to the animal's biology because larval milkweed supplies cardenolides for adult defense while adult nectar supplies carbohydrate for movement and migration.

### Ecology and social behavior
Adults are mostly individually mobile rather than cooperatively social, but migrants aggregate at stopovers and overwintering roosts. They are prey for birds and invertebrates, nectar consumers and highly visible components of open-habitat food webs. Their defense depends partly on predator learning and the local cardenolide profile inherited from larval host plants.

### Reproduction and life history
Eggs are laid singly on milkweed. Larvae pass through five instars before pupating, and adults emerge after metamorphosis. Spring and summer generations reproduce quickly and live only weeks. The late-season migratory generation delays reproduction, stores energy and survives for many months before breeding in spring.

### Conservation
As of July 23, 2026, USFWS states that the monarch is **not yet federally protected under the U.S. Endangered Species Act**. A threatened-species listing was proposed in December 2024, but no final rule has yet taken effect. Major threats include loss and degradation of breeding, migratory and overwintering habitat, insecticides and climate change. This status should be rechecked before production migration because the U.S. rulemaking remains unresolved.

### Human interaction
Monarchs are major conservation and citizen-science subjects. Tagging programs have generated important migration data. Garden planting of native milkweed and nectar plants can support habitat, although conservation recommendations should be regionally appropriate.

### Genuine fun facts
- Eastern North American migrants may travel up to about 3,000 miles to Mexico.
- USFWS reports a tagged one-day displacement record of 265 miles.
- Most breeding adults live only two to five weeks, while the migratory generation can survive six to nine months.
- The butterfly's antennae participate in both circadian sun-compass timing and magnetic orientation.
- Adult monarchs average only about half a gram despite their continental migration.
- Males can be distinguished by a black scent patch on each hindwing.
- Monarchs do not manufacture their famous cardenolide defense from scratch; larvae acquire it from milkweed.

### Concise site-ready summary
The Monarch Butterfly is almost powerless in direct physical combat, but it combines elite insect endurance, agile flight, milkweed-derived chemical defense and a remarkable dual navigation system. A half-gram migratory adult can cross a continent using sun and magnetic cues while carrying cardenolides that warn many predators away.

### Rich narrative profile
A monarch is a strong example of why ABS must separate absolute fighting power from biological sophistication. At roughly half a gram, it has almost no ability to injure a wolf, bird, reptile or even many predatory arthropods. Its Attack and Raw Power belong near the bottom of the entire roster. Raising those scores because the animal flies thousands of miles would be proportional-strength leakage.

Its real advantages operate on different axes. The fall migratory generation suppresses reproduction, accumulates energy reserves and remains alive for months while traveling toward central Mexico. Direction is maintained using a time-compensated sun compass and, when directional daylight is unavailable, a light-dependent magnetic inclination compass. This supports exceptional Stamina and Senses without pretending the butterfly has broad mammalian or corvid-like intelligence.

Defense is equally unconventional. The monarch's body is fragile, but milkweed cardenolides can make it an expensive meal. Bright wing coloration advertises that chemistry to visual predators. This is not armor and cannot stop a crushing bite, but it can alter whether an attack happens at all. That distinction is why physical Protection remains near the floor while Special is extremely high.

In a forced battle, the monarch survives by not being caught and by being undesirable to eat. It does not win through damage output. That makes it a useful calibration control for the full roster: extraordinary endurance and special biology can coexist with essentially negligible absolute offensive force.

### Future structured fields
- `wingspan_cm`
- `forewing_length_mm`
- `migration_distance_km`
- `migration_daily_distance_km`
- `reproductive_diapause`
- `chemical_defense_type`
- `cardenolide_load_context`
- `navigation_modes`

## 11. Mandatory image audit
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/monarch-butterfly.png` **(not created)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Male_monarch_butterfly_on_green_plant_danaus_plexippus.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/c/c7/Male_monarch_butterfly_on_green_plant_danaus_plexippus.jpg
- `file_format_verified`: source is a real 2592x1944 JPEG photograph; final PNG does not exist
- `alpha_verified`: **false**
- `full_body_verified`: **false**. Direct visual inspection confirms the complete head, body silhouette, antennae and wings are inside frame, but the perched legs/feet overlap foliage and cannot all be certified as unobscured under the strict rule.
- `adult_verified`: **true**. The photographed individual is an adult winged monarch.
- `sex_verified_or_unknown`: **male**, supported by source metadata/category and visible hindwing male scent-patch identification context.
- `license_status`: **Public Domain / U.S. Fish and Wildlife Service work**
- `notes`: High-resolution, exact-species, reusable and explicitly male. It is not promoted to complete because strict all-leg/foot visibility is unresolved. Current connected GitHub writers are UTF-8 text-only, so no transparent PNG binary is fabricated.

## 12. Source ledger
| Source | Direct URL | Supports | Confidence / conflicts |
|---|---|---|---|
| U.S. Fish & Wildlife Service, Monarch species profile | https://www.fws.gov/species/monarch-danaus-plexippus | taxonomy, 0.5 g mean adult mass, 7-10 cm wingspan, migration distance/daily displacement, lifespan, dimorphism, range, cardenolide defense | **High.** Government species account. Migration values describe displacement, not maximum speed. |
| Monarch Joint Venture, Vital Statistics and Measuring | https://monarchjointventure.org/monarch-biology/vital-statistics-and-measuring | ~50 mm average forewing, ~500 mg adult mass | **High.** Specialist conservation/science partnership. |
| Canada COSEWIC Monarch assessment | https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/monarch-2016.html | adult 93-105 mm wingspan and sex identification | **High.** Government status assessment. |
| Nature Communications, Guerra et al. 2014 | https://www.nature.com/articles/ncomms5164 | light-dependent magnetic inclination compass, UV-A/blue light, antenna involvement, sun-compass context | **High.** Peer-reviewed experimental work. |
| Neuron, Heinze & Reppert 2011 | https://doi.org/10.1016/J.NEURON.2010.12.025 | integration of sun/skylight cues in migratory navigation | **High.** Peer-reviewed neurobiology. |
| Evolution, Petschenka et al. 2013 | https://onlinelibrary.wiley.com/doi/10.1111/evo.12152 | cardenolide resistance and adult sequestration; Na+/K+-ATPase adaptation | **High.** Peer-reviewed evolutionary physiology. |
| Functional Ecology, Oberhauser 1997 | https://besjournals.onlinelibrary.wiley.com/doi/10.1046/j.1365-2435.1997.00074.x | breeding female lifespan variation and reproductive resource allocation | **High.** Peer-reviewed life-history experiment. |
| The Nature Conservancy, Monarch profile | https://www.nature.org/en-us/get-involved/how-to-help/animals-we-protect/monarch-butterfly/ | ~12 mph average migration flight context | **Moderate.** Strong conservation organization, but not a maximum-speed experiment; not used for `speed_mps`. |
| USFWS Save the Monarch, updated 2026-07-23 | https://www.fws.gov/our-work/pollinators/save-monarch | current U.S. ESA status and threats | **High and current.** Explicitly says no final ruling yet and no federal ESA protection currently in force. |
| Commons / USFWS male monarch photograph | https://commons.wikimedia.org/wiki/File:Male_monarch_butterfly_on_green_plant_danaus_plexippus.jpg | exact-species adult male real-photo candidate, 2592x1944, public-domain provenance | **High provenance, strict body failure.** Legs/feet overlap foliage and are not all certifiable. |

## 13. Confidence, conflicts and uncertainty
- **High confidence:** taxon, approximate adult mass, wingspan, migration scale, diapause longevity, milkweed/cardenolide defense, sex markings and navigation mechanisms.
- **Moderate confidence:** 0.7-year canonical lifespan as a representative value for the specifically selected migratory generation. Individual survival varies substantially.
- **Low / intentionally unset:** true maximum flight speed. Average migratory speed and daily displacement are not maximum performance measurements.
- **Not applicable / unset:** bite PSI and standing height.
- **Image uncertainty:** candidate is strong in species, sex, adulthood, resolution and license but fails strict all-appendage visibility. No PNG completion claimed.

### Source conflicts and cautions
1. Wingspan ranges differ modestly among authorities, from about 7-10 cm in USFWS to 93-105 mm in the Canadian assessment and wider ranges in some secondary references. The 9.5 cm canonical value sits within strong-source overlap.
2. Adult lifespan depends radically on generation. A summer breeding adult and a diapause migrant should not share the same longevity assumption. This profile intentionally represents the migratory generation.
3. Cardenolide burden is not a fixed species-wide dose. Host milkweed chemistry and individual history affect toxicity, so no fabricated toxicity number is assigned.
4. Navigation sophistication should not be converted directly into broad Intelligence. Much of the evidence concerns specialized sensory and orientation circuits.
5. No credible maximum flight-speed experiment was recovered, so `speed_mps` remains 0.0 despite known migration travel rates.

## 14. Cross-animal normalization notes
- **Versus Mantis Shrimp:** monarch is far less dangerous physically. Attack 1.0 versus Mantis Shrimp 34.0 preserves the enormous difference between a non-weaponized 0.5 g butterfly and a smashing crustacean. Monarch can still approach it in Special because chemical sequestration and dual navigation are genuinely unusual systems.
- **Versus Magpie/Macaw:** monarch can exceed them in Stamina only in the narrow sustained-migration sense supported by the selected diapause phenotype, but remains dramatically below them in Attack, Defense and general Intelligence.
- **Versus Meerkat:** no amount of migration performance justifies compression toward a 0.75 kg carnivore's physical combat scores. The monarch is roughly 1,500 times lighter.
- **Versus Megalodon:** the contrast is intentionally extreme. Monarch Attack 1.0 versus Megalodon 100.0 demonstrates absolute roster scaling while allowing the tiny insect to remain elite in Agility, Stamina and Special for independent reasons.
- **No speed/agility confusion:** no unverified top-speed number is used. Agility reflects low-inertia flight control, while Stamina reflects documented long-distance migration.
- **No chemical-defense double counting:** cardenolides modestly support Defense as deterrence and strongly support Special as an unusual mechanism; they do not inflate Raw Power or Attack.