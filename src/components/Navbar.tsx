import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/xappiens.png"
              alt="Xappiens Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-xappiens-text hover:text-xappiens-purple transition"
            >
              Inicio
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Servicios <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link
                    to="/transformacion-digital"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Transformación Digital
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Soluciones tecnológicas para la transformación de su
                      negocio
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/formacion"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Formación
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Programas de formación especializados en tecnología
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/consultoria"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Consultoría
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Asesoramiento experto en tecnología y transformación
                      digital
                    </p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Frappe <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link
                    to="/erpnext"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      ERPNext
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Sistema ERP completo y de código abierto para la gestión
                      empresarial
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/frappe-crm"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Frappe CRM
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Gestión de relaciones con clientes integrada y
                      personalizable
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/raven-ai"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Raven AI
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Soluciones de inteligencia artificial para la
                      automatización de procesos
                    </p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/inteligencia-artificial"
              className="text-xappiens-text hover:text-xappiens-purple transition"
            >
              Inteligencia Artificial
            </Link>
            <Link to="/contacto">
              <Button className="bg-xappiens-purple text-white hover:bg-xappiens-blue transition-colors duration-200">
                Contacto
              </Button>
            </Link>
            <a
              href="https://wa.me/34614230720"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-xappiens-text hover:text-xappiens-purple transition"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <div className="flex flex-col space-y-2">
                <span className="text-xappiens-text font-medium">
                  Servicios
                </span>
                <Link
                  to="/transformacion-digital"
                  className="pl-4 text-xappiens-text hover:text-xappiens-purple transition"
                  onClick={() => setIsOpen(false)}
                >
                  Transformación Digital
                </Link>
                <Link
                  to="/formacion"
                  className="pl-4 text-xappiens-text hover:text-xappiens-purple transition"
                  onClick={() => setIsOpen(false)}
                >
                  Formación
                </Link>
                <Link
                  to="/consultoria"
                  className="pl-4 text-xappiens-text hover:text-xappiens-purple transition"
                  onClick={() => setIsOpen(false)}
                >
                  Consultoría
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-xappiens-text font-medium">Frappe</span>
                <Link
                  to="/erpnext"
                  className="pl-4 text-xappiens-text hover:text-xappiens-purple transition"
                  onClick={() => setIsOpen(false)}
                >
                  ERPNext
                </Link>
                <Link
                  to="/frappe-crm"
                  className="pl-4 text-xappiens-text hover:text-xappiens-purple transition"
                  onClick={() => setIsOpen(false)}
                >
                  Frappe CRM
                </Link>
                <Link
                  to="/raven-ai"
                  className="pl-4 text-xappiens-text hover:text-xappiens-purple transition"
                  onClick={() => setIsOpen(false)}
                >
                  Raven AI
                </Link>
              </div>
              <Link
                to="/inteligencia-artificial"
                className="text-xappiens-text hover:text-xappiens-purple transition"
                onClick={() => setIsOpen(false)}
              >
                Inteligencia Artificial
              </Link>
              <Link to="/contacto" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-xappiens-purple text-white hover:bg-xappiens-blue transition-colors duration-200">
                  Contacto
                </Button>
              </Link>
              <a
                href="https://wa.me/34614230720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-200">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
