const { parse, init } = require('es-module-lexer');
const { join } = require('path');
const { readFileSync } = require('fs');

init.then(() => {
  const ret = parse(
    readFileSync(join(__dirname, 'fixtures/esm-2.jsx'), 'utf-8')
  );
  console.log(ret);
})
