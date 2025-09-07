import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Mini = () => {
  const miniModels = [
    {
      name: "Meerkat",
      tagline: "Tiny desktop, full Linux power",
      price: "From $899",
      features: ["Intel NUC platform", "4K display support", "Whisper quiet", "Ultra compact"],
      specs: "Up to 64GB RAM, 2TB NVMe SSD"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-cosmic">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-pop-teal text-white">Compact Computing</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Mini Computers
          </h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Small Form Factor | Big Performance | Linux Ready
          </p>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Compact computers that don't compromise on performance. Perfect for workstations 
            with limited space or as powerful media centers.
          </p>
          <Button variant="download" size="lg">Explore Mini PCs</Button>
        </div>
      </section>

      {/* Models */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {miniModels.map((model, index) => (
              <Card key={index} className="overflow-hidden shadow-space">
                <div className="grid lg:grid-cols-2">
                  <div className="h-64 lg:h-full bg-gradient-space flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">{model.name}</div>
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4">{model.name}</h3>
                    <p className="text-xl text-muted-foreground mb-6">{model.tagline}</p>
                    <div className="text-2xl font-bold text-pop-orange mb-8">{model.price}</div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-pop-teal rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="download" className="w-fit">Configure Meerkat</Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Mini;