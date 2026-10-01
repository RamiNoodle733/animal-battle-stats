// Soundtracks for the share videos (card-reel.js), synthesized with Web Audio
// like the site's sound effects (sfx.js): no files. A beat and a bass line in
// A minor, and the hits that land with the animation: the card rising in, the
// foil's glints, each flip, the six stat bars filling, the VS slam, the K.O.
// Rendered offline into one buffer, then played into the recording.

const RATE = 44100;
const NOTE = { A1: 55, C2: 65.41, D2: 73.42, E2: 82.41, F1: 43.65, G1: 49, A3: 220, B3: 246.94, C4: 261.63, D4: 293.66, E4: 329.63, F3: 174.61, G3: 196, G4: 392, A4: 440, C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880, C6: 1046.5 };
// Am | F | C | G: bass root and the chord above it
const BARS = [[NOTE.A1, [NOTE.A3, NOTE.C4, NOTE.E4]], [NOTE.F1, [NOTE.F3, NOTE.A3, NOTE.C4]], [NOTE.C2, [NOTE.G3, NOTE.C4, NOTE.E4]], [NOTE.G1, [NOTE.G3, NOTE.B3, NOTE.D4]]];

// A small synth that writes into one (offline) context.
function synth(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.85;
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -16;
    compressor.ratio.value = 4;
    master.connect(compressor).connect(ctx.destination);
    let noiseBuffer = null;
    const noiseData = () => {
        if (!noiseBuffer) {
            noiseBuffer = ctx.createBuffer(1, RATE * 2, RATE);
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
    const envelope = (gain, at, { vol, attack = 0.004, dur, hold = 0 }) => {
        gain.gain.setValueAtTime(0.0001, at);
        gain.gain.exponentialRampToValueAtTime(vol, at + attack);
        if (hold) gain.gain.setValueAtTime(vol, at + attack + hold);
        gain.gain.exponentialRampToValueAtTime(0.0001, at + Math.max(dur, attack + hold + 0.01));
    };
    const s = {
        master,
        tone({ at, freq, type = 'sine', dur = 0.2, vol = 0.2, attack = 0.004, hold = 0, slideTo = null, detune = 0, pan = 0, lowpass = null }) {
            const osc = ctx.createOscillator();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, at);
            osc.detune.value = detune;
            if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), at + dur);
            const gain = ctx.createGain();
            envelope(gain, at, { vol, attack, dur, hold });
            let node = osc;
            if (lowpass) {
                const filter = ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.value = lowpass;
                node = osc.connect(filter);
            }
            node.connect(gain).connect(out(pan));
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
            source.start(at, Math.random());
            source.stop(at + dur + 0.05);
        }
    };
    // the kit
    s.kick = (at, vol = 0.9) => {
        s.tone({ at, freq: 150, slideTo: 42, dur: 0.38, vol });
        s.noise({ at, dur: 0.02, vol: vol * 0.25, from: 4000, type: 'highpass' });
    };
    s.snare = (at, vol = 0.32) => {
        s.noise({ at, dur: 0.2, vol, from: 1900, q: 0.7 });
        s.tone({ at, freq: 210, slideTo: 150, dur: 0.1, vol: vol * 0.6, type: 'triangle' });
    };
    s.hat = (at, vol = 0.08, open = false) => s.noise({ at, dur: open ? 0.16 : 0.045, vol, from: 8000, type: 'highpass', q: 0.5 });
    s.bass = (at, freq, dur, vol = 0.32) => {
        s.tone({ at, freq, type: 'sawtooth', dur, vol, attack: 0.01, hold: dur * 0.5, lowpass: 380 });
        s.tone({ at, freq: freq / 2, type: 'sine', dur, vol: vol * 0.9, attack: 0.01, hold: dur * 0.5 });
    };
    s.pad = (at, freqs, dur, vol = 0.045) => {
        for (const freq of freqs) {
            s.tone({ at, freq, type: 'sawtooth', dur, vol, attack: 0.25, hold: dur * 0.55, detune: -7, lowpass: 1400, pan: -0.3 });
            s.tone({ at, freq, type: 'sawtooth', dur, vol, attack: 0.25, hold: dur * 0.55, detune: 7, lowpass: 1400, pan: 0.3 });
        }
    };
    // the hits
    s.riser = (at, dur, vol = 0.22) => {
        s.noise({ at, dur, vol, from: 300, to: 6500, q: 1.1, attack: dur * 0.9 });
        s.tone({ at, freq: 180, slideTo: 1100, dur, vol: vol * 0.25, type: 'sawtooth', attack: dur * 0.9, lowpass: 2400 });
    };
    s.impact = (at, vol = 0.8) => {
        s.tone({ at, freq: 120, slideTo: 30, dur: 0.9, vol });
        s.noise({ at, dur: 0.7, vol: vol * 0.55, from: 1400, to: 90, type: 'lowpass' });
        s.noise({ at, dur: 1.4, vol: vol * 0.12, from: 6000, type: 'highpass', q: 0.4 }); // the cymbal tail
    };
    s.whoosh = (at, pan = 0, vol = 0.28) => s.noise({ at, dur: 0.38, vol, from: 380, to: 4200, q: 0.9, attack: 0.18, pan });
    s.flip = (at) => {
        s.noise({ at, dur: 0.12, vol: 0.2, from: 2600, to: 900, q: 1.2 });
        s.tone({ at: at + 0.06, freq: 900, dur: 0.06, vol: 0.06 });
    };
    s.glint = (at, freq, pan = 0) => {
        s.tone({ at, freq, type: 'triangle', dur: 0.18, vol: 0.06, pan });
        s.tone({ at: at + 0.12, freq: freq * 2, type: 'sine', dur: 0.22, vol: 0.025, pan: -pan }); // a little echo
    };
    s.blip = (at, freq) => {
        s.tone({ at, freq, type: 'square', dur: 0.08, vol: 0.05, lowpass: 3200 });
        s.tone({ at, freq: freq * 2, type: 'triangle', dur: 0.1, vol: 0.04 });
    };
    s.bell = (at, freq = 1320, vol = 0.18) => {
        for (const [ratio, part] of [[1, 1], [2.76, 0.45], [5.4, 0.2]]) s.tone({ at, freq: freq * ratio, dur: 1.4, vol: vol * part });
    };
    s.fanfare = (at) => {
        [NOTE.C5, NOTE.E5, NOTE.G5, NOTE.C6].forEach((freq, index) => s.tone({ at: at + index * 0.09, freq, type: 'triangle', dur: index === 3 ? 0.7 : 0.2, vol: 0.13, hold: index === 3 ? 0.3 : 0 }));
        s.tone({ at: at + 0.36, freq: NOTE.C6 * 2, dur: 0.6, vol: 0.04 });
    };
    s.ko = (at) => {
        s.tone({ at, freq: 95, type: 'sawtooth', dur: 0.8, vol: 0.25, slideTo: 28, lowpass: 900 });
        s.noise({ at, dur: 0.6, vol: 0.4, from: 1500, to: 80, type: 'lowpass' });
        s.tone({ at, freq: 1760, type: 'triangle', dur: 0.16, vol: 0.08 });
    };
    // A groove from `from` to `to`: kick, snare, hats, bass and the chords.
    s.groove = (from, to, bpm, { drums = true, pads = true, startBar = 0 } = {}) => {
        const beat = 60 / bpm;
        for (let index = 0; from + index * beat < to - 0.05; index += 1) {
            const at = from + index * beat;
            const inBar = index % 4;
            const [root, chord] = BARS[(Math.floor(index / 4) + startBar) % BARS.length];
            if (drums) {
                if (inBar === 0 || inBar === 2) s.kick(at);
                if (inBar === 1 || inBar === 3) s.snare(at);
                s.hat(at + beat / 2, 0.07);
                if (inBar === 3) s.hat(at + beat * 0.75, 0.05);
            }
            if (inBar === 0) {
                const length = Math.min(4 * beat, to - at);
                s.bass(at, root, beat * 0.9);
                s.bass(at + beat * 1.5, root, beat * 0.45, 0.22);
                s.bass(at + beat * 2, root, beat * 0.9);
                s.bass(at + beat * 3.5, root * 1.5, beat * 0.45, 0.2);
                if (pads) s.pad(at, chord, length);
            }
        }
    };
    return s;
}

async function render(duration, compose) {
    const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!Offline) return null;
    const ctx = new Offline(2, Math.ceil(RATE * duration), RATE);
    const s = synth(ctx);
    compose(s);
    // fade out over the last half second
    s.master.gain.setValueAtTime(0.85, Math.max(0, duration - 0.6));
    s.master.gain.linearRampToValueAtTime(0.0001, duration - 0.02);
    return ctx.startRendering();
}

// The card video (CARD_REEL, 8.4 s): rise in, foil, flip, stats fill, flip home, the call to action.
export function cardSoundtrack(duration) {
    return render(duration, (s) => {
        s.riser(0.05, 0.95);
        s.whoosh(0.15, 0, 0.18);
        s.impact(1.0, 0.7);
        s.groove(1.0, duration - 0.5, 112);
        [NOTE.E5, NOTE.A5, NOTE.G5, NOTE.C6, NOTE.E5].forEach((freq, index) => s.glint(1.3 + index * 0.33, freq, index % 2 ? 0.5 : -0.5));
        s.whoosh(3.05);
        s.flip(3.45);
        // six stat bars filling
        [NOTE.C5, NOTE.D5, NOTE.E5, NOTE.G5, NOTE.A5, NOTE.C6].forEach((freq, index) => s.blip(4.05 + index * 0.2, freq));
        s.riser(4.0, 1.25, 0.08);
        s.whoosh(6.55);
        s.flip(6.95);
        s.impact(7.3, 0.85);
        s.pad(7.3, [NOTE.A3, NOTE.C4, NOTE.E4, NOTE.A4], 1.1, 0.06);
    });
}

// The face-off video (FACEOFF_REEL, 7 s): the cards slide in, the VS slams,
// then the K.O. and the fanfare, a bell for a draw, or a tense wait for a challenge.
export function faceoffSoundtrack(duration, result) {
    return render(duration, (s) => {
        s.whoosh(0.05, -0.7);
        s.whoosh(0.2, 0.7);
        s.groove(0, 1.0, 120, { drums: false, pads: false });
        for (let at = 0; at < 1.0; at += 0.25) s.hat(at, 0.05);
        s.riser(0.55, 0.72);
        s.impact(1.28, 0.95);
        s.groove(1.3, duration - 0.4, 120, { startBar: 0 });
        if (result === 'draw') {
            s.bell(3.25);
            s.bell(3.55);
            s.bell(3.85, 1320, 0.14);
        } else if (result) {
            s.riser(2.6, 0.55, 0.14);
            s.ko(3.2);
            s.impact(3.2, 0.6);
            s.fanfare(3.65);
        } else {
            // a challenge: the call to make
            s.riser(1.6, 0.6, 0.1);
            s.tone({ at: 2.2, freq: NOTE.E5, type: 'triangle', dur: 0.5, vol: 0.09, hold: 0.2 });
            s.tone({ at: 2.45, freq: NOTE.A5, type: 'triangle', dur: 0.7, vol: 0.08, hold: 0.3 });
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
