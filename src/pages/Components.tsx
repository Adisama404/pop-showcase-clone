import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Components = () => {
  const componentCategories = [
    {
      name: "Memory & Storage",
      description: "RAM, SSDs, and storage solutions",
      count: "50+ products"
    },
    {
      name: "Graphics Cards",  
      description: "NVIDIA RTX and professional GPUs",
      count: "25+ products"
    },
    {
      name: "Processors",
      description: "Intel and AMD CPUs for all systems",
      count: "30+ products"
    },
    {
      name: "Accessories",
      description: "Cables, adapters, and peripherals", 
      count: "40+ products"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-aurora">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Components
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Premium computer components and accessories to upgrade your System76 hardware
          </p>
          <Button variant="download" size="lg">Browse All Components</Button>
        </div>
      </section>

      {/* Component Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {componentCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-cosmic rounded-2xl flex items-center justify-center">
                    <span className="text-2xl text-white">⚙️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                  <div className="text-pop-teal font-semibold text-sm mb-6">{category.count}</div>
                  <Button variant="outline" size="sm">Browse</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Components;