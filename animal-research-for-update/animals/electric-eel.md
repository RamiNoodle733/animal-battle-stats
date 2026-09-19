# Electric Eel Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Electric Eel
- **Scientific name:** *Electrophorus electricus* (Linnaeus, 1766)
- **Family / order:** Gymnotidae / Gymnotiformes
- **Status:** Living
- **Exact ABS animal represented:** *Electrophorus electricus*, not a generic composite of all electric eels.
- **Canonical specimen:** healthy mature large adult, **15.0 kg** and **200.0 cm standard/functional body length**. Sex is left unspecified because a reliable combat-relevant adult sex-size advantage was not established.
- **Critical taxonomy correction:** Since the 2019 revision, *Electrophorus* contains three recognized species. The famous **860 V** measurement belongs to *E. voltai*, not *E. electricus*. The revision measured **480 V** in *E. electricus*. ABS must not transfer *E. voltai*'s record to this profile.
- **Population note:** Modern FishBase restricts *E. electricus* to the Guiana Shield under the revised taxonomy. Older sources describing an Amazon-and-Orinoco-wide *E. electricus* often predate the three-species split and can mix lineages now assigned to *E. voltai* and *E. varii*.

## 2. Physical measurements and canonical factual fields

### Mass and length

FishBase reports a maximum published **250 cm standard length** and **20.0 kg** for *E. electricus*. Smithsonian gives electric eels generally at roughly **2-2.5 m**, while the modern taxonomic revision emphasizes species-level distinctions. Because 20 kg and 250 cm are maxima rather than demonstrated adult means, the canonical fighter is set below those ceilings at **15.0 kg / 200.0 cm**.

- `weight_kg`: **15.0**
- `length_cm`: **200.0**
- `height_cm`: **0.0**, because a standardized height field is not biologically useful for this elongate fish.
- Confidence: moderate for canonical mass/length, high for the published maxima.

### Speed and locomotion

No defensible instrumented species-specific maximum swimming speed was located. Electric eels propel themselves chiefly through wave-like undulation of the extremely long anal fin, allowing controlled forward and backward movement without the body-flexion pattern of a true eel. The National Aquarium specifically notes easy forward/reverse movement.

- `speed_mps`: **0.0** pending a defensible species-specific maximum.
- Do not retain the legacy 10.8 km/h as fact without a traceable measurement.

### Lifespan

Wild lifespan remains unknown. Smithsonian and ADW report captive males generally **10-15 years** and females **12-22 years**. Because these are sex-specific captive ranges rather than a wild mean, a single site value is inherently reductive.

- `lifespan_years`: **15.0** as a conservative captive-reference value.
- Confidence: moderate-low for a universal canonical lifespan; high that wild average is unresolved.

### Bite force and teeth

The mouth carries conical teeth and is used to seize prey after electrical incapacitation. No defensible species-specific bite-pressure measurement was found.

- `bite_force_psi`: **0.0**.
- No force-to-PSI conversion is attempted without measured contact area.

### Electric organs and discharge

The main organ, Hunter's organ and Sachs' organ generate electric organ discharges. Low-voltage output supports electrolocation and communication; high-voltage volleys are used in predation and defense. The 2019 species revision measured **480 V at 760 mm total length for *E. electricus***. This is the appropriate species-specific voltage anchor. **860 V is *E. voltai*** and is excluded from this profile.

Electric organs occupy most of the elongated posterior body, while vital organs are concentrated near the head. High-voltage pulses are roughly millisecond-scale and can activate prey motor neurons and muscles.

### Canonical factual fields

```json
{
  "weight_kg": 15.0,
  "height_cm": 0.0,
  "length_cm": 200.0,
  "speed_mps": 0.0,
  "lifespan_years": 15.0,
  "bite_force_psi": 0.0
}
```

## 3. Combat biology

### Weapons and offensive mechanics

The electric organ is the dominant weapon. Catania's experiments showed that high-voltage volleys remotely activate motor neurons and force whole-body prey contraction. When prey is concealed, brief doublets/triplets can induce an involuntary twitch that reveals its location, followed by a full immobilizing volley. This is not merely a passive stun: the eel actively uses electricity as both a search tool and neuromuscular weapon.

For difficult struggling prey, an eel can bite and curl so that its head and tail approach opposite sides of the target. This **dipole attack** concentrates the electric field and more than doubles the electrical effect received by prey in experiments, producing repeated involuntary contractions and fatigue. The jaws then secure/swallow prey, but they are secondary to electricity.

### Defense and durability

The body lacks armor, heavy scales or a shell, so passive physical protection is modest for a 15 kg fish. Its strongest defense is deterrence: high-voltage volleys make contact dangerous. Experiments also documented defensive leaping against partially submerged conductive threats, in which the eel rises along the target and channels progressively stronger current through it. That is a matchup-changing active defense, but it should not be double-counted as thick-body durability.

### Locomotion and agility

The ribbon-like anal fin permits precise forward and backward swimming and fine positioning in cluttered, slow water. The eel can rapidly orient its electric field and curl around prey. It is not supported as an elite high-speed swimmer, so Agility rewards control and field positioning rather than an invented sprint speed.

### Endurance and respiration

Electric eels are obligate/facultative atmospheric-air specialists in hypoxic freshwater and repeatedly surface to gulp air through a vascularized mouth lining. This is a major environmental adaptation but not evidence of elite pursuit stamina. High-voltage attacks are delivered in volleys and are energetically meaningful; prolonged combat should not be treated as unlimited electrical output.

### Senses

Vision is limited in the murky habitat. Weak electric organ discharges provide active electrolocation, while lateral-line/mechanosensory systems detect disturbances. The eel can therefore detect and localize nearby prey in conditions where vision is poor. High-voltage pulses themselves can force hidden prey to twitch, turning the opponent's nervous system into a localization cue.

### Intelligence and tactics

The experimentally documented attack sequence is unusually tactical for a fish: probe hidden prey with pulse doublets, detect the resulting movement, close distance, deliver a tetanizing volley, bite, then use a dipole curl against difficult prey. This supports meaningful sensorimotor flexibility. It does not justify corvid/primate-level general intelligence.

### Predation and fighting behavior

Adults prey chiefly on fishes and other aquatic vertebrates/invertebrates depending on locality. The classic species is generally solitary, and strong discharges are principally associated with predation and defense. Reports of coordinated social predation concern **Volta's electric eel, *E. voltai***, so that behavior is not assigned to *E. electricus*.

### Environmental advantages

- Murky or dark freshwater where electrolocation outperforms vision.
- Conductive aquatic contact lets electrical fields affect nearby prey.
- Cluttered shallow water favors precise anal-fin maneuvering.
- Hypoxic pools are tolerable because atmospheric air breathing reduces dependence on dissolved oxygen.
- Partially submerged conductive attackers can be met with defensive leaping discharge.

### Environmental disadvantages and weaknesses

- Electricity is strongly environment/circuit dependent; dry-land combat is biologically inappropriate.
- No armor and limited passive protection if an opponent survives the shock and secures a damaging bite/strike.
- Requires periodic access to atmospheric air.
- No evidence for exceptional high-speed pursuit.
- Electrical output is powerful but not an infinite continuous beam; attack behavior uses pulses/volleys.
- Large terrestrial or heavily insulated opponents can reduce the practical value of the eel's main weapon depending on contact geometry.

### Matchup archetypes

**Favorable:** aquatic vertebrates vulnerable to neuromuscular disruption; opponents dependent on close contact; visually oriented prey in murky water; small/medium targets that can be stunned and immediately seized.

**Unfavorable:** very large aquatic megafauna whose mass and physiology make rapid incapacitation less certain; heavily protected opponents; situations outside water; opponents capable of inflicting decisive trauma before effective electrical positioning.

## 4. Proposed ABS substats

All values use the absolute 225-animal scale in `CALIBRATION.md`.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **30.0** | A 15 kg elongate fish has meaningful muscular power but remains far below large predators and megafauna mechanically. |
| Weaponry | **78.0** | Species-specific high-voltage discharge can remotely activate muscle and incapacitate small prey; physical jaws are secondary. |
| Protection | **18.0** | No armor or thick hide; electrical deterrence is not counted again as passive protection. |
| Toughness | **34.0** | Robust fish physiology and hypoxia tolerance help, but the body remains vulnerable to major trauma. |
| Speed | **28.0** | Controlled swimmer with no defensible maximum-speed measurement; score intentionally conservative. |
| Maneuverability | **67.0** | Long anal fin permits forward/reverse control and precise close-range positioning/curling. |
| Endurance | **58.0** | Air breathing and low-oxygen tolerance are strong environmental endurance traits, but not proof of sustained high-output pursuit. |
| Recovery | **44.0** | No extraordinary regeneration documented; electrical attacks can be repeated but are not treated as costless. |
| Tactics | **73.0** | Pulse probing, twitch localization, tetanizing volleys and dipole curling form an experimentally demonstrated multi-stage attack sequence. |
| Senses | **88.0** | Active electrolocation plus mechanosensation provides excellent short-range detection in murky water. |
| Ferocity | **45.0** | Dangerous when hunting/defending but not supported as indiscriminately aggressive. |
| Abilities | **98.0** | One of the roster's most distinctive biological weapon systems, combining electrolocation, remote neuromuscular activation and defensive discharge. |

## 5. Proposed six headline ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **49.0** | Electricity gives a 15 kg animal far more practical stopping power than its mass suggests, but absolute damage and prey scale remain far below megafaunal weapons. |
| **Defense** | **29.0** | Electrical deterrence helps prevent contact, yet passive tissue protection is weak. |
| **Agility** | **66.0** | Excellent low-speed control, reversal and close positioning, without confusing unsupported top speed with agility. |
| **Stamina** | **58.0** | Strong hypoxia/air-breathing adaptation, moderate sustained combat output; not an endurance-specialist ceiling. |
| **Intelligence** | **63.0** | Sophisticated predatory sensorimotor tactics, but no evidence for corvid/primate-like domain-general cognition. |
| **Special** | **98.0** | Bioelectric sensing plus high-voltage neuromuscular attack is an extreme, rare matchup-changing system. |

## 6. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Neuromuscular Volley** - High-voltage millisecond pulses remotely activate prey motor neurons and muscles; full volleys can induce tetanic immobilization, while brief pulse sequences can force hidden prey to twitch and reveal itself.
2. **Dipole Coil** - After biting difficult prey, the eel curls its tail toward its head around the target, concentrating the electric field and more than doubling the electrical effect received in experimental trials.

### Unique traits

1. **Living Electrolocator** - Weak electric organ discharges and electroreception provide active short-range sensing and communication in dark, turbid water.
2. **Air-Gulping Knifefish** - A vascularized oral surface permits atmospheric respiration, allowing survival in oxygen-poor pools that constrain many other fishes.

## 7. Expanded profile

### Habitat and range

Under the post-2019 taxonomy, *E. electricus* is associated with the Guiana Shield portion of northern South America. Electric eels occupy slow, quiet freshwater such as streams, pools, side channels and flooded habitats, often in turbid, oxygen-poor conditions. Older broad Amazon/Orinoco range statements should be treated cautiously because they often combine all three modern *Electrophorus* species.

### Diet and ecology

The species is carnivorous. Adults take fishes and other aquatic prey; electrical sensing allows hunting where visibility is poor. It functions as a substantial freshwater predator, but the profile avoids transferring the spectacular group-hunting observations of *E. voltai* to *E. electricus*.

### Social and life history

Electric eels are generally described as solitary outside breeding contexts. ADW reports dry-season spawning, external fertilization, male nest defense and male parental care. Captive longevity differs by sex, with females reported to outlive males on average. Wild longevity remains unresolved.

### Conservation

*E. electricus* is currently treated as Least Concern in major species databases, but taxonomic revision matters when interpreting older abundance and range information.

### Human interaction

Electric eels have been central to the history of bioelectricity research. Their discharges can be dangerous to humans, especially because incapacitation in water creates drowning risk. They are maintained by major public aquariums but require specialized handling.

### Adaptations

- Three paired electric-organ systems derived from muscle tissue
- High- and low-voltage discharge modes
- Active electrolocation in visually poor water
- Long anal fin for controlled bidirectional swimming
- Atmospheric respiration through vascularized oral tissue
- Posterior concentration of electric tissue with vital organs near the head

### Genuine fun facts

- The famous **860 V** record is not this species: it belongs to *Electrophorus voltai*. Modern species-specific work measured **480 V** in *E. electricus*.
- Electric eels can make hidden prey betray themselves by electrically forcing an involuntary twitch.
- Curling around struggling prey can more than double the electrical effect delivered to it.
- A defensive eel can rise partly out of the water against a conductive threat, increasing the fraction of current routed through the target.
- Electric eels are knifefishes, not true eels.
- The long anal fin can propel the animal forward or backward with fine control.

### Concise site-ready summary

The electric eel *Electrophorus electricus* is a large South American knifefish whose real weapon is a biological electrical system. A representative adult is modeled here at 15 kg and 2 m. It uses weak pulses to sense its surroundings and high-voltage volleys to force prey muscles to contract, reveal hidden targets and stun prey before biting. Modern taxonomy is crucial: the 860-volt world record belongs to *E. voltai*, while *E. electricus* has a measured species-specific discharge of 480 V. Its electricity earns an extreme Special score, but its unarmored body and moderate size keep ordinary physical Attack and Defense far below megafaunal fighters.

### Rich narrative profile

Few animals separate body size from weapon effect as dramatically as an electric eel. Mechanically, a 15 kg *E. electricus* is not a heavyweight. It has no armor, tusks, talons or giant crushing jaws. In water, however, it carries a weapon that attacks the opponent's neuromuscular system before the jaws ever make contact.

Experiments transformed the old idea of an eel simply 'shocking' prey into a much more precise picture. Brief high-voltage pulse sequences can make concealed prey twitch. The eel detects the resulting movement, closes in, and follows with a high-frequency volley that drives involuntary whole-body contraction. If the target struggles after being seized, the eel can curl its electric poles around it and intensify the field. The result is a predator whose electricity serves sensing, targeting, immobilization and defense.

That does not make every statistic elite. It is not a fast pursuit fish, has little passive armor and must surface for air. Its greatest advantages are strongest in water and depend on electrical geometry. ABS therefore keeps Raw Power and Defense moderate-to-low while allowing Special and Senses to reflect a genuinely extraordinary biological system.

## 8. Mandatory image section

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/electric-eel.png` (not present; binary cutout/commit pending)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Electrophorus_electricus_in_Gdynia_Oceanarium.jpg
- **original_photo_url:** https://upload.wikimedia.org/wikipedia/commons/8/87/Electrophorus_electricus_in_Gdynia_Oceanarium.jpg
- **file_format_verified:** JPEG source, **6016 x 4016**.
- **alpha_verified:** No. Source is an opaque photograph and no derived PNG is committed.
- **full_body_verified:** No. The source is high resolution and identifies the specimen, but strict complete head-to-tail silhouette suitability was not certified from the available render path.
- **adult_verified:** Yes. Commons explicitly describes a mature specimen.
- **sex_verified_or_unknown:** Unknown; not inferred from appearance.
- **license_status:** CC BY 4.0, Oleksandr (Alex) Zakletsky.
- **notes:** Excellent exact-species, explicit-maturity, 6016-pixel candidate with clear reuse permission. It is deliberately not promoted until the entire head-to-tail outline is visually certified. Current GitHub write tooling is UTF-8 text-only, so no transparent PNG binary is claimed.

## 9. Evidence and source ledger

| Source | Direct URL | Supports | Finding / caveat | Confidence |
|---|---|---|---|---|
| de Santana et al. 2019, Nature Communications | https://doi.org/10.1038/s41467-019-11690-z | Taxonomy, voltage | Three *Electrophorus* lineages/species; *E. electricus* 480 V, *E. varii* 572 V, *E. voltai* 860 V | High |
| FishBase | https://www.fishbase.se/summary/Electrophorus-electricus | Size, distribution, morphology, voltage | 250 cm SL max, 20.0 kg max; Guiana Shield under revised taxonomy; 480 V at 760 mm TL | High-moderate |
| Smithsonian National Zoo | https://nationalzoo.si.edu/animals/electric-eel | Anatomy, habitat, communication, longevity | 2-2.5 m general size; weak/strong organ roles; captive male 10-15 y, female 12-22 y | High for husbandry/reference biology; taxonomy wording may retain broad historical range |
| Animal Diversity Web | https://animaldiversity.org/accounts/Electrophorus_electricus/ | Reproduction, behavior, lifespan | Dry-season spawning; male parental care; wild lifespan unknown; captive 10-22 y | Moderate-high; older pre-split account |
| Catania 2014, Science | https://doi.org/10.1126/science.1260807 | Predatory shock mechanism | High-voltage volleys activate prey motor neurons; doublets/triplets reveal hidden prey | High |
| Catania 2015, Nature Communications | https://pubmed.ncbi.nlm.nih.gov/26485580/ | Tracking | High-voltage output contributes to tracking fast-moving prey | High |
| Catania 2015, Current Biology | https://pubmed.ncbi.nlm.nih.gov/26521183/ | Dipole attack | Curling concentrates field and induces involuntary fatigue in struggling prey | High |
| Catania 2015, Brain Behavior and Evolution | https://pubmed.ncbi.nlm.nih.gov/26398438/ | Remote prey control | Reviews/extends remote induction and arrest of prey movement | High |
| National Aquarium | https://aqua.org/explore/animals/electric-eel | Locomotion, air breathing | Long anal fin allows forward/reverse swimming; vascularized mouth supports air breathing | High institutional |
| Bastos et al. 2021 | https://doi.org/10.1002/ece3.7121 | Species-conflict control | Social predation documented in *E. voltai*, not evidence to assign group hunting to *E. electricus* | High |
| Wikimedia Commons, Zakletsky | https://commons.wikimedia.org/wiki/File:Electrophorus_electricus_in_Gdynia_Oceanarium.jpg | Image candidate | Exact *E. electricus*, explicitly mature, 6016x4016, CC BY 4.0 | High for identity/age/license; full-body suitability pending |

### Source conflicts and uncertainty

1. **860 V conflict:** Many zoo/media pages still call 860 V an 'electric eel' capability. Post-2019 species-level evidence assigns 860 V to *E. voltai*. This report uses **480 V** for *E. electricus*.
2. **Range conflict:** Pre-2019 sources describe *E. electricus* across much of Amazonia/Orinoco. Modern FishBase restricts the species to the Guiana Shield after the split. Older ecological claims are therefore treated cautiously.
3. **Body size:** 250 cm and 20 kg are published maxima, not adult averages. Canonical 200 cm / 15 kg is an editorial representative adult choice with moderate confidence.
4. **Lifespan:** wild average is unknown. 15 years is a conservative captive-reference canonical field, not a verified wild mean.
5. **Speed:** no defensible species-specific maximum was found, so 0.0 is retained.
6. **Bite pressure:** no reliable PSI measurement was found, so 0.0 is retained.
7. **Social hunting:** spectacular coordinated hunting belongs to *E. voltai* and is excluded from this species profile.

## 10. Cross-animal normalization notes

- **Versus Deathstalker Scorpion:** both have extreme Special systems. Electric Eel is enormously larger and can repeatedly deliver a ranged-in-water neuromuscular effect, so it is far higher in absolute Raw Power/Attack while both remain specialist rather than armored fighters.
- **Versus Cuttlefish:** Cuttlefish is much more maneuverable and camouflage-focused; Electric Eel has the stronger direct disabling Special weapon.
- **Versus Coyote/Dhole/Dingo:** the canids have better terrestrial mobility, pursuit stamina and conventional bite mechanics. In water, the eel's electrical attack can reverse the mass-combat relationship, but it does not inherit their physical toughness or running ability.
- **Versus Cougar:** Cougar remains vastly superior in ordinary mechanical Attack, speed and terrestrial killing hardware. Electric Eel's Special is much higher because it can attack neuromuscular function electrically.
- **Versus Dragonfly/Crow:** tiny flying animals can outrank it in maneuverability or cognition without approaching its absolute damage potential.
- **Anti-inflation control:** 98.0 Special is not copied into Attack, Defense or Stamina. Electricity is scored where it changes matchups; the same adaptation is not counted as armor, muscular strength and endurance simultaneously.

## 11. Future field proposals

- Add `max_eod_voltage_v` with taxon-specific provenance so *E. voltai*'s 860 V cannot leak into *E. electricus*.
- Add `electrolocation` and `obligate_air_breathing` structured fields.
- Seek adult sex-specific mass distributions under the post-2019 taxonomy rather than maxima.
- Seek instrumented sustained and burst swimming speeds.
- Preserve voltage, current, pulse duration and delivered power as distinct concepts rather than collapsing them into a single 'shock strength' number.
- For the image, visually certify the 6016x4016 mature Commons specimen's complete head-to-tail silhouette before any cutout; if it fails, replace it rather than cropping anatomy.