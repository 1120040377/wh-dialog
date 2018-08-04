const path = require('path');
const fs = require('fs');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');

const docs = glob.sync(path.join(__dirname, '../src/template/**/*.js')).filter((file) => {
  if(/template\/index.js/.test(file)) return false;
  return true;
}).map(file => {
  console.log(file)
  const basename = path.dirname(file).substr(path.dirname(file).lastIndexOf('/') + 1);
  const doc = jsdoc2md.renderSync({ files: file });
  fs.writeFileSync(path.join(__dirname, '../docs/component', basename + '.md'), doc);
  console.log(`generate ${basename}.md ...`);
  return basename;
}).reduce(function (doc, a) {
  return `${doc}\n- [${a}](component/${a}.md)`;
}, '');

const summary = `# Summary\n${docs}`;
fs.writeFileSync(path.join(__dirname, '../docs/README.md'), summary);
