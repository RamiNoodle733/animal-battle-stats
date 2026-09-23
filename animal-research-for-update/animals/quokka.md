# Quokka research report

## 1. Identity and canonical specimen

- **Roster label:** Quokka
- **Resolved taxon:** Quokka, *Setonix brachyurus* (Quoy & Gaimard, 1830), family Macropodidae. It is the only living species in *Setonix*.
- **Living/extinct:** Living.
- **Canonical combat specimen:** healthy prime **adult male**, representative mass **3.5 kg**, head-body length **49.0 cm**, tail **28.0 cm**, total nose-to-tail length about **77.0 cm**.
- **Why male:** the Western Australian recovery plan reports male head-body length averaging 487 mm and mass 2.7-4.2 kg, versus female average 468 mm and 1.6-3.5 kg. ADW also notes that larger males occupy higher positions in the male social hierarchy. The male is therefore the appropriate stronger fighting sex without selecting a record individual.
- **Population variation:** island and mainland populations experience different food, water, predator and breeding regimes. Handbook treatment notes body size decreases with latitude. Rottnest animals are exceptionally visible but should not be assumed to represent every mainland population.

## 2. Physical measurements

### Mass and dimensions
The Western Australian recovery plan gives **2.7-4.2 kg** body mass, **400-540 mm** head-body length, **25.8-31.0 cm** tail length and **100-120 mm** hind-foot length. Its sex-specific summary gives males an average head-body length of **487 mm** and the same 2.7-4.2 kg male mass range. The Handbook of the Mammals of the World treatment independently gives males 43-54 cm head-body and 25-31 cm tail, with 2.7-4.2 kg mass.

A **3.5 kg** male is near the middle of the documented male range and avoids treating 4.2 kg as normal. The canonical 49.0 cm head-body length closely matches the reported male mean. Total length is represented as 77.0 cm by adding a representative 28.0 cm tail, while keeping the underlying components explicit.

### Height
Authoritative sources commonly report head-body and tail length rather than shoulder height. No strong primary or agency shoulder-height series was recovered. `height_cm` is therefore proposed as **0.0** rather than importing a tertiary estimate as fact.

### Speed and locomotion
No defensible instrumented species-specific maximum speed was found. Web claims around 20 km/h trace to tertiary animal sites rather than a measurement study. `speed_mps` remains **0.0**. This does not mean the animal is immobile: Australian Museum describes bounding interspersed with hopping, established runways through dense vegetation, and tree climbing to reach food. ADW describes strong hind legs supporting hopping and climbing.

### Lifespan
Australian Museum states quokkas live about **10 years** on average. The WA recovery plan says they are known to live **more than 10 years in the wild** and up to **14 years in captivity**. The canonical field is **10.0 years**, a representative wild value rather than a captive maximum.

### Bite force and natural weapons
No reliable species-specific bite-force measurement or pressure value was found, so `bite_force_psi` is **0.0**. Quokkas possess herbivorous macropod dentition rather than carnivore cutting weapons. Their practical close-combat tools are the incisors/jaws, clawed forefeet and especially powerful hind limbs and elongated hind feet. No defensible species-specific kick-force measurement was found, so kicking is described biomechanically but not assigned invented Newtons.

### Defenses
There is no armor, shell, thick hide, venom or other dedicated structural defense. Dense coarse fur offers minor abrasion protection. Defense is primarily behavioral: concealment in dense vegetation, nocturnal activity, established escape runways, hopping and climbing.

## 3. Proposed canonical factual fields

| Field | Proposed value | Confidence | Rationale |
|---|---:|---|---|
| `weight_kg` | **3.5** | High | Mid-range healthy adult male within 2.7-4.2 kg |
| `height_cm` | **0.0** | High that robust field is unresolved | No strong species-specific shoulder-height series recovered |
| `length_cm` | **77.0** | Moderate-high | ~49 cm representative male head-body plus ~28 cm tail; components documented separately |
| `speed_mps` | **0.0** | High that reliable maximum is unresolved | Tertiary speed claims rejected |
| `lifespan_years` | **10.0** | Moderate-high | Australian Museum average; WA plan says >10 wild, up to 14 captive |
| `bite_force_psi` | **0.0** | High that PSI is unsupported | No defensible measurement/contact-pressure evidence |

**Future structured fields:** `head_body_length_cm: 49.0`, `tail_length_cm: 28.0`, `hind_foot_length_cm: 11.0`, `canonical_sex: male`, and separate locomotor-mode fields for hopping and climbing.

## 4. Combat biology

### Weapons and offensive mechanics
A quokka is a small browsing macropod, not a specialized fighter or predator. Its jaws can bite at contact range and the forefeet can grasp/scratch, but neither is a high-damage roster weapon. The hind limbs are the strongest mechanical system. They are adapted for saltatory propulsion and can produce forceful kicks, yet there is no species-specific kick-force dataset supporting dramatic numerical claims. Attack therefore stays low on the absolute roster scale.

### Defense and durability
At roughly 3.5 kg the canonical animal is physically vulnerable to medium and large predators. It lacks armor and has no chemically protected skin. Coarse fur and a stocky body offer limited passive protection. Its real defense is avoiding contact through dense cover, nocturnal movement, hopping and climbing.

### Locomotion and maneuverability
Australian Museum reports a bounding gait interspersed with hopping and the ability to climb trees for food. Quokkas create paths through dense vegetation that function as feeding and escape runways. Their compact macropod form, strong hind legs and ability to move through thickets support good maneuverability for a small mammal, but no measured top-speed value is available and speed is not used as a proxy for agility.

### Endurance and water economy
The species can survive long periods without free food or water according to Australian Museum. A University of Western Australia physiological study compared Rottnest animals at sites completely lacking free water with animals using brackish water, demonstrating substantial water-balance adaptation. This is ecological resilience, not proof of exceptional continuous sprint endurance, so Stamina is moderate rather than elite.

### Senses
ADW notes color vision and suggests it may aid predator detection. Like other nocturnal mammals, quokkas also use olfactory and auditory information, but no evidence recovered here supports extreme sensory specialization. Senses are useful but not a high-roster special weapon.

### Intelligence and tactics
Quokkas use stable shelter sites, established movement paths and flexible foraging. A peer-reviewed Rottnest study of 45 tagged animals found habitat and tourism development altered space use and home-range overlap, showing behavioral adjustment to human-modified environments. This supports competent mammalian spatial behavior, not primate-like tactical cognition.

### Fighting and social behavior
ADW reports a size-correlated male social hierarchy, with larger males more dominant. This supports genuine intraspecific competition and is another reason to use a healthy adult male as the canonical fighter. The available literature does not characterize quokkas as highly aggressive animals or specialized combatants, so Ferocity remains low-moderate.

### Predation and predator defense
Quokkas are herbivores, not predators. Mainland decline is strongly associated with introduced predators including red foxes and feral cats, showing that their escape toolkit is not sufficient against efficient mammalian carnivores. Dense vegetation is important refuge habitat.

### Environmental strengths
- Dense scrub, heath and thickets provide cover and exploit established escape paths.
- Uneven vegetated terrain rewards compact hopping and climbing.
- Dry environments reward strong water economy and the ability to obtain moisture from vegetation.
- Nocturnal activity reduces heat exposure and some visual-predator pressure.

### Environmental weaknesses
- Open ground removes much of the cover-based defense.
- Deep water and slick terrain reduce terrestrial propulsion advantages.
- Any medium or large carnivore has a severe mass and weapon advantage.
- The short tail provides less balancing leverage than in many larger macropods.

### Matchup archetypes
**Relatively favorable:** similarly tiny unarmored animals with weak weapons, especially where the quokka can disengage through dense vegetation.

**Unfavorable:** carnivores, raptors, venomous attackers, armored animals, and essentially any substantially larger opponent able to force sustained contact.

## 5. Proposed ABS substats

All values are absolute across the 225-animal roster.

| Substat | Score | Justification |
|---|---:|---|
| Size | **14.0** | ~3.5 kg adult male is tiny beside serious mammalian combatants |
| Raw Power | **18.0** | Strong hind limbs for its size, but low absolute force because total mass is small |
| Weaponry | **16.0** | Bite, claws and kicks exist but are unspecialized and short-ranged |
| Protection | **11.0** | Fur only; no armor, shell, thick hide or chemical defense |
| Toughness | **23.0** | Stocky mammal with ecological resilience, still physically vulnerable to carnivores |
| Speed | **35.0** | Mobile saltator, but no defensible measured maximum supports a higher speed rating |
| Maneuverability | **72.0** | Compact hopping, bounding, climbing and thicket-runway use support strong evasive control |
| Endurance | **55.0** | Good routine movement and dry-environment persistence, without evidence for elite sustained output |
| Recovery | **43.0** | Ordinary small-mammal recovery; no regeneration or exceptional trauma recovery demonstrated |
| Tactics | **48.0** | Shelter/runway use and adaptive space use, but limited evidence for complex combat decisions |
| Senses | **53.0** | Useful nocturnal sensory package plus documented color vision, not an extreme specialist |
| Ferocity | **25.0** | Male dominance competition exists, but species is not a predatory or highly combative specialist |
| Abilities | **51.0** | Climbing and dry-environment water economy matter situationally but do not create a lethal special mechanism |

## 6. Proposed six headline ABS ratings

- **Attack: 18.0** - small absolute mass and unspecialized bite/claws keep damage potential low; hind-limb propulsion helps but does not justify pound-for-pound inflation.
- **Defense: 18.0** - no armor or chemical deterrent; defense relies mainly on avoiding contact.
- **Agility: 73.0** - hopping, bounding, climbing and use of dense runways support strong small-mammal evasiveness without inventing a top-speed value.
- **Stamina: 56.0** - respectable routine endurance and water economy, but no evidence of elite prolonged high-output locomotion.
- **Intelligence: 49.0** - competent spatial and foraging behavior with adaptation to altered habitat, below cognitively specialized carnivores, primates and cetaceans.
- **Special: 48.0** - water economy and climbing broaden survival options, but neither is a decisive offensive mechanism.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Thicket Runway Escape** - quokkas maintain paths through dense vegetation for feeding and predator escape, combining compact saltatory locomotion with cover to break pursuit.
2. **Dry-Island Water Economy** - Rottnest populations can persist where free surface water is absent, supported by physiological regulation and moisture-rich plant foods; this improves survival in dry matchups but does not make the animal immune to dehydration.

### Unique traits
1. **Short-Tailed Climber** - despite being a short-tailed small macropod, the quokka can climb shrubs and small trees to reach forage, giving it more vertical mobility than its stocky appearance suggests.
2. **Size-Ranked Males** - male dominance correlates with body size, making the larger adult male a biologically grounded canonical fighter rather than an arbitrary sex choice.

## 8. Expanded profile

### Habitat and range
The quokka is endemic to southwestern Western Australia. Important populations occur on Rottnest Island and Bald Island, with fragmented mainland populations in forest, swamp, heath and dense riparian/thicket habitats. Dense cover is especially important on the mainland where introduced predators occur.

### Diet and ecology
Quokkas are browsing herbivores feeding on leaves, stems, grasses, sedges, succulents, forbs and seasonally fruits/seeds. ADW reports adult Rottnest males consuming roughly 32-45 g of dry food per day depending on season. They can obtain much of their water from vegetation. Their digestive strategy includes foregut fermentation and re-chewing/regurgitation of plant material.

### Social structure
They are mainly nocturnal and can feed alone or in small bands. Social organization is not equivalent to a cooperative hunting society. Males form a size-related dominance hierarchy, while a Rottnest telemetry study found substantial home-range overlap that varied with habitat and tourism development.

### Reproduction and life history
Australian Museum reports about one month gestation, a single young, roughly six months in the pouch and weaning around eight months. The WA recovery plan reports marked geographic breeding differences: island populations breed seasonally, while mainland animals may breed throughout the year. The older captive reproductive study documented gestation around 25-26 days and reproductive maturity as early as 389 days in males and 252 days in females.

### Conservation
The species is **Vulnerable**. The WA recovery plan and Australian Museum identify habitat loss and introduced predators as major pressures. Mainland populations are much more fragmented than historically, while island populations provide important refuges.

### Major adaptations
- Powerful hind limbs and saltatory locomotion.
- Ability to climb low trees and shrubs.
- Dense-cover runway use for movement and escape.
- Strong physiological and behavioral water conservation.
- Flexible herbivorous diet and fermentation of fibrous vegetation.

### Human interaction
Rottnest Island tourism places quokkas in frequent proximity to people. Peer-reviewed tracking work shows tourism-modified habitat changes their movement patterns and spatial overlap. Familiarity with people should not be interpreted as domestication or lack of stress, and feeding wildlife can alter natural behavior and diet.

### Fun facts
- The quokka is the only living member of the genus *Setonix*.
- Males are measurably larger than females, and larger males tend to rank higher socially.
- A quokka can climb shrubs or trees to roughly 1.5 m to reach food.
- Rottnest quokkas can live in areas with no free surface water and rely heavily on plant moisture and physiological water conservation.
- Island and mainland populations differ in breeding seasonality.
- Their famous apparent “smile” is facial anatomy, not evidence of a permanently happy emotional state.

### Concise site summary
The quokka is a small Western Australian macropod whose battle strengths are evasive hopping, thicket mobility, climbing and dry-environment resilience. A healthy adult male has stronger hind limbs and slightly greater mass than a female, but at only about 3.5 kg it remains a low-power combatant with no armor or specialized lethal weapon.

### Rich narrative profile
The quokka's reputation is built around its face, but its real biology is more interesting than the “smiling animal” label. It is a compact macropod adapted to a patchwork of dense vegetation and seasonally dry habitat. Powerful hind limbs move the body in hops and bounds, while established paths through thickets act as practical escape corridors. Unlike many animals with a similar ground-oriented body plan, it can also climb low vegetation to reach food or reposition vertically.

Those abilities make the quokka evasive, not powerful. At roughly 3.5 kg, even a robust adult male has little absolute capacity to injure a medium predator. Its bite and claws are unspecialized and the species lacks armor, venom or a long weapon. ABS Attack and Defense therefore stay low even though maneuverability is comparatively good. This distinction is central to roster-wide scaling: impressive locomotion for a small wallaby does not become gorilla-level power.

The animal is also a dry-country survivor. Rottnest populations persist in places where free water can disappear, obtaining water from vegetation and regulating water balance physiologically. That resilience supports Stamina and Special modestly, but it is not the same as high-speed endurance. In combat terms, the quokka's best strategy is to avoid being caught, use cover, climb when useful and outlast short environmental stress rather than trade damage.

## 9. Evidence and source ledger

| Source | Direct URL | Supports | Finding/context | Confidence / caveat |
|---|---|---|---|---|
| Western Australian Quokka Recovery Plan | https://www.readkong.com/page/quokka-setonix-brachyurus-recovery-plan-3058494 | mass, dimensions, dimorphism, lifespan, breeding, conservation | 2.7-4.2 kg males; male mean HBL 487 mm; females smaller; tail 25.8-31 cm; hind foot 100-120 mm; >10 y wild / up to 14 captive | **High** for plan summary; underlying values originate cited fauna literature |
| Australian Museum, Quokka | https://australian.museum/learn/animals/mammals/quokka/ | taxonomy, dimensions, locomotion, lifespan, behavior, reproduction, conservation | 40-54 cm body, 25-31 cm tail; hopping/bounding, climbing, dense-cover runways; ~10 y; Vulnerable | **High** institutional synthesis |
| Handbook of the Mammals of the World treatment via Plazi | https://treatment.plazi.org/id/039504399643FFA66A6CFE5CF8743FC6 | sex-specific dimensions, distribution, geographic size variation | males 43-54 cm, 2.7-4.2 kg; females 39-50 cm, 1.6-3.5 kg; body size decreases with latitude | **High** taxonomic/species synthesis |
| Animal Diversity Web, *Setonix brachyurus* | https://animaldiversity.org/accounts/Setonix_brachyurus/ | male hierarchy, diet, climbing, color vision, behavior | larger males more dominant; strong hind legs; climbing; color vision; plant diet | **Moderate-high** university species account |
| Jones et al. 1990, General and Comparative Endocrinology | https://pubmed.ncbi.nlm.nih.gov/2295426/ | water physiology | compared Rottnest quokkas where free water was absent versus brackish-water sites | **High** peer-reviewed physiological study |
| Phillips, Chambers & Bencini 2019, Australian Mammalogy | https://research-repository.uwa.edu.au/en/publications/habitats-modified-for-tourism-affect-the-movement-patterns-of-an-/ | movement ecology | 22 male + 23 female telemetry; mean seasonal home range 1.91 ha; tourism habitat altered overlap/space use | **High** peer-reviewed field study |
| Shield 1968, Journal of Zoology | https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/j.1469-7998.1968.tb03060.x | reproduction/development | 25-26 d observed gestation; pouch vacation 185-195 d; earliest maturity 389 d male / 252 d female | **High** primary captive study; older captive context |

### Source conflicts and uncertainty
- Published body measurements are consistent enough for a 3.5 kg, 49 cm head-body male. Total length depends on whether sources include or exclude the tail, so this report explicitly separates head-body and tail.
- Lifespan varies by metric. Australian Museum's ~10-year average and recovery-plan >10-year wild statement are used instead of captive maxima.
- Internet speed values exist but were not traced to a strong measurement source. `speed_mps` therefore remains 0.0.
- No species-specific bite PSI or kick-force measurement was found. Neither is fabricated.

## 10. Cross-animal calibration notes

- At 3.5 kg the quokka must sit far below Black Bear (120 kg), Polar Bear (500 kg), Hyena (75 kg) and large constrictors in absolute Attack/Defense/Raw Power.
- It should exceed tiny insects and small amphibians in absolute raw force simply because it is a kilogram-scale mammal, but not receive a high physical score because its hind legs are impressive relative to body size.
- Agility can legitimately be much higher than Attack because hopping, bounding and climbing are independent locomotor advantages.
- Stamina is kept moderate: water conservation and surviving dry periods are not equivalent to sustained high-output locomotion.
- Special stays below animals with true matchup-changing systems such as platypus venom, pufferfish tetrodotoxin, porcupine quills or electroreception.

## 11. Mandatory image requirement

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/quokka.png` (**not created**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Setonix_brachyurus_(39991867361).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/8/88/Setonix_brachyurus_%2839991867361%29.jpg
- `file_format_verified`: source is a real JPEG photograph; final PNG absent
- `alpha_verified`: **false**
- `full_body_verified`: **false**
- `adult_verified`: **false**; source metadata identifies exact species/location/date but does not explicitly state adulthood
- `sex_verified_or_unknown`: **unknown**
- `license_status`: **CC BY 2.0**, Flickr license reviewed by Commons
- `notes`: Exact-species 3959x2969 reusable photograph from Rottnest Island. Resolution and provenance are strong. The available source-page/preview evidence was insufficient to certify adulthood and strict visibility of the entire tail plus every foot/appendage, so it is not promoted to a completed source. No PNG binary was fabricated because the connected GitHub writer is text-only. A future image pass should prefer an explicit adult male with unobstructed complete anatomy.
