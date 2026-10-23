const puppeteer = require('puppeteer-core');

async function testAll() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required']
  });

  const viewports = [
    { name: 'mobile_390x844', width: 390, height: 844 },
    { name: 'tablet_768x1024', width: 768, height: 1024 },
    { name: 'desktop_1920x1080', width: 1920, height: 1080 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    const consoleLogs = [];
    page.on('console', msg => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
    page.on('pageerror', err => consoleLogs.push(`[ERROR] ${err.toString()}`));

    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

    // Skip opening video to check sections
    const skipBtn = await page.$('button');
    if (skipBtn) await skipBtn.click();
    else await page.click('.fixed.inset-0.z-50');

    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: `vp_${vp.name}_sec1_hero.png` });

    // Page 1: Invitation
    await page.evaluate(() => {
      const el = document.getElementById('invitation');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: `vp_${vp.name}_sec1_invitation.png` });

    // Page 2: Countdown
    await page.evaluate(() => {
      const el = document.getElementById('countdown');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: `vp_${vp.name}_sec2_countdown.png` });

    // Venues
    await page.evaluate(() => {
      const el = document.getElementById('location');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: `vp_${vp.name}_venues.png` });

    // Page 3: Reception
    await page.evaluate(() => {
      const el = document.getElementById('reception');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: `vp_${vp.name}_sec3_reception.png` });

    // Footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: `vp_${vp.name}_footer.png` });

    const errors = consoleLogs.filter(l => l.startsWith('[error]') || l.startsWith('[ERROR]'));
    console.log(`Viewport ${vp.name} completed. Errors:`, errors);
    await page.close();
  }

  await browser.close();
  console.log('Detailed viewport verification complete!');
}

testAll().catch(console.error);
