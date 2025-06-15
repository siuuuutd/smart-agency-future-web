
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ThreeSteps from "@/components/ThreeSteps";
import StatisticsSection from "@/components/StatisticsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-[#fafbfc] min-h-screen w-full">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <PartnerLogos />
        <FeaturesSection />
        <BenefitsSection />
        <ThreeSteps />
        <StatisticsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
