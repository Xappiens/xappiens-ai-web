import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Cloud, Code, Globe, Shield, Terminal } from "lucide-react";

const Frappe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Frappe Framework
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              El framework web full-stack de código abierto que está
              transformando la forma de construir aplicaciones empresariales
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Comenzar con Frappe Cloud{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver documentación <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Desarrollo Full-Stack</CardTitle>
                <CardDescription>
                  Python en el backend, JavaScript en el frontend. Todo lo que
                  necesitas en un solo framework.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• API RESTful integrada</li>
                  <li>• ORM potente y flexible</li>
                  <li>• Sistema de plantillas Jinja2</li>
                  <li>• React y Vue.js soportados</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Frappe Cloud</CardTitle>
                <CardDescription>
                  Despliega tus aplicaciones en minutos con nuestra plataforma
                  cloud.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Despliegue con un solo clic</li>
                  <li>• Escalado automático</li>
                  <li>• Certificados SSL incluidos</li>
                  <li>• Copias de seguridad automáticas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Seguridad Empresarial</CardTitle>
                <CardDescription>
                  Construido con las mejores prácticas de seguridad y
                  escalabilidad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Autenticación robusta</li>
                  <li>• Control de acceso granular</li>
                  <li>• Auditoría completa</li>
                  <li>• Cumplimiento GDPR</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Productos
          </h2>
          <Tabs defaultValue="erpnext" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="erpnext">ERPNext</TabsTrigger>
              <TabsTrigger value="crm">Frappe CRM</TabsTrigger>
              <TabsTrigger value="raven">Raven AI</TabsTrigger>
            </TabsList>
            <TabsContent value="erpnext" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>ERPNext</CardTitle>
                  <CardDescription>
                    El sistema ERP de código abierto más completo del mercado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    ERPNext integra todas las áreas de tu empresa en una única
                    plataforma: contabilidad, inventario, recursos humanos, CRM
                    y más.
                  </p>
                  <Button variant="outline">
                    Conoce más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="crm" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frappe CRM</CardTitle>
                  <CardDescription>
                    Gestión de relaciones con clientes moderna y flexible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Optimiza tus procesos comerciales con un CRM que se adapta a
                    tus necesidades, no al revés.
                  </p>
                  <Button variant="outline">
                    Conoce más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="raven" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Raven AI</CardTitle>
                  <CardDescription>
                    Inteligencia artificial para la automatización de procesos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Automatiza tareas, analiza datos y mejora la eficiencia
                    operativa con nuestra plataforma de IA.
                  </p>
                  <Button variant="outline">
                    Conoce más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Únete a miles de desarrolladores y empresas que ya están
              construyendo el futuro con Frappe
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Terminal className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Desarrolladores</CardTitle>
                  <CardDescription>
                    Comienza a construir aplicaciones empresariales desde cero
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Comenzar desarrollo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Empresas</CardTitle>
                  <CardDescription>
                    Despliega tus aplicaciones en Frappe Cloud
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Probar Frappe Cloud <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Frappe;
