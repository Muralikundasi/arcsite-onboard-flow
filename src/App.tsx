
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import DrawingBoard from "./pages/DrawingBoard";
import NotFound from "./pages/NotFound";

// Create a user context
export type UserType = {
  name: string;
  email: string;
  userGoal: string;
  userRole: string;
  projectType: string;
  urgentNeed: string;
};

export const UserContext = createContext<{
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}>({
  user: null,
  setUser: () => {},
});

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<UserType | null>(null);
  
  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ user, setUser }}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/drawing-board" element={<DrawingBoard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </UserContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
