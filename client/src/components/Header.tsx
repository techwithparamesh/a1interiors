import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { 
      href: "/gallery", 
      label: "Gallery",
      hasDropdown: true,
      dropdownItems: [
        { href: "/gallery", label: "All Designs" },
        { href: "/gallery?tab=living", label: "Living Room" },
        { href: "/gallery?tab=kitchen", label: "Kitchen" },
        { href: "/gallery?tab=bedroom", label: "Bedroom" },
        { href: "/gallery?tab=bathroom", label: "Bathroom" },
      ]
    },
    { href: "/calculators", label: "Price Calculators" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home">
                <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-lg">🏠</span>
                </div>
                <span className="font-heading font-bold text-xl text-foreground hidden sm:block">
                  A1 Interiors
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div className="relative group">
                      <Link href={link.href}>
                        <span
                          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary cursor-pointer flex items-center gap-1 ${
                            location.startsWith('/gallery') ? "text-primary" : "text-foreground"
                          }`}
                          data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {link.label}
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </Link>
                      <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                          {link.dropdownItems?.map((item) => (
                            <span 
                              key={item.href}
                              onClick={() => {
                                window.location.href = item.href;
                              }}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary cursor-pointer"
                            >
                              {item.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href}>
                      <span
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                          location === link.href ? "text-primary" : "text-foreground"
                        }`}
                        data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button 
                size="default" 
                className="hidden md:flex bg-primary hover:bg-primary/90"
                data-testid="button-book-consultation"
                onClick={() => setLocation("/calculators")}
              >
                Get Free Estimate
              </Button>

              <button
                className="lg:hidden p-2 hover-elevate active-elevate-2 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div>
                      <Link href={link.href}>
                        <span
                          className={`block px-4 py-3 rounded-md text-sm font-medium mb-1 hover-elevate cursor-pointer ${
                            location.startsWith('/gallery')
                              ? "text-primary bg-accent"
                              : "text-foreground"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {link.label}
                        </span>
                      </Link>
                      <div className="pl-4 mt-1 space-y-1">
                        {link.dropdownItems?.map((item) => (
                          <span
                            key={item.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              window.location.href = item.href;
                            }}
                            className="block px-4 py-2 rounded-md text-sm text-muted-foreground hover:text-primary cursor-pointer"
                          >
                            {item.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href}>
                      <span
                        className={`block px-4 py-3 rounded-md text-sm font-medium mb-1 hover-elevate cursor-pointer ${
                          location === link.href
                            ? "text-primary bg-accent"
                            : "text-foreground"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              <Button 
                className="w-full mt-2" 
                size="default"
                data-testid="button-mobile-book-consultation"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLocation("/calculators");
                }}
              >
                Get Free Estimate
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
