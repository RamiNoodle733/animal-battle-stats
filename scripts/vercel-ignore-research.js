#!/usr/bin/env node
'use strict';

const https = require('https');

const owner = process.env.VERCEL_GIT_REPO_OWNER;
const repo = process.env.VERCEL_GIT_REPO_SLUG;
const base = process.env.VERCEL_GIT_PREVIOUS_SHA;
const head = process.env.VERCEL_GIT_COMMIT_SHA;

function build() {
    process.exit(1);
}

if (!owner || !repo || !base || !head || base === head) {
    build();
}

const request = https.get({
    hostname: 'api.github.com',
    path: `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/compare/${encodeURIComponent(base)}...${encodeURIComponent(head)}`,
    headers: {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'animal-battle-stats-vercel-ignore'
    }
}, (response) => {
    let body = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        body += chunk;
    });
    response.on('end', () => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
            build();
        }

        try {
            const payload = JSON.parse(body);
            const files = Array.isArray(payload.files) ? payload.files : [];

            // Fail open to a real build if the comparison is empty or truncated.
            if (files.length === 0 || files.length >= 300) {
                build();
            }

            const researchOnly = files.every((file) => (
                typeof file.filename === 'string'
                && file.filename.startsWith('animal-research-for-update/')
            ));

            // Vercel: exit 0 skips the deployment, exit 1 proceeds with the build.
            process.exit(researchOnly ? 0 : 1);
        } catch {
            build();
        }
    });
});

request.on('error', build);
