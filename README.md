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


## 🔍 Search Functionality

The application includes a dynamic product search feature that allows users to find items efficiently.

### ✅ How Search Works
- Users can search products using:
  - **Product Name** (e.g., `Electronics Product 5`)
  - **Category Name** (e.g., `Electronics`, `Fashion`)
  - **Keywords from Description** (e.g., `Best Electronics product`)

### 🔎 Example Search Queries
Try searching with:
- `Electronics`
- `Fashion Product 10`
- `Books Product`
- `Best Toys`
- `Home & Kitchen Product 3`

The search system supports:
- Partial matching (no exact match required)
- Case-insensitive queries

---

## 🗂️ Product Categories

The platform organizes products into the following predefined categories:

- 📱 Electronics  
- 👗 Fashion  
- 📚 Books  
- 🏠 Home & Kitchen  
- 💄 Beauty  
- 🧸 Toys  
- 🏋️ Sports  
- 🚗 Automotive  
- 🛒 Grocery  
- ❤️ Health  

Each category contains **20 dynamically generated products**, resulting in **200+ products** in total.

---

## 📦 Product Data Generation (Seeding Logic)

- Products are generated using a custom script with:
  - Random prices (₹100 – ₹5100)
  - Random discounts (0% – 30%)
  - Random stock availability
- Images are fetched dynamically using `https://picsum.photos`
- Each product is linked to its respective category using **Prisma ORM**

---

## 🚀 Data Scale

- 🗂️ 10 Categories  
- 📦 200+ Products  
- 🔁 Fully dynamic seeded data  

---

## 🧠 Developer Note

Search is designed to simulate real-world e-commerce behavior by:
- Supporting flexible keyword matching
- Allowing category-based discovery
- Providing scalable product data using Prisma

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
