const fs = require('fs');
const path = require('path');

const { allowedLicenses, checkSrcDirectories, allowedFiles } = require('./getConfig');
const { BASENAMES_PRECEDENCE } = require('../constants/files');

const buildLicenseObject = (name, license) => ({ name, license });

function getLicense(filePath) {
  let licenseText = '';
  const licenseFile = fs.readFileSync(filePath, 'utf8').toUpperCase();
  const fileLines = licenseFile.split('\n').filter((line) => line.trim());

  const licenseLineIndex = fileLines.findIndex((line) => line.includes('LICENSE'));
  if (licenseLineIndex !== -1) {
    const liceseLines = fileLines.slice(licenseLineIndex, licenseLineIndex + 2);
    licenseText = liceseLines.join(' ');
  }
  if (!licenseText) {
    [licenseText] = fileLines;
  }
  return buildLicenseObject(filePath, licenseText.trim());
}

function searchLicenseFiles(directory = __dirname) {
  const licenses = [];
  let filesFound;
  try {
    filesFound = fs.readdirSync(directory, { withFileTypes: true });
  } catch (error) {
    console.error('Error reading directory:', directory);
    return [];
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const file of filesFound) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      const directoryLicences = searchLicenseFiles(fullPath); // Recursive call for directories
      licenses.push(...directoryLicences);
    } else if (file.isFile()) {
      if (file.name) {
        const isLicenseFile = BASENAMES_PRECEDENCE.some(
          (filePattern) => filePattern.test(file.name.toUpperCase()),
        );

        if (isLicenseFile) {
          const license = getLicense(fullPath);
          if (license) {
            licenses.push(license);
          }
        }
      }

      const isLicenseFile = BASENAMES_PRECEDENCE.some(
        (filePattern) => filePattern.test(file.name.toUpperCase()),
      );

      if (isLicenseFile) {
        const license = getLicense(fullPath);
        if (license) {
          licenses.push(license);
        }
      }
    }
  }
  return licenses;
}

function checkLicenceFiles() {
  const nonAcceptableFiles = [];
  checkSrcDirectories.forEach((directory) => {
    console.log('Checking files directory:', directory);
    const directoryLicenses = searchLicenseFiles(directory);
    const nonAcceptableLicences = directoryLicenses.filter((fl) => {
      if (allowedFiles.includes(fl.name)) {
        return false;
      }
      const isAcceptable = allowedLicenses.some(
        (allowedLicense) => fl.license.includes(allowedLicense),
      );
      return !isAcceptable;
    });
    nonAcceptableFiles.push(...nonAcceptableLicences);
  });
  return { nonAcceptableFiles };
}

const checkFiles = () => {
  if (!checkSrcDirectories || !checkSrcDirectories.length) {
    console.log('No file directories to check');
    return;
  }
  const { nonAcceptableFiles } = checkLicenceFiles();
  if (nonAcceptableFiles.length > 0) {
    console.error('Non-acceptable packages found:');
    nonAcceptableFiles.forEach((p) => {
      console.error(`${p.name}: ${p.license}`);
    });
    process.exit(1);
  }
  console.log('License files are OK');
};

module.exports = {
  checkFiles,
};
