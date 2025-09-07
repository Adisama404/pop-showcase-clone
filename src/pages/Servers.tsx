import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Servers = () => {
  const serverModels = [
    {
      name: "Ibex Pro",
      category: "GPU Server",
      price: "Contact Sales",
      description: "High-performance GPU servers for AI, machine learning, and scientific computing",
      features: ["Up to 10x NVIDIA GPUs", "Dual CPU support", "Enterprise reliability"]
    },
    {
      name: "Jackal Pro",
      category: "Rackmount Server", 
      price: "From $3,499",
      description: "1U rackmount servers optimized for data centers and enterprise deployments",
      features: ["Dual Intel Xeon", "Hot-swap drives", "Remote management"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-space-dark">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-pop-orange text-white">Enterprise Solutions</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Servers
          </h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Customized Servers for Every Client
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Whether you need power up front or room to grow, System76 servers help you 
            balance budget and performance for mission-critical workloads.
          </p>
          <Button variant="cosmic" size="lg">Contact Sales Team</Button>
        </div>
      </section>

      {/* Server Models */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {serverModels.map((server, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-pop-teal/20 text-pop-teal">{server.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{server.name}</h3>
                  <p className="text-muted-foreground mb-6">{server.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {server.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-pop-orange rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-pop-orange">{server.price}</div>
                    <Button variant="download">Get Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Servers;