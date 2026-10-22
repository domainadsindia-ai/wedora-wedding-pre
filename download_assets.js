const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('ref_bundle.js', 'utf8');
const assetRegex = /["'](\/__l5e\/assets-v1\/[a-f0-9-]+\/[a-zA-Z0-9_.-]+)["']/g;
const urls = new Set();
let m;
while ((m = assetRegex.exec(code)) !== null) {
  urls.add(m[1]);
}

const assets2 = code.match(/["'](\/assets\/[^"']+\.(?:png|jpg|jpeg|svg|webp|woff2))["']/g) || [];
for (const a of assets2) {
  urls.add(a.replace(/['"]/g, ''));
}

async function fetchWithTimeout(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': '*/*',
        'Referer': 'https://plantillalace.thedigitalyes.com/'
      }
    });
    clearTimeout(timeout);
    return res;
  } catch (e) {
    clearTimeout(timeout);
    throw e;
  }
}

async function downloadAll() {
  const baseDir = path.join(__dirname, 'public');
  const list = Array.from(urls);
  console.log(`Checking ${list.length} assets...`);

  let downloaded = 0;
  for (const relUrl of list) {
    const localPath = path.join(baseDir, relUrl.replace(/\//g, path.sep));
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
      continue;
    }

    const fullUrl = 'https://plantillalace.thedigitalyes.com' + relUrl;
    try {
      const res = await fetchWithTimeout(fullUrl, 8000);
      if (!res.ok) {
        console.error(`Failed ${res.status}: ${fullUrl}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(localPath, buffer);
      console.log(`Saved [${++downloaded}] ${path.basename(localPath)} (${buffer.length} bytes)`);
      await new Promise(r => setTimeout(r, 200));
    } catch (err) {
      console.error(`Error ${relUrl}: ${err.message}`);
    }
  }
  console.log(`Finished! Downloaded ${downloaded} new files.`);
}

downloadAll();
