const puppeteer = require('puppeteer-core');

async function audit() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required']
  });

  const widths = [320, 360, 375, 390, 430, 768, 1024, 1440];

  for (const width of widths) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 800, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

    // Skip envelope to audit content
    const skipBtn = await page.$('button');
    if (skipBtn) await skipBtn.click();
    else await page.click('.fixed.inset-0.z-50');
    await new Promise(r => setTimeout(r, 2000));

    // Audit horizontal overflow
    const overflowInfo = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      const overflowingElements = [];

      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > winW + 1 || rect.left < -1) {
          // Check if parent has overflow hidden
          let parent = el.parentElement;
          let isContained = false;
          while (parent && parent !== document.body) {
            const style = window.getComputedStyle(parent);
            if (style.overflow === 'hidden' || style.overflowX === 'hidden' || style.overflow === 'clip' || style.overflowX === 'clip') {
              isContained = true;
              break;
            }
            parent = parent.parentElement;
          }
          if (!isContained && rect.width > 0 && rect.height > 0) {
            overflowingElements.push({
              tag: el.tagName,
              id: el.id,
              className: el.className ? el.className.toString().slice(0, 50) : '',
              rect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
              text: el.innerText ? el.innerText.slice(0, 30) : ''
            });
          }
        }
      });

      // Section bounding boxes
      const sections = ['invitation', 'countdown', 'location', 'reception'].map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, exists: false };
        const r = el.getBoundingClientRect();
        return {
          id,
          exists: true,
          width: Math.round(r.width),
          height: Math.round(r.height),
          left: Math.round(r.left),
          right: Math.round(r.right)
        };
      });

      return {
        docW,
        winW,
        hasDocOverflow: docW > winW,
        overflowCount: overflowingElements.length,
        overflowSample: overflowingElements.slice(0, 5),
        sections
      };
    });

    console.log(`\n================== VIEWPORT: ${width}px ==================`);
    console.log(`Window width: ${overflowInfo.winW}px, Document scrollWidth: ${overflowInfo.docW}px, Has overflow: ${overflowInfo.hasDocOverflow}`);
    if (overflowInfo.hasDocOverflow) {
      console.log('Overflowing elements count:', overflowInfo.overflowCount);
      console.log('Sample overflowing elements:', overflowInfo.overflowSample);
    }
    console.log('Sections check:', overflowInfo.sections);

    // Take screenshot of each section at 320px and 390px
    if (width === 320 || width === 390) {
      for (const sec of ['invitation', 'countdown', 'location', 'reception']) {
        await page.evaluate(sId => {
          const el = document.getElementById(sId);
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
        }, sec);
        await new Promise(r => setTimeout(r, 600));
        await page.screenshot({ path: `audit_${width}_${sec}.png` });
      }
    }

    await page.close();
  }

  await browser.close();
  console.log('\nAudit complete!');
}

audit().catch(console.error);
