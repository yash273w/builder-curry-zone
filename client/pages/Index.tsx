import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Home, Award, TrendingUp, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import SearchSection from "@/components/SearchSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for featured properties
const featuredProperties = [
  {
    id: "1",
    title: "Luxury Modern Villa with Ocean View",
    price: "$2,450,000",
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,200 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "2",
    title: "Contemporary Downtown Penthouse",
    price: "$1,850,000",
    location: "Manhattan, NY",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,800 sq ft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "3",
    title: "Elegant Family Home with Garden",
    price: "$4,500/month",
    location: "Austin, TX",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,500 sq ft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    status: "For Rent" as const,
  },
];

const stats = [
  { icon: Home, label: "Properties Sold", value: "2,847" },
  { icon: Users, label: "Happy Clients", value: "1,932" },
  { icon: Award, label: "Awards Won", value: "47" },
  { icon: TrendingUp, label: "Years Experience", value: "15" },
];

const features = [
  {
    icon: CheckCircle,
    title: "Expert Market Analysis",
    description: "Get accurate property valuations and market insights from our experienced team."
  },
  {
    icon: Users,
    title: "Dedicated Agent Support",
    description: "Work with certified real estate professionals who understand your unique needs."
  },
  {
    icon: TrendingUp,
    title: "Investment Guidance",
    description: "Make informed decisions with our comprehensive investment analysis and forecasting."
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-real-estate-dark via-real-estate-dark/95 to-real-estate-dark/90 text-white py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-white border-primary/30">
              #1 Luxury Real Estate Platform
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Find Your
              <span className="text-primary"> Dream Home</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Discover exclusive properties, luxury homes, and investment opportunities 
              with our award-winning real estate platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/properties">
                  Explore Properties
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Your Perfect Property
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search through thousands of properties using our advanced filters and find exactly what you're looking for.
            </p>
          </div>
          <SearchSection />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured Properties</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Discover Our Premium Listings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore handpicked luxury properties that offer the finest living experiences in prime locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/properties">
                View All Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose LuxuryRealty?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional service and expertise to help you navigate the luxury real estate market with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg border max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-real-estate-gold fill-current" />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed">
              "LuxuryRealty helped us find our dream home in record time. Their expertise and dedication 
              made the entire process seamless and enjoyable. Highly recommended!"
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-foreground">Sarah & Michael Johnson</div>
              <div className="text-muted-foreground">Beverly Hills Homeowners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect homes through our platform. 
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-real-estate-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Luxury<span className="text-primary">Realty</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner in luxury real estate. We help you find, buy, sell, and invest in the most exclusive properties.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-300">
                <Link to="/properties" className="block hover:text-white transition-colors">Properties</Link>
                <Link to="/about" className="block hover:text-white transition-colors">About Us</Link>
                <Link to="/agents" className="block hover:text-white transition-colors">Our Agents</Link>
                <Link to="/contact" className="block hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>+1 (555) 123-4567</p>
                <p>info@luxuryrealty.com</p>
                <p>123 Luxury Ave<br />Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LuxuryRealty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
