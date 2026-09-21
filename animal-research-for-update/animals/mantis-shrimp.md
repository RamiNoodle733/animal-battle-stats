# Mantis Shrimp Research Overhaul

## 1. Identity and canonical specimen

- **Roster name:** Mantis Shrimp
- **Resolved taxon:** Peacock mantis shrimp, *Odontodactylus scyllarus* (Linnaeus, 1758), family Odontodactylidae, order Stomatopoda.
- **Status:** Living.
- **Canonical specimen:** healthy mature large **male**, **0.08 kg**, **15.0 cm total length**. This is a representative large adult, not the 17.1-18 cm upper extreme.
- **Why male:** sex is not known to produce a decisive mass advantage, but mature males are conspicuously colored and are appropriate territorial combat representatives. ADW reports sexual color dimorphism, with males more colorful; taxonomic material reports a 129 mm male and 88 mm female while older records reach 171 mm. This is not evidence for a universal 129:88 size ratio, so no strong size dimorphism is assumed.
- **Population variation:** Indo-West Pacific records span East Africa through the western Pacific. Maximum size reports converge near 17-18 cm, while ADW gives a broad 3-18 cm range that includes juveniles.

## 2. Physical measurements and uncertainty

### Length and mass
ADW reports **3-18 cm total length**. Recent South African taxonomic work measured a 129 mm male and 88 mm female and cites a historical 171 mm maximum. The canonical **15.0 cm** therefore represents a large mature combat animal without using the species maximum.

Published strike experiments used animals **11-15 cm** long. Those experiments report more than **16 kN of impact force per kg body mass** and maximum perpendicular forces to 1,314 N in that size range. This implies experimental animals were on the order of tens of grams, not hundreds of grams. Because a clean species-wide adult mass distribution was not found, **0.08 kg** is a moderate-confidence working canonical mass for a large 15 cm individual rather than a claimed measured adult mean.

### Locomotor speed
The famous **12-23 m/s** figure is the speed of the raptorial appendage, not whole-animal swimming or walking speed. It must not populate the site's locomotor `speed_mps` field.

- **Canonical `speed_mps`: 0.0** because no defensible species-specific maximum whole-body locomotor speed was found.
- **Raptorial strike speed:** measured maximum range **12-23 m/s**.
- **Strike acceleration:** literature reports accelerations on the order of **100,000 m/s²**, achieved by elastic power amplification rather than direct muscle shortening alone.

### Strike force and cavitation
Patek & Caldwell measured **400-1,501 N peak limb impact force** and cavitation-force peaks reaching **504 N**. The two force peaks occurred roughly **390-480 microseconds** apart. A related experimental abstract reports 11-15 cm animals averaging 391 N against flat and 416 N against curved load-cell surfaces, with maximum perpendicular force 330-1,314 N and force scaling with body size.

This is direct force in newtons, not pressure. It is not converted to bite PSI.

### Height
There is no biologically useful standardized standing height for this low benthic crustacean.

- **Canonical `height_cm`: 0.0**.

### Lifespan
Species-specific longevity is less securely documented than strike mechanics. ADW's account for a congener states *O. scyllarus* is known to live at least **3-4 years in captivity** and is suspected to live **5-6 years in the wild**. Aquarium references commonly repeat 4-6 years. This is useful but weaker than primary demography.

- **Canonical `lifespan_years`: 6.0**, low-to-moderate confidence.

### Bite force
The combat weapon is the raptorial club, not a vertebrate-like biting apparatus with a defensible PSI measurement.

- **Canonical `bite_force_psi`: 0.0**.

### Armor and weapon construction
The dactyl clubs are heavily mineralized impact tools built to survive repeated shell-smashing strikes. The body retains a segmented crustacean exoskeleton. The telson is used as an impact-receiving shield during ritualized sparring; comparative biomechanics show mantis-shrimp telsons behave like stiff springs that dissipate much of impact energy, although sparring species are not universally more impact-resistant than non-sparring species.

## 3. Canonical proposed factual fields

```yaml
weight_kg: 0.08
height_cm: 0.0
length_cm: 15.0
speed_mps: 0.0
lifespan_years: 6.0
bite_force_psi: 0.0
```

**Confidence:** length high, mass moderate-low, locomotor speed unresolved, lifespan moderate-low, bite PSI correctly unresolved/0.0.

## 4. Combat biology

### Primary weapons
The paired second thoracic raptorial appendages terminate in mineralized **dactyl clubs**. A latch-spring system stores elastic energy and releases it faster than muscle alone could power the movement. The strike combines direct club impact with a second cavitation-collapse impulse.

### Offensive mechanics
The animal closes to club range, loads the elastic mechanism and releases an ultrafast hammer strike. Hard-shelled gastropods, bivalves and crustaceans are repeatedly hit until the shell fails. The mechanism is specialized for local high-rate loading rather than moving a large absolute mass. This distinction is critical for ABS: the strike is extraordinary at 8-15 cm scale, but the whole animal remains roughly tens of grams.

### Defense
The exoskeleton provides meaningful protection against similarly sized animals, and the broad telson is deliberately presented to opponents during ritualized sparring. However, molting temporarily removes much of that protection and forces the animal to shelter. Larger fish, cephalopods and other predators can overwhelm it.

### Locomotion and agility
*O. scyllarus* is an active benthic predator that walks, uses pleopods for swimming and rapidly reorients around reef rubble and burrow entrances. Its stalked eyes move independently and can perform pitch, yaw and torsional rotations. This supports excellent close-range tracking and positioning, but no whole-body maximum speed is invented.

### Endurance
Its attack is a burst-power system, not an endurance feat. Repeated shell breaking demonstrates that the club and spring system can be reused many times, but prolonged locomotor endurance is not exceptional on current evidence. Molting is a major temporary performance collapse.

### Senses
The eyes are among the species' most specialized systems. Peer-reviewed physiology demonstrates linear polarization sensitivity, circular-polarization sensitivity and UV polarization sensitivity. Experiments also show active torsional eye movements that maximize polarization contrast. The two eyes can move largely independently, giving unusual visual sampling and target tracking.

### Tactics and cognition
The species uses burrows as defensible refuges and ambush points, performs threat displays, assesses rivals and engages in ritualized contests. This is meaningful tactical behavior for an invertebrate. Evidence does not justify mammal/primate-level general intelligence, so the rating rewards combat-relevant sensory integration and behavioral flexibility without anthropomorphic inflation.

### Intraspecific fighting
Territorial disputes can involve meral displays and ritualized telson sparring. Opponents can take turns striking the defended tail fan, allowing assessment while limiting catastrophic injury. The WA Museum specifically describes the thickened tail fan as defensive in disputes over females, territory and burrows.

### Hunting and predation
The peacock mantis shrimp is a durophagous benthic predator. Gastropods, bivalves and crustaceans are classic hard-prey targets; fish and other invertebrates can also be attacked. It typically operates from or around a burrow in reef-associated rubble and sand.

### Environmental strengths
- Coral-rubble and hard-bottom habitat gives abundant cover and solid burrow structure.
- Confined burrow entrances let the animal control approach angles.
- Water is essential to the normal cavitation-assisted strike environment.
- Complex visual scenes can be exploited through polarization sensitivity and independently moving eyes.

### Environmental limitations and weaknesses
- Tiny absolute body mass compared with vertebrate roster animals.
- Short weapon reach.
- Soft post-molt cuticle creates an acute vulnerability window.
- Exoskeleton and telson are not protection against a much larger predator's crushing or swallowing attack.
- Specialized club damage is devastating to small hard targets but scales poorly against massive flesh-and-bone opponents.
- Whole-body top speed is unresolved and should not be confused with 23 m/s club speed.

### Matchup archetypes
- **Excellent:** similarly sized shelled or armored invertebrates that must enter club range.
- **Good:** small opponents whose vital structures can be reached by repeated localized impacts.
- **Poor:** large flexible-bodied opponents that can absorb localized blows without catastrophic structural failure.
- **Very poor:** vertebrates capable of swallowing, crushing or attacking from beyond the short club reach.

## 5. Proposed ABS substats

| Substat | Score | Justification |
|---|---:|---|
| Size | **5.0** | About 0.08 kg and 15 cm is tiny on a roster containing large mammals and marine megafauna. |
| Raw Power | **20.0** | Absolute whole-body power remains low despite extreme elastic power amplification in one appendage system. |
| Weaponry | **50.0** | 400-1,501 N measured impacts plus cavitation are extraordinary for its size, but reach and absolute target scale cap the roster-wide score. |
| Protection | **22.0** | Exoskeleton and impact-receiving telson are meaningful at small-animal scale but not megafaunal armor. |
| Toughness | **20.0** | Repeated club use and armored construction help, while molting and tiny body mass strongly constrain absolute trauma tolerance. |
| Speed | **35.0** | Active benthic movement, but no verified maximum whole-body speed; 23 m/s strike speed is excluded here. |
| Maneuverability | **83.0** | Small body, reef-scale repositioning and independently mobile eyes support exceptional close-range control. |
| Endurance | **48.0** | Repeated strikes are sustainable, but the system is burst-specialized and evidence for exceptional prolonged locomotion is weak. |
| Recovery | **42.0** | Molting renews the exoskeleton but imposes a major vulnerable period; this is not rapid regeneration. |
| Tactics | **69.0** | Burrow defense, displays, assessment and ritualized sparring provide real combat decision structure. |
| Senses | **96.0** | UV, linear and circular polarization sensitivity plus dynamic eye rotations form one of the roster's most specialized visual systems. |
| Ferocity | **78.0** | Territorial, predatory and willing to strike hard prey and rivals, while many contests remain ritualized rather than suicidal. |
| Abilities | **94.0** | Spring-loaded impact, cavitation and polarization vision are multiple genuinely unusual matchup-relevant mechanisms. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **34.0** | Measured 400-1,501 N club impacts are exceptional, but a roughly 80 g animal cannot be normalized like a large predator. |
| **Defense** | **24.0** | Exoskeleton and telson shielding help against peers; tiny mass and molt vulnerability sharply limit absolute survivability. |
| **Agility** | **84.0** | Excellent close-range orientation, compact maneuverability and independently mobile eyes; not based on strike speed alone. |
| **Stamina** | **50.0** | Repeated smashing is durable, but evidence supports burst specialization more strongly than prolonged high-output endurance. |
| **Intelligence** | **68.0** | Burrow strategy, rival assessment and sophisticated sensory-guided behavior justify strong tactical cognition without mammalian inflation. |
| **Special** | **97.0** | Elastic power amplification, cavitation and extraordinary polarization vision are rare, experimentally demonstrated systems. |

### Normalization warning
The 1,500 N strike must **not** make this animal comparable in Attack to Jaguar, Hyena or Kudu. Force is delivered over a tiny travel distance by a tiny appendage into small local targets. ABS is absolute, not pound-for-pound.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Cavitation Hammer**: the spring-loaded dactyl club reaches measured speeds up to 23 m/s, producing a direct impact followed within fractions of a millisecond by a cavitation-collapse force peak.
2. **Polarization Targeting Array**: independently mobile compound eyes detect linear, circular and ultraviolet polarization, and torsional eye movements actively maximize polarization contrast.

### Unique traits
1. **Impact-Tempered Clubs**: highly mineralized, damage-tolerant dactyl clubs repeatedly survive the same high-rate impacts they deliver to hard prey.
2. **Telson Sparring Shield**: the armored tail fan is deliberately presented to absorb rival strikes during ritualized contests over valuable burrows and reproductive access.

## 8. Expanded profile

### Habitat and range
The species occupies tropical Indo-West Pacific reef-associated hard bottoms, rubble and sand. ADW describes shallow clear coral-reef waters, while recent taxonomic synthesis extends known habitat from shallow water to roughly 100 m across the western Indian Ocean and western Pacific. Many ecological references emphasize roughly 3-40 m as common reef depth.

### Diet and ecology
It is a carnivorous benthic predator specialized for hard prey. Snails, bivalves and crustaceans are repeatedly smashed to expose soft tissue. The burrow functions as refuge, territorial resource and hunting base.

### Social and fighting behavior
Adults are strongly territorial around burrows. Visual threat signaling and telson sparring allow rivals to assess one another. Pair association can occur around reproduction, but the species should not be characterized as a permanently cooperative social hunter.

### Reproduction and life history
Sexes are visually dimorphic, with mature males generally brighter green and females more olive/brown. Females brood large egg masses and are constrained while caring for eggs. Species-specific longevity and demographic schedules are not well quantified enough to justify false precision.

### Conservation
A robust global IUCN category was not recovered in this run; Fishipedia lists the species as **Not Evaluated**. The research file therefore records conservation status as **not securely assessed here**, rather than inventing a threat category.

### Adaptations
- Elastic latch-spring raptorial mechanism.
- Mineralized impact-resistant dactyl club.
- Cavitation-assisted shell breaking.
- Telson armor used in ritualized combat.
- Independently mobile compound eyes.
- UV, linear and circular polarization sensitivity.
- Burrow construction and territorial defense.

### Human interaction
The species is famous in the marine aquarium trade. Its strikes can injure handlers and reports exist of large animals damaging aquarium glass. Those anecdotes are secondary to the measured laboratory force data and are not used to inflate ABS scores.

### Fun facts
- High-speed experiments measured club speeds up to **23 m/s underwater**.
- Direct impact peaks reached **1,501 N**, followed by cavitation peaks up to **504 N**.
- The impact and cavitation peaks can occur only about **0.4 milliseconds apart**.
- Its eyes can detect **circularly polarized light**.
- UV-sensitive receptors can also encode polarization orientation.
- The eyes actively roll to improve polarization contrast.
- Rival smashers can take turns hitting each other's tail shields instead of immediately escalating to lethal combat.
- The famous strike speed is not the shrimp's swimming speed.

### Concise site-ready summary
The peacock mantis shrimp is a tiny reef predator built around one of biology's most extreme impact systems. Its spring-loaded clubs reach up to 23 m/s and generate measured impacts as high as 1,501 N, followed by a cavitation shock. Its independently moving eyes add UV and polarization channels that few animals can match. In ABS terms it is an elite specialist, not a miniature heavyweight: terrifying against similarly sized hard prey, but still only tens of grams on an absolute roster.

### Rich narrative profile
A peacock mantis shrimp wins by concentrating a small animal's energy into an extraordinarily brief event. Muscle first loads an elastic spring system. A latch releases it, accelerating the dactyl club so quickly through water that the surrounding pressure falls enough to form vapor bubbles. The club hits first. The bubbles then collapse and produce a second force pulse. For a snail or crab shell, that one-two loading can initiate cracks that repeated blows exploit.

Its defense mirrors its offense. A mineralized exoskeleton and broad telson protect the body, and rival smashers can present the telson during ritualized contests. This is a striking example of weapon and defensive behavior being integrated without making the whole animal invulnerable. During molting, the advantage temporarily reverses because the fresh cuticle is soft and the animal must rely on its burrow.

The visual system makes the animal even stranger. Rather than merely having many photoreceptor channels, *O. scyllarus* can analyze polarization, including circular polarization, and actively rotate its eyes to improve polarization contrast. Those senses matter to prey tracking, communication and rival assessment. Special is therefore near the top of the roster even while Size and Defense remain low.

The key calibration point is scale. A 1,500 N transient club impact is real, but it does not turn an 80 g stomatopod into a lion-sized damage dealer. The force acts locally over a tiny displacement and is optimized for brittle shells. Against a large vertebrate, reach, target volume and total energy become decisive constraints. The correct ABS profile is thus low-to-moderate absolute Attack paired with extraordinary Special and Senses.

### Future structured-field proposals
- `raptorial_strike_speed_mps`
- `peak_strike_force_n`
- `peak_cavitation_force_n`
- `polarization_vision`
- `weapon_type`
- `molt_vulnerability`

## 9. Mandatory image section

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/mantis-shrimp.png` (not created)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Camar%C3%B3n_mantis_(Odontodactylus_scyllarus),_Anilao,_Filipinas,_2023-08-24,_DD_164.jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/6/63/Camar%C3%B3n_mantis_%28Odontodactylus_scyllarus%29%2C_Anilao%2C_Filipinas%2C_2023-08-24%2C_DD_164.jpg
- **file_format_verified:** source JPEG, 4964x4964; final PNG does not exist
- **alpha_verified:** no
- **full_body_verified:** no. The original was visually inspected and shows the animal looking from inside a burrow; the abdomen, telson and multiple appendages are obscured, so it fails the mandatory complete-body rule.
- **adult_verified:** no. Exact species is verified, but age is not explicit.
- **sex_verified_or_unknown:** unknown
- **license_status:** CC BY-SA 4.0, Diego Delso; derivative works allowed with attribution/share-alike
- **notes:** This is a high-quality featured exact-species photograph but is unsuitable as the final staging asset because the burrow obscures most of the body. It is retained only as a truthful candidate/provenance reference while a complete-body adult source remains needed. Current GitHub writer is text-only, so no PNG binary is claimed.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Confidence / conflicts |
|---|---|---|---|
| Animal Diversity Web, *Odontodactylus scyllarus* | https://animaldiversity.org/accounts/Odontodactylus_scyllarus/ | 3-18 cm range, anatomy, sexual color dimorphism, reef habitat, prey | High university synthesis; broad length range includes juveniles |
| Patek & Caldwell 2005, Journal of Experimental Biology / PubMed | https://pubmed.ncbi.nlm.nih.gov/16169943/ | 400-1501 N impact, cavitation to 504 N, double force peak | High primary experimental evidence |
| Patek Lab, Duke University | https://pateklab.biology.duke.edu/research/mechanics-of-ultrafast-movement/mechanics-of-movement-mantis-shrimp/ | 12-23 m/s raptorial speed, cavitation mechanism | High expert lab synthesis of primary work |
| SICB, Patek & Caldwell | https://sicb.org/abstracts/snail-smashing-forces-of-the-peacock-mantis-shrimp/ | 11-15 cm experimental animals, mean and max force, >16 kN/kg scaling | High conference primary data; mass inferred only cautiously |
| Journal of Comparative Physiology A / PMC | https://pmc.ncbi.nlm.nih.gov/articles/PMC2780600/ | UV polarization sensitivity, circular/linear polarization system | High peer-reviewed physiology |
| Nature Communications, Daly et al. 2016 | https://doi.org/10.1038/ncomms12140 | active torsional eye rotation maximizing polarization contrast | High peer-reviewed experiment |
| Royal Society Interface, Taylor et al. 2019 | https://doi.org/10.1098/rsif.2019.0203 | telson impact mechanics and ritualized fighting context | High peer-reviewed comparative biomechanics |
| Western Australian Museum | https://museum.wa.gov.au/creature-feature-peacock-mantis-shrimp | club ecology, tail-fan defense, ritualized fighting, distribution | High museum synthesis |
| Zenodo / South African taxonomic guide material | https://zenodo.org/records/18270187 | measured 129 mm male, 88 mm female, historical 171 mm maximum, range/habitat | High taxonomic source; tiny sex sample, not a dimorphism mean |
| Lembeh Resort species field page | https://www.lembehresort.com/critter-log/critter/odontodactylus-scyllarus | adult male/female coloration, 18 cm maximum, egg brooding | Moderate field/husbandry source |
| Wikimedia Commons, Diego Delso | https://commons.wikimedia.org/wiki/File:Camar%C3%B3n_mantis_(Odontodactylus_scyllarus),_Anilao,_Filipinas,_2023-08-24,_DD_164.jpg | image provenance, exact species, 4964x4964, CC BY-SA 4.0 | High provenance; visually fails full-body requirement |

### Conflicts and confidence
- **Mass:** no strong adult population mass dataset was found. 0.08 kg is a working representative value consistent with experimental force-per-mass scaling, not a directly measured species mean. Future primary morphometric data should replace it if found.
- **Length:** 15.0 cm is representative of the upper adult range and directly overlaps experimental animals; 17.1-18 cm is treated as maximum context.
- **Speed:** 23 m/s belongs only to the club. Whole-animal `speed_mps` stays 0.0.
- **Lifespan:** 6.0 years is weak-to-moderate confidence and should not be presented as a known maximum.
- **Strike force:** 1,501 N is a measured peak, not a typical every-strike value. Average experimental perpendicular forces were closer to ~400 N.
- **Bite PSI:** no conversion from club force to PSI is legitimate.

## 11. Cross-animal calibration notes

- **Versus American Lobster (1.0 kg):** Mantis Shrimp is far smaller and therefore below Lobster in Size and broad Defense, but its ultrafast club and cavitation justify higher Weaponry, Agility, Senses and Special. Attack 34.0 is only modestly above Lobster 28.0 despite spectacular proportional force.
- **Versus Lionfish (0.5 kg):** Lionfish has much greater body mass and passive venomous-spine deterrence. Mantis Shrimp's direct strike is more mechanically forceful against hard small targets, but Lionfish retains a more immediate contact hazard to much larger attackers. Mantis Shrimp Special 97.0 exceeds Lionfish 87.0 because it combines two experimentally extraordinary systems rather than because it is more lethal overall.
- **Versus Magpie (0.23 kg) and Macaw (1.2 kg):** Mantis Shrimp can outrank them in specialized Senses without approaching their general cognitive flexibility. Intelligence therefore remains 68.0, well below Magpie 91.0 and Macaw 86.0.
- **Versus Jaguar (100 kg):** there must be an enormous absolute gap. A localized millisecond strike does not erase a roughly thousand-fold mass difference. Jaguar Attack 68.0 remains vastly more matchup-relevant against large opponents.
- **Anti-leakage check:** 23 m/s strike speed affects Weaponry/Special, not locomotor Speed or Agility directly. Cavitation is primarily Special and weapon mechanics, not separately inflated across Defense/Stamina. Proportional strength is explicitly prevented from driving Raw Power toward large-animal values.