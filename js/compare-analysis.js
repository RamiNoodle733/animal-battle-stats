'use strict';

// Present the shared transparent model in the existing Compare workflow.
window.ABSCompareAnalysis = {
    open(left, right) {
        let dialog = document.getElementById('compare-analysis');
        if (!dialog) {
            dialog = document.createElement('dialog');
            dialog.id = 'compare-analysis';
            dialog.setAttribute('aria-labelledby', 'compare-analysis-title');
            dialog.innerHTML = '<form method="dialog"><button class="analysis-close" aria-label="Close analysis">×</button></form><h2 id="compare-analysis-title">Matchup analysis</h2><div class="analysis-content"></div>';
            dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
            document.body.append(dialog);
        }
        const content = dialog.querySelector('.analysis-content');
        content.replaceChildren();
        const text = (tag, value) => { const element = document.createElement(tag); element.textContent = value; content.append(element); return element; };
        if (!left || !right) {
            text('p', 'Choose two animals in the roster to inspect their matchup.');
            dialog.showModal();
            return;
        }
        const model = window.ABSBattleEngine;
        const result = model.compare(left, right);
        text('h3', `${left.name} vs ${right.name}`);
        text('p', result.probability === null ? 'Not enough rating data to estimate a result.' : `${left.name}: ${Math.round(result.probability * 100)}% · ${right.name}: ${Math.round((1 - result.probability) * 100)}%`);
        text('p', 'Experimental rating estimate, not a measured chance of winning. Confidence: low.');
        text('p', result.scenario);
        const strongest = result.factors[0];
        if (strongest) text('p', `Largest weighted difference: ${strongest.label}. ${result.confidenceReason}`);
        const table = document.createElement('table');
        table.innerHTML = '<caption>Rating contributions</caption><thead><tr><th scope="col">Factor</th><th scope="col">Left</th><th scope="col">Right</th><th scope="col">Weight</th><th scope="col">Effect</th></tr></thead>';
        const body = document.createElement('tbody');
        for (const factor of model.FACTORS) {
            const values = result.factors.find((item) => item.key === factor.key);
            const row = document.createElement('tr');
            [factor.label, values?.left ?? 'Unknown', values?.right ?? 'Unknown', `${Math.round(factor.weight * 100)}%`, values ? values.contribution.toFixed(1) : 'Omitted'].forEach((value) => {
                const cell = document.createElement('td'); cell.textContent = value; row.append(cell);
            });
            body.append(row);
        }
        table.append(body); content.append(table);
        text('p', 'Positive effects favor the left animal; negative effects favor the right. Missing rating factors are omitted for both animals.');
        const measurements = document.createElement('table');
        measurements.innerHTML = '<caption>Physical measurements</caption><thead><tr><th scope="col">Measurement</th><th scope="col">Left</th><th scope="col">Right</th></tr></thead>';
        const measurementsBody = document.createElement('tbody');
        for (const [key, label, unit] of [['weight_kg', 'Body mass', 'kg'], ['length_cm', 'Body length', 'cm'], ['height_cm', 'Height', 'cm'], ['speed_mps', 'Speed', 'm/s'], ['bite_force_psi', 'Bite force', 'psi']]) {
            const row = document.createElement('tr');
            const format = (animal) => {
                const value = model.measurement(animal[key]);
                return value === null ? 'Unknown' : `${value.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${unit}`;
            };
            [label, format(left), format(right)].forEach((value) => {
                const cell = document.createElement('td'); cell.textContent = value; row.append(cell);
            });
            measurementsBody.append(row);
        }
        measurements.append(measurementsBody); content.append(measurements);
        text('p', 'These are current roster measurements, not independently verified values. They are shown for context and do not affect this rating-only model.');
        const slug = (animal) => animal.slug || animal.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        for (const animal of [left, right]) {
            const profile = text('a', `${animal.name}: profile and evidence`);
            profile.href = `/stats/${slug(animal)}`;
            profile.className = 'analysis-profile-link';
        }
        text('p', `Model ${model.VERSION}. Body-size scaling, terrain and behavior are not modeled. Missing measurements are not treated as zero.`);
        const link = text('a', 'How the model works'); link.href = '/methodology';
        const share = text('button', 'Copy matchup link'); share.type = 'button';
        text('p', 'The shared link opens Battle with these animals. Battle uses the published roster snapshot, so its estimate may differ from this live-roster analysis; the link does not freeze these values.');
        share.addEventListener('click', async () => {
            const url = new URL('/battle', location.origin);
            const revision = document.querySelector('meta[name="abs-version"]')?.content || '';
            url.search = new URLSearchParams({ a: slug(left), b: slug(right), model: model.VERSION, data: revision }).toString();
            try { await navigator.clipboard.writeText(url.href); share.textContent = 'Link copied'; }
            catch { text('p', url.href); }
        });
        dialog.showModal();
    }
};
