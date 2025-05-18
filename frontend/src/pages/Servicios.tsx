import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Servicios = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
              <p className="text-lg max-w-3xl mx-auto">
                En Xappiens ofrecemos un amplio abanico de servicios tecnológicos 
                para ayudar a tu empresa a crecer y adaptarse al entorno digital.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12">
              {/* Service 1 */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img 
                      src="/images/ia.jpg" 
                      alt="Inteligencia Artificial" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-xappiens-purple/80 to-transparent"></div>
                    <div className="relative p-8 flex items-center justify-center h-full">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">Inteligencia Artificial</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-8">
                    <p className="mb-6 text-gray-600">
                      Implementamos soluciones avanzadas de Inteligencia Artificial para ayudar a tu empresa a 
                      automatizar procesos, analizar grandes cantidades de datos y obtener insights valiosos para 
                      la toma de decisiones. Nuestros servicios incluyen:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Chatbots y asistentes virtuales</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Procesamiento de lenguaje natural</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Visión artificial</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Análisis predictivo</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Sistemas de recomendación</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Automatización inteligente</span>
                      </li>
                    </ul>
                    <Link to="/inteligencia-artificial">
                      <Button className="bg-xappiens-purple hover:bg-xappiens-blue">
                        Más información
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>

              {/* Service 2 */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img 
                      src="/images/td.jpg" 
                      alt="Transformación Digital" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-xappiens-purple/80 to-transparent"></div>
                    <div className="relative p-8 flex items-center justify-center h-full">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">Transformación Digital</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-8">
                    <p className="mb-6 text-gray-600">
                      Te acompañamos en el proceso de transformación digital de tu empresa, 
                      ayudándote a adaptar tu modelo de negocio a la era digital, mejorar 
                      la eficiencia operativa y potenciar la experiencia del cliente.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Diagnóstico y estrategia digital</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Optimización de procesos</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Implementación de nuevas tecnologías</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Gestión del cambio</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Transformación de la cultura organizacional</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Medición de resultados</span>
                      </li>
                    </ul>
                    <Link to="/transformacion-digital">
                      <Button className="bg-xappiens-purple hover:bg-xappiens-blue">
                        Más información
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>

              {/* Service 3 */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img 
                      src="/images/da.jpg" 
                      alt="Desarrollo de Aplicaciones" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-xappiens-purple/80 to-transparent"></div>
                    <div className="relative p-8 flex items-center justify-center h-full">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">Desarrollo de Aplicaciones</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-8">
                    <p className="mb-6 text-gray-600">
                      Creamos aplicaciones a medida, adaptadas a las necesidades específicas de tu negocio, 
                      utilizando las últimas tecnologías y metodologías ágiles para garantizar un producto 
                      de alta calidad y escalable.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Desarrollo web y móvil</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Aplicaciones empresariales</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Aplicaciones SaaS</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>E-commerce</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Integración de sistemas</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Mantenimiento y soporte</span>
                      </li>
                    </ul>
                    <Button className="bg-xappiens-purple hover:bg-xappiens-blue">
                      Más información
                    </Button>
                  </CardContent>
                </div>
              </Card>

              {/* Service 4 */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img 
                      src="/images/outsourcing.jpg" 
                      alt="Outsourcing" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-xappiens-purple/80 to-transparent"></div>
                    <div className="relative p-8 flex items-center justify-center h-full">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">Outsourcing</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-8">
                    <p className="mb-6 text-gray-600">
                      Ofrecemos servicios de externalización de personal IT para ayudarte a cubrir tus 
                      necesidades de recursos tecnológicos de forma flexible y eficiente, permitiéndote 
                      centrarte en tu core business.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Desarrollo de software</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Administración de sistemas</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Soporte técnico</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Seguridad informática</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Gestión de proyectos</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-xappiens-purple">✓</span>
                        <span>Analistas de datos</span>
                      </li>
                    </ul>
                    <Button className="bg-xappiens-purple hover:bg-xappiens-blue">
                      Más información
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos para discutir tus necesidades específicas y diseñar una solución a medida para tu empresa.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-xappiens-purple hover:bg-xappiens-blue">
                Solicitar información
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
