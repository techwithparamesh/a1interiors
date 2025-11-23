import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle2, ArrowLeft } from "lucide-react";

import bedroomImage from "@assets/generated_images/Bedroom_category_showcase_d4e96a70.png";

export default function WardrobeDesigns() {
  const [, setLocation] = useLocation();

  const designs = [
    { name: "Sliding Wardrobes", description: "Space-saving designs with smooth sliding mechanisms" },
    { name: "Walk-in Closets", description: "Luxurious walk-in wardrobe solutions for spacious bedrooms" },
    { name: "Hinged Wardrobes", description: "Classic designs with full-access swing doors" },
    { name: "Loft Wardrobes", description: "Maximize vertical space with overhead storage" },
    { name: "Corner Wardrobes", description: "Optimize corner spaces efficiently" }
  ];

  const features = [
    "Soft-Close Mechanisms",
    "Premium Laminates & Finishes",
    "Customized Compartments",
    "Drawer Organizers",
    "Hanging Rods & Shelves",
    "Mirror Panels",
    "LED Lighting Options",
    "Shoe Racks & Accessories",
    "Anti-Scratch Surface",
    "10-Year Warranty"
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
              <h1 className="font-heading text-5xl font-bold mb-6 text-primary">Wardrobe Designs</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Maximize your storage with custom wardrobe solutions that are tailored to your space and organizational needs. Our wardrobes combine functionality with elegant design.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From sliding wardrobes to walk-in closets, we create storage solutions that keep your belongings organized and accessible while enhancing your bedroom aesthetics.
              </p>
              <Button size="lg" className="bg-primary text-white" onClick={() => setLocation("/consultation")}>
                Get Free Design Consultation
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={bedroomImage} alt="Wardrobe Design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Wardrobe Types We Offer</h2>
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

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Customization Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-bold text-2xl mb-4 text-primary">Interior Layout</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Multiple hanging rods for shirts, pants, and dresses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Adjustable shelves for folded clothes and accessories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Deep drawers with soft-close mechanisms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Dedicated shoe racks and tie/belt organizers</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-2xl mb-4 text-primary">Finish Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Premium acrylic finishes in multiple colors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Wood grain laminates for natural look</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Glass and mirror panel options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Matte, glossy, or textured finishes available</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-primary">Design Your Perfect Wardrobe</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation and get personalized wardrobe designs with instant pricing.
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
