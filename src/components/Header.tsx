
import React from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => (
  <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
    <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center space-x-8">
        <a href="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/06410a89-0898-45f8-8ce8-ece7aa12652d.png" alt="Adya Agency Logo" className="h-6 w-6" />
          <span className="font-bold text-gray-900">Adya Agency</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-orange-500 text-gray-700 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
