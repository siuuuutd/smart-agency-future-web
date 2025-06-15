
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// Import Vanta and Three.js
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min.js";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = DOTS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: "#ff9a00",
        color2: "#ff9a00",
        backgroundColor: 0xfafafa,
        size: 7.1,
        spacing: 42.0,
        showLines: false,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section
      className="relative container flex flex-col items-center pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden"
      ref={vantaRef}
      style={{ background: "#fafafa" }}
    >
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
