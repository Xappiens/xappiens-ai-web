import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/AbelRamos_Xappiens.webp" alt="Xappiens Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-xappiens-text hover:text-xappiens-purple transition">
              Inicio
            </Link>
            <Link to="/servicios" className="text-xappiens-text hover:text-xappiens-purple transition">
              Servicios
            </Link>
            <Link to="/inteligencia-artificial" className="text-xappiens-text hover:text-xappiens-purple transition">
              Inteligencia Artificial
            </Link>
            <Link to="/transformacion-digital" className="text-xappiens-text hover:text-xappiens-purple transition">
              Transformación Digital
            </Link>
            <Link to="/formacion" className="text-xappiens-text hover:text-xappiens-purple transition">
              Formación
            </Link>
            <Link to="/consultoria" className="text-xappiens-text hover:text-xappiens-purple transition">
              Consultoría
            </Link>
            <Link to="/contacto">
              <Button className="bg-xappiens-purple text-white hover:bg-xappiens-blue transition-colors duration-200">
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-xappiens-text hover:text-xappiens-purple transition">
                Inicio
              </Link>
              <Link to="/servicios" className="text-xappiens-text hover:text-xappiens-purple transition">
                Servicios
              </Link>
              <Link to="/inteligencia-artificial" className="text-xappiens-text hover:text-xappiens-purple transition">
                Inteligencia Artificial
              </Link>
              <Link to="/transformacion-digital" className="text-xappiens-text hover:text-xappiens-purple transition">
                Transformación Digital
              </Link>
              <Link to="/formacion" className="text-xappiens-text hover:text-xappiens-purple transition">
                Formación
              </Link>
              <Link to="/consultoria" className="text-xappiens-text hover:text-xappiens-purple transition">
                Consultoría
              </Link>
              <Link to="/contacto">
                <Button className="w-full bg-xappiens-purple text-white hover:bg-xappiens-blue transition-colors duration-200">
                  Contacto
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
