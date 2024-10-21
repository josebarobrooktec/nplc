const fs = require('fs');
const path = require('path');
const { cwd } = require('node:process');

const { DEFAULT_ALLOWED_LICENSES } = require('../constants/licenses');

const rcPath = path.join(cwd(), '.checkLicensesrc.json');

let rc = {};
if (fs.existsSync(rcPath)) {
  rc = JSON.parse(fs.readFileSync(rcPath, 'utf8'));
}

let allowedLicenses = (rc.allowedLicenses || []).map((license) => license.trim().toUpperCase());
if (!rc.avoidDefaultLicences) {
  allowedLicenses = [...allowedLicenses, ...DEFAULT_ALLOWED_LICENSES];
}

const allowedFiles = rc.allowedFiles || [];

const checkSrcDirectories = rc.checkSrcDirectories || [];

module.exports = {
  allowedLicenses,
  allowedFiles,
  checkSrcDirectories,
  rc,
};
