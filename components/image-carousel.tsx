'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/maquinaria-hero.png',
    alt: 'Maquinaria pesada en acción',
  },
  {
    src: '/images/maquinaria-hero1.png',
    alt: 'Excavadora en trabajo',
  },
  {
    src: '/images/maquinaria-hero2.png',
    alt: 'Camión de carga',
  },
  {
    src: '/images/maquinaria-hero4.png',
    alt: 'Obra en construcción',
  },
  {
    src: '/images/maquinaria-hero5.png',
    alt: 'Equipo de trabajo',
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setDirection('next');
        handleTransition();
      }
    }, 8000); // Cambia imagen cada 8 segundos

    return () => clearInterval(timer);
  }, [isTransitioning]);

  const handleTransition = () => {
    setIsTransitioning(true);
    setPrevIndex(currentIndex);

    setTimeout(() => {
      setCurrentIndex((current) => (current + (direction === 'next' ? 1 : -1) + images.length) % images.length);
      setIsTransitioning(false);
    }, 3000); // Duración de la transición
  };

  const getNextIndex = () => {
    return (prevIndex + (direction === 'next' ? 1 : -1) + images.length) % images.length;
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Contenedor de imágenes */}
      <div className="relative h-full w-full overflow-hidden">
        {isTransitioning ? (
          <div className="relative w-full h-full">
            {/* Imagen actual (saliente) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                animation: `${direction === 'next' ? 'slideOutToLeft' : 'slideOutToRight'} 3s forwards ease-in-out`
              }}
            >
              <Image
                src={images[prevIndex].src}
                alt={images[prevIndex].alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Imagen siguiente (entrante) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                animation: `${direction === 'next' ? 'slideInFromRight' : 'slideInFromLeft'} 3s forwards ease-in-out`
              }}
            >
              <Image
                src={images[getNextIndex()].src}
                alt={images[getNextIndex()].alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          // Imagen estática cuando no hay transición
          <div className="absolute inset-0">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentIndex) {
                setDirection(index > currentIndex ? 'next' : 'prev');
                setPrevIndex(currentIndex);
                setCurrentIndex(index);
              }
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Estilos de animación */}
      <style jsx global>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes slideOutToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes slideOutToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}