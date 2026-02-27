# Documentação Técnica - Landing Page Sakura Premium

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura](#arquitetura)
3. [Estrutura de Pastas](#estrutura-de-pastas)
4. [Componentes](#componentes)
5. [Tratamento de Erros](#tratamento-de-erros)
6. [Validação de Dados](#validação-de-dados)
7. [Performance](#performance)
8. [Acessibilidade](#acessibilidade)
9. [SEO](#seo)
10. [Manutenção](#manutenção)

---

## 🎯 Visão Geral

Landing page desenvolvida com Next.js 14, TypeScript e Tailwind CSS para restaurante japonês premium.

### Tecnologias Principais

- **Next.js 14.2+** - Framework React com App Router
- **TypeScript 5.4+** - Tipagem estática
- **Tailwind CSS 3.4+** - Estilização utilitária
- **React Hook Form 7.51+** - Gerenciamento de formulários
- **Zod 3.23+** - Validação de schemas

### Características

✅ 100% TypeScript
✅ Componentes documentados
✅ Tratamento de erros robusto
✅ Validação completa de dados
✅ Performance otimizada
✅ Acessível (WCAG AA)
✅ SEO otimizado
✅ Responsivo (mobile-first)

---

## 🏗️ Arquitetura

### Padrões Utilizados

- **Component-Based Architecture** - Componentes reutilizáveis e isolados
- **Separation of Concerns** - Lógica separada da apresentação
- **Configuration-Driven** - Conteúdo centralizado em JSON
- **Type-Safe** - TypeScript em toda a aplicação
- **Error Boundaries** - Tratamento de erros em camadas

### Fluxo de Dados

```
config/site.json → Componentes → UI
                ↓
            Validação (Zod)
                ↓
            Tratamento de Erros
                ↓
            Analytics (GTM)
```

---

## 📁 Estrutura de Pastas

```
├── app/                      # App Router do Next.js
│   ├── layout.tsx           # Layout raiz com meta tags
│   ├── page.tsx             # Página principal
│   ├── globals.css          # Estilos globais
│   ├── sitemap.ts           # Geração de sitemap
│   └── privacy/             # Página de privacidade
│
├── components/              # Componentes React
│   ├── Header.tsx          # Navegação fixa
│   ├── HeroSection.tsx     # Seção principal
│   ├── ConceptSection.tsx  # Filosofia do restaurante
│   ├── ExperiencesSection.tsx  # Experiências gastronômicas
│   ├── ReviewsSection.tsx  # Avaliações de clientes
│   ├── GallerySection.tsx  # Galeria com lightbox
│   ├── ReservationSection.tsx  # Formulário de reserva
│   ├── LocationSection.tsx # Mapa e localização
│   ├── Footer.tsx          # Rodapé
│   └── WhatsAppWidget.tsx  # Widget flutuante
│
├── config/                  # Configurações
│   └── site.json           # Configuração centralizada
│
├── lib/                     # Utilitários
│   ├── utils.ts            # Funções auxiliares
│   └── constants.ts        # Constantes da aplicação
│
├── types/                   # Definições TypeScript
│   └── index.ts            # Tipos centralizados
│
├── public/                  # Assets estáticos
│   ├── images/             # Imagens
│   └── robots.txt          # Configuração de crawlers
│
└── docs/                    # Documentação
    ├── GUIA-DE-PERSONALIZACAO.md
    ├── GUIA-RESERVAS.md
    ├── COMO-FUNCIONA-RESERVA-WHATSAPP.md
    └── DOCUMENTACAO-TECNICA.md
```

---

## 🧩 Componentes

### Header

**Responsabilidade:** Navegação principal

**Props:** Nenhuma (usa config/site.json)

**Estado:**
- `isScrolled` - Detecta scroll para aplicar estilo
- `isMobileMenuOpen` - Controla menu mobile

**Funcionalidades:**
- Navegação fixa com efeito de scroll
- Menu responsivo (hamburguer em mobile)
- Scroll suave entre seções
- CTA de reserva destacado

### HeroSection

**Responsabilidade:** Seção principal acima da dobra

**Props:** Nenhuma (usa config/site.json)

**Funcionalidades:**
- Background com imagem/vídeo
- Dois CTAs principais
- Integração com WhatsApp
- Scroll para reservas

**Tratamento de Erros:**
- Valida número do WhatsApp antes de abrir
- Fallback se elemento não encontrado
- Alert ao usuário em caso de erro

### ReservationSection

**Responsabilidade:** Formulário de reserva

**Props:** Nenhuma (usa config/site.json)

**Estado:**
- `submitStatus` - Status do envio (idle/submitting/success/error)
- `errorMessage` - Mensagem de erro específica

**Validação (Zod):**
- Nome: mínimo 2 caracteres
- Telefone: formato internacional
- Email: formato válido
- Data: deve ser futura
- Horário: formato HH:mm
- Pessoas: entre 1 e 20

**Fluxo de Submissão:**
1. Validação client-side (Zod)
2. Formatação de dados
3. Abertura do WhatsApp
4. Feedback visual
5. Rastreamento (Analytics)

**Tratamento de Erros:**
- Erros de validação (inline)
- Erro de configuração (WhatsApp não configurado)
- Erro de popup bloqueado
- Erro genérico com retry

### GallerySection

**Responsabilidade:** Galeria de fotos com lightbox

**Props:** Nenhuma (usa config/site.json)

**Estado:**
- `lightboxOpen` - Controla abertura do lightbox
- `currentImage` - Índice da imagem atual

**Funcionalidades:**
- Grid responsivo
- Lightbox full-screen
- Navegação entre imagens
- Lazy loading
- Suporte a teclado (ESC para fechar)

### LocationSection

**Responsabilidade:** Mapa e informações de localização

**Props:** Nenhuma (usa config/site.json)

**Funcionalidades:**
- Google Maps embed
- Botão para abrir no Google Maps
- Horários de funcionamento
- Informações de contato

**Tratamento de Erros:**
- Fallback se Maps não carregar
- Validação de endereço
- Alert em caso de erro ao abrir Maps

### WhatsAppWidget

**Responsabilidade:** Botão flutuante de contato

**Props:** Nenhuma (usa config/site.json)

**Estado:**
- `isHovered` - Controla tooltip

**Funcionalidades:**
- Botão fixo (bottom-right)
- Tooltip ao hover
- Rastreamento de cliques
- Mensagem pré-definida

**Tratamento de Erros:**
- Valida número antes de abrir
- Alert ao usuário em caso de erro
- Log de erro no console

---

## 🛡️ Tratamento de Erros

### Estratégia em Camadas

**1. Validação (Primeira Linha)**
- Zod schemas para validação de dados
- Validação client-side antes de envio
- Mensagens de erro específicas por campo

**2. Try-Catch (Segunda Linha)**
- Todos os handlers assíncronos envolvidos em try-catch
- Erros capturados e tratados adequadamente
- Logs no console para debugging

**3. Feedback ao Usuário (Terceira Linha)**
- Mensagens de erro claras e acionáveis
- Estados visuais (loading, error, success)
- Opções de retry quando aplicável

### Tipos de Erros Tratados

**Erros de Validação:**
```typescript
// Exemplo: Campo inválido
{
  field: 'email',
  message: 'Email inválido',
  type: 'validation'
}
```

**Erros de Configuração:**
```typescript
// Exemplo: WhatsApp não configurado
if (!whatsappNumber || whatsappNumber.length < 10) {
  throw new Error('Número do WhatsApp não configurado corretamente');
}
```

**Erros de Rede:**
```typescript
// Exemplo: Falha ao abrir URL
try {
  window.open(url, '_blank');
} catch (error) {
  console.error('Erro ao abrir URL:', error);
  alert('Não foi possível abrir. Tente novamente.');
}
```

### Logging

**Desenvolvimento:**
- `console.log()` para debugging
- `console.warn()` para avisos
- `console.error()` para erros

**Produção:**
- Erros críticos logados
- Avisos para problemas não críticos
- Informações sensíveis removidas

---

## ✅ Validação de Dados

### Zod Schemas

**ReservationSchema:**
```typescript
const reservationSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().regex(/^\+?[1-9]\d{10,14}$/, 'Telefone inválido'),
  email: z.string().email('Email inválido'),
  date: z.string().refine(isValidFutureDate, 'Data deve ser futura'),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Horário inválido'),
  guests: z.number().int().min(1).max(20, 'Máximo 20 pessoas'),
});
```

### Validações Customizadas

**Data Futura:**
```typescript
const isValidFutureDate = (date: string) => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};
```

**Telefone WhatsApp:**
```typescript
export function isValidWhatsAppNumber(phone: string): boolean {
  const cleaned = formatPhoneNumber(phone);
  return cleaned.length >= 10 && cleaned.length <= 15;
}
```

---

## ⚡ Performance

### Otimizações Implementadas

**1. Lazy Loading**
- Imagens abaixo da dobra
- Componentes não críticos
- Scripts de terceiros (Analytics)

**2. Imagens Otimizadas**
- Formatos modernos (WebP, AVIF)
- Responsive images (srcset)
- Compressão automática (Next.js)

**3. Code Splitting**
- Componentes carregados sob demanda
- Chunks otimizados pelo Next.js
- Tree shaking automático

**4. Caching**
- Headers de cache configurados
- Static Generation (SSG)
- CDN-ready

**5. Minificação**
- CSS minificado (Tailwind)
- JavaScript minificado (Next.js)
- HTML otimizado

### Métricas Alvo

- **PageSpeed Score:** 90+
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Time to Interactive:** <3.5s
- **Cumulative Layout Shift:** <0.1

---

## ♿ Acessibilidade

### Conformidade WCAG AA

**1. Navegação por Teclado**
- Todos os elementos interativos acessíveis via Tab
- Focus indicators visíveis
- Skip links implementados

**2. ARIA Labels**
- Botões com labels descritivos
- Imagens com alt text
- Landmarks semânticos

**3. Contraste de Cores**
- Ratio mínimo 4.5:1 para texto
- Cores testadas e validadas
- Modo de alto contraste suportado

**4. Touch Targets**
- Mínimo 44x44px
- Espaçamento adequado
- Áreas clicáveis generosas

**5. Formulários**
- Labels associados a inputs
- Mensagens de erro descritivas
- Validação em tempo real

### Testes de Acessibilidade

**Ferramentas:**
- Lighthouse Accessibility Audit
- axe DevTools
- WAVE Extension
- Screen readers (NVDA, JAWS, VoiceOver)

---

## 🔍 SEO

### Otimizações Implementadas

**1. Meta Tags**
```tsx
<title>Sakura Premium - Restaurante Japonês...</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
```

**2. Open Graph**
```tsx
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

**3. Schema Markup (JSON-LD)**
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Sakura Premium",
  ...
}
```

**4. Sitemap**
- Gerado automaticamente
- Atualizado em cada build
- Submetido ao Google Search Console

**5. Robots.txt**
- Configurado para permitir crawling
- Sitemap referenciado

**6. URLs Canônicas**
- Evita conteúdo duplicado
- URLs limpas e descritivas

**7. Semantic HTML**
- Tags semânticas (header, nav, main, section, footer)
- Hierarquia de headings correta (h1, h2, h3)

---

## 🔧 Manutenção

### Atualizando Conteúdo

**Textos e Imagens:**
Edite `config/site.json`

**Estilos:**
Edite `tailwind.config.ts` para cores
Edite `app/globals.css` para estilos globais

**Componentes:**
Cada componente está em `components/`
Documentado com JSDoc

### Adicionando Novas Seções

1. Crie componente em `components/`
2. Adicione ao `app/page.tsx`
3. Atualize navegação em `Header.tsx`
4. Adicione conteúdo em `config/site.json`

### Debugging

**Logs no Console:**
- Erros aparecem no console do navegador
- Use F12 para abrir DevTools
- Verifique aba Console e Network

**Validação de Formulário:**
- Erros aparecem inline abaixo dos campos
- Verifique schema Zod em `ReservationSection.tsx`

**Analytics:**
- Use GTM Preview Mode
- Verifique eventos no dataLayer
- Confirme no Google Analytics

### Testes

**Manual:**
1. Teste todos os CTAs
2. Preencha formulário com dados válidos/inválidos
3. Teste em diferentes dispositivos
4. Verifique links externos

**Automatizado:**
- Lighthouse CI para performance
- Jest para testes unitários (se implementado)
- Playwright para testes E2E (se implementado)

### Deploy

**Vercel (Recomendado):**
1. Conecte repositório GitHub
2. Configure variáveis de ambiente
3. Deploy automático em cada push

**Netlify:**
1. Conecte repositório
2. Configure build command: `npm run build`
3. Publish directory: `.next`

**Outros:**
- Build: `npm run build`
- Start: `npm start`
- Requer Node.js 18+

---

## 📚 Recursos Adicionais

### Documentação

- [GUIA-DE-PERSONALIZACAO.md](./GUIA-DE-PERSONALIZACAO.md) - Como personalizar
- [GUIA-RESERVAS.md](./GUIA-RESERVAS.md) - Sistema de reservas
- [COMO-FUNCIONA-RESERVA-WHATSAPP.md](./COMO-FUNCIONA-RESERVA-WHATSAPP.md) - WhatsApp

### Links Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

---

## 🆘 Suporte

Para problemas ou dúvidas:

1. Verifique a documentação
2. Consulte os logs no console
3. Revise o código comentado
4. Teste em ambiente local

---

**Versão:** 1.0.0
**Última Atualização:** 2024
**Desenvolvido com:** Next.js 14 + TypeScript + Tailwind CSS
