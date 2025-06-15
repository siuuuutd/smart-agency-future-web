
import React from "react";
import { Button } from "@/components/ui/button";

const PersonalizedEngagementSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Personalized Customer Engagement
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Build stronger relationships with personalized, automated follow-ups and interactions that make every customer feel valued.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
              Start Now
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative max-w-md">
            <img 
              src="/lovable-uploads/220136c9-3ef3-47b9-886e-6dfa98f3c42a.png" 
              alt="Personalized Customer Engagement"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PersonalizedEngagementSection;
