
import React from "react";

const StatisticsSection = () => (
  <section className="py-16 md:py-24 relative overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-700 hover:opacity-25 hover:scale-105" 
      style={{
        backgroundImage: "url('/lovable-uploads/e82fc106-2728-4976-bc31-7b0550878cce.png')"
      }} 
    />
    
    {/* Optional gradient overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />
    
    <div className="container max-w-6xl mx-auto px-8 relative z-10">
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-xl">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg mb-4 transition-all duration-300 hover:scale-110">Statistics</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-500 hover:scale-105">
            Why AI Systems Matter – The Numbers Speak for Themselves
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* First statistic - large box */}
          <div className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-3xl text-left shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 group cursor-pointer">
            <div className="text-orange-500 text-5xl font-bold mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-600">92%</div>
            <p className="text-gray-600 text-lg transition-colors duration-300 group-hover:text-gray-700">
              Of consumers read online reviews before choosing a local business.
            </p>
          </div>
          
          {/* Second statistic - medium box, center aligned */}
          <div className="md:col-span-1 lg:col-span-2 bg-white p-8 rounded-3xl text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 group cursor-pointer">
            <p className="text-gray-600 text-base mb-4 transition-colors duration-300 group-hover:text-gray-700">
              AI voice assistants can reduce call handling time by up to
            </p>
            <div className="text-orange-500 text-5xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:text-orange-600">40%</div>
          </div>
          
          {/* Third statistic - small box, right aligned */}
          <div className="md:col-span-1 lg:col-span-1 bg-white p-6 rounded-3xl text-right shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 group cursor-pointer">
            <div className="text-orange-500 text-4xl font-bold mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-600">75%</div>
            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
              of consumers admit to judging a company's credibility based on its website design
            </p>
          </div>
          
          {/* Fourth statistic - medium box */}
          <div className="md:col-span-1 lg:col-span-1 bg-white p-6 rounded-3xl text-left shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 group cursor-pointer">
            <p className="text-gray-600 text-sm mb-3 transition-colors duration-300 group-hover:text-gray-700">
              Having a branded app increases customer loyalty by
            </p>
            <div className="text-orange-500 text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-600">60%</div>
          </div>
          
          {/* Fifth statistic - large box, center aligned */}
          <div className="md:col-span-2 lg:col-span-2 bg-white p-8 rounded-3xl text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 group cursor-pointer">
            <div className="text-orange-500 text-5xl font-bold mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-600">93%</div>
            <p className="text-gray-600 text-lg transition-colors duration-300 group-hover:text-gray-700">
              of consumers say online reviews impact their purchasing decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatisticsSection;
