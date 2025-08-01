import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Agents from "./pages/Agents";
import AgentProfile from "./pages/AgentProfile";
import Contact from "./pages/Contact";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agent/:id" element={<AgentProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Ensure root is only created once
const container = document.getElementById("root")!;

// Check if root already exists in development
let root: any;
if (import.meta.hot) {
  // In development with HMR, store root on the container to prevent recreation
  if (!(container as any)._reactRoot) {
    (container as any)._reactRoot = createRoot(container);
  }
  root = (container as any)._reactRoot;
} else {
  // In production, create root normally
  root = createRoot(container);
}

root.render(<App />);
