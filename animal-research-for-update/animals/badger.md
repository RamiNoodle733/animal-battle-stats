# Badger Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Badger / European badger / Eurasian badger
- **Scientific name:** *Meles meles* (Linnaeus, 1758)
- **Family:** Mustelidae
- **Status:** Living
- **Exact animal represented:** European/Eurasian badger, *Meles meles*. This is not the American badger (*Taxidea taxus*) or honey badger (*Mellivora capensis*).
- **Canonical specimen:** Healthy, fully mature adult male (boar), approximately **13.0 kg**, outside an exceptional pre-winter obesity peak.
- **Sexual dimorphism:** Males are materially heavier and have broader heads and thicker necks. Animal Diversity Web reports males **9.1-16.7 kg** versus females **6.6-13.9 kg**, while head-body length overlaps at **56-90 cm**. A male is therefore the appropriate combat specimen.
- **Population/seasonal variation:** Mass changes strongly with season and geography. British field references commonly report roughly 8-17 kg, while autumn animals can be substantially heavier as fat reserves accumulate. Record-sized males are not used as the canonical baseline.

## 2. Physical measurements

### Mass

Animal Diversity Web gives male mass **9.1-16.7 kg** and female mass **6.6-13.9 kg**. Kent Mammal Group independently gives the same sex-specific ranges. Wildlife Trust sources give a more general British range of **8-12 kg**, demonstrating how population, sex and season change reported values.

- **Canonical mass:** **13.0 kg**
- **Male reference range:** **9.1-16.7 kg**
- **Rationale:** 13 kg sits near the middle of the documented adult-male range and avoids using unusually fat autumn or record specimens.
- **Confidence:** High for range, moderate-high for canonical editorial choice.

### Height

MammalWeb reports **25-30 cm** height. This field is less frequently measured than mass or head-body length.

- **Canonical shoulder height:** **27.5 cm**
- **Reported range:** **25-30 cm**
- **Confidence:** Moderate.

### Length

Animal Diversity Web reports **56-90 cm head-body length** and **11.5-20.2 cm tail length**. Kent Mammal Group reports 67.3-80.3 cm head-body in males and 12.7-17.8 cm male tail length. Because the site's single length field can otherwise become ambiguous, this report uses **head-body length**, not total length including tail.

- **Canonical `length_cm`:** **75.0 cm head-body**
- **Credible head-body range:** **56-90 cm** across the species
- **Tail:** approximately **11.5-20.2 cm**
- **Confidence:** High.

### Movement speed

A radio-telemetry study in Białowieża Primeval Forest measured average movement at **0.9 km/h**, with recorded individual maxima of **2.5-7.1 km/h**. These are travel/foraging observations, not sprint trials. Popular 30 km/h claims were not traced to a sufficiently strong instrumented maximum-speed study during this run.

- **Canonical `speed_mps`:** **0.0**
- **Measured field context:** up to **7.1 km/h (1.97 m/s)** in the telemetry study, explicitly not a physiological top-speed test
- **Reason:** no defensible measured maximum sprint speed located.
- **Confidence:** High for field movement data, low for true maximum.

### Lifespan

Wildlife Trust sources report an average lifespan around **5-8 years**. Animal Diversity Web notes that *M. meles* can reach about **15 years in the wild**, though exceeding 10 is unusual, and cites a captive longevity of **19.5 years**.

- **Canonical `lifespan_years`:** **6.5 years**
- **Typical wild context:** approximately **5-8 years**
- **Potential wild longevity:** about **15 years**, uncommon
- **Confidence:** Moderate-high.

### Bite force and dentition

European badgers have massive skulls, prominent sagittal crests, broad zygomatic arches, prominent canines and robust jaw architecture. These strongly support a powerful bite for an omnivorous mustelid. However, no defensible species-specific bite-pressure measurement with known contact area was located. Internet PSI claims are therefore rejected.

- **Canonical `bite_force_psi`:** **0.0**
- **Dentition:** typically 38 teeth, including prominent canines and broad grinding molars
- **Bite interpretation:** mechanically formidable for its size, but no fabricated PSI
- **Confidence:** High for anatomy; low for any numerical pressure claim.

### Claws and digging apparatus

The limbs are short and robust, and the forefeet carry long, strong, non-retractile claws specialized for excavation. A peer-reviewed cortisol-validation study sampled **16-19 mm distal claw segments**, but those samples are not complete-claw measurements and therefore must not be misrepresented as total claw length.

- **Canonical claw length:** **not assigned**
- **Primary relevance:** digging, raking and close defensive use rather than specialized slashing like a felid claw
- **Confidence:** High for morphology, unresolved for representative full claw length.

### Hide, skull and other defensive structures

Badgers lack armor, but have a compact, low-slung body, robust skeleton, coarse coat and unusually heavy skull for their size. The prominent sagittal crest anchors jaw musculature and adds cranial structure. Their fossorial build keeps the center of gravity low and presents a thick torso rather than long exposed limbs.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 13.0,
  "height_cm": 27.5,
  "length_cm": 75.0,
  "speed_mps": 0.0,
  "lifespan_years": 6.5,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **13.0 kg:** representative adult male within the documented 9.1-16.7 kg male range, avoiding exceptional seasonal fatness.
- **27.5 cm:** midpoint of a credible 25-30 cm height range.
- **75.0 cm:** representative head-body length within multiple institutional ranges; tail intentionally excluded.
- **0.0 m/s:** no reliable physiological top-speed measurement found.
- **6.5 years:** midpoint of the commonly reported 5-8 year average wild lifespan.
- **0.0 PSI:** powerful bite is anatomically supported, but pressure is not defensibly quantified.

## 4. Combat biology

### Primary and secondary weapons

The primary weapon is the jaw. A broad, heavily muscled skull and prominent canines make close biting the badger's most consequential attack. Strong forelimbs and long digging claws provide secondary raking/grappling utility, while the compact body can drive forward forcefully at ground level.

### Offensive mechanics

The badger is a close-range fighter rather than a pursuit predator. Its best route is to close distance, brace on short powerful limbs, seize with the jaws and use body weight and forelimbs to maintain contact. Its omnivorous dentition is less specialized for slicing flesh than a similarly sized hypercarnivore's, but its skull construction favors forceful crushing and gripping.

### Defensive adaptations and durability

There is no true armor. Defense comes from stocky construction, a low center of gravity, short robust limbs, coarse pelage, a heavy skull and a willingness to resist when cornered. The fossorial body plan makes it difficult for similar-sized opponents to topple or manipulate. This should not be exaggerated into mythical invulnerability: larger carnivores can kill badgers.

### Locomotion and maneuverability

Badgers walk, trot and can gallop, swim, and climb to a limited degree. Their low build gives useful stability and close-range directional control, but they lack the explosive turning, acceleration and vertical athleticism of cats or small arboreal predators. Field telemetry emphasizes sustained nightly movement rather than high sprint speed.

### Endurance and stamina

A Białowieża telemetry study found mean daily movement of **7 km**, with movement increasing when food was dispersed. This supports solid terrestrial endurance. It does not make the badger an elite cursorial endurance animal like a wolf or African wild dog. Seasonal winter torpor/reduced activity in colder parts of the range is an energy-saving adaptation, not combat stamina.

### Senses

Smell is the most important foraging and orientation sense, appropriate to nocturnal ground foraging and underground life. Hearing is useful, while vision is less dominant. Scent marking is central to territorial and social communication.

### Intelligence, learning and tactics

European badgers maintain long-lived sett systems, learn stable feeding routes and patches, use territorial latrines/scent marking and show flexible social organization depending on ecological conditions. These are meaningful spatial and behavioral competencies, but there is no basis for primate/corvid-level tactical cognition.

### Hunting and feeding behavior

They are opportunistic omnivorous foragers rather than specialized macropredators. Earthworms are especially important in many populations, supplemented by insects, fruit, grains, carrion, amphibians, reptiles and small mammals. They forage alone even where they live in social groups. This limits the extent to which sociality should inflate combat coordination.

### Intraspecific fighting and aggression

Badgers are territorial and can fight conspecifics, especially around territory and mating. Adult males are larger and more heavily built. Aggression is real but context-dependent; the species should not inherit the honey badger's popular reputation simply because both are called badgers.

### Predator defense

Animal Diversity Web notes that wolves, lynxes and bears can occasionally prey on Eurasian badgers, especially younger individuals, while fossorial and group lifestyles reduce exposure. An adult's robust body and willingness to defend itself make it costly prey for similarly sized attackers, but it is not safe from substantially larger predators.

### Environmental strengths

- Excavates extensive underground setts and is exceptionally competent on diggable ground.
- Low body profile and strong forequarters aid stability and digging.
- Nocturnal sensory ecology favors low-light ground activity.
- Broad omnivorous diet supports persistence across changing food conditions.
- Can remain active over multi-kilometer nightly routes.

### Environmental limitations

- No specialized high-speed pursuit adaptations.
- Short limbs limit reach and vertical mobility.
- Digging specialization is less useful on hard rock, deep water or highly exposed terrain.
- Vision is not its strongest sensory channel.
- No armor, venom, chemical spray weapon, or long-range attack.

### Major weaknesses

1. Close-range weapons require entering the opponent's danger zone.
2. No true armor despite a robust build.
3. Much smaller absolute power than wolves, large cats, great apes or megafauna.
4. Limited reach compared with long-legged, horned or long-clawed opponents.
5. Omnivorous teeth are powerful but less cutting-specialized than hypercarnivore dentition.

### Matchup archetypes

**Good matchups:** similar-sized fragile or poorly armed animals, small opponents that can be pinned at ground level, and opponents whose attacks struggle against a low compact target.

**Bad matchups:** larger canids/felids, heavily armored animals, long-reach horned or taloned attackers, highly agile animals that can strike without remaining in grappling range, and any large predator capable of overpowering the badger's mass advantage.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **18.0** | A 13 kg male is substantial for a mustelid but small on the full 225-animal absolute scale. |
| Raw Power | **30.0** | Powerful forequarters, compact musculature and jaw leverage are impressive for size, but absolute force remains far below large predators and megafauna. |
| Weaponry | **38.0** | Strong bite, prominent canines and digging claws provide a credible close-range toolkit without specialized killing claws, horns, venom or extreme reach. |
| Protection | **24.0** | Coarse coat, low profile and robust skull help, but there is no shell, osteoderm armor or exceptionally thick hide. |
| Toughness | **43.0** | Stocky mustelid construction and defensive tenacity make it difficult for similar-sized animals to subdue, while avoiding folklore-driven inflation. |
| Speed | **31.0** | Capable of galloping but not a cursorial specialist; measured field maxima are travel observations, not sprint ceilings. |
| Maneuverability | **53.0** | Low center of gravity and compact body provide good ground control, but short-legged fossorial morphology limits athletic range. |
| Endurance | **59.0** | Multi-kilometer nightly movement supports good sustained activity, but it remains below elite endurance specialists. |
| Recovery | **42.0** | Ordinary mammalian tissue recovery with strong seasonal energy storage; no exceptional regeneration. |
| Tactics | **49.0** | Spatial memory, route use, territorial behavior and flexible sociality support moderate tactical competence. |
| Senses | **58.0** | Strong olfaction and useful hearing are well suited to nocturnal terrestrial combat awareness. |
| Ferocity | **55.0** | Can fight hard when cornered or in territorial conflict, but is not indiscriminately aggressive. |
| Abilities | **46.0** | Fossorial engineering and nocturnal/olfactory specialization matter, but there is no rare venom, electricity, regeneration or armor system. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **38.0** | Powerful jaws and useful claws make a 13 kg male dangerous at close range, but absolute damage potential remains below larger dedicated predators. |
| **Defense** | **39.0** | Compact build, skull robustness and toughness help it remain functional, but lack of armor and modest mass cap the score. |
| **Agility** | **52.0** | Stable and maneuverable at ground level, but not an explosive or highly acrobatic mover. |
| **Stamina** | **59.0** | Strong nightly ranging and persistent foraging support above-average endurance without approaching elite cursorial/migratory animals. |
| **Intelligence** | **50.0** | Good spatial memory, flexible social organization and territory management, but no evidence for upper-tier problem solving. |
| **Special** | **46.0** | Fossorial specialization and sensory ecology can change terrain matchups, though they are less immediately decisive than venom, electricity or regeneration. |

### Calibration interpretation

Absolute scaling is the main constraint. The European badger is vastly above Army Ant and Axolotl in raw power, but its 13 kg body keeps it below the 24 kg Baboon and 40 kg Arctic Wolf in absolute force. Compared with Arctic Fox, the badger is substantially heavier and more powerfully built, so it receives higher Attack and Defense but lower Agility. Its Attack remains below Anteater because the giant anteater is much larger and has documented severe claw trauma. It is nowhere near Bactrian Camel in size or raw mechanical power. Stamina 59.0 is intentionally far below African Wild Dog 82.0, Arctic Wolf 86.0 and Bactrian Camel 90.0. No score is based on pound-for-pound folklore.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Sett Fortress** — Exceptional digging forelimbs and claws let the badger rapidly exploit soft ground and use burrows/earthworks as refuge, positional cover and escape infrastructure.
2. **Crushing Clamp** — A massive skull, strong jaw musculature, prominent canines and robust jaw architecture produce a dangerous close-range gripping bite without inventing an unsupported PSI value.

### Unique traits

1. **Low-Slung Bruiser** — Short robust limbs, a thick neck and compact body keep the center of gravity low and make the badger difficult for similar-sized opponents to topple or control.
2. **Night Scent Map** — Strong olfactory orientation, scent marking and learned feeding routes give the nocturnal badger reliable ground-level environmental awareness even when vision is limited.

## 8. Expanded profile content

### Habitat

European badgers occupy woodland, hedgerows, farmland, grassland, scrub, heath and increasingly some urban/suburban landscapes. Suitable soil for sett excavation and nearby foraging habitat are major requirements.

### Geographic range

*Meles meles* is widespread across much of Europe and parts of western Eurasia. Modern taxonomy separates several badger populations formerly lumped into a broader *Meles meles* concept, so future range mapping should use current species boundaries rather than legacy genus-wide distributions.

### Diet

Highly opportunistic omnivore. Earthworms dominate in many European populations, but diet also includes beetles and other insects, wasp nests, fruit, grains, tubers, carrion, amphibians, reptiles, mollusks and small mammals. This breadth is an ecological strength, not evidence of specialized predatory attack power.

### Ecology

Badgers are ecosystem engineers through excavation and long-term sett use. They also affect invertebrate populations, disperse seeds, scavenge carrion and interact with many other species around sett systems.

### Social structure

Social organization is unusually flexible. In resource-rich, high-density regions they can live in clans occupying communal setts; in lower-density areas they can be substantially more solitary. Even social badgers generally forage alone. Territory boundaries are maintained with scent marking and latrines.

### Reproduction and life history

European badgers are notable for embryonic diapause. Peer-reviewed reviews report mating across much of the year and delayed implantation that can last up to roughly eleven months. Females can show reproductive flexibility associated with condition and environmental timing. Litters commonly contain several cubs, which spend their earliest period underground.

### Conservation status

The IUCN assessment cited for *Meles meles* classifies the species as **Least Concern**. It remains widespread, although legal protection, management and conflict differ by country. In Britain, badgers receive specific legal protection while also being central to long-running bovine tuberculosis management controversies.

### Major adaptations

- Long non-retractile foreclaws and powerful forelimbs for excavation
- Low, robust fossorial body plan
- Heavy skull and powerful jaw musculature
- Strong olfactory orientation
- Extensive long-lived sett systems
- Seasonal fat accumulation and reduced winter activity in colder regions
- Broad omnivorous feeding flexibility
- Embryonic diapause

### Human interaction

Badgers are iconic European wildlife but can conflict with agriculture through digging and crop damage. They are also epidemiologically important in bovine tuberculosis management, especially in Britain and Ireland. They should not be portrayed as routine human attackers; defensive bites can be serious, but avoidance is typical when escape is available.

### Strong fun facts

- A single main sett can persist across generations and develop multiple entrances, tunnels and sleeping chambers.
- Badgers can travel several kilometers in a night; one Białowieża study averaged about **7 km daily movement**.
- Their social system is flexible: some populations form clans while others are much more solitary.
- They usually forage alone even when they share a communal sett.
- Females use delayed implantation, separating mating from the eventual timing of embryo implantation.
- Their familiar black-and-white face is paired with a surprisingly heavy, mechanically robust skull.

### Concise site-ready summary

The European badger is a compact 13 kg digging specialist built for close-range resistance rather than speed. A mature male combines a heavy skull, strong jaws, prominent canines, powerful forequarters and long excavation claws with a low, difficult-to-topple body. It is an opportunistic omnivore rather than a dedicated big-prey hunter, so its combat strength should not be inflated by badger folklore. Its strongest advantages are toughness, ground-level stability, smell, persistent nightly movement and exceptional burrow engineering.

### Detailed narrative profile

The European badger is a useful example of why Animal Battle Stats must separate proportional impressiveness from absolute combat capability. For a 13 kg mammal it is exceptionally solid: short limbs brace a broad body, the neck is thick, the skull is heavy, the sagittal crest supports powerful jaw musculature, and the forelimbs are engineered to move earth. At grappling distance that package is dangerous. A comparable fragile animal cannot casually absorb a badger bite or control its low center of gravity.

But the badger is not a miniature wolverine with mythical durability. It lacks armor, has limited reach, is not a pursuit specialist and normally makes its living on earthworms, invertebrates, fruit and other opportunistic foods rather than killing large vertebrate prey. Wolves, lynxes and bears can prey on badgers where ranges overlap. That reality places its absolute Attack and Defense in the lower-middle of a roster containing large carnivores and megafauna.

Its most distinctive biology lies in fossorial ecology. Badgers excavate elaborate setts, maintain familiar travel networks, use scent-marked territories and can cover several kilometers during nocturnal foraging. The result is an animal whose matchup improves in complex ground terrain where digging, stability and olfaction matter, while open high-speed pursuit and fights against much larger predators expose its limitations.

### Useful future structured-field ideas

- `canonical_sex`: male
- `length_basis`: head-body
- `mass_season_context`: non-exceptional adult condition
- `fossorial_specialist`: true
- `primary_weapon`: bite
- `secondary_weapon`: foreclaws
- `activity_pattern`: primarily nocturnal/crepuscular
- `social_flexibility`: solitary-to-clan depending on ecology
- `top_speed_evidence_type`: unresolved; field travel only
- `bite_force_evidence_type`: anatomical support, no defensible PSI

## 9. Image Asset

- **Target path:** `animal-research-for-update/images/badger.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Real photograph of *Meles meles* in Dumfries & Galloway, taken 14 July 2020 by Caroline Legg; **4408 × 2939** original; Wikimedia Commons records **CC BY 2.0**.
- **Source page URL:** https://commons.wikimedia.org/wiki/File:Meles_meles_(50208147127).jpg
- **Direct image URL:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Meles_meles_(50208147127).jpg
- **Suitability:** High-resolution, real adult-appearing animal, clear near-full-body lateral/three-quarter view, natural condition, no watermark. Sex is not documented, so final production promotion should prefer a sex-verified adult male if an equally strong reusable image becomes available.
- **Transparency:** Source is JPEG with a natural background. No reliable binary cutout/promotion path is available in this GitHub connector run, so no fake PNG is committed.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Reported finding/context | Confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web, *Meles meles* | https://animaldiversity.org/accounts/Meles_meles/ | Taxon, sex-specific mass, length, skull/dentition, diet, sociality, predators, conservation | Males 9.1-16.7 kg; females 6.6-13.9 kg; head-body 56-90 cm; tail 11.5-20.2 cm; massive skull, prominent canines; flexible sociality; IUCN Least Concern | **High** for synthesized species biology; secondary academic species account |
| Kent Mammal Group, Badger | https://www.kentmammalgroup.org.uk/mammals/carnivora-otter-fox-etc/badger | Independent British morphology and sex-specific size | Male 9.1-16.7 kg, 673-803 mm head-body; females smaller/lighter | **Moderate-high**; regional mammal organization |
| MammalWeb, Badger | https://www.mammalweb.org/en/learn-about-animals/51-badger | Height, general mass/length, claws, senses/ecology, lifespan context | Height 25-30 cm; body 60-90 cm; mass 7-17 kg; strong front paws; broad omnivory | **Moderate**; citizen-science/academic wildlife project summary |
| Wildlife Trusts, European badger | https://www.wildlifetrusts.org/wildlife-explorer/mammals/european-badger | British size, lifespan, habitat, diet | 75-100 cm, 8-12 kg, average lifespan 5-8 years | **Moderate-high** institutional wildlife source; broad British values |
| Kowalczyk et al. 2006, Wildlife Biology | https://nsojournals.onlinelibrary.wiley.com/doi/10.2981/0909-6396%282006%2912%5B385%3ADMATUB%5D2.0.CO%3B2 | Daily movement, field travel speed, territory use | 13 radio-tracked badgers; mean daily movement 7 km; mean speed 0.9 km/h; recorded individual maxima 2.5-7.1 km/h | **High** peer-reviewed primary field study; maxima are observed travel, not sprint ceilings |
| McClune et al. 2014, Animal Biotelemetry | https://link.springer.com/article/10.1186/2050-3385-2-5 | Locomotor behavior methodology | Tri-axial accelerometers distinguish walking, trotting and other behavior in free-ranging badgers | **High** peer-reviewed primary methodology |
| Yamaguchi, Dugdale & Macdonald 2006, Quarterly Review of Biology | https://www.journals.uchicago.edu/doi/full/10.1086/503923 | Reproduction, embryonic diapause, mating strategy | Mating through year; delayed implantation up to ~11 months; evidence relevant to superfetation | **High** peer-reviewed review |
| Canivenc & Bonnin 1979, Nature | https://www.nature.com/articles/278849a0 | Delayed implantation | Experimental evidence that implantation timing is environmentally controlled | **High** peer-reviewed experimental work |
| Woodroffe 1995, Journal of Zoology | https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/j.1469-7998.1995.tb04486.x | Reproductive timing/body condition | Wild ultrasound data show nutritional state influences implantation date | **High** peer-reviewed field research |
| Thornton et al. 2023, Conservation Physiology (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/10171820/ | Claw biology caveat | Study sampled 16-19 mm distal claw portions; this is not full claw length | **High** peer-reviewed; specifically prevents misuse as total claw dimension |
| IUCN assessment citation: Kranz et al. 2016 | https://www.iucnredlist.org/species/29673/45203002 | Conservation status | *Meles meles* assessed Least Concern | **High** species authority; assessment is older but remains the referenced global status found in current sources |
| Wikimedia Commons, Caroline Legg photograph | https://commons.wikimedia.org/wiki/File:Meles_meles_(50208147127).jpg | Image candidate/provenance | 4408×2939 real *M. meles* photograph; CC BY 2.0 | **High** for image metadata; sex not stated |

### Conflicts and caveats

- **Mass:** varies strongly by sex, geography and season. The canonical 13.0 kg is deliberately representative, not a pre-winter maximum or record.
- **Length:** sources mix head-body and total length. This report explicitly uses head-body length for `length_cm`.
- **Speed:** field studies measure travel behavior, not maximum sprint capacity. Popular 30 km/h values are not promoted to the canonical field.
- **Bite force:** powerful anatomy is clear, but PSI is unresolved. No random internet estimate is used.
- **Claw length:** a peer-reviewed study's 16-19 mm samples are distal clipping lengths, not total claws. Full-claw dimension remains unresolved.
- **Taxonomy:** older literature may use a broader *Meles meles* concept than modern treatments; range statements should be interpreted accordingly.
- **Image:** candidate is exact species and high quality but sex is not verified.

## 11. Confidence and caveats

- **Identity:** High.
- **Canonical mass:** Moderate-high.
- **Head-body length:** High.
- **Height:** Moderate.
- **Maximum speed:** Low/unresolved, hence 0.0 canonical field.
- **Bite PSI:** Low/unresolved, hence 0.0 canonical field.
- **Weapon anatomy:** High.
- **Combat behavior:** Moderate-high, with deliberate separation of anatomy from folklore.
- **Headline/substat ratings:** Moderate, pending later roster-wide normalization.
- **Conservation:** High for cited IUCN assessment, though future production migration should check for a newer global reassessment.

## 12. Cross-animal calibration notes

- **Army Ant:** Badger must be orders of magnitude higher in Size, Raw Power, Attack and Defense. Proportional insect strength cannot compress this gap.
- **Axolotl:** Badger has much greater terrestrial power, weaponry and toughness; axolotl remains far higher in regeneration-driven Special.
- **Arctic Fox:** Badger is roughly several times heavier, more compact and stronger at grappling, supporting higher Attack/Defense but lower Agility and environmental Special.
- **Baboon:** Baboon is heavier, far more agile and substantially more cognitively flexible. Badger's low build and jaw/skull specialization narrow the close-range toughness gap but do not justify higher overall combat scaling.
- **Anteater:** Giant anteater's much larger body and documented lethal claw potential justify materially higher Attack than Badger.
- **Arctic Wolf:** Wolf is about three times the canonical mass, a specialized large-prey carnivore and an elite traveler. Badger should remain well below it in Attack, Stamina and absolute Raw Power.
- **Bactrian Camel:** The 580 kg camel is in a different absolute size/power tier. Badger cannot receive high physical scores merely because it is formidable for 13 kg.
- **Potential normalization watch:** Defense 39.0 and Toughness 43.0 should be revisited once Wolverine, Honey Badger, Tasmanian Devil and additional similarly sized carnivores are researched. Attack 38.0 should be checked against future Bobcat, Coyote and comparable terrestrial predators.

## Completion verification

- Identity/taxon and canonical specimen: **complete**
- Physical measurements/ranges/uncertainty: **complete**
- Canonical factual fields: **complete**
- Combat biology/environment/weaknesses/matchups: **complete**
- All current ABS substats: **complete, one decimal**
- Six headline ratings: **complete, one decimal**
- Proposed special abilities: **exactly 2**
- Proposed unique traits: **exactly 2**
- Expanded profile/site summary/narrative: **complete**
- Source ledger with direct URLs and claim mapping: **complete**
- Image candidate and status: **complete; PNG pending**
- Cross-animal calibration: **complete**
