const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function extractLastFrame() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <body>
      <video id="v" src="http://localhost:3000/gemini_generated_video_8eb72810.mp4" crossorigin="anonymous" playsinline muted></video>
      <canvas id="c"></canvas>
    </body>
    </html>
  `);

  const info = await page.evaluate(async () => {
    const v = document.getElementById('v');
    await new Promise((resolve, reject) => {
      v.onloadeddata = resolve;
      v.onerror = reject;
      v.load();
    });

    v.currentTime = Math.max(0, v.duration - 0.2); // seek near end
    await new Promise(resolve => {
      v.onseeked = resolve;
    });

    const c = document.getElementById('c');
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(v, 0, 0);

    return {
      dataUrl: c.toDataURL('image/jpeg', 0.85)
    };
  });

  const base64Data = info.dataUrl.replace(/^data:image\/jpeg;base64,/, '');
  fs.writeFileSync('public/opening-video-end.jpg', base64Data, 'base64');
  console.log('Saved public/opening-video-end.jpg');

  await browser.close();
}

extractLastFrame().catch(console.error);
