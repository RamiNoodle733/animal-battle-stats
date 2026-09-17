# Beaver Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Beaver
- **Research-standardized animal:** North American beaver / American beaver
- **Scientific name:** *Castor canadensis* Kuhl, 1820
- **Family:** Castoridae
- **Status:** Living
- **Exact animal represented:** The roster's generic “Beaver” is standardized as *Castor canadensis*, the North American species.
- **Canonical specimen:** Healthy mature adult of **23.0 kg**, **110.0 cm total length**, and approximately **40.0 cm standing height** in normal wild condition.
- **Sex:** Sex unspecified. Available species accounts describe the sexes as externally similar and do not establish a material, consistent combat-relevant male size advantage.
- **Variation:** Smithsonian gives 16–30 kg and 1.0–1.2 m, while Animal Diversity Web gives 13–32 kg and 0.90–1.17 m. The 23 kg canonical mass is the midpoint of Smithsonian's representative range, not a record. Smithsonian notes an exceptional 50 kg record.

## 2. Physical measurements

### Mass

- **Canonical mass:** **23.0 kg**
- **Credible adult range:** **16.0–30.0 kg** (Smithsonian); ADW reports 13–32 kg.
- **Exceptional record:** about 50 kg (Smithsonian), explicitly excluded from the canonical specimen.
- **Confidence:** High for representative range; moderate-high for the chosen midpoint.

### Length and height

- **Canonical `length_cm`:** **110.0 cm total length**
- **Smithsonian range:** 1.0–1.2 m long.
- **ADW range:** 0.90–1.17 m.
- **Canonical `height_cm`:** **40.0 cm**, midpoint of Smithsonian's approximate 0.3–0.5 m standing-height range.
- **Confidence:** High for broad dimensions; moderate for a single canonical standing height because posture varies.

### Swimming speed

A controlled respirometry study of voluntarily swimming *C. canadensis* measured a preferred underwater speed of **0.64 m/s**, with minimum energetic cost of transport at **0.9 m/s**. These are measured swimming-performance values, not maximum sprint speed.

- **Canonical `speed_mps`:** **0.0 m/s**
- **Reason:** No strong instrumented maximum-speed measurement was located. The 0.64 and 0.9 m/s values must not be mislabeled as top speed.
- **Confidence:** High that the controlled study values are valid; low for any true maximum, hence zero in the maximum-speed schema field.

### Lifespan

- **Canonical `lifespan_years`:** **12.0 years**
- **Smithsonian:** typically 10–12 years; oldest cited individual lived 30 years in human care.
- **ADW:** 10–20 years in the wild.
- **Interpretation:** 12.0 is a conservative representative value rather than a maximum.
- **Confidence:** Moderate because longevity summaries differ in breadth.

### Bite force and incisors

The American beaver has unusually strong peer-reviewed jaw biomechanics. Cox and Baverstock calculated **556 N** incisor bite force at occlusion and **714 N** at 30° gape, with the broader modeled range summarized as roughly **550–740 N**. More than 96% of bite force is directed along the lower-incisor axis, making the gnawing system unusually efficient.

- **Canonical `bite_force_psi`:** **0.0**
- **Why:** Newtons measure force. PSI requires defensible contact area, which the research located here does not provide for a valid species-level pressure conversion.
- **Useful future field:** modeled incisor bite force in newtons, with gape context.
- **Confidence:** High for modeled force; high that PSI should remain unset.

ADW reports upper incisors at least **5 mm wide and 20–25 mm long**. Beaver incisors grow continuously. A 2023 *Acta Biomaterialia* study experimentally demonstrated a two-part enamel microstructure in *C. canadensis* that creates a self-sharpening cutting edge: inner enamel wears substantially faster than outer enamel while the architecture controls fracture propagation.

### Defensive structures and aquatic adaptations

Beavers lack armor, but have a compact heavy rodent body, dense waterproof fur, a broad muscular/scaly tail, webbed hind feet, closable ears and nostrils, and a nictitating membrane. Their lips can close behind the incisors, allowing underwater gnawing. NPS reports submergence up to about 15 minutes, although this is an upper capability statement rather than a typical dive duration.

The tail is useful for swimming control and alarm slaps. It is not treated as a high-damage club without evidence.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 23.0,
  "height_cm": 40.0,
  "length_cm": 110.0,
  "speed_mps": 0.0,
  "lifespan_years": 12.0,
  "bite_force_psi": 0.0
}
```

### Why these values

- **23.0 kg:** midpoint of Smithsonian's 16–30 kg representative range.
- **40.0 cm:** midpoint of Smithsonian's 0.3–0.5 m height range.
- **110.0 cm:** midpoint of Smithsonian's 1.0–1.2 m length range and consistent with ADW.
- **0.0 m/s:** measured routine/efficient swim speeds exist, but a defensible maximum does not.
- **12.0 years:** upper end of Smithsonian's typical 10–12 year statement, far below captive records.
- **0.0 PSI:** excellent bite-force data exist in newtons but no defensible tooth contact area was found.

### Useful future structured fields

```json
{
  "canonical_species": "Castor canadensis",
  "canonical_sex": "unspecified adult",
  "modeled_incisor_bite_force_n_occlusion": 556.0,
  "modeled_incisor_bite_force_n_30deg_gape": 714.0,
  "upper_incisor_length_mm_range": [20.0, 25.0],
  "upper_incisor_width_mm_min": 5.0,
  "preferred_underwater_swim_speed_mps": 0.64,
  "minimum_cost_transport_speed_mps": 0.9,
  "max_reported_submergence_minutes": 15.0,
  "locomotor_style": "semi-aquatic",
  "primary_weapon": "self-sharpening incisors"
}
```

## 4. Combat biology

### Primary and secondary weapons

**Primary weapon:** large continuously growing incisors powered by a highly efficient jaw-closing system. The combination of 550–740 N modeled incisor force, strong alignment of force with the tooth axis, and self-sharpening enamel makes this a serious cutting/gnawing weapon for an animal of roughly 23 kg.

**Secondary tools:** forefeet and body leverage can grapple, brace and manipulate, while the broad tail aids aquatic repositioning. The tail is primarily a locomotor, fat-storage/physiological, and signaling structure rather than a proven primary striking weapon.

### Offensive mechanics

The beaver's feeding apparatus is optimized to drive incisors into resistant wood. In a fight, the same geometry can produce deep incisor wounds at close range. However, tree-felling performance should not be equated directly with flesh-combat lethality: wood gnawing is repeated material removal, not a single catastrophic bite. Attack therefore receives credit for excellent cutting tools without turning proportional gnawing performance into large-carnivore attack power.

### Defense and durability

There is no armor. Dense fur and a stocky body offer modest protection, but wolves, coyotes and other large predators can kill beavers. The strongest defense is environmental: rapid retreat to water, underwater lodge entrances, and aquatic maneuvering. Built dams/lodges are not portable personal armor and are not counted as one-on-one Defense.

### Locomotion and maneuverability

Beavers are awkward and relatively slow on land but efficient swimmers. Webbed hind feet provide propulsion and the tail assists control. Controlled experiments show economical underwater locomotion. In water, the animal can dive, turn, change depth, and escape through submerged routes. On dry open ground, its short-limbed body sharply reduces engagement control.

### Endurance and stamina

Beavers are active year-round and routinely perform sustained construction, food transport, swimming and gnawing. In controlled underwater swimming, energetic cost was only 1.65 times terrestrial resting metabolism, indicating efficient aquatic travel. NPS reports submergence up to about 15 minutes. This supports good overall stamina, but not elite cursorial or oceanic-migrant endurance.

### Senses

No extraordinary long-range sensory system was found. Vision is adapted for amphibious life with a nictitating membrane; nostrils and ears can close underwater. Smell is important in scent marking and territorial communication. Battle-useful senses are competent rather than elite.

### Intelligence, learning and tactics

Beavers are sophisticated environmental manipulators. They build and repair dams and lodges, store winter food, maintain underwater entrances, scent-mark territories and coordinate within family groups. These behaviors support strong spatial learning and behavioral flexibility. For ABS combat intelligence, construction skill is not automatically equivalent to tactical fighting intelligence, so the score remains well below great apes and other demonstrated high-flexibility problem solvers.

### Hunting behavior

None. Beavers are herbivores, eating woody and non-woody plants. Their incisors are feeding and construction tools that can become defensive weapons, not predatory adaptations.

### Intraspecific fighting and aggression

Beaver families are territorial and use scent mounds to advertise occupancy. Physical conflict can occur, but the species is not treated as an extreme ferocity specialist. Territoriality supports willingness to defend space without implying predator-like attack motivation.

### Predator defense

Primary responses include water escape, diving, alarm tail slaps and refuge in bank dens or lodges with underwater access. Adult body size reduces vulnerability to smaller predators, but wolves, coyotes and humans remain important mortality sources.

### Environmental strengths

- Ponds, lakes, streams, rivers, marshes and wooded wetlands.
- Water greatly improves mobility and escape options.
- Underwater entrances and diving can break pursuit.
- Cold-season activity and food caching support year-round persistence.
- Dense fur and amphibious sensory adaptations support prolonged wet-environment activity.

### Environmental limitations

- Open dry land removes most of the animal's locomotor advantage.
- Short legs and semi-aquatic body design reduce terrestrial chase and turning performance.
- Incisors require close-range engagement.
- No armor protects against large carnivore bites.
- Dams and lodges should not be assumed to exist in neutral-arena battles.

### Major weaknesses

1. Poorer terrestrial mobility than comparably sized terrestrial mammals.
2. No specialized armor or thick defensive hide.
3. Close-range weapon delivery exposes the head to counters.
4. Herbivorous behavior means less predatory combat specialization.
5. Strong construction intelligence does not automatically translate to rapid fighting tactics.
6. Aquatic escape advantages diminish sharply away from water.

### Matchup archetypes

**Good matchups:** smaller unarmored animals forced into close quarters, opponents vulnerable to deep incisor cuts, and semi-aquatic encounters where diving/repositioning can deny clean attacks.

**Bad matchups:** similarly sized or larger terrestrial carnivores with superior speed and grappling, armored opponents, long-reach weapons, and dry open terrain where the beaver cannot exploit water.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **32.0** | A 23 kg adult is substantial for a rodent but small beside major carnivores and megafauna. |
| Raw Power | **36.0** | Strong jaw musculature and a stocky construction-adapted body, but moderate absolute force on the full roster. |
| Weaponry | **50.0** | Large self-sharpening incisors plus 550–740 N modeled bite force make an effective close cutting system. |
| Protection | **25.0** | Dense fur and compact build provide modest protection, but there is no armor. |
| Toughness | **38.0** | Robust semi-aquatic mammal, yet vulnerable to wolves and other large predators once caught. |
| Speed | **27.0** | Efficient swimmer but no defensible high maximum; terrestrial movement is comparatively poor. |
| Maneuverability | **57.0** | Good diving and aquatic control offset by awkward terrestrial movement. |
| Endurance | **68.0** | Year-round activity, sustained construction, efficient swimming and prolonged submergence support strong endurance. |
| Recovery | **39.0** | Normal mammalian healing with no exceptional regeneration mechanism established. |
| Tactics | **61.0** | Strong environmental problem solving, spatial construction and territorial behavior, discounted because engineering is not identical to combat tactics. |
| Senses | **52.0** | Competent smell and amphibious sensory adaptations, but no exceptional long-range combat sense. |
| Ferocity | **43.0** | Territorial and capable of forceful defense, but not a specialized predator or persistent combatant. |
| Abilities | **60.0** | Self-sharpening incisors and integrated semi-aquatic adaptations create meaningful matchup advantages without exotic venom/electricity. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **42.0** | The incisors are unusually efficient cutting tools with strong modeled force for body size, but absolute damage remains below larger carnivores and the beaver lacks predatory killing specialization. |
| **Defense** | **34.0** | Stocky build and fur help modestly; most defensive value comes from water escape rather than absorbing attacks. |
| **Agility** | **57.0** | Good three-dimensional aquatic control but mediocre terrestrial mobility prevents a higher whole-animal score. |
| **Stamina** | **68.0** | Efficient swimming, construction workload, year-round activity and diving physiology support strong sustained output. |
| **Intelligence** | **63.0** | Sophisticated construction, repair, food storage and family-territory behavior demonstrate strong behavioral complexity, while combat-specific flexibility remains less proven. |
| **Special** | **60.0** | Self-sharpening incisors plus integrated amphibious adaptations are distinctive and matchup-relevant, but not as transformative as venom, electricity or extreme regeneration. |

## 7. Abilities and traits

### Proposed special abilities

1. **Iron-Edge Incisors** — Continuously growing incisors combine highly efficient jaw-force alignment with experimentally demonstrated self-sharpening enamel microstructure. This preserves a sharp cutting edge despite heavy wear and makes close bites dangerous.
2. **Underwater Escape Route** — Webbed hind feet, tail-assisted control, closable ears/nostrils, nictitating membranes and prolonged submergence let a beaver disengage and reposition far more effectively in water than on land.

### Proposed unique traits

1. **Ecosystem Engineer** — Dam, lodge and canal construction can transform streams into defended aquatic habitat. This is a major ecological distinction, but prebuilt structures are not added directly to neutral-arena combat stats.
2. **Woodcutter's Jaw** — More than 96% of modeled incisor bite force aligns with the lower-incisor axis, an unusually efficient geometry specialized for penetrating and removing resistant material.

## 8. Expanded profile content

### Habitat and range

North American beavers occupy ponds, lakes, rivers, marshes, streams and adjacent wetlands across much of North America. Smithsonian notes absence from major desert regions of California/Nevada and parts of Utah/Arizona. Introduced populations also exist outside the native range.

### Diet

Herbivorous. Beavers consume woody and non-woody plants, including bark/cambium, twigs, leaves and aquatic or herbaceous vegetation. They store woody food underwater for winter use.

### Ecology

The species is a classic ecosystem engineer and keystone habitat modifier. Dams slow water and create ponds and wetlands, altering hydrology and creating habitat used by many other organisms. This enormous ecological effect is not confused with individual combat power.

### Social structure

Family groups commonly include a breeding pair, kits and older offspring. ADW reports colonies of up to about eight related individuals. Young may remain for roughly two years and participate in food collection, dam building and care.

### Reproduction and life history

Beavers are generally socially monogamous. Sexual maturity is around three years in ADW's account. Gestation is approximately 105–107 days and one litter is normally produced annually. Kits are born furred with open eyes and can swim very early in life.

### Conservation status

The North American beaver is widespread and has recovered dramatically from historical overtrapping in many regions. The research pass did not rely on a cached IUCN page for a formal current category, so a production conservation field should be verified directly against the current IUCN assessment before migration rather than inferred here.

### Major adaptations

- Continuously growing, self-sharpening incisors.
- Highly efficient jaw-force alignment for gnawing.
- Webbed hind feet and broad tail for aquatic locomotion/control.
- Dense waterproof fur.
- Closable nostrils and ears.
- Nictitating membrane protecting the eyes underwater.
- Lips that close behind the incisors for underwater gnawing.
- Food caching and lodge/dam construction for winter survival and predator avoidance.

### Human interaction

Beavers were historically trapped intensively for fur and castoreum. Today they are valued for wetland restoration and biodiversity benefits but can also flood roads, culverts, agricultural areas and managed property, creating recurring human-wildlife management conflicts.

### Fun facts

- The North American beaver is the largest rodent native to North America.
- Its upper incisors are at least about 5 mm wide and 20–25 mm long according to ADW.
- Experimental materials research shows the incisor edge self-sharpens because inner and outer enamel wear and fracture differently.
- A biomechanical model calculated roughly 556 N at incisor occlusion and 714 N at 30° gape.
- Controlled swimming experiments found the lowest energetic cost of transport around 0.9 m/s.
- Beaver lodges can have underwater entrances while the living chamber remains above water.
- Tail slaps function as conspicuous alarm signals.

### Concise site-ready summary

The North American beaver is a 20-plus-kilogram semi-aquatic engineer armed with continuously growing, self-sharpening incisors and an exceptionally efficient gnawing bite. It is not fast or heavily armored, especially on land, but in water its webbed feet, broad tail, diving adaptations and strong endurance make it difficult to pin down. Its famous dam-building intelligence is ecologically extraordinary, though ABS separates that engineering skill from direct one-on-one combat power.

### Detailed narrative profile

A beaver's reputation comes from construction, but the anatomy behind that construction also gives it a legitimate close-range weapon. The skull and jaw musculature direct an unusually large share of force along the incisors, and modern enamel research shows that the cutting edges maintain themselves through differential wear. That means the same mouth capable of repeatedly cutting woody stems can inflict serious wounds on a similarly sized unarmored opponent. Still, the beaver is not a carnivore. It lacks the pursuit speed, grappling anatomy and behavioral specialization of animals built to seize and kill vertebrate prey.

Its battle profile changes dramatically at the shoreline. On dry ground the short-legged, heavy body is a liability. In water, the animal becomes a competent diver and efficient swimmer with protected eyes, sealable openings and powerful webbed hind feet. Water also enables its normal anti-predator strategy: disappear below the surface and reach a refuge through a submerged route. ABS therefore treats the beaver as a moderate attacker with strong stamina and situational mobility, rather than inflating it from spectacular pound-for-pound gnawing feats.

The species' deepest specialty is behavioral. Beavers alter hydrology, construct lodges, repair dams, cache food and organize family territories. Those feats justify above-average intelligence and Special scores, but the calibration deliberately refuses to count an entire engineered pond as personal armor or a dam as a weapon. The canonical beaver is the animal itself, not weeks of prior construction.

## 9. Image Asset

- **Target path:** `animal-research-for-update/images/beaver.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Real photograph of *Castor canadensis* by Minette Layne, 3050 × 2184 pixels, showing a clear near-full-body adult-sized beaver at the water edge.
- **Source page:** https://commons.wikimedia.org/wiki/File:Castor_canadensis1.jpg
- **Direct original image URL:** https://upload.wikimedia.org/wikipedia/commons/6/6b/Castor_canadensis1.jpg
- **License shown on source page:** CC BY-SA 2.0.
- **Sex:** Not documented. Because strong combat-relevant sexual dimorphism is not established here, sex verification is not required for canonical consistency.
- **Transparency:** Source is JPEG without transparency. No binary-safe repository writer/background-removal pipeline is available in this run, so no fake PNG is committed.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Context / caveat | Confidence |
|---|---|---|---|---|
| Smithsonian National Zoo, Beaver | https://nationalzoo.si.edu/animals/beaver | 16–30 kg mass; 1–1.2 m length; 0.3–0.5 m height; 10–12 year typical lifespan; habitat; dams/lodges | Zoo species account; record 50 kg and captive longevity are exceptional | High |
| Animal Diversity Web, *Castor canadensis* | https://animaldiversity.org/accounts/Castor_canadensis/ | 13–32 kg, 900–1170 mm; sexes alike; incisor dimensions; 10–20 year wild longevity; family structure, reproduction, territoriality | Secondary academic species account | High-moderate |
| Cox & Baverstock, Journal of Mammalian Evolution / University of York | https://pure.york.ac.uk/portal/en/publications/masticatory-muscle-anatomy-and-feeding-efficiency-of-the-american/ | Calculated 550–740 N incisor bite force; >96% force alignment; jaw-muscle mechanics | Biomechanical model based on dissected specimen, not direct live bite transducer measurement | High for model result |
| Hunt et al., Acta Biomaterialia / ORNL | https://www.ornl.gov/publication/microstructurally-driven-self-sharpening-mechanism-beaver-incisor-enamel-facilitates | Experimentally demonstrated self-sharpening enamel mechanism; inner enamel wears ~2.5× faster than outer | Peer-reviewed materials study on *C. canadensis* incisors | High |
| Allers & Culik 1997, Physiological Zoology / PubMed | https://pubmed.ncbi.nlm.nih.gov/9237306/ | Preferred underwater speed 0.64 m/s; minimum cost of transport at 0.9 m/s; swimming energetic cost | Controlled voluntary captive swimming, not maximum-speed test | High |
| Rocky Mountain National Park, NPS | https://www.nps.gov/romo/learn/nature/beavers.htm | Waterproof fur, webbed hind feet, tail alarm slap, year-round activity, up to 15 min submergence, family life | Government species interpretation; 15 min is an upper statement | High-moderate |
| Isle Royale National Park, NPS | https://home.nps.gov/isro/learn/nature/beaver.htm | Dam/lodge construction, underwater lodge entrance, 33–55 lb local body mass | Regional population context | High-moderate |
| Wikimedia Commons, Minette Layne photograph | https://commons.wikimedia.org/wiki/File:Castor_canadensis1.jpg | Exact-species image; 3050×2184; author and CC BY-SA 2.0 provenance | Adult status inferred from appearance; sex undocumented | High for image provenance |

### Evidence conflicts and caveats

- Lifespan sources differ: Smithsonian gives 10–12 years typical while ADW gives 10–20 years in the wild. The canonical 12.0-year value is conservative and should not be interpreted as maximum longevity.
- Controlled swim speeds are not maxima. `speed_mps` therefore remains 0.0 rather than promoting routine/optimal speed to top speed.
- The 550–740 N bite figure is modeled force, not PSI and not a direct live-animal pressure measurement. `bite_force_psi` remains 0.0.
- The 15-minute submergence figure is a reported upper capability and should not be described as a normal dive duration.
- Dam/lodge engineering is real but must not be double-counted as direct Defense, Attack and Intelligence simultaneously.

## 11. Confidence and caveats

**Overall confidence: High-moderate.** Body dimensions, incisor anatomy, jaw biomechanics, swimming energetics and core ecology have unusually strong sources. The largest unresolved factual gaps for current schema purposes are a true measured maximum movement speed and any defensible bite-pressure contact area. The canonical specimen is intentionally representative rather than exceptional.

## 12. Cross-animal calibration notes

- **Versus Badger (13 kg):** Beaver is heavier and has better quantified jaw mechanics, so Attack **42.0** modestly exceeds Badger **38.0**. Badger remains more terrestrially combat-adapted and should not be treated as inferior merely because beaver gnawing is spectacular.
- **Versus Baboon (24 kg):** Similar mass, but Baboon's canine weaponry, manual grappling and combat flexibility justify its higher Attack **45.0** and Agility **72.0**. Beaver's Intelligence **63.0** remains below Baboon **78.0**, separating engineering specialization from broader primate cognition.
- **Versus Barracuda (17 kg):** Barracuda retains higher Attack **48.0** because its dentition and behavior are specialized for rapidly cutting animal prey. Beaver has greater physical protection and terrestrial structural robustness but lower native-environment agility.
- **Versus Armadillo (5.5 kg):** Beaver's Defense **34.0** stays below Armadillo **47.0** because it lacks osteoderm armor despite being much larger. This prevents body mass from overriding a genuine defensive specialization.
- **Versus Bactrian Camel (580 kg):** The camel remains far above the beaver in absolute physical scale and Stamina. Beaver's construction ability does not leak into Raw Power.
- **Anti-inflation check:** The 550–740 N jaw model is impressive for a rodent but is not converted into a pound-for-pound high Attack score. Water escape is primarily represented in maneuverability/agility and Special, not triple-counted as heavy physical Defense.
- **Future normalization watch:** Revisit Weaponry 50.0 and Attack 42.0 after Capybara, Wolverine, Coyote, Bobcat and additional similarly sized mammals are researched. Revisit Intelligence 63.0 after more rodents, corvids, parrots, primates and cephalopods establish a broader cognitive ladder.

## Completion verification

- Identity/taxon and canonical specimen: complete
- Physical measurements and uncertainty: complete
- Canonical factual fields: complete
- Combat biology/environment/weaknesses/matchups: complete
- All 13 current schema substats: complete
- Six headline ratings, one decimal each: complete
- Proposed special abilities: **exactly 2**
- Proposed unique traits: **exactly 2**
- Expanded profile, fun facts, summary and narrative: complete
- Source ledger with direct URLs and claim mapping: complete
- Image source/direct URL/status: complete
- Cross-animal calibration: complete
- Production/live files modified: **none**
