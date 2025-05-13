
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-xappiens-blue text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-xappiens-purple">X</span>appiens
            </h3>
            <p className="text-gray-300 mb-4">
              Empresa líder en transformación digital, desarrollo de aplicaciones, 
              inteligencia artificial, formación y consultoría IT.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-xappiens-purple transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-xappiens-purple transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/inteligencia-artificial" className="text-gray-300 hover:text-xappiens-purple transition">
                  Inteligencia Artificial
                </Link>
              </li>
              <li>
                <Link to="/transformacion-digital" className="text-gray-300 hover:text-xappiens-purple transition">
                  Transformación Digital
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-xappiens-purple transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-xappiens-purple transition">
                  Desarrollo de aplicaciones
                </Link>
              </li>
              <li>
                <Link to="/transformacion-digital" className="text-gray-300 hover:text-xappiens-purple transition">
                  Transformación digital
                </Link>
              </li>
              <li>
                <Link to="/formacion" className="text-gray-300 hover:text-xappiens-purple transition">
                  Formación
                </Link>
              </li>
              <li>
                <Link to="/consultoria" className="text-gray-300 hover:text-xappiens-purple transition">
                  Consultoría
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-xappiens-purple transition">
                  Outsourcing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-300 mb-2">Calle Innovación, 123</p>
            <p className="text-gray-300 mb-2">28001 Madrid, España</p>
            <p className="text-gray-300 mb-2">info@xappiens.com</p>
            <p className="text-gray-300 mb-2">+34 900 123 456</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Xappiens. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <Link to="/privacidad" className="text-gray-400 text-sm hover:text-xappiens-purple transition">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/terminos" className="text-gray-400 text-sm hover:text-xappiens-purple transition">
                    Términos de uso
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-400 text-sm hover:text-xappiens-purple transition">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
