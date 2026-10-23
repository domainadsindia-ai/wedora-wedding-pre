const puppeteer = require('puppeteer-core');

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--autoplay-policy=no-user-gesture-required']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });

  const errors = [];
  page.on('pageerror', err => errors.push(err.toString()));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  console.log('1. Loading http://localhost:3000/...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'verify_01_envelope.png' });

  console.log('2. Opening envelope...');
  await page.click('.fixed.inset-0.z-50');

  // Wait for opening video / transition to Hero
  await new Promise(r => setTimeout(r, 4500));
  await page.screenshot({ path: 'verify_02_hero.png' });

  // Check Hero text
  const heroText = await page.evaluate(() => {
    const hero = document.querySelector('section');
    return hero ? hero.innerText : '';
  });
  console.log('\n--- HERO TEXT ---\n', heroText);

  // Scroll to Page 1: Invitation
  console.log('3. Scrolling to Invitation Section...');
  await page.evaluate(() => {
    const el = document.getElementById('invitation');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollBy(0, 750);
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'verify_03_invitation.png' });

  const invText = await page.evaluate(() => {
    const el = document.getElementById('invitation');
    return el ? el.innerText : '';
  });
  console.log('\n--- PAGE 1: INVITATION TEXT ---\n', invText);

  // Scroll to Page 2: Countdown
  console.log('4. Scrolling to Countdown Section...');
  await page.evaluate(() => {
    const el = document.getElementById('countdown');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    else window.scrollBy(0, 900);
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'verify_04_countdown.png' });

  const countText = await page.evaluate(() => {
    const el = document.getElementById('countdown');
    return el ? el.innerText : '';
  });
  console.log('\n--- PAGE 2: COUNTDOWN TEXT ---\n', countText);

  // Scroll to Venues
  console.log('5. Scrolling to Venues Section...');
  await page.evaluate(() => {
    const el = document.getElementById('location');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollBy(0, 800);
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'verify_05_venues.png' });

  const venuesText = await page.evaluate(() => {
    const el = document.getElementById('location');
    return el ? el.innerText : '';
  });
  console.log('\n--- VENUES TEXT ---\n', venuesText);

  // Scroll to Page 3: Reception
  console.log('6. Scrolling to Reception Section...');
  await page.evaluate(() => {
    const el = document.getElementById('reception');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollBy(0, 900);
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'verify_06_reception.png' });

  const recText = await page.evaluate(() => {
    const el = document.getElementById('reception');
    return el ? el.innerText : '';
  });
  console.log('\n--- PAGE 3: RECEPTION TEXT ---\n', recText);

  // Scroll to Footer
  console.log('7. Scrolling to Footer...');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'verify_07_footer.png' });

  const footerText = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    return footer ? footer.innerText : '';
  });
  console.log('\n--- FOOTER TEXT ---\n', footerText);

  // Desktop view check (1366x768)
  console.log('8. Testing Desktop Viewport (1366x768)...');
  await page.setViewport({ width: 1366, height: 768 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'verify_desktop_hero.png' });

  await page.evaluate(() => {
    const el = document.getElementById('invitation');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'verify_desktop_invitation.png' });

  await page.evaluate(() => {
    const el = document.getElementById('countdown');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'verify_desktop_countdown.png' });

  await page.evaluate(() => {
    const el = document.getElementById('reception');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'verify_desktop_reception.png' });

  console.log('\n--- ERRORS DETECTED ---', errors);

  await browser.close();
}

verify().catch(console.error);
