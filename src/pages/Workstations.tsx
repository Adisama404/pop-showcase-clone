import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Workstations = () => {
  const workstationModels = [
    {
      name: "Thelio Major",
      category: "Desktop Workstation", 
      price: "From $2,199",
      description: "AMD Threadripper processors deliver exceptional multi-threaded performance for demanding workloads.",
      specs: ["Up to 64 cores", "256GB RAM", "Dual GPU ready"]
    },
    {
      name: "Thelio Massive", 
      category: "Multi-CPU Workstation",
      price: "From $4,999",
      description: "Dual CPU configuration with support for up to 8 GPUs. Built for AI, rendering, and simulation.",
      specs: ["Dual CPU support", "1TB RAM capacity", "8x GPU slots"]
    },
    {
      name: "Serval WS",
      category: "Mobile Workstation",
      price: "From $2,899", 
      description: "17.3\" laptop workstation with desktop-class performance in a portable form factor.",
      specs: ["Intel Xeon available", "128GB RAM", "NVIDIA RTX Pro"]
    },
    {
      name: "Bonobo WS",
      category: "Extreme Mobile Workstation",
      price: "From $3,499",
      description: "Ultimate portable workstation with desktop replacement performance and 4K display.",
      specs: ["Desktop CPU", "4K 17.3\" display", "Multiple GPU options"]
    }
  ];

  const useCases = [
    {
      title: "AI & Machine Learning",
      description: "Train models faster with NVIDIA RTX and Tesla GPUs",
      icon: "🤖"
    },
    {
      title: "3D Rendering", 
      description: "Accelerate rendering workflows with multiple GPUs",
      icon: "🎬"
    },
    {
      title: "Scientific Computing",
      description: "Parallel processing for research and simulation", 
      icon: "🧬"
    },
    {
      title: "Video Production",
      description: "Real-time editing of 4K and 8K footage",
      icon: "📹"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-space-dark">
        <div className="absolute inset-0 bg-gradient-cosmic opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-pop-yellow text-space-dark font-bold">Professional Workstations</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Workstations
          </h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Extreme Performance | Professional Grade | Open Source
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Built for intense computational workloads. From AI development to scientific research, 
            System76 workstations deliver uncompromising performance with open-source adaptability.
          </p>
          <Button variant="cosmic" size="lg" className="text-lg px-12 py-6">
            Configure Your Workstation
          </Button>
        </div>
      </section>

      {/* Workstation Models */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional Workstations
            </h2>
            <p className="text-xl text-muted-foreground">
              Engineered for the most demanding professional workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {workstationModels.map((workstation, index) => (
              <Card key={index} className="group hover:shadow-space transition-all duration-500 border-border/50">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Badge className="mb-3 bg-pop-teal/20 text-pop-teal border-pop-teal/30">
                        {workstation.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {workstation.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {workstation.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pop-orange mb-2">
                        {workstation.price}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {workstation.specs.map((spec, idx) => (
                      <div key={idx} className="bg-secondary/50 p-3 rounded-lg text-center">
                        <div className="text-sm font-medium text-foreground">{spec}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="download" className="flex-1">
                      Configure & Price
                    </Button>
                    <Button variant="outline">
                      Technical Specs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Built for Professional Workflows
            </h2>
            <p className="text-xl text-muted-foreground">
              Workstations optimized for demanding applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-cosmic rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{useCase.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Support */}
      <section className="py-24 bg-space-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Professional Support & Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-pop-orange rounded-full flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Priority Support</h3>
              <p className="text-white/80">Direct access to engineering team for mission-critical systems.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-pop-teal rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-white/80">Volume pricing and custom configurations for organizations.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-pop-yellow rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">On-Site Service</h3>
              <p className="text-white/80">Professional installation and maintenance services available.</p>
            </div>
          </div>

          <Button variant="cosmic" size="lg" className="text-lg px-12 py-6">
            Contact Enterprise Sales
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Workstations;