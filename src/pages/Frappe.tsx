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
import { ArrowRight, Cloud, Code, Globe, Shield, Terminal, Zap, Database, Layers, GitBranch, Rocket, Users, Building2, BookOpen, MessageSquare, Smartphone, ShoppingCart, GraduationCap, BarChart3 } from "lucide-react";
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

  const frappeProducts = [
    {
      title: "ERPNext",
      description: "Sistema ERP completo de código abierto que integra contabilidad, inventario, recursos humanos, CRM, manufactura y más en una sola plataforma.",
      icon: <Building2 className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=300",
      link: "https://frappecloud.com/dashboard/signup?referrer=f23e580a"
    },
    {
      title: "Frappe CRM",
      description: "Sistema de gestión de relaciones con clientes moderno y flexible. Optimiza tus procesos comerciales con gestión completa de leads y oportunidades.",
      icon: <Users className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1553028826-f4804151e2bd?auto=format&fit=crop&w=600&h=300",
      link: "https://frappecloud.com/dashboard/signup?referrer=f23e580a"
    },
    {
      title: "Frappe Wiki",
      description: "Plataforma de documentación y gestión del conocimiento. Ideal para crear bases de conocimiento, manuales y documentación colaborativa.",
      icon: <BookOpen className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&h=300",
      link: "https://frappecloud.com/dashboard/signup?referrer=f23e580a"
    },
    {
      title: "Frappe LMS",
      description: "Sistema de gestión de aprendizaje para crear y gestionar cursos online. Incluye seguimiento de progreso, evaluaciones y certificaciones.",
      icon: <GraduationCap className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=300",
      link: "https://frappecloud.com/dashboard/signup?referrer=f23e580a"
    },
    {
      title: "Frappe eCommerce",
      description: "Plataforma de comercio electrónico integrada con ERPNext. Gestiona tienda online, inventario, pagos y logística en una sola solución.",
      icon: <ShoppingCart className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=300",
      link: "https://frappecloud.com/dashboard/signup?referrer=f23e580a"
    },
    {
      title: "Frappe Insights",
      description: "Herramienta de business intelligence y analytics. Crea dashboards interactivos, reportes personalizados y análisis de datos en tiempo real.",
      icon: <BarChart3 className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=300",
      link: "https://frappecloud.com/dashboard/signup?referrer=f23e580a"
    }
  ];

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

                <div className="flex flex-col gap-4">
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
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600" 
                      alt="Monitor showing programming code"
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white/20 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating code elements */}
                  <div className="absolute -top-4 -left-4 bg-card border-2 border-blue-500/30 rounded-lg p-3 shadow-lg animate-float group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-mono bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">frappe.py</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-card border-2 border-purple-500/30 rounded-lg p-3 shadow-lg animate-float delay-1000 group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                      <span className="text-sm font-mono bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">API Ready</span>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ecosistema Frappe</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre todas las aplicaciones que forman parte del ecosistema Frappe, diseñadas para cubrir todas las necesidades de tu empresa
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {frappeProducts.map((product, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/80 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden lg:col-span-1">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-primary shadow-lg">
                        {product.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl lg:text-3xl mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        asChild
                      >
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                          <Rocket className="mr-2 h-5 w-5" />
                          Probar {product.title}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-blue-900/10 rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-4">¿Listo para construir tu propio ecosistema?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Con Frappe Framework puedes crear tus propias aplicaciones personalizadas que se integren perfectamente con todo el ecosistema
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <a href="https://frappecloud.com/dashboard/signup?referrer=f23e580a" target="_blank" rel="noopener noreferrer">
                  <Code className="mr-3 h-6 w-6" />
                  Empezar a Desarrollar
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
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
