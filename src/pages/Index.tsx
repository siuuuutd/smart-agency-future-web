
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import QuickRepliesSection from "@/components/QuickRepliesSection";
import AppointmentSchedulingSection from "@/components/AppointmentSchedulingSection";
import PersonalizedEngagementSection from "@/components/PersonalizedEngagementSection";
import SmartInsightsSection from "@/components/SmartInsightsSection";
import GetStartedSection from "@/components/GetStartedSection";
import StatisticsSection from "@/components/StatisticsSection";
import TrialSection from "@/components/TrialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen w-full font-montserrat">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <ProductsSection />
        
        {/* Features Designed for Growth Title Section */}
        <section className="py-16 md:py-20 bg-white w-full">
          <div className="container max-w-6xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-500 hover:scale-105 hover:text-orange-600">
              Features Designed for Growth
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-300 hover:text-gray-700">
              Discover powerful AI-driven solutions that streamline operations, enhance customer engagement, and accelerate your business growth.
            </p>
          </div>
        </section>

        <QuickRepliesSection />
        <AppointmentSchedulingSection />
        <PersonalizedEngagementSection />
        <SmartInsightsSection />
        <GetStartedSection />
        <StatisticsSection />
        <TrialSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
