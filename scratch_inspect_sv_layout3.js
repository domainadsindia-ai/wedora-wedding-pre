const fs = require('fs');
const code = fs.readFileSync('public/assets/index-BtxrvcwD.js', 'utf8');

const sIdx = code.indexOf('function sV(){');
console.log(code.slice(sIdx + 3000, sIdx + 5000));
