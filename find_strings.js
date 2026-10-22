const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

const searchStrings = ['gifts.title', 'countdown.days', 'events.title', 'footer.madeBy', 'rsvp.title', 'where to stay', 'Villa Aurelia'];

for (const s of searchStrings) {
  const idx = code.indexOf(s);
  console.log(`${s}: index ${idx}`);
  if (idx !== -1) {
    console.log(code.slice(Math.max(0, idx - 100), Math.min(code.length, idx + 200)));
  }
}
