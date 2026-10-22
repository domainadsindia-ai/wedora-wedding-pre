const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

const targets = ['v$', 'S2', 'UI', 'nM', 'K$', 'pV', 'rV', 'GU', 'wH', 'xH', 'MV', 'TV', 'gV', 'R2', 'rU', 'hU', 'qV', 'MU', '$U', 'DU'];
const results = {};

targets.forEach(t => {
  // search for var t=, const t=, t=
  const regex = new RegExp(`(?:const|let|var|,)\\s*${t.replace('$', '\\$')}\\s*=([^;,]+)`, 'g');
  let match;
  while ((match = regex.exec(code)) !== null) {
    if (!results[t]) results[t] = [];
    results[t].push(match[0].slice(0, 200));
  }
});

console.log(JSON.stringify(results, null, 2));
