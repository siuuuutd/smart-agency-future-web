
import React from "react";
import { Button } from "@/components/ui/button";

const TrialSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="container max-w-4xl mx-auto px-8">
      <div className="bg-orange-500 rounded-3xl p-8 md:p-12 text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started on Trial Today!
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
            You deserve to save hours, money and efforts operating your business. With our automated system solutions, you can effortlessly collect more information, attract new customers, and stay ahead of the competition.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg">
            Start Now
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default TrialSection;
