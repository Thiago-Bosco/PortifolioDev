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
    name: "Network Manager TUI",
    description: "Aplicação de linha de comando em Go com interface de terminal (TUI) para gerenciamento de rede em sistemas Linux. Demonstra expertise em desenvolvimento CLI/TUI em Go e integração com APIs de baixo nível (D-Bus).",
    technologies: ["Go", "TUI", "D-Bus API", "Linux"],
    features: [
      "Gerenciamento de conexões Wi-Fi e Ethernet",
      "Visualização de status em tempo real",
      "Configuração de parâmetros de rede via terminal"
    ],
    github: "https://github.com/Thiago-Bosco/network-manager-tui",
    highlight: true
  },
  {
    name: "OpsFinder",
    description: "Plataforma que centraliza procedimentos de operação de TI, unificando alertas e documentações críticas. Sistema completo com busca inteligente e controle de permissões.",
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