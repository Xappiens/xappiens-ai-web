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
            <h3 className="text-xl font-bold mb-4">Xappiens</h3>
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
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Redes Sociales</h4>
              <div className="space-y-2">
                <a 
                  href="https://www.youtube.com/@abelramosc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <Youtube className="w-5 h-5 mr-2 text-red-500" />
                  <span>Abel Ramos</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a 
                  href="https://www.youtube.com/@HayunaIAparaeso" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <Youtube className="w-5 h-5 mr-2 text-red-500" />
                  <span>Hay una IA para eso</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition">Servicios</Link></li>
              <li><Link to="/inteligencia-artificial" className="text-gray-400 hover:text-white transition">IA</Link></li>
              <li><Link to="/transformacion-digital" className="text-gray-400 hover:text-white transition">Transformación Digital</Link></li>
              <li><Link to="/formacion" className="text-gray-400 hover:text-white transition">Formación</Link></li>
              <li><Link to="/consultoria" className="text-gray-400 hover:text-white transition">Consultoría</Link></li>
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
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Xappiens. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-400 text-sm">
              <Brain className="w-4 h-4 mr-2" />
              <span>Desarrollado con IA</span>
            </div>
            <div className="text-gray-400 text-sm">
              {VERSION.toString()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
