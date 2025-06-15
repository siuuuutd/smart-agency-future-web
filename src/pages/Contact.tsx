
import React from "react";
import { Mail, Instagram, Zap, Bot, Brain, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="bg-background min-h-screen w-full font-montserrat">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  Let's Build the Future
                  <span className="block text-orange-500">Together</span>
                </h1>
                
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ready to transform your business with cutting-edge AI automation? Our intelligent systems are designed to streamline operations, enhance customer engagement, and accelerate growth.
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-orange-500" />
                    <span>Get in Touch</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:veer@adyaagency.com" 
                      className="flex items-center space-x-3 text-lg text-gray-700 hover:text-orange-500 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <Mail size={20} className="text-orange-500" />
                      </div>
                      <span>veer@adyaagency.com</span>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </a>
                    
                    <a 
                      href="https://www.instagram.com/adya.agency/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-lg text-gray-700 hover:text-orange-500 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <Instagram size={20} className="text-orange-500" />
                      </div>
                      <span>adya.agency</span>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                    <Bot className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">AI Chatbots</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                    <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Automation</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                    <Brain className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Smart AI</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Calendly Booking Section */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
              {/* Tech pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-6 gap-4 h-full">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="bg-orange-500 rounded-full w-2 h-2"></div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">Schedule Your AI Consultation</h2>
                </div>
                
                <p className="text-gray-600 mb-8">
                  Book a free 30-minute discovery call to discuss how AI automation can transform your business operations.
                </p>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center border-2 border-dashed border-gray-300">
                  <div className="space-y-4 mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                      <Calendar className="w-8 h-8 text-orange-500" />
                    </div>
                    <p className="text-gray-600 font-medium">Calendly Integration</p>
                  </div>
                  
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-orange-300 rounded-xl bg-orange-50/50">
                    <div className="text-center space-y-2">
                      <Bot className="w-12 h-12 text-orange-400 mx-auto" />
                      <span className="text-orange-500 font-medium">AI-Powered Scheduling</span>
                      <p className="text-sm text-gray-500">Calendly widget will be integrated here</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>30-min consultation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>AI strategy session</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
