const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

// Find translations dictionary in ref_bundle.js
const i18nIdx = code.indexOf('events:{');
if (i18nIdx !== -1) {
  console.log('--- EVENTS / STRINGS ---');
  console.log(code.slice(i18nIdx - 200, i18nIdx + 1500));
}

// Find all translation objects
const transIdx = code.indexOf('countdown:{');
if (transIdx !== -1) {
  console.log('--- COUNTDOWN / STRINGS ---');
  console.log(code.slice(transIdx - 100, transIdx + 800));
}

// Find gifts / rsvp / footer strings
const giftsIdx = code.indexOf('gifts:{');
if (giftsIdx !== -1) {
  console.log('--- GIFTS STRINGS ---');
  console.log(code.slice(giftsIdx - 50, giftsIdx + 800));
}
