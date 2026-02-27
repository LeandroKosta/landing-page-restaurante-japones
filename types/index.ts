/**
 * Definições de Tipos TypeScript
 * 
 * Tipos centralizados para toda a aplicação
 */

/**
 * Configuração do site (config/site.json)
 */
export interface SiteConfig {
  restaurant: RestaurantInfo;
  content: ContentConfig;
  seo: SEOConfig;
  integrations: IntegrationsConfig;
}

/**
 * Informações do restaurante
 */
export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: Address;
  openingHours: OpeningHours[];
  priceRange: string;
}

/**
 * Endereço do restaurante
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates: Coordinates;
}

/**
 * Coordenadas geográficas
 */
export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Horário de funcionamento
 */
export interface OpeningHours {
  dayOfWeek: string;
  opens: string;
  closes: string;
}

/**
 * Configuração de conteúdo
 */
export interface ContentConfig {
  hero: HeroContent;
  concept: ConceptContent;
  experiences: Experience[];
  reviews: Review[];
  gallery: GalleryImage[];
}

/**
 * Conteúdo da seção Hero
 */
export interface HeroContent {
  headline: string;
  subheadline: string;
  backgroundMedia: MediaAsset;
}

/**
 * Conteúdo da seção Conceito
 */
export interface ConceptContent {
  title: string;
  description: string;
  image: MediaAsset;
}

/**
 * Experiência gastronômica
 */
export interface Experience {
  id: string;
  title: string;
  description: string;
  image: MediaAsset;
}

/**
 * Avaliação de cliente
 */
export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
}

/**
 * Imagem da galeria
 */
export interface GalleryImage {
  src: string;
  alt: string;
}

/**
 * Asset de mídia (imagem/vídeo)
 */
export interface MediaAsset {
  type?: 'image' | 'video';
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  poster?: string; // Para vídeos
}

/**
 * Configuração de SEO
 */
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

/**
 * Configuração de integrações
 */
export interface IntegrationsConfig {
  googleMapsApiKey: string;
  googleAnalyticsId: string;
  gtmId: string;
  metaPixelId: string;
  recaptchaSiteKey: string;
}

/**
 * Dados do formulário de reserva
 */
export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
}

/**
 * Status de submissão do formulário
 */
export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Erro do formulário
 */
export interface FormError {
  field?: string;
  message: string;
  type: 'validation' | 'network' | 'server';
}

/**
 * Evento de analytics
 */
export interface AnalyticsEvent {
  event: string;
  [key: string]: any;
}

/**
 * Link de navegação
 */
export interface NavLink {
  id: string;
  label: string;
  href?: string;
}
