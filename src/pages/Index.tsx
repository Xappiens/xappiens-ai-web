import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AiChat from '../components/AiChat';
import ServiceCard from '../components/ServiceCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Book, Info, Phone } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="flex flex-col items-center">
              <div className="text-center mb-10 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                  Transformamos tu negocio con tecnología e innovación
                </h1>
                <p className="text-lg mb-8 text-gray-200 animate-fade-in" style={{animationDelay: "0.2s"}}>
                  En Xappiens somos expertos en transformación digital, 
                  desarrollo de aplicaciones, inteligencia artificial, 
                  formación y consultoría para empresas que quieren liderar el futuro.
                </p>
              </div>
              
              <div className="w-full max-w-xl mx-auto animate-fade-in" style={{animationDelay: "0.4s"}}>
                <AiChat />
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-in" style={{animationDelay: "0.6s"}}>
                <Link to="/servicios">
                  <Button size="lg" className="bg-white text-xappiens-blue hover:bg-xappiens-purple hover:text-white transition-colors duration-200">
                    Nuestros servicios
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button size="lg" variant="outline" className="bg-xappiens-purple text-white border-white hover:bg-white hover:text-xappiens-blue transition-colors duration-200">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ofrecemos soluciones integrales para impulsar tu empresa en la era digital
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Inteligencia Artificial"
                description="Implementamos soluciones de IA para automatizar procesos, analizar datos y optimizar la toma de decisiones."
                icon={<MessageSquare size={32} />}
                link="/inteligencia-artificial"
                image="/images/ia.jpg"
              />
              <ServiceCard 
                title="Transformación Digital"
                description="Te acompañamos en el proceso de transformación digital, adaptando tu empresa a los nuevos modelos de negocio."
                icon={<Info size={32} />}
                link="/transformacion-digital"
                image="/images/td.jpg"
              />
              <ServiceCard 
                title="Desarrollo de Aplicaciones"
                description="Creamos aplicaciones a medida, móviles y web, con las últimas tecnologías para potenciar tu negocio."
                icon={<Book size={32} />}
                link="/servicios"
                image="/images/da.jpg"
              />
              <ServiceCard 
                title="Formación"
                description="Capacitamos a tu equipo en las últimas tecnologías y metodologías para mejorar su rendimiento."
                icon={<Book size={32} />}
                link="/formacion"
                image="/images/formacion.jpg"
              />
              <ServiceCard 
                title="Consultoría"
                description="Asesoramos a tu empresa en la implementación de soluciones tecnológicas y en la optimización de procesos."
                icon={<Info size={32} />}
                link="/consultoria"
                image="/images/consultoria.jpg"
              />
              <ServiceCard 
                title="Outsourcing"
                description="Ofrecemos servicios de externalización de personal IT para cubrir tus necesidades puntuales o permanentes."
                icon={<Phone size={32} />}
                link="/servicios"
                image="/images/outsourcing.jpg"
              />
            </div>
            
            <div className="text-center mt-12">
              <Link to="/servicios">
                <Button size="lg" className="bg-xappiens-purple hover:bg-xappiens-blue">
                  Ver todos los servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="relative">
                  <img 
                    src="/AbelRamos_Xappiens.webp" 
                    alt="Abel Ramos - Fundador de Xappiens" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-xappiens-purple/10 rounded-lg"></div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">¿Por qué elegir Xappiens?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Somos un equipo de profesionales apasionados por la tecnología y la innovación, 
                  con amplia experiencia en el sector IT y un enfoque centrado en resultados.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-xappiens-purple/10 text-xappiens-purple p-2 rounded-full mr-3">✓</span>
                    <p className="text-gray-600">Equipo de expertos en tecnología e innovación</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-xappiens-purple/10 text-xappiens-purple p-2 rounded-full mr-3">✓</span>
                    <p className="text-gray-600">Soluciones personalizadas adaptadas a tus necesidades</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-xappiens-purple/10 text-xappiens-purple p-2 rounded-full mr-3">✓</span>
                    <p className="text-gray-600">Metodologías ágiles para una entrega rápida y eficiente</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-xappiens-purple/10 text-xappiens-purple p-2 rounded-full mr-3">✓</span>
                    <p className="text-gray-600">Compromiso con la excelencia y la calidad</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-xappiens-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-white text-xappiens-blue hover:bg-gray-100">
                Contáctanos ahora
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
