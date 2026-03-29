"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";




export default function Header({ setSelectedCategory, setSearch, products ,cart}) {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setLocalCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // ✅ safer suggestions (no crash)
  const suggestions = products
    ?.filter((p) =>
      p.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    .slice(0, 5);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const cartCount = (cart || []).reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <div>
      {/* TOP NAV */}
      <div
        style={{
          background: "#131921",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          gap: "20px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            style={{
              width: "110px",
              height: "40px"
            }}
          />
        </div>

        {/* Location */}
        <div style={{ fontSize: "12px" }}>
          <div>Deliver to</div>
          <strong>Jeffi</strong>
        </div>

        {/* 🔥 SEARCH WRAPPER (FIXED) */}
        <div
          style={{
            position: "relative", // ✅ IMPORTANT FIX
            display: "flex",
            flex: 1,
            borderRadius: "5px",
            overflow: "visible",
            background: "white",
          }}
        >
          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => {
              setLocalCategory(e.target.value);
              setSelectedCategory(e.target.value);
            }}
            style={{
              padding: "8px",
              border: "none",
              background: "#e6e6e6",
              borderRight: "1px solid #ddd",
              fontSize: "12px",
              color: "#111",
              cursor: "pointer"
            }}
          >
            <option>All</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Input */}
          <input
            type="text"
            placeholder="Search Amazon.in"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSearch(e.target.value);
            }}
            style={{
              flex: 1,
              padding: "10px",
              border: "none",
              outline: "none",
              fontSize: "14px",
              color: "#111",
              backgroundColor: "white"
            }}
          />

          {/* Button */}
          <button
            style={{
              background: "#febd69",
              border: "none",
              padding: "8px 15px",
              cursor: "pointer",
            }}
          >
            🔍
          </button>

          {/* 🔥 FIXED DROPDOWN */}
          {searchText && suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",      // directly below search bar
                left: 0,
                width: "100%",
                background: "white",
                border: "1px solid #ddd",
                borderTop: "none",
                zIndex: 999,
                borderRadius: "0 0 5px 5px",
                maxHeight: "250px",
                overflowY: "auto",
              }}
            >
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    color: "#111",
                    borderBottom: "1px solid #eee",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f3f3f3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "white")
                  }
                  onClick={() => {
                    setSearch(item.name);
                    setSearchText(item.name);
                  }}
                >
                  🔍 {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Language */}
        <div>EN</div>

        {/* Account */}
        <div style={{ fontSize: "12px" }}>
          <div>ohh</div>
          <strong>Hello, Jeffi</strong>
        </div>

        {/* Orders */}
        <p
  className="cursor-pointer hover:underline"
  onClick={() => router.push("/orders")}
>
  Returns & Orders
</p>


        {/* Cart */}
        <Link href="/cart" style={{ fontWeight: "bold", color: "white" }}>
  🛒 Cart ({cartCount})
</Link>
       
      </div>

      {/* BOTTOM NAV */}
      <div
        style={{
          background: "#232f3e",
          color: "white",
          display: "flex",
          gap: "15px",
          padding: "10px 20px",
          fontSize: "14px",
          overflowX: "auto",
        }}
      >
        <strong>soon to come -</strong>
        <span>Fresh</span>
        <span>MX Player</span>
        <span>Sell</span>
        <span>Gift Cards</span>
        <span>Amazon Pay</span>
        <span>Buy Again</span>
        <span>AmazonBasics</span>
        <span>Gift Ideas</span>
        <span>Prime</span>
        <span>Home Improvement</span>
        <span>Health & Personal Care</span>
      </div>
    </div>
  );
}