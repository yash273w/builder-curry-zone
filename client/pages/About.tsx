import Header from "@/components/Header";
import {
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Building,
  Target,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: Building,
    label: "Properties Sold",
    value: "2,847",
    description: "Successful transactions",
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: "1,932",
    description: "Satisfied customers",
  },
  {
    icon: Award,
    label: "Awards Won",
    value: "47",
    description: "Industry recognition",
  },
  {
    icon: TrendingUp,
    label: "Years Experience",
    value: "15",
    description: "In luxury real estate",
  },
];

const values = [
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in every transaction, ensuring our clients always know what to expect.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for perfection in every aspect of our service, from initial consultation to final closing and beyond.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Your needs come first. We listen, understand, and deliver personalized solutions that exceed expectations.",
  },
];

const timeline = [
  {
    year: "2008",
    title: "Founded",
    description:
      "LuxuryRealty was established with a vision to revolutionize luxury real estate in California.",
  },
  {
    year: "2012",
    title: "Expansion",
    description:
      "Expanded operations to cover the entire West Coast, establishing offices in major metropolitan areas.",
  },
  {
    year: "2016",
    title: "Digital Innovation",
    description:
      "Launched our cutting-edge digital platform, making luxury property search more accessible.",
  },
  {
    year: "2020",
    title: "National Reach",
    description:
      "Achieved nationwide coverage with a network of certified luxury property specialists.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description:
      "Recognized as the #1 luxury real estate platform with over $10B in property transactions.",
  },
];

const team = [
  {
    name: "Michael Richardson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "20+ years in luxury real estate. Former Goldman Sachs investment banker turned real estate visionary.",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Sales",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
    bio: "Leading sales expert with $500M+ in luxury property transactions. Harvard Business School graduate.",
  },
  {
    name: "David Chen",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Former Apple engineer who revolutionized how we buy and sell luxury properties through technology.",
  },
  {
    name: "Emily Davis",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Operations excellence leader ensuring seamless client experiences across all touchpoints.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-real-estate-dark via-real-estate-dark/95 to-real-estate-dark/90 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-white border-primary/30">
            About LuxuryRealty
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Redefining Luxury
            <span className="text-primary"> Real Estate</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            For over 15 years, we've been connecting discerning clients with the
            world's most exclusive properties, setting new standards in luxury
            real estate.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Mission
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide unparalleled service in luxury real estate,
                      connecting our clients with their dream properties while
                      setting new industry standards for excellence and
                      innovation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Eye className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Vision
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the world's most trusted luxury real estate
                      platform, where technology meets personalized service to
                      create extraordinary property experiences for discerning
                      clients globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Luxury property"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define our commitment
              to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a local real estate firm to a national luxury property
              leader.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                  >
                    <Card className="border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge
                            variant="outline"
                            className="text-primary border-primary"
                          >
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries and experts who drive our success and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their dream
            properties through our award-winning platform and personalized
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
