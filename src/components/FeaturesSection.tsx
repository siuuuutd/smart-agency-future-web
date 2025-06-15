
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Quick Replies",
    description: "Engage customers instantly with intelligent, automated responses. Our AI understands context and provides relevant answers, 24/7.",
    image: "/lovable-uploads/fcbc5a16-e8b0-41ca-9333-c689fc7fbcba.png",
  },
  {
    title: "Automated Appointment Scheduling",
    description: "Let our AI chatbots handle your calendar. Clients can book, reschedule, or cancel appointments effortlessly through conversation.",
    image: "/lovable-uploads/7f70b1de-ea85-40ec-89dc-97b683950e9e.png",
  },
  {
    title: "Personalized Customer Engagement",
    description: "Build stronger relationships with personalized, automated follow-ups and interactions that make every customer feel valued.",
    image: "/lovable-uploads/278fa030-2146-4ad4-bb2e-2f1d153cf3f8.png",
  },
  {
    title: "Smart Financial Insights",
    description: "Leverage AI to analyze your revenue, costs, and profits, helping you make smarter decisions to reinvest and expand your business.",
    image: "/lovable-uploads/596ba258-ccd7-41b6-8eff-ee0a59f2a492.png",
  },
];

const FeaturesSection = () => (
  <section id="features" className="container py-16 md:py-24">
    <div className="flex flex-col items-center text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features Designed for Growth</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Explore the powerful AI tools we've built to automate tasks and unlock your business's full potential.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature) => (
        <Card key={feature.title} className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-0">
            <div className="bg-muted flex justify-center items-center p-8">
              <img src={feature.image} alt={feature.title} className="rounded-lg max-h-60 object-contain" />
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription className="pt-2">{feature.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
