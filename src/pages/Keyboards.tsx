import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import keyboardHero from "@/assets/keyboard-hero.png";

const Keyboards = () => {
  const keyboardModels = [
    {
      name: "Launch",
      tagline: "The ultimate configurable keyboard",
      price: "From $285",
      features: ["Hot-swappable switches", "Open source firmware", "USB-C connectivity"],
      layouts: ["ANSI", "ISO", "Compact"],
      sale: false
    },
    {
      name: "Launch Lite",
      tagline: "Essential features, incredible value",
      price: "From $199",
      originalPrice: "$249",
      features: ["Pre-built switches", "Aluminum construction", "RGB backlighting"],
      layouts: ["ANSI", "Compact"],
      sale: true
    },
    {
      name: "Launch Heavy",
      tagline: "Premium build, maximum customization",
      price: "From $399", 
      features: ["Steel plate", "Premium switches", "Custom keycaps"],
      layouts: ["ANSI", "ISO"],
      sale: false
    }
  ];

  const keyFeatures = [
    {
      title: "Hot-Swappable Switches",
      description: "Change switches without soldering for the perfect typing experience",
      icon: "🔄"
    },
    {
      title: "Open Source Firmware",
      description: "Fully customizable with QMK and System76's open source keyboard firmware",
      icon: "⚡"
    },
    {
      title: "Premium Materials",
      description: "CNC machined aluminum cases and high-quality components throughout",
      icon: "💎"
    },
    {
      title: "Ergonomic Design", 
      description: "Sculpted key profiles and adjustable tilt for comfortable typing",
      icon: "🤲"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-space">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-pop-orange text-white">$50 OFF Launch Lite!</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Launch Keyboards
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Launch Configurable Keyboards are engineered to be comfortable, 
                fully customizable, and make your workflow more efficient.
              </p>
              <div className="flex gap-4">
                <Button variant="download" size="lg">Shop Launch Keyboards</Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-space-dark">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-pop-teal/20 rounded-3xl blur-3xl"></div>
              <img 
                src={keyboardHero} 
                alt="Launch Lite Keyboard"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keyboard Models */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Launch Keyboard Collection
            </h2>
            <p className="text-xl text-muted-foreground">
              Handcrafted mechanical keyboards designed by enthusiasts for typing at warp speed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyboardModels.map((keyboard, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 relative overflow-hidden">
                {keyboard.sale && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-pop-orange text-white font-bold">$50 OFF!</Badge>
                  </div>
                )}
                
                <div className="h-48 bg-gradient-cosmic flex items-center justify-center relative">
                  <div className="text-white font-bold text-xl">{keyboard.name}</div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{keyboard.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{keyboard.tagline}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-pop-orange">{keyboard.price}</span>
                    {keyboard.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {keyboard.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {keyboard.features.map((feature, idx) => (
                      <div key={idx} className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-pop-teal rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Available Layouts:</div>
                    <div className="flex flex-wrap gap-1">
                      {keyboard.layouts.map((layout) => (
                        <Badge key={layout} variant="secondary" className="text-xs">
                          {layout}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="download" className="w-full">
                    Configure
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Launch Keyboards?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-cosmic rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 bg-space-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Endless Customization
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4 text-pop-teal">Switches</h3>
              <p className="text-white/80 text-sm">Choose from linear, tactile, or clicky switches. Hot-swap compatible for easy changes.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-pop-orange">Keycaps</h3>
              <p className="text-white/80 text-sm">Premium PBT keycaps in multiple profiles and colorways. Custom legends available.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-pop-yellow">Firmware</h3>
              <p className="text-white/80 text-sm">Open source QMK firmware. Program any key, create macros, and customize lighting.</p>
            </div>
          </div>

          <Button variant="cosmic" size="lg" className="text-lg px-12 py-6">
            Start Customizing
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Keyboards;