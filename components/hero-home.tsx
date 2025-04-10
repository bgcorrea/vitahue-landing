import Image from "next/image";
import PageIllustration from "./page-illustration";

export default function Hero() {
  return (
    <section className="relative bg-tierra-50">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="text-center pb-12 md:pb-16">
            {/* Título con Efecto de Tierra y Textura de Áridos */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 bg-gradient-to-tr from-tierra-200 via-tierra-400 to-tierra-600 rounded-lg blur opacity-20"></div>
              <div className="absolute -inset-1 bg-[url('/images/stripes.svg')] opacity-10 scale-75 rotate-12"></div>
              <div className="absolute -inset-1 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_100%)]"></div>
              <h1 className="relative mb-6 font-montserrat text-5xl font-extrabold text-tierra-900 md:text-7xl tracking-widest">
                VITAHUE
              </h1>
            </div>

            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-xl font-montserrat font-medium text-tierra-600"
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
                    href="#cotizacion"
                  >
                    Solicitar Cotización
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-tierra-600 hover:bg-tierra-700 w-full sm:w-auto flex items-center justify-center"
                    href="https://wa.me/56975874101"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
