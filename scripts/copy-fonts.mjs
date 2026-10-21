// Menyalin font ke www/fonts supaya aplikasi tampil sama persis saat offline.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
const jobs = [
  ["plus-jakarta-sans", [400, 500, 600, 700]],
  ["sora", [600, 700, 800]]
];
mkdirSync("www/fonts", { recursive: true });
let missing = 0;
for (const [slug, weights] of jobs) {
  for (const w of weights) {
    const from = `node_modules/@fontsource/${slug}/files/${slug}-latin-${w}-normal.woff2`;
    const to = `www/fonts/${slug}-${w}.woff2`;
    if (existsSync(from)) copyFileSync(from, to);
    else { console.warn("Font tidak ditemukan, memakai font sistem:", from); missing++; }
  }
}
console.log(missing ? `Selesai dengan ${missing} font hilang.` : "Semua font tersalin.");
