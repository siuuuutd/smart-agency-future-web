
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import QuickRepliesSection from "@/components/QuickRepliesSection";
import AppointmentSchedulingSection from "@/components/AppointmentSchedulingSection";
import PersonalizedEngagementSection from "@/components/PersonalizedEngagementSection";
import SmartInsightsSection from "@/components/SmartInsightsSection";
import GetStartedSection from "@/components/GetStartedSection";
import StatisticsSection from "@/components/StatisticsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen w-full font-montserrat">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <ProductsSection />
        <QuickRepliesSection />
        <AppointmentSchedulingSection />
        <PersonalizedEngagementSection />
        <SmartInsightsSection />
        <GetStartedSection />
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
