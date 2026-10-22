const fs = require('fs');
const comps = JSON.parse(fs.readFileSync('detailed_components.json', 'utf8'));

for (const key of ['sV', 'KV', 'mU', 'LU']) {
  console.log(`\n=================== COMPONENT ${key} ===================`);
  console.log(comps[key].slice(0, 2500));
}
