import { Laptop, Monitor, Server, Keyboard } from "lucide-react";

const HardwareSection = () => {
  const hardware = [
    {
      icon: Laptop,
      title: "Laptops",
      description: "High-performance laptops designed to harmonize with their software while tightening security.",
      color: "text-pop-orange"
    },
    {
      icon: Monitor,
      title: "Desktops", 
      description: "Powerful, quiet handcrafted desktops designed for tinkering and engineered for max performance.",
      color: "text-pop-teal"
    },
    {
      icon: Server,
      title: "Workstations",
      description: "Computers designed for intense tasks, offering robust performance and open-source adaptability.",
      color: "text-pop-yellow"
    },
    {
      icon: Keyboard,
      title: "Keyboards",
      description: "Handcrafted mechanical keyboards designed by keyboard enthusiasts for typing at warp speed.",
      color: "text-pop-orange"
    }
  ];

  return (
    <section className="py-24 bg-space-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-pop-teal text-lg font-semibold mb-4">THE COMPLETE EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hardware Made For Pop!<span className="text-pop-orange">_</span>OS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardware.map((item, index) => (
            <div key={index} className="group text-center">
              {/* Hardware Image Placeholder */}
              <div className="bg-gradient-cosmic rounded-2xl aspect-square mb-6 flex items-center justify-center shadow-space group-hover:shadow-glow transition-all duration-300">
                <item.icon className={`w-16 h-16 ${item.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;