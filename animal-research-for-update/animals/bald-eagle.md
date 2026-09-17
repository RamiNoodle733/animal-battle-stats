# Bald Eagle Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Bald Eagle
- **Scientific name:** *Haliaeetus leucocephalus* (Linnaeus, 1766)
- **Family:** Accipitridae
- **Status:** Living
- **Exact animal represented:** North American bald eagle, *Haliaeetus leucocephalus*.
- **Canonical specimen:** Healthy fully mature **adult female**, approximately **5.3 kg**, with full adult plumage.
- **Why female:** Bald eagles show reversed sexual size dimorphism. Females are materially larger than males and therefore are the appropriate canonical combat specimen under the overhaul rule. USFWS gives adults overall at 8-14 lb and explicitly states females are larger; Smithsonian gives 3-6.5 kg overall and likewise notes females are larger.
- **Geographic variation:** Northern birds, especially Alaskan birds, tend to be larger than southern birds. The canonical 5.3 kg female is deliberately substantial without using the largest Alaskan extreme as the normal baseline.

## 2. Physical measurements

### Mass

Authoritative institutional ranges vary with sex and geography. Smithsonian gives **3.0-6.5 kg** for the species. USFWS gives **8-14 lb (3.6-6.35 kg)** for adults and older USFWS material gives males about **7-10 lb (3.2-4.5 kg)** while females may reach about 14 lb.

- **Canonical mass:** **5.3 kg**
- **Species range:** approximately **3.0-6.5 kg**
- **Rationale:** A representative large adult female, but not a maximum-sized Alaskan bird.
- **Confidence:** High for broad range and female-greater-than-male dimorphism; moderate-high for the editorial canonical value.

### Body length / height

USFWS reports adults at roughly **30-40 in (76-102 cm)** head-to-tail. Smithsonian reports comparable species-level dimensions in its profile. Because a standing-height measurement is not consistently standardized in strong sources, height should remain undefined rather than being inferred from body length.

- **Canonical `length_cm`:** **91.0 cm** head-to-tail
- **Credible adult range:** approximately **76-102 cm**
- **Canonical `height_cm`:** **0.0 cm** because no sufficiently standardized standing-height field was found.
- **Confidence:** High for body length range; low for a standardized standing height.

### Wingspan

USFWS reports **7-8 ft (2.13-2.44 m)** for adults generally; Smithsonian gives up to **8.5 ft (2.6 m)** and notes females are slightly broader-winged. Older USFWS material gives males around 6.5 ft and females up to 8 ft.

- **Representative canonical-female wingspan:** approximately **225 cm**
- **Broad credible range:** approximately **198-260 cm**, with population and sex effects
- **Combat relevance:** enormous reach and control surface, aerial braking, balance, intimidation, and attack-angle control, but the wings themselves are not treated as primary damaging weapons.

### Flight speed

Widely repeated bald-eagle flight and dive speeds are poorly connected to instrumented species-specific maximum trials. The commonly circulated 56-70 km/h level-flight and 120-160 km/h dive figures were found in tertiary compilations, but this run did not locate a sufficiently strong primary measurement establishing a true physiological maximum.

- **Canonical `speed_mps`:** **0.0**
- **Reason:** Do not turn repeated secondary figures into false precision.
- **Confidence:** High that bald eagles are fast, powerful fliers; low for a defensible maximum numerical speed.

### Lifespan

USFWS states bald eagles can live **30 years or longer in the wild**, while emphasizing that average longevity is substantially lower. A 30-year figure is therefore a longevity potential, not mean life expectancy.

- **Canonical `lifespan_years`:** **25.0 years**
- **Maximum context:** 30+ years can occur in the wild.
- **Rationale:** A site field should not silently present an exceptional maximum as an average; 25 years represents a long-lived adult potential while remaining below documented 30+ exceptional longevity.
- **Confidence:** Moderate. Future schema should separate typical adult lifespan from maximum recorded longevity.

### Bite force and bill

The hooked bill is a tearing and processing tool, but bald eagles primarily kill and restrain with their feet. No defensible bald-eagle bite-pressure measurement with appropriate methodology was located.

- **Canonical `bite_force_psi`:** **0.0**
- **Bill:** large hooked raptorial bill suited to tearing flesh after capture.
- **Do not use:** unsourced internet bite-force numbers.

### Talons and feet

The feet are the principal combat weapons. Morphometric literature specifically distinguishes Bald and Golden Eagle talons. Comparative literature reports a bald-eagle hallux claw around **40.4 mm** and a mean culmen around **54.3 mm**, but those values should be treated as morphological references rather than universal maxima.

Claims of 700-1,000 PSI eagle grip strength are not accepted. Popular grip-pressure figures frequently lack transparent force, contact-area, posture and specimen methodology. This report therefore scores grasping power qualitatively from raptor anatomy and observed predation rather than inventing a PSI factual field.

### Defensive structures

Bald eagles have no armor, shell, osteoderms, thick hide or blubber. Protection comes from feathers, aerial evasion, strong skeletal/muscular construction for flight, and keeping dangerous opponents at talon distance. Hollow/pneumatized avian skeletal adaptations are advantageous for flight but do not justify mammal-like trauma resistance.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 5.3,
  "height_cm": 0.0,
  "length_cm": 91.0,
  "speed_mps": 0.0,
  "lifespan_years": 25.0,
  "bite_force_psi": 0.0
}
```

Additional future fields:

```json
{
  "wingspan_cm": 225.0,
  "hallux_talon_mm": 40.4,
  "locomotion_mode": "powered flight / soaring / terrestrial hopping-walking",
  "canonical_sex": "female"
}
```

The hallux value is retained as a research reference with lower confidence than the main body dimensions and should be rechecked against the full Appleton et al. morphometric dataset before production migration.

## 4. Combat biology

### Primary and secondary weapons

**Primary:** large anisodactyl feet with four strongly curved talons. The rear hallux is particularly important in grasping. The feet seize, puncture and restrain prey while the bird uses body momentum and wing control to maintain position.

**Secondary:** hooked bill for tearing, biting and close processing once an opponent is controlled. Wing strikes and body collisions can create space, but should not be scored as if the wings were specialized clubs.

### Offensive mechanics

A bald eagle's strongest combat sequence is aerial approach, foot-first contact, talon penetration/grasp, then positional control. It can attack from a vertical or oblique angle unavailable to terrestrial opponents. Fish specialization favors rapid surface interception and a strong grasp on slippery prey. It also captures birds and small mammals and aggressively steals food from other raptors.

The eagle is dangerous because weapon delivery is precise and three-dimensional, not because a 5.3 kg bird has mammal-scale raw force. Absolute scaling therefore keeps Raw Power and Attack far below large carnivores and megafauna while giving Weaponry and Agility much more credit.

### Defense and durability

Its best defense is avoidance. Flight allows rapid disengagement, altitude control and attack-angle selection. Feathers provide limited abrasion and weather protection but are not armor. Once grounded and physically controlled by a much larger mammal, the eagle's defensive outlook deteriorates sharply.

### Locomotion and maneuverability

Bald eagles are powerful soaring and flapping fliers capable of sharp approach corrections, braking, foot deployment and surface snatches. Their large wings make them less compact and aerobatically extreme than small falcons, but aerial maneuverability remains a major matchup advantage over terrestrial animals. On the ground they are comparatively awkward and vulnerable.

### Endurance / stamina

Thermal soaring and ridge/updraft use reduce the energetic cost of long-distance travel. USGS satellite telemetry of Florida subadult bald eagles documented migrations averaging about **1,397 km** on Coastal Plain routes and **2,112 km** on Appalachian routes. These are not nonstop distances and concern subadults, but they establish substantial migratory capacity. Recent telemetry also documents individuals making daily movements greater than 50 km. Bald eagles therefore deserve strong, but not albatross-level, stamina.

### Senses

Vision is the dominant combat and foraging sense. Bald eagles are visual hunters that locate prey from conspicuous perches or soaring flight. Large forward-facing fields, rapid visual tracking and long-distance detection make aerial target acquisition a major strength. Hearing is useful but not the defining hunting sense; smell is not treated as a primary combat advantage.

### Intelligence, learning and tactics

Bald eagles show flexible foraging, scavenging, hunting and kleptoparasitism. A USGS-indexed study of wintering eagles found contest outcomes depended on body size, attention posture, display and food conditions. Another field study reported subadults watching adults steal food and participating with them, suggesting learned kleptoparasitic behavior. This supports meaningful tactical flexibility and learning without inflating the species into corvid/parrot/primate cognition tiers.

### Hunting behavior

Fish dominate much of the diet. Eagles often hunt from perches or soaring flight, swooping to seize prey near the water surface. They also take waterfowl, shorebirds, small mammals and other prey and readily scavenge carrion. Opportunism is central to the species' success.

### Intraspecific fighting / social contests

Bald eagles contest food and territories. Larger individuals have an advantage in food piracy. Adults defend breeding territories, and aggressive encounters can involve aerial pursuit, foot presentation and grappling. Their social combat is serious but generally tied to resources and territory rather than indiscriminate aggression.

### Predator defense

Healthy adults have few routine predators because flight, size among North American raptors, talons and vigilance make them difficult targets. Eggs and young are more vulnerable. Adult vulnerability rises sharply when grounded, injured, poisoned, entangled or confronted by much larger terrestrial predators.

### Environmental strengths

- Open water, coasts, large rivers and lakes create ideal hunting geometry.
- Altitude provides reconnaissance, initiative and disengagement.
- Thermals and updrafts allow energy-efficient travel.
- Strong feet are particularly effective against slippery aquatic prey.
- Broad diet permits hunting, scavenging and piracy depending on opportunity.

### Environmental limitations

- Enclosed forests and cramped interiors restrict the wingspan and attack geometry.
- Ground combat removes much of the species' principal advantage.
- Talons require close physical contact.
- Aerial lifting capacity is limited by the bird's modest body mass.
- Feathers and avian body structure do not provide heavy armor.

### Major weaknesses

1. Very low absolute mass compared with serious mammalian combatants.
2. No armor and limited tolerance for crushing or grappling trauma.
3. Primary weapons are dangerous but short-reach once an opponent closes past the feet.
4. Grounded performance is dramatically worse than aerial performance.
5. Large wings need operating space.
6. Heavy prey can drag an eagle into water or prevent clean extraction.

### Matchup archetypes

**Good matchups:** small terrestrial animals lacking ranged/aerial counters; fish and water-edge prey; fragile opponents vulnerable to puncture; animals that cannot force the eagle to remain grounded.

**Bad matchups:** large carnivores that survive the initial strike; armored animals; opponents too massive to control; highly agile aerial raptors with superior pursuit specialization; cramped environments; grapplers that successfully catch the body or wing.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **13.0** | A 5.3 kg female is large for a raptor but tiny relative to the full roster's large mammals and megafauna. |
| Raw Power | **18.0** | Strong flight and feet for body size, but absolute mechanical output is limited by only ~5 kg of mass. |
| Weaponry | **52.0** | Four curved talons per foot plus hooked bill provide precise puncturing/grasping weapons with aerial delivery. |
| Protection | **10.0** | Feathers and avoidance only; no armor or thick protective tissue. |
| Toughness | **20.0** | Robust for a bird but vulnerable to major blunt/crushing trauma from larger animals. |
| Speed | **60.0** | Fast aerial movement is clear, but no unsupported top-speed number is promoted. |
| Maneuverability | **79.0** | Three-dimensional repositioning, braking and foot-first attack control are major advantages, though less extreme than small falcons. |
| Endurance | **75.0** | Long migrations and soaring efficiency support strong endurance, below extreme oceanic migrants such as Albatross. |
| Recovery | **30.0** | Ordinary avian healing, no exceptional regeneration. |
| Tactics | **66.0** | Flexible hunting, scavenging, contest behavior and learned kleptoparasitism support above-average tactical behavior. |
| Senses | **82.0** | Excellent visual target acquisition is a defining raptor advantage. |
| Ferocity | **61.0** | Territorial and assertive around food, but opportunism often favors avoiding unnecessary cost. |
| Abilities | **63.0** | Powered flight, soaring and specialized aerial grasping strongly change matchups without exotic venom/electricity/regeneration. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **36.0** | Talons can puncture and restrain small prey effectively, but absolute damage is capped by the eagle's ~5.3 kg body mass and limited ability to control much larger opponents. |
| **Defense** | **22.0** | Flight avoidance is excellent but physical protection is poor once contact is made. Defense does not double-count Agility. |
| **Agility** | **79.0** | Aerial three-dimensional control, approach-angle selection, braking and rapid disengagement create elite practical maneuverability. |
| **Stamina** | **75.0** | Long-distance migration and energy-efficient soaring support strong sustained travel, while remaining well below Albatross 96.0 and below elite terrestrial endurance anchors. |
| **Intelligence** | **65.0** | Flexible foraging and learned piracy indicate meaningful behavioral adaptability, but evidence does not support corvid/primate-level cognition. |
| **Special** | **63.0** | Flight plus specialized fish-grasping talons is highly matchup-changing, though it is not a rare biochemical or physiological weapon. |

### Cross-scale interpretation

The eagle is an example of why ABS must separate absolute force from matchup geometry. Its Raw Power is below Badger, Baboon, Arctic Wolf and Anteater because those animals simply possess much more body mass and terrestrial force. Its Agility, Senses and ability to choose engagement angles are much higher. Attack 36.0 sits near Badger 38.0 but for different reasons: the badger has more mass and jaw-driven close power, while the eagle has sharper puncture weapons and superior delivery. Defense remains low because evasion belongs primarily in Agility, not armor/toughness.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Skyhook Strike** — The eagle converts altitude, flight control and foot-first approach into a rapid talon grab that lets it attack from angles unavailable to terrestrial opponents.
2. **River Snatch** — Strong curved talons and precise surface-flight control specialize the eagle for seizing slippery aquatic prey without needing to land or fully enter the water.

### Unique traits

1. **Thermal Patrol** — Broad wings exploit thermals and updrafts for energy-efficient reconnaissance and long-distance movement, preserving stamina while searching from altitude.
2. **Pirate's Eye** — Exceptional visual surveillance combines with flexible kleptoparasitic behavior, allowing the eagle to identify prey, carcasses and opportunities to steal food from other raptors.

## 8. Expanded profile content

### Habitat

Bald eagles are strongly associated with large bodies of water, including coasts, estuaries, rivers, reservoirs, lakes and marshes, especially where large trees or other secure structures provide nesting and perching sites and fish are accessible.

### Geographic range

The species is native to North America, from Alaska and Canada through the contiguous United States, with distribution extending into northern Mexico. Northern populations may migrate when water freezes; other populations remain resident where food and open water persist.

### Diet

Primarily fish, supplemented by waterfowl and other birds, small mammals, reptiles, marine invertebrates and carrion. Bald eagles are opportunistic and readily switch between active predation, scavenging and kleptoparasitism.

### Ecology

As a large scavenging predator, the bald eagle links aquatic and terrestrial food webs. It can remove fish from surface waters, consume carrion, prey on birds and mammals, and displace other scavengers and raptors at food sources.

### Social structure

Breeding adults form long-term pair bonds and defend nesting territories. Outside breeding contexts, concentrations can form around rich food sources. Feeding assemblages have dominance interactions strongly influenced by size, age, attentiveness and resource conditions.

### Reproduction and life history

Adults typically reach full white-head/white-tail plumage around 4-5 years and commonly begin breeding around that age or later. Females usually lay 1-3 eggs. Both parents contribute to nesting and care. Nests are reused and enlarged, sometimes becoming enormous structures over many years.

### Conservation status and protection

The bald eagle was removed from the U.S. Endangered Species Act list in 2007 after a major recovery. USFWS estimated **316,700 individuals** and **71,467 occupied nests** in the lower 48 from 2018-2019 data. It remains protected under the Bald and Golden Eagle Protection Act and Migratory Bird Treaty Act. Globally it is generally treated as Least Concern.

### Major adaptations

- Reversed sexual size dimorphism, with larger females.
- Broad soaring wings and energy-efficient use of atmospheric lift.
- Large grasping feet with strongly curved talons.
- Hooked bill for tearing food.
- Excellent visual hunting system.
- Flexible diet and willingness to scavenge or pirate food.
- Mature white head and tail signaling adult status.

### Human interaction

Bald eagles are a landmark conservation-recovery species. DDT-driven reproductive failure, shooting and habitat loss contributed to severe historical declines. Recovery followed pesticide restrictions, legal protection, habitat conservation and active management. Current threats include lead exposure, collisions/electrocution, disturbance, entanglement and habitat pressures. The species is also the national emblem of the United States and is legally protected from take and disturbance.

### Strong fun facts

- Females are larger than males, reversing the size pattern familiar from many mammals.
- Adults do not acquire the iconic white head and tail until roughly 4-5 years old.
- USGS telemetry documented Florida-hatched subadults migrating more than 2,000 km on average along one major route.
- Bald eagles can build and reuse nests for years; USFWS describes nests reaching roughly 10 ft across and around 2,000 lb in some cases.
- Field studies show that food theft is not random: body size, vigilance, displays and food scarcity alter contest outcomes.
- Subadult eagles have been observed watching adults steal food and joining piracy events, evidence consistent with learned foraging behavior.
- The lower-48 population recovery from only hundreds of breeding pairs to hundreds of thousands of individuals is one of North America's most visible conservation successes.

### Concise site-ready summary

The Bald Eagle is a large North American sea eagle built around aerial control rather than brute force. A representative adult female weighs about 5.3 kg but carries formidable curved talons, exceptional visual targeting and broad wings that let her attack, disengage and patrol from three dimensions. Fish dominate the diet, yet bald eagles also hunt birds and mammals, scavenge carrion and steal prey from other raptors. In ABS terms, the eagle's greatest advantages are Agility, Senses, Stamina and precise weapon delivery, while its modest absolute mass and lack of armor prevent inflated Attack or Defense scores.

### Detailed narrative profile

A bald eagle is not a miniature terrestrial super-predator. Its biology solves a different combat problem. The bird needs to find prey across huge landscapes, reach it cheaply, strike accurately and leave before the costs of close combat rise. Broad wings exploit rising air, exceptional vision searches shorelines from altitude, and the feet become the decisive weapon only at the instant of contact.

That distinction matters for ABS scaling. A five-kilogram eagle cannot equal a wolf, big cat or great ape in absolute muscular power simply because its talons look formidable. What it can do is impose a highly asymmetric engagement. A ground animal may have far more raw force but no clean way to reach an eagle circling overhead. The eagle can choose when to descend, present the talons first, abort an approach and regain altitude. Against small, lightly protected animals, that delivery system makes the talons disproportionately effective without violating absolute scaling.

Bald eagles are also behaviorally flexible. They hunt fish, attack birds and small mammals, eat carrion and steal from competitors. Field research on winter feeding contests shows that larger birds win more piracy attempts and that vigilance and displays influence outcomes. Other observations indicate younger birds can learn piracy behavior by watching adults. This is useful tactical intelligence, but it should not be confused with the open-ended problem solving of the roster's highest-cognition primates and corvids.

Their famous conservation history adds ecological context rather than combat power. DDT and persecution nearly eliminated breeding populations from much of the contiguous United States, yet legal protection and contaminant control enabled an extraordinary recovery. Modern bald eagles again occupy waterways across the continent, demonstrating how a specialized fish-eating raptor can also thrive through opportunism.

## 9. Evidence and source ledger

| Source | Direct URL | Claims supported | Reported finding / context | Confidence / caveat |
|---|---|---|---|---|
| U.S. Fish & Wildlife Service, Eagle Fun Facts for Educators | https://www.fws.gov/eagle-fun-facts-for-educators | Adult dimensions, female larger, lifespan, diet, nests, reproduction | 30-40 in body, 7-8 ft wingspan, 8-14 lb; 30+ yr possible; fish primary | **High** institutional overview; broad rather than sex-specific measurement dataset |
| Smithsonian National Zoo, Bald Eagle | https://nationalzoo.si.edu/animals/bald-eagle | Mass, wingspan, geographic size variation, adult plumage | 3-6.5 kg, wingspan up to 2.6 m; females and northern birds larger | **High** institutional species profile |
| USFWS, Eagles and Raptors | https://www.fws.gov/office/alaska-migratory-birds/eagles-and-raptors | Diet, visual hunting, longevity, maturity | Fish major diet; prey located from perch/soaring; 30+ exceptional | **High** |
| USGS, Mojica et al. 2008, Migration of Florida sub-adult Bald Eagles | https://www.usgs.gov/publications/migration-florida-sub-adult-bald-eagles | Migration/endurance | Mean route distances ~1,397 km coastal and ~2,112 km mountain | **High**, peer-reviewed telemetry; subadults and migration context, not nonstop flight |
| USGS, Knight & Skagen 1988, Agonistic asymmetries | https://www.usgs.gov/publications/agonistic-asymmetries-and-foraging-ecology-bald-eagles | Social contests, dominance, tactical behavior | Larger eagles more successful pirates; vigilance/display/resource levels affect outcomes | **High**, peer-reviewed field study |
| USGS, Jorde & Lingle 1988, Kleptoparasitism | https://www.usgs.gov/publications/kleptoparasitism-bald-eagles-wintering-south-central-nebraska | Learned piracy / flexible foraging | Subadults watched and participated with adults in food stealing | **High-moderate**, field behavior inference |
| Appleton 2016, Journal of Raptor Research | https://meridian.allenpress.com/rapt/article/50/1/76/431567/Species-Identification-of-Golden-and-Bald-Eagle | Talon morphology | Morphometric differentiation of Bald vs Golden Eagle talons | **High** for morphology; full numeric dataset should be rechecked before production |
| USFWS, Bald Eagle species profile | https://www.fws.gov/node/30159 | Recovery, legal status, population | 316,700 lower-48 individuals and 71,467 breeding/occupied nests based on 2018-19 data; ESA delisting | **High** |
| USFWS, 2007 delisting final action | https://www.fws.gov/species-publication-action/endangered-and-threatened-wildlife-and-plants-removing-bald-eagle-lower | Conservation history | Removed from threatened/endangered list after recovery | **High** |
| Wikimedia Commons, Gregory Moine photograph | https://commons.wikimedia.org/wiki/File:BaldEagle_(Haliaeetus_leucocephalus).jpg | Primary image candidate | Real adult *H. leucocephalus*, 2848×4288, CC BY 2.0 | **High** for species/image; sex is not documented |

### Rejected / unresolved claims

- **Grip PSI:** Popular claims from roughly 300 to 1,000 PSI are rejected because transparent force/contact-area methodology was not found.
- **Top speed:** Repeated 56-70 km/h flight and 120-160 km/h dive figures were not promoted into `speed_mps` without a strong species-specific primary measurement.
- **Standing height:** Not inferred from body length.
- **Maximum longevity:** 30+ years is not silently treated as the mean lifespan.

## 10. Image Asset

- **Target path:** `animal-research-for-update/images/bald-eagle.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Gregory Moine, adult Bald Eagle (*Haliaeetus leucocephalus*), real photograph, 2848 × 4288.
- **Source page:** https://commons.wikimedia.org/wiki/File:BaldEagle_(Haliaeetus_leucocephalus).jpg
- **Direct original image URL:** https://upload.wikimedia.org/wikipedia/commons/5/5a/BaldEagle_%28Haliaeetus_leucocephalus%29.jpg
- **License shown by source page:** CC BY 2.0.
- **Image caveat:** Exact species and adult plumage are clear, but sex is not documented. Because females are the canonical specimen, the final production image pipeline should prefer a sex-verified adult female if an equally strong reusable full-body image is found. This candidate is near-full-body rather than a clean transparent cutout.
- **Binary handling:** The available GitHub text writer does not safely write arbitrary PNG binary data, so no fake or text-encoded image has been committed.

## 11. Confidence, caveats and future structured-field ideas

### Overall confidence

- **Taxonomy / identity:** Very high.
- **Mass and length:** High.
- **Wingspan:** High for broad range, moderate-high for canonical female value.
- **Maximum speed:** Low, intentionally left 0.0.
- **Bite PSI:** Unsupported, intentionally left 0.0.
- **Talon morphology:** High qualitatively; moderate for the 40.4 mm single canonical reference until the full morphometric table is rechecked.
- **Headline ratings:** Moderate, designed for later full-roster normalization.

### Useful future structured fields

- `canonical_sex`
- `wingspan_cm`
- `primary_weapon`
- `hallux_talon_mm`
- `locomotion_mode`
- `flight_capable`
- `aquatic_hunting_specialist`
- `typical_lifespan_years` versus `maximum_lifespan_years`
- `conservation_status_global`
- `us_federal_protection`
- `image_source_page`
- `image_license`

## 12. Cross-animal calibration notes

- **Army Ant:** Bald Eagle is orders of magnitude larger and must be vastly above it in absolute Attack, Defense and Raw Power. No proportional-strength leakage.
- **Axolotl:** Eagle is much stronger offensively and dramatically more maneuverable; Axolotl remains far higher in regenerative Special/Recovery.
- **Arctic Fox:** Similar broad body-mass class, but the fox has more terrestrial body robustness while the eagle has far better aerial maneuverability and visual targeting. Eagle Attack is not inflated merely because talons are sharp.
- **Badger:** Badger at 13 kg retains higher absolute Raw Power, Toughness and grounded Defense. Eagle gets superior Agility, Senses and engagement control. Attack 36.0 versus Badger 38.0 is deliberately close for different mechanisms and should be revisited after Golden Eagle, Harpy Eagle and Red-tailed Hawk.
- **Baboon:** The 24 kg male baboon remains far stronger in absolute grappling and body force. Eagle should not approach Baboon's physical-power band.
- **Arctic Wolf:** Wolf's 40 kg mass and mammalian killing apparatus produce much higher absolute damage and toughness; eagle retains aerial initiative.
- **Anteater:** Giant anteater's much greater mass and documented severe claw trauma justify its higher Attack 53.0.
- **Bactrian Camel:** No physical-combat score should imply equivalence to a ~580 kg camel. Eagle advantages are maneuverability, senses and flight, not force.
- **Albatross:** Bald Eagle is a far better armed combatant and more tactically predatory, but Albatross remains the extreme endurance anchor at Stamina 96.0.
- **Future raptor normalization:** Agility 79.0, Senses 82.0, Weaponry 52.0 and Special 63.0 must be compared carefully when Golden Eagle, Harpy Eagle, Peregrine Falcon, Osprey, Great Horned Owl, Snowy Owl and Red-tailed Hawk are researched. Avoid giving every raptor elite Attack merely because all have talons.

## Completion verification

- Identity/taxon and canonical specimen: complete.
- Sexual dimorphism and geographic variation: complete.
- Physical measurements and uncertainty: complete.
- Canonical factual fields: complete.
- Combat biology, environment, weaknesses and matchups: complete.
- Relevant ABS substats with one-decimal scores: complete.
- Six headline ratings with one-decimal scores: complete.
- **Exactly 2 special abilities:** verified.
- **Exactly 2 unique traits:** verified.
- Expanded profile, fun facts, summary and narrative: complete.
- Source ledger with direct URLs and claim mapping: complete.
- Image candidate and status: complete.
- Cross-animal calibration: complete.
- No production animal data, site code or live stat file modified.