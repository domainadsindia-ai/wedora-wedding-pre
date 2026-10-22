const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  
  const headings = await page.$$eval('h2, h3', els => els.map(e => e.innerText));
  console.log('Headings found on page:');
  console.log(headings);
  await browser.close();
})();
