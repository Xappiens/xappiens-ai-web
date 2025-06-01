
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Consultoria = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding for the fixed navbar */}
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Consultoría Tecnológica</h1>
              <p className="text-lg max-w-3xl mx-auto">
                Asesoramiento estratégico para optimizar tus procesos, implementar nuevas 
                tecnologías y potenciar la innovación en tu empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Our Consulting Services */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros servicios de consultoría</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ofrecemos asesoramiento experto en diversas áreas tecnológicas para 
                ayudarte a tomar las mejores decisiones para tu negocio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-xappiens-purple">Estrategia Tecnológica</h3>
                <p className="text-gray-600 mb-6">
                  Desarrollamos un plan estratégico tecnológico alineado con tus objetivos de 
                  negocio, identificando las tecnologías más adecuadas para tu empresa y definiendo 
                  la hoja de ruta para su implementación.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Análisis de la situación actual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Definición de objetivos tecnológicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Selección de tecnologías</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Planificación de la implementación</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-xappiens-purple">Optimización de Procesos</h3>
                <p className="text-gray-600 mb-6">
                  Analizamos tus procesos actuales para identificar ineficiencias y oportunidades 
                  de mejora, implementando soluciones tecnológicas que aumenten la productividad 
                  y reduzcan costes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Mapeo de procesos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Identificación de cuellos de botella</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Automatización de tareas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Medición y mejora continua</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-xappiens-purple">Arquitectura de Sistemas</h3>
                <p className="text-gray-600 mb-6">
                  Diseñamos arquitecturas tecnológicas escalables, seguras y eficientes, 
                  adaptadas a las necesidades específicas de tu negocio y preparadas para 
                  el crecimiento futuro.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Diseño de arquitecturas cloud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Integración de sistemas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Arquitecturas de microservicios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Seguridad y cumplimiento normativo</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-xappiens-purple">Interim Management IT</h3>
                <p className="text-gray-600 mb-6">
                  Proporcionamos profesionales experimentados para cubrir puestos directivos 
                  o técnicos de forma temporal, garantizando la continuidad operativa y el 
                  éxito de los proyectos tecnológicos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>CIO/CTO temporal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Director de proyectos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Arquitecto de soluciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xappiens-purple mr-2">✓</span>
                    <span>Especialistas técnicos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nuestro enfoque de consultoría se basa en entender profundamente tu negocio 
                y proporcionar soluciones prácticas y efectivas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple text-xl mb-4">
                  💡
                </div>
                <h3 className="text-lg font-semibold mb-2">Experiencia Multisectorial</h3>
                <p className="text-gray-600">
                  Hemos trabajado con empresas de diversos sectores, lo que nos permite 
                  aplicar las mejores prácticas y aprendizajes de diferentes industrias.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple text-xl mb-4">
                  🔍
                </div>
                <h3 className="text-lg font-semibold mb-2">Enfoque Personalizado</h3>
                <p className="text-gray-600">
                  No aplicamos soluciones genéricas. Cada proyecto de consultoría se adapta 
                  a las necesidades específicas y realidades de tu empresa.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple text-xl mb-4">
                  🚀
                </div>
                <h3 className="text-lg font-semibold mb-2">Orientación a Resultados</h3>
                <p className="text-gray-600">
                  Nos centramos en generar valor tangible para tu negocio, con recomendaciones 
                  prácticas y accionables que puedas implementar rápidamente.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple text-xl mb-4">
                  🤝
                </div>
                <h3 className="text-lg font-semibold mb-2">Acompañamiento Continuo</h3>
                <p className="text-gray-600">
                  No solo entregamos un informe. Te acompañamos durante todo el proceso de 
                  implementación, asegurándonos de que obtengas los resultados esperados.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple text-xl mb-4">
                  🔄
                </div>
                <h3 className="text-lg font-semibold mb-2">Mejora Continua</h3>
                <p className="text-gray-600">
                  Establecemos métricas y sistemas de seguimiento para evaluar el impacto 
                  de nuestras recomendaciones y ajustarlas si es necesario.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple text-xl mb-4">
                  📚
                </div>
                <h3 className="text-lg font-semibold mb-2">Transferencia de Conocimiento</h3>
                <p className="text-gray-600">
                  Capacitamos a tu equipo para que pueda mantener y evolucionar las 
                  soluciones implementadas, reduciendo la dependencia externa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies - Simple Version */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Casos de éxito</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre cómo hemos ayudado a otras empresas a optimizar sus procesos 
                y potenciar su negocio a través de la consultoría tecnológica.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Transformación digital en empresa de logística</h3>
                <p className="text-gray-500 mb-4">Sector: Logística y transporte</p>
                <p className="text-gray-600 mb-4">
                  Asesoramos a una empresa de logística en su proceso de transformación digital, 
                  implementando sistemas de gestión de flotas, optimización de rutas y trazabilidad 
                  de envíos, logrando una reducción del 20% en costes operativos.
                </p>
                <Button variant="outline" className="border-xappiens-purple text-xappiens-purple hover:bg-xappiens-purple hover:text-white">
                  Ver caso completo
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Modernización de infraestructura IT</h3>
                <p className="text-gray-500 mb-4">Sector: Servicios financieros</p>
                <p className="text-gray-600 mb-4">
                  Diseñamos e implementamos una estrategia de migración al cloud para una empresa 
                  del sector financiero, mejorando la seguridad, escalabilidad y reduciendo los 
                  costes de infraestructura en un 35%.
                </p>
                <Button variant="outline" className="border-xappiens-purple text-xappiens-purple hover:bg-xappiens-purple hover:text-white">
                  Ver caso completo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-xappiens-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tu negocio?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos para una consulta inicial gratuita y descubre cómo podemos 
              ayudarte a alcanzar tus objetivos empresariales.
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

export default Consultoria;
