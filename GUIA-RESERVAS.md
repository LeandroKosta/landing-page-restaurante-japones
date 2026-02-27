# Guia Completo - Sistema de Reservas

## 📋 Como Funciona Atualmente

Atualmente, o formulário de reservas:
1. ✅ Valida todos os campos (nome, telefone, email, data, horário, pessoas)
2. ✅ Mostra mensagens de erro se algo estiver incorreto
3. ✅ Simula o envio (apenas para demonstração)
4. ✅ Mostra mensagem de sucesso

**⚠️ IMPORTANTE:** Os dados NÃO são salvos em nenhum lugar ainda. É necessário conectar com um backend.

---

## 🔌 Opções de Implementação

### Opção 1: Email Simples (Mais Fácil) ⭐ RECOMENDADO

Receba as reservas diretamente no seu email usando **FormSubmit** (gratuito).

#### Passo a Passo:

**1. Configure o FormSubmit:**
- Acesse: https://formsubmit.co/
- Não precisa criar conta!

**2. Edite o arquivo:** `components/ReservationSection.tsx`

**3. Encontre esta linha (aproximadamente linha 35):**
```tsx
// Simulate API call
await new Promise((resolve) => setTimeout(resolve, 1500));
```

**4. Substitua por:**
```tsx
// Enviar para FormSubmit
const formData = new FormData();
formData.append('name', data.name);
formData.append('phone', data.phone);
formData.append('email', data.email);
formData.append('date', data.date);
formData.append('time', data.time);
formData.append('guests', data.guests.toString());
formData.append('_subject', 'Nova Reserva - Sakura Premium');
formData.append('_template', 'table');

const response = await fetch('https://formsubmit.co/seu@email.com', {
  method: 'POST',
  body: formData,
});

if (!response.ok) {
  throw new Error('Erro ao enviar reserva');
}
```

**5. Troque `seu@email.com` pelo email do restaurante**

**6. Pronto!** Você receberá um email de confirmação na primeira vez. Depois disso, todas as reservas chegarão no seu email.

#### Exemplo de Email que Você Receberá:

```
Assunto: Nova Reserva - Sakura Premium

Nome: João Silva
Telefone: +5511999999999
Email: joao@email.com
Data: 2024-03-15
Horário: 20:00
Pessoas: 4
```

---

### Opção 2: Google Sheets (Gratuito)

Salve as reservas automaticamente em uma planilha do Google.

#### Passo a Passo:

**1. Crie uma planilha no Google Sheets**

**2. Vá em Extensões > Apps Script**

**3. Cole este código:**
```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.phone,
    data.email,
    data.date,
    data.time,
    data.guests
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**4. Clique em "Implantar" > "Nova implantação"**

**5. Escolha "Aplicativo da Web"**

**6. Copie a URL gerada**

**7. No arquivo `components/ReservationSection.tsx`, substitua:**
```tsx
const response = await fetch('SUA_URL_DO_GOOGLE_SCRIPT_AQUI', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

---

### Opção 3: WhatsApp Direto (Mais Simples)

Redireciona o cliente para o WhatsApp com os dados preenchidos.

**Edite:** `components/ReservationSection.tsx`

**Substitua a função `onSubmit` por:**
```tsx
const onSubmit = async (data: ReservationFormData) => {
  const message = `
🍱 *Nova Reserva - Sakura Premium*

👤 Nome: ${data.name}
📱 Telefone: ${data.phone}
📧 Email: ${data.email}
📅 Data: ${data.date}
🕐 Horário: ${data.time}
👥 Pessoas: ${data.guests}
  `.trim();

  const whatsappUrl = `https://wa.me/5511987654321?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  setSubmitStatus('success');
  reset();
};
```

**Vantagens:**
- ✅ Não precisa de backend
- ✅ Resposta imediata ao cliente
- ✅ Você pode confirmar direto no WhatsApp

---

### Opção 4: Backend Próprio (Avançado)

Para quem tem ou quer criar um sistema completo.

#### Estrutura Necessária:

**1. Crie uma API (Node.js/Express exemplo):**

```javascript
// server.js
const express = require('express');
const app = express();

app.post('/api/reservations', async (req, res) => {
  const { name, phone, email, date, time, guests } = req.body;
  
  // Salvar no banco de dados
  // Enviar email de confirmação
  // Notificar o restaurante
  
  res.json({ success: true, message: 'Reserva confirmada!' });
});

app.listen(3001);
```

**2. No frontend (`components/ReservationSection.tsx`):**

```tsx
const response = await fetch('https://seu-backend.com/api/reservations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

---

### Opção 5: Serviços de Reserva Profissionais

Integre com plataformas especializadas:

**OpenTable:**
- Site: https://www.opentable.com.br/
- Custo: Comissão por reserva
- Integração via widget ou API

**TheFork (LaFourchette):**
- Site: https://www.thefork.com.br/
- Custo: Plano mensal
- Widget pronto para incorporar

**Exemplo de integração com widget:**
```html
<!-- Adicione no arquivo app/page.tsx -->
<script src="https://widget.opentable.com/..."></script>
```

---

## 🎯 Qual Opção Escolher?

| Opção | Dificuldade | Custo | Melhor Para |
|-------|-------------|-------|-------------|
| **Email (FormSubmit)** | ⭐ Fácil | Grátis | Começar rápido |
| **Google Sheets** | ⭐⭐ Médio | Grátis | Organizar reservas |
| **WhatsApp Direto** | ⭐ Muito Fácil | Grátis | Atendimento pessoal |
| **Backend Próprio** | ⭐⭐⭐⭐ Difícil | Variável | Controle total |
| **OpenTable/TheFork** | ⭐⭐ Médio | Pago | Profissional |

---

## 🚀 Implementação Recomendada (Começar Agora)

**Para começar hoje mesmo, use a Opção 1 (Email) + Opção 3 (WhatsApp):**

1. Configure o FormSubmit para receber por email
2. Mantenha o botão WhatsApp no Hero
3. Assim você tem duas formas de contato!

---

## 📧 Notificações por Email

Se quiser enviar email de confirmação para o cliente:

**Use um serviço como:**
- **SendGrid** (gratuito até 100 emails/dia)
- **Mailgun** (gratuito até 5.000 emails/mês)
- **Resend** (gratuito até 3.000 emails/mês)

**Exemplo com Resend:**

```typescript
// app/api/reservations/route.ts
import { Resend } from 'resend';

const resend = new Resend('sua_api_key');

export async function POST(request: Request) {
  const data = await request.json();
  
  // Enviar email para o cliente
  await resend.emails.send({
    from: 'reservas@sakurapremium.com.br',
    to: data.email,
    subject: 'Reserva Confirmada - Sakura Premium',
    html: `
      <h1>Reserva Confirmada!</h1>
      <p>Olá ${data.name},</p>
      <p>Sua reserva foi recebida:</p>
      <ul>
        <li>Data: ${data.date}</li>
        <li>Horário: ${data.time}</li>
        <li>Pessoas: ${data.guests}</li>
      </ul>
      <p>Aguardamos você!</p>
    `
  });
  
  return Response.json({ success: true });
}
```

---

## 🔒 Segurança - reCAPTCHA

O formulário já está preparado para reCAPTCHA v3.

**Para ativar:**

1. Acesse: https://www.google.com/recaptcha/admin
2. Registre seu site
3. Copie a chave do site
4. Cole em `config/site.json`:
```json
"recaptchaSiteKey": "SUA_CHAVE_AQUI"
```

5. No backend, valide o token:
```javascript
const response = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=SUA_CHAVE_SECRETA&response=${token}`
);
```

---

## 📊 Rastreamento de Conversões

O formulário já envia eventos para o Google Analytics quando uma reserva é feita:

```javascript
window.dataLayer.push({
  event: 'form_submission',
  form_type: 'reservation',
  conversion_value: 1,
});
```

Configure metas no Google Analytics para rastrear quantas reservas você recebe!

---

## 🆘 Precisa de Ajuda?

**Problemas Comuns:**

**1. "Formulário não envia"**
- Verifique o console do navegador (F12)
- Confirme que a URL da API está correta
- Teste a conexão com a internet

**2. "Email não chega"**
- Verifique a pasta de spam
- Confirme o email no FormSubmit
- Aguarde alguns minutos

**3. "Erro de validação"**
- Telefone deve estar no formato: +5511999999999
- Data deve ser futura
- Todos os campos são obrigatórios

---

## 💡 Próximos Passos

1. ✅ Escolha uma opção de implementação
2. ✅ Configure conforme o guia
3. ✅ Teste fazendo uma reserva
4. ✅ Monitore as reservas recebidas
5. ✅ Configure notificações (email/WhatsApp)

---

Pronto! Agora você sabe tudo sobre o sistema de reservas! 🎉
