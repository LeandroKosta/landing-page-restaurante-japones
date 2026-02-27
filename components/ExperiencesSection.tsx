import siteConfig from '@/config/site.json';

/**
 * Componente Experiences Section
 * 
 * Exibe as experiências gastronômicas oferecidas
 * 
 * Funcionalidades:
 * - Grid responsivo de cards
 * - Imagens com hover effect
 * - Lazy loading de imagens
 * - Layout adaptável (1/2/4 colunas)
 * 
 * @returns JSX.Element
 */
export default function ExperiencesSection() {
  const { experiences } = siteConfig.content;

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
            Experiências Gastronômicas
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra as diferentes formas de vivenciar a autêntica culinária japonesa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={experience.image.src}
                  alt={experience.image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-black mb-3">
                  {experience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
