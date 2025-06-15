
import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'w-auto' : 'w-full max-w-4xl'
    }`}>
      <div className={`backdrop-blur-md border border-gray-200 shadow-lg transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 rounded-full px-6 py-3' 
          : 'bg-white/95 rounded-2xl px-8 py-4'
      }`}>
        <div className={`flex items-center transition-all duration-300 ${
          isScrolled ? 'space-x-8' : 'justify-between'
        }`}>
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/06410a89-0898-45f8-8ce8-ece7aa12652d.png" 
              alt="Adya Agency Logo" 
              className={`transition-all duration-300 ${isScrolled ? 'h-6 w-6' : 'h-8 w-8'}`} 
            />
            <span className={`font-bold text-gray-900 transition-all duration-300 ${
              isScrolled ? 'text-base' : 'text-lg'
            }`}>
              Adya Agency
            </span>
          </a>
          <nav className={`flex items-center gap-6 transition-all duration-300 ${
            isScrolled ? 'text-sm' : 'text-base'
          }`}>
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
};

export default Header;
