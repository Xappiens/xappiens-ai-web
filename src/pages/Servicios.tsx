import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Settings, Star, Layers } from 'lucide-react';

const Servicios = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-24 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-16 w-20 h-20 bg-purple-400/20 rounded-full animate-float"></div>
            <div className="absolute top-36 right-24 w-14 h-14 bg-indigo-400/20 rounded-full animate-float" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute bottom-24 left-1/3 w-10 h-10 bg-slate-400/20 rounded-full animate-float" style={{animationDelay: '2.1s'}}></div>
            <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '0.7s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
                <Settings className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-white text-sm font-medium">Soluciones Tecnológicas Integrales</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
                <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
                  Nuestros Servicios
                </span>
                <br />
                <span className="text-3xl md:text-5xl bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  Tecnología que Impulsa
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-purple-100 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
                Ofrecemos un ecosistema completo de servicios tecnológicos diseñados 
                para potenciar el crecimiento y la innovación de tu empresa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Link to="/contacto">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 py-4 text-lg group"
                  >
                    <Star className="mr-2 h-5 w-5" />
                    Explora nuestras soluciones
                    <Layers className="ml-2 h-5 w-5 group-hover:animate-spin" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Hero visual elements */}
          <div className="container mx-auto px-4 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { img: "/images/ia.jpg", title: "IA" },
                  { img: "/images/td.jpg", title: "Transformación" },
                  { img: "/images/da.jpg", title: "Desarrollo" },
                  { img: "/images/outsourcing.jpg", title: "Outsourcing" }
                ].map((service, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-32 object-cover rounded-xl shadow-lg border border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(139,92,246,0.3)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-2">
                      <span className="text-white text-sm font-semibold">{service.title}</span>
                    </div>
                  </div>
                ))}
              </div>
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
