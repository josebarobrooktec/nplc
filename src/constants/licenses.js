const UNLICENSES = ['Undefined', 'Unlicense', 'UNLICENSED'];

const FREE_USE_LICENSES = [
  'MIT', 'ISC', 'BSD', 'Apache', 'LGPL', 'MPL', 'Unlicense', 'BlueOak', 'CC', 'WTFPL', 'Zlib', 'Public Domain', 'Unicode-DFS-2016', 'DBAD', 'Python-2.0', 'EPL', 'CDDL', 'GPL', 'AGPL',
];

const DEFAULT_ALLOWED_LICENSES = [
  ...UNLICENSES,
  ...FREE_USE_LICENSES,
];

module.exports = {
  DEFAULT_ALLOWED_LICENSES,
  FREE_USE_LICENSES,
  UNLICENSES,
};
