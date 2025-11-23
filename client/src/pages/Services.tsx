import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import kitchenImage from "@assets/generated_images/Kitchen_category_showcase_bf36e66d.png";
import bedroomImage from "@assets/generated_images/Bedroom_category_showcase_d4e96a70.png";
import bathroomImage from "@assets/generated_images/Bathroom_category_showcase_780b4e76.png";
import livingRoomImage from "@assets/generated_images/Hero_living_room_interior_730dd1ef.png";

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      title: "Modular Kitchens",
      description: "Transform your cooking space with our custom modular kitchen designs that blend style, functionality, and smart storage solutions.",
      image: kitchenImage,
      features: ["L-Shaped & U-Shaped Designs", "Island Kitchens", "Premium Finishes", "Smart Storage Solutions"],
      link: "/services/modular-kitchens"
    },
    {
      title: "Bedroom Interiors",
      description: "Create your perfect sanctuary with elegant bedroom designs featuring custom wardrobes, ambient lighting, and personalized decor.",
      image: bedroomImage,
      features: ["Walk-in Wardrobes", "Custom Furniture", "Ambient Lighting", "Storage Optimization"],
      link: "/services/bedroom-interiors"
    },
    {
      title: "Living Room Design",
      description: "Design stunning living spaces that become the heart of your home with our contemporary designs and thoughtful layouts.",
      image: livingRoomImage,
      features: ["TV Unit Designs", "Seating Arrangements", "False Ceiling", "Complete Makeovers"],
      link: "/services/living-room-design"
    },
    {
      title: "Bathroom Solutions",
      description: "Experience luxury with spa-like bathroom designs featuring premium fittings, elegant tiles, and innovative storage.",
      image: bathroomImage,
      features: ["Modern Fixtures", "Vanity Designs", "Glass Partitions", "Premium Tiles"],
      link: "/services/bathroom-solutions"
    },
    {
      title: "Wardrobe Designs",
      description: "Maximize your storage with custom wardrobe solutions that are tailored to your space and organizational needs.",
      image: bedroomImage,
      features: ["Sliding Wardrobes", "Walk-in Closets", "Loft Designs", "Custom Compartments"],
      link: "/services/wardrobe-designs"
    },
    {
      title: "Complete Home Interiors",
      description: "Get end-to-end interior solutions for your entire home with cohesive designs that reflect your unique style.",
      image: livingRoomImage,
      features: ["Full Home Design", "Turnkey Solutions", "Project Management", "Quality Assurance"],
      link: "/services/complete-home-interiors"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent to-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">Our Services</h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive interior design solutions tailored to your lifestyle and budget.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our specialized services and discover how we can transform your space into a beautiful, functional home you'll love.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 font-heading text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full group/btn"
                    onClick={() => setLocation(service.link)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Why Choose A1 Interiors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">45</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Days Delivery</h3>
              <p className="text-muted-foreground">Get your dream space delivered in just 45 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">10</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Year Warranty</h3>
              <p className="text-muted-foreground">Flat 10-year warranty on all woodwork</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">600+</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Designers</h3>
              <p className="text-muted-foreground">In-house team of certified professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">0</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Hidden Costs</h3>
              <p className="text-muted-foreground">Complete transparency in pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-primary">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert designers and bring your dream home to life.
          </p>
          <Button size="lg" className="bg-primary text-white text-lg px-12 py-6" onClick={() => setLocation("/consultation")}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
