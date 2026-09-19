# Golden Eagle Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Golden Eagle
- **Scientific name:** *Aquila chrysaetos* (Linnaeus, 1758)
- **Family:** Accipitridae
- **Status:** Living
- **Exact animal represented:** The species *Aquila chrysaetos* across its Holarctic range. The live site already names this exact species.
- **Canonical specimen:** Healthy fully mature **adult female**, approximately **5.0 kg**, in definitive adult plumage.
- **Why female:** Golden eagles show reversed sexual size dimorphism. ADW reports females at 3.94-6.125 kg versus males at 3.0-4.475 kg; larger females are the stronger canonical combat sex.
- **Population variation:** Size varies among subspecies and geography. North American *A. c. canadensis* females are often around the upper-4-kg range, while some Eurasian populations are larger. The 5.0 kg canonical value is a representative large adult female, not the 7.7 kg record wild bird or an overweight captive/falconry extreme.

## 2. Physical measurements

### Mass

Animal Diversity Web reports **3.0-6.125 kg** overall, with females **3.94-6.125 kg** and males **3.0-4.475 kg**. SeaWorld independently gives males 3.5-4.0 kg and females 4.5-6.0 kg. Geographic/subspecific compilations extend the broad species range somewhat, but record birds should not become the baseline.

- **Canonical mass:** **5.0 kg**
- **Representative female context:** roughly 4-6+ kg depending on population
- **Confidence:** High for reversed dimorphism and broad range; moderate-high for the editorial canonical value.

### Body length, standing height and wingspan

ADW gives body length **70-84 cm** and wingspan **185-220 cm**. NPS Bryce Canyon gives **76-102 cm** length and **203-224 cm** wingspan, reflecting differences in source population and measurement compilation. SeaWorld gives approximately 1 m height/length context and a 2.0-2.3 m wingspan.

- **Canonical `length_cm`:** **82.0 cm** head-to-tail
- **Canonical `height_cm`:** **0.0 cm** because a standardized standing-height measurement was not established strongly enough to separate it from body length.
- **Representative female wingspan:** **215.0 cm**
- **Broad wingspan context:** about 185-224+ cm, with sex and population effects.
- **Confidence:** High for broad dimensions; moderate-high for canonical representative choices.

### Flight speed

NPS states that a golden eagle can swoop at up to **200 mph (about 89.4 m/s)**, and popular references repeat similar dive maxima. USGS has a much stronger movement dataset of about **870,000 GPS telemetry points from 68 golden eagles** and explicitly modeled flight speed as a function of environmental and individual conditions, but the accessible abstract does not establish a clean physiological maximum comparable to the NPS 200 mph claim.

Because a stoop is gravity-assisted attack flight, not ordinary level speed, and because this run did not recover an instrumented maximum-speed trial validating 200 mph as a canonical species maximum:

- **Canonical `speed_mps`: `0.0`**
- **Editorial Speed substat:** may still recognize that this is an extremely fast aerial predator without pretending an uncertain maximum is a measured factual field.
- **Confidence:** High that attack dives are very fast; low-moderate for a single maximum number.

### Lifespan

USFWS states golden eagles can live **up to about 30 years in the wild**, and USGS population work estimates adult annual survival around **0.90** in the western United States. Older Forest Service synthesis notes much longer captive records.

- **Canonical `lifespan_years`: 25.0**
- **Maximum context:** about 30 years in the wild is well supported as attainable longevity, not an average life expectancy.
- **Confidence:** Moderate-high.

### Bite force and bill

The hooked bill tears flesh and assists at close range after the feet secure prey. No defensible species-specific bite-pressure measurement with force/contact-area methodology was found.

- **Canonical `bite_force_psi`: `0.0`**
- **Do not use:** generic eagle PSI claims or conversions from grip-force folklore.

### Talons and feet

The feet are the primary killing system. Morphometric compilations based on raptor literature place the long hallux claw broadly around **45-63.4 mm**, with a large-sample mean reported near **51.7 mm**. This is materially larger than the bald-eagle hallux reference around 40 mm in comparative literature. Because the accessible primary morphometric paper should be checked directly before production migration, use the mean only as a research reference, not as false universal precision.

- **Future field proposal:** `hallux_talon_mm: 51.7` as a literature-reference mean pending primary-table verification.
- **Bill:** strongly hooked, useful for tearing and finishing restrained prey.
- **Feet:** four toes per foot with strongly curved talons; anisodactyl grasp gives puncture plus clamp-like restraint.

Claims such as 400-750 PSI or higher grip pressure are rejected. Pressure is not force, contact area changes during penetration, and popular figures rarely expose defensible methodology.

### Defensive structures

Golden eagles have no armor, shell, thick hide or blubber. Feathers provide weather and abrasion protection, while defense in a matchup comes primarily from altitude, evasion, reach management and presenting the talons toward a threat. Once a much larger opponent controls the torso or wings, the eagle is physically fragile compared with mammalian predators.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 5.0,
  "height_cm": 0.0,
  "length_cm": 82.0,
  "speed_mps": 0.0,
  "lifespan_years": 25.0,
  "bite_force_psi": 0.0
}
```

Recommended future structured fields:

```json
{
  "wingspan_cm": 215.0,
  "canonical_sex": "female",
  "hallux_talon_mm_reference": 51.7,
  "locomotion_mode": "powered flight / soaring / stooping / terrestrial walking-hopping",
  "adult_plumage_age_years": "about 5+"
}
```

## 4. Combat biology

### Primary and secondary weapons

**Primary weapon:** the feet. Golden eagles strike foot-first, puncture with curved talons and maintain a sustained grip. The large hallux claw is especially important in anchoring and penetrating prey.

**Secondary weapon:** the hooked bill, best used once the feet have established control. The bill cuts and tears rather than functioning as the primary initial killing weapon.

**Delivery system:** powered flight, soaring, contour flight and steep attack descents let the eagle bring its feet onto prey from above or behind. The delivery geometry matters more than absolute body force.

### Offensive mechanics

Golden eagles are more terrestrially predatory than bald eagles. They commonly take rabbits, hares, ground squirrels, prairie dogs and marmots, while documented diets also include birds, reptiles and occasional substantially larger vertebrates. ADW notes captures of large prey including ungulates, coyotes and badgers, but these are exceptional and must not be normalized as routine one-on-one outcomes.

A typical kill sequence is detection from a perch or soaring flight, terrain-assisted approach, rapid foot-first interception, talon penetration and sustained restraint. Against larger prey the eagle may remain attached rather than simply strike and depart. Pairs can also hunt cooperatively, with one bird driving prey and another attacking.

The ABS implication is precise: the golden eagle deserves excellent Weaponry and attack delivery for a 5 kg animal, but it does not receive wolf-level Raw Power merely because it can occasionally kill prey heavier than itself.

### Defense and durability

Its best defense is **not being where the counterattack lands**. Altitude, three-dimensional repositioning, rapid disengagement and talon-forward threat presentation make it difficult for many terrestrial animals to force contact. Those benefits belong mostly in Agility and Special, not Protection.

Physical protection itself is poor. Feathers do not stop a serious bite or crushing blow. Wing injury can instantly remove the animal's dominant mobility advantage. Ground grappling against a larger mammal is a severe failure state.

### Locomotion and maneuverability

Golden eagles combine broad soaring wings with active flapping, ridge lift, thermals, terrain-following approach and high-speed descents. They can brake, flare, extend the feet and adjust attack angle immediately before contact. Their large wings impose a turning-space cost compared with smaller falcons, so Agility should be elite but not the roster ceiling.

USGS telemetry confirms movement is dynamically affected by topography, meteorology, time of day and demographic state. A separate USGS study found very large monthly home ranges and documented long-distance movements, reinforcing that the species is built for large-scale aerial movement rather than short enclosed-space maneuvering.

### Endurance and stamina

USFWS describes migrating golden eagles using ridge lift and thermals to glide efficiently between rising-air sources. This is excellent travel economy. USGS telemetry studies show extensive home ranges and long-distance seasonal movement. Adult annual survival is high, consistent with a long-lived aerial predator.

Stamina is therefore strong, but it is not albatross-like sustained oceanic flight. Thermal soaring reduces energetic expenditure, so long travel distance should not be misread as nonstop maximum-output muscular endurance.

### Senses

Vision is the dominant combat sense. Golden eagles hunt from altitude and prominent perches, detecting and tracking small terrestrial prey across open landscapes. Their binocular targeting, head stabilization and rapid visual tracking are crucial to the final strike. Hearing is useful but not the defining hunting channel; smell is not scored as a major weapon.

### Intelligence, learning and tactics

Golden eagles use multiple hunting modes: soaring search, perch hunting, low contour approach, ambush over terrain breaks and occasional cooperative pair hunting. Route choice during movement responds to environmental conditions. This supports strong tactical flexibility and spatial competence without placing the species in corvid, parrot or great-ape cognition tiers.

### Hunting and predation behavior

Primary prey varies regionally but often centers on medium-small terrestrial mammals, especially lagomorphs and sciurids. The species also takes birds, reptiles, carrion and locally other prey. Large-prey reports exist, but routine ecology is dominated by prey the eagle can seize, subdue and process efficiently.

Golden eagles can exploit terrain aggressively. A low approach behind a ridge or slope reduces the prey's warning time, and the eagle can convert altitude into a fast descending attack. Pairs may cooperate, although the canonical ABS fighter is one individual and does not receive multiplied Attack for a partner.

### Intraspecific fighting

Adults defend nesting territories and can engage in aerial chases, foot presentation and grappling. The same talons used for prey capture are dangerous against conspecifics. Territoriality raises Ferocity moderately, but golden eagles do not benefit from reckless conflict when avoidance preserves a long-lived adult.

### Predator defense

Healthy adults have few routine natural predators. Their altitude, size among raptors, talons and vigilance discourage attack. Nestlings and eggs are more vulnerable. Adult mortality is strongly influenced by anthropogenic hazards including electrocution, collision, poisoning and shooting, illustrating that aerial mastery does not equal generalized physical invulnerability.

### Environmental strengths

- Open mountains, grasslands, shrublands, tundra and canyon country provide sightlines and lift.
- Ridges and thermals reduce travel cost.
- Elevation allows reconnaissance and initiative.
- Slopes and terrain breaks support concealed low approaches.
- Flight lets the eagle disengage from terrestrial opponents that cannot force aerial contact.

### Environmental limitations

- Dense enclosed vegetation, caves and interiors restrict a 2+ m wingspan.
- Ground combat removes the main mobility advantage.
- Talons require close physical contact.
- Large prey can roll, bite, gore or crush an attached eagle.
- Wing damage is disproportionately disabling.
- Strong wind can aid soaring but can also complicate precision attacks depending on direction and turbulence.

### Major weaknesses

1. Only about 5 kg of representative body mass on an absolute roster.
2. No armor and low tolerance for crushing trauma.
3. Primary weapons require contact and successful foot placement.
4. Much weaker once grounded or entangled.
5. Large wings require operating space.
6. Exceptional large-prey kills should not be mistaken for routine control of large carnivores or ungulates.

### Matchup archetypes

**Good matchups:** small and medium-small terrestrial animals with exposed bodies; prey vulnerable to puncture and restraint; opponents unable to contest altitude; open terrain where repeated approach and disengagement are possible.

**Bad matchups:** large cats/canids/bears that survive the first contact and can catch the body; armored or shelled animals; opponents too massive to restrain; cramped environments; dangerous grapplers; other elite aerial predators that can contest the sky.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **12.5** | A 5.0 kg female is large for a raptor but tiny on the full ant-to-megafauna roster. |
| Raw Power | **19.0** | Exceptional power-to-mass performance does not erase low absolute mass. Slightly above Bald Eagle because of terrestrial prey specialization and foot morphology, not by a huge gap. |
| Weaponry | **57.0** | Large hallux talons, four-claw grasp, hooked bill and aerial delivery make a sophisticated natural arsenal. |
| Protection | **9.0** | Feathers and avoidance, but no armor or heavy protective tissue. |
| Toughness | **20.0** | Robust for a bird yet vulnerable to crushing, wing trauma and grappling by larger animals. |
| Speed | **72.0** | Very fast aerial attack flight is institutionally documented, but the uncertain 200 mph claim is not converted into a canonical factual maximum. |
| Maneuverability | **88.0** | Excellent three-dimensional control, attack-angle selection, braking and terrain use, below the smallest extreme aerial specialists. |
| Endurance | **79.0** | Migration, huge movement areas and energy-efficient soaring support very strong endurance, below albatross-level specialization. |
| Recovery | **31.0** | Ordinary avian healing with no exceptional regeneration; long adult life does not imply trauma recovery. |
| Tactics | **70.0** | Flexible search modes, terrain masking, prey-specific attacks and occasional pair coordination support strong tactical behavior. |
| Senses | **88.0** | Exceptional raptor vision and long-range target acquisition are central to predation. Not set to 100 because roster ceiling requires stronger comparative proof. |
| Ferocity | **64.0** | Territorial and willing to tackle dangerous prey, while still behaving as a risk-sensitive long-lived predator. |
| Abilities | **70.0** | Powered flight, soaring economy and high-speed foot-first attack geometry strongly alter matchups without exotic venom/electricity. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **40.0** | Talons and sustained foot restraint are unusually effective for a 5 kg bird and more terrestrially predatory than Bald Eagle, but absolute damage remains far below large mammalian predators. |
| **Defense** | **21.0** | Excellent avoidance cannot substitute for physical protection. Once caught, the eagle is fragile relative to serious terrestrial combatants. |
| **Agility** | **88.0** | Elite aerial approach, braking, altitude control and attack-angle selection, without confusing dive speed with maneuverability. |
| **Stamina** | **79.0** | Efficient soaring and long-range movement support very strong sustained performance, below extreme migration specialists. |
| **Intelligence** | **66.0** | Flexible hunting, spatial behavior and tactical terrain use support strong animal cognition without corvid/primate inflation. |
| **Special** | **70.0** | Flight plus specialized talon delivery and terrain-assisted aerial attack fundamentally change matchup geometry, though no rare biochemical weapon is present. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Ridge-Line Ambush** — Uses terrain masking, soaring position and rapid descent to arrive foot-first with reduced warning time, turning elevation into a repeatable attack-angle advantage.
2. **Talon Lock** — Long curved talons, especially the hallux, puncture and anchor while the foot maintains restraint, allowing the eagle to stay attached to struggling prey rather than relying on a single impact.

### Unique traits

1. **Thermal Dominion** — Broad wings exploit thermals and ridge lift for low-cost patrol, migration and repeated high-ground positioning.
2. **Reversed Raptor Dimorphism** — Females are materially larger than males, giving the canonical female greater reach, mass and prey-control capacity while retaining the same aerial hunting architecture.

## 8. Expanded profile content

### Habitat and range

Golden eagles have a broad Holarctic distribution across North America, Eurasia and parts of North Africa. They favor open or semi-open landscapes such as mountains, cliffs, grasslands, shrublands, tundra, canyon country and woodland edges where large hunting areas and suitable nest sites coexist. USFWS notes sensitivity to human development and disturbance around important breeding and foraging areas.

### Diet and ecology

The diet is carnivorous and strongly regional. Rabbits, hares, ground squirrels, prairie dogs and marmots are recurring core prey. Birds, reptiles, fish, carrion and occasional larger mammals broaden the diet. As a top aerial predator, the eagle connects open-country terrestrial prey populations with cliff and tree nesting systems and also participates in scavenger networks.

### Social structure

Adults are commonly solitary or paired. Breeding pairs generally maintain long-term bonds and territories, with multiple alternate nests possible within a territory. Rich food conditions can create temporary aggregations, and migration corridors concentrate otherwise dispersed birds.

### Reproduction and life history

USFWS reports pair bonds that commonly persist for life, hatching after roughly 41-45 days and fledging roughly 6.5-12 weeks after hatching. Full definitive adult plumage is generally achieved around five years or later. Long lifespan and high adult survival make loss of breeding adults demographically important.

### Conservation

The species is globally treated as Least Concern, but local populations face important human-caused mortality. USFWS highlights concern over U.S. population trends, and USGS research identifies electrocution, collision and other anthropogenic mortality as major management issues. Golden eagles are protected in the United States under the Bald and Golden Eagle Protection Act, Migratory Bird Treaty Act and Lacey Act.

### Major adaptations

- Reversed sexual size dimorphism with larger females.
- Broad wings for soaring and atmospheric-lift exploitation.
- Long, curved talons with an especially large hallux claw.
- Feathered tarsi characteristic of booted eagles.
- Hooked bill for tearing flesh.
- Exceptional visual hunting system.
- Flexible terrain-assisted hunting strategies.
- Long-lived life history and strong adult survival.

### Human interaction

Golden eagles have major cultural importance across many societies and a long history in falconry, especially Central Asian eagle hunting traditions. Modern conflicts include electrocution, wind-energy collision risk, lead/toxin exposure, illegal shooting and disturbance. Legal protection makes possession or take of birds and feathers highly regulated in the United States.

### Strong fun facts

- Females are larger than males, the opposite of the size pattern familiar from many mammals.
- The species occurs across much of the Northern Hemisphere rather than being restricted to North America.
- Adults can live about 30 years in the wild.
- USGS analyzed roughly 870,000 GPS locations from 68 golden eagles in one movement study.
- Golden eagles use thermals and ridge lift to travel efficiently and can forage while migrating.
- The hallux claw is substantially larger than the comparable Bald Eagle claw in morphometric comparisons.
- Pairs can hunt cooperatively, with one eagle driving prey and the other attacking, but ABS scores the individual rather than granting pair-level power.
- Definitive adult plumage takes years to acquire, which helps distinguish adults from white-marked younger birds.

### Concise site-ready summary

The Golden Eagle is a large Holarctic raptor built around aerial initiative, long talons and terrain-assisted predation. A representative adult female weighs about 5.0 kg and spans roughly 2.15 m across the wings. Its combat strength is not mammal-like brute force: it comes from seeing prey at distance, choosing the engagement angle, descending rapidly and locking curved talons into the target. In ABS scaling, that produces elite Agility, Senses and strong Weaponry while low absolute mass and lack of armor keep Attack and Defense far below large terrestrial predators.

### Detailed narrative profile

The golden eagle is a useful test of absolute scaling because it looks more powerful than its mass suggests. It can attack from a dimension most roster animals cannot contest, can use a ridge to hide an approach, and carries penetrating weapons on the first body part it presents to prey. Those advantages are real, but they are delivery advantages. A five-kilogram eagle does not become physically stronger than a wolf, leopard or great ape simply because it can kill a hare spectacularly or occasionally tackle larger prey.

The feet solve the eagle's core predatory problem. The bird does not need to win a prolonged jaw-to-jaw exchange. It needs to arrive before the prey can react, drive curved talons into useful purchase points and maintain control while the target loses mobility. The hallux claw acts as a particularly important anchor. The hooked bill then becomes more useful once the feet have already reduced the prey's freedom.

Open terrain magnifies this architecture. Thermals and ridges make patrol economical. High visual acuity allows search from altitude. Terrain breaks can hide a low approach. A failed attempt does not necessarily force a ground fight because the eagle can often regain altitude. In a cramped forest interior or after a larger predator catches a wing, almost all of those advantages collapse at once.

That is why this report keeps Defense low despite extraordinary evasion, and why Agility is high without simply copying a dive-speed claim. It also keeps Raw Power low despite impressive prey feats. The result is a specialist profile: dangerous natural weapons, superb engagement control, strong endurance and vision, but a fragile five-kilogram body that cannot absorb the punishment tolerated by the roster's heavy mammals.

## 9. Evidence and source ledger

| Source | Direct URL | Claims supported | Finding/context | Confidence and caveat |
|---|---|---|---|---|
| U.S. Fish & Wildlife Service, Golden Eagle | https://www.fws.gov/species/golden-eagle-aquila-chrysaetos | Taxonomy, range/ecology, reproduction, migration behavior, longevity, legal status | Exact *A. chrysaetos*; thermal/ridge migration; about 30 yr wild longevity; protected species | **High**, agency species account |
| Animal Diversity Web, *Aquila chrysaetos* | https://animaldiversity.org/accounts/Aquila_chrysaetos/ | Sex-specific mass, length, wingspan, dimorphism, diet and behavior | Females 3940-6125 g; males 3000-4475 g; 70-84 cm length; 185-220 cm wingspan; females larger | **High-moderate**, university-curated synthesis |
| NPS Bryce Canyon, Golden Eagle | https://www.nps.gov/brca/learn/nature/golden-eagle.htm | Dimensions, diet, institutional dive-speed claim, carrying claim, territory | 3000-6125 g; 76-102 cm; 203-224 cm wingspan; states swoops up to 200 mph | **High** for institutional overview, **moderate-low** for 200 mph as a physiological maximum because measurement method is not supplied |
| SeaWorld, Golden Eagle facts | https://seaworld.org/animals/facts/birds/golden-eagle/ | Independent sex-specific size check and life history | Males 3.5-4 kg, females 4.5-6 kg; 2-2.3 m wingspan; maturity 4-5 yr | **Moderate**, zoological institution overview |
| USGS, Katzner et al., movement drivers | https://www.usgs.gov/publications/relevance-individual-and-environmental-drivers-movement-golden-eagles | Flight ecology and movement evidence | ~870,000 GPS points from 68 eagles; movement/flight speed modeled against environmental and demographic variables | **High**, peer-reviewed telemetry; accessible abstract does not provide maximum speed |
| USGS, age/season movement study | https://www.usgs.gov/publications/age-and-season-specific-variation-local-and-long-distance-movement-behavior-golden | Home ranges, long-distance movement, endurance context | 25 birds; monthly home ranges and long-distance movement quantified | **High**, telemetry; travel distance is not maximum-output stamina |
| USGS, age-specific survival | https://www.usgs.gov/publications/age-specific-survival-rates-causes-death-and-allowable-take-golden-eagles-western | Adult survival and mortality context | Adult annual survival about 0.90 (0.88-0.91 credible interval) | **High**, integrated population model |
| U.S. Forest Service FEIS, *Aquila chrysaetos* | https://research.fs.usda.gov/feis/species-reviews/aqch | Breeding season, clutch/incubation, migration, longevity synthesis | 35-45 d incubation in older synthesis; long captive longevity; variable migration | **High-moderate**, agency literature synthesis, older |
| Wikimedia Commons, Tony Hisgett | https://commons.wikimedia.org/wiki/File:Golden_Eagle_in_flight_-_5.jpg | Image candidate and provenance | Exact *A. chrysaetos*, captive in flight, 3452x3224, CC BY 2.0, Flickr license reviewed | **High** for species/license/full visible silhouette; adulthood and sex not source-established |

### Conflicts and rejected claims

- **Dive speed:** NPS says up to 200 mph, but no instrumented maximum trial was recovered. Keep `speed_mps = 0.0` until a stronger measurement resolves this.
- **Grip PSI:** rejected. Popular pressure claims lack transparent force/contact-area methodology.
- **Record body mass:** 7+ kg wild records and much heavier captive/falconry birds are not representative canonical females.
- **Large prey:** verified exceptional large-prey attacks do not define routine prey size or justify mammal-scale Raw Power.
- **Standing height:** not inferred from body length.
- **Hallux length:** useful comparative literature supports a roughly 51.7 mm mean and 45-63 mm range, but primary morphometric table should be rechecked before production migration.

## 10. Mandatory image asset review

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/golden-eagle.png`
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Golden_Eagle_in_flight_-_5.jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/6/64/Golden_Eagle_in_flight_-_5.jpg
- **file_format_verified:** Source is a JPEG, not a finished PNG.
- **alpha_verified:** No. No cutout exists.
- **full_body_verified:** **Yes for visible framing of this source photograph**. Direct visual review shows the complete flying silhouette inside the frame: head, torso, both wings including tips, both feet/talons and tail are visible without edge clipping.
- **adult_verified:** **No.** The source identifies the species and captive flight but does not explicitly state adulthood.
- **sex_verified_or_unknown:** Unknown. Sex is not inferred from appearance.
- **license_status:** CC BY 2.0, reviewed Flickr provenance on Commons.
- **notes:** Resolution is 3452x3224 and anatomy/framing are strong, but mandatory adulthood is not source-established. Therefore this cannot be promoted to `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`. The available GitHub writer accepts UTF-8 text rather than arbitrary PNG binary, so no fake `.png` is created or claimed.

## 11. Cross-animal normalization notes

- **Bald Eagle control:** Bald Eagle is staged at Attack 36.0 / Defense 22.0 / Agility 79.0 / Stamina 75.0 / Intelligence 65.0 / Special 63.0. Golden Eagle at 40.0 / 21.0 / 88.0 / 79.0 / 66.0 / 70.0 is intentionally only modestly higher in cognition and stamina, while the larger difference is in terrestrial predatory weapon delivery and maneuverability. Golden Eagle hallux morphology and terrestrial prey specialization justify higher Weaponry, but not a giant Raw Power gap.
- **Albatross control:** Golden Eagle does not approach Albatross Stamina 96.0. Thermal/ridge soaring is highly efficient but is not equivalent to extreme oceanic endurance specialization.
- **Gibbon control:** Gibbon Agility 98.0 remains above Golden Eagle 88.0 under the current staging interpretation. Flight grants three-dimensional initiative, but Agility measures control and maneuverability rather than mere access to the air or maximum speed.
- **Giraffe control:** Golden Eagle's exceptional attack geometry does not place its absolute Attack near Giraffe 73.0. A 5 kg bird cannot deliver the mass/force of a 1200 kg kicking megaherbivore.
- **Small-animal leakage check:** impressive prey-to-body-mass feats are represented primarily in Weaponry, Tactics and Special, not inflated Size, Raw Power or Defense.
- **Speed/agility check:** the unverified 200 mph dive claim is not copied into `speed_mps`, and Agility is justified by flight control rather than raw velocity.
- **Double-counting check:** flight affects Agility, Stamina and Special for distinct reasons: maneuvering, energy-efficient travel and matchup geometry. It is not used to inflate Protection or Raw Power.

## 12. Confidence and future field proposals

### Confidence

- **Taxonomy:** Very high.
- **Sexual dimorphism and body dimensions:** High.
- **Canonical 5.0 kg female:** Moderate-high.
- **Wingspan:** High for broad range, moderate-high for canonical 215 cm.
- **Maximum speed:** Low enough numerically that `speed_mps` remains 0.0.
- **Lifespan:** Moderate-high.
- **Bite/grip PSI:** Unsupported, deliberately 0.0.
- **Headline/substat ratings:** Editorial but cross-calibrated under `CALIBRATION.md`.

### Future field proposals

1. `wingspan_cm`
2. `canonical_sex`
3. `hallux_talon_mm`
4. `flight_speed_context` separating level flight from gravity-assisted stoop
5. `primary_weapon`
6. `locomotion_modes`
7. `adult_plumage_age_years`
8. `image_adult_verified`, `image_sex_verified`, and provenance fields matching `IMAGE_REQUIREMENTS.md`

## Completion checklist

- Exact taxon and canonical adult specimen: **complete**
- Dimorphism/population variation: **complete**
- Physical measurements and uncertainty: **complete**
- Canonical factual fields: **complete**
- Combat biology and matchup analysis: **complete**
- All current ABS substats, one decimal: **complete**
- Six headline ratings, one decimal: **complete**
- Exactly two special abilities: **complete**
- Exactly two unique traits: **complete**
- Ecology/life history/conservation/human interaction: **complete**
- Fun facts, concise summary and narrative profile: **complete**
- Source ledger with direct URLs/conflicts: **complete**
- Cross-animal normalization: **complete**
- Image source audit: **complete for this run; PNG not complete**
