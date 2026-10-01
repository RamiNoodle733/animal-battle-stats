// The card in 3D. Drag to turn it (it keeps spinning a little, then settles
// on a side), tap to flip it, and on a desktop it leans toward the pointer.
// Front and back are the same canvases as the share pictures (abs-card.js);
// the foil is a live layer between the front's background and its art, and it
// slides as the card turns, so the rainbow moves the way real foil does.
import './card-styles.js';
import { cardAssets, cardFaces, frontLayers, renderSide, release, TIER_COLOURS } from './abs-card.js';
import { sfx } from './sfx.js';

const FOIL = { s: 0.75, a: 0.62, b: 0.55, c: 0.5, d: 0.46, f: 0.42, h: 0.42 };
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let viewer = null;

function build() {
    const dialog = document.createElement('dialog');
    dialog.className = 'card-viewer';
    dialog.setAttribute('aria-label', 'Animal card');
    dialog.innerHTML = `
        <div class="cv-head">
            <span class="cv-title"><b data-cv-name></b><small data-cv-meta></small></span>
            <button type="button" class="hud-btn" data-cv-close aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        </div>
        <div class="cv-stage" data-cv-stage>
            <div class="cv-float">
                <div class="cv-card" data-cv-card role="button" aria-roledescription="card" tabindex="0">
                    <div class="cv-face cv-front">
                        <span class="cv-layer" data-cv-under></span>
                        <span class="cv-holo"></span><span class="cv-holo"></span>
                        <span class="cv-layer" data-cv-over></span>
                        <span class="cv-glare"></span>
                    </div>
                    <div class="cv-face cv-back">
                        <span class="cv-layer" data-cv-back></span>
                        <span class="cv-glare"></span>
                    </div>
                    <i class="cv-edge cv-edge-l"></i><i class="cv-edge cv-edge-r"></i>
                </div>
            </div>
            <span class="cv-floor"></span>
            <span class="cv-wait" data-cv-wait><span data-cv-wait-text>Printing the card…</span><button type="button" class="btn" data-cv-retry hidden>Try again</button></span>
        </div>
        <p class="cv-hint">Drag to turn it · tap to flip</p>
        <div class="cv-actions">
            <button type="button" class="btn" data-cv-flip><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18.5 3v4h-4M5.5 21v-4h4"/></svg>Flip</button>
            <button type="button" class="btn btn-gold" data-cv-share><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="6" cy="12" r="2.6"/><circle cx="17.5" cy="6" r="2.6"/><circle cx="17.5" cy="18" r="2.6"/><path d="M8.3 10.8l7-3.6M8.3 13.2l7 3.6"/></svg>Share card</button>
        </div>`;
    document.body.appendChild(dialog);
    const $ = (selector) => dialog.querySelector(selector);
    const state = {
        dialog,
        card: $('[data-cv-card]'),
        stage: $('[data-cv-stage]'),
        ry: 0, rx: 0, vy: 0, target: 0,
        tiltX: 0, tiltY: 0, wantTiltX: 0, wantTiltY: 0,
        light: { x: 50, y: 30 },
        drag: null, frame: 0, onShare: null, open: false
    };
    $('[data-cv-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
        state.open = false;
        cancelAnimationFrame(state.frame);
        for (const slot of dialog.querySelectorAll('.cv-layer')) {
            release([...slot.querySelectorAll('canvas')]);
            slot.replaceChildren();
        }
        if (location.hash === '#card') history.replaceState(null, '', location.pathname + location.search);
    });
    $('[data-cv-flip]').addEventListener('click', () => flip(state));
    const retry = $('[data-cv-retry]');
    retry.addEventListener('pointerdown', (event) => event.stopPropagation());
    retry.addEventListener('click', () => state.retry?.());
    $('[data-cv-share]').addEventListener('click', () => state.onShare?.());
    state.card.addEventListener('keydown', (event) => {
        if (['ArrowLeft', 'ArrowRight', 'Enter', ' '].includes(event.key)) {
            event.preventDefault();
            flip(state, event.key === 'ArrowLeft' ? -1 : 1);
        }
    });
    wire(state);
    return state;
}

function flip(state, direction = 1) {
    state.target = Math.round(state.target / 180) * 180 + 180 * direction;
    state.vy = 0;
    sfx.flip();
    kick(state);
}

// ---------------------------------------------------------------- motion

function wire(state) {
    const { stage } = state;
    stage.addEventListener('pointerdown', (event) => {
        if (!event.isPrimary || event.button > 0) return;
        state.drag = { id: event.pointerId, x: event.clientX, y: event.clientY, ry: state.ry, rx: state.rx, moved: 0, t: performance.now(), lastX: event.clientX };
        stage.setPointerCapture(event.pointerId);
        state.vy = 0;
        kick(state);
    });
    stage.addEventListener('pointermove', (event) => {
        const rect = state.card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        if (state.drag && event.pointerId === state.drag.id) {
            const dx = event.clientX - state.drag.x;
            const dy = event.clientY - state.drag.y;
            state.drag.moved = Math.max(state.drag.moved, Math.hypot(dx, dy));
            const now = performance.now();
            const dt = Math.max(1, now - state.drag.t);
            state.vy = Math.max(-14, Math.min(14, ((event.clientX - state.drag.lastX) / dt) * 16 * 0.55));
            state.drag.t = now;
            state.drag.lastX = event.clientX;
            state.ry = state.drag.ry + dx * 0.55;
            state.rx = Math.max(-28, Math.min(28, state.drag.rx - dy * 0.3));
            state.target = state.ry;
        } else if (event.pointerType === 'mouse') {
            // lean toward the pointer
            state.wantTiltY = Math.max(-1, Math.min(1, px * 2 - 1)) * 12;
            state.wantTiltX = Math.max(-1, Math.min(1, 1 - py * 2)) * 9;
        }
        state.light = { x: Math.max(0, Math.min(100, px * 100)), y: Math.max(0, Math.min(100, py * 100)) };
        kick(state);
    });
    const release = (event) => {
        if (!state.drag || event.pointerId !== state.drag.id) return;
        const { moved } = state.drag;
        state.drag = null;
        if (moved < 6) { flip(state); return; }
        // carry the spin a little, then settle on the nearest side
        const carry = reduced() ? 0 : state.vy * 9;
        state.target = Math.round((state.ry + carry) / 180) * 180;
        if (Math.abs(state.target - state.ry) > 20) sfx.flip();
        kick(state);
    };
    stage.addEventListener('pointerup', release);
    stage.addEventListener('pointercancel', release);
    stage.addEventListener('pointerleave', (event) => {
        if (event.pointerType !== 'mouse' || state.drag) return;
        state.wantTiltX = 0;
        state.wantTiltY = 0;
        kick(state);
    });
}

function kick(state) {
    if (!state.open) return;
    cancelAnimationFrame(state.frame);
    state.frame = requestAnimationFrame(() => step(state));
}

function step(state) {
    let moving = false;
    if (!state.drag) {
        const pull = reduced() ? 1 : 0.16;
        const delta = state.target - state.ry;
        state.ry += delta * pull;
        state.rx += (0 - state.rx) * pull;
        if (Math.abs(delta) > 0.05 || Math.abs(state.rx) > 0.05) moving = true;
        else { state.ry = state.target; state.rx = 0; }
    } else moving = true;
    state.tiltX += (state.wantTiltX - state.tiltX) * 0.14;
    state.tiltY += (state.wantTiltY - state.tiltY) * 0.14;
    if (Math.abs(state.wantTiltX - state.tiltX) > 0.05 || Math.abs(state.wantTiltY - state.tiltY) > 0.05) moving = true;
    paint(state);
    if (moving) state.frame = requestAnimationFrame(() => step(state));
}

function paint(state) {
    const ry = state.ry + state.tiltY;
    const rx = state.rx + state.tiltX;
    const style = state.card.style;
    style.setProperty('--ry', `${ry.toFixed(2)}deg`);
    style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    // the light: as the card turns, the foil band and the glare sweep across it
    const turn = Math.sin((ry * Math.PI) / 180);
    const band = 50 - turn * 70 - rx * 1.2 + (state.light.x - 50) * 0.3;
    style.setProperty('--band', `${band.toFixed(1)}%`);
    style.setProperty('--hx', `${(-ry * 2.2 + state.light.x).toFixed(1)}px`);
    style.setProperty('--hy', `${(rx * 3 + state.light.y * 0.6).toFixed(1)}px`);
    style.setProperty('--gx', `${(state.light.x * 0.6 + 20 - turn * 40).toFixed(1)}%`);
    style.setProperty('--gy', `${(state.light.y * 0.6 + 10 - rx).toFixed(1)}%`);
    const side = Math.round(((ry % 360) + 360) % 360) > 90 && Math.round(((ry % 360) + 360) % 360) < 270 ? 'back' : 'front';
    if (state.side !== side) {
        state.side = side;
        state.card.setAttribute('aria-label', `${state.labels?.[side] || ''}. Press to flip.`);
    }
}

// ---------------------------------------------------------------- opening

// The three layers the viewer shows: the card files the build drew when the
// card has them (copies, decoded before they show), else drawn here.
async function print(card, state) {
    const faces = await cardFaces(card).catch(() => null);
    if (faces) {
        const copy = async (img) => {
            const clone = img.cloneNode();
            clone.alt = '';
            clone.draggable = false;
            await clone.decode().catch(() => {});
            return clone;
        };
        const [under, over, back] = await Promise.all([faces.base, faces.top, faces.back].map(copy));
        return { under, over, back };
    }
    const A = await cardAssets(card);
    const cssWidth = state.card.getBoundingClientRect().width || 400;
    const width = Math.min(1100, Math.round(cssWidth * Math.min(2.5, window.devicePixelRatio || 1)));
    const layers = frontLayers(card, A, width);
    return { ...layers, back: renderSide(card, A, 'back', width) };
}

// card: the card data (abs-card.js); onShare: what the Share button does.
export async function openCardViewer(card, { onShare } = {}) {
    viewer ||= build();
    const state = viewer;
    const { dialog } = state;
    state.onShare = onShare;
    state.labels = {
        front: `${card.name} card, front: power ${card.power}, ${card.tierLabel || card.tier.toUpperCase()} tier`,
        back: `${card.name} card, back: ${Object.entries(card.stats || {}).map(([key, value]) => `${key} ${value}`).join(', ')}`
    };
    const [colour, light] = TIER_COLOURS[card.tier] || TIER_COLOURS.f;
    dialog.style.setProperty('--tier', colour);
    dialog.style.setProperty('--tier-2', light);
    state.card.style.setProperty('--foil', FOIL[card.tier] ?? 0.45);
    dialog.querySelector('[data-cv-name]').textContent = card.name;
    dialog.querySelector('[data-cv-meta]').textContent = card.rank ? `Card ${card.rank} of ${card.total} · ${card.tierLabel} tier` : 'Special card';
    dialog.querySelector('[data-cv-share]').hidden = !onShare;
    const wait = dialog.querySelector('[data-cv-wait]');
    const waitText = dialog.querySelector('[data-cv-wait-text]');
    const retry = dialog.querySelector('[data-cv-retry]');
    wait.hidden = false;
    waitText.textContent = 'Printing the card…';
    retry.hidden = true;
    state.retry = () => openCardViewer(card, { onShare });
    state.card.classList.remove('is-ready');
    for (const slot of dialog.querySelectorAll('.cv-layer')) {
        release([...slot.querySelectorAll('canvas')]);
        slot.replaceChildren();
    }
    state.ry = -38;
    state.target = 0;
    state.rx = 8;
    state.side = null;
    state.open = true;
    const token = (state.token || 0) + 1;
    state.token = token;
    if (!dialog.open) dialog.showModal();
    state.card.focus({ preventScroll: true });

    let sides = null;
    try {
        sides = await Promise.race([print(card, state), new Promise((resolve) => { setTimeout(resolve, 20000, null); })]);
    } catch { sides = null; }
    if (!state.open || state.token !== token) {
        if (sides) release(Object.values(sides));
        return;
    }
    if (!sides) {
        waitText.textContent = 'The card would not print. Check your connection.';
        retry.hidden = false;
        return;
    }
    dialog.querySelector('[data-cv-under]').append(sides.under);
    dialog.querySelector('[data-cv-over]').append(sides.over);
    dialog.querySelector('[data-cv-back]').append(sides.back);
    wait.hidden = true;
    state.card.classList.add('is-ready');
    sfx.whoosh();
    kick(state);
}
