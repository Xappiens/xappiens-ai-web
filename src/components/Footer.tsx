import React from 'react';
import { Link } from 'react-router-dom';
import { VERSION } from '../config/version';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Xappiens</h3>
            <p className="text-gray-400">
              Transformando el futuro digital de las empresas con soluciones innovadoras.
            </p>
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
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">info@xappiens.com</li>
              <li className="text-gray-400">+34 900 123 456</li>
              <li className="text-gray-400">Madrid, España</li>
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
