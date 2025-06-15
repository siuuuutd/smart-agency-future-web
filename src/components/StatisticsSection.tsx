
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* First statistic - large box */}
        <div className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-2xl text-left shadow-sm">
          <div className="text-orange-500 text-5xl font-bold mb-4">92%</div>
          <p className="text-gray-600 text-lg">
            Of consumers read online reviews before choosing a local business.
          </p>
        </div>
        
        {/* Second statistic - medium box, center aligned */}
        <div className="md:col-span-1 lg:col-span-2 bg-white p-8 rounded-2xl text-center shadow-sm">
          <p className="text-gray-600 text-base mb-4">
            AI voice assistants can reduce call handling time by up to
          </p>
          <div className="text-orange-500 text-5xl font-bold">40%</div>
        </div>
        
        {/* Third statistic - small box, right aligned */}
        <div className="md:col-span-1 lg:col-span-1 bg-white p-6 rounded-2xl text-right shadow-sm">
          <div className="text-orange-500 text-4xl font-bold mb-3">75%</div>
          <p className="text-gray-600 text-sm">
            of consumers admit to judging a company's credibility based on its website design
          </p>
        </div>
        
        {/* Fourth statistic - medium box */}
        <div className="md:col-span-1 lg:col-span-1 bg-white p-6 rounded-2xl text-left shadow-sm">
          <p className="text-gray-600 text-sm mb-3">
            Having a branded app increases customer loyalty by
          </p>
          <div className="text-orange-500 text-4xl font-bold mb-2">60%</div>
        </div>
        
        {/* Fifth statistic - large box, center aligned */}
        <div className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-2xl text-center shadow-sm">
          <div className="text-orange-500 text-5xl font-bold mb-4">93%</div>
          <p className="text-gray-600 text-lg">
            of consumers say online reviews impact their purchasing decisions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StatisticsSection;
