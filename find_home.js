const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

// Search for _H definition
const idx = code.indexOf('_H=');
const idx2 = code.indexOf('function _H');
console.log('_H= at', idx, 'function _H at', idx2);

const targetIdx = idx !== -1 ? idx : idx2;
if (targetIdx !== -1) {
  console.log(code.slice(targetIdx - 50, targetIdx + 2000));
}
