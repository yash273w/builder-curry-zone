import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SearchSection = () => {
  const [searchType, setSearchType] = useState("buy");

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border">
      {/* Search Type Tabs */}
      <div className="flex mb-6 bg-muted rounded-lg p-1">
        <button
          onClick={() => setSearchType("buy")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            searchType === "buy"
              ? "bg-white text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSearchType("rent")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            searchType === "rent"
              ? "bg-white text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Rent
        </button>
        <button
          onClick={() => setSearchType("sell")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            searchType === "sell"
              ? "bg-white text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Enter location"
            className="pl-10"
          />
        </div>

        {/* Property Type */}
        <Select>
          <SelectTrigger>
            <div className="flex items-center">
              <Home className="w-4 h-4 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Property Type" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Type</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Range */}
        <Select>
          <SelectTrigger>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Price Range" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Price</SelectItem>
            <SelectItem value="0-200k">$0 - $200k</SelectItem>
            <SelectItem value="200k-500k">$200k - $500k</SelectItem>
            <SelectItem value="500k-1m">$500k - $1M</SelectItem>
            <SelectItem value="1m-2m">$1M - $2M</SelectItem>
            <SelectItem value="2m+">$2M+</SelectItem>
          </SelectContent>
        </Select>

        {/* Bedrooms */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button className="w-full lg:col-span-1">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchSection;
