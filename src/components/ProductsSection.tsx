
import React from "react";
import { MessageSquare, Star, Headphones, Monitor } from "lucide-react";

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
    icon: Monitor,
    title: "Custom Apps",
    description: "Professional app made for your business to increase value for customers."
  }
];

const ProductsSection = () => (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          We make building your business's online reputation easier than ever.
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Our automated Google review tools ensure you stand out from the competition by turning happy customers into loyal brand advocates.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        {products.map((product, index) => {
          const IconComponent = product.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-sm h-full flex flex-col"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <IconComponent className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center flex-grow">
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
