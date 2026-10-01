"""Render the site's surface art into images/ui/: the hex-plate textures,
the diagonal card shards, the metal card frames, the button plates and the
panel frame. Everything is lit from the top left and carries real grain, so
the surfaces read as material, not as CSS.

Outputs (2x pixel density; CSS shows them at half size):
    hex-bg.webp, hex-panel.webp, hex-card.webp  seamless tiles
    shards-<tier>.webp                           card background shards, per tier
    frame-<tier>.png                             9-slice card frame, per tier
    btn-<kind>.png                               9-slice button plates
    panel-frame.png                              9-slice panel frame with corner brackets

    pip install numpy pillow
    python scripts/assets/build-ui-textures.py
"""
import math
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'images', 'ui')
SQ3 = math.sqrt(3)
LIGHT = np.array([-0.55, -0.83])  # towards the light: top left
LIGHT = LIGHT / np.linalg.norm(LIGHT)

TIERS = {
    's': ('#ffc933', '#fff3b8', '#7a5200'),
    'a': ('#ff7a1a', '#ffc896', '#7a2a00'),
    'b': ('#2fa8ff', '#aee0ff', '#083f70'),
    'c': ('#37cf7a', '#b6f2d0', '#11502f'),
    'd': ('#9a7cff', '#dcd0ff', '#35277a'),
    'f': ('#8a909c', '#d8dbe1', '#353941'),
    'h': ('#b4bac6', '#f3f4f7', '#4a4f59'),
}


def rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return np.array([int(hex_color[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float64)


def save(image, name, **kwargs):
    path = os.path.join(OUT, name)
    if name.endswith('.webp'):
        image.save(path, 'WEBP', quality=kwargs.get('quality', 88), method=6)
    else:
        image.save(path, optimize=True)
    print(f'{name}: {image.size[0]}x{image.size[1]}, {os.path.getsize(path) / 1024:.1f} KB')


def wrap_blur(array, radius):
    """Gaussian blur that wraps around the tile edges (keeps tiles seamless)."""
    h, w = array.shape
    big = np.tile(array, (3, 3))
    img = Image.fromarray(np.clip(big, 0, 255).astype(np.uint8), 'L').filter(ImageFilter.GaussianBlur(radius))
    return np.asarray(img, dtype=np.float64)[h:2 * h, w:2 * w]


def wrap_lines(w, h, count, rng, length=(20, 90), width=1, value=255):
    """Fine scratches drawn with wraparound, as a 0..1 mask."""
    layer = Image.new('L', (w * 3, h * 3), 0)
    draw = ImageDraw.Draw(layer)
    for _ in range(count):
        x, y = rng.uniform(0, w), rng.uniform(0, h)
        angle = rng.uniform(0, math.pi)
        size = rng.uniform(*length)
        dx, dy = math.cos(angle) * size, math.sin(angle) * size
        alpha = int(rng.uniform(0.25, 1) * value)
        for ox in (0, w, 2 * w):
            for oy in (0, h, 2 * h):
                draw.line((x + ox, y + oy, x + ox + dx, y + oy + dy), fill=alpha, width=width)
    return np.asarray(layer, dtype=np.float64)[h:2 * h, w:2 * w] / 255.0


# ---------------------------------------------------------------- hex plates

def hex_texture(cols, rowpairs, r, seed, base, spread, hi, lo, groove, grain, plate_edge=0.8, bevel_edge=0.93, scratches=30, tint=(1.0, 1.01, 1.05)):
    rng = np.random.default_rng(seed)
    w = round(cols * SQ3 * r)
    h = round(rowpairs * 3 * r)
    rx = w / (cols * SQ3)
    ry = h / (rowpairs * 3)
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float64) + 0.5
    X, Y = xs / rx, ys / ry
    q, rr = SQ3 / 3 * X - Y / 3, 2 / 3 * Y
    cx3, cz3 = q, rr
    cy3 = -cx3 - cz3
    ax, ay, az = np.round(cx3), np.round(cy3), np.round(cz3)
    ex, ey, ez = np.abs(ax - cx3), np.abs(ay - cy3), np.abs(az - cz3)
    m1 = (ex > ey) & (ex > ez)
    m2 = ~m1 & (ey > ez)
    m3 = ~m1 & ~m2
    ax[m1] = -ay[m1] - az[m1]
    ay[m2] = -ax[m2] - az[m2]
    az[m3] = -ax[m3] - ay[m3]
    Q, R = ax, az
    lx = X - SQ3 * (Q + R / 2)
    ly = Y - 1.5 * R
    angles = np.radians([0, 60, 120, 180, 240, 300])
    proj = np.stack([lx * math.cos(a) + ly * math.sin(a) for a in angles])
    k = np.argmax(proj, axis=0)
    d = proj.max(axis=0) / (SQ3 / 2)
    nx, ny = np.cos(angles)[k], np.sin(angles)[k]
    lit = nx * LIGHT[0] + ny * LIGHT[1]

    rows = 2 * rowpairs
    cell_row = np.mod(R, rows).astype(int)
    cell_col = np.mod(Q + np.floor(R / 2), cols).astype(int)
    cell_value = rng.normal(0, spread, (rows, cols))
    cell_tilt = rng.uniform(-1, 1, (rows, cols))
    value = base + cell_value[cell_row, cell_col]

    plate = d < plate_edge
    bevel = (d >= plate_edge) & (d < bevel_edge)
    gap = d >= bevel_edge
    # plates: a soft top-lit gradient and a hint of per-plate tilt
    value = value + np.where(plate, -ly * 3.5 + cell_tilt[cell_row, cell_col] * lx * 2.0, 0)
    # bevels: lit faces bright, far faces dark, strongest at the plate rim
    t = np.clip((d - plate_edge) / (bevel_edge - plate_edge), 0, 1)
    shade = np.where(lit > 0, lit * hi, lit * lo) * (1.1 - 0.5 * t)
    value = np.where(bevel, value + shade, value)
    rim = np.exp(-((d - plate_edge) / 0.012) ** 2)
    value = value + rim * np.clip(lit, 0, 1) * hi * 0.5
    # grooves between plates
    value = np.where(gap, groove + (1 - (d - bevel_edge) / (1 - bevel_edge)) * 4, value)

    # wear: soft dark patches, fine scratches, film grain
    patches = rng.uniform(0, 255, (h, w)) * (rng.uniform(0, 1, (h, w)) > 0.9985)
    wear = wrap_blur(patches, 18)
    value = value - wear / max(wear.max(), 1) * 6
    value = value + wrap_lines(w, h, scratches, rng) * 5
    value = value + rng.normal(0, grain, (h, w))

    out = np.stack([value * tint[0], value * tint[1], value * tint[2]], axis=-1)
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), 'RGB')


# ---------------------------------------------------------------- card shards

def shards(tier, light, dark, seed=7, scale=1.0, size=(420, 560)):
    """Angular diagonal bands behind the animal, tinted to the tier, with a glow.
    Drawn on a 600x800 grid times `scale` (the full-size card uses 1.5), then
    resized to `size` (None keeps the drawn size)."""
    w, h = round(600 * scale), round(800 * scale)
    rng = np.random.default_rng(seed)
    mask = Image.new('L', (w, h), 0)
    edges = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(mask)
    edge = ImageDraw.Draw(edges)
    # bands: (x at top, width, alpha, top y, bottom y) running down-left at the card angle
    slope = 0.42  # x shift per unit of y
    bands = [(330, 130, 98, -40, 860), (505, 46, 70, 60, 700), (600, 22, 54, -20, 520), (170, 18, 48, 380, 860)]
    bands = [tuple(value * scale if index != 2 else value for index, value in enumerate(band)) for band in bands]
    for x0, width, alpha, top, bottom in bands:
        tip = width * 0.9
        pts = [(x0 - slope * top, top), (x0 + width - slope * top, top + tip * 0.2), (x0 + width - slope * bottom, bottom), (x0 - slope * bottom, bottom - tip * 0.2)]
        draw.polygon(pts, fill=alpha)
        edge.line([pts[0], pts[3]], fill=235, width=round(3 * scale))
        edge.line([pts[1], pts[2]], fill=140, width=round(2 * scale))
    m = np.asarray(mask, dtype=np.float64)
    # streaks along the bands
    streak = rng.normal(0, 1, (h // 4, w // 40))
    streak = np.asarray(Image.fromarray(np.clip(128 + streak * 40, 0, 255).astype(np.uint8)).resize((w, h), Image.BICUBIC), dtype=np.float64)
    ys, xs = np.mgrid[0:h, 0:w]
    shear = np.asarray(Image.fromarray(streak.astype(np.uint8)).transform((w, h), Image.AFFINE, (1, slope, 0, 0, 1, 0), Image.BICUBIC), dtype=np.float64)
    m = m * (0.8 + 0.4 * (shear / 255))
    e = np.asarray(edges.filter(ImageFilter.GaussianBlur(0.8)), dtype=np.float64)
    # the bands burn brightest behind the animal and thin out towards the plate
    fade = np.clip(1.15 - np.abs(ys - h * 0.42) / (h * 0.62), 0.25, 1)
    m = m * fade
    e = e * fade
    # tier glow, centred where the animal stands
    glow = np.exp(-(((xs - w * 0.56) / (w * 0.42)) ** 2 + ((ys - h * 0.46) / (h * 0.3)) ** 2)) * 56
    alpha = np.clip(m + glow + e * 0.55, 0, 255)
    base = rgb(tier)
    colour = base[None, None, :] + (rgb(light) - base)[None, None, :] * np.clip(e[..., None] / 255, 0, 1)
    out = np.dstack([colour, alpha])
    image = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), 'RGBA')
    return image.resize(size, Image.LANCZOS) if size else image


# ---------------------------------------------------------------- signed distance helpers

def sd_round_rect(xs, ys, cx, cy, hw, hh, r):
    qx = np.abs(xs - cx) - (hw - r)
    qy = np.abs(ys - cy) - (hh - r)
    outside = np.hypot(np.maximum(qx, 0), np.maximum(qy, 0))
    inside = np.minimum(np.maximum(qx, qy), 0)
    return outside + inside - r


def outward_normal(xs, ys, cx, cy, hw, hh, r):
    """Unit normal of the rounded rect boundary nearest each point."""
    qx = np.abs(xs - cx) - (hw - r)
    qy = np.abs(ys - cy) - (hh - r)
    sx, sy = np.sign(xs - cx), np.sign(ys - cy)
    corner = (qx > 0) & (qy > 0)
    length = np.hypot(np.maximum(qx, 0), np.maximum(qy, 0)) + 1e-9
    nx = np.where(corner, np.maximum(qx, 0) / length, np.where(qx > qy, 1.0, 0.0)) * sx
    ny = np.where(corner, np.maximum(qy, 0) / length, np.where(qx > qy, 0.0, 1.0)) * sy
    return nx, ny


def coverage(sd):
    return np.clip(0.5 - sd, 0, 1)


# ---------------------------------------------------------------- card frame (9-slice)

def card_frame(tier, light, dark, seed=3):
    """Metal frame: dark outer lip, lit outer bevel, brushed band, inner bevel,
    dark inner lip, and a rivet at each corner. 2x pixels; slice 28."""
    rng = np.random.default_rng(seed)
    size, radius, thick = 120, 24, 10
    ys, xs = np.mgrid[0:size, 0:size].astype(np.float64) + 0.5
    c = size / 2
    outer = sd_round_rect(xs, ys, c, c, c, c, radius)
    inner = sd_round_rect(xs, ys, c, c, c - thick, c - thick, radius - thick + 2)
    nx, ny = outward_normal(xs, ys, c, c, c, c, radius)
    lit = nx * LIGHT[0] + ny * LIGHT[1]
    tcoord = np.clip(-outer / thick, 0, 1)  # 0 at the outside, 1 at the inside
    T, L, D = rgb(tier), rgb(light), rgb(dark)
    mid = T * 0.92
    col = np.zeros((size, size, 3))
    # profile across the frame
    band = mid[None, None, :] + (L - mid)[None, None, :] * np.clip(lit, 0, 1)[..., None] * 0.55 - (mid - D)[None, None, :] * np.clip(-lit, 0, 1)[..., None] * 0.55
    outer_bevel = (tcoord > 0.12) & (tcoord < 0.34)
    inner_bevel = (tcoord > 0.72) & (tcoord < 0.9)
    col[:] = band
    hi = np.array([255.0, 255.0, 255.0])
    col = np.where(outer_bevel[..., None], col + (np.clip(lit, 0, 1)[..., None] * (hi - col) * 0.7) - (np.clip(-lit, 0, 1)[..., None] * col * 0.35), col)
    col = np.where(inner_bevel[..., None], col + (np.clip(-lit, 0, 1)[..., None] * (hi - col) * 0.35) - (np.clip(lit, 0, 1)[..., None] * col * 0.45), col)
    lip = (tcoord <= 0.12) | (tcoord >= 0.9)
    col = np.where(lip[..., None], np.array([11.0, 12.0, 14.0]), col)
    # brushed grain along the frame
    grain = rng.normal(0, 7, (size, size))
    grain = np.where(np.abs(nx) > np.abs(ny), np.asarray(Image.fromarray(np.clip(128 + grain, 0, 255).astype(np.uint8)).filter(ImageFilter.BoxBlur(0)).resize((size, size)), dtype=np.float64) - 128, grain * 0.6)
    col = col + grain[..., None] * 0.6
    # rivets at the corners
    for px, py in ((thick * 0.5 + 6, thick * 0.5 + 6), (size - thick * 0.5 - 6, thick * 0.5 + 6), (thick * 0.5 + 6, size - thick * 0.5 - 6), (size - thick * 0.5 - 6, size - thick * 0.5 - 6)):
        dist = np.hypot(xs - px, ys - py)
        rivet = coverage(dist - 3.2)
        shade = np.clip(((xs - px) * LIGHT[0] + (ys - py) * LIGHT[1]) / 3.2, -1, 1)
        rc = np.where(shade[..., None] > 0, L + (hi - L) * shade[..., None] * 0.6, L * (1 + shade[..., None] * 0.5))
        col = col * (1 - rivet[..., None]) + rc * rivet[..., None]
    alpha = coverage(outer) * (1 - coverage(inner + 0.0) * (inner < 0))
    alpha = np.clip(coverage(outer) - coverage(inner), 0, 1)
    out = np.dstack([np.clip(col, 0, 255), alpha * 255])
    return Image.fromarray(out.astype(np.uint8), 'RGBA')


# ---------------------------------------------------------------- buttons (9-slice)

def button(top, mid, bottom, edge, seed=5, highlight=0.55, w=120, h=100, radius=18):
    """A metal plate: dark outline, bevelled lit top edge, brushed face. Slice 24."""
    rng = np.random.default_rng(seed)
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float64) + 0.5
    sd = sd_round_rect(xs, ys, w / 2, h / 2, w / 2, h / 2, radius)
    t = ys / h
    T, M, B, E = rgb(top), rgb(mid), rgb(bottom), rgb(edge)
    face = np.where((t < 0.5)[..., None], T + (M - T) * (t / 0.5)[..., None], M + (B - M) * ((t - 0.5) / 0.5)[..., None])
    # brushed streaks run across the plate
    streak = rng.normal(0, 1, (h, 1)) * 5 + rng.normal(0, 2.2, (h, w))
    face = face + streak[..., None]
    depth = -sd
    top_hi = np.exp(-((depth - 3.2) / 1.2) ** 2) * (ys < h * 0.5)
    face = face + top_hi[..., None] * (255 - face) * highlight
    bottom_lo = np.exp(-((depth - 3.0) / 1.6) ** 2) * (ys > h * 0.5)
    face = face - bottom_lo[..., None] * face * 0.25
    outline = coverage(sd) - coverage(sd + 2.0)
    face = face * (1 - outline[..., None]) + E * outline[..., None]
    out = np.dstack([np.clip(face, 0, 255), coverage(sd) * 255])
    return Image.fromarray(out.astype(np.uint8), 'RGBA')


# ---------------------------------------------------------------- panel frame (9-slice)

def panel_frame():
    """A hairline silver frame with brighter corner brackets. Slice 40."""
    size, radius = 160, 24
    ys, xs = np.mgrid[0:size, 0:size].astype(np.float64) + 0.5
    c = size / 2
    sd = sd_round_rect(xs, ys, c, c, c, c, radius)
    line = np.clip(coverage(sd) - coverage(sd + 2.0), 0, 1)
    # bracket strength: near each corner, fading out along the edges
    near = np.minimum(np.minimum(xs, size - xs), 0) + 0
    dx = np.minimum(xs, size - xs)
    dy = np.minimum(ys, size - ys)
    bracket_zone = np.clip(1 - (np.maximum(dx, dy) - radius) / 16, 0, 1)
    bracket = np.clip(coverage(sd) - coverage(sd + 3.0), 0, 1) * bracket_zone
    nx, ny = outward_normal(xs, ys, c, c, c, c, radius)
    lit = np.clip(nx * LIGHT[0] + ny * LIGHT[1], 0, 1)
    alpha = np.clip(line * (0.26 + 0.14 * lit) + bracket * 0.75, 0, 1)
    colour = np.array([214.0, 219.0, 228.0]) + np.array([30.0, 28.0, 20.0]) * bracket[..., None] * 0
    out = np.dstack([np.broadcast_to(colour, (size, size, 3)), alpha * 255])
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), 'RGBA')


def main():
    os.makedirs(OUT, exist_ok=True)
    save(hex_texture(8, 4, 24, 11, base=21, spread=1.6, hi=26, lo=14, groove=8, grain=2.6), 'hex-bg.webp')
    save(hex_texture(10, 5, 17, 12, base=27, spread=1.2, hi=16, lo=9, groove=16, grain=2.2, scratches=20), 'hex-panel.webp')
    save(hex_texture(6, 3, 30, 13, base=34, spread=2.4, hi=38, lo=18, groove=12, grain=3.0, scratches=40), 'hex-card.webp')
    for key, (tier, light, dark) in TIERS.items():
        save(shards(tier, light, dark), f'shards-{key}.webp', quality=78)
        save(card_frame(tier, light, dark), f'frame-{key}.png')
    save(button('#ffe58c', '#f5b300', '#d38b00', '#6b4700'), 'btn-gold.png')
    save(button('#3d4047', '#2a2c32', '#1d1f23', '#0b0c0e', highlight=0.25), 'btn-steel.png')
    save(button('#ffffff', '#dfe2e7', '#b7bcc5', '#5c616b', highlight=0.4), 'btn-silver.png')
    save(button('#ff6b72', '#e0283a', '#a8121f', '#4a060d', highlight=0.35), 'btn-red.png')
    save(button('#6ff0ac', '#1fc070', '#0e8a4c', '#064426', highlight=0.35), 'btn-green.png')
    save(panel_frame(), 'panel-frame.png')


if __name__ == '__main__':
    main()
