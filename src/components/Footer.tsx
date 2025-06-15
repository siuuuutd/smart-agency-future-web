
import React from "react";
import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-black border-t mt-16">
    <div className="container max-w-6xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/06410a89-0898-45f8-8ce8-ece7aa12652d.png" alt="Adya Agency Logo" className="h-6 w-6" />
          <span className="font-semibold text-orange-500 text-lg">Adya Agency</span>
        </div>
        
        {/* Menu Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Menu</h3>
          <div className="space-y-3">
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        {/* Contact Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <div className="space-y-3">
            <a 
              href="mailto:veer@adyaagency.com" 
              className="block text-gray-300 hover:text-white transition-colors"
            >
              veer@adyaagency.com
            </a>
            <a 
              href="https://www.instagram.com/adya.agency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-400">
          © Copyright {new Date().getFullYear()}. Adya Agency. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
