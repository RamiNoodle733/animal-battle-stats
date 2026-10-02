/**
 * Site event notifications: every tracked event is stored in SiteActivity and
 * posted to Discord and, when configured, Slack. The owner's tracking settings
 * (lib/tracking-settings.js) leave some accounts out entirely and choose which
 * events are posted.
 */

const crypto = require('crypto');
const { waitUntil } = require('@vercel/functions');
const SITE_LOGO = 'https://animalbattlestats.com/images/icon-192.png';
const { logSiteActivity, sanitizeEventData, sanitizeReferrer } = require('./activity-logger');
const { connectToDatabase } = require('./mongodb');
const SiteActivity = require('./models/SiteActivity');
const { describePage, animalSlug, SITE } = require('./page-labels');
const { getTrackingSettings, isIgnoredAccount, postsToDiscord } = require('./tracking-settings');

const DISCORD_LEASE_MS = 45 * 1000;
const DISCORD_MAX_RETRY_DELAY_MS = 24 * 60 * 60 * 1000;

// Emoji constants for cross-platform compatibility
const EMOJI = {
    THUMBS_UP: '\u{1F44D}',
    THUMBS_DOWN: '\u{1F44E}',
    WASTEBASKET: '\u{1F5D1}\u{FE0F}',
    ARROWS_CYCLE: '\u{1F504}',
    SPEECH_BUBBLE: '\u{1F4AC}',
    CROSSED_SWORDS: '\u{2694}\u{FE0F}',
    PARTY: '\u{1F389}',
    UNLOCKED: '\u{1F513}',
    LOCKED: '\u{1F512}',
    EYES: '\u{1F440}',
    WAVE: '\u{1F44B}',
    REPLY: '\u{21A9}\u{FE0F}',
    GLOBE: '\u{1F310}',
    TROPHY: '\u{1F3C6}',
    CHAT: '\u{1F4AC}',
    EXIT: '\u{1F6AA}',
    STAR: '\u{2B50}',
    SPARKLES: '\u{2728}',
    DESKTOP: '\u{1F5A5}\u{FE0F}',
    MOBILE: '\u{1F4F1}',
    LINK: '\u{1F517}',
    CLOCK: '\u{1F550}'
};

/**
 * Parse user agent to get device/browser info
 */
function parseUserAgent(ua) {
    if (!ua) return { device: 'Unknown', browser: 'Unknown', os: 'Unknown' };
    
    // Detect device type
    let device = 'Desktop';
    if (/Mobile|Android|iPhone|iPad|iPod/i.test(ua)) {
        device = /iPad/i.test(ua) ? 'Tablet' : 'Mobile';
    }
    
    // Detect browser
    let browser = 'Unknown';
    if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) browser = 'Chrome';
    else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
    else if (/Firefox/i.test(ua)) browser = 'Firefox';
    else if (/Edg/i.test(ua)) browser = 'Edge';
    else if (/Opera|OPR/i.test(ua)) browser = 'Opera';
    
    // Detect OS
    let os = 'Unknown';
    if (/Windows/i.test(ua)) os = 'Windows';
    else if (/Mac OS/i.test(ua)) os = 'macOS';
    else if (/Linux/i.test(ua)) os = 'Linux';
    else if (/Android/i.test(ua)) os = 'Android';
    else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
    
    return { device, browser, os };
}

/**
 * Extract location info from Vercel request headers
 */
function getLocationFromRequest(req) {
    if (!req || !req.headers) return null;
    
    const city = req.headers['x-vercel-ip-city'] || null;
    const country = req.headers['x-vercel-ip-country'] || null;
    const region = req.headers['x-vercel-ip-country-region'] || null;
    
    let decodedCity = null;
    if (city) {
        try {
            decodedCity = decodeURIComponent(city);
        } catch (_error) {
            decodedCity = city;
        }
    }
    
    if (!decodedCity && !country) return null;
    
    let locationStr = '';
    if (decodedCity) locationStr += decodedCity;
    if (region) locationStr += (locationStr ? ', ' : '') + region;
    if (country) locationStr += (locationStr ? ', ' : '') + country;
    
    return {
        city: decodedCity,
        region,
        country,
        formatted: locationStr || 'Unknown'
    };
}

/**
 * Extract detailed request info
 */
function getRequestDetails(req) {
    if (!req || !req.headers) return {};
    
    const ua = req.headers['user-agent'] || '';
    const parsed = parseUserAgent(ua);
    const referer = sanitizeReferrer(req.headers['referer'] || req.headers['referrer'] || null);
    return {
        device: parsed.device,
        browser: parsed.browser,
        os: parsed.os,
        referer
    };
}

/**
 * Delivery destinations. Every event is stored in SiteActivity first, then
 * posted to each configured destination with its own delivery record
 * (discordDelivery, slackDelivery), so a Slack outage never blocks Discord
 * and each side retries on its own schedule.
 *
 *   DISCORD_WEBHOOK_URL  Discord channel webhook
 *   SLACK_WEBHOOK_URL    Slack incoming webhook (https://hooks.slack.com/services/...)
 */
function getDiscordWebhookUrl() {
    const raw = String(process.env.DISCORD_WEBHOOK_URL || '').trim();
    if (!raw) return null;

    try {
        const url = new URL(raw);
        if (url.protocol !== 'https:') return null;
        url.searchParams.set('wait', 'true');
        return url.toString();
    } catch {
        return null;
    }
}

function getSlackWebhookUrl() {
    const raw = String(process.env.SLACK_WEBHOOK_URL || '').trim();
    if (!raw) return null;

    try {
        const url = new URL(raw);
        if (url.protocol !== 'https:' || url.hostname !== 'hooks.slack.com') return null;
        return url.toString();
    } catch {
        return null;
    }
}

function sanitizeDeliveryError(error) {
    return String(error?.message || error || 'Unknown notification delivery error')
        .replace(/https:\/\/discord(?:app)?\.com\/api\/webhooks\/[^\s]+/gi, '[redacted-webhook]')
        .replace(/https:\/\/hooks\.slack\.com\/[^\s]+/gi, '[redacted-webhook]')
        .slice(0, 500);
}

function getRetryDelayMs(attempts, retryAfterSeconds = null) {
    if (Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
        return Math.min(Math.ceil(retryAfterSeconds * 1000), DISCORD_MAX_RETRY_DELAY_MS);
    }

    const exponent = Math.max(0, Math.min(Number(attempts || 1) - 1, 10));
    return Math.min(30 * 1000 * (2 ** exponent), DISCORD_MAX_RETRY_DELAY_MS);
}

function activityToDiscordData(activity) {
    return sanitizeEventData(activity.eventType, {
        ...(activity.metadata || {}),
        username: activity.username,
        user: activity.username,
        // a short tag for a guest, so one visitor can be followed through the feed
        visitor: activity.visitorHash ? String(activity.visitorHash).slice(0, 6) : null,
        page: activity.page,
        location: {
            city: activity.city,
            region: activity.region,
            country: activity.country
        },
        device: activity.device,
        browser: activity.browser,
        os: activity.os,
        screenSize: activity.screenSize,
        language: activity.language
    });
}

// ---------------------------------------------------------------- Slack formatting

// Slack mrkdwn: escape control characters, turn Discord **bold** into *bold*
// and [links](https://...) into <https://...|links>.
function slackText(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.+?)\*\*/g, '*$1*')
        .replace(/\[([^\]\n]+)\]\((https:\/\/[^)\s]+)\)/g, '<$2|$1>');
}

/**
 * Converts a Discord embed into a Slack incoming-webhook payload: a colored
 * attachment (same side bar as the embed) holding Block Kit sections, with a
 * plain-text fallback for notifications. Respects Slack's limits: header 150
 * characters, 10 fields per section, 2,000 per field and 3,000 per text.
 */
function createSlackPayload(embed, eventId = null) {
    const title = String(embed.title || 'Animal Battle Stats event');
    const blocks = [{ type: 'header', text: { type: 'plain_text', text: title.slice(0, 150), emoji: true } }];
    if (embed.url) blocks.push({ type: 'section', text: { type: 'mrkdwn', text: `<${embed.url}|Open the page>` } });
    let inline = [];
    const flush = () => {
        for (let start = 0; start < inline.length; start += 10) {
            blocks.push({ type: 'section', fields: inline.slice(start, start + 10) });
        }
        inline = [];
    };
    for (const field of embed.fields || []) {
        const text = `*${slackText(field.name)}*\n${slackText(field.value)}`;
        if (field.inline) {
            inline.push({ type: 'mrkdwn', text: text.slice(0, 2000) });
        } else {
            flush();
            blocks.push({ type: 'section', text: { type: 'mrkdwn', text: text.slice(0, 3000) } });
        }
    }
    flush();
    if (embed.description) {
        blocks.push({ type: 'section', text: { type: 'mrkdwn', text: slackText(embed.description).slice(0, 3000) } });
    }
    const when = embed.timestamp ? new Date(embed.timestamp) : new Date();
    const unix = Math.floor(when.getTime() / 1000);
    blocks.push({
        type: 'context',
        elements: [{
            type: 'mrkdwn',
            text: `Animal Battle Stats · <!date^${unix}^{date_short_pretty} {time}|${when.toISOString()}>${eventId ? ` · event ${slackText(eventId)}` : ''}`
        }]
    });
    return {
        text: title,
        attachments: [{
            color: `#${Number(embed.color ?? 0x808080).toString(16).padStart(6, '0')}`,
            blocks
        }]
    };
}

// ---------------------------------------------------------------- delivery

async function postJson(url, payload, service) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        const retryAfter = Number(response.headers.get('retry-after'));
        const error = new Error(`${service} webhook returned HTTP ${response.status}`);
        error.retryAfterSeconds = Number.isFinite(retryAfter) ? retryAfter : null;
        throw error;
    }
    return response;
}

const DESTINATIONS = Object.freeze({
    discord: {
        field: 'discordDelivery',
        url: getDiscordWebhookUrl,
        async send(url, activity) {
            const embed = createEmbed(activity.eventType, activityToDiscordData(activity));
            embed.footer = { text: `Animal Battle Stats event ${activity.discordDelivery.eventId}` };
            const response = await postJson(url, {
                username: 'Animal Battle Stats',
                avatar_url: SITE_LOGO,
                embeds: [embed],
                allowed_mentions: { parse: [] }
            }, 'Discord');
            const body = await response.json().catch(() => ({}));
            return String(body?.id || '') || null;
        }
    },
    slack: {
        field: 'slackDelivery',
        url: getSlackWebhookUrl,
        async send(url, activity) {
            const embed = createEmbed(activity.eventType, activityToDiscordData(activity));
            await postJson(url, createSlackPayload(embed, activity.slackDelivery?.eventId), 'Slack');
            return null;
        }
    }
});

async function claimActivity(activityId, destination, { force = false } = {}) {
    const { field } = DESTINATIONS[destination];
    const now = new Date();
    const query = {
        _id: activityId,
        [`${field}.status`]: { $in: ['pending', 'failed'] },
        $or: [
            { [`${field}.leaseExpiresAt`]: null },
            { [`${field}.leaseExpiresAt`]: { $exists: false } },
            { [`${field}.leaseExpiresAt`]: { $lte: now } }
        ]
    };

    if (!force) {
        query.$and = [{
            $or: [
                { [`${field}.nextAttemptAt`]: null },
                { [`${field}.nextAttemptAt`]: { $exists: false } },
                { [`${field}.nextAttemptAt`]: { $lte: now } }
            ]
        }];
    }

    const leaseToken = crypto.randomUUID();
    const activity = await SiteActivity.findOneAndUpdate(
        query,
        {
            $set: {
                [`${field}.leaseToken`]: leaseToken,
                [`${field}.leaseExpiresAt`]: new Date(now.getTime() + DISCORD_LEASE_MS),
                [`${field}.lastAttemptAt`]: now
            },
            $inc: { [`${field}.attempts`]: 1 }
        },
        { returnDocument: 'after' }
    ).lean();

    return activity ? { activity, leaseToken } : null;
}

async function deliverActivity(activityId, destination, options = {}) {
    await connectToDatabase();
    const { field, url: resolveUrl, send } = DESTINATIONS[destination];
    const claim = await claimActivity(activityId, destination, options);
    if (!claim) return { success: false, skipped: true, reason: 'not-due-or-already-claimed' };

    const { activity, leaseToken } = claim;
    try {
        const url = resolveUrl();
        if (!url) throw new Error(`${destination === 'slack' ? 'Slack' : 'Discord'} webhook is not configured`);
        const messageId = await send(url, activity);
        await SiteActivity.updateOne(
            { _id: activity._id, [`${field}.leaseToken`]: leaseToken },
            {
                $set: {
                    [`${field}.status`]: 'sent',
                    [`${field}.messageId`]: messageId,
                    [`${field}.sentAt`]: new Date(),
                    [`${field}.nextAttemptAt`]: null,
                    [`${field}.lastError`]: null,
                    [`${field}.leaseToken`]: null,
                    [`${field}.leaseExpiresAt`]: null
                }
            }
        );
        return { success: true, messageId };
    } catch (error) {
        const delayMs = getRetryDelayMs(activity[field].attempts, error.retryAfterSeconds);
        await SiteActivity.updateOne(
            { _id: activity._id, [`${field}.leaseToken`]: leaseToken },
            {
                $set: {
                    [`${field}.status`]: 'failed',
                    [`${field}.nextAttemptAt`]: new Date(Date.now() + delayMs),
                    [`${field}.lastError`]: sanitizeDeliveryError(error),
                    [`${field}.leaseToken`]: null,
                    [`${field}.leaseExpiresAt`]: null
                }
            }
        );

        console.error(`${destination} notification failed:`, sanitizeDeliveryError(error));
        return { success: false, error: sanitizeDeliveryError(error) };
    }
}

function deliverDiscordActivity(activityId, options = {}) {
    return deliverActivity(activityId, 'discord', options);
}

async function retryDestination(destination, { limit, forceIds }) {
    const { field } = DESTINATIONS[destination];
    const now = new Date();
    const query = forceIds.length
        ? { _id: { $in: forceIds }, [`${field}.status`]: { $in: ['pending', 'failed'] } }
        : {
            [`${field}.status`]: { $in: ['pending', 'failed'] },
            $or: [
                { [`${field}.nextAttemptAt`]: null },
                { [`${field}.nextAttemptAt`]: { $exists: false } },
                { [`${field}.nextAttemptAt`]: { $lte: now } }
            ]
        };
    const due = await SiteActivity.find(query)
        .sort({ [`${field}.nextAttemptAt`]: 1, occurredAt: 1 })
        .limit(limit)
        .select('_id')
        .lean();
    const results = [];
    for (const item of due) {
        results.push(await deliverActivity(item._id, destination, { force: forceIds.length > 0 }));
    }
    return {
        requested: due.length,
        sent: results.filter((result) => result.success).length,
        failed: results.filter((result) => !result.success && !result.skipped).length,
        skipped: results.filter((result) => result.skipped).length
    };
}

/**
 * Retries due (or explicitly listed) deliveries for every destination.
 * Totals are summed; byDestination has the per-destination counts.
 */
async function retryDueDiscordDeliveries({ limit = 10, forceIds = [] } = {}) {
    await connectToDatabase();
    const boundedLimit = Math.min(Math.max(Number(limit) || 10, 1), 50);
    const byDestination = {};
    for (const destination of Object.keys(DESTINATIONS)) {
        byDestination[destination] = await retryDestination(destination, { limit: boundedLimit, forceIds });
    }
    const total = (key) => Object.values(byDestination).reduce((sum, result) => sum + result[key], 0);
    return {
        requested: total('requested'),
        sent: total('sent'),
        failed: total('failed'),
        skipped: total('skipped'),
        byDestination
    };
}

function scheduleDelivery(activityId, destinations) {
    const work = (async () => {
        await Promise.all(destinations.map((destination) => deliverActivity(activityId, destination)));
        for (const destination of destinations) {
            await retryDestination(destination, { limit: 2, forceIds: [] });
        }
    })();

    try {
        waitUntil(work);
        return Promise.resolve();
    } catch {
        return work;
    }
}

// The signed-in account behind a request (lib/auth needs its secret, so it loads here).
function requestUser(req) {
    if (!req?.headers) return null;
    try {
        return require('./auth').getAuthUser(req);
    } catch {
        return null;
    }
}

async function notifyDiscord(eventType, data, req = null) {
    try {
        // Accounts the owner left out are not tracked at all.
        const settings = await getTrackingSettings();
        const account = requestUser(req);
        if (isIgnoredAccount(settings, { userId: account?.id, username: data?.username || data?.user || account?.username })) {
            return { success: true, inserted: false, skipped: true, reason: 'ignored-account' };
        }

        const location = req ? getLocationFromRequest(req) : (data.location || null);
        const requestDetails = req ? getRequestDetails(req) : {};
        const safeData = sanitizeEventData(eventType, { ...data, location, ...requestDetails });

        // Persist every tracked event so community analytics can stay cumulative.
        // Events the owner posts get a Discord delivery record (and a Slack one
        // once its webhook is configured); the rest are stored only.
        const post = postsToDiscord(settings, eventType, safeData);
        const discordEventId = post ? crypto.randomUUID() : null;
        const slack = post && Boolean(getSlackWebhookUrl());
        const activity = await logSiteActivity({
            eventType,
            data: safeData,
            req,
            source: 'live',
            discordEventId,
            slack
        });

        if (!activity?.inserted || !activity.id || !post) {
            return activity;
        }

        await scheduleDelivery(activity.id, slack ? ['discord', 'slack'] : ['discord']);
        return { ...activity, discordEventId };
    } catch (error) {
        console.error('Notification failed:', error.message);
        return { success: false, error: sanitizeDeliveryError(error) };
    }
}


// ---------------------------------------------------------------- the messages

const isGuest = (name) => !name || name === 'Anonymous';

// Who did it: the player, or a guest by a short tag of their keyed visitor hash
// (the same guest keeps the same tag, so a visit can be followed).
function who(data) {
    const name = data.username || data.user;
    if (!isGuest(name)) return name;
    return data.visitor ? `Guest ${data.visitor}` : 'Guest';
}
function whoLink(data) {
    const name = data.username || data.user;
    return isGuest(name) ? who(data) : `[${name}](${SITE}/profile/${encodeURIComponent(name)})`;
}
function animalLink(name) {
    const slug = animalSlug(name);
    return slug ? `[${name}](${SITE}/stats/${slug})` : (name || 'Unknown');
}
function matchupUrl(a, b) {
    const left = animalSlug(a);
    const right = animalSlug(b);
    return left && right ? `${SITE}/compare?a=${left}&b=${right}` : `${SITE}/compare`;
}
function since(iso) {
    const ms = Date.now() - new Date(iso).getTime();
    if (!Number.isFinite(ms) || ms < 0) return null;
    const minutes = Math.round(ms / 60000);
    if (minutes < 60) return `${Math.max(1, minutes)} min ago`;
    const hours = Math.round(minutes / 60);
    if (hours < 48) return `${hours} h ago`;
    const days = Math.round(hours / 24);
    return days < 60 ? `${days} days ago` : `${Math.round(days / 30)} months ago`;
}
// Text and addresses that go inside a Discord link: a page address comes from
// the visitor, so markdown in it must not make a link of its own.
const mdText = (text) => String(text ?? '').replace(/([\\[\]()*_~`|>])/g, '\\$1');
const mdUrl = (url) => String(url || '').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\s/g, '%20');
const mdLink = (text, url) => `[${mdText(text)}](${mdUrl(url)})`;

function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return null; }
}
function ordinal(n) {
    const teen = n % 100 >= 11 && n % 100 <= 13;
    return `${n}${teen ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] || 'th')}`;
}
const clip = (text, max) => (String(text).length > max ? `${String(text).slice(0, max - 1)}…` : String(text));

function addLocationField(fields, location) {
    if (location && location.formatted) {
        fields.push({ name: EMOJI.GLOBE + ' Location', value: location.formatted, inline: true });
    }
    return fields;
}

function addDeviceField(fields, data) {
    if (data.device || data.browser || data.os) {
        const deviceEmoji = data.device === 'Mobile' ? EMOJI.MOBILE : EMOJI.DESKTOP;
        fields.push({
            name: deviceEmoji + ' Device',
            value: `${data.browser || 'Unknown'} on ${data.os || 'Unknown'}${data.device ? ` (${data.device.toLowerCase()})` : ''}`,
            inline: true
        });
    }
    return fields;
}

function addPageField(fields, data) {
    if (data.page) {
        const page = describePage(data.page, data.search);
        fields.push({ name: EMOJI.LINK + ' Page', value: mdLink(clip(page.label, 200), page.url), inline: true });
    }
    return fields;
}

// "Home → Cassowary → African Lion vs Siberian Tiger", the middle cut when long.
function visitPath(path) {
    const labels = path.map((entry) => {
        const [page, search] = String(entry).split('?');
        return describePage(page, search ? `?${search}` : '').label;
    });
    let text = labels.join(' → ');
    if (text.length <= 1000) return text;
    const head = labels.slice(0, 2);
    let tail = labels.slice(2);
    while (tail.length && [...head, '…', ...tail].join(' → ').length > 1000) tail = tail.slice(1);
    text = [...head, `… ${labels.length - head.length - tail.length} more …`, ...tail].join(' → ');
    return clip(text, 1000);
}

// The small picture on a post: the battle card of the animal it is about (the
// page viewed, the animal voted on, the fight's first fighter), else the logo.
function cardThumb(slug) {
    return slug && slug !== 'human' && animalSlug(slug) === slug ? `${SITE}/images/cards/${slug}.webp` : null;
}
function thumbFor(eventType, data) {
    const page = String(data.page || '');
    const fromPage = () => {
        if (page.startsWith('/stats/')) return cardThumb(page.split('/')[2]);
        if (page.startsWith('/compare/')) {
            const [a, b] = page.split('/')[2].split('-vs-');
            return cardThumb(a) || cardThumb(b);
        }
        if (page === '/compare' && data.search) {
            const params = new URLSearchParams(data.search);
            return cardThumb(params.get('a')) || cardThumb(params.get('b'));
        }
        return null;
    };
    let thumb = null;
    if (eventType === 'site_visit' || eventType === 'site_leave') thumb = fromPage();
    else if (eventType === 'fight') thumb = cardThumb(animalSlug(data.animal1)) || cardThumb(animalSlug(data.animal2));
    else if (eventType.startsWith('vote')) {
        const call = String(data.animal || '').includes(' vs ');
        thumb = cardThumb(animalSlug(call ? data.voteType : data.animal));
    } else if (eventType.startsWith('comment')) thumb = cardThumb(animalSlug(data.target));
    return thumb || SITE_LOGO;
}

function createEmbed(eventType, data) {
    const timestamp = new Date().toISOString();
    const location = data.location;
    const user = who(data);

    // The animal's card when the event is about one, else the logo.
    const thumbnail = { url: thumbFor(eventType, data) };
    const profile = isGuest(data.username || data.user) ? undefined : `${SITE}/profile/${encodeURIComponent(data.username || data.user)}`;

    switch (eventType) {
        case 'vote': {
            // A fight call is stored as a vote on "A vs B" for the side picked.
            const call = String(data.animal || '').includes(' vs ');
            if (call) {
                const [a, b] = String(data.animal).split(' vs ');
                const fields = [
                    { name: 'Player', value: whoLink(data), inline: true },
                    { name: 'Picked', value: `**${data.voteType || 'Unknown'}**`, inline: true }
                ];
                addLocationField(fields, location);
                addDeviceField(fields, data);
                return { title: clip(`🎯 Fight call: ${data.animal}`, 256), url: matchupUrl(a, b), color: 0xf6b400, fields, timestamp, thumbnail };
            }
            const up = data.voteType === 'up';
            const voteEmoji = up ? EMOJI.THUMBS_UP : EMOJI.THUMBS_DOWN;
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'Animal', value: animalLink(data.animal), inline: true },
                { name: 'Vote', value: voteEmoji + (up ? ' Upvote' : ' Downvote'), inline: true }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${voteEmoji} ${up ? 'Upvote' : 'Downvote'}: ${data.animal || 'Unknown'}`, 256), url: animalSlug(data.animal) ? `${SITE}/stats/${animalSlug(data.animal)}` : undefined, color: up ? 0x00ff88 : 0xff3366, fields, timestamp, thumbnail };
        }

        case 'vote_removed': {
            const removedEmoji = data.oldVoteType === 'up' ? EMOJI.THUMBS_UP : EMOJI.THUMBS_DOWN;
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'Animal', value: animalLink(data.animal), inline: true },
                { name: 'Removed', value: removedEmoji + ' Was ' + (data.oldVoteType === 'up' ? 'Upvote' : 'Downvote'), inline: true }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.WASTEBASKET} Vote removed: ${data.animal || 'Unknown'}`, 256), color: 0x888888, fields, timestamp, thumbnail };
        }

        case 'vote_changed': {
            const oldEmoji = data.oldVoteType === 'up' ? EMOJI.THUMBS_UP : EMOJI.THUMBS_DOWN;
            const newEmoji = data.newVoteType === 'up' ? EMOJI.THUMBS_UP : EMOJI.THUMBS_DOWN;
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'Animal', value: animalLink(data.animal), inline: true },
                { name: 'Changed', value: oldEmoji + ' → ' + newEmoji, inline: true }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.ARROWS_CYCLE} Vote changed: ${data.animal || 'Unknown'}`, 256), color: 0xffcc00, fields, timestamp, thumbnail };
        }

        case 'comment': {
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'On', value: animalLink(data.target), inline: true },
                { name: 'Comment', value: (data.content || 'No content').substring(0, 500), inline: false }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.SPEECH_BUBBLE} ${user} commented on ${data.target || 'a page'}`, 256), color: 0x00d4ff, fields, timestamp, thumbnail };
        }

        case 'comment_reply': {
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'Replying To', value: data.replyTo || 'Unknown', inline: true },
                { name: 'On', value: animalLink(data.target), inline: true },
                { name: 'Reply', value: (data.content || 'No content').substring(0, 500), inline: false }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.REPLY} ${user} replied to ${data.replyTo || 'a comment'}`, 256), color: 0x00b4d8, fields, timestamp, thumbnail };
        }

        case 'comment_upvote':
        case 'comment_downvote': {
            const up = eventType === 'comment_upvote';
            const fields = [
                { name: 'By', value: whoLink(data), inline: true },
                { name: 'Comment Author', value: data.commentAuthor || 'Unknown', inline: true },
                { name: 'On', value: animalLink(data.target), inline: true }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${up ? EMOJI.THUMBS_UP : EMOJI.THUMBS_DOWN} Comment ${up ? 'upvoted' : 'downvoted'} on ${data.target || 'a page'}`, 256), color: up ? 0x00cc88 : 0xcc3366, fields, timestamp, thumbnail };
        }

        case 'comment_deleted': {
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'On', value: animalLink(data.target), inline: true },
                { name: 'Comment', value: (data.content || 'Unknown').substring(0, 200) + (data.content && data.content.length > 200 ? '...' : ''), inline: false }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.WASTEBASKET} ${user} deleted a comment`, 256), color: 0xff4444, fields, timestamp, thumbnail };
        }

        case 'fight': {
            const fields = [
                { name: 'Matchup', value: `${animalLink(data.animal1)} vs ${animalLink(data.animal2)}`, inline: false },
                { name: 'User', value: whoLink(data), inline: true }
            ];
            addPageField(fields, data);
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.CROSSED_SWORDS} Fight: ${data.animal1 || 'Unknown'} vs ${data.animal2 || 'Unknown'}`, 256), url: matchupUrl(data.animal1, data.animal2), color: 0xff6b00, fields, timestamp, thumbnail };
        }

        case 'signup': {
            const fields = [
                { name: 'Username', value: whoLink(data), inline: true }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            if (data.referrer) {
                fields.push({ name: EMOJI.LINK + ' Referrer', value: data.referrer.substring(0, 100), inline: true });
            }
            return { title: clip(`${EMOJI.PARTY} New player: ${data.username || 'Unknown'}`, 256), url: profile, color: 0x9966ff, fields, timestamp, thumbnail };
        }

        case 'login': {
            const fields = [
                { name: 'Username', value: whoLink(data), inline: true }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.UNLOCKED} ${data.username || 'Someone'} logged in`, 256), url: profile, color: 0x00cc66, fields, timestamp, thumbnail };
        }

        case 'site_visit': {
            const page = describePage(data.page || '/', data.search);
            const landing = !(Number(data.pages) > 1);
            const fields = [
                { name: '👤 Visitor', value: whoLink(data), inline: true },
                { name: '📄 Page', value: mdLink(page.kind, page.url), inline: true }
            ];
            if (!landing) {
                fields.push({ name: '🧭 Visit', value: `Page ${data.pages} of their visit`, inline: true });
            } else if (Number(data.visitNumber) > 1) {
                const last = data.lastVisitAt ? since(data.lastVisitAt) : null;
                fields.push({ name: '🧭 Visit', value: `Back for their ${ordinal(Number(data.visitNumber))} visit${last ? ` (last ${last})` : ''}`, inline: true });
            } else if (Number(data.visitNumber) === 1) {
                fields.push({ name: '🧭 Visit', value: 'First visit', inline: true });
            }
            addLocationField(fields, location);
            addDeviceField(fields, data);
            if (data.screenSize) {
                fields.push({ name: '📐 Screen', value: data.screenSize, inline: true });
            }
            if (data.language) {
                fields.push({ name: '🌐 Language', value: data.language, inline: true });
            }
            const external = data.referrer && data.referrer !== 'Direct' && !data.referrer.includes('animalbattlestats.com');
            if (external) {
                fields.push({ name: EMOJI.LINK + ' Came From', value: data.referrer.substring(0, 100), inline: false });
            }
            const host = external ? hostOf(data.referrer) : null;
            return {
                title: clip(`${landing ? '🛬' : EMOJI.EYES} ${page.label}`, 256),
                url: mdUrl(page.url),
                description: landing ? `**${user}** landed here${host ? ` from ${host}` : ''}` : `**${user}** · page ${data.pages} of their visit`,
                color: landing ? 0x22aaff : 0x4488ff,
                fields,
                timestamp,
                thumbnail
            };
        }

        case 'logout': {
            const fields = [
                { name: 'Username', value: whoLink(data), inline: true }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.LOCKED} ${data.username || 'Someone'} logged out`, 256), url: profile, color: 0xff9900, fields, timestamp, thumbnail };
        }

        case 'site_leave': {
            const page = data.page ? describePage(data.page, data.search) : null;
            const fields = [
                { name: '👤 Visitor', value: whoLink(data), inline: true }
            ];
            if (page) fields.push({ name: '🚪 Left From', value: mdLink(clip(page.label, 200), page.url), inline: true });
            if (data.pages) {
                fields.push({ name: '📄 Pages Viewed', value: String(data.pages), inline: true });
            }
            addLocationField(fields, location);
            addDeviceField(fields, data);
            if (Array.isArray(data.path) && data.path.length > 1) {
                fields.push({ name: '🧭 Their Visit', value: visitPath(data.path), inline: false });
            }
            return {
                title: data.duration ? `${EMOJI.WAVE} ${user} left after ${data.duration}` : `${EMOJI.WAVE} ${user} left the site`,
                url: page ? mdUrl(page.url) : undefined,
                color: 0x666666,
                fields,
                timestamp,
                thumbnail
            };
        }

        case 'chat_message':
        case 'chat_reply': {
            const reply = eventType === 'chat_reply';
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: reply ? 'Reply' : 'Message', value: (data.content || '').substring(0, 500) || 'Empty', inline: false }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${reply ? EMOJI.REPLY : EMOJI.CHAT} ${user} ${reply ? 'replied' : 'posted'} in the arena`, 256), url: `${SITE}/community`, color: 0x5865F2, fields, timestamp, thumbnail };
        }

        case 'tournament_complete': {
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'Bracket Size', value: (data.bracketSize || 0) + ' animals', inline: true },
                { name: 'Total Matches', value: String(data.totalMatches || 0), inline: true },
                { name: EMOJI.TROPHY + ' Champion', value: '**' + (data.champion || 'Unknown') + '**', inline: true },
                { name: '🥈 2nd Place', value: data.runnerUp || 'N/A', inline: true },
                { name: '🥉 3rd/4th', value: data.thirdFourth || 'N/A', inline: true }
            ];
            if (data.matchHistory && data.matchHistory.length > 0) {
                const historyStr = data.matchHistory.slice(-8).map(m =>
                    `✓ ${m.winner} beat ${m.loser}`
                ).join('\n');
                fields.push({ name: 'Final Matches', value: historyStr.substring(0, 1000), inline: false });
            }
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.TROPHY} Tournament won by ${data.champion || 'Unknown'}`, 256), url: `${SITE}/tournament`, color: 0xFFD700, fields, timestamp, thumbnail };
        }

        case 'tournament_quit': {
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'Bracket Size', value: (data.bracketSize || 0) + ' animals', inline: true },
                { name: 'Progress', value: `${data.completedMatches || 0}/${data.totalMatches || 0} (${Math.round(((data.completedMatches || 0) / (data.totalMatches || 1)) * 100)}%)`, inline: true }
            ];
            if (data.matchHistory && data.matchHistory.length > 0) {
                const historyStr = data.matchHistory.slice(-5).map(m =>
                    `${m.winner} beat ${m.loser}`
                ).join('\n');
                fields.push({ name: 'Last Votes', value: historyStr.substring(0, 500), inline: false });
            }
            addLocationField(fields, location);
            return { title: clip(`${EMOJI.EXIT} ${user} quit a tournament`, 256), url: `${SITE}/tournament`, color: 0xFF6347, fields, timestamp, thumbnail };
        }

        case 'prestige': {
            const prestigeStars = '⭐'.repeat(Math.min(data.prestige || 1, 10));
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'Prestige Level', value: prestigeStars + ' **' + (data.prestige || 1) + '**', inline: true }
            ];
            addLocationField(fields, location);
            addDeviceField(fields, data);
            return { title: clip(`${EMOJI.SPARKLES} ${data.username || 'Someone'} prestiged`, 256), url: profile, color: 0xFFD700, fields, timestamp, thumbnail };
        }

        case 'card_collected': {
            const how = { starter: 'Picked as their starter', daily: 'Card of the day', call: 'Won by calling a fight right', tournament: 'Won as a tournament champion', shop: 'Bought with BattlePoints' }[data.from] || 'Collected';
            const fields = [
                { name: 'Player', value: whoLink(data), inline: true },
                { name: 'Card', value: `${animalLink(data.card)}${data.tier ? ` (${data.tier} tier)` : ''}`, inline: true },
                { name: 'How', value: how, inline: true }
            ];
            const slug = animalSlug(data.card);
            return { title: clip(`🃏 ${user} collected the ${data.card || 'a'} card`, 256), url: `${SITE}/collection?u=${encodeURIComponent(data.username || '')}`, color: 0xf6b400, fields, timestamp, thumbnail: { url: (slug && cardThumb(slug)) || SITE_LOGO } };
        }

        case 'level_up': {
            const fields = [
                { name: 'User', value: whoLink(data), inline: true },
                { name: 'New Level', value: '**' + (data.level || 1) + '**', inline: true }
            ];
            addLocationField(fields, location);
            return { title: clip(`${EMOJI.STAR} ${data.username || 'Someone'} reached level ${data.level || 1}`, 256), url: profile, color: 0x00ff88, fields, timestamp, thumbnail };
        }

        default:
            return {
                title: 'Event: ' + eventType,
                color: 0x808080,
                description: JSON.stringify(data).substring(0, 500),
                timestamp,
                thumbnail
            };
    }
}

module.exports = {
    notifyDiscord,
    deliverActivity,
    deliverDiscordActivity,
    retryDueDiscordDeliveries,
    createSlackPayload,
    getSlackWebhookUrl,
    getLocationFromRequest,
    getRequestDetails,
    createEmbed,
    getRetryDelayMs,
    sanitizeDeliveryError
};
