
import React from "react";

const StatisticsSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container max-w-6xl mx-auto px-8">
      <div className="text-center mb-16">
        <p className="text-orange-500 font-semibold text-lg mb-4">Statistics</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why AI Systems Matter – The Numbers Speak for Themselves
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-white p-8 rounded-2xl text-left">
          <div className="text-orange-500 text-4xl font-bold mb-4">92%</div>
          <p className="text-gray-600 text-lg">
            Of consumers read online reviews before choosing a local business.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl text-left">
          <div className="text-gray-600 text-lg mb-4">
            AI voice assistants can reduce call handling time by up to
          </div>
          <div className="text-orange-500 text-4xl font-bold">40%</div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl text-left">
          <div className="text-orange-500 text-4xl font-bold mb-4">75%</div>
          <p className="text-gray-600 text-lg">
            of consumers admit to judging a company's credibility based on its website design
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl text-left">
          <div className="text-gray-600 text-lg mb-4">
            Having a branded app increases customer loyalty by
          </div>
          <div className="text-orange-500 text-4xl font-bold mb-4">60%</div>
          <div className="text-orange-500 text-4xl font-bold mb-4">93%</div>
          <p className="text-gray-600 text-lg">
            of consumers say online reviews impact their purchasing decisions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StatisticsSection;
