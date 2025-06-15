
import React from "react";
import { Button } from "@/components/ui/button";

const GetStartedSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-6xl mx-auto px-8">
      <div className="text-center mb-16">
        <p className="text-orange-500 font-semibold text-lg mb-4">Three Steps</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Get Started in Three Steps
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
          Our simple, three-step process takes the hassle out of implementing AI, so you can focus on running your business while we handle the rest.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
          Start Now
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="bg-gray-50 p-8 rounded-2xl text-left">
          <div className="text-orange-500 text-xl font-bold mb-4">1.</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Tell Us Your Requirements
          </h3>
          <p className="text-gray-600">
            Tell us what service that you would like and what features you want it to have.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl text-left">
          <div className="text-orange-500 text-xl font-bold mb-4">2.</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Implement
          </h3>
          <p className="text-gray-600">
            We build the system you want for you, and you test it out and adjust. Lastly, we help you setup everything and you are set.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl text-left">
          <div className="text-orange-500 text-xl font-bold mb-4">3.</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Watch Your Business Grow
          </h3>
          <p className="text-gray-600">
            Sit back and watch your system run in the back without you having to do anything.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GetStartedSection;
