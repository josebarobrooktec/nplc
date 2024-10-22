let process;
try {
  // this is mandatory to be compatible with node versions under 16
  // eslint-disable-next-line global-require
  process = require('node:process');
} catch (error) {
  // eslint-disable-next-line global-require
  process = require('process');
}

const args = process.argv.slice(2) || [];

const { cwd } = process;

const isInit = args.includes('--init');
const showHelp = args.includes('--help');
const showLicenses = args.includes('--show-licenses');

if (showHelp) {
  console.log('Commands:');
  console.log('--init: Initialize the configuration file');
  console.log('--show-licenses: Show licenses');
  console.log('--help: Show this help');
}

module.exports = {
  args,
  cwd,
  isInit,
  showHelp,
  showLicenses,
};
