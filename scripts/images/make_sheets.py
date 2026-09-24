"""Builds review contact sheets: the best screened candidates per animal.

Each tile shows the rough cutout on grey (what the site would show), a small
inset of the original photo, and the facts needed to decide: size, license,
sex keywords and framing flags. Two animals per sheet.

Usage: python scripts/images/make_sheets.py [--per 8] [slug ...]
Output: .cache/image-pipeline/sheets/NNN-<slug>+<slug>.png and ranking.json
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
PIPE = ROOT / ".cache" / "image-pipeline"
SHEETS = PIPE / "sheets"
TILE = 300
COLS = 4
FONT_PATH = "C:/Windows/Fonts/arial.ttf"
BOLD_PATH = "C:/Windows/Fonts/arialbd.ttf"


def font(size, bold=False):
    try:
        return ImageFont.truetype(BOLD_PATH if bold else FONT_PATH, size)
    except OSError:
        return ImageFont.load_default()


def combined_score(candidate, screen):
    score = candidate.get("score", 0)
    if not screen or "error" in screen:
        return score - 100
    touches = screen.get("touches", [])
    score -= 16 * len(touches)
    if screen.get("components", 1) > 1:
        score -= 18 * (screen["components"] - 1)
    area = screen.get("area", 0)
    if area < 0.03:
        score -= 18
    elif area > 0.7:
        score -= 12
    return round(score, 1)


def short_license(text):
    text = (text or "").replace("Public domain", "PD")
    return text[:16]


def draw_tile(candidate, screen, slug, key, rank_score):
    tile = Image.new("RGB", (TILE, TILE), (84, 90, 104))
    preview = PIPE / "previews" / slug / f"{key}.png"
    if preview.exists():
        with Image.open(preview) as cut:
            cut = cut.convert("RGBA")
            cut.thumbnail((TILE - 16, TILE - 58))
            tile.paste(cut, ((TILE - cut.width) // 2, 8 + (TILE - 58 - cut.height) // 2), cut)
    original = ROOT / candidate.get("local", "")
    if original.exists():
        with Image.open(original) as thumb:
            thumb = thumb.convert("RGB")
            thumb.thumbnail((92, 70))
            tile.paste(thumb, (TILE - thumb.width - 4, 4))
    draw = ImageDraw.Draw(tile)
    draw.rectangle([0, TILE - 50, TILE, TILE], fill=(12, 16, 30))
    flags = []
    if screen and "touches" in screen and screen["touches"]:
        flags.append("EDGE:" + ",".join(t[0].upper() for t in screen["touches"]))
    if screen and screen.get("components", 1) > 1:
        flags.append(f"x{screen['components']}")
    if screen and "area" in screen:
        flags.append(f"a{int(screen['area'] * 100)}%")
    reasons = [r for r in candidate.get("reasons", []) if r in ("male", "female", "quality", "juvenile", "crop", "group", "artwork", "not-living")]
    draw.text((6, TILE - 47), f"#{key}  {rank_score:+.0f}  {candidate['width']}x{candidate['height']}", fill=(255, 255, 255), font=font(15, True))
    draw.text((6, TILE - 28), f"{short_license(candidate.get('license'))}  {' '.join(reasons)}  {' '.join(flags)}", fill=(160, 220, 255), font=font(12))
    return tile


def main():
    args = sys.argv[1:]
    per = 8
    if "--per" in args:
        per = int(args[args.index("--per") + 1])
        del args[args.index("--per"):args.index("--per") + 2]
    wanted = set(args)
    candidates = json.loads((PIPE / "candidates.json").read_text(encoding="utf-8"))
    screen = json.loads((PIPE / "screen.json").read_text(encoding="utf-8")) if (PIPE / "screen.json").exists() else {}
    SHEETS.mkdir(parents=True, exist_ok=True)
    ranking = {}
    blocks = []
    for slug, entry in candidates.items():
        if wanted and slug not in wanted:
            continue
        screened = screen.get(slug, {})
        if not screened:
            continue
        rows = []
        for candidate in entry["candidates"]:
            key = Path(candidate.get("local", "")).stem
            if not key:
                continue
            rows.append((combined_score(candidate, screened.get(key)), key, candidate))
        rows.sort(key=lambda row: row[0], reverse=True)
        ranking[slug] = [{"key": key, "score": score, "name": c["name"]} for score, key, c in rows]
        top = rows[:per]
        rows_needed = (len(top) + COLS - 1) // COLS or 1
        block = Image.new("RGB", (COLS * TILE, 44 + rows_needed * TILE), (7, 11, 26))
        draw = ImageDraw.Draw(block)
        title = f"{entry['name']}  ({entry['scientificName']})   want: {entry['preferredSex']}   found {entry['totalFound']}"
        draw.text((10, 10), title, fill=(255, 214, 74), font=font(22, True))
        for index, (score, key, candidate) in enumerate(top):
            tile = draw_tile(candidate, screened.get(key), slug, key, score)
            block.paste(tile, ((index % COLS) * TILE, 44 + (index // COLS) * TILE))
        blocks.append((slug, block))
    (PIPE / "ranking.json").write_text(json.dumps(ranking, indent=1), encoding="utf-8")
    for index in range(0, len(blocks), 2):
        pair = blocks[index:index + 2]
        height = sum(block.height for _, block in pair) + 8 * (len(pair) - 1)
        sheet = Image.new("RGB", (COLS * TILE, height), (30, 30, 40))
        y = 0
        for _, block in pair:
            sheet.paste(block, (0, y))
            y += block.height + 8
        name = f"{index // 2 + 1:03d}-" + "+".join(slug for slug, _ in pair)
        sheet.save(SHEETS / f"{name}.png")
    print(f"wrote {(len(blocks) + 1) // 2} sheets for {len(blocks)} animals")


if __name__ == "__main__":
    main()
