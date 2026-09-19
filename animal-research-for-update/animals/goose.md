# Goose

## 1. Identity and canonical specimen

- **Site label:** Goose
- **Site legacy taxon:** `Anser`
- **Resolved research taxon:** **Greylag goose (*Anser anser*)**
- **Living/extinct:** Living
- **Why this resolution:** the live record is genus-level *Anser*, so measurements cannot honestly be pooled across every grey goose. *Anser anser* is the most defensible species-level representative because it is the type-like familiar wild grey goose, is the wild ancestor of most domestic geese, and matches the site's generic `Anser` concept better than a *Branta* species such as Canada goose.
- **Canonical combat specimen:** healthy fully mature **male (gander)** of a wild-type population, approximately **3.5 kg**, not a domestic heavy breed and not an exceptional eastern-subspecies maximum.
- **Dimorphism:** males and females are similar in plumage, but males are modestly larger. BTO live-bird data give adult males 3.49 ± 0.31 kg versus females 3.18 ± 0.31 kg, and male wing length 458.8 ± 13.7 mm versus 436.3 ± 13.4 mm. Social-rank research also finds males rank higher on average.
- **Population variation:** *A. a. rubrirostris* tends larger than nominate *A. a. anser*. Published species-wide masses span roughly 2.16-4.56 kg. Domestic descendants are deliberately excluded because artificial selection can produce much heavier birds.

## 2. Physical measurements

### Mass
BTO biometrics from live birds are the strongest representative dataset recovered: adult mean 3.34 ± 0.35 kg (N=1,149), male mean 3.49 ± 0.31 kg (N=568; 5th-95th percentile 3.0-4.0 kg), female mean 3.18 ± 0.31 kg (N=539; 2.7-3.8 kg). ADW gives a broader species range of 2.16-4.56 kg. **Canonical: 3.5 kg male.**

### Length and standing envelope
ADW gives mature body length **76-89 cm**, average about 80 cm. Because the schema's `height_cm` is useful as a standing envelope but strong standardized standing-height measurements were not recovered, use **80.0 cm** for both canonical body-length and approximate upright height fields with the height value explicitly marked lower-confidence. This avoids pretending a precise skeletal standing-height measurement exists.

### Wingspan and wing dimensions
ADW reports **147-180 cm wingspan**, average 163 cm. BTO reports adult male wing length 458.8 ± 13.7 mm. The broad wings provide lift for a 3-4 kg bird and also function as balance/control surfaces during terrestrial threat displays and close conflict, but no direct wing-strike force measurement was found.

### Bill, legs, feet
The greylag has a large orange/pink bill and strong webbed feet. A commonly reported bill length is roughly 6.4-6.9 cm and tarsus 7.1-9.3 cm, but these are morphology references rather than combat-force measurements. The bill is adapted primarily to grazing/cropping vegetation, not to raptorial penetration.

### Speed
A GPS study of western European migrating Greylag Geese reported mean migratory flight speed **69 ± 2 km/h**, range **45-130 km/h**. This is actual tracked movement rather than a generic web maximum. The upper 130 km/h is not adopted as a normal top speed because wind and migration context can contribute strongly. **Canonical `speed_mps`: 19.2 m/s (69 km/h)** as a defensible representative sustained migratory flight speed, not a physiological maximum. Controlled juvenile flight work also used a 60 km/h microlight cruising pace that trained birds could follow.

### Lifespan
BTO gives **8 years typical life expectancy for a bird reaching breeding age**, with a ringed maximum of **19 years 7 months 4 days** in its displayed record. **Canonical: 8.0 years**, preserving the difference between representative expectation and longevity record.

### Bite force
No credible species-specific bite-force pressure measurement was recovered. The bill can pinch, grab and strike but is not a high-pressure crushing jaw. **Canonical `bite_force_psi`: 0.0 (unknown/not defensibly measured), not zero biological force.**

### Protection and body construction
Dense contour feathers provide weather protection but little resistance to teeth, talons or claws. The bird has a relatively lightweight avian skeleton and exposed neck and limbs. Its main defenses are vigilance, threat display, mobility, flight escape, water access, group support and willingness to confront intruders rather than armor.

## 3. Canonical proposed factual fields

| Field | Proposed value | Confidence | Basis |
|---|---:|---|---|
| `weight_kg` | **3.5** | High | BTO adult-male mean 3.49 kg |
| `height_cm` | **80.0** | Low-medium | Approximate upright envelope; standardized standing height not recovered |
| `length_cm` | **80.0** | High | Mature length average; credible range 76-89 cm |
| `speed_mps` | **19.2** | Medium-high | 69 km/h mean GPS migration speed; not claimed as physiological max |
| `lifespan_years` | **8.0** | High | BTO typical expectancy after reaching breeding age |
| `bite_force_psi` | **0.0** | High as an evidence decision | No defensible PSI measurement |

Additional future fields:
- `wingspan_cm`: **163.0** representative average, range 147-180 cm
- `male_weight_kg`: **3.49**
- `female_weight_kg`: **3.18**
- `migration_flight_speed_kmh`: **69 ± 2 mean**, observed range 45-130 in the cited tracking study
- `bill_length_cm`: approximately **6.4-6.9**, moderate confidence

## 4. Combat biology

### Primary weapons
The principal close-range weapon is the **bill**, used to peck, nip, seize feathers/skin and threaten. Unlike an eagle, the goose lacks a hooked raptorial beak and large piercing talons. Its feet and wings can contribute to shoving, striking, balance and space control, but direct force data were not found and should not be mythologized into bone-breaking weapons.

### Offensive mechanics
Greylag conflict is behaviorally important despite modest absolute weapon power. Birds approach with extended neck/head threat postures, peck or grab at close range, chase rivals, and can combine body momentum, bill contact and wing movement. The long neck gives useful reach for a bird of this mass. A 2026 field study of four goose species found 97% of 662 observed aggressive episodes were intraspecific, with Greylags showing consistently high aggression probability during spring staging.

### Intraspecific fighting and dominance
Greylag geese have a real dominance system rather than random bluffing. A 2024 Royal Society Open Science study found aggressiveness significantly repeatable and predictive of dominance rank; paired birds, males and older birds ranked higher. Longitudinal work likewise shows sex, social status, season and parental context influence aggression and rank. This supports above-average Ferocity and Tactics for a grazing bird, but not high absolute Attack.

### Social combat support
Family members can actively intervene. In observed serial conflicts, up to five family members followed an initial attack on the same opponent, and about 60% of juveniles' initially lost interactions were later reversed by a family member. Another study found family members lost agonistic encounters less often when actively supported. This is strong evidence for coordinated social support, but the one-on-one ABS specimen does not receive multiplied Raw Power for having hypothetical allies.

### Defensive behavior
Breeding Greylags can be strongly territorial, chasing other geese and large birds from nesting areas. Against a dangerous mammalian or aerial predator, however, flight or water escape is generally more realistic than winning direct combat. ADW lists foxes, dogs and large raptors among predators/threats.

### Locomotion and maneuverability
The goose is genuinely multimodal: competent terrestrial walking/running, surface swimming, and powerful sustained flight. In open air it can rapidly disengage from most terrestrial opponents. On the ground, its bulky body and webbed feet are less agile than those of cursorial birds or mammalian predators. In water it is stable and maneuverable but is not a specialized underwater fighter.

### Endurance
Migration demonstrates substantial aerobic endurance. GPS-tracked Far East Greylags made long seasonal migrations with extended stopovers; western European tracked birds averaged 69 km/h while migrating. Flight endurance should not be confused with continuous close-combat output, but it warrants a strong Stamina rating.

### Senses
Vision is the key battle-relevant sense, with broad visual awareness typical of vigilant waterfowl. Hearing and social calls support flock coordination. No evidence was found for an exotic sensory system comparable with raptor acuity, echolocation or electroreception.

### Intelligence and tactics
Greylags show individual recognition/social hierarchy, long-term pair/family bonds, context-dependent aggression, social support and strong site fidelity. GPS work found birds returning to breeding grounds within less than 500 m of original capture location. This supports solid spatial memory and social cognition. It does not justify primate/corvid-level problem-solving scores.

### Aggression/ferocity
Aggression is not an internet meme artifact. Peer-reviewed work demonstrates stable individual aggressiveness, dominance relationships, serial family attacks and seasonal social conflict. Still, most of this aggression is against conspecifics and is usually ritualized/resource-related rather than predatory killing behavior.

### Environmental strengths
- **Open air:** strongest escape/repositioning environment.
- **Shallow water/lakes:** strong safety and mobility environment.
- **Open grassland:** good visibility and room for takeoff.
- **Cold/temperate wetlands:** well adapted through plumage and migratory behavior.

### Environmental weaknesses
- **Confined terrestrial space:** flight advantage may disappear.
- **Dense cover:** reduces takeoff and long-neck visibility.
- **Close grappling with a mammalian carnivore:** feathers, neck and legs are poorly protected.
- **Underwater combat:** not a diving specialist.

### Matchup archetypes
**Favorable:** similarly sized lightly armed terrestrial animals that cannot easily catch a flying bird; small opponents vulnerable to intimidation, bill strikes and repeated disengagement.

**Unfavorable:** cats/canids of similar or greater mass with teeth/claws and grappling ability; raptors with superior aerial weaponry; armored animals; much larger terrestrial fighters. Against tiny venomous arthropods, avoidance matters more than raw combat superiority.

## 5. Proposed ABS substats

All scores use the absolute 225-animal scale in `CALIBRATION.md`.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **18.0** | 3.5 kg bird with useful body/wing/leg force but tiny absolute power beside serious mammalian fighters. |
| Weaponry | **23.0** | Bill, feet and wings can hurt and control space, but lack raptorial hooks, large talons, fangs, horns or venom. |
| Protection | **13.0** | Feathers/weatherproofing only; little trauma armor and vulnerable neck/legs. |
| Toughness | **24.0** | Robust for a waterfowl but lightweight avian construction limits trauma tolerance. |
| Speed | **72.0** | Strong sustained flight speed around 69 km/h in migration; not a claim of elite dive speed. |
| Maneuverability | **76.0** | Three locomotor modes, rapid flight disengagement, stable swimming; ground turning is less exceptional. |
| Endurance | **82.0** | Migratory physiology and sustained flight are genuine high-end endurance traits. |
| Recovery | **62.0** | Strong migratory/rest-stop physiology but no unusual regeneration or documented rapid injury recovery. |
| Tactics | **68.0** | Context-sensitive dominance, social support, mate/family defense, site fidelity and opponent-specific serial aggression. |
| Senses | **66.0** | Strong vigilance/vision and hearing, without a rare specialist sensory mechanism. |
| Ferocity | **73.0** | Repeatable aggression, territorial chasing and robust dominance conflicts are well documented. |
| Abilities | **58.0** | Flight plus family-support behavior meaningfully changes matchups, but neither is an exotic destructive mechanism. |

## 6. Proposed six headline ABS ratings

- **Attack: 25.0** - real close-range aggression and useful reach, but low absolute damage ceiling and no specialized killing weapon.
- **Defense: 20.0** - escape and vigilance help survival, but direct structural protection is poor.
- **Agility: 76.0** - strong aerial repositioning and multimodal control, while keeping top speed distinct from agility.
- **Stamina: 82.0** - migration and sustained flight provide unusually strong evidence for endurance.
- **Intelligence: 67.0** - complex social relationships, rank, family intervention, memory/site fidelity and flexible aggression, below corvid/primate anchors.
- **Special: 59.0** - powerful flight escape plus socially supported defense are matchup-relevant, but there is no venom/electricity/camouflage-class mechanism.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Aerial Breakaway** - powerful sustained flight lets the goose rapidly leave ground-bound threat envelopes and reposition across water or open terrain; this is escape/repositioning, not a damage multiplier.
2. **Family Countercharge** - grounded in documented serial agonistic support, where family members repeatedly attack the same opponent and can reverse a relative's lost encounter. For solo ABS this is contextual rather than free extra combatants.

### Unique traits
1. **Gander Dominance** - males are modestly larger and, in studied flocks, tend to occupy higher social rank, matching the canonical mature-male combat specimen.
2. **Three-Mode Mobility** - one animal can walk/run on land, swim effectively at the surface and sustain long-distance flight, making terrain denial harder than for a single-mode fighter.

## 8. Expanded profile content

### Habitat and range
Greylag geese use temperate freshwater and brackish wetlands, marshes, lakes, river valleys, estuaries, pasture, stubble and agricultural fields. Native/wild populations span much of Europe and Asia, with resident, migratory and naturalized populations depending on region.

### Diet and ecology
Primarily herbivorous. They graze grasses and consume marsh-plant rhizomes/roots, grain, seeds and agricultural root crops. ADW also records occasional small aquatic animal matter. Their abundance can make them significant grazers and agricultural crop consumers.

### Social structure
Strongly social outside some nesting contexts. Long-term monogamous pair bonds are common, offspring can remain with parents for an extended period, and family membership has measurable effects on rank and conflict outcomes. Flocks possess structured dominance relationships rather than being socially uniform.

### Reproduction and life history
Breeding is seasonal in spring. ADW reports typically 4-6 eggs within a broader 3-12 range, approximately 27-28 days incubation, and sexual maturity around 2-3 years. Young are precocial and receive protection from both parents.

### Conservation
The species is globally treated as **Least Concern** in the conservation references recovered. Local management can be complicated because abundant or naturalized populations may conflict with agriculture and human recreation, while some regional native populations receive protection.

### Adaptations
- Broad wings and aerobic capacity for migration.
- Webbed feet for efficient surface swimming.
- Broad grazing bill with lamellae suited to cropping/filtering food.
- Dense waterproofing plumage.
- Long-term social bonds and family support.
- Strong spatial fidelity to breeding areas.

### Human interaction
Greylags are the principal wild ancestor of most domestic European goose lineages. Wild, feral and domestic-derived populations can occur near people, and nesting adults may aggressively defend space. Their crop use can create agricultural conflict.

### Genuine fun facts
- Greylag geese are the wild ancestors of most familiar European domestic geese.
- BTO's displayed ring record exceeds 19 years, more than twice the typical 8-year expectancy for a bird reaching breeding age.
- GPS-tracked western European migrants averaged about 69 km/h while migrating and returned to breeding grounds with very high site fidelity.
- Greylag family members sometimes launch serial attacks on the same opponent; researchers documented sequences of up to five follow-up attackers.
- Aggressiveness is individually repeatable enough to predict social dominance rank in a free-flying flock.
- A gander's combat reputation is partly real biology: males are both modestly larger and higher-ranking on average in studied social groups.

### Concise site-ready summary
The Greylag Goose is a 3.5 kg wild gander built more for endurance, mobility and social defense than raw damage. Its bill and aggressive charges are credible close-range tools, but its real battle advantages are sustained flight, water mobility, vigilance, strong territorial behavior and sophisticated family support. It is a stubborn, highly mobile lightweight rather than the supernaturally powerful fighter suggested by goose memes.

### Rich narrative profile
A mature Greylag gander is a compact migratory athlete. At roughly 3.5 kg it is dwarfed by the roster's serious mammalian predators, and neither its bill nor webbed feet can bridge that absolute power gap. What it does have is options. On land it can stand its ground long enough to threaten, peck, grab and chase. On water it gains stable mobility. In open air it can simply remove itself from the reach of many terrestrial opponents and sustain flight over distances that burst-oriented animals cannot match.

Its social biology is unusually relevant to combat interpretation. Greylags remember social relationships, occupy structured dominance hierarchies and show stable individual differences in aggressiveness. Families actively support one another in disputes, sometimes chaining attacks against the same rival. That does not turn one goose into a flock in a solo matchup, but it demonstrates that the species' confrontational behavior is organized and context-sensitive rather than random bluff.

The goose's biggest calibration trap is reputation. Territorial birds can intimidate humans and other animals, but fearlessness is not force. Feathers do not stop canine teeth, the long neck is vulnerable, and a goose has no eagle-grade talons or carnivore-grade jaw. ABS should therefore preserve the contrast: high Stamina and Agility, respectable Ferocity and Intelligence, but low absolute Attack and Defense.

### Future field proposals
1. Add `wingspan_cm` to the schema for volant animals so length is not forced to represent aerial envelope.
2. Add separate `burst_speed_mps` and `sustained_speed_mps`; goose migration shows why one speed field is biologically lossy.
3. Add `locomotion_modes` as structured tags (terrestrial, surface-swimming, flight).
4. Add a `social_support_context` field so cooperative behavior can be documented without inflating solo Raw Power.
5. Seek direct high-speed video/force-plate measurements of goose bill, wing and foot impacts before assigning any impact-force number.

## 9. Image requirement

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/goose.png` (**not created**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Greylag-Goose.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/c/c5/Greylag-Goose.jpg?utm_campaign=index&utm_content=original&utm_source=commons.wikimedia.org
- `file_format_verified`: source JPEG verified; final PNG **no**
- `alpha_verified`: **no**
- `full_body_verified`: **yes visually for the photographed individual**. Original 2292x2292 image shows one unobscured bird with complete head, neck, torso, both legs and feet, folded wings and tail inside frame.
- `adult_verified`: **not source-explicit**; plumage is adult-like but the report does not infer age solely from appearance for completion purposes.
- `sex_verified_or_unknown`: **unknown**
- `license_status`: **CC BY-SA 2.5**, reuse permitted with attribution/share-alike conditions; photographer Andreas Trepte.
- `notes`: This is a strong, clean, high-resolution exact-species cutout candidate and was visually inspected at original resolution. It is not marked complete because adulthood/sex are not source-explicit and the connected GitHub writer cannot commit a binary transparent PNG. No fake PNG was created. A separate 3008x2000 Commons image explicitly labels adult Greylags but contains an adult plus juvenile, so it fails the single-subject requirement and was not selected.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Context / finding | Confidence / caveat |
|---|---|---|---|---|
| British Trust for Ornithology, BirdFacts | https://www.bto.org/learn/about-birds/birdfacts/greylag-goose | Adult sex-specific mass/wing length, lifespan | Male 3.49±0.31 kg; female 3.18±0.31; typical expectancy 8 y; displayed ring max 19 y 7 m 4 d | High; large live-bird samples |
| Animal Diversity Web | https://animaldiversity.org/accounts/Anser_anser/ | Morphology, reproduction, habitat, diet, predators | 2.16-4.56 kg; 76-89 cm; 147-180 cm wingspan; maturity 2-3 y | Medium-high; some displayed prose has obvious transcription errors, so tabulated ranges were preferred |
| MME Hungarian Ornithological and Nature Conservation Society | https://mme.hu/en/magyarorszagmadarai/madaradatbazis-ansans | Independent sex/size check, conservation | males 2.8-4.3 kg; females 2.1-3.8 kg; 75-90 cm; 147-180 cm | High institutional cross-check |
| BTO / Wildlife Trusts species account | https://www.wildlifetrusts.org/wildlife-explorer/birds/waterfowl/greylag-goose | Ecology, territorial behavior, diet | territorial while nesting; grazes pasture; grain/root crops/leafy vegetation | High institutional natural-history summary |
| Kölzsch et al./Bird Study, migratory flights | https://www.tandfonline.com/doi/full/10.1080/00063657.2019.1620171 | Flight speed and site fidelity | mean migration speed 69±2 km/h, range 45-130; high breeding-site fidelity | High; GPS movement, but speed is migration context rather than physiological max |
| Li et al. 2020, Integrative Zoology | https://pubmed.ncbi.nlm.nih.gov/31631517/ | Migration/endurance | 20 tagged Far East Greylags; adult spring migration faster than autumn | High; telemetry, population-specific |
| Gatt et al. 2020, Journal of Avian Biology | https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/jav.02235 | Controlled flight development | instrumented birds followed microlight cruising around 60 km/h | High for study context; juveniles/hand-raised, not max speed |
| Kleindorfer et al. 2024, Royal Society Open Science | https://pmc.ncbi.nlm.nih.gov/articles/PMC10987982/ | Aggression/dominance/intelligence | aggressiveness repeatable and predicts rank; males/paired/older birds higher rank | High, peer-reviewed and open access |
| Scheiber et al., Animal Behaviour | https://pubmed.ncbi.nlm.nih.gov/21984838/ | Serial family attacks | up to five serial follow-up attacks; ~60% of juvenile primary losses reversed by family | High, peer-reviewed |
| Scheiber et al., Behaviour | https://pubmed.ncbi.nlm.nih.gov/21984839/ | Active/passive social support | family support reduces lost agonistic encounters and stress | High, peer-reviewed |
| Weiß et al. 2011, Behavioral Ecology | https://academic.oup.com/beheco/article-abstract/22/3/616/269608 | Long-term dominance/aggression | sex, social status, season and parental context affect dominance behavior | High, peer-reviewed |
| Scientific Reports 2026 goose aggression study | https://www.nature.com/articles/s41598-026-43082-x | Current field aggression context | 643/662 observed aggressive episodes in four species were intraspecific; Greylag spring aggression consistently high | High, multi-species field observations |
| Wikimedia Commons, Andreas Trepte | https://commons.wikimedia.org/wiki/File:Greylag-Goose.jpg | Image candidate | exact *A. anser*, 2292x2292, CC BY-SA 2.5, single complete subject | High for species/license/full-body; adulthood and sex not source-explicit |
| Wikimedia Commons, Vera Buhl | https://commons.wikimedia.org/wiki/File:2008-06-07_(53)_Grey_goose,_Graugans,_Anser_anser.JPG | Adult image cross-check | explicitly adult + juvenile, 3008x2000, reusable | Rejected for final candidate because multiple animals |

### Conflicts and uncertainty
- The site's genus-level `Anser` is taxonomically under-specified. This report resolves it to *A. anser* for consistency and reproducibility; future migration should make that decision explicit.
- ADW's prose includes obvious unit/transcription errors for sex-specific average mass and an internal wingspan typo, while its range table is plausible and agrees with BTO/MME. The erroneous prose values were not used.
- Flight-speed values are context-dependent. The GPS mean is used because it is measured, but is labeled representative migratory flight speed rather than biological top speed.
- No defensible bite PSI, wing-strike force or kick force was found. None is fabricated.

## 11. Cross-animal normalization notes

- **Versus Golden Eagle:** Goose must be far below Golden Eagle in Attack and Weaponry. Both fly, but the eagle's talons and predatory strike mechanics are purpose-built for killing. Goose can nevertheless rival or exceed many birds in sustained migratory endurance.
- **Versus Goliath Birdeater:** Goose has vastly more absolute Raw Power and mobility despite the spider's much higher Special from venom/urticating defenses. This preserves the anti-pound-for-pound rule.
- **Versus Gibbon:** Goose is far below in Raw Power, grappling and close-range damage, but superior in long-distance flight mobility and likely endurance.
- **Versus Giraffe:** the size/power gap must remain enormous. Goose aggression does not justify scores remotely close to megafaunal Attack or Defense.
- **Versus Golden Eagle Agility:** Goose at 76.0 stays meaningfully below the eagle's 88.0 because sustained flight speed is not equivalent to aerial predatory maneuverability.
- **Inflation check:** Attack 25.0 and Defense 20.0 intentionally resist the cultural meme of the 'dangerous goose.' Ferocity 73.0 captures the well-supported willingness to confront without pretending that willingness equals damage output.

## Verification against staging rules

- Representative healthy adult and sex choice documented: **yes**
- Population/dimorphism/uncertainty documented: **yes**
- All factual schema fields proposed: **yes**
- No fabricated PSI: **yes**
- All 12 current substats with one decimal: **yes**
- Six headline ratings with one decimal: **yes**
- Exactly two special abilities: **yes**
- Exactly two unique traits: **yes**
- Expanded ecology/profile/fun facts/future fields: **yes**
- Direct source ledger: **yes**
- Cross-roster normalization: **yes**
- Mandatory image section and truthful pending status: **yes**
- Production data/site/live images changed: **no**
