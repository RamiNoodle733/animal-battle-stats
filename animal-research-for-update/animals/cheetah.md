# Cheetah Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Cheetah
- **Scientific name:** *Acinonyx jubatus* (Schreber, 1775)
- **Family:** Felidae
- **Status:** Living
- **Exact animal represented:** the living cheetah *Acinonyx jubatus*. The canonical combat specimen uses a healthy mature African male rather than the much rarer Asiatic population.
- **Canonical specimen:** healthy fully mature adult **male**, approximately **46.0 kg**, **80.0 cm shoulder height**, **130.0 cm head-body length**, plus a long 60-84 cm balancing tail.
- **Why male:** males average larger than females. A standardized study of 241 wild Namibian cheetahs found significant sexual dimorphism across measured morphology, while broad species accounts also identify males as the larger sex. Adult males additionally engage in territorial competition and commonly form coalitions.
- **Population variation:** body size varies among regions, populations and sampling methods. The 2003 Namibian morphometric study explicitly warns that differences among datasets can reflect collection methodology. The 46 kg canonical male is representative of a substantial adult male, not a 60-72 kg exceptional individual.

## 2. Physical measurements

### Mass and dimensions

Animal Diversity Web gives a species-wide mass range of **21-72 kg**, head-body length **112-150 cm**, tail **60-80 cm**, and shoulder height **67-94 cm**. San Diego Zoo gives **38-65 kg**, body length **1.0-1.4 m**, shoulder height **63-94 cm**, and tail **66-84 cm**, while noting males are larger. The standardized 241-animal Namibian study confirms significant sexual dimorphism and shows why regional/methodological context matters.

Recommended representative male values:

- **Canonical `weight_kg`: 46.0 kg**
- **Canonical `height_cm`: 80.0 cm at shoulder**
- **Canonical `length_cm`: 130.0 cm head-body**
- **Tail context:** approximately 60-84 cm
- **Confidence:** high for overall dimensions and male-biased dimorphism; moderate-high for the selected representative single values.

### Speed, acceleration and turning

The strongest performance evidence is Wilson et al.'s wild-cheetah GPS/inertial study. Five adult cheetahs, three females and two males, produced data from **367 runs over 17 months**. The maximum recorded speed was about **25.9 m/s (93 km/h, 58 mph)**. Crucially, most hunts were slower. Maximum lateral acceleration often exceeded **13 m/s²** below 17 m/s, and the study emphasized acceleration, braking, grip and maneuverability rather than top speed alone. A separate functional-anatomy paper uses approximately **29 m/s** as cheetah top-speed context, but the field-measured 25.9 m/s is the better conservative canonical value because it was directly recorded in free-ranging hunts.

- **Canonical `speed_mps`: 25.9 m/s**
- **Context:** directly measured wild maximum in the 2013 field dataset, not a universal guaranteed maximum for every adult.
- **Confidence:** high for the measured dataset, moderate-high for using its observed maximum as the site field.

The cheetah's locomotor package includes long distal limbs, a flexible spine, large respiratory passages, specialized hindlimb and axial musculature, weakly retractile claws that improve traction, and a long tail used dynamically during high-speed turning.

### Lifespan

Smithsonian reports an average wild lifespan of roughly **8-10 years**, while its male-specific releases cite a median wild male life expectancy around **6-8 years**. San Diego Zoo lists about **12 years on average** without restricting that number to wild males.

- **Canonical `lifespan_years`: 8.0 years**
- **Reason:** appropriate representative wild-adult value that does not substitute captive longevity for wild survival.
- **Confidence:** moderate-high.

### Teeth, bite and claws

Cheetahs kill primarily by tripping or destabilizing prey and applying a sustained throat/neck bite. Their skull is unusually lightweight and short-faced for a large felid, with enlarged nasal passages supporting high ventilation. This sprint specialization limits the massive skull and jaw-muscle architecture seen in more power-oriented *Panthera* cats.

No robust species-specific bite pressure measurement with defensible contact area was found in this run. Internet PSI values are therefore rejected.

- **Canonical `bite_force_psi`: 0.0**
- **Interpretation:** unresolved reliable pressure value, not absence of a functional killing bite.
- **Claws:** weakly retractile/blunted compared with most felids, providing running traction but less hook-like grappling performance than strongly retractile cat claws.
- **Dewclaw:** useful in prey contact/tripping during pursuit.

### Protection and body construction

The cheetah has no armor, thick hide, heavy skull or exceptionally robust grappling frame. Its deep chest and athletic musculature support locomotion, but the long, light limbs and speed-specialized body trade some close-combat robustness for acceleration. Against lions, hyenas and other larger competitors, cheetahs commonly avoid direct conflict and may surrender kills.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 46.0,
  "height_cm": 80.0,
  "length_cm": 130.0,
  "speed_mps": 25.9,
  "lifespan_years": 8.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **46.0 kg:** representative mature male consistent with male-biased size and well below exceptional upper records.
- **80.0 cm:** representative shoulder height within strong 63-94 / 67-94 cm institutional ranges.
- **130.0 cm:** representative head-body length within the well-supported 112-150 cm range.
- **25.9 m/s:** approximately 93 km/h, directly recorded in instrumented free-ranging hunts; stronger evidence than folklore 110-120 km/h claims.
- **8.0 years:** conservative representative wild lifespan compatible with Smithsonian's 8-10 year overall estimate and 6-8 year male median context.
- **0.0 PSI:** no defensible species-specific pressure measurement located. Do not infer PSI from skull shape, prey size or unsourced web lists.

## 4. Combat biology

### Primary and secondary weapons

**Primary weapon:** the jaws and canine teeth, used for a sustained throat or neck bite after prey has been caught and destabilized.

**Secondary weapons:** forepaws, dewclaws and body momentum during the chase. The paws can hook or strike at fleeing prey, but the cheetah is not built for the heavy forelimb grappling characteristic of lions, leopards or jaguars.

### Offensive mechanics

A cheetah's attack sequence is unusually locomotion-dependent. It stalks to shorten the starting distance, accelerates explosively, matches evasive prey through repeated steering corrections, closes from behind or the side, and uses paw contact to disrupt the prey's stride. Once prey falls or is sufficiently controlled, the cheetah applies a suffocating throat bite.

This makes the cheetah exceptionally dangerous to appropriately sized cursorial prey but less dominant in a stationary face-to-face fight. Its killing system depends on creating positional advantage through speed rather than overpowering an opponent with a massive skull or forequarters.

### Locomotion and maneuverability

Cheetah locomotion is among the best-measured extreme performances in terrestrial mammals. The 2013 wild study is especially important because it shows why Agility cannot simply equal top speed. Successful hunting correlated strongly with acceleration, deceleration, grip and maneuvering. Maximum lateral acceleration often exceeded 13 m/s² at moderate rather than maximum speed. The cat can therefore redirect a pursuit while prey zigzag, brake sharply, and reaccelerate.

The long tail acts as a dynamic stabilizer/counterbalance. Weakly retractile claws increase traction. A highly flexible spine increases stride length and helps the limbs sweep through extreme running positions.

### Endurance and recovery

The cheetah is a burst specialist. High-output chases are short and energetically expensive. It cannot sustain near-maximum sprint performance over long distances like a cursorial endurance canid. After a chase and kill, recovery and vigilance matter because larger carnivores can steal prey.

This distinction is critical to ABS calibration: elite sprint mechanics justify elite Speed and Agility, but not elite Stamina.

### Senses

Cheetahs hunt primarily by sight and are strongly associated with daylight/crepuscular visual hunting. Elevated lookouts such as termite mounds improve prey detection. Hearing and smell remain functional felid senses, but there is no basis to place the cheetah with extreme sensory specialists such as Barn Owl or echolocating taxa.

### Intelligence and tactics

Cheetahs show flexible stalking, prey selection, route adjustment and pursuit decisions. Males can coordinate in coalitions, and social structure differs sharply by sex: females are usually solitary except with dependent young, while males often form stable coalitions, frequently with brothers. Coalition behavior improves territorial defense and can expand the prey or rivals a male group can confront.

This is meaningful tactical competence, but it does not justify primate/corvid-level general problem-solving scores.

### Hunting behavior

Typical prey are small to medium ungulates, including gazelles and other antelope, with hares and other smaller vertebrates also taken. Hunting usually combines visual detection, stalking and a short explosive chase. The wild instrumentation study also demonstrated that cheetahs are not limited to perfectly open daytime chases; runs occurred across varied vegetation and times.

### Intraspecific fighting

Adult males are territorial and may fight rival males. Coalitions can cooperate in territorial competition. Cheetahs possess functional teeth and claws and can seriously injure conspecifics, but their conflict behavior exists within a body plan where avoiding crippling injury is especially important because locomotor impairment directly threatens hunting survival.

### Predator and competitor defense

Cheetahs coexist with lions, spotted hyenas, leopards and other carnivores capable of killing them or stealing kills. Their primary defense is detection, avoidance and rapid escape. Adults are dangerous to small threats, but against a lion or large hyena the cheetah's low robustness and lighter weapon system are major disadvantages.

### Environmental strengths

- Open or semi-open ground provides room to accelerate and see prey.
- Firm ground improves traction and steering.
- Moderate cover helps stalking shorten the chase.
- Elevated terrain improves visual scanning.
- Space to disengage magnifies the value of acceleration.

### Environmental limitations

- Dense obstacles reduce the usable advantage of maximum speed.
- Slippery, broken or highly cluttered ground can compromise traction and long-limbed sprint mechanics.
- Confined spaces remove the distance needed to create pursuit advantage.
- Prolonged combat punishes a burst-specialist physiology.
- Larger grappling predators dominate if they secure close contact.

### Major weaknesses

1. Light, speed-specialized frame has limited absolute durability for a predator of its height.
2. Less robust skull, jaw apparatus and forequarters than similarly sized power-oriented felids.
3. Weakly retractile claws are excellent traction tools but weaker grappling hooks than typical felid claws.
4. High-output sprinting is brief rather than endurance-based.
5. A stationary close-range brawl wastes much of its defining advantage.
6. Injury to limbs or spine is disproportionately costly because survival depends on high-performance locomotion.

### Matchup archetypes

**Good matchups:** similarly sized or smaller opponents that need to chase or flee in open terrain, fragile cursorial animals, targets vulnerable to trip-and-throat-bite sequences, and opponents that cannot match repeated acceleration and direction changes.

**Bad matchups:** heavily armored animals, stocky grapplers, large canids/hyenas with greater sustained fighting endurance, power-built felids, and any megafauna opponent that cannot be meaningfully damaged by the cheetah's bite system.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based justification |
|---|---:|---|
| **Size** | **31.0** | A 46 kg male is substantial but far below large carnivores and megafauna on the absolute roster. |
| **Raw Power** | **34.0** | Explosive hindlimb/axial power is exceptional for acceleration, but absolute wrestling/striking force is modest. |
| **Weaponry** | **42.0** | Functional killing bite, canines, paws and dewclaws, but less robust grappling and jaw specialization than power felids. |
| **Protection** | **18.0** | Fur and ordinary felid tissues provide little protection; no armor or heavy defensive structure. |
| **Toughness** | **27.0** | Athletic predator physiology, but lightweight limbs/frame and dependence on locomotor integrity limit trauma tolerance. |
| **Speed** | **98.0** | Instrumented wild maximum around 25.9 m/s is an extreme terrestrial roster value and the best-supported land-speed anchor researched so far. |
| **Maneuverability** | **96.0** | Field data show extraordinary acceleration, braking and lateral acceleration, not merely straight-line speed. |
| **Endurance** | **43.0** | Capable of repeated daily hunting activity but specialized for brief high-output chases rather than sustained pursuit. |
| **Recovery** | **36.0** | Normal mammalian recovery with no exceptional regeneration; sprint recovery is necessary but not equivalent to long-duration endurance. |
| **Tactics** | **65.0** | Flexible stalking/pursuit decisions and male coalition coordination support strong predator tactics. |
| **Senses** | **66.0** | Strong visual predator with useful hearing/smell, but below extreme sensory specialists. |
| **Ferocity** | **54.0** | Decisive predator and territorial fighter, yet typically avoids costly conflict with larger carnivores. |
| **Abilities** | **78.0** | The integrated sprint-steering system is genuinely matchup-changing, though it does not directly overcome armor or huge mass gaps. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **41.0** | A 46 kg predator can kill medium ungulates with a throat bite, but its jaws and forequarters are less destructive than power-built large felids. |
| **Defense** | **24.0** | Escape ability is superb, but physical protection and trauma tolerance are low; Agility is not double-counted as armor. |
| **Agility** | **97.0** | Instrumented acceleration, braking and lateral acceleration justify near-ceiling terrestrial agility independent of simple top speed. |
| **Stamina** | **43.0** | Strong general athletic fitness but clear burst specialization prevents high endurance placement. |
| **Intelligence** | **62.0** | Flexible hunting decisions, learning and coalition behavior are meaningful but below high-cognition primates and corvids. |
| **Special** | **76.0** | The integrated high-speed locomotor package changes matchups dramatically, but remains a movement specialization rather than venom, electricity or armor-breaking biology. |

### Cross-category guardrails

- Speed is not copied directly into Attack.
- Escape ability is not treated as physical Defense.
- Sprint power is not treated as sustained Stamina.
- Coalition behavior contributes to Tactics/Intelligence only where behaviorally relevant and does not inflate a single animal's mass or raw power.
- The famous fastest-land-animal reputation does not justify 90+ scores outside the locomotor categories.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Vector Burst**: the integrated spine, limb and traction system produces extraordinary acceleration, braking and lateral force, allowing the cheetah to rapidly change velocity and pursuit angle rather than merely run fast in a straight line.
2. **Pursuit Rudder**: the long mobile tail and body control stabilize aggressive high-speed turns, helping the cat track prey through evasive direction changes.

### Unique traits

1. **Traction Claws**: weakly retractile, relatively blunt claws remain exposed enough to improve grip during sprinting, trading some classic felid grappling specialization for running traction.
2. **Airflow Skull**: enlarged nasal passages and a lightweight, short-faced skull reflect the unusual respiratory and mass-saving compromises of a felid specialized for extreme pursuit speed.

## 8. Expanded profile content

### Habitat

Cheetahs occupy savannas, grasslands, shrublands, dry woodlands and semi-desert environments. They are not restricted to treeless plains. Effective habitat must provide prey, enough visibility or vantage structure for detection, and sufficient space for pursuit and avoidance of dominant carnivores.

### Geographic range

The modern species survives mainly in fragmented populations in sub-Saharan Africa, with a tiny remnant Asiatic population in Iran. Many populations occur outside formally protected areas, increasing exposure to livestock conflict, habitat fragmentation and prey depletion.

### Diet and ecology

Cheetahs are obligate carnivores specializing largely on small to medium ungulates, supplemented by smaller vertebrates. Their ecological niche is shaped by speed and by competition with larger carnivores. A successful kill does not guarantee possession; kleptoparasitism by stronger competitors can erase the energetic payoff of a chase.

### Social structure

Females are usually solitary except when raising cubs. Adult males may be solitary but commonly form coalitions, often with brothers, that defend territories and cooperate. This sex difference is one of the most distinctive features of cheetah social ecology.

### Reproduction and life history

Females raise cubs without male parental care. Cubs face heavy predation pressure, and juvenile survival varies substantially among ecosystems. San Diego Zoo lists maturity at roughly 2-3 years. Wild adult longevity is commonly under a decade, although individuals in human care can live substantially longer.

### Conservation

Cheetahs face habitat loss and fragmentation, prey depletion, conflict with livestock owners, illegal trade and low-density population challenges. Conservation is complicated by the fact that substantial portions of the remaining range lie outside protected areas. USGS-supported work in north-central Namibia, for example, documented cheetahs in human-used conservancy landscapes and emphasized the importance of nonprotected areas.

### Major adaptations

- Flexible spine and long limbs for extreme stride mechanics.
- Powerful axial/hindlimb systems for acceleration.
- Weakly retractile claws for traction.
- Long tail for high-speed stability and turning.
- Enlarged nasal passages and deep thorax supporting intense aerobic demand around sprinting.
- Small aerodynamic head and lightweight build.
- High visual dependence and daytime hunting tendency that reduce some competition with nocturnal predators.

### Human interaction

Cheetahs generally avoid humans, but livestock conflict can lead to persecution where wild prey is depleted or husbandry exposes vulnerable stock. They have also been captured historically for coursing and prestige. Modern conservation programs emphasize coexistence, prey conservation, anti-trafficking measures and landscape connectivity.

### Genuine fun facts

- The best-known wild instrumentation study recorded **367 runs** from five adult cheetahs rather than estimating speed from a vehicle or anecdote.
- The same study showed that the fastest run was not the whole story: lateral acceleration and braking were central to successful hunting.
- Cheetahs cannot roar like *Panthera* cats; Smithsonian documents chirps, purrs, growls, hisses and distinctive stutter vocalizations.
- Individual chirps can differ enough that cheetahs may recognize one another acoustically.
- Male coalitions are often composed of brothers and can persist as long-term social units.
- The claws are only weakly retractile, a rare felid condition that improves traction.
- A cheetah's long tail is an active steering/stability structure, not merely passive decoration.
- Despite their reputation for open-plains daylight chases, instrumented wild cheetahs also hunted in denser cover and at night.

### Concise site-ready summary

The cheetah is a 46 kg pursuit-specialist felid whose real superpower is not simply top speed. Instrumented wild hunts show extreme acceleration, braking and lateral maneuvering, letting it track evasive prey before finishing with a throat bite. That locomotor specialization comes with tradeoffs: compared with power-built big cats, the cheetah has a lighter frame, less robust grappling equipment and poor prospects in prolonged close combat. In ABS terms it is a near-ceiling Agility specialist, not a near-ceiling all-around fighter.

### Rich narrative profile

A cheetah fight begins before contact. Where a lion or jaguar can impose itself through mass, skull strength and forelimb control, the cheetah tries to solve the matchup geometrically. It creates separation, accelerates, chooses an angle, brakes, redirects and attacks an opponent's balance. Its anatomy is organized around this sequence. Long legs lengthen the stride, the flexible back adds range of motion, exposed claws grip the surface, and the tail helps manage the violent changes in direction that real prey force upon a pursuer.

The 2013 wild-cheetah work is especially useful for battle-stat design because it corrects the cartoon version of the animal. Cheetahs did not simply hit one headline maximum and win by running straight. Most hunting occurred below maximum speed. What separated the predator was the ability to generate and shed velocity rapidly while turning hard enough to remain connected to evasive prey. That is why Agility deserves a higher placement than a simplistic speed-to-stat conversion would imply.

But specialization creates limits. A cheetah that cannot build speed, that is forced into a clinch, or that must absorb repeated heavy impacts loses much of what makes it exceptional. The same lightness that assists acceleration means less mass behind a strike and less tissue to absorb trauma. Its claws are useful for traction and prey destabilization but not equivalent to the heavy grappling arsenal of a leopard. Its throat bite is a proven killing mechanism on prey, yet it is not evidence for an invented high PSI value.

Against small and medium cursorial opponents on open ground, this package is terrifying. Against a heavily armored animal or a much larger grappling predator, the cheetah's best biological decision is often to disengage. ABS should preserve both truths at once: this is one of the most extraordinary terrestrial movers ever measured, and it is still a roughly 46 kg cat living in a world with hyenas, lions, bears, bovids and megafauna.

### Future structured-field proposals

- `canonical_sex`: male
- `tail_length_cm`: 72.0 representative
- `max_measured_speed_mps`: 25.9
- `max_lateral_acceleration_mps2`: >13.0 in the cited field context
- `locomotion_mode`: terrestrial cursorial sprint
- `primary_kill_method`: throat/neck suffocation bite
- `social_combat_mode`: solitary or male coalition
- `sprint_specialist`: true
- `bite_force_evidence_type`: unresolved, no canonical PSI

## 9. Mandatory image-quality section

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/cheetah.png` (not created)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Cheetah_(Acinonyx_jubatus)_male_..._(52120987136).jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/e/ee/Cheetah_%28Acinonyx_jubatus%29_male_..._%2852120987136%29.jpg
- **file_format_verified:** source JPEG verified by Commons metadata; final PNG does not exist
- **alpha_verified:** no
- **full_body_verified:** no
- **adult_verified:** not explicit on the selected Commons page
- **sex_verified_or_unknown:** male verified by Commons description/category
- **license_status:** CC BY-SA 2.0, Flickr license reviewed by Commons
- **notes:** The selected Bernard DUPONT source is exact *A. jubatus*, explicitly male and 4206x2942. Direct visual inspection shows excellent body/paw detail but the tail reaches/crosses the left frame edge, so it fails the strict complete-tail standard and is not promoted to a full-body source. Other broad searches found visibly complete-tail commercial photographs, but redistribution permission was not suitable for staging. Continue seeking a reuse-permitted, explicit healthy adult male with the entire tail and all four paws clearly inside frame. Current GitHub writer accepts UTF-8 text only, so no binary PNG is claimed.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding/context | Confidence / caveat |
|---|---|---|---|---|
| Wilson et al., Nature 2013 / RVC summary | https://www.sciencedaily.com/releases/2013/06/130614082900.htm | speed, acceleration, maneuverability | 367 runs from 3 adult females + 2 adult males; wild maximum about 93 km/h; lateral acceleration often >13 m/s² | **High** for field performance; summary links primary Nature work |
| Hudson et al., Journal of Anatomy 2011 | https://onlinelibrary.wiley.com/doi/full/10.1111/j.1469-7580.2010.01310.x | hindlimb functional anatomy | quantified cheetah/greyhound musculoskeletal anatomy; discusses 29 m/s cheetah top-speed context and axial contribution | **High** peer-reviewed; 29 m/s is context, not chosen canonical field maximum |
| Marker & Dickman, Journal of Mammalogy 2003 | https://academic.oup.com/jmammal/article/84/3/840/2373254 | morphology, dimorphism, population/method uncertainty | 241 wild Namibian cheetahs; significant sexual dimorphism; standardized measurement warning | **High** peer-reviewed |
| Cheetah Conservation Fund copy of Marker/Dickman abstract | https://cheetah.org/resource-library/morphology-physical-condition-and-growth-of-the-cheetah/ | morphology/growth | both sexes reach adult body mass at 49-96 months in sample | **High-moderate**, organizational copy of peer-reviewed study |
| Animal Diversity Web | https://animaldiversity.org/accounts/Acinonyx_jubatus/ | dimensions, claws, morphology | 21-72 kg, 112-150 cm body, 60-80 cm tail, 67-94 cm shoulder; male larger; weakly retractile claws | **High-moderate** institutional synthesis |
| Smithsonian National Zoo | https://nationalzoo.si.edu/animals/cheetah | lifespan, vocalization, behavior | wild average lifespan 8-10 years; documents chirps/purrs/stutters and social communication | **High-moderate** zoo synthesis |
| San Diego Zoo | https://animals.sandiegozoo.org/animals/cheetah | dimensions, sex difference, life history | 38-65 kg, 63-94 cm shoulder, 1-1.4 m body; males larger; maturity 2-3 years | **High-moderate** major zoo synthesis |
| Smithsonian male mortality release | https://www.si.edu/newsdesk/releases/elderly-male-cheetah-dies-smithsonian-s-national-zoo | male lifespan context | median wild male life expectancy 6-8 years | **Moderate-high** institutional, not a demographic primary paper |
| USGS / Fabiano et al. 2020 | https://www.usgs.gov/publications/trends-cheetah-acinonyx-jubatus-density-north-central-namibia | conservation, nonprotected landscapes | long-term north-central Namibia density work; importance of nonprotected areas | **High** agency record of peer-reviewed study |
| Wikimedia Commons, Bernard DUPONT | https://commons.wikimedia.org/wiki/File:Cheetah_(Acinonyx_jubatus)_male_..._(52120987136).jpg | image provenance | exact male, 4206x2942, CC BY-SA 2.0 | **High** provenance, but **fails strict tail framing** |

### Evidence conflicts and uncertainty

1. **Maximum speed:** published values often reach 100-110+ km/h. The canonical 25.9 m/s uses a directly instrumented wild maximum from a strong field dataset rather than choosing the largest popular claim. Hudson et al.'s 29 m/s context is retained as evidence that higher performance has been reported, not as the canonical field value.
2. **Mass:** broad references extend to 65-72 kg, but a representative adult male should not equal the upper record. Regional sampling and measurement protocols differ. The 46 kg canonical value intentionally represents a substantial mature male without record anchoring.
3. **Lifespan:** wild overall averages and male-specific medians differ. Eight years is a practical representative wild value, while 12-15 year captive averages should not replace wild ecology.
4. **Bite force:** no trustworthy PSI value is promoted. A functional throat bite does not imply a known pressure measurement.
5. **Image:** the strongest reuse-permitted explicit-male source inspected this run is high resolution but does not pass the strict entire-tail requirement. It remains pending rather than being mislabeled complete.

## 11. Cross-animal normalization notes

- **Versus Caracal:** Cheetah is roughly 2.7 times the canonical mass and has a stronger absolute killing package, so Attack 41.0 sits below but near Caracal's 44.0 only because the caracal is more power-oriented for its size. Cheetah's Agility 97.0 clearly exceeds Caracal 90.0 due to exceptional measured acceleration/turning performance.
- **Versus African Wild Dog:** Cheetah is heavier and far faster/more explosive, but the wild dog should retain a major Stamina advantage because it is built for sustained cooperative pursuit rather than brief sprinting.
- **Versus African Lion:** Cheetah Attack 41.0 and Defense 24.0 must remain far below the lion's large-body, heavy-jaw and grappling capability. Locomotor superiority does not erase the enormous close-combat power gap.
- **Versus Cape Buffalo:** the buffalo's 750 kg mass, horns and impact power make direct combat overwhelmingly unfavorable despite the cheetah's movement advantage. This prevents speed from leaking into Attack.
- **Versus Capuchin Monkey:** cheetah has much greater absolute physical combat capability, while the capuchin remains substantially higher in general Intelligence.
- **Versus Barn Owl:** both are specialized movers, but the cheetah dominates terrestrial speed and absolute force; Barn Owl retains superior sensory specialization and aerial positional access.
- **Roster-wide flag:** Agility 97.0 is intentionally near-ceiling and should be revisited at the 50-animal checkpoint against future pronghorn/gazelle/dragonfly/falcon-like specialists. Do not automatically award 100.0 simply because the cheetah is the fastest land mammal.

## Final verification against README.md and CALIBRATION.md

- Healthy representative adult selected: **yes**
- Larger/primary fighting sex considered: **yes, mature male**
- Dimorphism/population variation documented: **yes**
- Canonical factual fields supplied: **yes**
- Unsupported bite PSI fabricated: **no**
- Absolute 0.1-100 roster scaling used: **yes**
- Speed kept distinct from Agility: **yes**
- Proportional strength leakage avoided: **yes**
- All current core substats scored with one decimal: **yes**
- Six headline ratings scored with one decimal: **yes**
- Exactly two named special abilities: **yes**
- Exactly two unique traits: **yes**
- Expanded ecology/profile material included: **yes**
- Direct source ledger included: **yes**
- Cross-animal normalization included: **yes**
- Image requirement handled truthfully: **yes, source remains unverified for strict full body and no PNG is claimed**
