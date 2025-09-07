import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-cosmic">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Go Forth and Make
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            System76 proudly engineers and manufactures premium Linux computers and keyboards 
            at our factory in Denver, Colorado. Our user-driven products, alongside Pop!_OS, 
            give creators, makers, and builders the means to bring forth the future.
          </p>
          <Button variant="cosmic" size="lg">Our Story</Button>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground">
              Empowering creators through open source hardware and software
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pop-teal to-pop-orange rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing the boundaries of what's possible with open source technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pop-orange to-pop-yellow rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">
                Building products with and for the open source community
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pop-yellow to-pop-teal rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                Responsible manufacturing and materials for a better future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-space-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Discover how System76 can power your next project with open source hardware and software
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="cosmic" size="lg">Contact Us</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-space-dark">
              Careers
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;