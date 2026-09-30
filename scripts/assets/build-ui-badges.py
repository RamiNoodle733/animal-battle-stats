"""Draw the site's badge art: tier crests, the level emblem, rank medals and
the VS emblem, as layered SVG files in images/ui/.

The letters and digits are the real outlines of Big Shoulders Display Black
(the site's display face), pulled from the font in node_modules, so the badges
match the type everywhere. SVG keeps them sharp at every size.

    pip install fonttools brotli
    python scripts/assets/build-ui-badges.py
"""
import io
import os

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
FONT = os.path.join(ROOT, 'node_modules', '@fontsource-variable', 'big-shoulders-display', 'files', 'big-shoulders-display-latin-wght-normal.woff2')
OUT = os.path.join(ROOT, 'images', 'ui')

font = instantiateVariableFont(TTFont(FONT), {'wght': 900})
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()


def text_path(text, height, cx, cy, tracking=0.04):
    """SVG path data for `text`, cap height `height`, centred on (cx, cy)."""
    names = [cmap[ord(char)] for char in text]
    upm = font['head'].unitsPerEm
    # measure
    advance = 0
    boxes = []
    for name in names:
        pen = BoundsPen(glyphs)
        glyphs[name].draw(pen)
        boxes.append((advance, pen.bounds))
        advance += glyphs[name].width + tracking * upm
    advance -= tracking * upm
    x_min = min(off + b[0] for off, b in boxes if b)
    x_max = max(off + b[2] for off, b in boxes if b)
    y_min = min(b[1] for _, b in boxes if b)
    y_max = max(b[3] for _, b in boxes if b)
    scale = height / (y_max - y_min)
    ox = cx - (x_min + x_max) / 2 * scale
    oy = cy + (y_min + y_max) / 2 * scale
    pen = SVGPathPen(glyphs, ntos=lambda n: f'{n:.2f}'.rstrip('0').rstrip('.'))
    for name, (offset, _) in zip(names, boxes):
        glyphs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, ox + offset * scale, oy)))
    return pen.getCommands()


def shield(d):
    """The crest outline, inset by d."""
    l, r, t = 8 + d, 112 - d, 5 + d
    k = 7
    bottom = 134 - d * 1.35
    return (f'M{l + k:.2f} {t:.2f}H{r - k:.2f}Q{r:.2f} {t:.2f} {r:.2f} {t + k:.2f}V{80:.2f}'
            f'C{r:.2f} {104 - d * 0.4:.2f} {88 - d * 0.3:.2f} {122 - d:.2f} 60 {bottom:.2f}'
            f'C{32 + d * 0.3:.2f} {122 - d:.2f} {l:.2f} {104 - d * 0.4:.2f} {l:.2f} 80V{t + k:.2f}Q{l:.2f} {t:.2f} {l + k:.2f} {t:.2f}Z')


HEX_PATTERN = ('<pattern id="hex" width="9.53" height="16.5" patternUnits="userSpaceOnUse">'
               '<path d="M4.76 0L9.53 2.75V8.25L4.76 11L0 8.25V2.75ZM0 8.25L4.76 11V16.5L0 19.25L-4.76 16.5V11ZM9.53 8.25L14.29 11V16.5L9.53 19.25L4.76 16.5V11Z" '
               'fill="none" stroke="#fff" stroke-opacity=".13" stroke-width=".6"/></pattern>')

TIERS = {
    's': ('S', '#ffc933', '#fff3b8', '#7a5200'),
    'a': ('A', '#ff7a1a', '#ffc896', '#7a2a00'),
    'b': ('B', '#2fa8ff', '#aee0ff', '#083f70'),
    'c': ('C', '#37cf7a', '#b6f2d0', '#11502f'),
    'd': ('D', '#9a7cff', '#dcd0ff', '#35277a'),
    'f': ('F', '#8a909c', '#d8dbe1', '#353941'),
    'h': ('H', '#b4bac6', '#f3f4f7', '#4a4f59'),
}


def crest(letter, tier, light, dark):
    glyph = text_path(letter, 50, 60, 66)
    sparkle = ''
    if letter == 'S':
        # A small four-point star at the tip: the top tier's mark.
        sparkle = ('<path d="M60 116l2.6 6.4L69 125l-6.4 2.6L60 134l-2.6-6.4L51 125l6.4-2.6z" fill="#fffbe6" '
                   'filter="url(#glow)"/>')
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 142" width="120" height="142">
<defs>
<linearGradient id="rim" x1="0" y1="0" x2="0.35" y2="1">
<stop offset="0" stop-color="#ffffff"/><stop offset=".16" stop-color="{light}"/><stop offset=".46" stop-color="{tier}"/>
<stop offset=".5" stop-color="{dark}"/><stop offset=".78" stop-color="{tier}"/><stop offset="1" stop-color="{light}"/>
</linearGradient>
<linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="{tier}"/><stop offset=".55" stop-color="{dark}"/><stop offset="1" stop-color="#101114"/>
</linearGradient>
<radialGradient id="glow-top" cx=".5" cy=".18" r=".6">
<stop offset="0" stop-color="{light}" stop-opacity=".75"/><stop offset="1" stop-color="{light}" stop-opacity="0"/>
</radialGradient>
<linearGradient id="gloss" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#fff" stop-opacity=".42"/><stop offset=".45" stop-color="#fff" stop-opacity=".08"/><stop offset=".46" stop-color="#fff" stop-opacity="0"/>
</linearGradient>
<linearGradient id="ink" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f1f2f5"/><stop offset="1" stop-color="{light}"/>
</linearGradient>
{HEX_PATTERN}
<clipPath id="inner"><path d="{shield(9)}"/></clipPath>
<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.4"/></filter>
<filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<path d="{shield(1)}" transform="translate(0 3)" fill="#000" opacity=".55" filter="url(#shadow)"/>
<path d="{shield(0)}" fill="#0b0c0e"/>
<path d="{shield(1.6)}" fill="url(#rim)"/>
<path d="{shield(7.4)}" fill="#0b0c0e"/>
<path d="{shield(9)}" fill="url(#field)"/>
<g clip-path="url(#inner)">
<rect x="0" y="0" width="120" height="142" fill="url(#hex)"/>
<rect x="0" y="0" width="120" height="142" fill="url(#glow-top)"/>
<path d="M0 0H120V26L0 70Z" fill="url(#gloss)"/>
</g>
<path d="{shield(9.6)}" fill="none" stroke="#fff" stroke-opacity=".32" stroke-width="1"/>
<path d="{glyph}" transform="translate(0 2.4)" fill="#000" opacity=".6"/>
<path d="{glyph}" fill="url(#ink)" stroke="#0b0c0e" stroke-width="2.2" paint-order="stroke" stroke-linejoin="round"/>
{sparkle}
</svg>
'''


def hexagon(r, cx=50, cy=50):
    import math
    points = [(cx + r * math.cos(math.radians(60 * i - 90)), cy + r * math.sin(math.radians(60 * i - 90))) for i in range(6)]
    return 'M' + 'L'.join(f'{x:.2f} {y:.2f}' for x, y in points) + 'Z'


def level_emblem():
    """Gold hex emblem for the player level; the number is drawn on top by the page."""
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
<defs>
<linearGradient id="rim" x1="0" y1="0" x2=".4" y2="1">
<stop offset="0" stop-color="#fffbe6"/><stop offset=".2" stop-color="#ffe38a"/><stop offset=".48" stop-color="#f2ac00"/>
<stop offset=".52" stop-color="#8a5d00"/><stop offset=".8" stop-color="#e6a200"/><stop offset="1" stop-color="#ffe38a"/>
</linearGradient>
<linearGradient id="field" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c2e34"/><stop offset="1" stop-color="#0d0e11"/></linearGradient>
<linearGradient id="gloss" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>
{HEX_PATTERN}
<clipPath id="inner"><path d="{hexagon(35)}"/></clipPath>
</defs>
<path d="{hexagon(49)}" fill="#0b0c0e"/>
<path d="{hexagon(46.5)}" fill="url(#rim)"/>
<path d="{hexagon(38)}" fill="#0b0c0e"/>
<path d="{hexagon(35.5)}" fill="url(#field)"/>
<g clip-path="url(#inner)"><rect width="100" height="100" fill="url(#hex)"/><path d="M0 0H100V30L0 58Z" fill="url(#gloss)"/></g>
<path d="{hexagon(35)}" fill="none" stroke="#ffe38a" stroke-opacity=".45" stroke-width="1"/>
</svg>
'''


MEDALS = {
    1: ('#ffd54a', '#fff3b8', '#7a5200'),
    2: ('#c9cdd5', '#ffffff', '#4a4f59'),
    3: ('#d38a4f', '#f6cfa8', '#5c2e0c'),
}


def medal(rank, tier, light, dark):
    glyph = text_path(str(rank), 38, 50, 51)
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
<defs>
<linearGradient id="rim" x1="0" y1="0" x2=".4" y2="1">
<stop offset="0" stop-color="#ffffff"/><stop offset=".2" stop-color="{light}"/><stop offset=".48" stop-color="{tier}"/>
<stop offset=".52" stop-color="{dark}"/><stop offset=".8" stop-color="{tier}"/><stop offset="1" stop-color="{light}"/>
</linearGradient>
<radialGradient id="face" cx=".4" cy=".3" r=".8"><stop offset="0" stop-color="{light}"/><stop offset=".5" stop-color="{tier}"/><stop offset="1" stop-color="{dark}"/></radialGradient>
<linearGradient id="gloss" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".48" stop-color="#fff" stop-opacity="0"/></linearGradient>
<clipPath id="inner"><circle cx="50" cy="50" r="33"/></clipPath>
</defs>
<circle cx="50" cy="52" r="46" fill="#000" opacity=".4"/>
<circle cx="50" cy="50" r="46" fill="#0b0c0e"/>
<circle cx="50" cy="50" r="43.5" fill="url(#rim)"/>
<circle cx="50" cy="50" r="35.5" fill="#0b0c0e"/>
<circle cx="50" cy="50" r="33" fill="url(#face)"/>
<g clip-path="url(#inner)"><path d="M0 0H100V34L0 62Z" fill="url(#gloss)"/></g>
<path d="{glyph}" transform="translate(0 2)" fill="#000" opacity=".45"/>
<path d="{glyph}" fill="#fff" stroke="{dark}" stroke-width="2.4" paint-order="stroke" stroke-linejoin="round"/>
</svg>
'''


def vs_emblem():
    glyph = text_path('VS', 58, 70, 52, tracking=0.02)
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 104" width="140" height="104">
<defs>
<linearGradient id="ink" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#fffbe6"/><stop offset=".35" stop-color="#ffd54a"/><stop offset=".5" stop-color="#f2ac00"/>
<stop offset=".53" stop-color="#b87c00"/><stop offset="1" stop-color="#ffd54a"/>
</linearGradient>
<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.2"/></filter>
</defs>
<path d="M88 4L44 58h22L52 100l46-58H74z" fill="#fff" opacity=".07"/>
<path d="{glyph}" transform="translate(0 4)" fill="#000" opacity=".7" filter="url(#shadow)"/>
<path d="{glyph}" fill="none" stroke="#0b0c0e" stroke-width="7" stroke-linejoin="round"/>
<path d="{glyph}" fill="url(#ink)" stroke="#fff3b8" stroke-opacity=".6" stroke-width="1"/>
</svg>
'''


def write(name, svg):
    path = os.path.join(OUT, name)
    with io.open(path, 'w', encoding='utf-8', newline='\n') as handle:
        handle.write(svg)
    print(f'{name}: {len(svg.encode()) / 1024:.1f} KB')


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for key, (letter, tier, light, dark) in TIERS.items():
        write(f'tier-{key}.svg', crest(letter, tier, light, dark))
    write('level.svg', level_emblem())
    for rank, colours in MEDALS.items():
        write(f'medal-{rank}.svg', medal(rank, *colours))
    write('vs.svg', vs_emblem())
