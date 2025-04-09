export default function CTA() {
  return (
    <section className="relative bg-tierra-800 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-tierra-700 py-16 px-8 md:px-12">
          <div className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                ¿Listo para comenzar tu próximo proyecto?
              </h2>
              <p className="mt-4 text-lg text-tierra-200">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos de construcción.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-lg bg-cat-500 px-8 py-3 text-center font-medium text-white transition duration-150 ease-in-out hover:bg-cat-600"
                  href="#0"
                >
                  Solicitar Cotización
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-lg border border-tierra-500 bg-transparent px-8 py-3 text-center font-medium text-white transition duration-150 ease-in-out hover:bg-tierra-600"
                  href="#0"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
