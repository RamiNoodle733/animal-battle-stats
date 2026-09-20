# Ibex Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Ibex / Alpine ibex
- **Scientific name:** *Capra ibex* Linnaeus, 1758
- **Family:** Bovidae
- **Status:** Living
- **Exact roster resolution:** The live schema names *Capra ibex*, so this report treats the roster's generic “Ibex” as the **Alpine ibex**, not Iberian, Nubian, Siberian, Walia, or other animals also called ibex.
- **Canonical specimen:** healthy, fully mature adult male, approximately **100.0 kg**, **95.0 cm shoulder height**, **160.0 cm head-body length**, with large permanent horns.
- **Why male:** sexual dimorphism is extreme and directly combat-relevant. Zoo Bratislava reports males at 70–130 kg versus females at 20–40 kg; male horns reach roughly 75–102 cm while females' are much smaller. Mature males also conduct the characteristic dominance contests.
- **Population/seasonal variation:** Alpine populations differ in mass and horn growth. Males can lose about 20% of body mass over winter, so a single scale value is not a year-round constant. Male maximum body size is reached late, around 8.5–10.5 years.

## 2. Physical measurements

### Mass

Zoo Bratislava gives **70–130 kg** for males and **20–40 kg** for females. A species review gives roughly 70–120 kg for males. This broad agreement supports a representative mature-male value near 100 kg without using a 130 kg upper-end animal.

- **Canonical `weight_kg`: 100.0 kg**
- **Credible mature-male context:** about **70–130 kg**
- **Confidence:** high for scale, moderate for a single representative value because age, season and population matter.

### Height

Zoo Bratislava reports males at **90–100 cm** shoulder height and females at 70–85 cm.

- **Canonical `height_cm`: 95.0 cm**
- **Confidence:** high.

### Length

Zoo Bratislava reports male body length at **150–170 cm**, while a mammalian synthesis gives somewhat shorter head-body ranges depending on measurement convention.

- **Canonical `length_cm`: 160.0 cm**
- **Context:** representative mature male within the institutional 150–170 cm range.
- **Confidence:** moderate-high; published sources do not always use identical length conventions.

### Speed and locomotion

Popular secondary pages repeat about 50 km/h, but I did not recover a strong species-specific primary or institutional maximum-speed measurement. Because ABS requires measured facts to remain distinct from internet repetition, the speed field is left unknown rather than converting a weak claim into false precision.

- **Canonical `speed_mps`: 0.0**
- **Interpretation:** unknown/not defensibly measured here, not literally immobile.

Alpine ibex locomotor excellence is instead represented in Agility and Maneuverability: they are specialized for steep, rocky alpine slopes and precise footing, but this must not be confused with a certified flat-ground top speed.

### Lifespan

Animal Diversity Web reports a typical wild lifespan of **10–18 years** and a captive maximum of **21.25 years**. Sex-specific syntheses report males reaching about 16 years in the wild and females about 19.

- **Canonical `lifespan_years`: 16.0 years**
- **Rationale:** healthy mature-male context rather than the captive record.
- **Confidence:** high.

### Horns and weapon dimensions

A Mammalian Species synthesis reports male horns approximately **75–102 cm long** with **20–25 cm basal girth**; female horns reach only about 35 cm. Male horns are permanent, massive, backward-curving structures with prominent transverse ridges.

Peer-reviewed work on **8,355 males and 44,088 annual horn-growth increments** confirms substantial individual variation in horn growth while finding no long-term decline in horn size in the studied Swiss population. A Gran Paradiso study of 383 naturally deceased males found persistent individual differences in horn growth and no evidence that faster early horn growth shortened longevity.

- **Representative mature-male horn length:** about **90 cm** along the horn
- **Defensible reported male range:** **75–102 cm**
- **Basal girth:** **20–25 cm**
- **Primary weapon:** paired horns delivered by butting, clashing, hooking, and downward thrusts.
- **Secondary weapons:** body shove and hooves.
- **Canonical `bite_force_psi`: 0.0**. No defensible species-specific bite-pressure measurement was found, and biting is not its characteristic combat weapon.

### Defensive structures

The ibex has no true armor. Its defense comes from robust bovid construction, substantial male mass, horn interception, balance, and access to terrain where many predators cannot maneuver safely. This is real defense but not equivalent to thick hide, shell, osteoderms, or megafaunal bulk.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 100.0,
  "height_cm": 95.0,
  "length_cm": 160.0,
  "speed_mps": 0.0,
  "lifespan_years": 16.0,
  "bite_force_psi": 0.0
}
```

`0.0` speed and bite pressure mean no sufficiently defensible species-specific value was recovered for those schema fields. They are not biological claims of zero locomotion or zero bite force.

## 4. Combat biology

### Weapons and offensive mechanics

The mature male's horns dominate its fighting system. Mammalian Species describes direct aggression as horn butts or tip contact, rearing onto the hind legs followed by a downward horn thrust, and synchronized clashes. Equal-ranking males can also run shoulder-to-shoulder. The weapon therefore works as a blunt impact structure, hook/lever, display signal, and close-range control surface.

Unlike a carnivore, an ibex does not have a killing bite or claws designed for prey capture. Its offensive ceiling is consequently limited despite a dangerous 100 kg body and long horns.

### Intraspecific fighting and tactics

Male Alpine ibex have a structured dominance repertoire rather than indiscriminate aggression. Mammalian Species reports linear rank systems based on memory of previous encounters in cohesive groups and on horn length in larger/mobile populations where strangers meet. Much conflict is ritualized, allowing assessment before the most dangerous contact.

This is important for ABS: horn size contributes to both actual weapon quality and opponent assessment, but should not be counted again as extraordinary intelligence or magical intimidation.

### Locomotion and maneuverability

The species is strongly specialized for steep alpine rock. Its practical battle advantage is precise foot placement, balance, elevation control and escape-route access on cliffs. On flat open ground it loses much of this matchup advantage and should not receive hummingbird-like or small-carnivore-like general agility simply because cliff footage looks spectacular.

### Endurance

Ibex routinely live, forage and travel in high-elevation terrain, tolerate cold seasons, and maintain substantial bodies on relatively low-energy plant foods. Rutting and winter can be physiologically costly, and males may lose substantial seasonal mass. This supports good but not elite pursuit-style stamina.

### Senses

As a mountain ungulate, the ibex depends on broad visual surveillance, hearing and olfaction for predator and social detection. No unusual sensory system comparable with echolocation or electroreception was found.

### Predation, predator defense and aggression

Large adults face fewer predators than juveniles, but wolves and other large carnivores can threaten ibex. Their strongest anti-predator asset is terrain: steep rocky slopes create escape geometry that reduces the value of a predator's straight-line pursuit. Horns can defend at close range, but the species is fundamentally an herbivore with ritualized male combat rather than a dedicated predator.

### Environmental advantages

- **Excellent:** cliffs, broken rock, steep alpine slopes, narrow ledges, elevation changes.
- **Good:** open rocky uplands where threats can be detected early.
- **Reduced advantage:** flat soft ground where specialized footing and escape geometry matter less.
- **Poor:** deep water or environments that deny stable hoof contact.

### Weaknesses

- No penetrating carnivore bite or cutting claws.
- Horn attacks require orientation and useful spacing.
- Large horns and body are optimized for terrestrial mountain movement, not confined spaces.
- Much of its exceptional evasiveness is terrain-dependent.
- Defense is robust but unarmored; a large predator that secures the neck/flank can inflict serious trauma.

### Matchup archetypes

- **Favored against:** similarly sized unarmored opponents that must approach from the front, especially on steep broken ground.
- **Competitive against:** other medium-large ungulates where horn reach, footing and body mass can control frontal exchanges.
- **Unfavored against:** large grappling/biting predators that can attack from the flank, armored opponents, and much larger megafauna.
- **Terrain swing:** cliff terrain can change a matchup dramatically without changing the animal's absolute Raw Power.

## 5. Proposed ABS substats

All scores use the roster-wide absolute 0.1–100.0 calibration.

| Substat | Score | Justification |
|---|---:|---|
| Size | **39.0** | A 100 kg adult male is substantial but far below large bovids, bears, great apes by bulk, and megafauna. |
| Raw power | **45.0** | Strong neck, shoulders, legs and 100 kg body support forceful clashes, but absolute muscular output is well below the roster's heavyweight mammals. |
| Weaponry | **58.0** | Paired 75–102 cm horns offer reach, impact, hooking and repeated use; less lethal tissue damage than major carnivore jaws, tusks, or specialized piercing weapons. |
| Protection | **31.0** | No armor; fur, skeletal robustness and horns provide limited direct protection. |
| Toughness | **50.0** | Rugged mountain ungulate capable of repeated horn contests and harsh alpine living, but still vulnerable to serious predator trauma. |
| Speed | **43.0** | Conservative editorial locomotor placement because no strong species-specific maximum was recovered; not derived from the weak 50 km/h web claim. |
| Maneuverability | **73.0** | Exceptional sure-footed terrain control and balance on steep rock, moderated because this is not universal aerial/small-animal agility. |
| Endurance | **66.0** | Strong mountain travel and environmental endurance, with rut/winter energetic costs preventing elite pursuit-endurance placement. |
| Recovery | **55.0** | Robust adult ungulate physiology, but no unusual regeneration or rapid injury-recovery mechanism. |
| Tactics | **52.0** | Rank memory, assessment displays, spacing, horn presentation and structured agonistic behavior show meaningful combat decision-making. |
| Senses | **58.0** | Useful ungulate vision/hearing/olfaction, but no extraordinary specialized modality established. |
| Ferocity | **51.0** | Mature males willingly contest rivals, yet much aggression is ritualized and rank-sensitive rather than relentless predatory attack. |
| Abilities | **57.0** | Cliff mobility and specialized horn-fighting system are meaningful matchup changers without being venom/electricity-tier mechanisms. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **51.0** | A 100 kg male with nearly meter-long horns can deliver dangerous frontal impacts and thrusts, but lacks the killing toolkit of large predators and megafauna. |
| **Defense** | **43.0** | Robust body, horn interception and terrain escape are valuable; absence of true armor limits absolute defense. |
| **Agility** | **71.0** | Elite large-ungulate balance and steep-rock maneuvering, deliberately separated from unsupported top-speed claims. |
| **Stamina** | **66.0** | Strong high-altitude and seasonal endurance, but not an extreme cursorial pursuit specialist. |
| **Intelligence** | **51.0** | Social rank memory, opponent assessment and flexible ritualized contests support moderate tactical cognition. |
| **Special** | **59.0** | The combination of cliff-grade footing and specialized permanent horn system is unusually matchup-relevant, though not an exotic biochemical weapon. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Cliff Lock** — Specialized mountain footing and balance let the ibex hold, traverse and reposition on steep rocky surfaces that sharply constrain many heavier opponents.
2. **Horn-Clash Arsenal** — Large permanent horns support frontal clashes, blunt butts, hooking, leverage and downward thrusts, giving a mature male several mechanically distinct ways to control close combat.

### Unique traits
1. **Rank by the Rack** — Male social rank is tied to remembered encounters and, in large/mobile populations, horn length, making the weapon itself part of pre-contact opponent assessment.
2. **Late-Blooming Heavyweight** — Males continue toward maximum body size into roughly the 8.5–10.5-year range, producing extreme adult sexual dimorphism compared with females.

## 8. Expanded profile

### Habitat and range

Alpine ibex occupy the European Alps, particularly steep rocky slopes, alpine meadows and terrain above or near the treeline. Zoo Görlitz summarizes typical habitat as steep, structurally complex rocky slopes around 1,600–3,200 m elevation. Modern populations reflect major conservation and reintroduction history after a severe historical bottleneck.

### Diet and ecology

They are herbivorous grazers/browsers feeding chiefly on grasses, herbs, leaves and other available alpine vegetation. Seasonal food quality and snow strongly shape body condition. Their grazing links high-alpine plant communities with a large native herbivore adapted to terrain unavailable to many competitors.

### Social structure

Females commonly live in herds with dominance relationships. Males often form smaller bachelor groups outside the rut, with strong rank relationships. During reproductive competition, mature males use display, parallel movement, butting and horn clashes rather than relying on indiscriminate injury.

### Reproduction and life history

Gestation is roughly **165–170 days**. Usually one kid is born, with twins uncommon. Females mature earlier than males; males may be sexually mature well before they attain the size and rank needed to compete effectively with older males. Long horn growth and late body maturation make age a major part of the male fighting phenotype.

### Conservation

*Capra ibex* is currently treated as **Least Concern** in modern conservation references. The species nevertheless has an important conservation history because Alpine ibex were reduced to a small remnant population before protection and reintroduction rebuilt populations across the Alps. The bottleneck remains biologically relevant when discussing genetic diversity and population management.

### Adaptations

- Large permanent horns for male competition and signaling.
- Strongly sexually dimorphic body size and weapon size.
- Precise mountain locomotion and balance on broken rock.
- Seasonal coat and physiology suited to alpine conditions.
- Social assessment that can resolve some contests without maximal injury.

### Human interaction

The Alpine ibex is a major European conservation success and an iconic alpine wildlife species. Hunting management can impose selection on horn phenotypes, which is why the large Swiss horn-growth dataset is especially valuable for separating trophy selection from natural morphology.

### Fun facts

- A 2018 study compiled **44,088 annual horn-growth measurements from 8,355 male Alpine ibex**, an unusually large long-term morphological dataset.
- Male horns can reach roughly **one metre**, while female horns are dramatically smaller.
- Male body size can continue increasing until roughly a decade of age.
- Mature males may lose around **20% of body mass in winter**, showing why a single body-weight number needs seasonal context.
- Male contests include both ritualized displays and spectacular synchronized horn clashes.
- In cohesive groups, males can use memory of previous encounters to maintain a linear dominance hierarchy.

### Concise site-ready summary

A heavily armed mountain goat of the European Alps, the Alpine ibex combines a roughly 100 kg mature male body with near-metre permanent horns and exceptional control on steep rock. Its combat system centers on ritualized assessment, frontal horn clashes, butts and downward thrusts, while cliff terrain provides its strongest defensive advantage. It is formidable among medium-large herbivores but should not be inflated into large-predator or megafauna tiers simply because its climbing and horn fights are spectacular.

### Narrative profile

The Alpine ibex is a terrain specialist whose biology turns mountain geometry into a defensive weapon. A mature male is not merely a goat with long horns: he is a late-maturing, heavily dimorphic bovid whose permanent horns can approach a metre and whose social system has evolved around assessing and safely deploying those weapons. Rivals posture, compare, remember previous outcomes, run shoulder-to-shoulder, butt, rear and crash horn against horn. Those contests reward mass, neck strength, balance and weapon geometry while limiting unnecessary lethal damage.

In an ABS matchup, its best environment matters enormously. On steep rock an opponent may be forced to slow, lose turning options, or expose itself while the ibex keeps stable footing. On level ground that advantage shrinks, leaving a powerful but still unarmored 100 kg herbivore. This is why its Agility can be strong without granting inflated Attack, Defense or Raw Power. The ibex is a good test case for the project's absolute-scaling rule: exceptional specialization should appear where it actually matters, not leak into every score.

### Future structured-field proposals

- `horn_length_cm`: representative mature-male horn length and range.
- `horn_base_girth_cm`: captures structural weapon scale better than a generic “weapon size.”
- `terrain_specialization`: steep-rock / cliff coefficient for future environment-aware simulations.
- `seasonal_mass_change_pct`: useful for species whose combat body condition changes strongly through the year.
- `fighting_style`: ritualized horn clash / butt / thrust.

## 9. Image requirement

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/ibex.png` **(not present; no completion claimed)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Capra_ibex_in_Gran_Paradiso_National_Park.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/f/f3/Capra_ibex_in_Gran_Paradiso_National_Park.jpg
- `file_format_verified`: source is JPEG; final PNG not produced
- `alpha_verified`: **false**
- `full_body_verified`: **false**
- `adult_verified`: **true**; Commons caption explicitly identifies an adult male
- `sex_verified_or_unknown`: **male verified**
- `license_status`: **CC BY-SA 4.0**, reusable with attribution/share-alike compliance
- `source_resolution`: **3233 × 2155**
- `notes`: Exact *Capra ibex*, explicit adult male, healthy wild Gran Paradiso subject and high-resolution reusable source. The source page and search imagery were checked, but this run did not establish strict visibility of the entire tail and all four feet strongly enough to certify the mandatory complete-body standard. Do not cut out or commit until that strict anatomy check passes. Current GitHub writer is UTF-8 text-only, so even a suitable source cannot be turned into a genuine committed RGBA PNG through this connector.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding | Confidence / caveat |
|---|---|---|---|---|
| Corlatti et al., *Mammalian Species*: *Capra ibex* | https://academic.oup.com/mspecies/article/doi/10.1644/830.1/2600872 | taxonomy, horns, fighting, social rank | Male horns 75–102 cm; basal girth 20–25 cm; direct/indirect aggression and rank behavior described | **High**; species synthesis |
| Animal Diversity Web, *Capra ibex* | https://animaldiversity.org/accounts/Capra_ibex/ | longevity, behavior, sociality | Wild lifespan about 10–18 years; male/female social organization and rut behavior | **High-moderate**; institutional synthesis |
| Zoo Bratislava, Alpine ibex | https://www.zoobratislava.sk/en/animals/animal-lexicon/mammals/kozorozec-alpsky/ | sex-specific dimensions, mass, lifespan, diet | Males 150–170 cm, 90–100 cm high, 70–130 kg; females substantially smaller; 20-year lifespan summary | **High-moderate**; zoological institution |
| Zoo Görlitz, Alpine ibex | https://www.tierpark-goerlitz.de/en/tiere/saeugetiere/207-Alpine-ibex | habitat, horn use, reproduction | Horns up to ~1 m; rocky 1,600–3,200 m habitat; 165–170 d gestation; horn-clashing courtship competition | **High-moderate**; zoological institution |
| Büntgen et al. 2018, *Journal of Animal Ecology* | https://besjournals.onlinelibrary.wiley.com/doi/10.1111/1365-2656.12839 | horn growth, hunting selection | 44,088 increments from 8,355 males; horn/body traits stable over study period despite selective harvest | **High**; peer reviewed |
| Bergeron et al. 2008, *Oikos* | https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/j.2007.0030-1299.16158.x | horn growth and longevity | 383 males; early horn growth predicted later horn length, no longevity cost detected among studied ages | **High**; peer reviewed |
| Species synthesis / Zenodo record | https://zenodo.org/records/6636946 | dimorphism, horn range, seasonal mass, longevity | Male horns 75–102 cm, males can lose ~20% winter mass, maximum body size reached late | **Moderate-high**; synthesis, claims cross-check with primary literature where possible |
| Wikimedia Commons, Irene Vercellino | https://commons.wikimedia.org/wiki/File:Capra_ibex_in_Gran_Paradiso_National_Park.jpg | image provenance | Explicit adult male *Capra ibex*, Gran Paradiso, 3233×2155, CC BY-SA 4.0 | **High provenance**, but strict full-body framing not certified |

### Source conflicts and uncertainty

- Male mass ranges vary by institution/population and season. The 100.0 kg canonical value is representative, not a claimed species-wide mean.
- Length sources use somewhat different conventions. The 160.0 cm canonical value follows Zoo Bratislava's mature-male body-length range.
- The widely repeated ~50 km/h speed claim was not strong enough for a canonical measured field and was rejected.
- No species-specific bite-pressure measurement was found. No PSI is fabricated.
- Horn dimensions are much better supported than any attempt to assign a universal impact force; no unsupported impact Newton value is invented.

## 11. Cross-animal normalization notes

- **Bighorn Sheep:** Ibex is in a similar broad horned-ungulate combat class but should not automatically inherit bighorn ramming values. Bighorn research has stronger direct evidence for high-speed ramming biomechanics; ibex gets more credit for steep-rock maneuverability and long thrusting/hooking horns, not invented impact force.
- **Hippopotamus:** The 100 kg ibex must remain dramatically below an 1,800 kg hippo in Raw Power, Attack, Defense and Size. Its terrain agility can legitimately be higher.
- **Honey Badger / Hyena:** Ibex outweighs them, but their carnivoran killing tools and grappling/bite mechanics are more directly tissue-destructive. Horn reach keeps ibex competitive frontally without erasing that distinction.
- **Hummingbird / Huntsman Spider:** Ibex is far more powerful absolutely, while those tiny animals can still outrank it in maneuverability because Agility is not Raw Power.
- **No proportional-strength leakage:** cliff climbing is not scored as giant muscular force. It raises maneuverability and contextual Special, not Attack by proxy.
- **No speed/agility confusion:** Agility 71.0 comes from terrain control and balance, while unsupported maximum speed remains 0.0 in the factual field.
- **No double-counting:** horns principally drive Weaponry/Attack; their role in social assessment is discussed under Tactics but does not separately inflate Intelligence into a high-cognition tier.

## Verification checklist

- Exact taxon resolved: **yes**
- Healthy representative adult fighting sex: **yes, mature male**
- Canonical physical fields investigated: **yes**
- Unsupported PSI avoided: **yes**
- All current ABS substats scored with one decimal: **yes**
- Six headline ratings scored with one decimal: **yes**
- Exactly two special abilities: **yes**
- Exactly two unique traits: **yes**
- Habitat/range/diet/ecology/social/life history/conservation/adaptations/human interaction: **yes**
- Several genuine fun facts: **yes**
- Site summary and narrative profile: **yes**
- Source ledger with direct URLs/confidence/conflicts: **yes**
- Cross-roster normalization notes: **yes**
- Mandatory image fields included: **yes**
- Verified transparent PNG committed: **no; image remains separately pending**
