const { parse, init } = require('es-module-lexer');
const esbuild = require('esbuild');
const { join } = require('path');
const { readFileSync } = require('fs');

const content = readFileSync(join(__dirname, 'fixtures/esm-2.jsx'), 'utf-8');
const transformed = esbuild.transformSync(
  content, {
    loader: 'jsx',
    format: 'esm',
  }
);
init.then(() => {
  const ret = parse(transformed.code);
  console.log(ret);
});
