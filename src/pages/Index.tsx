import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ConversionSection from "@/components/ConversionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <ConversionSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
