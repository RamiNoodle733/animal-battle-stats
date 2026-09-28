"""Downloads the story photos listed in social/media.json.

Each entry names a Wikimedia Commons file (title, sourcePage, artist,
license) and the rendition to download; the photo is saved as
.cache/social/media/<key>.jpg for render-posts.js. Existing files are kept,
so reruns only fetch what is missing. One request at a time with a pause:
Commons answers 429 to faster clients on shared cloud networks.

Usage: python scripts/social/fetch-media.py [key ...]
"""
import json
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MEDIA = json.loads((ROOT / "social" / "media.json").read_text(encoding="utf-8"))
OUT = ROOT / ".cache" / "social" / "media"
USER_AGENT = "AnimalBattleStatsImagePipeline/2.0 (https://animalbattlestats.com; animalbattlestats@gmail.com)"


def fetch(url, attempts=4):
    for attempt in range(attempts):
        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                return response.read()
        except urllib.error.HTTPError as error:
            if error.code not in (429, 503) or attempt + 1 == attempts:
                raise
            time.sleep(10 * (attempt + 1))
    raise RuntimeError(url)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    wanted = set(sys.argv[1:])
    for key, entry in sorted(MEDIA.items()):
        if wanted and key not in wanted:
            continue
        target = OUT / f"{key}.jpg"
        if target.exists() and target.stat().st_size > 0:
            continue
        try:
            target.write_bytes(fetch(entry["download"]))
            print(f"{key}: {target.stat().st_size // 1024} KB")
        except Exception as error:  # keep going; a rerun picks up the rest
            print(f"{key}: FAILED {error}")
        time.sleep(3)


if __name__ == "__main__":
    main()
