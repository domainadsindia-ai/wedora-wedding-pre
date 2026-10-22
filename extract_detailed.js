const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

function extractAround(name, length = 3000) {
  let idx = code.indexOf(name + '=');
  if (idx === -1) idx = code.indexOf('function ' + name);
  if (idx === -1) return '';
  return code.slice(idx, idx + length);
}

const comps = ['y$', 'JI', 'I$', 'fM', 'mV', 'sV', 'KV', 'mU', 'LU', 'ZU', 'cH', 'bH', 'w$', 'P$', 'Vn'];
const output = {};
for (const c of comps) {
  output[c] = extractAround(c, 4000);
}

fs.writeFileSync('detailed_components.json', JSON.stringify(output, null, 2));
console.log('Saved detailed_components.json');
