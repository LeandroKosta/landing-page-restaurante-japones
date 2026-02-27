/**
 * Utilitários e Funções Auxiliares
 * 
 * Funções reutilizáveis para toda a aplicação
 */

/**
 * Formata número de telefone removendo caracteres não numéricos
 * @param phone - Número de telefone com ou sem formatação
 * @returns Número apenas com dígitos
 * 
 * @example
 * formatPhoneNumber('+55 (11) 99999-9999') // '5511999999999'
 */
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Valida se um número de WhatsApp está no formato correto
 * @param phone - Número de telefone
 * @returns true se válido, false caso contrário
 * 
 * @example
 * isValidWhatsAppNumber('+5511999999999') // true
 * isValidWhatsAppNumber('123') // false
 */
export function isValidWhatsAppNumber(phone: string): boolean {
  const cleaned = formatPhoneNumber(phone);
  return cleaned.length >= 10 && cleaned.length <= 15;
}

/**
 * Formata data para exibição em português
 * @param date - Data em formato ISO ou Date object
 * @returns Data formatada (ex: "15/03/2024")
 * 
 * @example
 * formatDate('2024-03-15') // '15/03/2024'
 */
export function formatDate(date: string | Date): string {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('pt-BR');
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return '';
  }
}

/**
 * Cria URL do WhatsApp com mensagem pré-preenchida
 * @param phone - Número de telefone (será limpo automaticamente)
 * @param message - Mensagem a ser enviada
 * @returns URL completa do WhatsApp
 * 
 * @example
 * createWhatsAppUrl('+5511999999999', 'Olá!') 
 * // 'https://wa.me/5511999999999?text=Ol%C3%A1!'
 */
export function createWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = formatPhoneNumber(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Rastreia evento no Google Analytics via dataLayer
 * @param eventName - Nome do evento
 * @param eventParams - Parâmetros adicionais do evento
 * 
 * @example
 * trackEvent('button_click', { button_name: 'reserve' })
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>): void {
  try {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  } catch (error) {
    console.error('Erro ao rastrear evento:', error);
  }
}

/**
 * Scroll suave até um elemento
 * @param elementId - ID do elemento de destino
 * @returns true se sucesso, false se elemento não encontrado
 * 
 * @example
 * scrollToElement('reservation') // Rola até #reservation
 */
export function scrollToElement(elementId: string): boolean {
  try {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    }
    console.warn(`Elemento com ID "${elementId}" não encontrado`);
    return false;
  } catch (error) {
    console.error('Erro ao fazer scroll:', error);
    return false;
  }
}

/**
 * Valida se uma data é futura
 * @param date - Data a ser validada
 * @returns true se a data é futura, false caso contrário
 * 
 * @example
 * isFutureDate('2025-12-31') // true (se hoje for antes)
 */
export function isFutureDate(date: string | Date): boolean {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateObj >= today;
  } catch (error) {
    console.error('Erro ao validar data:', error);
    return false;
  }
}

/**
 * Debounce function - limita a frequência de execução
 * @param func - Função a ser executada
 * @param wait - Tempo de espera em ms
 * @returns Função com debounce aplicado
 * 
 * @example
 * const debouncedSearch = debounce(searchFunction, 300);
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Verifica se o código está rodando no cliente (browser)
 * @returns true se está no cliente, false se no servidor
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Tenta abrir URL em nova aba e retorna se teve sucesso
 * @param url - URL a ser aberta
 * @returns true se abriu com sucesso, false se foi bloqueado
 * 
 * @example
 * const opened = openInNewTab('https://example.com');
 * if (!opened) alert('Pop-up bloqueado!');
 */
export function openInNewTab(url: string): boolean {
  try {
    const newWindow = window.open(url, '_blank');
    return !!(newWindow && !newWindow.closed && typeof newWindow.closed !== 'undefined');
  } catch (error) {
    console.error('Erro ao abrir nova aba:', error);
    return false;
  }
}
