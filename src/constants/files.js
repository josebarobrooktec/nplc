const BASENAMES_PRECEDENCE = [
  /^LICENSE$/,
  /^LICENSE-\w+$/, // e.g. LICENSE-MIT
  /^LICENCE$/,
  /^LICENCE-\w+$/, // e.g. LICENCE-MIT
  /^COPYING$/,
  /^README$/,
];

module.exports = {
  BASENAMES_PRECEDENCE,
};
