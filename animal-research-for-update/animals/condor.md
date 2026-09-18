# Condor research report

## 1. Identity and canonical specimen

- **Roster name:** Condor
- **Scientific name:** *Gymnogyps californianus* (Shaw, 1797)
- **Exact animal represented:** California condor, confirmed by the live schema. This report does not substitute the larger Andean condor (*Vultur gryphus*).
- **Living/extinct:** Living.
- **Canonical combat specimen:** healthy mature adult male, **10.0 kg**, about **105 cm standing height**, with approximately **2.9 m wingspan**.
- **Sex choice:** male. USFWS reports adults at 17-25 lb (7.7-11.3 kg) and 3-3.5 ft tall, with males generally slightly larger than females. Sexes otherwise look similar.
- **Population/age notes:** adults have bald pink-to-orange heads and extensive white underwing linings; juveniles have darker feathered heads and reduced white. Sexual maturity is about 5-7 years. The species passed through an extreme genetic bottleneck and all living birds descend from a very small founder population.

## 2. Physical measurements and ranges

### Mass, height and wingspan

USFWS gives adult weight **17-25 lb (7.7-11.3 kg)** and standing height **3-3.5 ft (91-107 cm)**, with males generally slightly larger. San Diego Zoo gives **7-11 kg** and **2.5-3.0 m wingspan**. A 10.0 kg male is therefore a large but representative adult combat specimen rather than the 11.3 kg upper endpoint.

- Canonical mass: **10.0 kg**
- Canonical standing height: **105.0 cm**
- Canonical wingspan: **290.0 cm**
- Canonical body length: **115.0 cm**, used as a representative large-adult body-length value; body-length reporting is less standardized than height/wingspan, so confidence is moderate.

### Beak, feet and weapon anatomy

The long hooked beak is the primary damaging structure. USFWS describes it as long, sharp and powerful enough to pierce horse hide, and documents its use for tearing flesh and manipulating objects. This is meaningful cutting ability, but no reliable species-specific bite-force measurement was found.

Unlike eagles and other raptorial killers, California condors do **not** have sharp grasping/killing talons. USFWS explicitly notes that their feet are not capable of killing or grasping objects like raptor talons. This sharply limits close-combat weapon redundancy.

### Flight and movement

California condors are extreme soaring specialists. GPS telemetry from 2013-2018 found an average daily travel distance of **70.1 ± 60.9 km/day**, with more than 71.4% of days below 100 km. Exceptional recorded days reached **477 km** and **415 km**. Earlier telemetry documented flights above 200 km in a day. These are travel-distance data, not top-speed measurements.

No defensible instrumented species-specific maximum airspeed was found in the reviewed primary/agency literature. The old site's 36 km/h value is therefore rejected.

- Canonical `speed_mps`: **0.0** (unknown, not slow or flightless).

### Lifespan

San Diego Zoo reports California condors can live **up to 60 years**. Because robust wild mean adult lifespan is difficult to define for a heavily managed recovering population, the site should not silently treat the maximum as an average. For the existing scalar field, **60.0 years** is retained as a documented species longevity value with the field labeled as maximum-lifespan style evidence.

### Bite force

No credible species-specific bite pressure or force measurement was found. The beak is clearly capable of tearing tough hide, but that cannot be converted to PSI.

- Canonical `bite_force_psi`: **0.0**.

## 3. Proposed canonical factual fields

```json
{
  "weight_kg": 10.0,
  "height_cm": 105.0,
  "length_cm": 115.0,
  "speed_mps": 0.0,
  "lifespan_years": 60.0,
  "bite_force_psi": 0.0
}
```

Recommended future fields:

- `wingspan_cm`: **290.0**
- `daily_travel_km_mean`: **70.1**
- `daily_travel_km_sd`: **60.9**
- `documented_daily_travel_km_max`: **477.0**
- `talons_raptorial`: **false**
- `lifespan_value_type`: `documented maximum`

The live placeholders of 12 kg, 100 cm, 36 km/h, 15 years and 100 PSI were not used as anchors. The 12 kg mass exceeds the normal USFWS/San Diego adult ranges; 15 years is far below documented longevity; the speed and bite-pressure values lack adequate species-specific support.

## 4. Combat biology

### Offensive mechanics

The condor's only serious natural weapon is its hooked beak. It is adapted to open carcasses and can penetrate tough mammalian hide. In a matchup it can peck, slash and tear exposed tissue, especially eyes, face and soft extremities. However, the bird is an obligate scavenger rather than a predator, and its feet lack the sharp grasping talons that make eagles much more effective aerial attackers. A condor should not be modeled as a giant eagle.

### Defense and toughness

Its large wingspan makes it visually imposing but is not armor. Feathers provide modest superficial protection while the torso, neck and especially bare head remain vulnerable to bites and impacts. Flight is its main defensive system: it can disengage from terrestrial threats when terrain and atmospheric conditions permit takeoff. On the ground, its large wings and relatively weak feet create meaningful vulnerability.

### Locomotion and maneuverability

The species is built for low-cost soaring across enormous landscapes. It exploits thermals, slope lift and open terrain, and GPS studies show extensive daily movement. This is outstanding travel efficiency but not proof of elite close-range aerial agility. Large wings and high wing loading constrain rapid powered takeoff and tight low-altitude maneuvering compared with smaller raptors.

### Endurance and recovery

Travel endurance is excellent when soaring conditions cooperate. Average GPS-tracked movement of 70 km/day and rare >400 km days demonstrate extraordinary range. However, much of this movement is supported by atmospheric lift rather than sustained flapping. Stamina is therefore high but not treated as equivalent to high-output muscular endurance.

### Senses

California condors primarily locate carrion visually. NPS and USFWS describe excellent eyesight and use of other scavenging birds as cues. They do not receive the turkey vulture's famous olfactory specialization by default.

### Intelligence and tactics

USFWS documents object manipulation, play, tug-of-war, tossing/chasing/retrieving objects, beak-assisted modification of roosting sites, and manipulation of rocks and objects in nest caves. Feeding groups use a strict dominance hierarchy. These observations support substantial learning, exploration and social awareness, but not corvid-level tool cognition without stronger comparative evidence.

### Fighting and social behavior

Condors feed socially, with dominant birds eating first and taking preferred carcass portions. Their social conflicts are therefore real but generally involve displacement and access rather than specialized killing. Pair bonds persist across seasons and parents share incubation and chick care. Group feeding can improve carcass access but is not modeled as coordinated combat.

### Predation and scavenging behavior

California condors are obligate scavengers. They do not normally kill prey for food. Carrion includes deer, cattle and marine mammals. A condor can consume roughly 3-4 lb in one feeding and then go several days without another meal.

### Environmental strengths

- Open mountains, cliffs and sparse landscapes with dependable thermals or slope lift.
- Long-distance scouting over enormous areas.
- High perches that permit low-cost takeoff.
- Excellent visual detection of carcasses and other scavengers.

### Environmental weaknesses

- Ground starts and cramped spaces suppress the advantage of huge soaring wings.
- No raptorial talons for grappling or pinning.
- Bare head/neck and lightly protected avian body are vulnerable in close combat.
- Powered flight is more costly than soaring, especially during takeoff.
- Lead poisoning remains a major real-world mortality threat, though it is not a normal battle weakness.

### Matchup archetypes

- **Strongest relative matchup:** small terrestrial animals that cannot reach a safely airborne condor and have exposed soft tissue, although the condor is behaviorally not a predator.
- **Mixed:** similarly sized birds without strong grappling weapons, where reach and beak matter but maneuverability decides contact.
- **Poor:** eagles and other raptors with true talons, which have much better capture and puncture mechanics.
- **Very poor:** medium and large terrestrial carnivores once the condor is grounded, because flight escape is more realistic than winning a close fight.

## 5. Proposed ABS substats

All scores are absolute across the 225-animal roster.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **28.0** | A 10 kg bird with a large neck and beak has useful force, but little absolute power beside mammalian predators and megafauna. |
| Weaponry | **35.0** | Sharp hooked beak can tear hide, but absence of killing talons is a major limitation. |
| Ferocity | **29.0** | Dominance disputes occur, but the species is an obligate scavenger rather than an active prey-killer. |
| Protection | **14.0** | Feathers offer limited protection; no armor, thick hide or robust defensive structure. |
| Toughness | **27.0** | Large for a flying bird and long-lived, but avian soft tissues and exposed head/neck remain vulnerable. |
| Maneuverability | **67.0** | Strong soaring control and three-dimensional escape, but huge wings are not optimized for tight close-range aerobatics. |
| Speed | **61.0** | Large soaring bird likely capable of useful airspeed, but no defensible species-specific maximum was found; score is conservative and editorial. |
| Endurance | **84.0** | GPS data show 70.1 km/day average movement and exceptional >400 km days, largely through efficient soaring. |
| Recovery | **55.0** | Long-lived, resilient adult physiology, but no unusual rapid healing mechanism is documented. |
| Tactics | **63.0** | Social hierarchy, object manipulation, environmental exploration and flexible scavenging decisions support above-average behavioral competence. |
| Senses | **78.0** | Excellent long-range vision is central to locating carrion and other scavengers. |
| Abilities | **68.0** | Thermal soaring and extremely efficient long-distance aerial search are distinctive, but not directly lethal. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **34.0** | Powerful hooked beak can damage tissue and penetrate hide, but lack of predatory talons and prey-killing behavior caps offense. |
| **Defense** | **22.0** | Flight can prevent contact, but the body itself has little armor and is vulnerable if grounded. |
| **Agility** | **70.0** | Excellent soaring control and aerial repositioning, moderated by enormous wings and limited tight-space performance. |
| **Stamina** | **82.0** | GPS telemetry establishes exceptional travel endurance, while the score stops short of elite powered-flight endurance because soaring externalizes much of the energetic cost. |
| **Intelligence** | **69.0** | Object play/manipulation, social hierarchy and flexible environmental behavior support strong cognition without importing corvid-level feats. |
| **Special** | **74.0** | Huge thermal-soaring wings, visual carcass search and low-cost continental-scale movement create a rare survival and disengagement toolkit. |

### Anti-double-counting

Wingspan does not inflate Raw Power or Defense. Long-distance soaring drives Endurance/Stamina and Special but does not create a fabricated top-speed value. The beak drives Weaponry/Attack but not Defense. Object manipulation supports Tactics/Intelligence, not Attack.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Thermal Highway** - broad wings exploit rising air and slope lift to cross enormous distances with little powered flapping, giving exceptional scouting range and aerial disengagement in suitable terrain.
2. **Carrion Eye** - excellent vision and attention to other scavengers allow the condor to locate widely scattered food resources across open landscapes.

### Unique traits

1. **North America's Largest Soarer** - the California condor combines roughly 2.5-3.0 m wingspan with a 7-11 kg adult mass, making it the continent's largest flying land bird by wingspan/body scale.
2. **Scavenger's Hands-Free Limitation** - despite its size, its feet lack eagle-like killing talons, forcing almost all meaningful close-combat damage through the beak.

## 8. Expanded profile

### Habitat and range

Modern wild populations occupy parts of California, Arizona/Utah and Baja California, Mexico. The species favors rugged mountains, cliffs, open shrublands, grasslands and coastal areas where large carcasses are visible and terrain/thermals support soaring. USGS telemetry shows habitat use is tied both to terrestrial food visibility and meteorological conditions that make soaring possible.

### Diet and ecology

The California condor is an obligate carrion eater. Major foods include deer, cattle and carcasses of marine mammals. It searches visually and often follows other scavenging birds. At carcasses, strict dominance hierarchies determine feeding priority.

### Social structure

Condors aggregate at carcasses, roosts and water sources. They show dominance relationships, play and object interaction. Pair bonds can persist over successive breeding seasons.

### Reproduction and life history

Sexual maturity occurs around 5-7 years. Pairs typically lay one egg, with incubation around 54-58 days. Both parents incubate and feed the chick. Young remain dependent for one to two years while learning to forage. Slow maturation and low reproductive output make population recovery intrinsically slow.

### Conservation

The species remains one of North America's most intensively managed endangered birds. Its historical collapse culminated in removal of the last wild birds for captive breeding in 1987, followed by reintroductions. Lead ammunition exposure remains a major threat, alongside microtrash, power infrastructure and other anthropogenic hazards. Conservation status should be checked against the current IUCN/USFWS release when production migration occurs.

### Adaptations

- Bald head/neck reduces feather fouling while feeding inside carcasses.
- Huge wings support economical soaring.
- Sharp hooked beak tears thick skin and connective tissue.
- Strong visual search works over vast open terrain.
- Social information from other scavengers helps locate ephemeral food.

### Human interaction

Humans are simultaneously the species' dominant threat and the reason it survives today. Lead fragments in carcasses can poison feeding birds, while captive breeding, veterinary treatment, telemetry and reintroduction have rebuilt populations from the brink of extinction.

### Fun facts

- California condors can live up to about 60 years.
- They lack vocal cords and mainly hiss or grunt.
- GPS telemetry recorded one condor traveling 477 km in a single day and 415 km the next day.
- A condor may consume roughly 3-4 lb of carrion at one feeding and then go several days without feeding.
- Adults may spend long periods playing with feathers, sticks and grass, including tug-of-war and retrieval-like behavior.
- Their beak is strong enough to pierce horse hide, but their feet lack the sharp grasping talons of eagles.
- Parents share incubation and chick-rearing duties, and young can remain dependent for one to two years.

### Concise site-ready summary

The California condor is North America's giant soaring scavenger, with a wingspan approaching 3 meters and the ability to travel extraordinary distances on rising air. Its hooked beak can tear tough mammal hide, but unlike an eagle it lacks killing talons and does not normally hunt live prey. Its real strengths are endurance, vision, aerial range and behavioral flexibility, while its lightly protected body and weak grappling equipment make grounded close combat a serious weakness.

### Rich narrative profile

A California condor wins space rather than wrestling matches. In mountain air it can turn a 10 kg body and nearly three-meter wing platform into an extraordinarily efficient search vehicle, ranging tens of kilometers on ordinary days and hundreds on exceptional ones. That mobility lets it discover unpredictable carcasses and avoid many terrestrial dangers without spending the energy that continuous flapping would demand.

Close up, the specialization becomes clearer. The beak is a genuine cutting tool capable of opening tough hide, but the feet reveal why a condor is not simply an oversized eagle. They lack the sharp grasping talons needed to seize, pin and puncture struggling prey. A grounded condor therefore has one dangerous end, the head and beak, attached to a large but lightly protected avian body. Its best battle strategy against many opponents is to maintain airspace, choose when to approach, and disengage rather than trade damage.

Its cognition also deserves more credit than the generic 'scavenger' label suggests. Condors manipulate objects, modify roost and nest surroundings, play, track social rank and learn across long juvenile dependency. Those abilities matter for flexible decision-making, but the evidence does not justify copying the extraordinary tool-cognition scores of crows or parrots. The resulting ABS profile is intentionally asymmetric: modest Attack and Defense, strong Agility and Intelligence, and exceptional Stamina driven by documented long-distance movement.

## 9. Image requirement and provenance

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/condor.png` **not present / not completed**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Adult_California_condor_in_flight_(26251613384).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/7/70/Adult_California_condor_in_flight_%2826251613384%29.jpg
- `file_format_verified`: source is JPEG; final PNG not created
- `alpha_verified`: **false**
- `full_body_verified`: **false** under the strict staging standard. The source explicitly identifies an adult and shows a flight pose, but at 1584x1047 it only narrowly misses the preferred 1600-pixel threshold and strict visibility of every foot/digit is not established.
- `adult_verified`: **true**, explicitly stated by the source title/description
- `sex_verified_or_unknown`: **unknown**
- `license_status`: **CC BY 2.0**, Flickr license reviewed by Wikimedia Commons
- `notes`: Exact *Gymnogyps californianus* adult and reuse-permitted. A newer 3326x2640 USFWS public-domain flight photograph exists and has much stronger resolution, but its source does not explicitly establish adulthood. Neither candidate is promoted to a completed image. Current GitHub writer is UTF-8 text-only, so no PNG binary is fabricated.

Higher-resolution alternate source page: https://commons.wikimedia.org/wiki/File:Condor_in_Flight_(53190230305).jpg

Higher-resolution alternate original: https://live.staticflickr.com/65535/53190230305_1529c9b179_o.jpg

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding | Confidence / caveat |
|---|---|---|---|---|
| U.S. Fish & Wildlife Service, California Condor | https://www.fws.gov/cno/es/calcondor/Condor.cfm | Adult size, sex dimorphism, beak, talons, feeding, behavior, reproduction | Adults 17-25 lb and 3-3.5 ft; males slightly larger; powerful beak; non-raptorial feet; social hierarchy; object play/manipulation | **High** agency species account |
| San Diego Zoo Wildlife Alliance, California Condor | https://animals.sandiegozoo.org/animals/california-condor | Weight, wingspan, lifespan, maturity | 7-11 kg; 2.5-3.0 m wingspan; up to 60 years; maturity 5-6 years | **High-moderate** major zoological institution |
| Hall et al. 2021 / USGS, Journal of Raptor Research | https://pubs.usgs.gov/publication/70229691 | Daily travel / endurance | 70.1 ± 60.9 km/day; >71.4% days under 100 km; exceptional 477 and 415 km days | **High**, GPS telemetry |
| Rivers et al. 2014 / USGS | https://pubs.usgs.gov/publication/70134834 | Home range, sex/age movement | Adults had larger monthly ranges than immatures; sexes similar; seasonal thermal effects | **High**, GPS study |
| Meretsky & Snyder 1992 / USGS | https://pubs.usgs.gov/publication/5222932 | Historical movement/sociality | Adults used broad foraging zones; >200 km days documented; variable social travel | **High**, telemetry/photo tracking |
| Hall et al. 2019 / USGS | https://pubs.usgs.gov/publication/70207511 | Ground foraging habitat | Open cover/steep slopes used often; ground visits concentrated near midday | **High**, GPS telemetry |
| USGS resource-selection study | https://www.usgs.gov/publications/resource-selection-california-condor-gymnogyps-californianus-relative-terrestrial | Soaring habitat mechanics | Use linked to habitats allowing food/predator detection and terrain/weather supporting takeoff/soaring | **High** |
| Wikimedia Commons / California DFW adult flight | https://commons.wikimedia.org/wiki/File:Adult_California_condor_in_flight_(26251613384).jpg | Image adulthood, exact species, license, dimensions | Explicit adult, 1584x1047, CC BY 2.0 | **High metadata**, strict full-body still not passed |
| Wikimedia Commons / USFWS 2023 flight | https://commons.wikimedia.org/wiki/File:Condor_in_Flight_(53190230305).jpg | Alternate image exact species, license, dimensions | 3326x2640, public domain, exact species | **High metadata**, adulthood unstated |

### Source conflicts and uncertainty

- Weight sources agree closely: USFWS 17-25 lb and San Diego 7-11 kg. The canonical 10.0 kg male sits within both and below the upper endpoint.
- No credible species-specific maximum flight speed was located, so `speed_mps` is 0.0 despite abundant movement-distance data.
- The 60-year figure is documented longevity, not a measured wild population mean.
- Beak capability is qualitatively strong, but no force/contact-area measurement supports PSI.
- Adult body length is less consistently reported than standing height and wingspan, so `length_cm` carries moderate confidence.

## 11. Future field proposals

1. Add `wingspan_cm`, because it is biologically more meaningful for giant birds than body length alone.
2. Separate `travel_endurance` from `powered_endurance` so soaring specialists are not conflated with sustained-flapping birds or running mammals.
3. Add `weapon_force_n` only if future direct beak-force measurements exist; never infer PSI from hide penetration.
4. Add a locomotor `soaring_specialist` boolean or categorical field.
5. Preserve maximum-lifespan provenance separately from average adult lifespan.

## 12. Cross-animal normalization notes

- **Versus Cockatoo:** Condor has far greater absolute size and beak reach, so Attack/Defense exceed Cockatoo despite the parrot's strong measured bite mechanics. Cockatoo remains much higher in Intelligence due to experimental innovation evidence.
- **Versus Cassowary:** Condor is vastly better aerially but should remain well below Cassowary Attack 57.0 because the cassowary has powerful terrestrial kicks and a long dagger-like claw. Condor Defense 22.0 also stays below Cassowary 39.0.
- **Versus Cheetah:** Condor's soaring endurance can exceed cheetah burst stamina, but that does not imply comparable acceleration or close-range agility. Cheetah remains far higher in Agility.
- **Versus Colossal Squid:** Condor's giant wingspan does not make it physically comparable to a 470 kg aquatic grappler. Absolute Attack and Defense remain far below the squid.
- **Versus Bald Eagle:** future Bald Eagle research should almost certainly place eagle Weaponry/Attack above Condor because true raptorial talons radically improve capture and puncture mechanics, even though the condor is larger.

No score appears to violate the current calibration chain. The main watch item is Stamina: **82.0** represents documented long-distance soaring endurance, not sustained high-output muscular work, and should be revisited at the 75-animal checkpoint against other flight specialists.