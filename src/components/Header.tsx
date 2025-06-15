
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
          ? 'bg-white/90 rounded-full px-6 py-2' 
          : 'bg-white/95 rounded-2xl px-8 py-4'
      }`}>
        {/* Moving glow animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent animate-[glow-sweep_3s_ease-in-out_infinite]"></div>
        </div>
        
        <div className={`relative flex items-center transition-all duration-700 ease-out ${
          isScrolled ? 'space-x-8' : 'justify-between'
        }`}>
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/073c0380-e646-4460-bdb6-9beed3e0c3e3.png" 
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
