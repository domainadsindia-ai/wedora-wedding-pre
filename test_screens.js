const puppeteer = require('puppeteer-core');

async function checkScreens() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  // Test Mobile
  const mobile = await browser.newPage();
  await mobile.setViewport({ width: 390, height: 844 });
  await mobile.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await mobile.screenshot({ path: 'screen_mobile_before.png' });

  // Test Desktop
  const desktop = await browser.newPage();
  await desktop.setViewport({ width: 1366, height: 768 });
  await desktop.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await desktop.screenshot({ path: 'screen_desktop_before.png' });

  await browser.close();
  console.log('Screenshots saved!');
}

checkScreens().catch(console.error);
