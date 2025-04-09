import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative bg-tierra-50">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold text-tierra-800 md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              VITAHUE <br className="max-lg:hidden" />
              Soluciones en Construcción
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-tierra-600"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Expertos en áridos, movimiento de tierras y arriendo de maquinaria pesada. 
                Brindamos soluciones integrales para proyectos de construcción y desarrollo de infraestructura.
              </p>
              <div>
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-cat-500 text-tierra-900 font-bold shadow-lg hover:bg-cat-400 sm:mb-0 sm:w-auto"
                    href="#servicios"
                  >
                    <span className="relative inline-flex items-center">
                      Nuestros Servicios{" "}
                      <span className="ml-1 tracking-normal text-tierra-900 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-cat-500 text-tierra-900 font-bold shadow-lg hover:bg-cat-400 sm:ml-4 sm:w-auto"
                    href="#contacto"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-acero-900 px-5 py-3 shadow-xl">
              <Image
                src="/images/maquinaria-hero.jpg"
                alt="Maquinaria pesada en acción"
                width={1200}
                height={675}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
