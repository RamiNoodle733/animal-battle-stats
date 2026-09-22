# Naked Mole Rat (*Heterocephalus glaber*)

## 1. Identity and canonical specimen

- **Common name:** Naked mole-rat
- **Scientific name:** *Heterocephalus glaber* Rüppell, 1842
- **Taxon represented:** the living East African naked mole-rat, family Heterocephalidae/Bathyergidae sensu source taxonomy.
- **Living or extinct:** Living.
- **Canonical combat specimen:** a healthy, fully grown **large non-breeding subordinate / soldier-type adult**, sex unspecified, approximately **57.0 g**. Smithsonian reports ordinary adults at 28–42 g, soldiers to 57 g, and queens to 71 g. The larger defensive worker is more appropriate to a one-animal combat profile than the reproductive queen because colony defense is a normal subordinate role and direct bite-force work found subordinate animals unusually strong for body mass.
- **Sex choice:** no male combat advantage is established. Direct bite-force experiments found sex approached but did not reach a significant effect, while caste/body mass mattered. Sex is therefore left unknown rather than inferred.
- **Dimorphism/caste note:** size varies more conspicuously with reproductive/social status than with sex. Queens are the largest colony members; larger non-breeding animals perform more force-intensive digging and defense. This report does not treat eusocial castes as rigid insect-like morphological castes.

## 2. Physical measurements and uncertainty

### Mass
Smithsonian gives 28–42 g for typical animals, up to 57 g for soldiers and 71 g for queens. A 2019 in-vivo bite-force study sampled adult subordinate animals at 32.4–76.6 g (mean 56.05 g) and dominant animals at 54.0–94.1 g (mean 74.26 g). The **57.0 g** canonical value represents a large defensive subordinate without selecting an exceptional queen or the heaviest laboratory individual.

### Length and height
San Diego Zoo reports **8–10 cm body length** and tail length up to **8 cm**; Smithsonian gives a usual body length of 7.5 cm. Use **10.0 cm body length** as the canonical `length_cm` for the large defensive adult. A reliable standardized standing height is not biologically useful for this low, cylindrical burrower, so `height_cm` is **0.0** pending a defensible measurement.

### Speed
No robust species-specific maximum sprint speed was recovered. A recent comparative locomotion paper cites a secondary report that naked mole-rats are about 1.3 times faster forward than backward, but does not provide the experimental conditions needed for a maximum-speed field. The animal is well adapted to rapid bidirectional tunnel movement, but **`speed_mps = 0.0`** rather than recycling the live site's unsupported 36 km/h placeholder.

### Longevity
Naked mole-rats are extraordinary for a mouse-sized rodent. A large eLife demographic dataset reported survival beyond 30 years without the usual age-associated exponential increase in mortality hazard over the observed range. A 2024 *Nature Communications* paper describes a **37-year lifespan**. Use **37.0 years** as a demonstrated maximum-longevity anchor, not an expected wild lifespan.

### Bite force
Direct in-vivo measurements exist. Adult subordinate animals averaged **21.07 ± 8.89 N** maximum incisor bite force, with a **7.74–35.95 N** observed range; dominant adults averaged **19.82 ± 4.68 N** with a 13.88–28.25 N range. The study found subordinate bite force about 65% above the cross-mammal prediction for their body mass. This is force, not pressure. No defensible tooth contact area was provided, so **`bite_force_psi = 0.0`**. The measured Newton values belong in narrative evidence, not fabricated PSI.

### Teeth and jaw apparatus
The four continuously growing incisors project outside the oral cavity. Smithsonian reports that roughly **25% of an individual's muscle mass is involved in jaw closure**. The lips close behind the incisors during excavation, preventing soil ingestion. Neurophysiology also shows an unusually large cortical representation of the incisors, and naked mole-rats can move the lower incisors independently, making the teeth both weapons and precise tactile/manipulatory tools.

### Defensive anatomy
There is no armor, thick shell, heavy hide, horn boss, or large body mass. Loose, wrinkled skin and a cylindrical body aid movement in tight tunnels. Physiological defenses are much more exceptional than mechanical protection: extreme hypoxia/anoxia tolerance and selective insensitivity to acid/capsaicin pain are well demonstrated. Those traits should not be mistaken for resistance to crushing, puncture, laceration, or blood loss.

## 3. Proposed canonical factual fields

| Field | Proposed value | Basis / confidence |
|---|---:|---|
| `weight_kg` | **0.057** | Large defensive subordinate/soldier value from Smithsonian; high confidence for the chosen specimen class. |
| `height_cm` | **0.0** | No defensible standardized standing-height measurement recovered; not a useful morphology field here. |
| `length_cm` | **10.0** | Upper end of San Diego Zoo adult body-length range; moderate-high confidence. Tail is additional and can reach ~8 cm. |
| `speed_mps` | **0.0** | No defensible measured species maximum recovered. |
| `lifespan_years` | **37.0** | Demonstrated species longevity reported in 2024 comparative physiology literature; maximum, not average. |
| `bite_force_psi` | **0.0** | Bite force is directly measured in N, but PSI would require an unsupported contact area. |

**Additional factual field proposal:** `bite_force_n = 21.1` as a representative measured subordinate-adult mean, with an observed sample maximum of 35.95 N. This is preferable to forcing a pressure unit.

## 4. Combat biology

### Primary weapons
The primary weapons are the large, continuously growing incisors driven by disproportionately developed jaw musculature. They are used to excavate hard-packed soil, manipulate objects, establish dominance, and defend the colony. Direct testing demonstrates a remarkable bite for the animal's mass. Absolute damage remains tiny compared with medium or large vertebrates, but against similarly tiny opponents the incisors are a serious puncturing/cutting tool.

### Secondary weapons
Short limbs and claws assist excavation and close-quarters scrambling, but the teeth dominate offensive biology. There is no venom, toxin delivery, horn, stinger, quill, or specialized killing claw.

### Offensive mechanics
In its native tunnel geometry the animal can approach head-first, bite in very close quarters, reverse rapidly without turning around, and exploit a passage barely wider than its body. Larger subordinate animals are documented defenders. A direct bite study notes that subordinate animals initiated biting sooner than dominant animals and links strong incisor performance to defensive and excavation demands.

### Defensive adaptations and durability
Mechanical defense is poor on the full-roster scale. At 57 g, a naked mole-rat is vulnerable to any much larger opponent that can reach it. Its exceptional defenses are physiological. In laboratory experiments it survives **18 minutes of total anoxia without apparent injury** and hours of extreme hypoxia. It also lacks normal pain behavior to acid and capsaicin, while retaining other nociception including formalin responses and mechanical hyperalgesia. Therefore the correct interpretation is **selective pain insensitivity**, not “cannot feel pain.”

### Hypoxia/anoxia mechanism
During anoxia, naked mole-rat tissues switch to fructose-fueled anaerobic glycolysis. Fructose accumulates and is metabolized in the brain, supported by broad GLUT5 expression and ketohexokinase. This metabolic rewiring bypasses a glycolytic bottleneck that normally makes oxygen deprivation rapidly lethal to mammals. It is highly relevant in sealed or poorly ventilated environments but does not make the animal immune to traumatic injury.

### Locomotion and maneuverability
The cylindrical body, loose skin, short limbs, tactile body hairs and bidirectional tunnel locomotion make it extremely competent in narrow burrows. It can travel forward and backward without needing to turn. This warrants good maneuverability for a tiny mammal in confined spaces, but not an invented high open-ground top speed.

### Endurance and recovery
Hypoxia tolerance is exceptional, and the species can remain functional in oxygen conditions that incapacitate ordinary mammals. Longevity and unusual aging biology are also remarkable, but long lifespan is not automatically fight stamina. Thermal physiology is a limitation: naked mole-rats rely heavily on behavioral and social thermoregulation, huddling and moving within the burrow thermal gradient. Stamina is therefore high for adverse respiratory conditions, not universally elite under every arena condition.

### Senses
Vision is very poor. Smithsonian describes tiny eyes and virtual blindness. Smell is important, and animals are highly sensitive to ground vibration and air movement. Rows of tactile hairs over the body and tail support navigation, while the somatosensory cortex gives unusually large representation to the incisors. In darkness and tunnels this is a strong close-range sensory suite; at distance and in visually complex open terrain it is disadvantaged.

### Intelligence, learning, communication and tactics
Naked mole-rats live in highly organized eusocial colonies averaging about 70 individuals and documented up to 295. They coordinate excavation, food transport, pup care, thermoregulation and defense. Communication uses a rich vocal repertoire, and modern work has demonstrated colony-specific vocal dialects and social vocal learning. These behaviors support strong communication and social coordination. They do not justify primate-level general problem solving, and the canonical battle remains one animal rather than an entire colony.

### Fighting and colony defense
Large workers act as defenders. Smithsonian describes soldier animals piling at tunnel entrances when predators attempt entry; snakes are important predators. Females may fight lethally when a queen dies and the reproductive vacancy opens. The species therefore has genuine intraspecific aggression and defensive combat behavior despite its herbivorous diet.

### Predation and diet
This is not a predator. It primarily consumes underground plant storage organs such as tubers and roots and practices coprophagy to improve nutrient extraction. Strong incisors evolved chiefly for digging and processing tough underground resources, with defense as a secondary combat use.

### Environmental strengths
- Narrow underground tunnels strongly favor its body plan, tactile senses and bidirectional locomotion.
- Low-oxygen/high-CO2 conditions that disable many mammals are unusually tolerable.
- Darkness removes much of its visual disadvantage.
- Tight passages reduce a larger opponent's ability to turn or bring multiple weapons to bear.

### Environmental weaknesses
- Open terrain removes most of the tunnel geometry advantage.
- Tiny mass and lack of armor make it mechanically fragile against larger animals.
- Poor vision is more costly in open environments.
- Unusual thermoregulation creates dependence on suitable ambient conditions and behavioral compensation.

### Matchup archetypes
**Best relative matchups:** similarly tiny soft-bodied opponents; small attackers forced into a narrow tunnel; opponents whose strategy depends on oxygen deprivation or irritating acidic/capsaicin-like chemical pain pathways.

**Worst matchups:** virtually any medium or large vertebrate in open terrain; armored opponents that its incisors cannot penetrate; fast aerial attackers; crushing/stomping opponents; animals able to pull it from cover.

## 5. Proposed ABS substats

All values use the roster-wide absolute 0.1–100.0 scale, not pound-for-pound scaling.

| Substat | Score | Justification |
|---|---:|---|
| **Raw Power** | **5.0** | Exceptional proportional jaw investment does not erase a 57 g total mass. Absolute force remains tiny. |
| **Weaponry** | **16.0** | Continuously growing external incisors and directly measured strong bite are effective at its scale, but reach and absolute damage are very low roster-wide. |
| **Ferocity** | **44.0** | Large workers defend colonies against snakes and reproductive succession can involve lethal female fighting. |
| **Protection** | **7.0** | No armor or major mechanical barrier; loose skin is locomotor, not serious armor. |
| **Toughness** | **31.0** | Extraordinary physiological stress tolerance, but low mass and soft tissues remain vulnerable to trauma. |
| **Maneuverability** | **70.0** | Highly specialized forward/backward tunnel movement, loose skin, compact body and tactile guidance. |
| **Speed** | **25.0** | Mobile in tunnels, but no defensible high maximum speed and no evidence for elite open-ground velocity. |
| **Endurance** | **82.0** | Hours of extreme hypoxia and 18 min anoxia survival are exceptional mammalian respiratory endurance traits. |
| **Recovery** | **74.0** | Demonstrated recovery from severe oxygen deprivation without apparent injury supports a high score, while trauma recovery is not shown to be comparably exceptional. |
| **Tactics** | **73.0** | Eusocial division of labor, coordinated tunnel defense, colony communication and learned social signals are strong, though much is group-context dependent. |
| **Senses** | **67.0** | Weak vision offset by smell, vibration/air-current sensitivity, body tactile hairs and extraordinary tooth somatosensation. |
| **Abilities** | **95.0** | Fructose-driven anoxia tolerance plus selective acid/capsaicin pain insensitivity are rare, experimentally demonstrated mammalian specializations. |

## 6. Proposed six headline ABS ratings

- **Attack: 14.0** — the incisors and ~21 N representative subordinate bite are formidable for 57 g, but ABS is absolute. A tiny herbivorous rodent cannot be scored near mongoose, monitor lizard, wolf or large ungulate attack simply because its bite-force quotient is impressive.
- **Defense: 24.0** — physiological resistance to hypoxia and selected painful irritants is exceptional, but mechanical defense is extremely poor. Defense therefore stays low rather than converting metabolic resilience into imaginary armor.
- **Agility: 72.0** — excellent close-quarters tunnel control, bidirectional movement and tactile navigation justify a strong agility score without using an unsupported top speed.
- **Stamina: 83.0** — extreme hypoxia and anoxia tolerance provide direct evidence for sustained function under respiratory stress. Thermal dependence prevents a still higher universal rating.
- **Intelligence: 76.0** — complex social organization, communication, learned colony dialects, cooperative work and coordinated defense support high behavioral sophistication, but not primate/cetacean-level general cognition.
- **Special: 96.0** — one of the roster's most unusual mammalian physiology packages. This reflects genuinely matchup-changing anoxia metabolism and selective pain-pathway modifications, not body size or intelligence counted twice.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Fructose Anoxia Switch** — under total oxygen deprivation, naked mole-rat tissues can switch to fructose-driven anaerobic glycolysis; laboratory animals survived 18 minutes of anoxia without apparent injury. This can preserve function in suffocating environments that would rapidly incapacitate ordinary mammals.
2. **Acid-Pain Dead Zone** — naked mole-rats show a selective absence of normal pain behavior to acid and capsaicin and lack acid sensitivity in relevant primary afferent nociceptors. This reduces impairment from specific chemical irritants but does not block mechanical injury or all pain.

### Unique traits
1. **Incisor Sensor-Tools** — permanently external, independently maneuverable lower incisors combine digging, biting, object manipulation and unusually large somatosensory cortical representation.
2. **Eusocial Tunnel Defender** — large non-breeding animals participate in cooperative tunnel maintenance and predator defense within one of the very few true eusocial mammalian systems.

## 8. Expanded profile

### Habitat and range
Naked mole-rats occupy underground burrow networks in grassy, semi-arid parts of eastern Africa, including Ethiopia, Kenya, Djibouti and Somalia. Smithsonian reports tunnel diameters around 4 cm, depths reaching about 2 m, and colony systems totaling up to about 4 km of tunnel.

### Diet and ecology
They are primarily subterranean herbivores specializing on roots and succulent tubers. A large tuber may support repeated feeding because animals can eat internal tissue while leaving the exterior sufficiently intact for continued plant survival. Gut microbes help process the cellulose-rich diet, and coprophagy improves nutrient recovery. They obtain their water from food rather than routinely drinking.

### Social system
Colonies average roughly 70 but may reach nearly 300 animals. One queen breeds with a small number of males, while non-breeding animals forage, excavate, transport soil, care for young and defend the colony. This is true eusociality in a mammal, but individuals remain behaviorally flexible enough that reproductive status can change when colony structure changes.

### Reproduction and life history
Gestation is about 70 days. Smithsonian reports a queen can produce a litter about every 80 days, potentially up to five per year, with an average near 12 and maxima around 30. Young begin work behaviors within weeks and can become physiologically capable of reproduction around one year.

### Conservation
Smithsonian currently presents the species as **Least Concern** and notes no immediate major threat, although agricultural conflict and habitat fragmentation may matter locally. The species is well represented in zoological research colonies.

### Major adaptations
The animal's biology is a coherent response to a crowded subterranean niche: huge relative jaw musculature for tooth digging, lips sealing behind the incisors, tactile body hairs, poor reliance on vision, vibration/air-current sensitivity, behavioral thermoregulation, hypoxia tolerance and highly cooperative colony behavior.

### Human interaction
Naked mole-rats are major biomedical research organisms for aging, cancer biology, nociception, cardiovascular physiology and oxygen-deprivation biology. In agricultural areas they can be considered pests when they consume crop roots and tubers.

### Genuine fun facts
- Roughly one quarter of the animal's muscle mass is associated with jaw closure.
- It can move its lower incisors independently.
- Laboratory animals have survived 18 minutes with no oxygen and recovered without apparent injury.
- Naked mole-rats can travel both forward and backward through tunnels, useful when passages are too narrow to turn around.
- Their somatosensory cortex devotes an unusually large area to the incisors.
- They are the longest-lived known rodents, with individuals documented into their 30s.
- They are not actually hairless: sparse tactile hairs and toe hairs have sensory and soil-sweeping roles.

### Concise site-ready summary
The naked mole-rat is a tiny East African eusocial burrower whose absolute fighting power is low but whose biology is extraordinary. Oversized jaw muscles drive external digging incisors, while specialized sensory hairs and tooth touch guide it through dark tunnels. Its standout advantage is physiological: it can survive extreme hypoxia, endure 18 minutes of laboratory anoxia through fructose-powered metabolism, and ignores some acid/capsaicin pain signals. In open combat it is mechanically fragile; in a cramped, oxygen-poor tunnel it is one of the roster's strangest specialists.

### Rich narrative profile
A naked mole-rat is easy to underestimate if battle ability is judged only by size. At roughly the mass of a small handful of coins, it has almost no answer to the raw mechanics of a fox, mongoose or larger predator. Yet its head is built around an unusually serious tool. The incisors sit outside the lips, can be manipulated with surprising precision, and are powered by jaw musculature vastly overbuilt for an ordinary mouse-sized mammal. Direct experiments confirm that the bite is substantially stronger than body mass alone predicts.

Its real advantage is not conventional damage. Naked mole-rats evolved in long, crowded burrow systems where darkness, stale air and narrow geometry define the rules. Vision contributes little. Touch, vibration, smell and the incisors themselves help map the immediate world. The animal can reverse through a tunnel without turning, and a defender can confront an intruder where the passage limits the attacker's angles.

The physiology is more unusual still. When oxygen disappears completely, most mammals lose neural function within minutes. Naked mole-rats can suppress demand and redirect metabolism, using fructose to keep glycolysis running. Their pain system is also selectively altered so acid and capsaicin do not provoke the normal responses, likely useful in carbon-dioxide-rich burrows. These are not invulnerability feats. A bite, talon, crush or stomp still causes real tissue damage. The correct ABS interpretation is therefore a tiny animal with low Attack and Defense but exceptionally high Stamina and Special, plus strong tunnel-specific Agility and social Intelligence.

## 9. Future structured-field proposals

- `bite_force_n`: preserve direct force measurements without inventing PSI.
- `anoxia_survival_min`: laboratory demonstrated survival duration, context-tagged.
- `hypoxia_tolerance`: qualitative/experimental evidence field.
- `canonical_social_role`: large subordinate defender.
- `locomotion_context`: subterranean/bidirectional.
- `thermoregulation_mode`: behaviorally dependent / unusually poor homeothermy.
- `sensory_specialization`: tactile incisors/body hairs, vibration, smell.

## 10. Image requirement audit

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/naked-mole-rat.png` (not present; no completion claimed)
- `source_page_url`: https://www.si.edu/object/naked-mole-rat%3Anzp_NZP-20111005-162MM-000001
- `original_photo_url`: https://ids.si.edu/ids/deliveryService?id=NZP-20111005-162MM-000001
- `file_format_verified`: source is a real Smithsonian photograph; final PNG not created or verified
- `alpha_verified`: **false**
- `full_body_verified`: **false**
- `adult_verified`: **false**
- `sex_verified_or_unknown`: **unknown**
- `license_status`: **Public domain / Smithsonian Open Access, metadata CC0**
- `notes`: Broad search included Smithsonian, Commons, PBS Photo Ark, American Society of Mammalogists and general image discovery. The Smithsonian source has excellent provenance and a simple dark background, but the accessible presentation does not establish strict complete tail/rear-body framing or adulthood. A 1864x1472 reusable Commons wild photograph was directly inspected and rejected because the animal is heavily obscured in a burrow. PBS/Photo Ark imagery has clean studio framing but the reviewed image crops the rear body/tail and redistribution rights were not established. Therefore no source is promoted to `FULL-BODY SOURCE FOUND`, and no PNG is claimed. Current GitHub writer is UTF-8 text-only and cannot commit the required binary even if a source is later certified.

## 11. Evidence and source ledger

| Source | Direct URL | Supports | Finding | Confidence / caveat |
|---|---|---|---|---|
| Smithsonian National Zoo, Naked mole-rat | https://nationalzoo.si.edu/animals/naked-mole-rat | taxonomy, size, range, lifespan, senses, sociality, diet, burrows, jaws, reproduction, conservation | 28–42 g usual; soldiers to 57 g; queens to 71 g; ~7.5 cm usual body; 10–30 y stated lifespan; eusocial colony; 25% muscle mass involved in jaw closure | **High** institutional synthesis; longevity page wording is older than newer 37-y literature |
| San Diego Zoo, Naked mole-rat | https://animals.sandiegozoo.org/animals/naked-mole-rat | dimensions, maturity, jaw fact, locomotion | 8–10 cm body, tail to 8 cm, 30–50 g, full grown by ~1 y, forward/backward tunnel movement | **High-moderate** zoological synthesis |
| Hart et al., *Nature Communications* 2024 | https://doi.org/10.1038/s41467-024-46470-x | longevity, cardiometabolic/hypoxia adaptations | describes 37-y lifespan and extraordinary hypoxia resistance | **High**, peer-reviewed; 37 y is maximum longevity, not average |
| Ruby, Smith & Buffenstein, eLife 2018 | https://elifesciences.org/articles/31157 | longevity/aging | >3,000 historical data points; mortality hazard did not increase with age across observed range | **High**, peer-reviewed; interpretation of “non-aging” has published debate, so report uses the observation rather than claiming literal immortality |
| Park et al., *Science* 2017 via MDC | https://www.mdc-berlin.de/research/publications/fructose-driven-glycolysis-supports-anoxia-resistance-naked-mole-rat | anoxia mechanism | 18 min total anoxia survival without apparent injury; fructose-driven glycolysis, GLUT5 and ketohexokinase | **Very high**, primary experimental research |
| Ilacqua et al., *Biology Letters* 2017 | https://doi.org/10.1098/rsbl.2017.0545 | behavioral hypoxia/anoxia tolerance | hours at 3% O2, days at 8% O2, 18 min anoxia summarized and behavioral responses studied | **High**, peer-reviewed |
| Browe et al., *Anatomical Record* | https://anatomypubs.onlinelibrary.wiley.com/doi/10.1002/ar.23996 | adult mass/morphology, pain/sensory context | adults ~25–60 g; external incisors; tiny eyes; no pinnae; loose skin | **High**, peer-reviewed review |
| Henry et al., Frontiers 2019 | https://www.frontiersin.org/journals/integrative-neuroscience/articles/10.3389/fnint.2019.00070/full | direct bite force, caste effects | subordinate adults 21.07 ± 8.89 N, 7.74–35.95 N range; dominant 19.82 ± 4.68 N; subordinate bite 65% above body-mass prediction across mammals | **Very high**, direct in-vivo measurement; does not support PSI |
| Park et al., PLoS/primary sensory work via PubMed | https://pubmed.ncbi.nlm.nih.gov/18232734/ | pain biology | no normal behavioral response to acid/capsaicin; acid-insensitive afferents; mechanical/formalin pain remains | **Very high**, primary experiment; explicitly selective, not global analgesia |
| Catania & Remple, somatosensory cortex | https://pmc.ncbi.nlm.nih.gov/articles/PMC122833/ | tactile hairs/incisor cortical specialization | postcranial sensory hairs aid navigation; lower incisors independently movable; strong tooth cortical representation | **Very high**, primary neurophysiology/behavior |
| Animal Diversity Web | https://animaldiversity.org/accounts/Heterocephalus_glaber/ | diet, predators, ecology | tuber/root herbivory; rufous beaked snakes documented predators; larger animals defend colonies | **Moderate-high** academic synthesis |
| Smithsonian Open Access image record | https://www.si.edu/object/naked-mole-rat%3Anzp_NZP-20111005-162MM-000001 | image provenance | exact *H. glaber*, National Zoo, Mehgan Murphy, public domain / CC0 metadata | **High provenance**, but adulthood and strict full-body framing unresolved |
| Wikimedia Commons, Bernard Dupont photo | https://commons.wikimedia.org/wiki/File:Naked_Mole_Rat_(Heterocephalus_glaber)_(7662741774).jpg | image alternative | exact species, 1864x1472, CC BY-SA 2.0, wild Kenya | **High provenance**, visually rejected because body is obscured |

## 12. Source conflicts and uncertainty

1. **Longevity:** older zoo pages commonly say 10–30 or 30+ years, while recent physiology literature reports a 37-year lifespan. `37.0` is treated as a demonstrated maximum, not a typical adult lifespan.
2. **Body mass:** typical adults are often 28–42 g, but social status produces larger soldiers and queens. The canonical 57 g value intentionally represents a large defensive subordinate rather than an average worker.
3. **Bite force:** force is well measured in Newtons, but no PSI is defensible without tooth contact area. The live 100 PSI value is rejected.
4. **Speed:** the live 36 km/h value is unsupported by the recovered literature. It is replaced by 0.0 pending measurement.
5. **Pain:** claims that the species “does not feel pain” are false simplifications. Acid/capsaicin responses are selectively reduced while mechanical and other nociception persists.
6. **Cancer resistance:** naked mole-rats have unusually low spontaneous cancer incidence and important anticancer mechanisms, but cancer resistance is irrelevant to an acute battle and is not used to inflate Defense.

## 13. Cross-animal normalization notes

- **Versus Meerkat (0.75 kg, Attack 18.0):** the naked mole-rat is more than an order of magnitude lighter. Even with exceptional proportional bite force, Attack must remain below Meerkat. Proposed 14.0 preserves that absolute gap while acknowledging real incisors.
- **Versus Mongoose (0.8 kg, Attack 20.0):** the carnivorous mongoose has much greater absolute mass, reach and predatory weapon delivery. Naked mole-rat Attack remains clearly lower.
- **Versus Monarch Butterfly (Attack 1.0, Special 89.0):** the mole-rat has a genuine vertebrate bite and therefore much higher Attack. Its experimentally demonstrated anoxia metabolism and selective nociceptive modifications justify Special above Monarch despite Monarch's toxin sequestration/navigation package.
- **Versus Mantis Shrimp (Special 97.0):** 96.0 keeps the naked mole-rat just below a roster specialist with an extraordinary ballistic strike and exceptional visual system. This is intentionally near-ceiling only in Special, not in physical combat categories.
- **Versus Mountain Goat (Agility 88.0):** tunnel maneuverability is excellent but highly environment-specific, so Naked Mole Rat Agility 72.0 stays well below the mountain goat's extreme three-dimensional cliff locomotion.
- **Versus Musk Ox (Defense 61.0):** physiological oxygen tolerance cannot substitute for mechanical survivability. Naked Mole Rat Defense 24.0 remains far below the 320 kg bull's mass, skull/horn boss and impact tolerance.
- **Compression check:** Raw Power 5.0 and Attack 14.0 intentionally preserve the huge absolute gap from medium predators and megafauna. The species' remarkable pound-for-pound bite is recorded factually in Newtons/BFQ rather than leaked into absolute power ratings.
- **Double-counting check:** anoxia physiology primarily drives Stamina and Special; it contributes only narrowly to Toughness/Recovery. Social coordination drives Tactics/Intelligence but does not multiply individual Attack or Raw Power.

## 14. Final verification against README and CALIBRATION

- Representative healthy adult chosen with social-role rationale.
- Exact taxon documented.
- Dimorphism/caste and population uncertainty documented.
- Physical measurements separated from editorial scores.
- Unsupported speed and PSI rejected rather than guessed.
- All 12 current substats rescored independently with one decimal.
- All six headline ratings use one decimal and absolute roster scaling.
- **Exactly two special abilities** and **exactly two unique traits** are present.
- Habitat, range, diet, ecology, sociality, life history, conservation, adaptations, human interaction, fun facts, summary and narrative profile are included.
- Source ledger maps major claims to direct URLs with confidence/caveats.
- Cross-roster normalization explicitly checks proportional-strength leakage, speed/agility confusion and double-counting.
- Image status follows `IMAGE_REQUIREMENTS.md`; no URL is misrepresented as a completed transparent PNG.