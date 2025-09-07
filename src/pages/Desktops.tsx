import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Desktops = () => {
  const desktopModels = [
    {
      name: "Thelio",
      tagline: "Elegant. Powerful. Quiet.",
      price: "From $1,499",
      features: ["AMD Ryzen or Intel Core", "Tool-free upgrades", "Custom wood accent"],
      specs: "Up to 128GB RAM, Multiple GPU support"
    },
    {
      name: "Thelio Major",
      tagline: "Workstation-class performance.",
      price: "From $2,199", 
      features: ["AMD Threadripper", "Dual GPU ready", "Premium cooling"],
      specs: "Up to 256GB RAM, Enterprise SSD"
    },
    {
      name: "Thelio Massive",
      tagline: "Maximum power and expandability.",
      price: "From $4,999",
      features: ["Dual CPU support", "8 GPU capability", "Professional grade"],
      specs: "Up to 1TB RAM, NVMe RAID"
    },
    {
      name: "Meerkat",
      tagline: "Mini desktop, maximum capability.",
      price: "From $899",
      features: ["Ultra-compact", "4K display support", "Silent operation"],
      specs: "Up to 64GB RAM, Multiple displays"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-space">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-pop-orange text-white">System76 Desktops</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Desktops
          </h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Powerful | Quiet | Handcrafted | Expandable
          </p>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Desktop computers engineered for tinkering and built for maximum performance. 
            Tool-free upgrades and lifetime support included.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="download" size="lg">Browse Desktops</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-space-dark">
              Custom Configure
            </Button>
          </div>
        </div>
      </section>

      {/* Desktop Models */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Desktop Collection
            </h2>
            <p className="text-xl text-muted-foreground">
              From compact workhorses to maximum performance machines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {desktopModels.map((desktop, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="h-64 bg-gradient-cosmic flex items-center justify-center relative">
                  <div className="text-white font-bold text-2xl">{desktop.name}</div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-pop-teal text-white">Available Now</Badge>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{desktop.name}</h3>
                      <p className="text-muted-foreground mb-4">{desktop.tagline}</p>
                    </div>
                    <span className="text-xl font-bold text-pop-orange">{desktop.price}</span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {desktop.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-pop-teal rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-secondary/50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold mb-2">Technical Specs</h4>
                    <p className="text-sm text-muted-foreground">{desktop.specs}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="download" className="flex-1">Configure</Button>
                    <Button variant="outline" size="default">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Desktop Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pop-teal to-pop-orange rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Tool-Free Upgrades</h3>
              <p className="text-sm text-muted-foreground">Easy access panels for simple component upgrades</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pop-orange to-pop-yellow rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Sustainable Design</h3>
              <p className="text-sm text-muted-foreground">Real wood accents and recyclable materials</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pop-yellow to-pop-teal rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🔇</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Whisper Quiet</h3>
              <p className="text-sm text-muted-foreground">Advanced cooling keeps systems silent under load</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pop-teal to-pop-orange rounded-2xl flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Open Hardware</h3>
              <p className="text-sm text-muted-foreground">Open source firmware and schematics available</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Desktops;