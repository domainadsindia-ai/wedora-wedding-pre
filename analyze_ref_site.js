const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

// Search for JSX / text strings / component names / sections
// Look for React component definitions or common wedding keywords:
const keywords = [
  'Alessia', 'Matteo', 'Como', 'rsvp', 'dress code', 'timeline', 'schedule', 
  'transport', 'accommodation', 'gallery', 'countdown', 'music', 'audio',
  'ceremony', 'cocktail', 'dinner', 'dancing', 'bellagio', 'curtain', 'envelope',
  'cover', 'opening', 'wax', 'seal', 'stamp'
];

keywords.forEach(kw => {
  let count = 0;
  let idx = 0;
  while ((idx = code.toLowerCase().indexOf(kw, idx)) !== -1) {
    count++;
    idx += kw.length;
  }
  console.log(`${kw}: ${count} occurrences`);
});

// Let's find exported or recognizable section component names in the code
const matches = code.match(/function\s+([A-Z][a-zA-Z0-9]+)\s*\(/g) || [];
console.log('\nFunction components:', matches.slice(0, 30));
