import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ERPNext = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">ERPNext</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl mb-6">
              ERPNext es un sistema ERP de código abierto construido sobre
              Frappe Framework que ofrece una solución completa para la gestión
              empresarial.
            </p>

            <div className="grid gap-8 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Contabilidad</h2>
                <p className="mb-4">
                  Gestión completa de la contabilidad con soporte para múltiples
                  monedas, conciliación bancaria, gestión de impuestos y
                  generación de informes financieros.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Inventario</h2>
                <p className="mb-4">
                  Control de inventario en tiempo real, gestión de almacenes
                  múltiples, seguimiento de lotes y series, y gestión de compras
                  y ventas.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  Recursos Humanos
                </h2>
                <p className="mb-4">
                  Gestión de empleados, nóminas, asistencia, permisos,
                  evaluación del desempeño y gestión de la formación.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">CRM</h2>
                <p className="mb-4">
                  Gestión de oportunidades, seguimiento de clientes, gestión de
                  campañas de marketing y análisis de ventas.
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

export default ERPNext;
