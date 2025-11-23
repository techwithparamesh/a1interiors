import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  onAddToCart?: () => void;
  onViewDetails?: () => void;
}

export default function ProductCard({
  imageSrc,
  name,
  category,
  price,
  originalPrice,
  badge,
  onAddToCart,
  onViewDetails,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card
      className="group overflow-hidden border-card-border hover-elevate cursor-pointer"
      onClick={onViewDetails}
      data-testid={`card-product-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-accent">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {badge}
          </Badge>
        )}
        {discount > 0 && (
          <Badge variant="destructive" className="absolute top-3 right-3">
            {discount}% OFF
          </Badge>
        )}
        <button
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all ${
            isFavorite
              ? "bg-primary text-primary-foreground"
              : "bg-white/80 text-foreground hover:bg-white"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
            console.log(isFavorite ? 'Removed from favorites' : 'Added to favorites');
          }}
          data-testid={`button-favorite-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-heading font-semibold text-lg mb-3 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="font-heading font-bold text-2xl text-foreground">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <Button
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.();
          }}
          data-testid={`button-add-to-cart-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
