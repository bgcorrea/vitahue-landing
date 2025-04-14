import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si el usuario ha bajado más allá de la altura de la pantalla
      const isScrolled = window.scrollY > window.innerHeight;
      if (isScrolled !== visible) {
        setVisible(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  // Función para desplazamiento suave al inicio
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMenuOpen(false); // Cerrar el menú al hacer clic en Inicio
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 z-30 w-full transition-all duration-700 ease-in-out py-2 ${
        visible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-20 pointer-events-none'
      } sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 transition-all duration-300 bg-transparent">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Botón de menú hamburguesa para móviles */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-tierra-700 hover:text-tierra-900 hover:bg-white/90 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!menuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Menú de navegación para desktop */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/"
                onClick={scrollToTop}
                className="btn-sm bg-white/90 text-tierra-700 hover:bg-white hover:text-tierra-900 transition-colors duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/#servicios"
                className="btn-sm bg-white/90 text-tierra-700 hover:bg-white hover:text-tierra-900 transition-colors duration-300"
              >
                Nuestros Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/#cotizacion"
                className="btn-sm bg-white/90 text-tierra-700 hover:bg-white hover:text-tierra-900 transition-colors duration-300"
              >
                Solicitar Cotización
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/56975874101"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm bg-white/90 text-tierra-700 hover:bg-white hover:text-tierra-900 transition-colors duration-300"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-lg mt-2 mx-4 shadow-lg">
          <Link
            href="/"
            onClick={scrollToTop}
            className="block px-3 py-2 rounded-md text-base font-medium text-tierra-700 hover:bg-tierra-100 hover:text-tierra-900"
          >
            Inicio
          </Link>
          <Link
            href="/#servicios"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-tierra-700 hover:bg-tierra-100 hover:text-tierra-900"
          >
            Nuestros Servicios
          </Link>
          <Link
            href="/#cotizacion"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-tierra-700 hover:bg-tierra-100 hover:text-tierra-900"
          >
            Solicitar Cotización
          </Link>
          <Link
            href="https://wa.me/56975874101"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-tierra-700 hover:bg-tierra-100 hover:text-tierra-900"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
