# African Elephant Research Overhaul

## Research status

- **ABS roster name:** African Elephant
- **Canonical taxon for this profile:** African savanna elephant / African bush elephant, *Loxodonta africana*
- **Living/extinct:** Living
- **Canonical combat specimen:** Healthy mature adult bull, using a representative large male rather than a record-sized individual
- **Research confidence:** High for taxonomy, mass, shoulder height, ecology, social behavior, tusk biology, and broad locomotor performance; moderate for a single canonical body length and combat stamina; low for any precise bite-force PSI because elephants are not meaningfully bite-based combatants and no defensible species-standard PSI value was found
- **Important taxonomy note:** Modern conservation treatment separates the African savanna elephant (*L. africana*) from the African forest elephant (*L. cyclotis*). This ABS entry should represent *L. africana*, not a pooled generic African-elephant composite.

---

## 1. Identity and canonical specimen

### Common and scientific identity

The African Elephant entry should be defined as the **African savanna elephant**, also commonly called the African bush elephant, *Loxodonta africana*. The African forest elephant, *Loxodonta cyclotis*, is now treated separately by IUCN and differs substantially in size, ecology, morphology, and life history. Using *L. africana* removes a major source of ambiguity in older generic “African elephant” figures.

Taxonomic placement:

- Kingdom: Animalia
- Phylum: Chordata
- Class: Mammalia
- Order: Proboscidea
- Family: Elephantidae
- Genus: *Loxodonta*
- Species: *Loxodonta africana*

### Canonical specimen assumption

ABS should model a **healthy mature adult bull**. This follows the project rule that when one sex is materially larger and more heavily armed, the larger fighting sex is the canonical combat specimen. Animal Diversity Web reports adult males at roughly **4,500–6,100 kg** and **3.2–4.0 m at the shoulder**, substantially above females at roughly 2,000–3,500 kg and 2.2–2.6 m. Male tusks are also generally larger.

The canonical bull is not a giant historical record holder or one of the rare modern “super tuskers.” It is intended to be a strong, representative mature bull in good condition.

### Sexual dimorphism and age

Sexual dimorphism is battle-relevant. Mature bulls are larger, broader, and more heavily armed than cows. Male competitive behavior also changes with age and reproductive state. Bulls periodically enter **musth**, a physiological and behavioral state associated with elevated reproductive competition, chemical signaling, and increased dominance/aggression. ABS should not assume permanent peak-musth aggression as the default personality, but male-male contest behavior is relevant evidence for how a bull can use mass, tusks, head, and trunk against a serious opponent.

---

## 2. Physical measurements

### Mass

**Best-supported adult-male range:** about **4,500–6,100 kg**.

Animal Diversity Web gives adult males a range of 4,500–6,100 kg. A tracked bull named Matt described by Save the Elephants stood about 10 ft at the shoulder and weighed over six tons, showing that a roughly six-ton mature bull is realistic without relying on an exceptional historical record.

**ABS representative recommendation:** **5,500.0 kg**.

Reasoning: 5.5 tonnes sits in the upper-middle of the cited adult-male range and represents a formidable mature bull without treating the species maximum as typical.

### Shoulder height

**Best-supported adult-male range:** about **3.2–4.0 m** at the shoulder from Animal Diversity Web. SeaWorld’s species material also gives African elephants roughly 3–4 m at the shoulder.

**ABS representative recommendation:** **360.0 cm**.

This is a large mature bull but remains below the 4 m upper end.

### Body length

SeaWorld’s African elephant fact sheet gives a total body length range of roughly **6.0–7.25 m**. Published popular/institutional figures vary partly because measurement conventions differ, especially around whether trunk and tail are included.

**ABS representative recommendation:** **660.0 cm**.

This should be treated as an approximate canonical profile dimension, not a claim that mature bulls converge tightly on 6.6 m.

### Top movement speed

Animal Diversity Web reports a regular pace around 6 km/h and a maximum around **24 km/h**. A classic Nature biomechanics study found elephants capable of approximately **6.8 m/s (25 km/h)**, although that experimental result involved Asian elephants and the unusual elephant high-speed gait. It is therefore useful as biomechanical cross-checking rather than species-specific proof of an exact African-savanna maximum.

**ABS representative recommendation:** **6.7 m/s** (about 24.1 km/h).

This is intentionally conservative and aligns with the species account rather than sensational higher internet claims.

### Lifespan

Animal Diversity Web reports wild African elephants averaging approximately **60–70 years**, with 60 years also represented in demographic data. SeaWorld gives up to about 70 years.

**ABS representative recommendation:** **65.0 years**.

### Bite force

**ABS recommendation:** **0.0 PSI in the bite-force field.**

This does not mean an elephant’s jaws are physically force-free. It means bite force is not a meaningful or well-supported canonical combat measurement for this animal. Elephants fight primarily through mass, tusks, head/body force, feet, and trunk use. No sufficiently reliable species-standard African-savanna-elephant bite-force PSI measurement was found in this research pass. The project contribution guide explicitly permits 0 where no reliable bite-force data exists.

### Tusks

Tusks are elongated upper incisors and grow continuously. Animal Diversity Web notes African elephant tusks can reach up to about **3.5 m** in exceptional cases. SeaWorld reports adult male tusks at roughly **50–79 kg each**, with exceptional tusks exceeding 100 kg. Save the Elephants documented the bull Mac with tusks around **2.47 m and 1.94 m**, each over 100 lb.

For ABS combat interpretation, the important point is not to model a normal bull with 3.5 m record-class tusks. A mature bull nevertheless carries long, dense ivory weapons capable of stabbing, levering, shoving, digging, and applying force during contests.

### Trunk

The trunk is a muscular hydrostat used for grasping, breathing, smelling, drinking, tactile exploration, communication, lifting, manipulation, and defense. SeaWorld describes an estimated 100,000 muscles and tendons, emphasizing its extreme flexibility. For battle purposes it is best understood as a highly dexterous manipulator and sensory organ rather than a fantasy “super-strength arm.” It can shove, pull, reposition objects, investigate an opponent, and assist in close physical control, but the bull’s greatest destructive force still comes from multi-tonne body mass, tusks, head, and legs.

### Skin and structural protection

Animal Diversity Web reports thick skin reaching roughly **30 mm** over much of the body. Elephant skin is not armor in the same sense as a shell or osteoderm plate, but its thickness, huge body depth, robust skeleton, and sheer mass make superficial attacks less decisive than they would be against a smaller mammal.

### Feet and legs

Elephant feet distribute enormous loads through specialized pads of fat and connective tissue. The limbs are columnar and optimized to support a multi-tonne body. In a fight, feet and forward body momentum are serious hazards, although “stomping” should not be treated as a perfectly precise or universally available finishing move against every opponent.

---

## 3. Canonical proposed factual fields

| Field | Proposed value | Research basis |
|---|---:|---|
| `weight_kg` | **5500.0** | Representative mature bull within ADW male 4,500–6,100 kg range |
| `height_cm` | **360.0** | Representative mature bull within ADW 3.2–4.0 m male shoulder range |
| `length_cm` | **660.0** | Representative value within institutional ~6.0–7.25 m range, with measurement-convention caveat |
| `speed_mps` | **6.7** | Approximately 24 km/h species account, consistent with elephant biomechanics |
| `lifespan_years` | **65.0** | Midpoint-like representative value for roughly 60–70-year wild lifespan |
| `bite_force_psi` | **0.0** | No reliable canonical PSI located; bite is not the elephant’s meaningful primary weapon |
| `size_score` | **96.0** | Near the terrestrial extreme, but full roster includes far larger marine and extinct giants |

### Suggested categorical fields

- `type`: Mammal
- `size`: Extra Large or Colossal, depending on how ABS reserves “Colossal” across marine/extinct animals
- `habitat`: Savanna, grassland, woodland, scrub, semi-desert, and other open/sub-open African habitats
- `isNocturnal`: false as a strict label; activity is flexible and strongly shaped by heat, water, disturbance, and human pressure
- `isSocial`: true, with the important caveat that mature bulls often range independently or in looser male associations while females form the core family societies
- `diet`: Herbivore; grasses, leaves, bark, twigs, roots, fruits and other plant material

---

## 4. Combat biology

### Primary weapons

1. **Tusks.** Long ivory incisors provide piercing reach, leverage, pushing surfaces, and weapons for male contests. They are capable of causing deep penetrating trauma and can be used while the elephant drives forward with its head and body.
2. **Mass and forward force.** At roughly 5.5 tonnes, the canonical bull can impose forces that most terrestrial opponents simply cannot match head-on. A charge or forceful shove can knock down, crush, displace, or destabilize much smaller animals.
3. **Head and shoulders.** The head/neck/shoulder complex works with the tusks in pushing and wrestling contests.
4. **Feet.** A downed or badly positioned opponent faces crushing trauma from a multi-tonne animal’s feet and body weight.
5. **Trunk.** Useful for tactile control, pulling, pushing, probing, and manipulating at close range, but it is also vulnerable soft tissue and should not be exaggerated into the elephant’s main killing weapon.

### Offensive mechanics

A bull’s most dangerous offensive pattern is **closing distance while presenting a huge frontal mass and tusks**, then using momentum, pushing, stabbing, levering, and body positioning. Unlike a cat, it does not need a delicate killing bite. Against terrestrial animals hundreds or thousands of kilograms lighter, simple force disparity can determine the encounter.

Against another elephant, contests can involve displays, parallel walking, pushing, tusk contact, head-to-head force, and escalated physical combat. This matters because it demonstrates that the species has real fighting mechanics against opponents in its own size class, not merely predator deterrence against smaller animals.

### Defense and durability

The elephant’s defensive package is exceptional on land:

- multi-tonne body mass and depth
- thick skin
- robust bones and weight-bearing limbs
- tall body that places many vulnerable areas out of easy reach for small attackers
- dangerous tusks and frontal threat that discourage close engagement
- high ability to physically displace opponents

However, elephants are not invulnerable. Eyes, trunk, mouth, lower legs, joints, belly, and other soft tissues remain attackable. Large predators can threaten calves and, in unusual group circumstances, weakened or isolated adults. Humans have historically killed elephants with weapons. ABS Defense should therefore be extremely high, not magical.

### Locomotion and maneuverability

Elephants can move faster than their appearance suggests, reaching around 24–25 km/h. Their feet are well adapted to uneven ground, and they can pivot and reposition effectively for their size. Nevertheless, absolute turning radius, acceleration, rapid direction change, and fine evasive movement are limited compared with small cats, canids, primates, birds, and many medium-sized ungulates.

This is the clearest reason the elephant should not have universally elite ratings. **Top speed is not agility.**

### Stamina and endurance

African savanna elephants routinely cover large distances while foraging and moving between resources, and their ecology requires sustained walking under hot conditions. Their thermoregulation, ears, behavioral water use, and massive but efficient locomotor system support prolonged low-to-moderate activity.

Combat-specific maximal exertion is different. A 5.5-tonne animal generates enormous heat and cannot sustain repeated maximum-speed bursts indefinitely. ABS Stamina should therefore be high for sustained functional movement and prolonged physical presence, but below specialized endurance runners.

### Senses

Elephants possess an exceptional sensory suite:

- highly developed smell and chemical communication
- sensitive hearing, including low-frequency communication
- trunk-based tactile and olfactory sampling
- strong social recognition and memory
- sensitivity to distant signals and environmental cues

ElephantVoices describes chemical cues as central to information about family, rivals, mates, food, and danger, and documents sophisticated acoustic/social communication.

### Intelligence and tactical flexibility

Elephants show advanced memory, social knowledge, individual recognition, communication, learning, and flexible behavior. ElephantVoices summarizes evidence for individually specific “name-like” vocal labels in African savanna elephants, along with complex social strategies and individual personality differences.

For ABS, Intelligence should be among the highest nonhuman-animal ratings in the roster. It should not be 100 automatically because the roster includes other highly cognitive animals such as great apes, corvids, parrots, dolphins, and orcas, and “best intelligence” depends on task domain.

### Hunting behavior

Not applicable. African savanna elephants are herbivores. Their battle ability comes from defense, competition, dominance interactions, and anti-threat behavior rather than predatory hunting.

### Intraspecific fighting

Bull competition is highly relevant. Mature males assess rivals, display, spar, push, and may escalate with tusks and body force. Musth changes the competitive context and can produce intense dominance behavior. This gives the elephant credible same-size combat experience, even though most encounters do not end in lethal fighting.

### Predator defense

Healthy adult bulls have very few natural predators. Size, tusks, social knowledge, and physical danger make attacking one an extremely high-risk proposition. Lions are much more relevant to calves, juveniles, or vulnerable individuals than to a prime adult bull.

### Aggression and ferocity

Elephants should not be scored as permanently bloodthirsty. They often avoid unnecessary high-cost fights and use threat displays. But a committed adult bull, particularly in a competitive context, can be extremely dangerous and willing to press an opponent. Ferocity should be solidly above average without becoming a caricature.

### Environmental strengths

- Excellent on open and semi-open terrestrial terrain
- Effective on uneven natural ground
- Can traverse long distances
- Can use vegetation, trees, and terrain physically
- Comfortable in water and capable swimmers, although ABS should not treat a deep-water fight as equivalent to a terrestrial matchup

### Environmental limitations

- Tight enclosed terrain reduces turning room and the usefulness of charge momentum
- Deep water removes much of the terrestrial mass/footing advantage
- Very steep, highly broken, or structurally fragile terrain can constrain a multi-tonne body
- Cannot pursue aerial opponents in three dimensions

### Major weaknesses

- Relatively low fine agility compared with smaller combatants
- Eyes and trunk are important exposed soft tissues
- Tusks can be damaged and are not symmetrical in every individual
- Huge heat load during maximal exertion
- Limited ability to attack small, highly evasive targets with precision
- No venom, armor shell, regeneration, ranged biological weapon, or comparable exotic mechanism

### Good matchup archetypes

- Most terrestrial mammals far below its mass class
- Large predators that must enter close range
- Opponents dependent on wrestling or frontal force but substantially lighter
- Animals whose weapons cannot rapidly penetrate deep enough to disable a multi-tonne target

### Bad matchup archetypes

- Much larger marine giants in aquatic settings
- Extinct mega-predators or giant animals that meet/exceed its mass while carrying specialized killing weaponry
- Highly mobile flying opponents that cannot be forced into contact
- Tiny venomous or toxic specialists can create unusual theoretical conditions, although practical venom delivery and dose relative to elephant body mass must be considered rather than assuming “venom = automatic win”

---

## 5. Proposed ABS substats

These are first-pass global ratings. Because this is the first completed overhaul animal, they are intentionally documented as calibration anchors to be revisited during later cross-roster audits.

| Substat | Score | Justification |
|---|---:|---|
| **Size** | **96.0** | One of the largest living terrestrial animals, but not close to the mass of the roster’s largest whales or giant extinct marine animals. |
| **Raw power** | **96.0** | Multi-tonne body, massive limb/shoulder force, pushing power, and ability to move/displace very large objects and opponents. |
| **Weaponry** | **87.0** | Large tusks plus crushing body/feet provide excellent close-range lethality, though less specialized for rapid killing than giant predator jaws. |
| **Protection** | **84.0** | Thick skin, huge body depth and robust structure; no true shell or heavy osteoderm armor. |
| **Toughness** | **95.0** | Extraordinary absolute trauma tolerance and body mass; still vulnerable to severe penetrating injury and critical soft-tissue damage. |
| **Speed** | **40.0** | About 6.7 m/s is dangerous for a 5.5-tonne animal but modest on the full roster’s absolute speed scale. |
| **Maneuverability** | **34.0** | Competent for size, but clearly limited in acceleration, tight turns, evasiveness, and precision relative to smaller animals. |
| **Endurance** | **79.0** | Built for sustained daily travel and prolonged activity, but maximal exertion is heat- and mass-limited. |
| **Recovery** | **68.0** | Strong general mammalian resilience and long-lived physiology, but no unusual regeneration and serious musculoskeletal injury is costly at this body size. |
| **Tactics** | **78.0** | High learning, memory, social knowledge, threat assessment, and flexible behavior; not a specialized predatory tactician. |
| **Senses** | **90.0** | Exceptional smell, low-frequency hearing/communication, tactile trunk sensing, and broad environmental awareness. |
| **Ferocity** | **68.0** | Can become highly aggressive and committed, especially in male competition, but often relies on deterrence and does not seek unnecessary fights. |
| **Abilities** | **57.0** | Trunk dexterity, infrasonic/chemical sensing and thermoregulatory adaptations are valuable but less directly matchup-breaking than venom, electricity, extreme regeneration, or similar specialist systems. |

---

## 6. Proposed six headline ABS ratings

| Headline stat | Score | Rationale |
|---|---:|---|
| **Attack** | **91.0** | A mature bull combines multi-tonne momentum, huge raw force, tusks, crushing feet and same-size contest mechanics. Not 100 because giant extinct/marine predators can exceed its killing specialization and/or force. |
| **Defense** | **95.0** | Among the strongest terrestrial defensive profiles through mass, depth, thick skin, toughness and dangerous deterrence. Not armored or invulnerable. |
| **Agility** | **35.0** | Surprisingly mobile for its size but limited in acceleration, turning, evasiveness and fine repositioning on an absolute roster scale. |
| **Stamina** | **80.0** | Excellent sustained terrestrial movement and ecological endurance, with clear limits at maximal exertion because of size and heat load. |
| **Intelligence** | **91.0** | Exceptional memory, learning, social cognition, communication and flexible decision-making, placing it in the roster’s elite cognitive tier. |
| **Special** | **58.0** | Trunk dexterity, sophisticated chemical/acoustic sensing and low-frequency communication are unusual and useful, but the elephant lacks a single exotic combat mechanism on the level of powerful venom or electricity. |

### Headline calibration interpretation

The African savanna elephant is deliberately **not** a six-stat 90+ character. Its profile should be extremely polarized in a biologically realistic way: near-top terrestrial Attack/Defense/Power/Size, elite Intelligence, high Stamina, but only modest Agility and moderate Special. This creates meaningful matchup structure instead of simply rewarding fame and body size.

---

## 7. Exactly two proposed special abilities and two unique traits

### Special abilities

1. **Ivory Charge** — The bull drives its multi-tonne body behind long tusks, combining forward momentum, piercing reach, leverage, and displacement. This represents the elephant’s most dangerous integrated offensive action rather than treating tusks and body mass as unrelated fantasy attacks.
2. **Seismic Awareness** — Exceptional low-frequency hearing, vibration sensitivity, smell, and trunk-based sensory sampling give the elephant unusually broad awareness of large nearby disturbances and social/environmental signals. This is a sensory advantage, not literal supernatural radar.

### Unique traits

1. **Living Land Titan** — The African savanna elephant is the largest living terrestrial animal, giving a mature bull enormous absolute strength, body depth, reach, and resistance to being physically controlled by smaller opponents.
2. **Prehensile Trunk** — A highly muscular, dexterous trunk combines smell, touch, manipulation, grasping, communication, drinking, and object handling in one structure, giving the elephant versatility unmatched by ordinary mammalian snouts.

---

## 8. Expanded profile content

### Habitat

African savanna elephants occupy a wide range of sub-Saharan habitats, including savannas, grasslands, woodlands, scrub, semi-desert, and other landscapes where adequate food and water remain accessible. IUCN material emphasizes their broad ecological range and ability to move long distances in response to climatic conditions, water, and productivity.

### Geographic range

The species persists across multiple sub-Saharan African range states. Distribution is fragmented compared with its historical range. IUCN reports that African savanna elephants occur in 23 range states, with a major concentration in the Kavango-Zambezi Transfrontier Conservation Area.

### Diet

African savanna elephants are generalist herbivores. They consume grasses, leaves, bark, twigs, roots, fruit, and other vegetation. Their huge body size demands enormous food intake and makes them major ecosystem engineers.

### Ecology and ecosystem role

Elephants reshape landscapes. Feeding, bark stripping, branch breaking, tree pushing, trail creation, seed dispersal, digging, and water access can alter habitat structure for many other species. Their ecological influence is therefore disproportionate even to their huge body size.

### Social structure

Female society is strongly family-based, with related cows and offspring maintaining long-term social bonds and knowledge networks. Mature males typically leave natal family groups and may travel alone or in looser male associations, while still participating in a complex social world involving dominance, reproductive competition, communication, and memory.

### Reproduction and life history

Elephants have extremely slow life histories. Gestation is roughly 22 months, calves require prolonged care and learning, and reproduction is spaced over years. Long juvenile development allows extensive learning. This slow reproductive rate also makes population recovery difficult after heavy mortality.

### Conservation status

The **African savanna elephant is Endangered** on the IUCN Red List under the separate-species assessment introduced in 2021. IUCN reported a population decrease of at least 60% over the preceding 50 years in that assessment. Major pressures include ivory poaching, habitat conversion, fragmentation, and human-elephant conflict. Some regional populations are stable or increasing, so continental status should not be mistaken for uniform decline at every site.

### Major adaptations

- enormous body size and robust load-bearing skeleton
- continuously growing tusks
- prehensile multifunctional trunk
- huge ears contributing to heat management and communication/display
- thick, highly folded skin
- specialized padded feet
- low-frequency acoustic communication
- exceptional olfactory and chemical information processing
- long memory and socially transmitted knowledge
- flexible habitat use and long-distance movement

### Human interaction

Elephants have deep cultural and economic significance, but coexistence can be difficult where farms, settlements, roads, and elephant movement corridors overlap. Crop loss and dangerous encounters can create conflict, while ivory poaching has caused severe historical mortality. Conservation increasingly requires both anti-poaching work and landscape planning that allows people and elephants to coexist.

### Fun facts

1. A mature African savanna elephant bull can weigh well over **5 tonnes**, making it the largest living land animal.
2. African elephants have **two finger-like projections** at the trunk tip, allowing surprisingly fine manipulation despite the animal’s enormous size.
3. Tusks are actually **modified upper incisors** that continue growing through life.
4. Elephant cheek teeth are replaced in a horizontal conveyor-like sequence rather than erupting vertically like ordinary mammalian replacement teeth.
5. Elephants can communicate using very low-frequency sounds that travel farther than ordinary high-pitched calls.
6. Research summarized by ElephantVoices indicates African savanna elephants can use individually specific, **name-like vocal labels** when addressing other elephants.
7. An elephant’s top-speed gait is biomechanically unusual. Even when moving around 25 km/h, it does not look like the conventional airborne-phase run of a horse or human.
8. The species can alter entire landscapes through feeding, tree damage, trail creation, digging, and seed dispersal.
9. Mature bulls periodically enter **musth**, a reproductive state associated with distinctive chemical signals and intense male competition.
10. Record-class tusks can be enormous, but ABS deliberately avoids using those rare extremes as the default combat specimen.

### Concise site-ready summary

The African savanna elephant (*Loxodonta africana*) is the largest living land animal and one of the most physically dominant terrestrial animals on Earth. A mature bull can weigh around 5.5 tonnes, stand roughly 3.6 meters at the shoulder, and fight with massive tusks, body momentum, feet, and a highly dexterous trunk. Its enormous durability and strength are paired with exceptional memory, social intelligence, smell, and low-frequency communication. It is not especially agile, however, and its huge body creates limits in tight turns and sustained maximum-speed exertion. ABS should treat the African Elephant as an elite terrestrial power with a deliberately uneven profile rather than a universally maxed-out animal.

### Detailed narrative profile

A mature African savanna elephant bull is less a conventional predator than a moving concentration of mass, leverage, sensory awareness, and experience. At approximately five and a half tonnes in the proposed ABS baseline, it outweighs nearly every terrestrial opponent by a margin large enough to change the physics of a fight. Many animals depend on bites, claws, wrestling, or impact to disable opponents near their own mass. Against an elephant, those same tools must penetrate or destabilize a body several times larger while the attacker remains within reach of tusks, feet, and a massive head-and-shoulder complex.

The tusks are the most obvious weapons, but the bull’s real offensive system is integrated. Ivory provides reach and penetration while the neck, head, shoulders, and entire body provide the driving force. In male contests, elephants can assess, shove, spar, and escalate against rivals in their own weight class. That experience is important for ABS because it demonstrates practical control of huge weapons under resistance. The feet and body add crushing danger once an opponent is displaced or downed.

Defense is similarly dominated by scale. Thick skin helps, but the larger advantage is that an attacker must cause disabling trauma through a very deep, robust body while avoiding a counterattack from an animal that may outweigh it by tonnes. This is why a prime bull has few natural predators. The elephant is not armored like a turtle and should not be treated as immune to penetrating injury. Its eyes, trunk, lower limbs, mouth, joints, and other soft tissues remain meaningful targets. The difference is that reaching and exploiting those targets against a resisting adult bull is exceptionally difficult.

The elephant’s weaknesses are equally important to a good game model. A 5.5-tonne animal cannot match a cat, bird, small primate, or agile ungulate in fine evasive movement. It can move quickly in a straight or gently curving path and maneuver impressively for its size, but acceleration and tight redirection remain constrained by inertia. That distinction is why the proposed Agility score is only 35.0 despite a top movement speed around 6.7 m/s.

Its cognition is a different story. African savanna elephants possess long memory, complex social knowledge, flexible communication, individual recognition, and sophisticated chemical and acoustic information systems. A mature bull is not merely a large object with tusks. It is an experienced, perceptive mammal capable of assessing threats and adjusting behavior. That justifies an Intelligence score in the elite tier even though elephants are not predatory strategists in the manner of wolves or orcas.

The final ABS profile should therefore feel extreme but not flattened. Attack and Defense belong near the top of the terrestrial roster. Intelligence is elite. Stamina is high. Agility is modest. Special is meaningful but not overwhelming because the elephant’s greatest advantages are already represented by its ordinary biology: size, force, durability, tusks, senses, and cognition. This separation prevents the same impressive features from being counted repeatedly and keeps future matchups interpretable.

### Proposed future structured fields

The site would benefit from eventually adding these research-backed fields:

- `canonical_sex`: Male
- `canonical_life_stage`: Mature adult
- `mass_range_kg`: 4500–6100 for the chosen male baseline source
- `shoulder_height_range_cm`: 320–400
- `weapon_primary`: Tusks / body force
- `tusk_length_context`: Representative vs exceptional, rather than one misleading maximum
- `armor_type`: Thick skin / body depth, not true armor
- `locomotion_modes`: Terrestrial walking/high-speed gait, swimming
- `combat_environment_bias`: Strongly terrestrial
- `evidence_confidence`: per factual field
- `conservation_status`: Endangered
- `taxonomy_scope`: *Loxodonta africana*, explicitly excluding *L. cyclotis*

---

## 9. Image Asset

- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Chosen candidate:** Real high-resolution photograph of an adult African savanna elephant bull in Kruger National Park
- **Why chosen:** Correct species, explicitly identified as a bull, adult morphology, clear body visibility, high original resolution, reputable Wikimedia Commons provenance
- **Source page URL:** https://commons.wikimedia.org/wiki/File:African_Elephant_(Loxodonta_africana)_bull_(32512353084).jpg
- **Direct-image resolver URL:** https://commons.wikimedia.org/wiki/Special:Redirect/file/African_Elephant_(Loxodonta_africana)_bull_(32512353084).jpg
- **Original dimensions:** 3,648 × 5,124 px
- **Current background:** Natural photographic background, not transparent
- **Target research asset:** `animal-research-for-update/images/african-elephant.png`
- **Required later processing:** Clean subject cutout to genuine alpha transparency, retaining real photographic anatomy and edge detail. Do not generate or redraw body parts.
- **Lightweight provenance note:** Wikimedia Commons identifies the photographer as Bernard DUPONT and the file as CC BY-SA 2.0. Full production provenance/audit should still follow the repository asset pipeline before live use.

The current GitHub text-file connector does not safely upload a binary PNG in this run, so no fake/text-encoded PNG is being committed.

---

## 10. Evidence and source ledger

### A. Animal Diversity Web: *Loxodonta africana*

- **Organization:** University of Michigan Museum of Zoology, Animal Diversity Web
- **URL:** https://animaldiversity.org/accounts/Loxodonta_africana/
- **Supports:** male mass, male shoulder height, sexual dimorphism, tusk maximum context, skin thickness, speed, daily movement, lifespan, broad behavior/life history
- **Key reported values used:** males roughly 4,500–6,100 kg; males roughly 3.2–4.0 m at shoulder; speed up to roughly 24 km/h; wild lifespan roughly 60–70 years; skin up to about 30 mm; tusks can reach exceptional lengths up to about 3.5 m
- **Context:** Species account synthesizing cited zoological literature
- **Confidence:** High for broad ranges; moderate for exact canonical midpoint choices because ABS must reduce variable biology to one representative number
- **Caveat:** Some display labels in the account can be confusing, so measurements were cross-checked rather than copied mechanically.

### B. IUCN: African elephant species now Endangered and Critically Endangered

- **Organization:** International Union for Conservation of Nature
- **URL:** https://iucn.org/news/species/202103/african-elephant-species-now-endangered-and-critically-endangered-iucn-red-list
- **Supports:** separation of *L. africana* and *L. cyclotis*, African savanna elephant Endangered status, long-term decline, primary conservation threats
- **Key finding:** Savanna elephant listed Endangered; population estimated to have decreased at least 60% over 50 years in the assessment
- **Confidence:** Very high for conservation classification and taxonomic treatment in the Red List context

### C. IUCN: Shrinking spaces for the world’s largest land animal

- **Organization:** IUCN
- **URL:** https://iucn.org/news/species-survival-commission/202108/shrinking-spaces-worlds-largest-land-animal
- **Supports:** range-state context, habitat/range pressure, major population concentration, conservation ecology
- **Key finding:** African savanna elephants occur across 23 range states and face poaching plus growing habitat pressure and human-elephant conflict
- **Confidence:** High

### D. Nature: Are fast-moving elephants really running?

- **Publication:** Nature 422, 493–494 (2003)
- **URL:** https://www.nature.com/articles/422493a
- **Supports:** elephant high-speed locomotor biomechanics and a measured top-speed cross-check
- **Key finding:** Asian elephants in the study reached up to 6.8 m/s (~25 km/h) with an unusual gait showing running-like mechanics
- **Context/caveat:** Asian elephants, not African savanna elephants. Used only to validate the plausibility of the ~24 km/h African species-account figure, not as direct species-specific proof.
- **Confidence:** High for elephant biomechanics, moderate as cross-species support for the canonical African speed.

### E. SeaWorld/United Parks: African elephant facts

- **URL:** https://seaworld.org/animals/facts/mammals/african-elephant/
- **Supports:** institutional cross-check for height, body length, weight, lifespan, diet, habitat
- **Key values:** roughly 3–4 m shoulder height, 6–7.25 m length, up to about 70 years
- **Confidence:** Moderate-high as an institutional secondary source
- **Caveat:** Its displayed IUCN status is outdated on the page, so conservation status is taken from IUCN instead.

### F. SeaWorld/United Parks: Elephant physical characteristics

- **URL:** https://seaworld.org/animals/all-about/elephants/characteristics/
- **Supports:** trunk anatomy/function, tusk weights and growth, dentition, foot structure, skin/physical adaptation context
- **Key findings:** trunk estimated to contain around 100,000 muscles/tendons; adult male tusks reported around 50–79 kg each; tusks grow continuously; African trunk tip has two finger-like projections
- **Confidence:** Moderate-high for educational anatomical synthesis

### G. Save the Elephants: Matt

- **URL:** https://savetheelephants.org/news/celebrated-bull-matt-elephant-dies-in-kenya/
- **Supports:** real mature-bull size context and long-distance movement
- **Key finding:** Matt was reported around 10 ft at the shoulder and over six tons; GPS tracking documented very large movements
- **Confidence:** High for the described tracked individual
- **Caveat:** Individual example, not used as the species average.

### H. Save the Elephants: Mac tusk documentation

- **URL:** https://savetheelephants.org/news/end-of-an-era-in-memory-of-mac/
- **Supports:** real large-bull tusk dimensions and weight context
- **Key finding:** Mac’s tusks were reported around 2.47 m and 1.94 m, each over 100 lb
- **Confidence:** High for the documented individual
- **Caveat:** Exceptional individual, explicitly not used as the normal ABS baseline.

### I. ElephantVoices: Elephant Intelligence

- **URL:** https://www.elephantvoices.org/elephant-intelligence
- **Supports:** advanced social cognition, individual recognition, communication, personality variation, name-like vocal labels
- **Confidence:** High as specialist research/education synthesis; individual claims ultimately trace to scientific publications linked by the organization

### J. ElephantVoices: Chemical Communication

- **URL:** https://www.elephantvoices.org/elephant-chemical-communication
- **Supports:** importance of smell/chemical information for family recognition, rivals, mates, food, and danger
- **Confidence:** High as specialist synthesis

### K. Wikimedia Commons image candidate

- **URL:** https://commons.wikimedia.org/wiki/File:African_Elephant_(Loxodonta_africana)_bull_(32512353084).jpg
- **Supports:** primary image candidate only
- **Key metadata:** adult bull identification, Kruger National Park location, 3,648 × 5,124 original resolution; Commons lists CC BY-SA 2.0
- **Confidence:** High for file metadata and candidate suitability

---

## 11. Confidence, conflicts, and caveats

### Weight

**Confidence: High.** Multiple zoological/institutional sources converge on multi-tonne adult males. The exact 5,500.0 kg ABS value is editorially canonical, not a claim of a universal male average.

### Height

**Confidence: High.** The 3.2–4.0 m male range is well supported. The 360.0 cm canonical choice intentionally avoids both small adults and record-scale extremes.

### Length

**Confidence: Moderate.** Elephant length varies with measurement convention. The proposed 660.0 cm is suitable for a site field but should retain a provenance note.

### Speed

**Confidence: Moderate-high.** Around 24 km/h is supported by the African species account and is consistent with measured elephant biomechanics. Internet claims substantially above this should not be adopted without stronger primary evidence.

### Bite force

**Confidence in `0.0` placeholder semantics: High.** Confidence in any actual jaw-force PSI number: Low. No number is better than invented precision.

### Combat ratings

**Confidence: Provisional.** The biological reasoning is strong, but this is animal 1 of 225. Exact decimal battle ratings must remain open to normalization as the roster fills out. The scores are deliberately set as initial anchors, not immutable truth.

---

## 12. Cross-animal calibration notes

This is the **first completed animal** in the 225-profile research overhaul, so no prior completed research file exists for direct comparison. It establishes several useful future anchors:

- **Terrestrial size/raw-power anchor:** African savanna elephant should sit near the top among living land animals.
- **Defense anchor:** Prime adult bulls should strongly outrank ordinary large predators in absolute durability, without equaling shell-armored or vastly larger animals by default.
- **Agility anti-anchor:** High speed-for-size must not become high Agility. The elephant’s 35.0 is a deliberate test of this rule.
- **Intelligence anchor:** Elephants belong in the elite cognition tier, creating a comparison point for great apes, corvids, parrots, dolphins, and orcas.
- **Special separation:** Exceptional overall biology does not automatically imply an extreme Special score.

Future checkpoint audits should specifically compare this profile with African Lion, Gorilla, Hippopotamus, Rhinoceros, Cape Buffalo, Blue Whale, Orca, Great White Shark, Saltwater Crocodile, and Megalodon. If those comparisons reveal compression or an implausible ordering, recalibrate the decimal scores while preserving the evidence-backed factual fields.
