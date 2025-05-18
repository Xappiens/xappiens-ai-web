import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const TransformacionDigital = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Transformación Digital</h1>
              <p className="text-lg max-w-3xl mx-auto">
                Reinventa tu empresa y llévala al siguiente nivel con nuestra estrategia 
                integral de transformación digital, adaptada a los nuevos modelos de negocio.
              </p>
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
                <div className="aspect-video bg-gray-200 rounded-lg"></div>
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
                  <div className="md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0 text-right md:order-1">
                    <img src="/images/da.jpg" alt="Estrategia digital" className="aspect-video bg-white rounded-lg object-cover w-full" />
                  </div>
                  <div className="md:w-12 md:h-12 bg-xappiens-purple rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mx-auto md:mx-0">
                    2
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-12 text-left md:order-2">
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
                  <div className="md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0 text-right md:order-1">
                    <img src="/images/outsourcing.jpg" alt="Gestión del cambio" className="aspect-video bg-white rounded-lg object-cover w-full" />
                  </div>
                  <div className="md:w-12 md:h-12 bg-xappiens-purple rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mx-auto md:mx-0">
                    4
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-12 text-left md:order-2">
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
