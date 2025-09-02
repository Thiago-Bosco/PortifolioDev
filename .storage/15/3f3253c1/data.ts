export const personalInfo = {
  name: "Thiago Giovanni Bosco De Carvalho",
  title: "Desenvolvedor Backend Pleno",
  location: "Hortolândia – SP",
  phone: "(019) 98745-5492",
  email: "thiago-carvalho789@outlook.com",
  linkedin: "https://www.linkedin.com/in/thiago-bosco-339030367/",
  github: "https://github.com/Thiago-Bosco",
  summary: "Desenvolvedor Backend Pleno com sólida expertise em Python, Golang e Django, especializado na arquitetura e desenvolvimento de soluções escaláveis e performáticas. Com foco em DevOps (Docker, CI/CD), integração de APIs e monitoramento de infraestrutura crítica (Zabbix, Grafana), atuo diretamente na garantia da estabilidade e eficiência operacional para grandes clientes."
};

export const skills = {
  languages: [
    { name: "Python", level: "Avançado", color: "bg-blue-500" },
    { name: "Golang", level: "Avançado", color: "bg-cyan-500" },
    { name: "C#", level: "Intermediário", color: "bg-purple-500" },
    { name: "JavaScript", level: "Intermediário", color: "bg-yellow-500" },
    { name: "HTML/CSS", level: "Intermediário", color: "bg-orange-500" }
  ],
  frameworks: [
    { name: "Django", level: "Avançado", color: "bg-green-600" },
    { name: "Flask", level: "Intermediário", color: "bg-gray-600" },
    { name: "FastAPI", level: "Intermediário", color: "bg-teal-500" },
    { name: "Node.js", level: "Intermediário", color: "bg-green-500" },
    { name: "React", level: "Básico", color: "bg-blue-400" }
  ],
  databases: [
    { name: "MySQL", level: "Avançado", color: "bg-blue-600" },
    { name: "PostgreSQL", level: "Avançado", color: "bg-blue-700" },
    { name: "MongoDB", level: "Intermediário", color: "bg-green-700" }
  ],
  devops: [
    { name: "Docker", level: "Avançado", color: "bg-blue-500" },
    { name: "CI/CD", level: "Intermediário", color: "bg-orange-600" },
    { name: "Nginx", level: "Intermediário", color: "bg-green-500" },
    { name: "Grafana", level: "Intermediário", color: "bg-orange-500" },
    { name: "Zabbix", level: "Intermediário", color: "bg-red-500" }
  ]
};

export const experience = [
  {
    company: "AltSec",
    role: "Desenvolvedor Backend / Analista de TI",
    period: "Fev/2024 – Atual",
    achievements: [
      "Desenvolvo e implemento automações em Python e Go, criando microserviços escaláveis",
      "Participo na criação e manutenção de scripts de monitoramento (Zabbix + Grafana)",
      "Atuo no suporte e manutenção de aplicações de grande porte",
      "Colaboro em times ágeis, otimizando processos e reduzindo falhas"
    ]
  },
  {
    company: "Coffema Logística",
    role: "Assistente Operacional",
    period: "2020 – 2022",
    achievements: [
      "Organizei e automatizei processos logísticos utilizando sistemas como SIC e WMS",
      "Prestei apoio à equipe de ressuprimento para garantir o fluxo de trabalho"
    ]
  }
];

export const projects = [
  {
    name: "CacheCleaner",
    description: "Sistema otimizador de performance desenvolvido em Go para Windows e Linux. Ferramenta de limpeza e otimização de cache do sistema, demonstrando expertise em programação de baixo nível e otimização de performance.",
    technologies: ["Go", "System Programming", "Windows", "Linux", "Performance Optimization"],
    features: [
      "Limpeza automática de cache do sistema",
      "Compatibilidade multiplataforma (Windows/Linux)",
      "Interface de linha de comando otimizada",
      "Monitoramento de performance em tempo real"
    ],
    github: "https://github.com/Thiago-Bosco/CacheCleaner",
    highlight: true,
    stars: 1
  },
  {
    name: "Coleta Automatizada Zabbix",
    description: "Sistema automatizado para coleta de indisponibilidades do Zabbix desenvolvido em Python. Solução enterprise para monitoramento e análise de infraestrutura crítica com geração de relatórios automatizados.",
    technologies: ["Python", "Zabbix API", "Data Analysis", "Automation", "Monitoring"],
    features: [
      "Integração completa com API do Zabbix",
      "Coleta automatizada de dados de indisponibilidade",
      "Geração de relatórios detalhados",
      "Análise de padrões de falhas de infraestrutura"
    ],
    github: "https://github.com/Thiago-Bosco/Coleta-Automatizada-de-Indisponibilidades-do-Zabbix",
    highlight: true
  },
  {
    name: "SMTPAutoMailer",
    description: "Automação avançada para envio de e-mails utilizando Python e smtplib. Sistema flexível e adaptável para integração em diferentes workflows, com suporte a templates e envios em massa.",
    technologies: ["Python", "SMTP", "Email Automation", "Template Engine", "API Integration"],
    features: [
      "Envio automatizado de e-mails em massa",
      "Sistema de templates personalizáveis",
      "Integração fácil com diferentes provedores SMTP",
      "Logs detalhados e tratamento de erros"
    ],
    github: "https://github.com/Thiago-Bosco/SMTPAutoMailer",
    highlight: false
  },
  {
    name: "Host Manager API",
    description: "API REST desenvolvida em Python para gerenciamento de hosts e infraestrutura. Sistema completo para administração de servidores com funcionalidades de monitoramento e controle remoto.",
    technologies: ["Python", "REST API", "Infrastructure Management", "System Administration"],
    features: [
      "API RESTful para gerenciamento de hosts",
      "Monitoramento de status de servidores",
      "Controle remoto de infraestrutura",
      "Documentação completa da API"
    ],
    github: "https://github.com/Thiago-Bosco/Host-Manager-api",
    highlight: false
  },
  {
    name: "Network Manager TUI",
    description: "Aplicação de linha de comando em Go com interface de terminal (TUI) para gerenciamento de rede em sistemas Linux. Demonstra expertise em desenvolvimento CLI/TUI em Go e integração com APIs de baixo nível (D-Bus).",
    technologies: ["Go", "TUI", "D-Bus API", "Linux", "Network Management"],
    features: [
      "Gerenciamento de conexões Wi-Fi e Ethernet",
      "Visualização de status em tempo real",
      "Configuração de parâmetros de rede via terminal",
      "Interface intuitiva baseada em terminal"
    ],
    github: "https://github.com/Thiago-Bosco/network-manager-tui",
    highlight: true
  },
  {
    name: "OpsFinder",
    description: "Plataforma que centraliza procedimentos de operação de TI, unificando alertas e documentações críticas. Sistema completo com busca inteligente e controle de permissões desenvolvido com Django.",
    technologies: ["Django 5.1", "Python 3.11", "Go", "MySQL", "Docker", "Nginx"],
    features: [
      "Busca inteligente de procedimentos",
      "Controle de permissões granular",
      "Interface administrativa completa",
      "CRUD no Django Admin"
    ],
    github: "https://github.com/Thiago-Bosco/OpsFinder",
    highlight: true,
    date: "mar/2024"
  }
];

export const education = {
  degree: "Bacharelado em Engenharia de Software",
  institution: "Anhanguera University",
  status: "Cursando"
};

export const certifications = [
  {
    category: "Check Point Software",
    certs: ["Harmony SaaS", "MSSP Certification", "Quantum IoT", "CloudGuard Pre-Sales", "Welcome Partners"]
  },
  {
    category: "Oracle",
    certs: ["HeatWave Explorer"]
  },
  {
    category: "Fortinet",
    certs: ["NSE 2"]
  },
  {
    category: "Rocketseat",
    certs: ["Python Fundamentals", "Java", "Backend Java"]
  },
  {
    category: "Alura",
    certs: ["Django Python", "Python OOP", "Git GitHub", "Python SQL", "Python Scripting"]
  }
];