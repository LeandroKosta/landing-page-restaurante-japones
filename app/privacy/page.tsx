export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-black mb-8">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="font-serif text-2xl text-black mb-4">1. Informações que Coletamos</h2>
            <p>
              Coletamos informações que você nos fornece diretamente ao fazer uma reserva, incluindo:
              nome, telefone, email, data e horário da reserva, e número de pessoas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black mb-4">2. Como Usamos suas Informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processar e confirmar suas reservas</li>
              <li>Entrar em contato sobre sua reserva</li>
              <li>Melhorar nossos serviços</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black mb-4">3. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
              exceto quando necessário para processar sua reserva ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black mb-4">4. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência em nosso site e para fins de
              análise. Você pode desativar os cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black mb-4">5. Segurança</h2>
            <p>
              Implementamos medidas de segurança para proteger suas informações pessoais contra
              acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black mb-4">6. Seus Direitos (LGPD)</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar seu consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black mb-4">7. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em
              contato conosco:
            </p>
            <p className="mt-2">
              Email: contato@sakurapremium.com.br<br />
              Telefone: +55 11 3456-7890
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </section>
        </div>

        <div className="mt-12">
          <a 
            href="/"
            className="inline-block bg-gold text-black px-8 py-3 rounded-lg hover:bg-gold-light transition-colors font-semibold"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}
