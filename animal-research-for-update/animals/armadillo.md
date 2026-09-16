# Armadillo Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Armadillo / Nine-banded armadillo
- **Current scientific name for the U.S./Mexican form:** *Dasypus mexicanus* Peters, 1864
- **Traditional name in much of the older literature:** *Dasypus novemcinctus* sensu lato
- **Family:** Dasypodidae
- **Status:** Living
- **Exact ABS animal represented:** The familiar nine-banded long-nosed armadillo of Mexico and the United States. A major 2025 systematic revision split the former *D. novemcinctus* complex into four species; current 2026 mammalogy literature identifies the expanding U.S. population as *D. mexicanus*. Older measurements below are labeled when they were published under the broad *D. novemcinctus* concept.
- **Canonical specimen:** Representative healthy mature adult male, **5.5 kg**, using the well-supported 3.6–7.7 kg older species-complex range and recognizing that males average somewhat larger.
- **Sexual dimorphism:** Modest male-biased size has been reported, but this is not an extreme dimorphism. A representative male is used without selecting a record-sized individual.
- **Taxonomic caveat:** Older North American ecology, anatomy, locomotion, and natural-history work usually calls this animal *D. novemcinctus*. Barthe et al. (Systematic Biology, 2025) recognized *D. mexicanus*, *D. fenestratus*, *D. novemcinctus*, and *D. guianensis* as separate species. The ABS U.S.-style armadillo should therefore migrate toward *D. mexicanus*, while legacy evidence must be interpreted geographically rather than discarded solely because it uses the older name.

## 2. Physical measurements

### Mass

University of Michigan/Animal Diversity Web material for the traditional nine-banded concept reports **3.6–7.7 kg**, average **5.5 kg**. University of Florida Extension gives **3.5–8 kg** for adults. These are mutually consistent and far more appropriate than exceptional large-armadillo values from other species.

- **Canonical mass:** **5.5 kg**
- **Representative adult range:** approximately **3.5–8.0 kg**
- **Confidence:** High for general scale; moderate-high for a canonical U.S. adult male

### Length

University of Texas DigiMorph, citing the classic Mammalian Species account, gives total length **615–800 mm**. Animal Diversity Web gives the same 0.615–0.800 m range and an average of **0.752 m**.

- **Canonical total length:** **75.0 cm**
- **Published total-length range:** **61.5–80.0 cm**
- **Confidence:** High
- **Convention:** Total length includes the long armored tail.

### Height

A standardized shoulder-height dataset was not found in strong primary/institutional sources during this run. Because the animal is low-slung and posture-dependent, inventing a height from photographs would create false precision.

- **Canonical `height_cm`:** **0.0** pending a defensible standardized measurement
- **Confidence:** Low / unresolved

### Speed and locomotion

Costa et al. (Acta Zoologica) performed the first detailed gait analysis for *D. novemcinctus*, recording 89 strides from eight animals and documenting lateral-sequence gaits, canter, transverse gallop, bound, half-bound, and crutch walk. The accessible abstract confirms measured speed as a study variable but does not expose a defensible species maximum. Popular claims of 30 mph are therefore rejected as a canonical top speed.

- **Canonical `speed_mps`:** **0.0** pending an accessible measured maximum
- **Locomotor fact:** Capable of multiple symmetrical and asymmetrical gaits, including galloping/bounding patterns
- **Confidence:** High that it can move rapidly in short bursts; low for exact maximum

### Lifespan

A recent systematic review of wild nine-banded-armadillo populations gives adult wild lifespan at roughly **8–12 years**. The IUCN specialist-group literature has likewise used about 8–12 years, while National Wildlife Federation gives a broader 7–20-year wild range and a captive record of 23 years.

- **Canonical lifespan:** **10.0 years**
- **Representative wild-adult expectation:** about **8–12 years**
- **Confidence:** Moderate-high

### Bite and dentition

The armadillo's small, relatively simple teeth are suited to its insectivorous/omnivorous feeding ecology, not powerful predatory biting. No defensible in-vivo bite-pressure measurement was found.

- **Canonical `bite_force_psi`:** **0.0**
- **Reason:** no reliable species-specific pressure measurement; bite is not a primary combat weapon

### Claws and digging apparatus

The forelimbs and claws are specialized for opening soil and excavating burrows. University of Michigan material describes burrows around 1–5 m long and from a few centimeters to 2 m below ground. The claws are mechanically meaningful tools but are not comparable in reach or cutting specialization to giant-anteater claws.

- **Exact claw length:** unresolved; no strong canonical measurement promoted
- **Combat relevance:** low-to-moderate scratching potential, high digging relevance

### Armor / carapace

Armadillos are the only living mammals with extensive dermal osteoderms. Vickaryous and Hall describe five osteoderm assemblages: head, pectoral, banded, pelvic, and tail shields; the pectoral, banded, and pelvic shields articulate into the carapace. Modern biomechanics work shows the mineralized tile/connective-tissue system combines puncture resistance with flexibility. The armor protects the dorsum well against small teeth, claws, abrasion, and some puncture threats, but the belly remains soft and the animal cannot simply become an invulnerable ball. Nine-banded armadillos do **not** normally roll fully into a ball.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 5.5,
  "height_cm": 0.0,
  "length_cm": 75.0,
  "speed_mps": 0.0,
  "lifespan_years": 10.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **5.5 kg:** directly matches the institutional average in the legacy broad-species dataset and lies centrally within 3.5–8 kg U.S. extension guidance.
- **0.0 cm height:** no sufficiently strong standardized shoulder-height measurement found.
- **75.0 cm length:** essentially the published 75.2 cm average and within the 61.5–80.0 cm range.
- **0.0 m/s:** rejects unsourced viral sprint claims; gait kinematics exist but an accessible maximum was not established.
- **10.0 years:** midpoint of the recent 8–12-year wild-adult estimate.
- **0.0 PSI:** prevents fabrication for a weak-biting insectivore.

## 4. Combat biology

### Primary and secondary weapons

The armadillo is fundamentally defensive rather than a fighting specialist. Its best active tools are the stout digging forelimbs and claws. It can scratch, brace, shove into cover, and rapidly excavate, but its small teeth are poor offensive weapons. Against another vertebrate, escape and armor are much more important than damage output.

### Offensive mechanics

A threatened individual can scramble, scratch at close range, and use a compact low body to force through vegetation or toward a burrow. It lacks long stabbing horns, large carnivore canines, venom, crushing jaws, or a specialized killing strike. Its Attack must therefore remain low on an absolute 225-animal scale.

### Defensive adaptations and durability

The carapace is the defining combat adaptation. Mineralized osteoderms embedded in the skin create a segmented protective roof over much of the head, back, sides, and tail. The movable bands preserve flexibility. This is real armor, but it is not a complete shell: ventral surfaces and limb openings remain vulnerable, and a much larger predator can bite around, crush, flip, or otherwise defeat the armor. National Wildlife Federation notes predation by mountain lions, black bears, and alligators despite the armor.

### Locomotion and maneuverability

The low center of mass and documented repertoire of walking, cantering, galloping, bounding, and half-bounding gaits give better burst mobility than its appearance suggests. It is still a short-legged terrestrial digger, not an elite pursuit runner or acrobat. Its famous startle leap is an escape reflex, not evidence of sustained agility.

### Endurance and stamina

Nine-banded armadillos spend long periods foraging and digging, but they have relatively low body temperature and basal metabolic rate for their mass. They can hold their breath for about six minutes and cross water either by swimming or walking underwater. This supports useful environmental stamina, not elite cursorial endurance.

### Senses

Olfaction is central to locating buried invertebrates. Hearing is useful, while eyesight is comparatively less important. The elongated snout and ground-focused sensory ecology help it detect food and threats at close range, but it lacks an extraordinary long-range combat sense such as echolocation.

### Intelligence and tactics

Behavior is effective but relatively stereotyped: forage, dig, flee, brace, seek burrows, and exploit cover. It can select burrow sites and navigate a home range, but there is little evidence for sophisticated cooperative combat, complex tool use, or highly flexible predatory tactics.

### Hunting / feeding behavior

It is primarily an omnivore-insectivore. The IUCN SSC Anteater, Sloth and Armadillo Specialist Group emphasizes beetles and larvae, ants, and termites, with other invertebrates, small vertebrates, and fruits also consumed. This is excavation-based foraging, not active pursuit of dangerous prey.

### Intraspecific fighting and ferocity

Adults are mainly solitary and rarely interact outside breeding. It is not an animal that routinely presses dangerous fights. Ferocity should therefore be low even though a cornered animal can defend itself physically.

### Predator defense

The defensive sequence centers on detection, rapid escape, burrow access, low-profile movement, armor, and a startling vertical leap. Unlike three-banded armadillos, the nine-banded form does not seal itself into a complete armored ball. Armor reduces the effectiveness of some attacks but does not neutralize large predators.

### Environmental strengths

- Loose soils where rapid digging creates refuge
- Brush, woodland, grassland, and edge habitat
- Warm and humid environments
- Shallow water crossings
- Night/low-light foraging
- Terrain where a low profile and armor reduce superficial injury

### Environmental limitations

- Poor cold tolerance relative to northern mammals
- Low body temperature and limited fat insulation constrain severe-cold expansion
- Soft underside remains vulnerable
- Small body mass means large predators can overpower it
- Digging defense loses value on hard rock, concrete, ice, or other impenetrable substrate
- Startle jumping can be maladaptive around vehicles

### Major weaknesses

1. Very low absolute offensive damage
2. Unarmored ventral surfaces and openings
3. Armor does not stop crushing or attacks from much larger predators
4. Short reach
5. Weak bite as a combat weapon
6. Limited cold tolerance
7. Burrowing requires suitable substrate and time

### Good matchup archetypes

- Tiny attackers that struggle to penetrate dorsal armor
- Similar-sized opponents reliant on superficial bites/scratches
- Encounters where escape into diggable substrate counts as survival
- Opponents poorly equipped to flip or crush armored prey

### Bad matchup archetypes

- Large cats, bears, crocodilians, and other predators with major size/force advantage
- Opponents able to attack the underside or limbs
- Heavy constrictors or crushers
- Large hoofed animals capable of trampling
- Any matchup on substrate where burrowing cannot contribute

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **14.0** | A 5.5 kg mammal is very small on the full roster scale. |
| Raw Power | **16.0** | Strong digging forequarters for its size, but absolute force is low. |
| Natural Weapons | **13.0** | Digging claws can scratch; bite is not a meaningful killing system. |
| Armor | **55.0** | True mineralized osteoderm armor is unusually effective for a mammal, while incomplete ventral coverage prevents a much higher score. |
| Resilience | **30.0** | Armor and robust digging body improve survival, but small mass and exposed underside limit trauma tolerance. |
| Speed | **35.0** | Capable of rapid burst gaits; exact maximum remains unresolved and is not inflated from tertiary claims. |
| Maneuverability | **45.0** | Low center of mass, multiple gaits, rapid scrambling, and startle leap provide useful repositioning without elite acrobatics. |
| Endurance | **39.0** | Sustained foraging/digging and aquatic breath-holding are useful, but physiology does not support elite pursuit endurance. |
| Recovery | **35.0** | No exceptional regeneration; ordinary mammalian recovery with some protection from initial trauma. |
| Tactics | **31.0** | Effective escape/burrow behavior but limited evidence of complex combat flexibility. |
| Senses | **44.0** | Strong smell and useful hearing support ground foraging and awareness; vision is not a standout system. |
| Ferocity | **20.0** | Primarily solitary and avoidance-oriented rather than a committed fighter. |
| Unique Abilities | **52.0** | Segmented mammalian armor and powerful burrowing meaningfully alter some matchups despite low offensive output. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **14.0** | A 5.5 kg insectivore with modest claws and weak combat dentition has little absolute damage output. |
| **Defense** | **47.0** | Genuine osteoderm armor makes this dramatically better protected than most animals of similar mass, but exposed underside and vulnerability to large predators cap the score. |
| **Agility** | **44.0** | Better burst locomotion and scrambling than its armored shape suggests, but neither high-speed pursuit nor acrobatics warrants a high roster score. |
| **Stamina** | **39.0** | Competent digger/forager with breath-holding ability, but not an endurance specialist. |
| **Intelligence** | **31.0** | Effective solitary survival behavior with limited evidence for advanced tactical flexibility or social coordination. |
| **Special** | **54.0** | Segmented osteoderm armor plus rapid burrowing are unusual, matchup-relevant biological mechanisms, though neither is an offensive disable like venom or electricity. |

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Osteoderm Aegis** — Interlocking mineralized dermal plates shield much of the dorsal body while movable bands preserve flexion. It sharply reduces the value of superficial bites and scratches from small attackers but leaves the underside and openings vulnerable.
2. **Burrow Break** — Powerful digging forelimbs can rapidly exploit suitable soil for refuge, cover, and escape. This is strongly substrate-dependent and should not function as instant invulnerability on hard ground.

### Unique traits

1. **Startle Vault** — When alarmed, the nine-banded armadillo can spring roughly 3–4 ft vertically. This abrupt reflex can disrupt an incoming small predator's timing, though it notoriously increases vehicle-strike risk.
2. **Bottom Walker** — It can hold its breath for about six minutes and cross shallow water by walking along the bottom, while also being capable of swimming. This gives unusual escape-route flexibility for a small armored terrestrial mammal.

## 8. Expanded profile content

### Habitat

Warm forests, brushlands, grasslands, riparian edges, agricultural mosaics, and suburban landscapes where soils permit digging. Burrows provide shelter and thermal buffering.

### Geographic range

Under the revised taxonomy, *D. mexicanus* extends from the central/eastern United States through Mexico toward Costa Rica. The U.S. population has undergone a striking northward and eastward expansion. A 2025 USGS study documented establishment across Missouri, southern Iowa, Georgia, South Carolina, western North Carolina, and expansion in several additional states. Older sources describing *D. novemcinctus* from the United States refer to this same lineage under the former broad taxonomy.

### Diet

Primarily beetles and larvae, ants, termites, and other invertebrates, supplemented opportunistically by small vertebrates and plant material. Its long snout, smell, and claws form an integrated excavation-foraging system.

### Ecology

A solitary, mostly nocturnal ground forager and ecosystem engineer. Burrowing changes soil structure and creates refuges that can affect other organisms. Range expansion in North America demonstrates ecological flexibility, but winter temperature remains an important constraint.

### Social structure

Adults are predominantly solitary. Interaction is concentrated around breeding; juvenile littermates can remain together and forage together during their first season.

### Reproduction and life history

One of the most distinctive mammalian reproductive systems: a single fertilized egg normally splits into **four monozygotic offspring**, producing genetically identical same-sex quadruplets. Reproduction includes delayed implantation. The IUCN specialist group reports one litter annually and roughly 140 days of gestation in the traditional account.

### Conservation status

The newly delimited *D. mexicanus* was assessed as **Least Concern** in the 2026 IUCN framework, based on wide distribution, large population, habitat tolerance, and no evidence of major decline. Its U.S. range is expanding rather than contracting.

### Major adaptations

- Mineralized dermal osteoderm armor
- Flexible transverse bands
- Strong excavation forelimbs and claws
- Long ground-foraging snout and strong olfaction
- Low-profile body
- Delayed implantation and monozygotic quadruplets
- Breath-holding and flexible water-crossing behavior
- Behavioral use of burrows for refuge and thermal buffering

### Human interaction

Armadillos commonly dig lawns, gardens, road shoulders, and other disturbed soils. Vehicle collisions are a major mortality source, exacerbated by the vertical startle response. U.S. armadillos can carry *Mycobacterium leprae*, the bacterium associated with Hansen's disease; modern wildlife-disease studies now identify the U.S. host as *D. mexicanus*. Direct handling of wild armadillos is therefore unwise, although this disease ecology is not a combat ability and receives no ABS score bonus.

### Strong fun facts

- Nine-banded armadillos do **not** normally roll completely into a ball; that famous behavior belongs especially to three-banded armadillos.
- Their armor contains actual bone embedded in the skin, making armadillos unique among living mammals in the extent of their osteoderms.
- A female typically produces four genetically identical offspring from one fertilized egg.
- They can hold their breath for around six minutes and may walk along the bottom of shallow water.
- A frightened individual can leap about 3–4 ft nearly straight upward.
- Despite the name, the flexible carapace does not always have exactly nine bands; variation occurs.
- The familiar U.S. nine-banded armadillo was reassigned to *Dasypus mexicanus* by recent systematic work after decades of being called *D. novemcinctus*.

### Concise site-ready summary

The armadillo is a small, heavily protected digging mammal whose real advantage is defense, not attack. The U.S. nine-banded form, now recognized as *Dasypus mexicanus*, weighs only about 5.5 kg but carries a flexible carapace built from mineralized osteoderms. It survives through armor, rapid scrambling, burrowing, strong smell, and unusual escape behaviors rather than a powerful bite or lethal claws.

### Detailed narrative profile

At first glance the armadillo looks like a tiny mammalian tank, but that description can badly distort its battle profile. The tank part is real: its dorsal skin contains mineralized osteoderms arranged into shields and movable bands, an engineering compromise that protects the body without locking the trunk rigid. For an animal weighing only a few kilograms, that is exceptional passive protection. A fox-sized attacker that expects an ordinary mammalian hide may find its bite or scratch landing on a much harder surface.

The mistake is turning that defense into imaginary offensive power. The nine-banded armadillo is primarily an insectivore and digger. Its forelimbs are mechanically specialized for excavation, its teeth are not a carnivore's killing apparatus, and its normal response to danger is to escape rather than stand and fight. Against a large predator, the armor does not erase the mass difference. Mountain lions, bears, and alligators can still prey on armadillos, and the belly, legs, and armor margins remain exploitable.

Its mobility is also more interesting than the stereotypical shuffle suggests. Kinematic research documents several gait patterns, including cantering and bounding. A startled animal can launch itself vertically, and in suitable soil it can use digging ability as an escape system. Water is not an absolute barrier either: it can swim and can hold its breath long enough to walk along the bottom of shallow water. These traits make it awkward prey, but they do not justify confusing escape versatility with high combat agility.

The modern taxonomic story is itself notable. The animal spreading across the United States was long treated as *Dasypus novemcinctus*. Genomic and morphological revision of the nine-banded complex now supports four species, with the North American lineage recognized as *D. mexicanus*. ABS should use the current name while retaining geographically appropriate older research as legacy evidence. This is a good example of why the overhaul should track evidence provenance rather than simply copy a familiar species label.

### Useful future structured-field ideas

- `armor_type`: segmented dermal osteoderms
- `armor_coverage`: dorsal/head/tail partial coverage; ventrum exposed
- `digging_specialist`: true
- `burrow_depth_m_range`: approximately 0.05–2.0 in legacy North American accounts
- `burrow_length_m_range`: approximately 1–5
- `breath_hold_minutes`: approximately 6
- `startle_jump_cm`: approximately 90–120, behavioral estimate
- `taxon_legacy_name`: *Dasypus novemcinctus* sensu lato
- `taxonomic_revision_year`: 2025 publication / 2024 online systematic revision

## 9. Image Asset

- **Target research path:** `animal-research-for-update/images/armadillo.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** U.S. National Park Service photograph of a nine-banded armadillo at Big Thicket National Preserve, Texas, taken 14 May 2019. Real wild animal, clear near-full-body side view, 4000 × 3000 original, public-domain U.S. federal work. The source labels it *D. novemcinctus* under the pre-revision taxonomy; geographically this Texas animal belongs to the current *D. mexicanus* concept.
- **Source page:** https://commons.wikimedia.org/wiki/File:Nine-banded_armadillo_(Dasypus_novemcinctus)_(b50b52cb-ce41-4871-af41-c55670530b76).JPG
- **Original NPS source:** NPGallery accession `b50b52cb-ce41-4871-af41-c55670530b76` (linked from the Commons record)
- **Direct image URL:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Nine-banded_armadillo_(Dasypus_novemcinctus)_(b50b52cb-ce41-4871-af41-c55670530b76).JPG
- **Selection caveat:** Sex is not stated. Because sexual size dimorphism is modest, this remains a strong representative candidate, but a later production pass may replace it with a verified adult male if an equally strong reusable photograph is found.
- **Binary note:** Current GitHub text-file tooling does not safely create the required binary transparent PNG, so no fake/text-encoded image was committed.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Reported value/finding | Context | Confidence / caveat |
|---|---|---|---|---|---|
| Barthe et al., Systematic Biology, 2025 | https://academic.oup.com/sysbio/article/74/2/177/7697439 | Taxonomy | Four species recognized within former *D. novemcinctus* complex, including *D. mexicanus* | Range-wide genomic/museomic revision | **High**; major current systematic evidence |
| Bist et al., Journal of Mammalogy, 2026 | https://academic.oup.com/jmammal/article-abstract/107/3/546/8684158 | Current U.S. taxon | U.S. expanding lineage treated as Mexican long-nosed armadillo, *D. mexicanus* | U.S. phylogeography | **High** |
| University of Michigan / Animal Diversity Web legacy account | https://animaldiversity.org/accounts/Dasypus_novemcinctus/ | Mass, length, physiology, ecology | 3.6–7.7 kg, avg 5.5 kg; 0.615–0.800 m, avg 0.752 m; male larger; low body temperature/metabolism | Older broad taxonomic concept | **Moderate-high** for North American morphology; taxonomy legacy caveat |
| University of Florida IFAS Extension | https://ask.ifas.ufl.edu/publication/UW082 | Adult mass | 3.5–8 kg | Florida/U.S. armadillos under old name | **High** for regional size |
| University of Texas DigiMorph | https://www2.geo.utexas.edu/specimens/Dasypus_novemcinctus/ | Size and anatomy | 615–800 mm total length; 3–8 kg | Texas museum material/classic account | **High** for scale; old taxonomy |
| Costa et al., Acta Zoologica | https://onlinelibrary.wiley.com/doi/10.1111/azo.12231 | Locomotion | 8 animals, 89 strides; six gait patterns including canter, gallop, bound and half-bound | Captive corridor kinematics in Brazil | **High** for gait repertoire; population may not be current *D. mexicanus*, and accessible abstract does not justify a top-speed field |
| Vickaryous & Hall, Journal of Morphology | https://onlinelibrary.wiley.com/doi/abs/10.1002/jmor.10475 | Armor anatomy | Osteoderms in head, pectoral, banded, pelvic and tail shields; carapace organization | *D. novemcinctus* traditional concept | **High** for armadillo armor anatomy |
| Tapered Tiles Modulate Flexibility, PubMed, 2025 | https://pubmed.ncbi.nlm.nih.gov/40424237/ | Armor mechanics | Mineralized tiles plus soft tissues create flexible, puncture-resistant segmented armor | Nine-banded armadillo biomechanical model | **High** for mechanism |
| IUCN SSC Anteater, Sloth and Armadillo Specialist Group | https://xenarthrans.org/species/armadillos-2/nine-banded-armadillo/ | Diet, sociality, reproduction, conservation | Mainly nocturnal; adults solitary; four monozygotic offspring; 140-day gestation; LC in traditional assessment | Legacy broad taxon | **High** institutionally, but taxonomic assessment predates/overlaps split |
| IUCN 2026 *D. mexicanus* assessment summary | https://doi.org/10.5281/zenodo.17033774 | Current conservation/range taxonomy | *D. mexicanus* Least Concern; wide distribution and expanding U.S. population | Current taxonomic framework | **High**; assessment text may be accessed through IUCN/MDD-linked records |
| DeGregorio & Deshwal / USGS, 2025 | https://www.usgs.gov/publications/current-distribution-nine-banded-armadillo-dasypus-novemcinctus-united-states | U.S. range expansion | Expansion through Missouri, southern Iowa, Georgia, Carolinas and other states | U.S.; published immediately around taxonomic transition | **High** for distribution; uses old species name |
| University of Michigan BioKIDS | https://biokids.umich.edu/critters/Dasypus_novemcinctus/ | Burrows, swimming, breath holding | Burrows 1–5 m; few cm to 2 m deep; breath hold up to ~6 min; swims/walks underwater | Compiled legacy natural history | **Moderate** |
| Library of Congress Science Reference Section | https://www.loc.gov/everyday-mysteries/zoology/item/how-high-can-a-nine-banded-armadillo-jump/ | Startle leap, breath holding, quadruplets | ~3–4 ft vertical jump; breath hold 6+ min | Compiled authoritative reference | **Moderate-high** for behavior, not a controlled performance measurement |
| Systematic review, Diversity 2025 | https://www.mdpi.com/1424-2818/17/8/582 | Wild lifespan and disease ecology | Adult wild lifespan estimated 8–12 years; leprosy reservoir discussion | Literature synthesis | **Moderate-high** |
| Sciandra et al., Journal of Wildlife Diseases, 2026 | https://pubmed.ncbi.nlm.nih.gov/41962936/ | Human interaction / disease taxonomy | Leprosy-causing bacteria studied in Alabama *D. mexicanus* | U.S. current taxonomy | **High** |
| NPS / Wikimedia Commons image | https://commons.wikimedia.org/wiki/File:Nine-banded_armadillo_(Dasypus_novemcinctus)_(b50b52cb-ce41-4871-af41-c55670530b76).JPG | Image provenance | 4000×3000 real NPS photograph, Big Thicket, Texas, public domain | Wild U.S. animal | **High** provenance; sex unstated |

### Evidence conflicts and uncertainty

- **Taxonomy is the largest issue.** The familiar U.S. animal should now be *D. mexicanus*, but nearly all classic U.S. literature uses *D. novemcinctus*. Geographic provenance matters when carrying measurements forward.
- **Top speed:** no strong maximum is promoted. A real gait study exists, but the accessible evidence does not support the ubiquitous 30 mph claim.
- **Height:** left 0.0 rather than estimated visually.
- **Bite force:** left 0.0; the bite is not the armadillo's primary weapon and no reliable PSI measurement was found.
- **Claw dimensions:** functional digging evidence is strong, exact canonical claw length is not.
- **Armor:** protection is substantial against small-scale puncture/scratch threats but should never be modeled as complete shell immunity.

## 11. Confidence and caveats

- **Overall identity confidence:** High, with an important current taxonomic migration from legacy *D. novemcinctus* to *D. mexicanus* for the U.S./Mexican animal.
- **Mass/length confidence:** High-to-moderate-high.
- **Height confidence:** Insufficient; deliberately 0.0.
- **Top-speed confidence:** Insufficient for a canonical maximum; deliberately 0.0.
- **Lifespan confidence:** Moderate-high at 10 years as a representative wild-adult value.
- **Bite-force confidence:** Insufficient for PSI; deliberately 0.0.
- **Armor confidence:** High for anatomy and qualitative mechanical significance.
- **ABS ratings confidence:** Moderate. Defense and Special are the strongest placements; Attack is intentionally low under absolute roster scaling.

## 12. Cross-animal calibration notes

- **Versus Arctic Fox (4 kg class):** Armadillo Attack **14.0** should be below Arctic Fox **17.0**, because the fox is a true small predator. Armadillo Defense **47.0** should be dramatically above Arctic Fox **18.0** because mineralized armor is a direct protective mechanism.
- **Versus Alpaca:** Armadillo's much smaller mass requires far lower absolute Attack and Raw Power. Its armor can exceed the alpaca in specialized protection without implying that the armadillo would win a direct size-mismatched fight.
- **Versus Giant Anteater:** Both are xenarthrans with digging forelimbs, but the giant anteater is around an order of magnitude heavier and has documented long, dangerous foreclaws. Armadillo Attack **14.0** must remain far below Anteater **53.0**. This prevents proportional-strength leakage.
- **Versus Arctic Wolf:** A 40 kg wolf overwhelmingly exceeds the armadillo in offensive force, tactics, and endurance. Armor can make the first bite awkward but does not justify compressing the matchup.
- **Versus Alligator:** Both have dermal armor, but the alligator combines far greater body mass with measured multi-kilonewton bite force. Armadillo Defense **47.0** is a small-animal armor score, not alligator-class overall survivability.
- **Agility check:** The startle jump and quick scramble are not treated as evidence of elite agility. **44.0** reflects maneuverability, not a dubious internet sprint speed.
- **Special check:** **54.0** is above ordinary mammals because segmented osteoderm armor plus burrowing are genuinely unusual matchup mechanisms, but remains below specialists such as Anglerfish **76.0** and Arctic Fox **72.0** whose prior Special scores already occupy stronger specialization bands.
- **Future audit:** Revisit Armor/Defense spacing when pangolin, turtle/tortoise, crocodilians, rhinos, and other armored taxa have completed research. Also ensure the production taxonomy does not accidentally retain U.S. imagery while labeling the animal narrowly as South American *D. novemcinctus*.
