const fs = require('fs');

const code = fs.readFileSync('ref_bundle.js', 'utf8');

const assetRegex = /["']([^"'\s]+\.(?:png|jpg|jpeg|svg|webp|mp3|mp4|woff2?))["']/gi;
const assets = new Set();
let match;
while ((match = assetRegex.exec(code)) !== null) {
  assets.add(match[1]);
}
console.log('--- ASSETS FOUND ---');
for (const a of Array.from(assets).sort()) {
  console.log(a);
}

// Also let's search for url(...) in ref_style.css
if (fs.existsSync('ref_style.css')) {
  const css = fs.readFileSync('ref_style.css', 'utf8');
  const cssUrlRegex = /url\(['"]?([^'")]+)['"]?\)/gi;
  const cssUrls = new Set();
  while ((match = cssUrlRegex.exec(css)) !== null) {
    cssUrls.add(match[1]);
  }
  console.log('\n--- CSS URLS FOUND ---');
  for (const u of Array.from(cssUrls).sort()) {
    console.log(u);
  }
}
