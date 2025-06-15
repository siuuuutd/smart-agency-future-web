
import React from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 max-w-screen-2xl items-center">
      <div className="mr-4 flex">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <img src="/lovable-uploads/06410a89-0898-45f8-8ce8-ece7aa12652d.png" alt="Adya Agency Logo" className="h-8 w-8" />
          <span className="font-bold sm:inline-block">Adya Agency</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
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
