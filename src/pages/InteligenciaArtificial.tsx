import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const InteligenciaArtificial = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Inteligencia Artificial</h1>
              <p className="text-lg max-w-3xl mx-auto">
                Transformamos tu negocio con soluciones avanzadas de Inteligencia Artificial, 
                aplicadas a casos de uso reales para impulsar tu competitividad.
              </p>
            </div>
          </div>
        </section>

        {/* What is AI Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">¿Qué es la Inteligencia Artificial?</h2>
                <p className="text-gray-600 mb-4">
                  La Inteligencia Artificial (IA) es la simulación de procesos de inteligencia 
                  humana mediante ordenadores y sistemas informáticos. Estos procesos incluyen 
                  el aprendizaje, el razonamiento y la autocorrección.
                </p>
                <p className="text-gray-600 mb-6">
                  En Xappiens aplicamos la IA para resolver problemas empresariales reales, 
                  automatizar tareas repetitivas, analizar grandes volúmenes de datos y generar 
                  insights valiosos para la toma de decisiones.
                </p>
                <div className="bg-xappiens-purple/10 p-4 rounded-lg border border-xappiens-purple/20">
                  <p className="text-xappiens-purple font-semibold">
                    "La IA no se trata solo de tecnología, sino de cómo puede transformar 
                    tu negocio para hacerlo más eficiente, innovador y competitivo."
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/abelramos_ia.webp" 
                    alt="Abel Ramos - Experto en IA" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-xappiens-purple/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our AI Services */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestros servicios de IA</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-xappiens-purple/10 rounded-lg flex items-center justify-center text-xappiens-purple mb-4">
                  🤖
                </div>
                <h3 className="text-xl font-semibold mb-3">Chatbots y asistentes virtuales</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos chatbots inteligentes y asistentes virtuales que pueden interactuar 
                  con tus clientes de forma natural, responder preguntas y realizar tareas específicas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-xappiens-purple/10 rounded-lg flex items-center justify-center text-xappiens-purple mb-4">
                  📈
                </div>
                <h3 className="text-xl font-semibold mb-3">Análisis predictivo</h3>
                <p className="text-gray-600 mb-4">
                  Utilizamos algoritmos avanzados para analizar datos históricos y predecir 
                  tendencias futuras, ayudándote a tomar decisiones basadas en datos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-xappiens-purple/10 rounded-lg flex items-center justify-center text-xappiens-purple mb-4">
                  📝
                </div>
                <h3 className="text-xl font-semibold mb-3">Procesamiento de lenguaje natural</h3>
                <p className="text-gray-600 mb-4">
                  Implementamos soluciones que permiten a los ordenadores entender, interpretar 
                  y generar lenguaje humano de forma natural y contextual.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-xappiens-purple/10 rounded-lg flex items-center justify-center text-xappiens-purple mb-4">
                  👁️
                </div>
                <h3 className="text-xl font-semibold mb-3">Visión artificial</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos sistemas que pueden identificar y procesar imágenes y videos, 
                  permitiendo la automatización de tareas visuales complejas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-xappiens-purple/10 rounded-lg flex items-center justify-center text-xappiens-purple mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold mb-3">Sistemas de recomendación</h3>
                <p className="text-gray-600 mb-4">
                  Creamos sistemas que pueden ofrecer recomendaciones personalizadas a tus 
                  clientes basadas en sus preferencias y comportamientos previos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-xappiens-purple/10 rounded-lg flex items-center justify-center text-xappiens-purple mb-4">
                  ⚙️
                </div>
                <h3 className="text-xl font-semibold mb-3">Automatización inteligente</h3>
                <p className="text-gray-600 mb-4">
                  Automatizamos procesos empresariales utilizando IA para mejorar la eficiencia, 
                  reducir errores y liberar recursos humanos para tareas de mayor valor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Casos de éxito</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Sistema de recomendación para e-commerce
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Implementamos un sistema de recomendación basado en IA para una tienda online, 
                    aumentando las ventas cruzadas en un 35% y mejorando la experiencia de usuario.
                  </p>
                  <Button variant="outline" className="border-xappiens-purple text-xappiens-purple hover:bg-xappiens-purple hover:text-white">
                    Ver caso completo
                  </Button>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Chatbot de atención al cliente 24/7
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Desarrollamos un chatbot inteligente que redujo en un 60% las consultas al 
                    equipo de soporte, mejorando los tiempos de respuesta y la satisfacción del cliente.
                  </p>
                  <Button variant="outline" className="border-xappiens-purple text-xappiens-purple hover:bg-xappiens-purple hover:text-white">
                    Ver caso completo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-xappiens-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para implementar IA en tu negocio?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para una consulta gratuita y descubre cómo la IA puede 
              transformar tu empresa.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-white text-xappiens-blue hover:bg-gray-100">
                Solicitar consulta gratuita
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InteligenciaArtificial;
