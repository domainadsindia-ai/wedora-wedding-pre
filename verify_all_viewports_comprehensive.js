const puppeteer = require('puppeteer-core');

async function fullAudit() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required']
  });

  const viewports = [
    { label: '320px (Small Mobile)', width: 320, height: 600 },
    { label: '360px (Standard Android)', width: 360, height: 740 },
    { label: '375px (iPhone SE/Mini)', width: 375, height: 667 },
    { label: '390px (Modern iPhone)', width: 390, height: 844 },
    { label: '430px (Large Mobile)', width: 430, height: 932 },
    { label: '768px (Tablet)', width: 768, height: 1024 },
    { label: '1024px (Small Desktop)', width: 1024, height: 768 },
    { label: '1440px (Desktop)', width: 1440, height: 900 }
  ];

  const results = [];

  for (const vp of viewports) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', err => errors.push(err.toString()));
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000/?vp=' + vp.width, { waitUntil: 'networkidle2' });

    // Skip opening video to content
    const skipBtn = await page.$('button');
    if (skipBtn) await skipBtn.click();
    else await page.click('.fixed.inset-0.z-50');
    await new Promise(r => setTimeout(r, 2200));

    const check = await page.evaluate(w => {
      const docW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      const bodyW = document.body.scrollWidth;

      const invNames = Array.from(document.querySelectorAll('#invitation h2')).map(h => ({
        text: h.innerText.trim(),
        fontSize: window.getComputedStyle(h).fontSize,
        h: Math.round(h.getBoundingClientRect().height),
        singleLine: Math.round(h.getBoundingClientRect().height) < 45
      }));

      const countdownDigits = Array.from(document.querySelectorAll('.countdown-digits-text')).map(d => ({
        val: d.innerText.trim(),
        fontSize: window.getComputedStyle(d).fontSize,
        w: Math.round(d.getBoundingClientRect().width)
      }));

      const countdownLabels = Array.from(document.querySelectorAll('.countdown-labels-text')).map(l => ({
        label: l.innerText.trim(),
        fontSize: window.getComputedStyle(l).fontSize,
        w: Math.round(l.getBoundingClientRect().width)
      }));

      const receptionCouple = document.querySelector('.reception-couple');

      return {
        winW,
        docW,
        hasHorizontalScroll: docW > winW || bodyW > winW,
        invNames,
        countdownDigits,
        countdownLabels,
        receptionCouple: receptionCouple ? {
          text: receptionCouple.innerText.trim(),
          fontSize: window.getComputedStyle(receptionCouple).fontSize,
          h: Math.round(receptionCouple.getBoundingClientRect().height)
        } : null
      };
    }, vp.width);

    // Save screenshots of the 3 key sections for 320, 390, 768, 1440
    if ([320, 390, 768, 1440].includes(vp.width)) {
      await page.evaluate(() => {
        const el = document.getElementById('invitation');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: `vp_${vp.width}_invitation.png` });

      await page.evaluate(() => {
        const el = document.getElementById('countdown');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      });
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: `vp_${vp.width}_countdown.png` });

      await page.evaluate(() => {
        const el = document.getElementById('reception');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: `vp_${vp.width}_reception.png` });
    }

    results.push({
      viewport: vp.label,
      width: vp.width,
      hasHorizontalScroll: check.hasHorizontalScroll,
      docWidth: check.docW,
      windowWidth: check.winW,
      invNames: check.invNames,
      countdownDigitsSample: check.countdownDigits.slice(0, 2),
      countdownLabelsSample: check.countdownLabels.slice(0, 2),
      receptionCouple: check.receptionCouple,
      errors
    });

    await page.close();
  }

  await browser.close();

  console.log('\n======================================================');
  console.log('             FULL VIEWPORT AUDIT REPORT                ');
  console.log('======================================================\n');
  results.forEach(r => {
    console.log(`[${r.viewport}]`);
    console.log(`- Horizontal Scroll: ${r.hasHorizontalScroll ? 'FAILED (Overflow detected!)' : 'PASSED (0px overflow)'} (doc: ${r.docWidth}px / win: ${r.windowWidth}px)`);
    console.log(`- Invitation Names Single Line: ${r.invNames.every(n => n.singleLine) ? 'PASSED (All 1 line)' : 'WRAPPED'} (${r.invNames.map(n => `${n.text}: ${n.fontSize}, h=${n.h}px`).join(' | ')})`);
    console.log(`- Countdown Digits: ${r.countdownDigitsSample.map(d => `${d.val} (${d.fontSize})`).join(', ')}`);
    console.log(`- Countdown Labels: ${r.countdownLabelsSample.map(l => `${l.label} (${l.fontSize})`).join(', ')}`);
    console.log(`- Reception Couple: ${r.receptionCouple ? `${r.receptionCouple.text} (${r.receptionCouple.fontSize}, h=${r.receptionCouple.h}px)` : 'N/A'}`);
    console.log(`- Errors: ${r.errors.length === 0 ? 'None (0)' : JSON.stringify(r.errors)}\n`);
  });
}

fullAudit().catch(console.error);
