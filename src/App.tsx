import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import PorQueCannabis from "./pages/PorQueCannabis";
import QuemSomos from "./pages/QuemSomos";
import ComoSeAssociar from "./pages/ComoSeAssociar";
import HistoriaDaCannabis from "./pages/HistoriaDaCannabis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/por-que-cannabis" replace />} />
          <Route path="/por-que-cannabis" element={<PorQueCannabis />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/como-se-associar" element={<ComoSeAssociar />} />
          <Route path="/historia-da-cannabis" element={<HistoriaDaCannabis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
