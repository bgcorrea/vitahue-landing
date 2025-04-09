import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="bg-tierra-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-tierra-800">Nuestras Ventajas</h2>
            <p className="text-xl text-tierra-600">Por qué elegirnos para tu proyecto</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Experiencia Comprobada */}
            <div className="relative flex flex-col bg-white p-6 rounded-lg shadow-lg border border-tierra-200">
              <div className="mb-4">
                <div className="w-12 h-12 bg-tierra-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-tierra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-tierra-700">Experiencia Comprobada</h3>
              <p className="text-tierra-600">Años de experiencia en el sector de la construcción y desarrollo de infraestructura.</p>
            </div>

            {/* Maquinaria Moderna */}
            <div className="relative flex flex-col bg-white p-6 rounded-lg shadow-lg border border-tierra-200">
              <div className="mb-4">
                <div className="w-12 h-12 bg-tierra-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-tierra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-tierra-700">Maquinaria Moderna</h3>
              <p className="text-tierra-600">Flota de maquinaria pesada de última generación para garantizar eficiencia y seguridad.</p>
            </div>

            {/* Calidad Garantizada */}
            <div className="relative flex flex-col bg-white p-6 rounded-lg shadow-lg border border-tierra-200">
              <div className="mb-4">
                <div className="w-12 h-12 bg-tierra-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-tierra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-tierra-700">Calidad Garantizada</h3>
              <p className="text-tierra-600">Materiales y servicios de alta calidad que cumplen con los estándares más exigentes.</p>
            </div>

            {/* Servicio Personalizado */}
            <div className="relative flex flex-col bg-white p-6 rounded-lg shadow-lg border border-tierra-200">
              <div className="mb-4">
                <div className="w-12 h-12 bg-tierra-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-tierra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-tierra-700">Servicio Personalizado</h3>
              <p className="text-tierra-600">Atención personalizada y soluciones adaptadas a las necesidades específicas de cada proyecto.</p>
            </div>

            {/* Compromiso Ambiental */}
            <div className="relative flex flex-col bg-white p-6 rounded-lg shadow-lg border border-tierra-200">
              <div className="mb-4">
                <div className="w-12 h-12 bg-tierra-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-tierra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-tierra-700">Compromiso Ambiental</h3>
              <p className="text-tierra-600">Prácticas sostenibles y respetuosas con el medio ambiente en todas nuestras operaciones.</p>
            </div>

            {/* Soporte 24/7 */}
            <div className="relative flex flex-col bg-white p-6 rounded-lg shadow-lg border border-tierra-200">
              <div className="mb-4">
                <div className="w-12 h-12 bg-tierra-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-tierra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-tierra-700">Soporte 24/7</h3>
              <p className="text-tierra-600">Atención y soporte técnico disponible las 24 horas, los 7 días de la semana.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
