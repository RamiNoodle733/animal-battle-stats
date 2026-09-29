"""Finds Commons photo candidates for new animals from Commons' web pages.

The same job as find-candidates.js, for when the Wikimedia API refuses the
machine (HTTP 429 from shared cloud addresses) but ordinary pages still load.
For each new animal (animal-research-for-update/new-animals/<slug>.json) it
reads the species category and a file search, keeps freely licensed bitmaps
whose titles do not point at heads, skulls, drawings or young animals, reads
each file page for license, author and size, and downloads review thumbnails.

Output (merged into the regular pipeline files):
  .cache/image-pipeline/candidates/<slug>/NN.jpg
  .cache/image-pipeline/candidates.json

Usage: python scripts/images/find-candidates-html.py [--limit 14] [slug ...]
"""
import html
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
NEW = ROOT / "animal-research-for-update" / "new-animals"
PIPE = ROOT / ".cache" / "image-pipeline"
CANDIDATES = PIPE / "candidates"
RESULT = PIPE / "candidates.json"
COMMONS = "https://commons.wikimedia.org"
USER_AGENT = "AnimalBattleStatsImagePipeline/2.0 (https://animalbattlestats.com; animalbattlestats@gmail.com)"
PAUSE = 0.7

# Extra categories and search words where the scientific name is not enough.
# "only": skip the species category and name search, whose generic photos
# (every dog for Canis familiaris) otherwise fill the file limit before the
# breed's own category is reached. "prefer": titles or categories matching
# this pattern rank higher (underwater whales over backs at the surface).
# "files": how many file pages to read (default 40). "titles": specific
# File: pages to include first.
EXTRA = {
    "kangal": {"only": True, "categories": ["Kangal Çoban Köpeği"], "search": ["Kangal Çoban Köpeği", "Kangal shepherd dog"]},
    "tibetan-mastiff": {"only": True, "categories": ["Tibetan Mastiff"], "search": ["Tibetan Mastiff dog"]},
    "house-cat": {"categories": ["Felis catus"], "search": ["domestic cat full body"]},
    "fighting-bull": {"only": True, "categories": ["Toro de lidia", "Toros bravos"], "search": ["toro de lidia", "toro bravo dehesa"]},
    "water-buffalo": {"categories": ["Bubalus arnee", "Bubalus bubalis"], "search": ["wild water buffalo"]},
    "elephant-seal": {"search": ["southern elephant seal bull", "Mirounga leonina male"], "files": 90},
    "philippine-eagle": {"search": ["Philippine eagle perched", "Pithecophaga jefferyi Davao"], "files": 90},
    "humpback-whale": {"only": True, "search": ["humpback whale underwater", "Megaptera novaeangliae underwater", "humpback whale breach"], "prefer": "underwater|breach", "files": 70},
    "sperm-whale": {"only": True, "search": ["sperm whale underwater", "Physeter macrocephalus underwater", "sperm whale Mauritius"], "prefer": "underwater|mauritius|dominica", "files": 70},
    "american-pit-bull-terrier": {"only": True, "categories": ["American Pit Bull Terrier"], "search": ["American Pit Bull Terrier"]},
    "german-shepherd": {"only": True, "categories": ["German Shepherd Dog"], "search": ["German Shepherd dog standing"]},
    "rottweiler": {"only": True, "categories": ["Rottweiler"], "search": ["Rottweiler standing"]},
    "caucasian-shepherd-dog": {"only": True, "categories": ["Caucasian Shepherd"], "search": ["Caucasian Shepherd Dog", "Caucasian Ovcharka"]},
    "belgian-malinois": {"only": True, "categories": ["Belgian Shepherd Malinois"], "search": ["Belgian Malinois"]},
    "greyhound": {"only": True, "categories": ["Greyhound"], "search": ["Greyhound dog standing"]},
    "red-deer": {"search": ["red deer stag", "Cervus elaphus stag"], "prefer": "stag|hirsch|male"},
    "fin-whale": {"search": ["fin whale underwater", "Balaenoptera physalus aerial"], "prefer": "underwater|aerial|drone", "files": 70},
    "gray-whale": {"only": True, "categories": ["Eschrichtius robustus"], "search": ["gray whale underwater", "grey whale underwater", "gray whale breaching", "Eschrichtius robustus spyhopping", "gray whale San Ignacio lagoon"], "prefer": "underwater|breach|spyhop", "files": 120},
    "bowhead-whale": {"search": ["bowhead whale underwater", "Balaena mysticetus aerial"], "prefer": "underwater|aerial|drone", "files": 70},
    "northern-goshawk": {"categories": ["Accipiter gentilis"], "search": ["Northern goshawk adult"]},
    "wild-turkey": {"only": True, "categories": ["Meleagris gallopavo (male)", "Meleagris gallopavo silvestris"], "search": ["wild turkey tom", "wild turkey strutting", "Meleagris gallopavo male displaying", "gobbler turkey"], "prefer": "tom|male|strut|gobbler|display", "files": 70},
    "russian-tortoise": {"categories": ["Agrionemys horsfieldii"], "search": ["Russian tortoise", "Agrionemys horsfieldii"]},
    "rabbit": {"search": ["domestic rabbit", "European rabbit Oryctolagus cuniculus"]},
    "fancy-rat": {"only": True, "categories": ["Pet rats"], "search": ["fancy rat", "pet rat"]},
    "maine-coon": {"only": True, "categories": ["Maine Coon cats"], "search": ["Maine Coon cat"]},
    "mexican-red-knee-tarantula": {"categories": ["Brachypelma smithi"], "search": ["Mexican redknee tarantula", "Brachypelma smithi"]},
    "betta-fish": {"search": ["Siamese fighting fish", "betta splendens male"], "prefer": "male"},
    "goldfish": {"search": ["goldfish aquarium"]},
    "stingray": {"only": True, "species": "Hypanus americanus", "categories": ["Hypanus americanus"], "search": ["southern stingray", "Hypanus americanus", "Dasyatis americana"]},
    "fisher": {"only": True, "categories": ["Pekania pennanti", "Martes pennanti"], "search": ["Pekania pennanti", "Martes pennanti", "fisher Pekania", "fisher cat animal"], "files": 70},
    "swordfish": {"search": ["swordfish swimming", "Xiphias gladius underwater", "swordfish jumping"], "prefer": "swim|underwater|jump|leap|free|live", "files": 60},
    "bushmaster": {"only": True, "categories": ["Lachesis muta", "Lachesis muta muta"], "search": ["Lachesis muta", "Lachesis muta snake"], "files": 60},
    "goliath-grouper": {"only": True, "titles": ["File:AtlanticGoliathGrouper.jpg", "File:Epinephelus itajara 240094246.jpg", "File:Epinephelus itajara 279042770.jpg", "File:Goliathgrouper1.jpg"], "categories": ["Epinephelus itajara"], "search": ["Epinephelus itajara", "Atlantic goliath grouper", "goliath grouper Florida"], "prefer": "itajara|goliath", "files": 70},
    "indian-rhinoceros": {"search": ["Rhinoceros unicornis zoo", "Indian rhinoceros standing", "greater one-horned rhinoceros Kaziranga"], "files": 90},
    "thresher-shark": {"only": True, "categories": ["Alopias vulpinus"], "search": ["Alopias vulpinus", "common thresher shark", "Alopias vulpinus underwater"], "prefer": "vulpinus|common thresher", "files": 70},
    "humboldt-squid": {"only": True, "categories": ["Dosidicus gigas"], "search": ["Dosidicus gigas", "jumbo squid", "Humboldt squid underwater", "jumbo flying squid"], "prefer": "underwater|swim|live", "files": 60},
    "false-killer-whale": {"search": ["false killer whale underwater", "Pseudorca crassidens"], "prefer": "underwater", "files": 60},
}
SKIP_TITLE = re.compile(
    r"\b(skull|skulls|skeleton|bones?|jaw|teeth|tooth|head|heads|portrait|face|eye|eyes|close-?up|closeup|detail|"
    r"drawing|illustration|painting|engraving|lithograph|plate|stamp|map|range|distribution|diagram|chart|logo|"
    r"taxidermy|stuffed|mounted|specimen|museum|fossil|egg|eggs|nest|juvenile|cub|cubs|calf|baby|young|pup|pups|"
    r"hatchling|chick|chicks|larva|dead|carcass|killed|hunting trophy|statue|sculpture|toy|poster|coin|flag)\b",
    re.I,
)
GOOD_TITLE = re.compile(r"\b(full[ -]?body|standing|walking|side|profile|adult|male|female|in flight|flying|swimming)\b", re.I)
FREE = re.compile(r"^(CC0|CC BY(-SA)? [\d.]+|Public domain|PD.*)$", re.I)


def get(url, attempts=3):
    for attempt in range(attempts):
        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                return response.read()
        except urllib.error.HTTPError as error:
            if error.code in (429, 503) and attempt + 1 < attempts:
                time.sleep(5 * (attempt + 1))
                continue
            raise
    raise RuntimeError(url)


def page(path_or_url):
    url = path_or_url if path_or_url.startswith("http") else COMMONS + path_or_url
    time.sleep(PAUSE)
    return get(url).decode("utf-8", "replace")


def file_titles(entry, slug):
    """File titles from the species category and a Commons file search."""
    extra = EXTRA.get(slug, {})
    species = [] if extra.get("only") else [entry["scientific_name"].split(" (")[0]]
    categories = species + extra.get("categories", [])
    # "titles": files known to be good (e.g. found on the Wikipedia article)
    # that the category page and search do not reach.
    titles = list(extra.get("titles", []))
    for category in categories:
        try:
            text = page("/wiki/Category:" + urllib.parse.quote(category.replace(" ", "_")))
        except Exception:
            continue
        titles += [html.unescape(urllib.parse.unquote(m)).replace("_", " ") for m in re.findall(r'href="/wiki/(File:[^"#?]+)"', text)]
    queries = species + [entry["name"]] + extra.get("search", [])
    for query in queries:
        url = "/w/index.php?" + urllib.parse.urlencode({"search": query, "title": "Special:Search", "profile": "advanced", "fulltext": "1", "ns6": "1", "limit": "60"})
        try:
            text = page(url)
        except Exception:
            continue
        titles += [html.unescape(m) for m in re.findall(r'title="(File:[^"]+)"', text) if "page does not exist" not in m]
    seen, unique = set(), []
    for title in titles:
        if title not in seen:
            seen.add(title)
            unique.append(title)
    return unique


def text_of(fragment):
    fragment = re.sub(r"<style[^>]*>.*?</style>", " ", fragment, flags=re.S)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", fragment))).strip()


def author_of(fragment):
    """The photographer's name. Commons creator templates render a whole
    table (alternative names, dates, links) after the name; keep the name."""
    text = text_of(fragment)
    return re.split(r"\s+(?:Alternative names|Description|Date of birth|Work location|Authority file|Link back)\b", text)[0]


def file_info(title):
    text = page("/wiki/" + urllib.parse.quote(title.replace(" ", "_")))
    name = title.removeprefix("File:")
    original = next((u for u in re.findall(r'https://upload\.wikimedia\.org/wikipedia/commons/[0-9a-f]/[0-9a-f]{2}/[^"\s<>?]+', text) if "/archive/" not in u), None)
    size = re.search(r"\(([\d,]+)\s*×\s*([\d,]+) pixels", text)
    # Commons writes the underscores in these class and id names as &#95;.
    license_short = re.search(r'class="licensetpl(?:_|&#95;)short"[^>]*>([^<]+)<', text)
    author = re.search(r'id="fileinfotpl(?:_|&#95;)aut"[^>]*>.*?</td>\s*<td[^>]*>(.*?)</td>', text, re.S)
    categories = [text_of(c) for c in re.findall(r'<li><a href="/wiki/Category:[^"]+"[^>]*>(.*?)</a></li>', text)]
    return {
        "title": title,
        "name": name,
        "sourcePage": f"{COMMONS}/wiki/{urllib.parse.quote(title.replace(' ', '_'), safe=':/')}",
        "url": original,
        "width": int(size.group(1).replace(",", "")) if size else 0,
        "height": int(size.group(2).replace(",", "")) if size else 0,
        "license": text_of(license_short.group(1)) if license_short else "",
        "artist": author_of(author.group(1))[:200] if author else "",
        "categories": " | ".join(categories)[:1200],
    }


def thumb(url, width):
    head, file = url.rsplit("/", 1)
    return f"{head.replace('/wikipedia/commons/', '/wikipedia/commons/thumb/')}/{file}/{width}px-{file}"


def score(info):
    points = min(info["width"], info["height"]) / 400
    points += 2 if GOOD_TITLE.search(info["name"]) else 0
    points += 1 if re.search(r"quality images|featured pictures|valued images", info["categories"], re.I) else 0
    points -= 3 if re.search(r"\b(head|portrait|juvenile|young|skull)\b", info["categories"], re.I) else 0
    return round(points, 2)


def main():
    args = sys.argv[1:]
    limit = 14
    if "--limit" in args:
        limit = int(args[args.index("--limit") + 1])
        del args[args.index("--limit"):args.index("--limit") + 2]
    wanted = set(args)
    CANDIDATES.mkdir(parents=True, exist_ok=True)
    results = json.loads(RESULT.read_text(encoding="utf-8")) if RESULT.exists() else {}
    # New animals come from their catalogue entries; an animal already on the
    # site (a photo replacement) comes from the roster, with EXTRA naming the species.
    entries = {path.stem: json.loads(path.read_text(encoding="utf-8")) for path in sorted(NEW.glob("*.json"))}
    roster = {re.sub(r"[^a-z0-9]+", "-", a["name"].lower()).strip("-"): a for a in json.loads((ROOT / "animal_stats.json").read_text(encoding="utf-8"))}
    for slug in sorted(wanted - set(entries)):
        if slug in roster:
            entries[slug] = {"name": roster[slug]["name"], "scientific_name": EXTRA.get(slug, {}).get("species", roster[slug]["scientific_name"])}
    for slug, entry in entries.items():
        if slug.endswith(".example") or (wanted and slug not in wanted):
            continue
        titles = [t for t in file_titles(entry, slug) if re.search(r"\.(jpe?g|png)$", t, re.I) and not SKIP_TITLE.search(t)]
        infos = []
        extra = EXTRA.get(slug, {})
        for title in titles[:extra.get("files", 40)]:
            try:
                info = file_info(title)
            except Exception as error:
                print(f"  {title}: {error}", flush=True)
                continue
            if not info["url"] or not FREE.match(info["license"]) or min(info["width"], info["height"]) < 700:
                continue
            if SKIP_TITLE.search(info["categories"]) and not re.search(entry["scientific_name"].split(" ")[0], info["categories"], re.I):
                continue
            info["score"] = score(info)
            if extra.get("prefer") and re.search(extra["prefer"], info["name"] + " " + info["categories"], re.I):
                info["score"] += 4
            infos.append(info)
        infos.sort(key=lambda item: -item["score"])
        # At most three photos per photographer, so one series does not fill the review.
        per_artist, top = {}, []
        for info in infos:
            key = info["artist"].lower() or info["title"]
            if per_artist.get(key, 0) >= 3:
                continue
            per_artist[key] = per_artist.get(key, 0) + 1
            top.append(info)
            if len(top) >= limit:
                break
        folder = CANDIDATES / slug
        folder.mkdir(parents=True, exist_ok=True)
        for position, info in enumerate(top, 1):
            local = folder / f"{position:02d}.jpg"
            info["thumbUrl"] = thumb(info["url"], 960)
            info["local"] = str(local.relative_to(ROOT)).replace("\\", "/")
            if not local.exists():
                try:
                    time.sleep(PAUSE)
                    # Commons only serves standard thumbnail widths (https://w.wiki/GHai).
                    local.write_bytes(get(thumb(info["url"], 960)))
                except Exception as error:
                    info["downloadError"] = str(error)
        # Re-read before saving so a run started in the meantime keeps its entries.
        results = json.loads(RESULT.read_text(encoding="utf-8")) if RESULT.exists() else {}
        results[slug] = {"name": entry["name"], "scientificName": entry["scientific_name"], "preferredSex": "any", "candidates": top}
        RESULT.write_text(json.dumps(results, indent=1, ensure_ascii=False), encoding="utf-8")
        print(f"{slug}: {len(titles)} titles, {len(infos)} usable, {len(top)} downloaded", flush=True)


if __name__ == "__main__":
    main()
