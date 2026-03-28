"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const updateCart = (newCart) => {
  setCart(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

  return (
    <div
  style={{
    display: "flex",
    gap: "20px",
    padding: "20px",
    background: "#eaeded",
    minHeight: "100vh",
    color: "#111",       // ✅ ADD THIS
    opacity: 1,          // ✅ ADD THIS
  }}
>
      {/* 🛒 LEFT SIDE */}
      <div style={{ flex: 3, background: "white", padding: "20px" }}>
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                borderBottom: "1px solid #ddd",
                padding: "20px 0",
                alignItems: "flex-start",
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                style={{ width: "120px", objectFit: "contain" ,height:"120px",background:"white"}}
              />

              {/* DETAILS */}
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h3 style={{ fontSize: "16px", color: "#111" }}>{item.name}</h3>

                <p style={{ color: "green", fontSize: "14px" }}>
                  In stock
                </p>

                <p style={{ fontSize: "13px" }}>
                FREE delivery <b>{item.deliveryDate}</b>
                </p>

                <p style={{ fontSize: "12px", color: "#555" }}>
                  Fulfilled
                </p>

                {/* QUANTITY */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <button
  onClick={() => {
    const newCart = cart
      .map((c) =>
        c.id === item.id
          ? { ...c, quantity: c.quantity - 1 }
          : c
      )
      .filter((c) => c.quantity > 0);

    updateCart(newCart);
  }}
>
  -
</button>
                  <span>{item.quantity}</span>
                  <button
  onClick={() => {
    const newCart = cart.map((c) =>
      c.id === item.id
        ? { ...c, quantity: c.quantity + 1 }
        : c
    );
    updateCart(newCart);
  }}
>
  +
</button>

                  <span
  onClick={() => {
    const newCart = cart.filter((c) => c.id !== item.id);
    updateCart(newCart);
  }}
  style={{ color: "#007185", cursor: "pointer" }}
>
  Delete
</span>
                </div>
              </div>

              {/* PRICE */}
              <div style={{ fontWeight: "bold" }}>
                ₹{item.price}
              </div>
            </div>
          ))
        )}

        {/* SUBTOTAL BELOW ITEMS */}
        <h2 style={{ textAlign: "right" }}>
          Subtotal ({cart.length} items): ₹{subtotal}
        </h2>
      </div>

      {/* 💰 RIGHT PANEL */}
      <div
        style={{
          flex: 1,
          background: "white",
          padding: "20px",
          height: "fit-content",
        }}
      >
        {/* GREEN BOX */}
        <div
          style={{
            background: "#e6f4ea",
            padding: "10px",
            borderRadius: "5px",
            color: "green",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          ✔ Your order is eligible for FREE Delivery.
        </div>

        <h3 style={{ fontSize: "16px", color: "#111" }}>
          Subtotal ({cart.length} items): ₹{subtotal}
        </h3>

        {/* BUTTON */}
        

<Link href="/checkout">
  <button
    style={{
      width: "100%",
      background: "#FFD814",
      padding: "12px",
      borderRadius: "25px",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Proceed to Buy
  </button>
</Link>

        {/* EMI BOX */}
        <div
          style={{
            marginTop: "15px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        >
          EMI Available
        </div>
      </div>
    </div>
  );
}