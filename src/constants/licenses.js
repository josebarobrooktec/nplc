const UNLICENSES = ['Unlicense', 'UNLICENSED'];

// const COMMON_FREE_USE_LICENSES = [
//   'MPL-1.1', 'MPL-2.0',
//   'MIT', 'MIT', 'MIT*', 'MIT/X11',
//   'ISC', 'Apache-2.0', 'BlueOak-1.0.0',
//   'GPL-2.0', 'GPL-3.0', 'AGPL-3.0',
//   'LGPL-2.1', 'LGPL-3.0',
//   'CDDL-1.0',
//   'EPL-1.0', 'EPL-2.0',
//   'CC0-1.0', 'CC-BY-3.0',
//   'BSD-like', 'BSD', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD3', '0BSD',
//   'Public Domain', 'Unicode-DFS-2016', 'DBAD', 'WTFPL', 'Zlib',
//   'Python-2.0',
// ];

// const DEFAULT_ALLOWED_LICENSES = [
//   ...UNLICENSES,
//   ...COMMON_FREE_USE_LICENSES
// ];

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
