
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
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-xappiens-blue">
              <span className="text-xappiens-purple">X</span>appiens
            </span>
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
            <Link to="/contacto" className="text-xappiens-text hover:text-xappiens-purple transition">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-xappiens-text hover:text-xappiens-purple transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/servicios" 
                className="text-xappiens-text hover:text-xappiens-purple transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/inteligencia-artificial" 
                className="text-xappiens-text hover:text-xappiens-purple transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inteligencia Artificial
              </Link>
              <Link 
                to="/transformacion-digital" 
                className="text-xappiens-text hover:text-xappiens-purple transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Transformación Digital
              </Link>
              <Link 
                to="/formacion" 
                className="text-xappiens-text hover:text-xappiens-purple transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Formación
              </Link>
              <Link 
                to="/consultoria" 
                className="text-xappiens-text hover:text-xappiens-purple transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Consultoría
              </Link>
              <Link 
                to="/contacto" 
                className="text-xappiens-text hover:text-xappiens-purple transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
