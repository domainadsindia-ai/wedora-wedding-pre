const fs = require('fs');
const code = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

const target = 'v$=A8.url,S2=O8.url';
const idx = code.indexOf(target);
console.log('Target found at:', idx);
if (idx !== -1) {
  console.log(code.slice(idx - 50, idx + 800));
}
