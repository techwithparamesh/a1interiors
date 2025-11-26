import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

import kitchenImage from "@assets/generated_images/Kitchen_category_showcase_bf36e66d.png";
import bedroomImage from "@assets/generated_images/Bedroom_category_showcase_d4e96a70.png";
import bathroomImage from "@assets/generated_images/Bathroom_category_showcase_780b4e76.png";
import livingRoomImage from "@assets/generated_images/Hero_living_room_interior_730dd1ef.png";

export default function Services() {
  const [, setLocation] = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Adjust speed (lower = slower, higher = faster)
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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

      {/* What We Offer */}
      <section className="py-20 bg-gradient-to-b from-background via-accent/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,53,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">What we offer</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions backed by quality, innovation, and customer satisfaction
            </p>
          </div>
          
          <div className="relative">
            <div ref={scrollContainerRef} className="flex gap-6 overflow-x-hidden pb-6 pointer-events-none">
              {/* Duplicate cards for infinite scroll effect */}
              {[...Array(2)].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-6 flex-shrink-0">
              {/* Our Services Card */}
              <Card className="min-w-[320px] md:min-w-[360px] p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Our services</h3>
                    <div className="h-1 w-12 bg-primary/60 rounded-full mt-2"></div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors group/item">
                    <span className="mr-3 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-sm">Modular kitchens</span>
                  </li>
                  <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors group/item">
                    <span className="mr-3 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-sm">Modular wardrobes</span>
                  </li>
                  <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors group/item">
                    <span className="mr-3 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-sm">Lighting</span>
                  </li>
                  <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors group/item">
                    <span className="mr-3 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-sm">Flooring</span>
                  </li>
                  <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors group/item">
                    <span className="mr-3 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-sm">Electrical work</span>
                  </li>
                  <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors group/item">
                    <span className="mr-3 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-sm">Civil work</span>
                  </li>
                  <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors group/item">
                    <span className="mr-3 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-sm">False ceiling</span>
                  </li>
                  <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors group/item">
                    <span className="mr-3 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-sm">Wall design & painting</span>
                  </li>
                </ul>
              </Card>

              {/* Warranty Card */}
              <Card className="min-w-[320px] md:min-w-[360px] p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 snap-center bg-card/50 backdrop-blur-sm hover:scale-[1.02] group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Warranty</h3>
                    <div className="h-1 w-12 bg-primary/60 rounded-full mt-2"></div>
                  </div>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">FLAT 10-year warranty*</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Stay worry-free with our warranty policy on modular products.</p>
                    </div>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Up to 1-year on-site service warranty*</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Warranty on on-site services such as painting, electrical, plumbing and more.</p>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Technology & Science Card */}
              <Card className="min-w-[320px] md:min-w-[360px] p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 snap-center bg-card/50 backdrop-blur-sm hover:scale-[1.02] group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Technology & science</h3>
                    <div className="h-1 w-12 bg-primary/60 rounded-full mt-2"></div>
                  </div>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">AquaBloc® Technology</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Hermetically sealed edges that ensure no moisture enters the panels of your modular cabinets.</p>
                    </div>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">AntiBubble® Technology</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Super seamless panels without air bubbles for your modular cabinets.</p>
                    </div>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">DuraBuild™ Technology</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Robust structure for modular cabinets, making them strong and long-lasting.</p>
                    </div>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Design Science</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Modular kitchens with improved accessibility that makes daily tasks more efficient and reduces stress on the body.</p>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Price Benefits Card */}
              <Card className="min-w-[320px] md:min-w-[360px] p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 snap-center bg-card/50 backdrop-blur-sm hover:scale-[1.02] group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Price benefits</h3>
                    <div className="h-1 w-12 bg-primary/60 rounded-full mt-2"></div>
                  </div>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Price-match guarantee*</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Price match to a valid quote in comparison with a branded player and for exact scope.</p>
                    </div>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Flexible payment options</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">EMI solutions and payment schemes from leading financial partners.</p>
                    </div>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="mr-3 mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">No hidden costs</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Transparent costing without last-minute additions.</p>
                    </div>
                  </li>
                </ul>
              </Card>
                </div>
              ))}
            </div>
          </div>
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

      <FloatingChat />
      <Footer />
    </div>
  );
}
