# African Wild Dog Research Overhaul

## Research status

- **ABS roster name:** African Wild Dog
- **Canonical taxon:** African wild dog / painted dog, *Lycaon pictus*
- **Living/extinct:** Living
- **Canonical combat specimen:** Healthy mature adult male, representative rather than record-sized
- **Research confidence:** High for taxonomy, morphology, mass/dimensions, locomotor ecology, social behavior and hunting; moderate for a single canonical lifespan; bite-force PSI intentionally left unset because the literature supports strong relative/biomechanical bite performance but not a standardized in-vivo PSI value
- **Image status:** `SOURCE FOUND - PNG COMMIT PENDING`

---

## 1. Identity and canonical specimen

The African Wild Dog entry represents *Lycaon pictus*, the only living species of *Lycaon*. A 2022 Mammalian Species review reports no recognized subspecies, although eastern and southern populations show geographic and genetic variation. The species is distinct from domestic dogs, wolves, dholes and jackals.

ABS should use a **healthy mature adult male**. Sexual dimorphism is small compared with lions: published synthesis indicates only about a 3–7% sex difference in skeletal and muscular size, while San Diego Zoo notes males are slightly heavier. Using a male follows the project combat-specimen convention without pretending males are dramatically larger.

African wild dogs are lightly built cursorial hypercarnivores. Their key combat identity is not individual brute force. It is the combination of efficient slicing/gripping dentition, exceptional running performance, stamina, large ears and useful senses, and highly developed pack behavior. Individual ABS ratings must not grant extra pack bodies, but tactics and social cognition can reflect the animal's evolved behavioral repertoire.

---

## 2. Physical measurements

### Mass

The 2022 Mammalian Species synthesis gives **17–36 kg** for the species. San Diego Zoo gives **18–34 kg**, with males slightly heavier. Recent carnivore-guild literature commonly uses about **22 kg** as a representative species mass.

**ABS representative recommendation: 25.0 kg.**

This is a fit adult male well inside the supported range without using a 34–36 kg upper-end individual as typical.

### Shoulder height

Mammalian Species gives **61–78 cm** at the shoulder; San Diego Zoo gives approximately **61–76 cm**.

**ABS representative recommendation: 70.0 cm.**

### Body length

Mammalian Species gives **76–112 cm head-body length**, plus a **30–41 cm tail**. San Diego Zoo gives a broader 84–141 cm length range, likely reflecting differing measurement conventions.

**ABS representative head-body recommendation: 100.0 cm.**

The site should eventually distinguish head-body length from total length rather than mixing conventions.

### Speed

High-resolution GPS/inertial research is unusually strong for this species. Hubel and colleagues recorded a maximum of approximately **19 m/s**, and a later long-term energetics study reported a nearly identical upper limit of **1,148 m/min**, or about **19.1 m/s**. Older field observations suggested at least 1,020 m/min.

**ABS top-speed recommendation: 19.0 m/s** (68.4 km/h).

Unlike many internet speed claims, this value has modern instrumented field support.

### Endurance and travel capacity

African wild dogs are built for sustained movement. Instrumented studies found mean daily movement around **13–14 km**, with individual days up to **42.9 km**. Broader literature documents packs traveling up to roughly **50 km/day**, and dispersers can cover more than 50 km in 24 hours. Their hunts can involve repeated high-speed chases, and some populations use longer pursuits.

Anatomical work supports cursorial specialization: elongated limbs, reduced wrist-rotation musculature favoring stability, and reduction/loss of the first digit are consistent with efficient forward running.

### Lifespan

San Diego Zoo reports a median managed-care life expectancy of about **10 years**. Animal Diversity Web likewise gives approximately **10 years** as life expectancy. Wild survival varies substantially with disease, competition and human-caused mortality.

**ABS representative recommendation: 10.0 years.**

### Bite force and skull mechanics

African wild dogs have a robust, short/deep hypercarnivorous skull and specialized dentition. A 2024 anatomical study describes their bite force as among the highest reported for carnivorans relative to body size and identifies jaw architecture that improves mechanical advantage. Earlier biomechanical work likewise places their relative canine bite force unusually high among living Carnivora.

However, these sources do **not** establish a standardized in-vivo pressure value in PSI. Bite force in newtons, bite-force quotient, modeled force and pressure are not interchangeable.

**ABS `bite_force_psi` recommendation: 0.0 pending a defensible standardized PSI source/conversion.**

This is a data-integrity choice, not a claim that the bite is weak.

### Dentition and weapons

Mammalian Species reports a large robust skull over 180 mm long, heavily built zygomatic arches, and teeth specialized for holding and slicing rather than grinding. The species is a hypercarnivore with reduced posterior molars and carnassial specializations. It attacks prey with repeated bites, tearing and gripping rather than relying on claws as a primary weapon.

### Feet and limbs

*Lycaon pictus* is unusual among canids in having four functional toes on each foot and lacking the typical first digit/dewclaw. Peer-reviewed anatomical research links this digit reduction and forelimb stabilization to cursorial locomotion. This improves running economy and stride specialization but reduces the manipulative/grappling versatility available to some other carnivores.

### Hide and protection

There is no meaningful armor, shell or thick protective hide. The body is lean and lightly built for locomotion. Sparse short fur and lack of an undercoat provide little mechanical defense. Defense therefore depends mainly on avoidance, mobility, group vigilance and the ability to keep moving rather than absorbing heavy attacks.

---

## 3. Canonical proposed factual fields

| Field | Proposed value | Research basis |
|---|---:|---|
| `weight_kg` | **25.0** | Representative adult male within 17–36 kg synthesis range |
| `height_cm` | **70.0** | Representative shoulder height within 61–78 cm range |
| `length_cm` | **100.0** | Representative head-body length within 76–112 cm synthesis range |
| `speed_mps` | **19.0** | Instrumented field maximum approximately 19 m/s |
| `lifespan_years` | **10.0** | Institutional and ADW life-expectancy guidance |
| `bite_force_psi` | **0.0** | Strong bite supported, but no defensible standardized PSI measurement established |
| `size_score` | **28.0** | Medium-small carnivore on the full 225-animal absolute scale |

### Suggested categorical fields

- `type`: Mammal
- `size`: Medium
- `habitat`: Savanna, grassland, open woodland, scrub and some montane savanna
- `isNocturnal`: false as a strict label; activity is strongly crepuscular with some nocturnal activity
- `isSocial`: true
- `diet`: Carnivore / hypercarnivore

---

## 4. Combat biology

### Primary and secondary weapons

1. **Hypercarnivore bite:** Robust jaws, strong mechanical advantage, canines for gripping and carnassials for slicing flesh.
2. **Repeated tearing attacks:** Wild dogs can rapidly bite and tear exposed soft tissue while maintaining movement around prey.
3. **Body mobility:** Speed and endurance let the animal create repeated attack opportunities rather than committing to a static grapple.

Claws are not a major killing system. Unlike a lion, the African wild dog cannot rely on powerful forelimb grappling and retractile claws to pin a similarly sized opponent.

### Offensive mechanics

The species is optimized for moving predation. Against prey, wild dogs commonly rush, chase, bite hindquarters/flanks and exploit openings. The Mammalian Species review describes disembowelment as a common kill mechanism and notes that they can also use a throat/stranglehold on some prey. Packs allow multiple attack angles, but an individual ABS combatant must be scored for what one animal can physically deliver.

The bite is unusually effective for a canid of this body mass, but absolute damage remains far below a 190 kg lion or multi-tonne elephant. This is exactly where ABS absolute scaling matters: impressive relative bite mechanics should not erase a 7.6-fold mass gap with the canonical lion.

### Defense and durability

Protection is poor. A 25 kg wild dog has no armor and is subordinate to larger African carnivores. Lions can kill wild dogs, and spotted hyenas can steal kills or physically dominate individuals. The lean running build does not provide the thick muscular buffer of a lion.

Toughness is better than Protection because wild dogs live active, high-mileage lives and can remain functional through routine physical stress. Still, major penetrating or crushing trauma from a large predator is a severe threat.

### Locomotion and maneuverability

This is a major strength. Instrumented field studies support ~19 m/s top speed, repeated accelerations and many high-speed chases. Their long limbs and stabilized forelimbs favor efficient forward locomotion. They are fast and capable of rapid pursuit changes, but their specialization for cursorial running means they are not necessarily as acrobatically maneuverable as smaller cats or mustelids.

### Stamina and endurance

Stamina is elite among terrestrial predators on the ABS roster. Wild dogs routinely cover long daily distances, can make repeated high-speed hunting attempts, and have anatomical adaptations associated with endurance running. The old stereotype that every hunt is a single many-kilometer persistence chase is too simplistic: Botswana woodland research found many short, opportunistic chases. The important point is that they can repeat those costly efforts and maintain high daily movement.

### Senses

Large rounded ears provide strong auditory coverage, while scent is central to territorial and social communication. Vision is sufficient for high-speed pursuit and prey tracking. Their sensory package is strong, although not an extreme specialist system like echolocation or electroreception.

### Intelligence, tactics and social coordination

African wild dogs have sophisticated social organization, cooperative breeding, pack-level resource sharing, territorial communication and flexible hunting behavior. Packs can alter hunting strategy with habitat and prey. In mixed woodland, instrumented studies found opportunistic simultaneous pursuits rather than elaborate synchronized single-prey chases, which is important evidence against romanticizing coordination.

ABS should reward tactical flexibility and social cognition without pretending an individual receives teammates. Their Intelligence score can exceed many solitary carnivores in coordination-relevant behavior while remaining well below elephants, great apes, cetaceans and the strongest problem-solving birds.

### Hunting behavior

Diet is dominated by mammals, especially antelopes. Preferred prey varies geographically. Research documents impala, puku, gazelles, nyala, kudu and smaller antelopes, with group hunting allowing prey larger than one dog's body mass. Northern Kenyan packs can also subsist largely on small dik-dik, showing considerable ecological flexibility.

A 2022 species synthesis notes that groups focus more often on larger adult prey while individuals more often pursue immature prey. Larger packs also defend kills better against hyenas.

### Intraspecific fighting

Inter-pack encounters can escalate to chases and fights, especially between same-sex animals, and larger packs usually have the advantage. However, a Botswana study summarized in Mammalian Species found injuries in fewer than 15% of observed pack encounters. This supports real combat experience but not a caricature of constant lethal aggression.

### Predator defense and competitors

Lions and spotted hyenas are major competitors. Recent literature characterizes the wild dog as a subordinate carnivore in the African large-carnivore guild. Lions can directly kill them, while hyenas compete for food and can kleptoparasitize kills. Wild dogs compensate through mobility, spacing, pack vigilance and numbers rather than individual dominance.

### Ferocity

They are committed predators and can attack prey larger than themselves, but risk management matters. Literature shows avoidance of especially dangerous prey such as adult elephants, rhinos, hippos, giraffes and several heavily armed ungulates. Ferocity should therefore be strong but below animals whose normal adult combat includes frequent close-range contests with equally dangerous opponents.

### Environmental strengths

- Open grassland, savanna and woodland mosaics with room to run
- Long pursuits or repeated chase opportunities
- Dawn/dusk conditions matching natural activity peaks
- Large spaces where mobility and endurance can be exploited
- Group ecological context, though ABS individual fights do not add pack members

### Environmental limitations

- Confined spaces that remove running and circling room
- Deep water
- Vertical/climbing environments
- Static head-on grapples against much heavier opponents
- Situations where the opponent cannot be worn down or repeatedly repositioned against

### Major weaknesses

- Low absolute body mass
- No armor
- No specialized grappling forelimbs or retractile claws
- Main weapon requires close bite range
- Much of the species' natural large-prey success is pack-enabled
- Vulnerable to lions and larger hyenas in direct physical confrontations
- Disease outbreaks such as rabies and canine distemper can devastate packs, though this is ecological rather than immediate battle weakness

### Good matchup archetypes

- Similar-sized terrestrial animals with weaker bite mechanics or lower endurance
- Opponents that fatigue quickly and cannot force a static engagement
- Smaller prey lacking armor or dangerous long-reach weapons
- Slow opponents that can be repeatedly approached and disengaged from

### Bad matchup archetypes

- Large felids and hyenas that combine far greater mass with strong close-range weapons
- Armored or shelled animals that cannot be efficiently opened by slicing bites
- Large bovids and other horned/hoofed animals in a one-on-one fight
- Megafauna such as elephants, rhinos and hippos
- Aquatic specialists in deep water

---

## 5. Proposed ABS substats

These ratings use the absolute full-roster scale. They are calibrated against the completed African Lion and African Elephant profiles, not against canids alone.

| Substat | Score | Justification |
|---|---:|---|
| **Size** | **28.0** | ~25 kg adult male, far below the 190 kg lion and 5,500 kg elephant anchors. |
| **Raw power** | **32.0** | Strong for its mass but modest absolute muscular/mechanical force across the roster. |
| **Weaponry** | **48.0** | Excellent hypercarnivore bite and slicing dentition, but lacks claws, horns, venom or heavy crushing weapons. |
| **Protection** | **22.0** | Lean body, sparse coat, no armor or shell. |
| **Toughness** | **39.0** | Athletic and resilient, but a major hit from a large carnivore or hoofed animal can be decisive. |
| **Speed** | **76.0** | Instrumented ~19 m/s maximum is genuinely fast across terrestrial animals. |
| **Maneuverability** | **68.0** | Excellent running control and pursuit repositioning, though cursorial specialization is less acrobatic than top small-cat specialists. |
| **Endurance** | **82.0** | Repeated chases, long daily movement and cursorial anatomy support elite terrestrial predator endurance. |
| **Tactics** | **72.0** | Flexible prey selection, pack communication, opportunistic hunting and group decision behavior. |
| **Senses** | **68.0** | Strong hearing, scent communication and pursuit vision without an extreme specialist sensory organ. |
| **Ferocity** | **68.0** | Will attack substantial prey and engage rival packs, but normally avoids the most dangerous megafauna and is subordinate to larger carnivores. |
| **Abilities** | **52.0** | Cursorial specialization plus unusually efficient hypercarnivore jaw mechanics create meaningful matchup tools, but no exotic toxin/electric/armor mechanism. |

---

## 6. Proposed six headline ABS ratings

| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **47.0** | Highly effective slicing/gripping bite for a 25 kg predator, but absolute damage is far below the lion and megafauna. |
| **Defense** | **31.0** | Mobility helps avoid damage, but physical protection and mass are low. |
| **Agility** | **69.0** | Fast acceleration, pursuit control and efficient repositioning; top speed is not simply copied into this score. |
| **Stamina** | **82.0** | One of the species' clearest strengths, supported by instrumented repeated-chase and daily-distance data plus cursorial anatomy. |
| **Intelligence** | **64.0** | Complex social system, communication, flexible hunting and cooperative breeding support strong tactical cognition without approaching great-ape/cetacean ceilings. |
| **Special** | **54.0** | Four-toed cursorial specialization and exceptional relative jaw mechanics are unusual and useful, but less matchup-transforming than venom, electricity or extreme armor. |

### Calibration sanity check

- **Versus African Lion:** Wild dog is far lower in Attack, Defense, Size and Raw Power; slightly higher in top running speed; decisively higher in Stamina; comparable but somewhat lower in overall individual combat Intelligence/Tactics. A lone wild dog should not be close to a mature male lion in direct combat power.
- **Versus African Elephant:** Wild dog is negligible in absolute power, size and defense, while legitimately exceeding the elephant in speed, maneuverability and pursuit endurance.
- These gaps preserve the project's absolute-scale rule while allowing category specialists to excel where biology genuinely supports it.

---

## 7. Abilities and traits

### Special abilities

1. **Relentless Pursuit** — Long-limbed cursorial anatomy, stabilized forelimbs and exceptional repeat-chase capacity allow sustained pressure and repeated high-speed engagements. In a matchup, this improves the ability to disengage, reposition and exploit fatigue.
2. **Shearing Bite** — Hypercarnivore skull geometry, strong mechanical advantage and specialized carnassial dentition produce efficient gripping and flesh-slicing performance for the animal's size.

### Unique traits

1. **Four-Toed Runner** — *Lycaon pictus* is uniquely specialized among living canids with four functional toes on each foot and loss of the typical first digit, associated with cursorial efficiency.
2. **Painted Pack Code** — Every individual has a distinctive mottled coat, while the species uses rich vocal, scent and social communication within an unusually cooperative pack system.

Exactly two abilities and exactly two traits are proposed.

---

## 8. Expanded profile content

### Habitat

African wild dogs occupy grasslands, savannas, open woodlands, scrub and some montane savanna. Historically they occupied much of sub-Saharan Africa except the densest rainforest and driest desert. Modern populations often require enormous landscapes because packs range widely and occur at low density.

### Geographic range

The range is now highly fragmented. Major remaining populations are concentrated in southern and eastern Africa, including Botswana, Tanzania, Zimbabwe, South Africa, Mozambique, Zambia, Namibia and Kenya, with smaller or uncertain populations elsewhere.

### Diet

They are hypercarnivores. Common prey includes impala, puku, gazelles, nyala, kudu and other antelopes. Diet changes strongly with local prey communities. Some populations rely heavily on small antelopes such as dik-dik, while packs elsewhere take larger ungulates and juveniles of species such as wildebeest.

### Ecology

African wild dogs are mobile, low-density predators with large home ranges. Mammalian Species reports annual ranges spanning roughly 150 to 3,900 km² across studies. They compete strongly with lions and spotted hyenas and often alter space use in response to larger carnivores.

### Social structure

Packs are highly cooperative. Typically one dominant breeding pair produces most pups, while other members hunt, guard, provision and regurgitate food for pups and breeding adults. Published pack sizes vary widely, with groups of several to more than 20 adults/yearlings documented. Social cooperation is central to survival and reproduction.

### Reproduction and life history

Gestation is roughly **71–73 days** in the Mammalian Species synthesis. Average litters are about **10 pups**, with published ranges commonly around 6–16 and broader reports reaching higher. Pups remain at a den early in life and are provisioned by pack members. Cooperative care is unusually important because a pack must balance hunting with pup guarding.

### Conservation status

The species is **Endangered**. The 2022 Mammalian Species review summarized approximately **6,700 individuals** and about **1,400 mature adults** from the then-current IUCN assessment. Major threats include habitat fragmentation, conflict with humans, road mortality, disease transmitted from domestic dogs, and competition with larger carnivores. Current conservation organizations still describe fewer than roughly 7,000 remaining across Africa.

### Major adaptations

- Long limbs and digit reduction for efficient cursorial locomotion
- Robust hypercarnivore skull and slicing dentition
- Large ears and strong social communication
- Cooperative hunting and food sharing
- Flexible prey selection across different African ecosystems
- Large-range movement capacity

### Human interaction

Wild dogs historically suffered severe persecution and remain vulnerable outside protected areas. Research from northern Kenya indicates livestock predation can remain low when wild prey persists, but conflict increases where prey is depleted. Conservation increasingly depends on connected landscapes, vaccination/disease management, community tolerance and reducing road/human mortality.

### Fun facts

- Each African wild dog's coat pattern is individually distinctive, functioning almost like a visual fingerprint.
- It is the only living species in the genus *Lycaon*.
- It has four functional toes on each foot rather than the typical canid arrangement with a first digit/dewclaw.
- Instrumented field studies have measured speeds around **19 m/s**, about **68 km/h**.
- Packs can travel more than **40 km in a day**, and dispersing animals have recorded even longer daily movements.
- Litter sizes are exceptionally large for a carnivore, averaging around ten pups in major species accounts.
- Pack members regurgitate food for pups and other dependent packmates.
- Modern tracking shows that not all wild-dog hunts are classic long-distance cooperative chases; woodland packs can succeed through many short, opportunistic pursuits.

### Concise site-ready summary

The African wild dog (*Lycaon pictus*) is a 25 kg cursorial hypercarnivore built around speed, stamina, slicing bite mechanics and extraordinary social cooperation. A healthy adult can reach about 19 m/s and packs routinely cover long distances while hunting antelope across African savannas and woodlands. Individually it lacks the mass, armor and grappling weapons of larger predators such as lions, but its endurance, pursuit control and efficient carnassial bite make it a dangerous specialist. The species is Endangered and survives mainly in fragmented populations across eastern and southern Africa.

### Detailed narrative profile

African wild dogs are a useful test of whether ABS can separate proportional impressiveness from absolute battle power. At roughly 25 kg, an adult is much smaller than the site's large felids and tiny beside megafauna. Giving it lion-like Attack or Defense because it is an exceptionally successful predator would violate the absolute scaling rule. Its body simply cannot deliver or absorb the same absolute forces as a 190 kg male lion.

Where the wild dog legitimately climbs the roster is locomotion. Modern collars and inertial sensors have measured speeds around 19 m/s, and long-term field studies show repeated high-speed chases layered on top of large daily travel distances. Anatomical studies provide a mechanical explanation: long cursorial limbs, reduced wrist-rotation musculature and loss of the first digit favor stable, efficient forward running. This is not merely a fast animal. It is a predator whose entire locomotor system is tuned to repeatedly cover ground.

The skull is similarly specialized. *Lycaon* is a hypercarnivore with a robust cranium, strong mechanical advantage and carnassial dentition suited to holding and slicing. Recent anatomical work reinforces older biomechanical findings that its bite performance is exceptional relative to body size. ABS should reward that through Weaponry and a strong Attack for its mass, but should not convert relative bite-force claims into an invented PSI number or inflate the animal to large-felid absolute damage levels.

Social behavior is the other defining feature. Packs share food, cooperatively raise pups, communicate extensively and alter hunting behavior with habitat and prey. Yet field instrumentation has corrected an oversimplified popular story: in woodland habitats, pack success can emerge from multiple opportunistic short pursuits and food sharing rather than perfectly synchronized relay hunting. That makes the species more interesting, not less. Its strength is behavioral flexibility and additive group opportunity, not fictional hive-mind coordination.

In a one-on-one ABS fight, the wild dog loses one of its largest ecological advantages: numbers. A lone animal remains fast, persistent and dangerous with its teeth, but it is physically subordinate to a lion, spotted hyena or many armed ungulates. Its best individual strategy is movement, repeated engagement and exploitation of fatigue, not a frontal wrestling match. This profile therefore places its Stamina among its highest ratings while keeping Size, Defense and Raw Power appropriately low on the full 225-animal scale.

### Useful future structured fields

- `head_body_length_cm` and `tail_length_cm` separately
- `bite_force_newtons` with methodology and bite position
- `daily_travel_km_typical` and `daily_travel_km_max_observed`
- `measured_top_speed_mps` with measurement method
- `pack_size_typical_range`
- `conservation_status`
- `population_estimate_year`
- `locomotor_mode`
- `primary_weapon_type`
- `source_confidence` per factual field

---

## 9. Image Asset

- **Target local asset:** `animal-research-for-update/images/african-wild-dog.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Selected source page:** https://commons.wikimedia.org/wiki/File:African_wild_dog_lycaon_pictus.jpg
- **Original image resolver:** https://commons.wikimedia.org/wiki/Special:Redirect/file/African%20wild%20dog%20lycaon%20pictus.jpg
- **Source dimensions:** 3002 × 2001 px JPEG
- **Specimen/context:** Real wild adult male *Lycaon pictus* photographed in the Okavango Delta, Botswana; Commons categorizes the subject as male and shows a side/walking view.
- **Why selected:** High-resolution real photograph, correct species, adult male, clear side-body visibility and suitable starting material for a later transparent cutout.
- **License noted by source:** CC BY-SA 3.0. Final production pipeline should preserve required attribution and transformation/share-alike obligations.
- **PNG note:** Current GitHub connector writes UTF-8 text files and cannot safely commit the binary cutout. Do not create a fake `.png`. Later asset tooling should download the original, remove the background non-generatively, visually inspect edges/anatomy, then commit/promote the actual transparent PNG.

---

## 10. Evidence and source ledger

| Source | URL | Supports | Reported finding / context | Confidence / caveat |
|---|---|---|---|---|
| Bucci, Nicholson & Krausman, *Mammalian Species* (2022), “Lycaon pictus (Carnivora: Canidae)” | https://academic.oup.com/mspecies/article/54/1017/seac002/6565923 | Taxonomy, dimensions, range, morphology, ecology, diet, reproduction, conservation, social behavior | 76–112 cm head-body, 30–41 cm tail, 61–78 cm shoulder, 17–36 kg; no recognized subspecies; Endangered; broad ecological synthesis | **High.** Peer-reviewed species account synthesizing primary literature. |
| Hubel et al., *Nature Communications* (2016), “Energy cost and return for hunting in African wild dogs and cheetahs” | https://www.nature.com/articles/ncomms11034 | Speed, repeated chases, daily movement, hunting energetics | Instrumented 1,119 high-speed chases; mean daily movement ~13 km; days up to 42.9 km; maximum ~19 m/s | **High.** Direct GPS/inertial field measurements. |
| Creel et al., recent long-term energetics analysis (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC11831116/ | Speed, pursuit length, prey, energetic ecology | Upper speed limit ~1,148 m/min; high-speed chases often >500 m and sometimes kilometers; long-term observed kills | **High.** Peer-reviewed field dataset; reinforces instrumented speed. |
| Hartstone-Rose et al. / anatomical study, *Anatomical Record* (2024) | https://pmc.ncbi.nlm.nih.gov/articles/PMC13431924/ | Jaw musculature, hypercarnivore adaptations, bite mechanics | Robust jaw architecture and mechanical advantage; bite force among highest relative reports for carnivorans | **High** for anatomy; does not provide a standardized ABS-ready PSI value. |
| Hartstone-Rose et al., cursorial forelimb anatomy (2020) | https://pmc.ncbi.nlm.nih.gov/articles/PMC7482643/ | Four-toed condition, limb anatomy, endurance-running adaptation | Reduced wrist rotators/stabilization and digit reduction associated with cursorial specialization | **High.** Peer-reviewed anatomical study. |
| San Diego Zoo Wildlife Alliance, Painted Dog | https://animals.sandiegozoo.org/animals/painted-dog-african-hunting-dog | Institutional size/lifespan cross-check, litter/fun facts | 18–34 kg, 61–76 cm shoulder, ~10-year managed-care median; males slightly heavier | **High** institutional secondary source. |
| Animal Diversity Web, *Lycaon pictus* | https://animaldiversity.org/accounts/Lycaon_pictus/ | Reproduction, life expectancy, cooperative breeding | ~10-year life expectancy; dominant breeding pair; cooperative breeding | **Moderate-high** university-curated synthesis; older account. |
| Woodroffe et al., *Journal of Mammalogy* (2007) | https://academic.oup.com/jmammal/article-abstract/88/1/181/926501 | Diet flexibility and pack hunting | Northern Kenya packs obtained ~70% prey biomass from dik-dik despite typical large-prey specialization | **High.** Peer-reviewed ecological study. |
| Hall et al., *Journal of Mammalogy* (2021) | https://academic.oup.com/jmammal/article-abstract/102/5/1211/6360745 | Modern diet variation | 73 individuals from 40 packs; prey composition varies strongly across Kruger landscapes | **High.** Peer-reviewed multi-pack study. |
| Hubel et al., *Nature Communications* (2016), additive opportunistic capture | https://www.nature.com/articles/ncomms11033 | Hunting tactics | Woodland pack showed many short pursuits, 15.5% individual kill rate, high group feeding through sharing; no high-level chase collaboration observed | **High.** Instrumented pack study; prevents overclaiming coordination. |
| Food-resource competition study (2024 PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC10944706/ | Competitive hierarchy | Wild dogs ~22 kg and subordinate to lions and spotted hyenas; direct killing, exclusion and kleptoparasitism documented | **High.** Peer-reviewed ecological study. |
| Wikimedia Commons, Charles J. Sharp male Okavango photo | https://commons.wikimedia.org/wiki/File:African_wild_dog_lycaon_pictus.jpg | Image candidate | 3002×2001 real photograph, adult male category, Okavango Delta, CC BY-SA 3.0 | **High** for image provenance; transparent cutout still pending. |

### Evidence conflicts and resolutions

1. **Length:** Sources use different length conventions. ABS uses **100.0 cm head-body** and should later split tail length into its own field.
2. **Mass:** Supported ranges reach 34–36 kg, but **25.0 kg** is selected as a representative healthy adult male rather than an upper extreme.
3. **Hunting style:** Older descriptions emphasize long cooperative persistence chases. Modern instrumentation shows strong habitat variation and many short opportunistic chases. The profile therefore describes both rather than treating one stereotype as universal.
4. **Bite force:** Strong relative/biomechanical performance is well supported. A standardized PSI number is not. Keep `bite_force_psi: 0.0` until the schema can store a defensible force measurement and method.
5. **Sex:** Male chosen under ABS convention, but dimorphism is small. Ratings should not imply lion-like male/female size divergence.

---

## 11. Cross-animal calibration notes

### African Wild Dog vs African Lion

The completed African Lion profile uses a 190.0 kg male with Attack 70.0, Defense 54.0, Agility 72.0, Stamina 48.0 and Intelligence 66.0. The wild dog at 25.0 kg must remain dramatically lower in absolute Attack/Defense. Its evidence-supported advantage is Stamina, and it also has a higher measured top running speed. Agility remains close but slightly below the lion because the wild dog's cursorial specialization prioritizes efficient forward pursuit while the lion has exceptional pouncing, grappling and close-range body control.

### African Wild Dog vs African Elephant

No physical-power category should be close. The wild dog can outrun, outturn and outlast the elephant in pursuit-style locomotion, but cannot meaningfully contest elephant raw power, durability or weapon force.

### Future normalization flags

Revisit this profile after Gray Wolf, Dhole, Spotted Hyena, Cheetah, Leopard, Jaguar, Siberian Tiger and other medium carnivores are researched. Key checks:

- Stamina 82.0 should remain near the top of terrestrial pursuit predators without automatically becoming the dataset ceiling.
- Attack 47.0 must remain well below large felids/hyenas but above many similar-mass animals with weaker killing adaptations.
- Special 54.0 should not inflate merely because digit reduction is unusual; it reflects real cursorial and jaw specializations, not a magical power.
- Intelligence 64.0 should be checked against wolves/dholes and against higher-cognition anchors such as great apes, elephants, corvids and cetaceans.

---

## Completion checklist

- [x] Exact taxon and canonical adult specimen defined
- [x] Adult male convention applied with dimorphism caveat
- [x] Physical measurements researched from authoritative/peer-reviewed sources
- [x] Canonical factual fields proposed
- [x] Unsupported PSI bite-force claim rejected
- [x] Combat biology and environmental limitations covered
- [x] Full ABS substats scored to one decimal place
- [x] All six headline ratings scored to one decimal place
- [x] Exactly 2 special abilities
- [x] Exactly 2 unique traits
- [x] Expanded ecology, conservation, life history and fun facts included
- [x] Site-ready summary and detailed profile included
- [x] Source ledger with direct URLs included
- [x] Cross-animal calibration against completed profiles included
- [x] Real high-resolution adult-male image source selected
- [x] Binary PNG not fabricated when connector cannot safely upload it
