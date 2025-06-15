
import React from "react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

const Header = () => (
  <header className="w-full flex justify-center pt-6 pb-4">
    <div className="w-full max-w-6xl bg-white/100 rounded-2xl shadow-md flex items-center px-8 py-3 justify-between border border-gray-100">
      <div className="flex items-center space-x-2">
        {/* Placeholder for logo, replace with actual logo as needed */}
        <span className="text-2xl font-semibold text-orange-500 flex items-center">
          {/* Simple SVG icon as logo placeholder */}
          <svg width="32" height="32" fill="none" className="mr-2" viewBox="0 0 48 48">
            <rect x="6" y="6" width="36" height="36" rx="10" stroke="#FFA500" strokeWidth="4" />
            <circle cx="24" cy="24" r="8" stroke="#FFA500" strokeWidth="4" />
          </svg>
          Adya Agency
        </span>
      </div>
      <nav>
        <ul className="flex items-center gap-8 text-lg font-medium">
          {navLinks.map(link =>
            <li key={link.label}><a href={link.href} className="hover:text-orange-500 transition">{link.label}</a></li>
          )}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
