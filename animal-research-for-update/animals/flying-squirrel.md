# Flying Squirrel

## 1. Identity and canonical specimen

- **Common name represented:** Flying Squirrel
- **Canonical species for this staging profile:** Siberian flying squirrel / Eurasian flying squirrel, *Pteromys volans* (Linnaeus, 1758)
- **Live-schema taxon:** `Pteromyini`, a tribe containing many flying-squirrel species. That is too broad for a specimen-level ABS profile, so this report resolves the generic roster label to *P. volans*, a well-studied living flying squirrel with species-level ecological and morphometric literature. This is a staging recommendation only and does not change production data.
- **Living/extinct:** Living
- **Canonical combat specimen:** healthy mature non-pregnant female, **0.16 kg**, approximately **31.0 cm total length** including tail. Females are the larger sex in long-term Finnish data, so the canonical fighting specimen follows the project rule favoring the larger sex.
- **Sexual dimorphism:** a 22-year Finnish dataset found females larger than males in body mass and other body measurements. Male mass also varied more seasonally, reaching its lowest level after breeding. This is an unusual but well-supported female-biased size pattern for a mammal.
- **Population variation:** Mammal reference material reports head-body length 120-228 mm, tail 90-149 mm, and mass 95-200 g across the species. Four commonly recognized subspecies span northern Eurasia, including *P. v. orii* on Hokkaido. Local morphology and ecology therefore should not be represented as a single exact universal value.

## 2. Physical measurements

### Mass
- Broad species reference range: **95-200 g**.
- Animal Diversity Web gives an average of **130 g**.
- Long-term sex-specific research establishes that adult females are heavier than males.
- **Canonical recommendation: 0.16 kg (160 g)** for a robust representative adult female. This is deliberately below the 200 g upper reference value and above the sex-neutral 130 g average.
- Confidence: **moderate-high**. The range is well supported, while the exact 160 g canonical value is an editorial representative selection rather than a measured species mean.

### Length
- Head-body: **12.0-22.8 cm** in Mammal reference material.
- Tail: **9.0-14.9 cm**.
- Zoo Jihlava reports approximately **22-34 cm total length including tail**.
- **Canonical recommendation: 31.0 cm total length**, representing a larger adult female without using the maximum.
- `height_cm` is not recommended as a meaningful standardized field for this arboreal rodent. Standing height varies dramatically with posture and is not a standard species measurement.

### Speed and gliding performance
No defensible species-specific maximum running or gliding speed for *P. volans* was located in the reviewed primary literature. Therefore **do not reuse the live 36 km/h placeholder**.

Species-specific movement evidence is strong even without a maximum speed: radiotelemetry in Finland found male home ranges averaging **59.9 ha**, female home ranges **8.3 ha**, mean nightly male displacement from the nest of **292 m**, and longest recorded movements **over 2 km**. The authors explicitly identify gliding as a plausible mechanism enabling this exceptional mobility for body size.

Related flying-squirrel biomechanics should be used only as comparative mechanism evidence, not silently transferred into *P. volans* factual fields. In northern flying squirrels (*Glaucomys sabrinus*), 168 measured glides averaged roughly 12.5-14.4 m, reached 65 m, and mean air speeds ranged 6.26-8.11 m/s. Southern flying squirrel (*G. volans*) 3-D kinematics measured mean glide velocity 5.11 m/s. These studies establish how controlled gliding works, but they are not measurements of *P. volans*.

### Lifespan
- Animal Diversity Web gives **3.8 years average wild lifespan** from demographic data.
- **Canonical recommendation: 3.8 years**.
- Long captive-life claims exist in weaker sources, but they should not replace the better-supported wild demographic value for the canonical field.

### Bite force and natural weapons
- No credible species-specific bite-force measurement was located.
- **Canonical `bite_force_psi`: 0.0**, meaning unavailable/unsupported in this data model, not literally zero bite capability.
- Incisors are the principal damaging anatomical weapon. Like other squirrels, *P. volans* is a rodent with continuously growing incisors suited to gnawing plant material. No defensible species-specific incisor-force figure was found.
- Clawed feet are primarily locomotor and gripping structures. They can scratch at very close range but are not specialized killing talons.

### Defensive structures
There is no armor, thick hide, shell, venom, or large-body damage buffer. Defense is behavioral and locomotor: rapid climbing, launch into a controlled glide, arboreal refuge, nocturnality, cryptic gray coloration, cavity use, and small target size.

## 3. Canonical proposed factual fields

| Field | Proposed value | Rationale |
|---|---:|---|
| `weight_kg` | **0.16** | Representative robust adult female within 95-200 g species range; females are larger in long-term data. |
| `height_cm` | **0.0** | No defensible standardized standing-height measurement; posture-dependent and not useful here. |
| `length_cm` | **31.0** | Representative total length including tail within institutional 22-34 cm range and published component ranges. |
| `speed_mps` | **0.0** | No defensible species-specific maximum speed found; related *Glaucomys* glide speeds are not transferred. |
| `lifespan_years` | **3.8** | ADW demographic wild average. |
| `bite_force_psi` | **0.0** | No reliable species-specific pressure measurement. |

Zeros above indicate unsupported/not defensibly quantified where the schema requires a numeric value. They must not be interpreted as biological absence unless stated.

## 4. Combat biology

### Primary and secondary weapons
The practical offensive tool is the rodent bite. It is suitable for close-range defensive biting but the animal's 160 g mass places a hard ceiling on absolute damage. Claws can grip bark and potentially scratch, but their main function is climbing and landing control. The animal has no dedicated piercing fang system, venom, horns, antlers, heavy talons, or crushing appendages.

### Offensive mechanics
A flying squirrel is not a pursuit predator. Its combat offense is reactive: evade first, bite or scratch if seized or cornered. Gliding is a repositioning and escape system, not a high-energy aerial strike. ABS must not turn the word "flying" into fictional dive-bomb damage.

### Defense and durability
Physical protection is poor. The skeleton and soft tissues of a 0.16 kg mammal are vulnerable to bites, talons, crushing, falls without controlled posture, and much larger opponents. Its real defense is avoiding contact. Cavity refuges, trees, darkness, cryptic pelage, rapid climbing, and gliding can break line of pursuit.

### Locomotion and maneuverability
This is the species' defining combat-relevant strength. The patagium stretches between fore- and hind limbs. Limb position changes membrane geometry and allows active steering, while the flattened tail contributes to aerial stability/control. Comparative flying-squirrel biomechanics show that controlled gliding can change angle of attack and camber, pitch up before landing, and distribute landing loads across limbs. Those mechanical principles explain why the adaptation is much more than passive falling.

*P. volans* itself shows extraordinary landscape mobility for its body mass. The Finnish telemetry work found especially large male home ranges and movements beyond 2 km. In a tree-rich arena this translates to excellent route choice and escape potential.

### Endurance
Endurance is **moderate**, not elite. The species is capable of substantial nightly travel and does not hibernate, but much of its efficiency comes from gliding between elevated points rather than sustaining high muscular output. It should not inherit the stamina of long-distance terrestrial cursorial mammals. Gliding can reduce the cost of horizontal transport under suitable geometry, as demonstrated experimentally in another flying-squirrel species, but every glide also requires elevation and landing opportunities.

### Senses
The species is nocturnal with conspicuously large eyes, supporting low-light arboreal activity. Close-range tactile information from whiskers and competent hearing are biologically plausible for a nocturnal squirrel, but this report does not invent quantified acuity thresholds. Its sensory suite is useful for branch navigation and predator detection, not an echolocation-like special sense.

### Intelligence, learning and tactics
Flying squirrels must select launch and landing surfaces, adjust posture during glide, navigate complex three-dimensional forest structure, maintain multiple nests, and exploit dispersed food resources. This supports above-basic tactical flexibility for a small rodent. However, no evidence located here justifies primate/corvid-level problem-solving scores.

### Hunting and feeding behavior
*P. volans* is principally herbivorous. Published telemetry describes it as a herbivorous nocturnal arboreal rodent. Institutional accounts list leaves, seeds, fruits and nuts, with occasional animal matter reported in some accounts. It is not a specialized vertebrate hunter and should receive no predatory-combat bonus.

### Intraspecific fighting and mating context
The mating system creates substantial male movement. Long-term body-mass work notes that males do not build conspicuous pre-mating mass despite the usual squirrel pattern in which heavier males can be dominant. This suggests competing selection for low gliding mass and competitive body size. Evidence for stereotyped damaging combat is insufficient to award a large ferocity bonus.

### Social behavior
The species uses multiple cavities and dreys. Recent Hokkaido research documents communal nesting even outside winter, including non-mating groups. Social tolerance is therefore real, but this is not evidence for coordinated group combat.

### Predator defense
Likely successful defense consists of early detection, climbing, disappearing into a cavity, or gliding to another tree. Against an opponent that can follow through the canopy or intercept aerially, the advantage shrinks sharply.

### Environmental strengths
- **Dense mature forest:** excellent. Vertical structure provides launch points, landing surfaces, cavities and escape routes.
- **Night:** favorable because the animal is naturally nocturnal.
- **Broken canopy with reachable trees:** still useful if glide gaps are within controllable range.

### Environmental weaknesses
- **Open flat ground:** severe disadvantage. Gliding requires elevation and a landing target.
- **Water:** no specialized aquatic defense.
- **Confined ground arena:** removes the adaptation responsible for most of its Special and Agility value.
- **Large aerial predator:** gliding may expose it rather than guarantee escape.

### Matchup archetypes
**Best matchups:** similarly tiny terrestrial opponents that struggle to climb, opponents dependent on contact, and slow small animals in a vertically complex forest.

**Worst matchups:** cats, mustelids, snakes or raptors capable of arboreal/aerial pursuit; any opponent large enough to kill it with one clean bite or strike; open-ground scenarios where launch geometry is absent.

## 5. Proposed ABS substats

All values use the roster-wide absolute 0.1-100.0 framework.

| Substat | Score | Justification |
|---|---:|---|
| Size | **4.0** | ~0.16 kg is tiny on a roster containing large carnivores and megafauna. |
| Raw Power | **5.0** | Small rodent musculature; impressive climbing is not large absolute force. |
| Weaponry | **10.0** | Functional incisors and claws, but no specialized killing weapon and very low absolute delivery. |
| Protection | **5.0** | Fur and small target profile only; no armor or thick hide. |
| Toughness | **8.0** | Normal small-mammal resilience but extremely low trauma buffer against larger animals. |
| Maneuverability | **96.0** | Exceptional 3-D repositioning through climbing plus actively controlled gliding in suitable habitat. |
| Speed | **48.0** | Quick arboreal movement and gliding, but no verified *P. volans* maximum and speed is not allowed to inherit related-species measurements. |
| Endurance | **61.0** | Nightly movement and unusually large home-range mobility for mass; not a cursorial endurance specialist. |
| Recovery | **50.0** | No evidence for exceptional injury recovery or regeneration; ordinary mammalian recovery baseline. |
| Tactics | **65.0** | Route selection, multiple nests and complex arboreal navigation support flexible escape tactics. |
| Senses | **68.0** | Nocturnal visual specialization and arboreal sensory demands are useful but not extraordinary sensory weapons. |
| Ferocity | **24.0** | Primarily herbivorous escape-oriented squirrel, not a dedicated fighter. |
| Abilities | **85.0** | Patagial controlled gliding radically changes mobility and escape geometry in the right environment. |

## 6. Proposed six headline ABS ratings

- **Attack: 9.0** - incisors can injure a similarly tiny opponent, but 160 g body mass and lack of specialized offensive weapons keep absolute damage near the bottom of the roster.
- **Defense: 8.0** - very poor physical protection. Evasion is scored mainly under Agility/Special rather than double-counted as armor.
- **Agility: 96.0** - elite maneuverability is biologically justified. Climbing plus controlled three-dimensional gliding creates unusual repositioning options, though the score does not imply high straight-line speed.
- **Stamina: 61.0** - meaningful nightly mobility and >2 km recorded movement support above-average sustained travel for a small arboreal mammal, but not endurance-athlete status.
- **Intelligence: 66.0** - complex spatial navigation, nest switching and controlled glide decisions support solid behavioral flexibility without approaching corvid/primate ceilings.
- **Special: 87.0** - the patagium is a rare, matchup-changing locomotor adaptation. The score is high because it changes terrain access and escape geometry, not because it increases damage.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Patagium Vectoring** - Extending and reshaping the furred glide membrane through limb posture allows controlled aerial translation between trees, giving the squirrel escape and repositioning routes inaccessible to ordinary terrestrial mammals.
2. **Canopy Brake** - Tail, body pitch and limb positioning permit controlled approach and landing rather than ballistic falling, allowing rapid transitions from glide to trunk-clinging escape.

### Unique traits
1. **Female-Biased Frame** - Long-term Finnish data show females are larger than males in mass and other body measurements, so the canonical ABS specimen appropriately uses the larger adult female rather than automatically selecting a male.
2. **Oversized Night Range** - Radiotelemetry found home ranges much larger than expected from body mass, with males averaging 59.9 ha and movements beyond 2 km, reflecting how gliding expands the usable nocturnal landscape.

## 8. Expanded profile content

### Habitat and range
The Siberian flying squirrel occupies Palearctic boreal and mixed forests from northeastern Europe across northern Asia to the Pacific, with island populations including Hokkaido. It depends strongly on forest structure, especially mature trees that provide cavities, food and connected aerial routes.

### Diet and ecology
It is primarily herbivorous, feeding on leaves, buds, seeds, fruits and other tree-derived foods. It functions as a small arboreal consumer rather than a predatory squirrel. Multiple nest sites are used, including cavities and dreys, and individuals switch nests frequently.

### Social structure
The species is not accurately summarized as simply solitary. Radiotelemetry shows overlapping spatial use, while newer work documents communal nesting outside winter. Females raising young can behave differently from non-breeding animals, and male ranges expand substantially in mating context.

### Reproduction and life history
ADW summarizes one or two litters annually, commonly 2-3 young in newer accounts, with approximately 30-day gestation, while noting contradictory historical literature and possible subspecies variation. Reproductive uncertainty should be preserved rather than converted into a false single universal schedule.

### Conservation
The species is globally treated as **Least Concern**, but that global label hides significant regional decline. A 2025 conservation-genomics paper notes declining trends through much of the range, Near Threatened treatment across Europe, Vulnerable status in Finland, Critically Endangered status in Estonia, and recent disappearance from Latvia and Lithuania. Mature forest loss and fragmentation are therefore important human pressures.

### Major adaptations
- Furred patagium connecting fore- and hind limbs.
- Flattened tail contributing to aerial control.
- Large eyes suited to nocturnal activity.
- Strong arboreal claws and flexible limb control for launch/landing.
- Cavity nesting and multiple refuge sites.

### Human interaction
Direct conflict with people is minimal. The main interaction is conservation-related: forestry, loss of mature cavity trees and fragmentation can remove both nest sites and the canopy geometry required for efficient movement.

### Genuine fun facts
- It is the only native flying-squirrel species in Europe.
- Despite the name, it does not perform powered flight. It glides using a skin membrane.
- Finnish telemetry recorded individual movements greater than 2 km even though the animal weighs only around a few tenths of a kilogram.
- Female Siberian flying squirrels are larger than males, contrary to the common assumption that the male should always be the larger ABS fighting specimen.
- Individuals maintain several nests and can switch among cavities and branch dreys.
- The species does not need fictional speed numbers to be remarkable: its documented home-range size is already unusually large for its body mass.

### Concise site-ready summary
A tiny nocturnal squirrel with almost no physical protection but extraordinary aerial control, *Pteromys volans* turns forest structure into an escape network. Its patagium, flattened tail and precise limb control let it glide between trees, while large home ranges show how effectively that adaptation expands its movement. In a direct ground fight it is fragile and weak; in a mature canopy it is one of the roster's most elusive small mammals.

### Rich narrative profile
The Flying Squirrel is a strong example of why ABS categories must remain separate. At roughly 160 grams, it cannot trade damage with serious predators. Its incisors are real weapons, but absolute attack power is tiny, and its body has essentially no armor. Giving it high Attack or Defense because it can escape would erase the distinction between surviving contact and preventing contact.

Its actual specialty is geometry. A tree trunk is not merely cover but a launch tower. By spreading the patagium and changing limb posture, a flying squirrel converts vertical position into controlled horizontal movement. Comparative biomechanical experiments in flying squirrels show active changes in membrane shape, glide angle, pitch and landing mechanics. *P. volans* telemetry then demonstrates the ecological result at species level: a tiny mammal can exploit surprisingly large areas, with males moving hundreds of meters from nests on average and sometimes more than two kilometers.

That power is highly conditional. Put the same squirrel on flat open ground and most of its Special advantage disappears. Put it in mature mixed forest at night and an opponent must solve a three-dimensional pursuit problem while the squirrel can climb, launch, steer, land and disappear into cavities. The profile therefore combines extremely low physical-combat ratings with elite Agility and high Special, preserving both biological reality and roster-wide absolute scaling.

### Future structured-field proposals
- `locomotion_modes`: climbing, quadrupedal running, gliding
- `glide_capable`: true
- `powered_flight`: false
- `activity_cycle`: nocturnal
- `canonical_sex`: female
- `habitat_dependency`: mature boreal/mixed forest with cavities and connected canopy
- `home_range_ha_male_mean`: 59.9
- `home_range_ha_female_mean`: 8.3
- `max_recorded_telemetry_movement_km`: >2

## 9. Mandatory image section

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/flying-squirrel.png` **(not present; no PNG claimed)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Pteromys_volans_292232567.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/1/18/Pteromys_volans_292232567.jpg
- `file_format_verified`: source is a real JPEG photograph, 2048x1365
- `alpha_verified`: **false / not applicable to source JPEG**
- `full_body_verified`: **false**. Original was visually opened. The exact-species squirrel is clear and largely visible, but the perched pose does not cleanly expose every limb/foot and therefore fails the strict whole-anatomy cutout standard.
- `adult_verified`: **false**. Source establishes exact species but not adult age.
- `sex_verified_or_unknown`: **unknown**
- `license_status`: **CC BY 4.0**, reviewed from iNaturalist provenance by Wikimedia Commons
- `notes`: Exact *Pteromys volans*, high enough resolution, real wild photograph and good provenance, but it is not promoted to full-body status. Search also found attractive gliding photographs, but reuse provenance/adulthood was weaker or unclear. Current GitHub writer is UTF-8 text-only, so even a later approved source cannot be honestly represented as a committed transparent PNG through this writer.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| Handbook of the Mammals of the World / Zenodo record | https://zenodo.org/records/6818896 | Taxonomy, dimensions, mass, range | Head-body 120-228 mm; tail 90-149 mm; 95-200 g; four subspecies | High for broad reference ranges |
| Animal Diversity Web | https://animaldiversity.org/accounts/Pteromys_volans/ | Average mass, reproduction, wild lifespan | 130 g average mass; ~30 d gestation; 3.8 y wild average; reproductive literature conflicting | Moderate-high; ADW synthesis rather than new primary measurement |
| Selonen, Wistbacka & Santangeli, BMC Zoology 2016 | https://doi.org/10.1186/s40850-016-0009-3 | Sexual dimorphism, seasonal mass | 22-year dataset; females larger than males; male mass seasonally variable | High, peer-reviewed long-term study |
| Hanski et al., Journal of Mammalogy 2000 | https://doi.org/10.1644/1545-1542(2000)081%3C0798:HRSMAN%3E2.3.CO;2 | Home range, movement, nests, ecology | 59.9 ha male and 8.3 ha female mean ranges; 292 m average male distance from nest; >2 km longest movements; multiple nests | High, species-specific telemetry |
| Hanski, Wildlife Biology 1998 | https://doi.org/10.2981/wlb.1998.013 | Habitat use, adult activity | Radio-tracked adults in managed Finnish forest; arboreal habitat use | High, species-specific telemetry |
| Zoo Jihlava | https://zoojihlava.cz/zvire/poletuska-slovanska/ | Total length, mass, diet | ~150 g; 22-34 cm including tail; plant-dominated diet | Moderate, zoological institution |
| Scheibe et al., US Forest Service / Acta Theriologica 2006 | https://research.fs.usda.gov/treesearch/24514 | Comparative gliding energetics/performance | *G. sabrinus* mean glides 12.46-14.39 m, max 65 m, 6.26-8.11 m/s; gliding can reduce transport cost | High study quality, but **different species**, mechanism context only |
| Bishop, Journal of Experimental Biology 2006 | https://doi.org/10.1242/jeb.02062 | Comparative controlled-glide mechanics | *G. volans* mean 5.11 m/s; limb posture changes membrane geometry and aerodynamic performance | High study quality, **different species**, not used as canonical speed |
| Essner, Journal of Experimental Biology 2007 | https://journals.biologists.com/jeb/article/210/8/1413/17353/Take-off-and-landing-forces-and-the-evolution-of | Comparative landing mechanics | *G. sabrinus* takeoff 1-10 bodyweights, landing 3-10; pitch-up and four-limb load distribution | High study quality, **different species**, mechanism context only |
| Kikuchi et al., Ethology 2023 | https://doi.org/10.1111/eth.13386 | Social behavior | Communal nesting documented outside winter in Hokkaido *P. volans* | High, peer-reviewed species-specific study |
| Dechmann et al. conservation-genomics paper 2025 | https://pmc.ncbi.nlm.nih.gov/articles/PMC12400938/ | Conservation context | Global LC but regional declines and stronger European/national threat categories | High, recent peer-reviewed synthesis |
| Wikimedia Commons / iNaturalist-reviewed photo | https://commons.wikimedia.org/wiki/File:Pteromys_volans_292232567.jpg | Image provenance | Exact species, 2048x1365, CC BY 4.0 | Strong provenance; adulthood/full-body strictness unresolved |

## 11. Confidence, conflicts, and uncertainty

- **Taxon conflict:** live profile uses tribe `Pteromyini`, while this report selects *Pteromys volans* to make the roster animal biologically testable. Production taxonomy should eventually decide whether the generic name should be renamed to Siberian Flying Squirrel or whether a different representative species is intended.
- **Mass:** broad references span 95-200 g and ADW gives 130 g average. Female-biased size is strongly supported, but 160 g is a representative editorial canonical selection rather than a directly published female mean.
- **Speed:** live 36 km/h is unsupported. Related flying-squirrel species have measured glide velocities, but those are not copied into *P. volans*.
- **Glide distance:** popular references frequently state 35 m, 60 m, or even >100 m. Because strong species-specific experimental verification was not located in this run, none is made a canonical field. The >2 km telemetry movement is cumulative movement through habitat, not one glide.
- **Bite force:** no credible PSI measurement found. Remains 0.0 rather than guessed.
- **Reproduction:** historical sources conflict over one versus two litters and litter size; ADW explicitly flags this uncertainty.
- **Image:** exact species and license are strong, but strict adulthood and complete appendage visibility are not established.

## 12. Cross-animal normalization notes

- At 0.16 kg, Flying Squirrel must remain far below Fennec Fox (1.5 kg), Ferret (1.5 kg), Dingo (18 kg), Cougar (70 kg), Elk (320 kg), and megafauna in absolute Attack, Defense, Size and Raw Power.
- Its **Attack 9.0** is intentionally below Fennec Fox 15.0 and Ferret 17.0. The squirrel's incisors do not erase an order-of-magnitude body-mass disadvantage.
- **Defense 8.0** is low because evasion is not armor. This prevents double-counting gliding under Defense, Agility and Special.
- **Agility 96.0** is allowed to exceed Cougar 92.0 because this category measures control, turning, balance and evasive repositioning rather than force. The score is still below the Dragonfly control at 98.0, which has powered flight and extreme aerial maneuverability.
- **Stamina 61.0** stays well below endurance specialists such as Dingo 81.0, Dhole 86.0 and Emperor Penguin 95.0. Large home-range mobility is evidence of sustained movement, not proof of elite exercise physiology.
- **Intelligence 66.0** is close to Ferret 67.0 and Cougar 68.0, but far below Crow 96.0. Spatially demanding gliding does not justify corvid-level cognition.
- **Special 87.0** is high because controlled gliding changes matchup geometry, but remains below truly extreme mechanisms such as Electric Eel 98.0. It is not a damage multiplier.

## Final verification against staging rules

- Representative healthy adult selected: **yes**
- Larger/stronger sex considered: **yes, larger female selected**
- Population and sex variation documented: **yes**
- Unsupported speed rejected: **yes**
- Unsupported bite PSI rejected: **yes**
- All canonical schema fields addressed: **yes**
- Current substats independently rescored: **yes**
- Six headline ratings, one decimal each: **yes**
- Exactly two named special abilities: **yes**
- Exactly two unique traits: **yes**
- Expanded ecology/profile/fun facts: **yes**
- Direct source ledger with conflicts: **yes**
- Cross-roster normalization: **yes**
- Mandatory image section: **yes**
- Transparent PNG claimed: **no**
