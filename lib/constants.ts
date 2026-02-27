/**
 * Constantes da Aplicação
 * 
 * Valores fixos utilizados em toda a aplicação
 */

/**
 * Mensagens de erro padrão
 */
export const ERROR_MESSAGES = {
  GENERIC: 'Ocorreu um erro inesperado. Por favor, tente novamente.',
  NETWORK: 'Erro de conexão. Verifique sua internet e tente novamente.',
  WHATSAPP_NOT_CONFIGURED: 'Número do WhatsApp não configurado corretamente.',
  WHATSAPP_OPEN_FAILED: 'Não foi possível abrir o WhatsApp. Por favor, tente novamente.',
  FORM_VALIDATION: 'Por favor, corrija os erros no formulário.',
  ELEMENT_NOT_FOUND: 'Elemento não encontrado na página.',
  POPUP_BLOCKED: 'Pop-up bloqueado. Por favor, permita pop-ups para este site.',
} as const;

/**
 * Mensagens de sucesso
 */
export const SUCCESS_MESSAGES = {
  RESERVATION_SENT: 'Solicitação enviada com sucesso!',
  FORM_SUBMITTED: 'Formulário enviado com sucesso!',
} as const;

/**
 * Eventos do Google Analytics
 */
export const ANALYTICS_EVENTS = {
  FORM_SUBMISSION: 'form_submission',
  WHATSAPP_CLICK: 'whatsapp_click',
  CTA_CLICK: 'cta_click',
  GALLERY_IMAGE_CLICK: 'gallery_image_click',
  MAP_CLICK: 'map_click',
  NAVIGATION_CLICK: 'navigation_click',
  PAGE_VIEW: 'page_view',
} as const;

/**
 * Breakpoints responsivos (em pixels)
 */
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
} as const;

/**
 * Delays e timeouts (em milissegundos)
 */
export const TIMINGS = {
  DEBOUNCE_DEFAULT: 300,
  ANIMATION_DURATION: 300,
  FORM_SUBMIT_DELAY: 800,
  SCROLL_THRESHOLD: 50,
} as const;

/**
 * Limites de validação
 */
export const VALIDATION_LIMITS = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  PHONE_MIN_LENGTH: 10,
  PHONE_MAX_LENGTH: 15,
  GUESTS_MIN: 1,
  GUESTS_MAX: 20,
  MESSAGE_MAX_LENGTH: 500,
} as const;

/**
 * Regex patterns para validação
 */
export const REGEX_PATTERNS = {
  PHONE: /^\+?[1-9]\d{10,14}$/,
  TIME: /^([01]\d|2[0-3]):([0-5]\d)$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

/**
 * URLs e links externos
 */
export const EXTERNAL_LINKS = {
  WHATSAPP_BASE: 'https://wa.me/',
  GOOGLE_MAPS_SEARCH: 'https://www.google.com/maps/search/?api=1&query=',
  GOOGLE_MAPS_EMBED: 'https://www.google.com/maps/embed/v1/place',
} as const;

/**
 * Configurações de imagem
 */
export const IMAGE_CONFIG = {
  FORMATS: ['image/avif', 'image/webp', 'image/jpeg'],
  QUALITY: 80,
  SIZES: {
    MOBILE: 640,
    TABLET: 768,
    DESKTOP: 1024,
    WIDE: 1920,
  },
} as const;

/**
 * Cores do tema (sincronizado com Tailwind)
 */
export const THEME_COLORS = {
  GOLD: '#D4AF37',
  GOLD_LIGHT: '#F4E5B8',
  GOLD_DARK: '#B8941F',
  DARK_RED: '#8B0000',
  DARK_RED_LIGHT: '#A52A2A',
  DARK_RED_DARK: '#5C0000',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
} as const;

/**
 * Z-index layers
 */
export const Z_INDEX = {
  HEADER: 50,
  WHATSAPP_WIDGET: 40,
  LIGHTBOX: 50,
  MODAL: 60,
  TOOLTIP: 70,
} as const;

/**
 * Configurações de acessibilidade
 */
export const A11Y_CONFIG = {
  MIN_TOUCH_TARGET: 44, // pixels
  MIN_CONTRAST_RATIO: 4.5,
  FOCUS_OUTLINE_WIDTH: 2, // pixels
} as const;
