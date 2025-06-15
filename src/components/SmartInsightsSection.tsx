
import React from "react";
import { Button } from "@/components/ui/button";

const SmartInsightsSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container max-w-4xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative max-w-sm">
            <img 
              src="/lovable-uploads/34168278-2010-4e8b-83e4-59381dd404b0.png" 
              alt="Smart Financial Insights"
              className="w-full h-auto rounded-lg shadow-2xl border-2 border-orange-300 shadow-orange-500/50"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 154, 0, 0.4))',
                boxShadow: '0 0 30px rgba(255, 154, 0, 0.3), 0 0 60px rgba(255, 154, 0, 0.1)'
              }}
            />
          </div>
        </div>
        
        <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Smart Financial Insights
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Leverage AI to analyze your revenue, costs, and profits, helping you make smarter decisions to reinvest and expand your business.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SmartInsightsSection;
