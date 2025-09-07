import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CosmicSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
          POP!<span className="text-pop-orange">_</span>OS IS EVOLVING
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            COSMIC, our budding desktop environment, brings new features, refinements, core 
            apps, stability, security, and performance to Pop!_OS users everywhere.
          </p>
          
          <a href="https://system76.com/cosmic" target="_blank" rel="noopener noreferrer">
            <Button variant="cosmic" size="lg" className="text-lg px-8 py-6 font-bold">
              LEARN MORE ABOUT COSMIC →
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CosmicSection;