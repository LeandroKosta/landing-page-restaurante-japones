# Guia de Personalização - Landing Page Sakura Premium

Este guia explica como personalizar todos os elementos da landing page sem precisar mexer no código.

## 📝 Arquivo Principal de Configuração

Todas as alterações são feitas no arquivo: **`config/site.json`**

---

## 🏢 Informações do Restaurante

Para alterar nome, telefone, endereço, etc:

```json
"restaurant": {
  "name": "Sakura Premium",              // Nome do restaurante
  "tagline": "Experiência Autêntica...", // Slogan
  "phone": "+55 11 3456-7890",           // Telefone fixo
  "whatsappNumber": "+5511987654321",    // WhatsApp (formato: +55 + DDD + número)
  "email": "contato@sakurapremium.com.br",
  "address": {
    "street": "Rua dos Pinheiros, 1234",
    "city": "São Paulo",
    "state": "SP",
    "zipCode": "05422-001",
    "country": "Brasil",
    "coordinates": {
      "lat": -23.5505,  // Latitude (pegue no Google Maps)
      "lng": -46.6333   // Longitude (pegue no Google Maps)
    }
  }
}
```

### Como pegar coordenadas no Google Maps:
1. Abra o Google Maps
2. Clique com botão direito no local
3. Clique em "O que há aqui?"
4. Copie os números que aparecem (ex: -23.5505, -46.6333)

---

## 🕐 Horário de Funcionamento

```json
"openingHours": [
  { 
    "dayOfWeek": "Terça a Quinta", 
    "opens": "18:00", 
    "closes": "23:00" 
  },
  { 
    "dayOfWeek": "Sexta e Sábado", 
    "opens": "18:00", 
    "closes": "00:00" 
  }
]
```

---

## 🖼️ Alterando Imagens

### Hero (Imagem de Fundo Principal)

```json
"hero": {
  "headline": "Autêntica Culinária Japonesa Premium",
  "subheadline": "Uma jornada sensorial...",
  "backgroundMedia": {
    "type": "image",
    "src": "URL_DA_IMAGEM_AQUI",  // ← Altere aqui
    "alt": "Descrição da imagem"
  }
}
```

### Imagem da Seção Conceito

```json
"concept": {
  "title": "Nossa Filosofia",
  "description": "Texto descritivo...",
  "image": {
    "src": "URL_DA_IMAGEM_AQUI",  // ← Altere aqui
    "alt": "Chef preparando sushi"
  }
}
```

### Imagens das Experiências (Omakase, Sushi, etc)

```json
"experiences": [
  {
    "id": "omakase",
    "title": "Omakase",
    "description": "Descrição...",
    "image": {
      "src": "URL_DA_IMAGEM_AQUI",  // ← Altere aqui
      "alt": "Experiência Omakase"
    }
  }
]
```

### Galeria de Fotos

```json
"gallery": [
  { "src": "URL_IMAGEM_1", "alt": "Descrição 1" },
  { "src": "URL_IMAGEM_2", "alt": "Descrição 2" },
  { "src": "URL_IMAGEM_3", "alt": "Descrição 3" }
]
```

### 📸 Onde Conseguir URLs de Imagens:

**Opção 1: Unsplash (Gratuito)**
1. Acesse: https://unsplash.com
2. Busque por "japanese restaurant", "sushi", etc
3. Clique na imagem
4. Clique em "Download" ou copie a URL
5. Use o formato: `https://images.unsplash.com/photo-XXXXX?w=1920&q=80`

**Opção 2: Suas Próprias Imagens**
1. Coloque as imagens na pasta `public/images/`
2. Use o caminho: `"/images/nome-da-imagem.jpg"`

Exemplo:
```json
"src": "/images/meu-restaurante.jpg"
```

---

## ✍️ Alterando Textos

### Título e Subtítulo Principal (Hero)

```json
"hero": {
  "headline": "SEU TÍTULO AQUI",
  "subheadline": "Seu subtítulo aqui"
}
```

### Seção Conceito

```json
"concept": {
  "title": "Nossa Filosofia",
  "description": "Escreva aqui a descrição completa do seu restaurante..."
}
```

### Experiências Gastronômicas

```json
"experiences": [
  {
    "id": "omakase",
    "title": "Nome da Experiência",
    "description": "Descrição detalhada..."
  }
]
```

---

## ⭐ Avaliações de Clientes

```json
"reviews": [
  {
    "id": "1",
    "author": "Nome do Cliente",
    "rating": 5,
    "text": "Comentário do cliente aqui...",
    "date": "2024-01-15"
  }
]
```

Para adicionar mais avaliações, copie o bloco acima e cole dentro do array `reviews`.

---

## 📱 Redes Sociais

Edite o arquivo: **`components/Footer.tsx`**

Procure por esta seção:

```tsx
<a 
  href="https://instagram.com/seu_usuario"  // ← Altere aqui
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-gold transition-colors"
  aria-label="Instagram"
>
```

```tsx
<a 
  href="https://facebook.com/sua_pagina"  // ← Altere aqui
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-gold transition-colors"
  aria-label="Facebook"
>
```

---

## 📧 Configurando Envio de Reservas

### Opção 1: Email Simples (Atual)

O formulário atualmente simula o envio. Para conectar com um backend real:

Edite: **`components/ReservationSection.tsx`**

Procure por:

```tsx
// In production, replace with actual API call:
// const response = await fetch('/api/reservations', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data),
// });
```

Descomente e configure sua API.

### Opção 2: Integração com Serviços

**FormSubmit (Gratuito - Envia por Email)**

1. Acesse: https://formsubmit.co/
2. Siga as instruções
3. Altere a URL do fetch para: `https://formsubmit.co/seu@email.com`

**Exemplo:**
```tsx
const response = await fetch('https://formsubmit.co/contato@sakurapremium.com.br', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

---

## 🔧 Integrações (Analytics, Maps, etc)

```json
"integrations": {
  "googleMapsApiKey": "SUA_CHAVE_AQUI",
  "googleAnalyticsId": "G-XXXXXXXXXX",
  "gtmId": "GTM-XXXXXXX",
  "metaPixelId": "XXXXXXXXXXXXXXX",
  "recaptchaSiteKey": "SUA_CHAVE_RECAPTCHA"
}
```

### Como Obter as Chaves:

**Google Maps API:**
1. Acesse: https://console.cloud.google.com/
2. Crie um projeto
3. Ative "Maps Embed API"
4. Gere uma chave de API

**Google Analytics:**
1. Acesse: https://analytics.google.com/
2. Crie uma propriedade
3. Copie o ID (formato: G-XXXXXXXXXX)

**Google Tag Manager:**
1. Acesse: https://tagmanager.google.com/
2. Crie um container
3. Copie o ID (formato: GTM-XXXXXXX)

**Meta Pixel (Facebook):**
1. Acesse: https://business.facebook.com/
2. Vá em "Eventos" > "Pixels"
3. Copie o ID do pixel

**reCAPTCHA:**
1. Acesse: https://www.google.com/recaptcha/admin
2. Registre seu site
3. Copie a chave do site

---

## 🎨 Alterando Cores

Edite: **`tailwind.config.ts`**

```typescript
colors: {
  gold: {
    DEFAULT: '#D4AF37',  // Cor dourada principal
    light: '#F4E5B8',    // Dourado claro
    dark: '#B8941F',     // Dourado escuro
  },
  darkRed: {
    DEFAULT: '#8B0000',  // Vermelho escuro
    light: '#A52A2A',
    dark: '#5C0000',
  },
}
```

---

## 🔄 Aplicando as Mudanças

Após fazer qualquer alteração:

1. Salve o arquivo
2. O Next.js recarrega automaticamente
3. Se não recarregar, pressione **F5** no navegador

---

## 📋 Checklist de Personalização

- [ ] Nome do restaurante
- [ ] Telefone e WhatsApp
- [ ] Endereço completo
- [ ] Coordenadas do Google Maps
- [ ] Horário de funcionamento
- [ ] Email de contato
- [ ] Imagem do Hero (fundo principal)
- [ ] Imagem da seção Conceito
- [ ] 4 imagens das Experiências
- [ ] 6 imagens da Galeria
- [ ] Textos do Hero (título e subtítulo)
- [ ] Texto da seção Conceito
- [ ] Descrições das Experiências
- [ ] Avaliações de clientes
- [ ] Links das redes sociais
- [ ] Configuração do formulário de reservas
- [ ] Google Analytics ID
- [ ] Google Tag Manager ID
- [ ] Meta Pixel ID
- [ ] reCAPTCHA keys

---

## 🆘 Precisa de Ajuda?

Se tiver dúvidas ou problemas:

1. Verifique se o arquivo JSON está válido (sem vírgulas extras)
2. Confira se as URLs das imagens estão corretas
3. Teste no navegador com F12 (Console) para ver erros
4. Certifique-se de salvar o arquivo após editar

---

## 💡 Dicas Importantes

1. **Sempre faça backup** do `config/site.json` antes de editar
2. **Use imagens otimizadas** (máximo 2MB cada)
3. **Teste em mobile** após fazer alterações
4. **URLs de imagens** devem começar com `http://` ou `https://`
5. **Formato de telefone WhatsApp**: +55 + DDD + número (sem espaços)

---

Pronto! Agora você pode personalizar toda a landing page facilmente! 🎉
