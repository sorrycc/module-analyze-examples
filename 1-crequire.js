const { join } = require('path');
const { readFileSync } = require('fs');
const crequire = require('crequire');

const ret = crequire(
  readFileSync(join(__dirname, 'fixtures/cjs-1.js'), 'utf-8'),
  true
);
console.log(ret);
