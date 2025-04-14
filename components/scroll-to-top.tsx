'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mostrar el botón cuando el usuario haya hecho scroll 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Verificar si es un dispositivo móvil
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar al cargar y cuando cambie el tamaño de la ventana
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Agregar el evento de scroll solo si no es móvil
    if (!isMobile) {
      window.addEventListener('scroll', toggleVisibility);
    }
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [isMobile]);

  // No mostrar el botón en dispositivos móviles
  if (isMobile) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-16 right-0 left-0 flex justify-center z-50">
          <button
            onClick={scrollToTop}
            className="bg-tierra-600/30 hover:bg-tierra-600/50 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Volver arriba"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
} 