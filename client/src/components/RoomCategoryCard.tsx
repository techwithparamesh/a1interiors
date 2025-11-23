import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface RoomCategoryCardProps {
  imageSrc: string;
  title: string;
  projectCount: number;
  onClick?: () => void;
}

export default function RoomCategoryCard({
  imageSrc,
  title,
  projectCount,
  onClick,
}: RoomCategoryCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden border-card-border hover-elevate active-elevate-2 transition-transform duration-300"
      onClick={onClick}
      data-testid={`card-room-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading font-semibold text-2xl text-white mb-1">
            {title}
          </h3>
          <p className="text-white/80 text-sm">
            {projectCount}+ Design{projectCount !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between bg-card">
        <span className="text-sm font-medium text-foreground">View Designs</span>
        <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
      </div>
    </Card>
  );
}
