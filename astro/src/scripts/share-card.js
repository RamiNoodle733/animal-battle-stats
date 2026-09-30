// Share a matchup as a picture: a 1080x1350 card (4:5, right for Instagram,
// TikTok photos, X and Discord) drawn on a canvas in the site's card style.
// Before the fight it is a challenge ("who would win? make your call"); after
// the fight or Show it carries the result and the odds. Phones get the native
// share sheet with the image attached; everyone can save it or copy the link.
import { toast } from './site.js';

const W = 1080;
const H = 1350;
const GOLD = '#f6b400';
const DISPLAY = '"Big Shoulders Display Variable", "Big Shoulders Display", Impact, sans-serif';
const BODY = '"Inter Variable", Inter, system-ui, sans-serif';

const images = new Map();
function load(src) {
    if (!images.has(src)) {
        images.set(src, new Promise((resolve) => {
            const img = new Image();
            img.decoding = 'async';
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = src;
        }));
    }
    return images.get(src);
}

function hexMesh(ctx) {
    const r = 22;
    const w = Math.sqrt(3) * r;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.045)';
    ctx.lineWidth = 1.5;
    for (let row = -1; row * r * 1.5 < H + r; row += 1) {
        for (let col = -1; col * w < W + w; col += 1) {
            const cx = col * w + (row % 2 ? w / 2 : 0);
            const cy = row * r * 1.5;
            ctx.beginPath();
            for (let i = 0; i < 6; i += 1) {
                const angle = (Math.PI / 3) * i - Math.PI / 2;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }
    }
    ctx.restore();
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

function fitText(ctx, text, font, size, maxWidth) {
    let current = size;
    ctx.font = `900 ${current}px ${font}`;
    while (ctx.measureText(text).width > maxWidth && current > 20) {
        current -= 2;
        ctx.font = `900 ${current}px ${font}`;
    }
    return current;
}

// Draws one fighter: the photo in a box (equal-area, mirrored for the right
// side), then a name plate with the tier crest and the power number.
async function fighter(ctx, f, box, plateY, mirror) {
    const img = await load(f.src);
    if (img) {
        const scale = Math.min(box.w / img.width, box.h / img.height);
        const dw = img.width * scale;
        const dh = img.height * scale;
        const dx = box.x + (box.w - dw) / 2;
        const dy = box.y + box.h - dh;
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 30;
        ctx.shadowOffsetY = 18;
        if (mirror) {
            ctx.translate(dx + dw, dy);
            ctx.scale(-1, 1);
            ctx.drawImage(img, 0, 0, dw, dh);
        } else ctx.drawImage(img, dx, dy, dw, dh);
        ctx.restore();
    }
    // plate
    const x = 60;
    const w = W - 120;
    const h = 104;
    ctx.save();
    roundRect(ctx, x, plateY, w, h, 14);
    ctx.fillStyle = 'rgba(11,12,14,0.94)';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = f.winner ? GOLD : 'rgba(214,219,228,0.35)';
    ctx.stroke();
    ctx.restore();
    const crest = await load(`/images/ui/tier-${f.tier}.svg`);
    if (crest) ctx.drawImage(crest, x + 18, plateY + 12, 68, 80);
    // gold chevron + name
    const nameX = x + 106;
    const size = fitText(ctx, f.label.toUpperCase(), DISPLAY, f.meta ? 60 : 70, w - 106 - 190);
    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'middle';
    ctx.fillText(f.label.toUpperCase(), nameX, f.meta ? plateY + 40 : plateY + h / 2 + 4);
    ctx.font = `600 21px ${BODY}`;
    ctx.fillStyle = '#9ba0a8';
    if (f.meta) ctx.fillText(f.meta, nameX, plateY + 82);
    // power (or the winner tag)
    ctx.textAlign = 'right';
    if (f.winner) {
        ctx.font = `900 30px ${DISPLAY}`;
        const tag = 'WINNER';
        const tw = ctx.measureText(tag).width + 36;
        roundRect(ctx, x + w - 20 - tw, plateY + 30, tw, 44, 8);
        ctx.fillStyle = GOLD;
        ctx.fill();
        ctx.fillStyle = '#1d1400';
        ctx.fillText(tag, x + w - 38, plateY + 54);
    } else if (f.power != null) {
        ctx.font = `900 52px ${DISPLAY}`;
        ctx.fillStyle = '#fff';
        ctx.fillText(String(f.power), x + w - 26, plateY + 48);
        ctx.font = `800 18px ${BODY}`;
        ctx.fillStyle = GOLD;
        ctx.fillText('POWER', x + w - 26, plateY + 84);
    }
    ctx.textAlign = 'left';
    return size;
}

export async function drawMatchCard({ a, b, odds = null, result = null }) {
    try { await Promise.all([document.fonts.load(`900 80px ${DISPLAY}`), document.fonts.load(`600 24px ${BODY}`)]); } catch { /* system font */ }
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // background: charcoal, hex mesh, a faint gold beam, silver frame, gold top bar
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#1f2126');
    bg.addColorStop(1, '#0a0b0d');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
    hexMesh(ctx);
    ctx.save();
    ctx.globalAlpha = 0.07;
    ctx.fillStyle = GOLD;
    ctx.beginPath(); ctx.moveTo(600, 0); ctx.lineTo(820, 0); ctx.lineTo(480, H); ctx.lineTo(260, H); ctx.closePath(); ctx.fill();
    ctx.restore();
    const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.8);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = GOLD;
    ctx.fillRect(0, 0, W, 10);
    roundRect(ctx, 16, 26, W - 32, H - 42, 22);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(214,219,228,0.25)';
    ctx.stroke();

    // header
    const logo = await load('/images/logo.png');
    if (logo) ctx.drawImage(logo, 60, 58, 64, 64);
    ctx.font = `900 30px ${DISPLAY}`;
    ctx.fillStyle = '#f3f4f6';
    ctx.textBaseline = 'middle';
    ctx.fillText('ANIMAL BATTLE STATS', 138, 92);
    const title = result ? 'THE RESULT' : 'WHO WOULD WIN?';
    ctx.textAlign = 'center';
    fitText(ctx, title, DISPLAY, 112, W - 140);
    ctx.fillStyle = '#fff';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowOffsetY = 5;
    ctx.fillText(title, W / 2, 196);
    ctx.shadowColor = 'transparent';
    ctx.textAlign = 'left';

    // fighters: A on top, B below (mirrored), the VS emblem between
    await fighter(ctx, { ...a, winner: result === 'a' }, { x: 110, y: 262, w: W - 220, h: 290 }, 566, false);
    await fighter(ctx, { ...b, winner: result === 'b' }, { x: 110, y: 752, w: W - 220, h: 290 }, 1056, true);
    const vs = await load('/images/ui/vs.svg');
    if (vs) ctx.drawImage(vs, W / 2 - 110, 660, 220, 163);

    // footer: odds, or the challenge
    const footY = 1196;
    if (odds != null) {
        const split = 60 + ((W - 120) * odds) / 100;
        ctx.save();
        roundRect(ctx, 60, footY, W - 120, 56, 12);
        ctx.clip();
        const ga = ctx.createLinearGradient(0, footY, 0, footY + 56);
        ga.addColorStop(0, '#ffd54a'); ga.addColorStop(1, '#eaa400');
        ctx.fillStyle = ga;
        ctx.fillRect(60, footY, split - 60, 56);
        const gb = ctx.createLinearGradient(0, footY, 0, footY + 56);
        gb.addColorStop(0, '#f1f2f5'); gb.addColorStop(1, '#b9bec8');
        ctx.fillStyle = gb;
        ctx.fillRect(split, footY, W - 60 - split, 56);
        ctx.fillStyle = '#0b0c0e';
        ctx.fillRect(split - 2, footY, 4, 56);
        ctx.restore();
        ctx.font = `900 40px ${DISPLAY}`;
        ctx.fillStyle = '#1d1400';
        ctx.fillText(`${odds}%`, 80, footY + 30);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#111216';
        ctx.fillText(`${100 - odds}%`, W - 80, footY + 30);
        ctx.textAlign = 'center';
        ctx.font = `800 18px ${BODY}`;
        ctx.fillText('STATS ODDS', W / 2, footY + 30);
    } else {
        ctx.textAlign = 'center';
        ctx.font = `900 46px ${DISPLAY}`;
        ctx.fillStyle = GOLD;
        ctx.fillText('MAKE YOUR CALL', W / 2, footY + 28);
    }
    ctx.textAlign = 'center';
    ctx.font = `900 34px ${DISPLAY}`;
    ctx.fillStyle = '#f3f4f6';
    ctx.fillText('ANIMALBATTLESTATS.COM', W / 2, 1296);
    ctx.textAlign = 'left';

    return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), 'image/png'));
}

// ---------------------------------------------------------------- the share sheet

let sheet = null;
function ensureSheet() {
    if (sheet) return sheet;
    sheet = document.createElement('dialog');
    sheet.className = 'share-sheet';
    sheet.setAttribute('aria-label', 'Share this matchup');
    sheet.innerHTML = `
        <div class="ss-head"><b class="ss-title" data-ss-title>Share</b><button type="button" class="hud-btn" data-ss-close aria-label="Close"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
        <div class="ss-preview"><img alt="Matchup card" data-ss-img /><span class="ss-wait" data-ss-wait>Drawing the card…</span></div>
        <div class="ss-actions">
            <button type="button" class="btn btn-gold" data-ss-share>Share</button>
            <a class="btn" data-ss-save download="animal-battle-stats.png">Save image</a>
            <button type="button" class="btn" data-ss-copy>Copy link</button>
        </div>
        <p class="ss-note" data-ss-note></p>`;
    document.body.appendChild(sheet);
    sheet.querySelector('[data-ss-close]').addEventListener('click', () => sheet.close());
    sheet.addEventListener('click', (event) => { if (event.target === sheet) sheet.close(); });
    return sheet;
}

function track(method, name) {
    window.gtag?.('event', 'share', { method, content_type: 'matchup', item_id: name });
}

// data: { a, b, odds, result, url, text, name }
export async function openShare(data) {
    const dialog = ensureSheet();
    const img = dialog.querySelector('[data-ss-img]');
    const waitNote = dialog.querySelector('[data-ss-wait]');
    const save = dialog.querySelector('[data-ss-save]');
    dialog.querySelector('[data-ss-title]').textContent = data.result ? 'Share the result' : 'Challenge your friends';
    dialog.querySelector('[data-ss-note]').textContent = data.result
        ? 'The card shows who won and the odds. The link opens this fight.'
        : 'The odds stay hidden on the card, so your friends have to make their call first.';
    img.removeAttribute('src');
    waitNote.hidden = false;
    dialog.showModal();
    const blob = await drawMatchCard(data);
    if (!blob) { toast('Could not draw the card'); return; }
    const url = URL.createObjectURL(blob);
    img.src = url;
    waitNote.hidden = true;
    const fileName = `${data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.png`;
    save.href = url;
    save.download = fileName;
    const file = new File([blob], fileName, { type: 'image/png' });
    const shareButton = dialog.querySelector('[data-ss-share]');
    const canFiles = Boolean(navigator.canShare?.({ files: [file] }));
    shareButton.hidden = !navigator.share;
    shareButton.onclick = async () => {
        try {
            if (canFiles) await navigator.share({ files: [file], title: data.name, text: `${data.text} ${data.url}` });
            else await navigator.share({ title: data.name, text: data.text, url: data.url });
            track(canFiles ? 'native_image' : 'native_link', data.name);
        } catch { /* cancelled */ }
    };
    save.onclick = () => track('save_image', data.name);
    dialog.querySelector('[data-ss-copy]').onclick = async () => {
        try { await navigator.clipboard.writeText(`${data.text} ${data.url}`); toast('Link copied'); track('copy_link', data.name); } catch { toast(data.url); }
    };
}
