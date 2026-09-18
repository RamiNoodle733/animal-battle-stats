# Capybara Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Capybara
- **Scientific name:** *Hydrochoerus hydrochaeris* (Linnaeus, 1766)
- **Family:** Caviidae, Hydrochoerinae
- **Status:** Living
- **Exact animal represented:** The greater capybara, *H. hydrochaeris*, not the lesser capybara *Hydrochoerus isthmius*.
- **Canonical specimen:** Healthy mature **dominant adult male**, reflecting the primary intraspecific fighting sex. Canonical mass **54.0 kg**, head-body length **120.0 cm**, shoulder height **55.0 cm**.
- **Dimorphism:** Sexual size dimorphism is modest and can reverse locally. A São Paulo capture study found adult males averaging **54.1 ± 8.05 kg** and adult females **62.0 ± 12.03 kg**. Behavioral work nevertheless shows strict male dominance hierarchies and found the dominant male significantly heavier than subordinate males within groups. Males also have a prominent snout scent gland (morrillo), greatly reduced in females.
- **Variation:** Body size varies with population, habitat and condition. The canonical 54 kg male is representative, not a record individual.

## 2. Physical measurements

### Mass and dimensions

- **Canonical `weight_kg`: 54.0 kg.** Closely matches the measured adult-male mean of 54.1 kg in Ferraz et al. (2005).
- **Canonical `length_cm`: 120.0 cm head-body.** Representative adult value consistent with large-bodied *H. hydrochaeris*; precise population means vary.
- **Canonical `height_cm`: 55.0 cm shoulder height.** Representative standing value. Posture makes a single height less robust than mass.
- **Confidence:** High for canonical mass; moderate for single canonical length/height.

### Speed and locomotion

Capybaras are competent terrestrial runners and exceptionally capable semi-aquatic escape swimmers, but this run did not locate a primary instrumented maximum running-speed trial for *H. hydrochaeris*. Popular 35 km/h claims are therefore not imported as measured fact.

- **Canonical `speed_mps`: 0.0 m/s.** Unknown defensible maximum, not absence of movement.
- Argentine National Parks describes agile swimming and dives lasting up to about **10 minutes**.

### Lifespan

- **Canonical `lifespan_years`: 6.0 years**, using Animal Diversity Web's average wild lifespan.
- ADW reports up to about **10 years wild** and **12 years captive**; Argentina's SIB gives roughly 10 years wild and 15 in captivity. These are longevity summaries rather than a single demographic life-table estimate.
- **Confidence:** Moderate.

### Dentition and bite

Capybaras are hystricognath rodents with continuously growing incisors adapted to clipping vegetation and gnawing. The incisors can inflict serious close-range wounds, but no defensible standardized *H. hydrochaeris* bite-pressure measurement was located in this run.

- **Canonical `bite_force_psi`: 0.0.** No fabricated PSI conversion.
- **Primary weapon:** paired incisors plus powerful jaw musculature.
- **Secondary weapons:** body mass, forefeet and short robust limbs during grappling/shoving.

### Defensive anatomy and semi-aquatic build

Capybaras have a heavy barrel-shaped body, short strong legs, four toes on the forefeet and three on the hind feet, with partial interdigital webbing. Eyes, ears and nostrils sit high on the head, supporting surface surveillance while mostly submerged. They have no armor, horns or claws specialized for combat.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 54.0,
  "height_cm": 55.0,
  "length_cm": 120.0,
  "speed_mps": 0.0,
  "lifespan_years": 6.0,
  "bite_force_psi": 0.0
}
```

### Future structured fields

```json
{
  "canonical_species": "Hydrochoerus hydrochaeris",
  "canonical_sex": "dominant adult male",
  "adult_male_mean_mass_kg_sao_paulo": 54.1,
  "adult_female_mean_mass_kg_sao_paulo": 62.0,
  "max_reported_dive_minutes": 10.0,
  "forefoot_toes": 4,
  "hindfoot_toes": 3,
  "locomotor_style": "semi-aquatic cursorial/swimming",
  "primary_weapon": "incisors"
}
```

## 4. Combat biology

### Weapons and offensive mechanics

The capybara's only serious natural cutting weapon is its rodent incisor pair. Delivery requires close range. Adult males also shove, chase and bite in dominance disputes. In a study of 2,911 within-group interactions, 34% were between adult males and those male-male interactions were invariably aggressive. This supports real fighting behavior without implying carnivore-like predatory weaponry.

### Defense and durability

A 54 kg compact body gives meaningful but moderate absolute toughness against small opponents. There is no armor or thick defensive hide comparable with armored mammals. Against large cats, crocodilians or other megafaunal predators, its main survival strategy is detection, group alarm and escape rather than absorbing attacks.

### Locomotion and maneuverability

On land the animal can accelerate and maneuver adequately for its size. Near water its matchup profile improves sharply: partially webbed feet, strong swimming, high-set sensory openings and prolonged submergence allow rapid transitions between terrestrial and aquatic movement. This is not treated as proof of an extreme land top speed.

### Endurance

Capybaras graze for long periods and can remain submerged for minutes, but neither fact establishes elite sustained fighting output. Heat stress is important: ADW notes their large body makes them susceptible to heat, and they often use water during the hottest periods.

### Senses and communication

High-set eyes, ears and nostrils are useful for detecting threats while partly submerged. Vocal communication is prominent, including alarm calls. Smell is socially important: males use the morrillo and anal glands for scent marking, with marking rates associated with social rank.

### Intelligence and tactics

Capybaras maintain stable social groups and linear male hierarchies, recognize social status, coordinate alarm behavior and choose water as an escape medium. This supports moderate behavioral flexibility and social perception, but there is no basis for primate/cetacean-level problem solving.

### Fighting, predation and predator defense

Capybaras are herbivores rather than predators. Male competition involves chasing and aggression, with stable rank relationships. Their primary anti-predator tactic is vigilance followed by rapid retreat and diving. Group living expands detection coverage.

### Environmental strengths

- **Strong:** riverbanks, marshes, flooded grasslands and shorelines where water escape is immediately available.
- **Neutral:** open grazing terrain with nearby cover/water.
- **Weak:** hot, dry terrain far from water, where heat management and escape options worsen.

### Major weaknesses

No armor; limited weapon reach; herbivore combat repertoire; modest land maneuverability relative to smaller predators; vulnerability to heat stress; strongest evasive advantages depend on nearby water.

### Matchup archetypes

- **Favorable:** much smaller terrestrial opponents that must enter incisor range; weak swimmers near deep water.
- **Mixed:** similarly sized mammals where mass and bite can matter but the capybara lacks specialized killing weapons.
- **Poor:** large felids/canids and crocodilians with superior killing weaponry; large hoofed megafauna that overwhelm it in mass/reach.

## 5. Proposed ABS substats

All scores use the absolute 225-animal scale, not pound-for-pound scaling.

| Substat | Score | Rationale |
|---|---:|---|
| Size | 31.0 | Roughly 54 kg: substantial rodent, but small beside large predators and megafauna. |
| Raw Power | 28.0 | Strong for a rodent, but absolute force remains modest. |
| Weaponry | 31.0 | Large incisors can wound seriously at close range; poor reach and no secondary killing weapon. |
| Protection | 18.0 | Fur and body bulk only; no armor or specialized defensive covering. |
| Toughness | 33.0 | Robust 54 kg body, but not adapted to absorb major penetrating trauma. |
| Maneuverability | 66.0 | Competent land movement and notably effective water transition/swimming. |
| Endurance | 52.0 | Sustained grazing/activity and aquatic competence, tempered by heat stress and lack of combat-endurance measurements. |
| Tactics | 51.0 | Stable hierarchy, alarm behavior and context-sensitive water escape. |
| Senses | 54.0 | High-set sensory openings plus useful auditory/olfactory communication. |
| Ferocity | 39.0 | Adult male disputes are genuinely aggressive, but species is not a predatory attack specialist. |
| Abilities | 61.0 | Semi-aquatic escape package materially changes shoreline matchups without being an offensive superweapon. |

## 6. Proposed six headline ABS ratings

- **Attack: 31.0** - Incisors and adult male aggression are credible, but limited reach and modest absolute body scale keep damage potential low-to-moderate roster-wide.
- **Defense: 29.0** - Body mass provides some resilience; lack of armor limits direct damage resistance. Water escape is not double-counted as physical armor.
- **Agility: 65.0** - Good amphibious repositioning and swimming control; no unsupported top-speed inflation.
- **Stamina: 52.0** - Useful sustained activity and diving capability, but no evidence for elite prolonged fighting output.
- **Intelligence: 52.0** - Stable social hierarchy, communication and context-sensitive escape tactics support moderate cognition.
- **Special: 63.0** - The integrated semi-aquatic package can transform a matchup near water, but does not approach venom/electric/echolocation specialists.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Waterline Escape** - Partially webbed feet, strong swimming and rapid diving let the capybara shift a terrestrial confrontation into water, where many land opponents lose mobility.
2. **Periscope Vigilance** - High-set eyes, ears and nostrils permit threat monitoring while most of the body remains submerged, improving concealment and escape timing.

### Unique traits

1. **Morrillo Rank Signal** - Adult males possess a prominent snout scent gland whose size and marking activity correlate with age/social dominance, supporting stable competitive hierarchies.
2. **Heavyweight Rodent Frame** - As the largest living rodent species, *H. hydrochaeris* combines rodent incisors with a body mass far beyond ordinary rodents.

## 8. Expanded profile

### Habitat and range

The species occupies much of South America east of the Andes, associated with savannas, forests, marshes, floodplains and other habitats that maintain access to water. Argentina's National Parks species system describes its range extending through much of South America into Buenos Aires Province.

### Diet and ecology

Capybaras are herbivorous grazers, favoring grasses, riparian herbs and aquatic vegetation while also consuming fruits, seeds and flowers. They may gnaw bark, which also wears continuously growing incisors. They are major wetland herbivores and prey for large South American predators.

### Social structure

Typical groups contain roughly ten adults, though group size varies and larger aggregations form around water in dry periods. Groups usually contain a dominant male, females, young and subordinate males. Male hierarchy is stable and strongly relevant to mating access.

### Reproduction and life history

Breeding can occur year-round. Argentina's SIB reports gestation around four to five months, litters commonly around four but ranging roughly two to seven, and sexual maturity near 1.5 years. Young are precocial and begin grazing early.

### Conservation and human interaction

The species is widespread and not presently characterized as globally threatened in the reviewed agency material, though local populations can be reduced by hunting for meat and hide. Capybaras also thrive in some human-modified landscapes, creating management conflicts where populations become dense.

### Major adaptations

Semi-aquatic feet, high-set sensory openings, strong swimming, prolonged submergence, continuously growing incisors, social vigilance and scent-based hierarchy are the main adaptations relevant to the ABS profile.

### Fun facts

- Adult females averaged heavier than adult males in one São Paulo field sample, despite males being the primary hierarchy-fighting sex.
- Male-male interactions in a classic field study were invariably aggressive, yet stable rank relationships can persist for years.
- Dominant males have larger/more active morrillos and preferential access to females.
- Capybara forefeet have four toes while hind feet have three.
- They can remain submerged for several minutes; an Argentine government species account reports up to about ten minutes.

### Concise site summary

The capybara is the world's largest living rodent, a roughly 50-plus-kilogram South American grazer whose real combat edge is not brute-force mythology but a combination of large incisors, stable male dominance behavior and exceptional semi-aquatic escape ability. Near water it can dive, swim and monitor threats with high-set eyes, ears and nostrils; away from water it is a robust but lightly protected herbivore with limited killing reach.

### Narrative profile

A dominant male capybara is built to hold rank within a social wetland herd, not to hunt. Its compact mass and large incisors make close contact risky for small opponents, and field observations confirm that adult males resolve hierarchy through genuine aggression. Yet the animal's most important matchup tool is positional. At the waterline, its short strong limbs and partially webbed feet let it abandon a land contest, submerge and reposition while its high-set sensory openings retain awareness. This produces a sharp environmental split: a capable evasive specialist beside water, but a comparatively ordinary, unarmored herbivore when trapped on dry ground against a dedicated predator.

### Future field proposals

- Instrument maximum terrestrial sprint speed and acceleration in healthy adults, reporting sex and substrate.
- Measure incisor bite force in newtons at standardized gape and record tooth contact geometry before any pressure estimate.
- Quantify turning radius and acceleration on land versus water for Agility calibration.
- Compare dominant-male and adult-female mass/weapon performance across wild populations.

## 9. Mandatory image section

- **image_status:** `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`
- **png_repo_path:** `animal-research-for-update/images/capybara.png` (not yet present)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Capybara_(Hydrochoerus_hydrochaeris)_alpha_male.JPG
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/8/8e/Capybara_%28Hydrochoerus_hydrochaeris%29_alpha_male.JPG
- **file_format_verified:** Source is JPEG; final PNG not created.
- **alpha_verified:** No. No PNG exists.
- **full_body_verified:** Yes. Direct visual inspection shows the complete head, torso, all four legs/feet and rump; capybaras have only a vestigial/non-visible external tail.
- **adult_verified:** Yes, source explicitly identifies an alpha male and the photographed animal has adult proportions.
- **sex_verified_or_unknown:** Male, explicitly identified by source as alpha male.
- **license_status:** CC BY-SA 4.0, Charles J. Sharp.
- **notes:** 3800x2533 Commons original. Clear isolated single animal and strong cutout candidate. Connected GitHub text writer cannot create/commit the required binary RGBA PNG, so image completion remains pending.

## 10. Evidence and source ledger

| Source | URL | Supports | Finding/context | Confidence / caveat |
|---|---|---|---|---|
| Ferraz, Bonach & Verdade, *Biota Neotropica* (2005) | https://www.biotaneotropica.org.br/BN/article/view/110 | Adult mass, sex/population variation | 39 captures; adult males 54.1 ± 8.05 kg, females 62.0 ± 12.03 kg in São Paulo agroecosystem | High for sampled population; not species-wide universal mean |
| Animal Diversity Web | https://animaldiversity.org/accounts/Hydrochoerus_hydrochaeris/ | Longevity, groups, behavior, heat stress, swimming | Average wild lifespan ~6 years; groups often around 10 adults; stable sociality and strong swimming | Moderate-high synthesis |
| Herrera & Macdonald, *Behavioral Ecology* (1993) | https://academic.oup.com/beheco/article-abstract/4/2/114/214327 | Male aggression, dominance, mating, alarm behavior | 2,911 interactions; 34% among adult males and invariably aggressive; linear stable hierarchies; dominant male heavier than subordinates | High, primary field behavior |
| Bedoya-Pérez et al., *Journal of Mammalogy* (2020) | https://academic.oup.com/jmammal/article-abstract/101/3/718/5848479 | Dimorphism, hierarchy, morrillo | Minimal size dimorphism; strict male hierarchy; top male preferential mating; male snout gland prominent | High, peer reviewed |
| Herrera & Macdonald, *Journal of Mammalogy* (1994) | https://academic.oup.com/jmammal/article-abstract/75/2/410/836346 | Scent marking | 3,864 marks observed; males mark more; rates associated with social rank | High, primary field behavior |
| Argentina SIB / Administración de Parques Nacionales | https://sib.gob.ar/especies/hydrochoerus-hydrochaeris | Anatomy, range, diet, diving, reproduction | Four foretoes, three hind toes, partial webbing; dives up to 10 min; broad South American distribution; 4-5 month gestation | High agency synthesis; dive value is reported capability rather than instrumented maximum |
| Wikimedia Commons, Charles J. Sharp | https://commons.wikimedia.org/wiki/File:Capybara_(Hydrochoerus_hydrochaeris)_alpha_male.JPG | Image provenance | Exact species, alpha male, Pantanal, 3800x2533, CC BY-SA 4.0 | High provenance; visually inspected full body |

### Conflicts and uncertainty

- Sex-size pattern is not safely summarized as “males are larger.” The São Paulo dataset had heavier females on average, while the Venezuelan hierarchy study found each dominant male heavier than subordinate males. Canonical male selection is based on fighting role, not a claim of universal male-biased dimorphism.
- Popular top-speed values lack the measurement quality required for a canonical maximum, so `speed_mps` stays 0.0.
- No bite PSI is invented from anatomy or anecdote.
- Lifespan sources differ between average and maximum values; 6.0 is explicitly an average-wild choice.

## 11. Cross-animal normalization notes

- **Versus Beaver (23 kg):** Capybara is over twice the canonical mass and therefore higher in Size/Raw Power, but Beaver has more specialized wood-cutting jaw biomechanics and self-sharpening incisor evidence. Capybara should not automatically outrank Beaver in Weaponry merely for mass.
- **Versus Capuchin Monkey (4 kg):** Capybara is vastly stronger in absolute mass/power and direct durability, while Capuchin remains far ahead in cognition and fine maneuverability.
- **Versus Bullfrog and Bullet Ant:** large absolute physical gaps are preserved. Capybara's Attack/Defense are not compressed toward tiny-animal scores because proportional feats are irrelevant to absolute scaling.
- **Versus Cape Buffalo (750 kg):** the buffalo remains in a different physical tier for Attack, Defense and Raw Power. A 54 kg capybara's semi-aquatic escape ability does not justify megafaunal physical scores.
- **Anti-double-counting:** Water escape primarily raises Agility/Abilities/Special. It is not simultaneously treated as armor or high direct Defense.
- **Speed/agility check:** Agility is based on maneuvering and land-water transition, not the unsupported 35 km/h internet figure.

## Verification checklist

- Exact taxon and canonical adult defined: yes.
- Dimorphism/population variation documented: yes.
- Factual fields and uncertainty documented: yes.
- Unsupported PSI avoided: yes.
- All current ABS-style substats scored with one decimal: yes.
- Six headline ratings, one decimal: yes.
- **Exactly two** named special abilities: yes.
- **Exactly two** unique traits: yes.
- Ecology/life history/conservation/human interaction/fun facts/site copy: yes.
- Source ledger with direct URLs and conflicts: yes.
- Cross-roster normalization: yes.
- Image source is exact-species, adult male, visually full-body and reuse-permitted: yes.
- Transparent PNG committed: **no**, truthfully pending binary tooling.