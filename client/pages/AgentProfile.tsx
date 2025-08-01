import { useParams, Link } from "react-router-dom";
import { Phone, Mail, MapPin, Star, Award, Users, ArrowLeft, MessageCircle, Calendar } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Mock agent data (in a real app, this would come from an API)
const agentsData = {
  "1": {
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
    bio: "Sarah is a top-performing agent specializing in luxury residential properties. With over 12 years of experience, she has consistently ranked in the top 1% of agents nationwide. Her expertise in the Beverly Hills market and commitment to client satisfaction have earned her numerous industry awards and a loyal client base.",
    fullBio: "Sarah Johnson brings over 12 years of dedicated service to the luxury real estate market in Beverly Hills and surrounding areas. As a certified luxury home marketing specialist, she has successfully facilitated over $1.2 billion in property transactions, with an average sale price of $2.8 million.\n\nHer approach combines deep market knowledge with personalized service, ensuring each client receives the attention and expertise they deserve. Sarah's bilingual capabilities and cultural sensitivity have made her particularly effective with international clients seeking luxury properties in the Los Angeles area.\n\nPrior to real estate, Sarah earned her MBA from UCLA and worked in investment banking, bringing valuable financial acumen to her property transactions. She is a member of the National Association of Realtors and holds several professional certifications including Certified Luxury Home Marketing Specialist and Global Luxury Specialist.",
    awards: ["Top Producer 2023", "Client Choice Award", "Luxury Specialist"],
    recentSales: [
      { address: "123 Rodeo Drive", price: "$4.2M", date: "Dec 2023" },
      { address: "456 Sunset Blvd", price: "$3.8M", date: "Nov 2023" },
      { address: "789 Mulholland Dr", price: "$5.1M", date: "Oct 2023" },
    ],
    testimonials: [
      {
        name: "Michael & Jennifer Chen",
        text: "Sarah made our home buying experience seamless and enjoyable. Her market knowledge and negotiation skills saved us both time and money.",
        rating: 5
      },
      {
        name: "Robert Martinez",
        text: "As an international buyer, I needed someone who understood my unique needs. Sarah exceeded all expectations with her professionalism and expertise.",
        rating: 5
      }
    ]
  },
  "2": {
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
    bio: "Michael brings extensive experience in high-end Manhattan real estate, with a focus on exclusive penthouses and commercial investments. His international background and multilingual capabilities make him the go-to agent for sophisticated clients.",
    fullBio: "Michael Richardson is a distinguished luxury property specialist with over 15 years of experience in Manhattan's most exclusive real estate markets. Specializing in penthouses, historic properties, and commercial investments, Michael has facilitated over $2.6 billion in transactions.\n\nHis international perspective, gained through years of working with global clients, combined with his deep understanding of New York's complex real estate landscape, makes him uniquely qualified to handle the most sophisticated transactions. Michael's trilingual abilities have been instrumental in serving international investors and expatriate executives.\n\nBefore entering real estate, Michael worked in international finance and holds an MBA from Columbia Business School. He is a licensed real estate broker in New York and holds certifications in luxury property marketing and commercial real estate.",
    awards: ["Platinum Producer", "Excellence Award", "International Specialist"],
    recentSales: [
      { address: "432 Park Avenue Penthouse", price: "$8.7M", date: "Jan 2024" },
      { address: "15 Central Park West", price: "$6.2M", date: "Dec 2023" },
      { address: "220 Central Park South", price: "$9.1M", date: "Nov 2023" },
    ],
    testimonials: [
      {
        name: "Elisabeth & François Dubois",
        text: "Michael's understanding of both the New York market and international clients made our relocation seamless. His attention to detail is exceptional.",
        rating: 5
      },
      {
        name: "David Kim",
        text: "Working with Michael on our commercial property acquisition was a pleasure. His expertise and network made the difference.",
        rating: 5
      }
    ]
  }
};

export default function AgentProfile() {
  const { id } = useParams();
  const agent = agentsData[id as keyof typeof agentsData];

  if (!agent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Agent Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The agent you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/agents">Back to Agents</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/agents" className="hover:text-foreground">Agents</Link>
            <span>/</span>
            <span className="text-foreground">{agent.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Agent Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Agent Header */}
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-48 h-48 object-cover rounded-lg mx-auto md:mx-0"
              />
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {agent.name}
                </h1>
                <p className="text-xl text-primary font-medium mb-4">{agent.title}</p>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{agent.location}</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{agent.rating}</div>
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{agent.experience}</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{agent.propertiesSold}</div>
                    <div className="text-sm text-muted-foreground">Properties Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{agent.averagePrice}</div>
                    <div className="text-sm text-muted-foreground">Avg. Price</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button asChild>
                    <a href={`tel:${agent.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`mailto:${agent.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About {agent.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {agent.fullBio.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages & Awards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {agent.languages.map((language, index) => (
                      <Badge key={index} variant="secondary">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Awards & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {agent.awards.map((award, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="w-4 h-4 text-yellow-500 mr-2" />
                        <span className="text-sm">{award}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Sales */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agent.recentSales.map((sale, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium">{sale.address}</div>
                        <div className="text-sm text-muted-foreground">{sale.date}</div>
                      </div>
                      <div className="text-lg font-bold text-primary">{sale.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle>Client Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {agent.testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-2">"{testimonial.text}"</p>
                      <p className="font-medium">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact {agent.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-muted-foreground mr-3" />
                      <a href={`tel:${agent.phone}`} className="hover:text-primary">
                        {agent.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-muted-foreground mr-3" />
                      <a href={`mailto:${agent.email}`} className="hover:text-primary">
                        {agent.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-muted-foreground mr-3" />
                      <span>{agent.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <a href={`tel:${agent.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Meeting
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Inquiry</CardTitle>
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
                        placeholder="I'm interested in..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Back to Agents */}
              <Button variant="outline" className="w-full" asChild>
                <Link to="/agents">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Agents
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
