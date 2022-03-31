const { parse } = require('cjs-module-lexer');
const { join } = require('path');
const { readFileSync } = require('fs');

const ret = parse(
  readFileSync(join(__dirname, 'fixtures/cjs-1.js'), 'utf-8')
);
console.log(ret);
