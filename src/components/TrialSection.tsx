
import React from "react";
import { Button } from "@/components/ui/button";

const TrialSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="container max-w-4xl mx-auto px-8">
      <div className="bg-orange-500 rounded-3xl p-8 md:p-12 text-white transition-all duration-500 hover:shadow-2xl hover:scale-102 hover:bg-orange-600">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 transition-all duration-300 hover:scale-105">
            Get Started on Trial Today!
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95 transition-all duration-300 hover:opacity-100">
            You deserve to save hours, money and efforts operating your business. With our automated system solutions, you can effortlessly collect more information, attract new customers, and stay ahead of the competition.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg">
            Start Now
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default TrialSection;
