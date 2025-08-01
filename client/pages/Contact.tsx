import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Building } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const offices = [
  {
    id: "1",
    name: "Beverly Hills Headquarters",
    address: "123 Rodeo Drive, Beverly Hills, CA 90210",
    phone: "+1 (555) 123-4567",
    email: "beverlyhills@luxuryrealty.com",
    hours: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    isHeadquarters: true,
  },
  {
    id: "2",
    name: "Manhattan Office",
    address: "456 Fifth Avenue, New York, NY 10018",
    phone: "+1 (555) 234-5678",
    email: "manhattan@luxuryrealty.com",
    hours: "Mon-Fri: 8AM-7PM, Sat-Sun: 10AM-5PM",
    image: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=800&q=80",
    isHeadquarters: false,
  },
  {
    id: "3",
    name: "Miami Beach Office",
    address: "789 Ocean Drive, Miami Beach, FL 33139",
    phone: "+1 (555) 345-6789",
    email: "miami@luxuryrealty.com",
    hours: "Mon-Fri: 9AM-7PM, Sat-Sun: 10AM-6PM",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    isHeadquarters: false,
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our expert team",
    contact: "+1 (555) 123-4567",
    hours: "Mon-Fri: 8AM-8PM PST",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses to your inquiries",
    contact: "info@luxuryrealty.com",
    hours: "24/7 Response",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant assistance from our team",
    contact: "Available on website",
    hours: "Mon-Fri: 9AM-6PM PST",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Property Purchase",
  "Property Sale",
  "Property Rental",
  "Investment Consultation",
  "Market Analysis",
  "Agent Services",
  "Partnership Opportunities",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    propertyBudget: "",
    preferredContact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        propertyBudget: "",
        preferredContact: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream property or have questions about our services? 
            Our expert team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-semibold text-foreground mb-2">{method.contact}</p>
                  <p className="text-sm text-muted-foreground">{method.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="propertyBudget">Property Budget</Label>
                          <Select value={formData.propertyBudget} onValueChange={(value) => handleInputChange("propertyBudget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-500k">Under $500K</SelectItem>
                              <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                              <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                              <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                              <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                              <SelectItem value="over-10m">Over $10M</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange("preferredContact", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="How would you like us to contact you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                            <SelectItem value="any">Any Method</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your real estate needs..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full py-6 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start py-6" variant="outline" asChild>
                    <a href="tel:+15551234567">
                      <Phone className="w-5 h-5 mr-3" />
                      Call Now: +1 (555) 123-4567
                    </a>
                  </Button>
                  <Button className="w-full justify-start py-6" variant="outline" asChild>
                    <a href="mailto:info@luxuryrealty.com">
                      <Mail className="w-5 h-5 mr-3" />
                      Email: info@luxuryrealty.com
                    </a>
                  </Button>
                  <Button className="w-full justify-start py-6" variant="outline">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule Consultation
                  </Button>
                  <Button className="w-full justify-start py-6" variant="outline">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For urgent property matters outside business hours:
                  </p>
                  <Button className="w-full py-6" asChild>
                    <a href="tel:+15559999999">
                      <Phone className="w-5 h-5 mr-3" />
                      Emergency Line: +1 (555) 999-9999
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Available 24/7 for existing clients
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm">
                        <strong>Current Status:</strong> Open
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our convenient locations or schedule a consultation at your preferred office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.id} className="overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-48 object-cover"
                  />
                  {office.isHeadquarters && (
                    <Badge className="absolute top-4 left-4 bg-real-estate-gold text-real-estate-dark">
                      <Building className="w-3 h-3 mr-1" />
                      Headquarters
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{office.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-muted-foreground mr-3 mt-1" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-muted-foreground mr-3" />
                      <a href={`tel:${office.phone}`} className="text-sm hover:text-primary">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-muted-foreground mr-3" />
                      <a href={`mailto:${office.email}`} className="text-sm hover:text-primary">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-muted-foreground mr-3 mt-1" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`tel:${office.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Office
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I expect a response?",
                answer: "We respond to all inquiries within 2-4 hours during business hours, and within 24 hours on weekends."
              },
              {
                question: "Do you charge consultation fees?",
                answer: "Initial consultations are complimentary. We believe in providing value upfront and earning your business through exceptional service."
              },
              {
                question: "What areas do you serve?",
                answer: "We serve luxury property markets nationwide, with specialized teams in California, New York, Florida, Texas, and Washington."
              },
              {
                question: "Can you help with international property purchases?",
                answer: "Yes, we have partnerships with luxury real estate firms globally and can assist with international property transactions."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
