import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle2, ArrowLeft } from "lucide-react";

import kitchenImage from "@assets/generated_images/Kitchen_category_showcase_bf36e66d.png";

export default function ModularKitchens() {
  const [, setLocation] = useLocation();

  const designs = [
    { name: "L-Shaped Kitchen", description: "Perfect for medium-sized spaces with optimized workflow" },
    { name: "U-Shaped Kitchen", description: "Maximum storage and counter space for larger kitchens" },
    { name: "Island Kitchen", description: "Contemporary design with additional prep and dining area" },
    { name: "Parallel Kitchen", description: "Efficient galley-style layout for narrow spaces" },
    { name: "Straight Kitchen", description: "Space-saving single-wall design for compact homes" }
  ];

  const features = [
    "Premium Hardware & Fittings",
    "Soft-Close Mechanisms",
    "Scratch-Resistant Surfaces",
    "Waterproof Materials",
    "Modular Chimney Integration",
    "Built-in Appliance Slots",
    "Pull-out Organizers",
    "Corner Storage Solutions",
    "LED Lighting Options",
    "10-Year Warranty"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <Button variant="ghost" onClick={() => setLocation("/services")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent to-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-5xl font-bold mb-6 text-primary">Modular Kitchens</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Transform your cooking space into a masterpiece of design and functionality. Our modular kitchens combine premium materials, smart storage solutions, and contemporary aesthetics.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From L-shaped to island kitchens, we create customized solutions that fit your space, style, and budget perfectly.
              </p>
              <Button size="lg" className="bg-primary text-white" onClick={() => setLocation("/consultation")}>
                Get Free Design Consultation
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={kitchenImage} alt="Modular Kitchen" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Designs */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Kitchen Layouts We Offer</h2>
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

      {/* Features */}
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Premium Features Included</h2>
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

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
              <p className="text-muted-foreground text-sm">Meet our designer and share your vision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold text-lg mb-2">3D Design</h3>
              <p className="text-muted-foreground text-sm">Get personalized 3D designs and quote</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold text-lg mb-2">Production</h3>
              <p className="text-muted-foreground text-sm">Your kitchen is manufactured to perfection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-bold text-lg mb-2">Installation</h3>
              <p className="text-muted-foreground text-sm">Expert installation in 45 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-primary">Ready for Your Dream Kitchen?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free consultation and get personalized 3D designs with instant pricing.
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
