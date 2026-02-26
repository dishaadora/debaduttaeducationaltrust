"use client";

import { p } from "framer-motion/client";
import { useState } from "react";
import "./globals.css";
import {quicksand} from "@/app/ui/fonts";
export default function Tforms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Failed to send message.");
    }

  } catch (error) {
    console.error(error);
    setStatus("Something went wrong in the pipelines");
  } finally {
    setLoading(false);
  }
};

return(
  <>
  <div className={`${quicksand.className} h-screen flex flex-col justify-center items-center`}>
    <div className="font-bold text-5xl text-amber-100 flex flex-row items-start w-full pl-48 mb-12"><div className="shadow-2xl shadow-black rounded-2xl w-[50px] mr-8"><i className="fa-regular fa-lg fa-comment text-amber-100 mr-4"></i></div>Connect With Us</div>
    <form onSubmit={handleSubmit} className="h-3/4 w-3/4 flex flex-col gap-12 justify-center items-center rounded-3xl border-4 border-white bg-[#b9cadf]">
      <div className="flex flex-row gap-8 p-8">
        <input
        type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="bg-[#f4f9fe] text-blue-900 text-2xl font-semibold rounded-lg p-3 shadow-lg" required
      />
      <input 
        type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="bg-[#f4f9fe] text-blue-900 text-2xl font-semibold rounded-lg p-3 shadow-lg" required
      />
      </div>
      <div className="w-full px-20 flex justify-center items-center">
        <textarea
          name="message"
          placeholder="Write your thoughts here..."
          value={formData.message}
          onChange={handleChange}
          className="bg-[#f4f9fe] text-blue-900 text-2xl font-semibold rounded-br-3xl rounded-t-3xl p-4 h-40 w-3xl shadow-lg"
          required
      />
      </div>
      <button
          type="submit"
          disabled={loading}
          className="border-4 border-[#ffffff]  px-12 py-4 text-2xl rounded-2xl font-semibold flex justify-center items-center cursor-pointer hover:bg-amber-100 transform ease-in-out hover:text-blue-900 hover:shadow-2xl"
        >
          {loading ? "Sending..." : "Send"}
        </button>
    </form>
    {status && (
      <p className="text-[#b9cadf] text-4xl font-semibold mt-6">
        {status}
      </p>
    )}
  </div>
  </>
);
}
