# Template da Planilha Google Sheets

Este documento contém a estrutura exata que sua planilha Google Sheets deve ter para funcionar com o dashboard.

## 📋 Instruções de Configuração

1. **Criar uma nova planilha** no Google Sheets
2. **Criar as abas** conforme especificado abaixo
3. **Preencher os cabeçalhos** exatamente como mostrado
4. **Adicionar seus dados** seguindo os exemplos
5. **Configurar permissões** para acesso público ou via API

## 📊 Estrutura das Abas

### Aba 1: "Skills"
**Colunas (A-E):**
```
A: Nome
B: Nível  
C: Categoria
D: Descrição
E: (opcional - para expansões futuras)
```

**Exemplo de dados:**
```
Nome                    | Nível | Categoria | Descrição
JavaScript             | 85    | Frontend  | Desenvolvimento web moderno com ES6+
Python                 | 78    | Backend   | Análise de dados e automação
React                  | 82    | Frontend  | Biblioteca para interfaces de usuário
Node.js                | 75    | Backend   | Runtime JavaScript server-side
SQL                    | 70    | Database  | Gerenciamento de banco de dados
Git                    | 88    | Tools     | Controle de versão distribuído
Docker                 | 65    | DevOps    | Containerização de aplicações
AWS                    | 60    | Cloud     | Serviços de nuvem Amazon
TypeScript             | 80    | Frontend  | JavaScript com tipagem estática
MongoDB                | 72    | Database  | Banco de dados NoSQL
```

### Aba 2: "Projects"
**Colunas (A-G):**
```
A: Nome
B: Status
C: Progresso
D: Descrição
E: Tecnologias
F: Data Início
G: Data Fim
```

**Valores válidos para Status:**
- `completed` (concluído)
- `in-progress` (em andamento)
- `planned` (planejado)

**Exemplo de dados:**
```
Nome                     | Status      | Progresso | Descrição                              | Tecnologias                    | Data Início | Data Fim
E-commerce Platform      | completed   | 100       | Plataforma completa de e-commerce      | React,Node.js,MongoDB,Stripe   | 2024-01-15  | 2024-03-20
Data Analytics Dashboard | in-progress | 65        | Dashboard para análise de dados        | Python,Plotly,Pandas,Flask     | 2024-02-01  | 2024-04-30
Mobile App              | planned     | 0         | Aplicativo móvel para gestão           | React Native,Firebase,Redux    | 2024-05-01  | 2024-07-15
API REST                | in-progress | 40        | API para sistema de vendas             | Node.js,Express,PostgreSQL     | 2024-03-01  | 2024-05-30
Website Portfolio       | completed   | 100       | Site pessoal com portfólio             | HTML,CSS,JavaScript,Netlify    | 2024-01-01  | 2024-02-15
```

### Aba 3: "Learning"
**Colunas (A-D):**
```
A: Curso
B: Status
C: Horas
D: Categoria
```

**Valores válidos para Status:**
- `completed` (concluído)
- `in-progress` (em andamento)
- `planned` (planejado)

**Exemplo de dados:**
```
Curso                           | Status      | Horas | Categoria
Advanced React Patterns         | completed   | 40    | Frontend
Machine Learning Fundamentals   | in-progress | 25    | AI/ML
AWS Cloud Practitioner         | in-progress | 30    | Cloud
Docker & Kubernetes            | planned     | 0     | DevOps
TypeScript Deep Dive           | completed   | 35    | Frontend
Python Data Science            | in-progress | 45    | Data Science
GraphQL Complete Guide         | planned     | 0     | Backend
UI/UX Design Principles        | completed   | 20    | Design
```

### Aba 4: "Goals"
**Colunas (A-F):**
```
A: Título
B: Descrição
C: Prioridade
D: Progresso
E: Prazo
F: Categoria
```

**Valores válidos para Prioridade:**
- `high` (alta)
- `medium` (média)
- `low` (baixa)

**Formato de data:** YYYY-MM-DD

**Exemplo de dados:**
```
Título                          | Descrição                                    | Prioridade | Progresso | Prazo      | Categoria
Obter certificação AWS          | Conquistar a certificação AWS Solutions Arch | high       | 60        | 2024-06-30 | Certification
Contribuir para Open Source     | Fazer 50 contribuições para projetos OSS     | medium     | 30        | 2024-12-31 | Community
Aprender TypeScript            | Dominar TypeScript para desenvolvimento       | high       | 75        | 2024-05-15 | Skill
Criar 5 projetos pessoais     | Desenvolver portfólio com projetos diversos   | medium     | 40        | 2024-08-30 | Portfolio
Melhorar inglês técnico        | Alcançar fluência em inglês técnico          | low        | 20        | 2024-10-31 | Language
```

### Aba 5: "Activities"
**Colunas (A-D):**
```
A: Tipo
B: Título
C: Descrição
D: Timestamp
```

**Valores válidos para Tipo:**
- `skill` (habilidade)
- `project` (projeto)
- `goal` (meta)
- `learning` (aprendizado)

**Formato de timestamp:** YYYY-MM-DDTHH:MM:SSZ (ISO 8601)

**Exemplo de dados:**
```
Tipo     | Título                        | Descrição                                | Timestamp
skill    | Completou curso de React Hooks | Finalizou o curso avançado de React Hooks | 2024-03-15T10:30:00Z
project  | Deploy do E-commerce          | Realizou deploy da plataforma de e-commerce | 2024-03-15T08:15:00Z
goal     | Meta de certificação atualizada | Progresso da certificação AWS para 60%    | 2024-03-14T16:45:00Z
learning | Iniciou curso de TypeScript   | Começou o curso de TypeScript Deep Dive    | 2024-03-13T09:20:00Z
skill    | Nível JavaScript aumentado    | Habilidade JavaScript evoluiu para 85%    | 2024-03-12T14:30:00Z
```

## 🔧 Configuração de Permissões

### Opção 1: Planilha Pública (Mais Simples)
1. Clique no botão **"Compartilhar"** no canto superior direito
2. Clique em **"Alterar para qualquer pessoa com o link"**
3. Selecione **"Visualizador"** como permissão
4. Clique em **"Concluído"**
5. Copie o link da planilha

### Opção 2: Service Account (Mais Seguro)
1. Crie uma Service Account no Google Cloud Console
2. Baixe o arquivo JSON de credenciais
3. Compartilhe a planilha com o email da Service Account
4. Use as credenciais no código

## 📝 Dicas Importantes

### Formatação de Dados
- **Datas**: Use sempre o formato YYYY-MM-DD
- **Números**: Use números inteiros para níveis e progresso (0-100)
- **Listas**: Separe tecnologias por vírgula (React,Node.js,MongoDB)
- **Status**: Use exatamente os valores especificados (case-sensitive)

### Manutenção da Planilha
- **Não altere os nomes das abas** - o código espera nomes exatos
- **Não altere a ordem das colunas** - mantenha a estrutura A-F
- **Mantenha os cabeçalhos na linha 1** - dados começam na linha 2
- **Use valores consistentes** - especialmente para status e prioridades

### Validação de Dados
- **Níveis de habilidade**: 0-100
- **Progresso**: 0-100
- **Status válidos**: completed, in-progress, planned
- **Prioridades válidas**: high, medium, low
- **Tipos de atividade**: skill, project, goal, learning

## 🚀 Próximos Passos

1. **Criar a planilha** com a estrutura acima
2. **Preencher com seus dados** reais
3. **Configurar permissões** (opção 1 ou 2)
4. **Copiar o ID da planilha** da URL
5. **Configurar no dashboard** (config.js)
6. **Testar a integração**

## 📋 Template Pronto

Você pode copiar este template diretamente:
[Link para template da planilha](https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy)

*Substitua pelo link do seu template quando criado*

## ❓ Solução de Problemas

### Dados não aparecem no dashboard
- Verifique se os nomes das abas estão corretos
- Confirme se a planilha está pública ou compartilhada
- Verifique se o ID da planilha está correto no config.js

### Erro de CORS
- Use um servidor local para testar
- Verifique as configurações da API key no Google Cloud

### Gráficos não carregam
- Verifique se os dados estão no formato correto
- Confirme se não há células vazias nos cabeçalhos
- Verifique o console do navegador para erros

---

**Lembre-se**: Mantenha sua planilha sempre atualizada para ver as mudanças refletidas no dashboard!
