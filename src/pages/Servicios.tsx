import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Settings, Sparkles, TrendingUp } from 'lucide-react';

const Servicios = () => {
  return (
    <>
      <Navbar />
      <div> {/* Removed padding for seamless navbar integration */}
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white py-24 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-24 h-24 bg-indigo-400/20 rounded-full animate-float"></div>
            <div className="absolute top-40 left-20 w-16 h-16 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-pink-400/20 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-indigo-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
                <Settings className="h-4 w-4 text-indigo-400 mr-2" />
                <span className="text-white text-sm font-medium">Soluciones Tecnológicas Integrales</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
                <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
                  Nuestros
                </span>
                <br />
                <span className="text-3xl md:text-5xl bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
                  Servicios
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-indigo-100 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
                Ofrecemos servicios tecnológicos especializados que transforman 
                tu negocio y lo posicionan a la vanguardia de la innovación digital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Link to="/contacto">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg group"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Descubre más
                    <TrendingUp className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Hero Image with dynamic hover effect */}
          <div className="container mx-auto px-4 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <img 
                  src="/images/consultoria.jpg" 
                  alt="Servicios tecnológicos" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_50px_100px_rgba(99,102,241,0.3)] cursor-pointer relative z-10"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform group-hover:scale-110"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Servicios que impulsan tu éxito</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Transformación Digital"
                description="Implementamos estrategias digitales para optimizar tus procesos y mejorar la experiencia del cliente."
                image="/images/td-industrial.webp"
                link="/transformacion-digital"
              />
              <ServiceCard
                title="Inteligencia Artificial"
                description="Desarrollamos soluciones de IA personalizadas para automatizar tareas y tomar decisiones más inteligentes."
                image="/images/ia.jpg"
                link="/inteligencia-artificial"
              />
              <ServiceCard
                title="Consultoría Tecnológica"
                description="Ofrecemos asesoramiento experto para ayudarte a elegir las mejores tecnologías y optimizar tu infraestructura."
                image="/images/consultoria.jpg"
                link="/consultoria"
              />
              <ServiceCard
                title="Formación Especializada"
                description="Capacitamos a tu equipo en las últimas tecnologías y tendencias digitales para impulsar la innovación."
                image="/images/formacion.jpg"
                link="/formacion"
              />
              <ServiceCard
                title="Implementación de Frappe"
                description="Implementamos y personalizamos Frappe Framework para adaptarlo a las necesidades específicas de tu negocio."
                image="/images/frappe.png"
                link="/frappe"
              />
              <ServiceCard
                title="Desarrollo de Software a Medida"
                description="Creamos soluciones de software personalizadas que se adaptan perfectamente a tus necesidades y procesos."
                image="/images/da.jpg"
                link="/contacto"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-xappiens-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para descubrir cómo nuestros servicios tecnológicos pueden transformar tu empresa.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-white text-xappiens-blue hover:bg-gray-100">
                Solicitar una consulta
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Servicios;
