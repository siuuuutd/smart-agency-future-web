
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AppointmentSchedulingSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-6xl mx-auto px-8">
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-xl hover:scale-102">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-500 hover:scale-105 hover:text-orange-600">
              Automated Appointment Scheduling
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-700">
              Let our AI chatbots handle your calendar. Clients can book, reschedule, or cancel appointments effortlessly through conversation.
            </p>
            <div className="flex justify-start">
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25">
                  Start Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center group">
            <div className="relative max-w-sm transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
              <img 
                src="/lovable-uploads/56f2eb5d-c6c3-4d56-891e-a330f28320a9.png" 
                alt="Automated Appointment Scheduling"
                className="w-full h-auto rounded-3xl shadow-2xl border-2 border-orange-300 shadow-orange-500/30 transition-all duration-500 group-hover:shadow-orange-500/40 group-hover:border-orange-400"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(255, 154, 0, 0.25))',
                  boxShadow: '0 0 20px rgba(255, 154, 0, 0.2), 0 0 40px rgba(255, 154, 0, 0.05)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppointmentSchedulingSection;
