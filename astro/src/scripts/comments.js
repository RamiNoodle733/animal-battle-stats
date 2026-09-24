// Comment thread for an animal (or a matchup), mounted into any container:
//   mountComments(element, { animalName }) or mountComments(element, { comparisonKey })
// Loads on first call, posts with the session cookie, replies one level deep.
import { escapeHtml, toast, loadAnimalIndex } from './site.js';
import { sfx } from './sfx.js';

function ago(value) {
    const seconds = Math.max(1, Math.round((Date.now() - new Date(value).getTime()) / 1000));
    for (const [size, label] of [[31536000, 'y'], [2592000, 'mo'], [86400, 'd'], [3600, 'h'], [60, 'm']]) {
        if (seconds >= size) return `${Math.floor(seconds / size)}${label} ago`;
    }
    return 'just now';
}

function headers(json = false) {
    const result = { Accept: 'application/json' };
    if (json) result['Content-Type'] = 'application/json';
    if (window.ABS_TOKEN) result.Authorization = `Bearer ${window.ABS_TOKEN}`;
    return result;
}

export function mountComments(root, target) {
    if (root.dataset.mounted) return;
    root.dataset.mounted = '1';
    const label = target.animalName ? `the ${target.animalName}` : 'this matchup';
    root.innerHTML = `
        <form class="cm-compose" data-cm-form>
            <label class="visually-hidden" for="cm-text">Comment</label>
            <textarea id="cm-text" rows="2" maxlength="1000" placeholder="What do you think about ${escapeHtml(label)}?" data-cm-text></textarea>
            <div class="cm-row"><span class="cm-hint" data-cm-hint>+10 XP for your first comment on each post</span><button class="btn btn-cyan btn-sm" type="submit">Post</button></div>
        </form>
        <div class="cm-list" data-cm-list aria-live="polite"><p class="cm-empty">Loading comments…</p></div>`;
    const list = root.querySelector('[data-cm-list]');
    const form = root.querySelector('[data-cm-form]');
    const text = root.querySelector('[data-cm-text]');
    let replyTo = null;
    const avatars = loadAnimalIndex().then((animals) => new Map(animals.map((animal) => [animal.n.toLowerCase(), animal.i])));

    async function item(comment, depth, icons) {
        const icon = comment.profileAnimal ? icons.get(comment.profileAnimal.toLowerCase()) : null;
        const replies = depth === 0 ? await Promise.all((comment.replies || []).map((reply) => item(reply, 1, icons))) : [];
        return `<article class="cm${depth ? ' cm-reply' : ''}" data-id="${escapeHtml(comment._id)}">
            <header>${icon ? `<img class="cm-av" src="${icon}" alt="" width="30" height="30" loading="lazy">` : '<span class="cm-av"></span>'}<b>${escapeHtml(comment.isAnonymous ? 'Anonymous' : comment.authorUsername)}</b><time>${ago(comment.createdAt)}</time></header>
            <p>${escapeHtml(comment.content)}</p>
            <footer>
                <button type="button" class="cm-vote${comment.userVote === 'up' ? ' on' : ''}" data-vote="upvote" aria-label="Upvote">▲</button>
                <span class="cm-score">${Number(comment.score) || 0}</span>
                <button type="button" class="cm-vote down${comment.userVote === 'down' ? ' on' : ''}" data-vote="downvote" aria-label="Downvote">▼</button>
                ${depth === 0 ? '<button type="button" class="cm-link" data-reply>Reply</button>' : ''}
            </footer>
            ${replies.join('')}
        </article>`;
    }

    async function load() {
        const query = target.animalName ? `animalName=${encodeURIComponent(target.animalName)}` : `comparison=${encodeURIComponent(target.comparisonKey)}`;
        try {
            const response = await fetch(`/api/comments?${query}&limit=50`, { credentials: 'same-origin', headers: headers() });
            if (!response.ok) throw new Error(String(response.status));
            const body = await response.json();
            const icons = await avatars;
            const items = await Promise.all((body.data || []).map((comment) => item(comment, 0, icons)));
            list.innerHTML = items.length ? items.join('') : `<p class="cm-empty">No comments yet. Start the debate about ${escapeHtml(label)}.</p>`;
        } catch {
            list.innerHTML = '<p class="cm-empty">Comments are unavailable right now.</p>';
        }
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!window.ABS_USER) { toast('Log in to comment'); setTimeout(() => { location.href = `/login?returnTo=${encodeURIComponent(location.pathname + location.hash)}`; }, 700); return; }
        const content = text.value.trim();
        if (!content) return;
        const body = replyTo ? { content, parentId: replyTo } : { content, ...(target.animalName ? { targetType: 'animal', animalName: target.animalName } : { targetType: 'comparison', comparisonKey: target.comparisonKey }) };
        const response = await fetch('/api/comments', { method: 'POST', credentials: 'same-origin', headers: headers(true), body: JSON.stringify(body) }).catch(() => null);
        const result = await response?.json().catch(() => ({}));
        if (!response?.ok || !result?.success) { sfx.error(); toast(result?.error || 'Could not post. Try again.'); return; }
        const reward = result.reward;
        sfx.coin();
        toast(reward?.awarded ? `Posted · +${reward.xpAdded} XP` : 'Posted');
        text.value = '';
        replyTo = null;
        text.placeholder = `What do you think about ${label}?`;
        load();
    });

    list.addEventListener('click', async (event) => {
        const comment = event.target.closest('.cm');
        if (!comment) return;
        if (event.target.closest('[data-reply]')) {
            replyTo = comment.dataset.id;
            text.placeholder = `Reply to ${comment.querySelector('b').textContent}…`;
            text.focus();
            return;
        }
        const vote = event.target.closest('[data-vote]');
        if (!vote) return;
        if (!window.ABS_USER) { toast('Log in to vote'); return; }
        const response = await fetch(`/api/comments?id=${encodeURIComponent(comment.dataset.id)}`, { method: 'PATCH', credentials: 'same-origin', headers: headers(true), body: JSON.stringify({ action: vote.dataset.vote }) }).catch(() => null);
        const result = await response?.json().catch(() => ({}));
        if (!response?.ok || !result?.success) { sfx.error(); return; }
        sfx.tick();
        const footer = vote.parentElement;
        footer.querySelector('.cm-score').textContent = result.score;
        footer.querySelectorAll('.cm-vote').forEach((button) => button.classList.toggle('on', result.userVote === (button.dataset.vote === 'upvote' ? 'up' : 'down')));
    });

    load();
}
