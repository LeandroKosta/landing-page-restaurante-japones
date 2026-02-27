'use client';

import siteConfig from '@/config/site.json';

/**
 * Componente Hero Section
 * 
 * Seção principal da landing page (above the fold)
 * 
 * Funcionalidades:
 * - Background com imagem de alta qualidade
 * - Headline e subheadline personalizáveis
 * - Dois CTAs principais (Reserva e WhatsApp)
 * - Design responsivo
 * 
 * @returns JSX.Element
 */
export default function HeroSection() {
  const { hero } = siteConfig.content;

  /**
   * Scroll suave até a seção de reservas
   */
  const scrollToReservation = () => {
    try {
      const element = document.getElementById('reservation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Seção de reservas não encontrada');
      }
    } catch (error) {
      console.error('Erro ao navegar para reservas:', error);
    }
  };

  /**
   * Abre WhatsApp com mensagem pré-definida
   */
  const openWhatsApp = () => {
    try {
      const message = encodeURIComponent('Olá! Gostaria de fazer uma reserva.');
      const whatsappNumber = siteConfig.restaurant.whatsappNumber.replace(/\D/g, '');
      
      if (!whatsappNumber) {
        throw new Error('Número do WhatsApp não configurado');
      }
      
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    } catch (error) {
      console.error('Erro ao abrir WhatsApp:', error);
      alert('Não foi possível abrir o WhatsApp. Por favor, tente novamente.');
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${hero.backgroundMedia.src})` }}
        role="img"
        aria-label={hero.backgroundMedia.alt}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in">
          {hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          {hero.subheadline}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToReservation}
            className="bg-gold text-black px-8 py-4 rounded-lg hover:bg-gold-light transition-all transform hover:scale-105 font-semibold text-lg min-w-[200px] min-h-[44px]"
            data-testid="cta-button"
            aria-label="Fazer reserva online"
          >
            Reservar Mesa
          </button>
          <button
            onClick={openWhatsApp}
            className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg hover:bg-gold hover:text-black transition-all transform hover:scale-105 font-semibold text-lg min-w-[200px] min-h-[44px]"
            data-testid="cta-button"
            aria-label="Contatar via WhatsApp"
          >
            Contato WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
