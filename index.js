#!/usr/bin/env node
const { checkPackages } = require('./src/lib/checkPackages');
const { checkFiles } = require('./src/lib/checkFiles');
const { allowedLicenses } = require('./src/lib/getConfig');
const chalk = require('chalk');

const packageJson = require('./package.json');
const { showHelp, showLicenses } = require('./src/lib/getParams');

if (showLicenses) {
  console.log(allowedLicenses);
} else if (!showHelp) {
  console.log(chalk.dim(`Running check-licenses version: ${packageJson.version}`));
  checkPackages();
  checkFiles();
}
