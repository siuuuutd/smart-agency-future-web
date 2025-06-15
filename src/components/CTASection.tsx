
import React from "react";

const CTASection = () => (
  <section className="max-w-6xl mx-auto w-full px-4">
    <div className="bg-orange-500 rounded-3xl shadow-lg px-10 py-10 mt-14 text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Get Started on Trial Today!</h2>
      <p className="text-lg mb-6 max-w-2xl text-center">
        You deserve to save hours, money and efforts operating your business. With our automated system solutions, you can effortlessly collect more information, attract new customers, and stay ahead of the competition.
      </p>
      <a
        href="#contact"
        className="bg-white text-orange-500 font-semibold rounded-lg px-8 py-3 text-lg shadow hover:bg-orange-100 transition"
      >
        Start Now
      </a>
    </div>
  </section>
);

export default CTASection;
