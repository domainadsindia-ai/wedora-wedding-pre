const fs = require('fs');
const comps = JSON.parse(fs.readFileSync('detailed_components.json', 'utf8'));

console.log('=== OPENING SCREEN y$ ===');
console.log(comps['y$'].slice(0, 2000));

console.log('\n=== HERO SECTION JI ===');
console.log(comps['JI'].slice(0, 2000));
