const unsplashIds = [
  "1595777457583-95e059d581b8", "1591047139829-d91aecb6caea", "1620799140408-edc6dcb6d633", "1594938298596-eb5fd5e263ab", "1604642879483-34e12e17ee74",
  "1548036328-c9fa89d128fa", "1511499767150-a48a237f0083", "1594633312681-425c7b97ccd1", "1543163521-1bf539c55dd2", "1524592094714-0f0654e20314",
  "1606240224168-54cc45005ea2", "1520975954732-57dd22299614", "1515347619363-d14421b5eebf", "1483985988355-763728e1935b", "1485230895920-ee98698ee520",
  "1512436990175-32043a4e98f4", "1554568218-0f1715e72254", "1539008835657-9e8e9680c956", "1496747611176-843222e1e57c", "1503342217505-b0a15ec3261c",
  "1434389674662-12798e2ddb4b", "1532453288672-3a27e9be20d9", "1485968579580-b6d095142e6e", "1529139574466-a30ac9f78eb9", "1584273143981-41c107dc6198",
  "1550614000-4b95d415ce33", "1611042553365-9b101441c135", "1593032465175-481ec9e01369", "1516762823637-25d2c2f7b11d", "1560343090-bb97bd4999ab",
  "1602810318383-e386cc2a3ccf", "1581497396202-5645e76a3a8e", "1598560917711-2eb98b04fe70", "1614252369475-531eba835eb1"
];

const getImage = (index) => `https://images.unsplash.com/photo-${unsplashIds[index]}?w=800&q=80`;

export const products = [
  // ORIGINAL 12
  { id: 1, name: "Midnight Silk Slip Dress", price: 41600, category: "Womens", image: getImage(0), description: "A luxuriously soft midnight blue silk slip dress." },
  { id: 2, name: "Classic Beige Trench Coat", price: 71500, category: "Womens", image: getImage(1), description: "A timeless tailored trench coat featuring minimal hardware." },
  { id: 3, name: "Cashmere Turtleneck Sweater", price: 31200, category: "Mens", image: getImage(2), description: "Ultra-soft premium cashmere turtleneck." },
  { id: 4, name: "Italian Wool Blazer", price: 88400, category: "Mens", image: getImage(3), description: "Expertly tailored charcoal blazer spun from the finest Italian wool." },
  { id: 5, name: "Oversized Linen Shirt", price: 19500, category: "Womens", image: getImage(4), description: "Lightweight, breathable linen shirt with an oversized silhouette." },
  { id: 6, name: "Leather Crossbody Bag", price: 63700, category: "Accessories", image: getImage(5), description: "A sleek, structured crossbody crafted from full-grain leather." },
  { id: 7, name: "Vintage Aviator Sunglasses", price: 23400, category: "Accessories", image: getImage(6), description: "A modern take on a timeless classic." },
  { id: 8, name: "Tailored Wide-Leg Trousers", price: 37700, category: "Womens", image: getImage(7), description: "High-waisted tailored trousers providing a fluid silhouette." },
  { id: 9, name: "Signature Leather Ankle Boots", price: 58500, category: "Womens", image: getImage(8), description: "Sculptural leather boots carefully constructed with a refined point toe." },
  { id: 10, name: "Automatic Chronograph Watch", price: 110500, category: "Accessories", image: getImage(9), description: "Classic chronograph with an automatic movement and sapphire crystal." },
  { id: 11, name: "Silk Abstract Scarf", price: 15600, category: "Accessories", image: getImage(10), description: "A gorgeous 100% silk scarf featuring an abstract geometric print." },
  { id: 12, name: "Double-Breasted Wool Coat", price: 97500, category: "Mens", image: getImage(11), description: "Sharp and authoritative double-breasted topcoat." },

  // NEW 15 OUTFITS
  { id: 13, name: "Pleated Midi Skirt", price: 28000, category: "Womens", image: getImage(12), description: "Elegant pleated midi skirt made from soft crepe." },
  { id: 14, name: "Cotton Poplin Blouse", price: 18500, category: "Womens", image: getImage(13), description: "Crisp white poplin blouse with voluminous sleeves." },
  { id: 15, name: "Structured Denim Jacket", price: 34000, category: "Womens", image: getImage(14), description: "Heavyweight denim jacket tailored for a modern edge." },
  { id: 16, name: "Ribbed Knit Maxi Dress", price: 42500, category: "Womens", image: getImage(15), description: "Form-fitting ribbed maxi dress in a warm camel tone." },
  { id: 17, name: "Silk Camisole Top", price: 14500, category: "Womens", image: getImage(16), description: "Delicate silk cami perfect for layering." },
  { id: 18, name: "High-Rise Cigarette Pants", price: 29900, category: "Womens", image: getImage(17), description: "Sleek cropped pants offering a sharp, tailored fit." },
  { id: 19, name: "Chunky Cable Knit Sweater", price: 36000, category: "Womens", image: getImage(18), description: "Oversized cozy sweater crafted from merino wool." },
  { id: 20, name: "Floral Wrap Dress", price: 48000, category: "Womens", image: getImage(19), description: "A beautiful lightweight wrap dress with a subtle floral print." },
  { id: 21, name: "Velvet Evening Blazer", price: 65000, category: "Womens", image: getImage(20), description: "A plush velvet blazer designed for night-out elegance." },
  { id: 22, name: "Minimalist Lounge Set", price: 31000, category: "Womens", image: getImage(21), description: "Two-piece premium cotton lounge set for ultimate comfort." },
  { id: 23, name: "Classic Oxford Shirt", price: 16500, category: "Mens", image: getImage(22), description: "Traditional cotton oxford shirt, universally versatile." },
  { id: 24, name: "Slim Fit Chinos", price: 22000, category: "Mens", image: getImage(23), description: "Everyday slim fit chinos with a slight stretch." },
  { id: 25, name: "Merino Wool Crewneck", price: 27500, category: "Mens", image: getImage(24), description: "A staple merino crewneck sweater for layering." },
  { id: 26, name: "Suede Bomber Jacket", price: 82000, category: "Mens", image: getImage(25), description: "Luxurious suede bomber with ribbed trims." },
  { id: 27, name: "Tailored Dress Pants", price: 32000, category: "Mens", image: getImage(26), description: "Crisp, flat-front dress pants to pair with your blazers." },

  // NEW 7 ACCESSORIES
  { id: 28, name: "Minimalist Silver Necklace", price: 14000, category: "Accessories", image: getImage(27), description: "A delicate sterling silver chain with a geometric pendant." },
  { id: 29, name: "Woven Fedora Hat", price: 12500, category: "Accessories", image: getImage(28), description: "Wide-brimmed fedora woven from breathable paper straw." },
  { id: 30, name: "Leather Formal Belt", price: 9500, category: "Accessories", image: getImage(29), description: "Full-grain Italian leather belt with a brushed buckle." },
  { id: 31, name: "Canvas Tote Bag", price: 8000, category: "Accessories", image: getImage(30), description: "Durable heavyweight canvas tote for daily errands." },
  { id: 32, name: "Gold Hoop Earrings", price: 18000, category: "Accessories", image: getImage(31), description: "Classic 14k gold-plated mid-size hoops." },
  { id: 33, name: "Cashmere Winter Beanie", price: 11000, category: "Accessories", image: getImage(32), description: "Ultra-warm ribbed cashmere beanie." },
  { id: 34, name: "Tortoiseshell Square Glasses", price: 21000, category: "Accessories", image: getImage(33), description: "Vintage-inspired square frames with blue-light filtering." }
];
