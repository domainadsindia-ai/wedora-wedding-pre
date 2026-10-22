const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

// Search for strings with 10+ characters
const strMatches = code.match(/"([^"\\]|\\.)*"/g) || [];
const texts = [];
for (const s of strMatches) {
  if (s.length > 25 && s.includes(' ') && !s.includes(';') && !s.includes('{')) {
    texts.push(s);
  }
}
console.log(`Found ${texts.length} long text strings. Showing sample:`);
console.log(texts.slice(0, 40).join('\n'));
