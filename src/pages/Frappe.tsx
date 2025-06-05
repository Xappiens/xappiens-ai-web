
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
import { ArrowRight, Cloud, Code, Globe, Shield, Terminal, Zap, Database, Layers, GitBranch, Rocket, Users } from "lucide-react";
import { useState, useEffect } from "react";

const Frappe = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    "Framework Full-Stack",
    "API RESTful Integrada",
    "ORM Potente",
    "Despliegue en la Nube",
    "Seguridad Empresarial"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-blue-900/10 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-blue-950/30" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-bounce" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className={`text-left transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Code className="h-4 w-4" />
                  Framework de Código Abierto
                </div>
                
                <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
                  Frappe
                  <span className="block text-4xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    Framework
                  </span>
                </h1>

                <div className="h-8 mb-6">
                  <p className="text-2xl font-medium text-primary transition-all duration-500">
                    {features[currentFeature]}
                  </p>
                </div>

                <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                  El framework web full-stack que está revolucionando el desarrollo de aplicaciones empresariales. 
                  Construye, despliega y escala con la potencia de Python y JavaScript.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href="https://frappecloud.com/dashboard/signup?referrer=f23e580a" target="_blank" rel="noopener noreferrer">
                      <Rocket className="mr-2 h-5 w-5" />
                      Comenzar con Frappe Cloud
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-4 border-2 hover:bg-primary/5 transition-all duration-300"
                    asChild
                  >
                    <a href="https://frappeframework.com/docs" target="_blank" rel="noopener noreferrer">
                      <Terminal className="mr-2 h-5 w-5" />
                      Ver documentación
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Desarrolladores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Empresas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Code Preview */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600" 
                    alt="Monitor showing programming code"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
                  
                  {/* Floating code elements */}
                  <div className="absolute -top-4 -left-4 bg-card border rounded-lg p-3 shadow-lg animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-mono">frappe.py</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-3 shadow-lg animate-float delay-1000">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-mono">API Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegir Frappe?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un framework diseñado por desarrolladores, para desarrolladores que quieren construir aplicaciones empresariales robustas y escalables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Desarrollo Full-Stack</CardTitle>
                <CardDescription className="text-base">
                  Python en el backend, JavaScript en el frontend. Todo integrado perfectamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=200" 
                  alt="MacBook with code"
                  className="rounded-lg mb-4 w-full h-32 object-cover"
                />
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    API RESTful integrada
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    ORM potente y flexible
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    React y Vue.js soportados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Frappe Cloud</CardTitle>
                <CardDescription className="text-base">
                  Despliega en minutos con escalado automático y certificados SSL incluidos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=200" 
                  alt="Laptop with cloud computing"
                  className="rounded-lg mb-4 w-full h-32 object-cover"
                />
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Despliegue con un solo clic
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Escalado automático
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Copias de seguridad automáticas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Seguridad Empresarial</CardTitle>
                <CardDescription className="text-base">
                  Construido con las mejores prácticas de seguridad y cumplimiento GDPR.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&h=200" 
                  alt="Colorful code on monitor"
                  className="rounded-lg mb-4 w-full h-32 object-cover"
                />
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Autenticación robusta
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Control de acceso granular
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Auditoría completa
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Arquitectura Moderna</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Una arquitectura pensada para el futuro del desarrollo empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "Base de Datos", desc: "MariaDB/PostgreSQL", color: "from-blue-500 to-cyan-500" },
              { icon: Layers, title: "Backend", desc: "Python + Frappe", color: "from-green-500 to-emerald-500" },
              { icon: GitBranch, title: "API", desc: "REST + WebSocket", color: "from-purple-500 to-pink-500" },
              { icon: Globe, title: "Frontend", desc: "JS/React/Vue", color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nuestros Productos
          </h2>
          <Tabs defaultValue="erpnext" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="erpnext" className="text-base">ERPNext</TabsTrigger>
              <TabsTrigger value="crm" className="text-base">Frappe CRM</TabsTrigger>
              <TabsTrigger value="raven" className="text-base">Raven AI</TabsTrigger>
            </TabsList>
            
            <TabsContent value="erpnext" className="mt-6">
              <Card className="border-none shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl">ERPNext</CardTitle>
                  <CardDescription className="text-lg">
                    El sistema ERP de código abierto más completo del mercado
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg mb-6 leading-relaxed">
                      ERPNext integra todas las áreas de tu empresa en una única plataforma: 
                      contabilidad, inventario, recursos humanos, CRM y más.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <a href="https://frappecloud.com/dashboard/signup?referrer=f23e580a" target="_blank" rel="noopener noreferrer">
                        <Rocket className="mr-2 h-5 w-5" />
                        Probar ERPNext
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400" 
                      alt="Business innovation"
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="crm" className="mt-6">
              <Card className="border-none shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl">Frappe CRM</CardTitle>
                  <CardDescription className="text-lg">
                    Gestión de relaciones con clientes moderna y flexible
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg mb-6 leading-relaxed">
                      Optimiza tus procesos comerciales con un CRM que se adapta a tus necesidades, 
                      no al revés. Gestión completa de leads, oportunidades y clientes.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      asChild
                    >
                      <a href="https://frappecloud.com/dashboard/signup?referrer=f23e580a" target="_blank" rel="noopener noreferrer">
                        <Users className="mr-2 h-5 w-5" />
                        Probar Frappe CRM
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400" 
                      alt="CRM dashboard"
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="raven" className="mt-6">
              <Card className="border-none shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl">Raven AI</CardTitle>
                  <CardDescription className="text-lg">
                    Inteligencia artificial para la automatización de procesos
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg mb-6 leading-relaxed">
                      Automatiza tareas, analiza datos y mejora la eficiencia operativa con 
                      nuestra plataforma de IA integrada perfectamente con Frappe.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                      asChild
                    >
                      <a href="https://frappecloud.com/dashboard/signup?referrer=f23e580a" target="_blank" rel="noopener noreferrer">
                        <Zap className="mr-2 h-5 w-5" />
                        Probar Raven AI
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400" 
                      alt="AI and automation"
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-blue-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para construir el futuro?</h2>
            <p className="text-xl mb-12 text-muted-foreground leading-relaxed">
              Únete a miles de desarrolladores y empresas que ya están construyendo aplicaciones 
              empresariales increíbles con Frappe Framework
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Terminal className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Para Desarrolladores</CardTitle>
                  <CardDescription className="text-base">
                    Comienza a construir aplicaciones empresariales desde cero con nuestro framework
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                    asChild
                  >
                    <a href="https://frappecloud.com/dashboard/signup?referrer=f23e580a" target="_blank" rel="noopener noreferrer">
                      <Code className="mr-2 h-5 w-5" />
                      Comenzar desarrollo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Para Empresas</CardTitle>
                  <CardDescription className="text-base">
                    Despliega tus aplicaciones en Frappe Cloud y escala sin límites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6"
                    asChild
                  >
                    <a href="https://frappecloud.com/dashboard/signup?referrer=f23e580a" target="_blank" rel="noopener noreferrer">
                      <Cloud className="mr-2 h-5 w-5" />
                      Probar Frappe Cloud
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
                asChild
              >
                <a href="https://frappecloud.com/dashboard/signup?referrer=f23e580a" target="_blank" rel="noopener noreferrer">
                  <Rocket className="mr-3 h-6 w-6" />
                  Empezar Gratis Ahora
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Sin tarjeta de crédito requerida • Configuración en 2 minutos
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Frappe;
