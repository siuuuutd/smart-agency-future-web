
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="container flex flex-col items-center py-24 md:py-32">
    <div className="flex flex-col items-center text-center max-w-3xl">
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

export default Hero;
