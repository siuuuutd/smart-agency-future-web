
import React from "react";
import { Button } from "@/components/ui/button";

const QuickRepliesSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            AI-Powered Quick Replies
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Engage customers instantly with intelligent, automated responses. Our AI understands context and provides relevant answers, 24/7.
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
              src="/lovable-uploads/9b78615e-3c90-4afd-aeb4-dc7c6290cb1d.png" 
              alt="AI-Powered Quick Replies"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QuickRepliesSection;
