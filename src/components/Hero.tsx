
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative container flex flex-col items-center py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/4d34cc35-1aa1-4fd0-8abf-82a52a710ee4.png')",
        }}
      />
      
      {/* Optional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Supercharge Your Business with <span className="text-orange-500">AI Automations</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We build custom AI solutions that streamline your operations, enhance customer engagement, and drive growth. Let AI handle the work, so you can focus on what matters most.
        </p>
        
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
