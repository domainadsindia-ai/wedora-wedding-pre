const fs = require('fs');
const css = fs.readFileSync('public/assets/index-tbesyw6S.css', 'utf8');

let idx = 0;
while ((idx = css.indexOf('-webkit-text-stroke', idx)) !== -1) {
  console.log('Found -webkit-text-stroke at', idx);
  console.log(css.slice(Math.max(0, idx - 40), idx + 80));
  idx += 19;
}
