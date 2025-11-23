import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  location?: string;
  area?: string;
}

export default function BeforeAfterCard({
  beforeImage,
  afterImage,
  title,
  location,
  area,
}: BeforeAfterCardProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Card className="overflow-hidden border-card-border hover-elevate" data-testid={`card-before-after-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div
        className="relative aspect-[3/4] cursor-pointer group"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
        onClick={() => setShowAfter(!showAfter)}
      >
        <img
          src={beforeImage}
          alt={`${title} - Before`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showAfter ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={afterImage}
          alt={`${title} - After`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-black/70 text-white border-0">
            {showAfter ? "After" : "Before"}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
        <div className="flex gap-4 text-sm text-muted-foreground">
          {location && <span>{location}</span>}
          {area && <span>•</span>}
          {area && <span>{area}</span>}
        </div>
      </div>
    </Card>
  );
}
