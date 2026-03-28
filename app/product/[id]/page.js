"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        const data = await res.json();

        if (!data || data.error) return;

        const images = [
          data.image,
          data.image + "&1",
          data.image + "&2",
          data.image + "&3",
        ];

        setProduct({ ...data, images });
        setMainImage(images[0]);
      } catch (err) {
        console.error(err);
      }
    };

    if (params?.id) {
      loadData();
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

  }, [params?.id]);

  if (!product || !product.image) {
    return <p className="p-6">Loading...</p>;
  }

  const addToCart = () => {
    const existing = cart.find((item) => item.id === product.id);

    let updatedCart;

    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Added to cart 😏🔥");
  };

  const discounted =
    product.price - (product.price * product.discount) / 100;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

return (
  <div className="bg-gray-100 min-h-screen py-10">

    <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow flex gap-8 items-start">

      {/* 🔥 IMAGE SECTION */}
      <div className="flex gap-4 w-[500px]">

        {/* thumbnails */}
        <div className="flex flex-col gap-2">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-16 h-16 border cursor-pointer hover:scale-105 transition"
              onMouseEnter={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* main image */}
        <div className="overflow-hidden border rounded">
          <img
            src={mainImage}
            className="w-[300px] h-[300px] object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      {/* 🔥 DETAILS */}
      <div className="w-full max-w-xl text-black">

        <h1 className="text-2xl font-semibold mb-2">
          {product.name}
        </h1>

        {/* ⭐ RATINGS */}
        <div className="flex items-center gap-2 text-sm mb-3">
          <span className="text-yellow-500 text-lg">★★★★☆</span>
          <span className="text-blue-600 cursor-pointer">
            (2,345 ratings)
          </span>
        </div>

        {/* PRICE */}
        <div className="mb-3">
          <span className="text-3xl text-red-600 font-bold">
            ₹{Math.floor(discounted)}
          </span>

          <span className="line-through text-gray-500 ml-3">
            ₹{product.price}
          </span>

          <span className="text-green-600 ml-3">
            {product.discount}% off
          </span>
        </div>

        {/* STOCK */}
        <p className="text-red-600 font-semibold mb-2">
          Only {product.stock < 3 ? product.stock : 2} left in stock!
        </p>

        {/* DELIVERY */}
        <p className="text-green-700 mb-4">
          FREE delivery by {deliveryDate.toDateString()}
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-700 mb-6">
          {product.description}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">

          <button
            onClick={addToCart}
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold"
          >
            Add to Cart
          </button>
          

        </div>

        {/* REVIEWS */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-3">
            Customer Reviews
          </h2>

          <div className="border p-3 mb-2 rounded bg-gray-50 flex items-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span>Amazing product!</span>
          </div>

          <div className="border p-3 mb-2 rounded bg-gray-50 flex items-center gap-2">
            <span className="text-yellow-500">★★★★☆</span>
            <span>Good quality</span>
          </div>

          <div className="border p-3 rounded bg-gray-50 flex items-center gap-2">
            <span className="text-yellow-500">★★★☆☆</span>
            <span>Worth the price</span>
          </div>
        </div>

      </div>

    </div>
  </div>
);
}