// Log in, sign up, forgot and reset password. The server sets the session
// cookie; this page only posts the form and sends the player back where they
// came from (?returnTo=, same-origin paths only).
import { toast } from './site.js';
import { sfx } from './sfx.js';
import { measure } from './analytics.js';
import authReturn from '../../../lib/auth-return.js';

const root = document.querySelector('[data-auth]');
const mode = root.dataset.mode;
const form = root.querySelector('[data-form]');
const submit = root.querySelector('[data-submit]');
const note = root.querySelector('[data-note]');
const params = new URLSearchParams(location.search);

const returnTo = authReturn.safeReturnPath(params.get('returnTo'));

function show(message, error = false) {
    note.textContent = message;
    note.classList.toggle('error', error);
    note.hidden = !message;
}

// Carry ?returnTo across the log in / sign up tabs and into Roblox and Google sign-in.
if (returnTo !== '/') {
    root.querySelectorAll('[data-keep-return]').forEach((link) => { link.href = `${link.getAttribute('href')}?returnTo=${encodeURIComponent(returnTo)}`; });
}
// What the server has set up: Google and Roblox sign-in, and whether email goes out.
const providers = fetch('/api/auth?action=providers', { headers: { Accept: 'application/json' } })
    .then((response) => (response.ok ? response.json() : null))
    .then((body) => body?.data || null)
    .catch(() => null);
const providerRow = root.querySelector('[data-providers-row]');
if (providerRow) {
    const buttons = { google: root.querySelector('[data-google]'), roblox: root.querySelector('[data-roblox]'), github: root.querySelector('[data-github]') };
    Object.entries(buttons).forEach(([name, button]) => { button.href = `/api/auth?action=${name}-start&returnTo=${encodeURIComponent(returnTo)}`; });
    // Offer each provider only once the server confirms it is configured.
    providers.then((data) => {
        Object.entries(buttons).forEach(([name, button]) => { button.hidden = !data?.[name]; });
        providerRow.hidden = false;
        const unavailable = Object.keys(buttons).filter((name) => !data?.[name]).map((name) => ({ google: 'Google', roblox: 'Roblox', github: 'GitHub' })[name]);
        const anyAvailable = Object.keys(buttons).some((name) => data?.[name]);
        root.querySelector('[data-provider-status]').textContent = data ? (unavailable.length ? `${unavailable.join(', ')} sign-in is not available yet.${anyAvailable ? ' Choose another option above or use email and password.' : ' Use email and password.'}` : '') : 'Other sign-in options could not load. Email and password are available.';
        providerRow.querySelector('.or').hidden = !['google', 'roblox', 'github'].some((name) => data?.[name]);
    });
}

// Until the site sends email, no reset link can arrive: say so rather than promise one.
let emailOn = true;
providers.then((data) => {
    if (data?.email !== false) return;
    emailOn = false;
    if (mode !== 'forgot') return;
    submit.disabled = true;
    const discord = Object.assign(document.createElement('a'), { className: 'link', href: root.dataset.discord || '/about', textContent: 'Discord', target: '_blank', rel: 'noopener' });
    note.replaceChildren('Reset emails are not switched on yet. Message us on ', discord, ' and we will get you back in.');
    note.classList.remove('error');
    note.hidden = false;
});

if (params.get('verified') === '1') show('Email verified. You can log in now.');
if (params.get('google_error')) show(params.get('message') || 'Google sign-in failed. Please try again.', true);
if (params.get('roblox_error')) show(params.get('message') || 'Roblox sign-in failed. Please try again.', true);
if (params.get('github_error')) show(params.get('message') || 'GitHub sign-in failed. Please try again.', true);
root.querySelector('[data-show-password]')?.addEventListener('change', (event) => {
    ['password', 'confirm'].forEach((name) => { if (form.elements[name]) form.elements[name].type = event.target.checked ? 'text' : 'password'; });
});
if (mode === 'reset' && (!params.get('email') || !params.get('token'))) {
    show('This reset link is incomplete. Request a new one from the forgot password page.', true);
}
// The link's email and token are read above; keep them out of the address bar and history.
if (mode === 'reset' && location.search) history.replaceState(null, '', location.pathname);

// Already signed in: log in and sign up have nothing to do.
document.addEventListener('abs:user', () => {
    if (mode === 'login' || mode === 'signup') location.replace(returnTo === '/' ? '/profile' : returnTo);
});

async function post(action, body) {
    const response = await fetch(`/api/auth?action=${action}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body)
    }).catch(() => null);
    const data = await response?.json().catch(() => ({}));
    if (response?.status === 429) return { ok: false, error: 'Too many attempts. Wait a few minutes and try again.' };
    return { ok: Boolean(response?.ok && data?.success), error: data?.error || (response ? 'Something went wrong. Please try again.' : 'You appear to be offline.'), data };
}

function fields() {
    return Object.fromEntries(new FormData(form).entries());
}

function invalid(name, message) {
    const input = form.elements[name];
    input?.setAttribute('aria-invalid', 'true');
    input?.focus();
    show(message, true);
    sfx.error();
    return false;
}

function validate(values) {
    form.querySelectorAll('[aria-invalid]').forEach((input) => input.removeAttribute('aria-invalid'));
    if (mode === 'login') {
        if (!values.login?.trim()) return invalid('login', 'Enter your email or username.');
        if (!values.password) return invalid('password', 'Enter your password.');
    }
    if (mode === 'signup') {
        if (!/^[A-Za-z0-9_]{3,20}$/.test(values.username || '')) return invalid('username', 'Usernames are 3 to 20 letters, numbers or underscores.');
        if (!/^\S+@\S+\.\S+$/.test(values.email || '')) return invalid('email', 'Enter a valid email address.');
        if ((values.password || '').length < 8) return invalid('password', 'Passwords need at least 8 characters.');
        if (values.password !== values.confirm) return invalid('confirm', 'The two passwords do not match.');
    }
    if (mode === 'forgot' && !/^\S+@\S+\.\S+$/.test(values.email || '')) return invalid('email', 'Enter a valid email address.');
    if (mode === 'reset') {
        if ((values.password || '').length < 8) return invalid('password', 'Passwords need at least 8 characters.');
        if (values.password !== values.confirm) return invalid('confirm', 'The two passwords do not match.');
    }
    return true;
}

let submitting = false;
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting || submit.disabled) return;
    const values = fields();
    if (!validate(values)) return;
    submitting = true; submit.disabled = true; form.setAttribute('aria-busy', 'true');
    show('');
    let result;
    if (mode === 'login') result = await post('login', { login: values.login.trim(), password: values.password });
    else if (mode === 'signup') result = await post('signup', { username: values.username.trim(), email: values.email.trim(), password: values.password });
    else if (mode === 'forgot') result = await post('forgot-password', { email: values.email.trim() });
    else result = await post('reset-password', { email: params.get('email'), token: params.get('token'), password: values.password });
    submitting = false; submit.disabled = false; form.removeAttribute('aria-busy');

    if (!result.ok) {
        show(result.error, true);
        sfx.error();
        return;
    }
    sfx.win();
    if (mode === 'login') {
        toast('Welcome back!');
        measure('login', { method: 'password' });
        location.href = returnTo;
    } else if (mode === 'signup') {
        measure('sign_up', { method: 'password' });
        toast(emailOn ? 'Account created. Check your email to verify it.' : 'Account created.');
        setTimeout(() => { location.href = returnTo === '/' ? '/collection' : returnTo; }, 900);
    } else if (mode === 'forgot') {
        form.reset();
        show(result.data?.message || 'If an account matches that email, a reset link is on its way.');
    } else {
        form.reset();
        show('Password saved. Log in with your new password.');
        setTimeout(() => { location.href = '/login'; }, 1400);
    }
});
