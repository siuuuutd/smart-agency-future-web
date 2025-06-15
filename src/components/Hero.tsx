
import React from "react";

const Hero = () => (
  <section className="w-full max-w-6xl mx-auto flex flex-col items-center pt-16 pb-16" id="home">
    <span className="bg-orange-100 rounded-full px-4 py-1 mb-7 text-orange-500 font-medium text-base shadow">
      Welcome to Adya Agency
    </span>
    <h1 className="text-[2.8rem] md:text-[4rem] font-bold text-gray-900 leading-tight text-center mb-4 animate-fade-in">
      Optimize Systems, Grow Faster <br />With Less Effort
    </h1>
    <p className="text-lg text-gray-500 text-center max-w-xl mb-8">
      Effortlessly grow your business with AI employees that do the work for you and ensure every customer is satisfied
    </p>
    <a
      href="#contact"
      className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 py-3 font-semibold text-lg transition-all shadow transform hover:scale-105 animate-fade-in"
    >
      Start Now
    </a>
  </section>
);

export default Hero;
