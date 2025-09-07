import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "laptops", path: "/laptops" },
    { name: "desktops", path: "/desktops" },
    { name: "workstations", path: "/workstations" },
    { name: "mini", path: "/mini" },
    { name: "servers", path: "/servers" },
    { name: "keyboards", path: "/keyboards" },
    { name: "components", path: "/components" },
    { name: "pop_os", path: "/pop-os" },
    { name: "merch", path: "/merch" },
    { name: "specials", path: "/specials" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* System76 Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="text-2xl font-bold text-foreground">
              system<span className="text-pop-orange">76</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Powerful Linux Computers
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-foreground hover:text-pop-teal transition-colors capitalize px-2 py-1 rounded hover:bg-secondary/50"
              >
                {item.name.replace('_', ' ')}
              </Link>
            ))}
          </nav>

          {/* Search and Account */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              search
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              contact
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              log in or register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;