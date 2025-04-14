import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-tierra-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center">
            <h2 className="h2 mb-4 text-tierra-800">¿Listo para comenzar tu próximo proyecto?</h2>
            <p className="text-xl text-tierra-600 mb-8">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos de construcción
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/#cotizacion" 
                className="btn bg-tierra-600 hover:bg-tierra-700 text-white font-montserrat"
              >
                Solicitar Cotización
              </Link>
              <Link 
                href="https://wa.me/56975874101" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-white text-tierra-700 hover:bg-tierra-50 font-montserrat"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
