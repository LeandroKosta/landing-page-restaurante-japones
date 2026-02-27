'use client';

import { useState, useEffect } from 'react';
import siteConfig from '@/config/site.json';

/**
 * Componente Header
 * 
 * Funcionalidades:
 * - Navegação fixa com efeito de scroll
 * - Menu responsivo (desktop e mobile)
 * - Navegação suave entre seções
 * - CTA de reserva destacado
 * 
 * @returns JSX.Element
 */

/**
 * Componente Header
 * 
 * Funcionalidades:
 * - Navegação fixa com efeito de scroll
 * - Menu responsivo (desktop e mobile)
 * - Navegação suave entre seções
 * - CTA de reserva destacado
 * 
 * @returns JSX.Element
 */
export default function Header() {
  // Estado para controlar scroll e menu mobile
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Effect para detectar scroll e aplicar estilo ao header
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Função para scroll suave até uma seção
   * @param id - ID da seção de destino
   */
  const scrollToSection = (id: string) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      } else {
        console.warn(`Seção com ID "${id}" não encontrada`);
      }
    } catch (error) {
      console.error('Erro ao navegar para seção:', error);
    }
  };

  // Links de navegação
  const navLinks = [
    { id: 'concept', label: 'Conceito' },
    { id: 'experiences', label: 'Experiências' },
    { id: 'reviews', label: 'Avaliações' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'reservation', label: 'Reservas' },
    { id: 'location', label: 'Localização' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-gold font-serif text-2xl font-bold hover:text-gold-light transition-colors"
          aria-label="Voltar ao início"
        >
          {siteConfig.restaurant.name}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection('reservation')}
              className="bg-gold text-black px-6 py-2 rounded hover:bg-gold-light transition-colors font-semibold"
              data-testid="cta-button"
            >
              Reservar Mesa
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-sm">
          <ul className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-white hover:text-gold transition-colors py-2"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollToSection('reservation')}
                className="w-full bg-gold text-black px-6 py-3 rounded hover:bg-gold-light transition-colors font-semibold"
                data-testid="cta-button"
              >
                Reservar Mesa
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
