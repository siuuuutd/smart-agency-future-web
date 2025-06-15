
import React from "react";

const Footer = () => (
  <footer className="border-t">
    <div className="container py-8 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/lovable-uploads/06410a89-0898-45f8-8ce8-ece7aa12652d.png" alt="Adya Agency Logo" className="h-6 w-6" />
        <span className="font-semibold">Adya Agency</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Adya Agency. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
