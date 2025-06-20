
import React from "react";
import { Button } from "@/components/ui/button";

const EnhancedTrustSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-xl hover:scale-102">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-500 hover:scale-105 hover:text-orange-600">
              Enhanced Trust
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-700">
              Our automations allow you to be present for customers all the time allowing you to build trust and reliability through our AI Chatbots, Automated Google Reviews and AI Callers.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25">
              Start Now
            </Button>
            
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-4 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-orange-600">Rank #1 on Google Maps</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-4 border shadow-sm flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:scale-102 hover:-translate-y-1 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">Your Business</h4>
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold">5.0</span>
                        <div className="flex text-yellow-400 transition-all duration-300 group-hover:scale-110">
                          {"★★★★★".split("").map((star, i) => (
                            <span key={i}>{star}</span>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">225 Reviews</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-4 border shadow-sm flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:scale-102 hover:-translate-y-1 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">Your Competitor</h4>
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold">4.0</span>
                        <div className="flex text-yellow-400 transition-all duration-300 group-hover:scale-110">
                          {"★★★★☆".split("").map((star, i) => (
                            <span key={i}>{star}</span>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">112 Reviews</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-4 border shadow-sm flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:scale-102 hover:-translate-y-1 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">Your Competitor</h4>
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold">4.0</span>
                        <div className="flex text-yellow-400 transition-all duration-300 group-hover:scale-110">
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
          
          <div className="flex justify-center group">
            <div className="relative transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
              <img 
                src="/lovable-uploads/05b245d2-4728-402e-84c0-f1a25354930e.png" 
                alt="Enhanced Trust"
                className="max-w-full h-auto rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EnhancedTrustSection;
