import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import laptopHero from "@/assets/laptop-hero.jpg";

const Laptops = () => {
  const laptopCategories = [
    {
      title: "Ultraportable",
      description: "From thin 16\" laptops to a 2.2 pound, 14 hour marathon model",
      models: ["Lemur Pro", "Galago Pro"]
    },
    {
      title: "Performance",
      description: "Powerful laptops for demanding workloads and gaming",
      models: ["Oryx Pro", "Bonobo WS"]
    },
    {
      title: "Developer",
      description: "Optimized for coding and development workflows", 
      models: ["Darter Pro", "Serval WS"]
    }
  ];

  const featuredLaptops = [
    {
      name: "Lemur Pro",
      tagline: "Ultra-thin. Ultra-light. Ultra-long battery.",
      price: "From $1,149",
      features: ["Up to 14 hours battery", "2.2 lbs", "Intel 13th Gen"],
      image: "bg-gradient-cosmic"
    },
    {
      name: "Darter Pro", 
      tagline: "Performance and portability in perfect harmony.",
      price: "From $1,299",
      features: ["NVIDIA RTX 4060", "15.6\" display", "DDR4-3200"],
      image: "bg-gradient-aurora"
    },
    {
      name: "Oryx Pro",
      tagline: "Unleash your creative potential.",
      price: "From $1,899", 
      features: ["NVIDIA RTX 4080", "17.3\" 144Hz", "64GB RAM ready"],
      image: "bg-gradient-space"
    },
    {
      name: "Bonobo WS",
      tagline: "Desktop replacement workstation.",
      price: "From $2,499",
      features: ["NVIDIA RTX 4090", "17.3\" 4K", "128GB RAM ready"],
      image: "bg-space-dark"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-space-dark"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${laptopHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-pop-teal text-white">System76 Laptops</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Laptops
          </h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Thin | Fast | Portable | Versatile
          </p>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Engineering excellence meets Linux compatibility in every System76 laptop. 
            Built for developers, creators, and professionals who demand performance.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {laptopCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-cosmic rounded-2xl flex items-center justify-center">
                  <div className="text-3xl font-bold text-white">{index + 1}</div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.models.map((model) => (
                    <Badge key={model} variant="secondary">{model}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Laptops */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Laptops
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the perfect System76 laptop for your workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredLaptops.map((laptop, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                <div className={`h-48 ${laptop.image} rounded-t-lg flex items-center justify-center`}>
                  <div className="text-white font-bold text-lg">{laptop.name}</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{laptop.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{laptop.tagline}</p>
                  
                  <div className="space-y-2 mb-6">
                    {laptop.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-pop-teal rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-pop-orange">{laptop.price}</span>
                    <Button variant="download" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose System76 */}
      <section className="py-24 bg-space-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why Choose System76 Laptops?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-pop-teal rounded-full flex items-center justify-center">
                <span className="text-2xl">🐧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Linux First</h3>
              <p className="text-white/80">Designed and tested for Linux. No drivers to hunt down or compatibility issues.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-pop-orange rounded-full flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Open Hardware</h3>
              <p className="text-white/80">Open source firmware and hardware designs. Your laptop, your way.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-pop-yellow rounded-full flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Made in USA</h3>
              <p className="text-white/80">Assembled in Denver, Colorado with premium components and lifetime support.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Laptops;