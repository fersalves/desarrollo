# 🚀 Dashboard de Desenvolvimento Pessoal

Um dashboard moderno e tecnológico para acompanhar seu desenvolvimento pessoal, conectado ao Google Sheets para visualização de dados em tempo real.

![Dashboard Preview](https://img.shields.io/badge/Status-Pronto%20para%20Deploy-brightgreen)
![Technology](https://img.shields.io/badge/Tech-HTML%2BCSS%2BJS-blue)
![Integration](https://img.shields.io/badge/Integration-Google%20Sheets-green)

## 🎯 Sobre o Projeto

Este dashboard foi criado para visualizar e acompanhar o desenvolvimento pessoal de forma profissional e interativa. Conecta-se ao Google Sheets para buscar dados em tempo real e apresenta informações através de gráficos modernos e interface responsiva.

## ✨ Características

- **🌙 Design Moderno**: Tema escuro tecnológico com gradientes
- **📊 Gráficos Interativos**: 6 tipos diferentes usando Chart.js
- **📱 Responsivo**: Funciona em desktop, tablet e mobile
- **🔄 Tempo Real**: Atualização automática a cada 5 minutos
- **☁️ Google Sheets**: Integração completa com planilhas
- **⚡ Performance**: Carregamento rápido e animações suaves

## 📋 Seções do Dashboard

### 1. 📊 Visão Geral
- KPIs principais (habilidades, projetos, horas de estudo, conquistas)
- Gráfico radar de habilidades
- Distribuição de tempo por categoria
- Timeline de atividades recentes

### 2. 💻 Habilidades
- Grid de habilidades com barras de progresso
- Gráfico de evolução das habilidades ao longo do tempo
- Categorização por área (Frontend, Backend, etc.)

### 3. 🚀 Projetos
- Cards de projetos com status e progresso
- Gráfico de status dos projetos
- Tecnologias utilizadas em cada projeto

### 4. 🎓 Aprendizado
- Estatísticas de cursos e certificações
- Gráfico de horas de estudo por categoria
- Status dos cursos (em andamento, concluído, planejado)

### 5. 🎯 Metas
- Cards de metas com prioridade e progresso
- Gráfico de progresso das metas
- Prazos e categorias das metas

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript ES6+** - Funcionalidades interativas
- **Chart.js** - Gráficos interativos
- **Google Sheets API** - Fonte de dados
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia Inter

## 🚀 Como Usar

### 1. Deploy Rápido
```bash
# Executar o script de deploy automático
./deploy.sh
```

### 2. Configuração Manual

#### Passo 1: Configurar Google Sheets API
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um projeto ou selecione um existente
3. Ative a API do Google Sheets
4. Crie uma chave de API
5. Copie a chave gerada

#### Passo 2: Criar Planilha de Dados
1. Crie uma nova planilha no Google Sheets
2. Use o template em `google-sheets-template.md`
3. Crie 5 abas: Skills, Projects, Learning, Goals, Activities
4. Preencha com seus dados
5. Torne a planilha pública ou configure permissões

#### Passo 3: Configurar o Dashboard
1. Copie `config-example.js` para `config.js`
2. Adicione sua API key e Sheet ID:
```javascript
const CONFIG = {
    GOOGLE_SHEETS: {
        API_KEY: 'sua_api_key_aqui',
        SHEET_ID: 'id_da_sua_planilha_aqui'
    }
};
```

#### Passo 4: Deploy
1. Faça upload dos arquivos para seu repositório GitHub
2. Ative o GitHub Pages
3. Acesse seu dashboard

## 📁 Estrutura do Projeto

```
dashboard/
├── dashboard.html              # Página principal
├── dashboard-styles.css        # Estilos CSS
├── dashboard-script.js         # JavaScript e lógica
├── config-example.js           # Exemplo de configuração
├── README.md                   # Esta documentação
├── google-sheets-template.md   # Template da planilha
├── deploy-instructions.md      # Instruções detalhadas
├── deploy.sh                   # Script de deploy automático
└── RESUMO-PROJETO.md          # Resumo completo
```

## 📊 Estrutura de Dados

### Skills (Habilidades)
| Nome | Nível | Categoria | Descrição |
|------|-------|-----------|-----------|
| JavaScript | 85 | Frontend | Desenvolvimento web moderno |

### Projects (Projetos)
| Nome | Status | Progresso | Descrição | Tecnologias | Data Início | Data Fim |
|------|--------|-----------|-----------|-------------|-------------|----------|
| E-commerce | completed | 100 | Plataforma completa | React,Node.js | 2024-01-15 | 2024-03-20 |

### Learning (Aprendizado)
| Curso | Status | Horas | Categoria |
|-------|--------|-------|-----------|
| React Avançado | completed | 40 | Frontend |

### Goals (Metas)
| Título | Descrição | Prioridade | Progresso | Prazo | Categoria |
|--------|-----------|------------|-----------|-------|-----------|
| Certificação AWS | Obter certificação | high | 60 | 2024-06-30 | Certification |

### Activities (Atividades)
| Tipo | Título | Descrição | Timestamp |
|------|--------|-----------|-----------|
| skill | Curso concluído | Finalizou React Hooks | 2024-03-15T10:30:00Z |

## 🎨 Personalização

### Alterar Cores
Edite as variáveis CSS em `dashboard-styles.css`:
```css
:root {
    --accent-primary: #00d4ff;
    --accent-secondary: #7c3aed;
    --bg-primary: #0a0a0f;
}
```

### Configurar Gráficos
Modifique as configurações em `dashboard-script.js`:
```javascript
const CONFIG = {
    COLORS: {
        primary: '#00d4ff',
        secondary: '#7c3aed'
    }
};
```

## 🔧 Solução de Problemas

### Dados não carregam
- Verifique se a API key está correta
- Confirme se a planilha está pública
- Verifique o ID da planilha na URL

### Erro de CORS
- Use um servidor local para desenvolvimento
- Verifique as configurações da API key

### Gráficos não aparecem
- Verifique se os dados estão no formato correto
- Confirme se Chart.js carregou corretamente
- Verifique o console do navegador (F12)

## 📚 Documentação Adicional

- **📋 Template da Planilha**: `google-sheets-template.md`
- **🚀 Instruções de Deploy**: `deploy-instructions.md`
- **📖 Resumo Completo**: `RESUMO-PROJETO.md`
- **⚙️ Configuração**: `config-example.js`

## 🤝 Contribuição

Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novas funcionalidades
- Melhorar a documentação

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins pessoais e educacionais.

---

**🎯 Desenvolvido para acompanhar e visualizar seu crescimento profissional de forma moderna e interativa!**

**🚀 Pronto para impressionar em apresentações e entrevistas!**
