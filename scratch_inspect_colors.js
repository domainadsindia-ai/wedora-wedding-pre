const fs = require('fs');
const css = fs.readFileSync('public/assets/index-tbesyw6S.css', 'utf8');

const matches = css.match(/--foreground:[^;}]+/g);
console.log('Foreground definitions:', matches);

const bgMatches = css.match(/--background:[^;}]+/g);
console.log('Background definitions:', bgMatches);

const rootIdx = css.indexOf(':root');
if (rootIdx !== -1) {
  console.log('Root vars:');
  console.log(css.slice(rootIdx, rootIdx + 600));
}
