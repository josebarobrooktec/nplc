const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const { cwd, isInit } = require('./getParams');
const { DEFAULT_ALLOWED_LICENSES } = require('../constants/licenses');

const rcFileName = '.nplcrc.json';

// rc filename is a constant
// eslint-disable-next-line import/no-dynamic-require
const sampleRcFile = require(`../../${rcFileName}`);

const rcPath = path.join(cwd(), rcFileName);

let rc = {};

if (fs.existsSync(rcPath)) {
  rc = JSON.parse(fs.readFileSync(rcPath, 'utf8'));
} else if (isInit) {
  console.log(chalk.dim('Creating rc file'));
  fs.writeFileSync(rcPath, JSON.stringify(sampleRcFile, null, 2));
} else {
  console.log(chalk.dim('No rc file found. Run with --init to create one'));
}

let allowedLicenses = (rc.allowedLicenses || []).map((license) => license.trim());
if (!rc.avoidDefaultLicences) {
  allowedLicenses = [...allowedLicenses, ...DEFAULT_ALLOWED_LICENSES];
}

const allowedFiles = rc.allowedFiles || [];
const allowedPackages = rc.allowedPackages || [];

const checkSrcDirectories = rc.checkSrcDirectories || [];

module.exports = {
  allowedFiles,
  allowedLicenses,
  allowedPackages,
  checkSrcDirectories,
  rc,
};
