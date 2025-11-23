import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle2, ArrowLeft } from "lucide-react";

import bathroomImage from "@assets/generated_images/Bathroom_category_showcase_780b4e76.png";

export default function BathroomSolutions() {
  const [, setLocation] = useLocation();

  const designs = [
    { name: "Vanity Designs", description: "Elegant vanity units with smart storage" },
    { name: "Shower Enclosures", description: "Modern glass partitions and fixtures" },
    { name: "Premium Tiles", description: "Designer tiles for walls and floors" },
    { name: "Sanitary Fittings", description: "High-quality faucets and fixtures" },
    { name: "Mirror & Lighting", description: "Ambient lighting with designer mirrors" }
  ];

  const features = [
    "Custom Vanity Units",
    "Premium Sanitary Ware",
    "Designer Tiles & Flooring",
    "Glass Shower Partitions",
    "Modern Faucets & Fixtures",
    "Mirror with LED Lighting",
    "Storage Solutions",
    "Waterproofing",
    "Ventilation Systems",
    "Spa-like Experience"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-4 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <Button variant="ghost" onClick={() => setLocation("/services")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-accent to-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-5xl font-bold mb-6 text-primary">Bathroom Solutions</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Transform your bathroom into a spa-like retreat with our premium bathroom designs. We combine luxury fixtures, elegant tiles, and smart storage for the ultimate experience.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From modern vanities to designer tiles, every detail is crafted to deliver comfort and style.
              </p>
              <Button size="lg" className="bg-primary text-white" onClick={() => setLocation("/consultation")}>
                Get Free Design Consultation
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={bathroomImage} alt="Bathroom Design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Bathroom Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-primary">{design.name}</h3>
                <p className="text-muted-foreground">{design.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-primary">Design Your Dream Bathroom</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a consultation and get customized bathroom designs with premium finishes.
          </p>
          <Button size="lg" className="bg-primary text-white text-lg px-12 py-6" onClick={() => setLocation("/consultation")}>
            Book Free Consultation Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
