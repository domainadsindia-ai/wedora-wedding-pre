const puppeteer = require('puppeteer-core');

async function testFixed() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const dPage = await browser.newPage();
  await dPage.setViewport({ width: 1920, height: 1080 });
  await dPage.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await dPage.screenshot({ path: 'desktop_1920_opening_fixed.png' });

  const mPage = await browser.newPage();
  await mPage.setViewport({ width: 390, height: 844 });
  await mPage.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await mPage.screenshot({ path: 'mobile_390_opening_fixed.png' });

  await browser.close();
  console.log('Saved fixed screenshots!');
}

testFixed().catch(console.error);
