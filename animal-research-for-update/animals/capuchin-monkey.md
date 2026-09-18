# Capuchin Monkey Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Capuchin Monkey, represented here as the tufted/brown/black-capped capuchin
- **Scientific name:** *Sapajus apella* (Linnaeus, 1758)
- **Family:** Cebidae
- **Status:** Living
- **Exact ABS animal represented:** *Sapajus apella*, not a generic composite of all capuchins and not the white-faced capuchin *Cebus capucinus*. Mammal Diversity Database v2.5 recognizes *Sapajus apella* as a species and records the historical combination *Cebus apella* among its nomenclature.
- **Canonical specimen:** Healthy mature adult male, **4.0 kg**, **45.0 cm head-body length**, plus roughly **47.0 cm tail**. Males are selected because the species is moderately sexually dimorphic and males are consistently heavier than females.
- **Sexual dimorphism:** Zoo datasets place males roughly 2.3-4.8 kg versus females 1.3-3.4 kg, and a 2021 *S. apella* study explicitly describes males as exceeding females in body mass. Dominance and access to females can also alter male body size and secondary sexual appearance.
- **Population/taxonomy caution:** Older literature frequently uses *Cebus apella* and historical broad concepts of that taxon sometimes included populations now split into other *Sapajus* species. Species-specific *S. apella* evidence is preferred here. Comparative robust-capuchin evidence is labeled when used.

## 2. Physical measurements

### Mass

Zoo Zagreb reports *S. apella apella* males at **2.3-4.8 kg** and females at **1.3-3.4 kg**. Zoa Nature gives males **3.5-3.9 kg** and females **2.5-3.0 kg**. A current wild *S. apella* study confirms that body mass changes with fruit abundance and social status, with the alpha male feeding more and showing more aggression at feeding trees.

- **Canonical adult male mass:** **4.0 kg**
- **Credible male range:** approximately **2.3-4.8 kg** across zoo references
- **Confidence:** Moderate-high
- **Reasoning:** 4.0 kg represents a robust mature male without selecting the 4.8 kg upper end as normal.

### Length and tail

Zoo Zagreb reports body length **38-46 cm** and tail length **38-49 cm**. Zoa Nature gives males **32-56 cm** body length and **38-56 cm** tail length.

- **Canonical head-body length:** **45.0 cm**
- **Canonical tail context:** **47.0 cm**
- **Approximate total nose-to-tail-tip span if laid straight:** about **92 cm**, but the site's `length_cm` should remain head-body length to avoid mixing tail conventions across mammals.
- **Confidence:** Moderate-high

### Height

A standardized standing/shoulder height is not a normal reference measurement for this arboreal quadrupedal primate. Deriving it from photographs would create false precision.

- **Canonical `height_cm`: 0.0**

### Speed and locomotion

No defensible instrumented species-specific maximum running or climbing speed was located. The species is an arboreal quadruped with climbing, leaping, branch-running and terrestrial movement. Comparative locomotor work on wild brown capuchins shows that locomotor patterns relate closely to foraging and substrate use, but does not justify a clean maximum m/s field.

- **Canonical `speed_mps`: 0.0** pending a defensible maximum
- **Combat interpretation:** high maneuverability and acceleration on complex supports should be scored separately from unknown top speed.

### Lifespan

Zoa Nature lists **32 years**, while zoo sources for robust capuchins commonly report wild longevity around 15-25 or more years and captive longevity beyond 40. The variance reflects wild versus captive context and source conventions.

- **Canonical `lifespan_years`: 32.0**
- **Confidence:** Moderate
- **Caveat:** this is a species-reference lifespan, not a claim that the average wild individual survives 32 years.

### Bite, teeth and jaws

Capuchins have incisors, canines and robust postcanine teeth adapted to an omnivorous diet that includes hard seeds and animal matter. Their bite can injure similarly sized opponents, but no credible species-specific bite-pressure PSI measurement was found.

- **Canonical `bite_force_psi`: 0.0**
- **Do not convert:** jaw-muscle morphology, food-processing performance, or bite-force estimates for other capuchin taxa are not species-specific PSI measurements.

### Hands, tail and tool handling

The hands are highly dexterous and can grip, pull, strike and manipulate objects. The tail is semi-prehensile/prehensile in locomotor support, providing an additional stabilizing contact during arboreal movement. It should not be treated as a constricting weapon. Captive *Cebus apella* experiments show selection, transport and use of functionally appropriate tools. Other robust *Sapajus* populations provide exceptional comparative evidence of habitual stone-hammer traditions, but those species-level findings are not silently assigned to every wild *S. apella* population.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 4.0,
  "height_cm": 0.0,
  "length_cm": 45.0,
  "speed_mps": 0.0,
  "lifespan_years": 32.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **4.0 kg:** representative robust adult male within documented male ranges.
- **0.0 cm height:** no defensible standardized standing-height field.
- **45.0 cm length:** representative adult head-body length, avoiding inconsistent inclusion of the tail.
- **0.0 m/s:** no strong species-specific maximum speed measurement located.
- **32.0 years:** supported species-reference lifespan, with explicit wild/captive uncertainty.
- **0.0 PSI:** no reliable species-specific bite-pressure measurement.

## 4. Combat biology

### Primary weapons

The primary built-in weapons are the jaws and canines, backed by strong forelimbs and grasping hands. A capuchin can bite, grab, pull, scratch with nails, wrestle and use rapid positional changes. At roughly 4 kg, however, absolute damage remains far below medium carnivores, great apes and large ungulates.

### Offensive mechanics

A capuchin's best natural attack sequence is close and mobile: seize or stabilize with hands, bite exposed tissue, disengage, and reposition. Dexterity lets it control small objects and exploit openings more flexibly than a similarly sized animal limited to mouth attacks. Tool use can expand the behavioral repertoire, but ABS should not assume that a convenient stone or stick is always present in a neutral arena.

### Defensive adaptations and durability

There is no armor, thick hide, shell or specialized shock-resistant structure. Fur and flexible movement provide little direct protection against teeth, talons or crushing attacks. Defense is therefore primarily active: evasion, climbing, branch choice, group vigilance and intelligent avoidance. A 4 kg primate is physically fragile against much larger roster animals.

### Locomotion and maneuverability

Brown capuchins are versatile arboreal quadrupeds. Their hands and feet grasp supports, the tail adds stability, and their compact body allows quick direction changes in branches. Comparative wild work shows meaningful variation in quadrupedal behavior tied to substrate and foraging strategy. On open ground they lose much of the three-dimensional advantage that makes their movement difficult to track in canopy.

### Endurance

Daily life includes prolonged travel and foraging, but there is no evidence that *S. apella* is an elite pursuit-endurance specialist. Its stamina should exceed a pure burst ambusher but remain below animals selected for long-distance pursuit, migration, sustained cursorial travel or extreme environmental endurance.

### Senses

Vision is central for branch movement, food selection, social signaling and hand-eye coordination. Hearing and olfaction contribute to environmental awareness. The species has strong practical sensory integration but no echolocation, electroreception or other extraordinary long-range sensory mechanism.

### Intelligence, learning and tactics

This is the species' standout combat-relevant domain. In controlled *Cebus apella* work, subjects learned food-tool-hindrance relationships and generalized solutions to novel versions. In another study, capuchins viewed an apparatus, traveled **8 m** out of sight, selected the functionally appropriate tool, then carried it back. Token-mediated experiments also support flexible relationships among tokens, tools and functions. This is strong evidence for memory, causal flexibility and object manipulation, while still not equating capuchins with humans or assuming every individual is a trained tool expert.

### Hunting and feeding behavior

The species is an opportunistic omnivore. A long-term southeast Brazil study of *Cebus apella* recorded a plant-heavy but seasonally flexible diet, including fruit pulp, seeds, flowers, leaves/shoots and roots, with crop use around the forest. Colombian Amazon observations found a strongly insectivorous-frugivorous pattern and behavioral adjustment to seasonal resource availability. Zoo references also document eggs and small vertebrates in the diet.

### Intraspecific fighting and social competition

Groups have dominance hierarchies. A 2021 *S. apella* study describes males competing for alpha rank, although direct male competition over copulations can be relatively uncommon within established groups. A 2024 wild study found the alpha male more aggressive at feeding trees and feeding more frequently and for longer periods. Aggression is therefore real and strategically linked to rank/resources, but the species is not a nonstop berserker.

### Predator defense

The principal defenses are vigilance, rapid arboreal escape, group awareness, alarm/social information and access to small supports. Against a larger predator that secures a bite or grip, the capuchin lacks structural protection. Trees can reverse a matchup against terrestrial opponents that cannot climb, but neutral ground removes much of that advantage.

### Environmental strengths

- Complex forest canopy with many escape supports
- Branch networks that reward grasping hands/feet and tail-assisted balance
- Environments containing manipulable objects
- Social settings where warning and coordinated attention matter
- Patchy food environments that reward behavioral flexibility

### Environmental limitations

- Open ground removes much of the three-dimensional escape advantage
- Water is not a preferred combat environment
- Tiny absolute mass relative to most serious mammalian fighters
- No armor or dedicated killing weapon
- Tool advantages depend on availability, selection and time to manipulate an object

### Major weaknesses

1. Only about 4 kg in the canonical specimen
2. No armor or thick protective tissue
3. Bite is dangerous locally but not a high-force roster weapon
4. Hands are versatile but not clawed raptor/carnivore weapons
5. Vulnerable to one decisive bite, crush or talon strike from much larger opponents
6. Tool use is situational rather than an innate ranged weapon system

### Matchup archetypes

**Favorable:** similarly sized fragile animals that are less dexterous; small opponents in complex arboreal terrain; contests where object manipulation and repeated repositioning matter.

**Unfavorable:** medium/large carnivores with decisive bite-and-hold mechanics; armored opponents; raptors with aerial strike advantage; large primates; large ungulates; aquatic specialists; any matchup where the opponent can absorb a capuchin bite and end the fight with one high-force attack.

## 5. Proposed ABS substats

All ratings use the absolute 225-animal roster scale required by `CALIBRATION.md`.

| Substat | Score | Evidence-based justification |
|---|---:|---|
| Raw Power | **16.0** | Strong and robust for a small monkey, but only ~4 kg and vastly below baboons, great apes, large carnivores and megafauna in absolute force. |
| Weaponry | **20.0** | Canines, jaws and grasping hands can injure small opponents, but there are no claws, horns, venom or high-force dedicated weapons. |
| Protection | **8.0** | Fur and flexible body offer minimal passive protection; no armor or thick hide. |
| Toughness | **22.0** | Athletic primate body and persistence exceed very fragile small animals, but major trauma from a larger opponent is rapidly incapacitating. |
| Speed | **40.0** | Quick in practical movement, but no defensible maximum speed supports a high top-speed score. |
| Maneuverability | **82.0** | Excellent branch control, grasping extremities, tail-assisted stability and rapid three-dimensional repositioning. |
| Endurance | **56.0** | Sustained daily foraging/travel is meaningful, but not specialized pursuit endurance. |
| Recovery | **47.0** | Ordinary mammalian healing and conditioning, without unusual regeneration. |
| Tactics | **91.0** | Strong causal flexibility, memory, tool selection and object manipulation demonstrated experimentally. |
| Senses | **65.0** | Strong visual-motor integration and useful hearing/olfaction, but no extreme specialized sense. |
| Ferocity | **49.0** | Rank and resource aggression are real, yet the species normally relies heavily on social hierarchy and avoidance rather than suicidal attack. |
| Abilities | **70.0** | Dexterous manipulation and flexible tool use can change some matchups, while remaining environment-dependent. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **23.0** | Biting, grabbing and object-assisted striking can matter against small opponents, but 4 kg body mass caps absolute damage sharply. |
| **Defense** | **17.0** | Active evasion is useful, but passive protection is poor and a secured hit from a larger predator is dangerous. |
| **Agility** | **84.0** | Excellent arboreal balance, grasping control, turning and three-dimensional repositioning without using unsupported top speed as a proxy. |
| **Stamina** | **56.0** | Capable daily traveler/forager, but not an elite endurance specialist. |
| **Intelligence** | **92.0** | Experimental evidence supports flexible tool choice, memory, causal problem solving and complex social cognition. |
| **Special** | **72.0** | Dexterous hands plus flexible object/tool use are rare and matchup-changing when suitable objects exist, but are not guaranteed weapons. |

### Normalization check

The capuchin must not inherit the physical ratings implied by its cognitive reputation. Its **Raw Power 16.0** and **Attack 23.0** preserve a huge absolute gap from Arctic Wolf, Anaconda, Alligator, Camel and Cape Buffalo. Conversely, **Intelligence 92.0** can legitimately sit near the roster's cognitively elite animals because that category measures behavioral flexibility rather than body size. **Agility 84.0** reflects control and maneuverability, not an unsupported sprint speed. Special is below extreme venom/electric/echolocation systems because tool use is situational and substrate-dependent.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Functional Tool Choice** - Experimental *Cebus apella* subjects can remember a task, select an appropriate tool while the apparatus is out of view, transport it back and use it. In a matchup with suitable loose objects, this can expand reach and striking options.
2. **Canopy Reposition** - Grasping hands and feet, tail-assisted balance and arboreal quadrupedal control allow rapid changes of support, angle and elevation that are difficult for terrestrial opponents to follow.

### Unique traits

1. **Dexterous Generalist** - Hands, behavioral flexibility and an omnivorous foraging strategy let the animal manipulate many food types and physical problems rather than relying on one specialized feeding method.
2. **Rank-Responsive Male Build** - Male morphology and body condition can vary with social status and female access, showing a meaningful link between social competition and adult male phenotype.

## 8. Expanded profile

### Habitat and geographic range

*Sapajus apella* occupies northern and central South America east of the Andes, particularly Amazonian and Guianan forest regions under modern taxonomic treatments. It uses tropical forest and other wooded habitats and is sufficiently behaviorally flexible to exploit disturbed or seasonally variable environments in parts of its range.

### Diet and ecology

The species is a highly flexible omnivore. Long-term field research documents heavy fruit use plus seeds, flowers, vegetative matter and opportunistic crop feeding. Colombian Amazon work found arthropods and fruit dominating observations and showed diet shifting with resource availability. Hard-to-process foods reward strong jaws, manual dexterity and learned extraction techniques.

### Social structure

Brown capuchins live in multi-male, multi-female social groups with clear dominance relationships. Alpha males can receive disproportionate feeding access and grooming. Social bonds and hierarchy affect aggression, affiliation and resource access. This supports high tactical/social cognition but does not mean a lone ABS specimen receives group combat assistance.

### Reproduction and life history

Zoo references report gestation around **150-160 days** and usually one infant. Young males disperse after sexual maturation in some populations. Development is prolonged, consistent with the learning demands of complex primate foraging and social life.

### Conservation

Mammal Diversity Database links the current *S. apella* IUCN assessment, and major zoological references list the species as **Least Concern**. A 2024 habitat-conversion analysis notes that its broad extent of occurrence has nevertheless experienced substantial conversion, especially to pasture. Least Concern should therefore not be interpreted as absence of regional habitat pressure or wildlife-trade risk.

### Major adaptations

- Grasping hands and feet
- Tail-assisted arboreal stability
- Robust jaws for difficult foods
- Flexible omnivory
- High visual-motor coordination
- Strong learning and memory
- Object manipulation and tool-use capacity
- Social learning and dominance awareness

### Human interaction

Capuchins have a long history in captivity, behavioral research and the wildlife trade. Their intelligence makes them compelling research subjects but also creates welfare problems when treated as simple pets. Habitat conversion and illegal trade can affect local populations even where the species remains globally Least Concern.

### Genuine fun facts

- Controlled brown-capuchin experiments showed subjects could remember which tool was needed after walking **8 m** away from the apparatus and losing visual contact with it.
- Captive tufted capuchins have learned tool-food-hindrance problems and generalized solutions to new versions.
- Historical *Cebus apella* experiments documented hammer use to open nuts as early as 1990.
- Robust capuchin relatives can routinely handle stones exceeding 1 kg, an extraordinary proportional load, but ABS does not convert that proportional feat into great-ape-level raw power.
- Male appearance and body size can change with dominance context and access to females.
- A 44-month field diet study documented consumption of **71 plant species** in one semideciduous-forest population.

### Concise site-ready summary

The tufted capuchin is a small but exceptionally adaptable South American primate. A mature male weighs around 4 kg and relies on quick arboreal movement, grasping hands, a stabilizing tail, biting and unusually flexible problem solving. Its natural weapons are modest on the full ABS scale, but experiments demonstrate sophisticated memory and functional tool selection. In trees or around manipulable objects it can outmaneuver and outthink many similarly sized opponents; against a much larger predator, however, intelligence cannot compensate for the enormous gap in mass, armor and stopping power.

### Rich narrative profile

A capuchin does not win by standing still and trading force. Its body is designed for a world of branches, handholds and problems that can be manipulated. Four grasping extremities and a supportive tail let it shift position while keeping multiple contact points, and a curious, flexible brain continually evaluates food, objects, competitors and routes. That combination produces a fighter whose strongest advantages are control and decision-making rather than damage output.

The distinction matters on ABS's absolute scale. A four-kilogram monkey cannot be treated like a miniature ape simply because it can move stones or solve tool tasks. Its jaws can puncture small targets and its hands can wrestle or strike, but it has little passive protection. A wolf-sized predator that secures a bite has crossed the capuchin's main defensive barrier, which is not hide or armor but avoidance.

Its intelligence is much less ambiguous. Brown capuchins have solved multi-part physical tasks, remembered the function of unseen apparatuses, selected suitable tools and transported them for later use. This makes the animal unusually capable of exploiting a complex arena. Still, tool use remains conditional. ABS should not spawn a hammer into its hand by default. The biologically grounded advantage is the capacity to recognize and use an available object, not a guaranteed external weapon.

## 9. Mandatory image section

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/capuchin-monkey.png` (not present; binary cutout/commit pending)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Tufted_capuchin_on_a_branch_in_Singapore.jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/5/5b/Tufted_capuchin_on_a_branch_in_Singapore.jpg
- **file_format_verified:** Source is JPEG, 3935 x 3935
- **alpha_verified:** No. Source has an opaque photographic background; no PNG has been produced.
- **full_body_verified:** Yes. Direct visual inspection shows head, torso, all four hands/feet and the complete curled tail within frame.
- **adult_verified:** No. The source identifies exact *Sapajus apella* but does not state age; apparent adulthood is not treated as proof.
- **sex_verified_or_unknown:** Unknown; not inferred from appearance.
- **license_status:** CC BY-SA 4.0, author Basile Morin; Commons Featured Picture and Quality Image.
- **notes:** Excellent high-resolution full-body candidate with a clean silhouette, but mandatory adulthood is not source-verified. Do not mark complete and do not commit a derived cutout until adulthood/provenance standard is satisfied and binary processing is available.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding / caveat | Confidence |
|---|---|---|---|---|
| ASM Mammal Diversity Database v2.5 | https://www.mammaldiversity.org/taxon/1000843/ | Taxonomy | Recognizes *Sapajus apella*; current taxonomic authority | High |
| Zoo Zagreb | https://zoo.hr/smedi-kapucin-sapajus-apella-apella/ | Dimensions, mass, diet, reproduction | Body 38-46 cm; tail 38-49 cm; males 2.3-4.8 kg, females 1.3-3.4 kg | Moderate-high |
| Zoa Nature Fréjus | https://www.zoo-frejus.com/les-animaux/le-capucin-apelle/ | Sex-specific dimensions, lifespan, social structure | Males 3.5-3.9 kg, male body 32-56 cm, tail 38-56 cm; 32-year lifespan | Moderate |
| Paukner 2021, Ecology and Evolution | https://doi.org/10.1002/ece3.7483 | Dimorphism/dominance | *S. apella* males exceed females in mass; dominance/female access can affect secondary sexual phenotype | High |
| Gazes et al. 2022, American Journal of Primatology | https://doi.org/10.1002/ajp.23365 | Social networks/dominance | Structured dominance and affiliation in brown capuchin social networks | High |
| Judge & Bruno 2012 | https://doi.org/10.1002/ajp.21987 | Tool memory/selection | Subjects selected correct tools 8 m away and transported them back to unseen task | High |
| PubMed tool-learning study | https://pubmed.ncbi.nlm.nih.gov/20718553/ | Causal flexibility | Capuchins generalized food-tool-hindrance solutions | High |
| Westergaard et al. 1998 | https://pubmed.ncbi.nlm.nih.gov/24399274/ | Symbolic/tool cognition | Token-mediated requests for tools and functional relations | Moderate-high |
| Anderson 1990 | https://pubmed.ncbi.nlm.nih.gov/2391044/ | Hammer use | Captive *Cebus apella* used objects as hammers to open nuts | High |
| Galetti & Pedroni | https://doi.org/10.1017/S0266467400007689 | Wild diet | 44 months, 367 bouts, 71 plant species; strong seasonal flexibility | High |
| University of Washington / Colombian Amazon study | https://biology.washington.edu/research/publications/diet-and-feeding-behavior-group-brown-capuchin-monkeys-cebus-apella-according | Diet/resource response | 708 observation hours; insectivorous-frugivorous diet shifted with availability | High |
| Wright 2007 | https://doi.org/10.1002/ajp.20391 | Locomotion | Wild brown-capuchin locomotor/substrate behavior linked to foraging strategy | High |
| Wild body-mass study 2024 | https://pubmed.ncbi.nlm.nih.gov/39267526/ | Body condition/dominance | Fruit abundance and rank affect mass/behavior; alpha male more aggressive at feeding trees | High |
| Habitat-conversion study 2024 | https://link.springer.com/article/10.1007/s10764-024-00436-4 | Conservation | Extensive habitat conversion within *S. apella* EOO despite LC status | High |
| Wikimedia Commons, Basile Morin | https://commons.wikimedia.org/wiki/File:Tufted_capuchin_on_a_branch_in_Singapore.jpg | Image candidate | Exact *S. apella*, 3935x3935, CC BY-SA 4.0, complete body visually verified; adulthood/sex not stated | High for image identity/license, low for age/sex |

### Source conflicts and uncertainty

1. **Taxonomic history:** older *Cebus apella* literature can refer to a broader taxonomic concept. Exact modern *S. apella* studies receive priority; robust-capuchin comparisons are labeled.
2. **Mass:** zoo references overlap but use different populations and husbandry contexts. 4.0 kg is a representative combat male, not a universal mean.
3. **Lifespan:** sources mix maximum/reference lifespan and wild/captive conditions. The 32-year field should be treated as a representative species-reference value, not an observed wild mean survival.
4. **Speed:** no credible species-specific maximum was found, so 0.0 is retained rather than copying an unsourced web speed.
5. **Bite:** no reliable species-specific PSI measurement was found, so 0.0 is retained.
6. **Tool use:** strong experimental evidence exists for brown/tufted capuchins, but the spectacular habitual stone traditions of other *Sapajus* species should not be automatically generalized to every wild *S. apella* population.

## 11. Cross-animal normalization notes

- **Versus Bullet Ant:** Capuchin is enormously stronger in absolute mechanical terms despite the ant's proportional feats. Its physical scores must remain far above the ant without approaching large mammals.
- **Versus Bullfrog:** Both can be agile at their own scale, but the capuchin has much greater manipulation, cognition and versatile locomotion. Bullfrog jumping performance does not imply equivalent tactical agility.
- **Versus Bobcat:** Bobcat should remain decisively higher in Attack because claws, carnassial/canine bite mechanics and predatory specialization are more lethal. Capuchin should dominate Intelligence and object manipulation.
- **Versus Arctic Wolf:** Wolf retains a huge Attack/Defense and absolute-power advantage. Capuchin can be more maneuverable in canopy and cognitively flexible but cannot close the physical gap.
- **Versus Camel/Cape Buffalo:** The several-hundred-kilogram mass gap must remain obvious. Capuchin intelligence and agility do not justify compressed physical scores.
- **Versus Bottlenose Dolphin:** Both are cognitively advanced but in different ways. Dolphin's echolocation is a much stronger innate Special mechanism, while capuchin tool manipulation is environment-dependent.

## 12. Future field proposals

- Add `tail_length_cm` so arboreal primates are not forced into ambiguous total-length conventions.
- Add `locomotor_mode` and `substrate_advantage` to distinguish canopy maneuverability from sprint speed.
- Add `tool_use_evidence` with categories such as experimental, habitual-wild, opportunistic-wild and absent/unknown.
- Add `sexual_dimorphism_mass_ratio` where measured from comparable populations.
- Seek instrumented *S. apella* sprint/climb performance rather than recycling generic capuchin speed claims.
- Seek species-specific bite-force measurements in Newtons before considering any pressure field; do not infer PSI without contact area.
- For the image, prioritize a reuse-permitted source explicitly identifying a healthy **adult male *S. apella*** with the same strict full-body framing.