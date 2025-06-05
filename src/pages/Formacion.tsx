import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Target } from 'lucide-react';

const Formacion = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-24 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-12 right-12 w-18 h-18 bg-emerald-400/20 rounded-full animate-float"></div>
            <div className="absolute top-44 left-16 w-14 h-14 bg-teal-400/20 rounded-full animate-float" style={{animationDelay: '1.4s'}}></div>
            <div className="absolute bottom-28 right-1/4 w-10 h-10 bg-cyan-400/20 rounded-full animate-float" style={{animationDelay: '0.9s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-emerald-400/20 rounded-full animate-float" style={{animationDelay: '2.3s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
                <GraduationCap className="h-4 w-4 text-emerald-400 mr-2" />
                <span className="text-white text-sm font-medium">Desarrollo Profesional Avanzado</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
                <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                  Formación Especializada
                </span>
                <br />
                <span className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  que Transforma Carreras
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-emerald-100 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
                Potenciamos el talento de tu equipo con programas formativos de vanguardia 
                en tecnología, innovación y transformación digital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Link to="/contacto">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 px-8 py-4 text-lg group"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Eleva tu potencial
                    <Target className="ml-2 h-5 w-5 group-hover:animate-pulse" />
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
                  src="/images/formacion.jpg" 
                  alt="Formación especializada" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_50px_100px_rgba(16,185,129,0.3)] cursor-pointer relative z-10"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform group-hover:scale-110"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Training Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué formarse con Xappiens?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En un entorno tecnológico en constante evolución, la formación continua 
                es clave para mantener a tu equipo actualizado y competitivo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-xappiens-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-xappiens-purple text-2xl">
                  👨‍🏫
                </div>
                <h3 className="text-xl font-semibold mb-3">Formadores expertos</h3>
                <p className="text-gray-600">
                  Nuestros formadores son profesionales con amplia experiencia 
                  práctica en el sector tecnológico.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-xappiens-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-xappiens-purple text-2xl">
                  ⚙️
                </div>
                <h3 className="text-xl font-semibold mb-3">Enfoque práctico</h3>
                <p className="text-gray-600">
                  Formación orientada a la aplicación real de los conocimientos 
                  adquiridos en el entorno laboral.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-xappiens-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-xappiens-purple text-2xl">
                  🔄
                </div>
                <h3 className="text-xl font-semibold mb-3">Contenido actualizado</h3>
                <p className="text-gray-600">
                  Programas formativos constantemente actualizados con las últimas 
                  tendencias y tecnologías.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Catalog */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestro catálogo formativo</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ofrecemos una amplia variedad de programas formativos adaptados a diferentes 
                perfiles profesionales y necesidades empresariales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <img src="/images/cloud-computing.jpg" alt="Inteligencia Artificial y Machine Learning" className="h-48 w-full object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Inteligencia Artificial y Machine Learning</h3>
                  <p className="text-gray-600 mb-4">
                    Aprende los fundamentos y aplicaciones prácticas de la IA y el Machine Learning. 
                    Desde algoritmos básicos hasta implementaciones avanzadas en entornos empresariales.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Python
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      TensorFlow
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      PyTorch
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Deep Learning
                    </span>
                  </div>
                  <Button className="w-full bg-xappiens-purple hover:bg-xappiens-blue">
                    Solicitar información
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <img src="/images/full-stack.jpg" alt="Desarrollo Web Fullstack" className="h-48 w-full object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Desarrollo Web Fullstack</h3>
                  <p className="text-gray-600 mb-4">
                    Domina el desarrollo web completo, desde el frontend con las últimas 
                    tecnologías hasta el backend con arquitecturas modernas y bases de datos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      JavaScript
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      React
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Node.js
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      SQL/NoSQL
                    </span>
                  </div>
                  <Button className="w-full bg-xappiens-purple hover:bg-xappiens-blue">
                    Solicitar información
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <img src="/images/otra-imagen.jpg" alt="Cloud Computing y DevOps" className="h-48 w-full object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cloud Computing y DevOps</h3>
                  <p className="text-gray-600 mb-4">
                    Aprende a desplegar y gestionar infraestructuras en la nube, automatizar 
                    procesos de desarrollo y garantizar la entrega continua de software.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      AWS
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Azure
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Docker
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Kubernetes
                    </span>
                  </div>
                  <Button className="w-full bg-xappiens-purple hover:bg-xappiens-blue">
                    Solicitar información
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <img src="/images/agile.jpg" alt="Gestión Ágil de Proyectos" className="h-48 w-full object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Gestión Ágil de Proyectos</h3>
                  <p className="text-gray-600 mb-4">
                    Domina las metodologías ágiles para la gestión eficiente de proyectos 
                    tecnológicos, mejorando la productividad y la satisfacción del cliente.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Scrum
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Kanban
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      Lean
                    </span>
                    <span className="bg-xappiens-purple/10 text-xappiens-purple text-sm px-3 py-1 rounded-full">
                      DevOps
                    </span>
                  </div>
                  <Button className="w-full bg-xappiens-purple hover:bg-xappiens-blue">
                    Solicitar información
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg mb-6">
                ¿No encuentras lo que buscas? Podemos diseñar un programa formativo a medida para tu empresa.
              </p>
              <Button className="bg-xappiens-purple hover:bg-xappiens-blue">
                Formación a medida
              </Button>
            </div>
          </div>
        </section>

        {/* Training Formats */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Modalidades de formación</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Adaptamos nuestros programas formativos a las necesidades y preferencias de tu equipo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-xappiens-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-xappiens-purple text-2xl">
                  🏢
                </div>
                <h3 className="text-xl font-semibold mb-3">Presencial</h3>
                <p className="text-gray-600">
                  Formación impartida en tus instalaciones o en nuestras aulas, 
                  con interacción directa con el formador.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-xappiens-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-xappiens-purple text-2xl">
                  💻
                </div>
                <h3 className="text-xl font-semibold mb-3">Online en directo</h3>
                <p className="text-gray-600">
                  Clases en tiempo real a través de videoconferencia, 
                  con la misma interacción que en la formación presencial.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-xappiens-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-xappiens-purple text-2xl">
                  🎓
                </div>
                <h3 className="text-xl font-semibold mb-3">E-Learning</h3>
                <p className="text-gray-600">
                  Formación flexible a través de nuestra plataforma online, 
                  con contenidos interactivos y seguimiento personalizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-xappiens-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para potenciar el talento de tu equipo?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contacta con nosotros para diseñar un plan de formación a medida para tu empresa.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-white text-xappiens-blue hover:bg-gray-100">
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

export default Formacion;
