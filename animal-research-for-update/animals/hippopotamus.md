# Hippopotamus (*Hippopotamus amphibius*)

## 1. Identity and canonical specimen

- **Common name:** Hippopotamus / common hippopotamus / river hippopotamus
- **Scientific name:** *Hippopotamus amphibius* Linnaeus, 1758
- **Exact animal represented:** common hippopotamus, not pygmy hippopotamus (*Choeropsis liberiensis*).
- **Living/extinct:** living.
- **Canonical combat specimen:** healthy mature **adult male**, because males are the territorial fighting sex and have disproportionately enlarged jaws and canines. A 2021 analysis of 2,994 aged hippos found mean male body mass only about 5% above female mass, but male jaw mass was 44% greater and canine mass 81% greater, strong evidence that sexual selection is concentrated in the weapon system rather than merely body bulk.
- **Canonical representative mass:** **1,800.0 kg**. This sits inside multiple institutional adult-male ranges without using old exceptional bulls. Denver Zoo gives males about 1,440-2,800 kg; San Diego gives 1,600-4,500 kg, while ADW reports broad adult values and continued male growth. The 4,500 kg historical captive maximum is explicitly rejected as canonical.
- **Canonical representative length:** **400.0 cm** head-body/overall working length. Institutional references place adults around 3.3-5.0 m and ADW up to about 5.05 m. Four metres is a representative mature bull rather than a maximum.
- **Canonical shoulder height:** **155.0 cm**, within ADW's 150-165 cm and zoo figures near 1.5-1.6 m.
- **Dimorphism:** modest in body mass compared with many polygynous ungulates but very strong in jaw and canine development. Male weapon dimensions are therefore more important than a simplistic huge male/female mass gap.
- **Population variation:** body size varies with age, locality, ecology and nutritional history. Old males can continue increasing in mass, so endpoint maxima are especially poor proxies for a normal combat specimen.

## 2. Physical measurements and uncertainty

### Mass
ADW reports adult hippopotamuses broadly around 1,300-3,200 kg and notes exceptional captive males to 4,500 kg. Denver Zoo gives females about 1,260 kg and males 1,440-2,800 kg. San Diego Zoo gives females about 1,400 kg average and males 1,600-4,500 kg. The large spread reflects sex, age, population and the fact that old males continue growing.

The strongest dimorphism evidence is the peer-reviewed 2,994-individual Uganda dataset: average male body mass exceeded female body mass by only about 5%, while weapon mass diverged much more strongly. For a roster combat baseline, **1,800 kg** represents a substantial mature territorial bull without smuggling a very old 3-4.5 tonne outlier into the normal profile.

**Canonical `weight_kg`: 1800.0 kg. Confidence: moderate-high.**

### Length and height
ADW reports roughly 2.9-5.05 m length and 1.50-1.65 m standing height. San Diego Zoo gives 3.3-5.0 m length and up to 1.6 m shoulder height. The canonical values use the middle of mature-bull institutional ranges rather than maxima.

**Canonical `length_cm`: 400.0 cm. Confidence: moderate-high.**

**Canonical `height_cm`: 155.0 cm. Confidence: high.**

### Land speed and gait
A 2024 PeerJ study analyzed 169 locomotor cycles from 32 common hippos and showed that hippos use a trot across their observed speed range, with aerial phases appearing during faster locomotion. This is important because it directly establishes surprisingly dynamic locomotion in a multi-tonne mammal. It does **not**, however, establish the familiar internet claim of 30 or 48 km/h as a rigorously timed maximum. A secondary synthesis tracing the literature notes that commonly repeated 24-30 km/h maxima ultimately rely on old compilations rather than modern timed trials.

Accordingly this report does not turn a folklore maximum into a precise factual field.

**Canonical `speed_mps`: 0.0 m/s, meaning a defensible species-specific maximum was not established, not literal immobility. Confidence in withholding: high.**

### Underwater locomotion
Hippos do not swim in the ordinary continuously buoyant paddling sense. Coughlin & Fish (2009) analyzed two animals frame by frame and found average underwater horizontal velocity of **0.47 m/s**, using bottom-contact gaits with unsupported intervals enabled by buoyancy. This is a measured routine underwater value, not a top speed. It should be preserved in a future locomotion-context field rather than misused as `speed_mps`.

### Lifespan
San Diego Zoo gives a **median life expectancy of 36 years** and notes individuals exceeding 50 in human care. Denver Zoo gives roughly 30-40 years wild and up to 50 in captivity. National Geographic gives up to about 40 wild and 50 captive.

**Canonical `lifespan_years`: 36.0 years. Confidence: moderate-high.** This uses a representative institutional median rather than an exceptional maximum.

### Teeth, tusks and gape
ADW reports a gape around **150 degrees**, canines to roughly **50 cm**, and incisors to roughly **40 cm**. Toronto Zoo reports lower canines around **60 cm**, up to about **3 kg**, with large upper canine circumference. The exact visible/protruding length depends on whether root and full tooth are included, so these figures should not be treated as identical measurement conventions.

The 2021 Biology Letters analysis is more important for sex selection: male jaw mass was 44% greater and canine mass 81% greater than female values in the 2,994-individual dataset. This directly supports using a mature male as the fighting specimen.

### Bite force and the PSI problem
Popular websites repeatedly state roughly 1,800-2,000 PSI. A 2026 University of Pretoria research-news page states about **8,100 N** bite force, and later sources sometimes cite approximately 12,600 kPa. These are not interchangeable quantities: force in newtons cannot be converted to pressure in PSI without a defensible contact area, and the accessible material in this run did not establish a validated species-specific tooth-contact area and measurement protocol for the viral PSI figure.

Therefore the staging field remains conservative:

**Canonical `bite_force_psi`: 0.0.** This means no defensible PSI value was established. It does not mean the hippo has a weak or zero-force bite. The source-supported ~8.1 kN figure can be retained separately as a force claim with moderate confidence and provenance.

### Skin and passive defense
Denver Zoo describes skin up to about **two inches (~5 cm)** thick, while Toronto Zoo describes a substantial subcutaneous fat layer. ADW cautions that the outer epidermal layers themselves are thin and that adults acquire wounds during fights. The correct interpretation is not “impenetrable armor”: the hippo has enormous bulk, thick dermal/subcutaneous tissues and a huge damage buffer, but rival tusks can and do wound it.

### Hipposudoric secretion
ADW describes red/orange skin secretions containing hipposudoric and norhipposudoric acids that absorb ultraviolet radiation and inhibit bacterial growth. This is a real physiological adaptation, but it is not combat armor and should not be inflated into Defense.

## 3. Proposed canonical factual fields

| Field | Proposed value | Rationale / confidence |
|---|---:|---|
| `weight_kg` | **1800.0** | Representative mature territorial male; avoids exceptional old bulls. Moderate-high. |
| `height_cm` | **155.0** | Institutional adult shoulder-height range ~150-165 cm. High. |
| `length_cm` | **400.0** | Representative mature adult within ~3.3-5.0 m institutional ranges. Moderate-high. |
| `speed_mps` | **0.0** | Modern gait study validates fast trotting/aerial phases but not a rigorous maximum. High confidence in withholding. |
| `lifespan_years` | **36.0** | San Diego Zoo median life expectancy; wild/captive ranges extend around it. Moderate-high. |
| `bite_force_psi` | **0.0** | Force evidence exists, but no defensible pressure/contact-area basis for viral PSI claims. High confidence in withholding. |

### Recommended future factual fields
- `canonical_sex: male`
- `canonical_mass_context: mature territorial bull`
- `gape_deg: ~150`
- `lower_canine_length_cm: 50-60, source-convention dependent`
- `bite_force_n: ~8100, source-qualified`
- `underwater_routine_velocity_mps: 0.47`
- `locomotion_modes: terrestrial trot; bottom-contact underwater gait`
- `skin_thickness_cm: up to ~5, layer/source context required`

## 4. Combat biology

### Primary weapons
The primary weapon system is the enormous jaw and continuously growing incisors/canines. In mature bulls, sexual selection disproportionately enlarges jaws and canines. The mouth can open to around 150 degrees, giving the tusks a very large working arc. The lower canines are the principal long stabbing/slashing structures, while incisors and opposing teeth add puncture, tearing and display capability.

### Secondary weapons
The head, neck and roughly 1.8-tonne body provide immense shoving and collision force. Short robust limbs support rapid charges and positional drives. The feet are not specialized striking weapons, but a fallen smaller opponent is at obvious risk from body mass and trampling.

### Offensive mechanics
Hippo combat is not simply “bite hard.” A territorial bull can gape, threaten, lunge, seize or rake with the tusks, then use neck and body mass to drive through the opponent. Long lower canines can create deep lacerating/puncturing wounds rather than the shallow crushing geometry of ordinary herbivore mastication. Denver Zoo notes that male fights can be lethal and that adult male hides commonly bear scars.

The 2021 weapon-dimorphism study is decisive for interpretation: male weapon size is far more sexually selected than body mass. Attack therefore deserves a very high score even though the species is primarily herbivorous.

### Defense and durability
Defense begins with enormous mass. Many attacks that would disable a smaller mammal must penetrate much more tissue before reaching critical structures. Thick skin/subcutaneous tissues and a broad barrel body add passive resilience. The animal is nevertheless not armored like a rhinoceros shell or crocodilian osteoderms, and rival tusks demonstrably penetrate its skin. Defense should be elite but not treated as invulnerability.

### Locomotion and maneuverability
On land the hippo trots, and modern high-speed-video work shows aerial phases at faster speeds. It cannot be dismissed as a slow waddling tank. Still, a four-metre, 1.8-tonne animal has limited tight-space turning and acceleration compared with medium predators.

In water, buoyancy changes the equation. The hippo uses the bottom and reduced effective weight to bound/trot through shallow water. Coughlin & Fish documented unsupported phases and a measured mean horizontal velocity of 0.47 m/s in two study animals. The water column also lets a hippo change vertical position in ways impossible on land.

### Endurance and stamina
Hippos routinely leave water at night and travel kilometres to graze. National Geographic reports excursions as far as about 8 km from water. That supports substantial low-to-moderate intensity endurance. It does not imply sustained high-speed pursuit. Large body mass, heat load and semi-aquatic thermoregulation make prolonged maximal exertion on hot land a poor matchup condition.

### Senses
Eyes, ears and nostrils are placed high on the skull, allowing environmental monitoring while most of the body remains submerged. Hippos hear and vocalize both in air and underwater; San Diego Zoo highlights amphibious calling. Smell and hearing are important for social/territorial awareness, while vision is adequate but not a standout predator-grade specialization.

### Intelligence and tactics
Hippos recognize social relationships, territorial boundaries, routes between water and grazing grounds and threat contexts. Bulls manage aquatic territories and use graded displays before or during escalation. This is meaningful tactical behavior, but the evidence does not justify great-ape, dolphin or corvid-level flexible problem solving.

### Intraspecific fighting
This is the central combat evidence. Adult males establish and defend aquatic territories, especially around access to females and water space. The recent anatomical literature notes that territorial dominance in males is principally observed in aquatic areas and that fight frequency can depend on resource availability and density. Fights involve gaping displays, jaw strikes and tusk wounds. Adult bulls commonly carry scars, and fatal outcomes occur.

### Predation and predator defense
Adults have few natural predators because of their mass, group presence, aquatic refuge and weaponry. Lions, crocodiles, hyenas and leopards are much more relevant to calves or compromised individuals than to healthy mature bulls. A large adult can aggressively confront threats rather than relying only on escape.

### Diet and ecological combat context
Hippos are primarily grazers. They leave water at dusk to feed on short grasses and return before daytime heat. Their enormous weapon system is therefore not a predatory adaptation. This matters for ratings: high Attack comes from territorial weapon mechanics and absolute force, not from invented hunting technique.

### Environmental strengths
- **Shallow rivers, lakes and channels:** buoyancy reduces effective weight, bottom-contact locomotion remains powerful, and the hippo can keep only eyes/ears/nostrils exposed.
- **Riverbank choke points:** huge body mass and a broad mouth make frontal passage extremely dangerous.
- **Close range:** long tusks, huge gape and body mass become decisive once contact is forced.
- **Against small/medium unarmored opponents:** extreme size disparity can make a single successful jaw or body impact fight-ending.

### Environmental limitations
- **Hot open land:** heat load and dependence on daytime aquatic refuge limit prolonged exertion.
- **Very tight obstacles:** bulk limits turning and route choice.
- **Deep water without bottom access:** the species is specialized for submerged bottom-contact movement rather than conventional continuous swimming.
- **Long-distance pursuit:** routine nightly walking is strong, but this is not a cursorial endurance hunter.

### Major weaknesses
- Eyes and other facial soft tissues remain vulnerable.
- The skin can be deeply wounded by rival tusks despite overall toughness.
- Peak agility is low compared with much smaller opponents.
- High-output land exertion is thermally expensive.
- Huge body size makes the hippo easy to detect and impossible to conceal in open terrain.
- Weapon delivery is overwhelmingly close-range.

### Matchup archetypes
**Best:** smaller terrestrial mammals, medium predators, or similarly sized opponents forced into frontal close range near water. The hippo's mass, tusks and willingness to contest space make direct engagement extremely unfavorable.

**Mixed:** other megaherbivores. Rhinoceroses, elephants and very large bovids can bring their own enormous mass, reach and specialized weapons, so outcome depends on size, weapon geometry and terrain rather than reputation.

**Worst:** much larger megafaunal anchors such as an adult African elephant in open terrain, or opponents capable of exploiting range/vertical access without entering the jaw arc. The hippo is formidable, not the terrestrial dataset ceiling in every category.

## 5. Proposed ABS substats

All scores use the absolute 0.1-100.0 roster scale.

| Substat | Score | Evidence-based justification |
|---|---:|---|
| **Size** | **84.0** | Representative 1.8-tonne bull is true megafauna, but well below adult African elephants and the largest marine/extinct anchors. |
| **Raw Power** | **87.0** | Multi-tonne body, massive neck/head and ~8.1 kN source-qualified bite-force claim produce elite absolute mechanical power. |
| **Weaponry** | **91.0** | Huge gape plus continuously growing 50-60 cm-class lower canines and enlarged male jaw system; exceptional close-range injury potential. |
| **Ferocity** | **89.0** | Territorial bulls engage dangerous conspecifics and can escalate to lethal tusk fighting; high but context-dependent. |
| **Protection** | **82.0** | Huge body, thick skin/subcutaneous tissues and aquatic refuge provide elite passive protection, but tusks can penetrate the hide. |
| **Toughness** | **88.0** | Massive physiological reserve and frequent scarring support exceptional trauma tolerance, short of true armor/near-ceiling megafauna. |
| **Maneuverability** | **44.0** | Surprisingly capable trot and buoyant underwater bounding, but enormous bulk constrains tight turning and evasive precision. |
| **Speed** | **48.0** | Faster than appearance suggests, but rigorous maximum withheld; score reflects observed fast trotting rather than viral km/h claims. |
| **Endurance** | **70.0** | Nightly multi-kilometre grazing travel is substantial; sustained maximal land output is limited by mass and heat. |
| **Recovery** | **57.0** | Can survive scarring and wounds, but no exceptional regeneration; deep tusk wounds and infection remain serious. |
| **Tactics** | **54.0** | Territorial spacing, displays, routes and threat assessment are meaningful but not advanced flexible combat planning. |
| **Senses** | **58.0** | High-set sensory organs and amphibious hearing/vocal communication are useful, without elite specialized detection. |
| **Abilities** | **67.0** | Bottom-running/bounding, nostril/ear closure, amphibious calling and UV/antimicrobial skin secretion are unusual, but not all directly offensive. |

## 6. Proposed six headline ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **90.0** | 1.8-tonne representative bull, enormous jaw arc, long continuously growing tusks and male weapon hypertrophy make close-range damage extreme. |
| **Defense** | **84.0** | Megafaunal mass, thick tissues and aquatic refuge make the animal exceptionally difficult to disable, while documented conspecific wounds prevent armor-like inflation. |
| **Agility** | **48.0** | Modern gait research proves dynamic trotting and aerial phases, but top speed is not agility and the body remains enormous. |
| **Stamina** | **70.0** | Strong routine travel and prolonged grazing, but not an elite high-speed endurance specialist. |
| **Intelligence** | **56.0** | Social/territorial cognition and environmental memory are useful, without evidence for high-end flexible problem solving. |
| **Special** | **69.0** | Semiaquatic bottom locomotion, amphibious sensory placement/calling and unusual skin chemistry change environmental matchups, but do not duplicate its jaw damage. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Tusks-First Gape**: the mouth opens to roughly 150 degrees, exposing continuously growing lower canines and incisors in an enormous attack arc. Mature bulls have strongly selected jaw/canine weapon mass, allowing puncture, rake and tearing attacks during territorial fights.
2. **Riverbed Bound**: instead of relying on ordinary swimming, the hippo uses bottom contact and buoyancy to walk, trot and enter unsupported phases underwater, preserving useful mobility in shallow aquatic combat while reducing the effective burden of its body mass.

### Unique traits
1. **Weapon-Biased Bull Dimorphism**: males average only modestly heavier than females, yet a 2,994-animal dataset found male jaw and canine mass dramatically more enlarged. The fighting phenotype is concentrated in weapon architecture rather than simple body-size inflation.
2. **Hipposudoric Skin Shield**: specialized skin secretions containing hipposudoric and norhipposudoric acids absorb UV and inhibit bacterial growth. This is an environmental physiology trait, not literal armor.

## 8. Expanded profile

### Habitat
Common hippos depend on rivers, lakes, pools and wetlands with nearby grazing habitat. They spend much of daylight in water or mud to manage heat and emerge mainly at night to graze.

### Geographic range
The species persists patchily across sub-Saharan Africa. Its former range was broader, and populations have disappeared from parts of northern and western Africa. Distribution is strongly tied to permanent or seasonally reliable water.

### Diet
Primarily short grasses, with some fallen fruit and other plant material. Despite dramatic tusks and jaw musculature, the species is fundamentally herbivorous rather than a specialized predator.

### Ecology
Hippos transfer large quantities of nutrients from terrestrial grazing areas into aquatic systems through dung and movement. At high densities this can strongly affect water chemistry and food webs. Their trails and repeated movement also alter banks and vegetation.

### Social structure
Hippos aggregate in water, but these groups are not wolf-like cooperative combat units. Dominant males defend aquatic territories containing females and tolerate subordinate animals under context-dependent conditions. Females form the strongest persistent bond with calves. Individual combat scores therefore do not receive a “group multiplier.”

### Reproduction and life history
Gestation is roughly eight months. A female generally gives birth to one calf, often in water, and calves can nurse underwater. Sexual maturity occurs after several years, with males typically maturing later than females. Slow reproduction and dependence on aquatic habitat increase vulnerability to adult mortality and habitat disruption.

### Conservation
Current major conservation references continue to list the common hippopotamus as **Vulnerable**, with a commonly cited global estimate around **115,000-130,000**. Major threats include habitat loss/degradation, water diversion, conflict with people, unregulated hunting and trade in hippo ivory. CITES Appendix II regulates international trade.

### Major adaptations
- Huge male canines and enlarged jaws for sexual combat.
- High-set eyes, ears and nostrils for sensing while mostly submerged.
- Nostrils/ears that close during submergence.
- Dense body and buoyancy-assisted bottom locomotion.
- Broad webbed toes suited to soft substrates.
- Specialized skin secretion with UV-absorbing and antimicrobial properties.
- Large digestive capacity supporting nocturnal grazing.

### Human interaction
Hippos can be extremely dangerous where people share waterways, paths or cropland. Exact annual human-fatality figures are poorly standardized and often repeated without strong surveillance data, so this report does not use a viral “kills X people per year” number as a biological fact. Conflict risk is nevertheless real because boats, fishing, river crossings and nighttime crop/grazing areas overlap with hippo movement.

### Genuine fun facts
- Hippos are not aquatic “horses”; their closest living relatives are cetaceans within Whippomorpha/Cetancodonta.
- A 2024 gait study showed fast-moving hippos can have all four feet off the ground during parts of a trot.
- Underwater they use bottom-contact locomotion with unsupported phases rather than ordinary continuous swimming.
- Male hippos are only modestly heavier on average than females, but their canine mass is dramatically greater.
- Their reddish skin secretion is not blood or sweat. It contains pigments with UV-absorbing and antimicrobial properties.
- Their eyes, ears and nostrils sit high on the skull, allowing most of the body to remain submerged while monitoring the surroundings.
- The huge tusks are primarily combat/display structures rather than adaptations for cutting grass.

### Concise site-ready summary
The common hippopotamus is a semiaquatic megaherbivore whose mature bulls combine roughly two tonnes of body mass with one of the most formidable close-range weapon systems among living land mammals. Its giant gape and continuously growing tusks evolved heavily under male-male competition, while thick tissues and sheer bulk make it exceptionally hard to stop. Hippos are more mobile than their shape suggests: they trot on land and use buoyancy-assisted bottom contact underwater. Their weakness is not lack of power, but limited fine agility, heat constraints and a combat style that must bring an opponent into very close range.

### Rich narrative profile
The hippo is a useful calibration test because reputation can easily distort the numbers in both directions. Calling it a clumsy herbivore misses modern locomotor evidence and the extraordinary sexual selection on its jaws. Calling it an invulnerable 4.5-tonne, 2,000-PSI monster makes the opposite error by using exceptional individuals and poorly sourced pressure figures.

A representative mature bull around 1.8 tonnes is already enormous. The decisive feature is that male competition did not simply make bulls vastly heavier. Instead, the weapon system became disproportionately enlarged. In a dataset of almost three thousand aged animals, males averaged only about five percent heavier than females but carried much heavier jaws and canines. This is exactly the kind of evidence ABS should privilege: a direct biological reason for very high Weaponry and Attack that does not require a fabricated PSI number.

The hippo's fight geometry is brutally close. A bull presents an enormous gape, then drives long lower canines and incisors through the attack arc while its head and body supply leverage. Rival bulls leave scars because those weapons can penetrate hippo tissue itself. Against smaller unarmored animals, the combination of reach, mass and puncture/tearing potential is overwhelming. Against elephants or similarly massive horned megaherbivores, however, the hippo no longer enjoys a simple scale advantage, so it remains below the roster ceiling.

Defense comes from mass and tissue depth more than rigid armor. The animal can absorb trauma that would catastrophically disable smaller mammals, but its own species demonstrates that the skin is penetrable. This distinction prevents “thick skin” from becoming an unjustified near-100 armor score.

Mobility is equally nuanced. High-speed video has shown a trotting gait with aerial phases, so Agility cannot be based on an old cartoon image of a waddling animal. Yet a 1.8-tonne body cannot turn, accelerate or evade like a cat, canid or small primate. Underwater, buoyancy produces a different mechanical regime: the hippo contacts the bottom and can enter unsupported phases, effectively bounding in reduced gravity. That is a real Special capability, not a reason to inflate ordinary land speed.

The resulting profile is a close-range megafaunal tank with elite attack and durability, moderate cognition and endurance, limited fine agility, and strong environment-dependent semiaquatic specialization.

### Future field proposals
- `canonical_sex`
- `canonical_age_class`
- `gape_deg`
- `canine_length_cm` with measurement convention
- `bite_force_n` separate from pressure
- `bite_pressure_psi` only when actual contact area is measured/defensible
- `skin_thickness_cm` with anatomical layer
- `underwater_velocity_mps`
- `locomotion_mode_land`
- `locomotion_mode_water`
- `territorial_context`

## 9. Image requirement audit

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/hippopotamus.png` **not created**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Hippopotamus.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/6/6b/Hippopotamus.jpg
- `file_format_verified`: source is a real JPEG photograph; no final PNG exists
- `alpha_verified`: **false**, no cutout/PNG produced
- `full_body_verified`: **not yet strict-verified**
- `adult_verified`: **not explicit in source metadata**
- `sex_verified_or_unknown`: **unknown**, not inferred visually
- `license_status`: reusable under the file's stated GFDL terms; Commons source is 2592x1944
- `notes`: The source page identifies exact *Hippopotamus amphibius* standing on land at Rome Zoo and provides a 2592x1944 original. It is preferable to cropped stock imagery because it is reusable and depicts a single land-standing animal, but this run does not certify explicit adulthood, sex, and every toe/tail boundary strongly enough to call it mandatory-standard full-body. A separate 4320x2431 CC BY-SA 4.0 exact-species Commons image was reviewed, but its metadata likewise does not solve adult/sex/full-body strictness. No transparent PNG is claimed because the connected GitHub write actions are UTF-8 text-only.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Reported finding | Confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web, *H. amphibius* | https://animaldiversity.org/accounts/Hippopotamus_amphibius/ | mass, dimensions, gape, teeth, skin secretion, locomotion | 1,300-3,200+ kg context; 2.9-5.05 m; 150-165 cm; ~150° gape; canines ~50 cm; hipposudoric secretion | High for synthesis; some old speed claims are not used canonically |
| Shannon et al. 2021, Biology Letters / PubMed | https://pubmed.ncbi.nlm.nih.gov/34610251/ | sexual dimorphism, weapon selection | n=2,994 aged animals; male mass +5%, jaw mass +44%, canine mass +81% | High; peer-reviewed, large dataset |
| Dryad dataset for Shannon et al. | https://datadryad.org/dataset/doi:10.5061/dryad.ttdz08kzw | provenance of dimorphism dataset | Queen Elizabeth NP Uganda data, 1961-1966 | High |
| Hutchinson & Pringle 2024, PeerJ | https://doi.org/10.7717/peerj.17675 | terrestrial gait | 169 cycles from 32 hippos; trot; aerial phases at faster movement | High; does not establish a clean maximum speed |
| Coughlin & Fish 2009, Journal of Mammalogy | https://doi.org/10.1644/08-MAMM-A-279R.1 | underwater locomotion | two animals; mean horizontal velocity 0.47 m/s; bottom-contact gait with unsupported intervals | High for measured context; small n, not max speed |
| San Diego Zoo Wildlife Alliance | https://animals.sandiegozoo.org/animals/hippo | size, lifespan, ecology | males 1,600-4,500 kg; 3.3-5 m length; up to 1.6 m; median life expectancy 36 y | High institutional; upper male endpoint exceptional |
| Denver Zoo Conservation Alliance | https://denverzoo.org/animals/river-hippopotamus/ | male mass, skin, fighting | males 1,440-2,800 kg; skin up to 2 in; males defend territories and fights can be fatal | High institutional |
| Toronto Zoo | https://www.torontozoo.com/animals/River%20hippopotamus | canine dimensions | lower canines about 60 cm, up to ~3 kg; male range 1,590-3,636 kg | High institutional; tooth measurement convention may differ from ADW |
| University of Pretoria 2026 research news | https://www.up.ac.za/research-matters/news/harbouring-hidden-threats-groundbreaking-study-uncovers-bacteria-hippo-bite-wounds | bite force context | ~8,100 N stated bite force; 40-50+ cm teeth | Moderate; research institution, but accessible page is not a dedicated bite-force biomechanics paper |
| WWF | https://www.worldwildlife.org/species/hippopotamus | conservation | Vulnerable; ~115,000-130,000 | Moderate-high institutional conservation synthesis |
| Wikimedia Commons, Rome Zoo hippo | https://commons.wikimedia.org/wiki/File:Hippopotamus.jpg | image provenance | exact species real photo, 2592x1944, reusable | High for provenance; adult/sex/full-body strictness unresolved |
| Wikimedia Commons, Delhi Zoo hippo | https://commons.wikimedia.org/wiki/File:Hippopotamus_%28_Hippopotamus_amphibius%29.jpg | alternate image candidate | exact species, 4320x2431, CC BY-SA 4.0 | High for provenance; strict adult/sex/full-body unresolved |

### Source conflicts and uncertainty
1. **Body mass:** institutional ranges differ substantially because males continue growing and sources mix typical adults with exceptional old/captive bulls. Canonical 1,800 kg intentionally favors representativeness over midpointing an extreme range.
2. **Speed:** 24-30+ km/h claims are common, but the modern 2024 gait study establishes mechanics rather than a definitive maximum. `speed_mps` remains 0.0 until a strong timed maximum is recovered.
3. **Bite:** ~8.1 kN force is source-qualified; ~1,800 PSI is widespread but not accepted because pressure requires contact area and a clear protocol. No force-to-PSI conversion is performed.
4. **Canines:** 50 versus 60+ cm institutional figures likely reflect individual variation and measurement convention. Use a range/context, not false precision.
5. **Lifespan:** wild maxima, captive maxima and median life expectancy answer different questions. The canonical 36.0 years is a representative institutional median, not a biological maximum.

## 11. Cross-animal normalization notes

- **Versus African Elephant:** Hippopotamus must remain clearly below the elephant in Size, Raw Power and Defense. The elephant's much greater representative mass and reach preserve a large megafaunal gap. Hippo Attack can nevertheless be elite because its jaw/tusk weapon is highly specialized for close combat.
- **Versus Cape Buffalo/Bison:** the hippo is substantially heavier, more tissue-protected and carries a more versatile puncture/tear jaw weapon, so Attack/Defense/Raw Power should sit clearly above these bovids rather than compressing them together.
- **Versus Grizzly Bear:** the hippo has a huge absolute mass and durability advantage. The bear should retain better fine maneuverability and cognitive flexibility, but not comparable Raw Power or Defense.
- **Versus Great White Shark:** both are elite close-range heavy attackers in their native media. Great White retains stronger sustained aquatic locomotor specialization and predatory tactics; hippo gains land competence and massive tusk-driven territorial combat.
- **Versus Green Anaconda:** constriction is highly specialized but a representative anaconda is orders of magnitude lighter. The hippo's Raw Power, Defense and Attack must be far higher on the absolute scale.
- **Anti-inflation check:** no score reaches the 93+ extreme band. This is deliberate. A common hippo is one of the most formidable living terrestrial mammals, but African elephants and some larger/extinct/marine roster anchors preserve meaningful headroom.
- **No double counting:** tusks/jaw mechanics drive Weaponry and Attack; mass/tissues drive Protection/Toughness and Defense; underwater bottom locomotion and skin chemistry drive Special. The same adaptation is not used to inflate every category.
- **No proportional leakage:** all physical ratings reflect the representative 1.8-tonne animal in absolute terms.
- **No speed/agility confusion:** the gait study raises confidence that hippos are dynamically mobile, but unverified top-speed folklore is not converted into elite Agility.

## Final verification

- Exact taxon and representative adult male specified: **yes**
- Dimorphism and population/age variation documented: **yes**
- Canonical physical fields proposed with uncertainty: **yes**
- Unsupported PSI rejected: **yes**
- Combat mechanics, defenses, locomotion, endurance, senses, tactics, behavior and matchups covered: **yes**
- Current ABS-style substats supplied with one decimal: **yes**
- Six headline ratings supplied with one decimal: **yes**
- Exactly two special abilities: **yes**
- Exactly two unique traits: **yes**
- Expanded ecology/life history/conservation/human interaction/fun facts supplied: **yes**
- Source ledger with direct URLs/conflicts: **yes**
- Cross-roster normalization performed: **yes**
- Mandatory image section present and honest: **yes**
- Production data/site/live images modified: **no**
