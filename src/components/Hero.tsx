
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative container flex flex-col items-center pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
      {/* YouTube Background Video */}
      <div className="pointer-events-none absolute inset-0 w-full h-full -z-10">
        <iframe
          title="Hero Background Video"
          width="100%"
          height="100%"
          className="w-full h-full object-cover opacity-30 transition-all duration-700 hover:opacity-35"
          src="https://www.youtube.com/embed/8VYCJTf0_W0?autoplay=1&mute=1&controls=0&loop=1&playlist=8VYCJTf0_W0&modestbranding=1&showinfo=0&rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Fallback background image - always present */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-700 hover:opacity-25 hover:scale-105" 
        style={{
          backgroundImage: "url('/lovable-uploads/85cfaad9-50c2-48e0-83b7-afdbe2e1cde8.png')"
        }} 
      />
      
      {/* Optional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 rounded-lg" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-500 hover:scale-105 hover:text-orange-600">
          Supercharge Your Business with <span className="text-orange-500 hover:text-orange-600 transition-colors duration-300">AI Automations</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground transition-all duration-300 hover:scale-102 hover:text-gray-700">
          We build custom AI solutions that streamline your operations, enhance customer engagement, and drive growth. Let AI handle the work, so you can focus on what matters most.
        </p>
        
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25">Get Started</Button>
          <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-orange-50 hover:border-orange-300">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
