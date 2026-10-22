const fs = require('fs');
const comps = JSON.parse(fs.readFileSync('detailed_components.json', 'utf8'));

for (const key of ['I$', 'fM', 'mV', 'sV', 'KV', 'mU', 'LU', 'ZU', 'cH', 'bH']) {
  console.log(`\n=================== COMPONENT ${key} ===================`);
  console.log(comps[key].slice(0, 1500));
}
