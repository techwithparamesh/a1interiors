import { Switch, Route } from "wouter";
import About from "@/pages/About";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Products from "@/pages/Products";
import Consultation from "@/pages/Consultation";
import Contact from "@/pages/Contact";
import PriceCalculator from "@/pages/PriceCalculator";
import Services from "@/pages/Services";
import ModularKitchens from "@/pages/services/ModularKitchens";
import BedroomInteriors from "@/pages/services/BedroomInteriors";
import LivingRoomDesign from "@/pages/services/LivingRoomDesign";
import BathroomSolutions from "@/pages/services/BathroomSolutions";
import WardrobeDesigns from "@/pages/services/WardrobeDesigns";
import CompleteHomeInteriors from "@/pages/services/CompleteHomeInteriors";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/products" component={Products} />
      <Route path="/consultation" component={Consultation} />
      <Route path="/contact" component={Contact} />
      <Route path="/calculators" component={PriceCalculator} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/modular-kitchens" component={ModularKitchens} />
      <Route path="/services/bedroom-interiors" component={BedroomInteriors} />
      <Route path="/services/living-room-design" component={LivingRoomDesign} />
      <Route path="/services/bathroom-solutions" component={BathroomSolutions} />
      <Route path="/services/wardrobe-designs" component={WardrobeDesigns} />
      <Route path="/services/complete-home-interiors" component={CompleteHomeInteriors} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
