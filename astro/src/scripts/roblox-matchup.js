// PLAY THIS MATCHUP IN ROBLOX in the browser (components/RobloxMatchup.astro draws it): keeps a button's link and its
// "you fight as" right when the fight's animals change. The game's animal ids come in their own small file
// (data/roblox-matchups.json), loaded the first time a button needs them, so no page carries them up front.
import { matchupUrl } from '../lib/matchup-link.js';

let game = null;
function loadGame() {
    game ||= import('../../../data/roblox-matchups.json').then(({ default: data }) => ({ place: data.place, most: data.most, ids: new Set(data.ids) }));
    return game;
}

// Shows the button with `href` and the first animal's name, or hides it, keeping its room.
export function setRobloxButton(button, href, name) {
    if (!button) return;
    if (href) {
        button.href = href;
        button.classList.remove('is-off');
        button.removeAttribute('aria-hidden');
        button.removeAttribute('tabindex');
        const as = button.querySelector('[data-rbx-as]');
        if (as && name) as.textContent = name;
    } else {
        button.removeAttribute('href');
        button.classList.add('is-off');
        button.setAttribute('aria-hidden', 'true');
        button.setAttribute('tabindex', '-1');
    }
}

// The button for a fight between a and b (the animal index's entries: { s: slug, n: name }), or none for a fight the
// game cannot play (pass nulls: a crowd, the Human). The player fights as `a`.
export async function paintRobloxMatchup(button, a, b) {
    if (!button) return;
    const want = a && b ? `${a.s}~${b.s}` : '';
    if (button.dataset.pair === want) return;
    button.dataset.pair = want;
    if (!want) {
        setRobloxButton(button, null);
        return;
    }
    const data = await loadGame().catch(() => null);
    if (button.dataset.pair !== want) return; // the animals changed again while the ids loaded
    setRobloxButton(button, data ? matchupUrl(data, a.s, b.s) : null, a.n);
}
