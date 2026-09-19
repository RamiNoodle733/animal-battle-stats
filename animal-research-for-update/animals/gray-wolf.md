# Gray Wolf (*Canis lupus*) Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Gray Wolf / Grey Wolf
- **Scientific name:** *Canis lupus* Linnaeus, 1758
- **Family:** Canidae
- **Status:** Living
- **Exact ABS animal represented:** species-level *Canis lupus*, distinct from the separately staged Arctic Wolf profile. Because body size varies enormously across the species, the canonical combat specimen uses the well-measured Yellowstone / northern North American large-bodied wolf as the representative reference rather than a small southern population or a record individual.
- **Canonical specimen:** healthy fully mature adult male, **50.0 kg**, **81.0 cm shoulder height**, **181.0 cm nose-to-tail length**. Yellowstone National Park reports these as average male mass and average male shoulder height, with 181 cm average length for wolves in the population.
- **Sexual dimorphism:** males are larger. Animal Diversity Web reports males 30-80 kg with a 55 kg average and females 23-55 kg with a 45 kg average; Yellowstone reports 50 kg males versus 41 kg females.
- **Population variation:** this is unusually important. Smithsonian gives males 30-80 kg and total length 130-205 cm across the species. Southern Eurasian and Indian/Iberian wolves can be markedly smaller than northern North American animals. Ratings therefore describe the stated 50 kg canonical male, not every wolf population.
- **Taxonomy:** *Canis lupus* is retained at species level. The Mammal Diversity Database is the current mammalian taxonomic reference checked for this run; subspecies boundaries and wolf/dog taxonomy remain more complicated than the ABS species label needs to encode.

## 2. Physical measurements

### Mass
Yellowstone's long-running wolf program reports an average male mass of **110 lb / 50 kg**, versus **90 lb / 41 kg** for females. Its heaviest known wolf was 148 lb, so the canonical 50 kg value is deliberately representative rather than record-based. ADW's broader species range is 30-80 kg for males, average 55 kg.

- **Canonical `weight_kg`: 50.0**
- **Representative Yellowstone male mean:** 50 kg
- **Broader male range:** 30-80 kg
- **Confidence:** high for the Yellowstone reference population; moderate for species-wide representativeness because geography matters.

### Height
Yellowstone reports average shoulder height **81 cm for males** and 77 cm for females. ADW gives a broader species range of 60-90 cm.

- **Canonical `height_cm`: 81.0**
- **Confidence:** high for canonical population.

### Length
Yellowstone reports **181 cm average length** and NPS elsewhere summarizes wolves as roughly four to six feet nose to tail. Smithsonian gives 130-205 cm total length. ADW's older sex-specific body-length figures use a different convention and should not be silently mixed with nose-to-tail measurements.

- **Canonical `length_cm`: 181.0**
- **Confidence:** high for Yellowstone's stated average; measurement convention should always be retained in provenance.

### Speed and locomotion
Yellowstone NPS reports **35 mph / 56 km/h** top speed, while a general NPS wolf ecology explainer gives up to 45 mph for short distances. The more population-specific Yellowstone figure is preferred over the broader maximum claim.

- **Canonical `speed_mps`: 15.6** (56 km/h divided by 3.6)
- **Routine travel:** NPS gives about 5 mph / 8 km/h.
- **Daily travel:** NPS notes wolves may travel about 30 miles in a day; dispersers can travel hundreds of miles over longer periods.
- **Confidence:** moderate-high as an agency field value, not a laboratory-measured physiological ceiling.

### Lifespan
Yellowstone wolves average only **4-5 years** in the park because mortality is high; the oldest known Yellowstone wolf reached 12.5 years. Smithsonian gives a broader wild lifespan of **7-8 years**. Because the site's field is best interpreted as representative wild lifespan rather than Yellowstone's local mortality regime alone, **7.5 years** is proposed.

- **Canonical `lifespan_years`: 7.5**
- **Confidence:** moderate; mortality varies strongly by population and human pressure.

### Bite force, teeth and jaws
The live site currently shows 400 PSI, while an NPS Yellowstone fact page itself lists 1,200 PSI. Neither value is accompanied there by a species-specific pressure experiment or tooth contact area. Force in newtons cannot be converted honestly into PSI without a defensible contact area. This research therefore does **not** promote either internet-style pressure number.

- **Canonical `bite_force_psi`: 0.0**
- **Interpretation:** unknown/unverified, not a claim that the wolf has a weak bite.
- **Dentition:** 42 teeth; canines, incisors and carnassials form an effective grip, puncture, tearing and meat-shearing system.
- **Canine spacing:** ADW reports about 4 cm between canines.
- **Confidence:** high that PSI should remain unset; high for functional dentition.

### Claws, feet, coat and body construction
Wolves are digitigrade cursorial canids. Their non-retractile claws are primarily traction tools, not felid-like cutting weapons. Large feet, long limbs, a deep chest and efficient trot support sustained travel. Dense underfur provides strong insulation, but fur is not meaningful armor against deep bites, claws, horns or crushing trauma.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 50.0,
  "height_cm": 81.0,
  "length_cm": 181.0,
  "speed_mps": 15.6,
  "lifespan_years": 7.5,
  "bite_force_psi": 0.0
}
```

### Why these values
- **50.0 kg:** directly reported Yellowstone adult-male average and an appropriate large-bodied but non-record fighting specimen.
- **81.0 cm:** Yellowstone adult-male average shoulder height.
- **181.0 cm:** Yellowstone average nose-to-tail length.
- **15.6 m/s:** population-specific NPS top-speed value of 56 km/h, preferred over a broader 45 mph agency explainer.
- **7.5 yr:** midpoint of Smithsonian's broader 7-8 year wild lifespan, with Yellowstone's shorter 4-5 year average documented as a mortality-regime conflict.
- **0.0 PSI:** no defensible pressure measurement located. The old 400 PSI and popular 1,200 PSI claims are not retained as research facts.

## 4. Combat biology

### Primary weapon and offensive mechanics
The jaws are the decisive individual weapon. A wolf uses rapid approach, snapping bites, sustained grips and repeated re-engagement. Canines puncture and anchor; carnassials slice tissue. Neck and forequarter musculature let the wolf pull, wrench and maintain a grip. Against ungulates, wolves do not normally win by one mythical crushing bite. They create cumulative trauma while forcing prey to keep moving, exploit instability, and target vulnerable regions.

### Secondary weapons
The forelimbs can brace and help control contact, while claws improve traction. Body mass and shoulder contact can disrupt smaller opponents. These are secondary to the jaws and should not be scored like cat claws or bear forelimbs.

### Pack hunting and the individual baseline
Pack cooperation is central to wolf ecology but ABS ratings must not multiply a single wolf's Raw Power by pack size. Yellowstone research shows hunting success does not increase indefinitely with group size: success leveled off beyond roughly four wolves in an elk-hunting dataset, with reduced individual effort helping explain the nonlinear result. Pack behavior therefore raises Tactics and informs a named ability, but one-on-one Attack remains based on one 50 kg animal.

### Large-prey hunting
Yellowstone wolves primarily prey on ungulates. NPS reports elk dominating winter prey and documents wolves killing bison as well. USGS work found elk comprised 91% of 117 kills in a 1997-98 study, with hunting success 26% in a severe winter and 15% in a mild winter. Another USGS study of early reintroduction showed bison kills were difficult, concentrated on vulnerable, injured or young animals, and became more frequent as wolves learned the prey. This is strong evidence for tactical flexibility, but also evidence against treating every wolf as capable of overpowering a healthy adult bison alone.

### Intraspecific fighting
Territorial conflict is a major real source of wolf mortality. Yellowstone NPS reports other wolves as the leading cause of death within the park and lists intraspecific causes at 42% of adult mortality in its summary. Wolves therefore have genuine combat experience against similarly armed opponents, including lethal outcomes.

### Defense and toughness
A 50 kg wolf is a robust medium-large predator with good skeletal and muscular conditioning, but no armor. Fur offers weather protection and superficial cushioning only. Serious bites, kicks, antlers, horns and large-cat claws can disable or kill it. Defense should therefore remain well below armored reptiles, bears and megafauna despite the wolf's high endurance.

### Locomotion and agility
Wolves are optimized for economical cursorial travel rather than explosive feline acrobatics. They accelerate, change lines, probe and withdraw effectively around dangerous prey, and their digitigrade feet provide useful traction. Agility is good, but top speed is not substituted directly for Maneuverability.

### Endurance
Endurance is a standout. NPS reports routine trotting around 5 mph, travel up to about 30 miles in a day, and very long dispersal movements. The ecological hunting strategy repeatedly rewards sustained searching, pursuit, and re-engagement. This supports an elite Stamina score, though not a 96 simply because the old site had one. Stamina is calibrated against other endurance specialists such as African Wild Dog, Arctic Wolf, migratory birds and extreme divers.

### Senses
Olfaction is the primary long-range terrestrial tracking sense, integrated with acute hearing and useful low-light vision. NPS notes howls can carry roughly 11 km in forest and 16 km in open terrain, supporting long-distance social communication. Exact popular multipliers for smell relative to humans are not treated as measurements.

### Intelligence and tactics
Wolves learn prey behavior, coordinate socially, communicate through posture, scent and vocalization, and adapt hunting effort to risk. The bison study is especially useful because wolves initially inexperienced with bison learned to kill them more effectively over time. This is strong tactical cognition, but it does not justify ape/corvid-level general problem-solving scores.

### Ferocity and risk management
Wolves are willing to engage dangerous prey and rival packs, but successful predation depends on avoiding catastrophic injury. They probe, abandon poor opportunities and disproportionately exploit vulnerable prey. Ferocity is therefore high without being modeled as reckless aggression.

### Environmental strengths
- Open forest, tundra, grassland and cold-temperate landscapes where cursorial movement and tracking matter.
- Snow can expose weakened prey and reward large feet and endurance.
- Long pursuits and large territories reward efficient locomotion.
- Group scenarios greatly improve tactical pressure and target switching.

### Environmental limitations
- Dense obstacles can reduce the value of sustained running.
- Extreme heat penalizes a dense-coated endurance predator.
- Deep water removes much of its terrestrial mobility advantage.
- Pack advantages disappear in strict one-on-one battles.

### Major weaknesses
1. No armor or specialized passive trauma shield.
2. Primary weapon requires close head-first contact.
3. Non-retractile claws are poor cutting weapons.
4. A single wolf is far less dangerous to megafauna than a coordinated pack.
5. Large cats generally have stronger close-range grappling toolkits.
6. Horned/hoofed prey can cause catastrophic counter-injury.

### Matchup archetypes
**Favorable:** smaller unarmored mammals, similarly sized animals with weaker weapons, and opponents vulnerable to repeated mobile biting.

**Difficult:** large cats with superior grappling/claws, heavy bears, armored reptiles, powerful horned/hoofed herbivores, and megafauna whose mass overwhelms a 50 kg canid.

## 5. Proposed current ABS substats

The live profile currently exposes twelve substats. These are rescored independently under the staging calibration rather than anchored to live placeholders.

| Substat | Score | Evidence-based justification |
|---|---:|---|
| **Raw Power** | **46.0** | Strong 50 kg cursorial carnivore, clearly above smaller canids but far below great apes, big bears and megafauna in absolute force. |
| **Weaponry** | **55.0** | Effective predatory jaws and tearing dentition; lacks the second major weapon system of felids, raptors or horned animals. |
| **Ferocity** | **70.0** | Regularly tackles dangerous ungulates and lethal territorial rivals, tempered by strong risk-sensitive hunting behavior. |
| **Protection** | **20.0** | Dense fur insulates but provides little resistance to serious penetrating or crushing attacks. |
| **Toughness** | **52.0** | Robust working predator capable of sustained hardship, but no unusual wound resistance or armor. |
| **Maneuverability** | **66.0** | Good approach/withdrawal control and footing around dangerous prey, below acrobatic felids and small aerial specialists. |
| **Speed** | **64.0** | NPS-supported 56 km/h top speed is strong but not elite on a roster containing much faster terrestrial and aerial animals. |
| **Endurance** | **89.0** | Long daily travel, economical trotting and pursuit ecology make sustained output one of the wolf's defining strengths. |
| **Recovery** | **61.0** | Strong mammalian conditioning and ability to resume travel/hunting, without exceptional regeneration or unusually rapid physiological recovery evidence. |
| **Tactics** | **80.0** | Cooperative hunting, prey assessment, risk management, communication and demonstrated learning against novel bison prey. |
| **Senses** | **78.0** | Excellent integrated smell/hearing/vision for terrestrial tracking and situational awareness, without a rare sense such as echolocation. |
| **Abilities** | **64.0** | Pack coordination, communication and endurance pursuit are highly useful but mostly behavioral/locomotor rather than venom/electricity-tier mechanisms. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **55.0** | A 50 kg male has a serious bite, repeated-bite mechanics and effective prey-control behavior, but individual damage remains below big-cat, bear and megafauna tiers. |
| **Defense** | **41.0** | Robust canid build and mobility help it survive contact, but there is no armor and the head-first bite exposes it to counters. |
| **Agility** | **66.0** | Strong cursorial control and repositioning without conflating 56 km/h speed with turning/reflex performance. |
| **Stamina** | **89.0** | Long-distance travel and pursuit ecology support elite sustained performance, calibrated below the most extreme roster endurance specialists. |
| **Intelligence** | **78.0** | Flexible prey assessment, social communication, cooperation and demonstrated learning justify high tactical intelligence without ape/corvid inflation. |
| **Special** | **64.0** | Endurance pursuit and pack coordination are matchup-relevant, but the species lacks a singular direct biological mechanism like venom, electricity or armor. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Relay Pressure**: Wolves repeatedly approach, withdraw and re-engage dangerous prey while packmates create changing attack angles. The biological basis is cooperative cursorial predation and risk-sensitive target pressure. In strict one-on-one ABS battles, only the individual re-engagement component remains active; the score must not secretly add absent packmates.
2. **Endurance Hunt**: Efficient trotting, long daily travel and repeated pursuit allow a wolf to keep useful pressure on prey after many burst-oriented opponents would lose output. This is sustained locomotor ecology, not a claim of infinite stamina.

### Unique traits
1. **Pack Strategist**: Communication, social roles and prey assessment allow flexible group tactics, including learning how to handle unfamiliar large prey.
2. **Territory Runner**: Wolves routinely patrol and search large ranges, combining strong sensory tracking with economical long-distance locomotion.

## 8. Expanded profile

### Habitat and range
Gray wolves historically occupied one of the broadest ranges of any terrestrial mammal across North America and Eurasia. They use tundra, boreal and temperate forests, mountains, grasslands and other habitats where sufficient prey and human tolerance remain. Smithsonian emphasizes their broad adaptability outside tropical forest.

### Diet
Primarily carnivorous and strongly oriented toward ungulates where available. Yellowstone diets are dominated by elk, with bison, deer and smaller mammals contributing. Wolves also scavenge and can consume smaller prey opportunistically.

### Ecology
Gray wolves are apex or near-apex predators whose kills feed a broad scavenger community. Their predation can affect prey behavior, abundance and carcass distribution, but ecological effects vary by ecosystem and should not be reduced to simplistic universal trophic-cascade claims.

### Social structure
The normal pack is a family unit centered on a breeding pair and offspring of multiple ages. Packs defend territories with scent marking, howling and direct confrontation. Social structure is dynamic: dispersers leave, new pairs form, packs split, and territorial encounters can be lethal.

### Reproduction and life history
Breeding generally occurs in winter, with gestation around 62-63 days and pups born in spring. Smithsonian gives an average litter around six. Young learn hunting and social behavior within the family group before some disperse around maturity.

### Conservation
Global status and regional legal status should be verified at production-migration time because wolf management is politically and geographically variable. Populations are robust in some northern regions and absent or recovering in others. The species' conservation story cannot be represented accurately by one local management label.

### Adaptations
- Digitigrade cursorial limbs for efficient travel.
- Large feet and strong traction.
- Dense insulating coat with substantial geographic color variation.
- Predatory dentition combining gripping canines and slicing carnassials.
- Highly developed olfactory tracking.
- Long-distance vocal communication.
- Flexible social cooperation and prey-learning behavior.

### Human interaction
Wolves have a long history of persecution, reintroduction, livestock conflict and conservation. Yellowstone's reintroduction in 1995-96 is one of the best-studied large-carnivore restoration programs. NPS emphasizes that habituation and feeding can create dangerous behavior; wild wolves normally avoid people.

### Genuine fun facts
- Yellowstone's documented heaviest wolf was 148 lb, substantially above the 110 lb male average, illustrating why records should not define the canonical animal.
- NPS reports the leading natural cause of adult wolf mortality inside Yellowstone as other wolves.
- A dispersing wolf may travel hundreds of miles while searching for a mate and territory.
- Yellowstone researchers documented wolves learning to kill bison after reintroduction despite most founders having no prior bison experience.
- Group hunting has diminishing returns: Yellowstone elk-hunt success leveled off beyond about four participating wolves in one major study.
- Howls can carry for many kilometers, providing long-distance territorial and social communication.

### Concise site-ready summary
A 50 kg adult male Gray Wolf is a mobile, intelligent endurance predator built around repeated biting, efficient long-distance travel and sophisticated social hunting. It lacks armor and the grappling weapons of a big cat, but excels at prey assessment, re-engagement and sustained pressure. Its strongest ABS categories are Stamina, Intelligence and Tactics, while its individual Attack remains firmly below the roster's large cats, bears and megafauna.

### Rich narrative profile
The gray wolf's danger comes from integration rather than a single superweapon. Its jaws are effective, but the animal is not a walking bite-force number. Long limbs and digitigrade feet let it cover ground economically; smell and hearing help it find prey; social communication keeps a family group coordinated; and repeated attack-withdrawal decisions limit exposure to hooves, antlers and horns. Yellowstone field studies show both sides of that strategy. Wolves can kill elk and even bison, but success depends on prey condition, weather, experience and group behavior. They learn, they select vulnerable targets, and they abandon bad risks. That is precisely why ABS should rate the wolf highly in Stamina, Tactics and Intelligence while resisting the temptation to inflate Raw Power or Defense.

A one-on-one 50 kg wolf remains a formidable medium predator. It can inflict deep punctures and tearing injuries, sustain pursuit, and exploit fatigue. Yet it has no armor, must bring its head into contact to use its main weapon, and cannot reproduce a pack's multi-angle pressure alone. Against a similar-sized poorly armed mammal those strengths are decisive. Against a cougar-like grappler, a large bear, a healthy adult bison or megafauna, the absolute force and weapon gap becomes severe. This profile preserves both realities.

### Future field proposals
- Add `measurement_population` and `measurement_context` fields so Yellowstone averages are not mistaken for species-wide constants.
- Add `daily_travel_km` separately from `speed_mps`; endurance travel is biologically important but not top speed.
- Add an environment/team-rules flag so Pack Strategy can be represented without inflating one individual's base stats.
- Keep bite force unset until a defensible species-specific force/pressure study supports the site's units.

## 9. Mandatory image requirement

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/gray-wolf.png` (not created)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Canis_lupus_signatus_-_01_white_background.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/8/8a/Canis_lupus_signatus_-_01_white_background.jpg
- `file_format_verified`: source JPEG visually inspected; final PNG absent
- `alpha_verified`: no
- `full_body_verified`: **yes for the source photograph**. Visual inspection of the 5090x3054 original confirms the entire single wolf is inside frame: head, torso, all four legs and paws, and complete tail are visible with ample margin.
- `adult_verified`: **no**. Commons identifies the subject as a male Iberian wolf but does not explicitly state adult/mature age on this exact file page. Adult appearance is not treated as proof under the mandatory standard.
- `sex_verified_or_unknown`: male, source category explicitly identifies *Canis lupus* male.
- `license_status`: CC BY-SA 4.0, author Carlos Delgado, reusable with attribution/share-alike compliance.
- `notes`: This is an unusually strong cutout candidate because the source is a genuine photograph already isolated against a simple white background and is 5090x3054. It is not marked complete because explicit adulthood is missing and no true transparent RGBA PNG can be committed through the current text-only GitHub writer. A separate 3000x1996 featured Commons photograph explicitly identifies an Iberian wolf alpha male, strongly supporting adulthood, but visual inspection shows vegetation/pose obscures the clean full silhouette, so it is not the primary image candidate. Do not infer adulthood solely from appearance and do not fake transparency.

## 10. Evidence and source ledger

| Source | Direct URL | Claim / field supported | Reported value / finding | Confidence / conflicts |
|---|---|---|---|---|
| Yellowstone NPS, Wolf Ecology | https://home.nps.gov/yell/learn/nature/wolf.htm | mass, height, length, speed, lifespan, diet, mortality, dentition | male mean 50 kg; male shoulder 81 cm; average length 181 cm; top speed 35 mph; average lifespan 4-5 yr; 42 teeth; other wolves major mortality source | High for Yellowstone; not species-wide |
| NPS, Yellowstone Wolf Facts | https://home.nps.gov/articles/yellowstone-wolf-facts.htm | same population physical controls | male mean 110 lb; female 90 lb; 81 cm male shoulder; 181 cm length; 35 mph | High institutional summary |
| Smithsonian National Zoo, Gray Wolf | https://nationalzoo.si.edu/animals/gray-wolf | species-wide size, habitat, lifespan, social behavior | males 30-80 kg; total length 130-205 cm; wild 7-8 yr | High institutional; broad geographic range |
| Animal Diversity Web, *Canis lupus* | https://animaldiversity.org/accounts/Canis_lupus/ | dimorphism, size range, canine spacing, coat | male 30-80 kg avg 55; female 23-55 avg 45; height 60-90 cm; canine spacing ~4 cm | Moderate-high; older synthesis |
| USGS, Mech et al. 2001 | https://www.usgs.gov/publications/winter-severity-and-wolf-predation-a-formerly-wolf-free-elk-herd | hunting success / prey selection | elk 91% of 117 kills; success 26% severe winter vs 15% mild winter | High, peer-reviewed field study |
| USGS, Smith et al. 2000 | https://www.usgs.gov/publications/wolf-bison-interactions-yellowstone-national-park | learning, bison predation, limits | early bison kills focused on young/injured/vulnerable animals; wolves learned to kill bison | High, peer-reviewed |
| USGS, MacNulty et al. 2012 | https://www.usgs.gov/publications/nonlinear-effects-group-size-success-wolves-hunting-elk-0 | pack hunting mechanics | hunting success leveled off beyond ~4 wolves; reduced individual effort contributed | High, peer-reviewed |
| NPS, Wolf Ecology Basics | https://www.nps.gov/articles/life-of-a-wolf.htm | daily travel, dispersal, broad sprint context | up to ~30 mi/day; dispersers up to 500 mi; short-distance speed claim up to 45 mph | High agency explainer; 45 mph conflicts with Yellowstone-specific 35 mph, so 35 mph chosen |
| NPS, Lamar Valley Predators and Prey | https://www.nps.gov/places/000/lamar-valley-predators-and-prey.htm | diet and ecological role | 90% winter prey elk; wolves can kill bison; kills feed scavengers | High agency context |
| Mammal Diversity Database v2.5 | https://www.mammaldiversity.org/ | taxonomy reference | current mammalian taxonomy database, v2.5 released 2026-07-28 | High taxonomic reference |
| Commons, Carlos Delgado | https://commons.wikimedia.org/wiki/File:Canis_lupus_signatus_-_01_white_background.jpg | image provenance | exact Iberian wolf, male category, 5090x3054, CC BY-SA 4.0 | High provenance; adulthood not explicit |
| Commons, Arturo de Frias Marques | https://commons.wikimedia.org/wiki/File:Iberian_Wolf_AdF_001.jpg | image adulthood comparison | exact Iberian wolf described as alpha male, 3000x1996, CC BY-SA 4.0 | Adult/male strong, but silhouette is less suitable due pose/vegetation |

### Bite-force conflict
The NPS Yellowstone page currently repeats a 1,200 PSI bite-pressure value, while the live ABS profile carries 400 PSI. Neither is accepted here as a canonical measured pressure because the accessible institutional text does not provide the underlying pressure experiment/contact-area method. `bite_force_psi` therefore remains 0.0 pending primary evidence.

## 11. Confidence and unresolved conflicts

- **High confidence:** canonical Yellowstone male mass/height/length; sexual dimorphism direction; cursorial and social hunting biology; prey composition and pack-hunting evidence.
- **Moderate-high:** 15.6 m/s top speed as an agency field value.
- **Moderate:** 7.5-year species-level representative wild lifespan because Yellowstone local average is lower.
- **Low / unresolved:** bite pressure in PSI, therefore stored as 0.0.
- **Image unresolved:** source is visually complete and reusable, but explicit adulthood is missing. No final PNG is claimed.

## 12. Cross-animal normalization notes

- **Versus Arctic Wolf:** Gray Wolf canonical male is 50 kg versus the staged Arctic Wolf's 40 kg, so Gray Wolf receives modestly higher individual Raw Power and Attack. Arctic Wolf retains stronger cold specialization. Their endurance is both elite, with Gray Wolf 89.0 and Arctic Wolf 86.0 remaining close rather than artificially separated.
- **Versus African Wild Dog:** Gray Wolf should be materially stronger individually because of body mass and jaw/neck leverage, while African Wild Dog remains an elite endurance/social hunter. Pack ecology does not erase the individual mass gap.
- **Versus Coyote and Dhole:** wolf absolute power and damage should remain above smaller canids. Similar social sophistication can coexist with large differences in individual Attack.
- **Versus Gorilla:** the newly staged 195 kg mountain-gorilla control remains far above the 50 kg wolf in Raw Power and absolute close-range force. Wolf advantages are locomotion, endurance and predatory weapon specialization, not strength parity.
- **Versus African Lion / big cats:** wolf Attack and Defense must remain clearly lower. A wolf lacks retractile claws and the forelimb grappling system of a large felid.
- **Anti-inflation check:** 50 kg body size does not justify live-style Raw Power in the 70s under the new absolute ant-to-megafauna calibration. Proposed Raw Power 46.0 preserves the required roster gap.
- **Speed/agility check:** 15.6 m/s supports Speed 64.0, but Agility/Maneuverability stays 66.0 based on control and repositioning rather than being copied from top speed.
- **Double-counting check:** endurance drives Stamina and the named Endurance Hunt ability, but does not also inflate Attack or Defense. Pack coordination primarily supports Tactics/Intelligence and contextual Special, not individual Raw Power.

## Final verification

- Exact taxon and canonical specimen documented: **yes**
- Dimorphism/population variation documented: **yes**
- Physical fields with uncertainty/conflicts: **yes**
- Current 12 ABS substats scored with one decimal: **yes**
- Six headline ratings with one decimal: **yes**
- Exactly two special abilities: **yes**
- Exactly two unique traits: **yes**
- Habitat/range/diet/ecology/social/life history/conservation/adaptations/human interaction: **yes**
- Several genuine fun facts: **yes**
- Site summary and rich narrative: **yes**
- Future field proposals: **yes**
- Source ledger with direct URLs: **yes**
- Image requirement handled truthfully: **yes; source pending, no PNG claimed**
- Live site / production data modified: **no**
