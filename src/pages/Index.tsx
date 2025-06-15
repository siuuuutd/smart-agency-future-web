
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen w-full font-montserrat">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
