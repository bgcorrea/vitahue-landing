'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageCarousel from './image-carousel';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Carrusel como fondo */}
      <div className="absolute inset-0 w-full h-full">
        <ImageCarousel />
      </div>
      
      {/* Overlay con gradiente para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10"></div>
      
      {/* Contenido superpuesto */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-4 sm:mb-6">
            <span className="block font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider uppercase font-montserrat">
              VITAHUE
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-light mt-2 block text-tierra-200 font-montserrat">
              Soluciones Integrales en Construcción
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto font-montserrat">
            Expertos en áridos, movimiento de tierras y arriendo de maquinaria para tus proyectos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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
    </section>
  );
}
