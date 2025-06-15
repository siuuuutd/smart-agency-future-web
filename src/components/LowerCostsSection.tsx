
import React from "react";
import { Button } from "@/components/ui/button";

const LowerCostsSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-xl hover:scale-102">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1 group">
            <div className="relative transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
              <img 
                src="/lovable-uploads/dd54caec-e151-40e0-b533-333cd0f273ec.png" 
                alt="Lower Costs"
                className="max-w-full h-auto rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/20"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-500 hover:scale-105 hover:text-orange-600">
              Lower Costs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-700">
              Let the AI do the work for you, no matter how difficult the tasks are, our AI employees work 24/7, allowing you to reinvest and take profits instead of paying more employees.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25">
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LowerCostsSection;
