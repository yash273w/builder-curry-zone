import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Star, Award, Users, TrendingUp, Filter } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const agents = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
    location: "Beverly Hills, CA",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@luxuryrealty.com",
    experience: "12 years",
    propertiesSold: "450+",
    averagePrice: "$2.8M",
    rating: 4.9,
    reviews: 147,
    specialties: ["Luxury Homes", "Waterfront Properties", "Investment Properties"],
    languages: ["English", "Spanish"],
    bio: "Sarah is a top-performing agent specializing in luxury residential properties. With over 12 years of experience, she has consistently ranked in the top 1% of agents nationwide.",
    featured: true,
    awards: ["Top Producer 2023", "Client Choice Award", "Luxury Specialist"],
  },
  {
    id: "2",
    name: "Michael Richardson",
    title: "Luxury Property Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    location: "Manhattan, NY",
    phone: "+1 (555) 234-5678",
    email: "michael.richardson@luxuryrealty.com",
    experience: "15 years",
    propertiesSold: "620+",
    averagePrice: "$4.2M",
    rating: 4.8,
    reviews: 203,
    specialties: ["Penthouse Suites", "Commercial Properties", "Historic Homes"],
    languages: ["English", "French", "Italian"],
    bio: "Michael brings extensive experience in high-end Manhattan real estate, with a focus on exclusive penthouses and commercial investments.",
    featured: true,
    awards: ["Platinum Producer", "Excellence Award", "International Specialist"],
  },
  {
    id: "3",
    name: "Emily Davis",
    title: "Residential Sales Expert",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    location: "Miami Beach, FL",
    phone: "+1 (555) 345-6789",
    email: "emily.davis@luxuryrealty.com",
    experience: "8 years",
    propertiesSold: "320+",
    averagePrice: "$1.9M",
    rating: 4.9,
    reviews: 89,
    specialties: ["Beachfront Properties", "Condominiums", "New Construction"],
    languages: ["English", "Portuguese"],
    bio: "Emily specializes in Miami's luxury beachfront market, helping clients find their perfect oceanside retreat.",
    featured: false,
    awards: ["Rising Star", "Customer Service Excellence"],
  },
  {
    id: "4",
    name: "David Chen",
    title: "Investment Property Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    location: "San Francisco, CA",
    phone: "+1 (555) 456-7890",
    email: "david.chen@luxuryrealty.com",
    experience: "10 years",
    propertiesSold: "280+",
    averagePrice: "$3.5M",
    rating: 4.7,
    reviews: 156,
    specialties: ["Tech Industry Properties", "Investment Analysis", "Portfolio Management"],
    languages: ["English", "Mandarin", "Cantonese"],
    bio: "David combines his background in finance with real estate expertise to help tech professionals and investors make smart property decisions.",
    featured: false,
    awards: ["Investment Specialist", "Tech Professional Choice"],
  },
  {
    id: "5",
    name: "Jessica Martinez",
    title: "Luxury Home Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    location: "Austin, TX",
    phone: "+1 (555) 567-8901",
    email: "jessica.martinez@luxuryrealty.com",
    experience: "9 years",
    propertiesSold: "365+",
    averagePrice: "$2.1M",
    rating: 4.8,
    reviews: 112,
    specialties: ["Ranch Properties", "Modern Architecture", "Sustainable Homes"],
    languages: ["English", "Spanish"],
    bio: "Jessica is passionate about sustainable luxury living and modern architectural designs, serving the growing Austin market.",
    featured: false,
    awards: ["Sustainability Champion", "Modern Design Expert"],
  },
  {
    id: "6",
    name: "Robert Kim",
    title: "International Property Expert",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
    location: "Seattle, WA",
    phone: "+1 (555) 678-9012",
    email: "robert.kim@luxuryrealty.com",
    experience: "14 years",
    propertiesSold: "510+",
    averagePrice: "$2.6M",
    rating: 4.9,
    reviews: 198,
    specialties: ["International Clients", "Relocation Services", "Corporate Housing"],
    languages: ["English", "Korean", "Japanese"],
    bio: "Robert specializes in helping international clients and corporations with luxury property needs and relocation services.",
    featured: true,
    awards: ["International Expert", "Corporate Specialist", "Multilingual Service"],
  },
];

export default function Agents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesLocation = !locationFilter || agent.location.includes(locationFilter);
    const matchesSpecialty = !specialtyFilter || agent.specialties.includes(specialtyFilter);
    
    return matchesSearch && matchesLocation && matchesSpecialty;
  });

  const featuredAgents = filteredAgents.filter(agent => agent.featured);
  const regularAgents = filteredAgents.filter(agent => !agent.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet Our Expert Agents
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certified luxury real estate professionals are ready to help you find your dream property or achieve your investment goals.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6 border max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search agents or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  <SelectItem value="Beverly Hills">Beverly Hills, CA</SelectItem>
                  <SelectItem value="Manhattan">Manhattan, NY</SelectItem>
                  <SelectItem value="Miami Beach">Miami Beach, FL</SelectItem>
                  <SelectItem value="San Francisco">San Francisco, CA</SelectItem>
                  <SelectItem value="Austin">Austin, TX</SelectItem>
                  <SelectItem value="Seattle">Seattle, WA</SelectItem>
                </SelectContent>
              </Select>
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Specialties</SelectItem>
                  <SelectItem value="Luxury Homes">Luxury Homes</SelectItem>
                  <SelectItem value="Waterfront Properties">Waterfront Properties</SelectItem>
                  <SelectItem value="Investment Properties">Investment Properties</SelectItem>
                  <SelectItem value="Penthouse Suites">Penthouse Suites</SelectItem>
                  <SelectItem value="Commercial Properties">Commercial Properties</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      {featuredAgents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-real-estate-gold text-real-estate-dark">
                Featured Agents
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Top Performing Specialists
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our most experienced and successful agents, recognized for their exceptional service and results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAgents.map((agent) => (
                <Card key={agent.id} className="overflow-hidden shadow-lg border-primary/20 hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-real-estate-gold text-real-estate-dark">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{agent.name}</h3>
                      <p className="text-primary font-medium mb-2">{agent.title}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {agent.location}
                      </div>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-4">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium ml-1">{agent.rating}</span>
                          <span className="text-sm text-muted-foreground ml-1">({agent.reviews})</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {agent.experience} experience
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Properties Sold:</span>
                          <div className="font-semibold">{agent.propertiesSold}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Avg. Price:</span>
                          <div className="font-semibold">{agent.averagePrice}</div>
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground mb-2 block">Specialties:</span>
                        <div className="flex flex-wrap gap-1">
                          {agent.specialties.slice(0, 2).map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                          {agent.specialties.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{agent.specialties.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {agent.bio}
                    </p>

                    <div className="space-y-2">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={`tel:${agent.phone}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={`mailto:${agent.email}`}>
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </a>
                        </Button>
                      </div>
                      <Button className="w-full" size="sm" asChild>
                        <Link to={`/agent/${agent.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Agents */}
      <section className={`py-16 ${featuredAgents.length > 0 ? 'bg-muted/30' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {featuredAgents.length > 0 ? 'All Our Agents' : 'Our Expert Team'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {filteredAgents.length === agents.length 
                ? `Browse all ${agents.length} of our certified luxury real estate professionals.`
                : `Showing ${filteredAgents.length} agents matching your criteria.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(featuredAgents.length > 0 ? regularAgents : filteredAgents).map((agent) => (
              <Card key={agent.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-64 object-cover"
                  />
                  {agent.awards.length > 0 && (
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      Award Winner
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{agent.name}</h3>
                    <p className="text-primary font-medium mb-2">{agent.title}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {agent.location}
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center mr-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{agent.rating}</span>
                        <span className="text-sm text-muted-foreground ml-1">({agent.reviews})</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {agent.experience} experience
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Properties Sold:</span>
                        <div className="font-semibold">{agent.propertiesSold}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Avg. Price:</span>
                        <div className="font-semibold">{agent.averagePrice}</div>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm text-muted-foreground mb-2 block">Specialties:</span>
                      <div className="flex flex-wrap gap-1">
                        {agent.specialties.slice(0, 2).map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {agent.specialties.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{agent.specialties.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {agent.bio}
                  </p>

                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={`tel:${agent.phone}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={`mailto:${agent.email}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </a>
                      </Button>
                    </div>
                    <Button className="w-full" size="sm" asChild>
                      <Link to={`/agent/${agent.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No agents found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setLocationFilter("");
                  setSpecialtyFilter("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work with an Expert?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our agents are standing by to help you with your luxury real estate needs. 
            Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
