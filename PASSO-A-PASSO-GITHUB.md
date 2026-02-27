# 🚀 Passo a Passo: Subir Projeto no GitHub

## ✅ Status Atual
- [x] Git instalado (versão 2.53.0)
- [x] Repositório Git inicializado
- [x] Arquivos adicionados ao staging
- [ ] Configurar identidade do Git
- [ ] Fazer commit
- [ ] Criar repositório no GitHub
- [ ] Conectar e fazer push

---

## 📝 Próximos Passos

### 1️⃣ Configurar sua Identidade no Git

Abra o terminal (PowerShell ou CMD) e execute:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

**Exemplo:**
```bash
git config --global user.name "João Silva"
git config --global user.email "joao@email.com"
```

**⚠️ Use o mesmo email da sua conta do GitHub!**

---

### 2️⃣ Fazer o Primeiro Commit

Depois de configurar, execute:

```bash
git commit -m "Initial commit: Landing page completa do restaurante japonês"
```

---

### 3️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/
2. Faça login (ou crie uma conta se não tiver)
3. Clique no botão **"+"** no canto superior direito
4. Selecione **"New repository"**
5. Preencha:
   - **Repository name:** `landing-page-restaurante-japones`
   - **Description:** `Landing page premium para restaurante japonês com Next.js`
   - **Visibilidade:** Public ou Private (sua escolha)
   - **NÃO marque** "Initialize with README" (já temos um)
6. Clique em **"Create repository"**

---

### 4️⃣ Conectar com o GitHub

Após criar o repositório, o GitHub mostrará comandos. Execute no terminal:

```bash
git remote add origin https://github.com/SEU_USUARIO/landing-page-restaurante-japones.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub!**

**Exemplo:**
```bash
git remote add origin https://github.com/joaosilva/landing-page-restaurante-japones.git
git branch -M main
git push -u origin main
```

---

### 5️⃣ Autenticação

Quando fizer o push, o GitHub pedirá autenticação:

**Opção 1: Personal Access Token (Recomendado)**
1. Vá em: https://github.com/settings/tokens
2. Clique em "Generate new token" > "Generate new token (classic)"
3. Dê um nome: "Landing Page Deploy"
4. Marque: `repo` (acesso completo aos repositórios)
5. Clique em "Generate token"
6. **COPIE O TOKEN** (você não verá novamente!)
7. Use o token como senha quando o Git pedir

**Opção 2: GitHub CLI**
```bash
# Instalar GitHub CLI
winget install --id GitHub.cli

# Fazer login
gh auth login
```

---

## 🎯 Comandos Completos (Copie e Cole)

Depois de configurar o Git, execute estes comandos em sequência:

```bash
# 1. Configurar identidade (SUBSTITUA com seus dados)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# 2. Fazer commit
git commit -m "Initial commit: Landing page completa do restaurante japonês"

# 3. Conectar com GitHub (SUBSTITUA SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/landing-page-restaurante-japones.git

# 4. Renomear branch para main
git branch -M main

# 5. Enviar para GitHub
git push -u origin main
```

---

## 📦 O Que Será Enviado

Todos estes arquivos serão enviados para o GitHub:

✅ Código fonte completo (Next.js + TypeScript)
✅ Componentes React
✅ Configurações (Tailwind, Next.js, etc)
✅ Documentação completa
✅ Guias de personalização
✅ README.md
✅ .gitignore (node_modules não será enviado)

**Tamanho aproximado:** ~500KB (sem node_modules)

---

## 🔄 Atualizações Futuras

Quando fizer alterações no projeto:

```bash
# 1. Ver o que mudou
git status

# 2. Adicionar mudanças
git add .

# 3. Fazer commit
git commit -m "Descrição da mudança"

# 4. Enviar para GitHub
git push
```

---

## 🌐 Depois de Subir no GitHub

Você poderá:

1. **Ver o código online:** `https://github.com/SEU_USUARIO/landing-page-restaurante-japones`
2. **Clonar em outro computador:** `git clone URL_DO_REPOSITORIO`
3. **Fazer deploy:** Conectar com Vercel/Netlify
4. **Compartilhar:** Enviar o link para outras pessoas
5. **Colaborar:** Outras pessoas podem contribuir

---

## 🚀 Deploy Automático (Próximo Passo)

Após subir no GitHub, você pode fazer deploy gratuito:

### Vercel (Recomendado para Next.js)
1. Acesse: https://vercel.com/
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione o repositório
5. Clique em "Deploy"
6. Pronto! Site no ar em 2 minutos

### Netlify
1. Acesse: https://www.netlify.com/
2. Faça login com GitHub
3. Clique em "Add new site" > "Import an existing project"
4. Selecione o repositório
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Clique em "Deploy"

---

## ❓ Problemas Comuns

**"Permission denied"**
- Use Personal Access Token como senha
- Ou configure SSH keys

**"Repository not found"**
- Verifique se o nome do repositório está correto
- Confirme que você tem permissão

**"Failed to push"**
- Verifique sua conexão com internet
- Tente: `git push -f origin main` (força o push)

**"Conflict"**
- Alguém fez mudanças no GitHub
- Execute: `git pull origin main` antes de fazer push

---

## 📞 Precisa de Ajuda?

Se tiver problemas:
1. Copie a mensagem de erro completa
2. Pesquise no Google: "git [mensagem de erro]"
3. Ou me pergunte!

---

## ✅ Checklist Final

Antes de fazer push, verifique:

- [ ] Configurou `user.name` e `user.email`
- [ ] Criou o repositório no GitHub
- [ ] Copiou a URL correta do repositório
- [ ] Tem acesso à internet
- [ ] Tem Personal Access Token ou está logado no GitHub CLI

---

Pronto! Siga estes passos e seu projeto estará no GitHub! 🎉
