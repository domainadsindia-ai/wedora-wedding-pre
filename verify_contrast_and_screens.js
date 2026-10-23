const puppeteer = require('puppeteer-core');

async function testPage() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.message);
    errors.push(err.message);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') console.error('CONSOLE ERROR:', msg.text());
  });

  await page.setViewport({ width: 360, height: 800, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  // Click Skip or open envelope
  const skipBtn = await page.$('button');
  if (skipBtn) await skipBtn.click();
  await new Promise(r => setTimeout(r, 1600));

  // Verify sections exist
  const sectionsReport = await page.evaluate(() => {
    const heroH1 = document.querySelector('h1.hero-title');
    const invSection = document.getElementById('invitation');
    const countdownSec = document.getElementById('countdown');
    const recSection = document.getElementById('reception');
    const locSection = document.getElementById('location');
    const footer = document.querySelector('footer');

    function getStyle(el) {
      if (!el) return null;
      const cs = window.getComputedStyle(el);
      return {
        color: cs.color,
        fontWeight: cs.fontWeight,
        fontSize: cs.fontSize,
        textStroke: cs.webkitTextStroke,
        text: el.innerText.slice(0, 35)
      };
    }

    return {
      hero: {
        h1: getStyle(heroH1),
        intro: getStyle(document.querySelector('section:first-of-type p')),
        date: getStyle(document.querySelector('section:first-of-type p:nth-of-type(3)')),
        venue: getStyle(document.querySelector('section:first-of-type div div p:first-of-type')),
      },
      invitation: {
        couple: getStyle(invSection?.querySelector('.invitation-couple')),
        intro: getStyle(invSection?.querySelector('p:first-of-type')),
        parentsBride: getStyle(invSection?.querySelector('.space-y-1\\.5 p:first-of-type') || invSection?.querySelectorAll('p')[1]),
        lead: getStyle(invSection?.querySelectorAll('p')[4] || invSection?.querySelector('.uppercase')),
        date: getStyle(invSection?.querySelector('.border-y p:first-of-type')),
        muhurtham: getStyle(invSection?.querySelector('.border-y p:last-of-type')),
        venue: getStyle(invSection?.querySelectorAll('.space-y-1 p')[0]),
        city: getStyle(invSection?.querySelectorAll('.space-y-1 p')[1])
      },
      reception: {
        heading: getStyle(recSection?.querySelector('h2')),
        couple: getStyle(recSection?.querySelector('.reception-couple')),
        date: getStyle(recSection?.querySelector('.border-y p:first-of-type')),
        time: getStyle(recSection?.querySelector('.border-y p:last-of-type')),
        venue: getStyle(recSection?.querySelectorAll('.space-y-1 p')[0] || recSection?.querySelectorAll('p')[4]),
        timelineItems: Array.from(recSection?.querySelectorAll('.grid') || []).map(g => ({
          time: getStyle(g.querySelector('.timeline-time-text')),
          desc: getStyle(g.querySelector('.break-words') || g.querySelector('.font-helvetica'))
        }))
      },
      venues: {
        heading: getStyle(locSection?.querySelector('h2')),
        firstVenue: getStyle(locSection?.querySelectorAll('.font-display')[1]),
        firstBtn: getStyle(locSection?.querySelector('a'))
      },
      footer: {
        couple: getStyle(footer?.querySelector('.font-display.text-3xl, .font-display.text-4xl, .font-display.text-6xl')),
        date: getStyle(footer?.querySelectorAll('p')[4])
      }
    };
  });

  console.log('--- DETAILED STYLES & CONTRAST REPORT ---');
  console.log(JSON.stringify(sectionsReport, null, 2));

  // Take screenshots of each section at 360px
  await page.screenshot({ path: 'fixed_hero_360.png' });

  await page.evaluate(() => {
    document.getElementById('invitation')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'fixed_invitation_360.png' });

  await page.evaluate(() => {
    document.getElementById('reception')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'fixed_reception_360.png' });

  await page.evaluate(() => {
    document.getElementById('location')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'fixed_venues_360.png' });

  console.log('Screenshots saved. Errors encountered:', errors.length);
  await browser.close();
}

testPage().catch(console.error);
