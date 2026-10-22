const puppeteer = require('puppeteer-core');

async function testInteraction() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  console.log('Taking initial screenshot...');
  await page.screenshot({ path: 'step1_opening_cover.png' });

  console.log('Clicking to open...');
  // Click on the opening overlay
  await page.click('.fixed.inset-0.z-50');

  // Wait 1 second into the video
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'step2_opening_playing.png' });

  // Wait 3 more seconds for transition
  await new Promise(r => setTimeout(r, 3500));
  await page.screenshot({ path: 'step3_after_transition.png' });

  // Scroll down to check subsequent sections
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'step4_countdown.png' });

  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'step5_location_timeline.png' });

  console.log('All steps completed!');
  await browser.close();
}

testInteraction().catch(console.error);
