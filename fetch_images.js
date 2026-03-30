import fs from 'fs';
import https from 'https';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const items = [
  "Midnight blue Silk Slip Dress",
  "Classic Beige minimalist tailored Trench Coat",
  "Cashmere Turtleneck Mens Sweater",
  "Italian charcoal Wool blazer men",
  "Oversized Linen Shirt Women white",
  "structured Leather Crossbody Bag",
  "Vintage Aviator Sunglasses isolated",
  "Womens Tailored Wide-Leg black Trousers",
  "Signature Leather Ankle Boots with heel",
  "Automatic Chronograph Rolex style luxury watch close up",
  "Silk Abstract modern Patterned Scarf folded flat",
  "Mens Double-Breasted dark Wool topCoat",
  "flowing Pleated Midi Skirt",
  "white Cotton Poplin chic Blouse",
  "Structured blue Denim jacket women",
  "camel color Ribbed Knit Maxi Dress",
  "delicate silk Camisole top",
  "sleek cropped High-Rise Cigarette Pants womens",
  "ivory Chunky Cable Knit Sweater",
  "subtle elegant Floral Wrap Dress wrap style",
  "plush black Velvet Evening Blazer women",
  "Minimalist two-piece premium cotton Lounge Set",
  "Classic light blue men's Oxford Shirt",
  "Mens khaki Slim Fit Chinos trousers",
  "Mens dark navy Merino Wool Crewneck sweater",
  "brown Suede Bomber Jacket men",
  "Mens crisp charcoal Tailored Dress Pants",
  "Minimalist delicate sterling Silver chain Necklace flat",
  "wide-brimmed Woven Fedora Hat accessories",
  "rolled up men's Leather Formal Belt isolated",
  "minimalist Canvas fabric Tote Bag blank",
  "14k Gold continuous Hoop Earrings macro jewelry",
  "cozy ribbed gray Cashmere Winter Beanie",
  "premium Tortoiseshell Square frame Glasses clear lenses"
];

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
      return download(res.headers.location, dest).then(resolve).catch(reject);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      resolve(dest);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => reject(err));
  });
});

async function run() {
  console.log("Starting bulk image generation and download...");
  for (let i = 0; i < items.length; i++) {
    const prompt = encodeURIComponent(items[i] + ' premium high-end fashion editorial photography on plain background studio lighting minimalism');
    const url = `https://image.pollinations.ai/prompt/${prompt}?width=800&height=1200&nologo=true`;
    const dest = path.join(dir, `item_${i + 1}.jpg`);
    
    if (fs.existsSync(dest)) {
        console.log(`Skipping image ${i + 1}, already exists.`);
        continue;
    }

    try {
      await download(url, dest);
      console.log(`Downloaded image ${i + 1} / ${items.length}`);
    } catch (e) {
      console.error(`Failed on image ${i + 1}:`, e);
    }
    // Brief sleep to respect API
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log("All downloads complete!");
}

run();
