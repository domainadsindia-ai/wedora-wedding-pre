const fs = require('fs');
const code = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

const sIdx = code.indexOf('function sV(){');
console.log(code.slice(sIdx, sIdx + 2000));
