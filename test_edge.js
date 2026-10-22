const puppeteer = require('puppeteer-core');

async function test() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const consoleLogs = [];
  page.on('console', msg => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => consoleLogs.push(`[ERROR] ${err.toString()}`));

  await page.setViewport({ width: 390, height: 844 });
  console.log('Navigating to http://localhost:3000/...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  console.log('Page title:', await page.title());
  console.log('Console logs:', consoleLogs);

  const rootHtml = await page.$eval('#root', el => el.innerHTML);
  console.log('Root HTML length:', rootHtml.length);
  console.log('Root HTML sample:', rootHtml.slice(0, 500));

  await page.screenshot({ path: 'screenshot_initial.png' });
  console.log('Saved screenshot_initial.png');

  await browser.close();
}

test().catch(console.error);
