import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Robert H.",
      text: "When I first got my System76 laptop I decided I'd use Pop!_OS until it annoyed me, and would then switch to my distro-of-choice. Two years later not only am I still using it, it's become my distro-of-choice. It's radically cut how much time I spend hand-hacking configuration files, which gives me more time to spend on my projects.",
      rating: 5
    },
    {
      name: "Stuart L.",
      text: "My favorite thing about Pop!_OS is that it literally gets out of your way and I can get so much work done without any problems. My favorite feature has to be the docker and the sweet animations!!!",
      rating: 5
    },
    {
      name: "Robert T.",
      text: "Pop!_OS has completely transformed my development workflow. The seamless integration with System76 hardware and the intuitive interface make it perfect for both coding and creative work.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 tracking-tight">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 shadow-space hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-pop-yellow text-pop-yellow" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <Button variant="ghost" size="sm" className="text-pop-teal hover:text-pop-orange">
                    Shop now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="cosmic" size="lg" className="text-lg px-12 py-6">
            Explore System76 Hardware
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;