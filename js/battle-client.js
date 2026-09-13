'use strict';

async function initializeBattle() {
    const revision = document.querySelector('meta[name="abs-version"]').content;
    await import(`./battle-engine.js?v=${encodeURIComponent(revision)}`);
    const model = globalThis.ABSBattleEngine;
    const animals = JSON.parse(document.getElementById('battle-data').textContent);
    const bySlug = new Map(animals.map((animal) => [animal.slug, animal]));
    const form = document.getElementById('battle-form');
    const leftSelect = document.getElementById('animal-a');
    const rightSelect = document.getElementById('animal-b');
    const error = document.getElementById('battle-error');
    let currentUrl = '';
    const defaults = { a: 'african-lion', b: 'siberian-tiger' };

    function setText(id, text) { document.getElementById(id).textContent = text; }
    function row(values) {
        const tr = document.createElement('tr');
        values.forEach((value, index) => {
            const cell = document.createElement(index === 0 ? 'th' : 'td');
            if (index === 0) cell.scope = 'row';
            cell.textContent = value;
            tr.append(cell);
        });
        return tr;
    }
    function format(value, unit, decimals) {
        const measured = model.measurement(value);
        return measured === null ? 'Unknown' : `${measured.toLocaleString('en-US', { maximumFractionDigits: measured < 1 ? Math.max(decimals, 2) : decimals })} ${unit}`;
    }
    function render(push = false) {
        const left = bySlug.get(leftSelect.value);
        const right = bySlug.get(rightSelect.value);
        if (!left || !right) { error.textContent = 'Choose two animals from the roster.'; return; }
        if (left.slug === right.slug) { error.textContent = 'Choose two different animals to compare.'; return; }
        error.textContent = '';
        const result = model.compare(left, right);
        const leftPercent = Math.round(result.probability * 100);
        const favored = result.winner === 'left' ? left : right;
        setText('verdict-title', result.winner ? `${favored.name} favored: ${result.winner === 'left' ? leftPercent : 100 - leftPercent}%` : 'Evenly matched in the ABS rating model');
        setText('matchup-label', `${left.name} vs ${right.name}`);
        const strongest = result.factors[0];
        setText('battle-summary', strongest && strongest.contribution !== 0 ? `The largest weighted rating difference is ${strongest.label.toLowerCase()}, favoring ${strongest.contribution > 0 ? left.name : right.name}. This is a formula-derived estimate, not a measured chance of winning.` : 'The available weighted ratings balance out. This is a formula-derived estimate, not a measured chance of winning.');
        setText('probability-label', `${left.name} ${leftPercent}% · ${right.name} ${100 - leftPercent}%`);
        document.getElementById('probability-fill').style.width = `${result.probability * 100}%`;
        setText('coverage-label', `${result.factors.length} of six rating factors available. Per-field source verification remains incomplete.${result.missing.length ? ` Omitted for both animals: ${result.missing.join(', ')}.` : ''}`);
        document.getElementById('factor-rows').replaceChildren(...model.FACTORS.map((factor) => {
            const contribution = result.factors.find((f) => f.key === factor.key);
            return row([factor.label, left[factor.key] ?? 'Unknown', right[factor.key] ?? 'Unknown', `${Math.round(factor.weight * 100)}%`, contribution ? contribution.contribution.toFixed(1) : 'Omitted']);
        }));
        document.getElementById('measurement-rows').replaceChildren(...[
            ['weight_kg', 'Body mass', 'kg', 2], ['length_cm', 'Body length', 'cm', 1], ['height_cm', 'Height', 'cm', 1], ['speed_mps', 'Speed', 'm/s', 1], ['bite_force_psi', 'Bite force', 'psi', 0]
        ].map(([key, label, unit, decimals]) => row([label, format(left[key], unit, decimals), format(right[key], unit, decimals)])));
        for (const [side, animal] of [['left', left], ['right', right]]) {
            const link = document.getElementById(`${side}-profile`);
            link.href = `/stats/${animal.slug}`;
            link.textContent = `${animal.name} profile`;
        }
        const url = new URL('/battle', location.origin);
        url.search = new URLSearchParams({ a: left.slug, b: right.slug, model: model.VERSION, data: revision }).toString();
        currentUrl = url.href;
        if (push) history.pushState(null, '', url);
        setText('share-status', '');
        document.getElementById('share-fallback').hidden = true;
    }
    function loadUrl() {
        const params = new URLSearchParams(location.search);
        const a = params.get('a') || defaults.a;
        const b = params.get('b') || (a === defaults.b ? defaults.a : defaults.b);
        if (!bySlug.has(a) || !bySlug.has(b) || (params.has('model') && params.get('model') !== model.VERSION) || (params.has('data') && params.get('data') !== revision)) {
            leftSelect.value = defaults.a;
            rightSelect.value = defaults.b;
            render();
            error.textContent = 'This link uses an unknown animal or unavailable model/data version. The default example is shown; choose a new matchup above.';
            return;
        }
        leftSelect.value = a;
        rightSelect.value = b;
        render();
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        render(true);
        if (!error.textContent) document.getElementById('battle-result').focus();
    });
    document.getElementById('share-battle').addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setText('share-status', 'Matchup link copied.');
        } catch {
            const input = document.getElementById('share-url');
            input.value = currentUrl;
            document.getElementById('share-fallback').hidden = false;
            input.focus();
            input.select();
            setText('share-status', 'Copy the selected matchup URL.');
        }
    });
    addEventListener('popstate', loadUrl);
    render();
    loadUrl();
    document.getElementById('battle-submit').disabled = false;
    document.getElementById('share-battle').disabled = false;
}

initializeBattle().catch(() => {
    document.getElementById('battle-error').textContent = 'The interactive model could not load. The static example is available below; reload to try again.';
});
