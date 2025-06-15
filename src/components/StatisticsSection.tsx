
import React from "react";

const stats = [
  {
    number: "92%",
    description: "Of consumers read online reviews before choosing a local business.",
  },
  {
    number: "40%",
    description: "AI voice assistants can reduce call handling time by up to",
  },
  {
    number: "75%",
    description: "of consumers admit to judging a company’s credibility based on its website design",
  },
  {
    number: "60%",
    description: "Having a branded app increases customer loyalty by",
  },
  {
    number: "93%",
    description: "of consumers say online reviews impact their purchasing decisions.",
  },
];

const StatisticsSection = () => (
  <section className="bg-gray-50 w-full py-16" id="statistics">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <span className="bg-orange-100 rounded-full px-4 py-1 text-orange-500 font-medium text-base mb-3 inline-block">
        Statistics
      </span>
      <h2 className="text-4xl font-bold text-center mb-9">Why AI Systems Matter – The Numbers Speak for Themselves</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 w-full">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col items-start">
            <span className="text-orange-500 text-3xl font-bold mb-2">{s.number}</span>
            <p className="text-gray-700 font-medium">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatisticsSection;
