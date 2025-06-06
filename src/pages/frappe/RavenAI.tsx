
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Brain, Zap, TrendingUp, Shield, Clock, Award, BarChart3, Target, MessageSquare, Star, ChevronRight, Cpu, Database, Bot, Settings, Globe, Lightbulb, PieChart, Users, FileText, Workflow } from "lucide-react";

const RavenAI = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
              <Brain className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-white text-sm font-medium">IA para ERPNext</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white animate-fade-in">
              <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
                Raven AI
              </span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Inteligencia que Transforma tu ERP
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-purple-100 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
              La primera plataforma de IA nativa para ERPNext. Automatiza procesos, analiza datos y toma decisiones inteligentes que revolucionan tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 py-4 text-lg group"
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
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop"
                alt="Raven AI Dashboard"
                className="w-full rounded-2xl shadow-2xl animate-tilt border border-white/20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_50px_100px_rgba(139,92,246,0.3)] cursor-pointer relative z-10"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform group-hover:scale-110"></div>
              {/* Secondary glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
              <Cpu className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Capacidades de IA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              IA que entiende tu negocio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Raven AI se integra perfectamente con ERPNext para automatizar decisiones y optimizar cada proceso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Automatización Inteligente",
                description: "Automatiza tareas complejas con IA avanzada",
                color: "purple",
                features: ["Procesamiento de documentos", "Clasificación automática", "Flujos de trabajo inteligentes", "Decisiones automatizadas"]
              },
              {
                icon: BarChart3,
                title: "Análisis Predictivo",
                description: "Predice tendencias y optimiza tu negocio",
                color: "indigo",
                features: ["Pronósticos de demanda", "Análisis de riesgos", "Predicción de churn", "Optimización de inventario"]
              },
              {
                icon: MessageSquare,
                title: "Procesamiento de Lenguaje",
                description: "Comprende y procesa texto como un humano",
                color: "blue",
                features: ["Análisis de sentimientos", "Extracción de entidades", "Resúmenes automáticos", "Clasificación de contenido"]
              },
              {
                icon: Database,
                title: "Integración ERP",
                description: "Conexión nativa con todos los módulos",
                color: "violet",
                features: ["Datos en tiempo real", "API completa", "Sincronización automática", "Configuración sin código"]
              },
              {
                icon: PieChart,
                title: "Insights Inteligentes",
                description: "Descubre patrones ocultos en tus datos",
                color: "purple",
                features: ["Dashboards dinámicos", "Alertas inteligentes", "Recomendaciones automáticas", "Métricas personalizadas"]
              },
              {
                icon: Bot,
                title: "Asistente Virtual",
                description: "Tu asistente de IA para ERPNext",
                color: "indigo",
                features: ["Consultas en lenguaje natural", "Automatización de tareas", "Soporte 24/7", "Aprendizaje continuo"]
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-purple-600 transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
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
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Por qué elegir 
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"> Raven AI</span>?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              La IA más avanzada diseñada específicamente para potenciar tu ERPNext
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Implementación Rápida",
                description: "Configura e implementa IA en minutos, no en meses",
                color: "purple"
              },
              {
                icon: Globe,
                title: "Totalmente Integrado",
                description: "Funciona nativamente con todos los módulos de ERPNext",
                color: "indigo"
              },
              {
                icon: Shield,
                title: "Datos Seguros",
                description: "Tu información está protegida con encriptación avanzada",
                color: "blue"
              },
              {
                icon: Clock,
                title: "Mejora Continua",
                description: "La IA aprende y mejora constantemente con tus datos",
                color: "violet"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-br from-${benefit.color}-400 to-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                <p className="text-purple-100 leading-relaxed">
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
            <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Casos de Uso</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              IA para Cada Industria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Raven AI se adapta a las necesidades específicas de tu sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Manufactura",
                description: "Optimiza la producción con IA predictiva y mantenimiento inteligente",
                features: ["Predicción de fallos", "Optimización de líneas", "Control de calidad automático"],
                color: "purple"
              },
              {
                icon: FileText,
                title: "Servicios",
                description: "Automatiza la gestión de proyectos y mejora la experiencia del cliente",
                features: ["Asignación inteligente", "Análisis de satisfacción", "Automatización de reportes"],
                color: "indigo"
              },
              {
                icon: Workflow,
                title: "Retail",
                description: "Optimiza inventario y personaliza la experiencia de compra",
                features: ["Pronósticos de demanda", "Precios dinámicos", "Recomendaciones personalizadas"],
                color: "blue"
              }
            ].map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${useCase.color}-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className={`h-6 w-6 text-${useCase.color}-600`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
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
      <section className="py-24 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas que ya están revolucionando sus procesos con Raven AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Raven AI redujo nuestros tiempos de procesamiento en un 80%. Es como tener un equipo de analistas trabajando 24/7.",
                author: "Elena Rodríguez",
                role: "CTO",
                company: "InnovaTech Solutions",
                rating: 5
              },
              {
                quote: "La predicción de demanda es increíblemente precisa. Hemos reducido el stock obsoleto en un 60%.",
                author: "Miguel Torres",
                role: "Director de Operaciones",
                company: "FabriCorp",
                rating: 5
              },
              {
                quote: "El asistente virtual de Raven AI responde consultas complejas instantáneamente. Nuestro equipo es mucho más productivo.",
                author: "Carmen López",
                role: "Gerente de TI",
                company: "ServiceMax",
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
                    <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              ¿Listo para 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> revolucionar</span> tu ERP?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Únete a la revolución de la IA empresarial. Transforma tu ERPNext en una plataforma inteligente que toma decisiones por ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg group shadow-lg"
                onClick={() => window.open('https://frappecloud.com/dashboard/signup?referrer=f23e580a', '_blank')}
              >
                Empieza ya
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Sin compromiso • Configuración en minutos • Soporte especializado
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RavenAI;
