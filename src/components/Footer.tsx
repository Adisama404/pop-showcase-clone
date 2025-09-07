import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Products: ["Laptops", "Desktops", "Servers", "Keyboards"],
    Support: ["Documentation", "Contact", "Warranty", "Returns"], 
    Company: ["About", "Blog", "Careers", "Press"],
    Community: ["Forum", "Discord", "Reddit", "GitHub"]
  };

  return (
    <footer className="bg-space-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 py-16">
          {/* System76 Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">
                system<span className="text-pop-orange">76</span>
              </div>
              <p className="text-pop-teal text-sm">Powerful Linux Computers</p>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Building the future of open source hardware and software, 
              one computer at a time.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-pop-teal p-2">
                <div className="w-5 h-5 bg-current rounded"></div>
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-pop-orange p-2">
                <div className="w-5 h-5 bg-current rounded"></div>
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-pop-yellow p-2">
                <div className="w-5 h-5 bg-current rounded"></div>
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-pop-teal mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-0 h-auto font-normal">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 System76. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;