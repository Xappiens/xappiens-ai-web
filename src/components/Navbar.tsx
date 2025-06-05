import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Xappiens
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary">
              Inicio
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/servicios">
                    <NavigationMenuTrigger className="text-foreground hover:text-primary">
                      Servicios
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/transformacion-digital"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Transformación Digital
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Soluciones tecnológicas para la transformación de tu
                            negocio
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
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
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/consultoria"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Consultoría
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Asesoramiento experto para optimizar tus procesos
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/frappe">
                    <NavigationMenuTrigger className="text-foreground hover:text-primary">
                      Frappe
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/frappe/erpnext"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            ERPNext
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Sistema ERP completo y de código abierto
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/frappe/crm"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Frappe CRM
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Gestión de relaciones con clientes moderna y
                            flexible
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/frappe/raven-ai"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Raven AI
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Plataforma de IA para automatización y análisis
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/contacto" className="hover:text-primary">
              Contacto
            </Link>
            <a
              href="https://wa.me/34614230720"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <div className="space-y-2">
                <div className="font-medium">Servicios</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/transformacion-digital"
                    className="block hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Transformación Digital
                  </Link>
                  <Link
                    to="/formacion"
                    className="block hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Formación
                  </Link>
                  <Link
                    to="/consultoria"
                    className="block hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Consultoría
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium">Frappe</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/frappe/erpnext"
                    className="block hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    ERPNext
                  </Link>
                  <Link
                    to="/frappe/crm"
                    className="block hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Frappe CRM
                  </Link>
                  <Link
                    to="/frappe/raven-ai"
                    className="block hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Raven AI
                  </Link>
                </div>
              </div>
              <Link
                to="/contacto"
                className="hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <a
                href="https://wa.me/34614230720"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors inline-block"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
