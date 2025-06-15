
import React from "react";

const Footer = () => (
  <footer className="bg-black border-t mt-24 pt-12 pb-8 text-white w-full">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-14 px-4">
      <div className="flex flex-col items-start">
        {/* Logo placeholder, replace with real logo when available */}
        <div className="flex items-center mb-3">
          <svg width="32" height="32" fill="none" className="mr-2" viewBox="0 0 48 48">
            <rect x="6" y="6" width="36" height="36" rx="10" stroke="#FFA500" strokeWidth="4" />
            <circle cx="24" cy="24" r="8" stroke="#FFA500" strokeWidth="4" />
          </svg>
          <span className="text-xl font-semibold text-orange-400">Adya Agency</span>
        </div>
        <p className="text-gray-300 mb-6 max-w-xs">Grow with next-gen AI solutions for modern businesses.</p>
      </div>
      <div className="flex flex-1 justify-between gap-14">
        <div>
          <h4 className="font-bold mb-2 text-lg">Menu</h4>
          <ul className="text-gray-300 space-y-1">
            <li><a href="#home" className="hover:text-orange-300 transition">Home</a></li>
            <li><a href="#features" className="hover:text-orange-300 transition">Features</a></li>
            <li><a href="#steps" className="hover:text-orange-300 transition">Three Steps</a></li>
            <li><a href="#faq" className="hover:text-orange-300 transition">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Links</h4>
          <ul className="text-gray-300 space-y-1">
            <li><a href="#" className="hover:text-orange-300 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-300 transition">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
