
import React from "react";

const features = [
  {
    title: "AI Chatbots",
    description: "Automatically handle customer enquiries real time with the ability to book appointments and store information.",
    icon: (
      <span className="text-orange-400 text-2xl">💬</span>
    ),
  },
  {
    title: "Automated Google Reviews",
    description: "Send personalized review invites via text or email to your customers after every transaction.",
    icon: (
      <span className="text-yellow-400 text-2xl">⭐</span>
    ),
  },
  {
    title: "AI Callers",
    description: "No more manually responding to calls. AI caller has the ability to handle customer interactions and use systems.",
    icon: (
      <span className="text-orange-400 text-2xl">📞</span>
    ),
  },
  {
    title: "Custom Websites",
    description: "Direct professional websites built for your business based on your needs.",
    icon: (
      <span className="text-orange-400 text-2xl">💻</span>
    ),
  },
  {
    title: "Custom Apps",
    description: "Professional app made for your business to increase value for customers.",
    icon: (
      <span className="text-orange-400 text-2xl">📱</span>
    ),
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-16 w-full max-w-7xl mx-auto flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">We make building your business’s online reputation easier than ever.</h2>
    <p className="text-lg text-gray-500 mb-8 text-center max-w-2xl">
      Our automated Google review tools ensure you stand out from the competition by turning happy customers into loyal brand advocates.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-white rounded-2xl shadow hover:shadow-lg border border-gray-100 p-6 flex flex-col items-start transition group"
        >
          <div className="mb-3">{feature.icon}</div>
          <h3 className="font-semibold text-xl mb-1 group-hover:text-orange-500 transition">{feature.title}</h3>
          <p className="text-gray-600 text-base">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
