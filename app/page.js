"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

export default function Home() {

  // ✅ 1. DECLARE STATES FIRST
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  const deliveryDays = Math.floor(Math.random() * 5 + 2);
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);

  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);

    if (existing) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
          deliveryDate: deliveryDate.toDateString(), // 🔥 ADD THIS
        },
      ];
    }
  });
};

  // ✅ 2. FETCH DATA
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(storedCart);
}, []);
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  // ✅ 3. FILTER AFTER STATE EXISTS
  const filteredProducts = products.filter((p) => {
  const matchCategory =
    selectedCategory === "All" ||
    p.category?.name.toLowerCase() === selectedCategory.toLowerCase();

  const matchSearch =
    p.name.toLowerCase().includes(search.toLowerCase());

  return matchCategory && matchSearch;
});

  return (
    <>
      <Header 
  setSelectedCategory={setSelectedCategory}
  setSearch={setSearch}
  products={products}   
  cart={cart}
/>

      <div style={{ padding: "20px" }}>
        <h1>Amazon Clone</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {filteredProducts.map((p) => (
  <ProductCard 
  key={p.id} 
  product={p} 
  addToCart={addToCart}
/>
))}
        </div>
      </div>
    </>
  );
}