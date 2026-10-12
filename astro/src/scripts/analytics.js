// Product outcomes only: never send account names, emails, messages or tokens to GA.
const live = /(^|\.)animalbattlestats\.com$/.test(location.hostname) && !navigator.webdriver;
const pagePath = location.pathname.startsWith('/profile/') ? '/profile' : location.pathname;
export function measure(name, parameters = {}) {
    if (live) window.gtag?.('event', name, parameters);
}

document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href]');
    if (!link) return;
    let url;
    try { url = new URL(link.href); } catch { return; }
    const socials = { 'youtube.com': 'youtube', 'www.youtube.com': 'youtube', 'www.tiktok.com': 'tiktok', 'www.instagram.com': 'instagram', 'www.facebook.com': 'facebook', 'x.com': 'x', 'www.linkedin.com': 'linkedin', 'discord.gg': 'discord', 'www.reddit.com': 'reddit', 'github.com': 'github' };
    if (socials[url.hostname]) measure('social_click', { social_platform: socials[url.hostname], page_path: pagePath });
    if (url.hostname === 'www.roblox.com' && url.pathname.startsWith('/games/')) measure('roblox_play_click', { page_path: pagePath });
    if (url.origin === location.origin && url.pathname === '/roblox') measure('roblox_interest', { page_path: pagePath });
});

const params = new URLSearchParams(location.search);
if (['login', 'sign_up'].includes(params.get('auth_event')) && ['google', 'github', 'roblox'].includes(params.get('auth_method'))) {
    measure(params.get('auth_event'), { method: params.get('auth_method') });
    params.delete('auth_event'); params.delete('auth_method');
    history.replaceState(null, '', location.pathname + (params.size ? `?${params}` : '') + location.hash);
}
