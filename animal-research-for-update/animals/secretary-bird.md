# Secretary Bird

## 1. Identity and canonical specimen

- **Common name:** Secretary Bird / Secretarybird
- **Scientific name:** *Sagittarius serpentarius* (J. F. Miller, 1779)
- **Exact taxon represented:** Living species *Sagittarius serpentarius*, the sole living species of genus *Sagittarius* and family Sagittariidae. The live ABS schema explicitly identifies this taxon.
- **Canonical combat specimen:** Healthy prime **adult male**, **4.0 kg**, approximately **130.0 cm total length**, about **130 cm standing height**, and roughly **210 cm wingspan**. Sexes overlap heavily in size and neither source set supports a large, consistent sex-size advantage; an adult male is used because the only direct instrumented strike study was performed on a male and therefore gives the cleanest combat-mechanics anchor.
- **Sexual dimorphism / population variation:** Secretary Birds are not strongly sexually dimorphic in gross size. San Diego Zoo gives a combined adult range of 2.3-4.3 kg and 1.2-1.5 m height. Published summaries commonly place adults around 2.3-4.5 kg, 1.2-1.5 m tall and near 2.1 m wingspan. Individual and geographic variation exists, but there is no basis here for treating a maximum-sized bird as representative.
- **Living/extinct:** Living.

## 2. Physical dimensions and ranges

### Mass
San Diego Zoo reports **2.3-4.3 kg**. National Geographic reports 5-9.4 lb, approximately **2.3-4.3 kg**. A canonical **4.0 kg** is a strong healthy adult near the upper part of the normal range without using a record specimen.

### Height, length and wingspan
San Diego Zoo reports **1.2-1.5 m standing height** and a **2.1 m wingspan**. World Land Trust gives **125-150 cm bill-to-tail length**, over 2 m wingspan and about 1.2 m standing height. The canonical profile therefore uses **130.0 cm height**, **130.0 cm length**, and notes approximately **210 cm wingspan** as a useful future field.

### Speed and terrestrial locomotion
Secretary Birds are unusually terrestrial raptors, but this run did **not** recover a strong primary or institutional instrumented maximum running-speed measurement. Popular values around 20-40 km/h conflict and are generally unsourced. **`speed_mps = 0.0` unresolved** is therefore preferable to promoting the live site's legacy 40 km/h placeholder.

What is well supported is sustained terrestrial travel. San Diego Zoo states that pairs may cover **more than 32 km in a day** while hunting. This is evidence for locomotor endurance, not a maximum-speed measurement.

### Lifespan
San Diego Zoo gives **10-15 years**, with **up to 19 years in zoos**. National Geographic also gives 10-15 years. Canonical **`lifespan_years = 15.0`** represents a normal upper adult life expectancy rather than the captive maximum.

### Bite force
No defensible species-specific bite pressure in PSI was found. The live 195 psi value appears to confuse the famous **195 N foot-strike force** with bite pressure. These are different physical quantities. **`bite_force_psi = 0.0` unresolved**.

### Instrumented kick force and contact time
Portugal et al. (2016), *Current Biology*, DOI **10.1016/j.cub.2015.12.004**, measured the hunting strikes of a trained male Secretary Bird attacking a rubber snake over a force plate. The study reports average peak forces around **195 N**, roughly **five times body weight**, with contact duration around **15 ms**. This is unusually strong direct evidence for the species' primary weapon.

The study is based on one trained captive male, so 195 N should not be treated as a universal species maximum. It is nevertheless a directly measured, behaviorally relevant strike value.

### Feet, legs, bill and wings
The long legs provide reach and keep the torso farther from dangerous ground prey. The feet are adapted for walking and striking rather than the powerful grasp-and-carry function of many other raptors. San Diego Zoo explicitly notes limited grasping ability and that food is generally eaten immediately or carried in the bill. The hooked bill is a secondary killing/processing tool.

The wingspan is approximately 2.1 m. When confronting snakes the bird can spread its wings, presenting feathers as distracting targets while keeping the vulnerable body farther away. Lower legs are scaled, adding limited mechanical protection.

### Defensive structures
There is no armor comparable with shell, osteoderms or mammalian heavy hide. Protection consists mainly of scaled distal legs, feather coverage, long reach, wing distraction and mobility. Hollow feathers can be struck or bitten without the same consequence as a bite into flesh, but wings themselves remain combat-critical structures and are vulnerable to serious damage.

## 3. Proposed canonical factual fields

| Field | Proposed value | Rationale |
|---|---:|---|
| `weight_kg` | **4.0** | Strong representative adult within repeated 2.3-4.3 kg institutional range. |
| `height_cm` | **130.0** | Representative standing height inside San Diego Zoo's 1.2-1.5 m range. |
| `length_cm` | **130.0** | Representative bill-to-tail value inside World Land Trust's 125-150 cm range. |
| `speed_mps` | **0.0 unresolved** | No defensible instrumented species-specific top running speed found; legacy 40 km/h not retained. |
| `lifespan_years` | **15.0** | Institutional 10-15 y normal range; 19 y captive maximum not used as canonical. |
| `bite_force_psi` | **0.0 unresolved** | No reliable bite PSI. The measured 195 figure is newtons of foot-strike force, not PSI. |

**Additional measured combat field recommended:** `foot_strike_force_n = 195.0` with a context flag noting one trained adult male and approximately 15 ms strike contact.

## 4. Combat biology

### Primary weapons and offensive mechanics
The Secretary Bird is a terrestrial striking specialist. It walks prey down, positions above or beside the target, and delivers rapid downward foot strikes, especially to the head or body of reptiles and other small vertebrates. The Portugal et al. force-plate study is the critical evidence: approximately 195 N peak force delivered over roughly 15 ms demonstrates that the famous stomp is a measurable mechanical weapon rather than folklore.

The hooked bill is secondary. Unlike eagles, the feet are not optimized for carrying prey away. This matters for ABS because the bird's offensive system is best at repeated precision impacts against relatively small ground targets, not grappling a much heavier opponent.

### Defensive adaptations and durability
Long legs create standoff distance from snakes. Wing spreading can divert strikes toward feathers, and scaled lower legs add some protection. These are meaningful matchup defenses against low ground-level attackers, but they do not make the bird physically durable against large carnivores. At about 4 kg, it has low absolute mass and avian flight structures that can be disabled by a strong bite, claw or impact.

### Locomotion and maneuverability
Secretary Birds spend much of the day on foot but remain capable fliers, nesting and roosting in trees and performing aerial courtship. Long legs permit fast stepping, pursuit and rapid target repositioning on open ground. Their body plan is less suited to dense brush, confined interiors or grappling at point-blank range. Flight gives a major disengagement and repositioning option but is not the default hunting mode.

### Endurance
San Diego Zoo reports that birds may cover **more than 32 km in a day** while foraging, hunting from morning toward evening with rest during peak heat. This supports very strong walking endurance for a 4 kg bird. It does not imply that 195 N kicks can be repeated continuously at maximal force for hours.

### Senses
Combat is vision-led. The 2016 strike paper emphasizes the need for precise targeting and coordination between visual and neuromuscular systems because the strike itself is too brief for ordinary feedback correction during impact. No exceptional species-specific hearing, smell or visual-acuity numerical measurement was found in this run, so Senses is rated strong rather than elite.

### Intelligence and tactics
Secretary Birds adjust approach distance, visually target dangerous prey, use wing displays as distraction and exploit recent burns where exposed or injured prey become easier to find. Pairs and loose family groups can forage together. These are meaningful tactical behaviors, but they do not establish corvid/parrot/primate-level general problem solving.

### Hunting and predation behavior
Diet includes insects and small vertebrates such as rodents, amphibians, reptiles and birds. Snakes are famous prey but are not the entire diet. The bird typically searches on foot through open habitat, flushes or detects prey, chases when necessary, then dispatches with bill strikes or repeated stomps. Dangerous snakes showcase the specialization because a failed approach can expose the bird to venomous retaliation.

### Intraspecific fighting and social behavior
Secretary Birds are often encountered alone, in pairs or family groups. Breeding pairs are monogamous and defend nesting/foraging space. Courtship includes aerial displays and sometimes talon presentation. Available evidence does not justify treating them as unusually aggressive toward every large opponent; Ferocity reflects committed predatory striking and territorial defense rather than indiscriminate combat.

### Environmental strengths
- Open savanna and short grass maximize visual detection and leg-driven pursuit.
- Flat ground provides space to maintain distance and deliver repeated stomps.
- Trees permit roosting, nesting and aerial escape.
- Recently burned ground can expose prey.
- Long reach is especially valuable against small, dangerous ground animals.

### Environmental weaknesses
- Dense vegetation restricts long-legged movement and visual targeting.
- Confined spaces reduce both flight escape and standoff range.
- Mud, deep water or unstable footing undermine its principal weapon-delivery system.
- Against large opponents, the bird's low body mass and unarmored torso become decisive liabilities.

### Major weaknesses
- Only about 4 kg in absolute mass.
- No heavy armor or thick hide.
- Legs are powerful weapons but also long, exposed structural targets.
- Feet have limited grasping ability compared with classic eagle talons.
- Maximum terrestrial speed remains unverified.
- The famous kick is optimized for small prey and should not be scaled into megafaunal striking power.

### Matchup archetypes
- **Strong against:** small reptiles, snakes, rodents, amphibians, large insects and similarly small terrestrial opponents vulnerable to fast downward impacts.
- **Mixed against:** similarly sized birds or small carnivores where reach and kicks matter but grappling pressure can threaten the legs/wings.
- **Weak against:** medium and large mammalian predators, heavy armored animals, large constrictors once secure contact is established, and megafauna that dwarf its 4 kg mass.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based justification |
|---|---:|---|
| Raw Power | **22.0** | Four-kilogram absolute mass is low roster-wide, though leg strikes are impressive for size. |
| Weaponry | **45.0** | Directly measured rapid stomps, long reach and hooked bill form an effective small-prey arsenal, but lack large-raptor grappling power. |
| Protection | **24.0** | Scaled legs, feathers, wing distraction and reach help against snakes; no true armor. |
| Toughness | **25.0** | Healthy raptor robustness but low absolute mass and vulnerable flight/leg structures limit trauma tolerance. |
| Speed | **0.0 unresolved** | No defensible maximum terrestrial speed found. This is a data-status value, not a claim of zero movement. |
| Maneuverability | **82.0** | Precise footwork, rapid strike positioning and competent flight provide strong multidomain control. |
| Endurance | **84.0** | Institutional account documents more than 32 km of daily hunting travel and all-day terrestrial foraging. |
| Recovery | **48.0** | No exceptional regeneration or unusual recovery physiology demonstrated. |
| Tactics | **69.0** | Visual targeting, standoff control, wing distraction and opportunistic use of burns show meaningful behavioral flexibility. |
| Senses | **75.0** | Vision must support rapid precision strikes and open-country prey detection; no unsupported super-sense is added. |
| Ferocity | **65.0** | Repeatedly attacks and dispatches dangerous prey, including venomous snakes, but is not a large-opponent brawler. |
| Abilities | **86.0** | The measured 195 N / ~15 ms strike system is an unusual, matchup-changing specialization at this body size. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **36.0** | Precision 195 N foot strikes are dangerous to small prey, but 4 kg body mass caps absolute damage far below large raptors and mammalian predators. |
| **Defense** | **27.0** | Reach, wing distraction and scaled legs mitigate snake strikes, but physical protection and trauma tolerance remain low. |
| **Agility** | **83.0** | Excellent terrestrial foot placement, rapid striking control and usable flight, without conflating agility with an unverified top speed. |
| **Stamina** | **84.0** | More than 32 km daily foraging travel supports very strong sustained locomotor capacity. |
| **Intelligence** | **61.0** | Flexible hunting and risk-management tactics are strong for a raptor but not evidence for top-tier general cognition. |
| **Special** | **88.0** | The ultra-brief, forceful, visually targeted stomp is a rare specialized combat mechanism with direct experimental support. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Ballistic Stomp**: a visually targeted foot strike measured around 195 N with approximately 15 ms contact, allowing the bird to stun or kill small prey before prolonged contact develops.
2. **Feather Decoy Guard**: wing spreading can present expendable feathers as distracting targets while the long legs keep the torso farther from a snake's strike zone.

### Unique traits
1. **Terrestrial Raptor Frame**: exceptionally long legs and a ground-hunting lifestyle combine raptorial predation with sustained cursorial foraging rather than classic aerial capture.
2. **Limited-Grasp Striker Feet**: the feet are specialized for walking and impact more than carrying prey, creating a distinctive strike-first combat style among large birds of prey.

## 8. Expanded profile

### Habitat
Open grasslands, savannas, shrublands and lightly wooded country with sufficient visibility and scattered trees for nesting/roosting. World Land Trust notes use from sea level to about 3,000 m and preference for relatively open vegetation.

### Geographic range
Sub-Saharan Africa, broadly from the western Sahel east toward Somalia and south through eastern and southern Africa. It is absent from heavily forested Congo Basin habitat and many densely wooded areas.

### Diet
Carnivorous and insectivorous. Prey includes large insects, rodents and other small mammals, reptiles including snakes and lizards, amphibians, birds and other small vertebrates. Snakes are iconic prey, not an exclusive diet.

### Ecology
Secretary Birds are unusual among raptors because most prey searching and capture occurs on foot. They can cover large areas each day, helping regulate populations of insects and small vertebrates. They remain capable of strong flight for roosting, nesting, display and relocation.

### Social structure
Adults are commonly solitary or paired; breeding pairs are monogamous and can forage in loose association. Family groups may travel together while young learn to hunt. ABS should not multiply an individual's combat score because pair foraging occurs.

### Reproduction and life history
Pairs build large stick nests, commonly in thorny/acacia-type trees, and may reuse them. Clutches are typically one to three eggs. San Diego Zoo reports incubation around 42-46 days and fledging around 12 weeks. Parents continue teaching young hunting behavior after fledging.

### Conservation
Current conservation references including World Land Trust and BirdLife South Africa describe the Secretary Bird as **Endangered** globally. Major threats include habitat loss and degradation, woody encroachment, overgrazing, altered fire regimes, disturbance, hunting/trade, poisoning, and collisions or entanglement with power infrastructure and fences.

### Adaptations
- Long legs for ground pursuit and standoff striking.
- Fast, forceful, precision foot strikes.
- Scaled lower legs.
- Broad wings for flight and defensive distraction.
- Hooked raptorial bill.
- Strong visual targeting and neuromuscular coordination.
- All-day walking capacity across large territories.

### Human interaction
The species is culturally prominent, including heraldic use in Africa, but faces increasing pressure from land conversion and infrastructure. It can use some agricultural/open landscapes, yet breeding success and survival decline when habitat structure, prey availability or disturbance become unfavorable.

### Genuine fun facts
- It is the only living species in the family Sagittariidae.
- A directly measured hunting strike reached about **195 N**, around five times the studied bird's body weight.
- Strike contact lasted only about **15 milliseconds** in the instrumented study.
- Secretary Birds can cover **more than 32 km in a day** while hunting.
- Their wingspan is roughly **2.1 m**, enormous relative to a body mass of only a few kilograms.
- Their feet are less suited to grasping/carrying than those of many familiar raptors.
- They can hunt venomous snakes but also eat insects, rodents and many other small prey.
- Their large stick nests can be reused and expanded over multiple seasons.

### Concise site-ready summary
The Secretary Bird is a long-legged African ground raptor built around precision impact rather than grappling. Its experimentally measured foot strikes hit at about 195 N in roughly 15 milliseconds, while long legs, scaled shanks and wing distraction help it manage dangerous snakes. At only about 4 kg it is not a heavyweight fighter, but its unusual stomp system, footwork and all-day walking endurance make it a formidable specialist against small ground prey.

### Rich narrative profile
The Secretary Bird is a good example of why ABS must separate absolute power from specialization. A four-kilogram bird cannot be assigned mammal-predator levels of Raw Power merely because its hunting style looks violent. Against a wolf, big cat or megafaunal opponent, its low mass and exposed avian structure are overwhelming disadvantages. Against the prey it evolved to fight, however, the mechanics are unusually effective.

Its defining weapon is not an internet anecdote. Portugal and colleagues measured a trained male striking a rubber snake over a force plate and recorded roughly 195 N peak force with contact around 15 ms. That very short impact interval makes the strike a rapid ballistic event requiring accurate pre-strike visual targeting. Long legs provide reach, letting the bird attack small dangerous prey while keeping its torso farther away. If a snake retaliates, spread wings can redirect attention toward feathers, and the scaled lower legs provide another modest layer of protection.

The rest of the animal supports that weapon system. Secretary Birds spend much of the day walking open country and may exceed 32 km of travel in a day's hunt. They can fly well enough to roost and nest in trees and to perform aerial displays, so they are not trapped on the ground, but terrestrial hunting remains their defining mode. Their feet differ from the classic grasping talons of an eagle: they are built around walking and striking, not hauling prey through the air.

The resulting ABS profile is deliberately polarized. Attack is only moderate on the full roster because body mass is small. Defense is low because feathers and scales are not heavy armor. Agility, Stamina and Special are much higher because precise footwork, sustained ground travel and the experimentally verified strike mechanism are genuinely exceptional. This preserves the difference between being an extraordinary specialist and being a heavyweight combatant.

### Future structured-field proposals
- `wingspan_cm`: approximately 210.0 for a representative adult.
- `foot_strike_force_n`: 195.0 with experimental-context metadata.
- `strike_contact_ms`: approximately 15.0.
- `daily_foraging_distance_km`: >32 documented institutional summary.
- `canonical_sex`: male, with low-dimorphism note.
- `movement_mode`: terrestrial walking/running plus flight, so unverified running maxima are not confused with flight.
- `conservation_status`: Endangered.

## 9. Mandatory image section

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/secretary-bird.png` (**not present; no completion claimed**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Secretary_Bird_(Sagittarius_serpentarius)_(6022013778).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/4/49/Secretary_Bird_%28Sagittarius_serpentarius%29_%286022013778%29.jpg
- `file_format_verified`: Source is a real JPEG photograph, **4320×2592**. No PNG was produced.
- `alpha_verified`: **No**
- `full_body_verified`: **No.** High-resolution exact-species candidate was located and its source metadata verified, but the available inspection path did not establish every foot/toe and the complete tail silhouette strongly enough to certify the mandatory full-body standard.
- `adult_verified`: **No.** Wild exact-species bird is documented, but source metadata does not explicitly state adult life stage.
- `sex_verified_or_unknown`: **Unknown.** No sex inferred from appearance.
- `license_status`: **Reusable, CC BY-SA 2.0**, Commons/Flickr license reviewed.
- `notes`: Prefer complete-body framing over a closer crop. Do not promote until adulthood and strict full-body anatomy are verified. Current GitHub writer is text-only, so no binary cutout can be committed even if a source passes.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Confidence / caveats |
|---|---|---|---|
| Portugal et al. 2016, *Current Biology*, “The fast and forceful kicking strike of the secretary bird” | https://doi.org/10.1016/j.cub.2015.12.004 | Species hunting mechanics; ~195 N peak strike; ~15 ms contact; visual/neuromuscular precision | **High** for measured bird; one trained captive male, so not a universal maximum. |
| Oxford Biology publication record / Europe PMC metadata | https://www.biology.ox.ac.uk/publication/2022490/europe-pubmed-central | DOI, authorship, journal, predatory behavior context | **High** bibliographic source. |
| San Diego Zoo Wildlife Alliance | https://animals.sandiegozoo.org/animals/secretary-bird | 2.3-4.3 kg, 1.2-1.5 m height, ~2.1 m wingspan, 10-15 y lifespan / up to 19 y zoo, >32 km daily hunting, diet, feet poorly adapted for grasping, nesting/social behavior | **High-medium** major zoological institution; some values are husbandry/natural-history summaries rather than primary measurements. |
| National Geographic | https://www.nationalgeographic.com/animals/birds/facts/secretary-bird | 5-9.4 lb mass, 10-15 y lifespan, habitat, diet, snake-defense behavior | **Medium-high** secondary institutional summary. |
| World Land Trust Secretarybird profile | https://www.worldlandtrust.org/species/secretarybird/ | 125-150 cm length, >2 m wingspan, ~1.2 m height, habitat/range, Endangered status and threats | **Medium-high**, conservation organization drawing on IUCN context. |
| BirdLife South Africa infrastructure guidance | https://www.birdlife.org.za/wp-content/uploads/2024/05/Minimising-the-impacts-of-infrastructure-development-on-Secretarybirds-Sagittarius-serpentarius.pdf | Global Endangered classification and infrastructure/habitat threats | **High-medium**, specialist conservation guidance. |
| Wikimedia Commons, Bernard Dupont photograph | https://commons.wikimedia.org/wiki/File:Secretary_Bird_(Sagittarius_serpentarius)_(6022013778).jpg | Exact-species real-photo candidate; 4320×2592; CC BY-SA 2.0; Kruger NP provenance | **High** for provenance/license; adulthood/sex/full-body certification unresolved. |

### Source conflicts and uncertainty
- **Speed:** popular sources give conflicting running maxima, commonly 20-40 km/h, without strong measurement provenance. No canonical maximum is accepted.
- **Conservation:** older general pages may still say Vulnerable or imply relative commonness. Current specialist conservation material used here describes the species as **Endangered**.
- **Dimensions:** institutional ranges differ somewhat in whether “height” or bill-to-tail “length” is being reported. The report keeps those dimensions separate rather than treating every 1.2-1.5 m figure as the same measurement.
- **Kick force:** 195 N is a direct measurement, but from one trained male and therefore should not be presented as a species-wide maximum.
- **Bite:** the legacy 195 PSI is rejected. The numerical similarity to the 195 N kick result is not evidence of bite pressure.

## 11. Cross-animal normalization notes

- **Versus Peregrine Falcon:** Secretary Bird is about four times heavier and has higher absolute ground-strike power, so its Attack and Defense exceed the Peregrine's 34.0/18.0 controls. Peregrine remains much higher in aerial Agility and Special because its instrumented stoop and high-frequency vision dominate open-air interception.
- **Versus large mammalian predators:** a 4 kg bird must remain far below wolves, big cats, bears and crocodilians in Raw Power, Defense and absolute Attack regardless of its impressive proportional kick.
- **Versus Sea Otter / Seal / Sea Lion:** Secretary Bird's terrestrial precision is excellent, but those mammals have substantially more body mass and physical durability. It should not inherit their Defense bands merely because it can kill snakes.
- **Speed/agility control:** no unsupported 40 km/h speed is retained. Agility is scored from footwork, target control and flight capability, not from a dubious top-speed number.
- **Double-counting control:** the 195 N stomp primarily drives Weaponry/Attack and the rare mechanism drives Special/Abilities. It is not also used to inflate Defense, Toughness or Intelligence.
- **Proportional-strength control:** “five times body weight” is biologically impressive but ABS uses absolute scaling. A 195 N strike remains a small-animal weapon in roster-wide force terms.

## Final verification

- Exact taxon resolved: **yes**.
- Healthy representative adult and sex rationale documented: **yes**.
- Physical fields and unresolved values distinguished: **yes**.
- Fabricated bite PSI avoided: **yes**.
- Current ABS substats scored with one decimal: **yes**.
- Six headline ratings scored with one decimal: **yes**.
- Exactly two special abilities: **yes**.
- Exactly two unique traits: **yes**.
- Expanded ecology/profile/fun facts/future fields included: **yes**.
- Source ledger with direct URLs, confidence and conflicts: **yes**.
- Cross-roster calibration included: **yes**.
- Mandatory image status truthful: **yes; no PNG completion claimed**.
