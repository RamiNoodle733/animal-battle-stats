# Hyena research report

## 1. Identity and canonical specimen

- **Roster label:** Hyena
- **Resolved taxon:** Spotted hyena, *Crocuta crocuta* (Erxleben, 1777)
- **Family:** Hyaenidae
- **Living/extinct:** Living
- **Canonical combat specimen:** healthy mature **female**, representative mass **75.0 kg**, length **145.0 cm** head-body, shoulder height **85.0 cm**. The live site already resolves Hyena to *C. crocuta*, and the species is the largest living hyaenid.
- **Why female:** spotted hyenas reverse the usual mammalian size pattern. San Diego Zoo reports females about 10% heavier; SeaWorld gives 67-75 kg females versus 56-63 kg males; ADW gives females roughly 55 to >70 kg versus 45-60 kg males. Females also dominate adult males socially. A 75 kg healthy adult female is therefore a strong but representative fighting specimen, not the exceptional ~90 kg upper record sometimes quoted.
- **Population variation:** size varies geographically and among ecosystems. Published institutional ranges span roughly 40-86 kg overall, so the canonical value is not intended as a species maximum.

## 2. Physical measurements

### Mass, dimensions and build
San Diego Zoo gives **40-86 kg**, **1.2-1.8 m** length and **77-81 cm** shoulder height. SeaWorld gives sex-specific masses of **67-75 kg female** and **56-63 kg male**, with females 84-89 cm tall and males 79-86 cm. ADW reports **95-150 cm** body length, **75-85 cm** shoulder height and a **30-36 cm tail**. The animal is front-heavy, with a massive neck/head and forelimbs longer than the hind limbs.

The report uses 75.0 kg, 145.0 cm head-body length and 85.0 cm shoulder height as a representative large adult female. These are not record endpoints.

### Speed and endurance
San Diego Zoo reports spotted hyenas can run up to **50 km/h**, equivalent to **13.9 m/s**, and can trot at about **10 km/h** for long distances without tiring. The 50 km/h figure is retained as an institutional top-speed field, with moderate confidence because it is not an instrumented maximum-speed trial. Endurance is more important to the species' combat ecology than sprint speed: spotted hyenas pursue ungulates, patrol large territories and can maintain sustained travel.

### Lifespan
San Diego Zoo gives a **median life expectancy of 21 years**. ADW reports about 20 years in the wild and a captive maximum of 41 years and 1 month. The canonical field is **21.0 years**, representing a typical longevity metric rather than the exceptional captive maximum.

### Bite force, teeth and bone cracking
No canonical PSI is used. Direct bite-force work exists in Newtons, and Binder & Van Valkenburgh directly measured bite strength with a force transducer while documenting continued bite-strength development to about five years. Secondary summaries of that literature report several-kilonewton bites, but converting force to PSI requires a defensible contact area that the site does not possess. `bite_force_psi` is therefore **0.0**.

The important measured biology is durophagy. Tanner et al. (2008) used finite-element analysis on an adult *Crocuta* skull and showed that the vaulted forehead, sagittal crest and pneumatized fronto-parietal sinus distribute biting stresses and improve resistance to bending. Bone cracking shifts toward the rearmost premolars after permanent dentition develops, increasing mechanical advantage. The carnassials remain specialized for shearing flesh while robust premolars handle bone.

### Defensive structures
Spotted hyenas do not possess armor, a shell or unusually thick hide comparable with megafauna. Their defense is instead a robust skull/neck/forequarter complex, strong skeleton, substantial medium-carnivore body mass, high endurance and a willingness to continue dangerous contests. These improve toughness but should not be mislabeled as armor.

## 3. Proposed canonical factual fields

| Field | Proposed value | Confidence | Rationale |
|---|---:|---|---|
| `weight_kg` | **75.0** | High | Representative mature female near SeaWorld's 67-75 kg female range, below exceptional maxima |
| `height_cm` | **85.0** | High | Representative female shoulder height within published 75-89 cm institutional ranges |
| `length_cm` | **145.0** | High | Representative head-body length within ADW/institutional ranges, excluding tail |
| `speed_mps` | **13.9** | Moderate | San Diego Zoo 50 km/h maximum, converted by /3.6; not treated as an instrumented ceiling |
| `lifespan_years` | **21.0** | Moderate-high | San Diego Zoo median life expectancy; consistent with ~20-year wild references |
| `bite_force_psi` | **0.0** | High that PSI is unsupported | Bite force is documented in force units, but pressure cannot be inferred without contact area |

**Useful future fields:** `tail_length_cm: 33.0` representative midpoint; `sex: female`; `bite_force_newtons` should be added only after the project selects a specific adult measurement protocol and value rather than mixing modelled and direct trials.

## 4. Combat biology

### Primary weapons and offensive mechanics
The jaws are the decisive weapon. A spotted hyena can seize flesh, crush smaller bones and repeatedly process resistant carcass material with enlarged premolars. The neck and forequarters stabilize the skull during biting and pulling. Non-retractile claws provide traction rather than cat-like slashing weapons.

Against large ungulates, hyenas often use endurance, repeated bites and positional pressure rather than a single precision killing bite. Group hunts can dramatically improve success, but ABS individual ratings do not multiply one animal's Attack because clans exist.

### Defense, durability and pain tolerance
The animal's robust cranium is mechanically specialized to tolerate high feeding stresses. Strong neck and forequarters and a compact, durable carnivore frame support close contact. However, the skin is not armor and lions can kill hyenas. Defense therefore sits in the strong-medium range, with Toughness higher than Protection.

### Locomotion and maneuverability
The sloping back is a consequence of relatively long forelimbs, not evidence that the animal is crippled or inherently clumsy. Hyenas can accelerate, turn and fight effectively on land, but their build prioritizes economical distance travel and powerful feeding over cat-like explosive grappling agility. They are also competent swimmers. Agility should be clearly above megafauna but below similarly sized felids specialized for rapid directional changes and vertical grappling.

### Endurance
This is one of the species' strongest physical categories. Institutional references describe long-distance trotting at about 10 km/h without tiring, and field ecology consistently characterizes spotted hyenas as endurance hunters and wide-ranging foragers. Sustained pursuit can exhaust ungulate prey. Stamina therefore rates very strongly without turning a travel adaptation into extra Attack.

### Senses
Spotted hyenas use vision, hearing and olfaction in hunting, territoriality and social recognition. African Wildlife Foundation specifically notes excellent night vision and hearing. Scent marking and communal latrines also convey social and territorial information. No single sensory system reaches the extreme specialization of echolocating bats or scent-specialist canids, but the package is strong.

### Intelligence, learning and tactics
Spotted-hyena cognition is unusually well studied. Holekamp's Royal Society review documents individual recognition, kin recognition, knowledge of third-party kin and rank relationships, and adaptive use of that social information. Their societies show striking parallels to cercopithecine primates in size, hierarchy, competition and cooperation. Experimental cooperative-problem work also shows hyenas adjust behavior to partner experience and social context.

This supports high Intelligence and Tactics. It does **not** justify placing them at great-ape or human-like cognition, and the review explicitly notes greater reliance than primates on social facilitation and simple decision rules.

### Hunting and feeding behavior
The scavenger stereotype is misleading. Spotted hyenas actively hunt ungulates and can hunt alone or cooperatively. Group size can improve hunting success, with literature summarized in recent behavioral work showing large gains for wildebeest-calf hunts and increasing success from one to several hunters. They also exploit carrion exceptionally well because bone-cracking dentition and digestion allow access to resources many competitors leave behind.

### Intraspecific fighting and social dominance
Clans are matriarchal and can contain dozens of individuals. Females remain in natal clans while males generally disperse, and all adult females rank above immigrant adult males in the classic social system. Rank affects feeding access and coalition support. In direct contests, jaws and coalition behavior make escalation dangerous, but ritualized social information often helps resolve conflicts before severe injury.

### Environmental strengths
- Open savanna and grassland favor long-distance travel, visual tracking and pursuit.
- Dry environments reward efficient carcass use and the ability to digest bone and hide.
- Darkness does not remove effectiveness because hearing, smell and night vision remain useful.
- Group contexts greatly increase tactical options, though individual ABS power is not multiplied by hypothetical clanmates.

### Environmental limitations
- Dense vertical forest reduces the value of long pursuit and broad visual fields.
- Deep water removes most terrestrial traction and bite-delivery mobility.
- Heavy armor, shells and megafaunal mass can exceed what even bone-cracking jaws can practically disable in combat.
- Large felids, especially lions, remain dangerous competitors and can kill individual hyenas.

### Matchup archetypes
**Strong against:** similarly sized or smaller mammals lacking armor; opponents that fatigue quickly; wounded prey; carcass competitors vulnerable to repeated jaw attacks; medium opponents whose limbs can be seized and damaged.

**Weak against:** very large megafauna; heavily armored reptiles/mammals; large cats with superior explosive grappling and forelimb weaponry; opponents whose reach or mass prevents safe jaw engagement.

## 5. Proposed ABS substats

All values use the roster-wide absolute 0.1-100.0 scale and are independent of the legacy profile.

| Substat | Score | Justification |
|---|---:|---|
| Size | **42.0** | Large medium carnivore at ~75 kg, far below bears, great apes and megafauna |
| Raw Power | **55.0** | Strong neck, jaws and forequarters, but absolute muscular output remains below large cats/bears/apes |
| Weaponry | **73.0** | Highly effective bone-processing jaws and robust teeth, but essentially one dominant weapon system |
| Ferocity | **76.0** | Regular dangerous predation and competitive feeding; not a synonym for intelligence or power |
| Protection | **35.0** | Fur, hide and robust frame, but no true armor |
| Toughness | **67.0** | Strong skull/neck, durable frame and capacity for prolonged conflict; constrained by ordinary mammalian soft tissues |
| Maneuverability | **60.0** | Competent terrestrial fighter with good control, below felid-level explosive agility |
| Speed | **60.0** | Institutional top speed ~13.9 m/s, useful but not elite roster sprinting |
| Endurance | **82.0** | Long-distance trotting and pursuit are defining adaptations |
| Recovery | **53.0** | Robust mammalian recovery, but no exceptional regeneration or rapid physiological reset |
| Tactics | **84.0** | Flexible solo/group hunting, rank awareness, coalition behavior and context-sensitive cooperation |
| Senses | **70.0** | Strong hearing, night vision and olfaction with multimodal social recognition |
| Abilities | **68.0** | Durophagy, unusually efficient carcass processing and sophisticated social coordination have real matchup value |

## 6. Proposed six headline ABS ratings

- **Attack: 61.0** - a 75 kg predator with a mechanically specialized bone-cracking skull can inflict severe limb and tissue damage, but it remains well below large felids, bears and megafaunal weapons in absolute destructive capacity.
- **Defense: 53.0** - robust and difficult for similar-sized prey to disable, but lacking armor and vulnerable to larger predators.
- **Agility: 61.0** - capable terrestrial maneuvering and useful sprinting without confusing 50 km/h speed with agility or elevating it to felid levels.
- **Stamina: 83.0** - one of its strongest categories, grounded in sustained travel and pursuit ecology.
- **Intelligence: 78.0** - exceptional social cognition for a carnivore, including individual and third-party relationship knowledge and flexible cooperation, but below the roster's highest primate/cetacean cognition anchors.
- **Special: 72.0** - bone-cracking cranial architecture, carcass-processing physiology and clan-level social information create unusual matchup tools without double-counting jaw damage already represented in Attack.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Bone-Vault Crusher** - vaulted cranial architecture, sagittal crest, enlarged jaw musculature and robust premolars distribute feeding stresses and permit repeated bone cracking. In combat this makes limb/joint bites unusually damaging for a carnivore of this mass.
2. **Clan Calculus** - spotted hyenas recognize individuals, rank and third-party social relationships and adjust cooperation to social context. In any matchup permitting allies, this supports unusually efficient coordination; in a one-on-one fight it contributes tactical reading rather than imaginary extra bodies.

### Unique traits
1. **Female-Heavy Hierarchy** - females are larger on average and socially dominant, making a mature female the biologically appropriate canonical fighter.
2. **Durophage Generalist** - specialized teeth, skull mechanics and digestion let the species exploit skin, connective tissue and bone that many carnivores leave behind, supporting exceptional ecological resilience.

## 8. Expanded profile

### Habitat and geographic range
Spotted hyenas occupy much of sub-Saharan Africa in savannas, grasslands, shrublands, woodlands, semi-desert and some mountainous habitats. They avoid the most extreme deserts and are not tropical-rainforest specialists. WWF gives a broad habitat set extending into mountainous areas, while AWF reports occurrence up to about 4,000 m.

### Diet and ecology
They are carnivorous generalists centered on medium and large vertebrate prey, especially ungulates, but also consume carrion and smaller prey. Their ecological niche combines active predation with unusually complete carcass utilization. This is why calling them simply scavengers is inaccurate.

### Social structure
Spotted hyenas live in fission-fusion clans that can become very large in prey-rich ecosystems. Female philopatry, male dispersal, linear dominance hierarchies, coalition formation and individual recognition produce a complex social environment. Clan membership should inform Intelligence/Tactics, but individual physical scores remain individual.

### Reproduction and life history
San Diego Zoo gives gestation at **98-111 days**, usually **two young**, and maturity around **three years**. Cubs are born relatively developed with erupted teeth. The female's elongated clitoris/pseudopenis makes the reproductive anatomy highly unusual among mammals and makes first birth physiologically costly. This anatomy is biologically important but is not treated as a combat ability.

### Conservation
Current major conservation organizations list *C. crocuta* as **Least Concern**, with an estimated global population on the order of **27,000-47,000** and a decreasing trend in many areas. Major pressures include persecution, poisoning, trapping, habitat loss/fragmentation and conflict over livestock.

### Major adaptations
- Bone-cracking skull and premolars with stress-dissipating cranial architecture.
- Large jaw adductors and strong neck/forequarters.
- Endurance-oriented terrestrial locomotion.
- Multimodal individual recognition and sophisticated clan social cognition.
- Highly efficient digestion and carcass utilization.

### Human interaction
Hyenas are frequently persecuted where livestock losses occur and have a longstanding negative cultural reputation. That reputation obscures their role as active predators and scavengers that remove carcasses and recycle nutrients. Human-hyena conflict is a major conservation problem outside protected areas.

### Fun facts
- Females are larger than males, an uncommon pattern among large terrestrial carnivores.
- Their clans can reach dozens of animals and have primate-like social complexity in several measurable respects.
- Bone cracking is supported by specialized cranial geometry, not simply an oversized generic bite.
- San Diego Zoo reports they can eat about one-third of their body weight in one meal.
- Cubs do not reach adult feeding performance immediately after weaning; direct bite studies found bite strength continuing to increase for years after much skull growth had plateaued.
- Hyenas are more closely related to feliform carnivores than to dogs despite their superficially dog-like build.

### Concise site summary
The spotted hyena is a female-dominated African endurance predator built around powerful bone-cracking jaws, durable forequarters and unusually sophisticated social cognition. Its greatest battle strengths are repeated jaw damage, stamina and tactical flexibility, not armor or cat-like agility.

### Rich narrative profile
A spotted hyena is not a wolf with a sloping back and it is not merely a scavenger. Its skull is a specialized load-bearing feeding machine. Robust premolars sit where mechanical advantage is high, the forehead is vaulted, and cranial sinuses help spread stress during unilateral bone cracking. That makes the jaw system unusually effective at repeatedly processing resistant material. On a 75 kg adult female, those mechanics produce a serious medium-predator weapon without requiring a fabricated PSI number.

The rest of the animal is built to keep that weapon working. Strong forequarters and neck stabilize the head, broad paws support terrestrial travel, and the locomotor system favors economical distance coverage. Spotted hyenas can run quickly when necessary, but their deeper advantage is that they can keep going. Against prey that cannot escape immediately, repeated pursuit and pressure turn fatigue into an offensive opening.

Their cognitive ecology is equally important. A clan is not a simple mob. Individuals know ranks, relationships and identities and can alter behavior according to who is present. This gives spotted hyenas some of the best-supported social cognition among non-primate terrestrial carnivores. ABS should reward that in Intelligence and Tactics while still treating a one-on-one fight as one animal. The result is a dangerous but correctly scaled profile: far more formidable than small canids and mid-sized generalists, yet still physically below the largest cats, bears, great apes and megafauna.

### Future structured-field proposals
- `canonical_sex: female`
- `tail_length_cm`
- `bite_force_newtons` with explicit measurement/model context
- `locomotion_mode: cursorial_endurance`
- `social_system: fission_fusion_matriarchal_clan`
- `bone_cracking_specialist: true`
- `iucn_status`
- `population_trend`

## 9. Mandatory image section

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/hyena.png` **(not created)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Spotted_Hyena_(Crocuta_crocuta)_female_..._(53024319975).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/9/9f/Spotted_Hyena_%28Crocuta_crocuta%29_female_..._%2853024319975%29.jpg
- `file_format_verified`: source is a genuine JPEG photograph; final PNG absent
- `alpha_verified`: **false**
- `full_body_verified`: **false**
- `adult_verified`: **not explicit in source metadata**
- `sex_verified_or_unknown`: **female, explicitly identified by source metadata**
- `license_status`: **CC BY-SA 2.0, Flickr license independently reviewed on Commons**
- `notes`: Source is exact *C. crocuta*, one female, 3639x5143 and reusable. Visual inspection shows head, torso and all four feet, but the tail is not visibly complete, so it fails the mandatory strict full-body standard despite excellent resolution. A second 6603x4402 exact-species CC BY-SA photograph by Diego Delso was visually inspected but also does not establish sex/adulthood and does not improve the strict tail requirement. No source is promoted merely because it is large. Current GitHub contents writers are text-only, so no PNG binary can be produced or committed in this run.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding/context | Confidence / caveat |
|---|---|---|---|---|
| San Diego Zoo Wildlife Alliance, Spotted Hyena | https://animals.sandiegozoo.org/animals/spotted-hyena | size, dimorphism, speed, lifespan, life history | 40-86 kg; females ~10% heavier; 1.2-1.8 m; 77-81 cm; 50 km/h; 10 km/h long-distance trot; median 21 y | High institutional; top speed not an instrumented trial |
| Animal Diversity Web, *Crocuta crocuta* | https://animaldiversity.org/accounts/Crocuta_crocuta/ | morphology, sex size, tail, behavior, longevity | females larger; 95-150 cm; 75-85 cm; tail 30-36 cm; ~20 y wild | High-moderate synthesis |
| SeaWorld, Spotted Hyena | https://seaworld.org/animals/facts/mammals/spotted-hyena/ | sex-specific size | female 67-75 kg, 84-89 cm; male 56-63 kg, 79-86 cm | High institutional |
| Tanner et al. 2008, Biological Journal of the Linnean Society | https://doi.org/10.1111/j.1095-8312.2008.01052.x | skull mechanics | adult FE model; vaulted forehead/sinus/sagittal crest dissipate bite stress | High, peer reviewed |
| Binder & Van Valkenburgh, Journal of Zoology | https://doi.org/10.1111/j.1469-7998.2000.tb00622.x | bite development and tooth use | direct force-transducer work; bite strength rises to ~5 y; rear premolars improve mechanical advantage | High; study emphasizes ontogeny, not a universal adult PSI |
| Holekamp 2007, Philosophical Transactions B | https://doi.org/10.1098/rstb.2006.1993 | social cognition | individual/kin/third-party rank recognition and adaptive social decisions | High, peer reviewed |
| Duke University / Drea cooperative study summary | https://today.duke.edu/2009/09/hyenas.html | cooperation | behavior adjusted to partner experience and social context | Moderate-high institutional summary of experimental work |
| WWF, Spotted Hyena | https://www.worldwildlife.org/species/spotted-hyena/ | conservation, ecology, range | Least Concern; 27,000-47,000; endurance predator | High conservation organization |
| African Wildlife Foundation, Hyena | https://www.awf.org/wildlife-conservation/hyena | senses, habitat, threats | excellent night vision/hearing; broad African habitats; persecution/conflict | High conservation organization |
| Wikimedia Commons, Bernard Dupont female | https://commons.wikimedia.org/wiki/File:Spotted_Hyena_(Crocuta_crocuta)_female_..._(53024319975).jpg | image provenance | exact female; 3639x5143; CC BY-SA 2.0; FlickrReview verified | High provenance; adulthood/tail completeness unresolved |

### Source conflicts and uncertainty
- **Mass:** institutional ranges overlap but differ because of sex, population and sampling. Canonical 75 kg intentionally uses a large representative female, not the 86-90 kg extreme.
- **Length:** some references mix head-body and total length. Canonical 145 cm is treated as head-body and tail is recorded separately.
- **Speed:** 50 km/h is retained from San Diego Zoo with moderate confidence. It should not be treated as a laboratory-certified physiological maximum.
- **Bite:** direct and modelled force literature should not be mixed. No PSI is supplied because pressure requires contact area.
- **Hunting percentage:** popular sources disagree over the proportion hunted versus scavenged, and it varies by ecosystem. No universal percentage is promoted to a canonical field.

## 11. Cross-animal normalization notes

- **Versus African Wild Dog:** Hyena should be substantially higher in individual Raw Power, Weaponry, Defense and Toughness. Wild dogs retain excellent endurance and cooperative hunting, but their strongest ecological advantage is also group-based.
- **Versus Cheetah:** Hyena is much slower in top speed but materially stronger, tougher and better armed. Cheetah should remain more agile and explosive.
- **Versus Honey Badger:** Hyena is several times heavier and therefore higher in absolute Attack/Raw Power. Honey Badger can retain a higher unusual-defense/Special profile without matching hyena physical output.
- **Versus Hippopotamus:** the 75 kg hyena must remain far below a 1,800 kg hippo in Attack, Defense, Size and Raw Power. Bone-cracking specialization cannot erase the mass gap.
- **Anti-inflation check:** high Intelligence and Stamina are independently supported. Clan behavior is not allowed to multiply solo Attack, and bone-cracking mechanics are not counted as both extreme Protection and extreme Attack.

**Final verification:** exactly two named special abilities and exactly two unique traits are present; all six headline ratings use one decimal; current substats are independently rescored; unsupported PSI is 0.0; image status is not marked complete.