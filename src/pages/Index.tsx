import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CosmicSection from "../components/CosmicSection";
import MeetPopSection from "../components/MeetPopSection";
import FeaturesSection from "../components/FeaturesSection";
import OtherFeaturesSection from "../components/OtherFeaturesSection";
import HardwareSection from "../components/HardwareSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CosmicSection />
        <MeetPopSection />
        <FeaturesSection />
        <OtherFeaturesSection />
        <HardwareSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
