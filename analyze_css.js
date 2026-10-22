const fs = require('fs');
const css = fs.readFileSync('ref_style.css', 'utf8');

// Look for :root variables
const rootMatch = css.match(/:root\s*\{[^}]+\}/g);
console.log('--- ROOT VARIABLES ---');
if (rootMatch) {
  rootMatch.forEach(r => console.log(r));
}

// Look for font families
const fontMatches = css.match(/font-family:[^;}]+/g);
console.log('\n--- FONT FAMILIES ---');
if (fontMatches) {
  const fonts = new Set(fontMatches);
  fonts.forEach(f => console.log(f));
}

// Look for keyframe animations
const keyframes = css.match(/@keyframes\s+([a-zA-Z0-9_-]+)/g);
console.log('\n--- KEYFRAMES ---');
if (keyframes) {
  console.log(Array.from(new Set(keyframes)));
}
