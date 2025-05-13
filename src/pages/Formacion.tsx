
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';

const Formacion = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Formación Especializada</h1>
              <p className="text-lg max-w-3xl mx-auto">
                Desarrolla el talento de tu equipo con nuestra formación especializada 
                en tecnología, transformación digital e innovación.
              </p>
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
                <div className="h-48 bg-xappiens-blue"></div>
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
                <div className="h-48 bg-xappiens-purple"></div>
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
                <div className="h-48 bg-xappiens-sky"></div>
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
                <div className="h-48 bg-xappiens-blue/70"></div>
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
