import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import CosmicSection from "@/components/CosmicSection";
import MeetPopSection from "@/components/MeetPopSection";
import FeaturesSection from "@/components/FeaturesSection";

const PopOS = () => {
  return (
    <PageLayout>
      <HeroSection />
      <CosmicSection />
      <MeetPopSection />
      <FeaturesSection />
      
      {/* Additional Pop!_OS specific content */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Get Started with Pop!_OS
          </h2>
          <div className="flex justify-center gap-6">
            <Button variant="download" size="lg">
              Download Pop!_OS
            </Button>
            <Button variant="outline" size="lg">
              Installation Guide
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PopOS;