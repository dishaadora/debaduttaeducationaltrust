"use client";

import { useState } from "react";
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

return (
    <div
      className={`${quicksand.className} min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-12`}
    >
      {/* Heading */}
      <div className="font-bold text-3xl sm:text-4xl md:text-5xl text-amber-100 flex items-center w-full max-w-4xl mb-10 gap-4">
        <div className="shadow-2xl shadow-black rounded-2xl w-12 h-12 flex items-center justify-center">
          <i className="fa-regular fa-comment text-amber-100"></i>
        </div>
        Contact Us
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl flex flex-col gap-6 sm:gap-8 rounded-3xl border-4 border-white bg-[#b9cadf] p-6 sm:p-10"
      >
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 text-center">
          Fill Out This Form And Let Us Know More About You!
        </p>

        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <input
            type="text"
            name="name"
            placeholder="Name/Organisation"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 bg-[#f4f9fe] text-blue-900 text-base sm:text-lg font-semibold rounded-lg p-3 shadow-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 bg-[#f4f9fe] text-blue-900 text-base sm:text-lg font-semibold rounded-lg p-3 shadow-lg"
            required
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Write your thoughts here..."
          value={formData.message}
          onChange={handleChange}
          className="bg-[#f4f9fe] text-blue-900 text-base sm:text-lg font-semibold rounded-3xl p-4 h-36 sm:h-40 w-full shadow-lg resize-none"
          required
        />

        <p className="text-white text-sm sm:text-base font-semibold text-center">
          * If you're willing to donate to us, please don't forget to let us
          know about your kindness through the form.
        </p>

        <button
          type="submit"
          disabled={loading} 
          className="border-2 border-white mx-auto sm:px-12 py-3 sm:py-4 text-lg sm:text-2xl rounded-2xl font-semibold flex justify-center items-center hover:bg-amber-100 hover:text-blue-900 hover:shadow-2xl transition-all duration-300"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {status && (
        <p className="text-[#b9cadf] text-xl sm:text-2xl md:text-3xl font-semibold mt-6 text-center">
          {status}
        </p>
      )}
    </div>
  );
}
