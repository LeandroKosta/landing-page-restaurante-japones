'use client';

import siteConfig from '@/config/site.json';

/**
 * Componente Location Section
 * 
 * Exibe localização, horários e informações de contato
 * 
 * Funcionalidades:
 * - Integração com Google Maps (iframe)
 * - Botão para abrir no Google Maps
 * - Horários de funcionamento
 * - Informações de contato (telefone e email)
 * 
 * @returns JSX.Element
 */
export default function LocationSection() {
  const { restaurant } = siteConfig;
  const { address, openingHours } = restaurant;

  // Criar URL do Google Maps com endereço completo
  const fullAddress = `${address.street}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`;
  const encodedAddress = encodeURIComponent(fullAddress);
  
  /**
   * Abre o Google Maps em nova aba
   */
  const openGoogleMaps = () => {
    try {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(url, '_blank');
    } catch (error) {
      console.error('Erro ao abrir Google Maps:', error);
      alert('Não foi possível abrir o Google Maps. Por favor, tente novamente.');
    }
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
            Localização
          </h2>
          <p className="text-gray-600 text-lg">
            Venha nos visitar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Sakura Premium no Google Maps"
              />
              <button
                onClick={openGoogleMaps}
                className="absolute bottom-4 right-4 bg-gold text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gold-light transition-colors z-10"
                aria-label="Abrir no Google Maps"
              >
                Abrir no Google Maps
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Clique no botão para abrir no Google Maps
            </p>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-black mb-4 flex items-center">
                <svg className="w-6 h-6 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Endereço
              </h3>
              <p className="text-gray-700 text-lg">
                {address.street}<br />
                {address.city}, {address.state}<br />
                CEP: {address.zipCode}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-black mb-4 flex items-center">
                <svg className="w-6 h-6 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horário de Funcionamento
              </h3>
              <div className="space-y-2">
                {openingHours.map((hours, index) => (
                  <div key={index} className="flex justify-between text-gray-700">
                    <span className="font-medium">{hours.dayOfWeek}</span>
                    <span>{hours.opens} - {hours.closes}</span>
                  </div>
                ))}
                <p className="text-sm text-gray-500 mt-4">Segunda-feira: Fechado</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-black mb-4 flex items-center">
                <svg className="w-6 h-6 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contato
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <a href={`tel:${restaurant.phone}`} className="hover:text-gold transition-colors">
                    {restaurant.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${restaurant.email}`} className="hover:text-gold transition-colors">
                    {restaurant.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
