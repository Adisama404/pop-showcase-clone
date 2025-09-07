import { Button } from "@/components/ui/button";
import { Monitor, Cpu, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "Workflow",
      description: "Pop!_OS is designed for fast navigation, easy workspace organization, and fluid, convenient workflow. Your operating system should encourage discovery, not obstruct it.",
      link: "Learn More",
      url: "https://system76.com/pop/workflow/"
    },
    {
      icon: Cpu,
      title: "Compatibility", 
      description: "Develop software out of the box with a vast array of libraries and tools at your disposal. Pop!_OS uses APT and Flatpak package management, meaning it's easy to install, remove, and update all software on the OS.",
      link: "Learn More",
      url: "https://system76.com/pop/compatibility"
    },
    {
      icon: Shield,
      title: "Keep Your Computer Secure",
      description: "Built with security at its core. Full-disk encryption comes standard, keeping your data safe from unauthorized access. You're in control of system updates, installing them on your schedule to minimize disruptions.",
      link: "Learn More",
      url: "https://system76.com/pop/security"
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Get comfy with an extensive, easy-to-find list of preferences. Set dock orientation, window tiling, Super navigation, keyboard layout and shortcuts, privacy controls, and more. Your computer, your tool, your way. YOURS.",
      link: "",
      url: ""
    }
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-pop-teal text-lg font-semibold mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            WHY POP!<span className="text-pop-orange">_</span>OS?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-cosmic rounded-2xl flex items-center justify-center shadow-space group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-12 h-12 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {feature.description}
              </p>
              
              {feature.link && feature.url && (
                <a href={feature.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="text-pop-teal hover:text-pop-orange font-semibold">
                    {feature.link}
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;