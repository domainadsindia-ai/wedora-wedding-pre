const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

// Find Ds definition
const dsIdx = code.indexOf('Ds=');
console.log('Ds= index:', dsIdx);
if (dsIdx !== -1) {
  console.log('Ds object:', code.slice(dsIdx, dsIdx + 1500));
}

// Find each component definition
const compNames = ['y$', 'JI', 'I$', 'fM', 'mV', 'sV', 'KV', 'mU', 'LU', 'ZU', 'cH', 'bH', 'w$', 'P$', 'Vn'];
const compDefs = {};
for (const name of compNames) {
  let idx = code.indexOf(name + '=');
  if (idx === -1) idx = code.indexOf('function ' + name);
  console.log(`Component ${name} index: ${idx}`);
  if (idx !== -1) {
    compDefs[name] = code.slice(Math.max(0, idx - 100), Math.min(code.length, idx + 2000));
  }
}

fs.writeFileSync('components_sample.json', JSON.stringify(compDefs, null, 2));
console.log('Saved components_sample.json');
