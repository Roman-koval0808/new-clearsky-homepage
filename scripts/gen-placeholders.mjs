// Generate real raster PNG placeholders (no deps) at the exact paths the
// components reference. Solid ClearSky-navy fill with a subtle diagonal so it
// reads as "placeholder". Overwrites the broken SVG-in-.jpg/.png files.
// Real assets dropped at the same paths later will simply replace these.
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

import { fileURLToPath } from 'node:url';
const ROOT = fileURLToPath(new URL('../static/images/', import.meta.url));

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xEDB88320 & -(c & 1));
  }
  return ~c >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}
// Solid-fill PNG with two brand colors split on a diagonal band.
function png(w, h, [r1, g1, b1], [r2, g2, b2]) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 2; // 8-bit, truecolor RGB
  const raw = Buffer.alloc((w * 3 + 1) * h);
  let p = 0;
  for (let y = 0; y < h; y++) {
    raw[p++] = 0; // filter: none
    for (let x = 0; x < w; x++) {
      const diag = (x / w + y / h) / 2;
      const t = diag; // 0..1
      raw[p++] = Math.round(r1 + (r2 - r1) * t);
      raw[p++] = Math.round(g1 + (g2 - g1) * t);
      raw[p++] = Math.round(b1 + (b2 - b1) * t);
    }
  }
  const idat = deflateSync(raw);
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

const NAVY = [31, 42, 68], BLUE = [61, 109, 181];
// path (relative to static/images) → [w, h]
const files = {
  'hero-tourism.png': [500, 545],
  'main-street.jpg': [1200, 700],
  'trades-chat-circle.jpg': [600, 600],
  'trades-video.jpg': [800, 450],
  'sector-tourism.jpg': [600, 400],
  'sector-trades.jpg': [600, 400],
  'sector-manufacturing.jpg': [600, 400],
  'sector-professional.jpg': [600, 400],
  'icon-discovery.jpg': [120, 120],
  'icon-engagement.jpg': [120, 120],
  'icon-conversion.jpg': [120, 120],
  'icon-growth.jpg': [120, 120],
  'video-discovery.jpg': [800, 450],
  'video-engagement.jpg': [800, 450],
  'video-conversion.jpg': [800, 450],
  'video-growth.jpg': [800, 450],
  'websites/site-1.jpg': [600, 450],
  'websites/site-2.jpg': [600, 450],
  'websites/site-3.jpg': [600, 450],
  'about/platform-video-poster.png': [1000, 560]
};

let n = 0;
for (const [rel, [w, h]] of Object.entries(files)) {
  const abs = join(ROOT, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, png(w, h, NAVY, BLUE));
  n++;
}
console.log(`wrote ${n} raster placeholders under ${ROOT}`);
