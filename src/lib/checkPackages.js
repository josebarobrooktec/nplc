const checker = require('license-checker');
const { allowedLicenses, allowedPackages } = require('./getConfig');
const chalk = require('chalk');

const checkPackages = () => {
  checker.init({
    start: './',
    onlyAllow: allowedLicenses.join(';'),
    excludePackages: allowedPackages.join(';'),
  }, (err) => {
    if (err) {
      console.log(chalk.bgRed.bold('This package has non-acceptable licenses'));
      console.log(err);
      process.exit(1);
    } else {
      console.log(`Package licenses are ${chalk.bgGreen.bold('OK')}`);
    }
  });
};

module.exports = {
  checkPackages,
};
