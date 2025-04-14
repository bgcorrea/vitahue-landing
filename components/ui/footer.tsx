import Link from "next/link";
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="bg-tierra-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:grid md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-tierra-200 text-sm">
              Expertos en áridos, movimiento de tierras y arriendo de maquinaria.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="text-sm font-semibold text-tierra-200 tracking-wider uppercase">Contacto</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="tel:+56912345678" className="text-base text-tierra-200 hover:text-tierra-100">
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <p className="text-base text-tierra-200">
                  Región Metropolitana
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 border-t border-tierra-700 pt-4 text-center">
          <p className="text-sm text-tierra-200">
            &copy; {new Date().getFullYear()} Vitahue. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
