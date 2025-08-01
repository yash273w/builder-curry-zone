import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  Phone,
  Mail,
  Car,
  Wifi,
  Dumbbell,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import PaymentModal from "@/components/PaymentModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Mock property data
const propertyData = {
  id: "1",
  title: "Luxury Modern Villa with Ocean View",
  price: "$2,450,000",
  location: "Beverly Hills, CA",
  address: "123 Ocean Drive, Beverly Hills, CA 90210",
  bedrooms: 5,
  bathrooms: 4,
  area: "4,200 sq ft",
  lotSize: "8,500 sq ft",
  yearBuilt: 2020,
  propertyType: "Single Family Home",
  status: "For Sale",
  description:
    "Experience luxury living at its finest in this stunning modern villa featuring breathtaking ocean views. This architectural masterpiece combines contemporary design with premium finishes throughout. The open-concept living spaces flow seamlessly, perfect for both intimate gatherings and grand entertaining. Floor-to-ceiling windows maximize natural light and showcase the spectacular coastline views.",
  features: [
    "Ocean Views from Every Room",
    "Gourmet Chef's Kitchen",
    "Master Suite with Private Balcony",
    "Home Theater",
    "Wine Cellar",
    "Infinity Pool & Spa",
    "3-Car Garage",
    "Smart Home Technology",
  ],
  amenities: [
    { icon: Wifi, name: "High-Speed Internet" },
    { icon: Car, name: "3-Car Garage" },
    { icon: Dumbbell, name: "Home Gym" },
    { icon: ShoppingCart, name: "Walk-in Pantry" },
  ],
  images: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
  ],
  agent: {
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@luxuryrealty.com",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
    experience: "12 years",
    sales: "450+ properties sold",
  },
};

export default function PropertyDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    tourDate: "",
  });

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === propertyData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? propertyData.images.length - 1 : prev - 1
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking submitted:", bookingData);
    setIsBookingOpen(false);
  };

  const handlePayment = () => {
    // This will be implemented when we add Razorpay
    alert("Payment integration coming next!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-foreground">
              Properties
            </Link>
            <span>/</span>
            <span className="text-foreground">{propertyData.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative h-96 lg:h-[500px] mb-4">
                <img
                  src={propertyData.images[currentImageIndex]}
                  alt={propertyData.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    {propertyData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-6 gap-2">
                {propertyData.images.slice(0, 6).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-16 rounded-md overflow-hidden ${
                      index === currentImageIndex
                        ? "ring-2 ring-primary"
                        : "ring-1 ring-border"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant={
                      propertyData.status === "For Sale"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {propertyData.status}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {propertyData.title}
                </h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{propertyData.address}</span>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {propertyData.price}
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{propertyData.bedrooms}</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{propertyData.bathrooms}</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{propertyData.area}</div>
                  <div className="text-sm text-muted-foreground">Living Area</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{propertyData.lotSize}</div>
                  <div className="text-sm text-muted-foreground">Lot Size</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">About This Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {propertyData.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {propertyData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {propertyData.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <amenity.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Property Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Type:</span>
                      <span className="font-medium">{propertyData.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built:</span>
                      <span className="font-medium">{propertyData.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lot Size:</span>
                      <span className="font-medium">{propertyData.lotSize}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="font-medium">{propertyData.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Living Area:</span>
                      <span className="font-medium">{propertyData.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property ID:</span>
                      <span className="font-medium">#{propertyData.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact and Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Agent Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={propertyData.agent.image}
                      alt={propertyData.agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{propertyData.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {propertyData.agent.title}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <User className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{propertyData.agent.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{propertyData.agent.sales}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`tel:${propertyData.agent.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Agent
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`mailto:${propertyData.agent.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email Agent
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handlePayment}
                    >
                      Buy Now - {propertyData.price}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Tour
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      Request Information
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="I'm interested in this property..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Schedule a Tour</h2>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <Label htmlFor="tour-name">Name</Label>
                <Input
                  id="tour-name"
                  value={bookingData.name}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="tour-email">Email</Label>
                <Input
                  id="tour-email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="tour-phone">Phone</Label>
                <Input
                  id="tour-phone"
                  value={bookingData.phone}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="tour-date">Preferred Date</Label>
                <Input
                  id="tour-date"
                  type="date"
                  value={bookingData.tourDate}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, tourDate: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="tour-message">Message (Optional)</Label>
                <Textarea
                  id="tour-message"
                  value={bookingData.message}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, message: e.target.value })
                  }
                  rows={3}
                />
              </div>
              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsBookingOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Schedule Tour
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
