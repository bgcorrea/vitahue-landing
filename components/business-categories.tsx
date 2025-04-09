import Image from "next/image";

export default function BusinessCategories() {
  return (
    <section id="servicios" className="bg-tierra-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4 text-acero-800">Nuestros Servicios</h2>
          <p className="text-xl text-acero-600">Soluciones integrales para tu proyecto de construcción</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Áridos */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-tierra-200">
            <div className="w-12 h-12 bg-tierra-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-tierra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-acero-700">Áridos</h3>
            <p className="text-acero-600">Suministro de áridos de alta calidad para construcción y obras civiles.</p>
          </div>

          {/* Movimiento de Tierras */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-tierra-200">
            <div className="w-12 h-12 bg-tierra-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-tierra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-acero-700">Movimiento de Tierras</h3>
            <p className="text-acero-600">Servicios profesionales de excavación, nivelación y preparación de terrenos.</p>
          </div>

          {/* Arriendo de Maquinaria */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-tierra-200">
            <div className="w-12 h-12 bg-maquinaria-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-maquinaria-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-acero-700">Arriendo de Maquinaria</h3>
            <p className="text-acero-600">Amplia flota de maquinaria pesada disponible para arriendo con operadores calificados.</p>
          </div>

          {/* Transporte de Materiales */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-tierra-200">
            <div className="w-12 h-12 bg-hormigon-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-hormigon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-acero-700">Transporte de Materiales</h3>
            <p className="text-acero-600">Servicio de transporte eficiente de materiales para obras y proyectos.</p>
          </div>

          {/* Asesoría Técnica */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-tierra-200">
            <div className="w-12 h-12 bg-acero-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-acero-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-acero-700">Asesoría Técnica</h3>
            <p className="text-acero-600">Consultoría especializada en proyectos de construcción y desarrollo de infraestructura.</p>
          </div>

          {/* Mantenimiento de Maquinaria */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-tierra-200">
            <div className="w-12 h-12 bg-maquinaria-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-maquinaria-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-acero-700">Mantenimiento de Maquinaria</h3>
            <p className="text-acero-600">Servicio técnico especializado para mantener tu maquinaria en óptimas condiciones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
