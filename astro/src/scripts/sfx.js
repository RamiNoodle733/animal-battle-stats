// Sound effects, synthesized with Web Audio: no files, no music. Every sound is
// a short UI cue (hover tick, select, whoosh, impact...). Off switch persists
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

function tone({ freq = 440, type = 'sine', duration = 0.08, volume = 0.2, attack = 0.004, slideTo = null, delay = 0, detune = 0 }) {
    const ctx = audio();
    if (!ctx) return;
    const start = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    osc.detune.value = detune;
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), start + duration);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain).connect(master);
    osc.start(start);
    osc.stop(start + duration + 0.02);
}

function noise({ duration = 0.2, volume = 0.2, from = 800, to = null, q = 0.8, type = 'bandpass', delay = 0 }) {
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
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter).connect(gain).connect(master);
    source.start(start);
    source.stop(start + duration + 0.02);
}

let lastTick = 0;

export const sfx = {
    tick() {
        const now = performance.now();
        if (now - lastTick < 45) return;
        lastTick = now;
        tone({ freq: 2400, type: 'triangle', duration: 0.028, volume: 0.035 });
    },
    select() {
        tone({ freq: 520, type: 'square', duration: 0.06, volume: 0.07, slideTo: 880 });
        tone({ freq: 1320, type: 'triangle', duration: 0.07, volume: 0.05, delay: 0.035 });
    },
    back() { tone({ freq: 700, type: 'square', duration: 0.07, volume: 0.06, slideTo: 380 }); },
    tab() { tone({ freq: 1100, type: 'triangle', duration: 0.04, volume: 0.07 }); },
    whoosh() { noise({ duration: 0.32, volume: 0.22, from: 400, to: 4200, q: 0.9 }); },
    flip() { noise({ duration: 0.12, volume: 0.14, from: 2400, to: 900, q: 1.2 }); tone({ freq: 900, type: 'sine', duration: 0.05, volume: 0.05, delay: 0.06 }); },
    hit() {
        tone({ freq: 190, type: 'sine', duration: 0.16, volume: 0.35, slideTo: 60 });
        noise({ duration: 0.09, volume: 0.22, from: 1800, type: 'lowpass' });
    },
    crit() {
        tone({ freq: 150, type: 'sine', duration: 0.3, volume: 0.45, slideTo: 40 });
        noise({ duration: 0.18, volume: 0.3, from: 2600, to: 600, type: 'lowpass' });
        tone({ freq: 1760, type: 'triangle', duration: 0.12, volume: 0.08, delay: 0.02 });
    },
    impact() {
        tone({ freq: 110, type: 'sine', duration: 0.5, volume: 0.55, slideTo: 32 });
        noise({ duration: 0.35, volume: 0.35, from: 900, to: 120, type: 'lowpass' });
    },
    ko() {
        tone({ freq: 90, type: 'sawtooth', duration: 0.6, volume: 0.2, slideTo: 30 });
        noise({ duration: 0.5, volume: 0.3, from: 1200, to: 80, type: 'lowpass' });
    },
    win() {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, index) => tone({ freq, type: 'triangle', duration: 0.16, volume: 0.13, delay: index * 0.075 }));
        tone({ freq: 2093, type: 'sine', duration: 0.35, volume: 0.05, delay: 0.3 });
    },
    lose() { [440, 370, 311].forEach((freq, index) => tone({ freq, type: 'triangle', duration: 0.18, volume: 0.1, delay: index * 0.1 })); },
    coin() { tone({ freq: 1568, type: 'square', duration: 0.05, volume: 0.05 }); tone({ freq: 2093, type: 'square', duration: 0.12, volume: 0.05, delay: 0.05 }); },
    error() { tone({ freq: 140, type: 'square', duration: 0.16, volume: 0.08 }); },
    countdown() { tone({ freq: 880, type: 'square', duration: 0.09, volume: 0.06 }); },
    go() { tone({ freq: 1320, type: 'square', duration: 0.22, volume: 0.07 }); noise({ duration: 0.2, volume: 0.1, from: 3000, q: 0.6 }); }
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
