const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

function findAll(str) {
  let indices = [];
  let idx = 0;
  while ((idx = code.indexOf(str, idx)) !== -1) {
    indices.push(idx);
    idx += str.length;
  }
  return indices;
}

console.log('Beatriz occurrences:', findAll('Beatriz').length);
console.log('Alexander occurrences:', findAll('Alexander').length);
console.log('Alessia occurrences:', findAll('Alessia').length);
console.log('Matteo occurrences:', findAll('Matteo').length);

findAll('Beatriz').forEach(i => console.log('Beatriz @', i, code.slice(Math.max(0, i - 50), Math.min(code.length, i + 80))));
findAll('Alessia').forEach(i => console.log('Alessia @', i, code.slice(Math.max(0, i - 50), Math.min(code.length, i + 80))));
