import React, { useEffect } from "react";
import { Mail, Instagram } from "lucide-react";
import Footer from "@/components/Footer";

// Custom header for Contact page with proper navigation
const ContactHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
      isScrolled ? 'w-auto top-2' : 'w-full max-w-4xl top-4'
    }`}>
      <div className={`relative backdrop-blur-md border border-gray-200 shadow-lg transition-all duration-500 ease-out overflow-hidden ${
        isScrolled 
          ? 'bg-white rounded-full px-6 py-2' 
          : 'bg-white rounded-full px-8 py-4'
      }`}>
        <div className={`relative flex items-center transition-all duration-500 ease-out ${
          isScrolled ? 'space-x-8' : 'justify-between'
        }`}>
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/2b49c033-8f68-45a0-80de-d43df6d6d945.png" 
              alt="Adya Agency Logo" 
              className={`transition-all duration-500 ease-out ${isScrolled ? 'h-8' : 'h-10'}`} 
            />
          </a>
          <nav className={`flex items-center gap-6 transition-all duration-500 ease-out ${
            isScrolled ? 'text-sm' : 'text-base'
          }`}>
            <a
              href="/#about"
              className="transition-all duration-300 ease-out hover:text-orange-500 text-gray-700 font-medium hover:scale-105"
            >
              About
            </a>
            <a
              href="/#features"
              className="transition-all duration-300 ease-out hover:text-orange-500 text-gray-700 font-medium hover:scale-105"
            >
              Features
            </a>
            <a
              href="/contact"
              className="transition-all duration-300 ease-out hover:text-orange-500 text-gray-700 font-medium hover:scale-105"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Contact = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="bg-background min-h-screen w-full font-montserrat">
      <ContactHeader />
      <main className="pt-[180px] pb-16">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-orange-500 mb-8">Contact Us</h1>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have questions or need assistance? Whether you're ready to get started or just want to learn more, our team is here to help. Reach out to us, and we'll get back to you as soon as possible!
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:veer@adyaagency.com" className="flex items-center space-x-3 text-lg text-orange-500 hover:text-orange-600 transition-colors">
                    <Mail size={24} className="text-orange-500" />
                    <span>veer@adyaagency.com</span>
                  </a>
                  
                  <a href="https://www.instagram.com/adya.agency/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg text-orange-500 hover:text-orange-600 transition-colors">
                    <Instagram size={24} className="text-orange-500" />
                    <span className="font-normal">adya.agency</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Calendly Booking Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-orange-500 mb-6">Schedule a Call</h2>
              <div className="calendly-inline-widget" data-url="https://calendly.com/veerrhk/ai-service-meeting" style={{minWidth: '320px', height: '700px'}}></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
