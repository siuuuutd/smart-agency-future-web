
import React from "react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is an AI Chatbot?",
      answer: "Customers often get confused with businesses products or services, to ensure they understand the value you provide, an AI Chatbot can help answer their doubts and help sell your products or services better. The AI Chatbot ensures that you don't have to keep texting back and forth answering repetitive questions."
    },
    {
      question: "What are Automated Google Reviews?",
      answer: "Google reviews are important part of your business. They improve your online reputation, increase visibility in search results, build trust with potential customers, and help drive more traffic and sales to your business. This is why it is important you ask every customer to leave a review, but to not do this awkwardly and one by one, our system requests for reviews through emails or sms."
    },
    {
      question: "What is an AI Caller?",
      answer: "Many times business hotlines may be busy, or often owners and employees may be too busy to answer calls repeatedly. With our AI Caller, it is a real time receptionist for your business, but without being physically present. With a human voice & emotions it is able to handle customer conversations and help your business run systems in the back for appointments, or anything else."
    },
    {
      question: "How long does it take for the website or app?",
      answer: "For websites, we ensure that it get used by you as soon as possible, within 24-hours your website can be deployed. While for Apps, based on your requirements and needs, the time taken can vary from few days to 2 weeks."
    },
    {
      question: "Are there any contracts or commitments?",
      answer: "Our systems can be subscription-based or you could choose to purchase it one time & pay for monthly maintenances."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg mb-4 transition-all duration-300 hover:scale-110">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-500 hover:scale-105">
            See Our Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto transition-all duration-300 hover:text-gray-700">
            We know you might have questions—so we've answered the most important ones right here. Learn how our automated systems helps you improve your reputation and grow your business with ease.
          </p>
        </div>
        
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-102 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                  {faq.question}
                </h3>
                <div className="text-gray-400 group-hover:text-orange-500 transition-all duration-300 group-hover:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Hover answer */}
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 group-hover:scale-102">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25">
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
