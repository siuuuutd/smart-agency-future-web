
import React, { useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();

  // Mouse move handler
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!bgRef.current) return;
    const rect = bgRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    
    // Move background based on mouse position (additive to the base animation)
    pos.current.x = dx * 15;
    pos.current.y = dy * 15;
  }, []);

  // Reset mouse position when mouse leaves
  const onMouseLeave = useCallback(() => {
    pos.current.x = 0;
    pos.current.y = 0;
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-24"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        backgroundColor: '#fafafa',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill='none' stroke='%23ff9a00' stroke-width='1' opacity='0.3'%3E%3Cpath d='M0 0h50v50H0z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '50px 50px',
        animation: 'gridMove 8s linear infinite',
        transform: `translate(${pos.current.x}px, ${pos.current.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-500 hover:scale-105 hover:text-orange-600">
          Supercharge Your Business with{" "}
          <span className="text-orange-500 hover:text-orange-600 transition-colors duration-300">
            AI Automations
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground transition-all duration-300 hover:scale-102 hover:text-gray-700">
          We build custom AI solutions that streamline your operations, enhance customer engagement, and drive growth. Let AI handle the work, so you can focus on what matters most.
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-orange-50 hover:border-orange-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
