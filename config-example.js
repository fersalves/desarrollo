// Exemplo de configuração para o Dashboard de Desenvolvimento Pessoal
// Copie este arquivo para config.js e preencha com suas informações

const DASHBOARD_CONFIG = {
    // Configuração do Google Sheets
    GOOGLE_SHEETS: {
        // Sua chave de API do Google Sheets
        // Obtenha em: https://console.cloud.google.com/apis/credentials
        API_KEY: 'YOUR_GOOGLE_SHEETS_API_KEY',
        
        // ID da sua planilha Google Sheets
        // Encontre na URL: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
        SHEET_ID: 'YOUR_GOOGLE_SHEET_ID',
        
        // Nomes das abas e intervalos de dados na planilha
        RANGES: {
            skills: 'Skills!A:E',        // Aba de habilidades
            projects: 'Projects!A:F',    // Aba de projetos
            learning: 'Learning!A:D',    // Aba de aprendizado
            goals: 'Goals!A:E',          // Aba de metas
            activities: 'Activities!A:D' // Aba de atividades
        }
    },
    
    // Personalização de cores
    THEME: {
        // Cores principais
        PRIMARY_COLOR: '#00d4ff',
        SECONDARY_COLOR: '#7c3aed',
        SUCCESS_COLOR: '#10b981',
        WARNING_COLOR: '#f59e0b',
        ERROR_COLOR: '#ef4444',
        
        // Cores de fundo
        BG_PRIMARY: '#0a0a0f',
        BG_SECONDARY: '#1a1a2e',
        BG_CARD: '#1e1e2e',
        
        // Cores de texto
        TEXT_PRIMARY: '#ffffff',
        TEXT_SECONDARY: '#a1a1aa',
        TEXT_MUTED: '#71717a'
    },
    
    // Configurações de atualização
    UPDATE: {
        // Intervalo de atualização automática (em milissegundos)
        // 300000 = 5 minutos
        INTERVAL: 300000,
        
        // Tentar novamente em caso de erro (em milissegundos)
        RETRY_DELAY: 30000,
        
        // Número máximo de tentativas
        MAX_RETRIES: 3
    },
    
    // Configurações de gráficos
    CHARTS: {
        // Animações dos gráficos
        ANIMATION_DURATION: 1000,
        
        // Cores para gráficos (gradiente)
        GRADIENT_COLORS: [
            '#00d4ff',
            '#7c3aed',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#06b6d4',
            '#8b5cf6',
            '#f97316'
        ],
        
        // Configurações específicas por tipo de gráfico
        RADAR: {
            MAX_VALUE: 100,
            SHOW_LEGEND: true
        },
        
        DOUGHNUT: {
            CUTOUT_PERCENTAGE: 60,
            SHOW_LEGEND: true
        },
        
        LINE: {
            TENSION: 0.4,
            FILL: false
        }
    },
    
    // Configurações de UI
    UI: {
        // Mostrar loading durante carregamento
        SHOW_LOADING: true,
        
        // Duração das animações (em milissegundos)
        ANIMATION_DURATION: 300,
        
        // Mostrar notificações de erro
        SHOW_ERROR_NOTIFICATIONS: true,
        
        // Formato de data
        DATE_FORMAT: 'pt-BR',
        
        // Formato de hora
        TIME_FORMAT: {
            hour: '2-digit',
            minute: '2-digit'
        }
    },
    
    // Configurações de dados
    DATA: {
        // Usar dados de exemplo se a API falhar
        USE_SAMPLE_DATA_ON_ERROR: true,
        
        // Cache dos dados (em milissegundos)
        CACHE_DURATION: 60000, // 1 minuto
        
        // Validar dados recebidos
        VALIDATE_DATA: true
    },
    
    // Configurações de performance
    PERFORMANCE: {
        // Debounce para redimensionamento de gráficos (em milissegundos)
        RESIZE_DEBOUNCE: 250,
        
        // Lazy loading para gráficos
        LAZY_LOAD_CHARTS: true,
        
        // Otimizar animações em dispositivos móveis
        OPTIMIZE_MOBILE_ANIMATIONS: true
    }
};

// Exemplo de dados para teste (estrutura esperada)
const SAMPLE_DATA_STRUCTURE = {
    skills: [
        {
            name: 'JavaScript',
            level: 85,
            category: 'Frontend',
            description: 'Desenvolvimento web moderno'
        }
    ],
    
    projects: [
        {
            name: 'E-commerce Platform',
            status: 'completed', // completed, in-progress, planned
            progress: 100,
            description: 'Plataforma completa de e-commerce',
            technologies: ['React', 'Node.js', 'MongoDB'],
            start_date: '2024-01-15',
            end_date: '2024-03-20'
        }
    ],
    
    learning: [
        {
            course: 'Advanced React Patterns',
            status: 'completed', // completed, in-progress, planned
            hours: 40,
            category: 'Frontend'
        }
    ],
    
    goals: [
        {
            title: 'Obter certificação AWS',
            description: 'Conquistar a certificação AWS Solutions Architect',
            priority: 'high', // high, medium, low
            progress: 60,
            deadline: '2024-06-30',
            category: 'Certification'
        }
    ],
    
    activities: [
        {
            type: 'skill', // skill, project, goal, learning
            title: 'Completou curso de React Hooks',
            description: 'Finalizou o curso avançado de React Hooks',
            timestamp: '2024-03-15T10:30:00Z'
        }
    ]
};

// Instruções de uso:
// 1. Copie este arquivo para 'config.js'
// 2. Preencha os valores YOUR_GOOGLE_SHEETS_API_KEY e YOUR_GOOGLE_SHEET_ID
// 3. Personalize as cores e configurações conforme necessário
// 4. Importe o arquivo config.js no seu dashboard.html

// Exemplo de como importar:
// <script src="config.js"></script>
// <script>
//     // Usar as configurações
//     const CONFIG = DASHBOARD_CONFIG;
// </script>

// Para obter a API Key:
// 1. Acesse https://console.cloud.google.com/
// 2. Crie um projeto ou selecione um existente
// 3. Ative a API do Google Sheets
// 4. Vá em Credenciais > Criar credenciais > Chave de API
// 5. Copie a chave gerada

// Para obter o Sheet ID:
// 1. Abra sua planilha no Google Sheets
// 2. Copie o ID da URL: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
// 3. Cole no campo SHEET_ID acima

// Estrutura recomendada da planilha:
// - Aba 'Skills': Nome | Nível | Categoria | Descrição
// - Aba 'Projects': Nome | Status | Progresso | Descrição | Tecnologias | Data Início | Data Fim
// - Aba 'Learning': Curso | Status | Horas | Categoria
// - Aba 'Goals': Título | Descrição | Prioridade | Progresso | Prazo | Categoria
// - Aba 'Activities': Tipo | Título | Descrição | Timestamp
