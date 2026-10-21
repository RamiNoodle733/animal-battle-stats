import { escapeHtml } from './site.js';

// Only server-issued profile paths are links. Guests, deleted accounts and
// anonymous posts retain their labels without an inferred account identity.
export function playerLink(url, label, avatar = '') {
    const name = `<b>${escapeHtml(label || 'Player')}</b>`;
    return typeof url === 'string' && /^\/profile\/[^/?#]+$/.test(url)
        ? `<a class="player-link" href="${escapeHtml(url)}">${avatar}${name}</a>`
        : `${avatar}${name}`;
}
