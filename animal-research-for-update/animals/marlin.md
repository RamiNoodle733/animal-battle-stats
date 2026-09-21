# Marlin Research Overhaul

## Research status
- **ABS roster name:** Marlin
- **Canonical taxon:** Blue marlin, *Makaira nigricans* Lacépède, 1802
- **Family:** Istiophoridae
- **Living/extinct:** Living
- **Canonical combat specimen:** healthy mature adult female, 250.0 kg
- **Research confidence:** high for taxonomy, female-biased size dimorphism, longevity, migration and habitat; moderate for representative female mass/length and combat interpretation; low for true maximum swimming speed and any bite-pressure value
- **Image status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`

## 1. Identity and canonical specimen
The roster's generic “Marlin” is resolved here to **blue marlin, *Makaira nigricans*** rather than treating Istiophoridae as a species. NOAA recognizes *M. nigricans* and notes that females grow much larger than males. A 2025 peer-reviewed western/central North Pacific growth analysis found females consistently attaining greater mean lengths at age, with observed female ages 1–27 years and male ages 1–18 years in the combined dataset.

Because females are the larger sex and therefore the stronger absolute combat specimen, ABS should use a **healthy mature adult female**. The canonical **250.0 kg** individual is intentionally far below the 565 kg radiocarbon-aged female and NOAA's exceptional upper size around 907 kg/2,000 lb. It represents a large but non-record adult female rather than a tournament “grander.” Geographic/ocean-basin and age variation are substantial.

## 2. Physical measurements and ranges
### Mass and dimensions
NOAA states blue marlin can exceed 12 ft (3.66 m) and reach 2,000 lb (907 kg), while males reach about 7 ft and females are much larger. A directly studied female weighed **565 kg** and measured **371 cm lower-jaw fork length**. The 2025 growth dataset covered females 136–330.5 cm eye-fork length and males 118–232.1 cm EFL. These measurements are not interchangeable, so ABS should not silently merge EFL, LJFL and total length.

Recommended canonical values are **250.0 kg** and **300.0 cm total length** for a robust mature female. These are representative editorial specimen selections within credible adult morphology, not claimed population means.

### Height
A conventional terrestrial “height” is not biologically meaningful for a fusiform pelagic fish. Proposed `height_cm` is **0.0** as not applicable rather than inventing body depth.

### Speed
The famous marlin speed claims near 80–100 km/h are not accepted here. A peer-reviewed review of billfish swimming reports that archival-tag data for blue marlin rarely exceeded **2 m/s**, with a recorded maximum of **2.25 m/s**, while related sailfish muscle/kinematic work suggests burst ceilings far below historical 30+ m/s myths. Because the 2.25 m/s tag observation is not a validated physiological maximum for a large adult blue marlin, canonical `speed_mps` remains **0.0 pending a defensible species-specific maximum**. Agility is scored from morphology and behavior rather than a folklore speed value.

### Lifespan
NOAA says females may live about 20 years and males up to about 10 years. Bomb-radiocarbon analysis of a 565 kg female most strongly supported an age close to **20 years**, while acknowledging alternative age scenarios and historical uncertainty. The 2025 growth dataset included females to 27 years. Canonical `lifespan_years` is **20.0**, with a note that validated/estimated maximum longevity remains an active research issue.

### Bill and jaws
The defining weapon is the elongate spear-shaped upper jaw or **bill/rostrum**. It provides reach ahead of the body and is relevant to prey handling and collision risk. This run did not recover a strong sex-specific bill-length dataset suitable for a canonical centimeter value, so no weapon dimension is fabricated.

Blue marlin have jaws and teeth for retaining prey, but the roster's relevant offensive structure is the bill plus whole-body momentum. No defensible bite pressure with measured contact area was recovered. `bite_force_psi` is **0.0**.

### Defenses
Defense is mostly scale, body size, dense axial musculature, speed/evasion and open-water mobility. There is no heavy armor, shell, venom or chemically mediated defense.

## 3. Canonical proposed factual fields
| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **250.0** | Large representative mature female, well below 565–907 kg exceptional females. |
| `height_cm` | **0.0** | Terrestrial height not meaningful; future schema should use body depth. |
| `length_cm` | **300.0** | Representative large mature female total-length target; measurement conventions vary. |
| `speed_mps` | **0.0** | No defensible true species maximum; archival-tag 2.25 m/s is observational, not a ceiling. |
| `lifespan_years` | **20.0** | NOAA female lifespan and bomb-radiocarbon support near 20 y; older females occur in growth data. |
| `bite_force_psi` | **0.0** | No defensible pressure measurement/contact area. |

Future fields: `canonical_sex`, `measurement_length_type`, `lower_jaw_fork_length_cm`, `eye_fork_length_cm`, `bill_length_cm`, `tagged_speed_mps`, `maximum_dive_depth_m`, `migration_track_km`, and per-field confidence.

## 4. Combat biology
### Weapons and offensive mechanics
The bill gives a blue marlin unusual frontal reach for a fish. In a hypothetical encounter the practical damage system is the rigid rostrum delivered by a large, fast, muscular body, backed by jaws once prey is close. The bill should not be modeled as a magical sword: effectiveness depends on angle, relative motion, target anatomy and room to accelerate.

### Predation and feeding
NOAA reports a diet dominated by tuna and other open-water fishes. Blue marlin are active pelagic predators. North Atlantic archival-tag research supports visually mediated hunting: deeper daytime use and activity around dawn, dusk and full-moon periods track light and prey conditions.

### Locomotion and maneuverability
The body is a streamlined open-ocean design with a powerful lunate tail, narrow caudal peduncle and retractable/foldable fin architecture. It is excellent at sustained forward swimming and high-control turns in three dimensions, but its long rostrum and large body make ultra-tight maneuvering less comparable to tiny reef fishes. Top-speed folklore is deliberately excluded from Agility.

### Endurance
Endurance is a major strength. A global satellite-tag dataset included **144 deployments**, 14,928 monitoring days and 210,982 km of minimum straight-line displacement. Median state-space-model track distance was **2,678 km**, with median modeled movement **34 km/day** and tracks up to **12,531 km**. This supports elite migratory stamina without pretending routine migration rate equals combat sprint output.

### Senses
Vision is especially important. Seasonal/diel habitat analysis found patterns consistent with visual hunting and light-linked vertical behavior. Like other pelagic predatory fishes, lateral-line mechanoreception and olfaction supplement vision, but this report does not claim exotic sensory mechanisms without direct species evidence.

### Intelligence and tactics
Blue marlin show context-dependent depth use, migration, prey tracking and habitat selection. These are sophisticated predator behaviors, but there is no basis for mammal/primate-level general cognition. Tactics are therefore strong in an ecological sense and moderate-high in the ABS intelligence framework.

### Fighting and aggression
Direct quantified intraspecific combat literature is limited. The species' spectacular resistance when hooked demonstrates powerful escape behavior, not proof of deliberate duel tactics. Ferocity is based mainly on active predation and willingness to strike mobile prey, with uncertainty retained.

### Environmental strengths
Warm tropical/subtropical open water, deep pelagic space and room for approach strongly favor the marlin. NOAA notes frequent use of the upper 100 m, while archival studies show deeper excursions dependent on temperature and oxygen.

### Environmental limitations and weaknesses
Confined water reduces acceleration and turning options. Low oxygen and cold water constrain depth use. The body lacks armor and the bill is a directional weapon that is less useful when an opponent is already alongside or behind. Terrestrial matchups are biologically meaningless and should be treated as environmental incompatibility, not a stat failure.

### Matchup archetypes
**Strong against:** smaller unarmored aquatic animals that can be approached in open water, especially targets vulnerable to a frontal bill strike and follow-up pursuit.

**Weak against:** heavily armored aquatic taxa, much larger marine predators able to absorb or evade a frontal strike, highly maneuverable close-range opponents that get inside the bill, and any matchup outside viable water.

## 5. Proposed ABS substats
All values are absolute roster-wide ratings and are independent of the legacy site placeholders.

| Substat | Rating | Justification |
|---|---:|---|
| Size | **55.0** | 250 kg is substantial but far below cetaceans and true megafauna. |
| Raw Power | **56.0** | Large muscular pelagic fish with powerful axial propulsion, not heavyweight megafauna force. |
| Weaponry | **62.0** | Long rigid bill offers unusual reach and concentrated frontal injury potential. |
| Protection | **31.0** | Scales and body mass only; no heavy armor or shell. |
| Toughness | **50.0** | Large robust fish capable of prolonged struggle, but vulnerable soft tissues remain. |
| Speed | **65.0** | Strong pelagic locomotor specialization; factual maximum remains unresolved, so not elite from folklore. |
| Maneuverability | **77.0** | Strong three-dimensional control at large-fish scale, limited in very tight quarters. |
| Endurance | **90.0** | Multi-thousand-kilometer tagged movements and persistent pelagic travel support elite endurance. |
| Recovery | **45.0** | No unusual regenerative system established. |
| Tactics | **63.0** | Visual hunting, vertical habitat shifts and prey/environment tracking. |
| Senses | **68.0** | Strong vision-centered pelagic predator suite, without an exotic modality. |
| Ferocity | **60.0** | Active large-pelagic predator; direct duel-aggression evidence is limited. |
| Abilities | **68.0** | Bill weapon plus extreme migratory/open-water specialization materially change matchups. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **58.0** | 250 kg momentum and a long bill make a dangerous frontal strike, but weapon use is directional and not equivalent to a giant macropredator bite. |
| **Defense** | **41.0** | Size and evasive swimming help, but there is little structural armor. |
| **Agility** | **78.0** | Highly controlled pelagic locomotion and three-dimensional repositioning without relying on mythical top-speed claims. |
| **Stamina** | **90.0** | Satellite-tag movements support exceptional sustained oceanic travel. |
| **Intelligence** | **62.0** | Flexible visual hunting and habitat use, but no evidence for high mammalian general cognition. |
| **Special** | **70.0** | Bill-based reach and pelagic specialization are matchup-changing without being a biochemical bypass ability. |

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Rostral Lance** — the elongated rigid upper jaw projects the damaging contact point ahead of the body, giving the marlin unusual frontal reach and concentrated strike geometry.
2. **Pelagic Marathoner** — physiology and locomotor design support persistent open-ocean movement across thousands of kilometers, making prolonged aquatic pursuit or disengagement unusually sustainable.

### Unique traits
1. **Female Heavyweight Dimorphism** — females continue to attain much greater size and longevity than males, making the fighting-sex choice materially important to absolute combat scaling.
2. **Light-Tracked Hunter** — diel depth use changes with light, temperature and oxygen in patterns consistent with visual predation and vertical prey tracking.

## 8. Expanded profile
### Habitat and range
Blue marlin occur throughout tropical and subtropical Atlantic, Pacific and Indian Ocean waters. NOAA describes them as strongly pelagic, generally favoring warm, well-mixed surface water and spending much time in the upper water column. Tagging nevertheless shows substantial vertical and horizontal movement.

### Diet and ecology
They are large open-ocean predators feeding mainly on tuna and other pelagic fishes, with cephalopods and other prey contributing regionally. Their ecological role is that of a mobile upper-level predator rather than a resident reef hunter.

### Social structure and life history
Blue marlin are generally encountered as solitary pelagic predators rather than stable cooperative groups. NOAA places male maturity around two years and female maturity around three to four years, with spawning in warm-season waters. Rapid juvenile growth can produce 0.9–1.8 m fish within the first one to two years.

### Conservation and human interaction
Blue marlin are heavily interacted with by international pelagic fisheries and are iconic recreational game fish. NOAA manages U.S. Pacific fisheries with international coordination because migrations cross jurisdictions. Catch-and-release tagging has generated important movement and survival data.

### Adaptations
Streamlined fusiform body, powerful caudal propulsion, a long rostrum, visual pelagic hunting, broad-scale migration and physiological tolerance for repeated vertical excursions.

### Genuine fun facts
- A radiocarbon-aged **565 kg female** measured 371 cm lower-jaw fork length and was most likely close to **20 years old**.
- NOAA reports females can reach more than 12 ft and roughly 2,000 lb, while males reach only about 7 ft.
- A global tag synthesis modeled median tracks of 2,678 km and a maximum track of 12,531 km.
- The old claim that billfish routinely swim around 35 m/s is inconsistent with modern biomechanical and tagging evidence.
- Blue marlin depth use changes with light, oxygen and sea-surface temperature, supporting a dynamic visual-hunting strategy.

### Concise site summary
A mature female blue marlin is a 250 kg open-ocean predator built around a long bill, powerful swimming and extraordinary migratory stamina. Its frontal weapon and three-dimensional mobility make it dangerous in open water, while modest armor and a directional attack geometry keep Defense below heavily protected marine animals.

### Rich narrative profile
The blue marlin is not simply a “fast fish.” Its battle-relevant design is an integrated pelagic system: a streamlined body supplies sustained propulsion, a long rostrum places a hard contact point well ahead of the head, and visual hunting behavior lets the animal exploit a huge three-dimensional arena. A large female can outweigh a large male several times over, so sex matters enormously when choosing a canonical combat specimen.

The strongest evidence for the marlin is endurance rather than internet speed records. Satellite tags show movements spanning thousands of kilometers, while modern biomechanics casts serious doubt on historic claims of 30-plus-meter-per-second billfish. ABS therefore gives the marlin elite Stamina and strong Agility without turning an unsupported speed myth into a factual field. Its weaknesses are equally clear: there is no heavy armor, its bill is most useful when the fish has space and alignment, and a close opponent that gets beside the rostrum removes much of that reach advantage.

## 9. Image requirement
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/marlin.png` (not created)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Atlantic_blue_marlin.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/9/92/Atlantic_blue_marlin.jpg
- `file_format_verified`: source JPEG verified by Commons; final PNG absent
- `alpha_verified`: no
- `full_body_verified`: candidate appears to contain the full head-to-tail silhouette, but strict fin/tail-tip completeness was not certified as an adult source in this run
- `adult_verified`: no; source identifies exact species but does not explicitly state adult
- `sex_verified_or_unknown`: unknown
- `license_status`: public domain, NOAA U.S. federal work
- `notes`: 4608x3357 exact-*Makaira nigricans* NOAA photograph. It is high resolution and reusable, but IMAGE_REQUIREMENTS requires adulthood to be established and complete anatomy to be visually certified. A second 4032x3024 IFREMER CC BY 4.0 exact-species research photograph was also found, with an associated background-free dataset mentioned by the source, but adulthood/sex remain unstated. Current GitHub writer cannot commit binary PNGs, so no image completion is claimed.

## 10. Source ledger
| Source | Direct URL | Supports | Finding / context | Confidence / conflicts |
|---|---|---|---|---|
| NOAA Fisheries, Pacific Blue Marlin | https://www.fisheries.noaa.gov/species/pacific-blue-marlin | taxonomy, dimorphism, size, lifespan, diet, habitat, maturity | females larger; >12 ft and up to 2,000 lb; males ~7 ft; females ~20 y; tuna/open-water fish diet | High agency synthesis; upper values are maxima, not representative. |
| Andrews et al. 2018 / NOAA repository | https://repository.library.noaa.gov/view/noaa/52478 | longevity, exceptional female measurement | 565 kg female, 371 cm LJFL; evidence favored age near 20 y | High peer-reviewed radiocarbon study; one exceptional fish. |
| 2025 ICES growth analysis / NOAA repository | https://repository.library.noaa.gov/view/noaa/71674 | sex dimorphism, growth, age ranges | females 136–330.5 cm EFL, ages 1–27; males 118–232.1 cm EFL, ages 1–18; females larger at age | High peer-reviewed; EFL differs from total length/LJFL. |
| Dale et al. 2022 / NOAA repository | https://repository.library.noaa.gov/view/noaa/47830 | migration/endurance | 144 tags; median modeled track 2678 km, max 12531 km; median modeled movement 34 km/day | High; movement rate is not sprint speed. |
| Kraus et al. 2023 / NOAA repository | https://repository.library.noaa.gov/view/noaa/58935 | diel/seasonal habitat, visual hunting | latitudinal migration and light-linked vertical behavior | High peer-reviewed. |
| Svendsen et al. 2016, Biology Open | https://journals.biologists.com/bio/article/5/10/1415/1485/Maximum-swimming-speeds-of-sailfish-and-three | speed myth calibration | cites blue-marlin archival-tag speeds rarely >2 m/s, max 2.25 m/s; rejects extreme historical billfish speeds | High for critique/context; not a direct maximum trial on adult blue marlin. |
| Commons NOAA image | https://commons.wikimedia.org/wiki/File:Atlantic_blue_marlin.jpg | image candidate | 4608x3357 exact species, public domain NOAA | Adult/sex not explicit. |
| Commons IFREMER image | https://commons.wikimedia.org/wiki/File:Marlin_bleu_(Makaira_nigricans)_(Ifremer_00761-87302).jpg | alternate image candidate | 4032x3024 exact species, CC BY 4.0, research sampling photograph | Adult/sex not explicit. |

## 11. Confidence, uncertainty and source conflicts
**High confidence:** *M. nigricans* identity, strong female-biased size dimorphism, large pelagic-predator ecology, long-distance migration and approximately 20-year female lifespan scale. **Moderate confidence:** 250 kg/300 cm canonical female because these are representative ABS specimen selections rather than population means. **Low confidence:** true maximum swimming speed and any PSI bite value.

The largest source conflict is speed. Historic popular values imply extraordinary 30+ m/s performance, whereas modern biomechanical work argues those speeds are implausible and archival blue-marlin tags recorded much lower values. ABS therefore leaves the factual maximum unresolved rather than choosing either a folklore maximum or a tag-limited observation as the physiological ceiling.

## 12. Cross-animal normalization notes
At 250 kg, Marlin Raw Power and Attack should exceed small aquatic predators and Mantis Shrimp in absolute force despite the shrimp's extreme proportional strike. Its Attack **58.0** is deliberately comparable to Kudu **58.0** and below Leopard/Hyena/Jaguar predator weapon systems because the marlin's rostrum is powerful but directional and poorly suited to close grappling. Defense **41.0** remains below Leatherback Sea Turtle **60.0** because marlin lacks armor. Agility **78.0** is strong but below the smaller, more maneuverable Eurasian Lynx **85.0** and Macaw **86.0**. Stamina **90.0** is above Maned Wolf **72.0**, Kangaroo **86.0**, and Manta Ray **89.0**, justified by the unusually strong multi-thousand-kilometer satellite-tag evidence. Special **70.0** is well below Mantis Shrimp **97.0** because a bill is specialized weapon geometry, not a rare sensory/cavitation complex.