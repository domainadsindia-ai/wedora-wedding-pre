const puppeteer = require('puppeteer-core');

async function test() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  
  page.on('requestfailed', req => {
    console.log('FAILED REQUEST:', req.url(), req.failure().errorText);
  });
  page.on('response', res => {
    if (res.status() >= 400) {
      console.log('HTTP ERROR:', res.status(), res.url());
    }
  });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await browser.close();
}

test().catch(console.error);
