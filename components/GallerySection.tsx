'use client';

import { useState } from 'react';
import siteConfig from '@/config/site.json';

/**
 * Componente Gallery Section
 * 
 * Galeria de fotos do restaurante com lightbox
 * 
 * Funcionalidades:
 * - Grid responsivo de imagens
 * - Lightbox para visualização em tela cheia
 * - Navegação entre imagens (anterior/próxima)
 * - Lazy loading de imagens
 * - Suporte a navegação por teclado
 * 
 * @returns JSX.Element
 */
export default function GallerySection() {
  const { gallery } = siteConfig.content;
  
  // Estados do lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  /**
   * Abre o lightbox com a imagem selecionada
   * @param index - Índice da imagem no array
   */
  const openLightbox = (index: number) => {
    if (index >= 0 && index < gallery.length) {
      setCurrentImage(index);
      setLightboxOpen(true);
    }
  };

  /**
   * Fecha o lightbox
   */
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  /**
   * Navega para a próxima imagem
   */
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  };

  /**
   * Navega para a imagem anterior
   */
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
            Nosso Ambiente
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça o espaço onde a magia acontece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
              aria-label={`Ver imagem ${index + 1} em tela cheia`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de imagem em tela cheia"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors p-2"
            aria-label="Fechar visualização"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-gold transition-colors p-2"
            aria-label="Imagem anterior"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={gallery[currentImage].src}
            alt={gallery[currentImage].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-gold transition-colors p-2"
            aria-label="Próxima imagem"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentImage + 1} / {gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}
