
const a = require('a');
require('b');
const c = require('c');
require.ensure('d');

module.exports = {
  a,
  b: c,
}

Object.defineProperty(module.exports, '__esModule', { value: true })
