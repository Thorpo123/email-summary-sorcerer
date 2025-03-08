
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a new QueryClient with error logging
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      onError: (error) => {
        console.error("Query error:", error);
      },
    },
    mutations: {
      onError: (error) => {
        console.error("Mutation error:", error);
      },
    },
  },
});

const App = () => {
  // Get the base URL from Vite environment or default to '/'
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Add debug logging
  console.log("App is initializing. Base URL:", baseUrl);
  console.log("Current location:", window.location.href);

  // Wrap the app rendering in a try-catch to log any errors
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {/* HashRouter is required for GitHub Pages */}
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("Error rendering App:", error);
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h1>Application Error</h1>
        <p>There was an error loading the application. Please check the console for details.</p>
      </div>
    );
  }
};

export default App;
