"use client";

export default function ProductCard({ product, addToCart }) {
  const rating = (Math.random() * 2 + 3).toFixed(1);
  const reviews = Math.floor(Math.random() * 5000 + 500);

  const mrp = product.price + Math.floor(Math.random() * 2000);
const discount = Math.floor(((mrp - product.price) / mrp) * 100);

  const deliveryDays = Math.floor(Math.random() * 5 + 2);
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);

  return (
    <div
      style={{
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        background: "white",
        color: "#111",
        padding: "12px",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-contain"
/>

      <div style={{ fontSize: "12px", color: "#565959" }}>
        Sponsored
      </div>

      <div
        style={{
          fontSize: "14px",
          height: "40px",
          overflow: "hidden",
        }}
      >
        {product.name}
      </div>

      <div style={{ fontSize: "13px", margin: "5px 0" }}>
        ⭐ {rating} ({reviews})
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>
          ₹{product.price}
        </span>
        <span style={{ fontSize: "12px", color: "#565959" }}>
          /count
        </span>
      </div>

      <div style={{ fontSize: "12px", color: "#565959" }}>
        M.R.P:{" "}
        <span style={{ textDecoration: "line-through" }}>
          ₹{mrp}
        </span>{" "}
        <span style={{ color: "#B12704" }}>
          ({discount}% off)
        </span>
      </div>

      <div style={{ fontSize: "12px", marginTop: "5px" }}>
        FREE delivery{" "}
        <strong>{deliveryDate.toDateString()}</strong>
      </div>

      

      <button
  onClick={() => addToCart(product)} 
  style={{
    marginTop: "10px",
    width: "100%",
    background: "#FFD814",
    color: "#0F1111",
    border: "none",
    padding: "10px",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Add to cart
</button>
    </div>
  );
}