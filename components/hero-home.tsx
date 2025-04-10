import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-tierra-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Hero content */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold text-tierra-800 md:text-6xl"
              data-aos="fade-up"
            >
              VITAHUE
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-lg text-tierra-600"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Soluciones en Construcción
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-cat-600 hover:bg-cat-700 w-full mb-4 sm:w-auto sm:mb-0 sm:mr-4"
                    href="#0"
                  >
                    Solicitar Cotización
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-tierra-600 hover:bg-tierra-700 w-full sm:w-auto"
                    href="#0"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="relative max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="relative aspect-video rounded-2xl bg-acero-900 px-5 py-3 shadow-xl">
              <Image
                src="/images/maquinaria-hero.jpg"
                alt="Maquinaria pesada en acción"
                width={1200}
                height={675}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
