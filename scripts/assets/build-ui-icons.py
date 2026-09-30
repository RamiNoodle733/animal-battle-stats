"""Draw the item and menu icons in images/ui/icons/: gold (or silver) metal
glyphs with a dark outline, engraved details and a soft drop shadow, in the
style of the tier crests. Every name the old Roblox chisel set had
(images/icons/abs/) has a counterpart here, so pages can switch paths.

Glyphs are drawn on a 24-unit grid. Layers:
    fill  metal-filled shape with a dark outline
    line  metal stroke with a dark outline (width in grid units)
    cut   engraved dark detail on top of the metal

    pip install fonttools brotli
    python scripts/assets/build-ui-icons.py
"""
import importlib.util
import io
import math
import os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'images', 'ui', 'icons')

spec = importlib.util.spec_from_file_location('badges', os.path.join(os.path.dirname(__file__), 'build-ui-badges.py'))
badges = importlib.util.module_from_spec(spec)
spec.loader.exec_module(badges)

GOLD = [(0, '#fff6cc'), (0.32, '#ffd54a'), (0.52, '#e9a300'), (0.54, '#b37700'), (1, '#ffdf80')]
SILVER = [(0, '#ffffff'), (0.34, '#dfe3ea'), (0.52, '#aab0bb'), (0.54, '#7d838f'), (1, '#e8ebf0')]


def star(cx, cy, points, outer, inner, rot=-90):
    pts = []
    for i in range(points * 2):
        r = outer if i % 2 == 0 else inner
        a = math.radians(rot + i * 180 / points)
        pts.append(f'{cx + r * math.cos(a):.2f} {cy + r * math.sin(a):.2f}')
    return 'M' + 'L'.join(pts) + 'Z'


def gear():
    pts = []
    teeth = 8
    for i in range(teeth * 4):
        a = math.radians(i * 360 / (teeth * 4) - 90)
        r = 10 if (i % 4) in (0, 1) else 7.6
        pts.append(f'{12 + r * math.cos(a):.2f} {12 + r * math.sin(a):.2f}')
    return 'M' + 'L'.join(pts) + 'Z'


def circle(cx, cy, r):
    return f'M{cx - r} {cy}a{r} {r} 0 1 0 {2 * r} 0a{r} {r} 0 1 0 {-2 * r} 0z'


ICONS = {
    # ---- menu and sections
    'paw': [('fill', 'M6 7.9a2.1 2.7 0 1 0 0.01 0zM10 3.4a2.1 2.8 0 1 0 0.01 0zM14.4 3.4a2.1 2.8 0 1 0 0.01 0zM18.3 7.9a2.1 2.7 0 1 0 0.01 0z'),
            ('fill', 'M12.2 11.5c-2.6 0-6 3.9-6 6.6 0 1.8 1.5 2.6 3 2.4 1.2-.2 2-.8 3-.8s1.8.6 3 .8c1.5.2 3-.6 3-2.4 0-2.7-3.4-6.6-6-6.6z')],
    'vs': [('line', 'M4.5 4.5l9 9M19.5 4.5l-9 9', 2.4), ('line', 'M6.5 16.5L4 19M17.5 16.5L20 19', 2.6), ('line', 'M4.5 13.5l6 6M19.5 13.5l-6 6', 2.2)],
    'swords': 'vs',
    'sword': [('line', 'M19.5 4.5L8.5 15.5', 2.6), ('line', 'M6 12.5l5.5 5.5', 2.2), ('line', 'M7 17L4 20', 2.8)],
    'tv': [('fill', 'M2.5 5.5c0-1.1.9-2 2-2h15c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2h-15c-1.1 0-2-.9-2-2z'),
           ('cut', 'M4.8 5.8h14.4v10.4H4.8z'), ('fill', 'M10 8.2v5.6l4.8-2.8z'), ('line', 'M8 21h8', 2)],
    'crown': [('fill', 'M3.5 17L2.3 6.8l5.6 4.4L12 4.5l4.1 6.7 5.6-4.4L20.5 17z'), ('fill', 'M3.5 18.5h17v2.5h-17z'),
              ('cut', 'M11 12.8a1 1 0 1 0 2 0 1 1 0 1 0-2 0z')],
    'medal': [('fill', 'M6.5 2h4.2l2.4 6H8.9zM13.3 2h4.2l-2.4 6h-4.2z'), ('fill', circle(12, 15, 6.5)), ('cut', star(12, 15, 5, 3.6, 1.6))],
    'trophy': [('line', 'M7 6H3.8c0 3.2 1.6 4.8 4 5.2M17 6h3.2c0 3.2-1.6 4.8-4 5.2', 1.8),
               ('fill', 'M6.5 3h11v5.5a5.5 5.5 0 0 1-11 0z'), ('fill', 'M10.8 13.5h2.4v3.5h-2.4z'), ('fill', 'M7.5 17.5h9v3.5h-9z'),
               ('cut', star(12, 7.6, 5, 2.4, 1.05))],
    'friends': [('fill', circle(15.5, 7.2, 2.9)), ('fill', 'M10.8 19c.5-3.4 2.4-5.6 4.7-5.6s4.6 2.2 5 5.6z'),
                ('fill', circle(8.5, 8, 3.4)), ('fill', 'M2 20.5c.5-4 3.2-6.4 6.5-6.4s6 2.4 6.5 6.4z')],
    'users': 'friends',
    'home': [('fill', 'M12 2.8l9.3 7.8-1.6 1.9-1.2-1V21h-5v-6h-3v6h-5V11.5l-1.2 1-1.6-1.9z')],
    'book': [('fill', 'M3 4.6C3 3.7 3.7 3 4.6 3H11v17.5H4.6c-.9 0-1.6-.7-1.6-1.6zM21 4.6c0-.9-.7-1.6-1.6-1.6H13v17.5h6.4c.9 0 1.6-.7 1.6-1.6z'),
             ('cut', 'M5.5 7h3.5v1.2H5.5zM5.5 10h3.5v1.2H5.5zM15 7h3.5v1.2H15zM15 10h3.5v1.2H15z')],
    'scroll': [('fill', 'M6 2.5h9l4 4v15H6z'), ('cut', 'M14.5 2.8v4.2h4.2M9 11h7v1.3H9zM9 14.5h7v1.3H9zM9 18h5v1.3H9z')],
    'map': [('fill', 'M2.5 5.8l6-2.3 7 2.3 6-2.3v15l-6 2.3-7-2.3-6 2.3z'), ('cut', 'M8.2 3.8h0.9v15H8.2zM15 5.8h0.9v15H15z')],
    'compass': [('fill', circle(12, 12, 9.5)), ('cut', circle(12, 12, 7.2)), ('fill', 'M12 5.2l2.4 6.8-2.4 6.8-2.4-6.8z'), ('cut', 'M12 12.6l-1.9-.6 1.9 6.1 1.9-6.1z')],
    'cards': [('fill', 'M3.2 7.4l8.3-2.6 3.8 12-8.3 2.6z'), ('fill', 'M9.5 3.5h9.8v14H9.5z'), ('cut', star(14.4, 10.5, 4, 2.6, 0.9, rot=-90))],
    'gift': [('fill', 'M3 8.5h18v4H3zM4.5 12.5h15V21h-15z'), ('cut', 'M11.2 8.5h1.6V21h-1.6z'),
             ('line', 'M12 8.5C10.5 4 6.5 4 7 6.8c.3 1.4 3 1.7 5 1.7zm0 0c1.5-4.5 5.5-4.5 5-1.7-.3 1.4-3 1.7-5 1.7z', 1.4)],
    'chest': [('fill', 'M2.5 10c0-3.5 2.8-6 6-6h7c3.2 0 6 2.5 6 6z'), ('fill', 'M2.5 11h19v8.3c0 .9-.7 1.7-1.7 1.7H4.2c-.9 0-1.7-.8-1.7-1.7z'),
              ('cut', 'M2.5 10.2h19v1.2h-19z'), ('cut', 'M10 9.5h4v5.2h-4z'), ('fill', 'M11 10.3h2v3h-2z'), ('cut', 'M6.2 4.8h1.3v16H6.2zM16.5 4.8h1.3v16h-1.3z')],
    'coin': 'COIN',
    'xp': 'XP',
    'star': [('fill', star(12, 12.4, 5, 10, 4.2))],
    'bolt': [('fill', 'M13.6 1.8L4.6 13.4h6.2l-1.1 8.8 9.6-12.4h-6.4z')],
    'fire': [('fill', 'M12 1.8c1.2 3.8 6 5.8 6 11.6a6 6 0 0 1-12 0c0-2.8 1.4-4.4 2.8-5.5-.1 1.7.6 3 1.9 3.6-.4-3.8.4-7 1.3-9.7z'),
             ('cut', 'M12 12.2c.6 1.8 2.8 2.7 2.8 5.1a2.8 2.8 0 0 1-5.6 0c0-1.9 1.9-3 2.8-5.1z')],
    'heart': [('fill', 'M12 20.8C5 15.8 2.8 12.6 2.8 9.1 2.8 6.3 5 4 7.8 4c1.8 0 3.2 1 4.2 2.5C13 5 14.4 4 16.2 4 19 4 21.2 6.3 21.2 9.1c0 3.5-2.2 6.7-9.2 11.7z')],
    'shield': [('fill', 'M12 2.2l8.4 3.2v6.2c0 5.1-3.5 8.9-8.4 10.2-4.9-1.3-8.4-5.1-8.4-10.2V5.4z'), ('cut', 'M12 5.2v14c-3.3-1.2-5.5-4-5.5-7.6V7.4z')],
    'wind': [('fill', 'M3 5.5h3.4l6.4 6.5-6.4 6.5H3l6.4-6.5zM11.2 5.5h3.4l6.4 6.5-6.4 6.5h-3.4l6.4-6.5z')],
    'claws': [('fill', 'M4 19.8L12.4 3.4l2.1 1.1-8.4 16.3zM9.5 21L17.3 5.6l2.1 1.1-7.8 15.3zM15.3 21.4l4.6-9.1 2.1 1.1-4.6 9.1z')],
    'target': [('fill', circle(12, 12, 10)), ('cut', circle(12, 12, 7.6)), ('fill', circle(12, 12, 5.4)), ('cut', circle(12, 12, 3.2)), ('fill', circle(12, 12, 1.6))],
    'burst': [('fill', star(12, 12, 8, 10.5, 5.2, rot=-90))],
    'venom': [('fill', 'M12 2.5c3.2 4.5 6.4 8 6.4 11.6a6.4 6.4 0 0 1-12.8 0C5.6 10.5 8.8 7 12 2.5z'), ('cut', 'M9.3 13.5c0 2.2 1.2 3.6 2.9 4-2.5.6-4.5-1.6-4-4z')],
    'tower': [('fill', 'M9 7.5a3 3 0 1 1 6 0h1.7c.9 0 1.6.6 1.8 1.4l2.4 10.2c.2 1-.5 1.9-1.5 1.9H4.6c-1 0-1.7-.9-1.5-1.9l2.4-10.2c.2-.8.9-1.4 1.8-1.4z'), ('cut', 'M10.8 7.5h2.4a1.2 1.2 0 1 0-2.4 0z')],
    'moon': [('fill', 'M15 2.8A9.2 9.2 0 1 0 21.2 17.4 7.6 7.6 0 0 1 15 2.8z')],
    'banner': [('fill', 'M5 2.5h14v19l-7-4.2-7 4.2z'), ('cut', star(12, 9.5, 5, 3.4, 1.5))],
    'flag': [('fill', 'M4.5 2.5h2v19h-2z'), ('fill', 'M7 3.5h12.5l-2.8 4.2 2.8 4.3H7z')],
    'alert': [('fill', 'M12 2.5L22.8 21H1.2z'), ('cut', 'M10.9 8.5h2.2v6.5h-2.2zM10.9 16.5h2.2v2.2h-2.2z')],
    'lock': [('line', 'M7.8 11V8a4.2 4.2 0 0 1 8.4 0v3', 2.2), ('fill', 'M4.8 10.5h14.4V21H4.8z'), ('cut', circle(12, 14.6, 1.7)), ('cut', 'M11.2 15h1.6v3.2h-1.6z')],
    'gear': [('fill', gear()), ('cut', circle(12, 12, 3.4))],
    'roar': [('fill', 'M3.5 9h3.8L12 4.8v14.4L7.3 15H3.5z'), ('line', 'M15.5 8.6a4.8 4.8 0 0 1 0 6.8M18.2 6a8.4 8.4 0 0 1 0 12', 1.8)],
    'camera': [('fill', 'M2.5 7.5c0-1 .8-1.8 1.8-1.8h3l1.6-2.2h6.2l1.6 2.2h3c1 0 1.8.8 1.8 1.8v11c0 1-.8 1.8-1.8 1.8H4.3c-1 0-1.8-.8-1.8-1.8z'),
               ('cut', circle(12, 12.8, 4.6)), ('fill', circle(12, 12.8, 2.8))],
    'ascend': [('fill', 'M12 2.5l8 8.2h-5V21H9V10.7H4z')],
    'pointer': [('fill', 'M5.5 2.5l13 9.5-5.9 1.3 3.2 6.8-2.6 1.2-3.2-6.8-4.5 3.9z')],
    'check': [('line', 'M4.5 12.5l5 5L19.5 6.5', 3.2)],
    'close': [('line', 'M6 6l12 12M18 6L6 18', 3)],
    'plus': [('line', 'M12 4.5v15M4.5 12h15', 3.2)],
    'arrow': [('line', 'M4 12h15M13 5.5l6.5 6.5-6.5 6.5', 2.8)],
    'chevronLeft': [('line', 'M15 4.5L7.5 12l7.5 7.5', 3.2)],
    'chevronRight': [('line', 'M9 4.5l7.5 7.5L9 19.5', 3.2)],
}
SILVER_ICONS = {'close', 'plus', 'arrow', 'chevronLeft', 'chevronRight', 'gear', 'pointer', 'camera', 'lock', 'map', 'scroll', 'book', 'compass'}


def gradient(stops, gid):
    return f'<linearGradient id="{gid}" gradientUnits="userSpaceOnUse" x1="0" y1="1" x2="0" y2="23">' + ''.join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in stops) + '</linearGradient>'


def svg(layers, metal):
    body = []
    for layer in layers:
        kind, d = layer[0], layer[1]
        if kind == 'fill':
            body.append(f'<path d="{d}" fill="url(#m)" stroke="#0b0c0e" stroke-width="1.3" stroke-linejoin="round" paint-order="stroke"/>')
        elif kind == 'line':
            width = layer[2]
            body.append(f'<path d="{d}" fill="none" stroke="#0b0c0e" stroke-width="{width + 1.4}" stroke-linecap="round" stroke-linejoin="round"/>')
            body.append(f'<path d="{d}" fill="none" stroke="url(#m)" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round"/>')
        elif kind == 'cut':
            body.append(f'<path d="{d}" fill="#1a1204" fill-opacity=".82" fill-rule="evenodd"/>')
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
<defs>{gradient(SILVER if metal == 'silver' else GOLD, 'm')}<filter id="s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="1.2" stdDeviation="0.9" flood-color="#000" flood-opacity=".75"/></filter></defs>
<g transform="translate(3.5 3.5) scale(2.375)" filter="url(#s)">{''.join(body)}</g>
</svg>
'''


def coin():
    """BattlePoints: a milled gold coin with the ABS hex and bolt struck in."""
    hexagon = 'M32 17L45 24.5V39.5L32 47L19 39.5V24.5Z'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
<defs>{gradient(GOLD, 'm').replace('y2="23"', 'y2="62"').replace('y1="1"', 'y1="2"')}
<radialGradient id="f" cx=".38" cy=".3" r=".75"><stop offset="0" stop-color="#fff3b0"/><stop offset=".5" stop-color="#f6b400"/><stop offset="1" stop-color="#a86f00"/></radialGradient>
<filter id="s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.2" flood-color="#000" flood-opacity=".75"/></filter></defs>
<g filter="url(#s)">
<circle cx="32" cy="32" r="29" fill="#0b0c0e"/>
<circle cx="32" cy="32" r="27.4" fill="url(#m)"/>
<circle cx="32" cy="32" r="27.4" fill="none" stroke="#7a5200" stroke-width="1.6" stroke-dasharray="1.6 1.9" opacity=".7"/>
<circle cx="32" cy="32" r="22" fill="#6b4700"/>
<circle cx="32" cy="32" r="21" fill="url(#f)"/>
<path d="{hexagon}" fill="none" stroke="#7a5200" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M34.5 20L25.5 33.5h6.2l-1.8 10.5 9.6-14h-6.3z" fill="#7a5200"/>
<path d="M34 19.2L25 32.7h6.2l-1.8 10.5 9.6-14h-6.3z" fill="#fff3c4"/>
</g>
</svg>
'''


def xp():
    text = badges.text_path('XP', 17, 32, 33, tracking=0.04)
    hexagon = 'M32 5L55.4 18.5V45.5L32 59L8.6 45.5V18.5Z'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
<defs>{gradient(GOLD, 'm').replace('y2="23"', 'y2="60"').replace('y1="1"', 'y1="5"')}
<filter id="s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.2" flood-color="#000" flood-opacity=".75"/></filter></defs>
<g filter="url(#s)">
<path d="{hexagon}" fill="#0b0c0e" stroke="#0b0c0e" stroke-width="3" stroke-linejoin="round"/>
<path d="{hexagon}" fill="url(#m)" transform="translate(32 32) scale(.9) translate(-32 -32)"/>
<path d="{hexagon}" fill="#1c1d21" transform="translate(32 32) scale(.72) translate(-32 -32)"/>
<path d="{text}" fill="url(#m)"/>
</g>
</svg>
'''


def main():
    os.makedirs(OUT, exist_ok=True)
    for name, layers in ICONS.items():
        if layers == 'COIN':
            text = coin()
        elif layers == 'XP':
            text = xp()
        else:
            source = ICONS[layers] if isinstance(layers, str) else layers
            text = svg(source, 'silver' if name in SILVER_ICONS else 'gold')
        with io.open(os.path.join(OUT, f'{name}.svg'), 'w', encoding='utf-8', newline='\n') as handle:
            handle.write(text)
    print(f'{len(ICONS)} icons in images/ui/icons')


if __name__ == '__main__':
    main()
