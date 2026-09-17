# Black Rhinoceros Research Overhaul

## Research status

- **ABS roster name:** Black Rhinoceros
- **Canonical taxon:** *Diceros bicornis* (black or hook-lipped rhinoceros)
- **Living/extinct:** Living
- **Canonical combat specimen:** Healthy mature adult male, representative rather than record-sized
- **Research confidence:** High for taxonomy, adult dimensions, horn dimensions, diet, social ecology and conservation status; moderate for a single representative speed; low for any bite-force PSI claim
- **Image status:** `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`

## 1. Identity and canonical specimen

The Black Rhinoceros entry represents *Diceros bicornis*, not the larger white rhinoceros. The species is a browser distinguished by a pointed, prehensile upper lip. Three living subspecies are recognized in current conservation accounting: south-western *D. b. bicornis*, south-central *D. b. minor*, and eastern *D. b. michaeli*. The western form *D. b. longipes* was declared extinct in 2011.

ABS should use a **healthy mature adult male**. Males are generally somewhat larger and thicker-horned, and adult bulls are the sex most directly associated with territorial and reproductive contests. The canonical animal is not an exceptional multi-tonne historical claim.

### Sexual dimorphism and population variation

Animal Diversity Web reports a general adult range of about 800-1,400 kg, 1.4-1.8 m shoulder height and 3.0-3.75 m head-body length, with males normally a little larger. International Rhino Foundation gives 800-1,350 kg, 1.4-1.7 m shoulder height and 3.0-3.8 m length. World Land Trust gives bulls up to about 1,350 kg and notes that male horns tend to be thicker while female horns tend to be longer and thinner. These overlapping sources support a representative bull near the upper middle of the normal species range rather than a record animal.

## 2. Physical measurements

### Mass

Authoritative ranges cluster around **800-1,350/1,400 kg**. A canonical **1,200.0 kg** mature bull is recommended. This is substantially larger than the already-researched 900 kg bison but remains far below the 5,500 kg African elephant anchor.

### Shoulder height

SANParks gives **140-180 cm**, ADW 1.4-1.8 m and IRF 1.4-1.7 m. **165.0 cm** is recommended as a representative mature male shoulder height.

### Body length

ADW gives **3.0-3.75 m**, IRF 3.0-3.8 m and SANParks 3.0-3.75 m. **350.0 cm** head-body length is recommended. Tail length is separate and ADW reports about 0.7 m.

### Speed

Zoo and conservation accounts commonly report short bursts around 50-56 km/h, but I did not find a controlled primary maximum-speed trial. Potter Park Zoo reports 35 mph and Helping Rhinos reports up to 50 km/h. To avoid presenting a popular maximum as precision biomechanics, ABS should use a conservative **13.9 m/s (50 km/h)** and label it an authoritative natural-history estimate, not an instrumented track maximum.

### Lifespan

IRF gives **35-40 years in the wild**; ADW gives a typical wild lifespan of 30-35 years and an average of 35. **35.0 years** is recommended for the canonical wild field.

### Bite force

No defensible species-specific standardized bite-pressure measurement was found. Black rhinos are browsers, and their decisive combat weapons are horns and body mass rather than a specialized bite. **`bite_force_psi: 0.0`** is recommended as the repository's unknown/unreliable-data value, not as a claim of literally zero jaw force.

### Horns

IRF reports the front horn at roughly **0.5-1.3 m** and rear horn up to **55 cm**. ADW gives anterior horn **42-128 cm** and posterior **20-50 cm**. SANParks describes the front horn as typically around **50 cm**, exceptionally up to about 140 cm. Smithsonian specimen metadata provide a useful reality check: one documented female specimen had a 60 cm nasal horn and 50 cm frontal horn. For the canonical bull, **55.0 cm front horn** is a defensible representative value, while the extreme >1 m values should be documented as exceptional rather than normal.

### Defensive structures

The species has thick, tough skin and a massive compact body, but it does **not** possess rigid plate armor. SANParks notes that the thick-layered skin helps protect against thorns and sharp grasses. Large bones, heavy musculature and body depth add substantial trauma tolerance. Mud wallowing also assists thermoregulation and ectoparasite/sun management, but dried mud should not be treated as combat armor.

## 3. Canonical proposed factual fields

| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **1200.0** | Representative mature bull within authoritative 800-1,350/1,400 kg ranges |
| `height_cm` | **165.0** | Representative shoulder height within 140-180 cm range |
| `length_cm` | **350.0** | Representative head-body length within 300-380 cm range |
| `speed_mps` | **13.9** | Conservative 50 km/h natural-history burst estimate; not an instrumented maximum trial |
| `lifespan_years` | **35.0** | Representative wild longevity from IRF/ADW |
| `bite_force_psi` | **0.0** | No defensible species-specific PSI measurement found |
| `front_horn_cm` | **55.0** | Representative, not exceptional, front-horn recommendation |

## 4. Combat biology

### Primary and secondary weapons

The primary weapon is the anterior keratin horn, backed by roughly 1.2 tonnes of body mass, a heavy skull and powerful neck/shoulder musculature. The posterior horn adds a second contact point and can matter during close pushing or hooking. The body itself is a weapon: a charge or short-range rush transfers far more absolute momentum than the attacks of medium carnivores.

### Offensive mechanics

A black rhino can rush, thrust, hook, shove and gore. The pointed horn concentrates force onto a small area, while the animal's mass makes even imperfect contact dangerous. Unlike a bison's shorter horns, the black rhino's anterior horn creates greater standoff reach. Unlike an elephant, however, the rhino lacks a trunk for manipulation and paired tusks for broader weapon control.

### Defense and durability

Defense is driven by huge body mass, thick skin, skeletal robustness and muscular depth. Healthy adults have few natural predators. This should score well above large carnivores such as lion or black bear, but below the African elephant because the elephant has several times the mass and greater body depth. The skin is tough rather than invulnerable: eyes, ears, mouth, abdomen and limbs remain vulnerable.

### Locomotion and maneuverability

Black rhinos are surprisingly fast for their mass and can pivot and accelerate over short distances. Their agility is impressive for megafauna, but they do not have the fine body control of cats, mountain ungulates or small vertebrates. Top speed must not be substituted directly for Agility.

### Endurance and stamina

They move around large home ranges, browse for long periods and tolerate arid landscapes, but high-intensity charging is a burst behavior. Their massive bodies impose heat costs, and midday inactivity is common. Stamina should be strong for sustained daily movement but not elite for prolonged maximal fighting.

### Senses

Smell and hearing are especially important. SANParks notes the common characterization of relatively poor eyesight with greater reliance on hearing and smell, while National Geographic describes sharp hearing and keen smell. Sensory scoring should reflect this uneven profile rather than simply calling all senses excellent.

### Intelligence and tactics

Black rhinos learn home ranges, water points, scent-marking systems and social boundaries. Males may be territorial; females and subadults are more social than the simplistic 'always solitary' stereotype. There is no evidence for the flexible problem-solving level of elephants, great apes, cetaceans or corvids. Combat tactics are direct: assess, threaten, charge, horn-thrust and disengage.

### Intraspecific fighting

Adult bulls can engage in dangerous contests over access and space. Horns are therefore not merely anti-predator structures. Male-male encounters can involve charging and goring, making the canonical adult male biologically experienced with opponents of comparable weapon type and mass.

### Predator defense

A healthy adult is an extremely difficult prey item. Horn reach, acceleration and mass make frontal approaches dangerous. Calves are more vulnerable, but ABS uses a prime adult male and should not dilute adult Defense with juvenile predation risk.

### Aggression / ferocity

Black rhinos can respond aggressively when startled or threatened, particularly at close range. Poor visual discrimination can contribute to rapid defensive responses. This is not evidence of mindless aggression; risk avoidance, scent communication and spatial familiarity are also central to their behavior.

### Environmental strengths

- Savanna, shrubland and thorn scrub where browsing and familiar routes support normal movement
- Dry terrain where a heavy terrestrial charge has room to develop
- Thorny vegetation that is less obstructive to its thick skin than to thin-skinned opponents
- Close-range ground combat where horn reach and body mass dominate

### Environmental limitations

- Deep water removes its terrestrial charge advantage
- Steep technical terrain favors mountain specialists
- Dense obstacles can shorten charge lanes
- Extreme heat limits prolonged high-output exertion
- Poorer visual acuity can make precise tracking of small fast opponents harder

### Major weaknesses

- No rigid armor or shell
- Eyes and other soft tissues remain vulnerable
- Limited fine manipulation and attack-angle flexibility
- Direct combat style is comparatively predictable
- Huge body mass reduces fine evasiveness
- Cannot effectively pursue aerial or deep-aquatic opponents

### Matchup archetypes

**Strong against:** most small and medium terrestrial animals, lightly armored predators, opponents forced into frontal contact, and many large herbivores that lack equivalent horn reach plus mass.

**Difficult matchups:** multi-tonne elephants, very large hippos at close range or in water, heavily armored or extremely large extinct taxa, and special-mechanism opponents whose venom or other effects can bypass bulk if successfully delivered.

## 5. Proposed ABS substats

All ratings use the absolute full-roster scale.

| Substat | Rating | Justification |
|---|---:|---|
| **Size** | **75.0** | Roughly 1.2 tonnes is major terrestrial megafauna, above bison but far below African elephant and giant marine taxa. |
| **Raw Power** | **83.0** | Enormous body mass and neck/shoulder force support devastating shoves and charges, below multi-tonne elephant power. |
| **Weaponry** | **82.0** | Long pointed anterior horn plus second horn, delivered by massive body; exceptional terrestrial natural weapon system. |
| **Protection** | **67.0** | Thick skin and huge body depth provide major protection, but no shell or rigid armor. |
| **Toughness** | **78.0** | Massive frame, robust skeleton and adult predator resistance support very high functional durability. |
| **Speed** | **70.0** | Approximately 13.9 m/s is remarkable for a 1.2-tonne animal, though based on natural-history reporting rather than a controlled trial. |
| **Maneuverability** | **55.0** | Good pivoting and short-range control for megafauna, but inertia prevents fine evasiveness. |
| **Endurance** | **68.0** | Large home ranges and sustained browsing/movement support strong endurance; maximal charging remains burst-limited. |
| **Recovery** | **50.0** | Normal large-mammal healing with no unusual regeneration. |
| **Tactics** | **46.0** | Competent threat assessment and territorial behavior, but relatively direct combat repertoire. |
| **Senses** | **62.0** | Strong smell/hearing offset weaker visual acuity. |
| **Ferocity** | **76.0** | Adult bulls possess real high-risk horn-combat behavior and can charge forcefully when threatened. |
| **Abilities** | **52.0** | Prehensile browsing lip, scent systems and environmental resilience matter, but there is no venom/electricity/echolocation-like bypass mechanism. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **82.0** | A long penetrating horn driven by roughly 1.2 tonnes creates extreme terrestrial damage potential, clearly above bison but below elephant-scale upper anchors. |
| **Defense** | **76.0** | Huge mass, thick skin and robust structure make a healthy bull difficult to disable, without pretending skin is rigid armor. |
| **Agility** | **59.0** | Fast acceleration and useful pivoting for megafauna, but fine maneuverability is constrained by mass. |
| **Stamina** | **68.0** | Strong sustained daily movement and arid-land resilience, but high-output combat is burst-limited. |
| **Intelligence** | **48.0** | Functional spatial/social learning and threat assessment without evidence for elite flexible cognition. |
| **Special** | **51.0** | Distinctive browsing and sensory adaptations are useful, but the main battle advantages are already captured by Attack/Defense rather than double-counted as Special. |

## 7. Abilities and traits

### Proposed special abilities, exactly 2

1. **Horn-Lance Charge** — The long anterior keratin horn concentrates a mass-backed rush into a penetrating or hooking point, giving the rhino exceptional frontal reach and injury potential.
2. **Thornland Bulwark** — Thick skin, huge body depth and a browsing ecology adapted to thorny scrub let the rhino push through abrasive vegetation and remain difficult for ordinary teeth and claws to disable. This is toughness, not invulnerability.

### Proposed unique traits, exactly 2

1. **Hook-Lipped Browser** — The pointed prehensile upper lip selectively grasps leaves and twigs, separating black-rhino ecology from the grazing white rhinoceros.
2. **One-Tonne Sprinter** — Despite roughly 1.2 tonnes of mass, the species can produce short bursts around 50 km/h in authoritative natural-history accounts, making distance close surprisingly quickly.

## 8. Expanded profile content

### Habitat and geographic range

Black rhinos occupy grasslands, savannas, tropical bushlands, scrub and some desert-edge environments across fragmented parts of eastern and southern Africa. IRF currently reports the species in 12 African countries. Water, browse, wallows and salt licks influence home-range size.

### Diet and ecology

They are herbivorous browsers, feeding on leaves, twigs, shoots, fruit, seeds and woody plants. The prehensile upper lip plucks vegetation. By browsing woody plants, black rhinos influence vegetation structure and function as major ecosystem engineers.

### Social structure

Adult bulls are typically solitary and may be territorial. Females and subadults can associate, and female ranges overlap more than the old 'strictly solitary' stereotype suggests. Scent marking, dung middens and urine are important communication tools.

### Reproduction and life history

ADW reports gestation around 15 months, usually one calf, weaning around 18 months and dependence lasting up to 2-4 years. Females mature around 5-7 years and males around 7-8 years. IRF reports roughly one calf every 2.5-3 years under favorable conditions.

### Conservation status

**IUCN Red List: Critically Endangered.** IRF's 2026 State of the Rhino reports an estimated **6,788 black rhinos at the end of 2024**, up from 6,195 in 2022. The recovery from the roughly 2,300 animals left in the mid-1990s is substantial, but poaching remains the principal threat and the species is still far below historical abundance.

### Major adaptations

- Long keratin horns for defense, competition and vegetation manipulation
- Pointed prehensile upper lip for browsing
- Thick skin suited to thorny habitats
- Strong smell and hearing
- High burst speed despite extreme mass
- Wallowing behavior for heat, sun and ectoparasite management
- Ability to occupy arid and semi-arid landscapes when water and browse remain accessible

### Human interaction

Rhino horn poaching caused catastrophic twentieth-century declines. Horn is keratin and has no demonstrated medicinal property that justifies wildlife killing. Modern conservation relies on anti-poaching protection, monitoring, translocation, genetic/population management and community involvement. Black rhinos are also dangerous wild megafauna and require substantial viewing distance.

### Strong fun facts

- Black rhinos are not actually black; skin color is generally gray and often takes on the color of local soil or mud.
- The 'black' versus 'white' names do not describe true body color; lip shape is the much more useful field distinction.
- Their front horn commonly exceeds the rear horn and exceptional individuals can grow horns well beyond one meter.
- Rhino horn is compressed keratin, the same basic protein family found in hair and nails.
- A roughly one-tonne black rhino can sprint at road-vehicle speeds for short bursts.
- Black rhinos have no front incisors and rely heavily on the prehensile lip to bring browse into the mouth.
- Some Serengeti black-rhino home ranges exceed 100 square kilometers.
- The global population more than doubled from its mid-1990s low, yet the species remains Critically Endangered.

### Concise site-ready summary

The black rhinoceros is a one-tonne African browser built around a long keratin horn, thick skin and explosive short-range power. A mature bull can close distance far faster than its size suggests and use its horn as a mass-backed lance, making frontal combat extremely dangerous. Its defenses come from body depth, toughness and scale rather than true armor. Strong smell and hearing compensate for weaker vision, while its hooked upper lip reveals its ecological specialty as a browser of shrubs and trees.

### Detailed narrative profile

A black rhino is best understood as a mobile terrestrial battering system rather than a slow armored tank. The canonical ABS bull weighs about 1.2 tonnes, yet authoritative natural-history sources place short bursts around 50 km/h. That combination of mass and rapid distance closing is central to its battle profile. The anterior horn, typically around half a meter but highly variable, creates a narrow contact point that can thrust, hook or gore. A second horn adds close-range redundancy.

Its Defense is similarly easy to misdescribe. The hide is thick and useful against thorns, abrasion and ordinary trauma, but it is skin rather than plate armor. The true defensive advantage is the complete package: large body depth, robust skeleton, heavy musculature, tough integument and an offensive horn that makes attackers pay for close contact. This is why healthy adults sit near the top of the terrestrial roster without approaching the several-tonne scale of an African elephant.

Behaviorally, black rhinos are not simply rage-driven animals. They maintain home ranges, communicate chemically and acoustically, and adult males may defend territories. Their weaker eyesight is compensated by strong smell and hearing. When a threat is judged close enough, however, the direct response can be a rapid charge. Intraspecific contests give adult males genuine experience delivering and avoiding horn attacks from similarly equipped opponents.

The species also carries one of conservation's starkest modern histories. Poaching drove black rhinos from tens of thousands to roughly 2,300 in the 1990s. Intensive protection and translocation helped the population recover to an estimated 6,788 by the end of 2024. That recovery is real but does not erase the Critically Endangered status or the continuing poaching threat.

### Useful future structured fields

- `front_horn_cm`
- `rear_horn_cm`
- `horn_material: keratin`
- `canonical_sex`
- `measurement_convention`
- `bite_force_newtons` when reliable evidence exists
- `speed_evidence_type: natural_history_estimate`
- `skin_defense_type`
- `primary_sense`
- `combat_style`
- `conservation_status`
- `population_estimate_year`
- `population_estimate`

## 9. Image Asset

- `image_status`: `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`
- `png_repo_path`: `animal-research-for-update/images/black-rhinoceros.png`
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Diceros_bicornis.jpg
- `original_photo_url`: https://commons.wikimedia.org/wiki/Special:Redirect/file/Diceros_bicornis.jpg
- `file_format_verified`: Source is JPEG; final PNG not created
- `alpha_verified`: No
- `full_body_verified`: Yes, source preview visibly contains the complete head/horns, torso, four feet and tail
- `adult_verified`: Yes
- `sex_verified_or_unknown`: Male, explicitly identified by source
- `license_status`: GNU Free Documentation License 1.2 only, as stated on Commons source page
- `source_dimensions`: 3456 x 2168
- `notes`: Exact-species real photograph at Saint Louis Zoo. Whole-body lateral/three-quarter framing is suitable for a cutout. Current connected GitHub writer is UTF-8 text-only, so no binary PNG is fabricated or claimed. A later binary-capable run must isolate the animal without changing anatomy, inspect the alpha silhouette and commit the genuine PNG.

## 10. Evidence and source ledger

| Source | Direct URL | Claim / field supported | Reported value or finding | Confidence / caveat |
|---|---|---|---|---|
| International Rhino Foundation, Black Rhino | https://rhinos.org/about-rhinos/rhino-species/black-rhino/ | Taxonomy, range, mass, dimensions, horns, lifespan, ecology, reproduction, conservation | 800-1,350 kg; 1.4-1.7 m shoulder; 3.0-3.8 m length; front horn 0.5-1.3 m; 35-40 wild years; browser; bulls typically solitary | High, specialist conservation organization |
| IRF, 2026 State of the Rhino | https://rhinos.org/about-rhinos/state-of-the-rhino/ | Current population trend | 6,788 black rhinos at end of 2024, up from 6,195 in 2022 | High and current; population estimate rather than census of every animal |
| Animal Diversity Web, *Diceros bicornis* | https://animaldiversity.org/accounts/Diceros_bicornis/ | Mass, length, height, horn ranges, dimorphism, reproduction, longevity, behavior | 800-1,400 kg; 3.0-3.75 m; 1.4-1.8 m; anterior horn 42-128 cm; 30-35 typical wild years; 15-month gestation | High for synthesis; some underlying references are older |
| SANParks, Black Rhino | https://www.sanparks.org/conservation/parks/marakele-national-park/primary-consumers-herbivores/black-rhino | Dimensions, horn, skin, senses, browsing morphology | 140-180 cm shoulder; 3-3.75 m; front horn typically 50 cm; thick skin helps against thorns; hearing/smell emphasized | High, government park authority |
| World Land Trust, Black Rhino | https://www.worldlandtrust.org/species/black-rhino/ | Sex size/horn differences, lifespan, browsing behavior | Bulls up to ~1,350 kg; males thicker horns, females longer/thinner; up to ~35 wild years | Moderate-high, conservation organization |
| Potter Park Zoo, Black Rhino | https://potterparkzoo.org/animals/black-rhino/ | Burst speed cross-check | Reports up to 35 mph | Moderate; zoo natural-history figure, not controlled biomechanics |
| Helping Rhinos, Black Rhino | https://helpingrhinos.org/about-rhinos/black-rhino/ | Speed and dimension cross-check | Up to 50 km/h; 800-1,350 kg; 1.4-1.7 m shoulder | Moderate; conservation summary |
| Smithsonian NMNH specimen *Diceros bicornis* | https://www.si.edu/object/diceros-bicornis%3Anmnhvz_7257442 | Horn measurement reality check | Female specimen: nasal horn 60 cm, frontal horn 50 cm | High for that specimen; not a species average |
| Wikimedia Commons, male *Diceros bicornis* | https://commons.wikimedia.org/wiki/File:Diceros_bicornis.jpg | Image provenance and whole-body candidate | Male, exact species, 3456x2168 JPEG, GFDL 1.2 only | High for provenance; transparent cutout pending |

### Confidence and caveats

1. **Mass:** 1,200 kg is a representative editorial canonical recommendation inside overlapping authoritative adult ranges, not a measured species mean.
2. **Speed:** 13.9 m/s is intentionally conservative and must be labeled a natural-history maximum estimate. No controlled primary sprint trial was found.
3. **Horn length:** Horns vary enormously with individual, sex, age and history. 55 cm is representative, while >1 m values are exceptional.
4. **Bite force:** No reliable PSI is promoted. The horn/charge system is the relevant combat mechanism.
5. **Skin:** Thick skin improves protection but should never be described as rigid armor.
6. **Conservation:** Population estimate is current to the end of 2024 as reported in IRF's 2026 State of the Rhino; status remains Critically Endangered.

## 11. Cross-animal calibration notes

- **Vs African Elephant:** Black rhino Attack 82.0 and Defense 76.0 remain clearly below Elephant 92.0/94.0. The elephant's roughly 5,500 kg canonical mass is more than four times the rhino's, so the rhino must not be compressed near the elephant in Raw Power or Defense.
- **Vs Bison:** Rhino at 1,200 kg is moderately heavier than the 900 kg bison and has a substantially longer penetrating horn. Attack 82.0 vs Bison 72.0 and Defense 76.0 vs 68.0 preserve that meaningful advantage without making the gap absurd.
- **Vs Bighorn Sheep:** Both use head-first weapons, but the rhino's absolute mass and horn lethality are in a different class. The sheep's superior technical terrain agility should remain a separate advantage.
- **Vs African Lion / Black Panther / Black Bear:** The rhino is vastly above these carnivores in absolute Raw Power and Defense. The cats retain much higher maneuverability and tactical predatory flexibility.
- **Future audit:** Revisit against White Rhinoceros if present, Hippopotamus, Cape Buffalo, Moose, Musk Ox and giant extinct herbivores. Watch especially for Attack inflation among horned megaherbivores and for accidentally treating speed as Agility.