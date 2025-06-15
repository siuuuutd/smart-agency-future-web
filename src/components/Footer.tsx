
import React from "react";
import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 border-t mt-16">
    <div className="container max-w-6xl mx-auto px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/06410a89-0898-45f8-8ce8-ece7aa12652d.png" alt="Adya Agency Logo" className="h-6 w-6" />
          <span className="font-semibold text-white">Adya Agency</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="mailto:veer@adyaagency.com" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            veer@adyaagency.com
          </a>
          <a 
            href="https://www.instagram.com/adya.agency/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Adya Agency. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
