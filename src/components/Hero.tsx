
import React from "react";

const Hero = () => (
  <section
    className="relative w-full max-w-6xl mx-auto flex flex-col items-center pt-16 pb-16"
    id="home"
  >
    {/* Background image behind heading text */}
    <div
      className="absolute left-1/2 top-0 -translate-x-1/2 z-0 w-full max-w-4xl h-[260px] md:h-[340px] pointer-events-none"
      style={{
        backgroundImage:
          "url('https://storage.googleapis.com/msgsndr/F99Jg9RT3GvWg19ZkbRr/media/67bb0eaf1cc1bb1268cd3add.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center 20px",
        opacity: 0.4,
        filter: "drop-shadow(0 4px 40px #ff9a00)",
      }}
      aria-hidden
    />
    <span className="relative z-10 bg-orange-100 rounded-full px-4 py-1 mb-7 text-orange-500 font-medium text-base shadow font-montserrat">
      Welcome to Adya Agency
    </span>
    <h1 className="relative z-10 font-montserrat text-[2.7rem] md:text-[4rem] font-bold text-gray-900 leading-tight text-center mb-4 animate-fade-in drop-shadow-xl">
      Optimize Systems, Grow Faster <br />
      With Less Effort
    </h1>
    <p className="relative z-10 text-lg text-gray-500 text-center max-w-xl mb-8 font-montserrat">
      Effortlessly grow your business with AI employees that do the work for you and ensure every customer is satisfied
    </p>
    <a
      href="#contact"
      className="relative z-10 bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 py-3 font-semibold text-lg transition-all shadow transform hover:scale-105 animate-fade-in font-montserrat"
      style={{ boxShadow: "0 4px 24px #ff9a0066" }}
    >
      Start Now
    </a>
  </section>
);

export default Hero;
