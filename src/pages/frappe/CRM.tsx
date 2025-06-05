import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CRM = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frappe CRM</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl mb-6">
              Frappe CRM es una solución moderna y flexible de gestión de
              relaciones con clientes diseñada para ayudar a las empresas a
              gestionar sus interacciones con clientes de manera eficiente.
            </p>

            <div className="grid gap-8 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  Gestión de Leads
                </h2>
                <p className="mb-4">
                  Captura y seguimiento de leads, calificación automática,
                  asignación inteligente y análisis de conversión.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  Gestión de Oportunidades
                </h2>
                <p className="mb-4">
                  Seguimiento de oportunidades de venta, análisis de
                  probabilidad, gestión de etapas y pronósticos de ventas.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  Gestión de Clientes
                </h2>
                <p className="mb-4">
                  Base de datos centralizada de clientes, historial de
                  interacciones, segmentación y análisis de comportamiento.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Automatización</h2>
                <p className="mb-4">
                  Flujos de trabajo automatizados, recordatorios, notificaciones
                  y seguimiento de actividades.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Solicitar demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CRM;
