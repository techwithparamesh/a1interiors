import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Home, Ruler, Package, IndianRupee } from "lucide-react";
import { useState } from "react";

export default function PriceCalculator() {
  const [formData, setFormData] = useState({
    propertyType: "",
    bhkType: "",
    carpetArea: "",
    services: [] as string[],
    name: "",
    email: "",
    phone: "",
  });

  const [showEstimate, setShowEstimate] = useState(false);
  const [touched, setTouched] = useState({
    propertyType: false,
    bhkType: false,
    carpetArea: false,
    services: false,
    name: false,
    email: false,
    phone: false,
  });

  const propertyTypes = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa/Independent House" },
    { value: "duplex", label: "Duplex" },
    { value: "penthouse", label: "Penthouse" },
  ];

  const bhkTypes = [
    { value: "1bhk", label: "1 BHK" },
    { value: "2bhk", label: "2 BHK" },
    { value: "3bhk", label: "3 BHK" },
    { value: "4bhk", label: "4 BHK" },
    { value: "5bhk", label: "5+ BHK" },
  ];

  const serviceOptions = [
    { id: "modular-kitchen", label: "Modular Kitchen", icon: "🍳" },
    { id: "bedroom", label: "Bedroom Interiors", icon: "🛏️" },
    { id: "living-room", label: "Living Room Design", icon: "🛋️" },
    { id: "bathroom", label: "Bathroom Solutions", icon: "🚿" },
    { id: "wardrobe", label: "Wardrobe Design", icon: "👔" },
    { id: "false-ceiling", label: "False Ceiling", icon: "💡" },
    { id: "flooring", label: "Flooring", icon: "🏗️" },
    { id: "painting", label: "Painting", icon: "🎨" },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const calculateEstimate = () => {
    // Mark all fields as touched
    setTouched({
      propertyType: true,
      bhkType: true,
      carpetArea: true,
      services: true,
      name: true,
      email: true,
      phone: true,
    });

    // Validate all required fields
    if (!formData.propertyType) {
      return;
    }
    
    if (!formData.bhkType) {
      return;
    }
    
    if (!formData.carpetArea || parseInt(formData.carpetArea) <= 0) {
      return;
    }
    
    if (formData.services.length === 0) {
      return;
    }
    
    if (!formData.name.trim()) {
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return;
    }
    
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      return;
    }
    
    setShowEstimate(true);
    // Scroll to estimate
    setTimeout(() => {
      document.getElementById('estimate-result')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const getEstimateRange = () => {
    const area = parseInt(formData.carpetArea) || 0;
    const serviceCount = formData.services.length;
    
    // Basic calculation: ₹1500-2500 per sq ft depending on services
    const minPrice = area * 1500 * (serviceCount / 8);
    const maxPrice = area * 2500 * (serviceCount / 8);

    return {
      min: Math.round(minPrice / 1000) * 1000,
      max: Math.round(maxPrice / 1000) * 1000,
    };
  };

  const estimate = showEstimate ? getEstimateRange() : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">Free Tool</Badge>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Interior Design Price Calculator
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get an instant estimate for your interior design project. Fill in the details below to see the approximate cost range.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Instant Estimate
              </h3>
              <p className="text-sm text-muted-foreground">
                Get price ranges in seconds
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Customizable
              </h3>
              <p className="text-sm text-muted-foreground">
                Select only what you need
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Transparent Pricing
              </h3>
              <p className="text-sm text-muted-foreground">
                No hidden costs or surprises
              </p>
            </Card>
          </div>

          <Card className="p-8">
            <div className="space-y-8">
              {/* Property Type */}
              <div>
                <Label className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-primary" />
                  Property Type *
                </Label>
                <Select 
                  value={formData.propertyType} 
                  onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                >
                  <SelectTrigger className={touched.propertyType && !formData.propertyType ? "border-red-500 border-2" : ""}>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {touched.propertyType && !formData.propertyType && (
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                )}
              </div>

              {/* BHK Type */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  BHK Configuration *
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {bhkTypes.map((bhk) => (
                    <button
                      key={bhk.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, bhkType: bhk.value })}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.bhkType === bhk.value
                          ? "border-primary bg-primary/10 text-primary font-semibold"
                          : touched.bhkType && !formData.bhkType
                          ? "border-red-500"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {bhk.label}
                    </button>
                  ))}
                </div>
                {touched.bhkType && !formData.bhkType && (
                  <p className="text-red-500 text-sm mt-2">This field is required</p>
                )}
              </div>

              {/* Carpet Area */}
              <div>
                <Label className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-primary" />
                  Carpet Area (sq ft) *
                </Label>
                <Input
                  type="number"
                  placeholder="Enter carpet area in sq ft"
                  value={formData.carpetArea}
                  onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
                  className={`text-lg ${touched.carpetArea && (!formData.carpetArea || parseInt(formData.carpetArea) <= 0) ? "border-red-500 border-2" : ""}`}
                />
                {touched.carpetArea && (!formData.carpetArea || parseInt(formData.carpetArea) <= 0) && (
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  Typical: 1 BHK (400-600 sq ft), 2 BHK (600-900 sq ft), 3 BHK (900-1400 sq ft)
                </p>
              </div>

              {/* Services Selection */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  Select Services Required *
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <div
                      key={service.id}
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.services.includes(service.id)
                          ? "border-primary bg-primary/5"
                          : touched.services && formData.services.length === 0
                          ? "border-red-500"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <Checkbox
                        checked={formData.services.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <span className="text-2xl">{service.icon}</span>
                      <Label className="flex-1 cursor-pointer">{service.label}</Label>
                    </div>
                  ))}
                </div>
                {touched.services && formData.services.length === 0 && (
                  <p className="text-red-500 text-sm mt-2">Please select at least one service</p>
                )}
              </div>

              {/* Contact Details */}
              <div className="border-t pt-6">
                <Label className="text-lg font-semibold mb-4 block">
                  Your Contact Details *
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="mb-2 block">Name *</Label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={touched.name && !formData.name.trim() ? "border-red-500 border-2" : ""}
                    />
                    {touched.name && !formData.name.trim() && (
                      <p className="text-red-500 text-sm mt-1">This field is required</p>
                    )}
                  </div>
                  <div>
                    <Label className="mb-2 block">Email *</Label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={touched.email && (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) ? "border-red-500 border-2" : ""}
                    />
                    {touched.email && (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) && (
                      <p className="text-red-500 text-sm mt-1">Valid email is required</p>
                    )}
                  </div>
                  <div>
                    <Label className="mb-2 block">Phone *</Label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={touched.phone && (!formData.phone.trim() || !/^\+?[\d\s-]{10,}$/.test(formData.phone)) ? "border-red-500 border-2" : ""}
                    />
                    {touched.phone && (!formData.phone.trim() || !/^\+?[\d\s-]{10,}$/.test(formData.phone)) && (
                      <p className="text-red-500 text-sm mt-1">Valid phone is required</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="text-center">
                <Button size="lg" onClick={calculateEstimate} className="px-12">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Estimate
                </Button>
              </div>
            </div>
          </Card>

          {/* Estimate Result */}
          {showEstimate && estimate && (
            <Card id="estimate-result" className="mt-8 p-8 bg-primary/5 border-2 border-primary">
              <div className="text-center">
                <Badge className="mb-4">Estimated Cost Range</Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
                  ₹{estimate.min.toLocaleString()} - ₹{estimate.max.toLocaleString()}
                </h2>
                <p className="text-muted-foreground mb-6">
                  Based on {formData.carpetArea} sq ft {formData.bhkType.toUpperCase()} with {formData.services.length} services
                </p>

                <div className="bg-background rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    {formData.services.map((serviceId) => {
                      const service = serviceOptions.find(s => s.id === serviceId);
                      return (
                        <div key={serviceId} className="flex items-center gap-2">
                          <span className="text-xl">{service?.icon}</span>
                          <span>{service?.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p>✓ Material cost included</p>
                  <p>✓ Labor and installation charges</p>
                  <p>✓ 10-year warranty on materials</p>
                  <p>✓ 45-day delivery guarantee</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => window.location.href = '/consultation'}>
                    Book Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setShowEstimate(false)}>
                    Recalculate
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-6">
                  * This is an approximate estimate. Final pricing may vary based on material selection, 
                  design complexity, and site conditions. Book a free consultation for an accurate quote.
                </p>
              </div>
            </Card>
          )}

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Why Choose Our Service?
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Premium quality materials from trusted brands</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Experienced designers and skilled craftsmen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Transparent pricing with no hidden costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>On-time delivery with 45-day guarantee</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">
                How It Works
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Fill in your project details in the calculator</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>Get instant estimated price range</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Book a free consultation with our designer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>Receive detailed quote and 3D designs</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <FloatingChat />
      <Footer />
    </div>
  );
}
