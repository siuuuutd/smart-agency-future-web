
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import EnhancedTrustSection from "@/components/EnhancedTrustSection";
import LowerCostsSection from "@/components/LowerCostsSection";
import SaveHoursSection from "@/components/SaveHoursSection";
import QuickRepliesSection from "@/components/QuickRepliesSection";
import AppointmentSchedulingSection from "@/components/AppointmentSchedulingSection";
import PersonalizedEngagementSection from "@/components/PersonalizedEngagementSection";
import SmartInsightsSection from "@/components/SmartInsightsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen w-full font-montserrat">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <ProductsSection />
        <EnhancedTrustSection />
        <LowerCostsSection />
        <SaveHoursSection />
        <QuickRepliesSection />
        <AppointmentSchedulingSection />
        <PersonalizedEngagementSection />
        <SmartInsightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
