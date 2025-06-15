
import React, { useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

// Orange grid tile as base64 PNG (50x50 px, lines in #ff9a00)
const ORANGE_GRID_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO2WPUqDMBBFx45oOjHiQaA6yBSQ9gI5AloDTAM2g6QBo02gnCLmHAoq1nu20x83JuqVFIvnOedEe9cVRVEV5brfb7t3E7DwJZllIhQy0QjQTaDSvQkTGOipZEUHklGvhVKE1UnK5EevMfg7pN5Arwh0Q5MuYoJL7Q6+SRK6wDI9BnPYbFFcjTdAJv+IqOIPH5osfIDPY37u6Quf4wRxlNNta9dBhsO7gCbnMV3mXgZ0xSg5gyIuu4JTaI6qaMKTo6RiaqeKmGILQ6hh1w4kEAlZNKzE/sJpU0kQUegXiHwiJuA/3nJPo7ZyCIDOfMw91KcMBv6zVmUzFt9Fa5xqOJJtIHpVNc5pr8wGGIJRkclU8BSZgIaQh1ckhWQAAAABJRU5ErkJggg==";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  // Animation position state
  const pos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();
  const direction = useRef({ dx: 0, dy: 0 });

  // Move bg slightly in the mouse's direction
  const animate = useCallback(() => {
    // Apply some smoothing (friction)
    pos.current.x += direction.current.dx * 2;
    pos.current.y += direction.current.dy * 2;
    // Add wrap around for seamless effect
    pos.current.x = pos.current.x % 50;
    pos.current.y = pos.current.y % 50;
    if (bgRef.current) {
      bgRef.current.style.backgroundPosition = `${pos.current.x}px ${pos.current.y}px`;
    }
    animationFrame.current = requestAnimationFrame(animate);
  }, []);

  // On mouse move, calculate direction vector
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!bgRef.current) return;
    const rect = bgRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    // Normalize direction (between -1 and 1)
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    direction.current.dx = dx / len;
    direction.current.dy = dy / len;
  }, []);

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [animate]);

  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#fafafa]"
      style={{ background: "#fafafa" }}
      onMouseMove={onMouseMove}
    >
      {/* Animated grid background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url('${ORANGE_GRID_DATA_URL}')`,
          backgroundPosition: "0px 0px",
          backgroundSize: "50px 50px",
          transition: "background-position 0.1s linear",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
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
