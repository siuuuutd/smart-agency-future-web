
import React from "react";
import { Button } from "@/components/ui/button";

const EnhancedTrustSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Enhanced Trust
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our automations allow you to be present for customers all the time allowing you to build trust and reliability through our AI Chatbots, Automated Google Reviews and AI Callers.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
            Start Now
          </Button>
          
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Rank #1 on Google Maps</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Your Business</h4>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold">5.0</span>
                      <div className="flex text-yellow-400">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">225 Reviews</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Your Competitor</h4>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold">4.0</span>
                      <div className="flex text-yellow-400">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">112 Reviews</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Your Competitor</h4>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold">4.0</span>
                      <div className="flex text-yellow-400">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">354 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/05b245d2-4728-402e-84c0-f1a25354930e.png" 
              alt="Enhanced Trust"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EnhancedTrustSection;
