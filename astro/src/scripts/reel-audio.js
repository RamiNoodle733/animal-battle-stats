// Sound for the share videos (card-reel.js), synthesized with Web Audio like the site's sound
// effects (sfx.js): no files, and no music. There is no beat, bass, chord, note, chime or bell
// anywhere: only wind, whooshes, card flips, footsteps, punches, thunder and a roar, timed to the
// animation (the card landing, each flip, the six stat bars, the VS slam, the K.O.). Rendered
// offline into one buffer, then played into the recording.

const RATE = 44100;

// Noise and short falling thumps (the body of a punch or a footstep) written into one (offline) context.
function kit(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.85;
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -16;
    compressor.ratio.value = 4;
    master.connect(compressor).connect(ctx.destination);
    let noiseBuffer = null;
    const noiseData = () => {
        if (!noiseBuffer) {
            noiseBuffer = ctx.createBuffer(1, RATE * 3, RATE);
            const data = noiseBuffer.getChannelData(0);
            for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
        }
        return noiseBuffer;
    };
    const out = (pan) => {
        if (!pan || !ctx.createStereoPanner) return master;
        const panner = ctx.createStereoPanner();
        panner.pan.value = pan;
        panner.connect(master);
        return panner;
    };
    const envelope = (gain, at, { vol, attack, dur }) => {
        gain.gain.setValueAtTime(0.0001, at);
        gain.gain.exponentialRampToValueAtTime(vol, at + attack);
        gain.gain.exponentialRampToValueAtTime(0.0001, at + Math.max(dur, attack + 0.01));
    };
    const k = {
        master,
        // A falling sine over a fraction of a second: a thud, never a held note.
        thump({ at, from = 160, to = 50, dur = 0.16, vol = 0.4, pan = 0 }) {
            const osc = ctx.createOscillator();
            osc.frequency.setValueAtTime(from, at);
            osc.frequency.exponentialRampToValueAtTime(to, at + dur);
            const gain = ctx.createGain();
            envelope(gain, at, { vol, attack: 0.003, dur });
            osc.connect(gain).connect(out(pan));
            osc.start(at);
            osc.stop(at + dur + 0.05);
        },
        noise({ at, dur = 0.2, vol = 0.2, from = 800, to = null, q = 0.8, type = 'bandpass', attack = 0.006, pan = 0 }) {
            const source = ctx.createBufferSource();
            source.buffer = noiseData();
            const filter = ctx.createBiquadFilter();
            filter.type = type;
            filter.Q.value = q;
            filter.frequency.setValueAtTime(from, at);
            if (to) filter.frequency.exponentialRampToValueAtTime(to, at + dur);
            const gain = ctx.createGain();
            envelope(gain, at, { vol, attack, dur });
            source.connect(filter).connect(gain).connect(out(pan));
            source.start(at, Math.random() * 2);
            source.stop(at + dur + 0.05);
        }
    };
    // Gusts of wind from `from` to `to`: overlapping swells of low, slowly moving noise.
    k.wind = (from, to, vol = 0.07) => {
        for (let at = from; at < to; at += 1.1) {
            const dur = Math.min(2.4, to - at);
            if (dur < 0.3) break;
            const low = 260 + Math.random() * 260;
            k.noise({ at, dur, vol: vol * (0.7 + Math.random() * 0.6), from: low, to: low * (1.3 + Math.random() * 0.6), q: 0.6, type: 'lowpass', attack: dur * 0.45, pan: Math.random() * 0.8 - 0.4 });
        }
    };
    k.whoosh = (at, pan = 0, vol = 0.28) => k.noise({ at, dur: 0.38, vol, from: 380, to: 4200, q: 0.9, attack: 0.18, pan });
    // Air rushing in before a hit.
    k.rush = (at, dur, vol = 0.22) => k.noise({ at, dur, vol, from: 300, to: 5000, q: 1.1, attack: dur * 0.9 });
    k.flip = (at) => {
        k.noise({ at, dur: 0.12, vol: 0.22, from: 2600, to: 900, q: 1.2 });
        k.noise({ at: at + 0.07, dur: 0.02, vol: 0.12, from: 5000, type: 'highpass' });
    };
    // Sand or dust catching the light: tiny dry ticks.
    k.dust = (at, pan = 0) => {
        k.noise({ at, dur: 0.02, vol: 0.05, from: 7000, type: 'highpass', q: 0.5, pan });
        k.noise({ at: at + 0.05, dur: 0.015, vol: 0.03, from: 8000, type: 'highpass', q: 0.5, pan: -pan });
    };
    k.step = (at, vol = 0.5, pan = 0) => {
        k.thump({ at, from: 95, to: 42, dur: 0.18, vol, pan });
        k.noise({ at, dur: 0.12, vol: vol * 0.4, from: 380, type: 'lowpass', pan });
    };
    k.punch = (at, vol = 0.6, pan = 0) => {
        k.thump({ at, from: 170, to: 52, dur: 0.16, vol, pan });
        k.noise({ at, dur: 0.08, vol: vol * 0.5, from: 1700, type: 'lowpass', pan });
        k.noise({ at, dur: 0.015, vol: vol * 0.25, from: 4500, type: 'highpass', pan });
    };
    k.thunder = (at, vol = 0.45) => {
        k.noise({ at, dur: 0.25, vol: vol * 0.6, from: 2200, to: 400, type: 'lowpass' });
        k.noise({ at: at + 0.05, dur: 2.2, vol, from: 420, to: 70, type: 'lowpass', attack: 0.12 });
    };
    k.impact = (at, vol = 0.8) => {
        k.thump({ at, from: 120, to: 30, dur: 0.9, vol });
        k.noise({ at, dur: 0.7, vol: vol * 0.55, from: 1400, to: 90, type: 'lowpass' });
        k.noise({ at, dur: 0.9, vol: vol * 0.1, from: 5000, type: 'highpass', q: 0.4 }); // debris settling
    };
    // An animal roar: a swell of rough mid noise that drops away.
    k.roar = (at, vol = 0.3) => {
        k.noise({ at, dur: 1.1, vol, from: 380, to: 900, q: 1.4, attack: 0.25 });
        k.noise({ at, dur: 1.1, vol: vol * 0.5, from: 150, to: 260, q: 1, type: 'lowpass', attack: 0.25 });
    };
    // A gorilla beating its chest: hollow thumps in a quick run.
    k.chest = (at, count = 4, vol = 0.45) => {
        for (let index = 0; index < count; index += 1) {
            k.thump({ at: at + index * 0.11, from: 140, to: 75, dur: 0.1, vol: vol * (index % 2 ? 0.8 : 1), pan: index % 2 ? 0.25 : -0.25 });
            k.noise({ at: at + index * 0.11, dur: 0.06, vol: vol * 0.3, from: 450, type: 'lowpass' });
        }
    };
    return k;
}

async function render(duration, compose) {
    const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!Offline) return null;
    const ctx = new Offline(2, Math.ceil(RATE * duration), RATE);
    const k = kit(ctx);
    compose(k);
    // fade out over the last half second
    k.master.gain.setValueAtTime(0.85, Math.max(0, duration - 0.6));
    k.master.gain.linearRampToValueAtTime(0.0001, duration - 0.02);
    return ctx.startRendering();
}

// The card video (CARD_REEL, 8.4 s): rise in, foil, flip, stats fill, flip home, the call to action.
export function cardSounds(duration) {
    return render(duration, (k) => {
        k.wind(0, duration);
        k.rush(0.05, 0.95);
        k.whoosh(0.15, 0, 0.18);
        k.impact(1.0, 0.7);
        k.thunder(1.05, 0.25);
        for (let index = 0; index < 5; index += 1) k.dust(1.3 + index * 0.33, index % 2 ? 0.5 : -0.5);
        k.whoosh(3.05);
        k.flip(3.45);
        // six stat bars filling: footsteps coming closer
        for (let index = 0; index < 6; index += 1) k.step(4.05 + index * 0.2, 0.18 + index * 0.06, index % 2 ? 0.2 : -0.2);
        k.rush(4.0, 1.25, 0.06);
        k.whoosh(6.55);
        k.flip(6.95);
        k.impact(7.3, 0.85);
        k.chest(7.45, 4, 0.35);
    });
}

// The face-off video (FACEOFF_REEL, 7 s): the cards slide in, the VS slams, then the K.O. and a
// roar, two hits that cancel out for a draw, or a stamping wait for a challenge.
export function faceoffSounds(duration, result) {
    return render(duration, (k) => {
        k.wind(0, duration, 0.06);
        k.whoosh(0.05, -0.7);
        k.whoosh(0.2, 0.7);
        for (let index = 0; index < 4; index += 1) k.step(0.1 + index * 0.24, 0.3, index % 2 ? 0.6 : -0.6);
        k.rush(0.55, 0.72);
        k.impact(1.28, 0.95);
        k.thunder(1.32, 0.35);
        if (result === 'draw') {
            k.punch(3.25, 0.7, -0.5);
            k.punch(3.27, 0.7, 0.5);
            k.impact(3.3, 0.5);
            k.noise({ at: 3.4, dur: 1.2, vol: 0.08, from: 900, to: 300, type: 'lowpass', attack: 0.2 }); // dust settling
        } else if (result) {
            k.rush(2.6, 0.55, 0.14);
            k.punch(3.15, 0.7);
            k.impact(3.2, 0.7);
            k.roar(3.55, 0.3);
            k.chest(4.1, 5, 0.4);
        } else {
            // a challenge: the call to make
            k.rush(1.6, 0.6, 0.1);
            k.step(2.2, 0.45, -0.3);
            k.step(2.45, 0.45, 0.3);
            k.step(2.95, 0.35, -0.3);
            k.step(3.2, 0.35, 0.3);
        }
    });
}

// A live context for the recording. It has to start inside a tap on iPhones,
// so the share sheet calls this as the Video tab is tapped.
let live = null;
export function primeAudio() {
    try {
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) return null;
        live ||= new Context();
        if (live.state === 'suspended') live.resume().catch(() => {});
        return live;
    } catch {
        return null;
    }
}
export const liveAudio = () => live;
