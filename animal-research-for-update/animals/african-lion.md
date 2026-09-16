# African Lion Research Overhaul

## Research status

- **ABS roster name:** African Lion
- **Canonical taxon:** Lion, *Panthera leo*, with the combat specimen representing a healthy mature African adult male
- **Living/extinct:** Living
- **Canonical combat specimen:** Healthy mature adult male, representative rather than record-sized
- **Research confidence:** High for taxonomy, sex dimorphism, mass, dimensions, social/combat behavior and ecology; moderate for a single canonical top speed and lifespan; moderate for modeled bite force because published values are biomechanical estimates rather than a standardized in-vivo PSI measurement
- **Image status:** `SOURCE FOUND - PNG COMMIT PENDING`

---

## 1. Identity and canonical specimen

### Common and scientific identity

The African Lion entry represents the lion, *Panthera leo*, specifically an African population rather than the smaller remaining Asiatic population in India. Taxonomic placement is Animalia, Chordata, Mammalia, Carnivora, Felidae, *Panthera*, *Panthera leo*.

Modern lion taxonomy recognizes major geographic lineages rather than the many older subspecies historically proposed. For ABS, the important practical choice is to avoid mixing a record specimen, captive giant, or Asiatic male into the canonical African profile.

### Canonical specimen assumption

ABS should model a **healthy mature adult African male lion**. This follows the project rule because males are substantially larger than females and male lions are the sex specialized for direct territorial and coalition combat. Smithsonian reports adult males around **150–250 kg**, while the IUCN Cat Specialist Group gives the species-wide upper male range reaching roughly **272 kg**. San Diego Zoo gives males roughly **150–260 kg**.

The canonical specimen is not a 250+ kg exceptional giant. A representative large, fit territorial male is more appropriate.

### Sexual dimorphism and fighting role

Sexual dimorphism is strongly battle-relevant. Adult males are heavier and carry a mane, while females are the primary pride hunters. Males form coalitions, challenge resident males, defend territories and prides, and can suffer severe or fatal wounds in escalated fights. Smithsonian notes that males take on most defensive duties and that young males form coalitions before attempting pride takeovers.

The mane should not be treated as proven armor. University of Minnesota lion research found no compelling evidence that the mane provides effective protection from wounding. It functions much more clearly as a sexually selected signal of male quality, condition and intimidation. That distinction matters for ABS Defense.

---

## 2. Physical measurements

### Mass

**Institutional adult-male range:** approximately **150–250 kg** at Smithsonian, **150–260 kg** at San Diego Zoo, and up to about **272 kg** in the IUCN Cat Specialist Group species account.

**ABS representative recommendation:** **190.0 kg**.

Reasoning: 190 kg is a strong mature African male without treating unusually heavy individuals as typical. It also sits close to ecological literature values for Serengeti-Mara lions, where published guild comparisons place lion body mass around 180 kg.

### Shoulder height

Smithsonian gives lions approximately **1.0–1.2 m at the shoulder**.

**ABS representative recommendation:** **115.0 cm**.

This represents a large adult male while staying within the institutional range.

### Body length

San Diego Zoo reports male head-body length around **1.7–2.5 m**, while Smithsonian describes males reaching roughly 3 m when tail is included. The IUCN Cat Specialist Group gives body length up to about 250 cm and tail length around 60–100 cm.

**ABS representative head-body recommendation:** **210.0 cm**.

This avoids mixing tail length into the main body-length field. If ABS later formalizes total length, a separate tail field should be added rather than silently changing conventions.

### Top speed

Institutional accounts commonly place lion sprinting speed in the low-to-mid 50 km/h range, with San Diego Zoo reporting a lioness sprinting up to about **53 km/h**. Lions are short-burst ambush predators, not endurance pursuit specialists.

**ABS representative recommendation:** **14.7 m/s** (about 52.9 km/h).

This is a defensible canonical sprint value without using sensational 80 km/h internet claims as a species-standard measurement.

### Lifespan

Smithsonian reports wild males rarely living past roughly **12 years**, while females can reach around 16. IUCN CatSG gives approximately **12–18 years** for longevity, and managed-care lions commonly live longer.

Because the canonical specimen is male and ABS should favor wild biological context:

**ABS representative recommendation:** **12.0 years**.

### Bite force

Lion bite-force numbers on the internet are frequently converted into PSI without a valid contact-area basis. ABS should not repeat those values as measured facts.

Peer-reviewed biomechanical work provides defensible force estimates in **newtons**. A 2007 comparative carnivore study reported an estimated lion canine bite force around **1,314.7 N** for its modeled sample. A 2024 craniometric study of captive carnivores reported average modeled lion canine bite force around **2,608.8 N** and molar bite force around **4,566.9 N**, demonstrating that methodology and bite position materially change the estimate.

**ABS `bite_force_psi` recommendation:** **0.0 pending a defensible PSI conversion standard.**

This is not a claim that lions have weak jaws. It is a data-integrity decision: force in newtons is supported, but a species-standard PSI value requires contact area and methodology that the current field does not encode. A future `bite_force_newtons` field would be much more scientifically defensible.

### Skull and canines

Published cranial datasets show the lion has a large robust skull. A broad comparative dataset reported adult male lion skull length around **358.6 mm** on average in its sample. Lions use large canines to seize and kill prey, while carnassials shear flesh. Their jaws are designed for gripping and killing large prey, but lion cranial mechanics should not be confused with the extreme bone-processing specialization of hyenas or the proportionally exceptional bite mechanics of jaguars.

### Forelimbs and claws

Lions have muscular shoulders and powerful forelimbs used to seize, trip, hold and strike prey or rivals. Retractile claws add hooking and slashing ability. Male-male fights include forceful paw strikes, grappling, biting and attacks to the body. These weapons matter because the lion can damage with multiple systems simultaneously rather than relying on bite force alone.

### Mane

The mane increases apparent size and communicates male quality. University of Minnesota research found darker manes associated with higher testosterone, greater recovery from injury and other indicators of male quality, but also greater heat cost. Wounding studies found no compelling evidence that the mane reliably protects against attacks. ABS should therefore treat the mane primarily as intimidation/signaling, with at most a minor incidental buffering effect rather than heavy armor.

---

## 3. Canonical proposed factual fields

| Field | Proposed value | Research basis |
|---|---:|---|
| `weight_kg` | **190.0** | Representative mature African male within institutional 150–260+ kg ranges |
| `height_cm` | **115.0** | Large adult male within Smithsonian 1.0–1.2 m shoulder range |
| `length_cm` | **210.0** | Representative head-body length within male 1.7–2.5 m range |
| `speed_mps` | **14.7** | About 53 km/h conservative institutional sprint figure |
| `lifespan_years` | **12.0** | Wild adult-male context; males rarely exceed roughly 12 years in Smithsonian account |
| `bite_force_psi` | **0.0** | Reliable force estimates exist in N, but no defensible standardized PSI conversion was established |
| `size_score` | **55.0** | Large terrestrial predator, but far below elephant/hippo/rhino and marine megafauna on absolute roster scale |

### Suggested categorical fields

- `type`: Mammal
- `size`: Large
- `habitat`: Savanna, grassland, open woodland, scrub and dry thorn forest
- `isNocturnal`: true as a broad ecological tendency, with crepuscular activity also important
- `isSocial`: true
- `diet`: Carnivore

---

## 4. Combat biology

### Primary weapons

1. **Canine bite and jaw grip.** Lions seize large prey with the jaws and use sustained gripping/suffocation mechanics in kills.
2. **Forelimb power and claws.** Powerful shoulders, forelegs and retractile claws can strike, hook, destabilize and hold prey or rivals.
3. **Body mass and wrestling strength.** A 190 kg male can use its whole body in grappling and takedowns.
4. **Coalition behavior.** In natural territorial conflict, male lions often cooperate. ABS individual battles should not grant extra bodies, but coordination experience supports Tactics and Intelligence.

### Offensive mechanics

A lion is a close-range burst combatant. Its strongest sequence is rapid closing, a leap or rush, forelimb contact, destabilization, grappling, and a controlling bite. Against prey, lions often attack from short range after stalking. Against rival lions, combat is less like a clean hunting kill and more like explosive striking, wrestling and biting.

The lion is dangerous because its weapon systems combine. Claws create purchase and trauma, forelimbs control the opponent, body mass helps force a takedown, and the jaws can then target the throat, muzzle or other vulnerable region.

### Defense and durability

A mature male lion has substantial muscle, a robust skeleton, thick neck/shoulder tissues and a large body compared with most terrestrial predators. It can survive serious wounds, but lion-on-lion injuries are consequential. Peer-reviewed wounding research suggests roughly one-third of lion-inflicted wounds in the studied population were followed by mortality within a year, emphasizing that lions are tough but far from armored.

The mane should not receive a large Protection bonus because research did not find compelling evidence that it functions as effective armor.

### Locomotion and maneuverability

Lions have excellent short-range acceleration, balance, pouncing control and rapid body repositioning for a 190 kg predator. They are much more agile than an elephant and most megaherbivores, but less optimized for extreme sprinting than cheetahs and less nimble than many small cats, mustelids and aerial animals.

Top speed alone does not determine Agility. The lion scores well because it can turn, leap, grapple and control movement while attacking.

### Stamina and endurance

Lions are not endurance pursuit specialists. IUCN CatSG describes them as active only a limited portion of the day and predominantly nocturnal/crepuscular hunters. Their predation strategy depends on stalking and explosive short-distance effort. They can patrol territories and travel substantial distances, but repeated maximal bursts generate fatigue and heat.

ABS Stamina should therefore be moderate, clearly below endurance-oriented canids, equids and some long-distance movers.

### Senses

Lions have strong low-light vision, hearing, smell and close-range tactile awareness. Their roar and scent marking support long-distance territorial communication. Smithsonian reports roars audible over several miles. Sensory ability is battle-useful for detecting movement, tracking, stalking and coordinating with pride/coalition members.

### Intelligence and tactics

The lion is behaviorally flexible and highly social for a cat. Smithsonian describes coordinated hunting from multiple angles and male coalition formation. The IUCN Cat Specialist Group calls the lion the most social cat species, with complex pride systems and group territorial behavior.

This supports above-average tactical intelligence, especially in positioning, social coordination, rival assessment and prey selection. It does not justify placing a lion alongside great apes, elephants, dolphins, orcas or corvids in general problem-solving cognition.

### Hunting behavior

Females are the primary pride hunters, but males also hunt, particularly nomadic males that must feed themselves. Lions target medium-to-large ungulates and can cooperate against prey much larger than one lion. Ambush, concealment and short-range acceleration are central because lions cannot sustain long high-speed chases.

### Intraspecific fighting

This is one of the male lion's strongest combat credentials. Males form coalitions, challenge other males for pride access, defend territory and fight over females and carcasses. Serious inter-coalition combat can produce severe injury or death. Males therefore have real experience engaging opponents with broadly comparable weapons and body size.

### Predator and competitor interactions

Lions dominate many African carnivore interactions through size, numbers and aggression. They compete with spotted hyenas, leopards, cheetahs and African wild dogs and may kill competing carnivores. A single lion is not automatically superior to every large African animal, however. Adult elephants, rhinoceroses, hippopotamuses and large bovids can present enormous force and injury risk.

### Aggression and ferocity

A territorial adult male deserves a high Ferocity rating. Male reproductive success can depend on confronting rivals, and escalated fights can be lethal. This does not mean a lion attacks recklessly in every situation. Like other animals, lions assess risk and often use displays, roars, coalition strength and intimidation to avoid unnecessary injury.

### Environmental strengths

- Open grassland and savanna with cover for short-range ambush
- Dry woodland and scrub where stalking is possible
- Night and low-light conditions
- Terrain that permits explosive pounces and lateral repositioning

### Environmental limitations

- Deep water removes much of the lion's terrestrial mobility advantage
- Very open terrain with no cover makes ambush harder
- Extreme heat penalizes sustained maximal exertion, especially in heavily maned males
- Cannot engage flying opponents in sustained three-dimensional pursuit

### Major weaknesses

- No true armor, shell or thick hide
- Short-burst predator rather than elite endurance animal
- Must enter close range to inflict decisive damage
- Grappling exposes the lion to horns, tusks, hooves, bites and crushing counters
- Mane adds thermal cost and is not proven protective armor
- A single lion loses the numerical advantage that makes many natural pride/coalition feats possible

### Good matchup archetypes

- Similar or smaller terrestrial mammals lacking heavy armor or dangerous anti-predator weapons
- Medium predators that cannot match its combination of mass, forelimb control and bite
- Prey-sized animals vulnerable to grappling and suffocation mechanics
- Opponents that depend on fleeing rather than standing and counterattacking

### Bad matchup archetypes

- Multi-tonne megaherbivores such as prime adult elephants, hippos and rhinos
- Heavily armored animals whose vital areas are difficult to access
- Large aquatic predators in deep water
- Opponents with long horns/tusks or crushing weapons that can punish a frontal grapple
- Much larger extinct predators and marine giants

---

## 5. Proposed ABS substats

These ratings use the absolute full-roster scale and are calibrated against the already-researched African Elephant rather than against cats alone.

| Substat | Score | Justification |
|---|---:|---|
| **Size** | **55.0** | Large land predator at ~190 kg, but only ~3.5% of the canonical 5,500 kg African Elephant mass. |
| **Raw power** | **61.0** | Exceptional feline muscular power and wrestling ability, but absolute force is far below terrestrial megafauna. |
| **Weaponry** | **70.0** | Strong jaws, large canines, retractile claws and powerful forelimbs create a versatile close-range package. |
| **Protection** | **43.0** | Muscular body and fur offer limited protection; no armor, and mane is not proven effective armor. |
| **Toughness** | **62.0** | Can remain dangerous through serious injury, but penetrating bites/claws and large-animal trauma can be fatal. |
| **Speed** | **67.0** | Roughly 14.7 m/s sprinting is fast on the roster, though well below cheetah-tier speed. |
| **Maneuverability** | **72.0** | Strong acceleration, pouncing, balance, turning and close grappling control for a large predator. |
| **Endurance** | **47.0** | Capable patrol/travel endurance, but killing strategy relies heavily on short bursts and lions rest extensively. |
| **Tactics** | **69.0** | Ambush skill, opponent assessment, coordinated hunting and coalition territorial combat. |
| **Senses** | **72.0** | Excellent low-light vision, hearing, smell and battle-relevant awareness. |
| **Ferocity** | **82.0** | Adult males routinely face dangerous territorial contests with serious injury risk. |
| **Abilities** | **46.0** | Useful specialized feline systems and social signaling, but no venom, electricity, armor, echolocation or similarly extreme mechanism. |

---

## 6. Proposed six headline ABS ratings

| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **70.0** | A highly effective 190 kg predator with jaws, canines, claws, forelimb control and proven large-prey killing mechanics. Far below megafauna in absolute force, but more specialized for killing than many larger herbivores. |
| **Defense** | **54.0** | Strong muscular build and meaningful toughness, but no real armor and vulnerable to penetrating or crushing trauma. Mane should not be inflated as protection. |
| **Agility** | **72.0** | Excellent acceleration, pouncing, balance, turning and grappling control for its size. |
| **Stamina** | **48.0** | Good functional travel/patrol capacity but only moderate combat endurance; ambush and burst exertion dominate its predatory strategy. |
| **Intelligence** | **66.0** | Sophisticated social structure, coalition behavior, coordinated hunting, rival assessment and tactical flexibility, but below the roster's highest cognition specialists. |
| **Special** | **43.0** | Mane signaling, roar-based territorial communication and highly developed feline predatory systems matter, but the lion lacks a rare biological mechanism comparable to potent venom, electricity, regeneration or echolocation. |

### Headline calibration note

The African Lion should not be an 80+ all-rounder merely because it is iconic. Its strongest roster-level qualities are close-range Attack, Agility and Ferocity. Its weaknesses are lack of armor, middling sustained combat endurance and absence of an exotic matchup-changing Special mechanism.

Relative to the African Elephant research anchor, the lion is dramatically lower in Size, Raw Power, Defense and Toughness, but substantially higher in Agility and fine maneuverability. This preserves the project's absolute rather than pound-for-pound scaling rule.

---

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Ambush Grapple** - The lion combines a short explosive rush with powerful forelimbs, retractile claws and body-weight control to seize and destabilize an opponent before applying a killing bite. This represents the real integrated mechanics of large-prey capture rather than a fictional damage boost.
2. **Coalition Instinct** - Male lions have unusually strong social combat experience for a felid, forming coalitions, assessing rivals and coordinating territorial pressure. In a one-on-one ABS fight this does not summon allies; it represents battle-relevant tactical behavior, communication and rival assessment.

### Unique traits

1. **Battle-Tested Male** - Adult males routinely compete for pride tenure and territory against similarly armed rivals, giving the canonical specimen unusually direct intraspecific combat experience.
2. **Mane Signal** - The mane visually enlarges the male and communicates condition/intimidation. Darker and more developed manes correlate with aspects of male quality, but the trait must not be treated as proven neck armor.

---

## 8. Expanded profile content

### Habitat

African lions occupy savannas, grasslands, open woodland, scrub and dry thorn forest. They are absent from much closed equatorial rainforest. Habitat quality depends heavily on prey abundance, water, cover and human pressure.

### Geographic range

Historically lions occupied much of Africa and extended broadly through parts of Eurasia. Today African populations are fragmented across sub-Saharan Africa, while the remaining Asiatic population persists in and around the Gir landscape of India. IUCN Cat Specialist Group data indicate severe historical range contraction and continued fragmentation.

### Diet

Lions are obligate carnivores specializing in medium and large vertebrate prey. Common targets include zebra, wildebeest and other ungulates. They also scavenge, steal kills and take smaller prey when opportunity demands. Smithsonian describes common prey in roughly the 45–453 kg range.

### Ecology

Lions are apex or near-apex predators and major competitors in African carnivore guilds. Their presence shapes prey behavior and interactions among hyenas, wild dogs, cheetahs and leopards. Unlike other living cats, they routinely form stable social groups and defend group territories.

### Social structure

The lion is the most social living cat. Prides consist primarily of related females and offspring, while males commonly operate as coalitions. Females may remain in natal prides for life. Males usually disperse and later attempt to gain pride residency by displacing resident males.

### Reproduction and life history

Females typically give birth to one to four cubs after roughly 3.5 months gestation. Cub mortality is high in the wild. Male pride tenure is dangerous and often relatively short because incoming coalitions can evict residents. This intense reproductive competition helps explain the male's combat-oriented life history.

### Conservation status

The lion is currently classified as **Vulnerable** globally by IUCN, with major regional differences. The IUCN Cat Specialist Group reports extensive range loss, fragmentation, prey depletion, habitat loss, human-lion conflict and illegal killing as major pressures. Some regional populations are stable or recovering, while others remain severely threatened.

### Major adaptations

- muscular forequarters for grappling and prey control
- retractile claws for traction, hooking and slashing
- large canines and carnassials for killing and meat processing
- low-light sensory performance for nocturnal/crepuscular hunting
- social coordination unusual among cats
- loud roaring and scent marking for territorial communication
- male mane as a sexually selected signal of condition and intimidation

### Human interaction

Lions are culturally iconic but can come into serious conflict with people where livestock and lion range overlap. Retaliatory killing, prey depletion and habitat conversion remain important conservation problems. Lions are dangerous wild predators and ABS battle ratings should never be interpreted as wildlife-safety guidance.

### Fun facts

- Lions are the most social living cats.
- Adult males often form coalitions with brothers or other relatives and cooperate in territorial competition.
- A lion's roar can carry for several miles and functions in long-distance territorial and social communication.
- Male mane darkness is associated with biological condition and intimidation, but research does not support the popular assumption that the mane is primarily protective armor.
- A male lion can consume an enormous meal at once; San Diego Zoo notes roughly a quarter of body weight is possible in a large feeding event.
- Lions spend much of the day resting and rely on short explosive attacks rather than cheetah-like maximum sprint specialization or canid-like endurance pursuit.

### Concise site-ready summary

The African Lion is a powerful social big cat built for explosive close-range combat. A mature male combines roughly 190 kg of muscular mass with large canines, retractile claws, strong forelimbs and extensive experience confronting dangerous rivals. Lions are tactically sophisticated ambush predators and unusually social for cats, but they lack heavy armor and are not endurance specialists. Their mane is best treated as a signal of male quality and intimidation rather than proven protective armor.

### Detailed narrative profile

A prime adult male African lion is not simply a scaled-up house cat and not simply a bundle of famous predator statistics. Its combat design is an integrated system. Powerful forequarters allow the lion to strike, hook and hold. Retractile claws provide purchase. The jaws and canines finish prey once control is established. A muscular 190 kg body adds enough momentum and leverage to wrestle large animals, while feline balance and acceleration let the lion reposition far more quickly than most animals in the same mass neighborhood.

The male's natural history adds another layer. Female lions do most cooperative pride hunting, but males live a life shaped by direct competition with other males. Young males leave their natal pride, often form coalitions and eventually challenge resident males. These contests can be brutal. The lion therefore has unusually relevant fighting experience against an opponent with almost the same weapons, anatomy and tactical options.

That does not make the lion invincible. The absolute ABS scale is especially important here. A 190 kg male is formidable compared with most terrestrial predators but tiny beside a 5.5-tonne African elephant. The lion cannot compensate for a thirty-fold mass deficit merely because it is a better specialized killer. Likewise, large bovids, hippos and rhinoceroses can punish a failed grapple with horns, jaws or enormous body force. A lion's lack of armor means every committed close-range attack carries risk.

The mane is also easy to overrate. It is visually dramatic and clearly matters in lion social biology, but field research has not found compelling evidence that it serves as effective armor against rival attacks. Its stronger role is signaling: mane characteristics advertise information about a male, and other lions respond to those signals. ABS should reward this as a real behavioral adaptation without turning hair into a shield.

The resulting profile is a strong but bounded predator. Attack and Agility are the lion's headline strengths. Intelligence is above average because social coordination, rival assessment and ambush tactics are genuinely sophisticated. Defense is only moderate-to-strong because muscle and toughness cannot replace armor. Stamina is not elite because lions depend heavily on short bursts. Special remains moderate because, despite the lion's iconic biology, it does not possess venom, electricity, echolocation, chemical weaponry or another rare mechanism that fundamentally changes matchup rules.

### Proposed future structured fields

- `body_length_type`: head-body vs total length
- `bite_force_newtons_canine`
- `bite_force_newtons_molar`
- `bite_force_method`: measured / modeled / estimated
- `canonical_sex`
- `canonical_age_class`
- `weapon_primary`
- `weapon_secondary`
- `locomotion_mode`
- `combat_style`
- `social_combat`: boolean or categorical
- `activity_pattern`
- `conservation_status`
- `evidence_confidence`

---

## 9. Image Asset

- **Target local asset:** `animal-research-for-update/images/african-lion.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Selected source page:** https://commons.wikimedia.org/wiki/File:Panthera_leo_(male)_(181091659).jpg
- **Direct image resolver:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Panthera_leo_(male)_(181091659).jpg
- **Source image dimensions:** 2048 x 1366 JPEG
- **Specimen shown:** Adult male African lion, standing side view, photographed in Kenya
- **Why selected:** Real photograph, clear adult male phenotype, useful lateral/full-body presentation, high enough resolution for a clean site cutout, and explicit Creative Commons reuse information on the source page
- **Background:** Natural photographic background. A genuine transparent PNG cutout still needs to be produced and visually checked before production use.
- **License note:** Wikimedia Commons identifies the source as Creative Commons Attribution 3.0. Production migration should preserve attribution/provenance according to the repository image pipeline.

The current GitHub text-file connector cannot safely create the binary transparent PNG, so no fake `.png` is committed during this run.

---

## 10. Evidence and source ledger

| Source | URL | Supports | Reported finding / use | Confidence / caveat |
|---|---|---|---|---|
| Smithsonian National Zoo, Lion | https://nationalzoo.si.edu/animals/lion | Male size, shoulder height, habitat, lifespan, social structure, hunting, male defense role | Males ~150–250 kg, ~1–1.2 m shoulder; males up to ~3 m total length; males rarely past ~12 wild years; prides/coalitions and coordinated hunting | High, institutional species account |
| San Diego Zoo Wildlife Alliance, Lion | https://animals.sandiegozoo.org/animals/lion | Male mass/length, lifespan, sprint figure, feeding and fun facts | Males ~150–260 kg and 1.7–2.5 m body length; lioness sprint ~53 km/h; average lifespan 17 years in their general account | High for broad biology; speed is institutional rather than primary biomechanics |
| IUCN/SSC Cat Specialist Group, Lion | https://www.catsg.org/living-species-lions | Taxonomy, mass/length range, ecology, range, conservation | Species weight 110–272 kg, body length 137–250 cm, longevity 12–18 y; lion is Vulnerable; complex social system; primarily nocturnal/crepuscular | High |
| Wroe et al./Evolution skull dataset | https://onlinelibrary.wiley.com/doi/full/10.1111/j.1558-5646.2007.00101.x | Comparative lion bite mechanics | Lion sample body mass 176 kg; modeled canine bite force ~1314.7 N, BFQ ~104.6 | High for published model; not in-vivo measurement and not PSI |
| Christiansen & Wroe 2007, Ecology | https://esajournals.onlinelibrary.wiley.com/doi/10.1890/0012-9658%282007%2988%5B347%3ABFAEAT%5D2.0.CO%3B2 | Bite-force methodology and feeding ecology | Large-prey carnivores show high bite forces for size; estimates depend on comparative modeling | High, peer-reviewed; reinforces avoiding casual PSI claims |
| Craniometric Characteristics of Selected Carnivora Species, Animals 2024 | https://www.mdpi.com/2076-2615/14/9/1367 | Alternative lion bite-force model | Average modeled lion canine force ~2608.8 N and molar force ~4566.9 N | Moderate-high; captive skull sample and model differ from older methodology, illustrating uncertainty |
| West et al. 2006, Animal Behaviour / University of Minnesota | https://experts.umn.edu/en/publications/wounding-mortality-and-mane-morphology-in-african-lions-panthera-/ | Mane protection and combat wounds | No compelling evidence mane effectively protects against wounding | High, peer-reviewed |
| University of Minnesota Lion Center, Mane research | https://lioncenter.umn.edu/our-work/mane-research | Mane signaling, condition, heat cost | Mane characteristics affect intimidation/mate choice; darker manes associated with testosterone/condition but thermal cost | High, research-program summary |
| Wikimedia Commons, Panthera leo male | https://commons.wikimedia.org/wiki/File:Panthera_leo_(male)_(181091659).jpg | Image candidate | Real standing adult male African lion in Kenya, 2048x1366, CC BY 3.0 | High for image provenance; transparent cutout still pending |

### Evidence conflicts and resolutions

1. **Mass:** Institutional ranges overlap strongly but extend to different maxima. ABS uses 190 kg as a representative healthy mature male, not the midpoint of a mixed-sex range and not a record maximum.
2. **Length:** Sources mix head-body and total length. ABS uses 210 cm as head-body length and explicitly recommends storing measurement convention in the future.
3. **Speed:** High popular claims are poorly standardized. ABS uses 14.7 m/s based on a conservative institutional sprint figure rather than the most dramatic number online.
4. **Bite force:** Peer-reviewed biomechanical estimates vary materially by method and bite position. ABS keeps `bite_force_psi` at 0.0 instead of fabricating a PSI conversion and recommends future newton-based fields.
5. **Mane defense:** Popular descriptions often imply neck armor. Field wounding research does not support a strong protective effect, so the mane does not receive a large Defense bonus.

---

## 11. Cross-animal calibration notes

### African Lion vs African Elephant

The African Elephant is the only previously completed overhaul profile, so it is the primary live calibration anchor for this run.

- **Mass:** 190 kg vs 5,500 kg. The lion is only about 3.5% of the elephant's canonical mass, requiring a huge Size and Raw Power gap.
- **Attack:** The lion is much more anatomically specialized for killing flesh-and-blood prey, so its Attack remains strong despite vastly lower raw force. It should still not approach the elephant's ability to inflict catastrophic damage through multi-tonne mass and tusks too closely.
- **Defense:** Elephant wins overwhelmingly in body depth, skin, structure and absolute trauma tolerance.
- **Agility:** Lion wins clearly in acceleration, turning, pouncing and fine close-range control.
- **Stamina:** Lion's short-burst hunting strategy prevents an automatic high score; the elephant's long-distance walking ecology supports greater sustained functional output.
- **Intelligence:** Both are cognitively sophisticated, but elephant remains above lion in the first-pass calibration due to broader evidence for memory, social cognition, communication and flexible problem solving.
- **Special:** Neither should receive a giant score simply for fame. Lion's mane/social combat system is useful but less matchup-changing than venom, electricity or other truly unusual mechanisms.

### Future calibration flags

Revisit the lion after African Wild Dog, Cheetah, Spotted Hyena, Jaguar, Leopard, Gorilla, Grizzly Bear, Siberian Tiger, Cape Buffalo, Hippopotamus and Rhinoceros are researched. Particular attention should go to Attack spacing among large predators, Agility spacing among cats, Stamina relative to canids/hyenas, and Intelligence relative to social carnivores.

The current decimal scores are therefore serious first-pass recommendations, not immutable final numbers. The final 225-animal normalization audit should adjust them if later evidence exposes compression or inversion.
