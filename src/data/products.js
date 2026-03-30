
const getLocalImage = (id) => `/images/item_${id}.jpg`;


export const products = [
  // ORIGINAL 12
  { id: 1, name: "Midnight Silk Slip Dress", price: 41600, category: "Womens", image: getLocalImage(1), description: "A luxuriously soft midnight blue silk slip dress." },
  { id: 2, name: "Classic Beige Trench Coat", price: 71500, category: "Womens", image: getLocalImage(2), description: "A timeless tailored trench coat featuring minimal hardware." },
  { id: 3, name: "Cashmere Turtleneck Sweater", price: 31200, category: "Mens", image: getLocalImage(3), description: "Ultra-soft premium cashmere turtleneck." },
  { id: 4, name: "Italian Wool Blazer", price: 88400, category: "Mens", image: getLocalImage(4), description: "Expertly tailored charcoal blazer spun from the finest Italian wool." },
  { id: 5, name: "Oversized Linen Shirt", price: 19500, category: "Womens", image: getLocalImage(5), description: "Lightweight, breathable linen shirt with an oversized silhouette." },
  { id: 6, name: "Leather Crossbody Bag", price: 63700, category: "Accessories", image: getLocalImage(6), description: "A sleek, structured crossbody crafted from full-grain leather." },
  { id: 7, name: "Vintage Aviator Sunglasses", price: 23400, category: "Accessories", image: getLocalImage(7), description: "A modern take on a timeless classic." },
  { id: 8, name: "Tailored Wide-Leg Trousers", price: 37700, category: "Womens", image: getLocalImage(8), description: "High-waisted tailored trousers providing a fluid silhouette." },
  { id: 9, name: "Signature Leather Ankle Boots", price: 58500, category: "Womens", image: getLocalImage(9), description: "Sculptural leather boots carefully constructed with a refined point toe." },
  { id: 10, name: "Automatic Chronograph Watch", price: 110500, category: "Accessories", image: getLocalImage(10), description: "Classic chronograph with an automatic movement and sapphire crystal." },
  { id: 11, name: "Silk Abstract Scarf", price: 15600, category: "Accessories", image: getLocalImage(11), description: "A gorgeous 100% silk scarf featuring an abstract geometric print." },
  { id: 12, name: "Double-Breasted Wool Coat", price: 97500, category: "Mens", image: getLocalImage(12), description: "Sharp and authoritative double-breasted topcoat." },

  // NEW 15 OUTFITS
  { id: 13, name: "Pleated Midi Skirt", price: 28000, category: "Womens", image: getLocalImage(13), description: "Elegant pleated midi skirt made from soft crepe." },
  { id: 14, name: "Cotton Poplin Blouse", price: 18500, category: "Womens", image: getLocalImage(14), description: "Crisp white poplin blouse with voluminous sleeves." },
  { id: 15, name: "Structured Denim Jacket", price: 34000, category: "Womens", image: getLocalImage(15), description: "Heavyweight denim jacket tailored for a modern edge." },
  { id: 16, name: "Ribbed Knit Maxi Dress", price: 42500, category: "Womens", image: getLocalImage(16), description: "Form-fitting ribbed maxi dress in a warm camel tone." },
  { id: 17, name: "Silk Camisole Top", price: 14500, category: "Womens", image: getLocalImage(17), description: "Delicate silk cami perfect for layering." },
  { id: 18, name: "High-Rise Cigarette Pants", price: 29900, category: "Womens", image: getLocalImage(18), description: "Sleek cropped pants offering a sharp, tailored fit." },
  { id: 19, name: "Chunky Cable Knit Sweater", price: 36000, category: "Womens", image: getLocalImage(19), description: "Oversized cozy sweater crafted from merino wool." },
  { id: 20, name: "Floral Wrap Dress", price: 48000, category: "Womens", image: getLocalImage(20), description: "A beautiful lightweight wrap dress with a subtle floral print." },
  { id: 21, name: "Velvet Evening Blazer", price: 65000, category: "Womens", image: getLocalImage(21), description: "A plush velvet blazer designed for night-out elegance." },
  { id: 22, name: "Minimalist Lounge Set", price: 31000, category: "Womens", image: getLocalImage(22), description: "Two-piece premium cotton lounge set for ultimate comfort." },
  { id: 23, name: "Classic Oxford Shirt", price: 16500, category: "Mens", image: getLocalImage(23), description: "Traditional cotton oxford shirt, universally versatile." },
  { id: 24, name: "Slim Fit Chinos", price: 22000, category: "Mens", image: getLocalImage(24), description: "Everyday slim fit chinos with a slight stretch." },
  { id: 25, name: "Merino Wool Crewneck", price: 27500, category: "Mens", image: getLocalImage(25), description: "A staple merino crewneck sweater for layering." },
  { id: 26, name: "Suede Bomber Jacket", price: 82000, category: "Mens", image: getLocalImage(26), description: "Luxurious suede bomber with ribbed trims." },
  { id: 27, name: "Tailored Dress Pants", price: 32000, category: "Mens", image: getLocalImage(27), description: "Crisp, flat-front dress pants to pair with your blazers." },

  // NEW 7 ACCESSORIES
  { id: 28, name: "Minimalist Silver Necklace", price: 14000, category: "Accessories", image: getLocalImage(28), description: "A delicate sterling silver chain with a geometric pendant." },
  { id: 29, name: "Woven Fedora Hat", price: 12500, category: "Accessories", image: getLocalImage(29), description: "Wide-brimmed fedora woven from breathable paper straw." },
  { id: 30, name: "Leather Formal Belt", price: 9500, category: "Accessories", image: getLocalImage(30), description: "Full-grain Italian leather belt with a brushed buckle." },
  { id: 31, name: "Canvas Tote Bag", price: 8000, category: "Accessories", image: getLocalImage(31), description: "Durable heavyweight canvas tote for daily errands." },
  { id: 32, name: "Gold Hoop Earrings", price: 18000, category: "Accessories", image: getLocalImage(32), description: "Classic 14k gold-plated mid-size hoops." },
  { id: 33, name: "Cashmere Winter Beanie", price: 11000, category: "Accessories", image: getLocalImage(33), description: "Ultra-warm ribbed cashmere beanie." },
  { id: 34, name: "Tortoiseshell Square Glasses", price: 21000, category: "Accessories", image: getLocalImage(34), description: "Vintage-inspired square frames with blue-light filtering." }
];
