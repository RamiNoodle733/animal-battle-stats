// Share pictures built from the card renderer (abs-card.js): the card on its
// own, the front and back side by side, and the face-off (two cards squared
// up across the VS emblem, with the result when there is one). Pictures are
// 1080x1350 (4:5: right for Instagram, TikTok photos, X and Discord); the
// videos (card-reel.js) reuse the same pieces at 1080x1920.
import { CARD_W, CARD_H, TIER_COLOURS, cardAssets, renderSide, drawTurned, turnedQuad, loadImage, roundRect, nineSlice, fontsReady, release } from './abs-card.js';

export const PICTURE = { w: 1080, h: 1350 };
export const STORY = { w: 1080, h: 1920 };
const DISPLAY = '"Big Shoulders Display", Impact, sans-serif';
const BODY = 'Inter, system-ui, sans-serif';
const GOLD = '#f6b400';

export const sceneArt = () => Promise.all([
    loadImage('/images/ui/hex-bg.webp'),
    loadImage('/images/ui/stage.webp'),
    loadImage('/images/logo.png'),
    loadImage('/images/ui/vs.svg'),
    loadImage('/images/ui/btn-gold.png'),
    fontsReady()
]).then(([hex, stage, logo, vs, gold]) => ({ hex, stage, logo, vs, gold }));

// ---------------------------------------------------------------- the backdrop

// Charcoal plates (or the Versus arena), a glow in the tier colour behind the
// card, a vignette, the gold top bar and a hairline frame, like the site.
export function backdrop(ctx, W, H, S, { tier = 'f', arena = false, glowY = 0.5 } = {}) {
    ctx.fillStyle = '#121316';
    ctx.fillRect(0, 0, W, H);
    if (S.hex) {
        const pattern = ctx.createPattern(S.hex, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, W, H);
    }
    if (arena && S.stage) {
        const scale = Math.max(W / S.stage.width, H * 0.8 / S.stage.height);
        const dw = S.stage.width * scale;
        const dh = S.stage.height * scale;
        ctx.save();
        ctx.globalAlpha = 0.95;
        ctx.drawImage(S.stage, (W - dw) / 2, H * 0.62 - dh * 0.62, dw, dh);
        ctx.restore();
    }
    const shade = ctx.createLinearGradient(0, 0, 0, H);
    shade.addColorStop(0, 'rgba(0,0,0,0.3)');
    shade.addColorStop(0.5, 'rgba(0,0,0,0.05)');
    shade.addColorStop(1, 'rgba(0,0,0,0.6)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, W, H);
    const [colour] = TIER_COLOURS[tier] || TIER_COLOURS.f;
    const glow = ctx.createRadialGradient(W / 2, H * glowY, 40, W / 2, H * glowY, W * 0.75);
    glow.addColorStop(0, `${colour}55`);
    glow.addColorStop(0.45, `${colour}18`);
    glow.addColorStop(1, `${colour}00`);
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);
    const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.78);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.6)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = GOLD;
    ctx.fillRect(0, 0, W, 10);
    roundRect(ctx, 16, 26, W - 32, H - 42, 22);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(214,219,228,0.22)';
    ctx.stroke();
}

export function brand(ctx, S, x = 60, y = 52) {
    if (S.logo) ctx.drawImage(S.logo, x, y, 64, 64);
    ctx.font = `900 30px ${DISPLAY}`;
    ctx.fillStyle = '#f3f4f6';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText('ANIMAL BATTLE STATS', x + 78, y + 34);
    ctx.textBaseline = 'alphabetic';
}

export function siteLine(ctx, W, y, size = 34) {
    ctx.textAlign = 'center';
    ctx.font = `900 ${size}px ${DISPLAY}`;
    ctx.fillStyle = '#f3f4f6';
    ctx.fillText('ANIMALBATTLESTATS.COM', W / 2, y);
    ctx.textAlign = 'left';
}

export function title(ctx, text, x, y, size, maxWidth, colour = '#fff') {
    let current = size;
    ctx.font = `900 ${current}px ${DISPLAY}`;
    while (ctx.measureText(text).width > maxWidth && current > 24) {
        current -= 2;
        ctx.font = `900 ${current}px ${DISPLAY}`;
    }
    ctx.textAlign = 'center';
    ctx.fillStyle = colour;
    ctx.shadowColor = 'rgba(0,0,0,0.55)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 5;
    ctx.fillText(text, x, y);
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.textAlign = 'left';
}

// A soft card-shaped shadow, blurred once and reused (a live blur on every
// video frame would cost more than drawing the card itself).
let shadowSprite = null;
function cardShadow() {
    if (shadowSprite) return shadowSprite;
    shadowSprite = document.createElement('canvas');
    shadowSprite.width = 300;
    shadowSprite.height = 400;
    const ctx = shadowSprite.getContext('2d');
    ctx.shadowColor = '#000';
    ctx.shadowBlur = 36;
    ctx.shadowOffsetX = 2000;
    roundRect(ctx, 50 - 2000, 50, 200, 300, 16);
    ctx.fill();
    return shadowSprite;
}

// A rendered card face dropped onto the scene: a contact shadow on the floor,
// a drop shadow from the card's outline, then the face (turned `angle`
// radians, with perspective) centred on (x, y).
export function placeCard(ctx, face, x, y, w, angle = 0, { lift = 1 } = {}) {
    const h = w * (CARD_H / CARD_W);
    ctx.save();
    ctx.globalAlpha = 0.55 * lift;
    const floor = ctx.createRadialGradient(x, y + h * 0.47, 10, x, y + h * 0.47, w * 0.62);
    floor.addColorStop(0, 'rgba(0,0,0,0.9)');
    floor.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = floor;
    ctx.fillRect(x - w, y + h * 0.3, w * 2, h * 0.4);
    const [l, r] = turnedQuad(x, y, w, h, angle);
    const left = Math.min(l.x, r.x);
    const width = Math.abs(r.x - l.x);
    const top = Math.min(l.top, r.top);
    const height = Math.max(l.bottom, r.bottom) - top;
    if (width > 2) {
        ctx.globalAlpha = 0.7 * lift;
        const padX = width * 0.25;
        const padY = height * (50 / 300);
        ctx.drawImage(cardShadow(), left - padX, top - padY + w * 0.05, width + 2 * padX, height + 2 * padY);
    }
    ctx.restore();
    drawTurned(ctx, face, x, y, w, angle);
}

// The loser of a fight: drained of colour and pushed into the dark.
export function knockedOut(face) {
    const out = document.createElement('canvas');
    out.width = face.width;
    out.height = face.height;
    const ctx = out.getContext('2d');
    ctx.drawImage(face, 0, 0);
    ctx.globalCompositeOperation = 'saturation';
    ctx.fillStyle = 'hsl(0,0%,50%)';
    ctx.globalAlpha = 0.85;
    ctx.fillRect(0, 0, out.width, out.height);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(face, 0, 0);
    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(0, 0, out.width, out.height);
    return out;
}

// The red K.O. stamp, slammed across the loser's card.
export function koStamp(ctx, x, y, size, alpha = 1, scale = 1) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    ctx.rotate(-0.24);
    ctx.scale(scale, scale);
    const w = size * 2.1;
    const h = size * 1.05;
    roundRect(ctx, -w / 2, -h / 2, w, h, size * 0.12);
    ctx.lineWidth = size * 0.07;
    ctx.strokeStyle = '#ff4150';
    ctx.stroke();
    roundRect(ctx, -w / 2 + size * 0.1, -h / 2 + size * 0.1, w - size * 0.2, h - size * 0.2, size * 0.06);
    ctx.lineWidth = size * 0.025;
    ctx.stroke();
    ctx.font = `900 ${size * 0.86}px ${DISPLAY}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = size * 0.05;
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.strokeText('K.O.', 0, size * 0.05);
    ctx.fillStyle = '#ff4150';
    ctx.fillText('K.O.', 0, size * 0.05);
    ctx.restore();
}

// A gold plate with dark capitals (the WINNER ribbon, crowd counts).
export function goldTag(ctx, S, text, x, y, size, { rotate = 0, alpha = 1 } = {}) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.font = `900 ${size}px ${DISPLAY}`;
    const spacing = size * 0.1;
    const textW = [...text].reduce((sum, char) => sum + ctx.measureText(char).width, 0) + spacing * (text.length - 1);
    const w = textW + size * 1.4;
    const h = size * 1.5;
    ctx.shadowColor = 'rgba(0,0,0,0.55)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 6;
    if (S.gold) nineSlice(ctx, S.gold, -w / 2, -h / 2, w, h, 24, size * 0.42);
    else {
        roundRect(ctx, -w / 2, -h / 2, w, h, 10);
        ctx.fillStyle = GOLD;
        ctx.fill();
    }
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = '#1d1400';
    ctx.textBaseline = 'middle';
    let cursor = -textW / 2;
    for (const char of text) {
        ctx.fillText(char, cursor, size * 0.04);
        cursor += ctx.measureText(char).width + spacing;
    }
    ctx.restore();
}

// The odds bar: gold for the left fighter, silver for the right.
export function oddsBar(ctx, x, y, w, h, odds, fill = 1) {
    const shown = 50 + (odds - 50) * fill;
    const split = x + (w * shown) / 100;
    ctx.save();
    roundRect(ctx, x, y, w, h, 12);
    ctx.clip();
    const ga = ctx.createLinearGradient(0, y, 0, y + h);
    ga.addColorStop(0, '#ffd54a');
    ga.addColorStop(1, '#eaa400');
    ctx.fillStyle = ga;
    ctx.fillRect(x, y, split - x, h);
    const gb = ctx.createLinearGradient(0, y, 0, y + h);
    gb.addColorStop(0, '#f1f2f5');
    gb.addColorStop(1, '#b9bec8');
    ctx.fillStyle = gb;
    ctx.fillRect(split, y, x + w - split, h);
    ctx.fillStyle = '#0b0c0e';
    ctx.fillRect(split - 2, y, 4, h);
    ctx.restore();
    ctx.textBaseline = 'middle';
    ctx.font = `900 40px ${DISPLAY}`;
    ctx.fillStyle = '#1d1400';
    ctx.textAlign = 'left';
    ctx.fillText(`${Math.round(shown)}%`, x + 20, y + h / 2 + 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#111216';
    ctx.fillText(`${100 - Math.round(shown)}%`, x + w - 20, y + h / 2 + 2);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.font = `800 18px ${BODY}`;
    ctx.fillStyle = '#c5c9d1';
    ctx.fillText('ODDS ON THE STATS', x + w / 2, y - 14);
    ctx.textAlign = 'left';
}

// The finished picture as a JPEG; every canvas used for it is freed.
async function finish(canvas, ...used) {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.93));
    release(canvas, ...used);
    return blob;
}

function canvasOf(W, H) {
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    return canvas;
}

// ---------------------------------------------------------------- the pictures

// The card on its own.
export async function cardPicture(card) {
    const [A, S] = await Promise.all([cardAssets(card), sceneArt()]);
    const { w: W, h: H } = PICTURE;
    const canvas = canvasOf(W, H);
    const ctx = canvas.getContext('2d');
    backdrop(ctx, W, H, S, { tier: card.tier, glowY: 0.52 });
    brand(ctx, S);
    ctx.textAlign = 'right';
    ctx.font = `800 20px ${BODY}`;
    ctx.fillStyle = '#8d929b';
    ctx.fillText(card.rank ? `CARD ${card.rank} OF ${card.total}` : 'SPECIAL CARD', W - 62, 92);
    ctx.textAlign = 'left';
    const face = renderSide(card, A, 'front', 900, { sheen: 0.36 });
    placeCard(ctx, face, W / 2, 690, 760, -0.1);
    siteLine(ctx, W, 1302);
    return finish(canvas, face);
}

// Front and back, side by side.
export async function bothPicture(card) {
    const [A, S] = await Promise.all([cardAssets(card), sceneArt()]);
    const { w: W, h: H } = PICTURE;
    const canvas = canvasOf(W, H);
    const ctx = canvas.getContext('2d');
    backdrop(ctx, W, H, S, { tier: card.tier, glowY: 0.55 });
    brand(ctx, S);
    title(ctx, card.name.toUpperCase(), W / 2, 238, 104, W - 140);
    ctx.textAlign = 'center';
    ctx.font = `700 26px ${BODY}`;
    ctx.fillStyle = '#c5c9d1';
    const facts = [card.rank ? `#${card.rank} of ${card.total}` : null, card.tierLabel ? `${card.tierLabel} tier` : null, `Power ${card.power}`].filter(Boolean).join('  ·  ');
    ctx.fillText(facts, W / 2, 292);
    ctx.textAlign = 'left';
    const front = renderSide(card, A, 'front', 700, { sheen: 0.36 });
    const back = renderSide(card, A, 'back', 700);
    placeCard(ctx, front, 282, 760, 478, 0.08);
    placeCard(ctx, back, 798, 760, 478, -0.08);
    siteLine(ctx, W, 1302);
    return finish(canvas, front, back);
}

// The face-off. a/b: cards; na/nb: crowd sizes; labels: how to name each side;
// odds: the left side's chance (0..100) or null while sealed; result: 'a' | 'b' | null.
export async function faceoffPicture({ a, b, na = 1, nb = 1, labels = [], odds = null, result = null }) {
    const [Aa, Ab, S] = await Promise.all([cardAssets(a), cardAssets(b), sceneArt()]);
    const { w: W, h: H } = PICTURE;
    const canvas = canvasOf(W, H);
    const ctx = canvas.getContext('2d');
    const winner = result === 'a' ? a : result === 'b' ? b : null;
    backdrop(ctx, W, H, S, { tier: winner ? winner.tier : 's', arena: true, glowY: 0.5 });
    brand(ctx, S);
    title(ctx, result ? 'THE RESULT' : 'WHO WOULD WIN?', W / 2, 228, 112, W - 140);
    const scene = { a, b, Aa, Ab, na, nb, labels, result };
    faceoffCards(ctx, S, scene, { W, y: 676, cardW: 466, gap: 524 });
    const footY = 1128;
    if (odds != null) oddsBar(ctx, 60, footY, W - 120, 58, odds);
    else {
        ctx.textAlign = 'center';
        ctx.font = `900 50px ${DISPLAY}`;
        ctx.fillStyle = GOLD;
        ctx.fillText('MAKE YOUR CALL', W / 2, footY + 44);
        ctx.textAlign = 'left';
    }
    siteLine(ctx, W, 1302);
    return finish(canvas, Object.values(scene.faces), Object.values(scene.ko));
}

// The two cards angled in toward each other, the VS emblem between them,
// and the result. `t` lets the reel animate it: {enter: 0..1, vs: 0..1, ko: 0..1}.
export function faceoffCards(ctx, S, data, { W, y, cardW, gap }, t = { enter: 1, vs: 1, ko: 1 }) {
    const { a, b, Aa, Ab, na, nb, labels, result } = data;
    data.faces ||= {
        a: renderSide(a, Aa, 'front', 720, { sheen: 0.3 }),
        b: renderSide(b, Ab, 'front', 720, { sheen: 0.62 })
    };
    data.ko ||= {};
    const sides = [['a', W / 2 - gap / 2, 0.24, -1], ['b', W / 2 + gap / 2, -0.24, 1]];
    const cardH = cardW * (CARD_H / CARD_W);
    for (const [side, cx, angle, dir] of sides) {
        const enter = Math.max(0, Math.min(1, t.enter));
        const ease = 1 - (1 - enter) ** 3;
        const x = cx + dir * (1 - ease) * W * 0.7;
        const lost = result && result !== side;
        const won = result === side;
        let face = data.faces[side];
        if (lost && t.ko > 0) {
            data.ko[side] ||= knockedOut(face);
            face = data.ko[side];
        }
        if (won && t.ko > 0) {
            // the winner glows in its tier colour
            const [colour] = TIER_COLOURS[(side === 'a' ? a : b).tier] || TIER_COLOURS.f;
            ctx.save();
            ctx.globalAlpha = Math.min(1, t.ko);
            const glow = ctx.createRadialGradient(x, y, cardW * 0.2, x, y, cardW * 0.95);
            glow.addColorStop(0, `${colour}aa`);
            glow.addColorStop(1, `${colour}00`);
            ctx.fillStyle = glow;
            ctx.fillRect(x - cardW, y - cardH, cardW * 2, cardH * 2);
            ctx.restore();
        }
        placeCard(ctx, face, x, y, cardW, angle + dir * (1 - ease) * 0.9);
        // a crowd ("10 gorillas") is named on a gold plate under its card
        const count = side === 'a' ? na : nb;
        const label = labels[side === 'a' ? 0 : 1] || `${Number(count).toLocaleString('en-US')}×`;
        if (count > 1 && enter >= 1) goldTag(ctx, S, label.toUpperCase(), x, y + cardH / 2 + 44, 30);
        if (lost && t.ko > 0) {
            const slam = Math.min(1, t.ko);
            koStamp(ctx, x, y + cardH * 0.05, 120, slam, 1 + (1 - slam) * 1.4);
        }
        if (won && t.ko > 0) goldTag(ctx, S, 'WINNER', x, y - cardH / 2 + 4, 38, { rotate: dir * -0.05, alpha: Math.min(1, t.ko) });
    }
    if (S.vs && t.vs > 0) {
        const pop = Math.min(1, t.vs);
        const scale = 1 + (1 - pop) * 2.2;
        const vw = 250 * scale;
        const vh = vw * (104 / 140);
        ctx.save();
        ctx.globalAlpha = pop;
        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 30;
        ctx.shadowOffsetY = 10;
        ctx.drawImage(S.vs, W / 2 - vw / 2, y - vh / 2, vw, vh);
        ctx.restore();
    }
}
