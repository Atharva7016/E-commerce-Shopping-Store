# 🛍️ Modern E-commerce Platform

A full-stack e-commerce platform built with modern technologies, featuring a beautiful UI and robust backend functionality.

![E-commerce Platform](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌐 Live Demo

Visit the live application at: [E-commerce Shopping Store](https://e-commerce-shopping-store-roan.vercel.app)

## ✨ Features

- 🎨 Modern and responsive UI with Tailwind CSS
- 🔐 Secure user authentication and authorization
- 🛒 Shopping cart functionality
- 💳 Secure payment processing
- 📱 Mobile-first design
- 🔍 Advanced product search and filtering
- 📊 Admin dashboard for product management
- 📦 Order tracking and management
- ⚡ Fast and optimized performance

## 🚀 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Vite
- Shadcn UI Components
- React Router
- Redux Toolkit

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe Payment Integration
- RESTful API

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/Atharva7016/E-commerce-Shopping-Store.git
cd E-commerce-Shopping-Store
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

4. Set up environment variables
Copy the example files and fill in your values:
```bash
copy frontend\.env.example frontend\.env
copy backend\.env.example backend\.env
```

5. Start the Development Servers

Frontend:
```bash
cd frontend
npm run dev
```

Backend:
```bash
cd backend
npm run dev
```

## 🌐 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Backend (.env)
```
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/ecommerce-shopping-store
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_BASE_URL=http://localhost:5173
```

## 👤 Author

Atharva Patil
