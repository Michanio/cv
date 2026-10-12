// Regenerates the raster icons and the social preview image in public/.
// Run with `npm run images` after changing public/favicon.svg or the text below.
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const serif = "'Source Serif 4', 'Noto Serif', Georgia, serif";
const sans = "'Source Sans 3', 'Noto Sans', Arial, sans-serif";

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f3f4f6"/>
  <rect x="40" y="40" width="1120" height="550" fill="#ffffff" stroke="#e6e8ee"/>
  <text x="110" y="270" font-family="${serif}" font-size="104" font-weight="600" fill="#1e2a44">Michał Korulczyk</text>
  <text x="112" y="345" font-family="${sans}" font-size="30" font-weight="600" letter-spacing="5" fill="#a8813f">TECHNICAL LEAD · SENIOR BACKEND ENGINEER</text>
  <rect x="110" y="392" width="980" height="2" fill="#d9c9a8"/>
  <text x="112" y="452" font-family="${sans}" font-size="30" letter-spacing="5" fill="#6b7384">RAILS · DDD · EVENT-DRIVEN</text>
  <text x="112" y="510" font-family="${sans}" font-size="28" fill="#6b7384">Ruby on Rails · Elixir · Kafka · AWS · Kubernetes</text>
</svg>`;

const favicon = await readFile('public/favicon.svg');

await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(favicon, { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');

// Minimal .ico container around a 32px PNG, for browsers that only ask for /favicon.ico.
const png = await sharp(favicon, { density: 300 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18); // offset of the PNG data
await writeFile('public/favicon.ico', Buffer.concat([header, png]));
