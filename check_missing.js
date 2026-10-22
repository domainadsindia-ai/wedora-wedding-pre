const fs = require('fs');
const path = require('path');
const code = fs.readFileSync('ref_bundle.js', 'utf8');
const assetRegex = /["'](\/__l5e\/assets-v1\/[a-f0-9-]+\/[a-zA-Z0-9_.-]+)["']/g;
const urls = new Set();
let m;
while ((m = assetRegex.exec(code)) !== null) urls.add(m[1]);
const missing = [];
for (const u of urls) {
  const p = path.join('public', u.replace(/\//g, path.sep));
  if (!fs.existsSync(p)) missing.push(u);
}
console.log('Missing count:', missing.length);
console.log('Missing list:', missing);
