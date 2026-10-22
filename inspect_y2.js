const fs = require('fs');
const code = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

const idx = code.indexOf('v$=A8.url,S2=O8.url');
console.log(code.slice(idx, idx + 1500));
