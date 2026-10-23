const puppeteer = require('puppeteer-core');

async function testTimeline() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 800, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  const btn = await page.$('button');
  if (btn) await btn.click();
  await new Promise(r => setTimeout(r, 1500));

  await page.evaluate(() => {
    const el = document.getElementById('reception');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({ path: 'test_current_reception_360.png' });

  // Check bounding rects of timeline items
  const items = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('#reception .grid')).map((g, idx) => {
      const left = g.children[0];
      const heart = g.children[1];
      const right = g.children[2];
      const winW = window.innerWidth;
      const rightRect = right ? right.getBoundingClientRect() : null;
      return {
        idx,
        leftW: left ? Math.round(left.getBoundingClientRect().width) : 0,
        rightW: right ? Math.round(rightRect.width) : 0,
        rightRight: right ? Math.round(rightRect.right) : 0,
        winW,
        isClipped: right ? rightRect.right > winW : false,
        descText: right ? right.innerText.slice(0, 40) : '',
        computedColor: right ? window.getComputedStyle(right.children[1] || right).color : ''
      };
    });
  });

  console.log('Current timeline metrics at 360px:', items);
  await browser.close();
}

testTimeline().catch(console.error);
