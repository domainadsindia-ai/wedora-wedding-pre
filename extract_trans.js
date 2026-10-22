const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

const idx = code.indexOf('footer.madeBy');
const slice = code.slice(idx - 6500, idx + 500);
fs.writeFileSync('full_translations.txt', slice);
console.log('Saved full_translations.txt');
