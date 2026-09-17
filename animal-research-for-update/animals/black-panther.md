# Black Panther Research Overhaul

## Research status

- **ABS roster name:** Black Panther
- **Canonical taxon:** melanistic leopard, *Panthera pardus*
- **Living/extinct:** Living
- **Canonical combat specimen:** healthy mature adult male melanistic leopard, approximately 60.0 kg
- **Research confidence:** High for taxon, melanism biology, broad morphology, ecology and combat behavior; moderate for representative dimensions across the species-wide geographic range; low for a standardized maximum sprint; bite-force force estimates are defensible in newtons but not PSI
- **Image status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`

## 1. Identity and canonical specimen

The live ABS profile explicitly identifies Black Panther as *Panthera pardus*. Accordingly, this overhaul defines the animal as a **melanistic leopard**, not a melanistic jaguar and not a separate species. “Black panther” is a phenotype/common-name label. Peer-reviewed work confirms that melanistic leopards are *P. pardus* and that leopard melanism is associated with a recessive ASIP mutation.

A healthy mature **adult male** is the canonical combat specimen because leopards are sexually dimorphic and males are materially larger. Animal Diversity Web gives males at 31–65 kg versus females at 17–58 kg; the IUCN Cat Specialist Group gives a broader species range of 17–90 kg and notes major geographic variation. A representative 60.0 kg male is large and fit without using the 90 kg upper extreme.

Melanism itself does not create a new body plan. The canonical animal therefore uses leopard biomechanics, weapons, locomotion and life history, with the dark phenotype treated separately as a camouflage-related adaptation. A global analysis found melanism in about 10.75% of sampled leopards, concentrated disproportionately in moist Asian forests. In the Malay Peninsula it can approach fixation in sampled populations.

## 2. Physical measurements

### Mass

Credible leopard values vary strongly by sex and geography. ADW gives adult males 31–65 kg and females 17–58 kg. CatSG gives 17–90 kg across the species. Large African and some Asian males can exceed the canonical value, while arid-region populations can be much smaller.

**Canonical recommendation: 60.0 kg.** This is a representative robust adult male rather than a record animal.

### Height

Height is less consistently standardized than mass and head-body length in high-quality species accounts. Leopard shoulder heights are commonly reported around the 45–80 cm range in secondary zoological references. Because a clean sex-specific primary mean was not located in this run, ABS should use a conservative **65.0 cm** representative shoulder height with moderate confidence rather than implying measurement precision that the literature does not support.

### Length

CatSG gives **91–191 cm body length** and **51–101 cm tail length** across leopards. ADW reports male total lengths of approximately 1.6–2.3 m, apparently using a convention that includes more of the tail. To avoid mixing conventions, ABS should use **150.0 cm head-body length** for the canonical male and keep tail length separate in future structured data.

### Speed

Popular and zoo references frequently repeat about 58 km/h for leopard top speed, but this run did not locate a transparent instrumented maximum-speed trial for *P. pardus*. The live value should not be treated as verified merely because it is repeated widely.

**Canonical `speed_mps`: 0.0 pending stronger maximum-speed methodology.** This means unresolved, not immobile. Leopard combat agility is supported by its ambush, climbing, pouncing and arboreal locomotion rather than by a questionable single sprint number.

### Lifespan

ADW reports a typical wild lifespan around **10–12 years**, with a wild maximum of 17 years and captive animals commonly 21–23 years. CatSG lists longevity of 13–21 years without using the same wild/captive split. For the canonical wild combat specimen, **12.0 years** is recommended.

### Bite force

A peer-reviewed felid masticatory study estimated total leopard bite force at approximately **166.25 kg-force at the canine**, **190.83 kg-force at P3**, and **226.61 kg-force at the carnassial notch** for its modeled sample, equivalent to roughly 1.63, 1.87 and 2.22 kN respectively. These are biomechanical estimates, not standardized in-vivo pressure measurements.

**Canonical `bite_force_psi`: 0.0.** Converting force to PSI requires defensible tooth/contact area. Internet values such as “300–400 PSI” should not be promoted as scientific facts without that methodology.

### Teeth, claws and other weapons

Leopards use long felid canines for gripping/killing and carnassials for shearing. Retractile claws, powerful forelimbs and flexible wrists/feet support grappling, climbing and carcass handling. The animal has no horns, venom, armor or other external weapon system.

### Defensive structures

Protection is ordinary felid skin, fur, muscle and skeleton. The dark coat is camouflage, not armor. A leopard is structurally robust for a cat but remains vulnerable to penetrating bites, horn/tusk trauma, crushing injury and severe limb damage.

## 3. Canonical proposed factual fields

| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **60.0** | Representative healthy adult male within ADW male range and below large-population extremes. |
| `height_cm` | **65.0** | Representative shoulder height; moderate confidence because strong sex-specific primary data are limited. |
| `length_cm` | **150.0** | Representative head-body length, deliberately excluding the long tail. |
| `speed_mps` | **0.0** | No sufficiently transparent instrumented species maximum verified in this run. |
| `lifespan_years` | **12.0** | Upper end of ADW typical wild lifespan, appropriate for a prime adult male profile. |
| `bite_force_psi` | **0.0** | Defensible bite-force models exist in force units, not standardized pressure. |

Useful future fields: `canonical_sex: male`, `coat_morph: melanistic`, `head_body_length_cm`, `tail_length_cm`, `bite_force_newtons_canine`, `bite_force_method`, `arboreal: true`, `melanism_gene: ASIP`, `melanism_frequency_global_estimate`, `activity_pattern`, and `evidence_confidence`.

## 4. Combat biology

### Primary and secondary weapons

The primary killing system is a **canine bite integrated with forelimb grappling**. Leopards stalk close, accelerate over short distance, pounce, hook with retractile claws and use body position to control prey before applying a bite. The secondary weapon system is repeated clawing and powerful forelimb strikes during a scramble or intraspecific fight.

### Offensive mechanics

The leopard is an ambush specialist rather than a frontal charger. ADW describes approaches to roughly 3–10 m before pouncing. Its preferred prey mass in a large comparative study is concentrated around 10–40 kg, with a most-preferred value around 25 kg. This is important calibration evidence: leopards can kill dangerous prey and sometimes much larger animals, but their normal prey ecology should not be inflated into routine domination of animals several times their own mass.

### Defensive adaptations and durability

A 60 kg leopard has meaningful muscularity and can survive hard fights, but it has no true armor. Its best defense is often avoiding clean contact through stealth, climbing, rapid repositioning and choosing the engagement. Defense therefore stays substantially below large bears, bison and megafauna.

### Locomotion and maneuverability

Leopards are exceptional mixed-mode terrestrial/arboreal movers. A 2024 morphological analysis found their relatively gracile, elongated hindlimb morphology consistent with flexibility for both cursorial and arboreal locomotion. They climb confidently, descend trees head-first, leap, pounce and maneuver through dense vegetation. This supports high Agility without using top speed as a proxy.

### Endurance and stamina

Leopards are not classic persistence hunters, but they can sustain substantial nightly movement and territorial patrol. In Nepal, intensive 24-hour tracking found males moving about **6.8 km per day** on average in sampled sessions, with most movement at night. Across broader studies, male home ranges can be much larger than female ranges and vary enormously with habitat productivity. Stamina should be solid, but below endurance-specialized canids and extreme migrants.

### Senses

Low-light vision, hearing, smell and whisker/tactile feedback support nocturnal ambush. These are strong predator senses but not a rare modality such as echolocation or electroreception.

### Intelligence and tactics

Leopards show flexible prey selection, caching, route choice, human avoidance/coexistence and territorial behavior. They can exploit highly human-dominated landscapes and adjust nocturnal movement near settlements. This supports good tactical flexibility for a solitary carnivore, but not primate/cetacean-level cognition.

### Hunting behavior

The leopard's defining hunting sequence is concealment, close stalk, explosive pounce, grapple and killing bite. It is highly opportunistic and takes mammals, birds, reptiles and other prey. Carcasses may be cached in secluded sites or trees to reduce kleptoparasitism.

### Intraspecific fighting

Adult males maintain large ranges and compete over territory and reproductive access. Direct fights can be dangerous, but leopards also rely heavily on scent marking, vocalizations and avoidance to limit injury. The canonical male has real conspecific combat capacity without the coalition-based fighting ecology of male lions.

### Predator defense and competitors

Leopards coexist with larger carnivores and often reduce direct conflict through spatial/temporal avoidance and tree use. Against lions, tigers or large hyenas, a solitary leopard generally benefits more from escape and arboreal refuge than frontal confrontation.

### Melanism and camouflage

Melanism is the defining phenotype. A global peer-reviewed study found melanism strongly non-random geographically, associated particularly with moist forests, and proposed camouflage and/or thermoregulation as plausible selective mechanisms. The evidence supports a habitat-linked stealth benefit, but not a universal “invisibility” bonus. In open dry habitat, the same dark coat can be less cryptic.

### Environmental strengths

- Dense forest, woodland, brush and broken terrain where concealment matters
- Night and low-light conditions
- Trees and vertical structure that enable escape, stalking and carcass caching
- Complex terrain where rapid changes of direction matter more than open-field speed

### Environmental limitations

- Open bright terrain reduces the dark morph's camouflage advantage
- Deep water removes much of the arboreal/terrestrial mobility package
- No ranged weapon or armor
- Long open pursuit favors cursorial endurance specialists

### Major weaknesses

- Only about 60 kg in the canonical profile, creating a major absolute power deficit against large carnivores and megafauna
- No armor or unusual trauma resistance
- Killing system requires close contact
- Ambush advantage declines sharply if detected early
- Dark coat is context-dependent camouflage, not universally superior coloration
- Solitary combat removes any group advantage

### Matchup archetypes

**Strong against:** smaller and similarly sized terrestrial animals that can be ambushed and grappled; opponents vulnerable to neck/throat control; animals that struggle in trees or dense broken terrain.

**Weak against:** much larger bears and big cats, heavily armed bovids, armored taxa, megafauna, large aquatic predators in water, and opponents whose venom/electric/chemical mechanisms bypass ordinary mammalian toughness.

## 5. Proposed ABS substats

All values are absolute across the 225-animal roster.

| Substat | Rating | Justification |
|---|---:|---|
| **Size** | **38.0** | 60 kg is substantial among terrestrial predators but far below lion, bear, bison and megafauna mass. |
| **Raw Power** | **45.0** | Strong grappling/climbing musculature for its size, but absolute force is constrained by body mass. |
| **Weaponry** | **59.0** | Effective canine bite, carnassials and retractile claws provide a versatile close-range system. |
| **Protection** | **27.0** | Fur, muscle and ordinary felid tissues only; no armor. |
| **Toughness** | **44.0** | Robust predator capable of hard contact, but severe penetrating/crushing trauma is dangerous. |
| **Speed** | **55.0** | Explosive short-range locomotion is biologically clear, but maximum-speed evidence is too weak for a canonical factual field. |
| **Maneuverability** | **83.0** | Excellent balance, pouncing, climbing, tree descent and dense-terrain control. |
| **Endurance** | **61.0** | Multi-kilometer nightly patrol and sustained activity, without persistence-hunter specialization. |
| **Recovery** | **47.0** | Normal mammalian healing; no exceptional regeneration. |
| **Tactics** | **69.0** | Flexible ambush, prey selection, caching, avoidance and human-landscape adaptation. |
| **Senses** | **76.0** | Strong nocturnal predator sensory suite, but below specialist echolocators and extreme sensory taxa. |
| **Ferocity** | **66.0** | Will engage dangerous prey/rivals, but risk avoidance is central to solitary survival. |
| **Abilities** | **62.0** | Arboreal versatility plus habitat-dependent melanistic camouflage meaningfully change some matchups without becoming a universal bypass. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **59.0** | A specialized killer with bite, claws and grappling, but only 60 kg and therefore well below lion-scale and megafaunal absolute damage. |
| **Defense** | **42.0** | Good evasive survival and functional toughness, but no armor and limited mass. |
| **Agility** | **83.0** | Elite mixed arboreal/terrestrial control, balance, pouncing and rapid repositioning. |
| **Stamina** | **61.0** | Strong nightly movement and territorial activity, but not a persistence-pursuit specialist. |
| **Intelligence** | **67.0** | Flexible solitary hunting, caching, habitat use and behavioral adaptation support high tactical competence. |
| **Special** | **65.0** | Melanism can improve concealment in dark/moist forest and arboreal ability changes engagement geometry, but neither is a universal combat superpower. |

## 7. Exactly two special abilities and two unique traits

### Proposed special abilities

1. **Shadow Rosettes** — Recessive ASIP-associated melanism darkens the coat while rosettes remain present. In moist forest and low light this can improve concealment and shorten the effective ambush distance. It is explicitly habitat-dependent.
2. **Canopy Cache** — Powerful climbing, grasping claws and flexible arboreal locomotion let the leopard move vertically, escape ground-bound threats and secure food in trees. In ABS this represents real terrain control, not an invented strength multiplier.

### Proposed unique traits

1. **Hidden Pattern** — The animal is not uniformly patternless; leopard rosettes remain beneath the melanistic coat and can become visible under suitable lighting.
2. **Solitary Generalist** — Leopards combine broad prey choice, habitat flexibility and independent hunting, allowing one individual to function without a pack or pride.

## 8. Expanded profile content

### Habitat and range

Leopards occupy an exceptionally broad range across sub-Saharan Africa and southern/western/eastern Asia, including forest, woodland, savanna, scrub, rocky country and some arid landscapes. Melanistic individuals are not evenly distributed. Peer-reviewed mapping found the phenotype concentrated especially in moist forests of South and Southeast Asia and rare or absent across many open/dry regions.

### Diet and ecology

Leopards are opportunistic carnivores. A large prey-preference analysis found preferred prey concentrated at 10–40 kg, with roughly 25 kg as the modeled most-preferred prey mass. They also take smaller mammals, birds, reptiles and carrion. Their ecological niche changes with prey communities and competition from larger carnivores.

### Social structure

Primarily solitary. Adults maintain home ranges with sex-dependent overlap patterns. Males generally range over larger areas than females. Communication uses scent marking, scrapes and vocalizations, reducing the need for constant direct encounters.

### Life history

ADW reports breeding year-round, usually 2–3 offspring, gestation around 96 days and independence around 13–18 months. Females provide parental care. Sexual maturity is around two to three years. Wild life expectancy is much shorter than captive longevity.

### Conservation

The IUCN Cat Specialist Group lists the leopard as **Vulnerable**, citing habitat loss, prey depletion, persecution, illegal wildlife trade and poorly managed hunting among major pressures. “Black panther” has no separate conservation category because melanism is a phenotype within leopard populations.

### Major adaptations

- retractile claws and powerful forelimbs
- flexible arboreal locomotion and head-first tree descent
- low-light sensory performance
- stealth/ambush hunting
- broad dietary and habitat flexibility
- melanistic coat in some populations, especially associated with moist forest

### Human interaction

Leopards can persist near people and exploit anthropogenic food resources, which also increases conflict risk. GPS research in India found strongly nocturnal movement near human settlements. Human-leopard conflict, retaliatory killing and habitat fragmentation are important conservation issues.

### Strong fun facts

- A black panther in this ABS entry is a leopard, not a separate species.
- The dark coat does not erase the rosettes; they can still be visible in suitable light.
- A global dataset estimated melanism at about 10.75% across sampled leopards, but the frequency is highly uneven geographically.
- Camera-trap work found melanism nearly fixed in sampled leopard populations south of the Isthmus of Kra in the Malay Peninsula.
- Leopards are among the most geographically widespread living big cats.
- Their preferred prey can be lighter than the leopard itself, despite famous exceptional kills of larger animals.
- Leopards can descend trees head-first, an unusually useful combination of strength and limb control for a large cat.

### Concise site-ready summary

The Black Panther is a melanistic leopard, not a separate species. A prime adult male is a roughly 60 kg solitary ambush predator armed with powerful forelimbs, retractile claws and a killing bite. Its greatest ABS advantages are agility, climbing, stealth and tactical flexibility. Melanism can improve concealment in dark, moist forests, but the coat is not universal camouflage and provides no armor. On an absolute roster scale, the black panther is dangerous because it is an efficient predator, not because its modest body mass somehow equals a lion, bear or megaherbivore in raw power.

### Detailed narrative profile

The useful way to model a black panther is to separate two ideas that popular culture often blends together: leopard biology and melanistic coloration. Mechanically, the animal is a leopard. It has the same core feline weapon package as a normally colored *Panthera pardus*: a strong jaw and canines, retractile claws, muscular forequarters, a flexible spine and limbs capable of both explosive terrestrial movement and precise climbing. The black coat changes concealment, not anatomy.

That distinction matters for powerscaling. A 60 kg adult male is extraordinarily capable at controlling prey near its own mass, but it is not physically equivalent to a 190 kg male lion, a 900 kg bison or a multi-tonne elephant. The leopard's strategy is to avoid fair tests of raw force. It uses cover, darkness, terrain and timing to reach striking distance before the opponent can exploit a size advantage. Once contact begins, claws anchor the body, forelimbs control position and the jaws seek a vulnerable hold.

Melanism strengthens that strategy only in the right environment. The best global study to date found black leopards disproportionately associated with moist forests, especially in Asia, and suggested camouflage and/or thermoregulation as likely selective mechanisms. This supports a meaningful Special score, but not a fantasy-level stealth rating. A black animal standing in bright open grassland can be conspicuous. ABS should therefore treat Shadow Rosettes as a conditional environmental advantage.

The leopard's other defining advantage is three-dimensional terrain use. Trees are not just resting places. They are routes of escape, observation platforms and cache sites. Arboreal competence makes a ground-only opponent work harder to force contact and lets the leopard disengage from some unfavorable encounters. This is why Agility and Maneuverability can legitimately be among its highest scores even though its factual maximum sprint remains unresolved.

Its limitations are equally important. The body is unarmored, the animal must close to bite or claw, and a single heavy counter from a much larger opponent can be decisive. It is not an endurance chaser and does not gain coalition support in an individual ABS battle. The resulting profile is a high-control ambush predator with moderate absolute Attack and Defense, excellent Agility, good tactical Intelligence and a real but context-dependent Special mechanism.

## 9. Image Asset

- `image_status`: `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- `png_repo_path`: `animal-research-for-update/images/black-panther.png`
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Black_Panther_-_India.jpg
- `original_photo_url`: https://commons.wikimedia.org/wiki/Special:Redirect/file/Black_Panther_-_India.jpg
- `file_format_verified`: Source is a real 2093×1407 JPEG photograph; target PNG not created.
- `alpha_verified`: No. No transparent staging binary exists.
- `full_body_verified`: No. The source is exact taxon and high enough resolution, but this run did not obtain a sufficiently reliable whole-frame visual inspection proving every paw and the complete tail are unobscured and inside frame.
- `adult_verified`: Exact melanistic *Panthera pardus* is verified; adulthood is plausible but not explicitly sex/age-labeled on the source page.
- `sex_verified_or_unknown`: Unknown.
- `license_status`: Wikimedia Commons lists CC BY-SA 4.0.
- `notes`: Strong exact-taxon wild photograph from Nagarhole National Park, India. Do not promote until full-body framing is visually verified. The connected GitHub writer accepts UTF-8 text only, so no fake PNG is committed.

## 10. Evidence and source ledger

| Source | Direct URL | Claim / field supported | Finding | Confidence / caveat |
|---|---|---|---|---|
| IUCN SSC Cat Specialist Group, Leopard | https://www.catsg.org/living-species-leopard | Taxonomy, mass, body/tail length, longevity, range, conservation | 17–90 kg; body 91–191 cm; tail 51–101 cm; Vulnerable | High authority; broad species values mix sex/populations. |
| Animal Diversity Web, *Panthera pardus* | https://animaldiversity.org/accounts/Panthera_pardus/ | Sex dimorphism, mass/length, lifespan, behavior, diet, reproduction | Males 31–65 kg; females 17–58 kg; typical wild 10–12 y; solitary ambush predator | Strong secondary zoological synthesis. |
| da Silva et al. 2017, PLOS ONE / PMC | https://pmc.ncbi.nlm.nih.gov/articles/PMC5381760/ | Melanism frequency and habitat association | 10.75% global sampled frequency; strong moist-forest association | High, peer-reviewed; sampling is not uniform across entire range. |
| Schneider et al. 2012, PLOS ONE / PMC | https://pmc.ncbi.nlm.nih.gov/articles/PMC3520955/ | Genetic mechanism | Leopard melanism strongly associated with a nonsense mutation in ASIP | High, peer-reviewed. |
| Kawanishi et al. 2010, Journal of Zoology | https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/j.1469-7998.2010.00731.x | Malay Peninsula melanism | Camera traps found only melanistic samples south of Isthmus of Kra in dataset | High; regional result, not global. |
| Hartstone-Rose et al. 2012, Anatomical Record | https://doi.org/10.1002/ar.22518 | Bite-force mechanics | Modeled total leopard bite forces 166.25 kgf canine, 190.83 kgf P3, 226.61 kgf carnassial | High for biomechanical model; not PSI/in-vivo measurement. |
| Hayward et al. 2006, Journal of Zoology | https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/j.1469-7998.2006.00139.x | Prey preference | Preferred prey 10–40 kg, modeled optimum ~25 kg | High, comparative ecological study. |
| Odden & Wegge 2005, Wildlife Biology | https://nsojournals.onlinelibrary.wiley.com/doi/full/10.2981/0909-6396%282005%2911%5B145%3ASAAPOL%5D2.0.CO%3B2 | Movement/endurance | Sampled males moved ~6.8 km per 24 h intensive sessions; mostly nocturnal | High but small Nepal sample. |
| Snider et al. 2021, Journal of Mammalogy | https://academic.oup.com/jmammal/article/102/4/1138/6317594 | Home-range flexibility | 74 tracked leopards; home ranges varied 14.5–885.6 km²; males larger | High, multi-study synthesis. |
| Biology Open 2024 hindlimb study | https://doi.org/10.1242/bio.061823 | Locomotor morphology | Leopard femur morphology supports flexible cursorial/arboreal locomotion | High, peer-reviewed morphology; not direct performance trial. |
| Wikimedia Commons, Black Panther - India | https://commons.wikimedia.org/wiki/File:Black_Panther_-_India.jpg | Image candidate | Wild melanistic *P. pardus*, Nagarhole, 2093×1407, CC BY-SA 4.0 | Exact taxon/license high confidence; strict whole-body verification pending. |

### Confidence and caveats

1. “Black panther” is taxonomically ambiguous in ordinary language, but the ABS live profile explicitly labels this roster entry *Panthera pardus*, so this overhaul resolves it as a melanistic leopard.
2. Geographic body-size variation is large. The 60 kg canonical male should not be read as a species-wide mean.
3. `height_cm` has lower confidence than mass and head-body length because strong sex-specific primary shoulder-height data were not located.
4. `speed_mps` remains 0.0 because repeated 58 km/h claims were not backed by a sufficiently transparent instrumented maximum-speed study.
5. Bite force is supported as modeled force in newtons/kg-force, not PSI. No casual PSI conversion is used.
6. Melanism is a conditional camouflage adaptation. It must not be double-counted across Agility, Intelligence and Special as if it were three separate powers.

## 11. Cross-animal calibration notes

- **African Lion:** Black Panther is roughly one-third the canonical lion's mass, so its Raw Power, Attack, Defense and Toughness remain clearly lower. It can exceed the lion in fine arboreal maneuverability and stealth without implying greater overall combat power.
- **Black Bear:** At roughly half the canonical black bear's mass, the panther has superior feline maneuverability and predatory weapon integration but lower bulk, protection and absolute power.
- **African Wild Dog:** The panther is substantially heavier and more individually powerful, while the wild dog's strongest advantages remain endurance and pack ecology. Pack benefits are excluded in one-on-one scaling.
- **Bison and African Elephant:** These anchors enforce the absolute-scale gap. A stealthy 60 kg cat does not receive megafauna-like Attack or Defense simply because it is an efficient killer.
- **Black Mamba:** Both can exploit stealth, but their mechanisms differ. The mamba's venom warrants much higher Special despite tiny mechanical power; the panther's Special is moderate because melanism is conditional camouflage rather than a physiological bypass.
- **Barn Owl/Bald Eagle:** High Agility can legitimately cross size classes because it measures control and repositioning, but panther Raw Power and Attack remain vastly higher than the birds in absolute terms.

No current score appears to require an immediate correction to a previously researched animal. Revisit the panther after Jaguar, Tiger, Cougar, Clouded Leopard and Snow Leopard are researched so felid Attack, Agility and Special spacing can be normalized.