// The share sheet. An animal shares as its card (the front, or front and back
// together) or as a short video of the card; a matchup shares as the
// face-off (before the fight a challenge with the odds hidden, after it the
// result) or as a face-off video. Pictures are drawn and videos recorded in
// the browser (card-scenes.js, card-reel.js). Phones get the share sheet with
// the file attached; everyone can save the file or copy the link.
import './card-styles.js';
import { cardPicture, bothPicture, faceoffPicture } from './card-scenes.js';
import { cardReel, faceoffReel, record, videoType, CARD_REEL, FACEOFF_REEL } from './card-reel.js';

const ICONS = {
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 15h8"/></svg>',
    both: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="9" height="14" rx="1.5"/><rect x="12.5" y="5" width="9" height="14" rx="1.5"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z"/></svg>',
    versus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 4l9.5 9.5M20 4l-9.5 9.5M6.5 16.5L4 19M17.5 16.5L20 19"/></svg>'
};

let sheet = null;

function build() {
    const dialog = document.createElement('dialog');
    dialog.className = 'share-sheet';
    dialog.innerHTML = `
        <div class="ss-head"><b class="ss-title" data-ss-title>Share</b><button type="button" class="hud-btn" data-ss-close aria-label="Close"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
        <div class="ss-tabs" role="group" aria-label="Format" data-ss-tabs></div>
        <div class="ss-preview" data-ss-preview aria-live="polite">
            <img alt="" data-ss-img />
            <video muted loop playsinline autoplay data-ss-video></video>
            <span class="ss-wait" data-ss-wait>Drawing the card…</span>
            <span class="ss-rec" data-ss-rec hidden>Recording</span>
            <span class="ss-progress" data-ss-progress hidden><i></i></span>
        </div>
        <div class="ss-actions">
            <button type="button" class="btn btn-gold" data-ss-share>Share</button>
            <a class="btn" data-ss-save>Save</a>
            <button type="button" class="btn" data-ss-copy>Copy link</button>
        </div>
        <p class="ss-note" data-ss-note></p>`;
    document.body.appendChild(dialog);
    const $ = (selector) => dialog.querySelector(selector);
    const ui = {
        dialog,
        title: $('[data-ss-title]'),
        tabs: $('[data-ss-tabs]'),
        preview: $('[data-ss-preview]'),
        img: $('[data-ss-img]'),
        video: $('[data-ss-video]'),
        wait: $('[data-ss-wait]'),
        rec: $('[data-ss-rec]'),
        progress: $('[data-ss-progress]'),
        share: $('[data-ss-share]'),
        save: $('[data-ss-save]'),
        copy: $('[data-ss-copy]'),
        note: $('[data-ss-note]'),
        current: null
    };
    ui.video.muted = true;
    $('[data-ss-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
        ui.current?.abort?.abort();
        ui.video.pause();
        ui.state?.results.forEach((result) => URL.revokeObjectURL(result.url));
        ui.state = null;
    });
    return ui;
}

function track(method, config, format) {
    window.gtag?.('event', 'share', { method, content_type: config.contentType, item_id: config.name, format });
}

const slugify = (text) => String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// config: { title, name, url, text, contentType, formats: [{ id, label, icon, note, kind: 'image'|'video', make }] }
function open(config) {
    sheet ||= build();
    const ui = sheet;
    ui.state = { config, results: new Map() };
    ui.title.textContent = config.title;
    ui.tabs.replaceChildren(...config.formats.map((format) => {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = 'ss-tab';
        tab.dataset.format = format.id;
        tab.innerHTML = `${ICONS[format.icon] || ''}<span>${format.label}</span>`;
        tab.addEventListener('click', () => select(ui, format));
        return tab;
    }));
    ui.tabs.hidden = config.formats.length < 2;
    ui.copy.textContent = 'Copy link';
    ui.copy.onclick = async () => {
        try {
            await navigator.clipboard.writeText(`${config.text} ${config.url}`);
            ui.copy.textContent = 'Copied';
            setTimeout(() => { ui.copy.textContent = 'Copy link'; }, 1600);
            track('copy_link', config, ui.current?.format.id);
        } catch { window.prompt('Copy this link', config.url); }
    };
    if (!ui.dialog.open) ui.dialog.showModal();
    select(ui, config.formats[0]);
}

function busy(ui, on) {
    ui.share.classList.toggle('is-busy', on);
    ui.save.classList.toggle('is-busy', on);
    ui.share.setAttribute('aria-disabled', String(on));
    ui.save.setAttribute('aria-disabled', String(on));
}

async function select(ui, format) {
    const { state } = ui;
    if (!state) return;
    ui.current?.abort?.abort();
    const current = { format, abort: format.kind === 'video' ? new AbortController() : null };
    ui.current = current;
    for (const tab of ui.tabs.children) tab.setAttribute('aria-pressed', String(tab.dataset.format === format.id));
    ui.note.textContent = format.note;
    ui.preview.querySelector('canvas')?.remove();
    ui.img.removeAttribute('src');
    ui.video.pause();
    ui.video.removeAttribute('src');
    ui.rec.hidden = true;
    ui.progress.hidden = true;
    ui.wait.hidden = false;
    ui.wait.textContent = format.kind === 'video' ? 'Setting up the video…' : 'Drawing the card…';
    ui.save.textContent = format.kind === 'video' ? 'Save video' : 'Save image';
    busy(ui, true);
    const stale = () => ui.state !== state || ui.current !== current;

    let result = state.results.get(format.id);
    if (!result) {
        try {
            if (format.kind === 'image') {
                const blob = await format.make();
                if (!blob) throw new Error('No picture');
                result = { blob, ext: 'jpg' };
            } else {
                const reel = await format.make();
                if (stale()) { reel.dispose(); return; }
                ui.wait.hidden = true;
                ui.rec.hidden = false;
                ui.progress.hidden = false;
                ui.preview.append(reel.canvas);
                const bar = ui.progress.firstElementChild;
                try {
                    result = await record(reel.canvas, reel.draw, reel.duration, {
                        signal: current.abort.signal,
                        onFrame: (p) => { bar.style.setProperty('--p', p.toFixed(3)); }
                    });
                } finally {
                    reel.canvas.remove();
                    reel.dispose();
                }
            }
        } catch (error) {
            if (stale() || error?.name === 'AbortError') return;
            ui.preview.querySelector('canvas')?.remove();
            ui.rec.hidden = true;
            ui.progress.hidden = true;
            ui.wait.hidden = false;
            ui.wait.textContent = format.kind === 'video' ? 'This browser could not record the video. Try the picture instead.' : 'Could not draw the card.';
            return;
        }
        if (ui.state !== state) return;
        result.url = URL.createObjectURL(result.blob);
        state.results.set(format.id, result);
    }
    if (stale()) return;
    ui.rec.hidden = true;
    ui.progress.hidden = true;
    ui.wait.hidden = true;
    if (format.kind === 'video') {
        ui.video.src = result.url;
        ui.video.play().catch(() => {});
    } else ui.img.src = result.url;
    ui.img.alt = format.kind === 'image' ? `${state.config.name}: ${format.label.toLowerCase()}` : '';

    const fileName = `${slugify(state.config.name)}-${format.id}.${result.ext}`;
    const file = new File([result.blob], fileName, { type: result.blob.type });
    ui.save.href = result.url;
    ui.save.download = fileName;
    ui.save.onclick = () => track('save', state.config, format.id);
    const canFiles = Boolean(navigator.canShare?.({ files: [file] }));
    ui.share.hidden = !navigator.share;
    ui.share.onclick = async () => {
        const { config } = state;
        try {
            if (canFiles) await navigator.share({ files: [file], title: config.name, text: `${config.text} ${config.url}` });
            else await navigator.share({ title: config.name, text: config.text, url: config.url });
            track(canFiles ? `native_${format.kind}` : 'native_link', config, format.id);
        } catch { /* cancelled */ }
    };
    busy(ui, false);
}

const canVideo = () => Boolean(videoType());
const seconds = (n) => `${/^(8|11|18)/.test(String(n)) ? 'An' : 'A'} ${n}-second`;

// ---------------------------------------------------------------- an animal's card

// card: the card data (abs-card.js); url: the page to send people to.
export function shareAnimal(card, { url }) {
    const text = card.rank
        ? `${card.name}: #${card.rank} of ${card.total}, ${card.tierLabel} tier, power ${card.power}. See the card:`
        : `${card.name} on Animal Battle Stats. See the card:`;
    const formats = [
        { id: 'card', label: 'Card', icon: 'card', kind: 'image', note: 'The card, sized for Instagram, X and Discord. The link opens it in 3D.', make: () => cardPicture(card) },
        { id: 'front-back', label: 'Front + back', icon: 'both', kind: 'image', note: 'Both sides: the stats, abilities and signature move on the back.', make: () => bothPicture(card) }
    ];
    if (canVideo()) formats.push({ id: 'video', label: 'Video', icon: 'video', kind: 'video', note: `${seconds(Math.round(CARD_REEL))} clip for Reels, TikTok, Shorts and Stories: the card turns, flips and fills its stats.`, make: () => cardReel(card) });
    open({ title: 'Share the card', name: card.name, url, text, contentType: 'animal_card', formats });
}

// ---------------------------------------------------------------- a matchup

// data: { a, b (cards), na, nb, labels, odds (left side, 0..100, or null while hidden), result ('a'|'b'|'draw'|null), url, text, name }
export function shareMatchup(data) {
    const note = data.result === 'draw'
        ? 'The card shows the draw and the odds. The link opens this fight.'
        : data.result
            ? 'The card shows who won and the odds. The link opens this fight.'
            : 'The odds stay hidden, so your friends have to make their call first.';
    const formats = [
        { id: 'face-off', label: 'Face-off', icon: 'versus', kind: 'image', note, make: () => faceoffPicture(data) }
    ];
    if (canVideo()) formats.push({ id: 'video', label: 'Video', icon: 'video', kind: 'video', note: `${seconds(FACEOFF_REEL)} clip: the cards square up, the VS slams in${data.result === 'draw' ? ' and it ends dead even' : data.result ? ' and the loser gets knocked out' : ''}.`, make: () => faceoffReel(data) });
    open({ title: data.result ? 'Share the result' : 'Challenge your friends', name: data.name, url: data.url, text: data.text, contentType: 'matchup', formats });
}
