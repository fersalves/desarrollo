# Dashboard de Desenvolvimento Pessoal

Um dashboard moderno e tecnológico para acompanhar seu desenvolvimento pessoal, conectado ao Google Sheets para visualização de dados em tempo real.

## 🚀 Características

- **Design Moderno**: Interface escura com gradientes e animações
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Integração Google Sheets**: Dados atualizados automaticamente
- **Gráficos Interativos**: Visualizações usando Chart.js
- **Tempo Real**: Atualização automática a cada 5 minutos
- **Múltiplas Seções**: Habilidades, Projetos, Aprendizado e Metas

## 📊 Seções do Dashboard

### 1. Visão Geral
- KPIs principais (habilidades, projetos, horas de estudo, conquistas)
- Gráfico radar de habilidades
- Distribuição de tempo por categoria
- Timeline de atividades recentes

### 2. Habilidades
- Grid de habilidades com barras de progresso
- Gráfico de evolução das habilidades ao longo do tempo
- Categorização por área (Frontend, Backend, etc.)

### 3. Projetos
- Cards de projetos com status e progresso
- Gráfico de status dos projetos
- Tecnologias utilizadas em cada projeto

### 4. Aprendizado
- Estatísticas de cursos e certificações
- Gráfico de horas de estudo por categoria
- Status dos cursos (em andamento, concluído, planejado)

### 5. Metas
- Cards de metas com prioridade e progresso
- Gráfico de progresso das metas
- Prazos e categorias das metas

## 🛠️ Configuração

### 1. Configurar Google Sheets API

1. **Criar um projeto no Google Cloud Console**:
   - Acesse [Google Cloud Console](https://console.cloud.google.com/)
   - Crie um novo projeto ou selecione um existente
   - Ative a API do Google Sheets

2. **Criar credenciais**:
   - Vá para "Credenciais" > "Criar credenciais" > "Chave de API"
   - Copie a chave de API gerada
   - Configure as restrições da API (opcional, mas recomendado)

3. **Configurar no código**:
   ```javascript
   const CONFIG = {
       GOOGLE_SHEETS: {
           API_KEY: 'SUA_CHAVE_DE_API_AQUI',
           SHEET_ID: 'ID_DA_SUA_PLANILHA_AQUI'
       }
   };
   ```

### 2. Estrutura da Planilha Google Sheets

Crie uma planilha no Google Sheets com as seguintes abas:

#### Aba "Skills" (Habilidades)
| Nome | Nível | Categoria | Descrição |
|------|-------|-----------|-----------|
| JavaScript | 85 | Frontend | Desenvolvimento web moderno |
| Python | 78 | Backend | Análise de dados e automação |
| React | 82 | Frontend | Biblioteca para interfaces |

#### Aba "Projects" (Projetos)
| Nome | Status | Progresso | Descrição | Tecnologias | Data Início | Data Fim |
|------|--------|-----------|-----------|-------------|-------------|----------|
| E-commerce Platform | completed | 100 | Plataforma completa de e-commerce | React,Node.js,MongoDB | 2024-01-15 | 2024-03-20 |
| Data Analytics Dashboard | in-progress | 65 | Dashboard para análise de dados | Python,Plotly,Pandas | 2024-02-01 | 2024-04-30 |

#### Aba "Learning" (Aprendizado)
| Curso | Status | Horas | Categoria |
|-------|--------|-------|-----------|
| Advanced React Patterns | completed | 40 | Frontend |
| Machine Learning Fundamentals | in-progress | 25 | AI/ML |
| AWS Cloud Practitioner | in-progress | 30 | Cloud |

#### Aba "Goals" (Metas)
| Título | Descrição | Prioridade | Progresso | Prazo | Categoria |
|--------|-----------|------------|-----------|-------|-----------|
| Obter certificação AWS | Conquistar a certificação AWS Solutions Architect | high | 60 | 2024-06-30 | Certification |
| Contribuir para Open Source | Fazer 50 contribuições para projetos open source | medium | 30 | 2024-12-31 | Community |

#### Aba "Activities" (Atividades)
| Tipo | Título | Descrição | Timestamp |
|------|--------|-----------|-----------|
| skill | Completou curso de React Hooks | Finalizou o curso avançado de React Hooks | 2024-03-15T10:30:00Z |
| project | Deploy do E-commerce | Realizou deploy da plataforma de e-commerce | 2024-03-15T08:15:00Z |

### 3. Configurar Permissões da Planilha

1. **Tornar a planilha pública** (método mais simples):
   - Clique em "Compartilhar" na sua planilha
   - Altere para "Qualquer pessoa com o link pode visualizar"
   - Copie o ID da planilha da URL

2. **Ou usar Service Account** (método mais seguro):
   - Crie uma Service Account no Google Cloud Console
   - Baixe o arquivo JSON de credenciais
   - Compartilhe a planilha com o email da Service Account

### 4. Obter o ID da Planilha

O ID da planilha está na URL:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
                                    ↑ Este é o ID da planilha ↑
```

## 🎨 Personalização

### Cores e Tema
Edite as variáveis CSS em `dashboard-styles.css`:
```css
:root {
    --accent-primary: #00d4ff;
    --accent-secondary: #7c3aed;
    --bg-primary: #0a0a0f;
    /* ... outras variáveis */
}
```

### Gráficos
Modifique as configurações dos gráficos em `dashboard-script.js`:
```javascript
const CONFIG = {
    COLORS: {
        primary: '#00d4ff',
        secondary: '#7c3aed',
        // ... outras cores
    }
};
```

## 📱 Responsividade

O dashboard é totalmente responsivo e se adapta a:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado com navegação horizontal
- **Mobile**: Layout em coluna única otimizado para toque

## 🔄 Atualização Automática

- **Intervalo**: A cada 5 minutos (configurável)
- **Manual**: Botão "Atualizar Dados" no cabeçalho
- **Fallback**: Dados de exemplo caso a API falhe

## 🚀 Deploy

### GitHub Pages
1. Faça upload dos arquivos para seu repositório "desarrollo"
2. Ative o GitHub Pages nas configurações do repositório
3. Acesse via `https://seu-usuario.github.io/desarrollo/dashboard.html`

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build (não necessário para arquivos estáticos)
3. Deploy automático a cada commit

### Vercel
1. Importe o projeto no Vercel
2. Deploy automático configurado

## 🔧 Solução de Problemas

### Erro de CORS
Se encontrar erros de CORS, use um servidor local:
```bash
# Python
python -m http.server 8000

# Node.js (http-server)
npx http-server

# Live Server (VS Code extension)
```

### API Key não funciona
- Verifique se a API do Google Sheets está ativada
- Confirme se a chave de API está correta
- Verifique as restrições da API key

### Planilha não carrega
- Confirme se a planilha está pública ou compartilhada
- Verifique se o ID da planilha está correto
- Confirme se as abas têm os nomes corretos

## 📄 Arquivos do Projeto

```
dashboard/
├── dashboard.html          # Página principal
├── dashboard-styles.css    # Estilos CSS
├── dashboard-script.js     # JavaScript e lógica
├── README-dashboard.md     # Esta documentação
└── config-example.js       # Exemplo de configuração
```

## 🤝 Contribuição

Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novas funcionalidades
- Melhorar a documentação

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins pessoais e educacionais.

---

**Desenvolvido com ❤️ para acompanhar seu crescimento profissional!**
