import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Consultoria from "./pages/Consultoria";
import Contacto from "./pages/Contacto";
import Formacion from "./pages/Formacion";
import Frappe from "./pages/Frappe";
import CRM from "./pages/frappe/CRM";
import ERPNext from "./pages/frappe/ERPNext";
import RavenAI from "./pages/frappe/RavenAI";
import Index from "./pages/Index";
import InteligenciaArtificial from "./pages/InteligenciaArtificial";
import NotFound from "./pages/NotFound";
import Servicios from "./pages/Servicios";
import TransformacionDigital from "./pages/TransformacionDigital";

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
          <Route
            path="/inteligencia-artificial"
            element={<InteligenciaArtificial />}
          />
          <Route
            path="/transformacion-digital"
            element={<TransformacionDigital />}
          />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/frappe" element={<Frappe />} />
          <Route path="/frappe/erpnext" element={<ERPNext />} />
          <Route path="/frappe/crm" element={<CRM />} />
          <Route path="/frappe/raven-ai" element={<RavenAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
