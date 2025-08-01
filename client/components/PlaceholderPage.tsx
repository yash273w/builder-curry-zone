import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
  suggestion?: string;
}

const PlaceholderPage = ({ title, description, suggestion }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-12 h-12 text-muted-foreground" />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          {suggestion && (
            <div className="bg-muted/50 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                💡 <strong>Suggestion:</strong> {suggestion}
              </p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
