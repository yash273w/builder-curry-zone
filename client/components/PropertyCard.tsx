import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  status: "For Sale" | "For Rent" | "Sold";
  featured?: boolean;
}

const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  image,
  status,
  featured = false,
}: PropertyCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4">
          <Badge
            variant={
              status === "For Sale"
                ? "default"
                : status === "For Rent"
                  ? "secondary"
                  : "destructive"
            }
            className="bg-white/90 text-foreground border-0"
          >
            {status}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge
              variant="default"
              className="bg-real-estate-gold text-real-estate-dark"
            >
              Featured
            </Badge>
          </div>
        )}
        <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-foreground line-clamp-2">
            {title}
          </h3>
        </div>

        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{area}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">{price}</div>
          <Button asChild size="sm">
            <Link to={`/property/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
