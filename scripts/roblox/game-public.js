#!/usr/bin/env node
'use strict';

// Prints 1 when Roblox shows the game to everyone, 0 while it is private or in review, and
// nothing when Roblox can't be reached (pages then follow data/roblox-game.json alone).
// scripts/build-production.js runs it before the Astro build.
const { gameIsPublic } = require('../../lib/roblox-game');

gameIsPublic()
    .then((open) => process.stdout.write(open ? '1' : '0'))
    .catch(() => {});
