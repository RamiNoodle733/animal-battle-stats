# Chimpanzee Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Chimpanzee / common chimpanzee
- **Scientific name:** *Pan troglodytes* (Blumenbach, 1775)
- **Family:** Hominidae
- **Status:** Living
- **Exact animal represented:** the common chimpanzee, *Pan troglodytes*, not the bonobo (*Pan paniscus*).
- **Canonical combat specimen:** healthy mature wild adult male, approximately **46.0 kg**, representing a normal robust male rather than an exceptional captive or record individual.
- **Why male:** males are larger on average and are the principal participants in territorial patrols, coalitionary aggression and most lethal intercommunity attacks. A five-decade comparative dataset found males were 92% of attackers and 73% of victims in documented/inferred chimpanzee killings.
- **Population variation:** four commonly recognized subspecies span western to central/eastern Africa. Body size, ecology, diet, tool traditions and ranging patterns vary substantially by population. ADW gives wild males 34-70 kg and females 26-50 kg and notes subspecific size differences. Values below are species-level representative recommendations, not claims that all populations share identical morphology.

## 2. Physical measurements and performance

### Mass

- **Canonical `weight_kg`: 46.0 kg**
- ADW: wild males **34-70 kg**, females **26-50 kg**.
- Smithsonian NMNH specimen USNM 736075 is a sexed male *P. t. verus* recorded at **46 kg**, providing a concrete specimen-level anchor inside the wild male range.
- Captive animals may be heavier, so captive maxima are not used as the canonical combat baseline.
- **Confidence:** high for the range, moderate-high for 46 kg as a representative editorial male baseline.

### Length and height

- ADW reports head-body length **63.5-92.5 cm** and erect standing height **1.0-1.7 m**.
- Smithsonian gives males up to about **160 cm** standing erect.
- A sexed Smithsonian male *P. t. verus* specimen is recorded at **725 mm total length** in collection metadata.
- **Canonical `length_cm`: 80.0 cm** head-body/collection-style body-length proxy.
- **Canonical `height_cm`: 120.0 cm** as a representative erect stature for a normal adult male, not a maximum.
- These fields need semantic care because a knuckle-walking ape does not have a single shoulder-height analogue comparable to a quadrupedal ungulate.
- **Confidence:** moderate. Source ranges are good, but cross-source definitions of length/standing height are not perfectly standardized.

### Speed

Popular sources repeatedly quote roughly 25 mph / 40 km/h, and the live site currently carries a similar legacy value. This run did **not** locate a strong instrumented species-specific maximum sprint dataset suitable for a factual top-speed field.

- **Canonical `speed_mps`: 0.0** pending defensible measured or strong institutional species-specific evidence.
- This does not mean chimpanzees are slow. Their locomotion includes rapid terrestrial quadrupedal bursts, climbing and arboreal movement. It means the database should not encode a weakly sourced maximum as measured fact.
- **Confidence:** high that the legacy speed should not be treated as verified.

### Lifespan

A 20-year demographic study of 306 wild Ngogo chimpanzees reported life expectancy at birth of approximately **33 years**, unusually high among wild chimpanzee communities. Longevity varies strongly among sites because disease, predation, food availability and human pressure differ.

- **Canonical `lifespan_years`: 33.0 years** as a well-supported wild demographic expectation rather than a captive longevity record.
- **Confidence:** high for the Ngogo result, moderate for applying it as the species-wide canonical field.

### Bite force and teeth

Chimpanzees possess large canines and robust jaws, and primate comparative work supports the role of male canines as weapons in competition. However, the widely repeated **1,300 PSI** chimpanzee bite figure was not traced here to a defensible direct pressure measurement. A 2025 methodological review emphasizes that primate maximum bite-force estimates can span hundreds of newtons depending on method.

- **Canonical `bite_force_psi`: 0.0**
- Do not convert modeled force to PSI without a validated tooth-contact area.
- Male *Pan* canines are sexually dimorphic and weapon-relevant, but this run did not locate a sufficiently direct species/sex crown-height dataset to justify a canonical millimeter weapon dimension.
- **Confidence:** high that 1,300 PSI should not be retained as verified fact; moderate-high that the canine weapon itself is biologically important.

### Muscle performance

O'Neill et al. (PNAS, 2017) directly compared chimpanzee and human skeletal muscle properties. Their species-specific muscle modeling indicated chimpanzee muscle of similar size has about **1.35 times** greater maximum dynamic force and power output, with chimpanzee muscle containing roughly **67% fast-twitch MHC II fibers**. Their review placed the overall mass-specific muscular performance difference around **1.5 times**, not the mythical several-fold “super strength” often repeated online.

This is important for ABS calibration. A 46 kg chimpanzee is explosively strong for its mass, but proportional strength must not be transformed into gorilla-, bear- or big-cat-scale absolute power.

### Defensive structure

Chimpanzees have no armor, shell, thick hide, horns or other dedicated structural defense. Their defense is primarily active: mobility, grasping, climbing, social support, intimidation, avoidance and counterattack. Skin and soft tissue remain vulnerable to claws, horns and large carnivore bites.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 46.0,
  "height_cm": 120.0,
  "length_cm": 80.0,
  "speed_mps": 0.0,
  "lifespan_years": 33.0,
  "bite_force_psi": 0.0
}
```

### Field decisions

- **46.0 kg:** representative mature male within the documented wild range and directly matched by a sexed Smithsonian specimen.
- **120.0 cm height:** representative erect stature, intentionally below reported male maxima.
- **80.0 cm length:** representative head-body/body-length proxy inside the 63.5-92.5 cm ADW range.
- **0.0 m/s speed:** no defensible instrumented maximum located. The old ~40 km/h catalogue value remains unverified.
- **33.0 years lifespan:** strong long-term wild demographic result from Ngogo, while acknowledging site variation.
- **0.0 PSI:** no validated species-specific pressure measurement located. The common 1,300 PSI claim is rejected.

## 4. Combat biology

### Weapons and offensive mechanics

Chimpanzees combine hands, long powerful arms, jaws/canines and whole-body leverage. Their hands are not claws, but they can seize, pull, strike, drag and manipulate an opponent while the mouth delivers bites. This combination makes their close-range mechanics more flexible than those of many similarly sized mammals.

The jaw is a meaningful weapon because the canines can puncture and tear. Comparative primate research finds male primate canines are weapon-relevant and structurally strong, but the absence of a reliable PSI measurement prevents false precision. Damage potential should be represented through weapon quality and behavior, not an invented pressure number.

### Strength and grappling

Chimpanzee muscle is unusually power-oriented, but the best modern evidence supports a moderate, not mythical, advantage over humans of comparable muscle size. The 2017 PNAS study's ~1.35x modeled dynamic force/power difference is compatible with explosive climbing, pulling and grappling. Absolute mass still matters. A 46 kg chimpanzee is nowhere near a 136+ kg adult male gorilla in whole-body force simply because it is proportionally strong.

### Locomotion and maneuverability

Chimpanzees are versatile locomotors. They knuckle-walk terrestrially, climb efficiently, scramble through complex forest structure, suspend and reposition with long arms, and can move bipedally for short tasks. Arboreal structure greatly increases escape routes and approach angles. On a flat open surface they remain mobile but lose much of their climbing advantage.

### Endurance

Chimpanzees are not cursorial endurance specialists. Wild populations commonly travel several kilometers per day, with recent synthesis describing typical daily travel around **2-5 km** and some populations up to **10 km/day**. Their muscle profile is relatively fast-twitch and power-biased, consistent with strong bursts rather than elite sustained high-output locomotion. Stamina should therefore be moderate rather than inferred from intelligence or daily ranging alone.

### Senses

Vision is strong and frontally oriented, with excellent depth perception and hand-eye coordination. Hearing and olfaction support social and environmental awareness. Chimpanzees do not possess echolocation, electroreception, extreme nocturnal specialization or another sensory system warranting an elite roster-wide Senses score.

### Intelligence and tactical flexibility

Chimpanzees are among the roster's strongest cognition candidates. They learn socially, remember relationships, solve multi-step foraging problems, manipulate objects, manufacture tools, communicate with gestures/vocalizations and maintain complex dominance and alliance networks. Tool traditions vary geographically, demonstrating socially transmitted behavioral diversity rather than a single fixed species script.

At Fongoli, Senegal, chimpanzees were observed constructing hunting tools through up to five modification steps and using them to stab into cavities containing bushbabies. Across populations, documented tool traditions include termite fishing, ant dipping, leaf sponges and nut cracking. Intelligence is therefore a genuine combat-relevant strength through planning, object use, target selection and social coordination.

It should not automatically be 100.0. Human-level abstract language, cumulative technological culture and generalized strategic planning are not present, and ABS must leave room for the roster's highest cognition anchors.

### Hunting and predation

Chimpanzees are omnivorous, primarily relying on plant foods but also consuming insects and vertebrate prey. Some populations cooperatively hunt monkeys, while Fongoli chimpanzees have used modified sticks in vertebrate hunting. Predation demonstrates target pursuit, coordination and prey processing, but chimpanzees are not obligate carnivores with felid-grade killing anatomy.

### Intraspecific fighting and coalitionary aggression

This is unusually well documented. Wilson et al. compiled five decades of observations from 18 chimpanzee communities and four bonobo communities. They recorded **152 chimpanzee killings** across 15 communities, including observed, inferred and suspected cases. Males were **92% of attackers**, males **73% of victims**, **66%** of killings involved intercommunity attacks, and attackers outnumbered victims at a median **8:1**. This shows that coalitionary aggression and numerical advantage are real parts of chimpanzee behavioral ecology.

For a one-on-one ABS animal, however, group numerical superiority must not be silently converted into individual Attack or Defense. It belongs mainly in Tactics/Intelligence and contextual matchup notes.

### Predator defense

Chimpanzees can use alarm calls, group cohesion, climbing and active mobbing/defense. Their size and sociality deter many threats, but leopards and other sufficiently capable predators remain serious dangers. A caught chimpanzee lacks armor and can suffer severe trauma quickly.

### Environmental strengths

- Forest, woodland and forest-savanna mosaics with climbable structure.
- Complex terrain that rewards grasping, route choice and three-dimensional movement.
- Access to sticks, stones or other manipulable objects can expand tactical options, though ABS should not assume a pre-equipped manufactured weapon.
- Social context greatly amplifies awareness and coalitionary pressure when group scenarios are explicitly allowed.

### Environmental limitations

- Open terrain reduces arboreal escape and positional options.
- No armor or dedicated puncture resistance.
- Fast-twitch power does not translate into elite pursuit endurance.
- Against much larger predators or megafauna, intelligence cannot erase major mass and weapon disparities.
- Tool use is population- and context-dependent, so not every individual should be assumed to instantly manufacture the optimal weapon.

### Weaknesses

1. Moderate absolute body mass on a roster containing large cats, bears, bovids and megafauna.
2. Thin soft-tissue protection and no armor.
3. Natural weapons are dangerous but not comparable to large felid claws plus killing bite, crocodilian jaws, horns or tusks.
4. Burst-biased musculature and ordinary daily ranging do not support elite Stamina.
5. Much of its movement advantage is strongest in structurally complex habitat.
6. Group tactics are powerful but cannot be counted as extra bodies in a standard one-animal matchup.

### Matchup archetypes

**Favorable:** smaller or similarly sized poorly armed mammals, opponents vulnerable to grasping/control, animals that are tactically rigid, and structured environments where climbing and object manipulation matter.

**Unfavorable:** large felids and canids with specialized killing weapons, heavily armored animals, horned/hoofed animals that massively outweigh it, bears, great apes substantially larger than it, and megafauna where the mass gap overwhelms its tactical advantages.

## 5. Proposed ABS substats

| Substat | Score | Rationale |
|---|---:|---|
| Size | **38.0** | 46 kg adult male is medium-sized in absolute roster terms, far below large predators and megafauna. |
| Raw Power | **48.0** | Strong explosive pulling/grappling for mass, supported by ~1.35x human-sized muscle dynamic force/power, but absolute mass caps the score. |
| Weaponry | **43.0** | Canines plus grasping hands create versatile close-range offense, without claws, horns or a specialized carnivore killing apparatus. |
| Protection | **21.0** | No armor or thick protective integument. |
| Toughness | **42.0** | Robust, muscular ape capable of violent close combat, but still vulnerable soft tissue. |
| Speed | **55.0** | Athletic terrestrial/arboreal bursts, scored conservatively because a reliable maximum speed was not established. |
| Maneuverability | **82.0** | Excellent climbing, grasping, balance and multi-plane forest movement. |
| Endurance | **56.0** | Several-kilometer daily travel is routine, but fast-twitch muscle specialization argues against elite sustained output. |
| Recovery | **49.0** | Mammalian healing and behavioral self-care without exceptional regeneration. |
| Tactics | **96.0** | Tool manufacture/use, coalition management, flexible foraging/hunting and socially learned traditions place it near the roster's top nonhuman tactical tier. |
| Senses | **66.0** | Strong vision, depth perception and multimodal social awareness, without an exotic sensory mechanism. |
| Ferocity | **77.0** | Serious male aggression and documented lethal intercommunity violence, while avoiding the mistake of treating every encounter as maximal aggression. |
| Abilities | **72.0** | Manipulative hands, tool use, climbing and coalition-aware cognition are unusually matchup-relevant but not supernatural or automatically available as weapons. |

## 6. Proposed six headline ratings

| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **46.0** | A 46 kg male can grapple, pull and bite with dangerous canines. Explosive muscle performance helps, but absolute damage remains below large carnivores and heavily armed mammals. |
| **Defense** | **31.0** | Active avoidance, climbing and counter-grappling help, but actual protection is poor and body mass is moderate. |
| **Agility** | **83.0** | Exceptional whole-body control across ground and trees, with grasping hands/feet and rapid route changes. This is not based on an unverified top-speed claim. |
| **Stamina** | **57.0** | Meaningful daily travel and active foraging, balanced against power-biased muscle and lack of cursorial endurance specialization. |
| **Intelligence** | **96.0** | Tool manufacture, social learning, tactical flexibility, alliance cognition and coordinated hunting/aggression justify an elite score while preserving a ceiling above it. |
| **Special** | **75.0** | The combination of manipulative tool-capable hands, arboreal versatility and socially learned tactical repertoires is matchup-changing, but group numbers are not double-counted. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Improvised Arsenal**: Chimpanzees can select, modify and deploy natural objects as tools. Fongoli chimpanzees made hunting tools through multi-step modification and used them to stab into prey cavities. In a matchup, environmental objects can extend reach or probing ability, but no pre-made weapon is assumed.
2. **Canopy Reposition**: Long arms, grasping hands and feet, climbing skill and route flexibility allow rapid three-dimensional repositioning in trees and complex structures, creating escape and attack angles unavailable to many terrestrial opponents.

### Unique traits

1. **Coalition Mind**: Chimpanzees track dominance, alliances and numerical advantage. Long-term field data on intercommunity violence show attackers frequently exploit overwhelming numerical asymmetry. In solo ABS this improves tactical reasoning, not body count.
2. **Fast-Twitch Power Bias**: Roughly 67% fast-twitch MHC II fibers and modeled ~1.35x human-sized muscle dynamic force/power give explosive performance without the fictional many-times-human strength myth.

## 8. Expanded profile

### Habitat and range

Chimpanzees occupy a broad ecological spectrum across equatorial Africa, including tropical and montane rainforest, swamp forest, woodland, forest-savanna mosaics and relatively dry savanna. Populations occur from West Africa through Central Africa to western East Africa. Habitat fragmentation has divided many populations and increased human contact.

### Diet and ecology

They are flexible omnivores with diets dominated by fruit and other plant material but supplemented by leaves, seeds, insects, honey and vertebrate meat. Their ecological flexibility is partly behavioral. Different communities use different tools and techniques for extracting foods, which means local culture can materially alter foraging niches.

### Social structure

Chimpanzees live in fission-fusion communities. The full community can contain many individuals, but daily parties split and recombine according to food, mating opportunities, social relationships and patrol behavior. Male relationships, dominance and alliances are especially important in territorial competition. Females may range more independently, particularly with dependent young.

### Reproduction and life history

Chimpanzees have slow life histories. Gestation is roughly eight months, offspring remain dependent for years, and interbirth intervals are long. Long juvenile development creates extensive opportunity for social learning. Wild survival varies dramatically among communities, with the Ngogo population demonstrating approximately 33-year life expectancy at birth under favorable conditions.

### Conservation

*Pan troglodytes* is threatened across its range by habitat loss and fragmentation, hunting, disease and human-wildlife conflict. Production migration should confirm the current IUCN assessment and assessment date directly before publishing a conservation field because status records can be revised.

### Major adaptations

- Long arms and grasping extremities for climbing and suspension.
- Opposable digits and precision/power manipulation.
- High fast-twitch muscle fraction supporting explosive movement.
- Large socially relevant canines, especially in males.
- Flexible cognition and socially transmitted tool traditions.
- Fission-fusion social organization allowing dynamic party size.
- Strong visual depth perception and hand-eye coordination.

### Human interaction

Chimpanzees are behaviorally sophisticated wild apes, not safe human analogues. Habituation, captivity and close contact can create serious injury and disease risks in both directions. They are susceptible to human respiratory and other pathogens, while their strength, canines and unpredictable conflict behavior make direct contact dangerous. Conservation practice emphasizes distance and minimizing disease transmission.

### Genuine fun facts

1. The best modern muscle study does **not** support the folklore that chimpanzees are five or ten times stronger than humans. It supports a much smaller but real mass-specific advantage.
2. Fongoli chimpanzees have been documented making pointed hunting tools through multiple construction steps and using them against bushbabies in tree cavities.
3. Long-term comparative research compiled 152 observed, inferred or suspected chimpanzee killings, with males overwhelmingly represented among attackers.
4. Chimpanzee communities have local tool traditions. A behavior common at one site may be absent at another despite similar raw materials.
5. A Smithsonian male *P. t. verus* specimen in the national collection is recorded at exactly 46 kg, matching this report's canonical mass.
6. Wild chimpanzees commonly travel several kilometers in a day, while some populations may travel up to around 10 km depending on ecology.
7. Chimpanzees have no external tail, despite their highly arboreal ancestry and climbing ability.
8. Their arms are proportionally very long; ADW describes arm spread at roughly 1.5 times body height.

### Concise site-ready summary

**The common chimpanzee (*Pan troglodytes*) is a medium-sized great ape whose main battle advantages are explosive strength, grasping control, climbing and elite nonhuman tactical intelligence. A representative mature male is about 46 kg. Chimpanzees can bite, grapple and improvise tools, and wild males participate in coordinated territorial aggression, but they have no armor and are far less powerful in absolute terms than gorillas, bears or large cats.**

### Rich narrative profile

The chimpanzee's danger is best understood as integration rather than a single extreme weapon. At roughly 46 kg, a representative adult male is not especially large on the ABS roster. It lacks claws, horns, armor and the crushing jaws of heavyweight predators. What it does have is a rare combination of explosive muscle, grasping limbs, mobile shoulders, dangerous canines and a brain capable of adapting behavior to circumstances.

Modern biomechanics corrects one of the species' most persistent myths. Chimpanzees are not several times stronger than humans in every sense. Direct muscle research instead indicates a meaningful but much more modest mass-specific advantage, driven in part by a high fast-twitch fiber fraction. That distinction matters for roster-wide scaling. A chimp can be extraordinarily powerful for a 46 kg primate while still remaining far below a gorilla or megafaunal mammal in absolute force.

Its greatest separation from similarly sized animals comes from cognition. Wild chimpanzees do not merely repeat one instinctive hunting sequence. They learn local traditions, manufacture tools, alter tactics according to context and navigate complex alliance networks. Fongoli tool-assisted hunting shows that object manipulation can cross into weapon-like use. Long-term aggression data show that chimpanzees also understand, or at minimum behaviorally exploit, numerical advantage in lethal territorial encounters.

Those strengths have clear limits. A standard one-on-one matchup cannot grant a chimp seven allies merely because coalitionary attacks occur in nature. Nor should a stick magically appear in an empty arena. Against a much larger predator, intelligence and grasping control may improve survival choices but do not erase the opponent's mass, claws or killing bite. Chimpanzee Defense is therefore deliberately low relative to its Intelligence.

The result is a distinctive ABS profile: elite cognition and high agility, moderate absolute offense, weak structural defense, and substantial environment dependence. In forest structure it can climb, reposition and exploit objects. On bare ground against a larger specialized killer, many of those advantages narrow quickly.

### Future structured fields

```json
{
  "canonical_taxon": "Pan troglodytes",
  "canonical_sex": "adult male",
  "wild_male_mass_range_kg": [34.0, 70.0],
  "wild_female_mass_range_kg": [26.0, 50.0],
  "muscle_dynamic_force_power_ratio_vs_human_same_size": 1.35,
  "fast_twitch_mhc_ii_percent_approx": 67.0,
  "daily_travel_typical_km": "2-5",
  "primary_combat_mode": "grapple-bite with tactical object use",
  "social_system": "fission-fusion community"
}
```

## 9. Mandatory image asset review

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/chimpanzee.png`
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Pan_troglodytes_(male).jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/6/6d/Pan_troglodytes_%28male%29.jpg
- **file_format_verified:** source JPEG verified by Commons metadata; final PNG absent
- **alpha_verified:** No
- **full_body_verified:** Yes for the candidate's visible anatomy: direct inspection of the 3798x2848 original shows head, torso, both arms/hands, both legs/feet completely inside frame. Chimpanzees have no tail.
- **adult_verified:** No. The Commons page explicitly says male but does not explicitly state adult, so appearance is not used to certify adulthood.
- **sex_verified_or_unknown:** male verified by source description
- **license_status:** CC BY-SA 3.0, reuse permitted with attribution/share-alike terms
- **notes:** This is a strong high-resolution exact-species full-body male candidate, but IMAGE_REQUIREMENTS requires adulthood to be established rather than inferred. A second 4128x2322 Commons image explicitly labels its subject an adult male, but direct inspection shows heavy zoo-bar obstruction and therefore it is unsuitable for a faithful cutout. Another 3237x2158 Gombe image explicitly identifies an adult male *P. t. schweinfurthii*, but branches and prey obscure the silhouette. Continue seeking an explicitly adult male with the clean whole body visible. GitHub write tooling in this run accepts UTF-8 text only, so no binary cutout was fabricated or claimed.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Finding/context | Confidence / conflict |
|---|---|---|---|---|
| Animal Diversity Web, *Pan troglodytes* | https://animaldiversity.org/accounts/Pan_troglodytes/ | Taxonomy, dimensions, dimorphism, morphology | Wild males 34-70 kg; females 26-50 kg; head-body 63.5-92.5 cm; erect 1-1.7 m; male larger | High-quality institutional synthesis; ranges span populations. |
| Smithsonian NMNH *P. t. verus* specimen | https://www.si.edu/object/3d/pan-troglodytes-verus-cranium:360c2e5d-836d-4d2c-8ac5-d6c3d0513a2e | Canonical mass anchor, sex, taxon | Male specimen 46 kg, total length 725 mm | High for that specimen; not a population mean. |
| O'Neill et al. 2017, PNAS/PubMed | https://pubmed.ncbi.nlm.nih.gov/28652350/ | Muscle mechanics | ~67% fast-twitch MHC II; modeled max dynamic force/power ~1.35x human muscle of similar size; literature performance differential ~1.5x | High. Corrects exaggerated folklore. |
| Wilson et al. 2014, Nature | https://www.nature.com/articles/nature13727 | Lethal aggression and coalition context | 152 chimpanzee killings across 15 communities; 92% attackers male; 66% intercommunity; median attacker:victim 8:1 | High, multi-site five-decade synthesis. Group findings not counted as extra individuals in solo ABS. |
| Pruetz & Bertolani 2007, Current Biology/PubMed | https://pubmed.ncbi.nlm.nih.gov/17320393/ | Hunting tool manufacture/use | 10 chimpanzees, 22 bouts, 26 tools; construction up to five steps; tools used spear-like against prosimian prey | High primary peer-reviewed evidence; population-specific behavior. |
| Yale / Journal of Human Evolution demographic study | https://news.yale.edu/2017/03/20/yale-led-study-wild-chimpanzees-have-surprisingly-long-life-spans | Wild lifespan | ~33 y life expectancy at birth in 306 Ngogo chimpanzees | High for Ngogo, not universal across all sites. |
| Great-ape welfare synthesis (2026) | https://pmc.ncbi.nlm.nih.gov/articles/PMC12858012/ | Ranging/endurance context | Most wild populations 2-5 km daily travel, some up to 10 km; home ranges 7-60 km² | Moderate-high synthesis; travel is not maximum exercise endurance. |
| Plavcan & Ruff 2008 | https://onlinelibrary.wiley.com/doi/10.1002/ajpa.20779 | Canine weapon function/comparative strength | Male primate canines weapon-relevant and generally structurally strong relative to carnivores | High comparative morphology; not a chimp-specific PSI measurement. |
| Laird et al. 2025, AJBA | https://onlinelibrary.wiley.com/doi/full/10.1002/ajpa.70144 | Bite-force uncertainty | Maximum bite estimates for one primate species can span hundreds of newtons by method | High methodological warning; supports rejecting false PSI precision. |
| Commons, Hans Hillewaert | https://commons.wikimedia.org/wiki/File:Pan_troglodytes_(male).jpg | Image candidate | Exact *P. troglodytes*, male, 3798x2848, CC BY-SA 3.0 | Full body visually verified; adulthood not explicit. |
| Commons, Kumasi Zoo | https://commons.wikimedia.org/wiki/File:Chimpazee_at_the_Kumasi_Zoo.jpg | Image alternative | Explicit adult male, 4128x2322, CC BY-SA 4.0 | Rejected because cage bars obstruct silhouette. |
| Commons, Gombe adult male | https://commons.wikimedia.org/wiki/File:Gombe_Stream_NP_Beute.jpg | Image alternative / behavioral context | Explicit adult male eastern chimpanzee, 3237x2158, GFDL 1.2 | Rejected for cutout because branches/prey obscure body. |

## 11. Confidence, conflicts and unresolved questions

- **Taxonomy:** high confidence for *Pan troglodytes*.
- **Canonical sex:** high confidence adult male is appropriate for combat representation because males are larger and disproportionately involved in territorial violence.
- **Mass:** high confidence range, moderate-high canonical 46 kg.
- **Height/length:** moderate because source measurement conventions differ.
- **Speed:** unresolved. Keep 0.0 rather than importing the old 39.6 km/h value.
- **Bite pressure:** unresolved. Keep 0.0 rather than repeating 1,300 PSI.
- **Canine dimensions:** weapon function is well supported, but a clean adult-male species-specific crown-height number was not established strongly enough for a canonical field.
- **Lifespan:** 33 years is excellent population evidence but site-dependent.
- **Intelligence:** evidence is exceptionally strong qualitatively, while the exact 96.0 score remains an editorial ABS normalization judgment.
- **Image:** high-resolution male candidate is visually full-body and licensed, but adulthood is not explicit. Explicit-adult alternatives are obstructed. PNG remains pending.

## 12. Cross-animal normalization notes

- **Versus Capuchin Monkey:** Chimpanzee must be vastly higher in absolute Raw Power, Attack and Defense because the canonical mass is roughly an order of magnitude greater. Capuchin cognition remains excellent, but Chimpanzee 96.0 Intelligence is justified by broader tool manufacture, coalition complexity and flexible social cognition.
- **Versus Caracal:** Chimpanzee is heavier and much smarter, but Caracal retains superior specialized predatory weapons and sprint/reflex morphology. Chimp Attack 46.0 only narrowly exceeds Caracal 44.0 rather than exploding upward from strength folklore.
- **Versus Cheetah:** Cheetah remains decisively superior in Speed/Agility sprint mechanics and has carnivore killing anatomy. Chimpanzee dominates Intelligence and object-use flexibility. Chimp Agility 83.0 stays well below Cheetah 97.0.
- **Versus Cape Buffalo:** Chimpanzee intelligence cannot overcome a roughly 16-fold mass gap plus horns and impact power. Cape Buffalo Attack 76.0 / Defense 70.0 remain far above Chimp 46.0 / 31.0.
- **Versus Camel:** A 550 kg camel's absolute force and durability remain much higher. Chimpanzee's tactical advantage belongs in Intelligence/Special, not inflated physical scores.
- **Versus Cassowary:** Cassowary Attack 57.0 remains higher because the 65 kg bird has a dangerous kicking apparatus and long inner claw. Chimpanzee is much more tactically flexible but less specialized for direct tissue damage.
- **Versus Chameleon/Bullet Ant:** Their unusual biological Special scores can remain high while their absolute Attack stays tiny. Chimpanzee demonstrates the same anti-compression principle from the opposite direction: proportional strength is impressive but not permission to approach megafauna power.
- **Future watch:** Revisit Intelligence and Raw Power after Gorilla, Orangutan, Baboon, Mandrill and other primates are complete. Specifically check that chimpanzee strength folklore has not leaked into Defense, that group aggression has not been counted as solo Attack, and that tool use is not duplicated excessively across Intelligence, Tactics, Abilities and Special.
