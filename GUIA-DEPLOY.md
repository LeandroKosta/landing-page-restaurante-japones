# Guia de Deploy - Landing Page Sakura Premium

## 🚀 Opções de Deploy

Este guia cobre as principais plataformas de deploy para aplicações Next.js.

---

## 1️⃣ Vercel (Recomendado)

### Por que Vercel?
- ✅ Criadores do Next.js
- ✅ Deploy automático
- ✅ Preview deployments
- ✅ Edge Network global
- ✅ HTTPS automático
- ✅ Domínio gratuito (.vercel.app)
- ✅ Analytics integrado

### Passo a Passo

**1. Crie uma conta:**
- Acesse: https://vercel.com/signup
- Conecte com GitHub, GitLab ou Bitbucket

**2. Importe o projeto:**
```bash
# Via CLI (opcional)
npm i -g vercel
vercel
```

Ou via Dashboard:
- Clique em "New Project"
- Selecione o repositório
- Vercel detecta Next.js automaticamente

**3. Configure (se necessário):**
- Build Command: `npm run build` (padrão)
- Output Directory: `.next` (padrão)
- Install Command: `npm install` (padrão)

**4. Variáveis de Ambiente (opcional):**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**5. Deploy:**
- Clique em "Deploy"
- Aguarde 1-2 minutos
- Pronto! 🎉

### Deploy Contínuo

Cada push para a branch principal faz deploy automático:
```bash
git add .
git commit -m "Update content"
git push origin main
```

### Preview Deployments

Cada Pull Request gera um preview:
- URL única para testar
- Não afeta produção
- Perfeito para revisões

### Domínio Customizado

1. Vá em Settings > Domains
2. Adicione seu domínio
3. Configure DNS:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 2️⃣ Netlify

### Por que Netlify?
- ✅ Fácil de usar
- ✅ Deploy automático
- ✅ Forms integrados
- ✅ CDN global
- ✅ HTTPS automático

### Passo a Passo

**1. Crie uma conta:**
- Acesse: https://app.netlify.com/signup
- Conecte com GitHub

**2. Novo Site:**
- Clique em "Add new site"
- Escolha "Import an existing project"
- Selecione o repositório

**3. Configure Build:**
```
Build command: npm run build
Publish directory: .next
```

**4. Variáveis de Ambiente:**
- Site settings > Environment variables
- Adicione as variáveis necessárias

**5. Deploy:**
- Clique em "Deploy site"
- Aguarde o build
- Pronto! 🎉

### netlify.toml (Opcional)

Crie na raiz do projeto:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 3️⃣ AWS Amplify

### Por que AWS Amplify?
- ✅ Integração com AWS
- ✅ Escalável
- ✅ CDN CloudFront
- ✅ CI/CD integrado

### Passo a Passo

**1. Console AWS:**
- Acesse: https://console.aws.amazon.com/amplify/
- Clique em "Get Started" > "Host web app"

**2. Conecte Repositório:**
- Escolha GitHub/GitLab/Bitbucket
- Autorize acesso
- Selecione repositório e branch

**3. Configure Build:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

**4. Deploy:**
- Revise configurações
- Clique em "Save and deploy"
- Aguarde o build

---

## 4️⃣ DigitalOcean App Platform

### Por que DigitalOcean?
- ✅ Preço competitivo
- ✅ Simples de usar
- ✅ Escalável
- ✅ Suporte a Docker

### Passo a Passo

**1. Crie uma conta:**
- Acesse: https://cloud.digitalocean.com/

**2. Novo App:**
- Apps > Create App
- Conecte repositório GitHub

**3. Configure:**
```
Build Command: npm run build
Run Command: npm start
HTTP Port: 3000
```

**4. Escolha Plano:**
- Basic: $5/mês
- Professional: $12/mês

**5. Deploy:**
- Clique em "Create Resources"
- Aguarde provisionamento

---

## 5️⃣ VPS (Servidor Próprio)

### Requisitos
- Node.js 18+
- PM2 (gerenciador de processos)
- Nginx (reverse proxy)
- Certbot (SSL)

### Passo a Passo

**1. Instale Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2. Clone o Projeto:**
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
npm run build
```

**3. Instale PM2:**
```bash
sudo npm install -g pm2
pm2 start npm --name "landing-page" -- start
pm2 save
pm2 startup
```

**4. Configure Nginx:**
```nginx
server {
    listen 80;
    server_name seudominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**5. SSL com Certbot:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seudominio.com
```

---

## 📋 Checklist Pré-Deploy

### Código
- [ ] Build sem erros (`npm run build`)
- [ ] Testes passando (se houver)
- [ ] Lint sem erros (`npm run lint`)
- [ ] TypeScript sem erros

### Configuração
- [ ] `config/site.json` atualizado
- [ ] Variáveis de ambiente configuradas
- [ ] URLs de produção corretas
- [ ] Números de telefone corretos

### Conteúdo
- [ ] Todas as imagens otimizadas
- [ ] Textos revisados
- [ ] Links externos verificados
- [ ] Informações de contato corretas

### SEO
- [ ] Meta tags configuradas
- [ ] Sitemap acessível
- [ ] Robots.txt configurado
- [ ] Schema markup válido

### Analytics
- [ ] Google Analytics configurado
- [ ] GTM instalado
- [ ] Eventos testados
- [ ] Conversões configuradas

---

## 🔧 Configurações Pós-Deploy

### 1. DNS

**Registrar.br (exemplo):**
```
Tipo: A
Nome: @
Valor: [IP do servidor]

Tipo: CNAME
Nome: www
Valor: seudominio.com
```

### 2. Google Search Console

1. Acesse: https://search.google.com/search-console
2. Adicione propriedade
3. Verifique propriedade (meta tag ou DNS)
4. Envie sitemap: `https://seudominio.com/sitemap.xml`

### 3. Google Analytics

1. Crie propriedade GA4
2. Copie Measurement ID
3. Adicione em `config/site.json`
4. Verifique eventos no Real-Time

### 4. Google Tag Manager

1. Crie container
2. Copie GTM ID
3. Adicione em `config/site.json`
4. Configure tags e triggers
5. Publique container

### 5. SSL/HTTPS

**Vercel/Netlify:** Automático ✅

**VPS:**
```bash
sudo certbot --nginx -d seudominio.com -d www.seudominio.com
```

### 6. Monitoramento

**Uptime Monitoring:**
- UptimeRobot (gratuito)
- Pingdom
- StatusCake

**Error Tracking:**
- Sentry
- LogRocket
- Bugsnag

---

## 🔄 Atualizações

### Deploy Manual (VPS)

```bash
# No servidor
cd /caminho/do/projeto
git pull origin main
npm install
npm run build
pm2 restart landing-page
```

### Deploy Automático (CI/CD)

**GitHub Actions (exemplo):**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

---

## 🐛 Troubleshooting

### Build Falha

**Erro:** `Module not found`
```bash
# Limpe cache e reinstale
rm -rf node_modules .next
npm install
npm run build
```

**Erro:** `Out of memory`
```bash
# Aumente memória do Node
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Site Não Carrega

1. Verifique logs do servidor
2. Confirme que porta 3000 está aberta
3. Verifique configuração do Nginx
4. Teste localmente: `npm run build && npm start`

### Imagens Não Aparecem

1. Verifique URLs em `config/site.json`
2. Confirme que imagens estão em `public/`
3. Verifique permissões de arquivos
4. Teste URLs diretamente no navegador

### Analytics Não Rastreia

1. Verifique GTM ID em `config/site.json`
2. Use GTM Preview Mode
3. Verifique console do navegador
4. Confirme que dataLayer está presente

---

## 📊 Monitoramento Pós-Deploy

### Primeiras 24 Horas

- [ ] Site acessível
- [ ] HTTPS funcionando
- [ ] Formulário envia corretamente
- [ ] WhatsApp abre
- [ ] Analytics rastreando
- [ ] Sem erros no console

### Primeira Semana

- [ ] Google indexou o site
- [ ] Analytics com dados
- [ ] Conversões registradas
- [ ] Performance estável
- [ ] Sem downtime

### Mensal

- [ ] Revisar analytics
- [ ] Atualizar dependências
- [ ] Verificar performance
- [ ] Backup de dados
- [ ] Revisar logs de erro

---

## 🎉 Pronto!

Seu site está no ar! 🚀

**Próximos Passos:**
1. Compartilhe nas redes sociais
2. Configure Google Ads (se aplicável)
3. Monitore conversões
4. Colete feedback
5. Itere e melhore

---

**Precisa de Ajuda?**
- Consulte a documentação
- Verifique os logs
- Revise o código
- Entre em contato com suporte

**Boa sorte com seu restaurante! 🍱**
