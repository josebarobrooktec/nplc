const checker = require('license-checker');
const { allowedLicenses } = require('./getConfig');

const checkPackages = () => {
  checker.init({
    start: './',
    onlyAllow: allowedLicenses.join(';'),
  }, (err) => {
    if (err) {
      console.log('err', err);
      process.exit(1);
    } else {
      console.log('Package licenses are OK');
    }
  });
};

module.exports = {
  checkPackages,
};
