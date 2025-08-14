// src/Context/products.js

const products = [
  // --- Shoes ---
  {
    id: 1,
    title: 'Futuristic Holographic Soccer Shoes',
    description: 'High-tech soccer shoes with holographic accents.',
    price: 9989,
    category: { name: 'Shoes' },
    images: ['/images/futuristic-shoes.jpg']
  },
  {
    id: 2,
    title: 'Chic Summer Denim Espadrille Sandals',
    description: 'Perfect summer sandals for style and comfort.',
    price: 83,
    category: { name: 'Shoes' },
    images: ['/images/denim-sandals.jpg']
  },
  {
    id: 3,
    title: 'Elegant Purple Leather Loafers',
    description: 'Premium leather loafers in bold purple.',
    price: 97,
    category: { name: 'Shoes' },
    images: ['/images/leather-loafers.jpg']
  },

  // --- Clothes ---
  {
    id: 4,
    title: 'Classic White Cotton Shirt',
    description: 'Soft and breathable cotton shirt for daily wear.',
    price: 1200,
    category: { name: 'Clothes' },
    images: ['/images/cotton-shirt.jpg']
  },
  {
    id: 5,
    title: 'Blue Denim Jacket',
    description: 'Stylish denim jacket for all seasons.',
    price: 2500,
    category: { name: 'Clothes' },
    images: ['/images/denim-jacket.jpg']
  },
  {
    id: 6,
    title: 'Black Formal Trousers',
    description: 'Comfortable and elegant formal trousers.',
    price: 1800,
    category: { name: 'Clothes' },
    images: ['/images/formal-trousers.jpg']
  },

  // --- Electronics ---
  {
    id: 7,
    title: 'Apple iPhone 15 Pro',
    description: 'Latest iPhone with advanced camera and performance.',
    price: 134999,
    category: { name: 'Electronics' },
    images: ['/images/iphone15pro.jpg']
  },
  {
    id: 8,
    title: 'Samsung 55" 4K Smart TV',
    description: 'Crisp 4K visuals with smart TV features.',
    price: 55999,
    category: { name: 'Electronics' },
    images: ['/images/samsung-4k-tv.jpg']
  },
  {
    id: 9,
    title: 'Sony WH-1000XM5 Headphones',
    description: 'Premium noise-cancelling wireless headphones.',
    price: 29990,
    category: { name: 'Electronics' },
    images: ['/images/sony-headphones.jpg']
  },

  // --- Toys ---
  {
    id: 10,
    title: 'LEGO Star Wars Millennium Falcon',
    description: 'Detailed LEGO set for Star Wars fans.',
    price: 15999,
    category: { name: 'Toys' },
    images: ['/images/lego-falcon.jpg']
  },
  {
    id: 11,
    title: 'Hot Wheels 20-Car Gift Pack',
    description: 'Collection of 20 die-cast cars.',
    price: 2499,
    category: { name: 'Toys' },
    images: ['/images/hotwheels-pack.jpg']
  },
  {
    id: 12,
    title: 'Nerf Elite 2.0 Blaster',
    description: 'High-performance dart blaster for action play.',
    price: 1999,
    category: { name: 'Toys' },
    images: ['/images/nerf-blaster.jpg']
  }
];

export default products;
