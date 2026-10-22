const puppeteer = require('puppeteer-core');

async function checkDesktop() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const viewports = [
    { name: 'desktop_1366x768', width: 1366, height: 768 },
    { name: 'desktop_1920x1080', width: 1920, height: 1080 },
    { name: 'tablet_768x1024', width: 768, height: 1024 },
    { name: 'mobile_430x932', width: 430, height: 932 },
    { name: 'mobile_390x844', width: 390, height: 844 },
    { name: 'mobile_360x800', width: 360, height: 800 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: `vp_${vp.name}_opening.png` });

    // Click to enter
    await page.click('.fixed.inset-0.z-50');
    await new Promise(r => setTimeout(r, 4500)); // wait for transition

    await page.screenshot({ path: `vp_${vp.name}_hero.png` });
    await page.evaluate(() => window.scrollBy(0, 1200));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: `vp_${vp.name}_content.png` });

    await page.close();
    console.log(`Finished viewport: ${vp.name}`);
  }

  await browser.close();
  console.log('All viewports tested successfully!');
}

checkDesktop().catch(console.error);
