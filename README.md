# 🍱 Sakura Premium - Landing Page

Landing page premium e responsiva para restaurante japonês, desenvolvida com Next.js 14, TypeScript e Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Características

- ✅ **Design Responsivo** - Perfeito em mobile, tablet e desktop
- ✅ **Performance Otimizada** - PageSpeed 90+ score
- ✅ **SEO Completo** - Meta tags, Schema.org, sitemap
- ✅ **Reservas via WhatsApp** - Sistema integrado de reservas
- ✅ **Galeria Interativa** - Lightbox com navegação
- ✅ **Formulário Validado** - React Hook Form + Zod
- ✅ **Google Analytics** - Rastreamento de conversões
- ✅ **Acessibilidade** - ARIA labels, navegação por teclado
- ✅ **Fácil Personalização** - Arquivo JSON centralizado

## 🚀 Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Formulários:** React Hook Form + Zod
- **Imagens:** Next/Image com otimização automática
- **Analytics:** Google Tag Manager

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/sakura-premium-landing-page.git
cd sakura-premium-landing-page
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o projeto**

Edite o arquivo `config/site.json` com as informações do seu restaurante.

4. **Execute em desenvolvimento**
```bash
npm run dev
```

Acesse: http://localhost:3000

## ⚙️ Configuração

### Informações do Restaurante

Edite: `config/site.json`

```json
{
  "restaurant": {
    "name": "Seu Restaurante",
    "phone": "+55 11 3456-7890",
    "whatsappNumber": "+5511987654321",
    "email": "contato@seurestaurante.com.br"
  }
}
```

## 📖 Documentação

- 📘 [Guia de Personalização](GUIA-DE-PERSONALIZACAO.md)
- 📗 [Sistema de Reservas](GUIA-RESERVAS.md)
- 📙 [Como Funciona WhatsApp](COMO-FUNCIONA-RESERVA-WHATSAPP.md)
- 📕 [Deploy no GitHub](GUIA-GITHUB.md)

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push para o GitHub
2. Acesse: https://vercel.com
3. Importe o repositório
4. Deploy automático!

## 📝 Licença

Este projeto está sob a licença MIT.

---

⭐ Se este projeto foi útil, deixe uma estrela no GitHub!
