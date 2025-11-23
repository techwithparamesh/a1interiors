import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle2, Award, Users, Home as HomeIcon, Calendar, TrendingUp } from "lucide-react";

import teamImage from "@assets/generated_images/Designer_portfolio_scandinavian_0f0672da.png";
import livingRoomImage from "@assets/generated_images/Hero_living_room_interior_730dd1ef.png";
import kitchenImage from "@assets/generated_images/Kitchen_category_showcase_bf36e66d.png";
import bedroomImage from "@assets/generated_images/Bedroom_category_showcase_d4e96a70.png";
import bathroomImage from "@assets/generated_images/Bathroom_category_showcase_780b4e76.png";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent to-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">About A1 Interiors</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to A1 Interiors, where dreams meet design! We are passionate creators, visionary designers, and dedicated craftsmen committed to transforming your house into a sanctuary you'll love coming home to every single day.
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            With over 55,000 homes delivered and 600+ expert designers, we blend creativity, innovation, and the latest trends to deliver spaces that inspire, delight, and reflect your unique personality.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a vision to revolutionize home interiors in India, A1 Interiors has grown from a small startup to one of the nation's most trusted interior design brands. Our journey began with a simple belief: every home deserves to be beautiful, functional, and uniquely yours.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Today, we're proud to have transformed over 55,000 homes across 40 cities, bringing joy and elegance to families nationwide. Our team of 600+ in-house designers works tirelessly to understand your vision, lifestyle, and aspirations, creating personalized spaces that tell your story.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From modular kitchens to luxurious bedrooms, from contemporary living rooms to spa-like bathrooms, we handle every detail with precision and care. Our commitment to quality, transparency, and customer satisfaction has made us the preferred choice for homeowners who refuse to compromise on their dreams.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={livingRoomImage} alt="Beautiful Living Room Design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-primary">Why Choose A1 Interiors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-primary">Award-Winning Design</h3>
              </div>
              <p className="text-muted-foreground">
                Our talented designers have won multiple industry awards for innovation, creativity, and customer satisfaction. We bring world-class design expertise to your doorstep.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-primary">600+ Expert Designers</h3>
              </div>
              <p className="text-muted-foreground">
                Our in-house team of certified designers combines creativity with technical expertise to deliver personalized solutions that exceed expectations.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <HomeIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-primary">55,000+ Happy Homes</h3>
              </div>
              <p className="text-muted-foreground">
                We've transformed over 55,000 homes across India, earning the trust and loyalty of thousands of satisfied homeowners.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-primary">45-Day Delivery</h3>
              </div>
              <p className="text-muted-foreground">
                We value your time. Our streamlined process ensures your dream home is delivered in just 45 days, without compromising on quality.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-primary">10-Year Warranty</h3>
              </div>
              <p className="text-muted-foreground">
                We stand behind our work with a flat 10-year warranty on all woodwork, giving you complete peace of mind for a decade.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-primary">No Hidden Costs</h3>
              </div>
              <p className="text-muted-foreground">
                Transparency is our promise. What you see in your quote is what you pay—no surprises, no hidden charges, ever.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services Gallery */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-6 text-center text-primary">What We Create</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From concept to completion, we bring your vision to life with attention to every detail. Explore our specializations and see why thousands of homeowners trust us with their dream spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow">
              <img src={teamImage} alt="Designer Portfolio" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-primary">Meet Our Designers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our award-winning team of certified interior designers brings years of experience and fresh perspectives. They work closely with you to understand your lifestyle, preferences, and budget, creating personalized 3D designs that bring clarity to your vision.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow">
              <img src={kitchenImage} alt="Modern Kitchen" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-primary">Modular Kitchens</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the perfect blend of functionality, aesthetics, and innovation in our custom modular kitchen designs. From L-shaped to island kitchens, we create spaces where cooking becomes a joy and memories are made.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow">
              <img src={bedroomImage} alt="Bedroom Design" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-primary">Luxurious Bedrooms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform your bedroom into a personal sanctuary with our elegant wardrobe designs, ambient lighting, and sophisticated decor. We create restful retreats that reflect your personality and provide the comfort you deserve.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow">
              <img src={bathroomImage} alt="Bathroom Design" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-primary">Spa-Like Bathrooms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Indulge in luxury with our contemporary bathroom designs that combine premium fittings, elegant tiles, and smart storage solutions. Turn your daily routine into a spa-like experience.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow">
              <img src={livingRoomImage} alt="Living Room" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-primary">Inspired Living Spaces</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From cozy family corners to vibrant entertaining spaces, we design living rooms that become the heart of your home. Our designs balance comfort, style, and functionality seamlessly.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow">
              <img src={kitchenImage} alt="Complete Home Interiors" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-primary">Complete Home Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Why settle for less? Get a cohesive, beautifully designed home with our end-to-end interior solutions covering every room, from false ceilings to flooring, lighting to furnishings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-primary">Ready to Transform Your Home?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy homeowners who trusted A1 Interiors with their dream spaces. Book your free design consultation today and take the first step towards your perfect home!
          </p>
          <Button size="lg" className="bg-primary text-white text-lg px-12 py-6 hover:bg-primary/90" onClick={() => setLocation("/consultation")}>
            Book Your Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
