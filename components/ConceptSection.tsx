import siteConfig from '@/config/site.json';

/**
 * Componente Concept Section
 * 
 * Exibe a filosofia e conceito do restaurante
 * 
 * Funcionalidades:
 * - Layout responsivo (texto + imagem)
 * - Lazy loading de imagem
 * - Design elegante com separador visual
 * 
 * @returns JSX.Element
 */
export default function ConceptSection() {
  const { concept } = siteConfig.content;

  return (
    <section id="concept" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">
              {concept.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {concept.description}
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <div className="w-16 h-1 bg-gold"></div>
              <span className="text-gold font-semibold">Tradição & Excelência</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={concept.image.src}
                alt={concept.image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
