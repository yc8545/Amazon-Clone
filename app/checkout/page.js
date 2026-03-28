"use client";

import { useEffect, useState } from "react";
  import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState("");
const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );



const handleOrder = () => {
  if (!selectedPayment) {
    alert("Select a payment method 😏");
    return;
  }

  setOrderPlaced(true);

  setTimeout(() => {
    localStorage.removeItem("cart");
    router.push("/");
  }, 2000);
};



if (orderPlaced) {
  return (
    <div
      style={{
        background: "#eaeded",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          width: "600px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          color: "#111",
        }}
      >
        {/* SUCCESS HEADER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "24px" }}>✅</span>
          <h2 style={{ color: "green" }}>
            Order placed, thank you!
          </h2>
        </div>

        {/* ORDER ID */}
        <p style={{ fontSize: "14px", marginBottom: "10px" ,color:"#111" ,fontWeight: "bold" }}>
          Order ID: <strong>#AMZ{Math.floor(Math.random() * 1000000)}</strong>
        </p>

        {/* DELIVERY INFO */}
        <p style={{ fontSize: "14px", marginBottom: "20px" }}>
          Estimated delivery:{" "}
          <strong>
            {new Date(
              new Date().setDate(new Date().getDate() + 3)
            ).toDateString()}
          </strong>
        </p>

        {/* MESSAGE */}
        <p style={{ fontSize: "14px", color: "#565959" }}>
          You will receive an email confirmation shortly.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => router.push("/")}
          style={{
            marginTop: "20px",
            background: "#FFD814",
            border: "none",
            padding: "12px 20px",
            borderRadius: "25px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}



  return (
  <div
    style={{
      display: "flex",
      gap: "20px",
      padding: "20px",
      background: "#eaeded",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      color: "#111",
    }}
  >
    {/* LEFT SIDE */}
    <div style={{ flex: 3 }}>
      
      {/* ADDRESS */}
      <div
        style={{
          background: "white",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>
          Delivering to Yashika Chaudhary
        </h2>

        <p style={{ fontSize: "14px", color: "#565959" }}>
          Chandigarh University, Punjab, India
        </p>

        <span
          style={{
            color: "#007185",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Add delivery instructions
        </span>
      </div>

      {/* PAYMENT SECTION */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Payment method</h2>

        {/* BALANCE BOX */}
        <div
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          <h4>Your available balance</h4>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <input
              placeholder="Enter Code"
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                flex: 1,
              }}
            />
            <button style={{ padding: "8px 12px" }}>Apply</button>
          </div>
        </div>

        {/* PAYMENT OPTIONS */}
        {["card", "upi", "netbanking", "emi"].map((method) => (
          <label
            key={method}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="payment"
              value={method}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            <span style={{ textTransform: "capitalize" }}>
              {method}
            </span>
          </label>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div
      style={{
        flex: 1,
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        height: "fit-content",
      }}
    >
      {/* BUTTON */}
      <button
        onClick={handleOrder}
        style={{
          width: "100%",
          background: "#FFD814",
          color: "#0F1111",
          padding: "12px",
          borderRadius: "25px",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Use this payment method
      </button>

      <hr />

      {/* SUMMARY */}
      <div style={{ marginTop: "15px", fontSize: "14px" }}>
        <p>Items: ₹{total}</p>
        <p>Delivery: FREE</p>

        <p style={{ color: "green", marginTop: "5px" }}>
          FREE Delivery
        </p>

        <h2 style={{ marginTop: "10px" }}>
          Order Total: ₹{total}
        </h2>
      </div>
    </div>
  </div>
);
}