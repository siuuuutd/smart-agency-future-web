
import React from "react";
import { Button } from "@/components/ui/button";

const QuickRepliesSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container max-w-6xl mx-auto px-8">
      <div className="bg-white rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center group">
            <div className="relative max-w-sm">
              <img 
                src="/lovable-uploads/9b78615e-3c90-4afd-aeb4-dc7c6290cb1d.png" 
                alt="AI-Powered Quick Replies"
                className="w-full h-auto rounded-3xl shadow-2xl border-2 border-orange-300 shadow-orange-500/30 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-orange-500/40"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(255, 154, 0, 0.25))',
                  boxShadow: '0 0 20px rgba(255, 154, 0, 0.2), 0 0 40px rgba(255, 154, 0, 0.05)'
                }}
              />
            </div>
          </div>
          
          <div className="space-y-6 text-left lg:pl-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-500 hover:scale-105 hover:text-orange-600">
              AI-Powered Quick Replies
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-700">
              Engage customers instantly with intelligent, automated responses. Our AI understands context and provides relevant answers, 24/7.
            </p>
            <div className="flex justify-start">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25">
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QuickRepliesSection;
