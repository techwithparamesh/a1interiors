import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle2, ArrowLeft, Home as HomeIcon } from "lucide-react";

import livingRoomImage from "@assets/generated_images/Hero_living_room_interior_730dd1ef.png";
import kitchenImage from "@assets/generated_images/Kitchen_category_showcase_bf36e66d.png";
import bedroomImage from "@assets/generated_images/Bedroom_category_showcase_d4e96a70.png";

export default function CompleteHomeInteriors() {
  const [, setLocation] = useLocation();

  const services = [
    { name: "Modular Kitchens", description: "Custom kitchen designs with smart storage and premium finishes" },
    { name: "Living Rooms", description: "TV units, display cabinets, false ceilings, and complete makeovers" },
    { name: "Bedrooms", description: "Wardrobes, beds, study tables, and ambient lighting solutions" },
    { name: "Bathrooms", description: "Vanity units, premium tiles, and modern fixtures" },
    { name: "Dining Areas", description: "Crockery units, dining tables, and elegant lighting" },
    { name: "Foyer & Entrance", description: "Shoe racks, console tables, and welcoming designs" }
  ];

  const features = [
    "End-to-End Project Management",
    "Single Point of Contact",
    "Cohesive Design Throughout",
    "Quality Assured Materials",
    "45-Day Delivery Promise",
    "10-Year Warranty",
    "3D Visualization Before Start",
    "Professional Installation Team",
    "Post-Installation Support",
    "No Hidden Costs Guarantee"
  ];

  const process = [
    { step: "1", title: "Free Consultation", description: "Meet our designer at your home to understand your vision and requirements" },
    { step: "2", title: "3D Design & Quote", description: "Get detailed 3D designs for every room with transparent pricing" },
    { step: "3", title: "Material Selection", description: "Choose from premium materials, finishes, and colors for each space" },
    { step: "4", title: "Production Begins", description: "Your customized furniture is manufactured in our state-of-the-art factory" },
    { step: "5", title: "Installation", description: "Expert team installs everything perfectly in just 45 days" },
    { step: "6", title: "Final Handover", description: "Walk through your dream home and enjoy 10-year warranty coverage" }
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
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HomeIcon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-heading text-5xl font-bold mb-6 text-primary">Complete Home Interiors</h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
              Get end-to-end interior solutions for your entire home with cohesive designs that reflect your unique style. One team, one vision, one beautiful home.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From kitchen to bedroom, living room to bathroom—we handle everything so you can simply move in and enjoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={kitchenImage} alt="Kitchen Design" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg text-primary">Modular Kitchens</h3>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={livingRoomImage} alt="Living Room Design" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg text-primary">Living Spaces</h3>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={bedroomImage} alt="Bedroom Design" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg text-primary">Bedrooms</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-primary">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Why Choose Full Home Package?</h2>
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
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2 text-primary text-center">{item.title}</h3>
                <p className="text-muted-foreground text-center">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-8 text-center text-primary">Package Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white">
              <h3 className="font-bold text-2xl mb-4 text-primary">Cost Savings</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Save up to 20% compared to doing individual rooms separately. Our complete home packages offer better value with bundled pricing and reduced overhead costs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Volume discounts on materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Single installation team reduces labor costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Optimized project timeline saves money</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="font-bold text-2xl mb-4 text-primary">Design Cohesion</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                One designer works on your entire home, ensuring consistent style, color palette, and design language throughout all spaces for a harmonious living experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Unified color schemes and materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Smooth flow between different rooms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Professional, magazine-worthy results</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-primary">Ready to Transform Your Entire Home?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free consultation and get a comprehensive 3D design for your complete home with transparent pricing.
          </p>
          <Button size="lg" className="bg-primary text-white text-lg px-12 py-6" onClick={() => setLocation("/consultation")}>
            Book Free Home Consultation Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
