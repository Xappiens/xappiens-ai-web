
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Building, TrendingUp, Shield, Zap, Clock, Award, BarChart3, Target, Phone, Mail, Calendar, Star, ChevronRight, MessageSquare, UserCheck, Settings, Globe } from "lucide-react";

const CRM = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-400/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white text-sm font-medium">CRM moderno y sin complicaciones</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white animate-fade-in">
              <span className="bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
                Frappe CRM
              </span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                Gestión de Clientes Inteligente
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-green-100 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
              La plataforma CRM más moderna y flexible del mercado. Gestiona leads, oportunidades y clientes con una interfaz intuitiva que potencia las ventas de tu equipo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 px-8 py-4 text-lg group"
                onClick={() => window.open('https://frappecloud.com/dashboard/signup?referrer=f23e580a', '_blank')}
              >
                Prueba gratis 
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
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop"
                alt="Frappe CRM Dashboard"
                className="w-full rounded-2xl shadow-2xl animate-tilt border border-white/20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_50px_100px_rgba(34,197,94,0.3)] cursor-pointer relative z-10"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform group-hover:scale-110"></div>
              {/* Secondary glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-600/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <Target className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Funcionalidades Avanzadas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Todo lo que necesita para vender más
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Frappe CRM centraliza toda la información de sus clientes y automatiza sus procesos de ventas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Gestión de Leads",
                description: "Captura y cualifica leads automáticamente",
                color: "green",
                features: ["Captura desde web y formularios", "Puntuación automática de leads", "Asignación inteligente", "Seguimiento personalizado"]
              },
              {
                icon: TrendingUp,
                title: "Pipeline de Ventas",
                description: "Visualiza y gestiona tu embudo de ventas",
                color: "emerald",
                features: ["Pipeline visual Kanban", "Pronósticos de ventas", "Análisis de conversión", "Etapas personalizables"]
              },
              {
                icon: Users,
                title: "Gestión de Contactos",
                description: "Base de datos centralizada de clientes",
                color: "teal",
                features: ["Perfiles completos de contactos", "Historial de interacciones", "Segmentación avanzada", "Comunicación integrada"]
              },
              {
                icon: Calendar,
                title: "Actividades & Tareas",
                description: "Organiza tu agenda y no pierdas oportunidades",
                color: "blue",
                features: ["Calendario integrado", "Recordatorios automáticos", "Seguimiento de actividades", "Sincronización con email"]
              },
              {
                icon: BarChart3,
                title: "Reportes & Analytics",
                description: "Analiza el rendimiento de tu equipo",
                color: "purple",
                features: ["Dashboards en tiempo real", "Métricas de rendimiento", "Análisis de tendencias", "Reportes personalizados"]
              },
              {
                icon: Phone,
                title: "Comunicación Integrada",
                description: "Email y llamadas desde la plataforma",
                color: "orange",
                features: ["Email marketing", "Plantillas de mensajes", "Registro de llamadas", "Automatización de seguimiento"]
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-green-600 transition-colors">{feature.title}</CardTitle>
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
      <section className="py-24 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Por qué elegir 
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Frappe CRM</span>?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Un CRM diseñado para equipos que quieren vender más y mejor, sin complicaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Fácil de Usar",
                description: "Interface intuitiva que tu equipo adoptará desde el primer día",
                color: "green"
              },
              {
                icon: Globe,
                title: "100% Personalizable",
                description: "Adapta cada campo, flujo y reporte a tu forma de trabajar",
                color: "emerald"
              },
              {
                icon: Shield,
                title: "Datos Seguros",
                description: "Tus datos están protegidos con los más altos estándares de seguridad",
                color: "teal"
              },
              {
                icon: Clock,
                title: "Ahorra Tiempo",
                description: "Automatiza tareas repetitivas y enfócate en vender",
                color: "blue"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-br from-${benefit.color}-400 to-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-300 transition-colors">{benefit.title}</h3>
                <p className="text-green-100 leading-relaxed">
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
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 mb-6">
              <Building className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Casos de Uso</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Perfecto para Cualquier Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde startups hasta grandes empresas, Frappe CRM se adapta a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Equipos de Ventas",
                description: "Maximiza la productividad de tu equipo comercial con herramientas inteligentes",
                features: ["Gestión de territorios", "Metas y comisiones", "Colaboración en tiempo real"],
                color: "green"
              },
              {
                icon: UserCheck,
                title: "Agencias de Marketing",
                description: "Gestiona campañas y clientes desde una sola plataforma",
                features: ["Seguimiento de campañas", "ROI por cliente", "Automatización de procesos"],
                color: "emerald"
              },
              {
                icon: Settings,
                title: "Empresas de Servicios",
                description: "Desde consultoría hasta servicios técnicos especializados",
                features: ["Gestión de proyectos", "Facturación integrada", "Seguimiento de servicios"],
                color: "teal"
              }
            ].map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${useCase.color}-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className={`h-6 w-6 text-${useCase.color}-600`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Testimonios */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de empresas ya confían en Frappe CRM para potenciar sus ventas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Frappe CRM revolucionó nuestra forma de gestionar clientes. Aumentamos las ventas un 40% en 6 meses.",
                author: "María González",
                role: "Directora de Ventas",
                company: "TechSolutions",
                rating: 5
              },
              {
                quote: "La facilidad de uso es increíble. Todo el equipo lo adoptó inmediatamente sin necesidad de formación.",
                author: "Carlos Ruiz",
                role: "CEO",
                company: "Innovate Corp",
                rating: 5
              },
              {
                quote: "Los reportes automáticos nos dan una visión clara del rendimiento. Imprescindible para nuestro crecimiento.",
                author: "Ana Martín",
                role: "Gerente Comercial",
                company: "GrowFast",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-green-600 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              ¿Listo para 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> multiplicar</span> tus ventas?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Únete a miles de empresas que ya usan Frappe CRM para gestionar mejor sus clientes y vender más. 
              Comienza tu prueba gratuita hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg group shadow-lg"
                onClick={() => window.open('https://frappecloud.com/dashboard/signup?referrer=f23e580a', '_blank')}
              >
                Prueba gratis 30 días 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Sin tarjeta de crédito • Configuración en 5 minutos • Soporte en español
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRM;
