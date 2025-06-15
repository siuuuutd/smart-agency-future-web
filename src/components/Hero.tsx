
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        className?: string;
      };
    }
  }
}

const Hero = () => {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative container flex flex-col items-center py-24 md:py-32 overflow-hidden">
      {/* Spline 3D Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer 
          url="https://prod.spline.design/ODO9bGzTEVP8Z8AR/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Content overlay */}
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
