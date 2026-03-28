"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

export default function Home() {

  // ✅ 1. DECLARE STATES FIRST
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ 2. FETCH DATA
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
          {filteredProducts.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
        </div>
      </div>
    </>
  );
}