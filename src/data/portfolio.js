import projectInsight from '../assets/project-insight.svg'
import projectOrbit from '../assets/project-orbit.svg'
import projectPipeline from '../assets/project-pipeline.svg'

const env = import.meta.env

export const siteConfig = {
  name: env.VITE_PORTFOLIO_NAME || 'Pratibha Jape',
  primaryRole: env.VITE_PRIMARY_ROLE || 'DevOps Engineer',
  secondaryRole: env.VITE_SECONDARY_ROLE || 'Full-Stack Developer',
  typingRoles: [
    'DevOps Engineer',
    'Full-Stack Developer',
    'Spring Boot & FastAPI Developer',
    'CI/CD Automation Enthusiast',
  ],
  intro:
    'Computer Engineering student building scalable backend services, full-stack web apps, and automated CI/CD workflows with Jenkins, Spring Boot, FastAPI, and Docker.',
  headline:
    'I design dependable DevOps pipelines and ship full-stack features end to end — from React interfaces to Spring Boot and FastAPI services running in containers.',
  location: env.VITE_LOCATION || 'Pune, India',
  email: env.VITE_CONTACT_EMAIL || 'pratibhajape09@gmail.com',
  phone: env.VITE_CONTACT_PHONE || '+91 9834452715',
  githubUsername: env.VITE_GITHUB_USERNAME || 'piujape09',
  githubUrl: env.VITE_GITHUB_URL || 'https://github.com/piujape09',
  linkedinUrl:
    env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/pratibha-jape-80182b245',
  resumeUrl: env.VITE_RESUME_URL || '/Pratibha Jape.pdf',
  calendlyUrl: env.VITE_CALENDLY_URL || '',
  availability: 'Open to DevOps, backend, and full-stack software engineering roles',
  metrics: [
    { value: '2', label: 'Engineering internships across DevOps and full-stack' },
    { value: '87.4%', label: 'B.Tech Computer Engineering aggregate at JSPM RSCOE' },
    { value: '7+', label: 'Industry-recognized certifications earned' },
  ],
}

export const sectionLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: siteConfig.githubUrl, type: 'github' },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, type: 'linkedin' },
  { label: 'Email', href: `mailto:${siteConfig.email}`, type: 'email' },
]

export const aboutContent = {
  summary:
    'I am a Computer Engineering student at JSPM RSCOE with hands-on experience in DevOps, backend, and full-stack development. I have built Jenkins pipelines at PTC, shipped ReactJS + Spring Boot features at Yugazephyr, and enjoy reducing manual operational effort through workflow optimization.',
  careerGoals:
    'I am looking for software engineering opportunities where I can grow across CI/CD automation, scalable backend services, and cloud-native delivery — combining strong fundamentals in Java, Python, and JavaScript with practical DevOps tooling.',
  highlights: [
    'Developed and optimized Jenkins pipelines using Groovy, reducing manual review effort by ~4%.',
    'Built full-stack features with ReactJS, Spring Boot, and REST APIs in Agile teams.',
    'Designed multi-agent AI backends and secure REST APIs with FastAPI, MongoDB, and Spring Security.',
  ],
}

export const skillCategories = [
  {
    title: 'Languages',
    icon: 'tools',
    summary: 'Core programming languages I use day to day.',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 86 },
    ],
  },
  {
    title: 'Frontend',
    icon: 'frontend',
    summary: 'Responsive, component-driven user interfaces.',
    skills: [
      { name: 'ReactJS', level: 88 },
      { name: 'TailwindCSS', level: 85 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    summary: 'Service-oriented APIs with strong fundamentals.',
    skills: [
      { name: 'Spring Boot', level: 86 },
      { name: 'FastAPI', level: 82 },
      { name: 'REST APIs', level: 88 },
      { name: 'Hibernate', level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    summary: 'Relational and document stores for real workloads.',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Oracle', level: 72 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: 'devops',
    summary: 'Automation, containers, and reliable delivery.',
    skills: [
      { name: 'Jenkins', level: 88 },
      { name: 'Docker', level: 85 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Ansible', level: 72 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Linux / CI-CD', level: 84 },
      { name: 'Jira', level: 78 },
    ],
  },
  {
    title: 'Concepts',
    icon: 'cloud',
    summary: 'Architectural ideas I apply in projects.',
    skills: [
      { name: 'Microservices', level: 80 },
      { name: 'Deployment Automation', level: 86 },
      { name: 'Authentication', level: 82 },
    ],
  },
]

export const featuredProjects = [
  {
    id: 'kubetraffic',
    title: 'KubeTraffic – Kubernetes Traffic Simulation & Observability',
    eyebrow: 'DevOps Project',
    image: projectPipeline,
    techStack: ['Kubernetes', 'Helm', 'Kustomize', 'NGINX', 'HPA', 'NetworkPolicy'],
    description:
      'Production-shaped Kubernetes demo that deploys, configures, secures, scales, and self-heals an NGINX workload from a single folder. Covers Deployment, Service, Ingress, ConfigMap/Secret, HPA-driven autoscaling, RBAC with ServiceAccount + Role, and NetworkPolicy isolation — with a load-generator Job that drives the HPA.',
    githubLink: `${siteConfig.githubUrl}/k8s-traffic-simulation`,
    liveLink: '',
  },
  {
    id: 'nova-ai',
    title: 'NOVA – Multi-Agent AI Assistant Platform',
    eyebrow: 'Featured Project',
    image: projectOrbit,
    techStack: ['Python', 'FastAPI', 'MongoDB', 'Docker'],
    description:
      'Multi-agent AI platform with shared memory and secure APIs. Implemented persistent memory using an MCP-style architecture and designed backend services with FastAPI and MongoDB.',
    githubLink: siteConfig.githubUrl,
    liveLink: '',
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    eyebrow: 'Full-Stack Project',
    image: projectPipeline,
    techStack: ['Spring Boot', 'Spring Security', 'MySQL', 'ReactJS', 'JWT'],
    description:
      'Production-grade full-stack app with JWT auth, role-based access (ADMIN/STUDENT), Spring Boot REST APIs and a ReactJS + Vite frontend. Deployed on Vercel (frontend), Render (backend), and TiDB Cloud Serverless (MySQL). Demo credentials: admin / Admin@1234.',
    githubLink: `${siteConfig.githubUrl}/student-management-system`,
    liveLink: 'https://student-management-system-eight-omega.vercel.app',
    backendLink: 'https://sms-backend-2kjt.onrender.com',
  },
  {
    id: 'conference-website',
    title: 'International Conference Website',
    eyebrow: 'Full-Stack Project',
    image: projectInsight,
    techStack: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'Full-stack event platform with an admin dashboard and registration system. Frontend deployed using GitHub Pages.',
    githubLink: siteConfig.githubUrl,
    liveLink: '',
  },
]

export const experienceItems = [
  {
    role: 'DevOps Engineer Intern',
    company: 'PTC',
    duration: '2025 – Present',
    achievements: [
      'Developed and optimized Jenkins pipelines using Groovy for build and deployment workflows.',
      'Automated code review and validation processes, reducing manual effort by 4%.',
      'Enhanced CI/CD monitoring and debugging workflows to improve deployment stability.',
      'Worked with Linux environments and DevOps automation tools for workflow optimization.',
    ],
    techStack: ['Jenkins', 'Groovy', 'Linux', 'CI/CD', 'Git'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Yugazephyr',
    duration: '2023 – 2024',
    achievements: [
      'Developed full-stack features using ReactJS and Spring Boot.',
      'Built and integrated REST APIs for frontend-backend communication.',
      'Worked in Agile teams with Docker, Git, and MySQL.',
    ],
    techStack: ['ReactJS', 'Spring Boot', 'MySQL', 'Docker', 'Postman'],
  },
]

export const certifications = [
  { title: 'OCI DevOps Professional', issuer: 'Oracle', year: '' },
  { title: 'Spring Boot', issuer: 'Scaler', year: '' },
  { title: 'Java', issuer: 'IIT Bombay', year: '' },
  { title: 'Cloud Computing', issuer: 'NPTEL', year: '' },
  { title: 'Young Professional', issuer: 'TCS', year: '' },
  { title: 'Python', issuer: 'IIT Bombay', year: '' },
  { title: 'RDBMS', issuer: 'IIT Bombay', year: '' },
]

export const educationItems = [
  {
    degree: 'B.Tech – Computer Engineering',
    institution: 'JSPM’s RSCOE, Tathawade',
    duration: '2023 – 2026',
    score: '87.4%',
  },
  {
    degree: 'Diploma – Computer Engineering',
    institution: 'Government Polytechnic, Ahilyanagar',
    duration: '2020 – 2023',
    score: '90.80%',
  },
  {
    degree: 'Schooling',
    institution: 'Carmel Convent High School, Ahilyanagar',
    duration: '2010 – 2020',
    score: '93.58%',
  },
]

export const leadershipItems = [
  'CTO & Treasurer – Coding Club',
  'Conducted Java Programming Workshops',
  'Top Performer – SBI CYI Hackathon (Top 1000)',
  'SIH Shortlisted (2×)',
]

export const githubRepoFallback = [
  {
    id: 'repo-fallback-1',
    title: 'jenkins-pipeline-templates',
    eyebrow: 'GitHub Repository',
    image: projectPipeline,
    techStack: ['Jenkins', 'Groovy', 'CI/CD'],
    description:
      'Reusable Jenkins pipeline templates and shared Groovy libraries for build, test, and deployment workflows.',
    githubLink: siteConfig.githubUrl,
    liveLink: '',
  },
  {
    id: 'repo-fallback-2',
    title: 'spring-boot-react-starter',
    eyebrow: 'GitHub Repository',
    image: projectInsight,
    techStack: ['Spring Boot', 'ReactJS', 'MySQL'],
    description:
      'A full-stack starter combining a Spring Boot REST API with a ReactJS frontend and MySQL persistence.',
    githubLink: siteConfig.githubUrl,
    liveLink: '',
  },
]