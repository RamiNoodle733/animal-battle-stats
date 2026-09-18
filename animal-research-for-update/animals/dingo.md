# Dingo (*Canis familiaris* / Australian dingo) research report

## 1. Identity and canonical specimen
- **Common name:** Dingo
- **Taxon represented:** Australian dingo. Taxonomic naming is contested: current Australian Museum treatment uses *Canis familiaris* (breed Dingo) / *C. familiaris dingo*, while much literature uses *Canis lupus dingo* or *Canis dingo*. This report does not pretend that nomenclature is settled.
- **Living:** yes.
- **Canonical combat specimen:** healthy mature male, **18.0 kg**, representative rather than exceptional.
- **Dimorphism/population variation:** males are generally heavier. On K'gari, 101 adults >12 months averaged 18.0 kg versus 14.8 kg for 81 adult females. Australian Museum gives a broad 12–24 kg species range. Coat, size, ecology and ancestry vary geographically, and domestic-dog introgression complicates some populations.

## 2. Physical measurements and functional anatomy
Australian Museum reports shoulder height **44–62 cm**, body length **86–123 cm**, tail **26–38 cm**, and mass **12–24 kg**. The K'gari dataset makes 18.0 kg especially defensible for a representative adult male.

The dingo is a lean cursorial canid. Its primary weapons are jaws and teeth, used for gripping, tearing and repeated bites. A comparative skull model estimated **313 N canine bite force** for a 17.5 kg *C. lupus dingo* specimen, while later finite-element work found an optimal modeled bite angle around 25–35 degrees. These are modeled force results, not measured pressure. No defensible contact area or direct species-level PSI measurement was verified, so `bite_force_psi` remains **0.0**.

No robust instrumented species-specific top sprint speed was located. The site's legacy 60 km/h is therefore not retained as a factual field. `speed_mps = 0.0` pending better measurement. Wild longevity is reported up to about **10 years** by Australian Museum/ADW; that is a maximum rather than a demonstrated population mean, so canonical lifespan is conservatively 10.0 with a context caveat.

There is no armor. Fur, skin, skeleton and ordinary canid musculature provide modest passive protection. Survival depends mainly on awareness, mobility, social behavior and avoidance.

## 3. Proposed canonical factual fields
| Field | Proposed value | Basis / confidence |
|---|---:|---|
| `weight_kg` | **18.0** | Mean of 101 adult K'gari males >12 months. High for that population; representative nationally with geographic caveat. |
| `height_cm` | **53.0** | Midpoint of Australian Museum 44–62 cm shoulder range. Moderate. |
| `length_cm` | **104.5** | Midpoint of Australian Museum 86–123 cm body-length range, excluding 26–38 cm tail. Moderate. |
| `speed_mps` | **0.0** | No sufficiently defensible species-specific maximum verified. |
| `lifespan_years` | **10.0** | Reported wild maximum; not a proven mean. Moderate-low as a canonical field. |
| `bite_force_psi` | **0.0** | Force models exist, but no defensible pressure measurement. |

**Useful future fields:** `tail_length_cm` 32.0 representative midpoint; `modeled_canine_bite_force_n` 313; `adult_male_mass_kg_kgari` 18.0; `social_hunting` true.

## 4. Combat biology
### Weapons and mechanics
Dingoes attack with repeated bites, gripping and tearing rather than a single specialized crushing weapon. Comparative work places their modeled canine bite force at about 313 N for a 17.5 kg specimen. They can hunt alone, but cooperative hunting expands the prey envelope. A 2022 Australian Journal of Zoology synthesis notes that solitary dingoes can persist on rabbits, rodents, carrion and small marsupials, while small packs can bring down larger prey such as kangaroos and ungulates.

### Defense, locomotion and endurance
An 18 kg dingo has low absolute passive protection. Its better defenses are footwork, spacing and disengagement. Radio-tracking of five adult and four juvenile dingoes in northeastern NSW produced 4,058 fixes over 515 tracking-days and showed distinct searching and exploratory movement, dawn/dusk activity peaks, and an average adult home range of about 2,700 ha. ADW summarizes daily travel around 10–20 km from pack territory. This supports strong endurance, but not a roster-ceiling score or the legacy 97 Stamina.

### Senses, cognition and tactics
Dingoes have the strong olfactory/hearing toolkit expected of canids and communicate by howling and scent marking. Their cognition is behaviorally flexible but should not be equated with experimentally exceptional corvid/primate cognition. In an unsolvable rope-pulling task involving 12 sanctuary dingoes, researchers found that conclusions about human-directed looking depended strongly on how the behavior was operationally defined. That is useful evidence for caution, not a reason to inflate Intelligence.

### Fighting, predation and social behavior
Dingoes are opportunistic predators. Australian Museum describes solitary hunting plus larger packs for bigger game, with mammals including rabbits, kangaroos, wallabies and wombats prominent. Packs are territorial, and dominant members usually monopolize breeding while helpers provision pups. Cooperative pressure, pursuit and multiple attack angles matter in group hunting, but this profile scores one animal and does not multiply individual Attack by pack size.

### Environmental pros/cons and weaknesses
**Strengths:** broad Australian habitat tolerance, heat/aridity experience in many populations, flexible diet, strong terrestrial ranging, social coordination, efficient canid senses.

**Weaknesses:** no armor; moderate body mass; vulnerable to heavy hooves, horns, claws and much larger predators; pack advantages collapse in strict one-on-one combat; disease, persecution and hybridization are important real-world pressures.

**Matchups:** favorable against smaller unarmored animals it can chase and repeatedly bite; unfavorable against armored animals, large cats/bears, large horned or hoofed herbivores, and opponents whose mass makes rapid bite incapacitation unrealistic.

## 5. Proposed ABS substats
All scores are absolute roster-wide values.

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Raw Power | **34.0** | Strong 18 kg canid, but far below large predators and megafauna in absolute force. |
| Weaponry | **41.0** | Effective jaws/teeth and modeled 313 N canine bite; no claws, horns, venom or extreme crushing mechanism. |
| Ferocity | **74.0** | Persistent predator capable of large-prey engagement, moderated for one-animal scoring. |
| Protection | **19.0** | Fur/skin and ordinary skeleton only. |
| Toughness | **38.0** | Athletic wild canid, but modest mass makes major trauma decisive. |
| Maneuverability | **82.0** | Lean, agile terrestrial predator with good chase/repositioning control. |
| Speed | **69.0** | Fast cursorial canid by morphology/ecology, but no verified maximum supports an elite factual speed. |
| Endurance | **81.0** | 10–20 km daily travel context and telemetry support strong sustained ranging without near-ceiling inflation. |
| Recovery | **68.0** | Working-canid resilience is plausible, but direct dingo recovery physiology is weakly measured. |
| Tactics | **82.0** | Flexible solitary/pack hunting and coordinated larger-prey attacks. |
| Senses | **86.0** | Strong canid olfaction/hearing plus scent/howl communication; no exotic sensory system. |
| Abilities | **57.0** | Cooperative hunting and ecological flexibility are useful but not extraordinary individual mechanisms. |

## 6. Proposed six headline ratings
| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **40.0** | Effective repeated biting from an 18 kg predator, below larger canids/cats in absolute damage. |
| **Defense** | **24.0** | Evasion helps, but passive protection and mass are low. |
| **Agility** | **82.0** | Strong balance, turning and terrestrial repositioning; not derived from an unsupported top-speed number. |
| **Stamina** | **81.0** | Strong sustained ranging and hunting endurance, below dhole's stronger pursuit/telemetry case. |
| **Intelligence** | **75.0** | Flexible social predator with learning/problem-solving capacity, below crow-level experimental cognition. |
| **Special** | **58.0** | Pack coordination and ecological flexibility matter, but neither is a rare solo biological weapon. |

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Pack Pressure** — coordinated pursuit and multi-angle harassment let groups tackle prey beyond one dingo's individual power.
2. **Range Runner** — sustained terrestrial movement and flexible searching behavior support prolonged tracking, pursuit and repositioning.

### Unique traits
1. **Wild-Dog Generalist** — dingoes shift among small prey, carrion and larger cooperative targets across highly varied Australian habitats.
2. **Howl-and-Scent Network** — howling and scent marking maintain spacing, territorial information and pack contact over large ranges.

## 8. Expanded profile
**Habitat/range:** widespread across mainland Australia in deserts, grasslands, forests, tropical wetlands and mountains, with major exclusion/control zones around pastoral land. **Diet:** opportunistic carnivore/scavenger; mammals dominate many diets, but prey varies greatly by region and can include kangaroos, wallabies, rabbits, rodents, wombats, livestock, birds, reptiles and insects. **Social ecology:** solitary individuals and territorial packs both occur; pack structure becomes especially relevant for larger prey. **Life history:** one main annual breeding season; gestation about nine weeks; usually 4–6 pups; both parents and pack helpers can contribute to rearing. **Human interaction:** dingoes have deep cultural relationships with First Nations peoples, while modern livestock conflict, lethal control and human-food conditioning create management conflict. A 2026 Australian Museum report describes a roughly millennium-old carefully buried dingo on the Baaka/Darling River, adding archaeological evidence to those long-known relationships.

### Adaptations
Lean cursorial build; erect mobile ears; strong olfaction; bushy tail used in balance/communication; flexible social organization; broad dietary and climatic tolerance.

### Genuine fun facts
- Australian Museum gives the species a 12–24 kg mass range and 44–62 cm shoulder-height range.
- K'gari adult males averaged exactly 18.0 kg in a 101-male sample.
- Dingoes rarely bark compared with domestic dogs and rely heavily on howling and scent communication.
- Packs can switch the feasible prey class from small mammals to kangaroos and ungulates.
- A comparative mammal study estimated 313 N canine bite force for a 17.5 kg dingo skull, but that is force, not PSI.
- Archaeological work announced in May 2026 described a millennium-old dingo burial cared for by Barkindji ancestors along the Baaka.

### Concise site-ready summary
The dingo is Australia's adaptable wild canid, combining strong senses, agile terrestrial movement, sustained ranging and flexible solitary or cooperative hunting. A representative mature male is about 18 kg. Its individual bite and durability are modest on the full ABS roster, so its strongest advantages are maneuverability, endurance and tactics rather than raw power or armor.

### Rich narrative profile
The dingo is a useful anti-inflation test for ABS. It is a successful top-order predator in many Australian systems, but ecological importance does not make an 18 kg individual physically equivalent to a wolf, cougar or large hyena. Its combat value comes from mobility, repeated bite delivery, sensory awareness and behavioral flexibility. Cooperative hunting can transform what a pack can kill, yet those extra bodies must not leak into an individual's Raw Power or Defense.

Its measurements also show why old catalogue values need re-research. A large K'gari dataset provides an unusually clean adult-male mass anchor, while common internet sprint and PSI figures are much weaker. The correct profile preserves that asymmetry in evidence instead of filling every field with false precision.

### Future field proposals
`tail_length_cm`, `modeled_canine_bite_force_n`, `daily_travel_km`, `pack_size_context`, `prey_mass_context`, `taxonomic_name_authority`, and a provenance note separating modeled bite force from measured pressure.

## 9. Mandatory image requirement
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/dingo.png` **NOT PRESENT / NOT COMPLETE**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Dingo_-_Katy_Platt_(37223135990).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/f/fd/Dingo_-_Katy_Platt_%2837223135990%29.jpg
- `file_format_verified`: source JPEG visually opened; final PNG not created
- `alpha_verified`: **No**
- `full_body_verified`: **Yes for framing**. Direct original-image inspection shows one dingo with head, torso, all four legs/paws and entire tail inside frame.
- `adult_verified`: **No**. Source metadata does not explicitly state adulthood.
- `sex_verified_or_unknown`: **Male** according to Commons category metadata.
- `license_status`: Commons records Public Domain Mark / structured CC0-style public-domain metadata; reuse provenance retained.
- `notes`: 4608×3456 original, clean side/three-quarter standing view. Excellent cutout geometry and resolution, but adulthood is not explicit, so it is not promoted to the stronger pending-cutout status. Current GitHub writer is UTF-8 text-only, so no binary PNG is fabricated.

## 10. Source ledger, confidence and conflicts
1. **Australian Museum, Dingo** — https://australian.museum/learn/animals/mammals/dingo/ — taxonomy treatment, 12–24 kg mass, 44–62 cm shoulder height, 86–123 cm body length, 26–38 cm tail, diet, communication, breeding, longevity. **High institutional confidence.** Taxonomic naming conflicts with *C. lupus dingo* / *C. dingo* literature.
2. **Allen et al., K'gari diet/body condition dataset** — https://pmc.ncbi.nlm.nih.gov/articles/PMC4806299/ — 101 adult males mean 18.0 kg; 81 females 14.8 kg; adult threshold >12 months. **High confidence for K'gari**, not necessarily all Australia.
3. **Wroe et al., Bite club** — https://pmc.ncbi.nlm.nih.gov/articles/PMC1564077/ — modeled canine bite force 313 N for 17.5 kg *C. lupus dingo*. **Moderate-high for comparative model; not direct in-vivo PSI.**
4. **Wroe et al., dingo finite-element gape study** — https://pubmed.ncbi.nlm.nih.gov/18493603/ — bite mechanics and 25–35° modeled optimal bite angle. **High for model context.**
5. **Harden 1985, Wildlife Research** — https://www.publish.csiro.au/WR/WR9850025 — radio tracking, movement modes, activity and ~2700 ha adult home range. **High primary-field confidence; small historical sample.**
6. **ADW Dingo account** — https://animaldiversity.org/accounts/Canis_lupus_dingo/ — 10-year wild longevity, social structure and 10–20 km/day summary. **Moderate; older synthesis.**
7. **Australian Journal of Zoology 2022 diet synthesis** — https://www.publish.csiro.au/zo/fulltext/ZO22011 — solitary small-prey feeding and pack hunting of larger kangaroo/ungulate prey. **High peer-reviewed synthesis confidence.**
8. **Smith & Litchfield, dingo unsolvable-task study** — https://pubmed.ncbi.nlm.nih.gov/23572065/ — 12 dingoes and caution around interpreting human-directed gaze. **High for experiment; captive context.**
9. **Australian Museum 2026 Baaka burial report** — https://australian.museum/about/organisation/media-centre/millennium-old-dingo-burial-baaka-darling-river/ — cultural/archaeological context. **High institutional, current.**
10. **Wikimedia Commons image page** — https://commons.wikimedia.org/wiki/File:Dingo_-_Katy_Platt_(37223135990).jpg — 4608×3456 source, provenance, male category and reuse metadata. **High for file metadata; adulthood unverified.**

## 11. Cross-animal normalization notes
- **Vs Coyote:** Dingo is somewhat heavier in this canonical comparison, so Attack 40.0 is just above Coyote 38.0; both remain low relative to large predators. Dingo Stamina 81.0 exceeds Coyote 74.0 but stays below Dhole 86.0.
- **Vs Dhole:** similar canonical mass, but Dhole retains higher Attack 42.0, Stamina 86.0 and Special 70.0 because its cooperative pursuit specialization and species-specific movement evidence are stronger. Dingo Special is only 58.0.
- **Vs Cougar:** Cougar Attack 55.0 and Defense 34.0 remain clearly higher because a 70 kg felid has a major mass/weapon gap.
- **Vs Crow:** Dingo Intelligence 75.0 remains far below Crow 96.0, reflecting the crow's stronger experimental cognitive evidence.
- **Anti-leakage checks:** no pack multiplier in Raw Power/Attack; no unsupported 60 km/h factual speed; no modeled-newton-to-PSI conversion; no ecological-apex status converted into Defense.