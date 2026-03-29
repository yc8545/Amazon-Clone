"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddressPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    country: "India",
    fullName: "",
    phone: "",
    pincode: "",
    house: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
   

    // ✅ NAVIGATE
    router.push("/checkout");
  };

  return (
    <div className="bg-[#eaeded] min-h-screen">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Enter a new delivery address
        </h1>

        {/* ERROR */}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 mb-4 text-sm rounded">
            {error}
          </div>
        )}

        {/* FORM */}
        <div className="bg-white p-6 rounded border">

          {/* COUNTRY */}
          <Label>Country/Region</Label>
          <select className="w-full border border-gray-400 rounded px-3 py-2 text-black mb-4">
            <option>India</option>
          </select>

          {/* NAME */}
          <Label>Full name (First and Last name)</Label>
          <input
            name="fullName"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2 text-black mb-4"
          />

          {/* PHONE */}
          <Label>Mobile number</Label>
          <input
            name="phone"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2 text-black"
          />
          <p className="text-xs text-gray-600 mb-4">
            May be used to assist delivery
          </p>

          {/* PINCODE */}
          <Label>Pincode</Label>
          <input
            name="pincode"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2 text-black mb-4"
            placeholder="6 digits [0-9]"
          />

          {/* HOUSE */}
          <Label>Flat, House no., Building, Company, Apartment</Label>
          <input
            name="house"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2 text-black mb-4"
          />

          {/* AREA */}
          <Label>Area, Street, Sector, Village</Label>
          <input
            name="area"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2 text-black mb-4"
          />

          {/* LANDMARK */}
          <Label>Landmark</Label>
          <input
            name="landmark"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-3 py-2 text-black mb-4"
            placeholder="E.g. near apollo hospital"
          />

          {/* CITY + STATE */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <Label>Town/City</Label>
              <input
                name="city"
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-3 py-2 text-black"
              />
            </div>

            <div className="w-1/2">
              <Label>State</Label>
              <select
                name="state"
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-3 py-2 text-black"
              >
                <option value="">Choose a state</option>
                <option>Punjab</option>
                <option>Delhi</option>
                <option>Haryana</option>
              </select>
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="flex items-center gap-2 mb-4 text-black">
            <input type="checkbox" />
            <span className="text-sm">Make this my default address</span>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-full font-medium text-black"
          >
            Use this address
          </button>

        </div>
      </div>
    </div>
  );
}

// LABEL COMPONENT
function Label({ children }) {
  return (
    <p className="text-sm font-semibold mb-1 mt-3 text-black">
      {children}
    </p>
  );
}