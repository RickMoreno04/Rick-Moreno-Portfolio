export const profile = {
  name: 'Rick Lorin Moreno',
  role: 'DevOps Engineer',
  statement: 'Building reliable infrastructure. Automating the path from code to cloud.',
  email: 'ricklorinmoreno@gmail.com',
  github: 'https://github.com/RickMoreno04',
  linkedin: 'https://ph.linkedin.com/in/rick-lorin-moreno',
  resume: '/assets/resume.pdf',
}

export const biography =
  'I build dependable delivery workflows and cloud infrastructure with GitHub Actions, Docker, and AWS. My work includes automating deployments, containerizing applications, and connecting systems to observability tools such as Grafana, Prometheus, Loki, and Tempo.'

export const skills = [
  {
    id: 'cloud',
    name: 'Cloud infrastructure',
    label: 'AWS',
    position: [18, 19],
    tools: ['AWS'],
    detail: 'AWS appears across my deployment work and DevOps experience. The current portfolio does not specify individual AWS services beyond ECS.',
  },
  {
    id: 'containers',
    name: 'Containers & orchestration',
    label: 'Docker',
    position: [50, 10],
    tools: ['Docker', 'Docker Compose'],
    detail: 'I have containerized applications and described multi-container deployment work using Docker Compose.',
  },
  {
    id: 'cicd',
    name: 'CI/CD & automation',
    label: 'GitHub Actions',
    position: [82, 19],
    tools: ['GitHub Actions'],
    detail: 'I implemented GitHub Actions pipelines for automated deployments and integrated testing stages into CI workflows.',
  },
  {
    id: 'iac',
    name: 'Infrastructure as Code',
    label: 'No tool listed',
    position: [87, 50],
    tools: [],
    detail: 'No specific Infrastructure as Code tool is listed in the current portfolio.',
  },
  {
    id: 'observability',
    name: 'Monitoring & observability',
    label: 'Grafana',
    position: [82, 81],
    tools: ['Grafana', 'Prometheus', 'Loki', 'Tempo'],
    detail: 'I have set up a monitoring stack with Grafana, Prometheus, Loki, and Tempo.',
  },
  {
    id: 'scripting',
    name: 'Scripting & operating systems',
    label: 'Linux',
    position: [50, 90],
    tools: ['Bash', 'Python', 'Linux'],
    detail: 'Bash, Python, and Linux are listed in the DevOps toolchain documented in my portfolio.',
  },
  {
    id: 'version-control',
    name: 'Version control',
    label: 'Git',
    position: [18, 81],
    tools: ['Git'],
    detail: 'Git is part of the toolchain documented in my current portfolio.',
  },
  {
    id: 'security',
    name: 'Networking & security',
    label: 'Gitleaks',
    position: [13, 50],
    tools: ['Nginx', 'Pre-commit', 'SonarQube', 'OWASP', 'Gitleaks'],
    detail: 'My portfolio lists Nginx, pre-commit hooks, SonarQube, OWASP, and Gitleaks across deployment and security-scanning work.',
  },
]

export const projects = [
  {
    number: '01',
    title: 'CI/CD Pipeline Automation',
    category: 'Delivery automation',
    description: 'A multi-stage GitHub Actions workflow covering build, test, security scanning, and deployment to AWS ECS.',
    stack: ['GitHub Actions', 'Docker', 'AWS ECS', 'YAML'],
    diagram: ['SOURCE', 'BUILD + TEST', 'SECURITY', 'AWS ECS'],
  },
  {
    number: '02',
    title: 'Dockerized Web App Deployment',
    category: 'Containers & cloud',
    description: 'A multi-container application setup with Docker Compose, an Nginx reverse proxy, health checks, and automated image builds.',
    stack: ['Docker', 'Docker Compose', 'Nginx', 'AWS'],
    diagram: ['NGINX', 'WEB APP', 'API SERVICE', 'HEALTH CHECK'],
  },
  {
    number: '03',
    title: 'Monitoring Stack Setup',
    category: 'Observability',
    description: 'An observability stack using Grafana dashboards, Prometheus metrics, Loki log aggregation, and Tempo distributed tracing.',
    stack: ['Grafana', 'Prometheus', 'Loki', 'Tempo'],
    diagram: ['METRICS', 'LOGS', 'TRACES', 'GRAFANA'],
  },
  {
    number: '04',
    title: 'Security Scanning Pipeline',
    category: 'Security & quality',
    description: 'Pre-commit hooks for secret detection and code quality checks, with vulnerability scanning integrated into CI.',
    stack: ['Pre-commit', 'Gitleaks', 'GitHub Actions'],
    diagram: ['COMMIT', 'SECRET SCAN', 'QUALITY CHECK', 'CI'],
  },
]

export const experience = [
  {
    period: '2025 – Present',
    role: 'DevOps Intern → Employee',
    company: 'S.P. Madrid & Associates',
    details: [
      'Implemented CI/CD pipelines with GitHub Actions for automated deployments.',
      'Containerized applications with Docker for consistent environments.',
      'Set up monitoring with Grafana, Prometheus, Loki, and Tempo.',
      'Integrated pre-commit hooks for security scanning and code quality.',
    ],
  },
]

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    credlyUrl: 'https://www.credly.com/badges/966bcbf5-4195-42fe-a777-cb0796df29c4/public_url',
  },
]

export const learningFocus = [
  { title: 'Docker Certification', status: 'Planned' },
  { title: 'GitHub Actions Advanced', status: 'In progress' },
  { title: 'Linux Administration', status: 'Ongoing' },
]
