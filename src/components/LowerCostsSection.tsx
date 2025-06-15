
import React from "react";
import { Button } from "@/components/ui/button";

const LowerCostsSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative">
            <img 
              src="/lovable-uploads/dd54caec-e151-40e0-b533-333cd0f273ec.png" 
              alt="Lower Costs"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
        
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Lower Costs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Let the AI do the work for you, no matter how difficult the tasks are, our AI employees work 24/7, allowing you to reinvest and take profits instead of paying more employees.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
            Start Now
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default LowerCostsSection;
