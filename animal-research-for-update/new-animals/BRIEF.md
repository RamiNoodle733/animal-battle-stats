# Brief: research new animals for Animal Battle Stats

Repo: /home/user/animal-battle-stats. The site rates real animals on six 0-100 battle ratings
plus 12 substats, from one research report per animal. You are adding NEW animals.

## Read first
- animal-research-for-update/README.md (the report spec and the wording rule)
- animal-research-for-update/CALIBRATION.md (the absolute rating scale; read all of it)
- animal-research-for-update/animals/coyote.md (a complete report the site parses cleanly;
  copy its section structure, heading names, table layouts and list formats exactly)
- animal-research-for-update/new-animals/README.md and wolverine.example.json
- For calibration, the reports of the most similar EXISTING animals (listed with your batch),
  and animal_stats.json for their current ratings. New ratings must sit sensibly against them
  on the absolute scale. Name those comparisons in section 10 of each report.

## For each animal in your batch
1. Research it on the web. Cloud sessions cap WebSearch calls, so use the repo's tool, which
   goes through the network proxy instead:
   `python3 scripts/research/web.py papers "<query>"` (peer-reviewed papers from Europe PMC) and
   `python3 scripts/research/web.py read <url> --grep weight,length,bite` (the page as text,
   trimmed to the sentences that mention those words). Good pages to read directly:
   en.wikipedia.org/wiki/<Name> (follow its citations), animaldiversity.org/accounts/<Genus_species>/,
   fishbase.se, reptile-database.reptarium.cz, nationalzoo.si.edu, nationalgeographic.com,
   australian.museum, fws.gov, fisheries.noaa.gov, akc.org, PubMed. Some sites refuse (403:
   IUCN, Britannica, ResearchGate); cite them only if you read them another way. General web
   search (`web.py search`, Bing) mostly matches only the first word from cloud addresses.
   Prefer IUCN, government agencies, museums, universities, peer-reviewed papers, Animal
   Diversity Web, major zoos. Record the real URLs you read in the source ledger. Never invent a
   URL, a measurement or a bite-force number; say "no reliable measurement" instead.
2. Write animal-research-for-update/animals/<slug>.md following coyote.md's structure:
   identity, measurements, canonical facts, combat biology, 12 substats, 6 headline ratings,
   exactly 2 special abilities and 2 unique traits, expanded profile (with the
   "### Special features" heading), fun facts (at least 6), concise site-ready summary, rich
   narrative (3+ paragraphs), image section, source ledger (at least 8 sources), calibration notes.
   Image section: set image_status to "FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING" if a
   search result gives a Wikimedia Commons file page for a full-body adult photo (record it),
   otherwise "SOURCE FOUND - FULL-BODY NOT VERIFIED". Do not spend long on images; a
   separate pipeline makes the cutouts.
3. Write animal-research-for-update/new-animals/<slug>.json (catalogue base fields).
4. Run: node scripts/research/check-new-animal.js <slug>
   and fix every problem until it prints OK.

## Which animals
Only animals people have seen alive (living species, domestic breeds). No dinosaurs or fossil-only animals.

## Wording rule (the site owner's requirement, strictly enforced by the checker)
No evolution language anywhere in your prose: no evolve/evolved/evolution, adapt/adapted/
adaptation/adaptive/adaptable, ancestor/ancestry, lineage, descended from, natural or sexual
selection, "closest relatives", phylogeny, vestigial, prehistoric, "millions of years".
Use "suited to", "built for", "feature", "specialization", "versatile"; domestic breeds were
"bred from" wild stock. Don't add design/creator claims either; stay descriptive.
Citation titles and URLs stay as published.

## Rules
- Only create/edit files for your own batch's slugs. Other agents work in parallel on others.
- Do not edit any existing report, animal_stats.json, data/*, site code, or run the build.
- No git commands.
- Absolute scale: a house cat is far below a leopard in Attack even if fierce for its size.
  Anchors: Megalodon and the largest whales sit near the top of size/raw power; ants and
  mosquitoes near the floor.

## Report back (short)
One line per animal: slug, the six headline ratings, weight, source count, and anything you
were unsure about (conflicting sources, missing bite force, calibration judgment calls).
