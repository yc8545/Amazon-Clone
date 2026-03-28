"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);



const getDeliveryStatus = (orderDate) => {
  const order = new Date(orderDate);
  const today = new Date();

  const diffDays = Math.floor(
    (today - order) / (1000 * 60 * 60 * 24)
  );

  if (diffDays >= 3) {
    return {
      text: "Delivered",
      color: "text-green-600",
    };
  } else {
    return {
      text: "Arriving Soon",
      color: "text-yellow-600",
    };
  }
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet 😭</p>
      ) : (
        orders.map((order, index) => {
  const status = getDeliveryStatus(order.date || new Date()); // 🔥 USE ORDER DATE

  return (
    <div key={index} className="bg-white border border-gray-300 mb-6 rounded-lg overflow-hidden shadow-md">

      {/* TOP BAR */}
      <div className="bg-gray-200 p-3 flex justify-between text-sm text-black">
        <div>
          <p>ORDER PLACED</p>
          <p className="font-semibold">{formatDate(order.date || new Date())}</p>
        </div>

        <div>
          <p>TOTAL</p>
          <p className="font-semibold">₹{order.total}</p>
        </div>

        <div>
          <p>ORDER ID</p>
          <p className="font-semibold">#{order.id}</p>
        </div>
      </div>

      {/* BODY */}
      <div className="p-4">

        {/* STATUS */}
        <p className={`${status.color} font-semibold text-lg`}>
          {status.text}
        </p>

        {/* ITEMS */}
        {order.items.map((item, i) => (
          <div key={i} className="flex gap-4 mt-3 items-center text-black">
            
            <img
              src={item.image}
              alt=""
              className="w-20 h-20 object-contain"
            />

            <div>
              <p className="font-medium">{item.title}</p>
              
              <button className="mt-2 border px-3 py-1 rounded">
                View your item
              </button>
            </div>

          </div>
        ))}

        {/* RETURN BUTTON */}
        <button
          className="mt-4 bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-full text-sm font-semibold text-black shadow"
          onClick={() => alert("Return request placed 😎")}
        >
          Return Item
        </button>
      </div>
    </div>
  );
})
      )}
    </div>
  );
}