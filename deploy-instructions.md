# 🚀 Deploy do Dashboard para GitHub

## Repositório Criado
✅ **Repositório:** [https://github.com/fersalves/desarrollo](https://github.com/fersalves/desarrollo)

## 📁 Arquivos para Upload

Os seguintes arquivos foram criados e devem ser enviados para o repositório:

1. `dashboard.html` - Página principal do dashboard
2. `dashboard-styles.css` - Estilos CSS
3. `dashboard-script.js` - JavaScript e funcionalidades
4. `README-dashboard.md` - Documentação completa
5. `config-example.js` - Exemplo de configuração
6. `google-sheets-template.md` - Template da planilha

## 🔧 Opções de Deploy

### Opção 1: Upload via Interface Web do GitHub (Mais Fácil)

1. **Acesse seu repositório:** [https://github.com/fersalves/desarrollo](https://github.com/fersalves/desarrollo)

2. **Clique em "uploading an existing file"** ou "Add file" > "Upload files"

3. **Arraste os arquivos** ou clique para selecionar:
   - `dashboard.html`
   - `dashboard-styles.css`
   - `dashboard-script.js`
   - `README-dashboard.md`
   - `config-example.js`
   - `google-sheets-template.md`

4. **Adicione uma mensagem de commit:** "Adicionar dashboard de desenvolvimento pessoal"

5. **Clique em "Commit changes"**

### Opção 2: Via Git Command Line

```bash
# Navegar para o diretório do projeto
cd "/Users/fesalves/Landing page cursor"

# Inicializar repositório Git (se não estiver inicializado)
git init

# Adicionar o repositório remoto
git remote add origin https://github.com/fersalves/desarrollo.git

# Adicionar todos os arquivos do dashboard
git add dashboard.html dashboard-styles.css dashboard-script.js README-dashboard.md config-example.js google-sheets-template.md

# Fazer commit
git commit -m "Adicionar dashboard de desenvolvimento pessoal"

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

## 🌐 Configurar GitHub Pages

Após o upload dos arquivos:

1. **Vá para Settings** do repositório
2. **Clique em "Pages"** no menu lateral
3. **Em "Source"** selecione "Deploy from a branch"
4. **Selecione "main"** como branch
5. **Selecione "/ (root)"** como pasta
6. **Clique em "Save"**

### 📱 URLs de Acesso

Após configurar o GitHub Pages, seu dashboard estará disponível em:

- **URL Principal:** `https://fersalves.github.io/desarrollo/dashboard.html`
- **Documentação:** `https://fersalves.github.io/desarrollo/README-dashboard.md`

## ⚙️ Próximos Passos Após Deploy

### 1. Configurar Google Sheets API

1. **Acesse:** [Google Cloud Console](https://console.cloud.google.com/)
2. **Crie um projeto** ou selecione existente
3. **Ative a API** do Google Sheets
4. **Crie credenciais** (API Key)
5. **Copie a chave** gerada

### 2. Criar Planilha de Dados

1. **Crie uma nova planilha** no Google Sheets
2. **Use o template** em `google-sheets-template.md`
3. **Crie 5 abas:** Skills, Projects, Learning, Goals, Activities
4. **Preencha com seus dados**
5. **Torne pública** ou configure permissões

### 3. Configurar o Dashboard

1. **Copie `config-example.js`** para `config.js`
2. **Adicione sua API Key:**
   ```javascript
   API_KEY: 'sua_api_key_aqui'
   ```
3. **Adicione o Sheet ID:**
   ```javascript
   SHEET_ID: 'id_da_sua_planilha'
   ```
4. **Faça upload** do `config.js` para o GitHub

### 4. Testar o Dashboard

1. **Acesse:** `https://fersalves.github.io/desarrollo/dashboard.html`
2. **Verifique** se os dados carregam
3. **Teste** a navegação entre seções
4. **Confirme** se os gráficos funcionam

## 🎨 Personalização Opcional

### Alterar Cores do Tema
Edite as variáveis CSS em `dashboard-styles.css`:
```css
:root {
    --accent-primary: #00d4ff;  /* Cor principal */
    --accent-secondary: #7c3aed; /* Cor secundária */
    --bg-primary: #0a0a0f;      /* Fundo principal */
}
```

### Adicionar Favicon
Crie um arquivo `favicon.ico` e adicione no HTML:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Customizar README
Renomeie `README-dashboard.md` para `README.md` para aparecer na página inicial do repositório.

## 🔍 Verificação Final

Após o deploy, verifique:

- ✅ **Arquivos enviados** para o repositório
- ✅ **GitHub Pages configurado**
- ✅ **Dashboard acessível** via URL
- ✅ **Google Sheets API configurada**
- ✅ **Planilha criada** e preenchida
- ✅ **Dados carregando** no dashboard

## 📞 Suporte

Se encontrar problemas:

1. **Verifique o console** do navegador (F12)
2. **Confirme as configurações** da API
3. **Teste com dados de exemplo** primeiro
4. **Consulte a documentação** completa

---

**🎉 Parabéns! Seu dashboard de desenvolvimento pessoal está pronto para impressionar!**

**URL do Dashboard:** `https://fersalves.github.io/desarrollo/dashboard.html`
