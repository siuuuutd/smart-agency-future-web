
import React from "react";
import { Button } from "@/components/ui/button";

const SaveHoursSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Save Hours
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Save time with automation while focusing on what you do best – running your business. Our systems run in the background with out any set backs. So you never have to worry about handling issues.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
            Start Now
          </Button>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/f83796f5-ba79-4cea-8d6b-f845dd35bfa7.png" 
              alt="Save Hours"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SaveHoursSection;
