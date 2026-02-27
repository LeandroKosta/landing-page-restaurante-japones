'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import siteConfig from '@/config/site.json';

/**
 * Schema de validação para o formulário de reserva
 * Utiliza Zod para validação type-safe dos dados
 */
const reservationSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().regex(/^\+?[1-9]\d{10,14}$/, 'Telefone inválido (ex: +5511999999999)'),
  email: z.string().email('Email inválido'),
  date: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, 'Data deve ser futura'),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Horário inválido'),
  guests: z.number().int().min(1, 'Mínimo 1 pessoa').max(20, 'Máximo 20 pessoas'),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

/**
 * Componente de Seção de Reservas
 * 
 * Funcionalidades:
 * - Formulário de reserva com validação completa
 * - Integração com WhatsApp para envio de dados
 * - Tratamento de erros e feedback visual
 * - Rastreamento de conversões via Google Analytics
 * 
 * @returns JSX.Element
 */
export default function ReservationSection() {
  // Estados do componente
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Configuração do React Hook Form com validação Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  /**
   * Handler de submissão do formulário
   * 
   * Fluxo:
   * 1. Valida os dados (feito automaticamente pelo Zod)
   * 2. Formata a mensagem para WhatsApp
   * 3. Abre o WhatsApp com a mensagem preenchida
   * 4. Exibe mensagem de sucesso
   * 5. Rastreia conversão no Google Analytics
   * 
   * @param data - Dados validados do formulário
   */
  const onSubmit = async (data: ReservationFormData) => {
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      // Formatar data para exibição em português
      const formattedDate = new Date(data.date).toLocaleDateString('pt-BR');
      
      // Criar mensagem formatada para WhatsApp
      const message = `🍱 *NOVA RESERVA - Sakura Premium*

👤 *Nome:* ${data.name}
📱 *Telefone:* ${data.phone}
📧 *Email:* ${data.email}
📅 *Data:* ${formattedDate}
🕐 *Horário:* ${data.time}
👥 *Número de Pessoas:* ${data.guests}

_Aguardando confirmação do restaurante._`;

      // Preparar número do WhatsApp (remover caracteres não numéricos)
      const whatsappNumber = siteConfig.restaurant.whatsappNumber.replace(/\D/g, '');
      
      // Validar se o número foi configurado
      if (!whatsappNumber || whatsappNumber.length < 10) {
        throw new Error('Número do WhatsApp não configurado corretamente');
      }
      
      // Construir URL do WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Pequeno delay para melhor experiência do usuário
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // Tentar abrir WhatsApp em nova aba
      const whatsappWindow = window.open(whatsappUrl, '_blank');
      
      // Verificar se o popup foi bloqueado
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
        console.warn('Pop-up bloqueado. Usuário precisará clicar no botão manual.');
      }
      
      // Atualizar status para sucesso
      setSubmitStatus('success');
      reset();
      
      // Rastrear conversão no Google Analytics (se configurado)
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'form_submission',
          form_type: 'reservation',
          conversion_value: 1,
        });
      }
    } catch (error) {
      // Tratamento de erros
      setSubmitStatus('error');
      
      // Mensagem de erro específica ou genérica
      const errorMsg = error instanceof Error 
        ? error.message 
        : 'Não foi possível processar sua reserva. Por favor, tente novamente.';
      
      setErrorMessage(errorMsg);
      console.error('Erro ao processar reserva:', error);
    }
  };

  return (
    <section id="reservation" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Reserve Sua Mesa
          </h2>
          <p className="text-gray-400 text-lg">
            Garanta sua experiência gastronômica única
          </p>
          <div className="mt-4 inline-block bg-darkRed px-4 py-2 rounded">
            <p className="text-sm">⚠️ Vagas limitadas - Reserve com antecedência</p>
          </div>
        </div>

        {submitStatus === 'success' ? (
          <div className="bg-green-900/50 border border-green-500 rounded-lg p-8 text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-semibold mb-4">Solicitação Enviada!</h3>
            <p className="text-gray-300 mb-2">
              Sua reserva foi enviada para o nosso WhatsApp.
            </p>
            <p className="text-gray-300 mb-4">
              Em breve entraremos em contato para confirmar sua reserva.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-400 mb-2">💡 Dica:</p>
              <p className="text-sm text-gray-300">
                Se a janela do WhatsApp não abriu automaticamente, clique no botão abaixo:
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent('Olá! Gostaria de confirmar minha reserva.');
                  const whatsappNumber = siteConfig.restaurant.whatsappNumber.replace(/\D/g, '');
                  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Abrir WhatsApp
              </button>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-gold hover:text-gold-light transition-colors font-semibold"
              >
                Fazer outra reserva
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome Completo *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold text-white min-h-[44px]"
                placeholder="Seu nome"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold text-white min-h-[44px]"
                  placeholder="+5511999999999"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold text-white min-h-[44px]"
                  placeholder="seu@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">
                  Data *
                </label>
                <input
                  {...register('date')}
                  type="date"
                  id="date"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold text-white min-h-[44px]"
                  aria-invalid={errors.date ? 'true' : 'false'}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
                {errors.date && (
                  <p id="date-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">
                  Horário *
                </label>
                <input
                  {...register('time')}
                  type="time"
                  id="time"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold text-white min-h-[44px]"
                  aria-invalid={errors.time ? 'true' : 'false'}
                  aria-describedby={errors.time ? 'time-error' : undefined}
                />
                {errors.time && (
                  <p id="time-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.time.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium mb-2">
                  Pessoas *
                </label>
                <input
                  {...register('guests', { valueAsNumber: true })}
                  type="number"
                  id="guests"
                  min="1"
                  max="20"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold text-white min-h-[44px]"
                  placeholder="2"
                  aria-invalid={errors.guests ? 'true' : 'false'}
                  aria-describedby={errors.guests ? 'guests-error' : undefined}
                />
                {errors.guests && (
                  <p id="guests-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.guests.message}
                  </p>
                )}
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-900/50 border border-red-500 rounded-lg p-4" role="alert">
                <p className="text-red-200">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="w-full bg-gold text-black px-8 py-4 rounded-lg hover:bg-gold-light transition-all transform hover:scale-105 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[44px]"
              aria-label="Enviar reserva"
            >
              {submitStatus === 'submitting' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Confirmar Reserva'
              )}
            </button>

            <p className="text-sm text-gray-400 text-center">
              Ao enviar, você concorda com nossa{' '}
              <a href="/privacy" className="text-gold hover:text-gold-light">
                Política de Privacidade
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
