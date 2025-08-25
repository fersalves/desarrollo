#!/bin/bash

# Script de Deploy Automático para o Dashboard de Desenvolvimento Pessoal
# Repositório: https://github.com/fersalves/desarrollo
# Projeto: Dashboard de desenvolvimento pessoal (separado da landing page)

echo "🚀 Iniciando deploy do Dashboard de Desenvolvimento Pessoal..."
echo "📁 Repositório: https://github.com/fersalves/desarrollo"
echo "📍 Diretório: ~/desarrollo-dashboard/"
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "dashboard.html" ]; then
    echo "❌ Erro: Arquivo dashboard.html não encontrado!"
    echo "   Certifique-se de estar no diretório correto."
    exit 1
fi

# Verificar se o Git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Erro: Git não está instalado!"
    echo "   Instale o Git primeiro: https://git-scm.com/"
    exit 1
fi

echo "✅ Verificações iniciais concluídas"
echo ""

# Inicializar repositório Git se necessário
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositório Git..."
    git init
    echo "✅ Repositório Git inicializado"
else
    echo "✅ Repositório Git já existe"
fi

# Configurar repositório remoto
echo "🔗 Configurando repositório remoto..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/fersalves/desarrollo.git
echo "✅ Repositório remoto configurado"

# Criar .gitignore se não existir
if [ ! -f ".gitignore" ]; then
    echo "📝 Criando .gitignore..."
    cat > .gitignore << EOF
# Arquivos de configuração sensíveis
config.js

# Arquivos do sistema
.DS_Store
Thumbs.db

# Logs
*.log

# Arquivos temporários
*.tmp
*.temp

# Node modules (se usar no futuro)
node_modules/

# Arquivos de backup
*.bak
*.backup
EOF
    echo "✅ .gitignore criado"
fi

# Listar arquivos que serão enviados
echo ""
echo "📋 Arquivos que serão enviados:"
echo "   • dashboard.html (Página principal)"
echo "   • dashboard-styles.css (Estilos CSS)"
echo "   • dashboard-script.js (JavaScript)"
echo "   • README-dashboard.md (Documentação)"
echo "   • config-example.js (Exemplo de configuração)"
echo "   • google-sheets-template.md (Template da planilha)"
echo "   • deploy-instructions.md (Instruções de deploy)"
echo "   • .gitignore (Arquivos ignorados)"
echo ""

# Confirmar antes de continuar
read -p "🤔 Deseja continuar com o deploy? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deploy cancelado pelo usuário"
    exit 0
fi

# Adicionar arquivos ao Git
echo "📦 Adicionando arquivos ao Git..."
git add dashboard.html
git add dashboard-styles.css
git add dashboard-script.js
git add README-dashboard.md
git add config-example.js
git add google-sheets-template.md
git add deploy-instructions.md
git add .gitignore

# Verificar se há arquivos para commit
if git diff --staged --quiet; then
    echo "⚠️  Nenhuma alteração detectada para commit"
    echo "   Os arquivos podem já estar no repositório"
else
    echo "✅ Arquivos adicionados ao staging"
fi

# Fazer commit
echo "💾 Fazendo commit..."
git commit -m "🚀 Adicionar dashboard de desenvolvimento pessoal

- Dashboard moderno com tema tecnológico
- Integração com Google Sheets API
- Gráficos interativos com Chart.js
- Design responsivo para todos os dispositivos
- Documentação completa e templates

Seções incluídas:
- Visão Geral (KPIs e timeline)
- Habilidades (progresso e evolução)
- Projetos (status e tecnologias)
- Aprendizado (cursos e certificações)
- Metas (progresso e prazos)

URL: https://fersalves.github.io/desarrollo/dashboard.html"

echo "✅ Commit realizado"

# Configurar branch principal
echo "🌿 Configurando branch principal..."
git branch -M main
echo "✅ Branch main configurada"

# Fazer push para o GitHub
echo "⬆️  Enviando para o GitHub..."
if git push -u origin main; then
    echo ""
    echo "🎉 Deploy realizado com sucesso!"
    echo ""
    echo "📍 URLs importantes:"
    echo "   • Repositório: https://github.com/fersalves/desarrollo"
    echo "   • Dashboard: https://fersalves.github.io/desarrollo/dashboard.html"
    echo "   • Documentação: https://fersalves.github.io/desarrollo/README-dashboard.md"
    echo ""
    echo "⚙️  Próximos passos:"
    echo "   1. Configure o GitHub Pages no repositório"
    echo "   2. Crie sua planilha Google Sheets usando o template"
    echo "   3. Configure a API do Google Sheets"
    echo "   4. Crie o arquivo config.js com suas credenciais"
    echo ""
    echo "📚 Consulte deploy-instructions.md para instruções detalhadas"
    echo ""
    echo "🚀 Seu dashboard está pronto para impressionar!"
else
    echo ""
    echo "❌ Erro durante o push para o GitHub"
    echo ""
    echo "🔧 Possíveis soluções:"
    echo "   1. Verifique sua conexão com a internet"
    echo "   2. Confirme se você tem acesso ao repositório"
    echo "   3. Tente fazer login no Git:"
    echo "      git config --global user.name 'Seu Nome'"
    echo "      git config --global user.email 'seu@email.com'"
    echo "   4. Ou use a interface web do GitHub para upload manual"
    echo ""
    echo "📖 Consulte deploy-instructions.md para métodos alternativos"
    exit 1
fi
