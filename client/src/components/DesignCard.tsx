import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DesignCardProps {
  imageSrc: string;
  title: string;
  category?: string;
  onClick?: () => void;
}

export default function DesignCard({
  imageSrc,
  title,
  category,
  onClick,
}: DesignCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden border-card-border hover-elevate active-elevate-2 flex-shrink-0"
      style={{ width: "280px" }}
      onClick={onClick}
      data-testid={`card-design-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        {category && (
          <Badge variant="secondary" className="mb-2 text-xs">
            {category}
          </Badge>
        )}
        <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
      </div>
    </Card>
  );
}
