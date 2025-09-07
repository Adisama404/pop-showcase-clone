import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import spaceHero from "@/assets/space-hero.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-space overflow-hidden"
      style={{
        backgroundImage: `url(${spaceHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-space-dark/70"></div>
      
      {/* Floating elements animation */}
      <div className="absolute inset-0">
        {/* Animated stars/particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pop-yellow rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pop-teal rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pop-orange rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to Pop!<span className="text-pop-orange">_</span>OS
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Unleash your potential on Pop!_OS: an operating system for STEM and creative professionals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/pop-os">
            <Button variant="download" size="lg" className="text-lg px-8 py-6">
              DOWNLOAD
            </Button>
          </Link>
          <a href="https://github.com/sponsors/pop-os" target="_blank" rel="noopener noreferrer">
            <Button variant="donate" size="lg" className="text-lg px-8 py-6">
              DONATE TO POP
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;