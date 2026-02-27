# Guia Completo - Subir Projeto para o GitHub

## 📋 Pré-requisitos

### 1. Instalar o Git

**Baixe e instale:**
- Acesse: https://git-scm.com/download/win
- Baixe a versão para Windows
- Execute o instalador
- Use as opções padrão (Next, Next, Next...)
- Reinicie o computador após a instalação

**Verificar instalação:**
Abra o terminal e digite:
```bash
git --version
```
Deve aparecer algo como: `git version 2.43.0`

### 2. Criar Conta no GitHub

Se ainda não tem:
1. Acesse: https://github.com
2. Clique em "Sign up"
3. Crie sua conta (gratuita)
4. Confirme seu email

---

## 🚀 Passo a Passo para Subir o Projeto

### Passo 1: Configurar o Git (Primeira Vez)

Abra o terminal na pasta do projeto e execute:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Substitua pelos seus dados do GitHub.

### Passo 2: Inicializar o Repositório

```bash
git init
```

Isso cria um repositório Git na pasta do projeto.

### Passo 3: Adicionar Todos os Arquivos

```bash
git add .
```

O ponto (.) adiciona todos os arquivos do projeto.

### Passo 4: Fazer o Primeiro Commit

```bash
git commit -m "Initial commit - Landing Page Sakura Premium"
```

Isso salva o estado atual do projeto.

### Passo 5: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name:** `sakura-premium-landing-page`
   - **Description:** "Landing page premium para restaurante japonês"
   - **Public** ou **Private** (sua escolha)
   - **NÃO** marque "Initialize with README"
3. Clique em "Create repository"

### Passo 6: Conectar com o GitHub

Copie a URL do seu repositório (algo como: `https://github.com/seu-usuario/sakura-premium-landing-page.git`)

Execute:

```bash
git remote add origin https://github.com/seu-usuario/sakura-premium-landing-page.git
git branch -M main
git push -u origin main
```

**Vai pedir login:**
- Username: seu usuário do GitHub
- Password: use um **Personal Access Token** (não a senha)

### Passo 7: Criar Personal Access Token

Se pedir senha e não funcionar:

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" > "Generate new token (classic)"
3. Dê um nome: "Landing Page Deploy"
4. Marque: `repo` (todas as opções)
5. Clique em "Generate token"
6. **COPIE O TOKEN** (não vai aparecer de novo!)
7. Use esse token como senha no git push

---

## 📝 Comandos Resumidos

```bash
# 1. Configurar Git (só primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# 2. Inicializar repositório
git init

# 3. Adicionar arquivos
git add .

# 4. Fazer commit
git commit -m "Initial commit - Landing Page Sakura Premium"

# 5. Conectar com GitHub (use sua URL)
git remote add origin https://github.com/seu-usuario/sakura-premium-landing-page.git

# 6. Enviar para GitHub
git branch -M main
git push -u origin main
```

---

## 🔄 Atualizações Futuras

Quando fizer alterações no projeto:

```bash
# 1. Ver o que mudou
git status

# 2. Adicionar mudanças
git add .

# 3. Fazer commit com mensagem descritiva
git commit -m "Atualização: mudei as imagens da galeria"

# 4. Enviar para GitHub
git push
```

---

## 📁 Estrutura que Será Enviada

```
sakura-premium-landing-page/
├── app/                          # Páginas Next.js
├── components/                   # Componentes React
├── config/                       # Configurações
├── public/                       # Arquivos públicos
├── .gitignore                    # Arquivos ignorados
├── package.json                  # Dependências
├── README.md                     # Documentação
├── GUIA-DE-PERSONALIZACAO.md    # Guia de uso
├── GUIA-RESERVAS.md             # Guia de reservas
└── ...
```

---

## 🔒 Arquivos que NÃO Serão Enviados

O `.gitignore` já está configurado para ignorar:
- `node_modules/` (dependências - muito grande)
- `.next/` (build temporário)
- `.env.local` (variáveis secretas)
- Arquivos de sistema

---

## 🌐 Publicar Online (Deploy)

Depois de subir no GitHub, você pode publicar gratuitamente:

### Opção 1: Vercel (Recomendado)

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione seu repositório
5. Clique em "Deploy"
6. Pronto! Seu site estará online em minutos

**URL será algo como:** `sakura-premium.vercel.app`

### Opção 2: Netlify

1. Acesse: https://netlify.com
2. Faça login com GitHub
3. Clique em "Add new site" > "Import from Git"
4. Selecione seu repositório
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Clique em "Deploy"

---

## 🎯 Checklist Completo

Antes de subir para o GitHub:

- [ ] Git instalado
- [ ] Conta no GitHub criada
- [ ] Git configurado (nome e email)
- [ ] Repositório inicializado (`git init`)
- [ ] Arquivos adicionados (`git add .`)
- [ ] Primeiro commit feito
- [ ] Repositório criado no GitHub
- [ ] Conectado com GitHub (`git remote add`)
- [ ] Código enviado (`git push`)

Depois de subir:

- [ ] Verificar se apareceu no GitHub
- [ ] Fazer deploy na Vercel/Netlify
- [ ] Testar o site online
- [ ] Compartilhar a URL

---

## 🆘 Problemas Comuns

### "Git não é reconhecido"
- Instale o Git: https://git-scm.com/download/win
- Reinicie o terminal/computador

### "Permission denied"
- Use Personal Access Token em vez de senha
- Gere em: https://github.com/settings/tokens

### "Remote origin already exists"
```bash
git remote remove origin
git remote add origin SUA_URL_AQUI
```

### "Nothing to commit"
- Você já fez commit de tudo
- Faça alterações antes de commitar novamente

### "Failed to push"
- Verifique sua conexão com internet
- Confirme que o token está correto
- Tente: `git push -f origin main` (força o push)

---

## 📚 Comandos Git Úteis

```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log

# Ver diferenças
git diff

# Desfazer mudanças não commitadas
git checkout .

# Ver repositórios remotos
git remote -v

# Baixar atualizações do GitHub
git pull

# Criar nova branch
git checkout -b nova-feature

# Trocar de branch
git checkout main

# Ver todas as branches
git branch -a
```

---

## 🎓 Recursos para Aprender Mais

- **Git Básico:** https://git-scm.com/book/pt-br/v2
- **GitHub Guides:** https://guides.github.com/
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

## 💡 Dicas Importantes

1. **Commits Frequentes:** Faça commits pequenos e frequentes
2. **Mensagens Claras:** Use mensagens descritivas nos commits
3. **Backup:** GitHub é seu backup na nuvem
4. **Colaboração:** Outras pessoas podem contribuir
5. **Versionamento:** Você pode voltar para versões antigas
6. **Portfolio:** Mostre seu trabalho para clientes

---

## 🎉 Próximos Passos

Após subir no GitHub:

1. ✅ Adicione um README.md bonito
2. ✅ Configure GitHub Pages (se quiser)
3. ✅ Faça deploy na Vercel
4. ✅ Compartilhe o link com clientes
5. ✅ Continue fazendo melhorias

---

Pronto! Agora você sabe tudo para subir seu projeto no GitHub! 🚀

**Precisa de ajuda?** Me avise em qual passo está com dúvida!
