# Giraffe (*Giraffa camelopardalis* sensu site) research report

## 1. Identity and canonical specimen
- **Common name:** Giraffe
- **Site taxon:** *Giraffa camelopardalis*. The production profile uses the traditional single-species treatment. Modern giraffe taxonomy is changing: the Giraffe Conservation Foundation and recent cranial/genetic work support four species (*G. camelopardalis*, *G. reticulata*, *G. tippelskirchi*, *G. giraffa*). This staging report therefore preserves the site's named taxon while explicitly treating many older all-giraffe measurements as *Giraffa* sensu lato rather than pretending every historical value is northern-giraffe-specific.
- **Living:** yes.
- **Canonical combat specimen:** healthy mature **male**, **1,200.0 kg**, about **520.0 cm standing height**. Adult males are the larger and primary fighting sex.
- **Dimorphism/population variation:** strong. A standard synthesis gives wild mature males roughly 850–1,950 kg and females 700–1,200 kg. Direct South African carcass work found adult males averaging 1,174.3 ± 31.5 kg and females 791.8 ± 17.6 kg. A repeatedly weighed captive Rothschild/Nubian-line population averaged 1,307 ± 52 kg for adult males and 835 ± 45 kg for adult females, explicitly noted as relatively large. Male skulls/ossicones become heavier with maturity. Taxon, season, captivity, age and nutritional state all affect measurements.

## 2. Physical measurements and functional anatomy
### Mass and dimensions
A representative adult-male mass of **1,200 kg** is preferred over record or upper-range animals. It agrees with the commonly cited adult-male reference and sits close to the directly measured 1,174 kg South African adult-male mean. ADW's traditional account gives males up to 1,930 kg and total standing height/length values around 4.7–5.7 m, with females 0.7–1.0 m shorter. The canonical **520 cm** is therefore a representative mature-male standing height rather than a record.

For this unusual body plan, the site's `length_cm` is best treated as overall standing body extent rather than nose-to-rump horizontal length. I recommend **520.0 cm** and document the semantics. Tail length is about **76–101 cm** in ADW. The neck can be about **2 m or more**, while giraffes retain seven cervical vertebrae. The first thoracic vertebra has unusually cervical-like mobility, extending functional neck reach.

### Locomotion and speed
Modern UAV work on free-ranging giraffes recorded running speeds of **2.8–11.0 m/s**, with a predominantly four-beat rotary gallop and stride lengths of 2.9–8.3 m. A specialist synthesis reports observational bursts around **60 km/h (16.7 m/s)** for roughly five minutes and lower-speed running around 40 km/h for longer periods. Because the 60 km/h value is observational rather than a tightly controlled maximum trial, the canonical factual field is **16.7 m/s with moderate confidence**, while the report preserves the measured 11 m/s UAV ceiling as a directly observed study value rather than conflating the two.

### Natural weapons
The main weapons are the limbs and, in male-male combat, the neck/head complex. Giraffes can deliver front and rear kicks; lion-predation literature explicitly describes these kicks as capable of maiming or killing lions. Bulls also engage in `necking`: they swing the neck and reinforced head/ossicones into rivals. Mature males have heavier skulls and ossicones than females. No responsible impact-force number is assigned because a validated species-level strike-force dataset was not found.

Ossicones are permanent bony cranial structures covered by skin; males tend to have thicker, worn/bald ossicones from fighting. They are not long piercing horns like bovids, so their combat value is mainly as reinforced striking surfaces on a long lever.

### Defense and cardiovascular structure
Giraffes have no true armor, but their enormous mass, height, robust skeleton, thick collagenous skin in parts of the body, long kicking reach and ability to remain standing make adult bulls difficult prey. Veterinary/anatomical literature describes thicker skin along the neck/lateral body and a lower-limb integument system relevant to edema control. Their greatest defensive failure mode is being toppled: lion-predation research emphasizes that a giraffe becomes extremely vulnerable once brought to the ground.

Their cardiovascular system is extraordinary. Adult giraffes maintain mean systemic arterial pressures around **200–250 mmHg** at heart level, more than twice typical mammalian values, to perfuse a brain over 2 m above the heart. Vessel, ventricular and pressure-regulation adaptations maintain cerebral circulation as the head changes height.

### Lifespan and bite force
Wild longevity is commonly reported to about **25 years**, while older syntheses give typical wild spans closer to 10–15 years and zoo averages around 20–25. For the site's canonical lifespan field, **25.0 years** is retained as a defensible adult longevity reference, explicitly not a population mean.

No credible species-specific bite-pressure measurement was found. Giraffes are browsers with prehensile tongues and ruminant dentition, not bite-specialized fighters. `bite_force_psi = 0.0` means unavailable/not defensibly measured, not literally zero force.

## 3. Proposed canonical factual fields
| Field | Proposed value | Basis / confidence |
|---|---:|---|
| `weight_kg` | **1200.0** | Representative mature male; close to 1,174.3 kg directly measured adult-male mean and standard 1,200 kg reference. High-moderate. |
| `height_cm` | **520.0** | Representative mature male within 4.7–5.7 m traditional adult range. Moderate. |
| `length_cm` | **520.0** | Use as overall body/standing extent for this vertical morphology; schema semantics should eventually separate standing height from horizontal body length. Moderate-low. |
| `speed_mps` | **16.7** | 60 km/h specialist observational burst reference; UAV directly measured up to 11.0 m/s. Moderate, not a record-certified maximum. |
| `lifespan_years` | **25.0** | Reported wild upper longevity reference. Moderate. |
| `bite_force_psi` | **0.0** | No defensible pressure measurement located. High confidence that a PSI value should not be invented. |

**Useful future fields:** `standing_height_cm`, `tail_length_cm`, `neck_length_cm`, `uav_observed_speed_mps`, `mean_arterial_pressure_mmhg`, `sex`, `taxonomic_concept`, `ossicone_mass_or_dimensions` when measured data are available.

## 4. Combat biology
### Primary and secondary weapons
**Primary:** long legs and hooves. A giraffe can kick forward or backward, with reach amplified by limb length and a very large body mass behind rapid limb motion. The lion literature confirms kicks are a meaningful lethal-injury risk to predators.

**Secondary:** in mature males, the neck/head/ossicone system. Necking is a specialized intraspecific contest behavior. Bulls brace, position and swing the neck so the skull and ossicones strike the opponent. This is a genuine weapon system, but the long neck should not be scored as if it were a rigid club: it is flexible, energetically costly and exposes the animal to balance constraints.

### Offensive mechanics
A bull's offense is unusual for a herbivore. Against a low opponent, stamping/kicking offers the most practical damage path. Against another tall ungulate, lateral neck swings create reach and impact. Size alone does not guarantee contact: the giraffe must orient its long legs and body, and its high center of mass makes poor footing costly. There is no evidence for a meaningful combat bite specialization.

### Defensive adaptations and durability
At 1.2 tonnes, a mature bull has a huge absolute survivability advantage over small and medium predators. Height makes many targets hard to reach. Long legs create a dangerous exclusion zone. Thick skin and robust limb bones add modest structural protection, but the giraffe lacks armor, thick blubber or a shell. Defense is therefore high but not megafaunal-ceiling. Falling is catastrophic because ground-level predators can access the neck and torso.

### Locomotion, maneuverability and endurance
Giraffes are faster than their proportions suggest. Free-ranging animals use long strides rather than high stride frequencies to increase speed. They are capable of galloping, but their turning radius, acceleration and low-posture maneuverability are inferior to smaller cursorial predators. Their everyday endurance is solid: they travel widely while browsing, and exercise physiology indicates both brief high-speed and longer lower-speed running capability. This supports good Stamina without confusing it with agility.

### Senses and threat assessment
Large elevated eyes give a broad visual vantage over open habitats. Hearing and smell are useful, but vision is the standout combat-relevant sense. Recent playback work found giraffes respond more strongly to direct lion vocalizations than to oxpecker alarm calls, showing context-sensitive weighting of threat cues; females showed stronger vigilance overall in that study. This is evidence for discriminative threat assessment, not proof of primate-level cognition.

### Intelligence and tactics
Giraffes are socially flexible rather than organized into rigid permanent herds. Fission-fusion grouping, dominance assessment and male contest behavior require memory and social discrimination. Bulls do not simply charge every rival: sparring intensity and partner choice vary, and young adult males commonly spar. Tactical flexibility is meaningful but should remain below experimentally strong corvid, ape and cetacean cognition.

### Fighting and predation behavior
Male necking is the clearest direct fighting evidence. A 2021 quantitative study of South African males examined sparring frequency, duration, intensity and individual laterality. Bulls use these contests in dominance relationships. Predator defense is different: adults use kicks, vigilance, size and group context against lions. Serengeti claw-mark work documents surviving adult giraffes and notes the substantial injury risk lions face during attacks.

### Environmental strengths and limitations
**Strengths:** open savanna/woodland sightlines; high browse access; long stride; heat-management benefits from narrow neck/lower limbs and behavioral orientation; huge reach; ability to detect distant threats.

**Limitations:** dense terrain reduces the value of height and long-stride locomotion; slippery or confined terrain magnifies balance risk; drinking requires a vulnerable splayed posture; low targets can be awkward to engage with the neck; once toppled, defense falls sharply.

### Major weaknesses
1. High center of mass and catastrophic vulnerability after a fall.
2. Limited close-in turning compared with cats/canids.
3. No armor and no specialized killing bite.
4. Necking is best suited to similarly tall rivals, not every opponent geometry.
5. Watering posture temporarily compromises mobility and vigilance.

### Matchup archetypes
**Favorable:** small-to-medium terrestrial attackers that must enter kicking range; many unarmored predators unable to rapidly topple a 1.2-tonne adult.

**Dangerous/even:** coordinated large predators, especially multiple lions, where flanking and destabilization can bypass the kick zone.

**Unfavorable:** much heavier megafauna with superior low-center mass, tusks/horns or crushing force; highly armored targets that kicks cannot quickly disable; terrain that prevents long-leg repositioning.

## 5. Proposed ABS substats
All scores use absolute roster-wide 0.1–100.0 calibration.

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Raw Power | **76.0** | 1.2-tonne adult male with large limb musculature and a long striking lever; far above medium predators, below elephant/hippo-scale force. |
| Weaponry | **68.0** | Potentially lethal hooves plus male neck/head strikes, but less penetrating and less versatile than tusks, major horns or giant carnivore jaws. |
| Ferocity | **61.0** | Bulls engage in serious dominance combat and adults defend vigorously, but giraffes are not dedicated predators. |
| Protection | **54.0** | Huge size, height and some thick skin, but no true armor and severe ground-down vulnerability. |
| Toughness | **70.0** | Large robust ungulate able to survive predator encounters; major falls or successful lion takedowns remain decisive. |
| Maneuverability | **47.0** | Capable galloper with surprising control, but long limbs/high center of mass limit tight turning and low-space combat. |
| Speed | **69.0** | Observational burst near 16.7 m/s, with direct UAV study up to 11 m/s; fast for size but not elite roster sprinting. |
| Endurance | **72.0** | Can sustain lower-speed running and extensive daily browsing/travel; not an endurance-specialist cursorial predator. |
| Recovery | **59.0** | Large mammal physiology and routine locomotor resilience, but no exceptional regenerative or recovery mechanism. |
| Tactics | **61.0** | Rival assessment, sparring structure and differentiated predator-cue responses; moderate behavioral flexibility. |
| Senses | **72.0** | Elevated visual surveillance plus useful hearing/smell and demonstrated predator-cue discrimination. |
| Abilities | **67.0** | Extreme height/reach, neck-strike mechanics and cardiovascular specialization are unusual and matchup-relevant, but not venom/electricity-tier. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **73.0** | A 1.2-tonne bull can deliver maiming/killing kicks and heavy neck/head blows. Strong absolute offense, but less efficient than the best armed megafauna. |
| **Defense** | **66.0** | Size, reach and kick deterrence make adults dangerous to attack, while lack of armor and catastrophic fall vulnerability cap the score. |
| **Agility** | **48.0** | Faster and more coordinated than its shape suggests, but high center of mass and long limbs constrain tight evasive movement. |
| **Stamina** | **72.0** | Good sustained movement and meaningful lower-speed running endurance without equating migration/browsing persistence to fight output. |
| **Intelligence** | **61.0** | Flexible social behavior, dominance assessment and threat-cue discrimination, but no evidence for elite problem-solving. |
| **Special** | **69.0** | Extreme vertical reach, specialized male necking system and cardiovascular adaptations are distinctive without double-counting raw size. |

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Pendulum Headstrike** — a mature bull swings its long neck to deliver the reinforced skull and ossicones into rivals during necking, creating an unusually long-reach impact weapon.
2. **Hoof Exclusion Zone** — long front and rear limbs let an adult defend a broad perimeter with kicks dangerous enough that lion attacks carry serious injury risk.

### Unique traits
1. **High-Pressure Tower** — cardiovascular adaptations maintain brain perfusion across an extreme heart-to-head height difference and rapid posture changes.
2. **Five-Metre Vantage** — exceptional standing height combines high browsing reach with long-distance visual surveillance over open habitat.

## 8. Expanded profile
### Habitat and geographic range
Giraffes inhabit African savannas, open woodlands, shrublands and semi-arid systems where woody browse is available. The old one-species concept spans multiple geographically distinct lineages. Modern four-species treatments divide that range among northern, reticulated, Masai and southern giraffes.

### Diet and ecology
They are selective browsers, feeding heavily on woody plants including acacias/senegalias and other trees and shrubs. Their height allows access to foliage unavailable to most sympatric browsers. Field experiments support vertical resource partitioning: giraffes preferentially browse high in canopies, where leaf availability is less depleted by smaller browsers.

### Social structure
Giraffes use fluid fission-fusion social systems. Groups change membership; females with calves can associate, bachelor males spar, and mature bulls may roam in search of receptive females. Male reproductive and social activity can shift over short androgen-linked rut-like periods.

### Life history
Gestation is roughly 15 months and usually produces a single calf. Newborns are already extraordinarily tall and must stand quickly. Females provide maternal care, while males invest primarily through competition for mating opportunities rather than parental care.

### Conservation
Taxonomy matters here. The older IUCN single-species assessment listed giraffe as Vulnerable, but modern work recognizes four species with very different trajectories. GCF's State of Giraffe 2025 estimated about 140,000 giraffes total, including roughly 7,037 northern, 20,901 reticulated, 43,926 Masai and 68,837 southern giraffes. Three of the four are described as highly threatened under the newer framework, while southern giraffe are doing substantially better.

### Major adaptations
- Extreme cervical and limb elongation with specialized vertebral mechanics.
- High-pressure cardiovascular physiology and lower-limb vascular/skin adaptations.
- Long prehensile tongue for selective browsing.
- Coat patterning and behavioral orientation that aid thermoregulation/camouflage context.
- Ossicone/skull development and necking behavior in males.
- Long-stride galloping mechanics.

### Human interaction
Giraffes are major ecotourism animals and conservation flagships. Their principal threats include habitat loss/fragmentation, illegal hunting, civil insecurity and local population isolation. Translocation and genetic/taxonomic management increasingly matter because populations formerly lumped together are not interchangeable conservation units.

### Genuine fun facts
- Giraffes still have only **seven cervical vertebrae**, despite their extreme neck length.
- Free-ranging running research recorded strides up to **8.3 m**.
- Direct South African carcass data put adult male mean body mass around **1,174 kg**.
- Mature males develop heavier skulls and ossicones than females.
- Adult mean arterial pressure at heart level is roughly **200–250 mmHg**.
- The giraffe's first thoracic vertebra contributes unusually to neck mobility, effectively extending the functional neck base.
- Lion attacks are dangerous for the lions themselves because giraffes defend with both front and rear kicks.
- Modern evidence increasingly supports **four giraffe species**, not one uniform species with nine subspecies.

### Concise site-ready summary
The giraffe is the tallest living animal and a surprisingly formidable megaherbivore. A representative mature bull weighs about 1.2 tonnes and combines lethal-range kicks, male neck-and-ossicone strikes, strong running endurance and exceptional visual reach. Its size makes it difficult prey, but a high center of mass, limited tight turning and extreme vulnerability after being toppled keep it below the heaviest armored megafauna in defense.

### Rich narrative profile
A giraffe's combat profile is easy to underestimate because its anatomy looks specialized for browsing rather than fighting. The same long limbs that lift the body several metres above the ground also place hooves at the end of enormous levers. Predator studies confirm that lions risk maiming or death when entering that kick zone. In males, the neck becomes a second weapon system: bulls position beside rivals and swing the head and ossicones in necking contests that help structure dominance.

Yet the giraffe is not simply a giant stat block. Its height creates vulnerabilities. Tight turns are costly, the drinking stance is awkward, and a successful takedown removes much of the defensive advantage. This makes the animal a useful calibration case: its Attack should be far above medium carnivores in absolute impact potential, while Agility should not inherit its respectable sprint speed. Defense should reward mass and deterrent reach without pretending skin is armor.

Its physiology is equally distinctive. Supplying a brain metres above the heart requires persistently high arterial pressure and specialized vascular control. These systems are biologically extraordinary but should influence Special more than Attack or Defense. The result is a powerful, durable, high-stamina megaherbivore whose danger comes from leverage, reach and mass rather than predatory weapon specialization.

### Future field proposals
`standing_height_cm`, `neck_length_cm`, `tail_length_cm`, `uav_observed_speed_mps`, `mean_arterial_pressure_mmhg`, `kick_force_n` if ever directly measured, `taxonomic_concept`, `canonical_population`, `ossicone_dimensions`, and `grounded_state_vulnerability`.

## 9. Mandatory image requirement
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/giraffe.png` **NOT PRESENT / NOT COMPLETE**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Giraffe_(Giraffa_camelopardalis)_male_(16465272177).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/4/46/Giraffe_%28Giraffa_camelopardalis%29_male_%2816465272177%29.jpg
- `file_format_verified`: source is a 3457x4644 JPEG; final PNG not created
- `alpha_verified`: **No**
- `full_body_verified`: **No**. Source metadata and available preview establish a high-resolution male photograph, but this run could not certify every hoof and the complete tail from the original at inspection quality.
- `adult_verified`: **No explicit age statement**. The source verifies male sex but not adulthood in metadata.
- `sex_verified_or_unknown`: **Male**, explicitly identified by source and Commons category.
- `license_status`: **CC BY-SA 2.0**, Flickr license reviewed by Commons.
- `notes`: Strong reusable 3457x4644 wild male candidate from Kruger National Park. It is retained as a candidate rather than falsely promoted. A second 3036x4796 CC BY-SA 4.0 source titled `GIRAFFE FULL LENGTH` is categorized male and is excellent for future visual checking, but it is modern Masai giraffe (*G. tippelskirchi*) and does not resolve the site's taxonomic ambiguity. Current connected GitHub writer is UTF-8 text-only, so no PNG binary is fabricated.

## 10. Source ledger, confidence and conflicts
1. **Animal Diversity Web, Giraffa camelopardalis** — https://animaldiversity.org/accounts/Giraffa_camelopardalis/ — traditional taxonomy, dimensions, tail, ossicones, social behavior and longevity. **Moderate institutional synthesis; taxonomy/older ranges need modern context.**
2. **Hall-Martin et al. 1977, carcass composition** — https://www.sasas.co.za/journals/carcass-composition-of-the-giraffe-giraffa-camelopardalis-giraffa/ — directly measured adult male mean 1,174.3 ± 31.5 kg and female mean 791.8 ± 17.6 kg. **High for sampled South African population.**
3. **Gloneková et al. 2016, Zoo Biology** — https://pubmed.ncbi.nlm.nih.gov/27332702/ — repeatedly weighed adult Rothschild giraffes, males 1,307 ± 52 kg, females 835 ± 45 kg, seasonal variation. **High for captive population; authors note relatively large taxon.**
4. **Shorrocks, Giraffe (Cambridge)** — https://www.cambridge.org/core/books/giraffe/DBD4666D2A7A2A057C06DE5EC8AC9AFA/listing — wild mature male 850–1,950 kg, female 700–1,200 kg; standard 1,200/800 kg averages. **High scholarly synthesis.**
5. **Basu/Deacon/Hutchinson/Wilson fast-speed kinematics** — https://sicb.org/abstracts/the-fast-speed-kinematics-of-wild-giraffes-using-video-derived-from-an-unmanned-aerial-vehicle-uav/ — 35 free-ranging giraffes, 2.8–11 m/s, stride 2.9–8.3 m, predominantly four-beat rotary gallop. **High for directly observed study range; not maximum trial.**
6. **Mitchell 2021, How Giraffes Work, exercise chapter** — https://academic.oup.com/book/41222/chapter-abstract/350699407 — observational ~60 km/h short-period running and ~40 km/h longer running. **Moderate-high specialist synthesis; exact top-speed protocol unavailable.**
7. **Strauss 2013, Journal of Zoology** — https://doi.org/10.1111/j.1469-7998.2012.00972.x — lion claw-mark/predation evidence; front/rear kicks can maim or kill lions; ground-down vulnerability. **High peer-reviewed field context.**
8. **Granweiler et al. 2021, Ethology** — https://onlinelibrary.wiley.com/doi/abs/10.1111/eth.13199 — quantitative male sparring dynamics and laterality. **High peer-reviewed behavioral evidence.**
9. **Mitchell et al. 2013, Journal of Zoology** — https://zslpublications.onlinelibrary.wiley.com/doi/abs/10.1111/jzo.12013 — head/neck growth, heavier mature male skulls/ossicones, sexual dimorphism; cautions against assuming neck evolved primarily as weapon. **High.**
10. **Van Sittert et al. 2015, Journal of Morphology** — https://pubmed.ncbi.nlm.nih.gov/25503961/ — appendicular skeletal scaling across fetuses, females and males. **High anatomical evidence.**
11. **Kudo et al. 2016, functional cervicothoracic boundary** — https://pubmed.ncbi.nlm.nih.gov/26998330/ — first thoracic vertebra contributes cervical-like mobility. **High anatomical evidence.**
12. **Mitchell et al. 2006, J Exp Biol** — https://pubmed.ncbi.nlm.nih.gov/16788035/ — origin of giraffe arterial/jugular pressures. **High physiology evidence.**
13. **Mitchell et al. 2025, J Exp Biol** — https://pmc.ncbi.nlm.nih.gov/articles/PMC12582410/ — adult MAP 200–250 mmHg and energetic burden of high pressure. **High current physiology evidence.**
14. **Sathar et al. 2010, Anatomical Record** — https://anatomypubs.onlinelibrary.wiley.com/doi/10.1002/ar.21190 — skin thickness/composition and collagenous structure. **High anatomical evidence; small sample.**
15. **Cameron & du Toit 2007** — https://pubmed.ncbi.nlm.nih.gov/17206591/ — high-level browsing/resource partitioning. **High field experimental evidence.**
16. **Giraffe Conservation Foundation taxonomy** — https://giraffeconservation.org/programs/giraffe-taxonomy/ — four-species treatment from extensive genetic sampling. **High specialist conservation authority; taxonomy has changed from site's legacy label.**
17. **Kargopoulos et al. 2024, PLOS ONE** — https://pubmed.ncbi.nlm.nih.gov/39700177/ — 515 skulls, cranial differences supporting four species. **High peer-reviewed morphology evidence.**
18. **GCF State of Giraffe 2025** — https://giraffeconservation.org/state-of-giraffe/ — current four-species abundance estimates. **High specialist current conservation synthesis.**
19. **Wikimedia Commons candidate** — https://commons.wikimedia.org/wiki/File:Giraffe_(Giraffa_camelopardalis)_male_(16465272177).jpg — 3457x4644 male, CC BY-SA 2.0, reviewed Flickr provenance. **High for file metadata/license; adulthood and strict full-body anatomy not certified.**

### Confidence and source conflicts
- **Taxonomy:** high confidence that the old one-species model is no longer the only defensible treatment; current staging should not silently merge four species. The site's exact label is retained pending a product-level taxonomy decision.
- **Mass:** high-moderate confidence in 1,200 kg as a representative mature male across the legacy concept. Direct samples differ by taxon/population and captive status.
- **Speed:** moderate confidence in 16.7 m/s as a specialist observational maximum reference; high confidence in the directly measured 2.8–11 m/s UAV range. These are not the same claim.
- **Lifespan:** moderate; 25 years is an upper longevity reference, not a demonstrated mean.
- **Bite pressure:** no defensible PSI found. Keep 0.0 rather than fabricate.
- **Strike force:** qualitative lethality is well supported; a numerical kick or neck-impact force is not supplied.

## 11. Cross-animal normalization notes
- **Vs African Elephant:** Giraffe should remain clearly lower in Raw Power, Protection, Toughness, Attack and Defense. A 1.2-tonne bull is formidable but far below a multi-tonne elephant with tusks and a lower, more stable body plan.
- **Vs Cape Buffalo/Bison:** Giraffe has greater height and kicking reach but less compact stability and less direct horn-based frontal weaponry. Attack can be comparable in broad band without copying their defense profile.
- **Vs Cougar/Lion-class cats:** the giraffe's absolute impact potential and mass are much higher, but cats retain far superior close-quarter maneuverability and predatory weapon precision. This is why Giraffe Attack 73.0 does not imply Agility inflation.
- **Vs Galapagos Tortoise:** giraffe is vastly more mobile/offensive, while the tortoise's shell provides qualitatively stronger passive protection. Defense should not simply track mass.
- **Vs Giant Squid:** both are large and unusual, but giraffe's terrestrial kick mechanics and one-tonne mass justify higher Raw Power; squid retains more specialized multi-limb capture and aquatic matchup effects.
- **Anti-inflation checks:** speed does not substitute for Agility; cardiovascular adaptation is not counted as raw power; necking does not make the neck armored; mass does not automatically become Defense; no unverified PSI or invented strike-force number is used.

**Final staging recommendation:** Attack **73.0**, Defense **66.0**, Agility **48.0**, Stamina **72.0**, Intelligence **61.0**, Special **69.0**.