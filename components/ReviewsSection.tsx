import siteConfig from '@/config/site.json';

/**
 * Componente Reviews Section
 * 
 * Exibe avaliações e depoimentos de clientes
 * 
 * Funcionalidades:
 * - Grid de cards de avaliações
 * - Rating visual com estrelas
 * - Data de publicação formatada
 * - Design responsivo
 * 
 * @returns JSX.Element
 */
export default function ReviewsSection() {
  const { reviews } = siteConfig.content;

  return (
    <section id="reviews" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className="w-6 h-6 text-gold fill-current" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-400">Avaliação 5.0 no Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-gray-900 p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-gold fill-current" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gold">{review.author}</p>
                {review.date && (
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('pt-BR')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
