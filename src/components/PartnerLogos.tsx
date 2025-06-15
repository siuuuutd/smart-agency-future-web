
import React from "react";
import { Instagram } from "lucide-react"; // Allowed icon

const PartnerLogos = () => (
  <section className="w-full max-w-5xl mx-auto flex flex-col items-center py-10 mb-12">
    <div className="flex flex-wrap justify-center gap-16 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50 via-white to-white py-7 rounded-2xl">
      {/* Slack (SVG) */}
      <div className="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" alt="Slack Logo" className="w-16 h-16 object-contain mr-3" />
        <span className="font-bold text-4xl text-gray-900">slack</span>
      </div>
      
      {/* Instagram */}
      <div className="flex items-center">
        <Instagram color="#222" size={54} className="mr-2" />
        <span className="font-instagram font-normal text-4xl tracking-wide">Instagram</span>
      </div>

      {/* Google (SVG) */}
      <div className="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="w-20 h-12 object-contain mr-2" />
        <span className="font-[Product Sans] font-bold text-4xl text-gray-900">Google</span>
      </div>
    </div>
  </section>
);

export default PartnerLogos;
