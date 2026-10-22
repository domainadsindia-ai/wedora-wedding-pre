const puppeteer = require('puppeteer-core');
const path = require('path');

async function fullTest() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  
  const logs = [];
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => logs.push(`[ERROR] ${err.toString()}`));

  console.log('1. Loading site...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'test_step1_envelope.png' });

  console.log('2. Clicking envelope to play video & music...');
  await page.click('.fixed.inset-0.z-50');

  // Wait 1.8 seconds (video playing)
  await new Promise(r => setTimeout(r, 1800));
  await page.screenshot({ path: 'test_step2_video_playing.png' });

  // Wait 2.5 seconds (envelope open, hero names revealing)
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: 'test_step3_hero_revealed.png' });

  // Wait for fade to finish completely (scroll unlocked)
  await new Promise(r => setTimeout(r, 1500));

  // Check audio button
  const audioBtn = await page.$('button[aria-label="Silenciar"], button[aria-label="Activar sonido"]');
  console.log('Audio button present:', !!audioBtn);

  // Scroll to Quote
  console.log('3. Scrolling to Quote section...');
  await page.evaluate(() => {
    const el = document.querySelector('section.pt-20, section:nth-of-type(2)');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    else window.scrollBy(0, 600);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test_step4_quote.png' });

  // Scroll to Countdown
  console.log('4. Scrolling to Countdown...');
  await page.evaluate(() => {
    const el = document.getElementById('countdown');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    else window.scrollBy(0, 700);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test_step5_countdown.png' });

  // Scroll to Location
  console.log('5. Scrolling to Location...');
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test_step6_location.png' });

  // Scroll to Timeline / Events
  console.log('6. Scrolling to Schedule...');
  await page.evaluate(() => window.scrollBy(0, 900));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test_step7_schedule.png' });

  // Scroll to Dress Code
  console.log('7. Scrolling to Dress Code...');
  await page.evaluate(() => window.scrollBy(0, 900));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test_step8_dress_code.png' });

  // Scroll to Transportation & Stay
  console.log('8. Scrolling to Transportation & Stay...');
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test_step9_transport_stay.png' });

  // Scroll to Gifts & RSVP
  console.log('9. Scrolling to Gifts & RSVP...');
  await page.evaluate(() => {
    const el = document.getElementById('rsvp');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    else window.scrollBy(0, 1100);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test_step10_rsvp.png' });

  // Scroll to Footer
  console.log('10. Scrolling to Footer...');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test_step11_footer.png' });

  console.log('Test completed! Console logs:');
  console.log(logs);

  await browser.close();
}

fullTest().catch(console.error);
