const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

// Find all occurrences of wedding-related words or spanish/italian/english text
const regex = /[A-Z][a-zA-Z\s]{4,30}/g;
// Let's search from the end backwards
const lines = code.split(';').filter(l => l.length > 50);
console.log('Total statements:', lines.length);

// Look at the last 50 statements
const last50 = lines.slice(-50);
fs.writeFileSync('last_statements.txt', last50.join(';\n\n'));
console.log('Wrote last statements to last_statements.txt');
