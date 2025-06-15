
import React from "react";

const BenefitsSection = () => (
  <section className="w-full max-w-7xl mx-auto flex flex-col gap-16 pt-20 pb-24" id="about">
    {/* Enhanced Trust */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[340px]">
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-4xl font-bold mb-2">Enhanced Trust</h2>
        <p className="text-lg text-gray-600 mb-5 max-w-md">
          Our automations allow you to be present for customers all the time allowing you to build trust and reliability through our AI Chatbots, Automated Google Reviews and AI Callers.
        </p>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-7 py-2 font-semibold text-lg transition mb-3"
        >
          Start Now
        </a>
        <div className="flex items-center mt-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-8 h-8 mr-2" />
          <span className="text-xl font-semibold mr-2">Rank #1 on Google Maps</span>
          <span className="text-gray-500">⭐️⭐️⭐️⭐️⭐️</span>
        </div>
      </div>
      {/* Visual */}
      <div className="flex-1 flex justify-center relative min-h-[260px]">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&q=80"
          alt="Smiling Customer"
          className="rounded-xl shadow-lg w-72 h-72 object-cover"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-60 w-[240px] p-4 rounded-2xl bg-white shadow-xl border border-gray-100 text-center animate-fade-in">
          <div className="font-bold text-lg text-green-600 mb-2">Your Business</div>
          <div className="text-sm text-gray-700">225 Reviews · 5.0 Stars</div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-16">
      {/* Lower Costs */}
      <div className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col items-start">
        <h3 className="text-2xl font-bold mb-2">Lower Costs</h3>
        <p className="text-gray-600 mb-5">
          Let the AI do the work for you, no matter how difficult the tasks are. Our AI employees work 24/7, allowing you to reinvest and take profits instead of paying more employees.
        </p>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-7 py-2 font-semibold text-lg transition"
        >
          Start Now
        </a>
      </div>
      {/* Save Hours */}
      <div className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col items-start">
        <h3 className="text-2xl font-bold mb-2">Save Hours</h3>
        <p className="text-gray-600 mb-5">
          Save time with automation while focusing on what you do best – running your business. Our systems run in the background without any setbacks. So you never have to worry about handling issues.
        </p>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-7 py-2 font-semibold text-lg transition"
        >
          Start Now
        </a>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
