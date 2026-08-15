const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Product = require("../models/Product");
const Feature = require("../models/Feature");

const BANNER_BASE =
  "https://raw.githubusercontent.com/AYNR325/E-commerce-Shopping-Store/main/frontend/src/assets";

const users = [
  {
    userName: "admin",
    email: "admin@store.com",
    password: "Admin@123",
    role: "admin",
  },
  {
    userName: "demo",
    email: "demo@store.com",
    password: "Demo@123",
    role: "user",
  },
];

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    title: "Nike Dri-FIT Training Tee",
    description: "Lightweight moisture-wicking tee for workouts and everyday wear.",
    category: "men",
    brand: "nike",
    price: 2499,
    salePrice: 1999,
    totalStock: 40,
    averageReview: 4.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    title: "Adidas Essentials Track Jacket",
    description: "Classic three-stripe jacket with a comfortable regular fit.",
    category: "men",
    brand: "adidas",
    price: 4999,
    salePrice: 3999,
    totalStock: 25,
    averageReview: 4.4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    title: "Levi's 501 Original Jeans",
    description: "Iconic straight-fit jeans with a timeless denim wash.",
    category: "men",
    brand: "levi",
    price: 5999,
    salePrice: 0,
    totalStock: 30,
    averageReview: 4.7,
  },
  {
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
    title: "Zara Linen Blend Shirt",
    description: "Breathable linen shirt for a clean, casual look.",
    category: "women",
    brand: "zara",
    price: 3299,
    salePrice: 2699,
    totalStock: 22,
    averageReview: 4.3,
  },
  {
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    title: "H&M Flowy Summer Dress",
    description: "Easy everyday dress with a flattering silhouette.",
    category: "women",
    brand: "h&m",
    price: 2799,
    salePrice: 2199,
    totalStock: 18,
    averageReview: 4.2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    title: "Zara Knit Sweater",
    description: "Soft knit sweater that layers well through the season.",
    category: "women",
    brand: "zara",
    price: 3599,
    salePrice: 0,
    totalStock: 20,
    averageReview: 4.1,
  },
  {
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80",
    title: "Puma Kids Graphic Hoodie",
    description: "Cozy hoodie with a fun print, made for all-day play.",
    category: "kids",
    brand: "puma",
    price: 1999,
    salePrice: 1599,
    totalStock: 35,
    averageReview: 4.6,
  },
  {
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80",
    title: "Levi's Kids Denim Jacket",
    description: "Durable kids denim jacket with a classic trucker cut.",
    category: "kids",
    brand: "levi",
    price: 2499,
    salePrice: 0,
    totalStock: 16,
    averageReview: 4.4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1588850561407-7397f6f0d8eb?w=800&q=80",
    title: "Nike Heritage Baseball Cap",
    description: "Adjustable cap with an embroidered swoosh.",
    category: "accessories",
    brand: "nike",
    price: 1299,
    salePrice: 999,
    totalStock: 50,
    averageReview: 4.3,
  },
  {
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    title: "Zara Leather Belt",
    description: "Minimal leather belt that finishes casual and formal looks.",
    category: "accessories",
    brand: "zara",
    price: 1499,
    salePrice: 0,
    totalStock: 28,
    averageReview: 4.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    title: "Nike Air Max Sneakers",
    description: "Cushioned everyday sneakers with a bold silhouette.",
    category: "footwear",
    brand: "nike",
    price: 8999,
    salePrice: 7499,
    totalStock: 15,
    averageReview: 4.8,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    title: "Adidas Ultraboost Running Shoes",
    description: "Responsive running shoes built for long-distance comfort.",
    category: "footwear",
    brand: "adidas",
    price: 12999,
    salePrice: 10999,
    totalStock: 12,
    averageReview: 4.7,
  },
  {
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    title: "Puma Suede Classic",
    description: "Street-ready suede sneakers with a retro profile.",
    category: "footwear",
    brand: "puma",
    price: 6999,
    salePrice: 0,
    totalStock: 20,
    averageReview: 4.5,
  },
];

const featureImages = [
  `${BANNER_BASE}/banner-1.webp`,
  `${BANNER_BASE}/banner-2.webp`,
  `${BANNER_BASE}/banner-3.webp`,
];

async function seed() {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is missing in backend/.env");
  }

  await mongoose.connect(process.env.MONGO_URL);

  for (const user of users) {
    const existing = await User.findOne({ email: user.email });
    if (existing) {
      existing.role = user.role;
      existing.userName = user.userName;
      existing.password = await bcrypt.hash(user.password, 12);
      await existing.save();
      continue;
    }
    await User.create({
      ...user,
      password: await bcrypt.hash(user.password, 12),
    });
  }

  await Product.deleteMany({});
  await Product.insertMany(products);

  await Feature.deleteMany({});
  await Feature.insertMany(featureImages.map((image) => ({ image })));

  console.log("Seed complete.");
  console.log("Admin login: admin@store.com / Admin@123");
  console.log("Demo login:  demo@store.com / Demo@123");

  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error("Seed failed:", error.message);
  process.exit(1);
});
