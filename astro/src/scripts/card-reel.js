// Short videos of the cards for Reels, TikTok, Shorts and Stories (1080x1920,
// 9:16). The card rises in, the foil catches the light, it flips in 3D and
// the stat bars fill; the face-off slides both cards in, slams the VS emblem
// and stamps the K.O. Frames are drawn live on a canvas and recorded with
// MediaRecorder (MP4 where the browser can, WebM otherwise), so a reel takes
// as long to make as it does to watch, and the preview plays while it records.
import { CARD_W, cardAssets, frontLayers, drawFoil, drawSheen, drawBack, renderSide, release } from './abs-card.js';
import { STORY, sceneArt, backdrop, brand, siteLine, title, placeCard, faceoffCards, oddsBar } from './card-scenes.js';

const DISPLAY = '"Big Shoulders Display", Impact, sans-serif';
const BODY = 'Inter, system-ui, sans-serif';
const GOLD = '#f6b400';
const FPS = 30;

const TYPES = ['video/mp4;codecs=avc1.640028', 'video/mp4;codecs=avc1.4d0028', 'video/mp4;codecs=avc1', 'video/mp4', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'];
export function videoType() {
    if (typeof MediaRecorder === 'undefined' || typeof HTMLCanvasElement === 'undefined' || !HTMLCanvasElement.prototype.captureStream) return null;
    return TYPES.find((type) => { try { return MediaRecorder.isTypeSupported(type); } catch { return false; } }) || null;
}

// ---------------------------------------------------------------- easing

const clamp = (value) => Math.max(0, Math.min(1, value));
const span = (t, from, to) => clamp((t - from) / (to - from));
const easeOut = (x) => 1 - (1 - x) ** 3;
const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);
const easeBack = (x) => { const c = 1.5; return 1 + (c + 1) * (x - 1) ** 3 + c * (x - 1) ** 2; };

// ---------------------------------------------------------------- recording

// Plays `draw(ctx, t)` on `canvas` for `duration` seconds and records it.
// onFrame(t) runs after each frame (progress); returns { blob, type, ext }.
export function record(canvas, draw, duration, { onFrame, signal } = {}) {
    const type = videoType();
    if (!type) return Promise.reject(new Error('Video recording is not supported in this browser'));
    const ctx = canvas.getContext('2d');
    draw(ctx, 0);
    const stream = canvas.captureStream(FPS);
    const recorder = new MediaRecorder(stream, { mimeType: type, videoBitsPerSecond: 10_000_000 });
    const chunks = [];
    recorder.ondataavailable = (event) => { if (event.data?.size) chunks.push(event.data); };
    return new Promise((resolve, reject) => {
        let start = 0;
        let stopped = false;
        const finish = () => {
            if (stopped) return;
            stopped = true;
            recorder.stop();
        };
        recorder.onstop = () => {
            stream.getTracks().forEach((track) => track.stop());
            if (signal?.aborted) { reject(new DOMException('Cancelled', 'AbortError')); return; }
            const blob = new Blob(chunks, { type: type.split(';')[0] });
            resolve({ blob, type: blob.type, ext: blob.type.includes('mp4') ? 'mp4' : 'webm' });
        };
        recorder.onerror = (event) => reject(event.error || new Error('Recording failed'));
        signal?.addEventListener('abort', finish, { once: true });
        const tick = (now) => {
            if (stopped) return;
            if (!start) start = now;
            const t = Math.min(duration, (now - start) / 1000);
            draw(ctx, t);
            onFrame?.(t / duration);
            if (t >= duration) {
                // hold the last frame briefly so the encoder keeps it
                setTimeout(finish, 150);
                return;
            }
            requestAnimationFrame(tick);
        };
        recorder.start(250);
        requestAnimationFrame(tick);
    });
}

function storyCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = STORY.w;
    canvas.height = STORY.h;
    return canvas;
}

function staticLayer(paint) {
    const canvas = storyCanvas();
    paint(canvas.getContext('2d'));
    return canvas;
}

// ---------------------------------------------------------------- the card reel

export const CARD_REEL = 8.4;

// Prepares a reel for one card; returns { canvas, duration, draw, dispose }.
export async function cardReel(card) {
    const [A, S] = await Promise.all([cardAssets(card), sceneArt()]);
    const { w: W, h: H } = STORY;
    const faceW = 900;
    const layers = frontLayers(card, A, faceW);
    const back = renderSide(card, A, 'back', faceW);
    const face = document.createElement('canvas');
    face.width = layers.under.width;
    face.height = layers.under.height;
    const fctx = face.getContext('2d');
    const backFill = document.createElement('canvas');
    backFill.width = back.width;
    backFill.height = back.height;
    const bctx = backFill.getContext('2d');
    const k = faceW / CARD_W;

    const stage = staticLayer((ctx) => {
        backdrop(ctx, W, H, S, { tier: card.tier, glowY: 0.5 });
        brand(ctx, S, 60, 70);
        ctx.textAlign = 'right';
        ctx.font = `800 22px ${BODY}`;
        ctx.fillStyle = '#8d929b';
        ctx.fillText(card.rank ? `CARD ${card.rank} OF ${card.total}` : 'SPECIAL CARD', W - 64, 112);
        ctx.textAlign = 'left';
        siteLine(ctx, W, H - 92, 40);
    });

    function frontAt(phase) {
        fctx.setTransform(1, 0, 0, 1, 0, 0);
        fctx.clearRect(0, 0, face.width, face.height);
        fctx.drawImage(layers.under, 0, 0);
        fctx.setTransform(k, 0, 0, k, 0, 0);
        drawFoil(fctx, card, A, phase);
        fctx.setTransform(1, 0, 0, 1, 0, 0);
        fctx.drawImage(layers.over, 0, 0);
        fctx.setTransform(k, 0, 0, k, 0, 0);
        drawSheen(fctx, phase);
        return face;
    }
    let lastFill = -1;
    function backAt(fill) {
        if (fill >= 1) return back;
        if (fill !== lastFill) {
            bctx.setTransform(1, 0, 0, 1, 0, 0);
            bctx.clearRect(0, 0, backFill.width, backFill.height);
            bctx.setTransform(k, 0, 0, k, 0, 0);
            drawBack(bctx, card, A, { fill });
            lastFill = fill;
        }
        return backFill;
    }

    const cardW = 860;
    const cy = 960;
    function draw(ctx, t) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(stage, 0, 0);
        // the turn: rise in, sway, flip to the back, fill the stats, flip home
        const enter = easeBack(span(t, 0, 1.1));
        let angle = -1.25 * (1 - easeOut(span(t, 0, 1.1)));
        angle += Math.sin(t * 1.3) * 0.13 * span(t, 0.8, 1.6);
        angle += Math.PI * easeInOut(span(t, 3.0, 3.9));
        angle += Math.PI * easeInOut(span(t, 6.5, 7.4));
        const lift = (1 - enter) * 420;
        const scale = 0.72 + 0.28 * enter;
        const phase = 0.1 + 0.8 * span(t, 1.0, 2.9) + Math.sin(t * 1.3) * 0.06;
        const fill = easeOut(span(t, 4.0, 5.3));
        const frontSide = Math.cos(angle) >= 0;
        const art = frontSide ? frontAt(t > 6.5 ? 0.25 + 0.6 * span(t, 7.2, 8.4) : phase) : backAt(fill);
        ctx.save();
        ctx.globalAlpha = clamp(t / 0.25);
        placeCard(ctx, art, W / 2, cy + lift, cardW * scale, frontSide ? angle : angle + Math.PI);
        ctx.restore();
        // a flash of light as the card crosses edge-on
        const edge = 1 - Math.abs(Math.cos(angle));
        if (t > 1.2 && edge > 0.6) {
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            const g = ctx.createRadialGradient(W / 2, cy, 0, W / 2, cy, 520);
            g.addColorStop(0, `rgba(255,236,170,${(edge - 0.6) * 0.5})`);
            g.addColorStop(1, 'rgba(255,236,170,0)');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
            ctx.restore();
        }
        // the call to action
        const cta = easeOut(span(t, 7.3, 7.9));
        if (cta > 0) {
            ctx.save();
            ctx.globalAlpha = cta;
            ctx.translate(0, (1 - cta) * 30);
            title(ctx, `WHO CAN BEAT THE ${card.name.toUpperCase()}?`, W / 2, H - 200, 64, W - 120, GOLD);
            ctx.restore();
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    const canvas = storyCanvas();
    const dispose = () => release(canvas, stage, face, back, backFill, layers.under, layers.over);
    return { canvas, duration: CARD_REEL, draw, dispose };
}

// ---------------------------------------------------------------- the face-off reel

export const FACEOFF_REEL = 7;

// data: { a, b, na, nb, labels, odds, result } (as faceoffPicture).
export async function faceoffReel(data) {
    const [Aa, Ab, S] = await Promise.all([cardAssets(data.a), cardAssets(data.b), sceneArt()]);
    const { w: W, h: H } = STORY;
    const winner = data.result === 'a' ? data.a : data.result === 'b' ? data.b : null;
    const stage = staticLayer((ctx) => {
        backdrop(ctx, W, H, S, { tier: winner ? winner.tier : 's', arena: true, glowY: 0.47 });
        brand(ctx, S, 60, 70);
        siteLine(ctx, W, H - 92, 40);
    });
    const scene = { ...data, Aa, Ab };
    const layout = { W, y: 930, cardW: 480, gap: 532 };
    function draw(ctx, t) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        // the VS slam and the K.O. shake the screen
        const slam = span(t, 1.0, 1.45);
        const koT = data.result ? span(t, 3.1, 3.5) : 0;
        const shake = (slam > 0 && slam < 1 ? (1 - slam) * 18 : 0) + (koT > 0 && koT < 1 ? (1 - koT) * 22 : 0);
        ctx.translate(Math.sin(t * 90) * shake, Math.cos(t * 70) * shake * 0.6);
        ctx.drawImage(stage, 0, 0);
        const heading = data.result && t >= 3.1 ? 'THE RESULT' : 'WHO WOULD WIN?';
        const headIn = easeOut(span(t, 0.2, 0.8));
        ctx.save();
        ctx.globalAlpha = headIn;
        title(ctx, heading, W / 2, 330, 124, W - 120);
        ctx.restore();
        faceoffCards(ctx, S, scene, layout, { enter: span(t, 0, 0.95), vs: easeOut(slam), ko: data.result ? easeOut(koT) : 0 });
        const footY = 1450;
        if (data.odds != null) {
            const show = easeOut(span(t, data.result ? 3.6 : 2.2, data.result ? 4.6 : 3.2));
            if (show > 0) {
                ctx.save();
                ctx.globalAlpha = show;
                oddsBar(ctx, 60, footY, W - 120, 66, data.odds, show);
                ctx.restore();
            }
        } else if (t > 2.0) {
            const pulse = 0.85 + 0.15 * Math.sin(t * 5);
            ctx.save();
            ctx.globalAlpha = easeOut(span(t, 2.0, 2.5));
            ctx.translate(W / 2, footY + 40);
            ctx.scale(pulse, pulse);
            ctx.textAlign = 'center';
            ctx.font = `900 66px ${DISPLAY}`;
            ctx.fillStyle = GOLD;
            ctx.fillText('MAKE YOUR CALL', 0, 0);
            ctx.restore();
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    const canvas = storyCanvas();
    const dispose = () => release(canvas, stage, Object.values(scene.faces || {}), Object.values(scene.ko || {}));
    return { canvas, duration: FACEOFF_REEL, draw, dispose };
}

