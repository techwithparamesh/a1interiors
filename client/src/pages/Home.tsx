import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import FloatingChat from "@/components/FloatingChat";
import WhyChooseUsCard from "@/components/WhyChooseUsCard";
import StatCard from "@/components/StatCard";
import DesignCard from "@/components/DesignCard";
import ProcessStep from "@/components/ProcessStep";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Building2, 
  Calendar, 
  IndianRupee, 
  Award, 
  Calculator, 
  Users, 
  Home as HomeIcon, 
  Store 
} from "lucide-react";

import livingRoomImage from '@assets/generated_images/Hero_living_room_interior_730dd1ef.png';
import bedroomImage from '@assets/generated_images/Bedroom_category_showcase_d4e96a70.png';
import kitchenImage from '@assets/generated_images/Kitchen_category_showcase_bf36e66d.png';
import bathroomImage from '@assets/generated_images/Bathroom_category_showcase_780b4e76.png';
import sofaImage from '@assets/generated_images/Product_modular_furniture_14e83928.png';
import diningImage from '@assets/generated_images/Dining_room_product_66c8c369.png';
import scandinavianImage from '@assets/generated_images/Designer_portfolio_scandinavian_0f0672da.png';

export default function Home() {
  const [, setLocation] = useLocation();
  const [activeStep, setActiveStep] = useState(1);
  const [currentProcessStep, setCurrentProcessStep] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  // SCREENSHOT: homelane-hero.png
  // Hero carousel slides configuration
  const heroSlides = [
    {
      id: 1,
      image: kitchenImage,
      title: "Interiors you'll love.",
      subtitle: "Without the stress!",
    },
    {
      id: 2,
      image: livingRoomImage,
      title: "Dream Kitchens.",
      subtitle: "Made affordable!",
    },
    {
      id: 3,
      image: bedroomImage,
      title: "Beautiful Bedrooms.",
      subtitle: "Designed for you!",
    },
  ];

  // SCREENSHOT: why-choose-us.png
  // Why Choose Us features data
  const whyChooseUsFeatures = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "40 Cities",
    },
    {
      icon: <Calendar className="w-12 h-12 text-primary" />,
      title: "Delivery in 45 days*",
    },
    {
      icon: <IndianRupee className="w-12 h-12 text-primary" />,
      title: "No Hidden Costs",
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Flat 10 Year Warranty",
    },
    {
      icon: <Calculator className="w-12 h-12 text-primary" />,
      title: "Easy EMIs",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "600+",
      subtitle: "In-House Designers",
    },
    {
      icon: <HomeIcon className="w-12 h-12 text-primary" />,
      title: "55000+",
      subtitle: "Homes Delivered",
    },
    {
      icon: <Store className="w-12 h-12 text-primary" />,
      title: "75 Studios",
    },
  ];

  const whyChooseUs = [
    "Delivery in 45 days*",
    "No Hidden Costs",
    "Flat 10 Year Warranty",
    "Easy EMIs",
  ];

  const stats = [
    { number: "600+", label: "In-House Designers" },
    { number: "55000+", label: "Homes Delivered" },
    { number: "75", label: "Studios" },
    { number: "40", label: "Cities" },
  ];

  const endToEndOfferings = [
    { imageSrc: "/living room/40 Neutral Sitting Room Ideas To Create a Calm, Cozy Space.jpg", title: "Neutral Calm Cozy Sitting Room" },
    { imageSrc: "/kitchen/kitchen1.jpg", title: "Pristine Pearl White U-Shaped Modular Kitchen" },
    { imageSrc: "/bedroom/bedroom.jpg", title: "Serene Sanctuary Master Bedroom" },
    { imageSrc: "/wardrobe/12 Wardrobe Design Bedroom Modern Luxury Ideas for___.jpg", title: "Modern Luxury Wardrobe Collection" },
  ];

  const kitchenDesigns = [
    { imageSrc: "/kitchen/kitchen1.jpg", title: "Pristine Pearl White U-Shaped Modular Kitchen", category: "L-Shaped" },
    { imageSrc: "/kitchen/kitchen2.jpg", title: "Warm Ecru Elegance L-Shaped Modular Kitchen", category: "L-Shaped" },
    { imageSrc: "/kitchen/kitchen3.jpg", title: "Gainsboro Grace U-Shaped Island Kitchen", category: "U-shaped Island" },
    { imageSrc: "/kitchen/kitchen4.jpg", title: "Coastal Breeze Straight Island Kitchen", category: "Straight Island" },
    { imageSrc: "/kitchen/kitchen5.jpg", title: "Zen Serenity L-Shaped Island Kitchen", category: "L-Shaped Island" },
    { imageSrc: "/kitchen/kitchen6.png", title: "Urban Contemporary U-Shaped Kitchen", category: "U-Shaped" },
    { imageSrc: "/kitchen/kitchen7.jpg", title: "Royal Mahogany Parallel Luxury Kitchen", category: "Parallel" },
    { imageSrc: "/kitchen/kitchen8.jpg", title: "Heritage Classic L-Shaped Kitchen", category: "L-Shaped" },
    { imageSrc: "/kitchen/kitchen9.jpg", title: "Compact Genius Straight Kitchen", category: "Straight" },
    { imageSrc: "/kitchen/kitchen10.png", title: "Opulent Platinum Premium Kitchen", category: "Island" },
  ];

  const livingRoomDesigns = [
    { imageSrc: "/living room/40 Neutral Sitting Room Ideas To Create a Calm, Cozy Space.jpg", title: "Neutral Calm Cozy Sitting Room" },
    { imageSrc: "/living room/58 Luxury Modern Homes for High-End Living.jpg", title: "Ultra-Luxury Modern High-End Living Room" },
    { imageSrc: "/living room/download (1).jpg", title: "Contemporary Elegance Living Space" },
    { imageSrc: "/living room/download (2).jpg", title: "Warm Modern Family Living Room" },
  ];

  const wardrobeDesigns = [
    { imageSrc: "/wardrobe/12 Wardrobe Design Bedroom Modern Luxury Ideas for___.jpg", title: "Modern Luxury Wardrobe Collection" },
    { imageSrc: "/wardrobe/Add Touch Of Elegance To Your Bedroom With This Wardrobe Collection.jpg", title: "Elegant Bedroom Wardrobe Collection" },
    { imageSrc: "/wardrobe/download (1).jpg", title: "Contemporary Sliding Door Wardrobe" },
    { imageSrc: "/wardrobe/download (2).jpg", title: "Walk-In Closet Wardrobe System" },
  ];

  const bathroomDesigns = [
    { imageSrc: "/bathroom/bathroom.webp", title: "Luxe Spa Master Bathroom" },
    { imageSrc: "/bathroom/bathroom1.webp", title: "Modern Minimalist Sanctuary" },
    { imageSrc: "/bathroom/bathroom2.jpg", title: "Classic Victorian Elegance" },
    { imageSrc: "/bathroom/bathroom3.jpg", title: "Contemporary Zen Retreat" },
    { imageSrc: "/bathroom/bathroom4.webp", title: "Industrial Chic Loft Bathroom" },
    { imageSrc: "/bathroom/bathroom5.avif", title: "Coastal Breezy Beach House Bath" },
    { imageSrc: "/bathroom/bathroom6.webp", title: "Glamorous Hollywood Regency Bath" },
    { imageSrc: "/bathroom/bathroom7.jpg", title: "Scandinavian Simplicity Bathroom" },
    { imageSrc: "/bathroom/bathroom8.jpg", title: "Serene Marble Luxury Bathroom" },
  ];

  const bedroomDesigns = [
    { imageSrc: "/bedroom/bedroom.jpg", title: "Luxe Contemporary Master Suite" },
    { imageSrc: "/bedroom/bedroom1.jpg", title: "Scandinavian Minimalist Haven" },
    { imageSrc: "/bedroom/bedroom2.webp", title: "Romantic French Provincial Bedroom" },
    { imageSrc: "/bedroom/bedroom3.jpg", title: "Modern Industrial Loft Bedroom" },
    { imageSrc: "/bedroom/bedroom4.webp", title: "Coastal Serenity Beach House Bedroom" },
    { imageSrc: "/bedroom/bedroom5.jpg", title: "Traditional Elegance Master Bedroom" },
    { imageSrc: "/bedroom/bedroom6.jpg", title: "Bohemian Eclectic Retreat" },
    { imageSrc: "/bedroom/bedroom7.png", title: "Zen Minimalist Sanctuary" },
    { imageSrc: "/bedroom/bedroom8.jpg", title: "Glamorous Hollywood Regency Suite" },
  ];

  const processSteps = [
    { title: "Meet Your Designer", description: "Share your ideas and floor plan to receive personalised 3D designs and an instant quote." },
    { title: "Book Your Order", description: "Pay 10% of the woodwork and home decor services to book your order." },
    { title: "Finalise Your Design", description: "Choose your materials, finishes and colours. Pay the next 10% of woodwork and home decor services to lock designs." },
    { title: "Send Designs to Factory", description: "Pay 30% of woodwork and 80% of home decor services to begin factory production." },
    { title: "Kick Off Dispatch", description: "Pay the remaining 50% of woodwork to dispatch your order post-production and begin installation." },
    { title: "Complete Installation & Handover", description: "Our team installs, completes final checks and hands over your home for a smooth move-in." },
  ];

  const testimonials = [
    {
      name: "P. Manikandan & Kruthhikka",
      location: "Subramaniya Nagar, Chennai",
      image: livingRoomImage,
      rating: 5,
      text: "Manikandan & Kruthhikka were impressed by the experienced A1 Interiors designers and how they were able to understand their vision for their home. A1 Interiors made sure everything was personalized to match the requirements and comfort of the family. Book your free consultation today.",
    },
    {
      name: "Anitha & Mahendiran",
      location: "Parappalayam, Coimbatore",
      image: bedroomImage,
      rating: 5,
      text: "A1 Interiors brought Anitha's dream home to life for her, just the way she envisioned it. After doing some research she chose A1 Interiors where she got the best price and the quality she was looking for. The A1 Interiors designer delivered all the requirements before time and with the highest quality possible.",
    },
    {
      name: "Mr Kanagasabai",
      location: "Jains Pebble Brook, Chennai",
      image: scandinavianImage,
      rating: 5,
      text: "Mr Kanagasabai and family gave A1 Interiors the responsibility to deliver a home that takes into account the needs of each and every family member, and A1 Interiors delivered. Their vision of a calm, not too flashy home was shown to them by experienced A1 Interiors designers in 3D using Spacecraft Pro, which helped them visualize how their home would look like. The top quality of interiors has garnered attention from friends and family as well. Choose A1 Interiors today.",
    },
  ];

  const partners = [
    { name: "BOSCH", logo: "https://cdn.brandfetch.io/idTOMfCNJ8/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Greenply", logo: "https://cdn.brandfetch.io/idY57NpsMl/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Crompton", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Crompton_Greaves_Logo.png" },
    { name: "Faber", logo: "https://images.seeklogo.com/logo-png/5/1/faber-logo-png_seeklogo-51433.png" },
    { name: "Jaquar", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Official_Jaquar_Group_Logo.png" },
    { name: "Marshall", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Marshall_logo.svg" },
    { name: "Philips", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg" },
    { name: "Hettich", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Logo_of_Hettich_%28company%29.svg" },
  ];

  const partnerSlides = [partners];

  const faqs = [
    {
      question: "How can I get started with A1 Interiors?",
      answer: "To get started with A1 Interiors, all you need to do is to fill up the form on our Home Page. Give us your name, email and mobile number and tell us where you're from. Our design experts will reach out to you to understand your requirements and schedule a free design consultation at your convenience.",
    },
    {
      question: "What is the timeline for completing a project with A1 Interiors?",
      answer: "A1 Interiors typically completes a standard home interior project in 45 days. We offer a 45 days delivery guarantee on end-to-end modular interiors. Additional days would be added if there are other home decor services included. Our project timeline includes design finalization, material procurement, manufacturing, and installation - all managed seamlessly by our expert team.",
    },
    {
      question: "How does the A1 Interiors interior design process work?",
      answer: "A1 Interiors offers a hassle-free design process with two consultation options: online or in-person at any of our Experience Centres. You'll meet with experienced designers who will understand your vision, see photorealistic 3D designs of your space, make real-time modifications, and get instant quotes. Once finalized, our manufacturing and installation teams take over to bring your dream home to life.",
    },
    {
      question: "Can I visit a A1 Interiors showroom to see your products and designs in person?",
      answer: "Yes! We have multiple Experience Centres across major cities in India where you can explore our wide range of modular products, finishes, and design styles. You can touch and feel the materials, see complete room setups, and consult with our in-house designers. Book an appointment online or walk in to our nearest showroom to experience A1 Interiors's quality firsthand.",
    },
    {
      question: "What are the end-to end-services offered by A1 Interiors?",
      answer: "A1 Interiors provides comprehensive interior solutions including modular kitchens, wardrobes, storage units, TV units, crockery units, study tables, kids bedroom furniture, pooja units, false ceiling, lighting, wall paint, wallpaper, bathroom fittings, foyer designs, space-saving furniture, and movable furniture. We handle everything from design to installation, ensuring a complete home makeover experience.",
    },
    {
      question: "Are your designs customisable?",
      answer: "Absolutely! Every A1 Interiors design is fully customizable to match your unique style, space requirements, and budget. Our designers work closely with you to understand your preferences and create personalized 3D designs. You can choose from various materials, finishes, colors, and configurations. We believe your home should reflect your personality, and our team ensures every detail is tailored to your vision.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Carousel - SCREENSHOT: homelane-hero.png */}
      <HeroCarousel slides={heroSlides} />

      {/* Add spacing for mobile consultation form */}
      <div className="lg:hidden h-8" />

      {/* Floating Chat Buttons */}
      <FloatingChat />

      {/* Why Choose Us Section - SCREENSHOT: why-choose-us.png */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center mb-8">
            Why Choose Us
          </h2>
          
          {/* Auto-Scrolling Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {/* Render items twice for seamless loop */}
              {[...whyChooseUsFeatures, ...whyChooseUsFeatures].map((feature, index) => (
                <WhyChooseUsCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  subtitle={feature.subtitle}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tagline and Video Section - SCREENSHOT: tagline-video.png */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tagline */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
              We Won't Cheat You. We'll Just Decorate Your Home.
            </h2>
            <p className="text-lg text-muted-foreground">
              Honest pricing, transparent process, and beautiful results every time.
            </p>
          </div>

          {/* Video Player */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: '16/9' }}>
              <video
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop"
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Optional: Video Caption/Description */}
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Watch how we transform homes with passion and precision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-end Offerings Section - SCREENSHOT: end-to-end-offerings.png */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-3xl">End-to-end offerings</h2>
          </div>

          {/* Grid without Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center sm:justify-items-start">
            {endToEndOfferings.slice(0, 4).map((design, index) => (
              <DesignCard
                key={index}
                imageSrc={design.imageSrc}
                title={design.title}
                onClick={() => console.log(`Design ${index + 1} clicked`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modular Kitchen Designs Section - SCREENSHOT: modular-kitchen-designs.png */}
      <section className="py-8 bg-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-3xl">Modular Kitchen Designs</h2>
          </div>

          {/* Grid without Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kitchenDesigns.slice(0, 4).map((design, index) => (
              <DesignCard
                key={index}
                imageSrc={design.imageSrc}
                title={design.title}
                category={design.category}
                onClick={() => console.log(`Kitchen ${index + 1} clicked`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Living Room Designs Section - SCREENSHOT: living-room-designs.png */}
      <section className="py-8 bg-background hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-3xl">Living Room Designs</h2>
          </div>

          {/* Grid without Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {livingRoomDesigns.slice(0, 4).map((design, index) => (
              <DesignCard
                key={index}
                imageSrc={design.imageSrc}
                title={design.title}
                onClick={() => console.log(`Living room ${index + 1} clicked`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wardrobe Designs Section - SCREENSHOT: wardrobe-designs.png */}
      <section className="py-8 bg-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-3xl">Wardrobe Designs</h2>
          </div>

          {/* Grid without Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wardrobeDesigns.slice(0, 4).map((design, index) => (
              <DesignCard
                key={index}
                imageSrc={design.imageSrc}
                title={design.title}
                category={design.category}
                onClick={() => console.log(`Wardrobe ${index + 1} clicked`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bedroom Designs Section */}
      <section className="py-8 bg-background hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-3xl">Bedroom Designs</h2>
          </div>

          {/* Grid without Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bedroomDesigns.slice(0, 4).map((design, index) => (
              <DesignCard
                key={index}
                imageSrc={design.imageSrc}
                title={design.title}
                onClick={() => console.log(`Bedroom ${index + 1} clicked`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get an Estimate Section - SCREENSHOT: get-estimate.png */}
      <section className="py-8 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <Button
              className="mx-auto mb-6 px-8 py-3 text-base font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              onClick={() => setLocation('/gallery')}
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Button>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Get an estimate for your <span className="text-primary">Home.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Calculate the cost of doing up your home interiors now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Home Interiors Card */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-12 h-12 text-primary"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <path d="M6 3v18M3 6h18M18 3v18M3 18h18" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Full Home Interiors</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Get the estimate price for your full home interiors.
                </p>
              </div>
              <Button 
                className="w-full" 
                onClick={() => setLocation("/consultation")}
              >
                Get Free Estimate
              </Button>
            </Card>

            {/* Kitchen Card */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-12 h-12 text-primary"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <rect x="7" y="7" width="3" height="9" />
                    <rect x="14" y="7" width="3" height="5" />
                    <line x1="3" y1="3" x2="3" y2="21" />
                    <line x1="7" y1="3" x2="7" y2="21" />
                    <line x1="14" y1="3" x2="14" y2="21" />
                    <line x1="21" y1="3" x2="21" y2="21" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Kitchen</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Get costing for your kitchen interiors.
                </p>
              </div>
              <Button 
                className="w-full" 
                onClick={() => setLocation("/consultation")}
              >
                Get Free Estimate
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="py-8 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary"></div>
          </div>
        </div>
      </div>

      {/* What is a Design Session Section - SCREENSHOT: design-session.png */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              What is a Design Session ?
            </h2>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-56 h-56 mb-6 flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Ceiling lamp */}
                  <line x1="150" y1="20" x2="150" y2="40" stroke="#FFB6B6" strokeWidth="3" />
                  <ellipse cx="150" cy="45" rx="25" ry="8" fill="#FFB6B6" />
                  
                  {/* Picture frames on wall */}
                  <rect x="60" y="50" width="35" height="30" fill="none" stroke="#FFB6B6" strokeWidth="2" rx="2" />
                  <rect x="100" y="45" width="40" height="35" fill="none" stroke="#FFB6B6" strokeWidth="2" rx="2" />
                  
                  {/* Table/desk */}
                  <rect x="180" y="130" width="60" height="8" fill="#E8E8E8" rx="2" />
                  <rect x="190" y="138" width="6" height="40" fill="#E8E8E8" />
                  <rect x="224" y="138" width="6" height="40" fill="#E8E8E8" />
                  
                  {/* Laptop on table */}
                  <rect x="185" y="120" width="30" height="20" fill="#333" rx="1" />
                  
                  {/* Designer (left person) */}
                  <circle cx="80" cy="140" r="18" fill="#FFF" stroke="#333" strokeWidth="2.5" />
                  <path d="M70 155 Q80 160 90 155" stroke="#333" strokeWidth="2.5" fill="none" />
                  <circle cx="75" cy="137" r="2" fill="#333" />
                  <circle cx="85" cy="137" r="2" fill="#333" />
                  <rect x="65" y="160" width="30" height="45" fill="#333" rx="4" />
                  <path d="M65 170 L50 200" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                  <path d="M95 170 L80 185" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="75" cy="188" r="5" fill="#333" />
                  
                  {/* Red circle badge */}
                  <circle cx="90" cy="175" r="8" fill="#FF4444" />
                  
                  {/* Client (right person) */}
                  <circle cx="145" cy="140" r="18" fill="#FFF" stroke="#333" strokeWidth="2.5" />
                  <path d="M135 155 Q145 160 155 155" stroke="#333" strokeWidth="2.5" fill="none" />
                  <circle cx="140" cy="137" r="2" fill="#333" />
                  <circle cx="150" cy="137" r="2" fill="#333" />
                  <rect x="130" y="160" width="30" height="45" fill="#333" rx="4" />
                  <path d="M130 170 L115 200" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                  <path d="M160 170 L165 185" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-base text-foreground">
                Step 1. Meet Your Designer
              </h3>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-56 h-56 mb-6 flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Cabinet/wardrobe background */}
                  <rect x="60" y="40" width="50" height="90" fill="#FFB6B6" rx="4" />
                  <line x1="85" y1="40" x2="85" y2="130" stroke="#FFF" strokeWidth="2" />
                  
                  {/* Kitchen counter */}
                  <rect x="120" y="90" width="100" height="60" fill="#FFB6B6" rx="4" />
                  <rect x="130" y="100" width="30" height="40" fill="#FFF" rx="2" />
                  <rect x="170" y="100" width="30" height="40" fill="#FFF" rx="2" />
                  <line x1="120" y1="110" x2="220" y2="110" stroke="#FFF" strokeWidth="1" />
                  
                  {/* Lamp post */}
                  <line x1="240" y1="40" x2="240" y2="80" stroke="#CCC" strokeWidth="3" />
                  <rect x="230" y="35" width="20" height="8" fill="#FFF" stroke="#CCC" strokeWidth="2" rx="2" />
                  
                  {/* Bag on floor */}
                  <path d="M130 165 Q140 175 150 165" fill="#FFB6B6" />
                  <rect x="132" y="160" width="16" height="20" fill="#FFB6B6" rx="2" />
                  
                  {/* Plant */}
                  <ellipse cx="200" cy="165" rx="12" ry="8" fill="#FFB6B6" />
                  <circle cx="195" cy="155" r="6" fill="#7CBA7C" />
                  <circle cx="202" cy="158" r="5" fill="#7CBA7C" />
                  <circle cx="198" cy="151" r="4" fill="#7CBA7C" />
                  
                  {/* Designer (left person) */}
                  <circle cx="100" cy="160" r="15" fill="#FFF" stroke="#333" strokeWidth="2.5" />
                  <circle cx="96" cy="158" r="2" fill="#333" />
                  <circle cx="104" cy="158" r="2" fill="#333" />
                  <path d="M93 165 Q100 168 107 165" stroke="#333" strokeWidth="2" fill="none" />
                  <rect x="88" y="178" width="24" height="40" fill="#333" rx="3" />
                  <path d="M88 185 L73 210" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                  <path d="M112 185 L105 200" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Client (right person) */}
                  <circle cx="165" cy="160" r="15" fill="#FFF" stroke="#333" strokeWidth="2.5" />
                  <circle cx="161" cy="158" r="2" fill="#333" />
                  <circle cx="169" cy="158" r="2" fill="#333" />
                  <path d="M158 165 Q165 168 172 165" stroke="#333" strokeWidth="2" fill="none" />
                  <rect x="153" y="178" width="24" height="40" fill="#333" rx="3" />
                  <path d="M153 185 L145 200" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                  <path d="M177 185 L192 210" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                  <path d="M177 185 L185 195" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-base text-foreground">
                Step 2. Walkthrough of A1 Interiors Studio
              </h3>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-56 h-56 mb-6 flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Laptop base */}
                  <rect x="30" y="190" width="240" height="12" fill="#333" rx="3" />
                  <ellipse cx="150" cy="196" rx="8" ry="3" fill="#666" />
                  
                  {/* Laptop screen */}
                  <rect x="50" y="80" width="200" height="115" fill="#E8E8E8" stroke="#333" strokeWidth="3" rx="6" />
                  <rect x="60" y="90" width="180" height="95" fill="#FFF" stroke="#999" strokeWidth="2" rx="3" />
                  
                  {/* 3D room visualization */}
                  <path d="M100 110 L100 160 L80 145 L80 95 Z" fill="#FFE5E5" stroke="#FF9999" strokeWidth="1.5" />
                  <path d="M100 110 L165 110 L165 160 L100 160 Z" fill="#FFF" stroke="#FF9999" strokeWidth="1.5" />
                  <path d="M165 110 L180 95 L180 145 L165 160 Z" fill="#FFD5D5" stroke="#FF9999" strokeWidth="1.5" />
                  
                  {/* Furniture in 3D room */}
                  <rect x="110" y="135" width="25" height="20" fill="#FFB6B6" />
                  <rect x="140" y="130" width="15" height="25" fill="#E8E8E8" />
                  
                  {/* Red dot indicator */}
                  <circle cx="230" cy="100" r="6" fill="#FF4444" />
                  <circle cx="230" cy="115" r="6" fill="#FF4444" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-base text-foreground">
                Step 3. Free Personalised 3D Designs on SpaceCraft Pro
              </h3>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-56 h-56 mb-6 flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Document/Quote frame */}
                  <rect x="60" y="50" width="180" height="200" fill="#FFF" stroke="#333" strokeWidth="3" rx="8" />
                  
                  {/* 3D perspective box illustration */}
                  <path d="M110 90 L150 70 L190 90 L190 140 L150 160 L110 140 Z" fill="none" stroke="#333" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M110 90 L110 140 L150 160 L150 110 Z" fill="#F5F5F5" stroke="#333" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M150 70 L150 110 L150 160" stroke="#333" strokeWidth="2.5" />
                  <path d="M150 110 L190 90" stroke="#333" strokeWidth="2.5" />
                  <path d="M150 110 L190 140" stroke="#333" strokeWidth="2.5" />
                  
                  {/* HomeLane badge */}
                  <rect x="195" y="65" width="30" height="20" fill="#FF4444" rx="3" />
                  <text x="203" y="78" fontSize="8" fill="#FFF" fontWeight="bold">HL</text>
                  
                  {/* Quote details - red boxes */}
                  <rect x="205" y="95" width="22" height="8" fill="#FF4444" rx="2" />
                  <rect x="205" y="108" width="22" height="8" fill="#FF4444" rx="2" />
                  <rect x="205" y="121" width="22" height="8" fill="#FF4444" rx="2" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-base text-foreground">
                Step 4. Get an Instant Quote
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="py-8 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary"></div>
          </div>
        </div>
      </div>

      {/* From Design to Move-In Section - SCREENSHOT: design-to-move-in.png */}
      <section className="py-12 bg-background">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              From Design to Move-In
            </h2>

            {/* Progress Line with Steps */}
            <div className="relative max-w-4xl mx-auto mb-10">
              {/* Connecting Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" style={{ left: '5%', right: '5%' }} />
              
              {/* Step Circles */}
              <div className="relative flex justify-between">
                {processSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProcessStep(index)}
                    className={`flex flex-col items-center z-10 ${
                      index === currentProcessStep ? '' : 'opacity-50 hover:opacity-75'
                    } transition-opacity`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                        index === currentProcessStep
                          ? 'bg-primary text-white'
                          : 'bg-border text-muted-foreground'
                      }`}
                    >
                      {index + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area with Navigation */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() => setCurrentProcessStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-background border-2 border-border hover:border-primary hover:bg-accent flex items-center justify-center transition-all"
                aria-label="Previous step"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => setCurrentProcessStep((prev) => (prev + 1) % processSteps.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-background border-2 border-border hover:border-primary hover:bg-accent flex items-center justify-center transition-all"
                aria-label="Next step"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Step Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[300px] px-4 md:px-12">
                {/* Left: Text Content */}
                <div className="text-left">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                    {processSteps[currentProcessStep].title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {processSteps[currentProcessStep].description}
                  </p>
                </div>

                {/* Right: Illustration */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-sm aspect-square">
                    {currentProcessStep === 0 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect x="60" y="60" width="60" height="80" fill="#FFE5E5" rx="4" />
                        <rect x="140" y="50" width="80" height="90" fill="#FFE5E5" rx="4" />
                        <rect x="240" y="60" width="60" height="80" fill="#FFE5E5" rx="4" />
                        <circle cx="90" cy="180" r="30" fill="#FFF" stroke="#333" strokeWidth="3" />
                        <circle cx="180" cy="180" r="30" fill="#FFF" stroke="#333" strokeWidth="3" />
                        <path d="M76 190 Q90 200 104 190" stroke="#333" strokeWidth="3" fill="none" />
                        <path d="M166 190 Q180 200 194 190" stroke="#333" strokeWidth="3" fill="none" />
                        <rect x="70" y="220" width="40" height="60" fill="#333" rx="4" />
                        <rect x="160" y="220" width="40" height="60" fill="#333" rx="4" />
                        <circle cx="120" cy="250" r="16" fill="#EF4444" />
                        <rect x="230" y="230" width="30" height="50" fill="#E0E0E0" rx="4" />
                        <circle cx="320" cy="180" r="10" fill="#FFE5E5" />
                      </svg>
                    )}
                    {currentProcessStep === 1 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect x="80" y="60" width="240" height="180" fill="#FFF" stroke="#333" strokeWidth="3" rx="8" />
                        <path d="M140 100 L180 140 L260 60" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <rect x="250" y="70" width="40" height="30" fill="#EF4444" rx="4" />
                        <text x="270" y="90" fontSize="16" fill="#FFF" fontWeight="bold" textAnchor="middle">HL</text>
                        <rect x="100" y="160" width="200" height="15" fill="#F3F4F6" rx="2" />
                        <rect x="100" y="185" width="200" height="15" fill="#F3F4F6" rx="2" />
                        <rect x="100" y="210" width="150" height="15" fill="#F3F4F6" rx="2" />
                      </svg>
                    )}
                    {currentProcessStep === 2 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect x="60" y="80" width="280" height="180" fill="#FFE5E5" rx="8" />
                        <rect x="80" y="100" width="240" height="140" fill="#FFF" stroke="#999" strokeWidth="2" />
                        <circle cx="200" cy="200" r="40" fill="#EF4444" opacity="0.3" />
                        <rect x="120" y="180" width="160" height="40" fill="#E5E7EB" />
                        <circle cx="280" cy="120" r="15" fill="#EF4444" />
                        <rect x="200" y="50" width="80" height="30" fill="#F3F4F6" stroke="#999" strokeWidth="1" />
                      </svg>
                    )}
                    {currentProcessStep === 3 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect x="60" y="80" width="280" height="140" fill="#E5E7EB" rx="8" stroke="#333" strokeWidth="3" />
                        <rect x="80" y="100" width="240" height="100" fill="#FFF" stroke="#999" strokeWidth="2" />
                        <rect x="120" y="120" width="80" height="60" fill="#FFE5E5" />
                        <rect x="220" y="130" width="60" height="50" fill="#FEE2E2" />
                        <rect x="40" y="220" width="320" height="16" fill="#333" rx="4" />
                        <circle cx="200" cy="228" r="4" fill="#EF4444" />
                        <rect x="140" y="50" width="120" height="20" fill="#F3F4F6" stroke="#999" strokeWidth="1" />
                      </svg>
                    )}
                    {currentProcessStep === 4 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect x="100" y="100" width="200" height="120" fill="#FFF" stroke="#333" strokeWidth="3" rx="4" />
                        <rect x="120" y="120" width="60" height="40" fill="#FFE5E5" />
                        <rect x="190" y="120" width="60" height="40" fill="#FFE5E5" />
                        <rect x="260" y="120" width="20" height="40" fill="#E5E7EB" />
                        <circle cx="180" cy="180" r="25" fill="#FFF" stroke="#333" strokeWidth="2" />
                        <circle cx="240" cy="180" r="25" fill="#FFF" stroke="#333" strokeWidth="2" />
                        <rect x="160" y="220" width="40" height="50" fill="#333" rx="2" />
                        <rect x="220" y="220" width="40" height="50" fill="#333" rx="2" />
                        <rect x="180" y="260" width="80" height="30" fill="#FFE5E5" rx="4" />
                      </svg>
                    )}
                    {currentProcessStep === 5 && (
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect x="80" y="100" width="100" height="140" fill="#FFE5E5" />
                        <rect x="200" y="120" width="80" height="120" fill="#FEE2E2" />
                        <rect x="100" y="180" width="60" height="60" fill="#FECACA" />
                        <circle cx="260" cy="170" r="25" fill="#FFF" stroke="#333" strokeWidth="2" />
                        <rect x="250" y="200" width="20" height="40" fill="#333" rx="2" />
                        <polygon points="240,230 260,220 280,230" fill="#333" />
                        <rect x="290" y="160" width="30" height="50" fill="#E5E7EB" />
                        <line x1="220" y1="100" x2="220" y2="240" stroke="#333" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button 
                size="lg"
                onClick={() => setLocation("/consultation")}
                className="px-12"
              >
                BOOK FREE DESIGN SESSION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="py-8 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary"></div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section - SCREENSHOT: testimonials.png */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
              What Our Happy Customers Say
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-background border-2 border-border hover:border-primary hover:bg-white flex items-center justify-center transition-all shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-background border-2 border-border hover:border-primary hover:bg-white flex items-center justify-center transition-all shadow-lg"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="p-0 overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-primary hover:shadow-xl cursor-pointer"
                >
                  {/* Photo */}
                  <div className="relative aspect-video bg-muted">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-heading font-bold text-lg mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    
                    <p className="text-sm text-foreground line-clamp-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all ${
                    index === currentTestimonial
                      ? 'w-8 h-2 bg-primary'
                      : 'w-2 h-2 bg-border hover:bg-muted-foreground'
                  } rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* End-to-end Interior Solutions Section - SCREENSHOT: interior_solutions.png */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
              End-to-end interior solutions
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {/* Modular Kitchen */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="20" y="15" width="60" height="8" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1.5" />
                  <rect x="25" y="30" width="50" height="45" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="30" y="35" width="18" height="15" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <rect x="52" y="35" width="18" height="15" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <rect x="30" y="55" width="18" height="15" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <rect x="52" y="55" width="18" height="15" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <circle cx="46" cy="42" r="2" fill="#EF4444" />
                  <circle cx="46" cy="62" r="2" fill="#EF4444" />
                  <path d="M20 15 L30 5 L70 5 L80 15" fill="#EF4444" stroke="#4B5563" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="text-sm font-medium">Modular Kitchen</p>
            </div>

            {/* Storage and Wardrobe */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="30" y="20" width="40" height="60" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="30" y1="50" x2="70" y2="50" stroke="#4B5563" strokeWidth="1.5" />
                  <circle cx="45" cy="35" r="1.5" fill="#4B5563" />
                  <circle cx="55" cy="35" r="1.5" fill="#4B5563" />
                  <circle cx="45" cy="65" r="1.5" fill="#4B5563" />
                  <circle cx="55" cy="65" r="1.5" fill="#4B5563" />
                  <rect x="55" y="22" width="12" height="26" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                  <rect x="58" y="25" width="6" height="5" fill="#FEE2E2" />
                  <rect x="58" y="32" width="6" height="5" fill="#FEE2E2" />
                  <rect x="58" y="39" width="6" height="5" fill="#FEE2E2" />
                </svg>
              </div>
              <p className="text-sm font-medium">Storage and wardrobe</p>
            </div>

            {/* Crockery Units */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="25" y="20" width="50" height="60" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="30" y="25" width="40" height="15" fill="none" stroke="#4B5563" strokeWidth="1.5" />
                  <rect x="30" y="45" width="40" height="15" fill="none" stroke="#4B5563" strokeWidth="1.5" />
                  <rect x="30" y="65" width="40" height="10" fill="none" stroke="#4B5563" strokeWidth="1.5" />
                  <circle cx="40" cy="32" r="3" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <circle cx="50" cy="32" r="3" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <circle cx="60" cy="32" r="3" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <rect x="35" y="50" width="8" height="8" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                  <rect x="46" y="50" width="8" height="8" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                  <rect x="57" y="50" width="8" height="8" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-sm font-medium">Crockery Units</p>
            </div>

            {/* Space Saving Furniture */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="25" y="35" width="50" height="30" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="30" y="40" width="40" height="5" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <rect x="20" y="30" width="60" height="6" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="28" y1="65" x2="28" y2="75" stroke="#4B5563" strokeWidth="2" />
                  <line x1="72" y1="65" x2="72" y2="75" stroke="#4B5563" strokeWidth="2" />
                  <rect x="35" y="20" width="30" height="8" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1.5" rx="1" />
                  <circle cx="50" cy="24" r="2" fill="#EF4444" />
                </svg>
              </div>
              <p className="text-sm font-medium">Space Saving Furniture</p>
            </div>

            {/* TV Units */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="20" y="25" width="60" height="35" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="25" y="30" width="50" height="25" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                  <rect x="30" y="65" width="40" height="12" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="35" y="68" width="12" height="6" fill="none" stroke="#4B5563" strokeWidth="1" />
                  <rect x="53" y="68" width="12" height="6" fill="none" stroke="#4B5563" strokeWidth="1" />
                  <circle cx="59" cy="71" r="1" fill="#4B5563" />
                </svg>
              </div>
              <p className="text-sm font-medium">TV Units</p>
            </div>

            {/* Study Tables */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="25" y="35" width="50" height="5" fill="#4B5563" />
                  <line x1="30" y1="40" x2="30" y2="70" stroke="#4B5563" strokeWidth="2" />
                  <line x1="70" y1="40" x2="70" y2="70" stroke="#4B5563" strokeWidth="2" />
                  <rect x="55" y="25" width="15" height="10" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1.5" />
                  <rect x="40" y="42" width="12" height="15" fill="#F9FAFB" stroke="#4B5563" strokeWidth="1.5" />
                  <rect x="42" y="45" width="8" height="3" fill="#E5E7EB" />
                  <rect x="42" y="50" width="8" height="3" fill="#E5E7EB" />
                  <rect x="20" y="50" width="15" height="20" fill="#F9FAFB" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="23" y1="60" x2="32" y2="60" stroke="#4B5563" strokeWidth="1" />
                  <circle cx="27.5" cy="55" r="1.5" fill="#4B5563" />
                </svg>
              </div>
              <p className="text-sm font-medium">Study Tables</p>
            </div>

            {/* False Ceiling */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="20" y="30" width="60" height="8" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="35" y="38" width="30" height="15" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="20" y1="34" x2="15" y2="40" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="30" y1="34" x2="25" y2="40" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="70" y1="34" x2="75" y2="40" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="80" y1="34" x2="85" y2="40" stroke="#4B5563" strokeWidth="1.5" />
                  <circle cx="50" cy="45" r="3" fill="#EF4444" />
                </svg>
              </div>
              <p className="text-sm font-medium">False Ceiling</p>
            </div>

            {/* Lights */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="25" r="8" fill="#FEF3C7" stroke="#4B5563" strokeWidth="2" />
                  <path d="M42 33 L50 50 L58 33 Z" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="50" y1="50" x2="50" y2="65" stroke="#4B5563" strokeWidth="2" />
                  <circle cx="50" cy="67" r="3" fill="#4B5563" />
                  <line x1="35" y1="25" x2="40" y2="25" stroke="#FCD34D" strokeWidth="2" />
                  <line x1="60" y1="25" x2="65" y2="25" stroke="#FCD34D" strokeWidth="2" />
                  <line x1="42" y1="15" x2="38" y2="11" stroke="#FCD34D" strokeWidth="2" />
                  <line x1="58" y1="15" x2="62" y2="11" stroke="#FCD34D" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-sm font-medium">Lights</p>
            </div>

            {/* Wallpaper */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="25" y="20" width="50" height="60" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <circle cx="35" cy="30" r="3" fill="#E5E7EB" />
                  <circle cx="45" cy="30" r="3" fill="#E5E7EB" />
                  <circle cx="55" cy="30" r="3" fill="#E5E7EB" />
                  <circle cx="65" cy="30" r="3" fill="#E5E7EB" />
                  <circle cx="35" cy="42" r="3" fill="#E5E7EB" />
                  <circle cx="45" cy="42" r="3" fill="#E5E7EB" />
                  <circle cx="55" cy="42" r="3" fill="#E5E7EB" />
                  <circle cx="65" cy="42" r="3" fill="#E5E7EB" />
                  <circle cx="35" cy="54" r="3" fill="#E5E7EB" />
                  <circle cx="45" cy="54" r="3" fill="#E5E7EB" />
                  <circle cx="55" cy="54" r="3" fill="#E5E7EB" />
                  <circle cx="65" cy="54" r="3" fill="#E5E7EB" />
                  <circle cx="35" cy="66" r="3" fill="#E5E7EB" />
                  <circle cx="45" cy="66" r="3" fill="#E5E7EB" />
                  <circle cx="55" cy="66" r="3" fill="#E5E7EB" />
                  <circle cx="65" cy="66" r="3" fill="#E5E7EB" />
                </svg>
              </div>
              <p className="text-sm font-medium">Wallpaper</p>
            </div>

            {/* Wall Paint */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="35" y="25" width="30" height="8" fill="#E5E7EB" stroke="#4B5563" strokeWidth="2" rx="4" />
                  <rect x="40" y="33" width="20" height="5" fill="#4B5563" />
                  <rect x="45" y="38" width="10" height="30" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <path d="M45 68 L42 75 L58 75 L55 68 Z" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1.5" />
                  <path d="M30 45 Q35 40 40 45 T50 45" stroke="#EF4444" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M55 50 Q60 45 65 50" stroke="#EF4444" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-sm font-medium">Wall Paint</p>
            </div>

            {/* Bathroom */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="25" y="30" width="8" height="45" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="60" y="35" width="15" height="40" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="62" y="38" width="11" height="15" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                  <circle cx="72" cy="60" r="2" fill="#4B5563" />
                  <path d="M35 45 Q40 40 45 45" stroke="#EF4444" strokeWidth="2" fill="none" />
                  <circle cx="29" cy="27" r="3" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-sm font-medium">Bathroom</p>
            </div>

            {/* Pooja Unit */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M30 30 L50 15 L70 30 L70 70 L30 70 Z" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <path d="M35 30 L50 20 L65 30" fill="none" stroke="#4B5563" strokeWidth="1.5" />
                  <rect x="40" y="40" width="20" height="25" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1.5" />
                  <circle cx="50" cy="52" r="4" fill="#FCD34D" stroke="#4B5563" strokeWidth="1" />
                  <path d="M45 25 L50 18 L55 25" fill="#EF4444" stroke="#4B5563" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-sm font-medium">Pooja Unit</p>
            </div>

            {/* Foyer Designs */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="20" y="35" width="25" height="40" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="55" y="25" width="25" height="50" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="25" y="40" width="15" height="10" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                  <rect x="60" y="30" width="15" height="20" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                  <rect x="25" y="55" width="15" height="15" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1" />
                  <circle cx="38" cy="62" r="1.5" fill="#4B5563" />
                </svg>
              </div>
              <p className="text-sm font-medium">Foyer Designs</p>
            </div>

            {/* Movable Furniture */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="30" y="45" width="40" height="25" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="35" y="30" width="30" height="16" fill="#FEE2E2" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="33" y1="70" x2="33" y2="75" stroke="#4B5563" strokeWidth="2" />
                  <line x1="67" y1="70" x2="67" y2="75" stroke="#4B5563" strokeWidth="2" />
                  <line x1="45" y1="70" x2="45" y2="75" stroke="#4B5563" strokeWidth="2" />
                  <line x1="55" y1="70" x2="55" y2="75" stroke="#4B5563" strokeWidth="2" />
                  <rect x="25" y="35" width="8" height="35" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="67" y="35" width="8" height="35" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-sm font-medium">Movable furniture</p>
            </div>

            {/* Kids Bedroom */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 mb-4 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="25" y="45" width="50" height="25" fill="#F9FAFB" stroke="#4B5563" strokeWidth="2" />
                  <rect x="30" y="50" width="40" height="5" fill="#FEE2E2" />
                  <line x1="28" y1="70" x2="28" y2="78" stroke="#4B5563" strokeWidth="2" />
                  <line x1="72" y1="70" x2="72" y2="78" stroke="#4B5563" strokeWidth="2" />
                  <rect x="70" y="30" width="8" height="40" fill="#EF4444" stroke="#4B5563" strokeWidth="2" />
                  <line x1="74" y1="35" x2="74" y2="65" stroke="#FEE2E2" strokeWidth="1" />
                  <line x1="72" y1="40" x2="76" y2="40" stroke="#FEE2E2" strokeWidth="1" />
                  <line x1="72" y1="45" x2="76" y2="45" stroke="#FEE2E2" strokeWidth="1" />
                  <line x1="72" y1="50" x2="76" y2="50" stroke="#FEE2E2" strokeWidth="1" />
                  <line x1="72" y1="55" x2="76" y2="55" stroke="#FEE2E2" strokeWidth="1" />
                  <line x1="72" y1="60" x2="76" y2="60" stroke="#FEE2E2" strokeWidth="1" />
                  <circle cx="50" cy="35" r="5" fill="#FCD34D" stroke="#4B5563" strokeWidth="1.5" />
                  <circle cx="45" cy="40" r="3" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-sm font-medium">Kids Bedroom</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-base px-12"
              onClick={() => setLocation("/consultation")}
            >
              BOOK FREE DESIGN SESSION
            </Button>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="py-8 bg-background">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary"></div>
          </div>
        </div>
      </div>

      {/* Trusted Partners Carousel - SCREENSHOTS: partners.png */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
              Our trusted partners
            </h2>
          </div>

          {/* Partners Infinite Scroll */}
          <div className="relative">
            <div className="flex gap-12 items-center animate-scroll">
              {/* Duplicate the partners array twice for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[200px] h-20 transition-all flex-shrink-0"
                >
                  {partner.logo !== "text" ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-16 max-w-full w-auto object-contain hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span className="text-xl md:text-2xl font-bold text-foreground">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-heading font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Warranty and Benefits Section - SCREENSHOT: warranty_benefits.png */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Flat 10 year warranty */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Shield */}
                  <path d="M50 10 L75 20 L75 45 Q75 70 50 90 Q25 70 25 45 L25 20 Z" fill="none" stroke="#EF4444" strokeWidth="3" />
                  {/* Layers */}
                  <path d="M40 35 L45 30 L50 35 L45 40 Z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                  <path d="M40 45 L45 40 L50 45 L45 50 Z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                  <path d="M40 55 L45 50 L50 55 L45 60 Z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                  <path d="M50 35 L55 30 L60 35 L55 40 Z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                  <path d="M50 45 L55 40 L60 45 L55 50 Z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                  <path d="M50 55 L55 50 L60 55 L55 60 Z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">
                Flat 10 year warranty
              </h3>
              <p className="text-sm text-muted-foreground">
                Choose interiors designed with superior quality material, leaving no room for defects.
              </p>
            </div>

            {/* 45-days delivery */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Calendar */}
                  <rect x="25" y="20" width="50" height="60" fill="#FFF" stroke="#4B5563" strokeWidth="2.5" rx="4" />
                  <rect x="25" y="20" width="50" height="15" fill="#E5E7EB" stroke="#4B5563" strokeWidth="2.5" rx="4" />
                  <circle cx="35" cy="15" r="2" fill="#4B5563" />
                  <circle cx="65" cy="15" r="2" fill="#4B5563" />
                  {/* 45 */}
                  <text x="42" y="55" fontSize="20" fontWeight="bold" fill="#EF4444" fontFamily="Arial">45</text>
                  {/* Grid dots */}
                  <circle cx="35" cy="42" r="1.5" fill="#D1D5DB" />
                  <circle cx="42" cy="42" r="1.5" fill="#D1D5DB" />
                  <circle cx="58" cy="42" r="1.5" fill="#D1D5DB" />
                  <circle cx="65" cy="42" r="1.5" fill="#D1D5DB" />
                  <circle cx="35" cy="67" r="1.5" fill="#D1D5DB" />
                  <circle cx="42" cy="67" r="1.5" fill="#D1D5DB" />
                  <circle cx="58" cy="67" r="1.5" fill="#D1D5DB" />
                  <circle cx="65" cy="67" r="1.5" fill="#D1D5DB" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">
                45-days delivery*
              </h3>
              <p className="text-sm text-muted-foreground">
                Get beautiful interiors for your new home in just 45 days. That's our delivery guarantee.
              </p>
            </div>

            {/* 600+ design experts */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Award badge */}
                  <circle cx="50" cy="45" r="22" fill="none" stroke="#EF4444" strokeWidth="3" />
                  <circle cx="50" cy="45" r="18" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                  {/* Star */}
                  <path d="M50 35 L52 41 L58 41 L53 45 L55 51 L50 47 L45 51 L47 45 L42 41 L48 41 Z" fill="#EF4444" />
                  {/* Ribbon */}
                  <path d="M40 60 L45 55 L50 65 L45 70 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" />
                  <path d="M60 60 L55 55 L50 65 L55 70 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" />
                  {/* Scalloped edge */}
                  <path d="M30 45 Q28 50 30 52" stroke="#EF4444" strokeWidth="2" fill="none" />
                  <path d="M30 38 Q28 40 30 42" stroke="#EF4444" strokeWidth="2" fill="none" />
                  <path d="M70 45 Q72 50 70 52" stroke="#EF4444" strokeWidth="2" fill="none" />
                  <path d="M70 38 Q72 40 70 42" stroke="#EF4444" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">
                600+ design experts
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore design ideas and co-create your dream home with our experienced designers
              </p>
            </div>

            {/* Post-installation service */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Wrench/Tool */}
                  <circle cx="50" cy="50" r="28" fill="none" stroke="#4B5563" strokeWidth="2.5" />
                  <path d="M35 35 L65 65" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Wrench handle */}
                  <rect x="28" y="28" width="12" height="12" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" rx="2" transform="rotate(45 34 34)" />
                  <path d="M60 60 L70 70" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
                  {/* Check mark */}
                  <path d="M55 42 L60 48 L72 32" stroke="#EF4444" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">
                Post-installation service
              </h3>
              <p className="text-sm text-muted-foreground">
                Complete your design journey and get unwavering support from our dedicated care team.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-base px-12"
              onClick={() => setLocation("/consultation")}
            >
              BOOK FREE DESIGN SESSION
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
