
import React from "react";
import { MessageSquare, Star, Headphones, Monitor, Smartphone, Zap } from "lucide-react";

const products = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Automatically handle customer enquiries real time with the ability to book appointments and store information."
  },
  {
    icon: Star,
    title: "Automated Google Reviews",
    description: "Send personalised review invites via text or email to your customers after every transaction."
  },
  {
    icon: Headphones,
    title: "AI Callers",
    description: "No more manually responding to calls, with a real human voice, the AI caller has the ability to handle customer interactions and use systems."
  },
  {
    icon: Monitor,
    title: "Custom Websites",
    description: "Direct professional websites built for your business based on your needs."
  },
  {
    icon: Smartphone,
    title: "Custom Apps",
    description: "Professional app made for your business to increase value for customers."
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Intelligent automated systems that handle complex tasks and streamline your business processes effortlessly."
  }
];

const ProductsSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with Intelligent AI Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From automated customer interactions to custom applications, our AI-powered tools streamline your operations and accelerate growth while you focus on scaling your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
