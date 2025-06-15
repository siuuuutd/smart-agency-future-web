
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an AI Chatbot?",
    answer: "An AI Chatbot automatically handles real-time customer inquiries, lets users book appointments, and manages information on your behalf.",
  },
  {
    question: "What are Automated Google Reviews?",
    answer: "Automated Google Reviews means sending personalized review invites to your customers after each transaction via text or email.",
  },
  {
    question: "What is an AI Caller?",
    answer: "AI Caller can answer phone calls with a real human voice, interact with your customers, and carry out automated tasks.",
  },
  {
    question: "How long does it take for the website or app?",
    answer: "It depends on your requirements, but we typically deliver initial versions within days and full solutions within a few weeks.",
  },
  {
    question: "Are there any contracts or commitments?",
    answer: "No contracts or long-term commitments required! We operate on flexible, transparent terms.",
  },
];

const FAQSection = () => (
  <section className="max-w-5xl mx-auto pt-20 pb-24" id="faq">
    <span className="bg-orange-100 rounded-full px-4 py-1 text-orange-500 font-medium text-base mb-2 inline-block">
      FAQ
    </span>
    <h2 className="text-4xl font-bold mb-3">See Our Frequently Asked Questions</h2>
    <p className="text-lg text-gray-500 mb-8 max-w-2xl">
      We know you might have questions—so we’ve answered the most important ones right here. Learn how our automated systems help you improve your reputation and grow your business with ease.
    </p>
    <Accordion type="single" collapsible>
      {faqs.map((f, idx) => (
        <AccordionItem value={"item-" + idx} key={f.question}>
          <AccordionTrigger className="text-xl">{f.question}</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-700">{f.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    <div className="w-full flex justify-center mt-10">
      <a
        href="#contact"
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 py-3 font-semibold text-lg transition-all"
      >
        Start Now
      </a>
    </div>
  </section>
);

export default FAQSection;
