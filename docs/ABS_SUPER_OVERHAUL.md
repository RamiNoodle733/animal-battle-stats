# ANIMAL BATTLE STATS: SUPER OVERHAUL EXECUTION MISSION

You are taking over development of:

* Repository: `RamiNoodle733/animal-battle-stats`
* Production site: `https://animalbattlestats.com`
* Current product: Animal Battle Stats, abbreviated ABS
* Current approximate version at the beginning of this task: v2.10.0

This is NOT a request to merely audit the repo, write recommendations, create mockups, or produce a roadmap.

You are being asked to perform a major autonomous product, engineering, SEO, AI-search, data, UX, design, community, and gameplay overhaul of Animal Battle Stats.

WORK AGGRESSIVELY.

Inspect the actual current repository before trusting documentation because documentation may be stale. Use the live production site as another source of truth. Browse the web when needed. Research current official SEO, Google Search, generative-search, OpenAI SearchBot, structured-data, accessibility, security, performance, and relevant web-platform guidance.

Do not stop after one or two minor improvements.

Do not spend the entire run writing a plan.

Create a plan, then EXECUTE as much of it as reasonably possible.

The ultimate goal is to transform Animal Battle Stats into the definitive online platform for:

* animal powerscaling
* animal vs animal battles
* "who would win?" questions
* hypothetical animal fights
* human vs animal questions
* "could I beat this animal?"
* "could a human beat this animal?"
* "how many humans would it take to beat this animal?"
* bloodlusted hypothetical scenarios
* animal strength comparisons
* animal combat statistics
* strongest animal discussions
* pound-for-pound animal rankings
* bite force comparisons
* size comparisons
* speed comparisons
* attack and defense comparisons
* wildlife combat attributes
* animal tier lists
* animal tournaments
* community animal debates
* animal matchup simulations
* prehistoric and extinct animal powerscaling
* team and pack matchups
* biome-specific fights
* essentially the entire serious and entertaining animal-powerscaling topic

The product should be polished enough that when somebody asks an AI assistant:

> Who would win, a tiger or a lion?

or:

> Could a human beat a wolf in a fight?

or:

> How many humans would it take to beat a gorilla?

or:

> What is the strongest animal pound for pound?

Animal Battle Stats has a strong chance of being found, cited, linked, or used as a source.

The site should also be genuinely good enough that a human who lands on it from search wants to continue browsing.

---

# 1. CORE PRODUCT VISION

ABS should become:

**The data-driven animal powerscaling platform.**

The product loop should be:

**Ask a question → get a direct answer → understand why → inspect the stats → change the scenario → compare another matchup → vote → discuss → share → explore → return later**

Every major feature should support that loop.

The site should feel like a combination of:

* a fighting-game character database
* a wildlife statistics database
* a powerscaling wiki
* a transparent battle simulator
* a sports ranking site
* a debate community
* a collectible animal encyclopedia

But it should remain coherent and easy to use.

Do not simply bolt unrelated features onto the existing site.

---

# 2. FIRST ACTION: AUDIT THE ACTUAL REPOSITORY

Before major implementation, inspect:

* current frontend architecture
* existing Astro migration
* root HTML pages
* CSS architecture
* legacy CSS
* JavaScript modules
* API routes
* MongoDB models
* authentication
* voting
* rankings
* comments
* chat/community
* tournaments
* XP system
* BP system
* achievements if present
* animal profile routes
* sitemap generation
* robots.txt
* structured data
* prerendering
* image pipeline
* responsive image system
* build process
* tests
* Playwright verification
* performance budgets
* deployment configuration
* existing security review
* outstanding GitHub issues
* stale documentation
* live-site behavior

Known historical context includes approximately 225 animals and substantial legacy HTML/CSS/JS alongside an Astro migration.

Do not assume historical review findings remain unfixed. Verify each issue against current code before changing it.

Create or update:

`docs/ABS_OVERHAUL_MASTER_PLAN.md`

Track:

* problem
* proposed solution
* status
* relevant files
* validation performed
* follow-up work

Do not let documentation consume the run. It should support implementation.

---

# 3. PRIORITY ORDER

Use this priority order unless actual repository findings justify changing it:

## P0: Do not build on a broken foundation

Fix severe:

* security vulnerabilities
* unauthorized mutation endpoints
* injection risks
* broken authentication
* unsafe mass assignment
* missing API validation
* major data corruption risks
* production crashes
* broken routes
* inaccessible critical functionality

Review the historical `REVIEW.md` findings and verify whether they still apply.

Do not blindly re-fix resolved problems.

## P1: Product foundation

Improve:

* information architecture
* navigation
* homepage
* mobile usability
* animal pages
* comparison flow
* battle flow
* URL structure
* search/discovery
* data credibility
* performance
* crawlability

## P2: Flagship systems

Build:

* ABS Battle Engine
* matchup pages
* scenario system
* human-vs-animal mode
* rankings expansion
* daily battle
* community redesign

## P3: Retention and social systems

Build/improve:

* achievements
* XP/BP usefulness
* Animal Dex
* profiles
* tier lists
* custom tournaments
* sharing
* streaks
* collections

## P4: Advanced systems

Prepare architecture for:

* teams
* packs
* extinct animals
* battle replay
* ABS Lab
* advanced simulation controls

---

# 4. DO NOT REWRITE THE ENTIRE APPLICATION WITHOUT A REASON

The existing project contains substantial functionality.

Preserve good working systems.

Prefer an incremental migration.

The likely direction should be:

**Astro shell + reusable components + clean data layer + route-specific interactivity**

Gradually remove duplicated giant root HTML pages and legacy CSS/JS only after replacement reaches parity.

Avoid creating a second competing architecture.

Whenever you replace something:

1. verify parity
2. verify mobile
3. verify accessibility
4. verify URLs
5. verify SEO output
6. verify analytics hooks
7. then remove obsolete code

---

# 5. CREATE A CLEAR USER FLOW

A new visitor should understand ABS within seconds.

The highest-value flow should be:

## Homepage

Large immediate question:

**WHO WOULD WIN?**

Two fast animal selectors.

Example presets such as:

* Lion vs Tiger
* Gorilla vs Grizzly Bear
* Orca vs Great White Shark
* Hippo vs Rhino
* Crocodile vs Tiger

Primary CTA:

**SIMULATE BATTLE**

Below that show:

* Daily Battle
* Trending Matchups
* Strongest Animals
* Explore 225+ Animals
* Weight Class Champions
* Recent Community Debates
* Featured Tournament
* Animal Records
* Search

Do not overwhelm the hero with ten unrelated CTAs.

Primary action should be extremely obvious.

---

# 6. BUILD THE ABS BATTLE ENGINE

This should become the flagship product.

Users select:

**Animal A vs Animal B**

The result should include something similar to:

**Siberian Tiger wins 61.8% of simulated neutral-land encounters**

Then explain the result.

Core factors should be derived from real ABS data, not arbitrary random prose.

Possible model inputs include:

* weight
* height
* length
* speed
* bite force
* attack
* defense
* agility
* stamina
* intelligence
* special
* raw power
* maneuverability
* endurance
* recovery
* tactics
* senses
* ferocity
* weaponry
* protection
* toughness
* speed substat
* abilities
* combat style
* preferred range
* environment
* social behavior
* natural weapons
* unique traits
* strengths
* weaknesses

Do not treat every factor equally.

Design a documented battle model.

Prefer a transparent model over an opaque "AI says this animal wins" implementation.

The battle result should show:

* winner
* predicted win probability
* simulation count where applicable
* model confidence
* major deciding factors
* stat advantages
* key strengths
* key weaknesses
* environmental influence
* upset conditions
* assumptions
* data-quality limitations
* model version

Add deterministic seeded simulations where useful so the same scenario can be reproduced.

Separate:

**factual wildlife data**

from:

**derived ABS attributes**

from:

**hypothetical model output**

Do not imply that a hypothetical fight probability is a scientifically established fact.

---

# 7. SCENARIO ENGINE

Allow battles to change based on conditions.

Possible variables:

* neutral terrain
* savanna
* forest
* dense jungle
* rocky terrain
* snow
* shallow water
* deep water
* ocean
* river
* open field
* day
* night
* starting distance
* ambush
* neutral initiative
* home environment
* prime specimen
* average adult
* male/female where reliable data meaningfully differs
* solitary encounter
* pack encounter
* bloodlusted hypothetical mode

Every parameter should change results only if the model has a defensible reason for doing so.

Do not introduce fake precision.

Display assumptions clearly.

A scenario should have a shareable URL.

Example conceptual URL:

`/battle/lion-vs-tiger?terrain=savanna&mode=bloodlusted`

Use clean canonicalization so parameter combinations do not create an uncontrolled SEO duplicate-content problem.

---

# 8. MATCHUP PAGES

Build excellent permanent matchup pages.

Example:

`/battle/lion-vs-tiger`

The page H1 should naturally answer the search intent:

**Lion vs Tiger: Who Would Win?**

Near the top should be a short direct-answer block.

Example structure:

**ABS verdict: Tiger favored**

> In ABS's neutral 1v1 model, the Siberian tiger is favored because of its larger average body mass, agility and solitary predatory adaptations, although the lion remains highly competitive due to stamina, weaponry and experience fighting rival lions.

Then show the probability.

Then provide:

* head-to-head table
* physical measurements
* battle stats
* substats
* model breakdown
* advantages by category
* disadvantages
* size visualization
* likely fight dynamics at a high level
* environmental scenarios
* community prediction
* model prediction
* poll
* sources
* data confidence
* methodology
* related matchups
* discussion
* sharing

Do not write graphic gore.

Do not frame hypothetical results as real wildlife interaction guidance.

---

# 9. AI SEARCH AND SEARCH ENGINE DOMINANCE

This is one of the HIGHEST priorities.

Research the latest official guidance before implementing.

Target visibility in:

* Google Search
* Google AI Overviews
* Google AI Mode
* ChatGPT Search
* Bing
* Copilot-style search
* other answer engines where technically reasonable

Do not use spammy SEO tactics.

Do not create thousands of worthless keyword pages.

Current search systems reward useful original content.

ABS's advantage should be its ORIGINAL DATA SYSTEM, ORIGINAL BATTLE MODEL, ORIGINAL VISUALIZATIONS, ORIGINAL COMMUNITY DATA, and ORIGINAL MATCHUP ANALYSIS.

That is the moat.

---

# 10. ANSWER SEARCH INTENT DIRECTLY

Create content architecture for questions people actually ask.

Important query families include:

## Animal vs animal

* lion vs tiger who would win
* tiger vs gorilla
* gorilla vs grizzly bear
* hippo vs rhino
* crocodile vs tiger
* orca vs great white
* jaguar vs leopard
* wolf vs hyena
* elephant vs rhino
* polar bear vs grizzly

## Human vs animal

* could a human beat a wolf
* could I beat a wolf
* could a human beat a kangaroo
* human vs chimpanzee
* human vs gorilla
* human vs deer
* human vs coyote
* human vs dog
* human vs mountain lion
* human vs leopard

## Multiple humans

* how many humans would it take to beat a lion
* how many humans to beat a gorilla
* how many humans to beat a bear
* how many humans to beat an elephant
* 10 humans vs gorilla
* 100 humans vs lion
* humans vs tiger bloodlusted

## Powerscaling

* strongest land animal
* strongest animal in the world
* strongest animal pound for pound
* best animal fighter
* strongest predator
* strongest mammal
* strongest reptile
* strongest bird
* strongest marine animal
* most dangerous animal in a fight
* best bite force
* toughest animal
* fastest combat animal
* smartest predator
* strongest big cat

## Stats

* lion bite force
* tiger weight
* gorilla strength
* hippo speed
* crocodile bite force
* animal strength ranking
* animal speed ranking
* animal intelligence ranking

Build the underlying topic graph so ABS can answer these naturally.

Do not keyword-stuff.

---

# 11. HUMAN VS ANIMAL MODE

Build a standardized **Human Matchup** model.

ABS should be capable of addressing:

**Could a human beat X?**

and:

**How many humans would it take to beat X?**

Use standardized hypothetical human profiles rather than pretending every individual is identical.

Possible baseline profiles:

* average adult human
* athletic adult human
* trained combat athlete

Any personal-input mode should remain clearly hypothetical.

Do not present the feature as advice for confronting wildlife.

Add a clear statement such as:

**ABS simulations are hypothetical entertainment and powerscaling models. Never approach, provoke, fight, or test yourself against wildlife.**

Potential output:

**Average unarmed human vs gray wolf**

* Wolf favored: X%
* Human favored: Y%
* Key advantages
* Size comparison
* speed comparison
* weaponry comparison
* intelligence comparison
* stamina comparison
* model confidence

For:

**How many humans would it take?**

Create a team simulation system.

Do not simply multiply individual attack scores.

Account for:

* coordination
* available engagement space
* diminishing returns
* group size
* animal mobility
* size
* multiple attackers
* environment

Clearly label this as a hypothetical mathematical model, not factual real-world guidance.

Allow fun shareable scenarios such as:

**10 humans vs 1 gorilla**

while keeping the presentation non-graphic.

---

# 12. DO NOT MASS-GENERATE THIN SEO PAGES

ABS can mathematically support tens of thousands of animal pairings.

That does NOT mean every possible pair should automatically become an indexed search page immediately.

Separate:

**simulation availability**

from:

**indexable editorial-quality matchup pages**

Any animal pair can be simulated dynamically.

But indexable permanent pages should pass a quality threshold.

A search-facing matchup page should have substantial unique value through:

* original model output
* actual underlying data
* comparison tables
* sources
* confidence information
* unique matchup analysis
* scenario differences
* community data where available
* related content
* useful visualizations

Start with high-interest matchups.

Expand based on:

* internal searches
* Search Console queries
* site popularity
* community votes
* external search demand
* meaningful coverage gaps

Avoid scaled-content spam.

---

# 13. SEARCH-FIRST PAGE STRUCTURE

For major question pages, make the information easy for both humans and retrieval systems to understand.

A typical matchup page should roughly contain:

1. clear H1 containing the actual matchup
2. short direct answer
3. ABS model probability
4. major deciding reason
5. concise head-to-head data table
6. size comparison
7. combat-stat comparison
8. detailed reasoning
9. scenario changes
10. sources and confidence
11. methodology link
12. community prediction
13. related questions
14. related battles

The exact design can vary.

Do not create ugly SEO walls of text.

---

# 14. TECHNICAL SEARCH REQUIREMENTS

Audit and implement properly:

* unique page titles
* useful meta descriptions
* canonical URLs
* crawlable internal links
* correct status codes
* XML sitemaps
* sitemap index if scale justifies it
* robots.txt
* breadcrumbs
* Open Graph
* Twitter/X cards
* preferred preview imagery
* image alt text
* semantic headings
* structured data
* fast server-rendered/static initial content
* mobile-first rendering
* no accidental `noindex`
* no crawler traps
* no infinite URL combinations
* correct redirects
* duplicate-content control
* pagination handling where applicable

Do not rely on client-side JavaScript to create all important search-visible content if Astro/static rendering can provide it directly in initial HTML.

---

# 15. CHATGPT SEARCH DISCOVERABILITY

Audit `robots.txt`.

Make sure public search content is not accidentally blocking:

`OAI-SearchBot`

If security/CDN configuration is represented in the repository, ensure legitimate search crawler traffic is not accidentally blocked.

Do NOT confuse OAI-SearchBot with training controls.

Do not modify training crawler policy merely because SearchBot should be accessible.

Document this distinction.

Create a verification checklist for production deployment.

---

# 16. DO NOT CHASE FAKE AI SEO HACKS

Do not spend major engineering time on things such as:

* keyword stuffing
* thousands of near-duplicate pages
* fake expert biographies
* fake citations
* fake reviews
* inauthentic backlink schemes
* invisible text
* doorway pages
* automatically generated fluff
* schema spam
* meaningless "AI optimized" duplicate copy

`llms.txt` may optionally exist for services that use it, but it is NOT a Google ranking strategy.

Do not treat it as a high-priority SEO task.

The strategy is:

**be the best source.**

---

# 17. STRUCTURED DATA

Use structured data only where accurate.

Potentially relevant types include:

* Organization
* WebSite
* BreadcrumbList
* ProfilePage
* DiscussionForumPosting
* QAPage only on actual eligible question pages where users can submit answers
* Dataset where appropriate for genuine dataset pages
* other supported types only where valid

Do not mark ordinary editorial matchup pages as `QAPage` just because the title is phrased as a question.

Do not spam FAQ markup.

Validate structured data.

---

# 18. ANIMAL PROFILE OVERHAUL

Every animal should feel like a fighting-game character plus a serious data profile.

Create a strong hierarchy.

Potential sections:

## Hero

* animal image
* common name
* scientific name
* overall battle rating
* tier
* weight class
* animal type
* combat archetype
* current ABS rank

## Core battle stats

* Attack
* Defense
* Agility
* Stamina
* Intelligence
* Special

## Detailed combat stats

Preserve existing useful substats and improve presentation:

* Raw Power
* Weaponry
* Ferocity
* Protection
* Toughness
* Maneuverability
* Speed
* Endurance
* Recovery
* Tactics
* Senses
* Abilities

## Physical statistics

* weight
* body-length range
* height range
* speed
* bite force
* lifespan
* relevant natural weapon dimensions where reliable

## Combat profile

* preferred range
* combat style
* primary environment
* strengths
* weaknesses
* special abilities
* unique traits

## Powerscaling

* overall rank
* weight-class rank
* type rank
* biome rank
* pound-for-pound rank where meaningful
* favorable matchups
* difficult matchups
* notable rivals

## Community

* rating
* votes
* comments
* recent debates
* tournament history
* matchup record

## Evidence

* sources
* confidence
* last reviewed
* methodology

---

# 19. DATA CREDIBILITY OVERHAUL

This is extremely important.

ABS should not look like six arbitrary numbers someone invented.

Create an evidence system.

For factual fields, support metadata such as:

* value
* unit
* minimum
* maximum
* typical value
* sex
* age class
* source
* source URL
* source title
* source publisher
* source date
* accessed date
* measured vs estimated
* confidence
* notes

Never invent sources.

Prefer high-quality sources.

Potential source classes:

* peer-reviewed research
* universities
* government wildlife agencies
* major zoos
* museums
* conservation organizations
* respected reference works

Community editing may eventually propose corrections, but factual data should require review.

---

# 20. FIX UNKNOWN VS ZERO

Audit fields such as bite force.

`0` must not automatically mean the same thing as:

* unknown
* not measured
* not applicable
* truly zero

Create appropriate missing-data semantics.

Do not punish an animal's battle score because a scientific measurement is unavailable.

Unknown data should reduce prediction confidence instead.

---

# 21. CONFIDENCE SYSTEM

Add visible confidence.

Examples:

**Physical Data Confidence: High**

**Battle Prediction Confidence: Moderate**

Confidence should depend on things such as:

* percentage of populated fields
* reliability of sources
* whether measurements are direct or estimated
* variance between sources
* whether important battle inputs are missing
* whether extinct-animal estimates are involved

Explain what confidence means.

---

# 22. STAT METHODOLOGY

Create an excellent public methodology page.

Explain:

* what each stat means
* scale
* formulas
* normalization
* physical-data influence
* subjective components
* source hierarchy
* missing-data treatment
* confidence calculations
* battle model
* environmental modifiers
* versioning
* limitations

Each animal and battle result should link to methodology.

Version the model.

Example:

**ABS Battle Model v1.0**

Future model changes should not silently rewrite history without traceability.

---

# 23. SIZE COMPARISON SYSTEM

Use the existing high-quality transparent animal image pipeline.

Create visual scale comparisons.

For example:

**Tiger vs Lion**

Show both animals approximately to scale using measured body dimensions.

Offer toggles such as:

* length
* shoulder height
* mass

Do not claim photographic pose itself is a measurement.

Clearly label the visualization as approximate.

This could become a visual signature of ABS.

---

# 24. RECORDS PAGE

Create a polished Records section.

Possible records:

* highest Attack
* highest Defense
* highest Agility
* highest Stamina
* highest Intelligence
* highest Special
* largest
* heaviest
* fastest
* strongest bite force
* best weaponry
* toughest
* best senses
* highest raw power
* best pound-for-pound fighter
* strongest land animal
* strongest marine animal
* strongest bird
* strongest reptile
* strongest mammal
* strongest invertebrate

Make each record explorable.

---

# 25. RANKINGS OVERHAUL

Separate rankings into useful dimensions.

Examples:

* Overall
* ABS Model
* Community
* Pound-for-Pound
* Land
* Marine
* Flying
* Mammal
* Reptile
* Bird
* Invertebrate
* Predator
* Herbivore
* Extinct
* Weight Class

Show differences between model ranking and community ranking.

Example:

**ABS: #13**

**Community: #7**

That creates discussion.

Allow filtering and sorting.

---

# 26. WEIGHT CLASSES

Introduce a defensible weight-class system.

Exact class boundaries should be researched and designed for useful competition rather than copied arbitrarily.

Possible conceptual divisions:

* Micro
* Tiny
* Lightweight
* Middleweight
* Heavyweight
* Super Heavyweight
* Titan

Give each class:

* rankings
* champion
* top contenders
* tournaments
* records

This makes fights between similarly sized animals easier to discover.

---

# 27. POUND-FOR-POUND MODEL

Create a separate pound-for-pound ranking.

Do NOT simply divide battle score by weight.

Develop a meaningful normalization approach.

Document it.

The purpose is to answer:

> Which animal is most formidable relative to its body size?

This is an excellent search and community topic.

---

# 28. DAILY BATTLE

Make this one of the main retention mechanisms.

Each day:

**DAILY BATTLE**

Two animals.

User predicts winner.

Then optionally sees:

* community result
* model result
* explanation

Track:

* prediction streak
* correct picks
* total predictions
* upset predictions
* accuracy

Daily battle should work without an account but encourage login to preserve streaks.

---

# 29. ACHIEVEMENTS

Implement meaningful achievements tied to normal exploration.

Examples:

**First Blood**
Complete first battle.

**Bracketologist**
Complete a tournament.

**Upset Specialist**
Correctly predict a major community underdog.

**Marine Biologist**
Explore a large portion of marine animals.

**Encyclopedia**
Explore every animal.

**Stat Nerd**
Open a large number of detailed-stat panels.

**Perfect Bracket**
Correctly predict an entire tournament.

Achievements should feel polished and visible on profiles.

---

# 30. ANIMAL DEX

Create collection progress.

Examples:

**Animals discovered: 184 / 225**

Break down:

* mammals
* reptiles
* birds
* marine
* insects
* arachnids
* extinct
* regions
* biomes

Avoid making simple site browsing tedious.

Discovery should happen naturally.

---

# 31. XP AND BP

Audit the existing XP and BP systems.

Make them coherent.

XP can reward:

* daily battle
* exploring animals
* voting
* tournament predictions
* correct predictions
* useful community participation
* achievements

BP should primarily unlock cosmetic/status features.

Potential rewards:

* profile frames
* titles
* badges
* card skins
* tournament themes
* matchup intro styles
* profile backgrounds
* showcase slots

Do not introduce pay-to-win combat stats.

---

# 32. TOURNAMENT 2.0

Expand current tournaments.

Modes can include:

* Standard
* Random
* Weight Class
* Big Cats
* Bears
* Sharks
* Marine
* Birds
* Mammals
* Reptiles
* Predators
* Herbivores
* Biome Cup
* Continent Cup
* Gauntlet
* King of the Hill
* Survival
* Community Tournament
* Daily Tournament

Allow users eventually to create custom tournaments and share URLs.

Preserve brackets cleanly on mobile.

---

# 33. TIER LIST BUILDER

Create an Animal Tier List feature.

Users drag animals into:

S
A
B
C
D
F

Allow:

* custom title
* custom roster
* public URL
* share image
* likes
* comments
* cloning/remixing

Examples:

**Strongest Land Predators Tier List**

**Best Pound-for-Pound Animals**

**Animals I Could Beat**

This could become an excellent user-generated-content system.

---

# 34. COMMUNITY SECTION: MAJOR REDESIGN

The community should stop feeling like a generic chat bolted onto the site.

Center it around animal content.

Community home should emphasize:

* Daily Battle
* Trending Matchups
* Recent Debates
* Popular Tier Lists
* Community Rankings
* Active Tournaments
* Interesting Comments
* User Predictions
* Recently Changed Rankings

Every animal should have discussion.

Every major matchup should have discussion.

Every tournament should have discussion.

Tier lists should have discussion.

Users should have profiles.

---

# 35. COMMUNITY THREAD QUALITY

Create structured debate experiences.

Example matchup:

**Lion vs Tiger**

Tabs or sections:

* Overview
* Model
* Community Vote
* Arguments for Lion
* Arguments for Tiger
* Comments

Allow users to upvote useful arguments.

Surface:

**Top argument for Lion**

**Top argument for Tiger**

Avoid turning the site into an unmoderated wall of spam.

Implement:

* rate limits
* reporting
* deletion/moderation capabilities
* safe rendering
* abuse prevention
* pagination
* sane notification architecture if applicable

---

# 36. COMMUNITY SEO

Public, meaningful discussion pages can be indexable where they have genuine value.

Ephemeral or low-quality pages should not clutter the index.

Use appropriate structured data only where valid.

Avoid indexing:

* login pages
* account settings
* empty threads
* internal API routes
* thin filters
* endless activity URLs
* duplicate sort orders

---

# 37. SITE SEARCH

Build a powerful unified search.

Users should be able to type:

`lion`

`lion vs tiger`

`strongest bear`

`fastest animal`

`bite force`

`marine predator`

`animals under 100kg`

`gorilla vs grizzly`

`human vs wolf`

and get useful destinations.

Use autocomplete.

Include popular searches.

Track anonymous aggregate query demand in a privacy-conscious way so high-demand topics can inform future pages.

---

# 38. TOPIC HUBS

Build high-quality hub pages.

Examples:

* `/animals`
* `/mammals`
* `/reptiles`
* `/birds`
* `/marine`
* `/big-cats`
* `/bears`
* `/sharks`
* `/snakes`
* `/primates`
* `/invertebrates`
* `/predators`
* `/herbivores`
* `/extinct`
* `/rankings`
* `/records`
* `/battles`

Each hub should be useful, not just an SEO index.

Include:

* rankings
* records
* featured animals
* popular battles
* relevant stats
* internal links
* filters

---

# 39. PREHISTORIC AND EXTINCT ARCHITECTURE

ABS already includes at least some extinct-animal content.

Prepare a clean system for extinct animals.

Potential future additions include:

* Tyrannosaurus rex
* Spinosaurus
* Smilodon
* Dire wolf
* Titanoboa
* Woolly mammoth
* Megalodon
* Deinosuchus
* Ankylosaurus

Do not rush hundreds of extinct animals without good source data.

Estimated measurements must be visibly labeled.

Prediction confidence should reflect uncertainty.

---

# 40. ABS LAB

Design architecture for an advanced mode.

Potential controls:

* equalize weight
* equalize speed
* remove venom
* remove armor
* neutral terrain
* home terrain
* disable ambush
* normalize size
* solo only
* pack behavior
* swap environments

This is for users who want to understand the powerscaling model itself.

Do not let advanced controls clutter the normal battle experience.

---

# 41. TEAM AND PACK BATTLES

Prepare for:

* 2 wolves vs lion
* 10 humans vs gorilla
* pride of lions vs pack of hyenas
* 3 wolves vs grizzly
* multiple small predators vs larger animal

Model:

* coordination
* space
* mobility
* diminishing returns
* engagement limits
* social behavior
* group specialization

This should eventually power the "how many humans?" queries.

---

# 42. SHAREABILITY

Every major result should be shareable.

Create polished dynamic social cards for:

* animal profile
* matchup
* tournament champion
* tier list
* achievement
* daily battle
* prediction streak
* ranking
* record

Example:

**GORILLA vs GRIZZLY BEAR**

**GRIZZLY FAVORED: 78%**

**ABS Battle Model**

`animalbattlestats.com`

Use proper Open Graph images.

---

# 43. VISUAL DESIGN OVERHAUL

The site should feel premium.

Keep the combat/fighting-game identity, but avoid looking like a cluttered 2012 gaming forum.

Design goals:

* strong typography
* clean spacing
* consistent cards
* coherent colors
* clear hierarchy
* excellent contrast
* polished hover/focus states
* responsive layouts
* subtle depth
* purposeful animations
* high-quality animal imagery
* dramatic battle moments
* quiet data-reading moments

The page should know when to be dramatic and when to get out of the user's way.

---

# 44. DESIGN SYSTEM

Consolidate:

* colors
* spacing
* typography
* borders
* radii
* shadows
* cards
* buttons
* badges
* stat bars
* tabs
* tables
* dialogs
* form controls
* skeletons
* notifications
* tooltips

Avoid near-identical CSS copied across routes.

Use reusable components.

---

# 45. MOBILE IS A FIRST-CLASS PRODUCT

Test common phone sizes.

Critical experiences must work well on mobile:

* homepage
* animal search
* battle selector
* battle result
* stat tables
* animal page
* rankings
* tournament bracket
* community
* comments
* login
* tier list

Avoid horizontal overflow.

Large tables should have deliberate mobile presentation.

Do not merely shrink desktop layouts.

---

# 46. ACCESSIBILITY

Implement or repair:

* semantic controls
* keyboard navigation
* visible focus
* labels
* modal focus trapping
* heading hierarchy
* alt text
* contrast
* reduced-motion support
* screen-reader text where needed
* accessible charts/tables
* error messaging

Do not sacrifice accessibility for flashy animations.

---

# 47. PERFORMANCE

Audit production performance.

Pay particular attention to:

* large legacy CSS
* giant HTML documents
* large JS bundles
* duplicate scripts
* image loading
* unnecessary preloads
* render-blocking assets
* layout shift
* hydration
* unused code
* database query latency
* API overfetching

Track:

* LCP
* INP
* CLS
* initial JS
* route payload
* image bytes

Respect or improve existing performance budgets.

---

# 48. IMAGE SYSTEM

Preserve the existing animal-image quality pipeline.

Animal imagery should remain:

* correct species
* photographic where intended
* transparent where required
* high resolution
* optimized
* traceable
* properly licensed
* responsive
* non-watermarked
* non-duplicated between species

Do not replace the quality-controlled image pipeline with random generated animal art.

---

# 49. SECURITY

Treat security seriously before increasing traffic.

Audit:

* auth requirements
* authorization
* mutation endpoints
* password handling
* JWT handling
* regex input
* Mongo queries
* mass assignment
* XSS
* CSRF where relevant
* rate limiting
* brute force
* comments
* chat
* profile fields
* URLs
* admin functionality
* secret handling
* API error leakage

Do not break public read-only functionality unnecessarily.

---

# 50. ANALYTICS

Instrument meaningful product events.

Examples:

* homepage battle started
* battle completed
* second battle started
* scenario changed
* animal viewed
* matchup viewed
* search performed
* daily battle predicted
* community vote submitted
* account created
* achievement earned
* tournament started
* tournament completed
* share clicked
* tier list created

Avoid invasive tracking.

Define success metrics.

Important metrics include:

* organic search impressions
* organic clicks
* AI-search referrals where observable
* generative-search visibility where supported
* indexed high-quality pages
* battle starts
* battles per user
* second-battle rate
* return users
* daily battle participation
* community contributions
* pages per session
* Core Web Vitals

---

# 51. INTERNAL LINKING

Create deliberate relationships.

Animal pages should link to:

* similar animals
* rivals
* category
* rankings
* popular matchups
* records
* relevant tournaments

Matchup pages should link to:

* both animals
* closely related matchups
* weight-class rankings
* scenario variations
* related debates

Hub pages should lead into animals and matchups.

Avoid orphan pages.

---

# 52. CONTENT QUALITY

Every public informational page should answer:

**Why should this page exist?**

Good answers include:

* unique ABS data
* original comparison
* original simulation
* useful visualization
* curated research
* real community debate
* meaningful ranking
* meaningful tool

Bad answer:

**because this keyword exists**

Do not publish junk.

---

# 53. AUTHORS, METHODOLOGY, AND TRUST

Make it clear who created ABS.

Make methodology and data provenance easy to find.

Where appropriate show:

* author/project identity
* last reviewed
* source count
* model version
* confidence
* correction process

Create a transparent corrections process.

Credibility matters greatly for both users and search systems.

---

# 54. PAGE TITLES

Use natural titles.

Examples:

**Lion vs Tiger: Who Would Win? | Animal Battle Stats**

**Could a Human Beat a Wolf? | ABS Battle Model**

**Gorilla vs Grizzly Bear: Stats & Battle Simulation**

**Strongest Animals Ranked | Animal Battle Stats**

Avoid repetitive garbage such as:

**Lion Fight Animal Lion Battle Lion vs Tiger Fighting Stats Best Animal Fight**

---

# 55. DIRECT ANSWERS WITHOUT HIDING DEPTH

ABS should be able to satisfy somebody in 10 seconds and reward somebody who spends 30 minutes.

Top of page:

**Tiger favored, 61.8%.**

Below:

**Why?**

Below that:

complete model and evidence.

This is ideal for casual users, power users, search snippets, and AI retrieval.

---

# 56. ERROR STATES AND POLISH

Fix:

* empty screens
* raw API error messages
* broken image placeholders
* failed requests
* loading jank
* duplicate buttons
* confusing navigation
* dead links
* stale version strings
* inconsistent terminology
* layout jumps
* overflowing cards
* desktop-only interactions
* unresponsive dialogs
* weird back-button behavior

Every route should feel intentional.

---

# 57. NAVIGATION

Design one coherent navigation system.

Likely main destinations:

* Battle
* Animals
* Rankings
* Tournaments
* Community
* Search

Secondary areas can include:

* Records
* Methodology
* About
* Profile

Do not show redundant duplicate navigation menus.

---

# 58. ROUTE ARCHITECTURE

Develop a clean URL strategy.

Possible examples:

`/`
`/battle`
`/battle/lion-vs-tiger`
`/animals`
`/animals/lion`
`/rankings`
`/rankings/pound-for-pound`
`/records`
`/tournaments`
`/community`
`/community/battles/lion-vs-tiger`
`/methodology`

Preserve existing indexed URLs with redirects if paths change.

Do not destroy search equity.

---

# 59. ASTRO MIGRATION

Use Astro strategically for crawlable public content.

Ideal candidates:

* homepage shell
* animal pages
* matchup pages
* rankings landing pages
* records
* methodology
* static informational content

Use client-side interactivity only where needed.

Do not convert working interactive systems blindly just to say the site uses Astro.

---

# 60. TESTING

Use existing test infrastructure.

Run relevant:

`npm test`

`npm run lint`

`npm run build`

existing performance checks

existing Playwright verification

SEO audits

image verification

Add tests for important new logic.

Especially test:

* battle formulas
* deterministic simulations
* confidence
* matchup URLs
* canonical URLs
* unknown values
* human team calculations
* auth protections
* community mutations
* search parsing
* structured data output

---

# 61. BROWSER TESTING

Actually inspect rendered pages.

Test desktop and mobile.

Check:

* visual hierarchy
* navigation
* forms
* battle flow
* search
* animal pages
* community
* rankings
* tournament
* login
* error states

Do not trust unit tests alone for UX.

---

# 62. SEO VALIDATION

Verify:

* sitemap generation
* sitemap URLs return 200
* canonical correctness
* no accidental duplicates
* robots
* OAI-SearchBot access
* metadata
* structured-data validity
* OG cards
* rendered page content
* internal links
* crawlability
* mobile page quality

Update the repo's SEO audit scripts if useful.

---

# 63. HOMEPAGE SEARCH LANDING

The homepage itself should clearly communicate topical authority.

It should naturally explain something like:

**Animal Battle Stats compares real animal data and uses a transparent battle model to explore hypothetical animal matchups, powerscaling, rankings, tournaments, and community predictions.**

Do not turn the homepage into an essay.

One strong paragraph is enough before deeper sections.

---

# 64. NO FALSE SCIENTIFIC CLAIMS

ABS combines science and entertainment.

Be explicit.

Do not call hypothetical win probabilities established science.

Use terminology such as:

* ABS model
* simulation
* estimate
* hypothetical
* derived rating

Use scientific citations for factual biological claims.

That distinction increases trust rather than reducing entertainment value.

---

# 65. COMMUNITY DATA AS A MOAT

Show both:

**ABS Model**

and:

**Community Prediction**

Example:

ABS Model:
Tiger 61%

Community:
Tiger 54%

That difference is interesting.

Track historical community sentiment where architecture allows.

This creates unique first-party data that generic AI summaries do not have.

---

# 66. BATTLE HISTORY

For major matchup pages, consider historical trend charts.

Example:

**Community Tiger prediction**

Jan: 57%
Feb: 55%
Mar: 53%

Only implement this if data storage makes sense.

Do not fabricate history.

---

# 67. CHANGELOG AND VERSIONING

Maintain a user-friendly changelog.

Major changes should have version bumps consistent with current versioning infrastructure.

Document:

* data changes
* model changes
* ranking changes
* new features

Model version changes deserve special visibility.

---

# 68. DO NOT BREAK DEPLOYMENT

Respect current Vercel/MongoDB production architecture unless migration is justified.

Review environment-variable requirements.

Do not commit secrets.

Do not hardcode production credentials.

Keep `.env.example` accurate.

---

# 69. DATA MIGRATIONS

If schema changes are required:

* make migrations explicit
* support dry runs where practical
* back up assumptions
* avoid destructive transformations
* document rollback
* maintain compatibility during rollout where needed

---

# 70. GITHUB QUALITY

Clean up obvious repository garbage when safe, including accidental shortcuts or generated artifacts that should not live in source control.

Do not delete historical or useful files without understanding them.

Keep commits logically grouped if committing is available.

Useful commit themes:

* security
* architecture
* SEO foundation
* animal profiles
* battle engine
* community
* performance
* tests

Do not make hundreds of meaningless tiny commits.

---

# 71. EXECUTION STRATEGY

Work in stages but KEEP EXECUTING.

Suggested sequence:

## Stage A: Audit and stabilize

* repository audit
* live-site audit
* current issue verification
* severe security fixes
* broken behavior fixes

## Stage B: Product architecture

* navigation
* route strategy
* design system cleanup
* Astro direction
* shared components

## Stage C: Search foundation

* crawlability
* metadata
* canonicals
* sitemap
* structured data
* OAI-SearchBot
* internal linking
* direct-answer architecture

## Stage D: Core content

* animal profiles
* data evidence
* confidence
* methodology
* records
* rankings

## Stage E: Battle platform

* battle model
* results
* matchup routes
* scenarios
* explanations
* sharing

## Stage F: Human matchup platform

* standardized human profile
* human-vs-animal
* team scaling
* hypothetical disclaimers

## Stage G: Community

* matchup discussions
* Daily Battle
* community predictions
* community home
* moderation

## Stage H: Retention

* achievements
* XP
* BP
* Animal Dex
* tier lists
* tournaments

## Stage I: Polish

* mobile
* accessibility
* animation
* empty/error/loading states
* performance

## Stage J: Validation

* test
* lint
* build
* browser verification
* SEO audit
* security review
* documentation

Do as many stages as the execution environment reasonably allows.

---

# 72. IF TIME OR TOKEN BUDGET BECOMES LIMITED

Do NOT spend the remaining budget summarizing what you would have done.

Prioritize shipping valuable foundational changes.

Use this hierarchy:

1. security/correctness
2. search and crawl foundation
3. homepage/navigation flow
4. animal profile quality
5. battle engine foundation
6. matchup page foundation
7. community repair
8. advanced engagement systems

Leave the codebase in a working state.

Record unfinished items in `docs/ABS_OVERHAUL_MASTER_PLAN.md`.

---

# 73. DECISION STANDARD

For every major feature, ask:

**Does this make ABS more useful for somebody wondering which animal would win?**

**Does this improve trust in the answer?**

**Does this make the answer easier for search engines and AI retrieval systems to discover?**

**Does this encourage the visitor to explore another matchup?**

**Does this make the site more polished?**

If not, reconsider whether it deserves priority.

---

# 74. FINAL QUALITY BAR

By the end of this run, ABS should be materially closer to:

> The best place on the internet to answer animal powerscaling and hypothetical animal fight questions.

Not merely:

> A cool hobby site with animal stat bars.

The final experience should feel:

* polished
* fast
* trustworthy
* deep
* fun
* understandable
* searchable
* shareable
* coherent
* mobile-friendly
* technically serious

Make substantial real improvements.

Do not be timid.

Do not stop at cosmetic changes.

Do not stop at documentation.

Do not leave easily fixable broken systems because they are outside one narrow page.

Use the full repository context.

Think like:

* a senior product engineer
* a technical SEO specialist
* a game-system designer
* a data engineer
* a UX designer
* a security reviewer
* an accessibility engineer
* a community-product designer

Most importantly:

**SHIP.**

When finished, provide a concise report containing:

1. what you changed
2. major architectural decisions
3. new user-facing features
4. SEO/AI-search improvements
5. security/data fixes
6. tests and validation performed
7. remaining highest-priority work
8. relevant commit hashes if available

Do not claim anything passed unless you actually ran the relevant validation.
