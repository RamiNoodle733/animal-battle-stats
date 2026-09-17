# Axolotl Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Axolotl / Mexican axolotl
- **Scientific name:** *Ambystoma mexicanum* (Shaw & Nodder, 1798)
- **Family:** Ambystomatidae
- **Status:** Living species; wild population Critically Endangered
- **Exact ABS animal represented:** *Ambystoma mexicanum*, the permanently aquatic, paedomorphic salamander endemic to the Valley of Mexico, not another neotenic *Ambystoma* or a mudpuppy.
- **Canonical specimen:** Representative healthy sexually mature adult male in wild-type pigmentation, approximately 0.20 kg and 25 cm total length. Male is used for consistency with the site's combat-specimen convention, although strong evidence for a large combat-relevant sex-size advantage was not found.
- **Sexual dimorphism:** Mature males develop a more swollen cloacal region; females often have broader bodies, especially when gravid. Sex differences are much less combat-relevant than in strongly dimorphic mammals or reptiles.
- **Population/morph note:** Wild axolotls are dark, mottled animals. Leucistic, albino, golden and other familiar captive morphs are products of captive stocks and should not be mistaken for the representative wild phenotype.

## 2. Physical measurements

### Mass

The Marine Biological Laboratory reports axolotls at **2.11-8 oz (about 60-227 g)**, while the University of Kentucky Ambystoma resource notes adults can weigh **as much as 300 g**. SeaWorld likewise gives up to 300 g. These maxima should not become the ordinary baseline.

- **Canonical adult mass:** **0.20 kg (200 g)**
- **Credible adult context:** roughly **0.06-0.30 kg**, with husbandry, age, sex and body condition contributing substantial variation
- **Confidence:** Moderate-high for scale; moderate for a single representative mass

### Length

MBL and National Geographic report a maximum around **12 in / 30 cm**. University of Kentucky states adults can reach 30 cm or more. Zoological sources often give approximately 20-30 cm as the normal adult scale, while some captive individuals exceed this.

- **Canonical total length:** **25.0 cm**
- **Representative adult range:** approximately **20-30 cm**
- **Exceptional/captive context:** some sources report larger individuals, but these are not used as the representative baseline
- **Confidence:** High

### Height

Axolotls are low-bodied aquatic salamanders and standard zoological sources do not use standing height as a meaningful species metric. Assigning a shoulder height from aquarium photographs would create false precision.

- **Canonical `height_cm`:** **0.0** (not a useful/defensible standard field)

### Speed and locomotion

Axolotls swim by lateral undulation of the tail and body, with limbs used for slow bottom walking and fine positioning. No authoritative standardized maximum-swimming-speed measurement suitable for the site's `speed_mps` field was found in this run. Feeding studies quantify rapid cranial movements, not whole-animal maximum travel speed.

- **Canonical `speed_mps`:** **0.0** pending a defensible species-specific maximum
- **Combat interpretation:** capable of short aquatic repositioning, but not a high-speed pursuit predator

### Lifespan

MBL and National Geographic give **10-15 years in the wild**. Captive longevity varies among institutions and husbandry conditions.

- **Canonical lifespan:** **12.0 years**
- **Supported context:** **10-15 years** in major reference sources
- **Confidence:** Moderate-high

### Bite, teeth and feeding apparatus

Axolotls are suction-feeding predators. A 2025 peer-reviewed study used high-speed video to quantify adult, juvenile and larval suction-feeding kinematics and found strong size effects on the feeding motion. Their broad head and rapidly expanding buccal cavity draw small prey into the mouth. Small teeth help retain prey, but this is not a crushing mammalian or crocodilian bite system.

No defensible species-specific bite-pressure PSI measurement was found.

- **Canonical `bite_force_psi`:** **0.0**
- **Primary offensive mechanism:** rapid suction capture followed by small oral teeth retaining/swallowing prey
- **Confidence:** High for feeding mechanism; low for any numerical bite force

### Gills, skin and regeneration

Adults retain three pairs of conspicuous external gill stalks and a finned tail. Respiration also involves skin and lungs. The exposed gills are effective respiratory structures but are vulnerable external tissue rather than armor.

Axolotls are exceptionally regenerative vertebrates. MBL summarizes functional regeneration of limbs, spinal cord and portions of brain and heart without the scar response typical of mammals. Peer-reviewed experimental work demonstrates complete limb regeneration and substantial spinal-cord/tail regeneration. This is biologically extraordinary but **not instant combat healing**: regeneration occurs over days to weeks and therefore should not be scored as immediate damage negation.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 0.2,
  "height_cm": 0.0,
  "length_cm": 25.0,
  "speed_mps": 0.0,
  "lifespan_years": 12.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **0.2 kg:** representative robust adult inside authoritative 60-227 g ranges and below reported 300 g maxima.
- **0.0 cm height:** standing height is not a meaningful standardized metric for this aquatic salamander.
- **25.0 cm length:** center of the well-supported 20-30 cm adult scale.
- **0.0 m/s:** no strong standardized maximum-swimming-speed measurement located.
- **12.0 years:** central representative value within the commonly cited 10-15 year lifespan.
- **0.0 PSI:** suction feeding is well established, but a reliable species-specific bite-pressure measurement is not.

## 4. Combat biology

### Primary and secondary weapons

The mouth is the only meaningful offensive tool. Axolotls ambush small aquatic prey and use rapid suction to pull worms, insect larvae, crustaceans, mollusks and small fish toward the mouth. Small teeth retain prey. The limbs lack dedicated talons, claws or striking structures, and the tail is primarily locomotor.

### Offensive mechanics

The attack sequence is short-range and prey-capture oriented: detect nearby prey, orient the broad head, open the mouth and expand the buccal cavity rapidly to generate suction. This can be highly effective against tiny aquatic prey but has negligible absolute stopping power against medium or large roster animals.

### Defensive adaptations and durability

Axolotls have no armor, shell, thick hide, spines or major deterrent weapon. Soft skin and exposed external gills make them physically vulnerable. Their extraordinary regenerative biology improves long-term recovery from survivable tissue loss, but it does not prevent acute incapacitation, predation, blood loss or lethal damage during a short encounter.

### Locomotion and maneuverability

A laterally compressed tail and continuous fin provide aquatic propulsion and turning control. Limbs permit bottom walking and stabilization. The animal is adapted to still or slow freshwater rather than open-water pursuit. It can turn and reposition at small scale, but it is not a fast, acrobatic swimmer.

### Endurance/stamina

Axolotls are ectothermic sit-and-wait or opportunistic aquatic predators rather than sustained high-output athletes. Their normal ecology favors low energetic expenditure. They can remain active for feeding and routine movement but lack evidence for elite sustained locomotor output.

### Senses

The sensory system is appropriate for an aquatic salamander. Vision, olfaction/chemical sensing and mechanosensory lateral-line information help detect prey and environmental movement. Laboratory work also demonstrates taste-quality discrimination. These senses are useful at close range but do not support a high full-roster sensory score.

### Intelligence, learning and tactics

Axolotls can learn feeding associations and discriminate sensory stimuli, but there is no evidence for the flexible tactical cognition, complex social coordination or problem-solving repertoire seen in high-scoring birds, primates or many social carnivores. Their combat behavior is comparatively simple.

### Hunting behavior

They are carnivorous aquatic predators of worms, insect larvae, small crustaceans, mollusks and small fish. Prey is captured primarily by suction. Wild ecology is poorly documented relative to the enormous laboratory literature because the natural population is now extremely restricted.

### Intraspecific fighting and aggression

Axolotls are not specialized fighters. Captive individuals can nip one another, especially under crowding, feeding competition or during development, and injuries can occur. This does not justify high ferocity. Adults are generally solitary/loosely associated rather than cooperative combatants.

### Predator defense

Primary survival tools are concealment, aquatic movement and habitat structure. Wild-type dark mottling provides background matching in murky, vegetated substrate. Regeneration can repair survivable injuries later, but introduced fish such as tilapia and carp are important threats to eggs/young and habitat ecology, demonstrating that regeneration is not immunity to predation.

### Environmental strengths

- Cool freshwater canals/lakes with vegetation and cover
- Murky water where close-range sensing and camouflage help
- Short-range prey capture in water
- Recovery from nonlethal tissue loss over time
- Entirely aquatic life without requiring terrestrial metamorphosis

### Environmental limitations

- Fully aquatic canonical form; terrestrial combat is profoundly disadvantageous
- Soft body and exposed gills
- Heat and poor water quality can impose major physiological stress
- No armor or high-force weapon
- Small absolute body mass
- Regeneration is slow relative to a battle timescale

### Major weaknesses

1. Only about 0.2 kg in the canonical specimen
2. Soft, unarmored body
3. External gills are exposed and delicate
4. Weak absolute offensive force
5. No reliable high-speed escape capability
6. Strong dependence on aquatic conditions
7. Regeneration cannot rescue immediate catastrophic injury

### Good matchup archetypes

- Tiny soft-bodied aquatic invertebrates
- Very small prey that can be engulfed by suction
- Slow, fragile opponents in water
- Opponents where surviving a nonlethal injury matters over a long recovery horizon

### Bad matchup archetypes

- Nearly any medium or large vertebrate
- Fast predatory fish capable of repeated bites
- Armored animals too large to engulf
- Opponents with crushing, tearing, venomous or piercing weapons
- Any terrestrial matchup
- Burst encounters where regeneration has no time to operate

## 5. Proposed ABS substats

| Substat | Score | Rationale |
|---|---:|---|
| Size | **1.5** | Roughly 0.2 kg is near the bottom of a roster containing large mammals, reptiles and marine giants. |
| Raw Power | **1.4** | Very low absolute muscular/mechanical output; proportional biological interest does not overcome tiny mass. |
| Natural Weapons | **3.0** | Small teeth plus suction capture work on tiny prey but provide almost no serious absolute combat weaponry. |
| Armor | **0.8** | Soft skin and exposed gills; essentially no passive physical armor. |
| Resilience | **12.0** | Acute trauma resistance is poor, but unusual ability to survive and later regenerate some nonlethal injuries raises this above pure soft-body protection. |
| Speed | **20.0** | Aquatic tail propulsion allows useful bursts, but no defensible maximum was found and it is not a pursuit specialist. |
| Maneuverability | **44.0** | Small body, tail fin and aquatic control permit respectable close-range turning/repositioning without implying high speed. |
| Endurance | **28.0** | Low-output ectothermic lifestyle; no evidence for sustained athletic performance. |
| Recovery | **88.0** | One of the roster's strongest tissue-regeneration systems, including functional limb regeneration and major nervous-system repair, while remaining slow rather than instantaneous. |
| Tactics | **20.0** | Simple ambush/suction feeding and basic behavioral learning; little evidence for complex combat strategy. |
| Senses | **34.0** | Useful aquatic chemical, visual and mechanosensory systems, but no extreme long-range specialization. |
| Ferocity | **15.0** | Predatory toward small prey and capable of nipping conspecifics, but not a specialized or persistent fighter. |
| Unique Abilities | **76.0** | Regeneration and lifelong paedomorphic aquatic physiology are rare and biologically extreme, though only regeneration has substantial matchup relevance. |

## 6. Proposed six headline ABS ratings

| Headline stat | Score | Justification |
|---|---:|---|
| **Attack** | **2.8** | Suction feeding and small teeth are effective against tiny prey but negligible in absolute combat terms at ~0.2 kg. |
| **Defense** | **4.5** | Soft body and exposed gills provide almost no immediate protection; long-term regeneration adds survivability only after nonlethal injury. |
| **Agility** | **43.0** | Small aquatic body and tail allow decent turning and local repositioning, without conflating this with unsupported top speed. |
| **Stamina** | **28.0** | Ectothermic, low-output aquatic lifestyle with no evidence for elite sustained exertion. |
| **Intelligence** | **21.0** | Sensory discrimination and basic learning are real, but tactical flexibility is limited compared with cognitively advanced roster animals. |
| **Special** | **74.0** | Exceptional regeneration can restore limbs and major tissues after survivable injuries; high score reflects rarity and biological scope, not instant healing during combat. |

### Calibration interpretation

Axolotl is another key anti-pound-for-pound case. Its regenerative biology is among the most extraordinary vertebrate adaptations in the roster, yet its physical combat capacity is tiny. **Attack 2.8** appropriately sits only slightly above the individually scored Army Ant (1.8) and vastly below Arctic Fox (17.0), Alpaca (25.0), Arctic Wolf (52.0), Anaconda (70.0) and Alligator (84.0). **Defense 4.5** stays low because regeneration is not armor. **Special 74.0** can be high without leaking into Attack or immediate Defense.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Blastema Rebuild** - After survivable limb loss, axolotl tissues organize a regeneration blastema capable of rebuilding correctly patterned limbs, including bone, muscle, nerves and skin. This is exceptional long-term recovery, not instantaneous combat healing.
2. **Suction Snap** - Rapid mouth opening and buccal expansion pull nearby small aquatic prey inward, letting the axolotl capture targets without needing a high-force crushing bite.

### Unique traits

1. **Forever Aquatic** - Paedomorphosis allows sexual maturity while retaining larval external gills, tail fin and a fully aquatic body plan instead of undergoing ordinary salamander metamorphosis.
2. **Scar-Light Repair** - Axolotl wound responses can restore complex tissues with dramatically less fibrotic scarring than mammalian repair, underpinning its unusual regenerative performance.

## 8. Expanded profile content

### Habitat

Historically associated with the high-altitude lake system of the Valley of Mexico. The surviving wild population is restricted to the freshwater canal/wetland complex of Xochimilco in Mexico City, where aquatic vegetation, mud and refuges provide habitat.

### Geographic range

**Endemic to Mexico.** Lake Chalco was historically occupied but has been drained; the remaining natural range is centered on Xochimilco. Captive axolotls are globally widespread in laboratories, zoos and the pet trade, but captive abundance does not reduce the extreme risk to the wild population.

### Diet

Carnivorous. Documented/reference diets include worms, insect larvae, small crustaceans, mollusks and small fish. The broad mouth and suction mechanism are suited to swallowing relatively small aquatic prey whole.

### Ecology

Axolotls are aquatic ambystomatid salamanders that retain larval morphology into reproductive adulthood. Wild ecological knowledge is surprisingly limited because the natural population collapsed while laboratory use expanded. They function as mid-level aquatic predators and prey within the Xochimilco food web.

### Social structure

Primarily solitary rather than socially coordinated. Individuals may aggregate where habitat or food concentrates them, and captive animals tolerate conspecifics under suitable conditions, but this is not a pack, colony or cooperative-hunting species.

### Reproduction and life history

Sexual maturity can occur within roughly the first year under favorable captive conditions. Fertilization is internal via spermatophore transfer. Females deposit many individually attached eggs on aquatic substrate/vegetation; major zoological references report hundreds and sometimes 1,000+ eggs in a spawning. The species ordinarily remains paedomorphic throughout life.

### Conservation status

**Critically Endangered** in the wild. Principal pressures include severe habitat loss and modification in the Valley of Mexico, water pollution, urbanization and introduced fishes. The contrast between a globally common laboratory/pet animal and an extremely threatened wild species is central to its conservation story.

### Major adaptations

- Extreme complex-tissue regeneration
- Paedomorphic adulthood
- External gills plus aquatic skin/lung respiration
- Tail-fin propulsion
- Suction feeding
- Wild-type cryptic dark mottling
- Aquatic mechanosensory and chemical sensing

### Human interaction

Axolotls are globally important biomedical model organisms, particularly for regeneration, development and evolutionary biology. MBL notes their enormous genome at roughly **32 billion base pairs**, about ten times the human genome. They are also culturally iconic in Mexico and widely kept as captive animals. Conservation programs focus on restoring Xochimilco habitat rather than treating the abundant captive population as a substitute for the wild lineage.

### Strong fun facts

- An axolotl can reach reproductive adulthood while retaining the external gills and tail fin normally associated with salamander larvae.
- It can regenerate an amputated limb with correctly organized tissues rather than merely closing the wound.
- Experimental research demonstrates regeneration involving spinal cord and other nervous-system tissues.
- Its genome contains roughly 32 billion base pairs, about an order of magnitude larger than the human genome.
- The familiar pink/leucistic aquarium axolotl is not the normal wild phenotype; wild animals are typically dark and mottled.
- A species ubiquitous in laboratories and the pet trade is simultaneously Critically Endangered in its native habitat.

### Concise site-ready summary

The axolotl (*Ambystoma mexicanum*) is a small, fully aquatic Mexican salamander famous for retaining its juvenile gills throughout adulthood and for regenerating limbs and complex tissues. In battle terms it is physically fragile: a roughly 200 g adult relies on suction feeding and small teeth and has almost no armor. Its extraordinary regeneration earns a high Special rating, but because healing takes time it does not erase the axolotl's very low immediate Attack and Defense. Wild axolotls survive only in the Xochimilco system and are Critically Endangered.

### Detailed narrative profile

The axolotl is a striking example of why ABS must separate spectacular biology from raw combat power. A healthy adult is only about a quarter-meter long and roughly two-tenths of a kilogram. It has a soft salamander body, exposed feathery gills and no serious armor. Its normal prey is correspondingly small. Rather than overpowering prey with a crushing bite, it rapidly expands the mouth and throat to generate suction, drawing worms, larvae, crustaceans or small fish inward before retaining and swallowing them.

What makes the species exceptional happens after injury. Axolotls can organize cells at an amputation site into a blastema and reconstruct a patterned limb. Research also documents regenerative responses in spinal cord, tail and other complex tissues. This capacity is among the most impressive vertebrate recovery systems known, but it should not be fictionalized as Wolverine-style instant healing. A limb requires substantial biological time to regrow, and a lethal strike remains lethal. ABS therefore places regeneration chiefly in Recovery and Special rather than inflating Defense.

The axolotl's second defining feature is paedomorphosis. Unlike a typical salamander that transforms into a more terrestrial adult, *A. mexicanum* normally becomes sexually mature while keeping larval external gills, finned tail and aquatic ecology. That specialization makes it effective in its native cool-water habitat but highly environment-dependent in a cross-roster battle framework.

The conservation story is equally unusual. Axolotls are abundant in captivity and foundational laboratory organisms, yet the natural lineage has been pushed into the fragmented Xochimilco canal system by drainage, urbanization, pollution and introduced species. The canonical ABS animal should therefore look like a dark wild-type adult, not automatically like the familiar pink captive morph.

### Useful future structured fields

- `measurement_basis`: total length vs snout-vent length
- `wild_or_captive_baseline`
- `regeneration_scope`
- `regeneration_timescale`
- `respiration_modes`
- `aquatic_dependency`
- `feeding_mechanism`
- `paedomorphic`: boolean
- `conservation_status`
- `wild_range_km2` when a current authoritative estimate is available

## 9. Image Asset

- **Target research path:** `animal-research-for-update/images/axolotl.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Real photograph explicitly identified as an **adult male wild-type *Ambystoma mexicanum***. Wikimedia metadata states that the animal is a sexually mature adult male; the source file is 4760 × 1324 and CC BY-SA 4.0.
- **Source page:** https://commons.wikimedia.org/wiki/File:Axolotl_Wild_Type.jpg
- **Direct image URL:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Axolotl_Wild_Type.jpg
- **Why selected:** Exact species, real photograph, explicitly adult male, wild-type coloration, full lateral body visible, high resolution and reusable source metadata. It is captive rather than a verified wild Xochimilco individual, which is preferable to using an unverifiable wild-sex image during this staging phase.
- **Transparency:** Source is JPEG with background. No reliable cutout/binary-commit path is available in the current GitHub connector, so no fake or text-encoded PNG is created.

## 10. Evidence and source ledger

| Source | Direct URL | Claim/field supported | Reported value/finding | Context | Confidence/caveat |
|---|---|---|---|---|---|
| Marine Biological Laboratory, Axolotl research organism | https://www.mbl.edu/research/research-organisms/axolotl | Identity, size, mass, lifespan, diet, range, regeneration, genome | Up to 12 in; 2.11-8 oz; 10-15 years; regenerates limbs, spinal cord and parts of brain/heart; ~32-billion-bp genome | Research organism overview | **High**; captive/lab knowledge is much richer than wild ecology |
| University of Kentucky Ambystoma Genetic Stock Center | https://ambystoma.uky.edu/13-latest-news/28-about-salamanders | Adult size/mass, paedomorphosis, wild phenotype | Adults can reach 30 cm+ and up to 300 g; retain external gills/tail fin | Major axolotl research-stock institution | **High** for morphology/scale; 300 g is an upper context, not baseline |
| National Geographic species account | https://www.nationalgeographic.com/animals/amphibians/facts/axolotl | Lifespan, size, mass, diet, conservation | 10-15 years wild; up to 12 in; 2.11-8 oz; Critically Endangered | General zoological synthesis | **Moderate-high** |
| Animal Diversity Web, *Ambystoma mexicanum* | https://animaldiversity.org/accounts/Ambystoma_mexicanum/ | Habitat history, range contraction, conservation | Lake Chalco lost; Xochimilco fragmented; Critically Endangered; CITES Appendix II | Species account | **High-moderate**; older account, use newer conservation sources when available |
| Herrel et al./Journal of Experimental Biology, suction-feeding kinematics (PubMed record) | https://pubmed.ncbi.nlm.nih.gov/40679315/ | Feeding biomechanics | High-speed video of adults, juveniles and larvae; size affects nearly all measured suction-feeding kinematics | Peer-reviewed 2025 study | **High**; does not provide a bite PSI or whole-animal top speed |
| Vieira et al. 2019, Developmental Biology | https://pmc.ncbi.nlm.nih.gov/articles/PMC6589380/ | Limb-regeneration mechanism | Complete patterned limb regeneration can be induced under defined signaling conditions; axolotl is a complete-limb regeneration model | Experimental laboratory study | **High**; regeneration timescale is not immediate combat healing |
| Lee & Gardiner 2012, PLOS ONE | https://pmc.ncbi.nlm.nih.gov/articles/PMC3503958/ | Joint/limb regeneration | Describes morphology and molecular markers during joint regeneration after limb amputation | Experimental laboratory study | **High** |
| Sabin et al. 2019 spinal-cord injury model | https://pmc.ncbi.nlm.nih.gov/articles/PMC6395952/ | Nervous-system regeneration and limits | Morphological spinal-cord regeneration after contusion; regeneration incomplete at 9 weeks in that injury model | Experimental trauma model | **High**; useful caveat against overstating perfect/instant regeneration |
| Takeuchi et al. 1994, Physiology & Behavior | https://pubmed.ncbi.nlm.nih.gov/8084890/ | Sensory discrimination | Neural and behavioral experiments show discrimination among taste qualities | Laboratory adult/experimental animals | **High** for taste discrimination, not broad intelligence |
| American Museum of Natural History | https://www.amnh.org/explore/ology/ology-cards/366-axolotl | Aquatic adulthood, regeneration, range, threats | Retains gills/fins; can regrow entire limbs and damaged spinal cord; pollution/drainage/introduced fish threats | Museum educational synthesis | **Moderate-high** |
| Wikimedia Commons, Axolotl Wild Type | https://commons.wikimedia.org/wiki/File:Axolotl_Wild_Type.jpg | Image candidate | 4760×1324 real photograph, explicitly adult male wild-type *A. mexicanum*, CC BY-SA 4.0 | Captive photographed adult | **High** for image identity/sex as uploader metadata; not a wild provenance image |

### Evidence conflicts and caveats

- Adult size sources vary because captive husbandry, sex, age, body condition and measurement convention vary. The 25 cm / 200 g canonical animal is representative rather than maximal.
- Wild ecology and wild longevity are much less documented than laboratory biology because the natural population is extremely depleted.
- No strong species-specific maximum swim-speed measurement was located, so `speed_mps` remains 0.0.
- No defensible bite-force PSI measurement was located. Suction-feeding kinematics must not be converted into fabricated bite pressure.
- Regeneration is genuine but time-dependent. It cannot be treated as instant damage cancellation in the Defense score.
- Conservation references can differ in age. Production should use the current IUCN assessment at migration time; the established status used here is Critically Endangered.

## 11. Cross-animal calibration notes

- **Army Ant:** Axolotl is vastly heavier than an individual *Eciton burchellii* soldier, so Attack 2.8 and Raw Power 1.4 are above Army Ant's 1.8/0.3 while remaining near the bottom of the full roster.
- **Arctic Fox:** A ~4 kg Arctic Fox has far more damaging jaws, muscular power and terrestrial combat capability; Axolotl Attack must remain far below Arctic Fox 17.0.
- **Armadillo:** Axolotl has none of the armadillo's osteoderm armor, so its immediate Defense must remain dramatically lower than Armadillo 47.0.
- **Anaconda / Alligator:** These large aquatic/semiaquatic predators demonstrate why sharing a water environment does not imply similar battle power. Axolotl is prey-scale beside them.
- **Anglerfish:** Both are aquatic specialists with unusual biology, but Axolotl's Special is specifically regeneration-centered and should not be interpreted as offensive lethality.
- **Special vs Defense:** Special 74.0 is intentionally high while Defense is 4.5. If later normalization causes regeneration to inflate immediate Defense, correct that leakage rather than raising the axolotl's durability.
- **Recovery:** Recovery 88.0 is an early extreme-regeneration anchor. Revisit it when starfish, octopus, planarians or other regenerative roster animals are researched, but preserve the distinction between complex vertebrate tissue restoration and regeneration speed.

## Verification checklist

- Exactly **2 special abilities**: yes
- Exactly **2 unique traits**: yes
- Six headline ratings, all one decimal: yes
- Relevant substats, all one decimal: yes
- Absolute rather than pound-for-pound scaling: yes
- Unsupported speed and bite PSI left at 0.0: yes
- Regeneration separated from immediate armor/durability: yes
- Image source page and direct URL recorded: yes
- Production/live data modified: no
