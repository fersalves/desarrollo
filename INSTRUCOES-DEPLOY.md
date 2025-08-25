# 🚀 Como Fazer Deploy do Dashboard

## 📍 **Localização do Projeto**

O projeto do dashboard está em: `/Users/fesalves/desarrollo-dashboard/`

Este é um projeto **completamente separado** da landing page.

## 🎯 **Repositório de Destino**

- **GitHub:** [https://github.com/fersalves/desarrollo](https://github.com/fersalves/desarrollo)
- **Tipo:** Dashboard de desenvolvimento pessoal
- **Tecnologia:** HTML + CSS + JavaScript + Google Sheets API

## 🚀 **Deploy Automático (Recomendado)**

```bash
# 1. Navegar para o diretório correto do projeto
cd ~/desarrollo-dashboard

# 2. Executar o script de deploy
./deploy.sh
```

## 📋 **Deploy Manual via GitHub**

### Passo 1: Preparar Arquivos
```bash
cd ~/desarrollo-dashboard
ls -la
```

Você deve ver estes arquivos:
- ✅ `dashboard.html`
- ✅ `dashboard-styles.css`
- ✅ `dashboard-script.js`
- ✅ `README.md`
- ✅ `config-example.js`
- ✅ `google-sheets-template.md`

### Passo 2: Upload para GitHub
1. **Acesse:** [https://github.com/fersalves/desarrollo](https://github.com/fersalves/desarrollo)
2. **Clique:** "Add file" > "Upload files"
3. **Arraste:** Todos os arquivos do diretório `~/desarrollo-dashboard/`
4. **Commit:** "Adicionar dashboard de desenvolvimento pessoal"
5. **Clique:** "Commit changes"

### Passo 3: Ativar GitHub Pages
1. **Vá para:** Settings do repositório
2. **Clique em:** Pages
3. **Source:** Deploy from a branch
4. **Branch:** main
5. **Folder:** / (root)
6. **Save**

## 🌐 **URLs Após Deploy**

- **Dashboard:** `https://fersalves.github.io/desarrollo/dashboard.html`
- **Repositório:** `https://github.com/fersalves/desarrollo`

## ⚙️ **Configuração Pós-Deploy**

### 1. Google Sheets API
1. **Google Cloud Console:** [console.cloud.google.com](https://console.cloud.google.com/)
2. **Criar projeto** (se não tiver)
3. **Ativar** Google Sheets API
4. **Criar** chave de API
5. **Copiar** a chave

### 2. Criar Planilha
1. **Nova planilha** no Google Sheets
2. **Seguir template** em `google-sheets-template.md`
3. **5 abas:** Skills, Projects, Learning, Goals, Activities
4. **Tornar pública:** Compartilhar > Qualquer pessoa com link
5. **Copiar ID** da URL

### 3. Configurar Dashboard
1. **Copiar** `config-example.js` para `config.js`
2. **Editar** com suas credenciais:
```javascript
const CONFIG = {
    GOOGLE_SHEETS: {
        API_KEY: 'SUA_API_KEY_AQUI',
        SHEET_ID: 'SEU_SHEET_ID_AQUI'
    }
};
```
3. **Upload** do `config.js` para GitHub

## 🔍 **Verificação**

Após o deploy, verifique:
- ✅ Arquivos no repositório GitHub
- ✅ GitHub Pages ativado
- ✅ Dashboard acessível via URL
- ✅ Dados carregando (ou dados de exemplo)

## 📞 **Suporte**

Se tiver problemas:
1. **Verifique** o console do navegador (F12)
2. **Confirme** as configurações da API
3. **Teste** com dados de exemplo primeiro
4. **Consulte** `README.md` para documentação completa

---

**🎯 Seu dashboard de desenvolvimento pessoal está pronto para impressionar!**

