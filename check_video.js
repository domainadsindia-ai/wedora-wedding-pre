const fs = require('fs');

const fd = fs.openSync('gemini_generated_video_8eb72810.mp4', 'r');
const stat = fs.fstatSync(fd);
console.log('Video size bytes:', stat.size);

// Read first 100KB to find mvhd or tkhd
const buf = Buffer.alloc(Math.min(stat.size, 1024 * 1024));
fs.readSync(fd, buf, 0, buf.length, 0);
fs.closeSync(fd);

// Simple scan for 'tkhd' box
let pos = 0;
while (pos < buf.length - 8) {
  const size = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'moov' || type === 'trak' || type === 'mdia') {
    pos += 8;
    continue;
  }
  if (type === 'tkhd') {
    const version = buf[pos + 8];
    const widthOffset = version === 1 ? pos + 8 + 80 : pos + 8 + 68;
    const heightOffset = widthOffset + 4;
    const width = buf.readUInt32BE(widthOffset) >> 16;
    const height = buf.readUInt32BE(heightOffset) >> 16;
    console.log(`Track found: ${width}x${height}`);
  }
  if (type === 'mvhd') {
    const version = buf[pos + 8];
    const timeScaleOffset = version === 1 ? pos + 8 + 20 : pos + 8 + 12;
    const durationOffset = timeScaleOffset + 4;
    const timeScale = buf.readUInt32BE(timeScaleOffset);
    const duration = version === 1 ? Number(buf.readBigUInt64BE(durationOffset)) : buf.readUInt32BE(durationOffset);
    console.log(`Movie header: duration = ${(duration / timeScale).toFixed(2)}s, timescale = ${timeScale}`);
  }
  if (size <= 0) break;
  pos += size;
}
