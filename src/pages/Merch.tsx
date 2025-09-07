import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Merch = () => {
  const merchItems = [
    {
      name: "System76 T-Shirt",
      price: "$25",
      description: "Premium cotton tee with System76 logo"
    },
    {
      name: "Pop!_OS Hoodie", 
      price: "$45",
      description: "Comfortable hoodie featuring Pop!_OS branding"
    },
    {
      name: "Laptop Stickers",
      price: "$10", 
      description: "Set of System76 and Pop!_OS stickers"
    },
    {
      name: "Coffee Mug",
      price: "$18",
      description: "11oz ceramic mug with System76 logo"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-space">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Merchandise
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Show your System76 pride with official merchandise and accessories
          </p>
          <Button variant="download" size="lg">Shop All Merchandise</Button>
        </div>
      </section>

      {/* Merch Items */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {merchItems.map((item, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <div className="h-48 bg-gradient-cosmic flex items-center justify-center">
                  <span className="text-white text-lg font-bold">{item.name}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-pop-orange">{item.price}</span>
                    <Button variant="download" size="sm">Add to Cart</Button>
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

export default Merch;