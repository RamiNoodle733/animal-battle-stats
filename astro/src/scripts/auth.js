// Log in, sign up, forgot and reset password. The server sets the session
// cookie; this page only posts the form and sends the player back where they
// came from (?returnTo=, same-origin paths only).
import { toast } from './site.js';
import { sfx } from './sfx.js';

const root = document.querySelector('[data-auth]');
const mode = root.dataset.mode;
const form = root.querySelector('[data-form]');
const submit = root.querySelector('[data-submit]');
const note = root.querySelector('[data-note]');
const params = new URLSearchParams(location.search);

function safeReturn(value) {
    const raw = String(value || '').trim();
    if (!raw.startsWith('/') || raw.startsWith('//') || raw.includes('://') || /^\/(login|signup|forgot-password|reset-password)\b/.test(raw)) return '/';
    return raw;
}
const returnTo = safeReturn(params.get('returnTo'));

function show(message, error = false) {
    note.textContent = message;
    note.classList.toggle('error', error);
    note.hidden = !message;
}

// Carry ?returnTo across the log in / sign up tabs and into Google sign-in.
if (returnTo !== '/') {
    root.querySelectorAll('[data-keep-return]').forEach((link) => { link.href = `${link.getAttribute('href')}?returnTo=${encodeURIComponent(returnTo)}`; });
}
const google = root.querySelector('[data-google]');
if (google) {
    google.href = `/api/auth?action=google-start&returnTo=${encodeURIComponent(returnTo)}`;
    // Offer Google only once the server confirms it is configured.
    fetch('/api/auth?action=providers', { headers: { Accept: 'application/json' } })
        .then((response) => (response.ok ? response.json() : null))
        .then((body) => { if (body?.data?.google) root.querySelector('[data-google-row]').hidden = false; })
        .catch(() => {});
}

if (params.get('verified') === '1') show('Email verified. You can log in now.');
if (params.get('google_error')) show(params.get('message') || 'Google sign-in failed. Please try again.', true);
if (mode === 'reset' && (!params.get('email') || !params.get('token'))) {
    show('This reset link is incomplete. Request a new one from the forgot password page.', true);
}

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
    }
    if (mode === 'forgot' && !/^\S+@\S+\.\S+$/.test(values.email || '')) return invalid('email', 'Enter a valid email address.');
    if (mode === 'reset') {
        if ((values.password || '').length < 8) return invalid('password', 'Passwords need at least 8 characters.');
        if (values.password !== values.confirm) return invalid('confirm', 'The two passwords do not match.');
    }
    return true;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const values = fields();
    if (!validate(values)) return;
    submit.disabled = true;
    show('');
    let result;
    if (mode === 'login') result = await post('login', { login: values.login.trim(), password: values.password });
    else if (mode === 'signup') result = await post('signup', { username: values.username.trim(), email: values.email.trim(), password: values.password });
    else if (mode === 'forgot') result = await post('forgot-password', { email: values.email.trim() });
    else result = await post('reset-password', { email: params.get('email'), token: params.get('token'), password: values.password });
    submit.disabled = false;

    if (!result.ok) {
        show(result.error, true);
        sfx.error();
        return;
    }
    sfx.win();
    if (mode === 'login') {
        toast('Welcome back!');
        location.href = returnTo;
    } else if (mode === 'signup') {
        toast('Account created. Check your email to verify it.');
        setTimeout(() => { location.href = returnTo === '/' ? '/profile' : returnTo; }, 900);
    } else if (mode === 'forgot') {
        form.reset();
        show(result.data?.message || 'If an account matches that email, a reset link is on its way.');
    } else {
        form.reset();
        show('Password saved. Log in with your new password.');
        setTimeout(() => { location.href = '/login'; }, 1400);
    }
});
