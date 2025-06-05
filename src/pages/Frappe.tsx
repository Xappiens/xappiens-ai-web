import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Frappe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frappe Framework</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl mb-6">
              Frappe es un framework web full-stack basado en Python y
              JavaScript que permite crear aplicaciones web robustas y
              escalables.
            </p>
            <div className="grid gap-8 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">ERPNext</h2>
                <p className="mb-4">
                  ERPNext es un sistema ERP de código abierto construido sobre
                  Frappe Framework. Ofrece una solución completa para la gestión
                  empresarial, incluyendo contabilidad, inventario, recursos
                  humanos, CRM y más.
                </p>
                <Button variant="outline" className="mt-4">
                  Conoce más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Frappe CRM</h2>
                <p className="mb-4">
                  Frappe CRM es una solución de gestión de relaciones con
                  clientes moderna y flexible, diseñada para ayudar a las
                  empresas a gestionar sus interacciones con clientes de manera
                  eficiente.
                </p>
                <Button variant="outline" className="mt-4">
                  Conoce más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Raven AI</h2>
                <p className="mb-4">
                  Raven AI es una plataforma de inteligencia artificial
                  integrada con Frappe Framework que permite automatizar tareas,
                  analizar datos y mejorar la eficiencia operativa de tu
                  negocio.
                </p>
                <Button variant="outline" className="mt-4">
                  Conoce más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Frappe;
