# 🛒 E-Commerce Platform (Amazon Clone)
### 💼 SDE Intern Fullstack Assignment Submission

---

## 📌 Project Overview
This project is a full-stack e-commerce web application that replicates the core functionality and user experience of Amazon.

It includes product browsing, searching, filtering, cart management, and order placement, while following Amazon’s UI patterns and layout structure.

The application is built with a focus on:
- Clean architecture  
- Scalable database design  
- Reusable components  
- Real-world e-commerce workflows  

---

## 🚀 Live Demo
Deployed Link: https://meet-amzclone-yc.vercel.app/ 
GitHub Repository: https://github.com/yc8545/Amazon-Clone.git
---

## 🧰 Tech Stack

### Frontend
- Next.js (React Framework)
- Tailwind CSS
- React Hooks (useState, useEffect)
- App Router

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- Prisma ORM

---

## 🧱 System Architecture
- Frontend (Next.js SPA) handles UI, routing, and state  
- Backend (Express API) manages product, cart, and order logic  
- Database (PostgreSQL) stores products, orders, and cart data  

---

## ✅ Core Features Implementation

### 1. Product Listing Page
- Grid layout inspired by Amazon UI  
- Displays products (Electronics: 1–20 items)  

Product Card includes:
- Image  
- Name  
- Price  
- Add to Cart button  

#### Search Functionality
- Search products by:
  - Name  
  - Keywords  
- Dynamic filtering of product list  

#### Category Filter (Header)
- Filter products by category (Electronics implemented)  
- Extendable for multiple categories  

---

### 2. Product Detail Page
- Product image display (multi-image ready)  
- Product description and specifications  
- Price and availability  

Actions:
- Add to Cart  
- Buy Now  

---

### 3. Shopping Cart
- Add items to cart  
- Update product quantity  
- Remove items from cart  

Cart summary includes:
- Subtotal  
- Total price  

---

### 4. Order Placement
- Checkout page with shipping address form  
- Payment selection option  
- Order summary before placing order  

Order confirmation page includes:
- Order ID  
- Success message  

---

## ⭐ Bonus Features (Planned / Partial)
- Responsive design  
- Advanced filters (price, rating, brand)  
- Wishlist functionality  
- Order history  
- AI-based recommendations  

---

## 🗄️ Database Design

### Entities:
- Product: id, name, price, category, image, description  
- Cart: id, productId, quantity  
- Order: id, totalAmount, status, createdAt  
- OrderItems: orderId, productId, quantity  

### Relationships:
- One-to-Many: Order → OrderItems  
- Many-to-One: Cart → Product  

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
