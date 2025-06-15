
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
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          We make building your business's online reputation easier than ever.
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Our automated Google review tools ensure you stand out from the competition by turning happy customers into loyal brand advocates.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {products.map((product, index) => {
          const IconComponent = product.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <IconComponent className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProductsSection;
