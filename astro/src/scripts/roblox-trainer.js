// The trainer card: a linked player's progress in the Roblox game (lib/roblox-save.js parseSave,
// sent by /api/auth?action=roblox-player or the public profile), drawn with the game's own names
// from /data/roblox-lite.json. Used by the profile (yours and other players') and the binder.
// Styles: styles/trainer.css.
import { escapeHtml } from './site.js';

let loading = null;

// The game's data, indexed. Loaded once, when a page first needs it.
export function loadGame() {
    loading ||= fetch('/data/roblox-lite.json')
        .then((response) => (response.ok ? response.json() : Promise.reject(new Error(String(response.status)))))
        .then((data) => ({
            ...data,
            animalBy: new Map(data.animals.map(([slug, name, rarity, biome, family, thumb]) => [slug, { slug, name, rarity, biome, family, thumb }])),
            rarityBy: new Map(data.rarities.map((rarity) => [rarity.id, rarity])),
            biomeBy: new Map(data.biomes.map((biome) => [biome.id, biome])),
            familyBy: new Map(data.families.map((family) => [family.id, family])),
            trophyBy: new Map(data.trophies.map((trophy) => [trophy.id, trophy]))
        }))
        .catch((error) => {
            loading = null;
            throw error;
        });
    return loading;
}

const fmt = (value) => Number(value || 0).toLocaleString('en-US');
const icon = (name, size = 18) => `<img src="/images/ui/icons/${name}.svg" width="${size}" height="${size}" alt="" loading="lazy" decoding="async" />`;
const short = (name) => String(name || '').split(/[\s&]/)[0];

// "just now", "5 min ago", "3 h ago", "2 days ago"
export function ago(when, now = Date.now()) {
    const ms = now - new Date(when).getTime();
    if (!Number.isFinite(ms)) return '';
    const min = Math.round(ms / 60000);
    if (min < 1) return 'just now';
    if (min < 60) return `${min} min ago`;
    const hours = Math.round(min / 60);
    if (hours < 36) return `${hours} h ago`;
    const days = Math.round(hours / 24);
    return days < 60 ? `${days} days ago` : new Date(when).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// 83.46 -> "1:23.46"
function raceTime(seconds) {
    if (!seconds) return '–';
    const m = Math.floor(seconds / 60);
    const s = (seconds % 60).toFixed(2).padStart(5, '0');
    return m ? `${m}:${s}` : `${Number(s)}s`;
}

const stars = (n) => `<span class="tc-stars" aria-label="${n} stars">${'★'.repeat(n)}</span>`;

// One game animal as a small card: its battle card thumbnail with its level and stars in the game.
export function animalChip(game, slug, owned, { champion = false } = {}) {
    const animal = game.animalBy.get(slug);
    if (!animal) return '';
    const rarity = game.rarityBy.get(animal.rarity);
    const [lv, st] = owned || [];
    return `<a class="tc-animal${champion ? ' is-champ' : ''}" href="/stats/${encodeURIComponent(slug)}" style="--rar:${rarity?.color || '#aab4c4'}" title="${escapeHtml(animal.name)}${lv ? ` · level ${lv}, ${st} star${st === 1 ? '' : 's'}` : ''}">
        ${animal.thumb ? `<img src="${escapeHtml(animal.thumb)}" alt="${escapeHtml(animal.name)} card" width="360" height="504" loading="lazy" decoding="async" />` : ''}
        ${champion ? `<span class="tc-champ">${icon('crown', 14)}</span>` : ''}
        ${lv ? `<span class="tc-lv"><b>Lv ${lv}</b>${stars(st)}</span>` : `<span class="tc-lv">${escapeHtml(animal.name)}</span>`}
    </a>`;
}

function trophyRow(game, trophy, at) {
    const tier = game.trophyTiers[trophy.tier] || {};
    const secret = trophy.hidden && at == null;
    return `<li class="tc-trophy${at == null ? ' is-locked' : ''}" style="--tier:${tier.color || '#ff9646'}">
        <span class="tc-cup">${icon(at == null ? 'lock' : 'trophy', 18)}</span>
        <span><b>${escapeHtml(secret ? '???' : trophy.name)}</b><small>${escapeHtml(secret ? trophy.hint || 'A secret trophy' : trophy.desc)}${trophy.title && !secret ? ` · Title: ${escapeHtml(trophy.title)}` : ''}</small></span>
        <em>${escapeHtml(tier.name || trophy.tier)}${at ? `<small>${new Date(at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</small>` : ''}</em>
    </li>`;
}

// The whole card. `who`: { name, username, headshot } (shown when given); `own`: your own card.
export function trainerHtml(game, snap, { who = null, at = null, own = false, now = Date.now() } = {}) {
    if (!snap) return '';
    const trainer = snap.trainer || { level: 1, into: 0, need: 0 };
    const pct = trainer.need ? Math.min(100, Math.round((trainer.into / trainer.need) * 100)) : 100;
    const status = snap.playing
        ? '<span class="tc-status is-on"><i></i>Playing now</span>'
        : snap.lastPlayed ? `<span class="tc-status">Last played ${escapeHtml(ago(snap.lastPlayed, now))}</span>` : '';
    const trophies = snap.trophies || { earned: {}, count: 0, total: 0, level: 1 };
    const earned = Object.entries(trophies.earned || {})
        .map(([id, when]) => ({ trophy: game.trophyBy.get(id), when }))
        .filter((row) => row.trophy)
        .sort((a, b) => (b.when || 0) - (a.when || 0) || (game.trophyTiers[b.trophy.tier]?.points || 0) - (game.trophyTiers[a.trophy.tier]?.points || 0));
    const byCategory = game.trophyCategories.map((category) => {
        const list = game.trophies.filter((trophy) => trophy.category === category.id && !trophy.extra);
        const have = list.filter((trophy) => trophy.id in (trophies.earned || {})).length;
        return { category, list, have };
    }).filter((group) => group.list.length);

    const islands = (snap.islands || []).map((isle) => {
        const biome = game.biomeBy.get(isle.id);
        const pctIsle = isle.total ? Math.round((isle.owned / isle.total) * 100) : 0;
        const marks = [
            isle.seal ? `<span title="Seal broken: all 3 Royal Guards beaten">${icon('shield', 14)}</span>` : '',
            isle.boss ? `<span title="Boss beaten: ${escapeHtml(biome?.bossTitle || 'the island boss')}">${icon('crown', 14)}</span>` : '',
            isle.crown ? `<span class="tc-medal is-${escapeHtml(isle.crown)}" title="Showdown won${isle.crown === 'won' ? '' : `, ${isle.crown} medal`}${isle.best ? ` · best ${isle.best}s` : ''}${isle.hunter ? ' · HUNTER mode' : ''}">${icon('medal', 14)}</span>` : '',
            isle.legend ? `<span class="tc-legend" title="LEGEND tier ${isle.legend} rematch won">L${isle.legend}</span>` : ''
        ].join('');
        return `<li style="--isle:${biome?.accent || '#00d4ff'}">
            <b>${escapeHtml(short(biome?.name || isle.id))}</b>
            <span class="tc-ibar"><i style="width:${pctIsle}%"></i></span>
            <small>${isle.owned}/${isle.total}</small>
            <span class="tc-marks">${marks}</span>
        </li>`;
    }).join('');

    const rarities = game.rarities.filter((rarity) => snap.rarities?.[rarity.id]?.[1]).map((rarity) => {
        const [have, total] = snap.rarities[rarity.id];
        return `<span class="tc-rar" style="--rar:${rarity.color}"><b>${have}</b>/${total} ${escapeHtml(rarity.name)}</span>`;
    }).join('');

    const team = (snap.team || []).map((slug) => animalChip(game, slug, snap.animals?.[slug], { champion: slug === snap.champion })).join('');
    const record = snap.record || {};
    const cup = snap.cup || {};
    const race = snap.race || {};
    const keep = snap.keepsakes || {};
    const nums = [
        ['Animals', `${fmt(snap.count)}<small>/${fmt(snap.total)}</small>`, `${fmt(snap.seen)} seen`],
        ['Trophies', `${fmt(trophies.count)}<small>/${fmt(trophies.total)}</small>`, `Trophy level ${trophies.level}${trophies.platinum ? ' · Platinum' : ''}`],
        ['Battles won', fmt(record.wins), `${fmt(record.battles)} fought`],
        ['Best streak', fmt(record.bestStreak), `${fmt(record.perfects)} PERFECT hits`],
        ['Weekly Cup', `${fmt(cup.gold)}<small> gold</small>`, `${fmt(cup.silver)} silver · ${fmt(cup.bronze)} bronze`],
        ['Sky Trail', raceTime(race.best), `${fmt(race.finishes)} finishes`]
    ].map(([label, value, note]) => `<div><dt>${label}</dt><dd>${value}</dd><small>${note}</small></div>`).join('');

    const extras = [
        snap.safari ? `${icon('camera', 16)}${fmt(snap.safari)} safari photos` : '',
        keep.titan || keep.festival || keep.mega ? `${icon('star', 16)}${fmt((keep.titan || 0) + (keep.festival || 0) + (keep.mega || 0))} keepsakes` : '',
        snap.login?.best ? `${icon('fire', 16)}${fmt(snap.login.best)}-day login streak` : '',
        own && snap.coins != null ? `${icon('coin', 16)}${fmt(snap.coins)} Coins · ${fmt(snap.wildTracks)} Wild Tracks` : '',
        snap.joined ? `${icon('flag', 16)}Started ${new Date(snap.joined).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` : ''
    ].filter(Boolean).map((text) => `<li>${text}</li>`).join('');

    return `<div class="tc">
        <header class="tc-head">
            ${who ? `<span class="tc-avatar">${who.headshot ? `<img src="${escapeHtml(who.headshot)}" alt="" width="150" height="150" />` : icon('paw', 30)}</span>
            <span class="tc-who"><b>${escapeHtml(who.name || 'Roblox player')}</b>${who.username ? `<small>@${escapeHtml(who.username)}</small>` : ''}</span>` : ''}
            ${status}
        </header>
        <div class="tc-trainer">
            <span class="tc-lvl"><small>Trainer</small><b>${trainer.level}</b></span>
            <div class="tc-xp">
                <div class="tc-bar"><i style="width:${pct}%"></i></div>
                <small>${trainer.need ? `${fmt(trainer.into)} / ${fmt(trainer.need)} XP to level ${trainer.level + 1}` : 'Top trainer level'}</small>
                ${snap.title || snap.frame ? `<span class="tc-looks">${snap.title ? `<span class="tc-title">${escapeHtml(snap.title)}</span>` : ''}${snap.frame ? `<small>${escapeHtml(snap.frame)}</small>` : ''}</span>` : ''}
            </div>
        </div>
        <dl class="tc-nums">${nums}</dl>
        ${team ? `<section><h4>Team</h4><div class="tc-team">${team}</div></section>` : ''}
        <section><h4>Islands</h4><ol class="tc-isles">${islands}</ol></section>
        ${rarities ? `<section><h4>By rarity</h4><div class="tc-rars">${rarities}</div></section>` : ''}
        <section>
            <h4>Trophies <small>${fmt(trophies.points)} points</small></h4>
            ${earned.length ? `<ol class="tc-trophies">${earned.slice(0, 6).map((row) => trophyRow(game, row.trophy, row.when || 0)).join('')}</ol>` : '<p class="tc-none">No trophies yet.</p>'}
            <details class="tc-all"><summary>All ${fmt(trophies.total)} trophies</summary>
                ${byCategory.map((group) => `<h5>${escapeHtml(group.category.name)} <small>${group.have}/${group.list.length}</small></h5><ol class="tc-trophies">${group.list.map((trophy) => trophyRow(game, trophy, trophy.id in (trophies.earned || {}) ? trophies.earned[trophy.id] || 0 : null)).join('')}</ol>`).join('')}
            </details>
        </section>
        ${extras ? `<ul class="tc-extras">${extras}</ul>` : ''}
        ${at ? `<p class="tc-at">From the game ${escapeHtml(ago(at, now))}</p>` : ''}
    </div>`;
}

// One line for small spaces: "Trainer 23 · 87/225 animals · Playing now".
export function trainerLine(snap, now = Date.now()) {
    if (!snap) return '';
    return [`Trainer ${snap.trainer?.level || 1}`, `${fmt(snap.count)}/${fmt(snap.total)} animals`, `${fmt(snap.trophies?.count)} trophies`, snap.playing ? 'Playing now' : snap.lastPlayed ? `played ${ago(snap.lastPlayed, now)}` : ''].filter(Boolean).join(' · ');
}
