"use client";

import Link from "next/link";
import {quicksand} from "@/app/ui/fonts";

export default function Footer() {
  return (
    <footer className={`${quicksand.className} bg-[#1f2a38] text-gray-300 px-10 py-12 `}>
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Debadutta Educational Trust</h2>
          <p className="text-sm leading-relaxed">
            Empowering communities through transparency, impact,
            and sustainable initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-white transition">About</Link></li>
            <li><Link href="#trustees" className="hover:text-white transition">Trustees</Link></li>
            <li><Link href="#gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link href="#certificates" className="hover:text-white transition">Certificates</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="#donation" className="hover:text-white transition">Donate</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: bhagabandora@gmail.com</li>
            <li>Phone: +91 99379 18703</li>
            <li>Semiliguda, Odisha</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Debadutta Educational Trust. All rights reserved.
      </div>

    </footer>
  );
}
