const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const missing = [
  '/__l5e/assets-v1/14bfbc67-ecae-46ed-a71c-aa26e48df426/getting-there-embroidery.webp',
  '/__l5e/assets-v1/14c85bd5-d8fd-4897-b67a-eef5d9d15427/villa-illustration.png',
  '/__l5e/assets-v1/59745157-22d7-443c-8b72-353ad416e54c/key-tassel.png',
  '/__l5e/assets-v1/80cec06e-0bb2-486d-8933-c33f778511a0/bedside-icon.png',
  '/__l5e/assets-v1/24d0fb52-5346-4d02-9af0-6b6f5e214fc2/corner-floral-embroidery.png',
  '/assets/dress-code-frame-balanced-DkYhbsnD.png',
  '/__l5e/assets-v1/0f4deaf7-8451-446b-933b-570a08da52ce/ballet-clean.woff2'
];

for (const u of missing) {
  const local = path.join('public', u.replace(/\//g, path.sep));
  const dir = path.dirname(local);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const url = 'https://plantillalace.thedigitalyes.com' + u;
  console.log('Downloading with curl:', u);
  try {
    execSync(`curl.exe -s -L -A "Mozilla/5.0" "${url}" -o "${local}"`);
    if (fs.existsSync(local)) {
      console.log(`Saved ${u} size: ${fs.statSync(local).size}`);
    }
  } catch (e) {
    console.error('Failed:', e.message);
  }
}
