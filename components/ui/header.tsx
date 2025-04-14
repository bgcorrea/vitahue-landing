import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);

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
  };

  return (
    <header 
      className={`fixed top-0 z-30 w-full transition-all duration-700 ease-in-out py-2 ${
        visible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-20 pointer-events-none'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 transition-all duration-300 bg-transparent">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
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
                href="https://wa.me/56912345678"
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
    </header>
  );
}
