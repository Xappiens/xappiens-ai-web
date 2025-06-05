import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Building, TrendingUp, Shield, Globe, Zap, Clock, Award, BarChart3, FileText, Package, CreditCard, UserCheck, Settings, Star, ChevronRight } from "lucide-react";

const ERPNext = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-sky-400/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white text-sm font-medium">La solución ERP #1 de código abierto</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white animate-fade-in">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                ERPNext
              </span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                ERP de Código Abierto
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
              La solución ERP más completa y moderna del mercado. ERPNext integra todas las funciones empresariales en una sola plataforma: contabilidad, inventario, CRM, recursos humanos y mucho más.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg group"
                onClick={() => window.open('https://frappecloud.com/dashboard/signup?referrer=f23e580a', '_blank')}
              >
                Empieza ya 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Image with dynamic hover effect */}
        <div className="container mx-auto px-4 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
                alt="ERPNext Dashboard"
                className="w-full rounded-2xl shadow-2xl animate-tilt border border-white/20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_50px_100px_rgba(59,130,246,0.3)] cursor-pointer relative z-10"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform group-hover:scale-110"></div>
              {/* Secondary glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <Package className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Funcionalidades Completas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Todo lo que necesita su empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ERPNext ofrece todas las herramientas que necesita su empresa para gestionar eficientemente cada aspecto del negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Contabilidad",
                description: "Gestión financiera completa con soporte multi-moneda",
                color: "blue",
                features: ["Contabilidad de doble entrada", "Conciliación bancaria automática", "Informes financieros en tiempo real", "Gestión de impuestos avanzada"]
              },
              {
                icon: Package,
                title: "Inventario",
                description: "Control total de stock y almacenes",
                color: "green",
                features: ["Gestión multi-almacén", "Seguimiento de lotes y series", "Valoración automática", "Alertas de stock mínimo"]
              },
              {
                icon: UserCheck,
                title: "Recursos Humanos",
                description: "Gestión completa del capital humano",
                color: "purple",
                features: ["Gestión de empleados", "Nóminas automatizadas", "Control de asistencia", "Evaluación del desempeño"]
              },
              {
                icon: Users,
                title: "CRM",
                description: "Gestión de relaciones con clientes",
                color: "orange",
                features: ["Seguimiento de oportunidades", "Gestión de campañas", "Análisis de ventas", "Automatización de procesos"]
              },
              {
                icon: Settings,
                title: "Fabricación",
                description: "Gestión completa de la producción",
                color: "red",
                features: ["Planificación de producción", "Lista de materiales (BOM)", "Control de calidad", "Subcontratación"]
              },
              {
                icon: BarChart3,
                title: "Reportes & Analytics",
                description: "Inteligencia empresarial integrada",
                color: "indigo",
                features: ["Dashboards personalizables", "Reportes en tiempo real", "Análisis predictivo", "Exportación automática"]
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Por qué elegir 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> ERPNext</span>?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              ERPNext no es solo un ERP, es una plataforma que transforma la manera en que opera su empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Implementación Rápida",
                description: "Configure su ERP en semanas, no meses. Interface intuitiva y procesos simplificados",
                color: "blue"
              },
              {
                icon: Globe,
                title: "Código Abierto",
                description: "Sin licencias costosas. Personalice completamente según sus necesidades específicas",
                color: "green"
              },
              {
                icon: Shield,
                title: "Seguridad Avanzada",
                description: "Control de permisos granular, auditoria completa y cumplimiento normativo",
                color: "purple"
              },
              {
                icon: Clock,
                title: "ROI Inmediato",
                description: "Reduzca costos operativos desde el primer día con automatización inteligente",
                color: "orange"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-br from-${benefit.color}-400 to-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
              <Building className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Casos de Uso</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ideal para Cualquier Industria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ERPNext se adapta a las necesidades específicas de diferentes sectores empresariales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Manufactura",
                description: "Control completo del proceso productivo, desde la planificación hasta la entrega",
                features: ["Planificación de producción MRP", "Control de calidad integrado", "Gestión de subcontratistas"],
                color: "blue"
              },
              {
                icon: TrendingUp,
                title: "Distribución",
                description: "Optimice su cadena de suministro y mejore la satisfacción del cliente",
                features: ["Gestión multi-almacén", "Trazabilidad completa", "Integración con e-commerce"],
                color: "green"
              },
              {
                icon: Award,
                title: "Servicios",
                description: "Gestione proyectos, recursos y clientes de manera eficiente",
                features: ["Gestión de proyectos", "Timesheet y facturación", "CRM avanzado"],
                color: "purple"
              }
            ].map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${useCase.color}-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className={`h-6 w-6 text-${useCase.color}-600`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <ChevronRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              ¿Listo para 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> transformar</span> su empresa?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Descubra cómo ERPNext puede revolucionar sus procesos empresariales. 
              Solicite una demo personalizada sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg group shadow-lg"
                onClick={() => window.open('https://frappecloud.com/dashboard/signup?referrer=f23e580a', '_blank')}
              >
                Empieza ya 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ERPNext;
