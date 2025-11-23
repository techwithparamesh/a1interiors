import { Link } from "wouter";
import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-muted/50 border-b border-border text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Left Links */}
          <div className="flex items-center gap-6">
            <Link href="/partner">
              <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Partner with A1 Interiors
              </span>
            </Link>
            <Link href="/refer">
              <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Refer and Earn
              </span>
            </Link>
            <Link href="/join">
              <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Join Us
              </span>
            </Link>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              <Phone className="w-4 h-4" />
              <span>Customer Support</span>
            </div>
            <Link href="/stores">
              <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Store Locator
              </span>
            </Link>
            <Link href="/login">
              <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Login/Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
