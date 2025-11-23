import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesignerConsultationCard from "./DesignerConsultationCard";

// SCREENSHOT: homelane-hero.png
// This hero carousel matches the HomeLane design with image carousel and consultation form

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const defaultSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/api/placeholder/1920/800",
    title: "Interiors you'll love.",
    subtitle: "Without the stress!",
  },
  {
    id: 2,
    image: "/api/placeholder/1920/800",
    title: "Dream Kitchens.",
    subtitle: "Made affordable!",
  },
  {
    id: 3,
    image: "/api/placeholder/1920/800",
    title: "Beautiful Bedrooms.",
    subtitle: "Designed for you!",
  },
];

interface HeroCarouselProps {
  slides?: HeroSlide[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({ 
  slides = defaultSlides,
  autoPlayInterval = 5000 
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-background">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundColor: '#4a3228' // Fallback brown color
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between gap-8">
          {/* Left Side - Hero Text */}
          <div className="flex-1 max-w-xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Right Side - Consultation Form Card */}
          <div className="hidden lg:block">
            <DesignerConsultationCard />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Consultation Form - Below Hero */}
      <div className="lg:hidden absolute -bottom-40 left-0 right-0 px-4">
        <div className="max-w-md mx-auto">
          <DesignerConsultationCard />
        </div>
      </div>
    </section>
  );
}
