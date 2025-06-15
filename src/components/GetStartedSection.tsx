
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GetStartedSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container max-w-6xl mx-auto px-8">
      <div className="bg-white rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-xl">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg mb-4 transition-all duration-300 hover:scale-110">Three Steps</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-500 hover:scale-105">
            Get Started in Three Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 transition-all duration-300 hover:text-gray-700">
            Our simple, three-step process takes the hassle out of implementing AI, so you can focus on running your business while we handle the rest.
          </p>
          <Link to="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25">
              Start Now
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-gray-50 p-8 rounded-3xl text-left transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
            <div className="text-orange-500 text-xl font-bold mb-4 transition-all duration-300 group-hover:scale-125 group-hover:text-orange-600">1.</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-600">
              Tell Us Your Requirements
            </h3>
            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              Tell us what service that you would like and what features you want it to have.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl text-left transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
            <div className="text-orange-500 text-xl font-bold mb-4 transition-all duration-300 group-hover:scale-125 group-hover:text-orange-600">2.</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-600">
              Implement
            </h3>
            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              We build the system you want for you, and you test it out and adjust. Lastly, we help you setup everything and you are set.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl text-left transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
            <div className="text-orange-500 text-xl font-bold mb-4 transition-all duration-300 group-hover:scale-125 group-hover:text-orange-600">3.</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-600">
              Watch Your Business Grow
            </h3>
            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              Sit back and watch your system run in the back without you having to do anything.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GetStartedSection;
