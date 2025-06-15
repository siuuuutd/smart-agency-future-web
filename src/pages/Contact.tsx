
import React from "react";
import { Mail, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return <div className="bg-background min-h-screen w-full font-montserrat">
      <Header />
      <main className="pt-[180px] pb-16">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-orange-500 mb-8">Contact Us</h1>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have questions or need assistance? Whether you're ready to get started or just want to learn more, our team is here to help. Reach out to us, and we'll get back to you as soon as possible!
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:veer@adyaagency.com" className="flex items-center space-x-3 text-lg text-orange-500 hover:text-orange-600 transition-colors">
                    <Mail size={24} className="text-orange-500" />
                    <span>veer@adyaagency.com</span>
                  </a>
                  
                  <a href="https://www.instagram.com/adya.agency/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg text-orange-500 hover:text-orange-600 transition-colors">
                    <Instagram size={24} className="text-orange-500" />
                    <span className="font-normal">adya.agency</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Calendly Booking Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Schedule a Call</h2>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-4">Calendly booking widget will be integrated here</p>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                  <span className="text-gray-400">Calendly Integration Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default Contact;
