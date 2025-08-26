# 🔗 Configuração da Planilha Google Sheets

## 📋 **Sua Planilha:**
**URL:** https://docs.google.com/spreadsheets/d/15slU-6c3xuinmAtPPwwli-5z5VM_EhEthattL8QVuOQ/edit?usp=sharing

**ID da Planilha:** `15slU-6c3xuinmAtPPwwli-5z5VM_EhEthattL8QVuOQ`

## ⚙️ **Passos para Conectar:**

### 1. 🔑 **Configurar Google Sheets API**

1. **Acesse:** [Google Cloud Console](https://console.cloud.google.com/)
2. **Crie um projeto** ou selecione um existente
3. **Ative a API:** Pesquise "Google Sheets API" e ative
4. **Criar credenciais:**
   - Vá em "Credenciais" > "Criar credenciais" > "Chave de API"
   - Copie a chave gerada
   - (Opcional) Configure restrições para mais segurança

### 2. 📊 **Configurar Permissões da Planilha**

**Opção A - Tornar Pública (Mais Simples):**
1. Na sua planilha, clique em **"Compartilhar"**
2. Altere para **"Qualquer pessoa com o link pode visualizar"**
3. Clique em **"Concluído"**

**Opção B - Usar Service Account (Mais Seguro):**
1. No Google Cloud Console, crie uma Service Account
2. Baixe o arquivo JSON de credenciais
3. Compartilhe a planilha com o email da Service Account

### 3. 📋 **Estrutura Necessária da Planilha**

Sua planilha deve ter estas **4 abas** com os cabeçalhos exatos:

#### **Aba "Skills"**
| Nome | Nível | Categoria | Descrição |
|------|-------|-----------|-----------|
| JavaScript | 85 | Frontend | Desenvolvimento web moderno |
| Python | 78 | Backend | Análise de dados e automação |

#### **Aba "Projects"**
| Nome | Status | Progresso | Descrição | Tecnologias | Data Início | Data Fim |
|------|--------|-----------|-----------|-------------|-------------|----------|
| E-commerce Platform | completed | 100 | Plataforma completa | React,Node.js | 2024-01-15 | 2024-03-20 |
| Dashboard Analytics | in-progress | 85 | Dashboard de dados | JavaScript,Sheets | 2024-02-01 | 2024-04-30 |

#### **Aba "Goals"**
| Título | Prioridade | Progresso | Prazo | Descrição | Categoria |
|--------|------------|-----------|-------|-----------|-----------|
| Certificação AWS | high | 60 | 2024-06-30 | Conquistar certificação | Certification |
| Open Source | medium | 30 | 2024-12-31 | 50 contribuições | Community |

#### **Aba "Activities"**
| Tipo | Título | Descrição | Timestamp |
|------|--------|-----------|-----------|
| skill | Completou curso React | Finalizou curso avançado | 2024-03-15T10:30:00Z |
| project | Deploy Dashboard | Publicado no GitHub | 2024-03-15T08:15:00Z |

## 🚀 **Como Usar o Dashboard:**

### 1. **Abrir Dashboard com Google Sheets:**
```
file:///Users/fesalves/desarrollo-dashboard/dashboard-sheets.html
```

### 2. **Configurar Conexão:**
- **Chave da API:** Cole sua chave do Google Cloud
- **ID da Planilha:** `15slU-6c3xuinmAtPPwwli-5z5VM_EhEthattL8QVuOQ`
- Clique em **"Conectar ao Google Sheets"**

### 3. **Testar sem API:**
- Use o botão **"Testar com Dados de Exemplo"** primeiro
- Verifique se tudo funciona antes de configurar a API

## 🔄 **Atualização Automática:**

Uma vez conectado:
- ✅ **Edite** dados na planilha
- ✅ **Clique** em "🔄 Atualizar" no dashboard
- ✅ **Veja** as mudanças refletidas instantaneamente

## ⚠️ **Valores Importantes:**

### **Status de Projetos (coluna "Status"):**
- `completed` - Projeto concluído
- `in-progress` - Em andamento
- `planned` - Planejado

### **Prioridades de Metas (coluna "Prioridade"):**
- `high` - Alta prioridade
- `medium` - Média prioridade  
- `low` - Baixa prioridade

### **Tipos de Atividades (coluna "Tipo"):**
- `skill` - Habilidade
- `project` - Projeto
- `goal` - Meta
- `learning` - Aprendizado

### **Formato de Datas:**
- **Datas:** `YYYY-MM-DD` (ex: 2024-03-15)
- **Timestamps:** `YYYY-MM-DDTHH:MM:SSZ` (ex: 2024-03-15T10:30:00Z)

## 🎯 **Dicas:**

1. **Mantenha os nomes das abas exatos:** Skills, Projects, Goals, Activities
2. **Não altere a ordem das colunas** na primeira linha
3. **Use números de 0-100** para níveis e progresso
4. **Separe tecnologias por vírgula** (React,Node.js,MongoDB)
5. **Teste sempre** com dados de exemplo primeiro

## 🔍 **Solução de Problemas:**

### **Erro 403 (Forbidden):**
- Verifique se a planilha está pública
- Confirme se a API key está correta

### **Erro 404 (Not Found):**
- Verifique o ID da planilha
- Confirme se as abas existem com nomes corretos

### **Dados não aparecem:**
- Verifique se há dados nas abas
- Confirme se os cabeçalhos estão na linha 1
- Teste com dados de exemplo primeiro

---

**🎉 Sua planilha está pronta para ser conectada ao dashboard!**

**📍 ID da Planilha:** `15slU-6c3xuinmAtPPwwli-5z5VM_EhEthattL8QVuOQ`

