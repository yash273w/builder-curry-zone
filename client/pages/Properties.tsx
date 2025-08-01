import { useState } from "react";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import SearchSection from "@/components/SearchSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for all properties
const allProperties = [
  {
    id: "1",
    title: "Luxury Modern Villa with Ocean View",
    price: "$2,450,000",
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,200 sq ft",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    status: "For Rent" as const,
  },
  {
    id: "4",
    title: "Waterfront Luxury Condo",
    price: "$1,200,000",
    location: "Miami Beach, FL",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sq ft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    status: "For Sale" as const,
  },
  {
    id: "5",
    title: "Mountain View Estate",
    price: "$3,200,000",
    location: "Aspen, CO",
    bedrooms: 6,
    bathrooms: 5,
    area: "5,500 sq ft",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "6",
    title: "Urban Loft Apartment",
    price: "$3,200/month",
    location: "Seattle, WA",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,400 sq ft",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    status: "For Rent" as const,
  },
  {
    id: "7",
    title: "Historic Brownstone",
    price: "$2,100,000",
    location: "Boston, MA",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    image:
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&q=80",
    status: "For Sale" as const,
  },
  {
    id: "8",
    title: "Beachfront Villa",
    price: "$4,800,000",
    location: "Malibu, CA",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,800 sq ft",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "9",
    title: "Downtown High-Rise Apartment",
    price: "$2,800/month",
    location: "Chicago, IL",
    bedrooms: 1,
    bathrooms: 1,
    area: "900 sq ft",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    status: "For Rent" as const,
  },
];

export default function Properties() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Property Listings
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover your perfect home from our curated collection of luxury
              properties
            </p>
          </div>
          <SearchSection />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Available Properties
              </h2>
              <p className="text-muted-foreground">
                Showing {allProperties.length} properties
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="bedrooms">Most Bedrooms</SelectItem>
                  <SelectItem value="area">Largest Area</SelectItem>
                </SelectContent>
              </Select>

              {/* Filters Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-l-lg ${
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-r-lg ${
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-card rounded-lg border p-6 sticky top-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
                </div>

                <div className="space-y-6">
                  {/* Property Status */}
                  <div>
                    <h4 className="font-medium mb-3">Property Status</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          defaultChecked
                        />
                        For Sale
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          defaultChecked
                        />
                        For Rent
                      </label>
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <h4 className="font-medium mb-3">Property Type</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          defaultChecked
                        />
                        Houses
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          defaultChecked
                        />
                        Apartments
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          defaultChecked
                        />
                        Condos
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          defaultChecked
                        />
                        Villas
                      </label>
                    </div>
                  </div>

                  {/* Featured Only */}
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Featured Properties Only
                    </label>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6 bg-card rounded-lg border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    Close
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Property Status</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline">For Sale</Badge>
                      <Badge variant="outline">For Rent</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Property Type</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Houses</Badge>
                      <Badge variant="outline">Apartments</Badge>
                      <Badge variant="outline">Condos</Badge>
                      <Badge variant="outline">Villas</Badge>
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            )}

            {/* Property Grid */}
            <div className="lg:col-span-3">
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {allProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-primary text-primary-foreground"
                  >
                    1
                  </Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
