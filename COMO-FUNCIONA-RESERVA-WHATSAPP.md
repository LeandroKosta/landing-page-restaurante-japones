# Como Funciona a Reserva via WhatsApp

## 🎯 Fluxo Completo

### 1️⃣ Cliente Preenche o Formulário
O cliente acessa a landing page e preenche:
- Nome completo
- Telefone
- Email
- Data da reserva
- Horário
- Número de pessoas

### 2️⃣ Validação Automática
O sistema valida automaticamente:
- ✅ Nome com pelo menos 2 caracteres
- ✅ Telefone no formato correto (+5511999999999)
- ✅ Email válido
- ✅ Data futura (não aceita datas passadas)
- ✅ Horário válido
- ✅ Número de pessoas entre 1 e 20

### 3️⃣ Envio para WhatsApp
Quando o cliente clica em "Confirmar Reserva":
1. Uma janela do WhatsApp abre automaticamente
2. A mensagem já vem preenchida com todos os dados:

```
🍱 NOVA RESERVA - Sakura Premium

👤 Nome: João Silva
📱 Telefone: +5511999999999
📧 Email: joao@email.com
📅 Data: 15/03/2024
🕐 Horário: 20:00
👥 Número de Pessoas: 4

Aguardando confirmação do restaurante.
```

### 4️⃣ Mensagem de Confirmação
O cliente vê uma tela de sucesso com:
- ✅ Confirmação de que a reserva foi enviada
- 💬 Informação de que o restaurante entrará em contato
- 🔄 Botão para reabrir o WhatsApp (caso não tenha aberto)
- ➕ Opção para fazer outra reserva

### 5️⃣ Restaurante Recebe
Você (restaurante) recebe a mensagem no WhatsApp e pode:
- ✅ Ver todos os dados da reserva
- ✅ Responder diretamente ao cliente
- ✅ Confirmar ou sugerir outro horário
- ✅ Tirar dúvidas adicionais

---

## 📱 Exemplo Prático

**Cliente:**
1. Preenche: "Maria Silva, +5511988887777, maria@email.com, 20/03/2024, 19:30, 2 pessoas"
2. Clica em "Confirmar Reserva"
3. WhatsApp abre com a mensagem pronta
4. Cliente envia a mensagem
5. Vê tela: "Solicitação Enviada! Em breve entraremos em contato"

**Restaurante (Você):**
1. Recebe notificação no WhatsApp
2. Vê todos os dados da reserva
3. Responde: "Olá Maria! Sua reserva está confirmada para 20/03 às 19:30. Aguardamos você! 🍱"

---

## ⚙️ Configuração do Número

O número do WhatsApp está configurado em: `config/site.json`

```json
"whatsappNumber": "+5511987654321"
```

**Para alterar:**
1. Abra o arquivo `config/site.json`
2. Encontre a linha `"whatsappNumber"`
3. Troque pelo seu número no formato: `+55` + `DDD` + `número`
4. Exemplo: `"+5511999998888"`
5. Salve o arquivo

**⚠️ IMPORTANTE:** 
- Use o formato internacional: +55 (Brasil) + DDD + número
- Não use espaços, traços ou parênteses
- Exemplo correto: `+5511999998888`
- Exemplo errado: `(11) 99999-8888`

---

## 💡 Vantagens Deste Sistema

✅ **Sem Custo:** Não precisa de servidor ou banco de dados
✅ **Imediato:** Cliente e restaurante se conectam na hora
✅ **Pessoal:** Você pode conversar e tirar dúvidas
✅ **Flexível:** Pode negociar horários alternativos
✅ **Simples:** Não precisa de sistema complexo
✅ **Confiável:** WhatsApp é familiar para todos
✅ **Rastreável:** Fica tudo registrado no chat

---

## 🎨 Personalização da Mensagem

Se quiser alterar o texto da mensagem que vai para o WhatsApp:

**Edite:** `components/ReservationSection.tsx`

**Encontre:**
```typescript
const message = `🍱 *NOVA RESERVA - Sakura Premium*

👤 *Nome:* ${data.name}
📱 *Telefone:* ${data.phone}
...
```

**Personalize como quiser!**

Exemplos:
- Adicione emojis diferentes
- Mude o título
- Adicione informações extras
- Inclua link do cardápio

---

## 📊 Rastreamento

O sistema já rastreia as conversões no Google Analytics:

Quando uma reserva é enviada, o evento é registrado:
```javascript
{
  event: 'form_submission',
  form_type: 'reservation',
  conversion_value: 1
}
```

Você pode ver no Google Analytics:
- Quantas reservas foram feitas
- De onde vieram os clientes
- Qual horário mais procurado

---

## 🔧 Solução de Problemas

**"WhatsApp não abre"**
- Verifique se o número está correto no config
- Teste se o WhatsApp está instalado
- Use o botão "Abrir WhatsApp" na tela de sucesso

**"Mensagem não aparece preenchida"**
- Alguns navegadores bloqueiam pop-ups
- Permita pop-ups para o site
- Use o botão manual na tela de sucesso

**"Cliente não recebe resposta"**
- Verifique se o número do restaurante está correto
- Confirme que o WhatsApp Business está ativo
- Configure mensagens automáticas de ausência

---

## 📱 WhatsApp Business (Recomendado)

Para melhorar ainda mais, use o WhatsApp Business:

**Vantagens:**
- ✅ Perfil profissional
- ✅ Catálogo de produtos
- ✅ Mensagens automáticas
- ✅ Respostas rápidas
- ✅ Etiquetas para organizar
- ✅ Estatísticas de mensagens

**Como configurar:**
1. Baixe o WhatsApp Business
2. Use o mesmo número do restaurante
3. Configure perfil com logo e horários
4. Crie respostas rápidas para reservas

**Exemplo de resposta rápida:**
```
Olá! Recebemos sua reserva para [DATA] às [HORA].
Está confirmada! Aguardamos você no Sakura Premium 🍱
```

---

## 🚀 Próximos Passos

1. ✅ Teste fazendo uma reserva você mesmo
2. ✅ Verifique se recebe no WhatsApp
3. ✅ Configure respostas rápidas
4. ✅ Treine a equipe para responder
5. ✅ Monitore as reservas diariamente

---

## 💬 Dicas de Atendimento

**Responda Rápido:**
- Ideal: até 5 minutos
- Máximo: 1 hora

**Seja Cordial:**
- Use o nome do cliente
- Agradeça pela preferência
- Confirme todos os detalhes

**Confirme Tudo:**
- Data e horário
- Número de pessoas
- Alguma restrição alimentar?
- Ocasião especial?

**Exemplo de Resposta Completa:**
```
Olá Maria! 😊

Sua reserva está confirmada:
📅 20/03/2024 às 19:30
👥 2 pessoas

Alguma restrição alimentar ou preferência especial?

Aguardamos você no Sakura Premium!
Rua dos Pinheiros, 1234 - Pinheiros

Até breve! 🍱
```

---

Pronto! Agora você sabe tudo sobre como funciona o sistema de reservas via WhatsApp! 🎉
