// Sound effects, synthesized with Web Audio: no files and no music. No notes, chimes, bells,
// beeps or jingles either: every sound is noise or a falling thud, like things in the real world
// (a knock, a rustle, a whoosh, a punch, a stomp, a gorilla beating its chest). Off switch persists
// in localStorage; nothing plays until the first click/tap unlocks audio.

const STORAGE_KEY = 'abs-sfx';
let context = null;
let master = null;
let unlocked = false;
let enabled = true;
try { enabled = localStorage.getItem(STORAGE_KEY) !== 'off'; } catch { enabled = true; }

function audio() {
    if (!enabled || !unlocked) return null;
    if (!context) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return null;
        context = new AudioContextClass();
        master = context.createGain();
        master.gain.value = 0.32;
        const compressor = context.createDynamicsCompressor();
        master.connect(compressor);
        compressor.connect(context.destination);
    }
    if (context.state === 'suspended') context.resume();
    return context;
}

// A falling sine over a fraction of a second: the body of a knock, punch or footstep, never a held note.
function thump({ from = 160, to = 55, duration = 0.12, volume = 0.3, delay = 0 }) {
    const ctx = audio();
    if (!ctx) return;
    const start = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(from, start);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), start + duration);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain).connect(master);
    osc.start(start);
    osc.stop(start + duration + 0.02);
}

function noise({ duration = 0.2, volume = 0.2, from = 800, to = null, q = 0.8, type = 'bandpass', delay = 0, attack = 0.01 }) {
    const ctx = audio();
    if (!ctx) return;
    const start = ctx.currentTime + delay;
    const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.Q.value = q;
    filter.frequency.setValueAtTime(from, start);
    if (to) filter.frequency.exponentialRampToValueAtTime(to, start + duration);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + Math.min(attack, duration * 0.9));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter).connect(gain).connect(master);
    source.start(start);
    source.stop(start + duration + 0.02);
}

let lastTick = 0;

export const sfx = {
    // hover: a tiny dry click, like a twig
    tick() {
        const now = performance.now();
        if (now - lastTick < 45) return;
        lastTick = now;
        noise({ duration: 0.012, volume: 0.05, from: 5000, type: 'highpass', q: 0.7, attack: 0.002 });
    },
    // a knock on wood
    select() {
        thump({ from: 190, to: 95, duration: 0.07, volume: 0.22 });
        noise({ duration: 0.035, volume: 0.1, from: 1300, q: 1.2, attack: 0.002 });
    },
    // a soft swish away
    back() { noise({ duration: 0.16, volume: 0.12, from: 2800, to: 600, q: 0.9, attack: 0.02 }); },
    // a leaf rustle
    tab() {
        noise({ duration: 0.05, volume: 0.08, from: 3400, q: 1.5, attack: 0.004 });
        noise({ duration: 0.04, volume: 0.05, from: 2600, q: 1.5, delay: 0.03, attack: 0.004 });
    },
    whoosh() { noise({ duration: 0.32, volume: 0.22, from: 400, to: 4200, q: 0.9 }); },
    // a card flipping over
    flip() {
        noise({ duration: 0.12, volume: 0.14, from: 2400, to: 900, q: 1.2 });
        noise({ duration: 0.02, volume: 0.07, from: 5000, type: 'highpass', delay: 0.06, attack: 0.002 });
    },
    // a punch landing
    hit() {
        thump({ from: 170, to: 55, duration: 0.15, volume: 0.36 });
        noise({ duration: 0.08, volume: 0.22, from: 1700, type: 'lowpass' });
        noise({ duration: 0.015, volume: 0.1, from: 4500, type: 'highpass', attack: 0.002 });
    },
    // a heavy punch
    crit() {
        thump({ from: 150, to: 40, duration: 0.3, volume: 0.46 });
        noise({ duration: 0.18, volume: 0.3, from: 2600, to: 600, type: 'lowpass' });
        noise({ duration: 0.02, volume: 0.14, from: 4000, type: 'highpass', attack: 0.002 });
    },
    impact() {
        thump({ from: 110, to: 32, duration: 0.5, volume: 0.55 });
        noise({ duration: 0.35, volume: 0.35, from: 900, to: 120, type: 'lowpass' });
    },
    // a knockout: a deep thud and the ground rumbling
    ko() {
        thump({ from: 100, to: 28, duration: 0.6, volume: 0.5 });
        noise({ duration: 0.5, volume: 0.3, from: 1200, to: 80, type: 'lowpass' });
        noise({ duration: 1.1, volume: 0.12, from: 260, to: 60, type: 'lowpass', delay: 0.08, attack: 0.1 });
    },
    // a win: a gorilla beating its chest
    win() {
        [0, 0.11, 0.22, 0.33].forEach((delay, index) => {
            thump({ from: 140, to: 75, duration: 0.1, volume: index % 2 ? 0.3 : 0.38, delay });
            noise({ duration: 0.06, volume: 0.12, from: 450, type: 'lowpass', delay });
        });
    },
    // a loss: the air going out, then a fall into the dirt
    lose() {
        noise({ duration: 0.45, volume: 0.14, from: 1600, to: 250, q: 0.9, attack: 0.04 });
        thump({ from: 90, to: 45, duration: 0.18, volume: 0.3, delay: 0.36 });
        noise({ duration: 0.2, volume: 0.1, from: 500, type: 'lowpass', delay: 0.36 });
    },
    // BattlePoints: pebbles knocking together
    coin() {
        [0, 0.06, 0.11].forEach((delay, index) => noise({ duration: 0.025, volume: index === 2 ? 0.06 : 0.1, from: 2600, q: 2, delay, attack: 0.002 }));
    },
    // something didn't work: a dull bump
    error() {
        thump({ from: 120, to: 70, duration: 0.1, volume: 0.28 });
        noise({ duration: 0.08, volume: 0.12, from: 500, type: 'lowpass' });
    },
    // a stomp for each count
    countdown() {
        thump({ from: 90, to: 45, duration: 0.16, volume: 0.42 });
        noise({ duration: 0.1, volume: 0.14, from: 300, type: 'lowpass' });
    },
    // go: a rush of air and a stomp
    go() {
        noise({ duration: 0.35, volume: 0.2, from: 500, to: 2600, q: 0.9, attack: 0.05 });
        thump({ from: 140, to: 40, duration: 0.3, volume: 0.45 });
    }
};

export function isSoundOn() { return enabled; }

export function setSound(on) {
    enabled = Boolean(on);
    try { localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off'); } catch { /* private mode */ }
    document.dispatchEvent(new CustomEvent('abs:sound', { detail: enabled }));
    if (enabled) sfx.select();
}

function unlock() {
    if (unlocked) return;
    unlocked = true;
    audio();
}
window.addEventListener('pointerdown', unlock, { once: true, capture: true });
window.addEventListener('keydown', unlock, { once: true, capture: true });

export function shake(element = document.querySelector('.screen'), strength = 1) {
    if (!element || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    element.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${-6 * strength}px, ${3 * strength}px)` },
        { transform: `translate(${5 * strength}px, ${-4 * strength}px)` },
        { transform: `translate(${-3 * strength}px, ${2 * strength}px)` },
        { transform: 'translate(0, 0)' }
    ], { duration: 320, easing: 'ease-out' });
}
