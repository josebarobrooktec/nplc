#!/usr/bin/env node
const { checkPackages } = require('./src/lib/checkPackages');
const { checkFiles } = require('./src/lib/checkFiles');

const packageJson = require('./package.json');
console.log(`Running check-licenses version: ${packageJson.version}`);

checkPackages();
checkFiles();
