
import React from "react";

const steps = [
  {
    step: 1,
    title: "Tell Us Your Requirements",
    description: "Tell us what service that you would like and what features you want it to have.",
  },
  {
    step: 2,
    title: "Implement",
    description: "We build the system you want for you, and you test it out and adjust. Lastly, we help you setup everything and you are set.",
  },
  {
    step: 3,
    title: "Watch Your Business Grow",
    description: "Sit back and watch your system run in the background without you having to do anything.",
  },
];

const ThreeSteps = () => (
  <section className="w-full max-w-7xl mx-auto py-20" id="steps">
    <span className="bg-orange-100 rounded-full px-4 py-1 text-orange-500 font-medium text-base mb-3 inline-block">
      Three Steps
    </span>
    <h2 className="text-4xl font-bold mb-3">Get Started in Three Steps</h2>
    <p className="text-lg text-gray-500 mb-7 max-w-2xl">
      Our simple, three-step process takes the hassle out of implementing AI, so you can focus on running your business while we handle the rest.
    </p>
    <a
      href="#contact"
      className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-7 py-2 font-semibold text-lg mb-9 inline-block transition"
    >
      Start Now
    </a>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
      {steps.map((step) => (
        <div
          key={step.step}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-2"
        >
          <span className="text-orange-500 text-2xl font-bold mb-2">{step.step}.</span>
          <h3 className="font-semibold text-xl mb-1">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ThreeSteps;
