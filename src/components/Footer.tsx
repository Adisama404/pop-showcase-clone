import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: "Laptops", path: "/laptops" },
      { name: "Desktops", path: "/desktops" }, 
      { name: "Servers", path: "/servers" },
      { name: "Keyboards", path: "/keyboards" }
    ],
    Support: [
      { name: "Documentation", path: "https://support.system76.com" },
      { name: "Contact", path: "https://system76.com/contact" },
      { name: "Warranty", path: "https://system76.com/warranty" },
      { name: "Returns", path: "https://system76.com/returns" }
    ], 
    Company: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "https://blog.system76.com" },
      { name: "Careers", path: "https://system76.com/careers" },
      { name: "Press", path: "https://system76.com/press" }
    ],
    Community: [
      { name: "Forum", path: "https://chat.pop-os.org" },
      { name: "Discord", path: "https://discord.gg/system76" },
      { name: "Reddit", path: "https://reddit.com/r/pop_os" },
      { name: "GitHub", path: "https://github.com/system76" }
    ]
  };

  return (
    <footer className="bg-space-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 py-16">
          {/* System76 Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="block mb-6">
              <div className="text-3xl font-bold mb-2">
                system<span className="text-pop-orange">76</span>
              </div>
              <p className="text-pop-teal text-sm">Powerful Linux Computers</p>
            </Link>
            <p className="text-white/80 leading-relaxed mb-6">
              Building the future of open source hardware and software, 
              one computer at a time.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/system76" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-pop-teal p-2">
                  <div className="w-5 h-5 bg-current rounded"></div>
                </Button>
              </a>
              <a href="https://github.com/system76" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-pop-orange p-2">
                  <div className="w-5 h-5 bg-current rounded"></div>
                </Button>
              </a>
              <a href="https://mastodon.world/@system76" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-pop-yellow p-2">
                  <div className="w-5 h-5 bg-current rounded"></div>
                </Button>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-pop-teal mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('http') ? (
                      <a href={link.path} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-0 h-auto font-normal">
                          {link.name}
                        </Button>
                      </a>
                    ) : (
                      <Link to={link.path}>
                        <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-0 h-auto font-normal">
                          {link.name}
                        </Button>
                      </Link>
                    )}
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
            <a href="https://system76.com/privacy" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white text-sm">
                Privacy Policy
              </Button>
            </a>
            <a href="https://system76.com/terms" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white text-sm">
                Terms of Service
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;