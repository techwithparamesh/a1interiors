
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";


export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const services = [
    { label: "Modular Kitchen Design", href: "/services/modular-kitchens" },
    { label: "Living Room Design", href: "/services/living-room-design" },
    { label: "Bathroom Design", href: "/services/bathroom-solutions" },
    { label: "Wardrobe Design", href: "/services/wardrobe-designs" },
    { label: "Bedroom Design", href: "/services/bedroom-interiors" },
  ];





  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏠</span>
              <span className="font-heading font-bold text-xl">A1 Interiors</span>
            </div>
            <p className="text-white/80 mb-6 text-sm">
              Beautiful interiors. Delivered in 45 days. Backed by 10-year warranty.
            </p>
            {/* Social media icons removed */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-white/70 hover:text-white text-sm transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>
                    <a className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer">
                      {service.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details with icons */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919989396144" className="hover:text-primary transition-colors">+91 9989396144</a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+917702045767" className="hover:text-primary transition-colors">+91 7702045767</a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:a1interiors@gmail.com" className="hover:text-primary transition-colors">a1interiors@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-8 h-8 text-primary" />
                <span>ROOM NO.9, LKR TOWERS, beside Rajiv Park Road, A.P.H.B Colony, Kadapa, Andhra Pradesh 516001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/60">
              © 2025 A1 Interiors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
