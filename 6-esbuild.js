const { join } = require('path');
const esbuild = require('esbuild');

const result = esbuild.buildSync({
  entryPoints: [join(__dirname, 'fixtures/esm-2.jsx')],
  platform: 'neutral',
  format: 'esm',
  metafile: true,
  write: false,
  logLevel: 'silent',
});
console.log(JSON.stringify(result, null, 2));
