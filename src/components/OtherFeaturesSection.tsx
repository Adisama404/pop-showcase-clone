import { Zap, Gamepad2, Bell } from "lucide-react";

const OtherFeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Hybrid Graphics", 
      description: "Set phasers to stunning performance. Toggle between battery-saving and high-powered graphics, or launch individual apps on GPU power.",
      gradient: "from-pop-yellow to-pop-orange"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Steam, Lutris, and GameHub create an incredible gaming experience in selection and performance. Let your game library roam free on one OS.",
      gradient: "from-pop-teal to-pop-yellow"
    },
    {
      icon: Bell,
      title: "Do Not Disturb",
      description: "Get rid of any and all notifications for however long you like. Cast out ye heathens, for there is many a work to be done!",
      gradient: "from-pop-orange to-pop-teal"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 tracking-tight">
          Other Features
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              {/* Feature Card */}
              <div className="bg-card rounded-2xl p-8 shadow-space hover:shadow-glow transition-all duration-300 border border-border/50">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Mock Image/Preview */}
              <div className="mt-6 bg-gradient-cosmic rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-white/80 text-sm font-medium">
                  {feature.title} Preview
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherFeaturesSection;