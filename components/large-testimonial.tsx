import Image from "next/image";

export default function LargeTestimonial() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Testimonios de quienes han confiado en nosotros</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-3">
                <div className="relative inline-flex">
                  <svg
                    className="absolute -left-6 -top-2 -z-10"
                    width={40}
                    height={49}
                    viewBox="0 0 40 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                      fill="#D1D5DB"
                    />
                  </svg>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">JC</span>
                  </div>
                </div>
                <p className="text-lg text-gray-900">
                  "Vitahue ha sido fundamental en el desarrollo de nuestros proyectos de construcción. 
                  Su equipo profesional y maquinaria de calidad han superado nuestras expectativas."
                </p>
                <div className="text-sm font-medium text-gray-500">
                  <span className="text-gray-700">Juan Carlos Martínez</span>{" "}
                  <span className="text-gray-400">/</span>{" "}
                  <span className="text-blue-500">Constructora del Sur</span>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-3">
                <div className="relative inline-flex">
                  <svg
                    className="absolute -left-6 -top-2 -z-10"
                    width={40}
                    height={49}
                    viewBox="0 0 40 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                      fill="#D1D5DB"
                    />
                  </svg>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">ML</span>
                  </div>
                </div>
                <p className="text-lg text-gray-900">
                  "La calidad de los áridos y el servicio de transporte han sido excelentes. 
                  Siempre cumplen con los tiempos y mantienen altos estándares de calidad."
                </p>
                <div className="text-sm font-medium text-gray-500">
                  <span className="text-gray-700">María Luisa Rodríguez</span>{" "}
                  <span className="text-gray-400">/</span>{" "}
                  <span className="text-blue-500">Ingeniera Civil</span>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-3">
                <div className="relative inline-flex">
                  <svg
                    className="absolute -left-6 -top-2 -z-10"
                    width={40}
                    height={49}
                    viewBox="0 0 40 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                      fill="#D1D5DB"
                    />
                  </svg>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">RP</span>
                  </div>
                </div>
                <p className="text-lg text-gray-900">
                  "El arriendo de maquinaria con operadores ha sido una solución perfecta para nuestros proyectos. 
                  El equipo es moderno y los operadores son altamente calificados."
                </p>
                <div className="text-sm font-medium text-gray-500">
                  <span className="text-gray-700">Roberto Pérez</span>{" "}
                  <span className="text-gray-400">/</span>{" "}
                  <span className="text-blue-500">Director de Obras</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
