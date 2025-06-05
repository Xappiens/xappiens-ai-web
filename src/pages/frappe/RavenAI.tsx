import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RavenAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Raven AI</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl mb-6">
              Raven AI es una plataforma de inteligencia artificial integrada
              con Frappe Framework que permite automatizar tareas, analizar
              datos y mejorar la eficiencia operativa de tu negocio.
            </p>

            <div className="grid gap-8 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  Automatización Inteligente
                </h2>
                <p className="mb-4">
                  Automatización de tareas repetitivas, procesamiento de
                  documentos, clasificación de datos y generación de informes
                  automáticos.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  Análisis Predictivo
                </h2>
                <p className="mb-4">
                  Predicción de tendencias, análisis de comportamiento de
                  clientes, optimización de inventario y pronósticos de ventas.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  Procesamiento de Lenguaje Natural
                </h2>
                <p className="mb-4">
                  Análisis de sentimientos, clasificación de correos
                  electrónicos, extracción de información y generación de
                  resúmenes automáticos.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  Integración con Frappe
                </h2>
                <p className="mb-4">
                  Integración perfecta con Frappe Framework, personalización
                  según necesidades específicas y API para desarrolladores.
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

export default RavenAI;
