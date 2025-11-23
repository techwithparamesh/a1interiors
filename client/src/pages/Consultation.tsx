import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, Award } from "lucide-react";

export default function Consultation() {
  const benefits = [
    {
      icon: Users,
      title: "Expert Designers",
      description: "Work with certified professionals with 10+ years of experience",
    },
    {
      icon: Clock,
      title: "Free Consultation",
      description: "No-obligation consultation to discuss your requirements and vision",
    },
    {
      icon: CheckCircle2,
      title: "Customized Solutions",
      description: "Tailored design plans that fit your style, space, and budget",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "10-year warranty on all materials and workmanship",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Book Consultation",
      description: "Fill out the form and our team will contact you within 24 hours",
    },
    {
      step: "02",
      title: "Design Discussion",
      description: "Meet with our designer to discuss your vision, requirements, and budget",
    },
    {
      step: "03",
      title: "Design Proposal",
      description: "Receive detailed 3D designs, material selection, and project timeline",
    },
    {
      step: "04",
      title: "Execution",
      description: "Our team brings your dream space to life with precision and care",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">Get Started</Badge>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Book Your Free Consultation
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Take the first step toward your dream home. Schedule a complimentary consultation with our expert interior designers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our simple 4-step process ensures a smooth journey from consultation to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
