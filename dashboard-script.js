// Dashboard Configuration
const CONFIG = {
    // Google Sheets Configuration
    GOOGLE_SHEETS: {
        API_KEY: 'YOUR_GOOGLE_SHEETS_API_KEY', // Replace with your API key
        SHEET_ID: 'YOUR_GOOGLE_SHEET_ID', // Replace with your sheet ID
        RANGES: {
            skills: 'Skills!A:E',
            projects: 'Projects!A:F',
            learning: 'Learning!A:D',
            goals: 'Goals!A:E',
            activities: 'Activities!A:D'
        }
    },
    
    // Chart Colors
    COLORS: {
        primary: '#00d4ff',
        secondary: '#7c3aed',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        gradient: ['#00d4ff', '#7c3aed', '#10b981', '#f59e0b', '#ef4444']
    },
    
    // Update Intervals
    UPDATE_INTERVAL: 300000 // 5 minutes
};

// Global Variables
let charts = {};
let dashboardData = {};
let updateTimer = null;

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

async function initializeDashboard() {
    try {
        showLoading(true);
        
        // Initialize navigation
        initializeNavigation();
        
        // Load data from Google Sheets or use sample data
        await loadDashboardData();
        
        // Initialize charts
        initializeCharts();
        
        // Update UI with data
        updateDashboardUI();
        
        // Set up auto-refresh
        setupAutoRefresh();
        
        showLoading(false);
        
    } catch (error) {
        console.error('Error initializing dashboard:', error);
        showError('Erro ao carregar o dashboard. Usando dados de exemplo.');
        
        // Load sample data as fallback
        loadSampleData();
        initializeCharts();
        updateDashboardUI();
        showLoading(false);
    }
}

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.dashboard-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetSection = item.getAttribute('data-section');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
            
            // Update charts if needed
            updateSectionCharts(targetSection);
        });
    });
}

// Google Sheets Integration
async function loadDashboardData() {
    if (!CONFIG.GOOGLE_SHEETS.API_KEY || CONFIG.GOOGLE_SHEETS.API_KEY === 'YOUR_GOOGLE_SHEETS_API_KEY') {
        throw new Error('Google Sheets API key not configured');
    }
    
    const promises = Object.entries(CONFIG.GOOGLE_SHEETS.RANGES).map(async ([key, range]) => {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.GOOGLE_SHEETS.SHEET_ID}/values/${range}?key=${CONFIG.GOOGLE_SHEETS.API_KEY}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            return { key, data: data.values || [] };
        } catch (error) {
            console.error(`Error loading ${key} data:`, error);
            return { key, data: [] };
        }
    });
    
    const results = await Promise.all(promises);
    
    // Process the data
    results.forEach(({ key, data }) => {
        dashboardData[key] = processSheetData(key, data);
    });
    
    // Update last update time
    updateLastUpdateTime();
}

function processSheetData(type, rawData) {
    if (!rawData || rawData.length === 0) return [];
    
    const headers = rawData[0];
    const rows = rawData.slice(1);
    
    return rows.map(row => {
        const item = {};
        headers.forEach((header, index) => {
            item[header.toLowerCase().replace(/\s+/g, '_')] = row[index] || '';
        });
        return item;
    });
}

// Sample Data (fallback)
function loadSampleData() {
    dashboardData = {
        skills: [
            { name: 'JavaScript', level: 85, category: 'Frontend', description: 'Desenvolvimento web moderno' },
            { name: 'Python', level: 78, category: 'Backend', description: 'Análise de dados e automação' },
            { name: 'React', level: 82, category: 'Frontend', description: 'Biblioteca para interfaces' },
            { name: 'Node.js', level: 75, category: 'Backend', description: 'Runtime JavaScript server-side' },
            { name: 'SQL', level: 70, category: 'Database', description: 'Gerenciamento de banco de dados' },
            { name: 'Git', level: 88, category: 'Tools', description: 'Controle de versão' }
        ],
        projects: [
            {
                name: 'E-commerce Platform',
                status: 'completed',
                progress: 100,
                description: 'Plataforma completa de e-commerce com React e Node.js',
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                start_date: '2024-01-15',
                end_date: '2024-03-20'
            },
            {
                name: 'Data Analytics Dashboard',
                status: 'in-progress',
                progress: 65,
                description: 'Dashboard para análise de dados com visualizações interativas',
                technologies: ['Python', 'Plotly', 'Pandas', 'Flask'],
                start_date: '2024-02-01',
                end_date: '2024-04-30'
            },
            {
                name: 'Mobile App',
                status: 'planned',
                progress: 0,
                description: 'Aplicativo móvel para gestão de tarefas',
                technologies: ['React Native', 'Firebase', 'Redux'],
                start_date: '2024-05-01',
                end_date: '2024-07-15'
            }
        ],
        learning: [
            { course: 'Advanced React Patterns', status: 'completed', hours: 40, category: 'Frontend' },
            { course: 'Machine Learning Fundamentals', status: 'in-progress', hours: 25, category: 'AI/ML' },
            { course: 'AWS Cloud Practitioner', status: 'in-progress', hours: 30, category: 'Cloud' },
            { course: 'Docker & Kubernetes', status: 'planned', hours: 0, category: 'DevOps' }
        ],
        goals: [
            {
                title: 'Obter certificação AWS',
                description: 'Conquistar a certificação AWS Solutions Architect',
                priority: 'high',
                progress: 60,
                deadline: '2024-06-30',
                category: 'Certification'
            },
            {
                title: 'Contribuir para Open Source',
                description: 'Fazer 50 contribuições para projetos open source',
                priority: 'medium',
                progress: 30,
                deadline: '2024-12-31',
                category: 'Community'
            },
            {
                title: 'Aprender TypeScript',
                description: 'Dominar TypeScript para desenvolvimento mais robusto',
                priority: 'high',
                progress: 75,
                deadline: '2024-05-15',
                category: 'Skill'
            }
        ],
        activities: [
            {
                type: 'skill',
                title: 'Completou curso de React Hooks',
                description: 'Finalizou o curso avançado de React Hooks',
                timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
            },
            {
                type: 'project',
                title: 'Deploy do E-commerce',
                description: 'Realizou deploy da plataforma de e-commerce',
                timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
            },
            {
                type: 'goal',
                title: 'Meta de certificação atualizada',
                description: 'Progresso da certificação AWS atualizado para 60%',
                timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
            }
        ]
    };
    
    updateLastUpdateTime();
}

// Charts Initialization
function initializeCharts() {
    // Skills Chart
    initializeSkillsChart();
    
    // Time Distribution Chart
    initializeTimeDistributionChart();
    
    // Skills Evolution Chart
    initializeSkillsEvolutionChart();
    
    // Projects Status Chart
    initializeProjectsStatusChart();
    
    // Study Hours Chart
    initializeStudyHoursChart();
    
    // Goals Progress Chart
    initializeGoalsProgressChart();
}

function initializeSkillsChart() {
    const ctx = document.getElementById('skillsChart');
    if (!ctx) return;
    
    const skills = dashboardData.skills || [];
    const labels = skills.map(skill => skill.name);
    const data = skills.map(skill => skill.level);
    
    charts.skills = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Nível de Habilidade',
                data: data,
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                borderColor: CONFIG.COLORS.primary,
                borderWidth: 2,
                pointBackgroundColor: CONFIG.COLORS.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#a1a1aa'
                    },
                    grid: {
                        color: '#27272a'
                    },
                    angleLines: {
                        color: '#27272a'
                    }
                }
            }
        }
    });
}

function initializeTimeDistributionChart() {
    const ctx = document.getElementById('timeDistributionChart');
    if (!ctx) return;
    
    const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Learning'];
    const hours = [40, 35, 15, 20, 30];
    
    charts.timeDistribution = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: categories,
            datasets: [{
                data: hours,
                backgroundColor: CONFIG.COLORS.gradient,
                borderColor: '#1e1e2e',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff',
                        padding: 20
                    }
                }
            }
        }
    });
}

function initializeSkillsEvolutionChart() {
    const ctx = document.getElementById('skillsEvolutionChart');
    if (!ctx) return;
    
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
    const skillsData = {
        'JavaScript': [70, 72, 75, 78, 82, 85],
        'Python': [60, 65, 68, 72, 75, 78],
        'React': [65, 68, 72, 76, 80, 82]
    };
    
    const datasets = Object.entries(skillsData).map(([skill, data], index) => ({
        label: skill,
        data: data,
        borderColor: CONFIG.COLORS.gradient[index],
        backgroundColor: CONFIG.COLORS.gradient[index] + '20',
        borderWidth: 3,
        fill: false,
        tension: 0.4
    }));
    
    charts.skillsEvolution = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#a1a1aa'
                    },
                    grid: {
                        color: '#27272a'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#a1a1aa'
                    },
                    grid: {
                        color: '#27272a'
                    }
                }
            }
        }
    });
}

function initializeProjectsStatusChart() {
    const ctx = document.getElementById('projectsStatusChart');
    if (!ctx) return;
    
    const projects = dashboardData.projects || [];
    const statusCounts = projects.reduce((acc, project) => {
        acc[project.status] = (acc[project.status] || 0) + 1;
        return acc;
    }, {});
    
    const labels = Object.keys(statusCounts);
    const data = Object.values(statusCounts);
    const colors = {
        'completed': CONFIG.COLORS.success,
        'in-progress': CONFIG.COLORS.warning,
        'planned': CONFIG.COLORS.secondary
    };
    
    charts.projectsStatus = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels.map(label => label.replace('-', ' ').toUpperCase()),
            datasets: [{
                label: 'Projetos',
                data: data,
                backgroundColor: labels.map(label => colors[label] || CONFIG.COLORS.primary),
                borderColor: labels.map(label => colors[label] || CONFIG.COLORS.primary),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#a1a1aa'
                    },
                    grid: {
                        color: '#27272a'
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#a1a1aa',
                        stepSize: 1
                    },
                    grid: {
                        color: '#27272a'
                    }
                }
            }
        }
    });
}

function initializeStudyHoursChart() {
    const ctx = document.getElementById('studyHoursChart');
    if (!ctx) return;
    
    const learning = dashboardData.learning || [];
    const categories = [...new Set(learning.map(item => item.category))];
    const categoryHours = categories.map(category => 
        learning.filter(item => item.category === category)
               .reduce((sum, item) => sum + (parseInt(item.hours) || 0), 0)
    );
    
    charts.studyHours = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: categories,
            datasets: [{
                data: categoryHours,
                backgroundColor: CONFIG.COLORS.gradient.map(color => color + '80'),
                borderColor: CONFIG.COLORS.gradient,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                r: {
                    ticks: {
                        color: '#a1a1aa'
                    },
                    grid: {
                        color: '#27272a'
                    }
                }
            }
        }
    });
}

function initializeGoalsProgressChart() {
    const ctx = document.getElementById('goalsProgressChart');
    if (!ctx) return;
    
    const goals = dashboardData.goals || [];
    const labels = goals.map(goal => goal.title);
    const progress = goals.map(goal => goal.progress || 0);
    
    charts.goalsProgress = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Progresso (%)',
                data: progress,
                backgroundColor: CONFIG.COLORS.gradient,
                borderColor: CONFIG.COLORS.gradient,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#a1a1aa'
                    },
                    grid: {
                        color: '#27272a'
                    }
                },
                y: {
                    ticks: {
                        color: '#a1a1aa'
                    },
                    grid: {
                        color: '#27272a'
                    }
                }
            }
        }
    });
}

// UI Updates
function updateDashboardUI() {
    updateKPIs();
    updateSkillsGrid();
    updateProjectsGrid();
    updateLearningStats();
    updateGoalsGrid();
    updateActivityTimeline();
}

function updateKPIs() {
    const skills = dashboardData.skills || [];
    const projects = dashboardData.projects || [];
    const learning = dashboardData.learning || [];
    const goals = dashboardData.goals || [];
    
    document.getElementById('totalSkills').textContent = skills.length;
    document.getElementById('totalProjects').textContent = projects.filter(p => p.status === 'completed').length;
    
    const totalHours = learning.reduce((sum, item) => sum + (parseInt(item.hours) || 0), 0);
    document.getElementById('studyHours').textContent = totalHours + 'h';
    
    const achievements = goals.filter(g => (g.progress || 0) >= 100).length;
    document.getElementById('achievements').textContent = achievements;
}

function updateSkillsGrid() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    
    const skills = dashboardData.skills || [];
    
    container.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-progress">
                <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
            </div>
            <p class="skill-description">${skill.description || ''}</p>
        </div>
    `).join('');
}

function updateProjectsGrid() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    
    const projects = dashboardData.projects || [];
    
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div>
                    <h3 class="project-title">${project.name}</h3>
                </div>
                <span class="project-status ${project.status}">${project.status.replace('-', ' ').toUpperCase()}</span>
            </div>
            <p class="project-description">${project.description || ''}</p>
            ${project.technologies ? `
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            ` : ''}
            <div class="project-progress">
                <div class="progress-label">
                    <span>Progresso</span>
                    <span>${project.progress || 0}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${project.progress || 0}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}

function updateLearningStats() {
    const learning = dashboardData.learning || [];
    
    const ongoing = learning.filter(item => item.status === 'in-progress').length;
    const completed = learning.filter(item => item.status === 'completed').length;
    const certifications = learning.filter(item => item.category === 'Certification').length;
    
    document.getElementById('ongoingCourses').textContent = ongoing;
    document.getElementById('completedCourses').textContent = completed;
    document.getElementById('certifications').textContent = certifications;
}

function updateGoalsGrid() {
    const container = document.getElementById('goalsGrid');
    if (!container) return;
    
    const goals = dashboardData.goals || [];
    
    container.innerHTML = goals.map(goal => `
        <div class="goal-card">
            <div class="goal-header">
                <h3 class="goal-title">${goal.title}</h3>
                <span class="goal-priority ${goal.priority}">${goal.priority.toUpperCase()}</span>
            </div>
            <p class="goal-description">${goal.description || ''}</p>
            <p class="goal-deadline">Prazo: ${formatDate(goal.deadline)}</p>
            <div class="project-progress">
                <div class="progress-label">
                    <span>Progresso</span>
                    <span>${goal.progress || 0}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${goal.progress || 0}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}

function updateActivityTimeline() {
    const container = document.getElementById('activityTimeline');
    if (!container) return;
    
    const activities = dashboardData.activities || [];
    
    const iconMap = {
        skill: 'fas fa-code',
        project: 'fas fa-project-diagram',
        goal: 'fas fa-bullseye',
        learning: 'fas fa-graduation-cap'
    };
    
    container.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="${iconMap[activity.type] || 'fas fa-info'}"></i>
            </div>
            <div class="activity-content">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
            </div>
            <div class="activity-time">
                ${formatTimeAgo(activity.timestamp)}
            </div>
        </div>
    `).join('');
}

// Utility Functions
function updateSectionCharts(section) {
    // Refresh charts when switching sections
    setTimeout(() => {
        Object.values(charts).forEach(chart => {
            if (chart && chart.resize) {
                chart.resize();
            }
        });
    }, 100);
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

function formatTimeAgo(timestamp) {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
        return `${diffDays} dia${diffDays > 1 ? 's' : ''} atrás`;
    } else if (diffHours > 0) {
        return `${diffHours} hora${diffHours > 1 ? 's' : ''} atrás`;
    } else {
        return 'Agora mesmo';
    }
}

function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    document.getElementById('lastUpdate').textContent = timeString;
}

function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.toggle('hidden', !show);
    }
}

function showError(message) {
    console.error(message);
    // You can implement a toast notification here
}

function setupAutoRefresh() {
    if (updateTimer) {
        clearInterval(updateTimer);
    }
    
    updateTimer = setInterval(async () => {
        try {
            await loadDashboardData();
            updateDashboardUI();
            
            // Update charts
            Object.values(charts).forEach(chart => {
                if (chart && chart.update) {
                    chart.update();
                }
            });
            
        } catch (error) {
            console.error('Error during auto-refresh:', error);
        }
    }, CONFIG.UPDATE_INTERVAL);
}

// Global Functions
window.refreshData = async function() {
    const button = document.querySelector('.refresh-btn');
    const icon = button.querySelector('i');
    
    // Add spinning animation
    icon.style.animation = 'spin 1s linear infinite';
    
    try {
        await loadDashboardData();
        updateDashboardUI();
        
        // Update charts
        Object.values(charts).forEach(chart => {
            if (chart && chart.update) {
                chart.update();
            }
        });
        
    } catch (error) {
        showError('Erro ao atualizar dados');
    } finally {
        // Remove spinning animation
        setTimeout(() => {
            icon.style.animation = '';
        }, 1000);
    }
};

// Handle window resize
window.addEventListener('resize', () => {
    Object.values(charts).forEach(chart => {
        if (chart && chart.resize) {
            chart.resize();
        }
    });
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        loadDashboardData,
        processSheetData,
        formatDate,
        formatTimeAgo
    };
}
