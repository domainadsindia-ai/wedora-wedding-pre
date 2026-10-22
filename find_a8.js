const fs = require('fs');
const code = fs.readFileSync('ref_bundle.js', 'utf8');

for (const name of ['A8', 'O8', 'AI', 'UI']) {
  const idx = code.indexOf(name + '=');
  if (idx !== -1) {
    console.log(code.slice(idx - 20, idx + 200));
  }
}
