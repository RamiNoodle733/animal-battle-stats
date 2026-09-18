# Camel

## 1. Identity and canonical specimen

- **Common name:** Camel (Dromedary / Arabian camel)
- **Scientific name:** *Camelus dromedarius* Linnaeus, 1758
- **Exact animal represented:** The roster's generic `Camel` is treated as the one-humped dromedary, *Camelus dromedarius*. This is distinct from the separately rostered Bactrian Camel (*Camelus bactrianus*).
- **Status:** Living, overwhelmingly domestic/semi-domestic; substantial feral populations occur in Australia. There is no surviving native wild dromedary population.
- **Canonical combat specimen:** Healthy mature adult male in normal condition, approximately 6+ years old, 550 kg, 200 cm at the shoulder, approximately 300 cm head-body length.
- **Why male:** Adult males are the primary fighting sex during rut and become markedly aggressive toward rival males. A 2020 Algerian morphometric study of 30 adult males and 30 adult females reported 551.2 ± 58.7 kg for males versus 482.6 ± 60.0 kg for females. Male dromedaries may guard breeding groups and fight challengers.
- **Population variation:** Dromedary breeds vary substantially in mass, proportions and intended use. A broad mammal reference gives roughly 400-600 kg, 220-340 cm head-body length and 180-200 cm shoulder height; zoo references extend mass to about 690 kg and shoulder height to 230 cm. Ethiopian morphometrics across eight breeds found mean shoulder height about 195.7 cm, with sampled values from 170-220 cm. The 550 kg canon is representative of a substantial adult male, not a record individual.

## 2. Physical measurements

### Mass

The strongest sex-specific modern measurement found is Babelhadj et al.'s study of adult Naili dromedaries over five years old: males averaged **551.2 ± 58.7 kg**, females **482.6 ± 60.0 kg**. Broader references commonly place adults around 300-690 kg, depending on sex and breed.

**Canonical:** 550.0 kg. **Confidence: high.**

### Height

Broad mammal references place shoulder height around **180-200 cm**, while a multi-breed Ethiopian morphometric sample averaged **195.7 cm** and ranged 170-220 cm. Some zoological references extend the species range to 230 cm.

**Canonical:** 200.0 cm at shoulder. **Confidence: high.**

### Length

A broad species description reports **220-340 cm head-body length** and **45-55 cm tail**. SeaWorld reports about 3 m body length. Because measurement conventions can differ and the site's `length_cm` field should represent the animal's main body dimension rather than height to hump, **300.0 cm** is selected as a practical representative head-body length.

**Canonical:** 300.0 cm. **Confidence: moderate.**

### Speed

Institutional claims conflict sharply. Réserve Africaine de Sigean lists **20 km/h (5.6 m/s)**, while weaker popular sources repeat much higher racing/sprint values. No strong instrumented species-wide maximum-speed study was found in this run. A generic top-speed field should not be populated from racing-camel anecdotes or unsourced 40 mph claims.

**Canonical:** `speed_mps: 0.0` pending defensible maximum-speed evidence. **Confidence in leaving unresolved: high.**

### Lifespan

Animal Diversity Web gives about **40-50 years**, and Oakland Zoo gives **30-40 years** in protected care. Australian management literature says captive camels can live as long as 50 years. A representative canonical value of **40.0 years** is defensible.

### Bite force and dentition

A wilderness-medicine review reports mature camels have **34 teeth**, including 8 incisors, 4 canines and 22 molars, and repeats a bite-pressure figure of 28 kg/cm². However, the underlying measurement protocol/contact geometry was not established strongly enough to treat that as a standardized ABS PSI measurement. Clinical evidence does establish that camel bites can combine penetrating and crush trauma, and a biting camel may lift, shake and throw a victim.

**Canonical:** `bite_force_psi: 0.0`. Do not convert the clinical pressure claim into a precise PSI field without primary measurement validation.

### Defensive structures and desert anatomy

The camel has no armor or shell. Its protection comes from large body mass, robust limbs, thick coat, tough keratinized foot pads, callosities at ground-contact points, long eyelashes, closable/slit-like nostrils and a nictitating membrane that protects the eyes. Broad two-toed feet spread load on soft sand. The hump is principally a fat reserve, not a water tank.

## 3. Canonical proposed factual fields

```text
weight_kg: 550.0
height_cm: 200.0
length_cm: 300.0
speed_mps: 0.0
lifespan_years: 40.0
bite_force_psi: 0.0
```

`speed_mps` and `bite_force_psi` are intentionally unresolved rather than inherited from old placeholders. Mass, shoulder height and length represent a healthy mature male, not an exceptional racing or giant specimen.

## 4. Combat biology

### Primary weapons

The dromedary's most important close weapon is its **bite**. Mature camels possess prominent incisors and canine teeth, and clinical bite literature documents deep soft-tissue injury, vascular and nerve damage, fractures and dislocations. A camel may retain its grip and shake or throw what it has bitten.

Its second major weapon is **whole-body and limb force**. A 550 kg animal can shove with its chest, head and neck, shoulder an opponent, trample at close range and kick with long limbs. Dromedary confrontations documented by ADW include whole-body pushing and lowered head/neck contact. During rut, males can inflict serious injuries on rivals.

### Offensive mechanics

The camel is not a specialized pursuit predator. It works best in close quarters, where height, reach, mass and leverage matter. A bite can become more damaging if followed by a head/neck lift and shake. Long legs also keep the torso elevated and create substantial kicking reach, although this report does not assign a fabricated kick-force number.

### Defense and toughness

The principal defensive asset is **size**. A 550 kg male is difficult for small and medium opponents to disable quickly. The long neck and legs are exposed targets, however, and there is no armor over the torso. Desert physiology increases resistance to heat and water shortage but should not be mistaken for resistance to laceration, puncture or blunt trauma.

### Locomotion and maneuverability

Dromedaries use walking, pacing and running gaits and are highly effective over sand. Their broad feet reduce sinking on loose substrate. They are tall and relatively narrow-bodied, so they are less compact and explosively maneuverable than cats or canids. Their long neck and mobile head nonetheless give useful striking/bite reach around the body.

### Endurance and physiological stamina

This is the camel's standout conventional performance domain. Classic Sahara experiments found dromedaries could tolerate water loss equivalent to **30% of body weight** under severe desert heat. The same work recorded very low urine output during deprivation and a camel lasting **17 days** on dry food without drinking in hot summer conditions while not working. Modern work on lactating camels found about **21% body-mass loss after 16 days** of water deprivation in animals completing the treatment.

Heat management is equally unusual. Dromedaries use adaptive heterothermy, allowing body temperature to vary much more under heat and dehydration so that heat can be stored during the day and dissipated later, reducing evaporative water loss. Experimental literature reports dehydrated animals cycling roughly from the mid-30s °C in the morning toward ~41-42 °C later under severe conditions.

These adaptations justify elite environmental endurance, but not infinite high-output fighting stamina. Prolonged dehydration still causes major physiological changes, including reduced plasma volume and renal filtration.

### Senses

Vision, hearing and smell are useful but not demonstrated here at elite specialist levels. Eye protection is exceptional: eyelashes, substantial eyelids and a nictitating membrane help maintain function in blowing sand. Nostrils can restrict sand entry. These are primarily environmental protections rather than evidence of extraordinary sensory acuity.

### Intelligence and tactics

Camels learn handling routines and social relationships, but the evidence reviewed here does not justify primate/cetacean-level cognition. Combat behavior is nevertheless flexible enough to include threat display, guarding, pushing, biting and escalation. Rutting males monitor females and rivals, interpose themselves, chase intruders and may fight seriously.

### Intraspecific fighting and ferocity

Outside rut, dromedaries are generally not highly aggressive. During rut, this changes substantially. Veterinary reproduction references describe increased male aggression toward other males and sometimes humans, attempts to escape confinement, herd guarding and serious bite-inflicted wounds. This seasonal state is relevant to the canonical fighting male, but Ferocity is not scored as if the animal is permanently rutting at maximum intensity.

### Predator defense

Large adult size, herd association, kicking, biting and intimidation make a healthy adult a difficult target for most predators. Historically, large carnivores could still threaten camels, especially vulnerable individuals and young. Long limbs and neck create exploitable targets against large specialized predators.

### Environmental advantages

- Excellent heat and dehydration tolerance.
- Broad feet and long legs are well suited to sand and open arid terrain.
- Ability to browse high and eat coarse, thorny, salty and bitter plants supports persistence where competitors struggle.
- Protective eye/nasal structures reduce impairment in blowing sand.

### Environmental disadvantages

- Large body and long limbs are awkward in dense forest, steep clutter, deep mud and confined spaces.
- No aquatic specialization.
- Desert endurance does not confer armor against teeth, claws or horns.
- Extreme dehydration is survivable but still reduces physiological reserve and eventually food intake.

### Matchup archetypes

**Favorable:** tiny and small attackers lacking a way to reach vital structures; similarly sized but lightly armed opponents in open terrain; endurance contests in hot, dry environments.

**Unfavorable:** large cats or other predators capable of attacking the throat/neck while avoiding the bite; armored or heavily horned megaherbivores that exceed it in weapon specialization; opponents that can exploit confined terrain where the camel cannot use reach or movement.

## 5. Proposed ABS substats

All values use the roster-wide absolute 0.1-100.0 scale.

| Substat | Score | Justification |
|---|---:|---|
| Size | 68.0 | 550 kg and ~2 m shoulder height make it a large terrestrial mammal, but it remains far below rhino/elephant/whale mass anchors. |
| Raw Power | 63.0 | Large body, long limbs, neck leverage and ability to shove/trample provide substantial absolute force without megafauna-level power. |
| Weaponry | 55.0 | Dangerous canine-equipped bite plus kicks and body checks, but no dedicated horn, tusk, claw or predator dentition system. |
| Protection | 39.0 | Coat, tough feet and callosities help environmentally; there is no true armor and limbs/neck remain exposed. |
| Toughness | 65.0 | Large mass plus exceptional tolerance of heat/dehydration, but trauma resistance should not be conflated with desert physiology. |
| Maneuverability | 55.0 | Competent over open sand with useful reach, but tall proportions and mass limit tight-turn agility. |
| Endurance | 91.0 | One of the roster's strongest heat/water-deprivation specialists; still below a perfect ceiling because survival physiology is not identical to sustained maximal exercise. |
| Tactics | 49.0 | Flexible social/rut behavior and rival guarding, but limited evidence for advanced combat planning. |
| Senses | 53.0 | Functional mammalian senses plus excellent ocular/nasal protection; no evidence for elite sensory acuity. |
| Ferocity | 60.0 | Rutting males can become dangerous and inflict severe injuries; baseline temperament is much calmer. |
| Abilities | 77.0 | Adaptive heterothermy, water conservation and rapid rehydration are unusually powerful environmental adaptations, though not direct damage systems. |

## 6. Proposed six headline ABS ratings

- **Attack: 61.0** — A 550 kg male can bite, lift/shake, kick, shove and trample. Strong absolute offense, but substantially below animals with giant horns, tusks, crushing jaws or specialized predatory weapon suites.
- **Defense: 54.0** — Size and toughness matter, but the camel lacks armor and exposes a long neck and limbs. Desert hardiness raises persistence more than direct damage resistance.
- **Agility: 58.0** — Effective open-ground and sand locomotion with useful neck reach, but not a high-turn-rate specialist.
- **Stamina: 91.0** — Elite heat and dehydration endurance supported by classic and modern physiology. The rating recognizes persistence rather than pretending a dehydrated camel maintains maximum sprint output indefinitely.
- **Intelligence: 52.0** — Social recognition, handling learning and flexible rut/guarding behavior justify moderate cognition, without evidence for elite problem solving.
- **Special: 78.0** — Adaptive heterothermy, extreme water conservation, rapid rehydration and sand-protection systems can strongly alter environmental matchups.

## 7. Abilities and traits

### Special abilities

1. **Desert Heterothermy** — Under heat and dehydration, the dromedary permits unusually large controlled daily body-temperature swings, storing heat during the day and dissipating it later. This reduces dependence on evaporative cooling and preserves water in prolonged hot-weather matchups.
2. **Water-Loss Fortress** — Dromedaries tolerate extreme dehydration through low water expenditure, reduced urine production and powerful renal/endocrine conservation responses, then can rapidly drink large volumes when water becomes available. This greatly extends functional survival in arid endurance scenarios.

### Unique traits

1. **Single-Hump Energy Reserve** — The dromedary's single hump concentrates fat reserves rather than storing water, providing an energy buffer while keeping much of the body less uniformly insulated than if fat were distributed everywhere.
2. **Sand-Sealed Face** — Protective eyelashes/eyelids, a nictitating membrane and nostril control help preserve vision and respiration in blowing sand, making the camel unusually resistant to desert sensory disruption.

## 8. Expanded profile

### Habitat and range

Dromedaries are associated with hot deserts, semi-deserts and other arid/semi-arid landscapes across North Africa, the Arabian Peninsula, parts of the Middle East and South Asia. They are domestic or semi-domestic across most of this range. Australia supports extensive feral populations descended from animals introduced during the nineteenth century; Northern Territory government material reports feral camels across more than 37% of mainland Australia.

### Diet and ecology

Dromedaries are browsing/grazing herbivores able to use rough, thorny, salty and bitter vegetation. Australian management guidance notes that they browse as high as about **3.5 m** and can consume plants avoided by many livestock species. Their broad diet and mobility let them exploit sparse arid resources, but feral populations can damage vegetation, waterholes, dunes, fences and culturally important food plants.

### Social structure

Dromedaries form non-territorial social groups. ADW describes family units centered on a male with females, subadults and young, while Australian feral-camel guidance distinguishes bull groups, cow/calf groups and breeding groups with a mature bull. Rutting bulls defend access to females and may aggressively exclude rivals.

### Reproduction and life history

Females generally mature earlier than males. Male full reproductive activity is delayed until several years of age. Gestation is roughly 12-14 months and usually produces one calf. Australian management literature describes weaning around 18 months. Domestic animals can reach roughly 40-50 years under favorable conditions.

### Conservation and human interaction

Because *C. dromedarius* is a domesticated species without a surviving native wild population, a normal wild-species IUCN category is not the useful conservation frame. Humans have used dromedaries for transport, milk, meat and other products for millennia. In Australia, feral camels are managed as an invasive large herbivore because of ecological and infrastructure impacts.

Camel-human conflict deserves respect. Medical literature documents severe bites with penetrating and crushing injury, including fractures, vascular injury and nerve damage. Rutting adult males are particularly hazardous to handlers.

### Major adaptations

- Extreme dehydration tolerance and low water expenditure.
- Adaptive heterothermy reducing evaporative cooling demand.
- Strong renal/endocrine response to dehydration.
- Rapid high-volume rehydration.
- Broad padded feet for sand.
- Eye and nostril protection against blowing particles.
- Concentrated hump fat reserve.
- Long legs and elevated body geometry that suit open hot terrain.

### Genuine fun facts

- The hump stores **fat, not a reservoir of drinking water**.
- Classic physiological experiments found a camel could tolerate water loss around **30% of body mass** under severe desert heat.
- In the same classic work, one non-working camel on dry food went **17 days without drinking** in hot summer conditions.
- A thirsty camel can replace an enormous water deficit rapidly; modern watering experiments recorded lactating camels drinking roughly **72 ± 7 kg of water** after an eight-day deprivation treatment.
- Dromedary males display the **dulla**, an inflatable/extrudable soft palate used prominently during rut.
- The species no longer has a native truly wild population, yet Australia has a major feral population descended from introduced domestic animals.

### Concise site-ready summary

The dromedary camel is a 500-plus-kilogram desert endurance specialist whose combat value comes from size, a dangerous canine-equipped bite, long-legged kicking reach and extraordinary heat/dehydration physiology. A mature male is especially formidable during rut, when rival guarding and serious fighting increase. It lacks armor and specialized horns or claws, but few large mammals match its ability to remain functional through punishing arid conditions.

### Rich narrative profile

A dromedary is easy to underestimate if its hump and desert reputation are treated as curiosities rather than a tightly integrated survival system. A mature male stands around two meters at the shoulder and carries roughly half a tonne of mass on long legs ending in broad feet suited to loose substrate. In direct conflict, that frame gives it reach and leverage. The mouth is not merely a grazing tool: adult dentition includes prominent canines, and documented human injuries show that camel bites can crush, penetrate, hold and become more destructive when the animal shakes or lifts its target. Rut transforms normally restrained social behavior into much more dangerous rival defense.

Its most extraordinary advantages emerge when a matchup lasts. Dromedaries can tolerate dehydration that would cause circulatory collapse in most mammals, reduce urine and evaporative losses, and allow body temperature to fluctuate widely so they do not have to spend as much water on cooling. Those mechanisms do not make camel hide into armor or make a kick stronger, so they are kept primarily in Stamina and Special rather than double-counted across every category.

Against a smaller opponent in open desert, the camel combines a difficult-to-overcome mass gap with endurance and reach. Against a specialized large predator, however, its exposed neck and limbs matter. Against a rhino, elephant or other heavily armed megaherbivore, its offensive equipment is clearly inferior. That mixture makes the dromedary a strong large-animal generalist and an elite environmental endurance specialist rather than an apex direct-damage fighter.

## 9. Future structured-field proposals

- `canonical_sex`: male
- `canonical_life_stage`: mature adult
- `mass_range_kg`: population/breed range separate from canonical mass
- `weapon_notes`: canine-equipped bite; kicking/shoving/trampling
- `dehydration_tolerance_pct_body_mass`: evidence field with context rather than a battle score
- `environmental_endurance`: separate structured descriptor so desert survival is not forced entirely into generic Stamina
- `evidence_confidence`: per factual field
- `measurement_context`: sprint/racing vs routine locomotion, shoulder height vs hump height, measured vs modeled

## 10. Image requirement

- `image_status`: **FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING**
- `png_repo_path`: `animal-research-for-update/images/camel.png`
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Camelus_dromedarius.001_-_Zoo_Aquarium_de_Madrid.JPG
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/f/f0/Camelus_dromedarius.001_-_Zoo_Aquarium_de_Madrid.JPG
- `file_format_verified`: source JPEG verified by Commons metadata; final PNG does not yet exist
- `alpha_verified`: no
- `full_body_verified`: yes, direct visual inspection shows the complete head, neck, hump/torso, all four legs/feet and tail within the frame
- `adult_verified`: visually mature/full-sized zoo dromedary; source metadata does not state age, so exact age is unknown
- `sex_verified_or_unknown`: unknown; no sex inference is made from appearance
- `license_status`: CC BY-SA 4.0, reuse permitted with attribution/share-alike compliance
- `notes`: Exact *Camelus dromedarius*, 3264×2448 Wikimedia Commons Quality Image by Fernando Losada Rodríguez. Full-body framing is substantially stronger than cropped web candidates. Binary cutout and commit remain pending because the connected GitHub writer is UTF-8 text-only. Do not count this source photograph as a completed PNG.

## 11. Source ledger

| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| Babelhadj et al., *Caractérisation biométrique du Chameau de la steppe* | https://revues.cirad.fr/index.php/REMVT/article/view/36326 | Adult sex-specific mass and morphology | 30 adult males >5 y: 551.2 ± 58.7 kg; 30 females: 482.6 ± 60.0 kg | High; specific Algerian Naili population |
| Journal of Animal Science, Ethiopian camel morphometrics | https://academic.oup.com/jas/article/96/12/4925/5090819 | Shoulder height, body proportions, breed variation | Mean shoulder height ~195.7 cm; sample 170-220 cm; body-length and other morphometrics reported | High; breed/population dependent |
| GBIF species description | https://www.gbif.org/es/species/190542145 | Broad dimensions, mass, life history | 220-340 cm head-body, 45-55 cm tail, 180-200 cm shoulder, 400-600 kg; sex/breed variation | Moderate-high; synthesis rather than a single measurement study |
| Animal Diversity Web | https://animaldiversity.org/accounts/Camelus_dromedarius/ | Lifespan, social behavior, domestication | ~40-50 y; pushing/snapping behavior; family groups; no native wild population | Moderate; older synthesis but biologically consistent |
| IVIS, Reproductive Physiology in Male and Female Camels | https://www.ivis.org/library/recent-advances-camelid-reproduction/reproductive-physiology-male-and-female-camels | Rut aggression, dulla, male behavior | Rutting males become aggressive, guard females and may lose substantial weight; dulla display | High for veterinary reproductive behavior |
| MDPI Animals, housing management of rutting male dromedaries | https://www.mdpi.com/2076-2615/10/9/1621 | Modern behavioral observations | 48 adult males; group/housing conditions affected teeth grinding, dulla, vocalization, tail/urine behaviors | High; managed adult males |
| Calleo et al., *Camel Bites* | https://journals.sagepub.com/doi/full/10.1016/j.wem.2018.02.009 | Dentition and injury mechanics | 34 teeth; bites cause crush/incisional injury; lifting/shaking can worsen trauma | Moderate-high; clinical review. Pressure claim not accepted as canonical PSI without primary protocol |
| Schmidt-Nielsen et al., *Water Balance of the Camel* | https://journals.physiology.org/doi/abs/10.1152/ajplegacy.1956.185.1.185 | Dehydration tolerance and water economy | ~30% body-mass water loss tolerated; low urine/evaporative losses; rapid rehydration; 17 d dry-food trial | High, classic primary physiology; small historical experimental series |
| Bouâouda et al., *Daily regulation of body temperature rhythm* | https://physoc.onlinelibrary.wiley.com/doi/10.14814/phy2.12151 | Adaptive heterothermy | Heat/dehydration produce large regulated body-temperature variation reducing evaporative loss | High, peer-reviewed experimental physiology |
| Hormonal control of water and sodium during dehydration | https://pubmed.ncbi.nlm.nih.gov/8335227/ | Endocrine/renal response | ~30% mass loss; plasma volume -42%; vasopressin/renin rise; urine production falls strongly | High; experimental physiology |
| APS, watering intervals in lactating camels | https://journals.physiology.org/doi/full/10.1152/ajpregu.00015.2013 | Modern dehydration/rehydration performance | ~21% mass loss after 16 d in completing animals; 72 ± 7 kg water intake after 8 d treatment | High; lactating females, so not direct male performance |
| Northern Territory Government | https://nt.gov.au/environment/animals/feral-animals/feral-camel | Australian feral range and ecological impacts | Feral camels across >37% of mainland Australia; vegetation/waterhole/infrastructure impacts | High agency source; Australia-specific |
| PestSmart national camel control guidance | https://pestsmart.org.au/toolkit-resource/model-code-of-practice-for-the-humane-control-of-feral-camels/ | Diet, browsing height, feral social structure, life history | Browse to ~3.5 m; eat salty/thorny plants; bull/cow/breeding groups; ~13 mo gestation; ~18 mo weaning | High management synthesis; feral Australian context |
| Wikimedia Commons, Madrid dromedary | https://commons.wikimedia.org/wiki/File:Camelus_dromedarius.001_-_Zoo_Aquarium_de_Madrid.JPG | Image provenance | Exact species, 3264×2448, CC BY-SA 4.0, Quality Image; visually complete body | High for provenance/framing; sex and exact age not stated |

## 12. Confidence and conflicts

- **Mass:** high confidence for a 550 kg canonical mature male. Breed/population variation is substantial.
- **Height:** high confidence around 200 cm shoulder height; do not confuse shoulder height with top-of-hump height.
- **Length:** moderate confidence because references use different body-length conventions.
- **Speed:** unresolved. Institutional and popular figures conflict and instrumented maximum-speed evidence was not found. Keep 0.0.
- **Lifespan:** moderate-high confidence at 40 years representative, with 40-50 years commonly reported under care.
- **Bite PSI:** unresolved. Clinical bite severity is real, but the repeated pressure number lacks sufficiently transparent primary methodology for the site's canonical PSI field.
- **Wild status:** dromedary is domesticated with feral populations; do not label Australian feral animals as a surviving native wild lineage.

## 13. Cross-animal normalization notes

- **Versus Bactrian Camel:** The existing Bactrian Camel staging profile uses Attack 59.0 / Defense 57.0 / Stamina 90.0. Dromedary Attack 61.0 reflects the canonical rutting male and documented severe bite mechanics, while Defense 54.0 stays slightly lower because the dromedary is generally less massively built/insulated. Stamina 91.0 is only one point higher, reflecting exceptional hot-desert dehydration physiology rather than a claim that it dominates every endurance environment.
- **Versus Bongo:** Camel Attack 61.0 is only slightly above Bongo 59.0 because the bongo has much more specialized horns; camel's advantage is mass, reach and multi-mode bite/kick/shove offense rather than weapon quality.
- **Versus Bison:** Camel remains clearly below Bison in direct collision/megaherbivore power. Do not let desert stamina inflate Attack or Defense.
- **Versus Black Rhinoceros:** Camel is far below the rhino's Attack 82.0 / Defense 76.0 because it lacks a comparable horn system, armor-like hide/build and mass concentration.
- **Versus Bobcat and Bullfrog:** Camel's much higher absolute power preserves roster-wide scaling, while those smaller animals can still outrank it in maneuverability/agility.
- **Special/Stamina double-counting check:** Stamina 91.0 represents prolonged physiological persistence; Special 78.0 represents matchup-changing mechanisms such as adaptive heterothermy and water conservation. These are related, so Special is deliberately not pushed into the 90s.

### Final calibration verification

The profile follows `README.md` and `CALIBRATION.md`: absolute rather than pound-for-pound scoring, no inherited placeholder anchoring, no fabricated PSI, speed separated from agility, measured facts separated from editorial ratings, and exactly two special abilities plus exactly two unique traits.