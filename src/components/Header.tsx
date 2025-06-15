
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
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
      isScrolled ? 'w-auto top-2' : 'w-full max-w-4xl top-4'
    }`}>
      <div className={`relative backdrop-blur-md border border-gray-200 shadow-lg transition-all duration-700 ease-out overflow-hidden ${
        isScrolled 
          ? 'bg-white rounded-full px-6 py-2' 
          : 'bg-white rounded-2xl px-8 py-4'
      }`}>
        <div className={`relative flex items-center transition-all duration-700 ease-out ${
          isScrolled ? 'space-x-8' : 'justify-between'
        }`}>
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/2b49c033-8f68-45a0-80de-d43df6d6d945.png" 
              alt="Adya Agency Logo" 
              className={`transition-all duration-700 ease-out ${isScrolled ? 'h-8' : 'h-10'}`} 
            />
          </a>
          <nav className={`flex items-center gap-6 transition-all duration-700 ease-out ${
            isScrolled ? 'text-sm' : 'text-base'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-all duration-300 ease-out hover:text-orange-500 text-gray-700 font-medium hover:scale-105"
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
