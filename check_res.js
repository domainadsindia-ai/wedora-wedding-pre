const fs = require('fs');
const buf = fs.readFileSync('gemini_generated_video_8eb72810.mp4');

// Search for 'avcC' or visual sample entry
const avcIndex = buf.indexOf(Buffer.from('avc1'));
if (avcIndex !== -1) {
  // avc1 box format: 6 bytes reserved, 2 data reference index, 2 pre_defined, 2 reserved, 12 pre_defined, 2 width, 2 height
  const w = buf.readUInt16BE(avcIndex + 24 + 4); // sample entry starts right after box header (4 size, 4 type)
  const h = buf.readUInt16BE(avcIndex + 24 + 6);
  console.log(`Video resolution from avc1: ${w}x${h}`);
}
