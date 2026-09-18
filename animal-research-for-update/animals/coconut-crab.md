# Coconut Crab research report

## 1. Identity and canonical specimen

- **Roster name:** Coconut Crab
- **Scientific name:** *Birgus latro* (Linnaeus, 1767)
- **Family:** Coenobitidae
- **Living/extinct:** Living
- **Exact animal represented:** Coconut crab / robber crab, the sole living species of *Birgus* and the largest living terrestrial arthropod.
- **Canonical combat specimen:** healthy, fully mature adult male, **3.0 kg**, representing a large but non-record male. Males dominate the largest size classes and are the appropriate combat specimen because size directly predicts claw force and male heterochely is more pronounced.
- **Sexual dimorphism:** Christmas Island sampling found clear size dimorphism, with females averaging about 24% smaller than males at the same site. A morphometric study also found significantly greater male carapace length, while a recent Raja Ampat sample found significant sex difference in carapace length but not body weight, showing that dimorphism magnitude varies among populations and samples.
- **Population variation:** body size, color, density and harvest pressure vary substantially across Indo-Pacific islands. The famous 4 kg class is an upper-end animal, not a sensible default adult.

## 2. Physical measurements

### Mass and size

The strongest defensible species-level sources consistently describe *B. latro* as reaching roughly **4 kg** and about **0.9-1.0 m leg-tip span** at the upper end. Australian Geographic reports males exceeding 4 kg and reaching about 1 m leg-tip to leg-tip, with females smaller. The PLOS ONE pinch-force study measured 29 wild crabs from 33 g to 2,120 g and extrapolated force for the previously reported 4 kg maximum.

- **Canonical mass:** **3.0 kg** for a large mature male, below the exceptional ~4 kg ceiling.
- **Upper-end mass:** about **4.0-4.1 kg**.
- **Canonical linear size:** **80.0 cm leg span** as a representative large-male combat span, with the best-known upper end around 0.9-1.0 m.
- **Canonical body length:** **40.0 cm** is retained as a broad conventional body-length value, but confidence is only moderate because crustacean sources often mix body, thoracic, carapace and leg-span conventions.
- **Canonical height:** **0.0 cm**. No standardized standing-height measurement was located, and leg span must not be relabeled as height.

### Claws and measured pinch force

Oka, Tomita & Miyamoto (PLOS ONE, 2016) provide the key combat measurement. They directly measured maximum pinching force in **29 wild coconut crabs weighing 33-2,120 g**. Measured maximum force ranged from **29.4 to 1,765.2 N** and scaled strongly with body mass. Their regression predicts approximately **3,300 N** for a 4 kg crab. This is a force estimate for the largest reported body size, not a directly measured 4 kg specimen.

The claw is asymmetrical, with the left chela normally larger. Morphometric work finds heterochely more pronounced in males. The claw is simultaneously a feeding tool, climbing/manipulation structure, competitive weapon and antipredator weapon.

- **Canonical large-male pinch-force proposal:** do not encode one fabricated number into an existing PSI field. A 3 kg canonical male should be treated as below the 3,300 N 4 kg extrapolated ceiling.
- **Directly measured study maximum:** **1,765.2 N** at or below 2.12 kg body mass in the sampled animals.
- **Extrapolated 4 kg maximum:** **~3,300 N**.
- **Canonical `bite_force_psi`: 0.0.** Coconut crabs do not use a vertebrate bite as the primary weapon, and force in newtons cannot be converted to PSI without a defensible contact area.
- **Future structured field:** `pinch_force_n` should be added separately rather than abusing `bite_force_psi`.

### Exoskeleton and terrestrial respiration

Adults no longer rely on a gastropod shell. The abdomen becomes hardened and calcified, producing substantial protection for an arthropod. Terrestrialization also includes a highly modified branchiostegal respiratory system. Comparative physiology shows that in fully terrestrial *Birgus latro*, the branchiostegite participates strongly in gas exchange. Adults are therefore air-breathing terrestrial crustaceans, not amphibious crabs that can remain underwater indefinitely.

This armor is meaningful against tiny attackers and abrasion, but it is still an arthropod exoskeleton around a 3 kg animal. It should not be scored as if it were mammalian megafauna armor. Molting is the critical exception: the animal retreats underground for weeks while the new exoskeleton hardens, making that life-history phase dramatically more vulnerable than the canonical hard-shelled adult state.

### Speed and locomotion

No instrumented species-specific maximum running speed was located. Secondary web pages repeat roughly 4-5 km/h, but those values lack sufficient primary provenance for a canonical maximum.

- **Canonical `speed_mps`: 0.0.** Unknown, not zero movement.
- Coconut crabs walk effectively over rough island substrate and climb trees and other vertical structures using pointed walking-leg tips.
- Animal Diversity Web reports climbing to about 2 m; zoological institutions report substantially higher climbing observations. Because these are context-dependent observations rather than a physiological ceiling, no single maximum climbing height is encoded.

### Lifespan and growth

Animal Diversity Web reports a wild lifespan up to **60 years** and notes that maximum size may take **40-60 years** to reach. Australian Geographic reports an average lifespan exceeding 50 years. Growth is slow and strongly dependent on repeated molts.

- **Canonical `lifespan_years`: 50.0** as a long-lived adult species representative, rather than using the 60-year upper bound.
- **Confidence:** moderate. Long lifespan is well supported, but exact wild age estimation is difficult.

## 3. Proposed canonical factual fields

```json
{
  "weight_kg": 3.0,
  "height_cm": 0.0,
  "length_cm": 40.0,
  "speed_mps": 0.0,
  "lifespan_years": 50.0,
  "bite_force_psi": 0.0
}
```

Additional future structured fields:

- `leg_span_cm`: **80.0** canonical large-male representative; upper end roughly 90-100 cm.
- `pinch_force_n_measured_max`: **1765.2** from the 29-animal PLOS sample.
- `pinch_force_n_extrapolated_4kg`: **3300.0**, explicitly model-based rather than directly measured.
- `terrestrial_adult`: **true**.
- `air_breathing_adult`: **true**.

### Canonical-value reasoning

- **3.0 kg:** large mature male without using the famous 4 kg upper extreme as the normal specimen.
- **40.0 cm length:** conventional species body-length figure, retained with moderate confidence because measurement conventions vary.
- **0.0 height:** no standardized standing-height field.
- **0.0 speed:** unsupported tertiary top-speed claims rejected.
- **50.0 years:** representative of the well-supported multi-decade lifespan rather than an upper record.
- **0.0 bite PSI:** pinch force is not bite pressure and no contact-area conversion is defensible.

## 4. Combat biology

### Primary weapon

The dominant weapon is the oversized chela, especially the larger left claw. Unlike many tiny arthropod feats that disappear on an absolute scale, coconut-crab pinch force remains impressive even in absolute terms for a 3-4 kg animal. Direct measurements reached 1.77 kN, while the body-mass regression predicts 3.3 kN at the largest reported 4 kg size. The claw can grip, crush and hold, and the force rises steeply with body size.

The key limitation is delivery. The crab is slow compared with mammalian and avian predators, lacks long striking reach, and must get a claw onto a vulnerable structure. Once a firm grip is achieved, however, the opponent faces a mechanically serious clamp that is difficult to dismiss as merely proportional strength.

### Secondary weapons and offensive mechanics

The second chela provides another gripping surface, while the powerful walking legs brace the body and can hold position on irregular substrate. The animal can use the claw to manipulate hard foods, dismember carrion, compete with conspecifics and subdue animal prey. It is an opportunistic omnivore rather than a specialized pursuit predator.

A striking field report published in *Frontiers in Ecology and the Environment* documented a coconut crab attacking an adult red-footed booby. The crab approached, seized a leg, broke/injured the bird and ultimately fed on it; a second witnessed attack involved a crab dragging a bird into its burrow. These observations demonstrate that the claw can function as a genuine predatory weapon against vertebrates, not only as a coconut-opening tool.

### Defense and toughness

The hardened adult exoskeleton protects the body from abrasion, small bites and low-energy attacks. Large adult size also places it beyond most terrestrial arthropod predators. Animal Diversity Web notes humans as the only clearly documented adult predator in its account, although smaller crabs may be vulnerable to introduced vertebrates.

The defense has hard limits. The crab weighs only a few kilograms, has articulated joints and softer membranes between sclerites, and cannot absorb the trauma of a large carnivore, heavy hoof, major reptile bite or large bird of prey as a large mammal could. Armor is strong for an arthropod, not universally strong across the 225-animal roster.

### Molting vulnerability

Molting is the species' most severe physiological weakness. Large individuals retreat into burrows for weeks, with ADW reporting molt periods of roughly 3-16 weeks. During the soft-shell phase, normal armor is temporarily absent. ABS uses a healthy hard-shelled adult as canonical, so this phase does not define the Defense score, but it belongs in matchup/ecology notes and explains why burrow security is essential.

### Locomotion and maneuverability

Coconut crabs are capable terrestrial walkers and strong climbers. Their pointed walking legs grip bark and rough surfaces, allowing access to trees and vertical refuges. They are not fast open-ground pursuit animals. Their agility comes from multi-limb stability, climbing and close-range repositioning rather than sprint speed.

### Endurance and environmental physiology

The species is fully terrestrial as an adult and possesses specialized air-breathing branchiostegal organs. It survives tropical island heat partly through nocturnality, burrow use and moisture management. This supports respectable ecological endurance but does not prove high sustained combat output. A long lifespan and environmental hardiness are not substitutes for aerobic fighting stamina.

### Senses

Olfaction is exceptional. Neuroanatomical research found a highly developed central olfactory pathway with roughly **one million interneurons** analyzing olfactory input, far exceeding the numbers reported for honeybees and hawkmoths. Behavioral and anatomical evidence supports aerial odor detection as a dominant terrestrial sense. Compound eyes and mechanosensory systems remain useful, but smell is the standout modality.

### Intelligence and tactics

Coconut crabs should not receive mammal-like cognitive scores merely because they manipulate objects. Their behavior is nevertheless more structured than a simple reflex-only stereotype. Field work documents size-based dominance, visual agonistic displays, solitary spacing, food competition, burrow use, reproductive migration and odor-guided foraging. Their tactics are effective and specialized, but evidence for flexible innovation or social learning remains far below primates, corvids, parrots and cetaceans.

### Intraspecific fighting

Helfman's field study of agonistic behavior showed that size differences strongly determine outcomes. Larger crabs dominate smaller ones, and visual displays reduce the need for every encounter to become a damaging fight. This supports meaningful combat assessment but also argues against portraying the species as indiscriminately ferocious.

### Predation and scavenging

The diet is broad: fallen fruit, seeds, nuts, carrion and animal material. The red-footed booby observations establish occasional vertebrate predation. Coconut crabs are best characterized as powerful opportunistic omnivores and scavengers with the ability to kill when an accessible animal can be seized, not as active high-speed hunters.

### Environmental strengths

- Tropical forest floor, coastal woodland, rocky crevices and rough vertical surfaces.
- Burrows provide humidity, thermal refuge and molting security.
- Climbing creates escape and foraging options unavailable to many similarly sized terrestrial invertebrates.
- Aerial olfaction is highly effective for finding food in darkness.

### Environmental limitations

- Adults are specialized for air breathing and prolonged submersion is dangerous.
- Open flat terrain removes much of the climbing/refuge advantage.
- Soft-shell molt phase causes a temporary collapse in armor.
- Low sprint speed makes disengagement from fast vertebrate predators difficult once detected.

### Major weaknesses

1. Low absolute body mass compared with serious vertebrate combatants.
2. Slow attack delivery and pursuit speed.
3. Joints and membranes remain vulnerable despite the exoskeleton.
4. No venom, ranged weapon or rapid strike system.
5. Molting creates a prolonged vulnerable phase.
6. Adult respiratory specialization makes underwater matchups disastrous.

### Matchup archetypes

- **Excellent:** tiny arthropods and small slow animals that can be seized by a claw.
- **Favorable:** similarly sized lightly armored terrestrial animals that lack a safe way to penetrate the shell before being gripped.
- **Mixed:** small birds and reptiles, where first contact matters enormously. The booby observation proves surprising killing capacity, but mobile vertebrates can evade the slow crab.
- **Poor:** fast mammalian carnivores, raptors capable of safe attack, large snakes, monitor lizards, and robust opponents that can attack joints or overturn the crab.
- **Hopeless:** large carnivores, great apes, large ungulates, crocodilians and megafauna. A spectacular claw does not erase orders-of-magnitude mass gaps.

## 5. Proposed ABS substats

All scores use the absolute 0.1-100.0 roster scale.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **27.0** | Exceptional for an arthropod and capable of kN-class claw force, but a 3 kg body remains low in absolute whole-body power. |
| Weaponry | **48.0** | Directly measured 1.77 kN maximum in sampled animals and 3.3 kN extrapolated at 4 kg make the claw a serious compact weapon. |
| Protection | **30.0** | Hardened adult exoskeleton is meaningful at small-animal scale but has joints and cannot resist heavyweight vertebrate trauma. |
| Toughness | **28.0** | Robust terrestrial crustacean, yet low mass and vulnerable joints/soft tissues limit absolute trauma tolerance. |
| Speed | **16.0** | Slow terrestrial walker; no defensible maximum retained. |
| Maneuverability | **46.0** | Stable multi-legged movement and strong climbing are useful, but rapid evasive turning/repositioning is limited. |
| Endurance | **50.0** | Long-ranging nocturnal foraging and terrestrial physiology support moderate endurance without evidence of elite sustained output. |
| Recovery | **37.0** | Molting renews exoskeletal structures but is slow and creates vulnerability; it is not rapid regeneration. |
| Tactics | **43.0** | Size assessment, dominance signaling, burrow use, odor-guided foraging and opportunistic predation show functional behavioral flexibility. |
| Senses | **78.0** | Exceptionally developed aerial olfactory processing plus vision and mechanosensation. |
| Ferocity | **50.0** | Can prey on vertebrates and fight competitors, but field agonistic behavior includes display/submission and it is not a pursuit predator. |
| Abilities | **72.0** | Extreme claw mechanics, terrestrial respiratory specialization, climbing and powerful aerial olfaction create a distinctive toolkit. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **39.0** | kN-class claw force is genuinely dangerous, but the 3 kg crab is slow and must first secure a grip. |
| **Defense** | **28.0** | Hardened exoskeleton protects well against small threats but cannot compensate for low mass against serious vertebrates. |
| **Agility** | **45.0** | Strong climbing and multi-limb stability, but low speed and limited rapid evasiveness keep it below agile vertebrates. |
| **Stamina** | **50.0** | Robust terrestrial foraging physiology without evidence for exceptional continuous combat exertion. |
| **Intelligence** | **43.0** | Effective sensory-guided behavior, dominance assessment and migration, but no evidence for upper-tier flexible cognition. |
| **Special** | **78.0** | Extreme claw force for size, hardened shell-free adulthood, aerial olfaction and terrestrial respiratory specialization are unusually matchup-relevant. |

### Cross-stat anti-double-counting

The claw drives Weaponry and contributes to Attack, but does not inflate Raw Power to vertebrate levels. The exoskeleton drives Protection/Defense but not Toughness beyond evidence. Aerial olfaction drives Senses and contributes to Special without inflating Intelligence. Climbing affects Maneuverability/Agility but is not treated as speed.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Kilonewton Vice** - the oversized chela produces directly measured pinch forces up to 1,765.2 N in the sampled wild crabs, with the published body-mass relationship predicting roughly 3,300 N at the 4 kg species upper end. A secured grip can crush, hold and disable surprisingly large targets.
2. **Air-Scent Tracker** - an unusually enlarged central olfactory pathway supports powerful aerial odor tracking, allowing the crab to locate food and carrion effectively in nocturnal island habitat.

### Unique traits

1. **Shell-Free Land Giant** - unlike juvenile terrestrial hermit-crab relatives, the adult hardens its abdomen and abandons borrowed shells, becoming the largest living terrestrial arthropod.
2. **Branchiostegal Land Lung** - highly modified branchiostegal respiratory surfaces support a fully terrestrial adult existence, a major crustacean transition that also makes prolonged underwater exposure a liability.

## 8. Expanded profile content

### Habitat and range

Coconut crabs inhabit tropical islands across the Indian and Pacific Oceans, especially coastal forest, rocky terrain, limestone crevices and vegetated island interiors. Distribution is naturally fragmented by ocean barriers, and local abundance can differ dramatically between remote protected islands and heavily harvested inhabited islands.

### Diet

Omnivorous and opportunistic. Important foods include fallen fruit, nuts, seeds, coconut material, carrion and animal prey. They also consume other crustaceans and can exploit hard foods inaccessible to weaker scavengers. The famous coconut association is real, but coconut is not the entire diet.

### Ecology

The species is a large nocturnal scavenger, seed mover and occasional predator. ADW notes potential seed-dispersal effects when crabs transport fruit and abandon it. On islands where abundant, coconut crabs can be ecologically conspicuous consumers. Laidre's Chagos observations suggest their predation can even influence ground-nesting seabird behavior and island use.

### Social structure

Primarily solitary. Agonistic encounters around food are strongly size-dependent, with larger individuals usually dominating. Visual displays and spacing reduce unnecessary escalation. Home ranges reported by ADW vary roughly from 40 to 250 m² depending on island context.

### Reproduction and life history

Adults live on land, but reproduction retains an obligatory marine larval phase. Females carry large broods and migrate toward the coast to release embryos around favorable tidal conditions. ADW reports roughly 50,000-138,000 embryos per spawn, with larvae passing through several marine zoeal stages before the amphibious glaucothoe stage. Young animals use gastropod shells before later hardening the abdomen and becoming fully terrestrial. Both sexes can shift between inland and coastal areas during the reproductive season.

### Conservation

The current global assessment is **Vulnerable**, replacing the older Data Deficient treatment still repeated by some legacy sources. Major concerns include harvest for food, slow growth, late maturity, habitat degradation and local population depletion. Conservation status should be rechecked against the current IUCN entry at production migration time.

### Major adaptations

- Enormous asymmetrical crushing chelae.
- Hardened adult abdomen without a borrowed shell.
- Fully terrestrial air-breathing respiratory system.
- Strong climbing legs with pointed tips.
- Highly developed aerial olfactory pathway.
- Burrow use for humidity control, refuge and molting.
- Long lifespan and slow growth.

### Human interaction

Coconut crabs are harvested as food in many parts of their range and are vulnerable to overexploitation because they are large, slow, conspicuous and slow-growing. Their claws can injure a person who handles one carelessly, but there is no evidence that they routinely attack humans. Sensational claims involving Amelia Earhart remain speculative and are not used as evidence for ABS combat ratings.

### Genuine fun facts

- The largest published pinch-force study directly measured **1,765.2 N** in its wild sample and predicted about **3,300 N** for a 4 kg crab.
- Coconut crabs are the largest living terrestrial arthropods.
- Adults abandon the borrowed shells used during their juvenile hermit-crab phase because the abdomen becomes hardened and protective.
- Their brains devote extraordinary neural resources to smell, with roughly one million interneurons associated with processing olfactory input reported in the neuroanatomical study.
- A published field observation documented a coconut crab killing an adult red-footed booby, proving that the claw can be used against vertebrate prey.
- Females must approach the sea to release larvae even though the adult animal is specialized for life on land.
- Large individuals may require decades to reach maximum size.
- During a major molt, an adult can remain sealed in a burrow for weeks while the new exoskeleton hardens.

### Concise site-ready summary

The coconut crab is the world's largest terrestrial arthropod, a slow but heavily built island scavenger armed with one of the most powerful claws measured in a land invertebrate. A large male combines a hardened exoskeleton, strong climbing ability and extraordinary aerial smell with a kilonewton-class grip capable of subduing surprisingly large prey. Its weaknesses are equally clear: low absolute mass, poor speed, vulnerable joints and a respiratory system specialized for land rather than prolonged submersion.

### Rich narrative profile

The coconut crab is a useful test of ABS's absolute-scaling rules because it combines a tiny overall body compared with major vertebrates and one mechanically extraordinary weapon. Calling it merely 'strong for its size' understates the claw: the best experiment directly measured forces well above a kilonewton, and the authors' allometric model reaches 3.3 kN at the 4 kg upper end. That is enough to make contact dangerous even for animals much larger than the crab.

But the weapon must be delivered. A coconut crab does not sprint down prey like a cat, strike at range like a snake, or launch aerial attacks like a raptor. It walks, climbs, follows odor and exploits close opportunities. Its ideal fight is one where terrain, concealment or an opponent's mistake lets the large chela secure a limb or other vulnerable structure. Once clamped, the crab can brace with multiple legs and turn an otherwise slow encounter into a crushing mechanical contest.

The adult exoskeleton gives it real protection against small opponents, while the unusual land-breathing system and powerful aerial olfaction make it exceptionally competent in humid island forest. These traits deserve a high Special score. They do not justify heavyweight Attack or Defense. A 3 kg arthropod remains physically outclassed by wolves, big cats, great apes, large ungulates and megafauna, no matter how impressive its proportional engineering.

## 9. Mandatory image requirements

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/coconut-crab.png` **NOT PRESENT / NOT COMPLETE**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Coconut_Crab_(Birgus_latro),_Guam.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/a/aa/Coconut_Crab_%28Birgus_latro%29%2C_Guam.jpg
- `file_format_verified`: source is JPEG; final PNG not produced
- `alpha_verified`: **false**
- `full_body_verified`: **candidate visually shows the complete major silhouette and limbs, but strict adult/sex verification is unresolved**
- `adult_verified`: **false**
- `sex_verified_or_unknown`: **unknown**
- `license_status`: **CC BY-SA 4.0**, photographer Lance Vanlewen
- `notes`: Original is 1915x1956. Direct visual inspection shows the animal centered with body, claws, walking legs and antennae inside the frame. However, the source does not explicitly establish adulthood or sex, and the subject occupies only part of the frame. It therefore cannot be promoted to `FULL-BODY SOURCE FOUND` under the strict adult requirement. A second promising exact-species university photograph by Jakob Krieger was found, but adult/sex metadata was likewise not explicit. Current GitHub write tooling accepts UTF-8 text only, so no genuine transparent PNG binary can be committed in this run.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding | Confidence / caveat |
|---|---|---|---|---|
| Oka, Tomita & Miyamoto, PLOS ONE (2016), *A Mighty Claw* | https://doi.org/10.1371/journal.pone.0166108 | claw force, mass scaling, weapon function | 29 wild crabs; 29.4-1765.2 N measured; ~3300 N predicted at 4 kg | **Very high**; 3300 N is extrapolated, not directly measured |
| Frontiers in Zoology, Krieger et al. (2010) | https://doi.org/10.1186/1742-9994-7-25 | olfaction, neuroanatomy, senses | highly developed central olfactory pathway; ~1 million olfactory-processing interneurons | **High**, peer-reviewed anatomical work |
| Helfman (1977), agonistic behavior | https://doi.org/10.1111/j.1439-0310.1977.tb00490.x | fighting, dominance, social behavior | size differences strongly determine contest outcomes; visual displays | **High**, field behavioral study |
| Laidre (2017), Frontiers in Ecology and Environment | https://doi.org/10.1002/fee.1730 | predation | documented attack on adult red-footed booby and additional witnessed attack | **High** for observations; rare behavior, not routine diet |
| Henry (1991), Journal of Experimental Zoology | https://doi.org/10.1002/jez.1402590304 | terrestrial respiration | branchiostegite plays major gas-exchange role in fully terrestrial *B. latro* | **High** |
| Anagnostou & Schubart morphometrics | https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/11/app/uploads/2017/06/S30_C16_136_149.pdf | dimorphism, heterochely | pronounced sex difference in heterochely; male-biased large size classes | **High-moderate**, population/sample context matters |
| Drew & Hansson population structure | https://pure.mpg.de/rest/items/item_2126783_4/component/file_2126782/content | sexual dimorphism | Christmas Island females averaged ~24% smaller than males at same site | **High-moderate**, local population |
| Animal Diversity Web | https://animaldiversity.org/accounts/Birgus_latro/ | behavior, lifespan, reproduction, ecology | up to 60 y; climbing; solitary; dominance; marine larval cycle | **Moderate-high**, synthesis; its old IUCN status is outdated |
| Australian Geographic fact file | https://www.australiangeographic.com.au/fact-file/fact-file-coconut-crab-birgus-latro/ | upper size, sex difference, lifespan | males >4 kg, ~1 m leg-tip span, females smaller, >50 y | **Moderate**, reputable secondary source |
| Hamasaki et al. (2016), Aquaculture Research | https://doi.org/10.1111/are.12699 | larval development / conservation context | marine larval development experimentally studied; populations depleted on inhabited islands | **High** |
| Reproductive migration study | https://doi.org/10.3800/pbr.8.49 | migration/reproduction | both sexes migrate between inland/coast during reproductive season | **High** |
| GBIF taxon | https://www.gbif.org/species/4311512 | taxonomy | accepted *Birgus latro* species record | **High** for taxonomic identity |
| Wikimedia Commons, Lance Vanlewen | https://commons.wikimedia.org/wiki/File:Coconut_Crab_(Birgus_latro),_Guam.jpg | image provenance | exact species, 1915x1956, CC BY-SA 4.0 | **High** for identity/license; adult/sex not explicit |
| USGS coconut crab media | https://www.usgs.gov/media/images/coconut-crab-palmyra-atoll | alternate image provenance | exact *B. latro*, public-domain government photograph | **High** provenance; framing/adult status not selected as primary |

### Source conflicts and uncertainty

1. **Mass/length:** the 4 kg and ~1 m figures are upper limits, not averages. This report deliberately uses a 3 kg large male rather than turning maxima into canonical norms.
2. **Speed:** repeated 4-5 km/h internet figures lack adequate primary measurement provenance. `speed_mps` remains 0.0.
3. **Claw force:** 3,300 N is an allometric prediction at 4 kg. The directly measured maximum in the PLOS sample is 1,765.2 N. These must never be presented as the same evidentiary category.
4. **Conservation:** older ADW material repeats the former Data Deficient status. Current sources identify the species as Vulnerable. Use the current IUCN assessment at migration time.
5. **Adult predation:** the booby event is real and published but rare. It demonstrates capability, not a specialized bird-hunting lifestyle.
6. **Lifespan:** multi-decade longevity is well supported, but exact age assignment to the oldest wild crabs is uncertain.

## 11. Cross-animal normalization notes

- **Versus Bullet Ant:** coconut crab must be vastly higher in absolute Raw Power, Attack, Defense and Size. Both have impressive arthropod specializations, but the crab's kilograms of mass and measured kN-class claw create orders-of-magnitude greater absolute mechanical threat.
- **Versus Camel Spider:** coconut crab is much slower but far larger, better armored and enormously stronger in absolute weapon force. It should win Raw Power, Weaponry, Protection and Defense while losing rapid close-range movement.
- **Versus Chameleon:** coconut crab is physically dominant in Attack and Defense despite lower Agility. Chameleon's high Special comes from a different specialization profile and should not imply combat parity.
- **Versus Cockatoo:** the crab's Attack/Defense are higher because of armor and claw mechanics, while Cockatoo should dominate Agility and Intelligence. The matchup is terrain-sensitive because flight can prevent the crab from ever securing a grip.
- **Versus Capuchin Monkey:** the monkey has far superior Agility, Intelligence and tactical flexibility. The crab's claw is dangerous enough that careless contact is costly, but this does not justify rating the 3 kg crab near a primate in overall combat adaptability.
- **Versus Bighorn Sheep / Cape Buffalo / Camel:** the crab's spectacular proportional strength must not leak upward into comparable Attack. These vertebrates carry tens to hundreds of kilograms more mass and deliver much larger whole-body forces.
- **Special 78.0:** intentionally high because the combination of extreme claw mechanics, aerial olfaction and full terrestrialization is rare. It is not a proxy for overall battle power.

## 12. Future field proposals

1. Add a dedicated `pinch_force_n` field so clawed taxa are not forced into the bite-PSI schema.
2. Obtain instrumented maximum walking speed and acceleration for large adult males on standardized flat and rough substrates.
3. Measure pinch force in verified 3-4 kg wild males to test the published allometric extrapolation directly.
4. Standardize adult male body dimensions using carapace/thoracic length, body length and leg span as separate fields.
5. Quantify exoskeleton puncture/compression resistance at carapace, abdomen and joint membranes for Defense calibration.
6. Measure sustained terrestrial locomotor performance, thermal limits and dehydration effects to improve Stamina scoring.
7. Expand field documentation of vertebrate predation to determine whether the red-footed booby observations represent rare opportunity or a recurring island-specific behavior.
8. Secure a reuse-permitted, explicitly adult male, unobstructed full-body photograph with all appendages visible for the mandatory transparent PNG pipeline.
