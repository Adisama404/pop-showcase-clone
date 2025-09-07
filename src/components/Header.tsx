import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    "laptops", "desktops", "workstations", "mini", "servers", 
    "keyboards", "components", "pop_os", "merch", "specials"
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* System76 Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              system<span className="text-pop-orange">76</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Powerful Linux Computers
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Button 
                key={item} 
                variant="ghost" 
                className="text-foreground hover:text-pop-teal transition-colors capitalize"
              >
                {item.replace('_', ' ')}
              </Button>
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