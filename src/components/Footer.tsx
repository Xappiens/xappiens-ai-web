import React from 'react';
import { Link } from 'react-router-dom';
import { VERSION } from '../config/version';
import { Brain, ExternalLink, MessageCircle, Youtube } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "34614230720";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/xappiens.png.png" alt="Xappiens Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 mb-4">
              Transformando el futuro digital de las empresas con soluciones innovadoras.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">info@xappiens.com</p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-400">+34 614 230 720</p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors"
                  title="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400">Madrid, España</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition">Desarrollo Web</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition">Inteligencia Artificial</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition">Transformación Digital</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition">Consultoría</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition">Formación</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Proyectos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.workya.pro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  WorkYa.pro
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://canadabcexperience.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  CanadaBCExperience
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.abelramos.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  Abel Ramos
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacidad" className="text-gray-400 hover:text-white transition">Política de Privacidad</Link></li>
              <li><Link to="/terminos" className="text-gray-400 hover:text-white transition">Términos y Condiciones</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="mt-12 mb-8">
          <h4 className="text-xl font-semibold mb-6 text-center">Síguenos en YouTube</h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a 
              href="https://www.youtube.com/@abelramosc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Youtube className="w-6 h-6 text-red-500" />
              <div>
                <span className="font-medium">Abel Ramos</span>
                <p className="text-sm text-gray-400">Tecnología y Desarrollo</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
            <a 
              href="https://www.youtube.com/@HayunaIAparaeso" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Youtube className="w-6 h-6 text-red-500" />
              <div>
                <span className="font-medium">Hay una IA para eso</span>
                <p className="text-sm text-gray-400">Inteligencia Artificial</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Xappiens. Todos los derechos reservados.</p>
          <p className="mt-1">Versión {VERSION.toString()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
