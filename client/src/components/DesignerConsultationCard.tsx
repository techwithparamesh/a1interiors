import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function DesignerConsultationCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }

    // Save submitted data for display
    setSubmittedData({
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    });

    // Show success state
    setIsSubmitted(true);
    
    // Note: Form data is captured and displayed to user
    // Admin will need to manually check submissions or integrate with a backend email service
  };

  return (
    <Card className="bg-white p-6 shadow-2xl w-full max-w-md">
      {isSubmitted ? (
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ✨ Thank you, {submittedData.name}! ✨
            </h3>
            <p className="text-gray-600 mb-4">Your booking request has been received successfully.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-left space-y-3">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Name:</span> {submittedData.name}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Email:</span> {submittedData.email}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Mobile:</span> {submittedData.phone}
            </p>
          </div>

          <div className="bg-primary/10 rounded-lg p-4">
            <p className="text-sm text-gray-800">
              🏡 Our expert designer will contact you within <span className="font-bold">24 hours</span> to schedule your FREE 3D design session!
            </p>
          </div>

          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", address: "", phone: "" });
            }}
            variant="outline"
            className="w-full"
          >
            Submit Another Request
          </Button>
        </div>
      ) : (
        <>
          <h3 className="font-heading font-bold text-xl mb-6">Meet a designer</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-12"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-12"
                required
              />
            </div>

            {/* Address Input */}
            <div>
              <Input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full h-12"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <Input
                type="tel"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-12"
                required
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Book 3D Design Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* Privacy Policy Text */}
            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-primary hover:underline">
                terms of use
              </a>
              , allowing us to use your information as outlined.
            </p>
          </form>
        </>
      )}
    </Card>
  );
}
