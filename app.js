const WHATSAPP_NUMBER = "919263413181";
const CART_KEY = "ramsareesCart";
const BUY_NOW_KEY = "ramsareesBuyNowItem";
const CHECKOUT_MODE_KEY = "ramsareesCheckoutMode";
const CHECKOUT_DETAILS_KEY = "ramsareesCheckoutDetails";

const PRODUCT_DESCRIPTIONS = {
  "cotton-floral":
    "Soft floral cotton saree crafted for graceful everyday elegance and festive ease.",
  "cotton-weave":
    "Textured cotton weave with a gentle drape and refined boutique charm.",
  "designer-banarasi":
    "Ornate Banarasi-inspired saree made for luminous celebrations and heirloom moments.",
  "designer-woven":
    "Artisanal woven saree with modern polish and a beautifully graceful fall.",
  "handloom-cotton":
    "Light handloom cotton saree designed for comfort, poise, and day-long beauty.",
  "designer-silk":
    "Polished silk saree with soft sheen and timeless occasion-ready sophistication.",
  "linen-pastel":
    "Airy pastel linen saree tailored for refined, effortless daytime dressing.",
  "chiffon-gold":
    "Light gold chiffon saree with an elegant shimmer for evening celebrations.",
  "mauve-zari":
    "Delicate mauve zari saree carrying soft festive grace and feminine refinement.",
  "cotton-rose-border":
    "Rose-bordered cotton saree with gentle charm for graceful daily celebrations.",
  "cotton-ivory-bloom":
    "Ivory cotton saree touched with blooming softness and quiet festive elegance.",
  "cotton-rust-temple":
    "Rust cotton saree with temple-inspired warmth and handcrafted traditional beauty.",
  "cotton-meadow-print":
    "Meadow-toned cotton saree with fresh prints and breezy feminine ease.",
  "cotton-soft-cream":
    "Cream cotton saree with a soft drape for serene everyday elegance.",
  "cotton-blue-line":
    "Blue-lined cotton saree balancing crisp comfort with subtle artisanal charm.",
  "cotton-flora-pink":
    "Pink floral cotton saree made for delicate charm and graceful movement.",
  "cotton-sand-drape":
    "Sand-toned cotton saree with an understated drape and earthy sophistication.",
  "cotton-daylight-weave":
    "Daylight cotton weave with calm texture and refined handcrafted appeal.",
  "cotton-morning-pallu":
    "Ivory morning-pallu saree designed for lightness, poise, and timeless simplicity.",
  "designer-pink-aura":
    "Pink designer saree with a luminous aura for graceful festive entrances.",
  "designer-gold-motif":
    "Gold motif saree crafted for rich celebrations and polished traditional beauty.",
  "designer-olive-zari":
    "Olive zari designer saree with regal depth and graceful festive detailing.",
  "designer-mauve-luxe":
    "Mauve designer saree with luxurious softness and a beautifully elegant fall.",
  "designer-rose-garden":
    "Rose garden saree blooming with romantic charm and refined occasion styling.",
  "designer-saffron-drape":
    "Saffron designer drape carrying warm radiance and handcrafted festive grace.",
  "designer-pearl-thread":
    "Pearl-thread designer saree with delicate texture and understated luxury.",
  "designer-regal-pink":
    "Regal pink silk saree made for statement celebrations and feminine grandeur.",
  "designer-muted-gold":
    "Muted gold designer saree with soft shine and timeless celebratory poise.",
  "designer-evening-rust":
    "Evening rust saree with warm richness and a graceful occasion-ready drape.",
  "banarasi-emerald":
    "Emerald Banarasi saree woven for majestic celebrations and heirloom elegance.",
  "banarasi-antique-gold":
    "Antique gold Banarasi saree with rich tradition and refined festive glow.",
  "banarasi-pink-jal":
    "Pink jal Banarasi saree carrying intricate beauty and graceful ceremonial charm.",
  "banarasi-wine-loom":
    "Wine-toned Banarasi saree with deep richness and exquisite woven presence.",
  "banarasi-cream-zari":
    "Cream zari Banarasi saree with luminous detail and quiet bridal elegance.",
  "banarasi-sage-pallu":
    "Sage Banarasi pallu saree blending calm color with ornate traditional grace.",
  "banarasi-royal-rust":
    "Royal rust Banarasi saree made for grand occasions and timeless memories.",
  "banarasi-soft-aqua":
    "Soft aqua Banarasi saree with refreshing color and elegant festive craftsmanship.",
  "silk-kaveri-gold":
    "Kaveri gold silk saree glowing with celebration-ready richness and grace.",
  "silk-pink-lotus":
    "Pink lotus silk saree with romantic softness and refined festive allure.",
  "silk-green-heritage":
    "Green heritage silk saree crafted for traditional beauty and lasting elegance.",
  "silk-ivory-poetry":
    "Ivory silk saree with poetic softness and understated ceremonial charm.",
  "silk-copper-festive":
    "Copper silk saree with festive warmth and a graceful radiant drape.",
  "silk-mauve-petal":
    "Mauve petal silk saree shaped for soft glamour and feminine poise.",
  "silk-blue-calm":
    "Blue silk saree with calm elegance and a beautifully fluid fall.",
  "silk-rose-zari":
    "Rose zari silk saree with delicate shine and graceful celebration styling.",
  "handloom-sage":
    "Sage handloom saree with earthy calm and lovingly crafted texture.",
  "handloom-cream-line":
    "Cream handloom saree with clean lines and quiet everyday sophistication.",
  "handloom-indigo-day":
    "Indigo handloom saree bringing breezy comfort and thoughtful artisanal detail.",
  "handloom-rust-weft":
    "Rust handloom saree with warm woven character and graceful simplicity.",
  "handloom-pink-thread":
    "Pink thread handloom saree with gentle texture and feminine handcrafted beauty.",
  "handloom-gold-border":
    "Gold-bordered handloom saree blending everyday comfort with festive polish.",
  "handloom-aqua-breeze":
    "Aqua handloom saree with breezy freshness and soft refined movement.",
  "handloom-olive-craft":
    "Olive handloom saree celebrating earthy craft and timeless wearable elegance.",
  "new-arrival-peach":
    "Peach whisper saree with delicate softness for fresh festive styling.",
  "new-arrival-ivory":
    "Ivory petal saree with serene charm and graceful boutique detailing.",
  "best-seller-green":
    "Green heirloom saree made for cherished occasions and elegant traditions.",
  "best-seller-pink":
    "Pink celebration saree with joyful color and graceful festive refinement.",
  "best-seller-rust":
    "Rust glow saree with warm radiance and timeless traditional charm.",
  "best-seller-gold":
    "Gold memory saree designed for luminous celebrations and graceful keepsake moments.",
};

const PRODUCTS = [
  {
    id: "cotton-floral",
    name: "Cotton Floral Saree",
    price: 1599,
    category: "Cotton Sarees",
    fabric: "Cotton",
    color: "Cream",
    image: "./wmremove-transformed (2).jpeg",
    gallery: [
      "./banarsi saree.png",
      "https://images.pexels.com/photos/37294265/pexels-photo-37294265.jpeg?auto=compress&cs=tinysrgb&w=900",
      "./1000_F_1709397106_V6W6jN4khRbXWLnwttbuPY79uBU0cS4x.jpeg",
    ],
    description:
      PRODUCT_DESCRIPTIONS["cotton-floral"],
  },
  {
    id: "cotton-weave",
    name: "Cotton Weave Saree",
    price: 1749,
    category: "Cotton Sarees",
    fabric: "Cotton",
    color: "Rose",
    image:
      "./1000_F_1709397106_V6W6jN4khRbXWLnwttbuPY79uBU0cS4x.jpeg",
    gallery: [
      "./1000_F_1709397106_V6W6jN4khRbXWLnwttbuPY79uBU0cS4x.jpeg",
      "./saree1.jpeg",
      "https://images.pexels.com/photos/37294265/pexels-photo-37294265.jpeg?auto=compress&cs=tinysrgb&w=900",
    ],
    description:
      PRODUCT_DESCRIPTIONS["cotton-weave"],
  },
  {
    id: "designer-banarasi",
    name: "Designer Banarasi Saree",
    price: 2499,
    category: "Designer Sarees",
    fabric: "Silk",
    color: "Green",
    image:
      "./banarsi saree.png",
    gallery: [
      "./banarsi saree.png",
      "https://images.pexels.com/photos/27575174/pexels-photo-27575174.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/37294265/pexels-photo-37294265.jpeg?auto=compress&cs=tinysrgb&w=900",
    ],
    description:
      PRODUCT_DESCRIPTIONS["designer-banarasi"],
  },
  {
    id: "designer-woven",
    name: "Designer Woven Saree",
    price: 2299,
    category: "Designer Sarees",
    fabric: "Georgette",
    color: "Mauve",
    image:
      "https://images.pexels.com/photos/27575174/pexels-photo-27575174.jpeg?auto=compress&cs=tinysrgb&w=900",
    gallery: [
      "https://images.pexels.com/photos/27575174/pexels-photo-27575174.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/18534102/pexels-photo-18534102.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/37294265/pexels-photo-37294265.jpeg?auto=compress&cs=tinysrgb&w=900",
    ],
    description:
      PRODUCT_DESCRIPTIONS["designer-woven"],
  },
  {
    id: "handloom-cotton",
    name: "Handloom Cotton Saree",
    price: 1899,
    category: "Cotton Sarees",
    fabric: "Cotton",
    color: "Aqua",
    image:
      "https://images.pexels.com/photos/37294265/pexels-photo-37294265.jpeg?auto=compress&cs=tinysrgb&w=900",
    gallery: [
      "https://images.pexels.com/photos/37294265/pexels-photo-37294265.jpeg?auto=compress&cs=tinysrgb&w=900",
      "./banarsi saree.png",
      "https://images.pexels.com/photos/10482813/pexels-photo-10482813.jpeg?auto=compress&cs=tinysrgb&w=900",
    ],
    description:
      PRODUCT_DESCRIPTIONS["handloom-cotton"],
  },
  {
    id: "designer-silk",
    name: "Designer Silk Saree",
    price: 2099,
    category: "Designer Sarees",
    fabric: "Silk",
    color: "Beige",
    image: "./saree1.jpeg",
    gallery: [
      "./saree1.jpeg",
      "https://images.pexels.com/photos/14769354/pexels-photo-14769354.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/27575174/pexels-photo-27575174.jpeg?auto=compress&cs=tinysrgb&w=900",
    ],
    description:
      PRODUCT_DESCRIPTIONS["designer-silk"],
  },
  {
    id: "linen-pastel",
    name: "Linen Pastel Saree",
    price: 1699,
    category: "New Arrivals",
    fabric: "Linen",
    color: "Blue",
    image:
      "https://images.pexels.com/photos/10482813/pexels-photo-10482813.jpeg?auto=compress&cs=tinysrgb&w=900",
    gallery: [
      "https://images.pexels.com/photos/10482813/pexels-photo-10482813.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/18534102/pexels-photo-18534102.jpeg?auto=compress&cs=tinysrgb&w=900",
      "./banarsi saree.png",
    ],
    description:
      PRODUCT_DESCRIPTIONS["linen-pastel"],
  },
  {
    id: "chiffon-gold",
    name: "Chiffon Gold Saree",
    price: 1999,
    category: "Best Sellers",
    fabric: "Chiffon",
    color: "Gold",
    image:
      "https://images.pexels.com/photos/18534102/pexels-photo-18534102.jpeg?auto=compress&cs=tinysrgb&w=900",
    gallery: [
      "https://images.pexels.com/photos/18534102/pexels-photo-18534102.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/27575174/pexels-photo-27575174.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/37294265/pexels-photo-37294265.jpeg?auto=compress&cs=tinysrgb&w=900",
    ],
    description:
      PRODUCT_DESCRIPTIONS["chiffon-gold"],
  },
  {
    id: "mauve-zari",
    name: "Mauve Zari Saree",
    price: 2199,
    category: "Best Sellers",
    fabric: "Georgette",
    color: "Mauve",
    image:
      "https://images.pexels.com/photos/14769354/pexels-photo-14769354.jpeg?auto=compress&cs=tinysrgb&w=900",
    gallery: [
      "https://images.pexels.com/photos/14769354/pexels-photo-14769354.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/29805018/pexels-photo-29805018.jpeg?auto=compress&cs=tinysrgb&w=900",
      "./banarsi saree.png",
    ],
    description:
      PRODUCT_DESCRIPTIONS["mauve-zari"],
  },
];

const productImages = [
  "./banarsi saree.png",
  "./1000_F_1709397106_V6W6jN4khRbXWLnwttbuPY79uBU0cS4x.jpeg",
  "https://images.pexels.com/photos/37294265/pexels-photo-37294265.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/27575174/pexels-photo-27575174.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10482813/pexels-photo-10482813.jpeg?auto=compress&cs=tinysrgb&w=900",
  "./saree1.jpeg",
  "https://images.pexels.com/photos/18534102/pexels-photo-18534102.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/29805018/pexels-photo-29805018.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/14769354/pexels-photo-14769354.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/28058185/pexels-photo-28058185.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/36795193/pexels-photo-36795193.jpeg?auto=compress&cs=tinysrgb&w=900",
];

const extraProductBlueprints = [
  [
    "cotton-rose-border",
    "Rose Border Cotton Saree",
    1499,
    "Cotton Sarees",
    "Cotton",
    "Rose",
    1,
  ],
  [
    "cotton-ivory-bloom",
    "Ivory Bloom Cotton Saree",
    1649,
    "Cotton Sarees",
    "Cotton",
    "Ivory",
    0,
  ],
  [
    "cotton-rust-temple",
    "Rust Temple Cotton Saree",
    1799,
    "Cotton Sarees",
    "Cotton",
    "Rust",
    3,
  ],
  [
    "cotton-meadow-print",
    "Meadow Print Cotton Saree",
    1399,
    "Cotton Sarees",
    "Cotton",
    "Sage",
    4,
  ],
  [
    "cotton-soft-cream",
    "Soft Cream Cotton Saree",
    1550,
    "Cotton Sarees",
    "Cotton",
    "Cream",
    5,
  ],
  [
    "cotton-blue-line",
    "Blue Line Cotton Saree",
    1699,
    "Cotton Sarees",
    "Cotton",
    "Blue",
    6,
  ],
  [
    "cotton-flora-pink",
    "Flora Pink Cotton Saree",
    1750,
    "Cotton Sarees",
    "Cotton",
    "Pink",
    7,
  ],
  [
    "cotton-sand-drape",
    "Sand Drape Cotton Saree",
    1450,
    "Cotton Sarees",
    "Cotton",
    "Sand",
    2,
  ],
  [
    "cotton-daylight-weave",
    "Daylight Weave Cotton Saree",
    1890,
    "Cotton Sarees",
    "Cotton",
    "Beige",
    8,
  ],
  [
    "cotton-morning-pallu",
    "Morning Pallu Cotton Saree",
    1590,
    "Cotton Sarees",
    "Cotton",
    "Ivory",
    9,
  ],
  [
    "designer-pink-aura",
    "Pink Aura Designer Saree",
    2599,
    "Designer Sarees",
    "Georgette",
    "Pink",
    1,
  ],
  [
    "designer-gold-motif",
    "Gold Motif Designer Saree",
    2899,
    "Designer Sarees",
    "Silk",
    "Gold",
    3,
  ],
  [
    "designer-olive-zari",
    "Olive Zari Designer Saree",
    2799,
    "Designer Sarees",
    "Silk",
    "Olive",
    0,
  ],
  [
    "designer-mauve-luxe",
    "Mauve Luxe Designer Saree",
    2699,
    "Designer Sarees",
    "Georgette",
    "Mauve",
    8,
  ],
  [
    "designer-rose-garden",
    "Rose Garden Designer Saree",
    2999,
    "Designer Sarees",
    "Chiffon",
    "Rose",
    7,
  ],
  [
    "designer-saffron-drape",
    "Saffron Drape Designer Saree",
    2499,
    "Designer Sarees",
    "Silk",
    "Saffron",
    3,
  ],
  [
    "designer-pearl-thread",
    "Pearl Thread Designer Saree",
    3199,
    "Designer Sarees",
    "Linen",
    "Pearl",
    5,
  ],
  [
    "designer-regal-pink",
    "Regal Pink Designer Saree",
    3399,
    "Designer Sarees",
    "Silk",
    "Pink",
    6,
  ],
  [
    "designer-muted-gold",
    "Muted Gold Designer Saree",
    3099,
    "Designer Sarees",
    "Georgette",
    "Gold",
    2,
  ],
  [
    "designer-evening-rust",
    "Evening Rust Designer Saree",
    2890,
    "Designer Sarees",
    "Chiffon",
    "Rust",
    10,
  ],
  [
    "banarasi-emerald",
    "Emerald Banarasi Saree",
    3499,
    "Banarasi Sarees",
    "Silk",
    "Emerald",
    0,
  ],
  [
    "banarasi-antique-gold",
    "Antique Gold Banarasi Saree",
    3799,
    "Banarasi Sarees",
    "Silk",
    "Gold",
    3,
  ],
  [
    "banarasi-pink-jal",
    "Pink Jal Banarasi Saree",
    3599,
    "Banarasi Sarees",
    "Silk",
    "Pink",
    1,
  ],
  [
    "banarasi-wine-loom",
    "Wine Loom Banarasi Saree",
    3999,
    "Banarasi Sarees",
    "Silk",
    "Wine",
    8,
  ],
  [
    "banarasi-cream-zari",
    "Cream Zari Banarasi Saree",
    3299,
    "Banarasi Sarees",
    "Silk",
    "Cream",
    5,
  ],
  [
    "banarasi-sage-pallu",
    "Sage Pallu Banarasi Saree",
    3699,
    "Banarasi Sarees",
    "Silk",
    "Sage",
    4,
  ],
  [
    "banarasi-royal-rust",
    "Royal Rust Banarasi Saree",
    3899,
    "Banarasi Sarees",
    "Silk",
    "Rust",
    10,
  ],
  [
    "banarasi-soft-aqua",
    "Soft Aqua Banarasi Saree",
    3490,
    "Banarasi Sarees",
    "Silk",
    "Aqua",
    2,
  ],
  [
    "silk-kaveri-gold",
    "Kaveri Gold Silk Saree",
    2999,
    "Silk Sarees",
    "Silk",
    "Gold",
    3,
  ],
  [
    "silk-pink-lotus",
    "Pink Lotus Silk Saree",
    2899,
    "Silk Sarees",
    "Silk",
    "Pink",
    7,
  ],
  [
    "silk-green-heritage",
    "Green Heritage Silk Saree",
    3199,
    "Silk Sarees",
    "Silk",
    "Green",
    0,
  ],
  [
    "silk-ivory-poetry",
    "Ivory Poetry Silk Saree",
    2799,
    "Silk Sarees",
    "Silk",
    "Ivory",
    5,
  ],
  [
    "silk-copper-festive",
    "Copper Festive Silk Saree",
    3099,
    "Silk Sarees",
    "Silk",
    "Copper",
    10,
  ],
  [
    "silk-mauve-petal",
    "Mauve Petal Silk Saree",
    2990,
    "Silk Sarees",
    "Silk",
    "Mauve",
    8,
  ],
  [
    "silk-blue-calm",
    "Blue Calm Silk Saree",
    2699,
    "Silk Sarees",
    "Silk",
    "Blue",
    6,
  ],
  [
    "silk-rose-zari",
    "Rose Zari Silk Saree",
    3399,
    "Silk Sarees",
    "Silk",
    "Rose",
    1,
  ],
  [
    "handloom-sage",
    "Sage Handloom Saree",
    2199,
    "Handloom Sarees",
    "Cotton",
    "Sage",
    4,
  ],
  [
    "handloom-cream-line",
    "Cream Line Handloom Saree",
    1999,
    "Handloom Sarees",
    "Cotton",
    "Cream",
    5,
  ],
  [
    "handloom-indigo-day",
    "Indigo Day Handloom Saree",
    2299,
    "Handloom Sarees",
    "Linen",
    "Indigo",
    6,
  ],
  [
    "handloom-rust-weft",
    "Rust Weft Handloom Saree",
    2099,
    "Handloom Sarees",
    "Cotton",
    "Rust",
    10,
  ],
  [
    "handloom-pink-thread",
    "Pink Thread Handloom Saree",
    2399,
    "Handloom Sarees",
    "Cotton",
    "Pink",
    7,
  ],
  [
    "handloom-gold-border",
    "Gold Border Handloom Saree",
    2499,
    "Handloom Sarees",
    "Silk Cotton",
    "Gold",
    2,
  ],
  [
    "handloom-aqua-breeze",
    "Aqua Breeze Handloom Saree",
    2190,
    "Handloom Sarees",
    "Linen",
    "Aqua",
    2,
  ],
  [
    "handloom-olive-craft",
    "Olive Craft Handloom Saree",
    2599,
    "Handloom Sarees",
    "Cotton",
    "Olive",
    0,
  ],
  [
    "new-arrival-peach",
    "Peach Whisper Saree",
    1899,
    "New Arrivals",
    "Chiffon",
    "Peach",
    7,
  ],
  [
    "new-arrival-ivory",
    "Ivory Petal Saree",
    1799,
    "New Arrivals",
    "Cotton",
    "Ivory",
    5,
  ],
  [
    "best-seller-green",
    "Green Heirloom Saree",
    2599,
    "Best Sellers",
    "Silk",
    "Green",
    0,
  ],
  [
    "best-seller-pink",
    "Pink Celebration Saree",
    2799,
    "Best Sellers",
    "Georgette",
    "Pink",
    1,
  ],
  [
    "best-seller-rust",
    "Rust Glow Saree",
    2399,
    "Best Sellers",
    "Silk",
    "Rust",
    10,
  ],
  [
    "best-seller-gold",
    "Gold Memory Saree",
    2999,
    "Best Sellers",
    "Chiffon",
    "Gold",
    3,
  ],
];

PRODUCTS.push(
  ...extraProductBlueprints.map(
    ([id, name, price, category, fabric, color, imageIndex]) => {
      const image = productImages[imageIndex % productImages.length];
      const next = productImages[(imageIndex + 1) % productImages.length];
      const third = productImages[(imageIndex + 2) % productImages.length];
      return {
        id,
        name,
        price,
        category,
        fabric,
        color,
        image,
        gallery: [image, next, third],
        description: PRODUCT_DESCRIPTIONS[id],
      };
    },
  ),
);

const variationColorPool = [
  "Cream",
  "Rose",
  "Emerald",
  "Mauve",
  "Aqua",
  "Gold",
  "Rust",
  "Pink",
  "Blue",
  "Ivory",
  "Sage",
  "Wine",
];

const colorHex = {
  Aqua: "#9fcfc9",
  Beige: "#d9c3a5",
  Blue: "#557ca8",
  Copper: "#b8734e",
  Cream: "#eadfcd",
  Emerald: "#2f6f55",
  Gold: "#c9a34e",
  Green: "#416b4f",
  Ivory: "#f1eadc",
  Mauve: "#a5798e",
  Olive: "#778052",
  Peach: "#efb092",
  Pink: "#dd8fa6",
  Rose: "#b76a76",
  Rust: "#a95735",
  Sage: "#9aaa81",
  Wine: "#7c3044",
};

const rupee = (amount) => `₹${Number(amount).toLocaleString("en-IN")}`;
const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function fakeMrp(price) {
  return Math.ceil((Number(price) * 1.65) / 50) * 50 - 1;
}

function discountPercent(price) {
  const mrp = fakeMrp(price);
  return Math.round(((mrp - Number(price)) / mrp) * 100);
}

function priceHtml(price) {
  return `
    <div class="price-row">
      <span class="sale-price">${rupee(price)}</span>
      <span class="mrp-price">${rupee(fakeMrp(price))}</span>
      <span class="discount-badge">${discountPercent(price)}% OFF</span>
    </div>`;
}

function variationColors(product) {
  const used = new Set([product.color]);
  const start = Math.max(0, variationColorPool.indexOf(product.color));
  return product.gallery.map((_, index) => {
    if (index === 0) return product.color;
    let next =
      variationColorPool[(start + index + product.id.length) % variationColorPool.length];
    while (used.has(next)) {
      next =
        variationColorPool[
          (variationColorPool.indexOf(next) + 1) % variationColorPool.length
        ];
    }
    used.add(next);
    return next;
  });
}

function productVariations(product) {
  const colors = variationColors(product);
  return product.gallery.map((image, index) => ({
    index,
    image,
    color: colors[index],
    label: `${colors[index]} ${product.fabric}`,
  }));
}

function selectedItemImage(item) {
  return item.image || item.selectedImage || item.product.image;
}

function selectedItemColor(item) {
  return item.color || item.selectedColor || item.product.color;
}

function selectedItemVariation(item) {
  if (item.variation) return item.variation;
  return `${selectedItemColor(item)} ${item.product.fabric}`;
}

function icon(name) {
  const icons = {
    search:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16v16H4z"/><path d="m4 7 8 6 8-6"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 20C6 10 12 4 21 3c-1 9-7 15-17 17Z"/><path d="M9 15c3-1 5-3 7-6"/></svg>',
    flower:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 2c2 2 2 4 0 7M12 15c2 3 2 5 0 7M2 12c2-2 4-2 7 0M15 12c3-2 5-2 7 0M5 5c3 0 5 1 6 4M13 15c1 3 3 4 6 4M19 5c0 3-1 5-4 6M9 13c-3 1-4 3-4 6"/></svg>',
    award:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="6"/><path d="m8.5 13.5-1.2 7L12 18l4.7 2.5-1.2-7"/></svg>',
    truck:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h12v10H3zM15 10h4l2 3v3h-6z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.7.3-1 1-1Z"/></svg>',
    pinterest:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.2 2C6.8 2 4 5.7 4 9.7c0 2.5 1.4 5.5 3.6 5.5.6 0 .5-1.6.8-2.1-2.6-3.1.3-9.1 4.3-9.1 5.8 0 4.7 8 1 8-1 0-1.8-.8-1.5-1.9.4-1.4 1.1-2.9 1.1-3.9 0-2.5-3.6-2.1-3.6 1.2 0 1 .3 1.7.3 1.7S8.8 14 8.6 14.9c-.4 1.8.1 4.7.2 4.9.1.1.2.1.3 0 .2-.2 2-2.5 2.4-4.2l.5-2c.6 1.1 2 1.8 3.4 1.8 4.4 0 7.6-4.1 7.6-9.1C23 3.9 18.8 2 12.2 2Z"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.1a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5S6 5.5 4.1 6A3 3 0 0 0 2 8.1 31.5 31.5 0 0 0 2 16a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5A3 3 0 0 0 22 16a31.5 31.5 0 0 0 0-7.9ZM10 15.3V8.7l5.8 3.3L10 15.3Z"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.5 16.8L2.2 22l5.3-1.4a9.9 9.9 0 0 0 4.7 1.2h.1A9.9 9.9 0 0 0 19.1 4.9Zm-6.8 15.2h-.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7.1 3.9Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z"/></svg>',
  };
  return icons[name] || "";
}

function header() {
  return `
    <div class="topbar">Free Shipping on Prepaid Orders</div>
    <header class="site-header">
      <nav class="nav">
        <button class="hamburger" aria-label="Open menu" aria-controls="navLinks" aria-expanded="false">${icon("menu")}</button>
        <a class="brand" href="index.html">RAM SAREES</a>
        <div class="nav-links" id="navLinks">
          <a href="index.html">Home</a>
          <a href="shop.html">Shop</a>
          <a href="shop.html?category=Cotton%20Sarees">Cotton Sarees</a>
          <a href="shop.html?category=Designer%20Sarees">Designer Sarees</a>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="nav-actions">
          <button class="icon-btn search-toggle" aria-label="Search" aria-controls="searchPanel" aria-expanded="false">${icon("search")}</button>
          <a class="icon-btn" href="cart.html" aria-label="Cart">${icon("bag")}<span class="cart-count">0</span></a>
        </div>
      </nav>
    </header>
    <div class="search-panel" id="searchPanel">
      <div class="search-row">
        <input id="searchInput" type="search" placeholder="Search saree name" autocomplete="off">
      </div>
      <div class="search-results" id="searchResults"></div>
    </div>`;
}

function footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3>About RAM SAREES</h3>
            <p>We bring you a curated collection of cotton and designer sarees that blend tradition with elegance. Made for the modern woman who loves timeless beauty.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="shop.html?category=Cotton%20Sarees">Cotton Sarees</a></li>
              <li><a href="shop.html?category=Designer%20Sarees">Designer Sarees</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3>Customer Service</h3>
            <ul>
              <li>FAQs</li>
              <li>Shipping Policy</li>
              <li>Cancellation Policy</li>
              <li>Size Guide</li>
              <li>Care Instructions</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <div class="footer-contact">
              <div class="contact-line">${icon("phone")} <span>+91 92634 13181</span></div>
              <div class="contact-line">${icon("mail")} <span>support@ramsarees.com</span></div>
              <div class="contact-line">${icon("clock")} <span>Mon - Sat: 10:00 AM - 7:00 PM</span></div>
              <div class="contact-line">${icon("pin")} <span>Surat, Gujarat, India - 395002</span></div>
            </div>
          </div>
          <div>
            <h3>Stay Connected</h3>
            <div class="socials">
              <a href="https://instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
              <a href="https://facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">${icon("facebook")}</a>
              <a href="https://pinterest.com/" target="_blank" rel="noopener" aria-label="Pinterest">${icon("pinterest")}</a>
              <a href="https://youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">${icon("youtube")}</a>
              <a href="https://wa.me/919263413181" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("whatsapp")}</a>
            </div>
            <h3 style="margin-top:30px">We Accept</h3>
            <div class="payments" aria-label="Accepted payment methods">
              <span class="pay-upi">UPI</span>
              <span class="pay-visa">Visa</span>
              <span class="pay-mastercard">MasterCard</span>
              <span class="pay-rupay">RuPay</span>
              <span class="pay-paytm">Paytm</span>
              <span class="pay-phonepe">PhonePe</span>
              <span class="pay-gpay">G Pay</span>
            </div>
          </div>
        </div>
        <div class="copyright">&copy; 2025 RAM SAREES. All Rights Reserved.</div>
      </div>
    </footer>`;
}

function productCard(product) {
  return `
    <article class="product-card fade-in" data-product-card>
      <a class="product-card-link" href="product.html?id=${product.id}" aria-label="View ${product.name}">
        <span class="image"><img src="${product.image}" alt="${product.name}" loading="lazy"></span>
        <h3>${product.name}</h3>
        <p class="product-card-desc">${product.description}</p>
        <div class="price">${priceHtml(product.price)}</div>
      </a>
      <div class="product-card-actions">
        <a class="card-buy-now" href="checkout.html?checkout=buy-now" data-card-buy-now="${product.id}">Buy Now</a>
      </div>
    </article>`;
}

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function setCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, qty = 1, selection = {}) {
  const cart = getCart();
  const product = PRODUCTS.find((entry) => entry.id === productId);
  const defaultVariation = product ? productVariations(product)[0] : {};
  const cartItem = {
    id: productId,
    qty,
    image: selection.image || defaultVariation.image,
    color: selection.color || defaultVariation.color,
    variationIndex: Number(selection.variationIndex ?? selection.index) || 0,
    variation: selection.variation || selection.label || defaultVariation.label,
  };
  const item = cart.find(
    (entry) =>
      entry.id === productId &&
      selectedItemImage({ ...entry, product }) === cartItem.image &&
      selectedItemColor({ ...entry, product }) === cartItem.color,
  );
  if (item) item.qty += qty;
  else cart.push(cartItem);
  setCart(cart);
}

function setBuyNowItem(productId, qty = 1, selection = {}) {
  const product = PRODUCTS.find((entry) => entry.id === productId);
  const defaultVariation = product ? productVariations(product)[0] : {};
  localStorage.setItem(
    BUY_NOW_KEY,
    JSON.stringify({
      id: productId,
      qty: Math.max(1, Number(qty) || 1),
      image: selection.image || defaultVariation.image,
      color: selection.color || defaultVariation.color,
      variationIndex: Number(selection.variationIndex ?? selection.index) || 0,
      variation: selection.variation || selection.label || defaultVariation.label,
    }),
  );
  localStorage.setItem(CHECKOUT_MODE_KEY, "buy-now");
}

function setCartCheckoutMode() {
  localStorage.setItem(CHECKOUT_MODE_KEY, "cart");
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  qsa(".cart-count").forEach((el) => {
    el.textContent = count;
  });
}

function initChrome() {
  qs("#siteChrome").innerHTML = header();
  qs("#siteFooter").innerHTML = footer();
  qsa("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon);
  });

  const hamburger = qs(".hamburger");
  const searchToggle = qs(".search-toggle");
  const navLinks = qs("#navLinks");
  const searchPanel = qs("#searchPanel");

  hamburger?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
    const expanded = navLinks?.classList.contains("open") ? "true" : "false";
    hamburger?.setAttribute("aria-expanded", expanded);
  });

  qsa("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks?.classList.remove("open");
      hamburger?.setAttribute("aria-expanded", "false");
    });
  });

  searchToggle?.addEventListener("click", () => {
    searchPanel?.classList.toggle("open");
    const expanded = searchPanel?.classList.contains("open") ? "true" : "false";
    searchToggle?.setAttribute("aria-expanded", expanded);
    qs("#searchInput")?.focus();
  });

  const input = qs("#searchInput");
  const results = qs("#searchResults");
  input?.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    const matches = term
      ? PRODUCTS.filter((product) => product.name.toLowerCase().includes(term))
      : [];
    results.innerHTML = matches.length
      ? matches
          .map(
            (product) => `
          <a class="search-item" href="product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span><strong>${product.name}</strong><br>${rupee(product.price)}</span>
          </a>`,
          )
          .join("")
      : `<p>${term ? "No matching sarees found." : "Type an existing product name."}</p>`;
  });

  document.addEventListener("click", (event) => {
    const cardBuyNow = event.target.closest("[data-card-buy-now]");
    if (cardBuyNow) {
      setBuyNowItem(cardBuyNow.dataset.cardBuyNow, 1);
      return;
    }

    const panel = qs("#searchPanel");
    if (!panel) return;
    if (
      !panel.contains(event.target) &&
      !event.target.closest(".search-toggle")
    )
      panel.classList.remove("open");
  });

  updateCartCount();
}

function initHome() {
  const favoriteIds = [
    "cotton-floral",
    "cotton-weave",
    "designer-banarasi",
    "designer-woven",
  ];
  const arrivalIds = [
    "cotton-floral",
    "cotton-weave",
    "designer-banarasi",
    "designer-woven",
  ];
  qs("#favoritesGrid").innerHTML = favoriteIds
    .map((id) => productCard(PRODUCTS.find((p) => p.id === id)))
    .join("");
  qs("#arrivalsGrid").innerHTML = arrivalIds
    .map((id) => productCard(PRODUCTS.find((p) => p.id === id)))
    .join("");
}

function initShop() {
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const products = category
    ? PRODUCTS.filter((p) => p.category === category)
    : PRODUCTS;
  qs("#shopGrid").innerHTML = products.map(productCard).join("");
  if (category) {
    qsa(".filter-block a").forEach((link) => {
      link.classList.toggle("active", link.textContent.trim() === category);
    });
  }
}

function selectedProduct() {
  const id = new URLSearchParams(location.search).get("id") || "cotton-floral";
  return PRODUCTS.find((product) => product.id === id) || PRODUCTS[0];
}

function initProduct() {
  const product = selectedProduct();
  const variations = productVariations(product);
  let selectedVariation = variations[0];
  let qty = 1;
  const renderVariation = (variation) => {
    selectedVariation = variation;
    qs("#productPrice").innerHTML = priceHtml(product.price);
    qs("#fabricInfo").textContent =
      `${product.fabric} | ${variation.color} finish | Crafted in small boutique batches`;
    qs("#productColor").textContent = variation.color;
    qs("#mainProductImage").src = variation.image;
    qs("#mainProductImage").alt = `${product.name} in ${variation.color}`;
    qsa("#thumbs button").forEach((button) => {
      button.classList.toggle(
        "active",
        Number(button.dataset.variationIndex) === variation.index,
      );
    });
    qsa(".swatch").forEach((button) => {
      button.classList.toggle(
        "active",
        Number(button.dataset.variationIndex) === variation.index,
      );
    });
  };
  qs("#breadcrumbName").textContent = product.name;
  qs("#productName").textContent = product.name;
  qs("#productDesc").textContent = product.description;
  qs("#thumbs").innerHTML = variations
    .map(
      (variation) =>
        `<button type="button" data-variation-index="${variation.index}" aria-label="Select ${variation.color} color"><img src="${variation.image}" alt="${product.name} in ${variation.color}" loading="lazy"></button>`,
    )
    .join("");
  qs(".swatches").innerHTML = variations
    .map(
      (variation) =>
        `<button class="swatch" type="button" data-variation-index="${variation.index}" style="background:${colorHex[variation.color] || "#d8c4ad"}" aria-label="Select ${variation.color} color"></button>`,
    )
    .join("");
  qsa("#thumbs button").forEach((button) => {
    button.addEventListener("click", () => {
      renderVariation(variations[Number(button.dataset.variationIndex)] || variations[0]);
    });
  });
  qsa(".swatch").forEach((button) => {
    button.addEventListener("click", () => {
      renderVariation(variations[Number(button.dataset.variationIndex)] || variations[0]);
    });
  });
  renderVariation(selectedVariation);
  qs("#qtyValue").textContent = qty;
  qs("#minusQty").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qs("#qtyValue").textContent = qty;
  });
  qs("#plusQty").addEventListener("click", () => {
    qty += 1;
    qs("#qtyValue").textContent = qty;
  });
  qs("#addToCart").addEventListener("click", () => {
    addToCart(product.id, qty, selectedVariation);
    location.href = "cart.html";
  });
  qs("#buyNow").addEventListener("click", () => {
    setBuyNowItem(product.id, qty, selectedVariation);
    location.href = "checkout.html?checkout=buy-now";
  });
}

function initCart() {
  const cart = getCart();
  const rows = qs("#cartRows");
  if (!cart.length) {
    rows.innerHTML = `<div class="empty"><h2>Your cart is empty</h2><p>Explore the collection and add a saree you love.</p><a class="btn" href="shop.html">Shop Now</a></div>`;
    qs("#cartSummary").style.display = "none";
    return;
  }
  rows.innerHTML = cart
    .map((item, index) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return `
      <div class="cart-row" data-cart-index="${index}">
        <img src="${selectedItemImage({ ...item, product })}" alt="${product.name}" loading="lazy">
        <div><h3>${product.name}</h3><p>${selectedItemColor({ ...item, product })} ${product.fabric} Saree</p></div>
        <div class="qty"><div class="qty-control"><button data-action="dec">-</button><span>${item.qty}</span><button data-action="inc">+</button></div></div>
        <strong class="line-price">${rupee(product.price * item.qty)}</strong>
        <button class="remove" aria-label="Remove item" data-action="remove">x</button>
      </div>`;
    })
    .join("");

  rows.onclick = (event) => {
    const action = event.target.dataset.action;
    if (!action) return;
    const row = event.target.closest(".cart-row");
    const item = cart[Number(row.dataset.cartIndex)];
    if (action === "inc") item.qty += 1;
    if (action === "dec") item.qty = Math.max(1, item.qty - 1);
    if (action === "remove") cart.splice(cart.indexOf(item), 1);
    setCart(cart);
    initCart();
  };

  const subtotal = cart.reduce((sum, item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);
  qs("#subtotal").textContent = rupee(subtotal);
  qs("#grandTotal").textContent = rupee(subtotal);
  qs('#cartSummary a[href^="checkout.html"]')?.addEventListener(
    "click",
    setCartCheckoutMode,
  );
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function cartItems() {
  return getCart()
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean);
}

function buyNowItems() {
  const item = JSON.parse(localStorage.getItem(BUY_NOW_KEY) || "null");
  if (!item?.id) return [];
  const product = PRODUCTS.find((p) => p.id === item.id);
  if (!product) return [];
  return [{ ...item, id: item.id, qty: Math.max(1, Number(item.qty) || 1), product }];
}

function checkoutMode() {
  const mode = new URLSearchParams(location.search).get("checkout");
  if (mode === "buy-now" || mode === "cart") {
    localStorage.setItem(CHECKOUT_MODE_KEY, mode);
    return mode;
  }
  return localStorage.getItem(CHECKOUT_MODE_KEY) === "buy-now"
    ? "buy-now"
    : "cart";
}

function checkoutItems() {
  return checkoutMode() === "buy-now" ? buyNowItems() : cartItems();
}

function phoneDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function formatDate(date) {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function dateFromInput(value) {
  if (!value) return new Date();
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function estimatedDelivery(value) {
  const date = dateFromInput(value);
  date.setDate(date.getDate() + 7);
  return formatDate(date);
}

function dateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function setFieldError(form, name, message) {
  const field = qs(`[name="${name}"]`, form);
  const error = qs(`[data-error-for="${name}"]`, form);
  field?.classList.toggle("is-invalid", Boolean(message));
  if (error) error.textContent = message || "";
}

function validateRequiredOrderFields(form, includeGender = false) {
  const data = new FormData(form);
  const validators = {
    name: data.get("name")?.trim() ? "" : "Please enter your full name.",
    address: data.get("address")?.trim()
      ? ""
      : "Please enter your complete delivery address.",
    phone:
      phoneDigits(data.get("phone")).length >= 10
        ? ""
        : "Please enter a valid 10 digit mobile number.",
  };

  if (includeGender) {
    validators.gender = data.get("gender") ? "" : "Please select your gender.";
    validators.email =
      !data.get("email") || form.elements.email.checkValidity()
        ? ""
        : "Please enter a valid email address.";
  }

  Object.entries(validators).forEach(([name, message]) =>
    setFieldError(form, name, message),
  );
  return Object.values(validators).every((message) => !message);
}

function initContact() {
  qs("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const message = `RAM SAREES Contact Enquiry\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email") || "Not provided"}\nMessage: ${data.get("message")}`;
    location.href = whatsappUrl(message);
  });
}

function checkoutTotals() {
  const items = checkoutItems();
  const mrp = items.reduce((sum, item) => sum + fakeMrp(item.product.price) * item.qty, 0);
  const payable = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const discount = Math.max(0, mrp - payable);
  const fees = 0;
  return {
    items,
    mrp,
    discount,
    discountPercent: mrp ? Math.round((discount / mrp) * 100) : 0,
    fees,
    total: Math.max(0, payable + fees),
  };
}

function checkoutProductImageUrl(item) {
  const image = selectedItemImage(item);
  try {
    return new URL(image, location.href).href;
  } catch {
    return image;
  }
}

function getCheckoutDetails(form) {
  const data = new FormData(form);
  return {
    firstName: data.get("firstName")?.trim() || "",
    lastName: data.get("lastName")?.trim() || "",
    address: data.get("address")?.trim() || "",
    phone: phoneDigits(data.get("phone")).slice(0, 10),
    color: data.get("color")?.trim() || "",
  };
}

function fullCheckoutName(details) {
  return `${details.firstName} ${details.lastName}`.trim();
}

function escapeHtml(value) {
  return String(value || "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

function validateCheckoutName(value, label) {
  const name = String(value || "").trim().replace(/\s+/g, " ");
  const blockedWords = [
    "admin",
    "bad",
    "boy",
    "girl",
    "king",
    "queen",
    "random",
    "sexy",
    "test",
    "user",
    "username",
    "vulgar",
  ];

  if (!name) return `Please enter your ${label.toLowerCase()}.`;
  if (!/^[A-Za-z]+$/.test(name)) return `${label} can contain only alphabetic letters.`;
  if (name.length < 2) return `${label} is too short to be a proper name.`;
  if (name.length > 32) return `${label} looks too long.`;
  if (/^(.)\1{2,}$/i.test(name)) return `${label} looks invalid.`;
  if (blockedWords.includes(name.toLowerCase())) return `Please enter a real ${label.toLowerCase()}.`;
  return "";
}

function validateCheckoutForm(form) {
  const details = getCheckoutDetails(form);
  const errors = {
    firstName: validateCheckoutName(details.firstName, "First name"),
    lastName: validateCheckoutName(details.lastName, "Last name"),
    address:
      details.address.length >= 12
        ? ""
        : "Please enter your complete delivery address.",
    phone: /^[6-9]\d{9}$/.test(details.phone)
      ? ""
      : "Please enter a valid 10 digit Indian mobile number.",
    color: checkoutColorOptions().includes(details.color)
      ? ""
      : "Please select an available product color.",
  };

  const fullName = fullCheckoutName(details).toLowerCase();
  const fakePhrases = [
    "sexy boy",
    "bad boy",
    "bad girl",
    "king",
    "queen",
    "admin",
    "test",
  ];
  if (!errors.firstName && !errors.lastName && fakePhrases.includes(fullName)) {
    errors.firstName = "Please enter a real customer name.";
    errors.lastName = "Fake or spam names are not accepted.";
  }

  Object.entries(errors).forEach(([name, message]) =>
    setFieldError(form, name, message),
  );
  return Object.values(errors).every((message) => !message);
}

function saveCheckoutDetails(form) {
  const totals = checkoutTotals();
  const formDetails = getCheckoutDetails(form);
  const details = {
    ...formDetails,
    name: fullCheckoutName(formDetails),
    total: rupee(totals.total),
  };
  localStorage.setItem(CHECKOUT_DETAILS_KEY, JSON.stringify(details));
  return details;
}

function renderCheckoutSummary() {
  const totals = checkoutTotals();
  const disabled = !totals.items.length;
  qs("#checkoutSummaryProducts").innerHTML = totals.items.length
    ? totals.items
        .map(
          (item) => `
      <article class="summary-product">
        <img src="${selectedItemImage(item)}" alt="${item.product.name}" loading="lazy">
        <div>
          <h4>${item.product.name}</h4>
          <p>${selectedItemColor(item)} | Qty ${item.qty}</p>
        </div>
      </article>`,
        )
        .join("")
    : "";
  qs("#checkoutMrp").textContent = rupee(totals.mrp);
  qs("#checkoutShipping").textContent = totals.fees ? rupee(totals.fees) : "Free";
  qs("#checkoutDiscount").textContent = `- ${rupee(totals.discount)}`;
  qs("#checkoutTotal").textContent = rupee(totals.total);
  qs("#checkoutFinal").textContent = rupee(totals.total);
  qs("#checkoutSavings").textContent = totals.discount
    ? `You saved ${rupee(totals.discount)} on this order.`
    : "Free delivery applied on this order.";
  qs("#summaryCta").disabled = disabled;
}

function checkoutColorOptions() {
  const colors = checkoutItems().flatMap((item) => {
    const current = selectedItemColor(item);
    const variants = productVariations(item.product).map((variation) => variation.color);
    return [current, ...variants];
  });
  return [...new Set(colors.filter(Boolean))];
}

function populateCheckoutColorSelect(form, savedColor = "") {
  const select = form.elements.color;
  if (!select) return;
  const colors = checkoutColorOptions();
  select.innerHTML = colors.length
    ? colors
        .map((color) => `<option value="${escapeHtml(color)}">${escapeHtml(color)}</option>`)
        .join("")
    : `<option value="">No color available</option>`;
  const preferred = colors.includes(savedColor)
    ? savedColor
    : selectedItemColor(checkoutItems()[0] || { product: PRODUCTS[0] });
  select.value = colors.includes(preferred) ? preferred : colors[0] || "";
}

function syncBuyNowColor(color) {
  if (checkoutMode() !== "buy-now") return;
  const item = JSON.parse(localStorage.getItem(BUY_NOW_KEY) || "null");
  const product = item?.id ? PRODUCTS.find((entry) => entry.id === item.id) : null;
  if (!product) return;
  const variation =
    productVariations(product).find((entry) => entry.color === color) ||
    productVariations(product)[0];
  setBuyNowItem(product.id, item.qty, variation);
}

function renderCheckoutReview(details) {
  const totals = checkoutTotals();
  const safeDetails = {
    name: escapeHtml(fullCheckoutName(details)),
    address: escapeHtml(details.address),
    phone: escapeHtml(details.phone),
    color: escapeHtml(details.color),
  };
  qs("#customerReview").innerHTML = `
    <div><dt>Full Name</dt><dd>${safeDetails.name}</dd></div>
    <div><dt>Delivery Address</dt><dd>${safeDetails.address}</dd></div>
    <div><dt>Mobile Number</dt><dd>+91 ${safeDetails.phone}</dd></div>
    <div><dt>Product Color</dt><dd>${safeDetails.color}</dd></div>
  `;

  qs("#checkoutReviewProducts").innerHTML = totals.items.length
    ? totals.items
        .map(
          (item) => `
      <article class="review-product">
        <img src="${selectedItemImage(item)}" alt="${item.product.name}" loading="lazy">
        <div>
          <h4>${item.product.name}</h4>
          <p>Product Price: ${rupee(item.product.price)}</p>
          <p>Discount: ${totals.discountPercent}%</p>
          <p>Selected Quantity: ${item.qty}</p>
          <p>Selected Color: ${escapeHtml(selectedItemColor(item))}</p>
          <p>Variation: ${escapeHtml(selectedItemVariation(item))}</p>
          <strong>Final Payable: ${rupee(item.product.price * item.qty)}</strong>
        </div>
      </article>`,
        )
        .join("")
    : `<div class="empty"><h2>Your cart is empty</h2><p>Add a saree to continue checkout.</p><a class="btn" href="shop.html">Shop Now</a></div>`;
}

function setCheckoutStep(step) {
  qsa("[data-checkout-step]").forEach((panel) => {
    const isActive = Number(panel.dataset.checkoutStep) === step;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });
  qsa("[data-step-indicator]").forEach((indicator) => {
    const indicatorStep = Number(indicator.dataset.stepIndicator);
    indicator.classList.toggle("active", indicatorStep === step);
    indicator.classList.toggle("complete", indicatorStep < step);
  });

  const labels = {
    1: "Continue to Review",
    2: "Continue to Complete Order",
    3: "Order with WhatsApp",
  };
  qs("#summaryCta").innerHTML =
    step === 3 ? `${icon("whatsapp")} ${labels[step]}` : labels[step];
  qs("#summaryCta").dataset.targetStep = String(step);
}

function checkoutWhatsAppMessage(details) {
  const totals = checkoutTotals();
  const modeLabel = checkoutMode() === "buy-now" ? "Buy Now Checkout" : "Cart Checkout";
  const productLines = totals.items
    .map(
      (item) =>
        `- Product Name: ${item.product.name}\n  Product Image URL: ${checkoutProductImageUrl(item)}\n  Product Price: ${rupee(item.product.price)}\n  Product Quantity: ${item.qty}\n  Product Color: ${selectedItemColor(item)}\n  Selected Variation: ${selectedItemVariation(item)}`,
    )
    .join("\n\n");

  return `RAM SAREES Order Request\n\nCheckout Type: ${modeLabel}\n\nPRODUCT DETAILS\n${productLines || "No products selected"}\n\nCUSTOMER DETAILS\nCustomer Full Name: ${fullCheckoutName(details)}\nDelivery Address: ${details.address}\nMobile Number: +91 ${details.phone}\n\nFinal Payable Amount: ${rupee(totals.total)}`;
}

function openCheckoutWhatsApp(form, button) {
  if (!checkoutItems().length || !validateCheckoutForm(form)) {
    setCheckoutStep(1);
    return;
  }
  const details = saveCheckoutDetails(form);
  button.disabled = true;
  button.textContent = "Opening WhatsApp...";
  setTimeout(() => {
    window.open(whatsappUrl(checkoutWhatsAppMessage(details)), "_blank", "noopener");
    button.disabled = false;
    button.innerHTML = `${icon("whatsapp")} Order with WhatsApp`;
  }, 250);
}

function initCheckout() {
  const form = qs("#checkoutForm");
  const mode = checkoutMode();
  const activeItems = checkoutItems();
  const saved = JSON.parse(
    localStorage.getItem(CHECKOUT_DETAILS_KEY) || "{}",
  );
  populateCheckoutColorSelect(
    form,
    activeItems.length ? selectedItemColor(activeItems[0]) : saved.color,
  );
  ["firstName", "lastName", "address", "phone"].forEach((name) => {
    if (saved[name] && form.elements[name]) form.elements[name].value = saved[name];
  });
  if (!checkoutColorOptions().includes(form.elements.color.value)) {
    populateCheckoutColorSelect(form);
  }

  if (!activeItems.length) {
    const emptyTitle =
      mode === "buy-now" ? "No Buy Now product selected" : "Your cart is empty";
    const emptyCopy =
      mode === "buy-now"
        ? "Choose a product and tap Buy Now to continue instant checkout."
        : "Explore the collection and add a saree you love.";
    qs('[data-checkout-step="1"] .checkout-card').insertAdjacentHTML(
      "afterbegin",
      `<div class="empty checkout-empty"><h2>${emptyTitle}</h2><p>${emptyCopy}</p><a class="btn" href="shop.html">Shop Now</a></div>`,
    );
    qs("#continueReview").disabled = true;
    qs("#confirmReview").disabled = true;
    qs("#whatsappOrder").disabled = true;
  }

  renderCheckoutSummary();
  setCheckoutStep(1);

  form.elements.phone.addEventListener("input", (event) => {
    event.target.value = phoneDigits(event.target.value).slice(0, 10);
  });

  form.elements.color.addEventListener("change", (event) => {
    syncBuyNowColor(event.target.value);
    renderCheckoutSummary();
    saveCheckoutDetails(form);
  });

  let persistTimer;
  form.addEventListener("input", (event) => {
    if (event.target.name) setFieldError(form, event.target.name, "");
    window.clearTimeout(persistTimer);
    persistTimer = window.setTimeout(() => saveCheckoutDetails(form), 180);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!checkoutItems().length || !validateCheckoutForm(form)) return;
    const details = saveCheckoutDetails(form);
    renderCheckoutReview(details);
    setCheckoutStep(2);
  });

  qs("#changeDetails").addEventListener("click", () => setCheckoutStep(1));
  qs("#confirmReview").addEventListener("click", () => {
    saveCheckoutDetails(form);
    setCheckoutStep(3);
  });
  qs("#whatsappOrder").addEventListener("click", (event) =>
    openCheckoutWhatsApp(form, event.currentTarget),
  );
  qs("#summaryCta").addEventListener("click", (event) => {
    const step = Number(event.currentTarget.dataset.targetStep || "1");
    if (step === 1) {
      qs("#continueReview").click();
      return;
    }
    if (step === 2) {
      qs("#confirmReview").click();
      return;
    }
    openCheckoutWhatsApp(form, event.currentTarget);
  });
}

function initOrder() {
  const form = qs("#orderForm");
  const saved = JSON.parse(
    localStorage.getItem(CHECKOUT_DETAILS_KEY) || "{}",
  );
  const items = checkoutItems();

  if (saved.name) form.elements.name.value = saved.name;
  if (saved.address) form.elements.address.value = saved.address;
  if (saved.phone) form.elements.phone.value = saved.phone;

  qs("#orderReview").innerHTML = items.length
    ? `
      <div class="order-mini-list">
        ${items
          .map(
            (item) =>
              `<div><img src="${selectedItemImage(item)}" alt="${item.product.name}" loading="lazy"><span>${item.product.name} (${selectedItemColor(item)}) x ${item.qty}</span><strong>${rupee(item.product.price * item.qty)}</strong></div>`,
          )
          .join("")}
      </div>
      <div class="summary-line"><span>Estimated Delivery</span><strong>${saved.estimatedDelivery || estimatedDelivery("")}</strong></div>
      <div class="summary-line total"><span>Total Amount</span><strong>${saved.total || rupee(items.reduce((sum, item) => sum + item.product.price * item.qty, 0))}</strong></div>`
    : `<div class="empty"><h2>No products selected</h2><p>Add a saree to continue your order.</p><a class="btn" href="shop.html">Shop Now</a></div>`;

  form.addEventListener("input", (event) => {
    if (event.target.name) setFieldError(form, event.target.name, "");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateRequiredOrderFields(form, true)) return;

    const data = new FormData(form);
    const order = items.length
      ? items
          .map(
            (item) =>
              `${item.product.name} x ${item.qty} - ${rupee(item.product.price * item.qty)}\nImage: ${checkoutProductImageUrl(item)}\nColor: ${selectedItemColor(item)}\nVariation: ${selectedItemVariation(item)}`,
          )
          .join("\n")
      : "Custom order";
    const total =
      saved.total ||
      rupee(items.reduce((sum, item) => sum + item.product.price * item.qty, 0));
    const message = `RAM SAREES Order Request\n\nOrder Details:\n${order}\n\nTotal Amount: ${total}\nEstimated Delivery: ${saved.estimatedDelivery || estimatedDelivery("")}\n\nCustomer Details:\nName: ${data.get("name")}\nPhone: ${phoneDigits(data.get("phone")).slice(-10)}\nEmail: ${data.get("email") || "Not provided"}\nGender: ${data.get("gender")}\nAddress: ${data.get("address")}\n\nSpecial Instructions:\n${data.get("message") || "No special instructions"}`;
    window.open(whatsappUrl(message), "_blank", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initChrome();
  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "shop") initShop();
  if (page === "product") initProduct();
  if (page === "cart") initCart();
  if (page === "contact") initContact();
  if (page === "checkout") initCheckout();
  if (page === "order") initOrder();
});
