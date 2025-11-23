import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function Hero({
  imageSrc,
  title,
  subtitle,
  primaryCTA = "Book Free Consultation",
  secondaryCTA = "Explore Designs",
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-base px-8"
              onClick={onPrimaryClick}
              data-testid="button-hero-primary"
            >
              {primaryCTA}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={onSecondaryClick}
              data-testid="button-hero-secondary"
            >
              {secondaryCTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
