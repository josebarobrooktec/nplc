const fs = require('fs');
const path = require('path');

let process;
try {
  // eslint-disable-next-line global-require
  process = require('node:process');
} catch (error) {
  // eslint-disable-next-line global-require
  process = require('process');
}

const { cwd } = process;

const sampleRcFile = require('../../.checkLicensesrc.json');

const { DEFAULT_ALLOWED_LICENSES } = require('../constants/licenses');

const rcPath = path.join(cwd(), '.checkLicensesrc.json');

let rc = {};
if (fs.existsSync(rcPath)) {
  rc = JSON.parse(fs.readFileSync(rcPath, 'utf8'));
} else {
  console.log('creating rc file');
  fs.writeFileSync(rcPath, JSON.stringify(sampleRcFile, null, 2));
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
