# Colossal Squid research report

## 1. Identity and canonical specimen

- **Roster name:** Colossal Squid
- **Scientific name:** *Mesonychoteuthis hamiltoni* Robson, 1925
- **Family:** Cranchiidae
- **Living/extinct:** Living
- **Exact animal represented:** the Antarctic colossal squid, not the giant squid *Architeuthis dux*.
- **Canonical combat specimen:** healthy mature adult female, **470.0 kg**, using Te Papa's corrected estimate for the 2007 Ross Sea female as the best directly documented near-mature/adult-scale specimen rather than silently treating a hypothetical record animal as normal.
- **Sex choice:** female. The very large complete specimens known to science are female; Te Papa states the 2007 specimen was female and the 2014 large specimen was submature female. Male colossal squid remain extremely poorly known. This makes a large female the defensible canonical fighting specimen.
- **Evidence limitation:** this is one of the least directly observed large animals in the roster. Most ecology is inferred from rare captures, predator stomach contents, isotope work, anatomy, and modeling. Confidence must remain lower than for routinely observed megafauna.

## 2. Physical measurements and variation

### Mass, mantle length and total length

Te Papa's 2007 Ross Sea specimen was weighed at about 495 kg while frozen and containing some ice; the museum gives **about 470 kg** as the more accurate estimate. After thawing and unfolding, it measured **4.2 m total length** and **2.5 m mantle length**. Its mantle was about **982 mm wide**. A 2003 immature female weighed about 300 kg, had a 2.5 m mantle and measured 5.4 m total length despite extensive damage. The 2017 Polar Biology review gives a maximum documented mass of 495 kg and total length up to about 6 m.

Preservation complicates linear dimensions. Te Papa experiments on arrow squid showed substantial dehydration shrinkage, and the museum cautions that the 2007 colossal squid's tentacles likely shortened after death. Therefore the 4.2 m preserved total length is real for the examined specimen but is not necessarily its exact living length.

- **Canonical mass:** **470.0 kg**
- **Canonical total length:** **420.0 cm**, tied to the measured displayed specimen and explicitly preservation-affected.
- **Canonical mantle length:** **250.0 cm**
- **Canonical mantle width:** **98.2 cm**
- **Height:** not a biologically meaningful standardized squid measurement, so `height_cm` remains 0.0.

### Beak and hooks

The colossal squid has the largest beak among squids. Te Papa measured the 2007 specimen's lower rostral beak length at **42.5 mm**. Colossal-squid lower beaks recovered from sperm-whale stomachs reach about **49 mm**, implying animals larger than the displayed specimen exist.

The two long tentacular clubs carry two rows of sharp swivelling hooks plus rows of suckers. Arms also bear hooks. These structures are the primary prey-retention system. Te Papa explicitly describes the hooks and beak as lethal weapons for catching and holding large fish such as toothfish. No defensible bite-pressure contact area was located, so force/pressure folklore is not converted into PSI.

### Eyes and sensory anatomy

Nilsson et al. (2012) directly determined an adult colossal squid eye diameter of roughly **270-280 mm**, among the largest eyes known in any living animal. Their visual model argues that such eyes are especially useful below roughly 500-600 m for detecting very large objects, particularly approaching sperm whales via disturbed bioluminescent plankton. The functional interpretation has been debated in the literature, so the measured eye size is high-confidence while the exclusive evolutionary explanation is moderate-confidence.

### Speed and locomotion

No instrumented maximum swimming speed for adult *M. hamiltoni* was found. Rosa & Seibel's metabolic analysis argues specifically against portraying it as a high-speed pursuit predator. Squid can use fin undulation for routine swimming and jet propulsion for faster movement, but no species-specific top speed is defensible.

- **Canonical `speed_mps`: 0.0**, meaning unknown, not immobile.

### Lifespan

Age remains uncertain because statolith increment periodicity has not been validated for this species. A recent beak-increment estimate summarized by CEPH REF proposes a maximum around **5.2 years**, but explicitly depends on the unconfirmed assumption that increments are deposited daily. Earlier reviews only argued that the cold-water giant may live substantially longer than many tropical/temperate squid.

- **Canonical `lifespan_years`: 5.2**, **low confidence**, retained as the best current quantitative estimate and explicitly provisional.

### Bite force

- **Canonical `bite_force_psi`: 0.0.** The beak is a cutting weapon, but no reliable species-specific pressure measurement or defensible force-to-area conversion was found.

## 3. Proposed canonical factual fields

```json
{
  "weight_kg": 470.0,
  "height_cm": 0.0,
  "length_cm": 420.0,
  "speed_mps": 0.0,
  "lifespan_years": 5.2,
  "bite_force_psi": 0.0
}
```

Recommended future fields:

- `mantle_length_cm`: **250.0**
- `mantle_width_cm`: **98.2**
- `eye_diameter_cm`: **27.5** representative of the measured 27-28 cm adult range
- `lower_rostral_beak_length_mm`: **42.5** for the canonical specimen
- `max_recovered_beak_lrl_mm`: **49.0**, explicitly not from a measured whole specimen
- `preservation_affected_total_length`: **true**

The old site's 500 kg, 100 cm length, 36 km/h speed, 15-year lifespan and 100 PSI bite placeholders were not used as anchors. The 100 cm length is plainly incompatible with the measured 2.5 m mantle alone; the speed and PSI values lack defensible species-specific support.

## 4. Combat biology

### Offensive system

The colossal squid is a close-range ambush grappler. The long tentacles make first contact, with swivelling hooks and suckers securing slippery prey. The eight arms add fixed hooks and gripping surfaces, drawing prey toward the central beak. The beak then cuts tissue into ingestible pieces. This is a mechanically dangerous system at hundreds of kilograms body mass, but it is not evidence of high-speed pursuit or mammal-like striking power.

### Predation behavior

Rosa & Seibel modeled an exceptionally low routine metabolic rate at Antarctic temperatures and argued that the animal is better interpreted as a sit-and-wait or sit-and-float ambush predator than a voracious chaser. Their estimate projected only about 45.1 kcal/day and roughly 0.03 kg prey/day under the model assumptions. The 2017 review likewise treats high-speed predator-prey interaction as unlikely.

Known or inferred prey include myctophid fishes, Antarctic/Patagonian toothfish, other squid, and possibly sleeper sharks. Stable-isotope evidence places the species high in the Southern Ocean food web. A 2007 specimen was actually brought up while attached to an Antarctic toothfish, direct evidence that large fish are attacked.

### Defense and toughness

At roughly 470 kg, the canonical female has substantial absolute bulk for an invertebrate, but it lacks bone, shell, thick hide, or armor. The mantle is muscular and gelatinous. Hooks provide dangerous counter-grappling, and giant eyes may provide early warning against sperm whales, but neither should be counted as physical armor. Sperm whales are major predators and beaks are frequently recovered from their stomachs.

### Locomotion and maneuverability

Large fins provide controlled low-speed swimming, while the funnel permits jet propulsion. A squid can reposition in three dimensions and orient its arms toward a threat, but this species' enormous body and low-energy physiology argue against elite sustained acceleration. Its agility is therefore moderate in its native water column, not comparable to the cheetah's terrestrial acceleration or small aerial animals' turning performance.

### Endurance and metabolism

This is a crucial anti-inflation case. Extreme cold/deep-water adaptation and a slow metabolic pace do not equal high combat stamina. The species appears energetically economical, which is excellent for waiting and surviving in a food-poor environment, but evidence does not support prolonged high-output pursuit. Stamina is therefore moderate rather than elite.

### Senses

Vision is the standout system. Adult eyes around 27-28 cm provide extraordinary photon collection in dim pelagic water. Modeling suggests long-range detection of large approaching predators is a major advantage. Mechanosensation and chemosensation almost certainly contribute, as in other cephalopods, but species-specific performance data are sparse.

### Intelligence and tactics

Cephalopods can be behaviorally sophisticated, but almost no direct behavioral experimentation exists for *M. hamiltoni*. It would be poor practice to import octopus or cuttlefish cognition wholesale into this species. Its ambush geometry, prey retention and predator detection justify functional tactical competence, but not a high cognition score without direct evidence.

### Intraspecific fighting and social behavior

Reliable observations of adult social organization or fighting are essentially absent. Treat the species as primarily solitary unless future field observations establish otherwise. No ABS Ferocity bonus is awarded for imagined battles with sperm whales.

### Environmental strengths

- Cold, dark Southern Ocean meso- and bathypelagic water.
- Three-dimensional ambush space with little cover required.
- Darkness enhances the value of huge eyes and close-range hooks.
- Large body and long appendages create a broad capture envelope.

### Environmental weaknesses

- Warm water would disrupt its extreme cold-water physiology.
- On land it is effectively helpless because its body and locomotion are water-supported.
- Open-water opponents that remain outside tentacle reach can avoid its best weapon system.
- High-output prolonged pursuit is inconsistent with current metabolic evidence.

### Matchup archetypes

- **Strong:** medium-to-large aquatic prey that enter tentacle range and can be hooked and drawn inward.
- **Mixed:** similarly massive marine predators, where first contact and the opponent's ability to bite through the mantle matter greatly.
- **Poor:** large fast sharks or toothed whales capable of repeated hit-and-withdraw attacks and major tissue damage.
- **Very poor:** sperm whales, which are documented predators and massively outweigh the squid.
- **Environmentally invalid:** terrestrial fights without water support.

## 5. Proposed ABS substats

All are absolute roster-wide scores, not pound-for-pound ratings.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **61.0** | Hundreds of kilograms of muscular body and appendages create substantial absolute grappling force, but direct force measurements are unavailable. |
| Weaponry | **76.0** | Two hooked tentacles, eight hooked arms and a large cutting beak create a redundant close-range capture system. |
| Protection | **23.0** | No shell, armor or bony protection; large size helps but soft tissue remains vulnerable. |
| Toughness | **51.0** | Massive body can tolerate some tissue damage, yet lack of structural armor and known whale predation limit the score. |
| Speed | **34.0** | Jet propulsion exists, but no measured maximum and peer-reviewed metabolism argues against high-speed pursuit. |
| Maneuverability | **56.0** | Three-dimensional fin/jet control and flexible appendages are useful, constrained by exceptional mass and low-energy ecology. |
| Endurance | **48.0** | Energetically economical deep-sea life, but low routine metabolism is not proof of sustained high-output fighting. |
| Recovery | **43.0** | Cephalopod tissue repair exists generally, but no evidence supports rapid matchup-scale regeneration in this species. |
| Tactics | **51.0** | Ambush positioning and prey retention are effective, but direct behavioral evidence is scarce. |
| Senses | **93.0** | 27-28 cm eyes are a dataset-level sensory specialization for dim deep water, though not omnidirectional or universally superior. |
| Ferocity | **47.0** | Predatory and capable of taking large fish, but evidence favors low-energy ambush rather than relentless aggression. |
| Abilities | **84.0** | Rotating hooks, giant eyes, jet propulsion and extreme deep-cold specialization create an unusually distinctive toolkit. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **67.0** | A 470 kg ambush grappler with hooked tentacles/arms and a large beak is dangerous at close range, but lacks measured high-speed delivery or quantified bite force. |
| **Defense** | **43.0** | Huge mass helps survivability, but soft unarmored anatomy and whale predation prevent heavyweight armor-like scoring. |
| **Agility** | **55.0** | Useful three-dimensional fin and jet control, moderated by huge body size and slow metabolic strategy. |
| **Stamina** | **48.0** | Low-energy persistence is not the same as prolonged maximal exertion. |
| **Intelligence** | **52.0** | Functional cephalopod predatory behavior, but species-specific learning/problem-solving evidence is too sparse for a high score. |
| **Special** | **88.0** | Giant low-light eyes, rotating tentacular hooks and extreme Antarctic deep-sea specialization are genuinely rare matchup-changing mechanisms. |

### Anti-double-counting

The hooks primarily drive Weaponry/Attack and only secondarily Special. Huge eyes drive Senses/Special, not Intelligence. Large mass contributes to Raw Power and some Toughness but does not become armor. Low metabolism informs ecological persistence but does not inflate Stamina.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Rotating Hook Snare** - the tentacular clubs carry rows of swivelling hooks plus suckers, allowing slippery fish to be caught and retained before being drawn into the arm crown and beak.
2. **Abyssal Watchtower** - approximately 27-28 cm eyes provide exceptional photon collection in deep water; published modeling supports long-range detection of very large approaching predators under mesopelagic conditions.

### Unique traits

1. **Heaviest Living Invertebrate** - directly documented specimens approach half a tonne, giving this squid an exceptional absolute size niche among living invertebrates.
2. **Slow-Pace Giant** - despite enormous size and fearsome capture anatomy, metabolic modeling supports an energy-conserving ambush lifestyle rather than a high-speed pursuit strategy.

## 8. Expanded profile

### Habitat and range

The species is endemic to the Southern Ocean with a circumpolar distribution from Antarctic waters north toward the Sub-Antarctic Front. Small juveniles occur mainly from the surface to about 500 m, while later stages descend and adults occupy meso- and bathypelagic habitat, reaching roughly 2,000 m depth.

### Diet and ecology

Evidence from captures, predator stomach contents and isotopes indicates a high trophic position. Prey include mesopelagic fishes, toothfish and other squid. It is itself eaten by sperm whales and other large predators, making it both a major deep-sea predator and important prey biomass.

### Social structure

Unknown. No robust evidence supports coordinated hunting, stable groups or territorial systems in adults.

### Reproduction and life history

Large known specimens are female. Te Papa's 2007 specimen contained eggs, and the 2014 large specimen was submature female. The 2017 review reports maturity at at least about 1 m mantle length and above 30 kg, with potential fecundity estimated up to about **4.2 million oocytes**. Exact spawning behavior remains unknown.

### Conservation

Population size and trend are poorly constrained because the animal is exceptionally difficult to observe and sample. Conservation interpretation should therefore emphasize data deficiency rather than implying abundance from its broad circumpolar range.

### Human interaction

Direct interaction is overwhelmingly scientific and fishery bycatch. Major specimens have been recovered from Antarctic toothfish longlines. There is no evidence that colossal squid hunt humans.

### Fun facts

- The species was described in 1925 from arm material recovered from a sperm whale stomach.
- The 2007 Te Papa specimen's eye measured roughly 27-28 cm across.
- Its 2.5 m mantle alone is longer than the old site's entire 1.0 m placeholder body length.
- The 2007 animal remained attached to a hooked Antarctic toothfish while the longline was hauled upward.
- Its tentacular clubs use swivelling hooks, while its arms also carry hooks.
- Beaks recovered from sperm whales exceed the beak size of the famous near-half-tonne specimen, implying still larger individuals occur.
- In 2025, researchers obtained the first confirmed video of a live colossal squid in its natural environment, but that individual was a juvenile about 30 cm long, not a usable adult image specimen.

### Concise site-ready summary

The colossal squid is the heaviest living invertebrate, a deep Southern Ocean ambush predator approaching half a tonne. Rather than chasing prey at extreme speed, it uses hooked tentacles and arms to seize animals at close range and draw them to a cutting beak. Its enormous 27-28 cm eyes are among the largest in nature and are specialized for the dim deep sea. Despite its fearsome anatomy, its soft body and very low-energy lifestyle keep its Defense and Stamina well below its Attack and Special ratings.

### Narrative profile

*Mesonychoteuthis hamiltoni* is a case where reality is stranger than the usual sea-monster story. Its body can approach half a tonne, its mantle is measured in metres, and its tentacles carry swivelling hooks. Yet the best physiological work does not support a constantly charging super-predator. In the cold darkness of the Southern Ocean, energy is precious. The colossal squid appears built to wait, detect and suddenly secure prey that enters its capture envelope.

That makes it a dangerous specialist rather than an all-purpose aquatic heavyweight. A hooked grip on a fish can become catastrophic as more arms engage and the beak is brought into play. But the same animal has no shell, no bones and no thick dermal armor. Against a much larger toothed predator, especially a sperm whale, the squid's weapons are defensive liabilities as much as offensive tools: they can scar and grapple, but they do not erase the mass and bite advantage of the whale.

Its giant eyes illustrate the same specialization. They are extraordinary sensory organs, but they should not inflate cognition. Its low metabolic rate likewise should not be mislabeled as elite stamina. Keeping those distinctions intact is essential for roster-wide ABS calibration.

### Future field proposals

- Add `mantle_length_cm`, `eye_diameter_cm`, `beak_lrl_mm`, and a hook-dimension field once standardized measurements are available.
- Replace generic `speed_mps` with measured routine and burst swimming fields if biologging ever becomes possible.
- Revisit lifespan after statolith or beak-increment periodicity is independently validated.
- Add an evidence-confidence flag for species known mostly from specimens and predator remains.

## 9. Mandatory image research and verification

- `image_status`: **REPLACEMENT SOURCE NEEDED**
- `png_repo_path`: `animal-research-for-update/images/colossal-squid.png` (**not present / not complete**)
- `source_page_url`: https://www.tepapa.govt.nz/digital-museum/explore-digital-museum/colossal-squid/colossal-squid-te-papa
- `original_photo_url`: not promoted as a candidate because the adult photographs available in this run depict dead, dying, damaged or preserved museum specimens rather than a healthy adult meeting `IMAGE_REQUIREMENTS.md`
- `file_format_verified`: no
- `alpha_verified`: no
- `full_body_verified`: no compliant healthy-adult source
- `adult_verified`: adult-scale female specimens exist photographically, but they fail the healthy-live-source requirement
- `sex_verified_or_unknown`: female for the 2007 specimen
- `license_status`: Te Papa identifies its specimen imagery as CC BY-NC-ND; this does not solve the biological suitability problem and ND also makes a derivative cutout inappropriate without permission
- `notes`: The first confirmed in-situ live *M. hamiltoni* footage was announced in 2025, but the animal was a roughly 30 cm juvenile. Museum images can be high resolution and exact-species, but a preserved/dead adult is not a photograph of a healthy adult. Do not use it merely to satisfy the image count. A future run needs a healthy adult/subadult source with explicit maturity and full appendage visibility, or must retain this blocker if no such photograph exists.

No PNG is claimed. Current connected GitHub write actions are UTF-8 text-only and cannot commit the required image binary anyway.

## 10. Source ledger

| Source | Direct URL | Supports | Confidence / caveat |
|---|---|---|---|
| Museum of New Zealand Te Papa, Colossal squid at Te Papa | https://www.tepapa.govt.nz/digital-museum/explore-digital-museum/colossal-squid/colossal-squid-te-papa | taxonomy, specimen history, 2003/2007/2014 specimens, sex, 470/495 kg context, beaks | **High**; primary museum holding/specimen account |
| Te Papa, How big is the colossal squid on display? | https://www.tepapa.govt.nz/digital-museum/explore-digital-museum/colossal-squid/colossal-squid-te-papa/how-big-colossal-squid-on | 4.2 m total length, 2.5 m mantle, 495 kg displayed weight, 42.5 mm beak, 49 mm whale-stomach beaks, shrinkage | **High**; preservation alters linear measurements |
| Te Papa, Body of the colossal squid | https://www.tepapa.govt.nz/digital-museum/explore-digital-museum/colossal-squid/anatomy-colossal-squid/body-colossal-squid | 2.5 m mantle, 982 mm width, muscular mantle/chromatophores | **High** |
| Rosa et al. 2017, Polar Biology / British Antarctic Survey | https://www.bas.ac.uk/data/our-data/publication/biology-and-ecology-of-the-worlds-largest-invertebrate-the-colossal-squid-mesonychoteuthis-hamiltoni-a-short-review/ | range, depth, 6 m upper length, 495 kg record, diet, trophic ecology, ambush interpretation | **High** review; direct observations remain sparse |
| Rosa & Seibel 2010, JMBA | https://doi.org/10.1017/S0025315409991494 | low metabolic rate, modeled 45.1 kcal/day, 0.03 kg prey/day, sit-and-wait hypothesis | **High for published model**, moderate for exact behavior because it is inferred rather than directly observed |
| Nilsson et al. 2012, Current Biology | https://doi.org/10.1016/j.cub.2012.02.031 | 27-28 cm adult colossal-squid eye; visual modeling | **High** for measurement, **moderate** for adaptive interpretation |
| CEPH REF species account | https://cephref.org/species/mesonychoteuthis-hamiltoni | recent 5.2-year lifespan estimate and explicit daily-increment caveat | **Moderate/low** for lifespan until increment periodicity is validated |
| Te Papa, 100th birthday | https://www.tepapa.govt.nz/te-papa-celebrates-colossal-squid-s-100th-birthday | heaviest invertebrate, eye/hook context, >500 kg possibility | **High institutional summary**, but >500 kg is probable rather than directly weighed |

### Main conflicts and uncertainty

1. **495 vs 470 kg:** 495 kg is the famous frozen/display specimen figure; Te Papa states ice was included and about 470 kg is a more accurate animal-mass estimate. Canonical value uses 470.0 kg.
2. **4.2 vs 5.4 vs ~6 m:** specimens differ and postmortem shrinkage is substantial. Canonical length uses the measured 4.2 m specimen value, with an explicit preservation flag rather than inventing living length.
3. **Lifespan:** 5.2 years is provisional because the assumed daily beak increments are not validated.
4. **Behavior:** ambush predation is strongly argued from physiology/ecology but has not been directly watched in a healthy adult in situ.
5. **Image:** no known source found in this run simultaneously satisfies exact species, healthy adult, complete body, adequate quality and reuse/cutout permission.

## 11. Cross-animal normalization notes

- At 470 kg the colossal squid has far more absolute grappling mass than Clouded Leopard (22 kg), Cheetah/Chimpanzee (~46 kg) or Cassowary (65 kg), so Raw Power and Attack must be substantially higher.
- It remains below Cape Buffalo (750 kg bull, Attack 76.0) in Attack because buffalo weapon delivery is structurally robust, repeatable and supported by terrestrial mass/impact mechanics, while colossal-squid hook/grapple force is not directly quantified and the squid is a low-energy ambusher.
- Defense **43.0** deliberately stays far below Cape Buffalo **70.0** despite substantial mass because the squid has no hide/armor/bone equivalent and is regularly preyed upon by toothed whales.
- Agility **55.0** stays far below Cheetah **97.0**, Caracal **90.0** and Clouded Leopard **94.0**. Three-dimensional swimming does not justify elite agility when high-speed adult performance is unmeasured and metabolism argues against pursuit.
- Special **88.0** is legitimately elite, comparable to Chameleon **88.0**, but for entirely different mechanisms: giant deep-sea vision plus swivelling hooks and extreme polar-depth specialization rather than ballistic tongue/visual independence.
- Intelligence **52.0** is intentionally conservative. General cephalopod reputation is not substituted for direct *M. hamiltoni* cognition evidence.
- This file should be revisited if healthy adult in-situ imagery, direct swimming telemetry, validated age markers, or adult behavioral observations become available.