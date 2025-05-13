
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Servicios from "./pages/Servicios";
import InteligenciaArtificial from "./pages/InteligenciaArtificial";
import TransformacionDigital from "./pages/TransformacionDigital";
import Formacion from "./pages/Formacion";
import Consultoria from "./pages/Consultoria";
import Contacto from "./pages/Contacto";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/inteligencia-artificial" element={<InteligenciaArtificial />} />
          <Route path="/transformacion-digital" element={<TransformacionDigital />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
