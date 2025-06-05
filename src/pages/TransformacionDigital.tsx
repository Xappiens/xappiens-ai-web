
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Globe, TrendingUp } from 'lucide-react';

const TransformacionDigital = () => {
  return (
    <>
      <Navbar />
      <div> {/* Removed padding for seamless navbar integration */}
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-24 h-24 bg-cyan-400/20 rounded-full animate-float"></div>
            <div className="absolute top-40 left-20 w-16 h-16 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-teal-400/20 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-cyan-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
                <Globe className="h-4 w-4 text-cyan-400 mr-2" />
                <span className="text-white text-sm font-medium">Evolución Digital Empresarial</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
                  Transformación Digital
                </span>
                <br />
                <span className="text-3xl md:text-5xl bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
                  hacia el Futuro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-cyan-100 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
                Reinventamos tu empresa con estrategias digitales integrales, 
                adaptándola a los nuevos modelos de negocio del siglo XXI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Link to="/contacto">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white border-0 px-8 py-4 text-lg group"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Inicia tu transformación
                    <TrendingUp className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Hero Image with dynamic hover effect */}
          <div className="container mx-auto px-4 mt-16 pb-24 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <img 
                  src="/images/cloud-computing.jpg" 
                  alt="Transformación digital y cloud computing" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_50px_100px_rgba(34,211,238,0.3)] cursor-pointer relative z-10"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform group-hover:scale-110"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Digital Transformation */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">¿Por qué transformarse digitalmente?</h2>
                <p className="text-gray-600 mb-4">
                  La transformación digital no es solo adoptar nuevas tecnologías, sino 
                  repensar fundamentalmente cómo opera tu negocio para satisfacer las 
                  cambiantes expectativas de los clientes y mantener la competitividad.
                </p>
                <p className="text-gray-600 mb-6">
                  En un mundo cada vez más digital, las empresas que no evolucionan corren 
                  el riesgo de quedarse atrás. La transformación digital es la clave para 
                  mantenerse relevante, ágil y preparado para el futuro.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-xappiens-purple/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-xappiens-purple">Mayor eficiencia</h4>
                    <p className="text-sm text-gray-600">
                      Automatiza procesos y reduce costos operativos
                    </p>
                  </div>
                  <div className="bg-xappiens-purple/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-xappiens-purple">Mejor experiencia</h4>
                    <p className="text-sm text-gray-600">
                      Ofrece experiencias personalizadas a tus clientes
                    </p>
                  </div>
                  <div className="bg-xappiens-purple/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-xappiens-purple">Decisiones basadas en datos</h4>
                    <p className="text-sm text-gray-600">
                      Utiliza datos para tomar decisiones informadas
                    </p>
                  </div>
                  <div className="bg-xappiens-purple/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-xappiens-purple">Innovación continua</h4>
                    <p className="text-sm text-gray-600">
                      Adapta tu negocio rápidamente a los cambios del mercado
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img src="/images/td-industrial.webp" alt="Transformación digital industrial" className="aspect-video bg-gray-200 rounded-lg object-cover w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestro enfoque</h2>
            
            <div className="relative">
              <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-xappiens-purple/30 -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0 text-right">
                    <h3 className="text-2xl font-semibold mb-3">Diagnóstico digital</h3>
                    <p className="text-gray-600">
                      Analizamos el estado actual de tu empresa, identificando oportunidades 
                      de mejora y priorizando áreas de acción para la transformación digital.
                    </p>
                  </div>
                  <div className="md:w-12 md:h-12 bg-xappiens-purple rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mx-auto md:mx-0">
                    1
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-12 text-left">
                    <img src="/images/td.jpg" alt="Diagnóstico digital" className="aspect-video bg-white rounded-lg object-cover w-full" />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0 text-right order-1 md:order-1">
                    <img src="/images/da.jpg" alt="Estrategia digital" className="aspect-video bg-white rounded-lg object-cover w-full" />
                  </div>
                  <div className="md:w-12 md:h-12 bg-xappiens-purple rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mx-auto md:mx-0 order-2 md:order-2">
                    2
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-12 text-left order-3 md:order-3">
                    <h3 className="text-2xl font-semibold mb-3">Estrategia digital</h3>
                    <p className="text-gray-600">
                      Desarrollamos una estrategia digital a medida, alineada con tus objetivos 
                      de negocio y con un roadmap claro para su implementación.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0 text-right">
                    <h3 className="text-2xl font-semibold mb-3">Implementación tecnológica</h3>
                    <p className="text-gray-600">
                      Implementamos las soluciones tecnológicas necesarias para habilitar 
                      la transformación, desde sistemas cloud hasta aplicaciones móviles.
                    </p>
                  </div>
                  <div className="md:w-12 md:h-12 bg-xappiens-purple rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mx-auto md:mx-0">
                    3
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-12 text-left">
                    <img src="/images/consultoria.jpg" alt="Implementación tecnológica" className="aspect-video bg-white rounded-lg object-cover w-full" />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0 text-right order-1 md:order-1">
                    <img src="/images/outsourcing.jpg" alt="Gestión del cambio" className="aspect-video bg-white rounded-lg object-cover w-full" />
                  </div>
                  <div className="md:w-12 md:h-12 bg-xappiens-purple rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mx-auto md:mx-0 order-2 md:order-2">
                    4
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-12 text-left order-3 md:order-3">
                    <h3 className="text-2xl font-semibold mb-3">Gestión del cambio</h3>
                    <p className="text-gray-600">
                      Acompañamos a tu equipo en la adopción de las nuevas tecnologías y 
                      formas de trabajo, facilitando la transformación cultural.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0 text-right">
                    <h3 className="text-2xl font-semibold mb-3">Medición y optimización</h3>
                    <p className="text-gray-600">
                      Monitorizamos los resultados de la transformación, identificando áreas 
                      de mejora y ajustando la estrategia para maximizar el retorno.
                    </p>
                  </div>
                  <div className="md:w-12 md:h-12 bg-xappiens-purple rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mx-auto md:mx-0">
                    5
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-12 text-left">
                    <img src="/images/formacion.jpg" alt="Medición y optimización" className="aspect-video bg-white rounded-lg object-cover w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-xappiens-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para dar el salto digital?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para una evaluación gratuita de tu madurez digital y 
              descubre las oportunidades que la transformación digital puede ofrecer a tu empresa.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-white text-xappiens-blue hover:bg-gray-100">
                Solicitar evaluación gratuita
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TransformacionDigital;
