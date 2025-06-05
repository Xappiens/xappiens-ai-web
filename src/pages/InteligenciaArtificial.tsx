import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, Zap } from 'lucide-react';

const InteligenciaArtificial = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* Reduced padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white py-24 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-float"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
                <Brain className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-white text-sm font-medium">Inteligencia Artificial Avanzada</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
                <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
                  Inteligencia Artificial
                </span>
                <br />
                <span className="text-3xl md:text-5xl bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  que Transforma tu Negocio
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-purple-100 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
                Implementamos soluciones avanzadas de IA que automatizan procesos, 
                analizan datos inteligentemente y potencian tu competitividad empresarial.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Link to="/contacto">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 py-4 text-lg group"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Descubre el poder de la IA
                    <Zap className="ml-2 h-5 w-5 group-hover:animate-bounce" />
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
                  src="/images/abelramos_ia.webp" 
                  alt="Abel Ramos - Experto en IA" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_50px_100px_rgba(139,92,246,0.3)] cursor-pointer relative z-10"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform group-hover:scale-110"></div>
              </div>
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
                <div className="h-48">
                  <img 
                    src="/images/recomendacion.jpg" 
                    alt="Sistema de recomendación para e-commerce" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <div className="h-48">
                  <img 
                    src="/images/chatbots.jpg" 
                    alt="Chatbot de atención al cliente 24/7" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
