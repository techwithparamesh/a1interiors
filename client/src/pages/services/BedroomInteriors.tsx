import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle2, ArrowLeft } from "lucide-react";

import bedroomImage from "@assets/generated_images/Bedroom_category_showcase_d4e96a70.png";

export default function BedroomInteriors() {
  const [, setLocation] = useLocation();

  const designs = [
    { name: "Master Bedroom", description: "Luxurious designs with premium wardrobes and lighting" },
    { name: "Kids Bedroom", description: "Playful, functional spaces with study areas and storage" },
    { name: "Guest Bedroom", description: "Elegant, comfortable designs for your guests" },
    { name: "Walk-in Wardrobe", description: "Spacious closets with organized compartments" },
    { name: "Study Areas", description: "Integrated work zones with ergonomic furniture" }
  ];

  const features = [
    "Custom Wardrobe Designs",
    "Sliding & Hinged Doors",
    "Premium Laminates & Finishes",
    "Ambient Lighting Solutions",
    "Bedside Storage Units",
    "Dressing Tables",
    "False Ceiling Designs",
    "Wall Paneling Options",
    "Mirror & Glass Work",
    "Complete Furniture Solutions"
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
              <h1 className="font-heading text-5xl font-bold mb-6 text-primary">Bedroom Interiors</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Create your personal sanctuary with our elegant bedroom designs. We combine comfort, style, and functionality to design spaces where you can truly relax and recharge.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From custom wardrobes to ambient lighting, every element is carefully crafted to reflect your personality and meet your storage needs.
              </p>
              <Button size="lg" className="bg-primary text-white" onClick={() => setLocation("/consultation")}>
                Get Free Design Consultation
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={bedroomImage} alt="Bedroom Interior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Bedroom Solutions</h2>
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
          <h2 className="font-heading text-4xl font-bold mb-6 text-primary">Transform Your Bedroom Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation and get personalized 3D bedroom designs.
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
