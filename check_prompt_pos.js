const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  
  const info = await page.evaluate(() => {
    const el = document.querySelector('.fixed.inset-0.z-50 > div:nth-child(3)');
    if (!el) return 'Element not found';
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return {
      rect: { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width, height: rect.height },
      zIndex: style.zIndex,
      opacity: style.opacity,
      display: style.display,
      visibility: style.visibility,
      color: style.color
    };
  });
  console.log('Prompt element info:', info);
  await browser.close();
})();
