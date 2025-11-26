import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import DesignCard from "@/components/DesignCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "wouter";

import sofaImage from '@assets/generated_images/Product_modular_furniture_14e83928.png';
import diningImage from '@assets/generated_images/Dining_room_product_66c8c369.png';
import kitchenImage from '@assets/generated_images/Kitchen_category_showcase_bf36e66d.png';
import bedroomImage from '@assets/generated_images/Bedroom_category_showcase_d4e96a70.png';

export default function Products() {
  const [, setLocation] = useLocation();

  const products = {
    all: [
      { imageSrc: sofaImage, title: "Space Saving Furniture: Sofa-Cum-Bed" },
      { imageSrc: diningImage, title: "Contemporary Dining Set with 6 Chairs" },
      { imageSrc: kitchenImage, title: "Modular Kitchen - L Shape" },
      { imageSrc: bedroomImage, title: "Modular Wardrobe Design" },
      { imageSrc: sofaImage, title: "Modern L-Shaped Sectional Sofa" },
      { imageSrc: diningImage, title: "Marble Top Dining Table Set" },
      { imageSrc: kitchenImage, title: "Island Kitchen Design" },
      { imageSrc: bedroomImage, title: "Walk-in Wardrobe Design" },
    ],
    furniture: [
      { imageSrc: sofaImage, title: "Space Saving Furniture: Sofa-Cum-Bed" },
      { imageSrc: sofaImage, title: "Modern L-Shaped Sectional Sofa" },
      { imageSrc: sofaImage, title: "Premium Fabric Recliner Sofa" },
      { imageSrc: diningImage, title: "Contemporary Dining Set with 6 Chairs" },
      { imageSrc: diningImage, title: "Marble Top Dining Table Set" },
      { imageSrc: diningImage, title: "Wooden Dining Set for 4" },
    ],
    kitchen: [
      { imageSrc: kitchenImage, title: "Modular Kitchen - L Shape" },
      { imageSrc: kitchenImage, title: "Modular Kitchen - U Shape" },
      { imageSrc: kitchenImage, title: "Island Kitchen Design" },
      { imageSrc: kitchenImage, title: "Straight Modular Kitchen" },
    ],
    wardrobe: [
      { imageSrc: bedroomImage, title: "Modular Wardrobe Design" },
      { imageSrc: bedroomImage, title: "Sliding Door Wardrobe Design" },
      { imageSrc: bedroomImage, title: "Walk-in Wardrobe Design" },
      { imageSrc: bedroomImage, title: "Floor-to-Ceiling Wardrobe Design" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            End-to-end Interior Solutions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore our comprehensive range of modular furniture, kitchen designs, wardrobes, and space-saving solutions for your home.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="all" data-testid="tab-all">All Products</TabsTrigger>
                <TabsTrigger value="furniture" data-testid="tab-furniture">Furniture</TabsTrigger>
                <TabsTrigger value="kitchen" data-testid="tab-kitchen">Kitchen</TabsTrigger>
                <TabsTrigger value="wardrobe" data-testid="tab-wardrobe">Wardrobe</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.all.map((product, index) => (
                  <DesignCard
                    key={index}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    onClick={() => console.log(`Product ${index + 1} clicked`)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="furniture">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.furniture.map((product, index) => (
                  <DesignCard
                    key={index}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    onClick={() => console.log(`Furniture ${index + 1} clicked`)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="kitchen">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.kitchen.map((product, index) => (
                  <DesignCard
                    key={index}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    onClick={() => console.log(`Kitchen ${index + 1} clicked`)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wardrobe">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.wardrobe.map((product, index) => (
                  <DesignCard
                    key={index}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    onClick={() => console.log(`Wardrobe ${index + 1} clicked`)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => setLocation("/consultation")}
              data-testid="button-products-cta"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      <FloatingChat />
      <Footer />
    </div>
  );
}
