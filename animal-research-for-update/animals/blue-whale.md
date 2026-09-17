# Blue Whale

## 1. Identity and canonical specimen

- **Common name:** Blue Whale
- **Scientific name:** *Balaenoptera musculus* (Linnaeus, 1758)
- **Family:** Balaenopteridae
- **Living/extinct:** Living
- **Exact ABS animal:** The living blue whale species *Balaenoptera musculus*. This file does not silently substitute the exceptionally large Antarctic subspecies for every population.
- **Canonical combat specimen:** Healthy mature adult **female** of the large northern form (*B. m. musculus*), approximately **26.0 m** long and **120,000 kg**. Females are the larger sex in blue whales, so the female is the appropriate canonical combat specimen under the staging methodology.
- **Sexual dimorphism:** Female blue whales grow faster and reach greater adult lengths than males. A very large whaling-record analysis found the longest animals were overwhelmingly female, supporting female-biased size dimorphism.
- **Population variation:** Size varies strongly among subspecies/populations. Antarctic blue whales (*B. m. intermedia*) are the largest; pygmy blue whales (*B. m. brevicauda*) are substantially smaller. Published species accounts give Antarctic adults up to roughly 31.7–32.6 m and 113–150 t, northern blue whales up to roughly 28 m and 113 t, and pygmy blue whales around 23 m and 69 t. Historical 190–200 t claims exist but whole-body weighing is exceptionally difficult and some old whaling-station length methods were nonstandard.

## 2. Physical measurements

### Mass

The blue whale is the largest animal known to have lived, but a representative combat specimen should not be a record. The Marine Mammal Center gives a broad average of roughly 200,000–300,000 lb (90.7–136.1 t). A modern mammal account gives northern blue whales up to about 113 t and Antarctic blue whales 113–150 t, while stressing uncertainty in old extreme measurements. Because the canonical specimen is a large healthy adult female of the northern form, **120,000.0 kg** is recommended as a practical representative high-adult value rather than a 150–200 t record-style anchor.

**Credible broad adult context:** approximately 90–150 t depending on sex, population and body length; larger historical estimates require special caution.

### Length

The Marine Mammal Center states that 80–90 ft (24.4–27.4 m) is common, while individuals over 100 ft are recorded. NOAA/PMEL gives an average around 26 m. Female-biased size is well supported. **26.0 m** is therefore recommended for the canonical adult female.

- **Canonical `length_cm`: 2600.0**
- Large Antarctic females can exceed 30 m.
- Pygmy blue whales are substantially shorter.

### Height

There is no biologically meaningful mammal-style standing/shoulder height for a fully aquatic whale. **`height_cm: 0.0`** is recommended rather than inventing a body-depth value and labeling it height.

### Speed

Older natural-history pages frequently repeat 48 km/h or similar alarm-speed claims, but modern biologging gives much better context. Peer-reviewed tag work measured blue-whale lunge speeds averaging about **3.7 ± 0.4 m/s**, with a recorded lunge range of **2.1–5.0 m/s**. A 2020 eLife biomechanics paper describes approximately **7.5 m/s** during observed “racing” behavior, with faster bursts, as the best available estimate of maximum swimming speed while explicitly noting uncertainty about higher theoretical speeds.

**Canonical `speed_mps`: 7.5.** This is a short-burst/racing estimate, not normal cruise speed and not a perfectly instrumented species record. It is more defensible than repeating 48 km/h as an established measured maximum.

### Lifespan

The Marine Mammal Center estimates **80–90 years**. Animal Diversity Web likewise gives 80–90 years and notes higher historical estimates. **85.0 years** is recommended as a representative lifespan field rather than using a maximum-longevity claim.

### Baleen and feeding apparatus

Blue whales are mysticetes and **do not have teeth**. Their jaws carry hundreds of baleen plates used to filter krill after engulfment. The Marine Mammal Center reports more than 800 black baleen plates and 55–68 ventral throat grooves. The throat pleats expand dramatically during lunge feeding.

### Bite force

A tooth-based bite PSI value is biologically inappropriate for a baleen whale, and no defensible standardized blue-whale bite-pressure measurement was identified. **`bite_force_psi: 0.0`** means absent/not applicable as a validated ABS field, not that the jaws exert literally no force.

### Engulfment capacity and lunge mechanics

Modern rorqual biomechanics estimates that a 28 m blue whale can engulf **more than 150,000 liters** of prey-laden water during a lunge. This is an extraordinary feeding adaptation, but it is not a conventional bite attack. Tag studies show blue whales accelerate before mouth opening and then decelerate sharply under enormous engulfment drag.

### Diving performance

A major tag study of 265 blue whales analyzed 200 foraging dives and 654 lunges. Foraging dives ranged **3.1–15.2 min**, averaged **9.8 ± 1.8 min**, and reached **52–315 m**, averaging **201 ± 52 m**. The bottom phase averaged 5.7 min. These are measured foraging values rather than theoretical dive limits.

### Defensive structures

Blue whales have no shell, osteoderms or external armor. Defense comes from colossal body mass, thick blubber, body depth, a robust cetacean skeleton and the difficulty of inflicting disabling trauma on such a large target. Blubber should not be scored as hard armor. Calves and compromised animals are much more vulnerable to killer whales than healthy giant adults.

## 3. Canonical proposed factual fields

| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **120000.0** | Representative large adult female of the northern form; avoids Antarctic/record extremes. |
| `height_cm` | **0.0** | Fully aquatic whale; no defensible standing-height convention. |
| `length_cm` | **2600.0** | Representative adult female, consistent with authoritative 24–27+ m common adult context. |
| `speed_mps` | **7.5** | Best available short-burst “racing” estimate in peer-reviewed biomechanics discussion; uncertain as a true absolute maximum. |
| `lifespan_years` | **85.0** | Midpoint of well-supported 80–90 year estimate. |
| `bite_force_psi` | **0.0** | Baleen whale; no defensible bite PSI field. |
| proposed `max_tagged_foraging_depth_m` | **315.0** | Maximum in the cited 265-whale tag dataset. |
| proposed `max_measured_foraging_dive_min` | **15.2** | Maximum in the cited tag dataset. |
| proposed `lunge_speed_mps` | **3.7** | Mean maximum lunge speed, ±0.4 m/s, in biomechanics work. |

## 4. Combat biology

### Primary and secondary weapons

A blue whale is not a predatory fighter, but its sheer moving mass is a weapon. The principal combat-relevant mechanisms are:

1. **Body and head momentum:** A 120 t animal moving even at ordinary whale speeds carries enormous momentum. Direct collision, shoving or body contact is potentially catastrophic to much smaller animals.
2. **Tail stock and flukes:** The muscular caudal peduncle and broad flukes are the primary propulsion system. A forceful tail movement can create dangerous contact, but blue whales are not documented as specialized tail-striking combatants in the way some cetacean anecdotes are sometimes portrayed.

The baleen-filtering mouth is a feeding system, not a tooth weapon. ABS should not turn engulfment volume into fictional “bite force.”

### Offensive mechanics

Blue whales feed by accelerating into dense krill patches, opening the jaws widely and inflating a huge ventral pouch. The feeding lunge is biomechanically extreme but specialized for tiny prey. Against a large opponent, the most realistic damage mechanism is collision or mass-backed body/tail contact rather than biting.

### Defense and durability

Defense is dominated by scale. At approximately 120,000 kg, the canonical blue whale has a huge volume of tissue, blubber and muscle protecting vital structures. Many attacks that would be lethal to smaller mammals would be superficial relative to its total body size. However, large size is not invulnerability. Killer whales can attack blue whales, especially calves and vulnerable individuals, and coordinated attacks can target fins, flukes and soft tissue. Entanglement and vessel strikes also demonstrate that large whales can be badly injured by concentrated external forces.

### Locomotion and maneuverability

Blue whales are streamlined and capable swimmers, but 26 m of body length creates enormous rotational inertia. They can perform sophisticated three-dimensional feeding maneuvers, including documented **360° rolling lunges**, showing much more body control than a simplistic “slow giant” label suggests. Nevertheless, fine turning and acceleration are far below dolphins, seals and many sharks. Agility must therefore be moderate, not high merely because the animal can swim quickly.

### Endurance and stamina

Blue whales are long-range ocean travelers and repeatedly perform multi-minute dives and lunge-feeding bouts. Their annual ecology includes large-scale seasonal movement in many populations. The 265-whale tag dataset shows repeated dives averaging about ten minutes with multiple lunges and short surface recovery. Stamina is therefore very strong, though it should not automatically exceed the most extreme endurance specialists such as wandering albatross simply because the whale is huge.

### Senses

Blue whales produce exceptionally low-frequency, powerful calls and populations have distinctive acoustic patterns. These signals are suited to long-range underwater communication. Vision is also behaviorally relevant: tagged whales perform rolling feeding maneuvers interpreted as helping them visually survey prey fields. Hearing and low-frequency communication are the strongest special sensory elements, but blue whales do not echolocate like toothed whales.

### Intelligence and learning

Blue whales are cetaceans with long lifespans, large-scale spatial memory, flexible migration/residency strategies and complex foraging decisions. Evidence supports strong navigation and behavioral flexibility, but their cognition is less experimentally characterized than bottlenose dolphins or killer whales. Intelligence should be high relative to many vertebrates without assuming dolphin-level performance merely because all are cetaceans.

### Hunting / feeding behavior

They are bulk filter feeders specializing overwhelmingly on krill. Feeding is highly selective at the patch level. Because lunging is energetically expensive, blue whales target sufficiently dense prey aggregations and adjust dive/lunge behavior to prey depth and density. Their feeding mechanics are optimized for maximizing energy gained per engulfment rather than pursuing individual prey.

### Intraspecific competition

Blue whales are usually solitary or in pairs, but aggregations occur in productive feeding areas. Rare “racing” behavior involving males competing around a female has been observed and can involve high-speed physical displacement. This supports some capacity for direct intraspecific physical competition, but it should not be generalized into constant aggression.

### Predator defense

Healthy adults benefit enormously from size. Killer whales are the principal natural opponent capable of seriously attacking blue whales, generally through coordinated group tactics and repeated soft-tissue attacks. A lone medium predator cannot realistically disable a healthy 120 t adult. Calves are much more vulnerable and are not the canonical specimen.

### Ferocity

Low to moderate. Blue whales are not aggressive macropredators. Their enormous danger comes from mass and movement rather than willingness to seek combat. Rare competitive racing and defensive movement justify more than a near-zero ferocity score, but they should remain far below lions, buffalo or other animals that routinely engage in violent physical conflict.

### Environmental strengths

- Deep/open ocean where full body movement is possible
- Long-distance aquatic movement
- Cold and temperate feeding grounds where blubber and large-body thermal inertia are advantageous
- Matchups against animals too small to penetrate deeply or control a 120 t target
- Scenarios where water prevents terrestrial opponents from functioning effectively

### Environmental limitations

- Completely dependent on water and regular access to the surface for breathing
- Cannot fight on land
- Large turning radius and body length reduce fine maneuverability
- Specialized baleen mouth is poor as a conventional combat weapon
- Surface breathing creates predictable periodic exposure

### Major weaknesses

- No teeth, tusks, claws, horns, venom or armor
- Very low fine-scale agility relative to smaller marine predators
- Vulnerable appendages and soft tissue can be targeted by coordinated attackers
- Enormous body size requires extreme food intake and makes entanglement/vessel collision consequential
- Offensive repertoire is simple and largely mass-based

### Matchup archetypes

**Strong against:** nearly all small and medium aquatic animals in forced direct contact; solitary predators unable to inflict deep disabling trauma; terrestrial animals placed in deep water; opponents that rely on grappling or superficial bites.

**Less favorable against:** coordinated killer-whale groups, hypothetical similarly gigantic marine macropredators with specialized cutting/crushing weapons, and opponents with biological mechanisms capable of bypassing sheer body mass. A blue whale is also effectively helpless in any terrestrial arena.

## 5. Proposed ABS substats

All scores use the absolute 225-animal scale.

| Substat | Score | Justification |
|---|---:|---|
| Size | **100.0** | Largest living animal and a legitimate living-roster ceiling for absolute body mass. |
| Raw Power | **96.0** | Enormous propulsive musculature and 120 t mass create extreme absolute mechanical potential, while the animal is not optimized for combat striking. |
| Weaponry | **56.0** | Tail/body collision potential is immense, but no teeth, tusks, claws, horns or dedicated killing weapon. |
| Protection | **82.0** | Huge body depth, blubber and tissue mass provide major passive protection, but no hard armor. |
| Toughness | **93.0** | Extraordinary amount of tissue and structural scale make rapid incapacitation extremely difficult for ordinary animals. |
| Speed | **61.0** | Approximately 7.5 m/s burst estimate is impressive at this mass but far below the roster's fastest swimmers/runners/fliers. |
| Maneuverability | **42.0** | 360° feeding rolls show real control, but 26 m length and immense inertia constrain fine turning and acceleration. |
| Endurance | **87.0** | Repeated deep foraging dives, migration and sustained ocean travel support very strong endurance. |
| Recovery | **55.0** | Long-lived mammal with ordinary mammalian tissue repair; no exceptional regeneration. |
| Tactics | **62.0** | Flexible prey-patch selection, migration, navigation and rolling foraging strategies, but limited evidence for combat planning. |
| Senses | **83.0** | Powerful low-frequency acoustic communication plus effective visual/environmental prey assessment; no echolocation. |
| Ferocity | **31.0** | Generally non-aggressive krill feeder; rare racing competition does not make it a dedicated fighter. |
| Abilities | **74.0** | Extreme lunge-feeding apparatus, low-frequency acoustic system and diving physiology are unusual and matchup-relevant, but many are ecological rather than direct attack tools. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **78.0** | Extreme mass makes collision or tail/body contact devastating, but lack of dedicated killing weapons prevents elite macropredator-style Attack despite world-record size. |
| **Defense** | **91.0** | 120 t body scale, tissue depth and blubber make a healthy adult extraordinarily difficult to disable, while absence of armor and known killer-whale predation keep it below invulnerability. |
| **Agility** | **44.0** | Sophisticated rolling and three-dimensional swimming, but huge length and inertia sharply constrain rapid directional change. |
| **Stamina** | **87.0** | Repeated multi-minute deep dives, long-distance migration and sustained oceanic activity support very strong endurance. |
| **Intelligence** | **69.0** | Long-range navigation, spatial memory and flexible foraging behavior justify high cognition, but direct experimental evidence is thinner than for dolphins and great apes. |
| **Special** | **76.0** | Giant engulfment apparatus, extreme low-frequency acoustic communication and specialized dive physiology substantially alter aquatic matchups without being fictional powers. |

## 7. Abilities and traits

### Proposed special abilities, exactly 2

1. **Ocean-Scale Resonance** — Blue whales produce powerful low-frequency calls adapted for communication through the marine environment. This supports long-range awareness and coordination but is not treated as a damaging “sonic attack.”
2. **Titanic Lunge** — The expandable ventral-groove feeding apparatus allows an enormous mouthful of prey-laden water, with modeled engulfment exceeding 150,000 L in a 28 m animal. In ABS this represents exceptional whole-body acceleration, gape and hydrodynamic specialization, not a fabricated bite.

### Proposed unique traits, exactly 2

1. **Living Mass Ceiling** — The blue whale is the largest living animal and therefore establishes the practical living-animal upper anchor for ABS body-size scaling.
2. **Rolling Colossus** — Multi-sensor tags have recorded complete 360° rolling lunge maneuvers, demonstrating surprisingly sophisticated three-dimensional control for an animal roughly 25–30 m long.

## 8. Expanded profile content

### Habitat

Open marine waters worldwide, from high-latitude feeding regions to lower-latitude breeding/migration areas. Distribution and migratory behavior differ among populations, and some individuals show partial migration or residency rather than a simple universal pole-to-equator schedule.

### Geographic range

Blue whales occur in all major oceans. Recognized forms include northern blue whales in the North Atlantic and North Pacific, Antarctic blue whales in the Southern Ocean, pygmy blue whales in parts of the Indian and South Pacific Oceans, and additional regional populations with ongoing taxonomic study.

### Diet

Almost entirely krill and other dense euphausiid aggregations. Their enormous body size is supported by bulk feeding on exceptionally dense prey patches rather than by hunting large individual prey.

### Ecology

Blue whales are giant rorqual filter feeders. They use seasonal ocean productivity, prey depth and patch density to decide when and where expensive lunges are worthwhile. Their feeding ecology strongly links them to productive upwelling and polar/subpolar systems.

### Social structure

Often solitary or in pairs, but loose aggregations can form where prey is concentrated. Long-range acoustic signaling permits communication across much larger spatial scales than visual contact alone. Courtship and competitive racing are still poorly observed compared with the social behavior of many toothed whales.

### Reproduction and life history

Gestation is about 11–12 months. Calves are already roughly 7–8 m at birth and gain mass extraordinarily rapidly while nursing. Females typically reproduce at multi-year intervals. The species is long-lived, with commonly cited lifespan estimates around 80–90 years.

### Conservation status

NOAA lists the blue whale as **Endangered** under the U.S. Endangered Species Act and depleted under the Marine Mammal Protection Act. International commercial whaling protection dates to 1966. Modern threats include vessel strikes, entanglement, ocean noise and changes in prey distribution/productivity.

### Major adaptations

- Largest body size of any living animal
- Streamlined rorqual body and powerful flukes
- Expandable ventral throat grooves for lunge feeding
- Hundreds of baleen plates for filtration
- Large oxygen stores and dive physiology
- Low-frequency acoustic communication
- Blubber and thermal inertia for cold productive waters
- Flexible three-dimensional lunge orientation, including rolling attacks on prey patches

### Human interaction

Industrial whaling reduced blue whales drastically during the twentieth century. Today they are protected from commercial hunting, but their size does not protect them from ships or fishing gear. NOAA specifically identifies vessel strikes, entanglement and ocean noise as ongoing management concerns. Responsible viewing requires substantial distance because a whale of this size can endanger both itself and vessels during close approaches.

### Strong fun facts

- Blue whales are the **largest animals known to have lived**, exceeding all living animals and the best-established masses of most dinosaurs.
- A common adult length is roughly **24–27 m**, while the largest Antarctic females can exceed 30 m.
- A 28 m blue whale may engulf **more than 150,000 liters** of water in one lunge.
- Tag data from hundreds of whales show foraging dives averaging around **10 minutes** and roughly **200 m** depth, with observed maxima of 315 m in that dataset.
- Their feeding lunges can involve complete **360° body rolls**.
- Females grow faster and ultimately reach greater lengths than males.
- Their calls are among the lowest-frequency and most powerful biological sounds in the ocean.
- Despite their colossal size, their principal prey are tiny krill.

### Concise site-ready summary

The blue whale is the living size ceiling: a roughly 120-ton adult female built around immense body mass, powerful flukes and the most extreme lunge-feeding apparatus on Earth. It has no teeth or armor, so its battle profile is not that of a giant predator. Instead, it survives through scale, tissue depth, endurance and oceanic mobility. Its greatest offensive threat is simple physics: any serious collision or tail/body contact from an animal this massive is catastrophic to smaller opponents.

### Detailed narrative profile

Blue whales demonstrate why ABS must keep body size, weaponry and special biology separate. The largest living animal is not automatically the best attacker. A mature female may weigh around 120 metric tons, giving it more raw moving mass than any living opponent, but its mouth is a baleen filtration system designed for krill rather than a toothed killing apparatus. Its Attack therefore comes from momentum, body contact and the muscular tail, not a fictional giant bite.

Defensively, the scale is transformative. A medium predator that can kill a deer or seal simply does not have an easy path to rapid incapacitation of an adult blue whale. The whale's blubber and tissue depth are not armor, yet they create a huge buffer around vital structures. Coordinated killer whales can overcome some of this advantage through repeated attacks and targeting, which is why Defense should remain below a perfect ceiling.

The blue whale is also more maneuverable than its dimensions suggest. Biologging has revealed full rolling lunges and deliberate orientation changes while tracking krill. Still, a 26 m body cannot match a dolphin's turning radius or acceleration, so Agility stays moderate. This is a key anti-inflation point: impressive movement for a 120 t whale is not the same as elite absolute maneuverability.

Its ecological specializations are extraordinary. The expandable throat pouch allows engulfment volumes measured in tens of thousands of liters, and low-frequency calls support communication over vast oceanic distances. These mechanisms deserve a strong Special rating because they genuinely alter how the animal functions in water, but neither should be converted into imaginary combat powers.

In a direct aquatic matchup, the blue whale overwhelms most animals through size and survivability. Against specialized giant macropredators or coordinated killer whales, however, lack of dedicated weapons and limited maneuverability matter. That balance makes it a world-class defensive giant rather than an automatic 100 in every category.

### Useful future structured fields

- `canonical_sex: female`
- `canonical_population: northern_blue_whale`
- `body_mass_range_kg`
- `wingspan_cm` equivalent should not be used for cetaceans; instead add `flipper_span_cm` only if sourced
- `max_tagged_dive_depth_m`
- `max_measured_dive_duration_min`
- `lunge_speed_mps`
- `engulfment_capacity_l`
- `baleen_plate_count`
- `vocalization_frequency_hz`
- `feeding_mode: lunge_filter_feeder`

## 9. Image Asset

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/blue-whale.png`
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Bluewhale877.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/5/5e/Bluewhale877.jpg
- `file_format_verified`: Source is JPEG; final PNG not created.
- `alpha_verified`: **No**
- `full_body_verified`: **No, strict head-to-fluke and both-fin visibility still requires final visual cutout review.**
- `adult_verified`: **Yes**, Commons explicitly identifies the subject as an adult blue whale from the eastern Pacific.
- `sex_verified_or_unknown`: **Unknown**
- `license_status`: **Public domain, U.S. NOAA federal-government work**, as documented by Wikimedia Commons.
- `notes`: Source is 1792×1128, just above the preferred 1600-pixel threshold and exact species/adult. It is retained as a strong candidate because provenance is excellent, but it is not counted as a finished image until complete silhouette framing is visually confirmed, a clean transparent RGBA cutout is produced, and the binary is committed. Current GitHub write tooling is text-only.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Context / confidence / caveat |
|---|---|---|---|
| NOAA Fisheries, Blue Whale | https://www.fisheries.noaa.gov/species/blue-whale | ESA Endangered status; MMPA depleted/protected status; vessel strikes, entanglement/noise management; 1966 international whaling protection | **High.** Current U.S. federal authority. |
| NOAA PMEL Acoustics, Blue Whale Biology | https://www.pmel.noaa.gov/acoustics/whales/whale-biology-blue.html | ~26 m average length, up to 136 t historical agency summary, krill diet, gestation, acoustic context | **High-moderate.** NOAA page includes some older cited population estimates; not used for current abundance. |
| The Marine Mammal Center, Blue Whale | https://www.marinemammalcenter.org/animal-care/learn-about-marine-mammals/cetaceans/blue-whale | Common 80–90 ft length, 200k–300k lb broad mass context, 80–90 y lifespan, baleen/throat grooves, reproduction/diet | **High-moderate.** Major marine mammal institution; natural-history summary rather than primary measurements. |
| Branch & Monnahan 2021, Marine Mammal Science / NOAA repository | https://repository.library.noaa.gov/view/noaa/63149 | Female-biased terminal body size; 21,542 fetal and 311,901 whaling records; sex/size patterns | **High.** Peer-reviewed, exceptionally large historical dataset. |
| Mammal species account, *Balaenoptera musculus* | https://doi.org/10.5281/zenodo.6596031 | Subspecies size differences; Antarctic 31.7–32.6 m / 113–150 t; northern ~28 m / 113 t; pygmy ~23 m / 69 t; warning about historical measurement methods | **High-moderate.** Species-account synthesis; exact maxima still measurement-sensitive. |
| Goldbogen et al. 2011, Journal of Experimental Biology | https://journals.biologists.com/jeb/article/214/1/131/10226/Mechanics-hydrodynamics-and-energetics-of-blue | 265 tagged whales, 200 foraging dives, 654 lunges; dive depth/duration; 3.7±0.4 m/s maximum lunge speed; 2.1–5.0 m/s range | **High.** Primary biologging/biomechanics. |
| Goldbogen et al. / APS 2019, Lunge Feeding in Rorqual Whales | https://journals.physiology.org/doi/full/10.1152/physiol.00010.2019 | Blue-whale lunge speed 3–4.7 m/s; >150,000 L modeled engulfment for 28 m blue whale; scale effects | **High.** Peer-reviewed synthesis grounded in tag data and biomechanical models; engulfment volume is modeled. |
| Segre et al. 2020, eLife | https://pmc.ncbi.nlm.nih.gov/articles/PMC7065846/ | ~7.5 m/s racing blue-whale speed as best available maximum estimate; higher breach speeds uncertain | **High-moderate.** Peer-reviewed biomechanics; ~7.5 m/s statement includes unpublished observational component and is therefore explicitly caveated. |
| Goldbogen et al. 2012, Functional Ecology | https://besjournals.onlinelibrary.wiley.com/doi/10.1111/j.1365-2435.2011.01905.x | 3.7±0.4 m/s blue-whale maximum lunge speed and interspecific scaling | **High.** Peer-reviewed. |
| Friedlaender/Goldbogen et al., 360° rolling blue whales | https://pubmed.ncbi.nlm.nih.gov/23193050/ | Multi-sensor documentation of 360° rolling lunge and search maneuvers | **High.** Peer-reviewed primary behavior/kinematics. |
| Animal Diversity Web | https://animaldiversity.org/accounts/Balaenoptera_musculus/ | 80–90 y lifespan, 11–12 month gestation, calf size, migration/social background | **Moderate-high.** University-curated synthesis; older page, so not used for current conservation counts. |
| Wikimedia Commons, Bluewhale877 | https://commons.wikimedia.org/wiki/File:Bluewhale877.jpg | Exact species, adult status, 1792×1128 dimensions, NOAA provenance and public-domain status | **High for provenance.** Whole-body suitability remains pending strict visual verification. |

### Confidence and caveats

- **High confidence:** species identity, female-biased maximum size, blue whale's status as living body-mass ceiling, baleen feeding system, tag-derived lunge/dive data, 360° rolling behavior, ESA Endangered status.
- **Moderate confidence:** 120,000 kg canonical representative. Real mass varies greatly with length, sex, population and body condition, and whole-whale weighing is difficult.
- **Moderate confidence:** 7.5 m/s canonical maximum. It is the best peer-reviewed estimate found for racing behavior, but not a universal instrumented maximum-speed trial.
- **Low/not applicable:** bite-force PSI and standing height, both intentionally left at 0.0 rather than fabricated.
- Historical 190–200 t extremes should not be used as the canonical specimen without measurement-specific documentation.

## 11. Cross-animal calibration notes

- **Versus African Elephant:** Blue Whale is vastly larger in mass, so Size and Raw Power must exceed the 5.5 t elephant. However, the elephant has more versatile dedicated combat weapons on land. Blue Whale Attack therefore does not simply inherit a near-100 score from mass.
- **Versus Bison and Black Rhinoceros:** The whale dwarfs both in absolute mass and trauma tolerance, but those ungulates have horns and direct terrestrial combat repertoires. This supports Blue Whale Defense 91.0 and Raw Power 96.0 while keeping Weaponry only 56.0.
- **Versus Beluga Whale:** Blue Whale should dominate Size, Raw Power and Defense. Beluga should remain clearly superior in maneuverability and likely in flexible social/tactical cognition and echolocation-related Special/Senses.
- **Versus Albatross:** Blue Whale Stamina 87.0 is intentionally below Wandering Albatross 96.0 because the albatross is an extreme low-cost multi-day flight specialist. Huge mass does not automatically mean better endurance.
- **Versus future Orca:** Orca should be dramatically smaller but much more agile, predatory, tactical and weapon-specialized. Blue Whale should retain the mass/defense advantage while Orca dominates maneuverability and coordinated predatory tactics.
- **Versus future Megalodon:** Blue Whale is a living Size ceiling, not necessarily the all-roster Attack or Weaponry ceiling. A reconstructed giant macropredatory shark may warrant higher Attack/Weaponry if evidence supports it.
- **Inflation check:** Defense 91.0 is deliberately below African Elephant's provisional 94.0 only because cross-environment semantics and armor/toughness definitions still need roster-wide normalization. At final audit, Blue Whale and Elephant Defense must be compared carefully so land-vs-water survivability does not create an inversion.
