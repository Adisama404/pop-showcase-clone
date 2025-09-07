import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Specials = () => {
  const currentDeals = [
    {
      title: "Launch Lite Keyboard Sale",
      discount: "$50 OFF",
      originalPrice: "$249",
      salePrice: "$199",
      description: "Limited time offer on Launch Lite keyboards",
      expires: "Ends March 31st"
    },
    {
      title: "Student Discount", 
      discount: "10% OFF",
      originalPrice: "All Laptops",
      salePrice: "Edu Pricing",
      description: "Academic discount for students and educators",
      expires: "Ongoing"
    },
    {
      title: "Enterprise Bundle",
      discount: "15% OFF",
      originalPrice: "5+ Systems",
      salePrice: "Volume Pricing", 
      description: "Bulk pricing for organizations",
      expires: "Contact Sales"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-aurora">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-pop-orange text-white text-lg font-bold">LIMITED TIME</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Special Offers
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Exclusive deals and promotions on System76 hardware and accessories
          </p>
          <Button variant="download" size="lg">View All Deals</Button>
        </div>
      </section>

      {/* Current Deals */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Current Promotions
            </h2>
            <p className="text-xl text-muted-foreground">
              Save on System76 products with these exclusive offers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {currentDeals.map((deal, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-pop-orange text-white px-4 py-2 font-bold text-sm">
                  {deal.discount}
                </div>
                
                <CardContent className="p-8 pt-16">
                  <h3 className="text-2xl font-bold mb-4">{deal.title}</h3>
                  <p className="text-muted-foreground mb-6">{deal.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground line-through">
                        {deal.originalPrice}
                      </div>
                      <div className="text-2xl font-bold text-pop-orange">
                        {deal.salePrice}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-6">
                    {deal.expires}
                  </div>
                  
                  <Button variant="download" className="w-full">
                    Shop This Deal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Specials;